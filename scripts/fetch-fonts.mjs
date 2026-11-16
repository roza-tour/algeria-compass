// Self-host the site's web fonts.
// Downloads the woff2 files once into public/assets/fonts/ and writes local
// @font-face stylesheets, so no page ever calls fonts.googleapis.com /
// fonts.gstatic.com. Re-run only when a family or weight changes:
//   node scripts/fetch-fonts.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = 'public/assets/fonts';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
// Subsets the six site languages need (en fr it es de ru) + Arabic for Amiri.
const KEEP = new Set(['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'arabic']);

// What to download (variable files where the family has them).
const SOURCES = [
  'family=Cinzel:wght@400..700',
  'family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700',
  'family=Jost:wght@300..700',
  'family=Montserrat:wght@500..700',
  'family=Amiri:wght@400;700',
];

// What each stylesheet declares: [family, style, font-weight descriptor].
// The descriptors reproduce exactly the weights the pages loaded from Google
// before, so nothing changes visually: a weight outside a declared range is
// clamped to the nearest declared one, as the static files did.
//  - fonts.v1.css      every page
//  - fonts-lux.v1.css  /luxury/ only: adds the lighter weights + Montserrat
//                      (ranges are complementary to the core sheet, never overlapping)
//  - fonts-amiri.v1.css  Ramadan pages only
const SHEETS = {
  'fonts.v1.css': [
    ['Cinzel', 'normal', '700'],
    ['Cormorant Garamond', 'normal', '500 700'],
    ['Cormorant Garamond', 'italic', '500'],
    ['Jost', 'normal', '400 700'],
  ],
  'fonts-lux.v1.css': [
    ['Cinzel', 'normal', '400 600'],
    ['Cormorant Garamond', 'normal', '300 499'],
    ['Cormorant Garamond', 'italic', '400'],
    ['Jost', 'normal', '300 399'],
    ['Montserrat', 'normal', '500 700'],
  ],
  'fonts-amiri.v1.css': [
    ['Amiri', 'normal', '400'],
    ['Amiri', 'normal', '700'],
  ],
};

async function get(url, as = 'text', tries = 6) {
  for (let i = 1; ; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(45000) });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return as === 'text' ? await r.text() : Buffer.from(await r.arrayBuffer());
    } catch (e) {
      if (i >= tries) throw new Error(`${url}: ${e.message}`);
      await new Promise((res) => setTimeout(res, 2500 * i));
    }
  }
}

await mkdir(OUT, { recursive: true });
const faces = []; // { family, style, weight, subset, name, range }
let bytes = 0;
for (const query of SOURCES) {
  const css = await get(`https://fonts.googleapis.com/css2?${query}&display=swap`);
  const blocks = [...css.matchAll(/\/\*\s*([a-z-]+)\s*\*\/\s*(@font-face\s*\{[^}]+\})/g)];
  if (!blocks.length) throw new Error('no @font-face blocks for ' + query);
  for (const [, subset, block] of blocks) {
    if (!KEEP.has(subset)) continue;
    const family = block.match(/font-family:\s*'([^']+)'/)[1];
    const style = block.match(/font-style:\s*(\w+)/)[1];
    const weight = block.match(/font-weight:\s*([\d ]+)/)[1].trim();
    const src = block.match(/url\((https:[^)]+\.woff2)\)/)[1];
    const range = block.match(/unicode-range:\s*([^;]+);/)[1];
    const name = `${family.toLowerCase().replace(/\s+/g, '-')}-${style === 'italic' ? 'italic-' : ''}${weight.replace(/\s+/g, '-')}-${subset}.woff2`;
    const buf = await get(src, 'buffer');
    if (buf.subarray(0, 4).toString('latin1') !== 'wOF2') throw new Error('not a woff2 file: ' + src);
    await writeFile(join(OUT, name), buf);
    bytes += buf.length;
    faces.push({ family, style, weight, subset, name, range });
    console.log(`  ${name}  ${(buf.length / 1024).toFixed(1)} KB`);
  }
}

const within = (decl, file) => {
  const [a, b = a] = decl.split(' ').map(Number), [fa, fb = fa] = file.split(' ').map(Number);
  return a >= fa && b <= fb;
};
for (const [sheet, spec] of Object.entries(SHEETS)) {
  const out = [];
  for (const [family, style, decl] of spec) {
    const hit = faces.filter((f) => f.family === family && f.style === style && within(decl, f.weight));
    if (!hit.length) throw new Error(`no file for ${family} ${style} ${decl}`);
    for (const f of hit) out.push(`/* ${family} ${style} ${decl} — ${f.subset} */\n@font-face{font-family:'${family}';font-style:${style};font-weight:${decl};font-display:swap;src:url(/assets/fonts/${f.name}) format('woff2');unicode-range:${f.range}}`);
  }
  await writeFile(join(OUT, sheet), out.join('\n') + '\n');
  console.log(`${sheet}: ${out.length} faces`);
}
console.log(`done: ${faces.length} woff2 files, ${(bytes / 1024).toFixed(0)} KB`);

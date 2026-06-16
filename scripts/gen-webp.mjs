// Perf — generate display-sized WebP for the homepage image contexts that
// Lighthouse flagged as oversized (served full-res, shown small). Tiny files,
// wired via <picture> in StatesStrip / TravellerSlider / TourCard.
//   node scripts/gen-webp.mjs
import { readdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PUB = 'public';
async function make(src, out, width, q) {
  if (!existsSync(src)) { console.warn('missing', src); return false; }
  if (existsSync(out)) return true;
  const img = sharp(src); const m = await img.metadata();
  const pipe = m.width && m.width > width ? img.resize({ width }) : img;
  await pipe.webp({ quality: q }).toFile(out);
  return true;
}
const webpOf = (p, sm) => p.replace(/\.(jpe?g|png)$/i, sm ? '.sm.webp' : '.webp');

let made = 0;

// 1) StatesStrip images (displayed ~228px) -> 460w .sm.webp
const ss = readFileSync('src/components/StatesStrip.astro', 'utf8');
const stateImgs = [...ss.matchAll(/img:\s*'([^']+\.(?:jpe?g|png))'/g)].map(m => m[1]);
for (const web of stateImgs) { if (await make(PUB + web, PUB + webpOf(web, true), 460, 72)) made++; }

// 2) Marquee client photos (film-strip ~210px tall, retina) -> 440w .sm.webp @82
try {
  const sj = JSON.parse(readFileSync('src/data/traveller-slider.json', 'utf8'));
  for (const s of (sj.slider || [])) { if (await make(PUB + s.src, PUB + webpOf(s.src, true), 440, 82)) made++; }
} catch (e) { console.warn('slider', e.message); }

// 3) Tour thumbnails (displayed ~400px) -> same-size .webp (format win)
const TH = 'public/assets/img/thumbs/tours';
if (existsSync(TH)) {
  for (const f of readdirSync(TH)) {
    if (!/\.(jpe?g|png)$/i.test(f)) continue;
    if (await make(path.join(TH, f), path.join(TH, webpOf(f)), 480, 74)) made++;
  }
}

// 4) CivilizationsExplorer photos (displayed ~520px) -> 620w .sm.webp
const cx = readFileSync('src/components/CivilizationsExplorer.astro', 'utf8');
const cxImgs = [...cx.matchAll(/(?:photo|src):?\s*['"]([^'"]+\.(?:jpe?g|png))['"]/g)].map(m => m[1])
  .concat([...cx.matchAll(/src="([^"]+\.(?:jpe?g|png))"/g)].map(m => m[1]));
for (const web of [...new Set(cxImgs)]) { if (await make(PUB + web, PUB + webpOf(web, true), 620, 74)) made++; }

// 5) Sweets photos (strip thumbnails + cards) -> 480w .sm.webp
const SW = 'public/assets/img/sweets';
if (existsSync(SW)) {
  for (const f of readdirSync(SW)) {
    if (!/\.(jpe?g|png)$/i.test(f)) continue;
    if (await make(path.join(SW, f), path.join(SW, webpOf(f, true)), 480, 74)) made++;
  }
}

// 6) Nav logo emblem -> small webp (referenced directly as .webp)
await make('public/assets/img/logo-emblem-gold.png', 'public/assets/img/logo-emblem-gold.webp', 130, 88);

// 6b) Footer / schema brand logo: a 1023×776 PNG (~1.27 MB) shown at 220px on EVERY page.
//     Downscale to 460w and emit a LOSSLESS webp (logo = flat colour + transparency, so
//     lossless webp ~27 KB beats lossy+alpha; PNG fallback ~28 KB). Both replace the 1.27 MB.
{
  const lp = 'public/assets/img/logo-full.png';
  const lw = 'public/assets/img/logo-full.webp';
  const m = await sharp(lp).metadata();
  const base = m.width > 460 ? sharp(lp).resize({ width: 460 }) : sharp(lp);
  if (!existsSync(lw)) { await sharp(await base.clone().png().toBuffer()).webp({ lossless: true }).toFile(lw); made++; }
  if (m.width > 460) { writeFileSync(lp, await base.png({ compressionLevel: 9, palette: true }).toBuffer()); made++; }
}

// 7) Page heroes (shared Hero.astro renders the LCP <img> ~1200px wide).
//    Generate a display-sized .sm.webp for every top-level content JPG so the
//    <picture> source in Hero.astro can serve WebP with a JPG fallback. (SEO Task 8)
const IMG = 'public/assets/img';
for (const f of readdirSync(IMG)) {
  if (!/\.jpe?g$/i.test(f)) continue;
  if (await make(path.join(IMG, f), path.join(IMG, webpOf(f, true)), 1280, 74)) made++;
}

// 8) Tour heroes (tours/<slug>-N.jpg → portrait/landscape LCP on /tours/<slug>/)
const TOURS = 'public/assets/img/tours';
if (existsSync(TOURS)) {
  for (const f of readdirSync(TOURS)) {
    if (!/\.jpe?g$/i.test(f)) continue;
    if (await make(path.join(TOURS, f), path.join(TOURS, webpOf(f, true)), 1280, 74)) made++;
  }
}

console.log('[webp] generated/verified', made, 'display-sized webp (+ logo)');

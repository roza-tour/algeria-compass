// Luxury page art-direction QA: capture desktop + mobile screenshots of the
// hero, one full programme chapter and the pricing card, and audit the
// resolution/weight of every image used on /luxury/.
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://localhost:4321';
const OUT = 'shots/lux';
fs.mkdirSync(OUT, { recursive: true });

let sharp = null;
try { sharp = (await import('sharp')).default; } catch {}

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });

async function prep(page) {
  await page.goto(BASE + '/luxury/', { waitUntil: 'networkidle2', timeout: 45000 });
  // wait for webfonts, then force every scroll-reveal visible for a clean still
  await page.evaluate(async () => {
    try { await document.fonts.ready; } catch {}
    document.querySelectorAll('.reveal, .lp-reveal').forEach(e => e.classList.add('in'));
  });
  await new Promise(r => setTimeout(r, 700));
}

async function shotEl(page, sel, file) {
  const el = await page.$(sel);
  if (!el) { console.log('  ! missing ' + sel); return; }
  await el.evaluate(e => e.scrollIntoView({ block: 'start' }));
  await new Promise(r => setTimeout(r, 350));
  await el.screenshot({ path: `${OUT}/${file}` });
  console.log('  ✓ ' + file);
}

// ---------- DESKTOP ----------
const d = await browser.newPage();
await d.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await prep(d);
await d.screenshot({ path: `${OUT}/desktop-full.png`, fullPage: true });
console.log('✓ desktop-full.png');
await shotEl(d, '.lux-hero', 'desktop-hero.png');
await shotEl(d, '#classical-algeria', 'desktop-chapter.png');
await shotEl(d, '#classical-algeria .lp-pricing', 'desktop-pricing.png');

// audit images from the live DOM
const imgs = await d.evaluate(() => Array.from(document.querySelectorAll('.lux img'))
  .map(i => ({ src: new URL(i.getAttribute('src'), location.href).pathname, w: i.naturalWidth, h: i.naturalHeight })));
await d.close();

// ---------- MOBILE ----------
const m = await browser.newPage();
await m.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await prep(m);
await m.screenshot({ path: `${OUT}/mobile-full.png`, fullPage: true });
console.log('✓ mobile-full.png');
await shotEl(m, '.lux-hero', 'mobile-hero.png');
await shotEl(m, '#classical-algeria', 'mobile-chapter.png');
await shotEl(m, '#classical-algeria .lp-pricing', 'mobile-pricing.png');
await m.close();

await browser.close();

// ---------- IMAGE AUDIT ----------
const seen = new Map();
for (const it of imgs) if (!seen.has(it.src)) seen.set(it.src, it);
const rows = [];
for (const [src, info] of seen) {
  const file = path.join('public', src);
  let bytes = 0, dimW = info.w, dimH = info.h;
  try { bytes = fs.statSync(file).size; } catch {}
  if (sharp) { try { const md = await sharp(file).metadata(); dimW = md.width; dimH = md.height; } catch {} }
  const kb = Math.round(bytes / 1024);
  // crude "weak" heuristic: small on disk or low resolution for a full-bleed/cinematic use
  const weak = kb < 90 || (dimW && dimW < 1100) || (dimH && dimH < 760);
  rows.push({ src, w: dimW, h: dimH, kb, weak });
}
rows.sort((a, b) => (a.weak === b.weak ? a.kb - b.kb : (a.weak ? -1 : 1)));
fs.writeFileSync(`${OUT}/image-audit.json`, JSON.stringify(rows, null, 2));
console.log('\nIMAGE AUDIT (flagged first):');
for (const r of rows) console.log(`  ${r.weak ? 'WEAK' : ' ok '}  ${String(r.kb).padStart(5)}kb  ${String(r.w)+'x'+r.h}  ${r.src}`);
console.log(`\nsharp:${sharp ? 'yes' : 'no'}  images:${rows.length}  weak:${rows.filter(r => r.weak).length}`);

// Phase H — process new-logo.png (already transparent gold emblem) into the nav
// brand mark + favicons. No black knockout needed — the source has a transparent
// background (verified: corner alpha = 0).
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const SRC = 'new-logo.png';
const OUT = 'public/assets/img';
const GREEN = { r: 11, g: 61, b: 46, alpha: 1 }; // #0B3D2E brand green

// 1) tight, transparent emblem for the nav (trim transparent padding)
const trimmed = await sharp(SRC).trim().toBuffer({ resolveWithObject: true });
console.log('[logo] trimmed emblem', trimmed.info.width + 'x' + trimmed.info.height);
await sharp(trimmed.data).resize({ height: 256, withoutEnlargement: true })
  .png().toFile(`${OUT}/logo-emblem-gold.png`);

// helper: gold emblem centred on a green rounded tile, at `size`
async function favicon(size, file) {
  const pad = Math.round(size * 0.14);
  const inner = size - pad * 2;
  const emblem = await sharp(trimmed.data).resize({ width: inner, height: inner, fit: 'contain', background: { r:0,g:0,b:0,alpha:0 } }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: GREEN } })
    .composite([{ input: emblem, gravity: 'center' }])
    .png().toBuffer().then(buf => { if (file) writeFileSync(`${OUT}/${file}`, buf); return buf; });
}

await favicon(512, 'favicon-512.png');
await favicon(180, 'favicon-180.png');
const png32 = await favicon(32, 'favicon-32.png');

// 2) favicon.ico — wrap the 32x32 PNG in a minimal ICO container (PNG-in-ICO)
const ico = Buffer.alloc(22 + png32.length);
ico.writeUInt16LE(0, 0);            // reserved
ico.writeUInt16LE(1, 2);            // type: icon
ico.writeUInt16LE(1, 4);            // count
ico.writeUInt8(32, 6);              // width
ico.writeUInt8(32, 7);              // height
ico.writeUInt8(0, 8);              // palette
ico.writeUInt8(0, 9);              // reserved
ico.writeUInt16LE(1, 10);          // planes
ico.writeUInt16LE(32, 12);         // bpp
ico.writeUInt32LE(png32.length, 14); // size
ico.writeUInt32LE(22, 18);         // offset
png32.copy(ico, 22);
writeFileSync(`${OUT}/favicon.ico`, ico);

console.log('[logo] wrote logo-emblem-gold.png + favicons (32/180/512 + .ico)');

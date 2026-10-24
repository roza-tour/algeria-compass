// Social-preview images: 1.91:1 crops (the ratio WhatsApp, Facebook, LinkedIn
// and X all lay out a large link card at) written to public/assets/img/og/.
//   node scripts/gen-og.mjs
//
// Every source was checked by eye for identifiable people first -- several of
// the library's best landscape files show clients, and those must not travel
// as link previews (owner rule on photo integrity). Sources are ~736px wide,
// so each card is cut at its source width rather than upscaled to 1200: a
// sharp 736x385 beats a soft 1200x630, and both clear every platform's minimum.
import { existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';
import { OG_SOURCES } from '../src/lib/og-image.ts';

const OUT = 'public/assets/img/og';
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

let made = 0;
for (const [key, src] of Object.entries(OG_SOURCES)) {
  const out = `${OUT}/${key}.jpg`;
  if (existsSync(out)) continue;
  const m = await sharp('public' + src).metadata();
  // Facebook drops to a small side thumbnail below 600x315, so a source narrower
  // than that is lifted to 630 -- a mild upscale, against losing the large card.
  const w = Math.max(630, Math.min(1200, m.width));
  await sharp('public' + src)
    .resize(w, Math.round(w / 1.91), { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(out);
  made++;
}
console.log(`[og] ${made} generated, ${Object.keys(OG_SOURCES).length} total`);

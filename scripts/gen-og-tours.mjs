// Link-preview cards for the tour pages: 1.91:1 crops of each tour's hero
// photograph, written to public/assets/img/og/tours/<hero>.jpg.
//   node scripts/gen-og-tours.mjs
//
// The tour pages used their hero as the link preview, and most heroes are
// portrait (500x750 and the like): WhatsApp, Facebook and LinkedIn crop a
// portrait image to a thin strip or fall back to a small side thumbnail. The
// heroes were already checked for identifiable clients when they were chosen
// (tour-visuals.ts), so the same photographs are used here.
import { existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';
import { TOUR_VISUALS } from '../src/data/tour-visuals.ts';

const OUT = 'public/assets/img/og/tours';
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

let made = 0, skipped = 0;
for (const v of Object.values(TOUR_VISUALS)) {
  if (!v || !v.hero) continue;
  const src = `public/assets/img/tours/${v.hero}`;
  const out = `${OUT}/${v.hero.replace(/\.(png|webp|jpe?g)$/i, '.jpg')}`;
  if (!existsSync(src)) { skipped++; continue; }
  if (existsSync(out)) continue;
  const m = await sharp(src).metadata();
  const w = Math.max(630, Math.min(1200, m.width || 1200));
  await sharp(src)
    .resize(w, Math.round(w / 1.91), { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  made++;
}
console.log(`[og-tours] ${made} generated, ${skipped} heroes missing`);

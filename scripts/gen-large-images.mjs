// Generate high-quality LARGE variants for images that are displayed big
// (heroes, full-bleed banners, wide article images).
//
// Why this exists: the source photos are modest (~700-760px wide), and
// gen-webp.mjs produced 460px ".sm.webp" thumbnails that were then served to
// EVERY viewport — including a full-bleed hero — so a 460px image was stretched
// across a 1600px+ screen. That is what made the hero look soft and blocky.
//
// This script writes a ".lg.webp" beside each affected source: upscaled with
// Lanczos3 (a far better resampler than the browser's default stretch) to 2x the
// intrinsic width, capped at 1600px, then lightly unsharp-masked to restore the
// edge definition upscaling costs. It cannot invent detail the original never
// had, but it removes the mushy browser-upscale look.
//
// Usage: node scripts/gen-large-images.mjs
import { readFileSync, existsSync, statSync } from 'node:fs';
import sharp from 'sharp';

const MAX_W = 1600;
const QUALITY = 70;   // tuned: keeps heroes well under ~300 KB

// Images the build shows at >= 1000 CSS px. Kept explicit so we never bulk-
// upscale the whole library (which would bloat the repo for no visible gain).
const TARGETS = [
  'algiers-white-city-aerial.jpg',      // homepage hero (was served at 460px)
  'algiers-boulevards-aerial.jpg',
  'sahara-dunes-tadrart.jpg',
  'sahara-plateau-sunset.jpg',
  'casbah-old-city-mosque.jpg',
  'algiers-great-mosque.jpg',
  'setif-winter-street.jpg',
  'ghardaia-ksar-lane.jpg',
  'ghardaia-mzab-carpets.jpg',
  'bou-saada-palm-grove.jpg',
  'constantine-bridge-waterfall.jpg',
  'constantine-sidi-mcid-bridge.jpg',
  'tassili-dune-rocks.jpg',
  'tlemcen-andalusian-gallery.jpg',
  'timgad-trajan-arch.jpg',
  'timgad-theatre.jpg',
  'djanet-guelta-palms.jpg',
  'sahara-camp-sunset.jpg',
  'oran-bay-santa-cruz.jpg',
  'ghardaia-mzab-panorama.jpg',
  'bou-saada-town-aerial.jpg',
];

const DIR = 'public/assets/img/';
let made = 0, skipped = 0;

for (const name of TARGETS) {
  const src = DIR + name;
  if (!existsSync(src)) { console.log(`  skip (missing): ${name}`); skipped++; continue; }

  const out = DIR + name.replace(/\.(jpe?g|png)$/i, '.lg.webp');
  const meta = await sharp(src).metadata();
  if (!meta.width) { skipped++; continue; }

  const targetW = Math.min(MAX_W, meta.width * 2);

  await sharp(src)
    .resize({ width: targetW, kernel: sharp.kernel.lanczos3, withoutEnlargement: false })
    // gentle unsharp mask — restores edges softened by the upscale
    .sharpen({ sigma: 1.1, m1: 0.6, m2: 2.2 })
    .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
    .toFile(out);

  const kb = (statSync(out).size / 1024).toFixed(0);
  console.log(`  ${name}  ${meta.width}px -> ${targetW}px  (${kb} KB)`);
  made++;
}

console.log(`\n[gen-large-images] wrote ${made} .lg.webp files, skipped ${skipped}.`);

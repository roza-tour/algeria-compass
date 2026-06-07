// Phase A — one-off: ingest the client image library into the image pipeline.
// Source: .tmp-images/<folder>/  (extracted from algeria-compass-images.zip)
// Dest:   public/assets/img/<slug>/        (full, web-optimized — used by heroes & galleries)
//         public/assets/img/tours/<slug>-N.jpg + thumbs/tours/<slug>-N.jpg (tour galleries)
//
// EXCLUSIONS (flagged, verified by eye + UNESCO reference — see report):
//   beni-hammad-03  -> NOT Beni Hammad (red rammed-earth tower w/ arched base = El Mansourah, Tlemcen)
//   beni-hammad-06  -> NOT the ancient ruins (ornate modern tower w/ lion statues + glass skyscraper)
//   mostaganem-02   -> unidentifiable garden pyramid-fountain, not a Mostaganem landmark
// REROUTE: msila-bousaada-03 IS the Qal'a of Beni Hammad minaret -> beni-hammad/beni-hammad-07.jpg
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SRC = '.tmp-images';
const IMG = 'public/assets/img';
const ensure = d => { if (!existsSync(d)) mkdirSync(d, { recursive: true }); };
const full  = (i,o) => sharp(i).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(o);
const thumb = (i,o) => sharp(i).rotate().resize({ width: 400, height: 400, fit: 'cover' }).jpeg({ quality: 78, mozjpeg: true }).toFile(o);

// folder -> dest slug ; skip list ; (reroute handled separately)
const SETS = [
  { folder: 'annaba',          slug: 'annaba',          skip: [] },
  { folder: 'blida',           slug: 'blida',           skip: [] },
  { folder: 'mostaganem',      slug: 'mostaganem',      skip: ['mostaganem-02'] },
  { folder: 'timimoun',        slug: 'timimoun',        skip: [] },
  { folder: 'msila-bousaada',  slug: 'msila-bousaada',  skip: ['msila-bousaada-03'] }, // 03 -> beni-hammad
  { folder: 'beni-hammad',     slug: 'beni-hammad',     skip: ['beni-hammad-03','beni-hammad-06'] },
  { folder: 'algeria-cuisine', slug: 'cuisine',         skip: [] },
];

// Tour-gallery copies: dest tour slug -> ordered [sourceFolder, sourceFile]
const TOURS = {
  timimoun:  ['06','09','10','07','13','02','05','11','01','03'].map(n => ['timimoun', `timimoun-${n}.jpg`]),
  mostaganem:['01','03','05','06','11','12','07','04','10','08','09','13'].map(n => ['mostaganem', `mostaganem-${n}.jpg`]),
  // extend existing bousaada-1..13 tour gallery with the richer new Bou Saâda photos
  bousaada:  [['msila-bousaada','msila-bousaada-07.jpg'],['msila-bousaada','msila-bousaada-01.jpg'],['msila-bousaada','msila-bousaada-04.jpg'],['msila-bousaada','msila-bousaada-02.jpg'],['msila-bousaada','msila-bousaada-05.jpg'],['msila-bousaada','msila-bousaada-06.jpg']],
};
const BOUSAADA_START = 14; // existing tour images go up to bousaada-13

const jobs = [];

// 1) full images into subfolders
for (const { folder, slug, skip } of SETS) {
  const dir = join(IMG, slug); ensure(dir);
  for (const f of readdirSync(join(SRC, folder)).filter(f => /\.jpg$/i.test(f))) {
    if (skip.includes(f.replace(/\.jpg$/i,''))) continue;
    jobs.push(full(join(SRC, folder, f), join(dir, f)));
  }
}

// 2) reroute the Beni Hammad minaret mislabeled as msila-bousaada-03
ensure(join(IMG, 'beni-hammad'));
jobs.push(full(join(SRC, 'msila-bousaada', 'msila-bousaada-03.jpg'), join(IMG, 'beni-hammad', 'beni-hammad-07.jpg')));

// 3) tour galleries (full + square thumb)
ensure(join(IMG, 'tours')); ensure(join(IMG, 'thumbs', 'tours'));
for (const [slug, list] of Object.entries(TOURS)) {
  list.forEach(([folder, file], idx) => {
    const n = slug === 'bousaada' ? BOUSAADA_START + idx : idx + 1;
    const name = `${slug}-${n}.jpg`;
    jobs.push(full(join(SRC, folder, file), join(IMG, 'tours', name)));
    jobs.push(thumb(join(SRC, folder, file), join(IMG, 'thumbs', 'tours', name)));
  });
}

await Promise.all(jobs);
console.log(`[place] done — ${jobs.length} image operations`);

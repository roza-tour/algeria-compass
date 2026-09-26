// Make a newly added photograph "just work".
//
// Tour galleries are built by globbing public/assets/img/tours/<place>-<n>.jpg,
// but they RENDER from public/assets/img/thumbs/tours/<same name>. Nothing
// generated that thumbnail automatically — it came from a one-off import
// script — so dropping a new photo into the tours folder produced a gallery
// entry pointing at a file that did not exist: a broken image on a live tour
// page, with nothing in the build to warn about it.
//
// This closes that gap. It runs before every build and, for any tour photo
// missing its thumbnail, makes one. It also generates the .sm.webp sibling
// that Hero.astro and the galleries look for, so a new hero image is never
// served as a broken <picture> source.
//
// Existing files are never touched or re-encoded — it only fills in what is
// missing, so it costs nothing on a normal build.
//
//   node scripts/gen-thumbs.mjs
import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const TOURS = 'public/assets/img/tours';
const THUMBS = 'public/assets/img/thumbs/tours';

// The gallery renders these at 400x400 with object-fit, so a square crop is
// what the markup already promises (width="400" height="400").
const THUMB_PX = 400;

// Client photographs get a display-sized .sm.webp sibling — but only the ones
// actually referenced somewhere in src/. There are 556 of them and a handful
// are in use; generating the rest added 53 MB of files nothing ever requests,
// to a repository that is also the live document root.
//
// Note: scripts/gen-webp.mjs already owns the slider's client photos and
// encodes them at 440px for a 210px-tall film strip. Because this script skips
// any sibling that already exists, it never re-encodes those — do not "clean
// and regenerate", or those get replaced with 1000px files serving a thumbnail.
const WEBP_DIR = 'public/assets/img/clients';
const WEBP_PX = 1000;

let thumbs = 0, webps = 0, failed = 0;

async function makeThumb(src, out) {
  try {
    // .rotate() applies EXIF orientation: phone photos are often stored sideways
    // with a flag, and the re-encoded file drops the flag.
    await sharp(src)
      .rotate()
      .resize(THUMB_PX, THUMB_PX, { fit: 'cover', position: 'attention' })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(out);
    thumbs++;
  } catch (e) {
    console.warn(`[thumbs] could not process ${src}: ${e.message}`);
    failed++;
  }
}

async function makeWebp(src, out) {
  try {
    const img = sharp(src).rotate();   // honour EXIF orientation, as above
    const meta = await img.metadata();
    const pipe = meta.width && meta.width > WEBP_PX ? img.resize({ width: WEBP_PX }) : img;
    await pipe.webp({ quality: 78 }).toFile(out);
    webps++;
  } catch (e) {
    console.warn(`[thumbs] could not process ${src}: ${e.message}`);
    failed++;
  }
}

// 1. Tour photos -> square thumbnails
if (existsSync(TOURS)) {
  if (!existsSync(THUMBS)) mkdirSync(THUMBS, { recursive: true });
  for (const f of readdirSync(TOURS)) {
    if (!/\.jpe?g$/i.test(f)) continue;
    const out = path.join(THUMBS, f);
    if (existsSync(out)) continue;
    await makeThumb(path.join(TOURS, f), out);
  }
}

// 2. Referenced client photos -> .sm.webp siblings
function referencedClientPhotos() {
  const found = new Set();
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!/\.(astro|ts|tsx|js|mjs|json|md)$/i.test(e.name)) continue;
      const text = readFileSync(p, 'utf8');
      for (const m of text.matchAll(/\/assets\/img\/clients\/([A-Za-z0-9_\-]+\.(?:jpe?g|png))/g)) {
        found.add(m[1]);
      }
    }
  };
  walk('src');
  return found;
}

if (existsSync(WEBP_DIR)) {
  for (const f of referencedClientPhotos()) {
    const src = path.join(WEBP_DIR, f);
    if (!existsSync(src)) { console.warn(`[thumbs] referenced but missing: ${f}`); failed++; continue; }
    const out = path.join(WEBP_DIR, f.replace(/\.(jpe?g|png)$/i, '.sm.webp'));
    if (existsSync(out)) continue;
    await makeWebp(src, out);
  }
}

if (thumbs || webps || failed) {
  console.log(`[thumbs] generated ${thumbs} thumbnail(s), ${webps} webp sibling(s)` +
    (failed ? `, ${failed} failed` : ''));
}

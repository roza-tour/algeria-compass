// Casing-safe production build wrapper.
//
// On Windows the filesystem is case-insensitive but Astro/Vite key their
// internal compile-metadata cache by the *exact* path string. If the build is
// launched from a directory whose casing differs from the real on-disk casing
// (e.g. `C:\Users\...\desktop\...` vs the real `...\Desktop\...`), Vite stores
// each page's metadata under one casing and then looks up its virtual CSS
// module under the other. The lookup misses, so every page's CSS is silently
// dropped from the HTML <head> — the site builds "successfully" but renders
// completely unstyled.
//
// `fs.realpathSync.native()` resolves the current working directory to its true
// on-disk casing; we chdir to that before invoking Astro so the metadata keys
// always match. This makes the build correct no matter how the folder was
// entered.
import { realpathSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const realCwd = realpathSync.native(process.cwd());
if (realCwd !== process.cwd()) {
  console.log(`[build] normalizing cwd casing:\n  was: ${process.cwd()}\n  now: ${realCwd}`);
}

// Fill in any missing derivative images first (thumbnails for newly added tour
// photos, .sm.webp siblings for client photos). A photograph dropped into
// public/assets/img/tours/ otherwise renders as a broken gallery tile, because
// the gallery points at a thumbnail that was never generated.
const thumbScript = join(dirname(fileURLToPath(import.meta.url)), 'gen-thumbs.mjs');
const thumbs = spawnSync(process.execPath, [thumbScript], { cwd: realCwd, stdio: 'inherit' });
if (thumbs.status !== 0) {
  console.error('[build] image preparation failed — aborting before Astro build');
  process.exit(thumbs.status ?? 1);
}

const astroBin = join(dirname(fileURLToPath(import.meta.url)), '..', 'node_modules', 'astro', 'astro.js');
const result = spawnSync(process.execPath, [astroBin, 'build'], {
  cwd: realCwd,
  stdio: 'inherit',
});
process.exit(result.status ?? 1);

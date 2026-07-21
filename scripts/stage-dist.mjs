// Stage the built site into the repo ROOT.
//
// The cPanel document root for algeriacompass.com IS the git repo root
// (public_html/algeriacompass.com), and the site is served directly after
// `git pull origin main`. So the production files (index.html, assets/, the
// route folders, .htaccess, ...) must live at the top level of the repo, not
// inside dist/. Astro always builds into dist/, so this script mirrors the
// fresh dist/ output up into the repo root.
//
// Usage: `npm run deploy` (= build + stage), then commit & push.
//
// Hashed asset filenames change every build, so before copying we PRUNE the
// old hashed bundles (top-level assets/*.css|*.js) from the docroot; otherwise
// they accumulate forever and get committed on every deploy. Images and other
// static files under assets/ subdirs (assets/img, assets/fonts) are untouched.
import { cpSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

if (!existsSync(dist)) {
  console.error('[stage] dist/ not found — run `npm run build` first.');
  process.exit(1);
}

// prune stale hashed bundles (non-recursive: only files directly in ./assets)
const assetsDir = join(root, 'assets');
let pruned = 0;
if (existsSync(assetsDir)) {
  for (const e of readdirSync(assetsDir, { withFileTypes: true })) {
    if (e.isFile() && /\.(css|js)$/.test(e.name)) { unlinkSync(join(assetsDir, e.name)); pruned++; }
  }
}
if (pruned) console.log(`[stage] pruned ${pruned} stale hashed asset(s) from ./assets`);

// recursive copy of dist/* (incl. dotfiles like .htaccess) into the repo root
cpSync(dist, root, { recursive: true });
console.log('[stage] copied dist/ -> repo root (production files now at docroot top level)');

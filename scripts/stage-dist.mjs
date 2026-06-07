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
// Note: this copies/overwrites; it does NOT delete. Hashed asset filenames
// change between builds, so old assets/*.css|*.js can accumulate at the root.
// Periodically prune stale hashed files from ./assets if they pile up.
import { cpSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

if (!existsSync(dist)) {
  console.error('[stage] dist/ not found — run `npm run build` first.');
  process.exit(1);
}

// recursive copy of dist/* (incl. dotfiles like .htaccess) into the repo root
cpSync(dist, root, { recursive: true });
console.log('[stage] copied dist/ -> repo root (production files now at docroot top level)');

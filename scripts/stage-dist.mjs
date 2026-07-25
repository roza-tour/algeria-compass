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
import { cpSync, existsSync, readdirSync, rmSync, unlinkSync } from 'node:fs';
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

// Prune route folders that the build no longer produces. Copying alone left
// deleted pages live in the docroot forever (that is how the retired
// /knowledge/ hubs kept serving long after their sources were gone). A folder
// is treated as build output only if it contains an index.html somewhere
// beneath it, so hand-maintained directories are never at risk.
const SKIP = new Set(['dist', 'node_modules', 'src', 'scripts', 'public', 'assets', 'data',
  '.git', '.astro', '.github', 'design_handoff_algeria_compass']);

const hasIndex = (dir) => readdirSync(dir, { withFileTypes: true }).some(
  e => (e.isFile() && e.name === 'index.html') || (e.isDirectory() && hasIndex(join(dir, e.name)))
);

let removed = 0;
function prune(relDir) {
  const abs = join(root, relDir);
  for (const e of readdirSync(abs, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const rel = relDir ? join(relDir, e.name) : e.name;
    if (!relDir && SKIP.has(e.name)) continue;
    const here = join(root, rel);
    if (!hasIndex(here)) continue;              // not build output — leave alone
    if (existsSync(join(dist, rel))) prune(rel); // still built: recurse into it
    else { rmSync(here, { recursive: true, force: true }); removed++; console.log(`[stage] removed stale route /${rel}/`); }
  }
}
prune('');
if (removed) console.log(`[stage] pruned ${removed} route folder(s) no longer produced by the build`);

// recursive copy of dist/* (incl. dotfiles like .htaccess) into the repo root
cpSync(dist, root, { recursive: true });
console.log('[stage] copied dist/ -> repo root (production files now at docroot top level)');

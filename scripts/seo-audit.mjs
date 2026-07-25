// Algeria Compass — indexation & SEO guard.
//
// Crawls the BUILT site in dist/ and fails (exit 1) on anything that would
// hurt indexing: broken internal links, missing/mismatched canonicals, broken
// hreflang pairs, sitemap drift, orphan pages, duplicate titles/descriptions,
// missing or duplicated H1s, broken images.
//
// Usage:  npm run build && node scripts/seo-audit.mjs
// Add --strict to also fail on soft warnings (long titles/descriptions).
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const SITE = 'https://algeriacompass.com';
const STRICT = process.argv.includes('--strict');
const TITLE_MAX = 65;
const DESC_MAX = 160;

if (!existsSync(DIST)) {
  console.error('[seo-audit] dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const decode = (s) => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
  .replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// ---- collect built files ----
const htmlFiles = [];
const allFiles = new Set();
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else {
      allFiles.add('/' + relative(DIST, p).replace(/\\/g, '/'));
      if (e.name.endsWith('.html')) htmlFiles.push(p);
    }
  }
})(DIST);

const urlOf = (f) => ('/' + relative(DIST, f).replace(/\\/g, '/')).replace(/index\.html$/, '');
const built = new Set(htmlFiles.map(urlOf));

const errors = [];   // block the build
const warnings = []; // informational unless --strict
const titles = new Map();
const descs = new Map();
const linked = new Set();
const info = {};

for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');
  const url = urlOf(f);
  const one = (re) => { const m = html.match(re); return m ? m[1] : null; };

  const title = decode(one(/<title>([\s\S]*?)<\/title>/) || '');
  const desc = decode(one(/<meta name="description" content="([^"]*)"/) || '');
  const canonical = one(/<link rel="canonical" href="([^"]*)"/);
  const robots = one(/<meta name="robots" content="([^"]*)"/) || '';
  const noindex = /noindex/i.test(robots);
  info[url] = { noindex };

  // headings
  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  if (!noindex && h1s === 0) errors.push(`${url}: no <h1>`);
  if (h1s > 1) errors.push(`${url}: ${h1s} <h1> elements (expected 1)`);

  if (!noindex) {
    if (!title) errors.push(`${url}: missing <title>`);
    else {
      if (titles.has(title)) errors.push(`duplicate title: "${title}" on ${titles.get(title)} and ${url}`);
      else titles.set(title, url);
      if (title.length > TITLE_MAX) warnings.push(`${url}: title ${title.length} chars (>${TITLE_MAX})`);
    }
    if (!desc) errors.push(`${url}: missing meta description`);
    else {
      if (descs.has(desc)) errors.push(`duplicate description on ${descs.get(desc)} and ${url}`);
      else descs.set(desc, url);
      if (desc.length > DESC_MAX) warnings.push(`${url}: description ${desc.length} chars (>${DESC_MAX})`);
    }
    if (!canonical) errors.push(`${url}: missing canonical`);
    else if (canonical !== SITE + url) errors.push(`${url}: canonical points to ${canonical}`);
  }

  // hreflang must be reciprocal and resolve
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  if (alts.length) {
    if (!alts.some(([, , href]) => href === SITE + url) && !alts.some((m) => m[2] === SITE + url))
      errors.push(`${url}: hreflang set has no self-reference`);
    for (const m of alts) {
      const href = m[2];
      if (href.startsWith(SITE)) {
        const p = href.slice(SITE.length);
        if (!built.has(p)) errors.push(`${url}: hreflang "${m[1]}" -> missing page ${p}`);
      }
    }
  }

  // internal links must resolve, with a trailing slash (site uses trailingSlash:'always')
  for (const m of html.matchAll(/<a [^>]*href="([^"#?]+)/g)) {
    const h = m[1];
    if (!h.startsWith('/') || h.startsWith('//')) continue;
    linked.add(h);
    if (built.has(h) || allFiles.has(h)) continue;
    if (/\.[a-z0-9]{2,5}$/i.test(h)) { errors.push(`${url}: link to missing file ${h}`); continue; }
    if (!h.endsWith('/') && built.has(h + '/')) errors.push(`${url}: link ${h} misses the trailing slash (causes a 301 hop)`);
    else errors.push(`${url}: broken internal link ${h}`);
  }

  for (const m of html.matchAll(/<img [^>]*src="(\/[^"]+)"/g))
    if (!allFiles.has(m[1])) errors.push(`${url}: <img> src missing ${m[1]}`);
}

// ---- sitemap must match the indexable set ----
const smPath = join(DIST, 'sitemap.xml');
if (existsSync(smPath)) {
  const sm = readFileSync(smPath, 'utf8');
  const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ''));
  const smSet = new Set(smUrls);
  for (const u of smUrls) {
    if (!built.has(u)) errors.push(`sitemap lists a page that does not exist: ${u}`);
    else if (info[u]?.noindex) errors.push(`sitemap lists a noindex page: ${u}`);
  }
  const skip = /^\/(404\.html|404\/|search\/|sitemap\/)$/;
  for (const u of built) {
    if (info[u]?.noindex || smSet.has(u) || skip.test(u)) continue;
    if (!linked.has(u) && !linked.has(u.replace(/\/$/, '')))
      errors.push(`orphan page (not in sitemap, not linked): ${u}`);
    else warnings.push(`indexable page missing from sitemap: ${u}`);
  }
} else warnings.push('dist/sitemap.xml not found');

// ---- report ----
console.log(`[seo-audit] ${htmlFiles.length} pages | ${Object.values(info).filter((i) => !i.noindex).length} indexable`);
if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  warnings.slice(0, 40).forEach((w) => console.log('  ! ' + w));
  if (warnings.length > 40) console.log(`  ... +${warnings.length - 40} more`);
}
if (errors.length) {
  console.log(`\nERRORS (${errors.length}):`);
  errors.slice(0, 60).forEach((e) => console.log('  x ' + e));
  if (errors.length > 60) console.log(`  ... +${errors.length - 60} more`);
  console.log('\n[seo-audit] FAILED — fix the errors above before deploying.');
  process.exit(1);
}
if (STRICT && warnings.length) {
  console.log('\n[seo-audit] FAILED (--strict: warnings treated as errors).');
  process.exit(1);
}
console.log('\n[seo-audit] PASSED — indexation is clean.');

// Site-wide audit of the built pages in dist/: broken internal links and
// fragments, missing/long/duplicate titles and descriptions, H1 count,
// canonicals, hreflang targets, JSON-LD that does not parse, images without
// alt or dimensions, og:image targets, and indexable pages nothing links to.
//   npm run build && node scripts/site-audit.mjs
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';
const D = 'dist', SITE = 'https://algeriacompass.com';
const pages = []; (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) pages.push(p); } })(D);
const urlOf = p => '/' + p.slice(D.length + 1).split(sep).join('/').replace(/index\.html$/, '');
const exists = u => { u = decodeURI(u.split('#')[0].split('?')[0]); if (!u.startsWith('/')) return true; const f = join(D, u); if (existsSync(f) && statSync(f).isFile()) return true; return existsSync(join(f, 'index.html')); };
const R = { broken: new Map(), frag: [], noTitle: [], longTitle: [], noDesc: [], longDesc: [], shortDesc: [], h1: [], canon: [], hreflang: [], jsonld: [], noAlt: new Map(), noDims: new Map(), og: [], dupTitle: new Map(), dupDesc: new Map() };
const inbound = new Map(); const indexable = new Set();
for (const p of pages) {
  const h = readFileSync(p, 'utf8'); const u = urlOf(p);
  const noindex = /<meta name="robots" content="[^"]*noindex/i.test(h);
  if (!noindex) indexable.add(u);
  const ids = new Set([...h.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  for (const m of h.matchAll(/\s(href|src)="([^"]+)"/g)) {
    const v = m[2].replace(/&amp;/g, '&');
    if (v.startsWith('#')) { if (v.length > 1 && !ids.has(v.slice(1))) R.frag.push(u + ' ' + v); continue; }
    let path = null; if (v.startsWith(SITE)) path = v.slice(SITE.length) || '/'; else if (v.startsWith('/') && !v.startsWith('//')) path = v;
    if (path === null) continue;
    if (!exists(path)) { const k = path.split('#')[0]; if (!R.broken.has(k)) R.broken.set(k, []); R.broken.get(k).push(u); }
    else if (m[1] === 'href') { const k = path.split('#')[0].split('?')[0]; if (k !== u) inbound.set(k, (inbound.get(k) || 0) + 1); }
  }
  if (noindex) continue;
  const t = (h.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!t) R.noTitle.push(u); else { if (t.length > 65) R.longTitle.push(t.length + ' ' + u); R.dupTitle.set(t, [...(R.dupTitle.get(t) || []), u]); }
  const d = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!d) R.noDesc.push(u); else { if (d.length > 165) R.longDesc.push(d.length + ' ' + u); if (d.length < 70) R.shortDesc.push(d.length + ' ' + u); R.dupDesc.set(d, [...(R.dupDesc.get(d) || []), u]); }
  const h1 = (h.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) R.h1.push(h1 + ' ' + u);
  const c = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]; if (!c || c !== SITE + u) R.canon.push(u + ' -> ' + c);
  for (const m of h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) { if (!exists(m[2].replace(SITE, '') || '/')) R.hreflang.push(u + ' ' + m[1] + ' ' + m[2]); }
  for (const m of h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch (e) { R.jsonld.push(u + ' ' + e.message.slice(0, 60)); } }
  for (const m of h.matchAll(/<img\b[^>]*>/g)) { const tag = m[0]; if (!/\salt=/.test(tag)) R.noAlt.set(u, (R.noAlt.get(u) || 0) + 1); if (!/\swidth=/.test(tag) || !/\sheight=/.test(tag)) R.noDims.set(u, (R.noDims.get(u) || 0) + 1); }
  const og = (h.match(/<meta property="og:image" content="([^"]+)"/) || [])[1]; if (!og || !exists(og.replace(SITE, ''))) R.og.push(u + ' ' + og);
}
const dup = m => [...m].filter(([k, v]) => v.length > 1).map(([k, v]) => v.length + 'x "' + k.slice(0, 70) + '" ' + v.slice(0, 3).join(' '));
const orphans = [...indexable].filter(u => !inbound.get(u) && u !== '/');
const out = {
  pages: pages.length, indexable: indexable.size,
  broken: [...R.broken].map(([k, v]) => k + '  <- ' + v.length + ' pages e.g. ' + v[0]),
  fragCount: R.frag.length, frag: R.frag.slice(0, 15),
  noTitle: R.noTitle, longTitle: R.longTitle.length, longTitleEx: R.longTitle.slice(0, 8),
  noDesc: R.noDesc, longDesc: R.longDesc, shortDesc: R.shortDesc, h1: R.h1,
  canonCount: R.canon.length, canon: R.canon.slice(0, 10),
  hreflangCount: R.hreflang.length, hreflang: R.hreflang.slice(0, 10),
  jsonld: R.jsonld, noAlt: [...R.noAlt].slice(0, 10), noDims: [...R.noDims].slice(0, 12), noDimsPages: R.noDims.size,
  ogCount: R.og.length, og: R.og.slice(0, 10),
  dupTitle: dup(R.dupTitle), dupDesc: dup(R.dupDesc), orphans,
};
console.log(JSON.stringify(out, null, 1));

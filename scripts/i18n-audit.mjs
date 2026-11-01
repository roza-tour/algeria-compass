// Multilingual audit of the built site (dist/): what the SEO and site audits do
// not check. For every page it verifies that
//   - <html lang>, og:locale and schema inLanguage match the URL's language;
//   - hreflang sets are complete, self-referencing and reciprocal (A -> B means
//     B -> A with the same set), and each code points at a page in that language;
//   - title, description, og and twitter tags exist and agree;
//   - translated pages carry no English left in the title, description, H1-H3,
//     buttons or body sentences;
//   - translated tour pages show the same price and number of days as tours.json.
//   npm run build && node scripts/i18n-audit.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const D = 'dist';
const SITE = 'https://algeriacompass.com';
const LOCALE = { en: 'en', fr: 'fr_FR', it: 'it_IT', es: 'es_ES', de: 'de_DE', ru: 'ru_RU' };
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (f === 'index.html') files.push(p); } })(D);

const urlOf = f => '/' + f.slice(D.length + 1).replace(/\\/g, '/').replace(/index\.html$/, '');
const langOfUrl = u => (u.match(/^\/(fr|it|es|de|ru)\//) || [, 'en'])[1];
const attr = (tag, name) => (tag.match(new RegExp(`${name}="([^"]*)"`)) || [])[1];
const dec = s => (s || '').replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
const text = h => dec(h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

// Words that only English uses (no French/Italian/Spanish/German homographs).
const EN = /\b(the|and|with|your|what|which|how|from|into|our|you|this|that|these|those|when|where|there|their|about|day-by-day|book now|read more|per person|request)\b/gi;
const enScore = s => (s.match(EN) || []).length;
// Strings that legitimately stay English on translated pages.
const ALLOW = /Read in English|Algeria Compass|Tassili Airlines|Air Algérie|Cheikha|Google|WhatsApp|Instagram|Facebook|TripAdvisor|Lonely Planet|The Soul of Algeria|Le Corbusier/;

const pages = new Map();
for (const f of files) {
  const h = readFileSync(f, 'utf8');
  const url = urlOf(f);
  if (/<meta name="robots" content="[^"]*noindex/.test(h) && !/\/(fr|it|es|de)\//.test(url)) { /* still checked below */ }
  const head = h.slice(0, h.indexOf('</head>') + 7);
  const metas = [...head.matchAll(/<meta [^>]*>/g)].map(m => m[0]);
  const meta = (k, v) => dec(attr(metas.find(m => attr(m, k) === v) || '', 'content'));
  pages.set(url, {
    f, url, h, lang: langOfUrl(url),
    htmlLang: attr(h.match(/<html[^>]*>/)[0], 'lang'),
    noindex: /<meta name="robots" content="[^"]*noindex/.test(head),
    title: dec((head.match(/<title>([\s\S]*?)<\/title>/) || [])[1]),
    desc: meta('name', 'description'),
    ogTitle: meta('property', 'og:title'), ogDesc: meta('property', 'og:description'),
    ogLocale: meta('property', 'og:locale'), ogUrl: meta('property', 'og:url'),
    twTitle: meta('name', 'twitter:title'),
    canonical: attr((head.match(/<link rel="canonical"[^>]*>/) || [''])[0], 'href'),
    alts: [...head.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m => ({ hl: m[1], href: m[2] })),
    ld: [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]),
  });
}

const issues = {};
const add = (k, msg) => (issues[k] ||= []).push(msg);

for (const p of pages.values()) {
  if (p.url.startsWith('/404') || p.url === '/sitemap/' || p.url === '/search/') continue;
  const L = p.lang;
  // language markers
  if (p.htmlLang !== L) add('html lang', `${p.url}: <html lang="${p.htmlLang}"> on a ${L} URL`);
  if (p.ogLocale && !p.ogLocale.startsWith(L)) add('og:locale', `${p.url}: og:locale ${p.ogLocale}`);
  // tags present and consistent
  if (!p.title) add('missing title', p.url);
  if (p.noindex) continue; // print views, search, utility pages: not indexed
  if (!p.desc) add('missing description', p.url);
  if (!p.ogTitle || !p.ogDesc) add('missing og', p.url);
  if (p.ogTitle && p.title && p.ogTitle !== p.title) add('og:title differs from title', `${p.url}: "${p.ogTitle}" vs "${p.title}"`);
  if (p.ogDesc && p.desc && p.ogDesc !== p.desc) add('og:description differs', p.url);
  if (p.twTitle && p.title && p.twTitle !== p.title) add('twitter:title differs', p.url);
  if (!p.noindex) {
    if (p.canonical !== SITE + p.url) add('canonical not self', `${p.url} -> ${p.canonical}`);
    if (p.ogUrl && p.ogUrl !== p.canonical) add('og:url differs from canonical', `${p.url}: ${p.ogUrl}`);
  }
  if (p.desc && p.title && p.desc.trim() === p.title.trim()) add('description = title', p.url);
  // schema inLanguage
  for (const block of p.ld) {
    let j; try { j = JSON.parse(block); } catch { add('bad JSON-LD', p.url); continue; }
    const nodes = []; (function collect(o) { if (Array.isArray(o)) o.forEach(collect); else if (o && typeof o === 'object') { nodes.push(o); Object.values(o).forEach(collect); } })(j);
    for (const n of nodes) if (typeof n.inLanguage === 'string' && n.inLanguage !== L && n['@type'] !== 'WebSite' && n['@type'] !== 'Organization')
      add('schema inLanguage', `${p.url}: ${n['@type']} inLanguage=${n.inLanguage}`);
  }
  // hreflang
  if (p.alts.length) {
    const self = p.alts.find(a => a.href === SITE + p.url);
    if (!self) add('hreflang without self', p.url);
    else if (self.hl !== L) add('hreflang self code wrong', `${p.url}: self tagged ${self.hl}`);
    if (!p.alts.find(a => a.hl === 'x-default')) add('hreflang without x-default', p.url);
    const codes = p.alts.map(a => a.hl);
    if (new Set(codes).size !== codes.length) add('hreflang duplicate code', p.url);
    for (const a of p.alts) {
      if (a.hl === 'x-default') continue;
      const tu = a.href.replace(SITE, '');
      const t = pages.get(tu);
      if (!t) { add('hreflang target missing', `${p.url} -> ${a.hl} ${tu}`); continue; }
      if (langOfUrl(tu) !== a.hl) add('hreflang code/path mismatch', `${p.url}: ${a.hl} -> ${tu}`);
      if (t.noindex) add('hreflang to noindex page', `${p.url} -> ${tu}`);
      const back = t.alts.find(b => b.href === SITE + p.url);
      if (!back) add('hreflang not reciprocal', `${p.url} -> ${tu} (no link back)`);
      else if (t.alts.length !== p.alts.length) add('hreflang sets differ', `${p.url} (${p.alts.length}) vs ${tu} (${t.alts.length})`);
    }
  }
  // English left on translated pages
  if (L !== 'en') {
    for (const [k, v] of [['title', p.title.replace(/\|.*$/, '')], ['description', p.desc]])
      if (enScore(v) >= 2) add(`English in ${k}`, `${p.url}: ${v}`);
    const main = (p.h.match(/<main[\s\S]*?<\/main>/) || [p.h])[0];
    for (const m of main.matchAll(/<(h[1-3])[^>]*>([\s\S]*?)<\/\1>/g)) {
      const t = text(m[2]); if (!ALLOW.test(t) && enScore(t) >= 2) add('English heading', `${p.url}: <${m[1]}> ${t}`);
    }
    for (const m of main.matchAll(/<(a|button)[^>]*class="[^"]*btn[^"]*"[^>]*>([\s\S]*?)<\/\1>/g)) {
      const t = text(m[2]); if (t && !ALLOW.test(t) && enScore(t) >= 1 && t.split(' ').length <= 6) add('English button', `${p.url}: ${t}`);
    }
    const sentences = text(main).split(/(?<=[.!?])\s+/).filter(s => s.length > 40 && !ALLOW.test(s) && enScore(s) >= 4);
    if (sentences.length) add('English sentences in body', `${p.url}: (${sentences.length}) “${sentences[0].slice(0, 110)}”`);
  }
}

// translated tours: price and days must match tours.json
const tours = JSON.parse(readFileSync('src/data/tours.json', 'utf8'));
const list = tours.tours || tours;
const TOUR_BASE = { fr: '/fr/circuits/', it: '/it/circuiti/', es: '/es/circuitos/', de: '/de/reisen/' };
const DAYWORD = { en: 'days?', fr: 'jours?', it: 'giorni', es: 'días', de: 'Tage' };
for (const t of list) {
  const nDays = (t.itinerary || []).length;
  for (const [l, base] of Object.entries({ en: '/tours/', ...TOUR_BASE })) {
    const p = pages.get(`${base}${t.id}/`);
    if (!p) continue;
    const ld = p.ld.join(' ');
    const prices = [...ld.matchAll(/"price":"?(\d+(?:\.\d+)?)"?/g)].map(m => Math.round(+m[1]));
    if (t.price_eur && prices.length && !prices.includes(Math.round(+t.price_eur))) add('tour price differs from tours.json', `${p.url}: schema ${prices.join('/')} vs ${t.price_eur}`);
    const durs = [...p.title.concat(' ', text((p.h.match(/<h1[\s\S]*?<\/h1>/) || [''])[0])).matchAll(new RegExp(`(\\d+)[\\s-]*(?:${DAYWORD[l]})`, 'gi'))].map(m => +m[1]);
    for (const d of durs) if (nDays && d !== nDays && d !== nDays - 1) add('tour days differ from itinerary', `${p.url}: says ${d}, itinerary has ${nDays}`);
  }
}

// sitemap: only indexable, existing pages; every indexable page listed
const sm = readFileSync(join(D, 'sitemap.xml'), 'utf8');
const locs = new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(SITE, '')));
for (const u of locs) { const p = pages.get(u); if (!p) add('sitemap URL missing', u); else if (p.noindex) add('sitemap lists noindex', u); }
for (const p of pages.values()) if (!p.noindex && !locs.has(p.url) && !/^\/(404|search|sitemap)/.test(p.url)) add('indexable page not in sitemap', p.url);

// report
const keys = Object.keys(issues).sort();
console.log(`[i18n-audit] ${pages.size} pages`);
const byLang = {}; for (const p of pages.values()) byLang[p.lang] = (byLang[p.lang] || 0) + 1;
console.log('  by language:', JSON.stringify(byLang));
if (!keys.length) console.log('  no issues');
for (const k of keys) {
  console.log(`\n${k} (${issues[k].length})`);
  for (const m of issues[k].slice(0, 12)) console.log('   - ' + m);
  if (issues[k].length > 12) console.log(`   … and ${issues[k].length - 12} more`);
}
process.exitCode = keys.length ? 1 : 0;

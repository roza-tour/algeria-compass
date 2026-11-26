import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';
import { REGIONS } from '../data/regions';
import { REGION_ROUTES, REGION_UI } from '../data/regionI18n.mjs';
import { TOURS_FR } from '../data/tours-fr';
import { DESTINATIONS_FR } from '../data/destinations-fr';
import { TOURS_IT } from '../data/tours-it';
import { DESTINATIONS_IT } from '../data/destinations-it';
import { GUIDES_IT } from '../data/guides-it';
import { GUIDES_FR } from '../data/guides-fr';
import { MOMENTS_PATHS } from '../i18n';
import { GUIDE_PAGES } from '../data/guide-language';
import { TOURS_ES } from '../data/tours-es';
import { DESTINATIONS_ES } from '../data/destinations-es';
import { GUIDES_ES } from '../data/guides-es';
import { TOURS_DE } from '../data/tours-de';
import { DESTINATIONS_DE } from '../data/destinations-de';
import { GUIDES_DE } from '../data/guides-de';
import { GUIDE_TEXT, GUIDE_ROUTES } from '../data/localGuides.mjs';
import { Q_TEXT, Q_ROUTES } from '../data/questionI18n.mjs';

const SITE = (import.meta.env.SITE || 'https://algeriacompass.com').replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

// lastmod used to be the build date for every page that is not a content
// entry: 637 of 756 URLs "changed" on the same day, every deploy. A search
// engine that sees that learns to ignore the field for the whole site. Each
// row now carries the date its own source last changed: the content entry's
// `updated`, a guide's `published`, or the last commit that touched the data
// file the page is built from (today, if that file has uncommitted changes).
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
const dateCache = new Map<string, string>();
function srcDate(...files: string[]): string {
  let best = '';
  for (const f of files) {
    if (!existsSync(f)) continue;
    let d = dateCache.get(f);
    if (d === undefined) {
      try {
        const dirty = execFileSync('git', ['status', '--porcelain', '--', f], { encoding: 'utf8' }).trim();
        d = dirty ? today : execFileSync('git', ['log', '-1', '--format=%cs', '--', f], { encoding: 'utf8' }).trim();
      } catch { d = ''; }
      dateCache.set(f, d);
    }
    if (d > best) best = d;
  }
  return best || today;
}
const pageDate = (s: string) => srcDate(`src/pages/${s}index.astro`, `src/pages/${s.replace(/\/$/, '')}.astro`);

export const GET: APIRoute = async () => {
  // Only canonical, 200, indexable, trailing-slash URLs.
  // EXCLUDED (noindex scaffolding / thin meta pages, kept out of the sitemap):
  //   /search/, /sitemap/, /404/.
  //   (/clusters/ was removed entirely — now 301'd to real pages in .htaccess.)
  const statics = ['', 'discover/', 'tours/', 'sahara-tours/', 'luxury/', 'destinations/', 'provinces/', 'regions/', 'experiences/', 'blog/',
    'questions/', 'culture/', 'history/', 'food/', 'sweets/', 'unesco/', 'travel-guides/', 'moments/', 'partners/', 'plan-your-trip/',
    'visa-support/', 'evisa/', 'booking-terms/', 'privacy/', 'algeria-visa-requirements/',
    'about/', 'contact/', 'editorial/', 'team/', 'reviewers/',
    // French (fr) pages — hreflang-paired with their English counterparts
    'fr/', 'fr/guide-voyage-algerie/', 'fr/visa-algerie/', 'fr/securite-algerie/',
    'fr/quand-partir-algerie/', 'fr/transport-algerie/', 'fr/itineraire-algerie/',
    'fr/budget-algerie/', 'fr/sahara-algerie/', 'fr/cuisine-algerienne/',
    'fr/noel-nouvel-an-algerie/', 'fr/neige-sahara-algerie/', 'fr/circuits/', 'fr/destinations/',
    'fr/visa-arrivee-algerie/', 'fr/assistance-visa-algerie/',
    'fr/contact/', 'fr/a-propos/', 'fr/unesco-algerie/', 'fr/luxe/', 'fr/evisa-algerie/', 'fr/planifier-mon-voyage/',
    // Italian (it) pages
    'it/', 'it/circuiti/', 'it/destinazioni/', 'it/pianifica-il-viaggio/',
    'it/contatto/', 'it/chi-siamo/', 'it/unesco-algeria/', 'it/lusso/', 'it/evisa-algeria/',
    // Spanish (es) and German (de) pages
    'es/', 'es/circuitos/', 'es/destinos/', 'es/planifica-tu-viaje/', 'de/reise-planen/',
    'es/contacto/', 'es/quienes-somos/', 'es/unesco-argelia/', 'es/lujo/', 'es/evisa-argelia/',
    'de/', 'de/reisen/', 'de/reiseziele/',
    'de/kontakt/', 'de/ueber-uns/', 'de/unesco-algerien/', 'de/luxus/', 'de/evisa-algerien/'];
  const colls: [string, string][] = [
    ['province', 'provinces'], ['destination', 'destinations'],
    ['experience', 'experiences'], ['article', 'blog'], ['question', 'questions'],
    ['editorial', 'editorial'], ['team', 'team'], ['reviewer', 'reviewers'],
  ];
  const rows: { loc: string; pri: string; mod: string }[] = statics.map(s => ({ loc: `${SITE}/${s}`, pri: s === '' ? '1.0' : '0.7', mod: pageDate(s) }));
  const tourList = (toursData as any).tours || (toursData as any);
  for (const t of tourList) {
    rows.push({ loc: `${SITE}/tours/${t.id}/`, pri: '0.8', mod: srcDate('src/data/tours.json') });
    // French detail pages exist only for tours with a complete translation.
    if (TOURS_FR[t.id]?.full) rows.push({ loc: `${SITE}/fr/circuits/${t.id}/`, pri: '0.8', mod: srcDate('src/data/tours-fr.ts') });
    if (TOURS_IT[t.id]?.full) rows.push({ loc: `${SITE}/it/circuiti/${t.id}/`, pri: '0.8', mod: srcDate('src/data/tours-it.ts') });
    if (TOURS_ES[t.id]?.full) rows.push({ loc: `${SITE}/es/circuitos/${t.id}/`, pri: '0.8', mod: srcDate('src/data/tours-es.ts') });
    if (TOURS_DE[t.id]?.full) rows.push({ loc: `${SITE}/de/reisen/${t.id}/`, pri: '0.8', mod: srcDate('src/data/tours-de.ts') });
  }
  for (const r of REGIONS) rows.push({ loc: `${SITE}/regions/${r.id}/`, pri: '0.7', mod: srcDate('src/data/regions.ts') });
  // translated region pages and hubs (only languages switched on in regionI18n.mjs)
  for (const l of Object.keys(REGION_ROUTES).filter(l => l !== 'en' && REGION_UI[l]?.ready)) {
    const rmod = srcDate(`src/data/regions-${l}.mjs`);
    rows.push({ loc: `${SITE}${REGION_ROUTES[l]}`, pri: '0.6', mod: rmod });
    for (const r of REGIONS) rows.push({ loc: `${SITE}${REGION_ROUTES[l]}${r.id}/`, pri: '0.6', mod: rmod });
  }
  for (const d of DESTINATIONS_FR) rows.push({ loc: `${SITE}/fr/destinations/${d.slug}/`, pri: '0.8', mod: srcDate('src/data/destinations-fr.ts') });
  for (const d of DESTINATIONS_IT) rows.push({ loc: `${SITE}/it/destinazioni/${d.slug}/`, pri: '0.8', mod: srcDate('src/data/destinations-it.ts') });
  for (const path of Object.values(GUIDE_PAGES)) rows.push({ loc: `${SITE}${path}`, pri: '0.8', mod: srcDate('src/data/guide-language.ts') });
  for (const g of GUIDES_FR) rows.push({ loc: `${SITE}/fr/${g.slug}/`, pri: '0.8', mod: g.published || today });
  for (const [l, path] of Object.entries(MOMENTS_PATHS)) if (l !== 'en') rows.push({ loc: `${SITE}${path}`, pri: '0.7', mod: srcDate(`src/data/moments-${l}.ts`) });
  for (const g of GUIDES_IT) rows.push({ loc: `${SITE}/it/${g.slug}/`, pri: '0.8', mod: g.published || today });
  for (const d2 of DESTINATIONS_ES) rows.push({ loc: `${SITE}/es/destinos/${d2.slug}/`, pri: '0.8', mod: srcDate('src/data/destinations-es.ts') });
  for (const g of GUIDES_ES) rows.push({ loc: `${SITE}/es/${g.slug}/`, pri: '0.8', mod: g.published || today });
  for (const d2 of DESTINATIONS_DE) rows.push({ loc: `${SITE}/de/reiseziele/${d2.slug}/`, pri: '0.8', mod: srcDate('src/data/destinations-de.ts') });
  for (const g of GUIDES_DE) rows.push({ loc: `${SITE}/de/${g.slug}/`, pri: '0.8', mod: g.published || today });
  // translated state guides and experiences, with their hubs
  for (const [l, kinds] of Object.entries(GUIDE_TEXT as Record<string, any>)) for (const [kind, map] of Object.entries(kinds as Record<string, any>)) {
    const gmod = srcDate(`src/data/guides-l10n-${l}.mjs`);
    rows.push({ loc: `${SITE}${(GUIDE_ROUTES as any)[kind][l]}`, pri: '0.6', mod: gmod });
    for (const slug of Object.keys(map)) rows.push({ loc: `${SITE}${(GUIDE_ROUTES as any)[kind][l]}${slug}/`, pri: '0.7', mod: gmod });
  }
  // translated travel questions and their indexes
  // A translated answer carries the English entry's `updated` in its own
  // structured data, so the sitemap says the same date.
  const qUpdated = new Map<string, string>();
  for (const q of await getCollection('question')) {
    const u = (q.data as any).updated;
    if (u instanceof Date) qUpdated.set(q.slug, u.toISOString().slice(0, 10));
  }
  for (const [l, map] of Object.entries(Q_TEXT as Record<string, any>)) {
    const qmod = srcDate(`src/data/questions-${l}.mjs`);
    rows.push({ loc: `${SITE}${(Q_ROUTES as any)[l]}`, pri: '0.7', mod: qmod });
    for (const slug of Object.keys(map)) rows.push({ loc: `${SITE}${(Q_ROUTES as any)[l]}${slug}/`, pri: '0.7', mod: qUpdated.get(slug) || qmod });
  }
  // utility pages (/search/, /sitemap/, /404/) are excluded from the sitemap.
  for (const [coll, base] of colls) {
    const items = await getCollection(coll as any);
    for (const it of items) {
      // Use the content's real last-updated date when available (freshness signal).
      const u = (it.data as any).updated;
      const mod = u instanceof Date ? u.toISOString().slice(0, 10) : today;
      rows.push({ loc: `${SITE}/${base}/${it.slug}/`, pri: '0.8', mod });
    }
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows.map(r => `  <url><loc>${r.loc}</loc><lastmod>${r.mod}</lastmod><priority>${r.pri}</priority></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

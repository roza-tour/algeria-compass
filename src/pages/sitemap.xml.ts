import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';
import { REGIONS } from '../data/regions';
import { TOURS_FR } from '../data/tours-fr';
import { DESTINATIONS_FR } from '../data/destinations-fr';
import { TOURS_IT } from '../data/tours-it';
import { DESTINATIONS_IT } from '../data/destinations-it';
import { GUIDES_IT } from '../data/guides-it';
import { TOURS_ES } from '../data/tours-es';
import { DESTINATIONS_ES } from '../data/destinations-es';
import { GUIDES_ES } from '../data/guides-es';
import { TOURS_DE } from '../data/tours-de';
import { DESTINATIONS_DE } from '../data/destinations-de';
import { GUIDES_DE } from '../data/guides-de';

const SITE = (import.meta.env.SITE || 'https://algeriacompass.com').replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = async () => {
  // Only canonical, 200, indexable, trailing-slash URLs.
  // EXCLUDED (noindex scaffolding / thin meta pages, kept out of the sitemap):
  //   /search/, /sitemap/, /404/.
  //   (/clusters/ was removed entirely — now 301'd to real pages in .htaccess.)
  const statics = ['', 'discover/', 'tours/', 'luxury/', 'destinations/', 'provinces/', 'regions/', 'experiences/', 'blog/',
    'questions/', 'culture/', 'history/', 'food/', 'sweets/', 'unesco/', 'travel-guides/',
    'visa-support/', 'evisa/', 'booking-terms/',
    'about/', 'contact/', 'editorial/', 'team/', 'reviewers/',
    // French (fr) pages — hreflang-paired with their English counterparts
    'fr/', 'fr/guide-voyage-algerie/', 'fr/visa-algerie/', 'fr/securite-algerie/',
    'fr/quand-partir-algerie/', 'fr/transport-algerie/', 'fr/itineraire-algerie/',
    'fr/budget-algerie/', 'fr/sahara-algerie/', 'fr/cuisine-algerienne/',
    'fr/noel-nouvel-an-algerie/', 'fr/neige-sahara-algerie/', 'fr/circuits/', 'fr/destinations/',
    // Italian (it) pages
    'it/', 'it/circuiti/', 'it/destinazioni/',
    // Spanish (es) and German (de) pages
    'es/', 'es/circuitos/', 'es/destinos/',
    'de/', 'de/reisen/', 'de/reiseziele/'];
  const colls: [string, string][] = [
    ['province', 'provinces'], ['destination', 'destinations'],
    ['experience', 'experiences'], ['article', 'blog'], ['question', 'questions'],
    ['editorial', 'editorial'], ['team', 'team'], ['reviewer', 'reviewers'],
  ];
  const rows: { loc: string; pri: string; mod: string }[] = statics.map(s => ({ loc: `${SITE}/${s}`, pri: s === '' ? '1.0' : '0.7', mod: today }));
  const tourList = (toursData as any).tours || (toursData as any);
  for (const t of tourList) {
    rows.push({ loc: `${SITE}/tours/${t.id}/`, pri: '0.8', mod: today });
    // French detail pages exist only for tours with a complete translation.
    if (TOURS_FR[t.id]?.full) rows.push({ loc: `${SITE}/fr/circuits/${t.id}/`, pri: '0.8', mod: today });
    if (TOURS_IT[t.id]?.full) rows.push({ loc: `${SITE}/it/circuiti/${t.id}/`, pri: '0.8', mod: today });
    if (TOURS_ES[t.id]?.full) rows.push({ loc: `${SITE}/es/circuitos/${t.id}/`, pri: '0.8', mod: today });
    if (TOURS_DE[t.id]?.full) rows.push({ loc: `${SITE}/de/reisen/${t.id}/`, pri: '0.8', mod: today });
  }
  for (const r of REGIONS) rows.push({ loc: `${SITE}/regions/${r.id}/`, pri: '0.7', mod: today });
  for (const d of DESTINATIONS_FR) rows.push({ loc: `${SITE}/fr/destinations/${d.slug}/`, pri: '0.8', mod: today });
  for (const d of DESTINATIONS_IT) rows.push({ loc: `${SITE}/it/destinazioni/${d.slug}/`, pri: '0.8', mod: today });
  for (const g of GUIDES_IT) rows.push({ loc: `${SITE}/it/${g.slug}/`, pri: '0.8', mod: today });
  for (const d2 of DESTINATIONS_ES) rows.push({ loc: `${SITE}/es/destinos/${d2.slug}/`, pri: '0.8', mod: today });
  for (const g of GUIDES_ES) rows.push({ loc: `${SITE}/es/${g.slug}/`, pri: '0.8', mod: today });
  for (const d2 of DESTINATIONS_DE) rows.push({ loc: `${SITE}/de/reiseziele/${d2.slug}/`, pri: '0.8', mod: today });
  for (const g of GUIDES_DE) rows.push({ loc: `${SITE}/de/${g.slug}/`, pri: '0.8', mod: today });
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

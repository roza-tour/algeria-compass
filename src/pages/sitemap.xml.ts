import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';
import { REGIONS } from '../data/regions';

const SITE = (import.meta.env.SITE || 'https://algeriacompass.com').replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = async () => {
  // Only canonical, 200, indexable, trailing-slash URLs.
  // EXCLUDED (noindex scaffolding / thin meta pages, kept out of the sitemap):
  //   /knowledge/ (+ /knowledge/graph/, /knowledge/provinces/), /search/, /sitemap/, /404/.
  //   (/clusters/ was removed entirely — now 301'd to real pages in .htaccess.)
  const statics = ['', 'discover/', 'tours/', 'luxury/', 'destinations/', 'provinces/', 'regions/', 'experiences/', 'blog/',
    'questions/', 'culture/', 'history/', 'food/', 'sweets/', 'unesco/', 'travel-guides/',
    'visa-support/', 'evisa/', 'booking-terms/',
    'about/', 'contact/', 'editorial/', 'team/', 'reviewers/',
    // French (fr) pages — hreflang-paired with their English counterparts
    'fr/', 'fr/guide-voyage-algerie/', 'fr/visa-algerie/', 'fr/securite-algerie/',
    'fr/quand-partir-algerie/', 'fr/transport-algerie/'];
  const colls: [string, string][] = [
    ['province', 'provinces'], ['destination', 'destinations'],
    ['experience', 'experiences'], ['article', 'blog'], ['question', 'questions'],
    ['editorial', 'editorial'], ['team', 'team'], ['reviewer', 'reviewers'],
  ];
  const rows: { loc: string; pri: string }[] = statics.map(s => ({ loc: `${SITE}/${s}`, pri: s === '' ? '1.0' : '0.7' }));
  const tourList = (toursData as any).tours || (toursData as any);
  for (const t of tourList) rows.push({ loc: `${SITE}/tours/${t.id}/`, pri: '0.8' });
  for (const r of REGIONS) rows.push({ loc: `${SITE}/regions/${r.id}/`, pri: '0.7' });
  // hubs (/knowledge/*) are noindex scaffolding — excluded from sitemap.
  for (const [coll, base] of colls) {
    const items = await getCollection(coll as any);
    for (const it of items) rows.push({ loc: `${SITE}/${base}/${it.slug}/`, pri: '0.8' });
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows.map(r => `  <url><loc>${r.loc}</loc><lastmod>${today}</lastmod><priority>${r.pri}</priority></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

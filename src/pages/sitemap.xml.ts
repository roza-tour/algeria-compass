import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { hubs } from '../data/hubs';
import { clusters } from '../data/clusters';
import toursData from '../data/tours.json';

const SITE = (import.meta.env.SITE || 'https://algeriacompass.com').replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = async () => {
  const statics = ['', 'discover/', 'tours/', 'destinations/', 'provinces/', 'experiences/', 'blog/',
    'questions/', 'culture/', 'history/', 'food/', 'unesco/', 'travel-guides/',
    'visa-support/', 'evisa/', 'booking-terms/', 'search/', 'sitemap/',
    'about/', 'contact/', 'editorial/', 'team/', 'reviewers/', 'knowledge/', 'knowledge/provinces/', 'knowledge/graph/', 'clusters/'];
  const colls: [string, string][] = [
    ['province', 'provinces'], ['destination', 'destinations'],
    ['experience', 'experiences'], ['article', 'blog'], ['question', 'questions'],
    ['editorial', 'editorial'], ['team', 'team'], ['reviewer', 'reviewers'],
  ];
  const rows: { loc: string; pri: string }[] = statics.map(s => ({ loc: `${SITE}/${s}`, pri: s === '' ? '1.0' : '0.7' }));
  const tourList = (toursData as any).tours || (toursData as any);
  for (const t of tourList) rows.push({ loc: `${SITE}/tours/${t.id}/`, pri: '0.8' });
  for (const h of hubs) rows.push({ loc: `${SITE}/knowledge/${h.slug}/`, pri: '0.7' });
  for (const c of clusters) rows.push({ loc: `${SITE}/clusters/${c.id}/`, pri: '0.6' });
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

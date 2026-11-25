import type { APIRoute } from 'astro';
import fs from 'node:fs';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';
import { TOUR_VISUALS } from '../data/tour-visuals';
import { tourGallery as pageGallery } from '../data/tour-photos';
import { ROUTES } from '../i18n';
import { TOURS_FR } from '../data/tours-fr';
import { TOURS_IT } from '../data/tours-it';
import { TOURS_ES } from '../data/tours-es';
import { TOURS_DE } from '../data/tours-de';

// Image sitemap (P8). One <url> per page with its associated <image:image>
// entries, so Google Images can crawl tour/state/destination photography.
const SITE = (import.meta.env.SITE || 'https://algeriacompass.com').replace(/\/$/, '');

const abs = (p: string) => (p.startsWith('http') ? p : SITE + (p.startsWith('/') ? p : '/' + p));
const xmlEsc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;' }[c] as string));

type Entry = { loc: string; images: { url: string; title?: string }[] };

// The photographs a tour page actually shows. This used to list the first
// twelve files of each place in number order, while the page shows a curated
// selection (tour-photos.ts): 292 of 342 entries named a photograph that was
// not on the page it was listed under. Same function as the page now, and the
// translated tour pages, which show the same gallery, are listed too.
function tourGallery(slugs: string[]): string[] {
  try {
    return pageGallery(slugs, fs.readdirSync('public/assets/img/tours')).map(g => `/assets/img/tours/${g.file}`);
  } catch { return []; }
}
const LOCAL_TOURS: Record<string, any> = { fr: TOURS_FR, it: TOURS_IT, es: TOURS_ES, de: TOURS_DE };

export const GET: APIRoute = async () => {
  const entries: Entry[] = [];

  const tourList = ((toursData as any).tours || (toursData as any)) as any[];
  for (const t of tourList) {
    const visual = TOUR_VISUALS[t.id];
    const imgs: { url: string; title?: string }[] = [];
    if (visual && visual.hero) imgs.push({ url: `/assets/img/tours/${visual.hero}`, title: t.title });
    for (const g of tourGallery(t.image_slugs || [])) {
      if (!imgs.some(i => i.url === g)) imgs.push({ url: g, title: t.title });
    }
    if (!imgs.length) continue;
    entries.push({ loc: `${SITE}/tours/${t.id}/`, images: imgs });
    for (const l of ['fr', 'it', 'es', 'de'] as const) {
      if (LOCAL_TOURS[l][t.id]?.full) entries.push({ loc: `${SITE}${ROUTES[l].tours}${t.id}/`, images: imgs });
    }
  }

  const colls: [string, string][] = [
    ['province', 'provinces'], ['destination', 'destinations'],
    ['experience', 'experiences'], ['article', 'blog'],
  ];
  for (const [coll, base] of colls) {
    const items = await getCollection(coll as any);
    for (const it of items as any[]) {
      const d = it.data;
      const imgs: { url: string; title?: string }[] = [];
      if (d.image) imgs.push({ url: d.image, title: d.imageAlt || d.name || d.title });
      for (const g of (d.gallery || []).slice(0, 12)) {
        if (g.src && !imgs.some(i => i.url === g.src)) imgs.push({ url: g.src, title: g.alt });
      }
      if (imgs.length) entries.push({ loc: `${SITE}/${base}/${it.slug}/`, images: imgs });
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map(e => `  <url>
    <loc>${e.loc}</loc>
${e.images.map(im => `    <image:image><image:loc>${abs(im.url)}</image:loc></image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

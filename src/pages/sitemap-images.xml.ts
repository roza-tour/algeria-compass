import type { APIRoute } from 'astro';
import fs from 'node:fs';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';
import { TOUR_VISUALS } from '../data/tour-visuals';

// Image sitemap (P8). One <url> per page with its associated <image:image>
// entries, so Google Images can crawl tour/state/destination photography.
const SITE = (import.meta.env.SITE || 'https://algeriacompass.com').replace(/\/$/, '');

const abs = (p: string) => (p.startsWith('http') ? p : SITE + (p.startsWith('/') ? p : '/' + p));
const xmlEsc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;' }[c] as string));

type Entry = { loc: string; images: { url: string; title?: string }[] };

function tourGallery(slugs: string[]): string[] {
  const out: string[] = [];
  try {
    const files = fs.readdirSync('public/assets/img/tours');
    for (const s of slugs) {
      const matches = files
        .filter(f => /^.+-\d+\.jpg$/i.test(f) && f.toLowerCase().startsWith(s.toLowerCase() + '-'))
        .sort((a, b) => parseInt(a.match(/-(\d+)\./)![1]) - parseInt(b.match(/-(\d+)\./)![1]));
      out.push(...matches.map(f => `/assets/img/tours/${f}`));
    }
  } catch { /* no gallery on disk */ }
  return out;
}

export const GET: APIRoute = async () => {
  const entries: Entry[] = [];

  const tourList = ((toursData as any).tours || (toursData as any)) as any[];
  for (const t of tourList) {
    const visual = TOUR_VISUALS[t.id];
    const imgs: { url: string; title?: string }[] = [];
    if (visual && visual.hero) imgs.push({ url: `/assets/img/tours/${visual.hero}`, title: t.title });
    for (const g of tourGallery(t.image_slugs || []).slice(0, 12)) {
      if (!imgs.some(i => i.url === g)) imgs.push({ url: g, title: t.title });
    }
    if (imgs.length) entries.push({ loc: `${SITE}/tours/${t.id}/`, images: imgs });
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
${e.images.map(im => `    <image:image><image:loc>${abs(im.url)}</image:loc>${im.title ? `<image:title>${xmlEsc(im.title)}</image:title>` : ''}</image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';

// Lightweight client-side search index (P8). Powers /search/ and the
// WebSite SearchAction. One row per indexable page: title, url, type, blurb.
type Row = { t: string; u: string; k: string; d: string };

export const GET: APIRoute = async () => {
  const rows: Row[] = [];

  const tourList = (toursData as any).tours || (toursData as any);
  for (const t of tourList) {
    rows.push({ t: t.title, u: `/tours/${t.id}/`, k: 'Tour', d: t.summary || t.hook || '' });
  }

  rows.push({ t: 'Luxury 5-Star Collection', u: '/luxury/', k: 'Luxury', d: 'Three signature private, all-inclusive 8-day journeys — Roman ruins, UNESCO cities, the Sahara and the Andalusian west. From €1,615 per person.' });

  const map: [string, string, string][] = [
    ['province', '/provinces/', 'State'],
    ['destination', '/destinations/', 'Destination'],
    ['experience', '/experiences/', 'Experience'],
    ['article', '/blog/', 'Article'],
    ['question', '/questions/', 'Question'],
  ];
  for (const [coll, base, kind] of map) {
    const items = await getCollection(coll as any);
    for (const it of items as any[]) {
      const d = it.data;
      rows.push({
        t: d.name || d.title || d.question || it.slug,
        u: `${base}${it.slug}/`,
        k: kind,
        d: d.excerpt || d.quickAnswer || d.shortAnswer || d.tagline || (d.seo && d.seo.description) || '',
      });
    }
  }

  // A few cornerstone hub pages so searches like "culture" or "food" resolve.
  const hubs: Row[] = [
    { t: 'Algerian Culture', u: '/culture/', k: 'Guide', d: 'Civilizations, identity and traditions of Algeria.' },
    { t: 'Algerian Food & Cuisine', u: '/food/', k: 'Guide', d: 'The dishes, pastries and food culture of Algeria.' },
    { t: 'Algerian Sweets & Pastries', u: '/sweets/', k: 'Guide', d: 'Baklawa, qalb el louz, griwech, kaab el ghzal and more — a fun guide to Algeria’s honeyed pastries.' },
    { t: 'History of Algeria', u: '/history/', k: 'Guide', d: 'From Numidia and Rome to independence.' },
    { t: 'UNESCO World Heritage Sites', u: '/unesco/', k: 'Guide', d: "Algeria's seven UNESCO World Heritage sites." },
    { t: 'e-Visa & Entry to Algeria', u: '/evisa/', k: 'Guide', d: 'How entry works, including the Saharan e-Visa.' },
    { t: 'Visa Support', u: '/visa-support/', k: 'Guide', d: 'Free visa documentation with every booking.' },
    { t: 'Travel Guides', u: '/travel-guides/', k: 'Guide', d: 'Practical guides for planning a trip to Algeria.' },
  ];
  rows.push(...hubs);

  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json' },
  });
};

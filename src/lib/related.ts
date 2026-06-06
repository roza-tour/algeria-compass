import { getCollection, type CollectionEntry } from 'astro:content';

type AnyEntry = { slug: string; data: any };

// Generic: items in a collection matching a region, excluding self, with a fallback fill so blocks are never empty.
export async function related(
  collection: 'province' | 'destination' | 'experience' | 'article',
  opts: { region?: string; province?: string; exclude?: string; preferSlugs?: string[]; limit?: number } = {}
) {
  const { region, province, exclude, preferSlugs = [], limit = 3 } = opts;
  const all = (await getCollection(collection)) as unknown as AnyEntry[];
  const pool = all.filter(e => e.slug !== exclude);
  const picked: AnyEntry[] = [];

  // 1) explicit curated slugs first
  for (const s of preferSlugs) {
    const m = pool.find(e => e.slug === s);
    if (m && !picked.includes(m)) picked.push(m);
  }
  // 2) same province
  if (province) for (const e of pool) {
    if (picked.length >= limit) break;
    if (e.data.province === province && !picked.includes(e)) picked.push(e);
  }
  // 3) same region
  if (region) for (const e of pool) {
    if (picked.length >= limit) break;
    if (e.data.region === region && !picked.includes(e)) picked.push(e);
  }
  // 4) fallback: fill with anything remaining
  for (const e of pool) {
    if (picked.length >= limit) break;
    if (!picked.includes(e)) picked.push(e);
  }
  return picked.slice(0, limit);
}

// Map an entry to Card props for a given base path.
export function toCard(e: AnyEntry, base: string) {
  const d = e.data;
  const isArticle = base === '/blog/';
  return {
    href: `${base}${e.slug}/`,
    title: d.title ?? d.name ?? d.question,
    image: d.image ?? '/assets/img/brand-algeria.jpg',
    alt: d.imageAlt ?? (d.title ?? d.name ?? 'Algeria'),
    tag: isArticle ? d.category : (d.durationDays ? `${d.durationDays} days` : d.region),
    text: isArticle ? d.excerpt : d.quickAnswer,
  };
}

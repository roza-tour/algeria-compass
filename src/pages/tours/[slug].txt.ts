import type { APIRoute } from 'astro';
import { tours, catalogEntry, POLICIES } from '../../lib/tour-catalog';

// Clean text (Markdown) version of each tour page, for AI assistants: no menus,
// no buttons — the trip, the price, what is included and how to book.
export function getStaticPaths() {
  return tours().map(t => ({ params: { slug: t.id }, props: { t } }));
}

export const GET: APIRoute = ({ props }) => {
  const t: any = (props as any).t;
  const c = catalogEntry(t);
  const L: string[] = [];
  L.push(`# ${t.title}`, '');
  L.push(`> ${t.summary}`, '');
  L.push(`- Price: from €${c.price.amount.toLocaleString('en-GB')} per ${c.price.per} (private trip or small group)`);
  L.push(`- Duration: ${t.duration}`);
  L.push(`- Starts: ${t.start}`);
  if (c.best_season) L.push(`- Best season: ${c.best_season}`);
  L.push(`- Guides speak: ${c.guide_languages.join(', ')}`);
  L.push(`- Visa on arrival at Algiers airport possible: ${c.visa_on_arrival_eligible ? 'yes (the programme includes the Sahara)' : 'no — consulate visa with our invitation letter'}`);
  L.push(`- Web page: ${c.url}`, `- Book (request, no payment to enquire): ${c.book.request_url}`, '');
  if (t.overview) L.push('## Overview', '', t.overview, '');
  if (c.highlights.length) L.push('## Highlights', '', ...c.highlights.map((h: string) => `- ${h}`), '');
  L.push('## Day by day', '');
  for (const d of t.itinerary || []) {
    L.push(`### Day ${d.day} — ${d.title}`, '', d.body || '');
    for (const s of d.stops || []) L.push(`- **${s.place}**: ${s.text}`);
    L.push('');
  }
  if (c.includes.length) L.push('## Included', '', ...c.includes.map((x: string) => `- ${x}`), '');
  if (c.excludes.length) L.push('## Not included', '', ...c.excludes.map((x: string) => `- ${x}`), '');
  if ((t.faqs || []).length) { L.push('## Questions', ''); for (const f of t.faqs) L.push(`**${f.q}**`, f.a, ''); }
  L.push('## Booking & policies', '', `- ${POLICIES.booking}`, `- ${POLICIES.early_booking}`, `- ${POLICIES.cancellation}`, `- ${POLICIES.visa_refused}`, `- Visa: ${POLICIES.visa}`, '');
  return new Response(L.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

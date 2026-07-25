import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';

// /llms.txt — the llmstxt.org discovery file for AI assistants and answer
// engines (ChatGPT, Claude, Perplexity, Gemini...).
//
// GENERATED from the content collections on every build, deliberately: the
// previous hand-written version silently went stale as guides were added.
// Anything published now shows up here automatically.

const SITE = (import.meta.env.SITE || 'https://algeriacompass.com').replace(/\/$/, '');

// French pages live as standalone .astro routes, so they are listed explicitly.
// [path, title, note]
const FRENCH: [string, string, string][] = [
  ['/fr/', 'Voyage en Algérie', "Accueil en français — voyagiste algérien agréé."],
  ['/fr/guide-voyage-algerie/', 'Guide de voyage complet en Algérie', 'Quand partir, visa, sécurité, transport, budget.'],
  ['/fr/visa-algerie/', "Visa pour l'Algérie", 'Documents requis, e-Visa, lettre d’invitation, délais.'],
  ['/fr/securite-algerie/', "L'Algérie est-elle sûre ?", 'Évaluation honnête : le nord, le Sahara encadré, précautions.'],
  ['/fr/quand-partir-algerie/', 'Quand partir en Algérie ?', 'Meilleure période région par région ; le désert en hiver.'],
  ['/fr/transport-algerie/', 'Se déplacer en Algérie', 'Vols intérieurs, train, bus, taxis et 4x4 du désert.'],
  ['/fr/itineraire-algerie/', 'Itinéraire en Algérie : 7, 10 et 14 jours', 'Trois itinéraires prêts à l’emploi.'],
  ['/fr/budget-algerie/', 'Budget voyage en Algérie', "Coûts réels et le taux de change parallèle."],
  ['/fr/sahara-algerie/', 'Sahara algérien', 'Djanet, le Tassili n’Ajjer, le Hoggar, Timimoun : permis et 4x4.'],
  ['/fr/cuisine-algerienne/', 'Cuisine algérienne', 'Couscous, chorba, mechoui et pâtisseries.'],
];

// [path, title, note]
const HUBS: [string, string, string][] = [
  ['/tours/', 'Tours', 'All private, guided tour itineraries.'],
  ['/luxury/', 'Luxury travel', 'High-end private programmes and bespoke itineraries.'],
  ['/destinations/', 'Destinations', "In-depth guides to Algeria's flagship places."],
  ['/provinces/', 'States', 'Region-by-region guides across the Algerian states.'],
  ['/regions/', 'Regions', 'Algeria by travel region — eight distinct "worlds".'],
  ['/experiences/', 'Experiences', 'Ways to travel: desert, culture, history, food.'],
  ['/unesco/', 'UNESCO World Heritage', "Algeria's seven UNESCO World Heritage sites."],
  ['/culture/', 'Culture', 'Algerian culture: civilisations, music, craft.'],
  ['/history/', 'History', 'Algerian history, from antiquity to independence.'],
  ['/food/', 'Food', 'Algerian food and the Maghrebi table.'],
  ['/questions/', 'Questions & answers', 'Common questions about travelling in Algeria.'],
  ['/travel-guides/', 'Travel guides index', 'Index of the practical travel guides.'],
  ['/visa-support/', 'Visa support', 'Visa support and invitation letters for travellers.'],
  ['/contact/', 'Contact', 'Request a custom itinerary or a quote.'],
  ['/about/', 'About', 'Who we are — a licensed local operator.'],
  ['/editorial/', 'Editorial standards', 'Sourcing, fact-checking and corrections policies.'],
  ['/team/', 'Team', 'The people who write and review this site.'],
];

const line = (path: string, title: string, note?: string) =>
  `- [${title}](${SITE}${path})${note ? `: ${note}` : ''}`;

export const GET: APIRoute = async () => {
  const articles = (await getCollection('article')).sort((a, b) =>
    a.data.title.localeCompare(b.data.title)
  );
  const destinations = (await getCollection('destination')).sort((a, b) =>
    a.data.name.localeCompare(b.data.name)
  );
  const provinces = (await getCollection('province')).sort((a, b) =>
    a.data.name.localeCompare(b.data.name)
  );
  const tourList: any[] = (toursData as any).tours || (toursData as any);

  const body = `# Algeria Compass

> Algeria Compass is a licensed Algerian tour operator running private, expert-guided
> cultural, Sahara and luxury journeys across Algeria, with visa support and local
> Algerian guides. We also publish independent, fact-checked travel guides on visiting
> Algeria — safety, visas, transport, costs, seasons, food and its seven UNESCO World
> Heritage sites. Guides are written by Oussama Ben Yahia (founder) and independently
> reviewed against our published editorial standards.
> Languages served: Arabic, Tamazight, French, English, Spanish, Italian.
> Contact: ${SITE}/contact/

## Travel guides (independent, fact-checked)
${articles.map((a) => line(`/blog/${a.slug}/`, a.data.title, a.data.excerpt)).join('\n')}

## Destinations
${destinations.map((d) => line(`/destinations/${d.slug}/`, d.data.name, d.data.quickAnswer?.slice(0, 150))).join('\n')}

## States / provinces
${provinces.map((p) => line(`/provinces/${p.slug}/`, p.data.name)).join('\n')}

## Tours
${tourList.map((t) => line(`/tours/${t.id}/`, t.title)).join('\n')}

## Guides en français
${FRENCH.map(([p, title, note]) => line(p, title, note)).join('\n')}

## Key sections
${HUBS.map(([p, title, note]) => line(p, title, note)).join('\n')}

## Full index
- [XML sitemap](${SITE}/sitemap.xml)
- [Image sitemap](${SITE}/sitemap-images.xml)
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';
import { TOURS_FR } from '../data/tours-fr';
import { TOURS_IT } from '../data/tours-it';
import { TOURS_ES } from '../data/tours-es';
import { TOURS_DE } from '../data/tours-de';
import { DESTINATIONS_FR } from '../data/destinations-fr';
import { DESTINATIONS_IT } from '../data/destinations-it';
import { DESTINATIONS_ES } from '../data/destinations-es';
import { DESTINATIONS_DE } from '../data/destinations-de';
import { GUIDES_IT } from '../data/guides-it';
import { GUIDES_ES } from '../data/guides-es';
import { GUIDES_DE } from '../data/guides-de';
import { LANGS, LANG_META, ROUTES, type Lang } from '../i18n';
import * as luxEn from '../data/luxury.mjs';
import * as luxFr from '../data/luxury-fr.mjs';
import * as luxIt from '../data/luxury-it.mjs';
import * as luxEs from '../data/luxury-es.mjs';
import * as luxDe from '../data/luxury-de.mjs';

// /llms.txt — the llmstxt.org discovery file for AI assistants and answer
// engines (ChatGPT, Claude, Perplexity, Gemini...).
//
// GENERATED from the data on every build, deliberately: a hand-written version
// silently goes stale, and it already had — the French list was frozen at ten
// entries and the Italian, Spanish and German sites were absent entirely, so
// answer engines were told nothing about more than half the site. Every section
// below is now derived, so anything published shows up here on the next build.

const SITE = (import.meta.env.SITE || 'https://algeriacompass.com').replace(/\/$/, '');

const line = (path: string, title: string, note?: string) =>
  `- [${title}](${SITE}${path})${note ? `: ${String(note).replace(/\s+/g, ' ').trim()}` : ''}`;

const clip = (s: unknown, n = 150) => {
  const t = String(s ?? '').replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n).replace(/[\s,;:.–—-]+$/, '') + '…' : t;
};

// French practical guides are standalone .astro routes rather than data, so
// they are the one list that has to be named. Keep in sync when adding a page
// under src/pages/fr/ — everything else on this file maintains itself.
const FRENCH_GUIDES: [string, string, string][] = [
  ['/fr/guide-voyage-algerie/', 'Guide de voyage complet en Algérie', 'Quand partir, visa, sécurité, transport, budget.'],
  ['/fr/visa-algerie/', "Visa pour l'Algérie", 'Documents requis, lettre d’invitation, délais.'],
  ['/fr/visa-arrivee-algerie/', "Faut-il un visa pour l'Algérie ?", 'Les deux voies d’entrée, dont le visa à l’arrivée par le sud.'],
  ['/fr/assistance-visa-algerie/', 'Assistance visa', 'Ce que nous préparons pour votre dossier, et à quel prix.'],
  ['/fr/evisa-algerie/', 'e-Visa et entrée en Algérie', 'Comment fonctionne réellement l’entrée en Algérie.'],
  ['/fr/securite-algerie/', "L'Algérie est-elle sûre ?", 'Évaluation honnête : le nord, le Sahara encadré, précautions.'],
  ['/fr/quand-partir-algerie/', 'Quand partir en Algérie ?', 'Meilleure période région par région ; le désert en hiver.'],
  ['/fr/transport-algerie/', 'Se déplacer en Algérie', 'Vols intérieurs, train, bus, taxis et 4x4 du désert.'],
  ['/fr/itineraire-algerie/', 'Itinéraire en Algérie : 7, 10 et 14 jours', 'Trois itinéraires prêts à l’emploi.'],
  ['/fr/budget-algerie/', 'Budget voyage en Algérie', 'Coûts réels et le taux de change parallèle.'],
  ['/fr/sahara-algerie/', 'Sahara algérien', 'Djanet, le Tassili n’Ajjer, le Hoggar, Timimoun : permis et 4x4.'],
  ['/fr/cuisine-algerienne/', 'Cuisine algérienne', 'Couscous, chorba, mechoui et pâtisseries.'],
  ['/fr/neige-sahara-algerie/', 'De la neige au Sahara', 'Quatre climats dans un seul voyage.'],
  ['/fr/noel-nouvel-an-algerie/', 'Noël et Nouvel An en Algérie', 'Le Sahara en pleine saison, sans la foule.'],
];

const HUBS: [string, string, string][] = [
  ['/tours/', 'Tours', 'All private, guided tour itineraries.'],
  ['/luxury/', 'Luxury travel', 'The 5-Star Collection — private all-inclusive 8-day journeys.'],
  ['/destinations/', 'Destinations', "In-depth guides to Algeria's flagship places."],
  ['/provinces/', 'States', 'Region-by-region guides across the Algerian states.'],
  ['/regions/', 'Regions', 'Algeria by travel region — eight distinct "worlds".'],
  ['/experiences/', 'Experiences', 'Ways to travel: desert, culture, history, food.'],
  ['/unesco/', 'UNESCO World Heritage', "Algeria's seven UNESCO World Heritage sites."],
  ['/culture/', 'Culture', 'Algerian culture: civilisations, music, craft.'],
  ['/history/', 'History', 'Algerian history, from antiquity to independence.'],
  ['/food/', 'Food', 'Algerian food and the Maghrebi table.'],
  ['/sweets/', 'Sweets & pastries', 'Algerian pastries, from makrout to baklawa.'],
  ['/questions/', 'Questions & answers', 'Common questions about travelling in Algeria.'],
  ['/travel-guides/', 'Travel guides index', 'Index of the practical travel guides.'],
  ['/algeria-visa-requirements/', 'Do you need a visa for Algeria?', 'The two entry routes, compared side by side.'],
  ['/visa-support/', 'Visa support', 'Visa support and invitation letters for travellers.'],
  ['/evisa/', 'e-Visa & entry', 'How entry to Algeria actually works — no general tourist e-Visa.'],
  ['/booking-terms/', 'Booking & cancellation terms', 'How booking, payment and cancellation work.'],
  ['/contact/', 'Contact', 'Request a custom itinerary or a quote.'],
  ['/about/', 'About', 'Who we are — a licensed local operator.'],
  ['/editorial/', 'Editorial standards', 'Sourcing, fact-checking and corrections policies.'],
  ['/team/', 'Team', 'The people who write and review this site.'],
  ['/reviewers/', 'Review & fact-checking', 'Who independently checks what we publish.'],
];

// Per-language wiring. Each entry knows how to enumerate that language's
// tours, destinations and guides, so adding a translation adds a listing.
// `extra` covers standalone .astro pages that have no data file to enumerate.
type Section = { lang: Lang; heading: string; tours: any; dests: any[]; guides: any[]; lux: any; extra: [string, string, string][] };
const SECTIONS: Section[] = [
  { lang: 'fr', heading: 'Site en français',  tours: TOURS_FR, dests: DESTINATIONS_FR, guides: [],        lux: luxFr,
    extra: [] },   // French standalone pages are listed in FRENCH_GUIDES below
  { lang: 'it', heading: 'Sito in italiano',  tours: TOURS_IT, dests: DESTINATIONS_IT, guides: GUIDES_IT, lux: luxIt,
    extra: [['/it/evisa-algeria/', 'e-Visa e ingresso in Algeria', "Come funziona davvero l'ingresso: nessun e-Visa turistico generale."]] },
  { lang: 'es', heading: 'Sitio en español',  tours: TOURS_ES, dests: DESTINATIONS_ES, guides: GUIDES_ES, lux: luxEs,
    extra: [['/es/evisa-argelia/', 'e-Visa y entrada a Argelia', 'Cómo funciona realmente la entrada: no hay e-Visa turístico general.']] },
  { lang: 'de', heading: 'Website auf Deutsch', tours: TOURS_DE, dests: DESTINATIONS_DE, guides: GUIDES_DE, lux: luxDe,
    extra: [['/de/evisa-algerien/', 'e-Visum & Einreise nach Algerien', 'Wie die Einreise wirklich funktioniert — kein allgemeines Touristen-e-Visum.']] },
];

export const GET: APIRoute = async () => {
  const articles = (await getCollection('article')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const destinations = (await getCollection('destination')).sort((a, b) => a.data.name.localeCompare(b.data.name));
  const provinces = (await getCollection('province')).sort((a, b) => a.data.name.localeCompare(b.data.name));
  const questions = (await getCollection('question')).sort((a, b) => a.data.question.localeCompare(b.data.question));
  const tourList: any[] = (toursData as any).tours || (toursData as any);

  // Build one block per translated language, all from data.
  const langBlocks = SECTIONS.map((s) => {
    const R = ROUTES[s.lang];
    const home = LANG_META[s.lang].home;
    const rows: string[] = [line(home, LANG_META[s.lang].name, 'Home — licensed Algerian tour operator.')];

    rows.push(line(R.luxury, s.lux.LUX_COPY.crumbLabel, clip(s.lux.LUX_COPY.seoDescription)));
    rows.push(line(R.tours, 'Tours', ''), line(R.destinations, 'Destinations', ''),
              line(R.unesco, 'UNESCO', ''), line(R.about, 'About', ''), line(R.contact, 'Contact', ''));

    for (const g of s.guides) rows.push(line(`/${s.lang}/${g.slug}/`, g.h1, clip(g.seoDescription)));
    for (const [p, t, n] of s.extra) rows.push(line(p, t, n));
    if (s.lang === 'fr') for (const [p, t, n] of FRENCH_GUIDES) rows.push(line(p, t, n));

    for (const d of s.dests) rows.push(line(`${R.destinations}${d.slug}/`, d.name, clip(d.quick ?? d.intro)));

    for (const t of tourList) {
      const tr = (s.tours as any)[t.id];
      if (tr?.full) rows.push(line(`${R.tours}${t.id}/`, tr.title, clip(tr.hook)));
    }
    return `## ${s.heading}\n${rows.filter(Boolean).join('\n')}`;
  });

  const body = `# Algeria Compass

> Algeria Compass is a licensed Algerian tour operator running private, expert-guided
> cultural, Sahara and luxury journeys across Algeria, with visa support and local
> Algerian guides. We also publish independent, fact-checked travel guides on visiting
> Algeria — safety, visas, transport, costs, seasons, food and its seven UNESCO World
> Heritage sites. Guides are written by Oussama Ben Yahia (founder) and independently
> reviewed against our published editorial standards.
> Guiding languages: English, French, Spanish, Italian, German, Arabic (and Tamazight).
> This site is published in ${LANGS.length} languages: ${LANGS.map((l) => LANG_META[l].name).join(', ')}.
> Contact: ${SITE}/contact/

## Travel guides (independent, fact-checked)
${articles.map((a) => line(`/blog/${a.slug}/`, a.data.title, a.data.excerpt)).join('\n')}

## Destinations
${destinations.map((d) => line(`/destinations/${d.slug}/`, d.data.name, clip(d.data.quickAnswer))).join('\n')}

## States / provinces
${provinces.map((p) => line(`/provinces/${p.slug}/`, p.data.name)).join('\n')}

## Tours
${tourList.map((t) => line(`/tours/${t.id}/`, t.title, clip(t.hook))).join('\n')}

## Questions & answers
${questions.map((q) => line(`/questions/${q.slug}/`, q.data.question, clip(q.data.shortAnswer, 180))).join('\n')}

${langBlocks.join('\n\n')}

## Key sections
${HUBS.map(([p, title, note]) => line(p, title, note)).join('\n')}

## Full index
- [XML sitemap](${SITE}/sitemap.xml)
- [Image sitemap](${SITE}/sitemap-images.xml)
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

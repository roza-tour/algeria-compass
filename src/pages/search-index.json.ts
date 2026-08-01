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
import { ROUTES, type Lang } from '../i18n';
import * as luxEn from '../data/luxury.mjs';
import * as luxFr from '../data/luxury-fr.mjs';
import * as luxIt from '../data/luxury-it.mjs';
import * as luxEs from '../data/luxury-es.mjs';
import * as luxDe from '../data/luxury-de.mjs';

// Client-side search index. One row per indexable page, in EVERY language —
// the previous version indexed English only, so a French or German visitor
// searching their own site found nothing but English results (and the four
// translated sites are now more than half of what we publish).
//
// Rows are deliberately terse: the whole file is fetched once and cached, so
// every byte is paid by every searcher.
//   t = title, u = url, k = kind label, d = blurb, l = language
type Row = { t: string; u: string; k: string; d: string; l: Lang };

const clip = (s: unknown, n = 120) => {
  const t = String(s ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n).replace(/[\s,;:.–—-]+$/, '') + '…' : t;
};

// Kind labels, per language, so the result chips read naturally.
const KIND: Record<string, Record<Lang, string>> = {
  tour:        { en: 'Tour', fr: 'Circuit', it: 'Viaggio', es: 'Circuito', de: 'Reise' },
  luxury:      { en: 'Luxury', fr: 'Luxe', it: 'Lusso', es: 'Lujo', de: 'Luxus' },
  destination: { en: 'Destination', fr: 'Destination', it: 'Destinazione', es: 'Destino', de: 'Reiseziel' },
  guide:       { en: 'Guide', fr: 'Guide', it: 'Guida', es: 'Guía', de: 'Ratgeber' },
  state:       { en: 'State', fr: 'Wilaya', it: 'Provincia', es: 'Provincia', de: 'Provinz' },
  experience:  { en: 'Experience', fr: 'Expérience', it: 'Esperienza', es: 'Experiencia', de: 'Erlebnis' },
  article:     { en: 'Article', fr: 'Article', it: 'Articolo', es: 'Artículo', de: 'Artikel' },
  question:    { en: 'Question', fr: 'Question', it: 'Domanda', es: 'Pregunta', de: 'Frage' },
  page:        { en: 'Page', fr: 'Page', it: 'Pagina', es: 'Página', de: 'Seite' },
};
const kind = (k: keyof typeof KIND | string, l: Lang) => KIND[k]?.[l] ?? String(k);

// French practical guides are standalone routes with no data file to walk.
const FR_GUIDES: [string, string, string][] = [
  ['/fr/guide-voyage-algerie/', 'Guide de voyage complet en Algérie', 'Quand partir, visa, sécurité, transport, budget.'],
  ['/fr/visa-algerie/', "Visa pour l'Algérie", "Documents requis, lettre d'invitation, délais."],
  ['/fr/visa-arrivee-algerie/', "Faut-il un visa pour l'Algérie ?", "Les deux voies d'entrée, dont le visa à l'arrivée par le sud."],
  ['/fr/assistance-visa-algerie/', 'Assistance visa', 'Ce que nous préparons pour votre dossier, et à quel prix.'],
  ['/fr/evisa-algerie/', 'e-Visa et entrée en Algérie', "Comment fonctionne réellement l'entrée en Algérie."],
  ['/fr/securite-algerie/', "L'Algérie est-elle sûre ?", 'Le nord, le Sahara encadré, précautions.'],
  ['/fr/quand-partir-algerie/', 'Quand partir en Algérie ?', 'Meilleure période région par région.'],
  ['/fr/transport-algerie/', 'Se déplacer en Algérie', 'Vols intérieurs, train, bus, taxis et 4x4.'],
  ['/fr/itineraire-algerie/', 'Itinéraire : 7, 10 et 14 jours', "Trois itinéraires prêts à l'emploi."],
  ['/fr/budget-algerie/', 'Budget voyage en Algérie', 'Coûts réels et le taux de change parallèle.'],
  ['/fr/sahara-algerie/', 'Sahara algérien', "Djanet, le Tassili n'Ajjer, le Hoggar, Timimoun."],
  ['/fr/cuisine-algerienne/', 'Cuisine algérienne', 'Couscous, chorba, mechoui et pâtisseries.'],
  ['/fr/neige-sahara-algerie/', 'De la neige au Sahara', 'Quatre climats dans un seul voyage.'],
  ['/fr/noel-nouvel-an-algerie/', 'Noël et Nouvel An en Algérie', 'Le Sahara en pleine saison, sans la foule.'],
];

// Standalone translated pages with no data file (the e-Visa set).
const EXTRA: [Lang, string, string, string][] = [
  ['it', '/it/evisa-algeria/', 'e-Visa e ingresso in Algeria', "Come funziona davvero l'ingresso."],
  ['es', '/es/evisa-argelia/', 'e-Visa y entrada a Argelia', 'Cómo funciona realmente la entrada.'],
  ['de', '/de/evisa-algerien/', 'e-Visum & Einreise nach Algerien', 'Wie die Einreise wirklich funktioniert.'],
];

const EN_HUBS: [string, string, string][] = [
  ['/culture/', 'Algerian Culture', 'Civilizations, identity and traditions of Algeria.'],
  ['/food/', 'Algerian Food & Cuisine', 'The dishes, pastries and food culture of Algeria.'],
  ['/sweets/', 'Algerian Sweets & Pastries', "Baklawa, qalb el louz, griwech and Algeria's honeyed pastries."],
  ['/history/', 'History of Algeria', 'From Numidia and Rome to independence.'],
  ['/unesco/', 'UNESCO World Heritage Sites', "Algeria's seven UNESCO World Heritage sites."],
  ['/evisa/', 'e-Visa & Entry to Algeria', 'How entry works, including the Saharan e-Visa.'],
  ['/visa-support/', 'Visa Support', 'Free visa documentation with every booking.'],
  ['/algeria-visa-requirements/', 'Do you need a visa for Algeria?', 'The two entry routes, compared.'],
  ['/travel-guides/', 'Travel Guides', 'Practical guides for planning a trip to Algeria.'],
  ['/regions/', 'Regions of Algeria', 'Algeria by travel region — eight distinct worlds.'],
  ['/provinces/', 'States of Algeria', 'Region-by-region guides across the Algerian states.'],
  ['/booking-terms/', 'Booking & Cancellation Terms', 'How booking, payment and cancellation work.'],
  ['/contact/', 'Contact', 'Request a custom itinerary or a quote.'],
  ['/about/', 'About Algeria Compass', 'Who we are — a licensed local operator.'],
];

const TRANSLATED: { lang: Lang; tours: any; dests: any[]; guides: any[]; lux: any }[] = [
  { lang: 'fr', tours: TOURS_FR, dests: DESTINATIONS_FR, guides: [], lux: luxFr },
  { lang: 'it', tours: TOURS_IT, dests: DESTINATIONS_IT, guides: GUIDES_IT, lux: luxIt },
  { lang: 'es', tours: TOURS_ES, dests: DESTINATIONS_ES, guides: GUIDES_ES, lux: luxEs },
  { lang: 'de', tours: TOURS_DE, dests: DESTINATIONS_DE, guides: GUIDES_DE, lux: luxDe },
];

export const GET: APIRoute = async () => {
  const rows: Row[] = [];
  const tourList: any[] = (toursData as any).tours || (toursData as any);

  // ---------- English ----------
  for (const t of tourList) {
    rows.push({ t: t.title, u: `/tours/${t.id}/`, k: kind('tour', 'en'), d: clip(t.summary || t.hook), l: 'en' });
  }
  rows.push({ t: luxEn.LUX_COPY.crumbLabel, u: '/luxury/', k: kind('luxury', 'en'), d: clip(luxEn.LUX_COPY.seoDescription), l: 'en' });

  const colls: [string, string, string][] = [
    ['province', '/provinces/', 'state'],
    ['destination', '/destinations/', 'destination'],
    ['experience', '/experiences/', 'experience'],
    ['article', '/blog/', 'article'],
    ['question', '/questions/', 'question'],
  ];
  for (const [coll, base, k] of colls) {
    for (const it of (await getCollection(coll as any)) as any[]) {
      const d = it.data;
      rows.push({
        t: d.name || d.title || d.question || it.slug,
        u: `${base}${it.slug}/`,
        k: kind(k, 'en'),
        d: clip(d.excerpt || d.quickAnswer || d.shortAnswer || d.tagline || d.seo?.description),
        l: 'en',
      });
    }
  }
  for (const [u, t, d] of EN_HUBS) rows.push({ t, u, k: kind('page', 'en'), d: clip(d), l: 'en' });

  // ---------- FR / IT / ES / DE ----------
  for (const s of TRANSLATED) {
    const R = ROUTES[s.lang];
    rows.push({ t: s.lux.LUX_COPY.crumbLabel, u: R.luxury, k: kind('luxury', s.lang), d: clip(s.lux.LUX_COPY.seoDescription), l: s.lang });

    for (const t of tourList) {
      const tr = (s.tours as any)[t.id];
      if (tr?.full) rows.push({ t: tr.title, u: `${R.tours}${t.id}/`, k: kind('tour', s.lang), d: clip(tr.hook), l: s.lang });
    }
    for (const d of s.dests) {
      rows.push({ t: d.name, u: `${R.destinations}${d.slug}/`, k: kind('destination', s.lang), d: clip(d.quick ?? d.intro), l: s.lang });
    }
    for (const g of s.guides) {
      rows.push({ t: g.h1, u: `/${s.lang}/${g.slug}/`, k: kind('guide', s.lang), d: clip(g.seoDescription), l: s.lang });
    }
    // Hubs every language has.
    rows.push(
      { t: 'Contact', u: R.contact, k: kind('page', s.lang), d: '', l: s.lang },
      { t: 'UNESCO', u: R.unesco, k: kind('page', s.lang), d: '', l: s.lang },
    );
  }
  for (const [u, t, d] of FR_GUIDES) rows.push({ t, u, k: kind('guide', 'fr'), d: clip(d), l: 'fr' });
  for (const [l, u, t, d] of EXTRA) rows.push({ t, u, k: kind('guide', l), d: clip(d), l });

  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json' },
  });
};

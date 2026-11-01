// The eight region pages in the site's other languages.
//
// REGION_UI[lang].ready turns a language's region pages on: its routes are
// built, the English pages list it in hreflang, and links from that language's
// tour pages point to it. A language without `ready` keeps linking to English.
// Region texts are merged over the English (regions.ts) field by field, so a
// field not yet translated shows in English rather than leaving a gap.
import { REGION_NAMES } from './regionNames.mjs';
import { REGION_TEXT_FR } from './regions-fr.mjs';

export const REGION_ROUTES = { en: '/regions/', fr: '/fr/regions/', it: '/it/regioni/', es: '/es/regiones/', de: '/de/regionen/' };

const TEXT = { fr: REGION_TEXT_FR };

export const REGION_UI = {
  en: {
    ready: true, home: 'Home', regions: 'Regions', algeriaSuffix: ', Algeria', algeriaDash: ' — Algeria', scroll: 'Scroll to explore',
    dossier: 'The dossier', sites: 'Archaeological & cultural sites', see: 'What to see', character: 'The character of the region',
    defines: 'What defines it', notes: 'Travel notes', glance: 'At a glance', travelIt: 'Travel it with us', ourTour: 'Our tour in',
    ourTours: 'Our tours in', toursLead: 'Private and guided by local Algerian guides — each one can be shortened, lengthened or combined with another region.',
    allTours: 'All tours in this region', travelWith: 'Travel {r} with us',
    ctaText: 'Algeria Compass is a licensed Algerian tour operator. When you’re ready, we’ll craft a private, guided journey through this region with local Algerian guides.',
    plan: 'Plan a journey', allRegions: 'All regions', back: 'Back to all regions',
    hubTitle: 'The Regions of Algeria: One Country, Eight Worlds',
    hubDesc: "Explore Algeria's eight regions — Algiers, Constantine, Roman Algeria, the M'Zab, the Sahara, Tlemcen, Béjaïa & Kabylie and Bou Saâda.",
    hubImageAlt: 'The red dunes and sandstone of the Algerian Sahara near Djanet',
    hubKeywords: ['Algeria regions', 'regions of Algeria', 'Algeria Sahara', 'Roman Algeria', "M'Zab", 'Kabylie', 'Tlemcen'],
    hubKick: 'Algeria Compass · The Regions', hubH1a: 'One country,', hubH1b: 'eight worlds',
    hubSub: 'Algeria is the largest country in Africa — and no two corners of it feel alike. Choose a region and step into its colour, its culture and its monuments.',
    hubListName: 'The regions of Algeria', explore: 'Explore', regionWord: 'Region',
  },
  fr: {
    ready: true, home: 'Accueil', regions: 'Régions', algeriaSuffix: ', Algérie', algeriaDash: ' — Algérie', scroll: 'Faites défiler',
    dossier: 'Le dossier', sites: 'Sites archéologiques et culturels', see: 'À voir', character: 'Le caractère de la région',
    defines: 'Ce qui la définit', notes: 'Carnet de route', glance: 'En un coup d’œil', travelIt: 'Voyagez-y avec nous', ourTour: 'Notre circuit —',
    ourTours: 'Nos circuits —', toursLead: 'Privés et guidés par des guides algériens locaux — chacun peut être raccourci, prolongé ou combiné avec une autre région.',
    allTours: 'Tous les circuits de cette région', travelWith: 'Découvrez {r} avec nous',
    ctaText: 'Algeria Compass est un voyagiste algérien agréé. Quand vous serez prêt, nous composerons un voyage privé et guidé à travers cette région, avec des guides algériens locaux.',
    plan: 'Préparer un voyage', allRegions: 'Toutes les régions', back: 'Retour à toutes les régions',
    hubTitle: 'Les régions de l’Algérie : un pays, huit mondes',
    hubDesc: 'Découvrez les huit régions de l’Algérie — Alger, Constantine, l’Algérie romaine, le M’Zab, le Sahara, Tlemcen, Béjaïa et la Kabylie, Bou Saâda.',
    hubImageAlt: 'Les dunes rouges et les grès du Sahara algérien près de Djanet',
    hubKeywords: ['régions d’Algérie', 'Algérie régions', 'Sahara algérien', 'Algérie romaine', 'M’Zab', 'Kabylie', 'Tlemcen'],
    hubKick: 'Algeria Compass · Les régions', hubH1a: 'Un pays,', hubH1b: 'huit mondes',
    hubSub: 'L’Algérie est le plus grand pays d’Afrique — et aucun de ses coins ne ressemble à un autre. Choisissez une région et entrez dans ses couleurs, sa culture et ses monuments.',
    hubListName: 'Les régions de l’Algérie', explore: 'Découvrir', regionWord: 'Région',
  },
};

/** The page path of a region in a language (English when that language is not ready). */
export function regionHref(id, lang = 'en') {
  const l = REGION_UI[lang]?.ready ? lang : 'en';
  return `${REGION_ROUTES[l]}${id}/`;
}

/** The English region with its translation merged over it. */
export function localRegion(r, lang = 'en') {
  const t = (TEXT[lang] || {})[r.id];
  const names = (REGION_NAMES[lang] || {})[r.id];
  if (!t && !names) return r;
  const x = t || {};
  return {
    ...r,
    name: names?.name || r.name,
    heading: names?.heading || r.heading,
    kicker: x.kicker || r.kicker,
    tag: x.tag || r.tag,
    sub: x.sub || r.sub,
    intro: x.intro || r.intro,
    monuments: r.monuments.map((m, i) => ({ ...m, ...(x.monuments?.[i] || {}) })),
    facets: r.facets.map((f, i) => (x.facets?.[i] ? [f[0], x.facets[i][0], x.facets[i][1]] : f)),
    facts: x.facts || r.facts,
    links: r.links.map((l, i) => ({ ...l, label: x.links?.[i] || l.label })),
    seoTitle: x.seoTitle || r.seoTitle,
    seoDesc: x.seoDesc || r.seoDesc,
  };
}

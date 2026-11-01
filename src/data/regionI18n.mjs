// The eight region pages in the site's other languages.
//
// REGION_UI[lang].ready turns a language's region pages on: its routes are
// built, the English pages list it in hreflang, and links from that language's
// tour pages point to it. A language without `ready` keeps linking to English.
// Region texts are merged over the English (regions.ts) field by field, so a
// field not yet translated shows in English rather than leaving a gap.
import { REGION_NAMES } from './regionNames.mjs';
import { REGION_TEXT_FR } from './regions-fr.mjs';
import { REGION_TEXT_IT } from './regions-it.mjs';
import { REGION_TEXT_ES } from './regions-es.mjs';
import { REGION_TEXT_DE } from './regions-de.mjs';

export const REGION_ROUTES = { en: '/regions/', fr: '/fr/regions/', it: '/it/regioni/', es: '/es/regiones/', de: '/de/regionen/' };

const TEXT = { fr: REGION_TEXT_FR, it: REGION_TEXT_IT, es: REGION_TEXT_ES, de: REGION_TEXT_DE };

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
  it: {
    ready: true, home: 'Home', regions: 'Regioni', algeriaSuffix: ', Algeria', algeriaDash: ' — Algeria', scroll: 'Scorri per esplorare',
    dossier: 'Il dossier', sites: 'Siti archeologici e culturali', see: 'Da vedere', character: 'Il carattere della regione',
    defines: 'Che cosa la definisce', notes: 'Note di viaggio', glance: 'In breve', travelIt: 'Viaggiala con noi', ourTour: 'Il nostro viaggio —',
    ourTours: 'I nostri viaggi —', toursLead: 'Privati e accompagnati da guide algerine locali — ognuno si può accorciare, allungare o combinare con un’altra regione.',
    allTours: 'Tutti i viaggi in questa regione', travelWith: 'Scopri {r} con noi',
    ctaText: 'Algeria Compass è un tour operator algerino autorizzato. Quando sarete pronti, costruiremo un viaggio privato e guidato in questa regione, con guide algerine locali.',
    plan: 'Pianifica un viaggio', allRegions: 'Tutte le regioni', back: 'Torna a tutte le regioni',
    hubTitle: 'Le regioni dell’Algeria: un paese, otto mondi',
    hubDesc: 'Scopri le otto regioni dell’Algeria — Algeri, Costantina, l’Algeria romana, lo M’Zab, il Sahara, Tlemcen, Béjaïa e la Cabilia, Bou Saâda.',
    hubImageAlt: 'Le dune rosse e le arenarie del Sahara algerino vicino a Djanet',
    hubKeywords: ['regioni dell’Algeria', 'Algeria regioni', 'Sahara algerino', 'Algeria romana', 'M’Zab', 'Cabilia', 'Tlemcen'],
    hubKick: 'Algeria Compass · Le regioni', hubH1a: 'Un paese,', hubH1b: 'otto mondi',
    hubSub: 'L’Algeria è il paese più grande dell’Africa — e nessun angolo somiglia a un altro. Scegli una regione ed entra nei suoi colori, nella sua cultura e nei suoi monumenti.',
    hubListName: 'Le regioni dell’Algeria', explore: 'Scopri', regionWord: 'Regione',
  },
  es: {
    ready: true, home: 'Inicio', regions: 'Regiones', algeriaSuffix: ', Argelia', algeriaDash: ' — Argelia', scroll: 'Desplácese para explorar',
    dossier: 'El dosier', sites: 'Sitios arqueológicos y culturales', see: 'Qué ver', character: 'El carácter de la región',
    defines: 'Lo que la define', notes: 'Notas de viaje', glance: 'De un vistazo', travelIt: 'Viájela con nosotros', ourTour: 'Nuestro circuito —',
    ourTours: 'Nuestros circuitos —', toursLead: 'Privados y guiados por guías argelinos locales — cada uno puede acortarse, alargarse o combinarse con otra región.',
    allTours: 'Todos los circuitos de esta región', travelWith: 'Descubra {r} con nosotros',
    ctaText: 'Algeria Compass es una agencia argelina con licencia. Cuando esté listo, diseñaremos un viaje privado y guiado por esta región, con guías argelinos locales.',
    plan: 'Planificar un viaje', allRegions: 'Todas las regiones', back: 'Volver a todas las regiones',
    hubTitle: 'Las regiones de Argelia: un país, ocho mundos',
    hubDesc: 'Descubra las ocho regiones de Argelia — Argel, Constantina, la Argelia romana, el M’Zab, el Sáhara, Tlemcen, Béjaïa y la Cabilia, Bou Saâda.',
    hubImageAlt: 'Las dunas rojas y las areniscas del Sáhara argelino cerca de Djanet',
    hubKeywords: ['regiones de Argelia', 'Argelia regiones', 'Sáhara argelino', 'Argelia romana', 'M’Zab', 'Cabilia', 'Tlemcen'],
    hubKick: 'Algeria Compass · Las regiones', hubH1a: 'Un país,', hubH1b: 'ocho mundos',
    hubSub: 'Argelia es el país más grande de África — y ningún rincón se parece a otro. Elija una región y entre en sus colores, su cultura y sus monumentos.',
    hubListName: 'Las regiones de Argelia', explore: 'Descubrir', regionWord: 'Región',
  },
  de: {
    ready: true, home: 'Start', regions: 'Regionen', algeriaSuffix: ', Algerien', algeriaDash: ' — Algerien', scroll: 'Scrollen zum Entdecken',
    dossier: 'Das Dossier', sites: 'Archäologische & kulturelle Stätten', see: 'Sehenswertes', character: 'Der Charakter der Region',
    defines: 'Was sie ausmacht', notes: 'Reisenotizen', glance: 'Auf einen Blick', travelIt: 'Mit uns bereisen', ourTour: 'Unsere Reise —',
    ourTours: 'Unsere Reisen —', toursLead: 'Privat und mit einheimischen algerischen Guides — jede Reise lässt sich kürzen, verlängern oder mit einer anderen Region verbinden.',
    allTours: 'Alle Reisen in dieser Region', travelWith: '{r} mit uns entdecken',
    ctaText: 'Algeria Compass ist ein lizenzierter algerischer Reiseveranstalter. Wenn Sie so weit sind, gestalten wir eine private, geführte Reise durch diese Region, mit einheimischen algerischen Guides.',
    plan: 'Reise planen', allRegions: 'Alle Regionen', back: 'Zurück zu allen Regionen',
    hubTitle: 'Die Regionen Algeriens: ein Land, acht Welten',
    hubDesc: 'Entdecken Sie Algeriens acht Regionen — Algier, Constantine, das römische Algerien, den M’Zab, die Sahara, Tlemcen, Béjaïa & die Kabylei und Bou Saâda.',
    hubImageAlt: 'Die roten Dünen und Sandsteine der algerischen Sahara bei Djanet',
    hubKeywords: ['Regionen Algeriens', 'Algerien Regionen', 'algerische Sahara', 'römisches Algerien', 'M’Zab', 'Kabylei', 'Tlemcen'],
    hubKick: 'Algeria Compass · Die Regionen', hubH1a: 'Ein Land,', hubH1b: 'acht Welten',
    hubSub: 'Algerien ist das größte Land Afrikas — und keine Ecke gleicht der anderen. Wählen Sie eine Region und tauchen Sie ein in ihre Farben, ihre Kultur und ihre Denkmäler.',
    hubListName: 'Die Regionen Algeriens', explore: 'Entdecken', regionWord: 'Region',
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

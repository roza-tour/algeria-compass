// State guides (provinces) and experiences in the site's other languages.
//
// Each language file holds a shorter version of every English page -- the same
// facts, the same photographs, in that language: name, intro, a quick answer,
// three or four sections, key facts and FAQs (the pattern the destination
// guides already use). A language appears here once its file is complete; until
// then its pages are not built and links stay on the English pages.
import { PROVINCES_FR, EXPERIENCES_FR } from './guides-l10n-fr.mjs';
import { PROVINCES_IT, EXPERIENCES_IT } from './guides-l10n-it.mjs';
import { PROVINCES_ES, EXPERIENCES_ES } from './guides-l10n-es.mjs';
import { PROVINCES_DE, EXPERIENCES_DE } from './guides-l10n-de.mjs';

export const GUIDE_ROUTES = {
  province:   { en: '/provinces/',   fr: '/fr/wilayas/',     it: '/it/province/',    es: '/es/provincias/',      de: '/de/provinzen/' },
  experience: { en: '/experiences/', fr: '/fr/experiences/', it: '/it/esperienze/',  es: '/es/experiencias/', de: '/de/erlebnisse/' },
};

export const GUIDE_TEXT = {
  fr: { province: PROVINCES_FR, experience: EXPERIENCES_FR },
  it: { province: PROVINCES_IT, experience: EXPERIENCES_IT },
  es: { province: PROVINCES_ES, experience: EXPERIENCES_ES },
  de: { province: PROVINCES_DE, experience: EXPERIENCES_DE },
};

export const GUIDE_UI = {
  fr: {
    home: 'Accueil', provinces: 'Wilayas', experiences: 'Expériences', quick: 'En bref.', facts: 'Repères', faq: 'Questions fréquentes',
    readEn: 'Read in English', toursHere: 'Nos circuits qui passent ici', highlights: 'Les temps forts', itinerary: 'Le programme',
    others: { province: 'Autres wilayas', experience: 'Autres expériences' }, all: { province: 'Toutes les wilayas', experience: 'Toutes les expériences' },
    cta: 'Vous souhaitez l’inclure dans un voyage ? Voyez nos {tours} ou {contact} — nous répondons en français.',
    toursLink: 'circuits privés en Algérie', contactLink: 'écrivez-nous', photos: 'Galerie photos', photo: 'photo', region: 'Région',
    planBtn: 'Préparer mon voyage →', hubMore: 'Pour voyager sur place, voyez nos', kw: ['Algérie', 'voyage Algérie', 'guide Algérie'],
    hub: {
      province: { title: 'Les wilayas d’Algérie — guides pratiques | Algeria Compass', h1: 'Les wilayas d’Algérie', eyebrow: 'Guides pratiques',
        desc: 'Guides pratiques des wilayas d’Algérie : comment y aller, quand partir, combien de jours, quoi voir — d’Alger au Sahara.',
        lead: 'Comment y aller, quand partir et quoi voir, wilaya par wilaya — du littoral méditerranéen aux oasis du Sahara.' },
      experience: { title: 'Expériences en Algérie — voyages privés | Algeria Compass', h1: 'Expériences en Algérie', eyebrow: 'Voyages privés',
        desc: 'Des expériences privées en Algérie : le Tassili et la Tadrart, Constantine et ses ponts, l’Ouest andalou, l’oasis de Bou Saâda.',
        lead: 'Des voyages courts et thématiques, privés et guidés, pour découvrir une facette de l’Algérie en profondeur.' },
    },
  },
  it: {
    home: 'Home', provinces: 'Province', experiences: 'Esperienze', quick: 'In breve.', facts: 'Punti di riferimento', faq: 'Domande frequenti',
    readEn: 'Read in English', toursHere: 'I nostri viaggi che passano di qui', highlights: 'I momenti forti', itinerary: 'Il programma',
    others: { province: 'Altre province', experience: 'Altre esperienze' }, all: { province: 'Tutte le province', experience: 'Tutte le esperienze' },
    cta: 'Volete includerla in un viaggio? Scoprite i nostri {tours} oppure {contact} — rispondiamo in italiano.',
    toursLink: 'viaggi privati in Algeria', contactLink: 'scriveteci', photos: 'Galleria fotografica', photo: 'foto', region: 'Regione',
    planBtn: 'Pianifica il viaggio →', hubMore: 'Per viaggiare sul posto, scoprite i nostri', kw: ['Algeria', 'viaggio in Algeria', 'guida Algeria'],
    hub: {
      province: { title: 'Le province dell’Algeria — guide pratiche | Algeria Compass', h1: 'Le province dell’Algeria', eyebrow: 'Guide pratiche',
        desc: 'Guide pratiche alle province (wilaya) dell’Algeria: come arrivare, quando andare, quanti giorni, cosa vedere — da Algeri al Sahara.',
        lead: 'Come arrivare, quando andare e cosa vedere, provincia per provincia — dalla costa mediterranea alle oasi del Sahara.' },
      experience: { title: 'Esperienze in Algeria — viaggi privati | Algeria Compass', h1: 'Esperienze in Algeria', eyebrow: 'Viaggi privati',
        desc: 'Esperienze private in Algeria: il Tassili e la Tadrart, Costantina e i suoi ponti, l’Ovest andaluso, l’oasi di Bou Saâda.',
        lead: 'Viaggi brevi e a tema, privati e guidati, per scoprire a fondo un volto dell’Algeria.' },
    },
  },
  es: {
    home: 'Inicio', provinces: 'Provincias', experiences: 'Experiencias', quick: 'En resumen.', facts: 'Datos clave', faq: 'Preguntas frecuentes',
    readEn: 'Read in English', toursHere: 'Nuestros circuitos que pasan por aquí', highlights: 'Lo más destacado', itinerary: 'El programa',
    others: { province: 'Otras provincias', experience: 'Otras experiencias' }, all: { province: 'Todas las provincias', experience: 'Todas las experiencias' },
    cta: '¿Quiere incluirla en un viaje? Vea nuestros {tours} o {contact} — respondemos en español.',
    toursLink: 'circuitos privados por Argelia', contactLink: 'escríbanos', photos: 'Galería de fotos', photo: 'foto', region: 'Región',
    planBtn: 'Planificar mi viaje →', hubMore: 'Para viajar allí, vea nuestros', kw: ['Argelia', 'viaje a Argelia', 'guía de Argelia'],
    hub: {
      province: { title: 'Las provincias de Argelia — guías prácticas | Algeria Compass', h1: 'Las provincias de Argelia', eyebrow: 'Guías prácticas',
        desc: 'Guías prácticas de las provincias (wilayas) de Argelia: cómo llegar, cuándo ir, cuántos días y qué ver — de Argel al Sáhara.',
        lead: 'Cómo llegar, cuándo ir y qué ver, provincia por provincia — de la costa mediterránea a los oasis del Sáhara.' },
      experience: { title: 'Experiencias en Argelia — viajes privados | Algeria Compass', h1: 'Experiencias en Argelia', eyebrow: 'Viajes privados',
        desc: 'Experiencias privadas en Argelia: el Tassili y la Tadrart, Constantina y sus puentes, el Oeste andalusí, el oasis de Bou Saâda.',
        lead: 'Viajes cortos y temáticos, privados y guiados, para descubrir a fondo una cara de Argelia.' },
    },
  },
  de: {
    home: 'Start', provinces: 'Provinzen', experiences: 'Erlebnisse', quick: 'Kurz gesagt.', facts: 'Auf einen Blick', faq: 'Häufige Fragen',
    readEn: 'Read in English', toursHere: 'Unsere Reisen, die hier vorbeiführen', highlights: 'Die Höhepunkte', itinerary: 'Das Programm',
    others: { province: 'Weitere Provinzen', experience: 'Weitere Erlebnisse' }, all: { province: 'Alle Provinzen', experience: 'Alle Erlebnisse' },
    cta: 'Möchten Sie das in eine Reise einbauen? Sehen Sie sich unsere {tours} an oder {contact} — wir antworten auf Deutsch.',
    toursLink: 'privaten Algerien-Reisen', contactLink: 'schreiben Sie uns', photos: 'Bildergalerie', photo: 'Foto', region: 'Region',
    planBtn: 'Reise planen →', hubMore: 'Um vor Ort zu reisen, sehen Sie sich unsere', kw: ['Algerien', 'Algerien Reise', 'Algerien Reiseführer'],
    hub: {
      province: { title: 'Die Provinzen Algeriens — Reiseführer | Algeria Compass', h1: 'Die Provinzen Algeriens', eyebrow: 'Praktische Reiseführer',
        desc: 'Praktische Reiseführer zu Algeriens Provinzen (Wilayas): Anreise, beste Reisezeit, wie viele Tage, Sehenswertes — von Algier bis zur Sahara.',
        lead: 'Anreise, beste Reisezeit und Sehenswertes, Provinz für Provinz — von der Mittelmeerküste bis zu den Oasen der Sahara.' },
      experience: { title: 'Erlebnisse in Algerien — Privatreisen | Algeria Compass', h1: 'Erlebnisse in Algerien', eyebrow: 'Privatreisen',
        desc: 'Private Erlebnisse in Algerien: Tassili und Tadrart, Constantine und seine Brücken, der andalusische Westen, die Oase Bou Saâda.',
        lead: 'Kurze, thematische Reisen, privat und geführt, um eine Seite Algeriens gründlich zu entdecken.' },
    },
  },
};

/** Languages whose guides of this kind are built. */
export const guideLangs = kind => Object.keys(GUIDE_TEXT).filter(l => GUIDE_TEXT[l][kind]);

/** Path of a guide in a language, or the English path when it is not translated. */
export function guideHref(kind, slug, lang = 'en') {
  const t = GUIDE_TEXT[lang]?.[kind]?.[slug];
  return `${GUIDE_ROUTES[kind][t ? lang : 'en']}${slug}/`;
}

/** hreflang alternates for one guide (English plus every language that has it). */
export function guideAlternates(site, kind, slug) {
  const langs = ['en', ...guideLangs(kind).filter(l => GUIDE_TEXT[l][kind][slug])];
  if (langs.length < 2) return [];
  return langs.map(l => ({ hreflang: l, href: site + guideHref(kind, slug, l) }))
    .concat([{ hreflang: 'x-default', href: site + guideHref(kind, slug, 'en') }]);
}

// State guides (provinces) and experiences in the site's other languages.
//
// Each language file holds a shorter version of every English page -- the same
// facts, the same photographs, in that language: name, intro, a quick answer,
// three or four sections, key facts and FAQs (the pattern the destination
// guides already use). A language appears here once its file is complete; until
// then its pages are not built and links stay on the English pages.
import { PROVINCES_FR, EXPERIENCES_FR } from './guides-l10n-fr.mjs';

export const GUIDE_ROUTES = {
  province:   { en: '/provinces/',   fr: '/fr/wilayas/',     it: '/it/wilaya/',      es: '/es/wilayas/',      de: '/de/provinzen/' },
  experience: { en: '/experiences/', fr: '/fr/experiences/', it: '/it/esperienze/',  es: '/es/experiencias/', de: '/de/erlebnisse/' },
};

export const GUIDE_TEXT = {
  fr: { province: PROVINCES_FR, experience: EXPERIENCES_FR },
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

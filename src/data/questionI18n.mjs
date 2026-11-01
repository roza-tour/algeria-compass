// The travel questions in the site's other languages. Each language file holds
// a condensed version of every English answer (same facts), keyed by the
// English slug. A language is built once its file is listed in Q_TEXT.
import { QUESTIONS_FR } from './questions-fr.mjs';

export const Q_ROUTES = { en: '/questions/', fr: '/fr/questions/', it: '/it/domande/', es: '/es/preguntas/', de: '/de/fragen/' };

export const Q_TEXT = { fr: QUESTIONS_FR };

export const Q_UI = {
  fr: {
    home: 'Accueil', hub: 'Questions', quick: 'Réponse courte', facts: 'Repères', related: 'Autres questions',
    readEn: 'Read in English', all: 'Toutes les questions', readMore: 'Lire la réponse complète',
    cats: { Cost: 'Budget et argent', Culture: 'Culture et usages', Heritage: 'Patrimoine', Planning: 'Préparer le voyage', Safety: 'Sécurité', Transport: 'Transports', Visa: 'Visa' },
    ctaH: 'Une question qui n’est pas ici ?', ctaP: 'Écrivez-nous : nous répondons en français et nous préparons des voyages privés partout en Algérie.',
    ctaBtn: 'Nous écrire', toursBtn: 'Voir nos circuits',
    hubTitle: 'Voyage en Algérie : questions et réponses | Algeria Compass',
    hubDesc: 'Les réponses claires aux questions sur le voyage en Algérie : sécurité, visa, meilleure période, budget, transports, culture et Sahara.',
    hubH1: 'Voyager en Algérie : questions et réponses', hubEyebrow: 'Base de connaissances',
    hubLead: 'Des réponses claires et pratiques aux questions les plus fréquentes sur un voyage en Algérie, classées par thème.',
  },
};

/** Languages whose question pages are built. */
export const qLangs = () => Object.keys(Q_TEXT);

/** Path of a question in a language (English when not translated). */
export function qHref(slug, lang = 'en') {
  return `${Q_ROUTES[Q_TEXT[lang]?.[slug] ? lang : 'en']}${slug}/`;
}

/** hreflang alternates for one question, or for the index when slug is empty. */
export function qAlternates(site, slug) {
  const langs = ['en', ...qLangs().filter(l => !slug || Q_TEXT[l][slug])];
  if (langs.length < 2) return [];
  const href = l => site + (slug ? qHref(slug, l) : Q_ROUTES[l]);
  return langs.map(l => ({ hreflang: l, href: href(l) })).concat([{ hreflang: 'x-default', href: href('en') }]);
}

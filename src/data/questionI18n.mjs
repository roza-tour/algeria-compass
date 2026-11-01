// The travel questions in the site's other languages. Each language file holds
// a condensed version of every English answer (same facts), keyed by the
// English slug. A language is built once its file is listed in Q_TEXT.
import { QUESTIONS_FR } from './questions-fr.mjs';
import { QUESTIONS_IT } from './questions-it.mjs';
import { QUESTIONS_ES } from './questions-es.mjs';
import { QUESTIONS_DE } from './questions-de.mjs';

export const Q_ROUTES = { en: '/questions/', fr: '/fr/questions/', it: '/it/domande/', es: '/es/preguntas/', de: '/de/fragen/' };

export const Q_TEXT = { fr: QUESTIONS_FR, it: QUESTIONS_IT, es: QUESTIONS_ES, de: QUESTIONS_DE };

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
  it: {
    home: 'Home', hub: 'Domande', quick: 'Risposta breve', facts: 'Punti chiave', related: 'Altre domande',
    readEn: 'Read in English', all: 'Tutte le domande', readMore: 'Leggi la risposta completa',
    cats: { Cost: 'Budget e denaro', Culture: 'Cultura e usanze', Heritage: 'Patrimonio', Planning: 'Preparare il viaggio', Safety: 'Sicurezza', Transport: 'Trasporti', Visa: 'Visto' },
    ctaH: 'Una domanda che non trovate qui?', ctaP: 'Scriveteci: rispondiamo in italiano e organizziamo viaggi privati in tutta l’Algeria.',
    ctaBtn: 'Scriveteci', toursBtn: 'Vedi i nostri viaggi',
    hubTitle: 'Viaggio in Algeria: domande e risposte | Algeria Compass',
    hubDesc: 'Risposte chiare alle domande sul viaggio in Algeria: sicurezza, visto, periodo migliore, budget, trasporti, cultura e Sahara.',
    hubH1: 'Viaggiare in Algeria: domande e risposte', hubEyebrow: 'Base di conoscenza',
    hubLead: 'Risposte chiare e pratiche alle domande più frequenti su un viaggio in Algeria, divise per tema.',
  },
  es: {
    home: 'Inicio', hub: 'Preguntas', quick: 'Respuesta corta', facts: 'Datos clave', related: 'Otras preguntas',
    readEn: 'Read in English', all: 'Todas las preguntas', readMore: 'Leer la respuesta completa',
    cats: { Cost: 'Presupuesto y dinero', Culture: 'Cultura y costumbres', Heritage: 'Patrimonio', Planning: 'Preparar el viaje', Safety: 'Seguridad', Transport: 'Transporte', Visa: 'Visado' },
    ctaH: '¿Una pregunta que no está aquí?', ctaP: 'Escríbanos: respondemos en español y organizamos viajes privados por toda Argelia.',
    ctaBtn: 'Escríbanos', toursBtn: 'Ver nuestros circuitos',
    hubTitle: 'Viajar a Argelia: preguntas y respuestas | Algeria Compass',
    hubDesc: 'Respuestas claras a las preguntas sobre viajar a Argelia: seguridad, visado, mejor época, presupuesto, transporte, cultura y Sáhara.',
    hubH1: 'Viajar a Argelia: preguntas y respuestas', hubEyebrow: 'Base de conocimiento',
    hubLead: 'Respuestas claras y prácticas a las preguntas más frecuentes sobre un viaje a Argelia, ordenadas por tema.',
  },
  de: {
    home: 'Start', hub: 'Fragen', quick: 'Kurze Antwort', facts: 'Auf einen Blick', related: 'Weitere Fragen',
    readEn: 'Read in English', all: 'Alle Fragen', readMore: 'Ganze Antwort lesen',
    cats: { Cost: 'Budget und Geld', Culture: 'Kultur und Sitten', Heritage: 'Kulturerbe', Planning: 'Reiseplanung', Safety: 'Sicherheit', Transport: 'Verkehr', Visa: 'Visum' },
    ctaH: 'Ihre Frage ist nicht dabei?', ctaP: 'Schreiben Sie uns: Wir antworten auf Deutsch und planen Privatreisen in ganz Algerien.',
    ctaBtn: 'Schreiben Sie uns', toursBtn: 'Unsere Reisen ansehen',
    hubTitle: 'Algerien-Reise: Fragen und Antworten | Algeria Compass',
    hubDesc: 'Klare Antworten auf Fragen zur Algerien-Reise: Sicherheit, Visum, beste Reisezeit, Budget, Verkehr, Kultur und Sahara.',
    hubH1: 'Reisen nach Algerien: Fragen und Antworten', hubEyebrow: 'Wissensbasis',
    hubLead: 'Klare, praktische Antworten auf die häufigsten Fragen zu einer Algerien-Reise, nach Themen geordnet.',
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

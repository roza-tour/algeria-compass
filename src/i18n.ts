// Central language registry.
//
// The site was built for two languages with `lang === 'fr'` checks scattered
// through the chrome. Adding Italian made that unmanageable, so every UI string
// and every language-specific route lives here instead. Adding a fourth
// language means adding one entry per map below — no component changes.

export const LANGS = ['en', 'fr', 'it', 'es', 'de'] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);
/** Narrow an arbitrary `lang` prop to a supported language. */
export const asLang = (v: unknown): Lang => (isLang(v) ? v : 'en');

export const LANG_META: Record<Lang, { label: string; name: string; ogLocale: string; home: string }> = {
  en: { label: 'EN', name: 'English',  ogLocale: 'en_US', home: '/' },
  fr: { label: 'FR', name: 'Français', ogLocale: 'fr_FR', home: '/fr/' },
  it: { label: 'IT', name: 'Italiano', ogLocale: 'it_IT', home: '/it/' },
  es: { label: 'ES', name: 'Español',  ogLocale: 'es_ES', home: '/es/' },
  de: { label: 'DE', name: 'Deutsch',  ogLocale: 'de_DE', home: '/de/' },
};

/** Section roots per language — used for nav, hreflang and the sitemap. */
export const ROUTES: Record<Lang, { tours: string; destinations: string }> = {
  en: { tours: '/tours/',        destinations: '/destinations/' },
  fr: { tours: '/fr/circuits/',  destinations: '/fr/destinations/' },
  it: { tours: '/it/circuiti/',  destinations: '/it/destinazioni/' },
  es: { tours: '/es/circuitos/', destinations: '/es/destinos/' },
  de: { tours: '/de/reisen/',    destinations: '/de/reiseziele/' },
};

/** Chrome strings. Keys are deliberately few: this is furniture, not content. */
export const UI: Record<Lang, Record<string, string>> = {
  en: {
    skip: 'Skip to content',
    planTrip: 'Plan a Trip', planShort: 'Plan trip', planAria: 'Plan your trip',
    waAria: 'Chat on WhatsApp', waMobile: 'WhatsApp us',
    waMessage: "Hi Algeria Compass — I'd like help planning a trip to Algeria.",
    cookieLabel: 'Cookie notice',
    cookieBody: 'We use cookies only to understand how visitors use the site (Google Analytics). Nothing is set until you agree. See our ',
    cookieLink: 'privacy & editorial standards',
    cookieDecline: 'Decline', cookieAccept: 'Accept analytics',
    seasonLabel: 'Season note', dismiss: 'Dismiss',
    readIn: 'Read in English', languageAria: 'Change language',
  },
  fr: {
    skip: 'Aller au contenu',
    planTrip: 'Planifier', planShort: 'Planifier', planAria: 'Planifier votre voyage',
    waAria: 'Discuter sur WhatsApp', waMobile: 'Nous écrire sur WhatsApp',
    waMessage: "Bonjour Algeria Compass — j'aimerais organiser un voyage en Algérie.",
    cookieLabel: 'Avis relatif aux cookies',
    cookieBody: "Nous utilisons des cookies uniquement pour comprendre comment le site est consulté (Google Analytics). Rien n'est déposé sans votre accord. Voir nos ",
    cookieLink: 'règles éditoriales et de confidentialité',
    cookieDecline: 'Refuser', cookieAccept: 'Accepter',
    seasonLabel: 'Info saison', dismiss: 'Fermer',
    readIn: 'Lire en français', languageAria: 'Changer de langue',
  },
  it: {
    skip: 'Vai al contenuto',
    planTrip: 'Progetta il viaggio', planShort: 'Progetta', planAria: 'Progetta il tuo viaggio',
    waAria: 'Scrivici su WhatsApp', waMobile: 'Scrivici su WhatsApp',
    waMessage: 'Salve Algeria Compass — vorrei organizzare un viaggio in Algeria.',
    cookieLabel: 'Avviso sui cookie',
    cookieBody: 'Usiamo i cookie solo per capire come viene consultato il sito (Google Analytics). Nulla viene installato senza il tuo consenso. Consulta le nostre ',
    cookieLink: 'norme editoriali e sulla privacy',
    cookieDecline: 'Rifiuta', cookieAccept: 'Accetta',
    seasonLabel: 'Nota stagionale', dismiss: 'Chiudi',
    readIn: 'Leggi in italiano', languageAria: 'Cambia lingua',
  },
  es: {
    skip: 'Ir al contenido',
    planTrip: 'Planifica tu viaje', planShort: 'Planificar', planAria: 'Planifica tu viaje',
    waAria: 'Escríbenos por WhatsApp', waMobile: 'Escríbenos por WhatsApp',
    waMessage: 'Hola Algeria Compass — me gustaría organizar un viaje a Argelia.',
    cookieLabel: 'Aviso de cookies',
    cookieBody: 'Usamos cookies únicamente para entender cómo se consulta el sitio (Google Analytics). No se instala nada sin tu consentimiento. Consulta nuestras ',
    cookieLink: 'normas editoriales y de privacidad',
    cookieDecline: 'Rechazar', cookieAccept: 'Aceptar',
    seasonLabel: 'Nota de temporada', dismiss: 'Cerrar',
    readIn: 'Leer en español', languageAria: 'Cambiar de idioma',
  },
  de: {
    skip: 'Zum Inhalt springen',
    planTrip: 'Reise planen', planShort: 'Planen', planAria: 'Ihre Reise planen',
    waAria: 'Schreiben Sie uns auf WhatsApp', waMobile: 'Schreiben Sie uns auf WhatsApp',
    waMessage: 'Hallo Algeria Compass — ich möchte eine Reise nach Algerien planen.',
    cookieLabel: 'Cookie-Hinweis',
    cookieBody: 'Wir verwenden Cookies ausschließlich, um zu verstehen, wie die Website genutzt wird (Google Analytics). Ohne Ihre Zustimmung wird nichts gesetzt. Siehe unsere ',
    cookieLink: 'Redaktions- und Datenschutzrichtlinien',
    cookieDecline: 'Ablehnen', cookieAccept: 'Akzeptieren',
    seasonLabel: 'Saisonhinweis', dismiss: 'Schließen',
    readIn: 'Auf Deutsch lesen', languageAria: 'Sprache wechseln',
  },
};

export const t = (lang: Lang, key: string) => UI[lang][key] ?? UI.en[key] ?? key;

/**
 * Build a full hreflang set from a partial map of language -> path.
 * English is always x-default; a language with no translation is simply absent,
 * so hreflang can never point at a page that was not built.
 */
export function alternatesFor(site: string, paths: Partial<Record<Lang, string>>) {
  const s = site.replace(/\/$/, '');
  const out = LANGS.filter(l => paths[l]).map(l => ({ hreflang: l, href: s + paths[l]! }));
  if (paths.en) out.push({ hreflang: 'x-default', href: s + paths.en });
  return out;
}

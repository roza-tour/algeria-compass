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

/**
 * Section roots per language — used for nav, hreflang and the sitemap.
 *
 * `contact` matters more than it looks: a visitor who has read the whole site
 * in German should not be handed an English form at the one moment they are
 * ready to book. Every key here must exist as a real built page in every
 * language, or the nav will link to a 404.
 */
export const ROUTES: Record<Lang, {
  tours: string; destinations: string; contact: string;
  about: string; unesco: string; luxury: string;
}> = {
  en: { tours: '/tours/',        destinations: '/destinations/',  contact: '/contact/',
        about: '/about/',              unesco: '/unesco/',           luxury: '/luxury/' },
  fr: { tours: '/fr/circuits/',  destinations: '/fr/destinations/', contact: '/fr/contact/',
        about: '/fr/a-propos/',        unesco: '/fr/unesco-algerie/', luxury: '/fr/luxe/' },
  it: { tours: '/it/circuiti/',  destinations: '/it/destinazioni/', contact: '/it/contatto/',
        about: '/it/chi-siamo/',       unesco: '/it/unesco-algeria/', luxury: '/it/lusso/' },
  es: { tours: '/es/circuitos/', destinations: '/es/destinos/',     contact: '/es/contacto/',
        about: '/es/quienes-somos/',   unesco: '/es/unesco-argelia/', luxury: '/es/lujo/' },
  de: { tours: '/de/reisen/',    destinations: '/de/reiseziele/',   contact: '/de/kontakt/',
        about: '/de/ueber-uns/',       unesco: '/de/unesco-algerien/', luxury: '/de/luxus/' },
};

/** A path map for `alternatesFor`, built from one ROUTES key. */
export const routeAlternates = (key: keyof (typeof ROUTES)['en']) =>
  Object.fromEntries(LANGS.map(l => [l, ROUTES[l][key]])) as Record<Lang, string>;

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
    quickAnswer: 'Quick answer',
    ctaEyebrow: 'Travel planning', ctaHeading: 'Planning a trip to Algeria?',
    ctaText: 'Algeria Compass is a licensed Algerian tour operator. Tell us your dates and interests and we will craft your private, guided tour across Algeria.',
    ctaBtn: 'Plan a journey',
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
    quickAnswer: 'Réponse rapide',
    ctaEyebrow: 'Organiser votre voyage', ctaHeading: 'Un voyage en Algérie en préparation ?',
    ctaText: "Algeria Compass est un opérateur touristique algérien agréé. Dites-nous vos dates et vos centres d'intérêt, et nous concevrons votre circuit privé et guidé à travers l'Algérie.",
    ctaBtn: 'Planifier un voyage',
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
    quickAnswer: 'Risposta rapida',
    ctaEyebrow: 'Organizzare il viaggio', ctaHeading: 'State pensando a un viaggio in Algeria?',
    ctaText: 'Algeria Compass è un tour operator algerino autorizzato. Diteci le vostre date e i vostri interessi e costruiremo il vostro viaggio privato e guidato in Algeria.',
    ctaBtn: 'Progetta il viaggio',
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
    quickAnswer: 'Respuesta rápida',
    ctaEyebrow: 'Organizar su viaje', ctaHeading: '¿Está planeando un viaje a Argelia?',
    ctaText: 'Algeria Compass es un operador turístico argelino autorizado. Díganos sus fechas y sus intereses y diseñaremos su circuito privado y guiado por Argelia.',
    ctaBtn: 'Planificar el viaje',
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
    quickAnswer: 'Kurze Antwort',
    ctaEyebrow: 'Reiseplanung', ctaHeading: 'Planen Sie eine Reise nach Algerien?',
    ctaText: 'Algeria Compass ist ein lizenzierter algerischer Reiseveranstalter. Nennen Sie uns Ihre Reisedaten und Interessen, und wir gestalten Ihre private, geführte Rundreise durch Algerien.',
    ctaBtn: 'Reise planen',
  },
};

export const t = (lang: Lang, key: string) => UI[lang][key] ?? UI.en[key] ?? key;

/**
 * Enquiry-form strings. The interest chips carry an English *value* in every
 * language (`interestValues`) so the owner's inbox and the WhatsApp handoff
 * stay in one language whatever the visitor reads — only the label changes.
 */
export interface FormStrings {
  name: string; email: string; country: string; countryPh: string;
  travellers: string; dates: string; datesPh: string; days: string; daysPh: string;
  interests: string; message: string; messagePh: string;
  submit: string; sending: string; viaWa: string;
  note: string; noteTail: string;
  successH: string; successP: string; successWa: string;
  errRequired: string; errEmail: string; errSend: string; errNetwork: string; errRetry: string;
  interestLabels: string[];
}

export const INTEREST_VALUES = ['Sahara','Roman ruins','Andalusian heritage','Kabylie & coast','Food','Culture','Photography','Family','Luxury'];

export const FORM: Record<Lang, FormStrings> = {
  en: {
    name: 'Your name', email: 'Email', country: 'Country', countryPh: "Where you're travelling from",
    travellers: 'Travellers', dates: 'Travel dates', datesPh: 'e.g. October, or flexible',
    days: 'How many days?', daysPh: 'e.g. 10',
    interests: 'Interests', message: 'Your message',
    messagePh: "Tell us what you'd like to see and any questions.",
    submit: 'Send my request', sending: 'Sending…', viaWa: 'Or send via WhatsApp',
    note: 'We reply within a few hours to', noteTail: 'WhatsApp is optional — the form works on its own.',
    successH: 'Thank you — your request is on its way.',
    successP: "We've emailed your details to our team and will reply within a few hours. Prefer to chat now?",
    successWa: 'Message us on WhatsApp',
    errRequired: 'Please add your name, a valid email and a message.',
    errEmail: 'Please enter a valid email address.',
    errSend: 'Sorry — something went wrong. Please WhatsApp or email us directly.',
    errNetwork: 'Network error. Please try again, or WhatsApp / email us directly.',
    errRetry: 'Sorry — that didn’t send. Please try again, or WhatsApp / email us directly.',
    interestLabels: ['Sahara','Roman ruins','Andalusian heritage','Kabylie & coast','Food','Culture','Photography','Family','Luxury'],
  },
  fr: {
    name: 'Votre nom', email: 'E-mail', country: 'Pays', countryPh: "D'où voyagez-vous ?",
    travellers: 'Voyageurs', dates: 'Dates du voyage', datesPh: 'ex. octobre, ou flexible',
    days: 'Combien de jours ?', daysPh: 'ex. 10',
    interests: 'Centres d’intérêt', message: 'Votre message',
    messagePh: 'Dites-nous ce que vous aimeriez voir et vos questions.',
    submit: 'Envoyer ma demande', sending: 'Envoi…', viaWa: 'Ou envoyer via WhatsApp',
    note: 'Nous répondons en quelques heures au', noteTail: "WhatsApp est facultatif — le formulaire suffit.",
    successH: 'Merci — votre demande est partie.',
    successP: 'Nous avons transmis vos informations à notre équipe et vous répondrons sous quelques heures. Vous préférez discuter tout de suite ?',
    successWa: 'Écrivez-nous sur WhatsApp',
    errRequired: 'Merci d’indiquer votre nom, un e-mail valide et un message.',
    errEmail: 'Merci de saisir une adresse e-mail valide.',
    errSend: 'Désolé — une erreur est survenue. Écrivez-nous sur WhatsApp ou par e-mail.',
    errNetwork: 'Erreur réseau. Réessayez, ou écrivez-nous sur WhatsApp / par e-mail.',
    errRetry: "Désolé — l'envoi a échoué. Réessayez, ou écrivez-nous sur WhatsApp / par e-mail.",
    interestLabels: ['Sahara','Cités romaines','Héritage andalou','Kabylie & côte','Cuisine','Culture','Photographie','Famille','Luxe'],
  },
  it: {
    name: 'Il vostro nome', email: 'E-mail', country: 'Paese', countryPh: 'Da dove viaggiate?',
    travellers: 'Viaggiatori', dates: 'Date del viaggio', datesPh: 'es. ottobre, o flessibile',
    days: 'Quanti giorni?', daysPh: 'es. 10',
    interests: 'Interessi', message: 'Il vostro messaggio',
    messagePh: 'Diteci cosa vorreste vedere e le vostre domande.',
    submit: 'Invia la richiesta', sending: 'Invio…', viaWa: 'Oppure invia su WhatsApp',
    note: 'Rispondiamo in poche ore al', noteTail: 'WhatsApp è facoltativo — il modulo funziona da solo.',
    successH: 'Grazie — la vostra richiesta è partita.',
    successP: 'Abbiamo inoltrato i vostri dati al nostro team e risponderemo entro poche ore. Preferite parlarne subito?',
    successWa: 'Scriveteci su WhatsApp',
    errRequired: 'Inserite nome, un indirizzo e-mail valido e un messaggio.',
    errEmail: 'Inserite un indirizzo e-mail valido.',
    errSend: 'Spiacenti — qualcosa è andato storto. Scriveteci su WhatsApp o via e-mail.',
    errNetwork: 'Errore di rete. Riprovate, oppure scriveteci su WhatsApp / via e-mail.',
    errRetry: "Spiacenti — l'invio non è riuscito. Riprovate, oppure scriveteci su WhatsApp / via e-mail.",
    interestLabels: ['Sahara','Città romane','Eredità andalusa','Cabilia e costa','Cucina','Cultura','Fotografia','Famiglia','Lusso'],
  },
  es: {
    name: 'Su nombre', email: 'Correo electrónico', country: 'País', countryPh: '¿Desde dónde viaja?',
    travellers: 'Viajeros', dates: 'Fechas del viaje', datesPh: 'p. ej. octubre, o flexible',
    days: '¿Cuántos días?', daysPh: 'p. ej. 10',
    interests: 'Intereses', message: 'Su mensaje',
    messagePh: 'Cuéntenos qué le gustaría ver y sus dudas.',
    submit: 'Enviar mi solicitud', sending: 'Enviando…', viaWa: 'O enviar por WhatsApp',
    note: 'Respondemos en pocas horas al', noteTail: 'WhatsApp es opcional — el formulario funciona por sí solo.',
    successH: 'Gracias — su solicitud está en camino.',
    successP: 'Hemos enviado sus datos a nuestro equipo y le responderemos en unas horas. ¿Prefiere hablar ahora?',
    successWa: 'Escríbanos por WhatsApp',
    errRequired: 'Indique su nombre, un correo válido y un mensaje.',
    errEmail: 'Introduzca una dirección de correo válida.',
    errSend: 'Lo sentimos — algo ha fallado. Escríbanos por WhatsApp o correo electrónico.',
    errNetwork: 'Error de red. Inténtelo de nuevo, o escríbanos por WhatsApp / correo.',
    errRetry: 'Lo sentimos — no se pudo enviar. Inténtelo de nuevo, o escríbanos por WhatsApp / correo.',
    interestLabels: ['Sáhara','Ciudades romanas','Herencia andalusí','Cabilia y costa','Gastronomía','Cultura','Fotografía','Familia','Lujo'],
  },
  de: {
    name: 'Ihr Name', email: 'E-Mail', country: 'Land', countryPh: 'Woher reisen Sie an?',
    travellers: 'Reisende', dates: 'Reisedaten', datesPh: 'z. B. Oktober, oder flexibel',
    days: 'Wie viele Tage?', daysPh: 'z. B. 10',
    interests: 'Interessen', message: 'Ihre Nachricht',
    messagePh: 'Sagen Sie uns, was Sie sehen möchten, und stellen Sie Ihre Fragen.',
    submit: 'Anfrage senden', sending: 'Wird gesendet…', viaWa: 'Oder über WhatsApp senden',
    note: 'Wir antworten innerhalb weniger Stunden unter', noteTail: 'WhatsApp ist optional — das Formular genügt.',
    successH: 'Danke — Ihre Anfrage ist unterwegs.',
    successP: 'Wir haben Ihre Angaben an unser Team geschickt und melden uns innerhalb weniger Stunden. Lieber gleich sprechen?',
    successWa: 'Schreiben Sie uns auf WhatsApp',
    errRequired: 'Bitte geben Sie Ihren Namen, eine gültige E-Mail-Adresse und eine Nachricht an.',
    errEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    errSend: 'Leider ist etwas schiefgelaufen. Schreiben Sie uns per WhatsApp oder E-Mail.',
    errNetwork: 'Netzwerkfehler. Bitte erneut versuchen, oder schreiben Sie uns per WhatsApp / E-Mail.',
    errRetry: 'Leider konnte nicht gesendet werden. Bitte erneut versuchen, oder schreiben Sie uns per WhatsApp / E-Mail.',
    interestLabels: ['Sahara','Römische Städte','Andalusisches Erbe','Kabylei & Küste','Küche','Kultur','Fotografie','Familie','Luxus'],
  },
};

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

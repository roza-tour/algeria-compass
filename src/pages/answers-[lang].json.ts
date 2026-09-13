import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import toursData from '../data/tours.json';
import { TOURS_FR } from '../data/tours-fr';
import { TOURS_IT } from '../data/tours-it';
import { TOURS_ES } from '../data/tours-es';
import { TOURS_DE } from '../data/tours-de';
import { FAQ } from '../data/faq';
import { LANGS, ROUTES, type Lang } from '../i18n';

// Answer index for the on-site assistant (src/components/AskWidget.astro).
//
// This is a RETRIEVAL index, not a generative one: every string in here was
// written by the team and already published somewhere on the site, and the
// widget only ever shows one of these verbatim next to a link to its source.
// Nothing is generated at answer time, so the assistant cannot invent a price,
// a date or a visa rule — the worst it can do is fail to find a match, which
// it says plainly and hands the visitor to a human.
//
// One file per language, fetched lazily the first time a visitor opens the
// widget, so the ~50-70 KB never lands on a page view that does not use it.
//
// Rows are terse: q = question/label, a = answer, u = source URL, k = kind.

type Item = { q: string; a: string; u: string; k: string };
type Rule = { id: string; p: string[]; a: string; u: string };

export function getStaticPaths() {
  return LANGS.map(lang => ({ params: { lang } }));
}

const clean = (s: unknown) =>
  String(s ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const TOURS_BY_LANG: Record<Lang, Record<string, any> | null> = {
  en: null, fr: TOURS_FR, it: TOURS_IT, es: TOURS_ES, de: TOURS_DE,
};

// Kind labels shown as a chip beside each answer.
const KIND: Record<string, Record<Lang, string>> = {
  question: { en: 'Question', fr: 'Question', it: 'Domanda', es: 'Pregunta', de: 'Frage' },
  faq:      { en: 'FAQ',      fr: 'FAQ',      it: 'FAQ',     es: 'FAQ',      de: 'FAQ' },
  tour:     { en: 'Tour',     fr: 'Circuit',  it: 'Viaggio', es: 'Circuito', de: 'Reise' },
  practical:{ en: 'Good to know', fr: 'Bon à savoir', it: 'Da sapere', es: 'Conviene saber', de: 'Gut zu wissen' },
};

// ---------------------------------------------------------------------------
// BUSINESS RULES — owner-confirmed, 2026-09-13.
// These are matched on intent BEFORE the retrieval index, because they are the
// questions that decide a booking and the answer must be exact every time
// rather than whichever page happens to score highest.
// Update these here and nowhere else.
// ---------------------------------------------------------------------------
const RULES: Record<Lang, Rule[]> = {
  en: [
    { id: 'price', u: '/tours/',
      p: ['price', 'prices', 'cost', 'costs', 'how much', 'expensive', 'cheap', 'euro', 'budget'],
      a: 'Every price you see on the site is the real, fixed price for that tour — it is on each tour page, per person. It covers a private trip or a small group. The only thing that changes it is a custom itinerary or more days than the published programme, which we quote individually; that is rare, and we tell you the figure before you commit.' },
    { id: 'group', u: '/tours/',
      p: ['group', 'groups', 'private tour', 'private trip', 'how many people', 'how many travellers', 'join a group', 'shared tour', 'are your tours private'],
      a: 'Our published prices are for private tours and small groups only — we do not run large coach groups. That is what keeps the itineraries flexible: the pace, the stops and the departure date are yours.' },
    { id: 'availability', u: '/contact/',
      p: ['when can i', 'when can we', 'availability', 'available dates', 'what dates', 'which dates', 'departure date', 'fixed departure', 'fixed dates', 'all year', 'year round', 'any date'],
      a: 'We operate all year round, on the dates you choose. We have a large team, so we are not limited to fixed departure dates — tell us when you want to travel and we build the trip around it.' },
  ],
  fr: [
    { id: 'price', u: '/fr/circuits/',
      p: ['prix', 'tarif', 'tarifs', 'coût', 'cout', 'combien ça coute', 'combien coute', 'cher', 'euro', 'budget'],
      a: "Chaque prix affiché sur le site est le prix réel et fixe du circuit — il figure sur la page de chaque circuit, par personne. Il correspond à un voyage privé ou en petit groupe. La seule chose qui le fait varier, c'est un itinéraire sur mesure ou plus de jours que le programme publié, que nous chiffrons au cas par cas ; c'est rare, et nous vous donnons le montant avant tout engagement." },
    { id: 'group', u: '/fr/circuits/',
      p: ['groupe', 'groupes', 'privé', 'prive', 'combien de personnes', 'circuit partagé'],
      a: "Nos tarifs publiés concernent uniquement les circuits privés et les petits groupes — nous n'organisons pas de grands groupes en autocar. C'est ce qui garde les itinéraires souples : le rythme, les étapes et la date de départ sont les vôtres." },
    { id: 'availability', u: '/fr/contact/',
      p: ['quelles dates', 'quelle date', 'disponibilité', 'dates de départ', 'départs fixes', 'departs fixes', 'toute l\'année', 'quand puis-je', 'quand pouvons'],
      a: "Nous opérons toute l'année, aux dates de votre choix. Notre équipe est nombreuse : nous ne sommes pas limités à des départs fixes — dites-nous quand vous souhaitez partir et nous construisons le voyage autour de cette date." },
  ],
  de: [
    { id: 'price', u: '/de/reisen/',
      p: ['preis', 'preise', 'kosten', 'kostet', 'wie viel kostet', 'wieviel kostet', 'teuer', 'günstig', 'guenstig', 'euro', 'budget'],
      a: 'Jeder Preis auf der Website ist der tatsächliche Festpreis der Reise — er steht auf jeder Reiseseite, pro Person. Er gilt für eine private Reise oder eine kleine Gruppe. Er ändert sich nur bei einer individuellen Route oder mehr Tagen als im veröffentlichten Programm; das kalkulieren wir einzeln, es kommt selten vor, und Sie kennen den Betrag vor jeder Zusage.' },
    { id: 'group', u: '/de/reisen/',
      p: ['gruppe', 'gruppen', 'privatreise', 'private reise', 'wie viele personen', 'sind ihre reisen privat'],
      a: 'Unsere veröffentlichten Preise gelten ausschließlich für private Reisen und kleine Gruppen — wir führen keine großen Busgruppen. Genau das hält die Routen flexibel: Tempo, Stopps und Abreisetermin bestimmen Sie.' },
    { id: 'availability', u: '/de/kontakt/',
      p: ['welche termine', 'verfügbarkeit', 'verfuegbarkeit', 'abreisetermine', 'feste termine', 'feste abreise', 'ganzjährig', 'ganzjaehrig', 'ganze jahr', 'wann kann ich', 'wann koennen wir', 'wann können wir'],
      a: 'Wir sind das ganze Jahr über unterwegs, zu den Terminen Ihrer Wahl. Unser Team ist groß, wir sind also nicht an feste Abreisetermine gebunden — sagen Sie uns, wann Sie reisen möchten, und wir bauen die Reise darum herum.' },
  ],
  es: [
    { id: 'price', u: '/es/circuitos/',
      p: ['precio', 'precios', 'coste', 'cuesta', 'cuánto cuesta', 'cuanto cuesta', 'caro', 'barato', 'euro', 'presupuesto', 'tarifa'],
      a: 'Cada precio que ves en la web es el precio real y fijo del circuito — está en la página de cada circuito, por persona. Corresponde a un viaje privado o en grupo reducido. Lo único que lo cambia es un itinerario a medida o más días de los del programa publicado, que presupuestamos caso por caso; es poco frecuente, y te damos la cifra antes de que te comprometas.' },
    { id: 'group', u: '/es/circuitos/',
      p: ['grupo', 'grupos', 'privado', 'privados', 'cuántas personas', 'cuantas personas', 'circuito compartido'],
      a: 'Nuestros precios publicados son solo para circuitos privados y grupos reducidos — no operamos grandes grupos en autocar. Es lo que mantiene los itinerarios flexibles: el ritmo, las paradas y la fecha de salida son tuyos.' },
    { id: 'availability', u: '/es/contacto/',
      p: ['qué fechas', 'que fechas', 'disponibilidad', 'fechas de salida', 'salidas fijas', 'todo el año', 'cuándo puedo', 'cuando puedo', 'cuándo podemos'],
      a: 'Operamos todo el año, en las fechas que elijas. Tenemos un equipo amplio, así que no dependemos de salidas fijas — dinos cuándo quieres viajar y construimos el viaje en torno a esa fecha.' },
  ],
  it: [
    { id: 'price', u: '/it/circuiti/',
      p: ['prezzo', 'prezzi', 'costo', 'quanto costa', 'quanto costano', 'caro', 'economico', 'euro', 'budget', 'tariffa'],
      a: 'Ogni prezzo che vedete sul sito è il prezzo reale e fisso del circuito — è sulla pagina di ciascun circuito, a persona. Vale per un viaggio privato o in piccolo gruppo. L\'unica cosa che lo fa cambiare è un itinerario su misura o più giorni rispetto al programma pubblicato, che quotiamo caso per caso; capita di rado, e vi diamo la cifra prima di qualsiasi impegno.' },
    { id: 'group', u: '/it/circuiti/',
      p: ['gruppo', 'gruppi', 'privato', 'privati', 'quante persone', 'circuito condiviso'],
      a: 'I prezzi pubblicati valgono solo per viaggi privati e piccoli gruppi — non organizziamo grandi gruppi in pullman. È questo che mantiene gli itinerari flessibili: ritmo, tappe e data di partenza sono vostri.' },
    { id: 'availability', u: '/it/contatto/',
      p: ['quali date', 'disponibilità', 'date di partenza', 'partenze fisse', 'tutto l\'anno', 'quando posso', 'quando possiamo'],
      a: 'Operiamo tutto l\'anno, nelle date che preferite. Il nostro team è numeroso, quindi non dipendiamo da partenze fisse — diteci quando volete viaggiare e costruiamo il viaggio attorno a quella data.' },
  ],
};

// Query-side synonyms. Visitors and our copy often use different words for the
// same thing — "women travelling alone" against "solo female travellers" scored
// zero before this existed. Left side is what a visitor types, right side is the
// word our pages actually use. Data, not code, so it can be extended without
// touching the widget.
const SYN: Record<Lang, Record<string, string>> = {
  en: {
    woman: 'female', women: 'female', lady: 'female', ladies: 'female', girl: 'female',
    alone: 'solo', unaccompanied: 'solo',
    kid: 'child', kids: 'children', toddler: 'child', baby: 'child',
    money: 'cash', atm: 'cash', withdraw: 'cash',
    internet: 'wifi', data: 'wifi', connection: 'wifi',
    phone: 'sim', mobile: 'sim', roaming: 'sim',
    weather: 'climate', temperature: 'climate', degrees: 'climate',
    hot: 'heat', cold: 'heat', warm: 'heat',
    socket: 'plug', adapter: 'plug', adaptor: 'plug', charger: 'plug',
    jab: 'vaccination', jabs: 'vaccination', vaccine: 'vaccination', vaccines: 'vaccination', shots: 'vaccination',
    tip: 'tipping', tips: 'tipping', gratuity: 'tipping',
    clothes: 'dress', clothing: 'dress', wear: 'dress', outfit: 'dress',
    luggage: 'pack', suitcase: 'pack', bag: 'pack', baggage: 'pack',
    flight: 'flights', plane: 'flights', airline: 'flights',
    doctor: 'medical', hospital: 'medical', pharmacy: 'medical', ill: 'medical', sick: 'medical',
    halal: 'food', vegetarian: 'food', vegan: 'food', eat: 'food', meal: 'food',
    danger: 'safe', dangerous: 'safe', security: 'safe', risk: 'safe',
    camel: 'desert', dune: 'dunes', bivouac: 'camp', tent: 'camp',
  },
  fr: {
    femme: 'femmes', seule: 'solo', enfant: 'enfants', argent: 'especes',
    internet: 'wifi', portable: 'sim', telephone: 'sim',
    meteo: 'climat', temperature: 'climat', chaud: 'chaleur',
    prise: 'adaptateur', vaccin: 'vaccins', pourboire: 'pourboires',
    vetements: 'tenue', bagage: 'bagages', avion: 'vols',
    medecin: 'medical', hopital: 'medical', manger: 'cuisine', repas: 'cuisine',
    danger: 'securite', dangereux: 'securite', tente: 'bivouac',
  },
  de: {
    frau: 'frauen', allein: 'solo', kind: 'kinder', geld: 'bargeld',
    internet: 'wlan', handy: 'sim', telefon: 'sim',
    wetter: 'klima', temperatur: 'klima', heiss: 'hitze',
    steckdose: 'adapter', impfung: 'impfungen', trinkgeld: 'trinkgelder',
    kleidung: 'kleider', gepaeck: 'gepack', flugzeug: 'fluege',
    arzt: 'medizinisch', essen: 'kueche', mahlzeit: 'kueche',
    gefahr: 'sicherheit', gefaehrlich: 'sicherheit', zelt: 'biwak',
  },
  es: {
    mujer: 'mujeres', sola: 'solo', nino: 'ninos', dinero: 'efectivo',
    internet: 'wifi', movil: 'sim', telefono: 'sim',
    tiempo: 'clima', temperatura: 'clima', calor: 'calor',
    enchufe: 'adaptador', vacuna: 'vacunas', propina: 'propinas',
    ropa: 'vestimenta', equipaje: 'maletas', avion: 'vuelos',
    medico: 'medica', hospital: 'medica', comer: 'cocina', comida: 'cocina',
    peligro: 'seguridad', peligroso: 'seguridad', tienda: 'vivac',
  },
  it: {
    donna: 'donne', sola: 'solo', bambino: 'bambini', soldi: 'contanti',
    internet: 'wifi', cellulare: 'sim', telefono: 'sim',
    meteo: 'clima', temperatura: 'clima', caldo: 'caldo',
    presa: 'adattatore', vaccino: 'vaccini', mancia: 'mance',
    vestiti: 'abbigliamento', bagaglio: 'bagagli', aereo: 'voli',
    medico: 'medica', ospedale: 'medica', mangiare: 'cucina', pasto: 'cucina',
    pericolo: 'sicurezza', pericoloso: 'sicurezza', tenda: 'bivacco',
  },
};

export const GET: APIRoute = async ({ params }) => {
  const lang = (params.lang || 'en') as Lang;
  if (!LANGS.includes(lang)) return new Response('Not found', { status: 404 });

  const items: Item[] = [];
  const tours = (toursData as any).tours as any[];
  const local = TOURS_BY_LANG[lang];
  const tourBase = ROUTES[lang].tours;

  // 1. Tour FAQs and practical facts — the only Q&A that exists in every
  //    language, and the part that answers booking-shaped questions.
  for (const t of tours) {
    const loc = local ? local[t.id] : null;
    if (local && !loc?.full) continue;                 // no page in this language
    const src = loc || t;
    const url = `${tourBase}${t.id}/`;
    const title = clean(src.title);
    for (const f of src.faqs || []) {
      if (!f?.q || !f?.a) continue;
      items.push({ q: clean(f.q), a: clean(f.a), u: url, k: KIND.tour[lang] });
    }
    for (const g of src.goodToKnow || []) {
      if (!g?.label || !g?.value) continue;
      items.push({ q: `${clean(g.label)} — ${title}`, a: clean(g.value), u: url, k: KIND.practical[lang] });
    }
  }

  // 2. English-only sources: the 44 dedicated question pages (whose
  //    `shortAnswer` is written precisely to be the whole answer) and the
  //    categorised site FAQ.
  if (lang === 'en') {
    const questions = await getCollection('question');
    for (const entry of questions) {
      const d = entry.data as any;
      if (!d?.question || !d?.shortAnswer) continue;
      items.push({
        q: clean(d.question),
        a: clean(d.shortAnswer),
        u: `/questions/${entry.slug}/`,
        k: KIND.question.en,
      });
      for (const kf of d.keyFacts || []) {
        if (!kf?.label || !kf?.value) continue;
        items.push({
          q: `${clean(kf.label)} — ${clean(d.question)}`,
          a: clean(kf.value),
          u: `/questions/${entry.slug}/`,
          k: KIND.practical.en,
        });
      }
    }
    for (const cat of FAQ) {
      for (const f of cat.items) {
        if (!f?.q || !f?.a) continue;
        items.push({ q: clean(f.q), a: clean(f.a), u: f.href || '/questions/', k: KIND.faq.en });
      }
    }
  }

  // Drop exact duplicate answers (the same fact often appears on several tours).
  const seen = new Set<string>();
  const deduped = items.filter(i => {
    const key = i.q.toLowerCase() + '' + i.a.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return new Response(JSON.stringify({ lang, rules: RULES[lang], syn: SYN[lang], items: deduped }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

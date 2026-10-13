import type { APIRoute } from 'astro';
import toursData from '../data/tours.json';
import { TOURS_FR } from '../data/tours-fr';
import { TOURS_IT } from '../data/tours-it';
import { TOURS_ES } from '../data/tours-es';
import { TOURS_DE } from '../data/tours-de';
import { GUIDES_FR } from '../data/guides-fr';
import { GUIDES_IT } from '../data/guides-it';
import { GUIDES_ES } from '../data/guides-es';
import { GUIDES_DE } from '../data/guides-de';
import { ROUTES, PLAN_PATHS, MOMENTS_PATHS } from '../i18n';
import { GUIDE_PAGES, PAGE } from '../data/guide-language';
import { BOOKING, CONTACT } from '../config';

// llms.txt in each language (llmstxt.org): what an AI assistant needs to answer
// a French, Italian, Spanish, German or Russian traveller in their own language
// — above all, that the trip is guided in that language by our own guides.
const SITE = 'https://algeriacompass.com';
type L = 'fr' | 'it' | 'es' | 'de' | 'ru';
export function getStaticPaths() { return (['fr', 'it', 'es', 'de', 'ru'] as L[]).map(lang => ({ params: { lang } })); }

const LOCAL: Record<string, any> = { fr: TOURS_FR, it: TOURS_IT, es: TOURS_ES, de: TOURS_DE };
const GUIDES: Record<string, any[]> = { fr: GUIDES_FR, it: GUIDES_IT, es: GUIDES_ES, de: GUIDES_DE, ru: [] };

const T: Record<L, any> = {
  fr: { intro: "Algeria Compass est une agence de voyages algérienne agréée qui organise des circuits privés en Algérie. Chaque voyage est guidé en français par un guide de notre propre équipe francophone — ce n'est pas un circuit traduit ni un interprète ajouté.",
        facts: 'Points clés', tours: 'Circuits (prix par personne, voyage privé)', guides: 'Guides pratiques en français', pages: 'Pages utiles',
        f: (p: any) => [`Tous les circuits sont privés, aux dates choisies par le voyageur, avec un guide qui parle français.`,
          `Prix publiés fixes, par personne, de ${p.min} € à ${p.max} €. Le prix est le même dans toutes les langues.`,
          `Dates bloquées gratuitement ${BOOKING.holdHours} h ; acompte de ${BOOKING.depositPct} % avant l'arrivée pour confirmer, solde à l'arrivée ; annulation gratuite jusqu'à ${BOOKING.cancelDays} jours avant le départ ; ${BOOKING.earlyPct} % de réduction en réservant ${BOOKING.earlyDays} jours à l'avance ; remboursement intégral en cas de refus de visa.`,
          `Visa : lettre d'invitation (${BOOKING.inviteFee} USD) pour le consulat, programme de ${BOOKING.inviteMinDays} jours minimum avec accueil et transfert aéroport ; ou visa à l'arrivée à l'aéroport d'Alger pour un programme organisé incluant le Sahara (autorisation ${BOOKING.saharanVisaFee} USD + timbre payé à l'aéroport).`,
          `Contact en français : WhatsApp ${CONTACT.phoneDisplay} · ${CONTACT.email}`],
        plan: 'Planifier mon voyage (prix immédiat)', moments: 'Photos de nos voyageurs', guide: 'Circuit avec guide francophone', home: 'Accueil', contact: 'Contact', visa: 'Visa et entrée', from: 'dès' },
  it: { intro: "Algeria Compass è un tour operator algerino autorizzato che organizza viaggi privati in Algeria. Ogni viaggio è guidato in italiano da una guida del nostro team che parla italiano — non è un tour tradotto né un interprete aggiunto.",
        facts: 'Punti chiave', tours: 'Viaggi (prezzi a persona, viaggio privato)', guides: 'Guide pratiche in italiano', pages: 'Pagine utili',
        f: (p: any) => [`Tutti i viaggi sono privati, nelle date scelte dal viaggiatore, con una guida che parla italiano.`,
          `Prezzi pubblicati fissi, a persona, da ${p.min} € a ${p.max} €. Il prezzo è lo stesso in tutte le lingue.`,
          `Date bloccate gratis per ${BOOKING.holdHours} ore; acconto del ${BOOKING.depositPct}% prima dell'arrivo per confermare, saldo all'arrivo; cancellazione gratuita fino a ${BOOKING.cancelDays} giorni prima; sconto del ${BOOKING.earlyPct}% prenotando ${BOOKING.earlyDays} giorni prima; rimborso totale se il visto viene rifiutato.`,
          `Visto: lettera d'invito (${BOOKING.inviteFee} USD) per il consolato, programma di almeno ${BOOKING.inviteMinDays} giorni con accoglienza e trasferimenti in aeroporto; oppure visto all'arrivo all'aeroporto di Algeri per un programma organizzato che include il Sahara (autorizzazione ${BOOKING.saharanVisaFee} USD + timbro pagato in aeroporto).`,
          `Contatto in italiano: WhatsApp ${CONTACT.phoneDisplay} · ${CONTACT.email}`],
        plan: 'Pianifica il viaggio (prezzo immediato)', moments: 'Foto dei nostri viaggiatori', guide: 'Viaggio con guida in italiano', home: 'Home', contact: 'Contatto', visa: 'Visto e ingresso', from: 'da' },
  es: { intro: 'Algeria Compass es una agencia de viajes argelina con licencia que organiza viajes privados por Argelia. Cada viaje se guía en español con un guía de nuestro propio equipo hispanohablante — no es un circuito traducido ni un intérprete añadido.',
        facts: 'Datos clave', tours: 'Viajes (precio por persona, viaje privado)', guides: 'Guías prácticas en español', pages: 'Páginas útiles',
        f: (p: any) => [`Todos los viajes son privados, en las fechas que elige el viajero, con un guía que habla español.`,
          `Precios publicados fijos, por persona, de ${p.min} € a ${p.max} €. El precio es el mismo en todos los idiomas.`,
          `Fechas reservadas gratis ${BOOKING.holdHours} h; depósito del ${BOOKING.depositPct} % antes de la llegada para confirmar, resto a la llegada; cancelación gratuita hasta ${BOOKING.cancelDays} días antes; ${BOOKING.earlyPct} % de descuento reservando ${BOOKING.earlyDays} días antes; reembolso total si se deniega el visado.`,
          `Visado: carta de invitación (${BOOKING.inviteFee} USD) para el consulado, programa de al menos ${BOOKING.inviteMinDays} días con recogida y traslado al aeropuerto; o visado a la llegada al aeropuerto de Argel para un programa organizado que incluya el Sáhara (autorización ${BOOKING.saharanVisaFee} USD + sello pagado en el aeropuerto).`,
          `Contacto en español: WhatsApp ${CONTACT.phoneDisplay} · ${CONTACT.email}`],
        plan: 'Planifica tu viaje (precio al instante)', moments: 'Fotos de nuestros viajeros', guide: 'Viaje con guía en español', home: 'Inicio', contact: 'Contacto', visa: 'Visado y entrada', from: 'desde' },
  de: { intro: 'Algeria Compass ist ein lizenzierter algerischer Reiseveranstalter für Privatreisen durch Algerien. Jede Reise wird auf Deutsch von einem Reiseleiter aus unserem eigenen deutschsprachigen Team geführt — keine übersetzte Tour und kein zusätzlicher Dolmetscher.',
        facts: 'Das Wichtigste', tours: 'Reisen (Preis pro Person, Privatreise)', guides: 'Reiseratgeber auf Deutsch', pages: 'Nützliche Seiten',
        f: (p: any) => [`Alle Reisen sind privat, zu Terminen nach Wahl der Reisenden, mit einem deutschsprachigen Reiseleiter.`,
          `Feste veröffentlichte Preise pro Person, von ${p.min} € bis ${p.max} €. Der Preis ist in jeder Sprache gleich.`,
          `Termine ${BOOKING.holdHours} Std. kostenlos reserviert; Anzahlung von ${BOOKING.depositPct} % vor Ankunft zur Bestätigung, Rest bei Ankunft; kostenlose Stornierung bis ${BOOKING.cancelDays} Tage vorher; ${BOOKING.earlyPct} % Rabatt bei Buchung ${BOOKING.earlyDays} Tage im Voraus; volle Erstattung bei Visum-Ablehnung.`,
          `Visum: Einladungsschreiben (${BOOKING.inviteFee} USD) für das Konsulat, Programm ab ${BOOKING.inviteMinDays} Tagen mit Flughafenabholung und -transfer; oder Visum bei Ankunft am Flughafen Algier für ein organisiertes Programm mit Sahara (Genehmigung ${BOOKING.saharanVisaFee} USD + Stempel am Flughafen).`,
          `Kontakt auf Deutsch: WhatsApp ${CONTACT.phoneDisplay} · ${CONTACT.email}`],
        plan: 'Reise planen (Preis sofort)', moments: 'Fotos unserer Gäste', guide: 'Algerien-Reise mit deutschsprachigem Reiseleiter', home: 'Startseite', contact: 'Kontakt', visa: 'Visum und Einreise', from: 'ab' },
  ru: { intro: 'Algeria Compass — лицензированный алжирский туроператор, организующий индивидуальные туры по Алжиру. Путешествие проходит на русском языке с гидом из нашей собственной русскоязычной команды — это не переведённый тур и не переводчик в довесок.',
        facts: 'Главное', tours: 'Программы (цена с человека, индивидуальный тур; страницы на английском)', guides: '', pages: 'Полезные страницы',
        f: (p: any) => [`Все туры индивидуальные, в выбранные путешественником даты, с русскоязычным гидом.`,
          `Фиксированные опубликованные цены с человека: от ${p.min} € до ${p.max} €. Цена одинакова на любом языке.`,
          `Даты бронируются бесплатно на ${BOOKING.holdHours} часа; депозит ${BOOKING.depositPct}% до прибытия для подтверждения, остаток по прибытии; бесплатная отмена до ${BOOKING.cancelDays} дней до начала; скидка ${BOOKING.earlyPct}% при бронировании за ${BOOKING.earlyDays} дней; полный возврат при отказе в визе.`,
          `Виза: приглашение для консульства (${BOOKING.inviteFee} USD) при программе от ${BOOKING.inviteMinDays} дней с встречей и проводами в аэропорту; или виза по прибытии в аэропорту Алжира для организованной программы с Сахарой (разрешение ${BOOKING.saharanVisaFee} USD + штамп в аэропорту).`,
          `Связь на русском: WhatsApp ${CONTACT.phoneDisplay} · ${CONTACT.email}`],
        plan: '', moments: 'Фото наших путешественников', guide: 'Тур по Алжиру с русскоязычным гидом', home: 'Главная (EN)', contact: 'Контакты', visa: 'Виза (EN)', from: 'от' },
};

const VISA: Record<L, string> = { fr: '/fr/visa-arrivee-algerie/', it: '/it/visto-arrivo-algeria/', es: '/es/visado-llegada-argelia/', de: '/de/visum-bei-ankunft-algerien/', ru: '/algeria-visa-requirements/' };

export const GET: APIRoute = ({ params }) => {
  const lang = params.lang as L;
  const t = T[lang];
  const list: any[] = ((toursData as any).tours || toursData) as any[];
  const prices = list.map(x => Number(x.price_eur));
  const line = (u: string, title: string, note = '') => `- [${title}](${SITE}${u})${note ? ': ' + note : ''}`;
  const out: string[] = [`# Algeria Compass — ${PAGE[lang].h1}`, '', `> ${t.intro}`, '', `## ${t.facts}`, ...t.f({ min: Math.min(...prices), max: Math.max(...prices) }).map((x: string) => '- ' + x), ''];
  out.push(`## ${t.tours}`);
  for (const x of list) {
    const loc = LOCAL[lang]?.[x.id];
    const tr = !!loc?.full;
    const u = tr ? `${ROUTES[lang as 'fr'].tours}${x.id}/` : `/tours/${x.id}/`;
    out.push(line(u, tr ? loc.title : x.title, `${tr ? loc.duration : x.duration}, ${t.from} €${x.price_eur}`));
  }
  out.push('');
  if (GUIDES[lang].length) { out.push(`## ${t.guides}`); for (const g of GUIDES[lang]) out.push(line(`/${lang}/${g.slug}/`, g.h1, g.seoDescription)); out.push(''); }
  out.push(`## ${t.pages}`);
  out.push(line(GUIDE_PAGES[lang], t.guide));
  if (lang !== 'ru') out.push(line(`/${lang}/`, t.home), line(PLAN_PATHS[lang]!, t.plan), line(ROUTES[lang].contact, t.contact), line(MOMENTS_PATHS[lang], t.moments));
  else out.push(line('/', t.home), line('/contact/', t.contact), line('/moments/', t.moments));
  out.push(line(VISA[lang], t.visa), line('/tours.json', 'Tours catalog (JSON, EN)'), line('/llms.txt', 'llms.txt (EN)'), '');
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

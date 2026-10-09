// One machine-readable description of every bookable tour, shared by
// /tours.json (the catalog AI agents read) and /tours/<id>.txt (a clean
// text version of each tour page). Built from the same data the pages render,
// so it cannot drift from the site.
import toursData from '../data/tours.json';
import { TOURS_FR } from '../data/tours-fr';
import { TOURS_IT } from '../data/tours-it';
import { TOURS_ES } from '../data/tours-es';
import { TOURS_DE } from '../data/tours-de';
import { ROUTES } from '../i18n';
import { BOOKING, CONTACT, LANGUAGES } from '../config';

export const SITE = 'https://algeriacompass.com';

// Saharan regions that qualify a programme for the visa-on-arrival route
// (owner-confirmed 2026-10-03: any organised programme that includes the Sahara).
const SAHARA = new Set(['djanet', 'illizi', 'tamanrasset', 'ghardaia', 'timimoun']);

const LOCAL: Record<string, any> = { fr: TOURS_FR, it: TOURS_IT, es: TOURS_ES, de: TOURS_DE };

/** Booking deep link: opens the enquiry form already filled in. */
export function bookingUrl(tourId: string, lang: 'en' | 'fr' | 'it' | 'es' | 'de' = 'en') {
  return `${SITE}${ROUTES[lang].contact}?tour=${encodeURIComponent(tourId)}`;
}

export function tours(): any[] {
  return ((toursData as any).tours || toursData) as any[];
}

export function catalogEntry(t: any) {
  const days = parseInt(t.duration, 10) || 1;
  const nights = parseInt((t.duration.split('·')[1] || '').trim(), 10) || 0;
  const urls: Record<string, string> = { en: `${SITE}/tours/${t.id}/` };
  for (const l of ['fr', 'it', 'es', 'de'] as const) if (LOCAL[l][t.id]?.full) urls[l] = `${SITE}${ROUTES[l].tours}${t.id}/`;
  const season = (t.goodToKnow || []).find((g: any) => /season/i.test(g.label))?.value;
  return {
    id: t.id,
    title: t.title,
    url: urls.en,
    urls,
    text_version: `${SITE}/tours/${t.id}.txt`,
    duration_days: days,
    nights,
    price: { amount: Number(t.price_eur), currency: 'EUR', per: t.per || 'person', from: !!t.price_from,
      note: 'Fixed published price for a private trip or small group; changes only for a custom itinerary or extra days, quoted before you commit.' },
    starts_in: t.start,
    regions: t.wilayas,
    theme: t.theme,
    summary: t.summary,
    best_season: season,
    highlights: t.highlights || [],
    itinerary: (t.itinerary || []).map((d: any) => ({ day: d.day, title: d.title, places: (d.stops || []).map((s: any) => s.place) })),
    includes: t.includes || [],
    excludes: t.excludes || [],
    private: true,
    guide_languages: LANGUAGES.names,
    visa_on_arrival_eligible: (t.wilayas || []).some((w: string) => SAHARA.has(w)),
    book: { request_url: bookingUrl(t.id), whatsapp: `https://wa.me/${CONTACT.whatsapp}`, email: CONTACT.email },
  };
}

export const POLICIES = {
  booking: `Request to book: dates are held free for ${BOOKING.holdHours} hours with no payment while availability, permits and flights are confirmed; a deposit then secures the trip and the balance is due before departure. Payment by bank transfer, card or PayPal.`,
  early_booking: `${BOOKING.earlyPct}% off when booked at least ${BOOKING.earlyDays} days before departure.`,
  cancellation: `Free cancellation up to ${BOOKING.cancelDays} days before departure, full refund. Within ${BOOKING.cancelDays} days, committed costs may not be recoverable; the rest is refunded.`,
  visa_refused: 'If the visa is refused, everything paid to Algeria Compass is refunded.',
  visa: `Consulate route: invitation letter ${BOOKING.inviteFee} ${BOOKING.feeCurrency} for a programme of at least ${BOOKING.inviteMinDays} days with airport pickup and drop-off. Visa on arrival at Algiers airport for organised programmes that include the Sahara: authorisation ${BOOKING.saharanVisaFee} ${BOOKING.feeCurrency}, plus the arrival stamp paid at the airport (by length of stay).`,
  terms_url: `${SITE}/booking-terms/`,
  visa_url: `${SITE}/algeria-visa-requirements/`,
};

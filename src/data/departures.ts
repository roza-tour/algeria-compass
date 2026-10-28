// Fixed group departures: dates a tour leaves with a small group, which a solo
// traveller or a couple can join. Every tour can still be booked privately on
// any date; these are the ones we have already scheduled.
//
// OWNER: add a line per departure. Nothing is shown until there is at least
// one future date -- never invent dates or seat counts.
//   { tour: 'djanet-sahara-safari', date: '2026-12-28', seats: 10, left: 4 },
// tour  = the tour's id (its URL: /tours/<id>/)
// date  = departure day, YYYY-MM-DD
// seats = group size; left = places still free (0 = full, shown as "Full")
// price = optional per-person price in EUR if different from the tour's
export interface Departure { tour: string; date: string; seats: number; left: number; price?: number; }

export const DEPARTURES: Departure[] = [];

const ISO_DATE_LENGTH = 10; // "YYYY-MM-DD"

/** Future departures, soonest first (optionally for one tour). */
export function upcoming(tourId?: string, today = new Date().toISOString().slice(0, ISO_DATE_LENGTH)): Departure[] {
  return DEPARTURES.filter(d => d.date >= today && (!tourId || d.tour === tourId)).sort((a, b) => a.date.localeCompare(b.date));
}

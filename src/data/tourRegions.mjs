// Which of the eight regions (/regions/) each tour belongs to. A tour page
// wears its region's identity -- colours, pattern, emblem, the hero cut along
// the region's silhouette, and a seal linking to the region page.
//
// Chosen by hand, October 2026: the tours used to inherit a civilisation skin
// from their first wilaya, which gave "Roman Algeria -- Tipaza, Djemila &
// Timgad" the Modern Algeria skin (djemila was not in the map) and every
// circuit starting in Algiers the Ottoman one. Single-place tours take their
// place's region; circuits take the region named in their title, else the
// region they start in.
export const TOUR_REGION = {
  'djanet-sahara-safari': 'sahara',
  'tadrart-rouge-7-days': 'sahara',
  'ihrir-oasis-7-days': 'sahara',
  'sefar-tassili-trek': 'sahara',
  'djanet-ghardaia-desert-2-days': 'sahara',
  'timimoun-desert-escape': 'sahara',
  'ghardaia-guided-tour': 'mzab',
  'bousaada-desert-tour': 'bousaada',
  'tour-bejaia-historic': 'bejaia',
  'oran-mostaganem-tlemcen': 'tlemcen',
  'private-guided-tour': 'roman',
  'algeria-through-time-and-tradition': 'roman',
  'the-beauty-of-algeria': 'constantine',
  'algeria-eastern-sahara-discovery': 'constantine',
  'algierstour-hammagarden-notredame-dafrique': 'algiers',
  'algiers-city-tour-casbah-bardo-martyrsmemorial': 'algiers',
  'day-tour-algeria-culture': 'algiers',
  'algeria-cultural-tour': 'algiers',
  'algeria-tour': 'algiers',
  'algeria-intensive-discovery-tour': 'algiers',
  'the-soul-of-algeria': 'algiers',
  'the-culture-and-heritage-of-algeria': 'algiers',
  'algeria-beyond-expectations': 'algiers',
  'algeria-grand-discovery-14-days': 'algiers',
};

const BY_WILAYA = {
  djanet: 'sahara', timimoun: 'sahara', ghardaia: 'mzab', bousaada: 'bousaada', bejaia: 'bejaia',
  tlemcen: 'tlemcen', oran: 'tlemcen', mostaganem: 'tlemcen', tipaza: 'roman', djemila: 'roman',
  'batna-timgad': 'roman', batna: 'roman', setif: 'roman', constantine: 'constantine', annaba: 'constantine',
  algiers: 'algiers',
};

/** The region id for a tour (a new tour falls back to its first wilaya). */
export function regionForTour(tour) {
  return TOUR_REGION[tour.id] || BY_WILAYA[(tour.wilayas || [])[0]] || 'algiers';
}

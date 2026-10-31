// A tour's journey, read from its own day-by-day itinerary: which places each
// day visits, in order, and which of the eight regions (/regions/) they belong
// to. Used for the long tours' design (journey seal, region-coloured days,
// route map) and to check the tours' `wilayas` lists against the itinerary.
//
// Places are matched in each day's title first (titles are written as the
// route: "Batna to Biskra to Bou Saada", "Djanet -> night flight to
// Constantine"); a day whose title names no place (arrival, departure) takes
// its stops' names, then its text, then the day before.

// place id -> region id, coordinates, display name; patterns in match order
export const PLACES = {
  algiers:      { region: 'algiers',     name: 'Algiers',     lat: 36.75, lon: 3.06,  re: /\balgiers\b|\bcasbah\b|\bbardo\b|\bhamma\b|notre-dame d|martyrs'/i },
  tipaza:       { region: 'roman',       name: 'Tipaza',      lat: 36.59, lon: 2.3,   re: /tipaza|cherchell/i },
  bejaia:       { region: 'bejaia',      name: 'Béjaïa',      lat: 36.75, lon: 5.08,  re: /b[ée]ja[ïi]a|kabyl/i },
  setif:        { region: 'roman',       name: 'Sétif',       lat: 36.19, lon: 5.41,  re: /s[ée]tif/i },
  djemila:      { region: 'roman',       name: 'Djémila',     lat: 36.32, lon: 5.74,  re: /dj[ée]mila|cuicul/i },
  constantine:  { region: 'constantine', name: 'Constantine', lat: 36.36, lon: 6.61,  re: /constantine/i },
  annaba:       { region: 'constantine', name: 'Annaba',      lat: 36.9,  lon: 7.77,  re: /annaba|hippo/i },
  'batna-timgad': { region: 'roman',     name: 'Timgad',      lat: 35.49, lon: 6.47,  re: /timgad|\bbatna\b/i },
  biskra:       { region: null,          name: 'Biskra',      lat: 34.85, lon: 5.73,  re: /biskra/i },
  bousaada:     { region: 'bousaada',    name: 'Bou Saâda',   lat: 35.21, lon: 4.18,  re: /bou ?sa[âa]da/i },
  oran:         { region: 'tlemcen',     name: 'Oran',        lat: 35.7,  lon: -0.63, re: /\boran\b/i },
  mostaganem:   { region: 'tlemcen',     name: 'Mostaganem',  lat: 35.93, lon: 0.09,  re: /mostaganem/i },
  tlemcen:      { region: 'tlemcen',     name: 'Tlemcen',     lat: 34.88, lon: -1.32, re: /tlemcen/i },
  ghardaia:     { region: 'mzab',        name: 'Ghardaïa',    lat: 32.49, lon: 3.67,  re: /ghard[aä]ï?a|m'zab|beni isguen/i },
  timimoun:     { region: 'sahara',      name: 'Timimoun',    lat: 29.26, lon: 0.23,  re: /timimoun|charouine|aghlad|ouled sa[ïi]d/i },
  djanet:       { region: 'sahara',      name: 'Djanet',      lat: 24.55, lon: 9.48,  re: /djanet|tadrart|tassili|tigharghart|ihrir|sefar|in djaren|ouanahar|essendil|moul naga|tin merzouga|djabarren|erg admer/i },
};

function placesIn(text) {
  const hits = [];
  for (const [id, p] of Object.entries(PLACES)) {
    const m = p.re.exec(text || '');
    if (m) hits.push({ id, at: m.index });
  }
  return hits.sort((a, b) => a.at - b.at).map(h => h.id);
}

/** { days: [{ day, places, regions }], sequence, places, regions } */
export function journeyOf(tour) {
  const days = [];
  let prev = [];
  for (const d of tour.itinerary || []) {
    // the title gives the route's order; the day's stops add places it does
    // not name ("Travel to Sétif" also visits Djémila)
    let places = placesIn(d.title);
    for (const p of placesIn((d.stops || []).map(s => s.place).join(' · '))) if (!places.includes(p)) places.push(p);
    if (!places.length) places = placesIn(d.body);
    if (!places.length) places = prev.slice(-1);
    prev = places;
    const regions = [...new Set(places.map(p => PLACES[p].region).filter(Boolean))];
    days.push({ day: d.day, places, regions });
  }
  const sequence = [];
  for (const d of days) for (const p of d.places) if (sequence[sequence.length - 1] !== p) sequence.push(p);
  const places = [...new Set(sequence)];
  const regions = [...new Set(days.flatMap(d => d.regions))];
  return { days, sequence, places, regions };
}

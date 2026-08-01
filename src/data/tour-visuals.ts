// Per-tour visual identity: a location-correct, DISTINCT hero image + an accent
// colour token used in that tour page's headings / badges / buttons.
//
// hero = filename inside /assets/img/tours/ (must depict a wilaya that is in the
// tour). Each tour has a unique hero — no image is reused across tours.
// needsImage = true means we have NO correct photo for that location; the page
// renders a branded accent gradient instead of a wrong photo (do NOT reuse
// another location's image). Supply a real photo to replace it.

export interface TourVisual { hero: string; accent: string; needsImage?: boolean; }

export const TOUR_VISUALS: Record<string, TourVisual> = {
  // ---- 2026 La Smala programmes ----
  // The supplied PDFs did contain photographs, but they are pictures of
  // identifiable clients on tour; publishing those without their consent is
  // not something we do. The owner is sending camp photography, so these run
  // on the gradient hero until it arrives. The galleries below them still draw
  // on our own Djanet and Roman-east libraries, which are of the same places.
  'tadrart-rouge-7-days':            { hero: 'djanet-3.jpg',        accent: '#C8680A', needsImage: true },
  'ihrir-oasis-7-days':              { hero: 'djanet-8.jpg',        accent: '#B4560E', needsImage: true },
  'sefar-tassili-trek':              { hero: 'djanet-11.jpg',       accent: '#9A4A12', needsImage: true },
  'algeria-grand-discovery-14-days': { hero: 'algiers-1.jpg',       accent: '#0B3D2E', needsImage: true },

  // Sahara — burnt sand
  'djanet-sahara-safari':            { hero: 'djanet-1.jpg',        accent: '#C8680A' },
  'djanet-ghardaia-desert-2-days':   { hero: 'djanet-6.jpg',        accent: '#C8680A' },
  'bousaada-desert-tour':            { hero: 'bousaada-1.jpg',      accent: '#C8680A' },
  // Timimoun — real Gourara "Red Oasis" photos now supplied
  'timimoun-desert-escape':          { hero: 'timimoun-1.jpg',      accent: '#A03010' },
  // M'Zab — amber
  'ghardaia-guided-tour':            { hero: 'ghardaia-1.jpg',      accent: '#B87A0A' },
  // West / Andalusian — teal-blue
  'oran-mostaganem-tlemcen':         { hero: 'tlemcen-1.jpg',       accent: '#0D5C7A' },
  // East / Constantine — plum
  'algeria-eastern-sahara-discovery':{ hero: 'constantine-7.jpg',   accent: '#6B2D8B' },
  // Coast / Kabylie — sea blue
  'tour-bejaia-historic':            { hero: 'bejaia-1.jpg',        accent: '#1466A0' },
  // Roman — terracotta
  'private-guided-tour':             { hero: 'tipaza-5.jpg',        accent: '#8B2020' },
  'the-beauty-of-algeria':           { hero: 'batna-timgad-1.jpg',  accent: '#8B2020' },
  'algeria-through-time-and-tradition':{ hero: 'djemila-4.jpg',     accent: '#8B2020' },
  // City / Algiers — casbah teal (distinct photos so no two share an image)
  'algiers-city-tour-casbah-bardo-martyrsmemorial': { hero: 'algiers-1.jpg', accent: '#11738A' },
  'algierstour-hammagarden-notredame-dafrique':     { hero: 'algiers-3.jpg', accent: '#11738A' },
  'day-tour-algeria-culture':        { hero: 'algiers-7.jpg',       accent: '#11738A' },
  // Culture (multi-wilaya) — deep gold, each routed to a DIFFERENT wilaya photo
  'algeria-cultural-tour':           { hero: 'tipaza-1.jpg',        accent: '#B58A2E' },
  'algeria-tour':                    { hero: 'djemila-1.jpg',       accent: '#B58A2E' },
  'algeria-intensive-discovery-tour':{ hero: 'constantine-1.jpg',   accent: '#B58A2E' },
  'the-soul-of-algeria':             { hero: 'tipaza-7.jpg',        accent: '#B58A2E' },
  'the-culture-and-heritage-of-algeria': { hero: 'constantine-4.jpg', accent: '#B58A2E' },
  'algeria-beyond-expectations':     { hero: 'setif-1.jpg',         accent: '#B58A2E' },
};

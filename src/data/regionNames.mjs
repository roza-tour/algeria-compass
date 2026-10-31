// The eight regions' names in the site's other languages (English lives in
// regions.ts). `name` is the short form (chips, the journey chain), `heading`
// the full one ("On to Bou Saâda & the High Plateaus").
export const REGION_NAMES = {
  fr: {
    algiers: { name: 'Alger', heading: 'Alger et la côte centrale' },
    constantine: { name: 'Constantine', heading: 'Constantine et l’Est' },
    roman: { name: 'Algérie romaine', heading: 'L’Algérie romaine' },
    mzab: { name: 'Le M’Zab', heading: 'Le M’Zab — Ghardaïa et ses cinq ksour' },
    sahara: { name: 'Le Sahara', heading: 'Le Sahara — Tassili et le Sud touareg' },
    tlemcen: { name: 'Tlemcen', heading: 'Tlemcen et l’Ouest' },
    bejaia: { name: 'Béjaïa et la Kabylie', heading: 'Béjaïa et la Kabylie' },
    bousaada: { name: 'Bou Saâda', heading: 'Bou Saâda et les Hauts Plateaux' },
  },
  it: {
    algiers: { name: 'Algeri', heading: 'Algeri e la costa centrale' },
    constantine: { name: 'Costantina', heading: 'Costantina e l’Est' },
    roman: { name: 'Algeria romana', heading: 'L’Algeria romana' },
    mzab: { name: 'Lo M’Zab', heading: 'Lo M’Zab — Ghardaïa e le sue cinque città' },
    sahara: { name: 'Il Sahara', heading: 'Il Sahara — Tassili e il Sud tuareg' },
    tlemcen: { name: 'Tlemcen', heading: 'Tlemcen e l’Ovest' },
    bejaia: { name: 'Béjaïa e la Cabilia', heading: 'Béjaïa e la Cabilia' },
    bousaada: { name: 'Bou Saâda', heading: 'Bou Saâda e gli Altipiani' },
  },
  es: {
    algiers: { name: 'Argel', heading: 'Argel y la costa central' },
    constantine: { name: 'Constantina', heading: 'Constantina y el Este' },
    roman: { name: 'Argelia romana', heading: 'La Argelia romana' },
    mzab: { name: 'El M’Zab', heading: 'El M’Zab — Ghardaïa y sus cinco ciudades' },
    sahara: { name: 'El Sáhara', heading: 'El Sáhara — Tassili y el Sur tuareg' },
    tlemcen: { name: 'Tlemcen', heading: 'Tlemcen y el Oeste' },
    bejaia: { name: 'Béjaïa y la Cabilia', heading: 'Béjaïa y la Cabilia' },
    bousaada: { name: 'Bou Saâda', heading: 'Bou Saâda y las Altas Mesetas' },
  },
  de: {
    algiers: { name: 'Algier', heading: 'Algier & die Zentralküste' },
    constantine: { name: 'Constantine', heading: 'Constantine & der Osten' },
    roman: { name: 'Römisches Algerien', heading: 'Römisches Algerien' },
    mzab: { name: 'Der M’Zab', heading: 'Der M’Zab — Ghardaïa & seine fünf Städte' },
    sahara: { name: 'Die Sahara', heading: 'Die Sahara — Tassili & der Tuareg-Süden' },
    tlemcen: { name: 'Tlemcen', heading: 'Tlemcen & der Westen' },
    bejaia: { name: 'Béjaïa & Kabylei', heading: 'Béjaïa & Kabylei' },
    bousaada: { name: 'Bou Saâda', heading: 'Bou Saâda & das Hochplateau' },
  },
};

/** { name, heading } for a region in a language, falling back to English. */
export function regionName(r, lang) {
  const t = REGION_NAMES[lang] && REGION_NAMES[lang][r.id];
  return t || { name: r.name, heading: r.heading || r.name };
}

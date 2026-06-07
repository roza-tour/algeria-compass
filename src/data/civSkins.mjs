// Phase B — the 8 CIVILISATION SKINS (palette + tiling pattern + emblem).
// Reproduced verbatim from the brief. In the SVG strings, the tokens CCC and DDD
// are placeholders: DDD -> accent2 is substituted BEFORE CCC -> accent.
// Consumed by:
//   - scripts/gen-civ-skins.mjs  -> emits src/styles/civ-skins.css
//   - Astro pages/components      -> place -> skin id mapping + skin names
//
// A skin is applied to a page by setting `data-civ="0X"` on <html> (BaseLayout),
// exactly like the geographic `data-region` accent system already in use.

export const SKINS = [
  {
    id: '01', name: 'Amazigh', dark: false,
    surface: '#F4EFE3', ink: '#3E2A20', accent: '#B23A2A', accent2: '#E8B53C',
    pw: 40, ph: 40,
    pattern: "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><g fill='none' stroke='CCC' stroke-width='1.4' opacity='.22'><path d='M20 1L39 20L20 39L1 20Z'/><path d='M20 9L31 20L20 31L9 20Z'/></g></svg>",
    emblem: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path d='M24 4L44 24L24 44L4 24Z' fill='none' stroke='CCC' stroke-width='3'/><path d='M24 16L32 24L24 32L16 24Z' fill='CCC'/></svg>",
  },
  {
    id: '02', name: 'Tuareg & Sahara', dark: true,
    surface: '#1B2A4A', ink: '#F3E9D8', accent: '#E0A85A', accent2: '#B5462E',
    pw: 40, ph: 40,
    pattern: "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><g stroke='CCC' stroke-width='1.3' fill='none' opacity='.32'><path d='M0 20L20 0L40 20L20 40Z'/><circle cx='20' cy='20' r='2' fill='CCC' stroke='none'/></g></svg>",
    emblem: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><g fill='none' stroke='CCC' stroke-width='3'><circle cx='24' cy='11' r='6'/><path d='M24 17V40M11 40L24 30L37 40M14 25H34'/></g></svg>",
  },
  {
    id: '03', name: "Mozabite M'Zab", dark: false,
    surface: '#F3EAD9', ink: '#5A3320', accent: '#C56A3C', accent2: '#7A3B22',
    pw: 48, ph: 30,
    pattern: "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='30'><g fill='none' stroke='CCC' stroke-width='1.5' opacity='.22'><path d='M2 30V14a10 10 0 0 1 20 0V30'/><path d='M26 30V14a10 10 0 0 1 20 0V30'/></g></svg>",
    emblem: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><g fill='CCC'><rect x='6' y='30' width='11' height='14'/><rect x='30' y='30' width='11' height='14'/><rect x='18' y='22' width='12' height='22'/><rect x='21' y='9' width='6' height='13'/></g></svg>",
  },
  {
    id: '04', name: 'Numidian & Roman', dark: false,
    surface: '#E9E0CC', ink: '#4A2A1E', accent: '#8A3F2E', accent2: '#6E7B4F',
    pw: 40, ph: 40,
    pattern: "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M4 4H30V14H14V30H36' fill='none' stroke='CCC' stroke-width='2' opacity='.18'/></svg>",
    emblem: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><g stroke='CCC' stroke-width='3' fill='none' stroke-linecap='round'><path d='M14 12H34M24 12V38M12 40H36M20 15V37M28 15V37'/></g></svg>",
  },
  {
    id: '05', name: 'Islamic-Berber Dynasties', dark: false,
    surface: '#E6D6B6', ink: '#5A3A22', accent: '#9C5A33', accent2: '#5A3A22',
    pw: 40, ph: 20,
    pattern: "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='20'><path d='M0 10H40M10 0V10M30 0V10M0 10V20M20 10V20M40 10V20' fill='none' stroke='CCC' stroke-width='1.1' opacity='.2'/></svg>",
    emblem: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><g fill='none' stroke='CCC' stroke-width='3'><path d='M18 9H30V42H18Z'/><path d='M18 9L24 3L30 9M19 19H29M19 29H29'/></g></svg>",
  },
  {
    id: '06', name: 'Andalusian', dark: false,
    surface: '#F2EEE2', ink: '#1E3A2C', accent: '#2E7D5B', accent2: '#B98A2E',
    pw: 40, ph: 46,
    pattern: "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='46'><g fill='none' stroke='CCC' stroke-width='1.3' opacity='.22'><path d='M0 23Q20 -2 40 23'/><path d='M0 46Q20 21 40 46'/><path d='M20 0V46' opacity='.5'/></g></svg>",
    emblem: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path d='M11 44V24a13 13 0 0 1 26 0V44' fill='none' stroke='CCC' stroke-width='3'/><path d='M18 44V27a6 6 0 0 1 12 0V44' fill='none' stroke='CCC' stroke-width='2' opacity='.55'/></svg>",
  },
  {
    id: '07', name: 'Ottoman Algiers', dark: false,
    surface: '#E7F1F0', ink: '#123A3A', accent: '#1E8C8C', accent2: '#C9A24B',
    pw: 44, ph: 44,
    pattern: "<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44'><g fill='none' stroke='CCC' stroke-width='1.4' opacity='.22'><rect x='11' y='11' width='22' height='22'/><rect x='11' y='11' width='22' height='22' transform='rotate(45 22 22)'/></g></svg>",
    emblem: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><g fill='CCC'><rect x='13' y='13' width='22' height='22'/><rect x='13' y='13' width='22' height='22' transform='rotate(45 24 24)'/></g></svg>",
  },
  {
    id: '08', name: 'Modern Algeria', dark: false,
    surface: '#E8E4D8', ink: '#143A2C', accent: '#B23A2A', accent2: '#0B3D2E',
    pw: 60, ph: 30,
    pattern: "<svg xmlns='http://www.w3.org/2000/svg' width='60' height='30'><path d='M0 28L15 10L25 20L40 4L55 22L60 16' fill='none' stroke='CCC' stroke-width='1.6' opacity='.24'/></svg>",
    emblem: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path d='M3 42L18 16L28 30L37 11L45 42Z' fill='CCC'/><path d='M36 5l1.3 2.7 3 .3-2.2 2 .6 2.9-2.7-1.5-2.7 1.5.6-2.9-2.2-2 3-.3Z' fill='DDD'/></svg>",
  },
];

export const SKIN_BY_ID = Object.fromEntries(SKINS.map(s => [s.id, s]));

// ---- place -> skin mappings (from the brief) ----
export const PROVINCE_SKIN = {
  algiers: '07', constantine: '07', blida: '06',
  tipaza: '04', setif: '04', batna: '04', annaba: '04',
  oran: '06', tlemcen: '06', mostaganem: '06',
  bejaia: '01', ghardaia: '03',
  djanet: '02', timimoun: '02',
  bousaada: '05',
};

export const DEST_SKIN = {
  'casbah-of-algiers': '07', constantine: '07',
  djemila: '04', timgad: '04', tipaza: '04',
  'mzab-valley': '03', 'tassili-najjer': '02', djanet: '02',
  'beni-hammad': '05', tlemcen: '06',
};

// Tours inherit their dominant region's skin (mapped by primary wilaya slug).
export function skinForTour(tour) {
  const w = (tour.wilayas || [])[0];
  return PROVINCE_SKIN[w] || '08';
}

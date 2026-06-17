// Algeria Compass — REGIONS ("One country, eight worlds")
// Content sourced from the brand's design handoff (reference/regions/data.jsx),
// cross-checked against the real photography in public/assets/img/tours/ and the
// existing destination/province facts. No fabricated facts. Each region links
// out to the REAL existing pages (provinces / destinations) it covers.
const T = '/assets/img/tours/';
const R = '/assets/regions/';

export interface Monument { img: string; n: string; t: string; d: string; }
export interface RegionLink { label: string; href: string; }
export interface Region {
  id: string; idx: string; name: string; heading?: string; ar: string; kicker: string;
  rc: string; rcD: string; rcL: string; paper: string;
  hero: string; emblem: string; pat: string;
  tag: string; sub: string; intro: string[];
  monuments: Monument[];
  facets: [string, string, string][];
  facts: [string, string][];
  gallery: string[];
  links: RegionLink[];
  seoTitle: string; seoDesc: string;
}

export const REGIONS: Region[] = [
  {
    id: 'algiers', idx: '01', name: 'Algiers', heading: 'Algiers & the Central Coast', ar: 'الجزائر و القصبة', kicker: 'The Capital · Mediterranean',
    rc: '#11738A', rcD: '#0A3A47', rcL: '#7FCAD8', paper: '#EEF5F6',
    hero: T + 'algiers-9.jpg', emblem: R + 'em-algiers.svg', pat: `url('${R}pat-algiers.svg')`,
    tag: 'The white city above the bay — Ottoman casbah, Andalusian courtyards, French boulevards.',
    sub: 'El Djazaïr — the white city that gives the country its name, cascading from the Ottoman casbah to the Mediterranean.',
    intro: [
      `Algiers rises from the bay in a cascade of white — “Alger la Blanche”. Its old heart, the Casbah, is a UNESCO-listed maze of Ottoman houses, mosques and courtyards still lived in today, climbing steeply from the harbour to the citadel above.`,
      `Below it spreads the French colonial city of arcaded boulevards, and beyond, the gardens, monuments and museums of a capital that has been Phoenician, Roman, Ottoman and French in turn.`,
    ],
    monuments: [
      { img: T + 'algiers-5.jpg', n: 'UNESCO · Ottoman', t: 'The Casbah', d: `A near-vertical labyrinth of white houses, blind alleys and tiled courtyards on the hill above the sea.` },
      { img: T + 'algiers-8.jpg', n: 'Mosque · 1612', t: 'Ketchaoua Mosque', d: `The great Ottoman mosque at the foot of the Casbah, restored as a jewel of Algiers’ skyline.` },
      { img: T + 'algiers-10.jpg', n: 'Monument', t: 'Maqam Echahid', d: `The towering Martyrs’ Memorial over the bay — three palm fronds for independence.` },
    ],
    facets: [
      ['01', 'The corsair city', `Capital of the Regency of Algiers, an Ottoman maritime power that ruled the western Mediterranean for three centuries.`],
      ['02', 'Andalusian Algiers', `Refugees expelled from Spain brought their crafts, music and gardens to the white city.`],
      ['03', 'The dar', `Behind plain walls, the courtyard house turns inward around a tiled patio open to the sky.`],
      ['04', 'A living quarter', `The Casbah is not a museum — families still live, trade and climb its lanes every day.`],
    ],
    facts: [['City', 'Algiers — El Djazaïr'], ['Heritage', 'Casbah · UNESCO 1992'], ['Era', 'Ottoman · Andalusian'], ['Best light', 'Early morning'], ['Pair with', 'Tipasa · the bay']],
    gallery: [T + 'algiers-1.jpg', T + 'algiers-5.jpg', T + 'algiers-8.jpg', T + 'algiers-10.jpg'],
    links: [{ label: 'Algiers state guide', href: '/provinces/algiers/' }, { label: 'Casbah of Algiers', href: '/destinations/casbah-of-algiers/' }, { label: 'Tipaza', href: '/destinations/tipaza/' }],
    seoTitle: 'Algiers — The White City Region | Algeria Compass',
    seoDesc: 'The capital region of Algeria: the UNESCO Casbah, Ottoman mosques, Andalusian courtyards and French boulevards cascading to the Mediterranean.',
  },
  {
    id: 'constantine', idx: '02', name: 'Constantine', heading: 'Constantine & the East', ar: 'قسنطينة', kicker: 'The East · City of Bridges',
    rc: '#8A3A68', rcD: '#3E1730', rcL: '#D295BB', paper: '#F4EDF1',
    hero: T + 'constantine-1.jpg', emblem: R + 'em-constantine.svg', pat: `url('${R}pat-constantine.svg')`,
    tag: 'A city on a rock, split by a gorge and stitched together by bridges flung across the void.',
    sub: 'Ancient Cirta — a city built on a limestone plateau encircled by the Rhumel gorge, joined to itself by soaring bridges.',
    intro: [
      `Few cities have a setting like Constantine. The old town sits on a plateau all but encircled by the Rhumel, which has cut a gorge so deep the city seems to float, joined to the plateau by a famous sequence of bridges.`,
      `Long before the Ottomans this was Cirta, capital of the Numidian king Massinissa, later refounded by the emperor Constantine. Two thousand years on it remains the cultural capital of the Algerian east — and the home of malouf, its Andalusian classical music.`,
    ],
    monuments: [
      { img: T + 'constantine-4.jpg', n: 'Bridge · 1912', t: 'Sidi M’Cid Bridge', d: `A suspension bridge strung 175 metres above the Rhumel — once among the highest in the world.` },
      { img: T + 'constantine-7.jpg', n: 'Mosque', t: 'Emir Abdelkader Mosque', d: `One of the largest mosques in Africa, its twin minarets crowning the modern city.` },
      { img: T + 'constantine-2.jpg', n: 'Heritage', t: 'The old medina', d: `Ottoman palaces, painted courtyards and the sound of malouf in the streets of Cirta.` },
    ],
    facets: [
      ['01', 'The gorge', `The Rhumel’s 200-metre chasm is the city’s defining fact — its defence, its drama, its silence.`],
      ['02', 'The bridges', `Seven crossings, from the soaring Sidi M’Cid to slender footways — a city built on bridges.`],
      ['03', 'Malouf', `The Andalusian art-music of the east, a direct thread back to medieval Córdoba and Seville.`],
      ['04', 'Cirta', `Beneath the Ottoman and French city lies one of the oldest inhabited places in the Maghreb.`],
    ],
    facts: [['Antiquity', 'Cirta · Numidian capital'], ['Setting', 'The Rhumel gorge'], ['Known for', 'Bridges & malouf'], ['Access', 'Airport · rail'], ['Pair with', 'Djémila · Timgad']],
    gallery: [T + 'constantine-1.jpg', T + 'constantine-2.jpg', T + 'constantine-4.jpg', T + 'constantine-7.jpg'],
    links: [{ label: 'Constantine state guide', href: '/provinces/constantine/' }, { label: 'Constantine', href: '/destinations/constantine/' }, { label: 'Djémila', href: '/destinations/djemila/' }],
    seoTitle: 'Constantine — The City of Bridges Region | Algeria Compass',
    seoDesc: 'Ancient Cirta on its rock above the Rhumel gorge: the bridges of Constantine, the Emir Abdelkader Mosque and the malouf music of the Algerian east.',
  },
  {
    id: 'roman', idx: '03', name: 'Roman Algeria', ar: 'الجزائر الرومانية', kicker: 'The Highlands & Coast · Antiquity',
    rc: '#A23A28', rcD: '#4E1A14', rcL: '#DE9277', paper: '#F5ECE6',
    hero: T + 'djemila-1.jpg', emblem: R + 'em-roman.svg', pat: `url('${R}pat-roman.svg')`,
    tag: 'Some of the best-preserved Roman cities on earth — theatres, temples and mosaics in the open air.',
    sub: 'Djémila, Timgad and Tipaza — three of the greatest Roman sites in the world, scattered across the highlands and coast.',
    intro: [
      `Rome ruled North Africa for six centuries, and nowhere left finer cities than in Algeria. On a remote upland in Sétif, Djémila (Cuicul) survives almost intact: paved streets, temples, a theatre and a museum of brilliant mosaics.`,
      `South across the Aurès, Timgad was laid out by the emperor Trajan as a perfect grid — “the Pompeii of Africa”. On the coast, Tipaza’s ruins stand among wildflowers above a turquoise sea. Three UNESCO sites, three different worlds of antiquity.`,
    ],
    monuments: [
      { img: T + 'batna-timgad-1.jpg', n: 'UNESCO · 100 AD', t: 'Timgad', d: `Trajan’s grid city in the Aurès — a triumphal arch, theatre and forum frozen in the highlands.` },
      { img: T + 'tipaza-5.jpg', n: 'UNESCO · Coast', t: 'Tipaza', d: `Roman ruins among wildflowers above a turquoise Mediterranean — Phoenician, then Roman.` },
      { img: T + 'djemila-4.jpg', n: 'UNESCO · 1982', t: 'Djémila — Cuicul', d: `One of the best-preserved Roman towns anywhere, folded into the hills of Sétif.` },
    ],
    facets: [
      ['01', 'Djémila', `Adapted to its sloping site rather than the standard grid — and all the more beautiful for it.`],
      ['02', 'Timgad', `A textbook Roman colony for veterans, its streets still bearing chariot ruts.`],
      ['03', 'Mosaics', `Algeria’s museums hold some of the richest Roman mosaics in the Mediterranean world.`],
      ['04', 'Tipaza', `Where Camus walked — “ruins young again under the sun,” ringed by sea and asphodel.`],
    ],
    facts: [['Sites', 'Djémila · Timgad · Tipaza'], ['Status', 'Three UNESCO inscriptions'], ['Era', 'Roman · 1st–4th c. AD'], ['Best time', 'Apr–Jun · Sep–Oct'], ['Base', 'Sétif · Batna · Algiers']],
    gallery: [T + 'djemila-1.jpg', T + 'djemila-4.jpg', T + 'batna-timgad-6.jpg', T + 'tipaza-1.jpg'],
    links: [{ label: 'Djémila', href: '/destinations/djemila/' }, { label: 'Timgad', href: '/destinations/timgad/' }, { label: 'Tipaza', href: '/destinations/tipaza/' }],
    seoTitle: 'Roman Algeria — Djémila, Timgad & Tipaza | Algeria Compass',
    seoDesc: 'Three of the best-preserved Roman cities on earth: Djémila and Timgad in the highlands and Tipaza on the coast — all UNESCO World Heritage Sites.',
  },
  {
    id: 'mzab', idx: '04', name: 'The M’Zab', heading: 'The M’Zab — Ghardaïa & Its Five Towns', ar: 'وادي مزاب', kicker: 'The Northern Sahara · Ghardaïa',
    rc: '#B07A12', rcD: '#5A3B06', rcL: '#E8C46A', paper: '#F6EFDD',
    hero: T + 'ghardaia-1.jpg', emblem: R + 'em-mzab.svg', pat: `url('${R}pat-mzab.svg')`,
    tag: 'A thousand-year-old pentapolis of cubist desert towns, still lived in exactly as designed.',
    sub: 'Ghardaïa and the five fortified towns of the M’Zab valley — a perfect oasis urbanism, inscribed by UNESCO.',
    intro: [
      `In a rocky valley on the edge of the Sahara, the Ibadi community built five fortified hill-towns around the year 1000 — Ghardaïa, Beni Isguen, Melika, Bou Noura and El Atteuf. Each climbs to a mosque whose minaret doubles as a watchtower.`,
      `The M’Zab is a masterpiece of desert design: terraced houses in ochre, white and blue, palm gardens fed by an ingenious water system, and a social order so intact that Le Corbusier came here to learn. It is lived heritage, not a monument.`,
    ],
    monuments: [
      { img: T + 'ghardaia-2.jpg', n: 'UNESCO · c.1000', t: 'The Ksar of Ghardaïa', d: `A pyramid of ochre houses spiralling up to the watchtower-minaret at its summit.` },
      { img: T + 'ghardaia-5.jpg', n: 'Pentapolis', t: 'Beni Isguen', d: `The holy walled town of the M’Zab, its gates closed to outsiders at dusk.` },
      { img: T + 'ghardaia-7.jpg', n: 'Living craft', t: 'The market square', d: `The arcaded souk where M’Zabi carpets and date harvests have changed hands for centuries.` },
    ],
    facets: [
      ['01', 'Ibadi urbanism', `Five towns built as one system — defence, water, worship and trade in perfect order.`],
      ['02', 'Desert architecture', `Cubist terraced houses that inspired Le Corbusier and modern architects worldwide.`],
      ['03', 'The palm grove', `A second summer city in the oasis, fed by a thousand-year-old water-sharing system.`],
      ['04', 'Living tradition', `A community that still governs its towns by the customs that built them.`],
    ],
    facts: [['Valley', 'M’Zab · Ghardaïa'], ['Heritage', 'UNESCO 1982'], ['Founded', 'c. 1000 AD'], ['Famous craft', 'M’Zabi carpets'], ['Best time', 'Oct–Apr']],
    gallery: [T + 'ghardaia-1.jpg', T + 'ghardaia-2.jpg', T + 'ghardaia-5.jpg', T + 'ghardaia-7.jpg'],
    links: [{ label: 'Ghardaïa state guide', href: '/provinces/ghardaia/' }, { label: 'M’Zab Valley', href: '/destinations/mzab-valley/' }],
    seoTitle: 'The M’Zab Valley — Ghardaïa Region | Algeria Compass',
    seoDesc: 'The thousand-year-old pentapolis of the M’Zab: Ghardaïa and its five fortified Ibadi hill-towns, a UNESCO masterpiece of desert urbanism.',
  },
  {
    id: 'sahara', idx: '05', name: 'The Sahara', heading: 'The Sahara — Tassili & the Tuareg South', ar: 'الصحراء و التاسيلي', kicker: 'The Deep South · Tassili & Tadrart',
    rc: '#C8680A', rcD: '#5E2F08', rcL: '#EFAC5E', paper: '#F7EEE0',
    hero: T + 'djanet-1.jpg', emblem: R + 'em-sahara.svg', pat: `url('${R}pat-sahara.svg')`,
    tag: 'Plateaus of prehistoric art, sandstone forests and oases kept alive for a thousand years.',
    sub: 'Djanet, the Tassili n’Ajjer and the Tadrart — the Tuareg south, and the greatest open-air gallery of rock art on earth.',
    intro: [
      `Beyond the Atlas, Algeria opens into the greatest desert on earth. The far south-east rises into the Tassili n’Ajjer — a sandstone plateau eroded into forests of stone, holding one of the richest galleries of prehistoric art in the world, some of it twelve thousand years old.`,
      `This is the country of the Kel Ajjer Tuareg, whose caravans once linked the Mediterranean to the Sahel. Around the oasis of Djanet, and in the dunes of the Tadrart, the desert is not a void to cross but a homeland — read, named and lived in.`,
    ],
    monuments: [
      { img: T + 'djanet-6.jpg', n: 'UNESCO · 1982', t: 'Tassili n’Ajjer', d: `Forests of eroded sandstone hiding twelve thousand years of painted and engraved rock art.` },
      { img: T + 'djanet-3.jpg', n: 'Erg', t: 'The Tadrart', d: `Red dunes, arches and bivouacs under a sky thick with stars in Algeria’s far south-east.` },
      { img: T + 'djanet-9.jpg', n: 'Oasis', t: 'The gueltas of Djanet', d: `Permanent rock pools and palm groves — mirrors of green in the heart of the desert.` },
    ],
    facets: [
      ['01', 'The rock art', `Engravings and paintings of a green Sahara now turned to stone — herds, hunts and dancers.`],
      ['02', 'The Tuareg', `The Kel Ajjer — their language Tamahaq, their script Tifinagh, the indigo veil of the men.`],
      ['03', 'The gueltas', `Permanent rock pools hidden in the canyons that make life, and travel, possible.`],
      ['04', 'The Sebeiba', `Djanet’s ancient festival of dance between two quarters of the oasis — UNESCO heritage.`],
    ],
    facts: [['Gateway', 'Djanet (by air)'], ['Heritage', 'Tassili n’Ajjer · UNESCO'], ['Season', 'October – March'], ['Access', 'Guided, with permits'], ['Pair with', 'Hoggar · Erg Admer']],
    gallery: [T + 'djanet-1.jpg', T + 'djanet-3.jpg', T + 'djanet-6.jpg', T + 'djanet-9.jpg'],
    links: [{ label: 'Djanet state guide', href: '/provinces/djanet/' }, { label: 'Tassili n’Ajjer', href: '/destinations/tassili-najjer/' }, { label: 'Djanet', href: '/destinations/djanet/' }],
    seoTitle: 'The Sahara — Tassili n’Ajjer & the Tuareg South | Algeria Compass',
    seoDesc: 'Algeria’s deep south: Djanet, the UNESCO Tassili n’Ajjer rock-art plateau and the red dunes of the Tadrart — the homeland of the Kel Ajjer Tuareg.',
  },
  {
    id: 'tlemcen', idx: '06', name: 'Tlemcen', heading: 'Tlemcen & the West', ar: 'تلمسان و الغرب', kicker: 'The West · Andalusian Heritage',
    rc: '#0D6C7A', rcD: '#073840', rcL: '#5FB6C0', paper: '#EAF4F4',
    hero: T + 'tlemcen-1.jpg', emblem: R + 'em-tlemcen.svg', pat: `url('${R}pat-tlemcen.svg')`,
    tag: 'The Andalusian capital of the west — medieval minarets, mosques and the music of al-Andalus.',
    sub: 'Tlemcen and the western coast at Oran — the most Andalusian corner of Algeria, of carved plaster, minarets and gardens.',
    intro: [
      `Tlemcen was the capital of a medieval kingdom and the most refined Andalusian city in the Maghreb — a place of mosques, madrasas and palaces whose carved plaster and tilework rival Granada. The ruined minaret of Mansourah still stands alone above the plain.`,
      `To the north, the port of Oran guards the western coast beneath the Spanish fort of Santa Cruz. Together they hold the Gharbi spirit — Andalusian music, the rai born in Oran’s cafés, and a coast that looks toward Spain.`,
    ],
    monuments: [
      { img: T + 'tlemcen-3.jpg', n: 'Heritage', t: 'Lalla Setti & El Mechouar', d: `The plateau and royal citadel above Tlemcen, heart of the Zayyanid kingdom.` },
      { img: T + 'oran-1.jpg', n: 'Coast · Oran', t: 'Santa Cruz, Oran', d: `The Spanish fort and chapel high above the bay of Oran, the capital of the west.` },
      { img: T + 'oran-5.jpg', n: 'City', t: 'Oran — El Bahia', d: `Belle-époque boulevards and the birthplace of raï, looking out across the Mediterranean.` },
    ],
    facets: [
      ['01', 'Mansourah', `The lone minaret of a vanished mosque — the great ruin of the Algerian west.`],
      ['02', 'Andalusian art', `Carved plaster, cedar and zellige that carry the memory of Córdoba and Granada.`],
      ['03', 'The Great Mosque', `A masterpiece of Almoravid architecture, nine centuries old and still in use.`],
      ['04', 'Raï', `Born in the cafés of Oran — the rebel pop of the west, now heard worldwide.`],
    ],
    facts: [['Cities', 'Tlemcen · Oran'], ['Heritage', 'Almoravid · Zayyanid'], ['Known for', 'Andalusian music'], ['Era', '11th–15th c.'], ['Pair with', 'Mostaganem · coast']],
    gallery: [T + 'tlemcen-1.jpg', T + 'tlemcen-3.jpg', T + 'oran-1.jpg', T + 'oran-5.jpg'],
    links: [{ label: 'Tlemcen state guide', href: '/provinces/tlemcen/' }, { label: 'Tlemcen', href: '/destinations/tlemcen/' }, { label: 'Oran state guide', href: '/provinces/oran/' }],
    seoTitle: 'Tlemcen & the West — Andalusian Algeria | Algeria Compass',
    seoDesc: 'The Andalusian west of Algeria: Tlemcen’s medieval minarets and mosques, the ruin of Mansourah, and Oran — the coast and birthplace of raï.',
  },
  {
    id: 'bejaia', idx: '07', name: 'Béjaïa & Kabylie', ar: 'بجاية و القبائل', kicker: 'The Coast · Djurdjura',
    rc: '#1466A0', rcD: '#0A3354', rcL: '#7FB4DD', paper: '#EAF1F8',
    hero: T + 'bejaia-3.jpg', emblem: R + 'em-bejaia.svg', pat: `url('${R}pat-bejaia.svg')`,
    tag: 'Where the Djurdjura mountains fall into the sea — Amazigh heartland of cliffs, capes and coves.',
    sub: 'Béjaïa and Kabylie — a coast of turquoise coves below the Djurdjura, the heartland of Amazigh Algeria.',
    intro: [
      `Where the Djurdjura mountains meet the Mediterranean, the bay of Béjaïa opens under the green headland of Gouraya. Once the Hammadid capital and a great medieval port — it was here that Fibonacci learned the Arabic numerals he carried to Europe.`,
      `Behind the coast rises Kabylie, the Amazigh heartland: stone villages on the ridges, the snow-capped Djurdjura, and a culture of language, craft and fierce independence that has endured every empire.`,
    ],
    monuments: [
      { img: T + 'bejaia-5.jpg', n: 'Coast', t: 'Cap Carbon & Les Aiguades', d: `Turquoise coves and a lighthouse on the cliffs of the Gouraya national park.` },
      { img: T + 'bejaia-1.jpg', n: 'Medina', t: 'Old Béjaïa', d: `The Hammadid port-city climbing the slope above the bay — gate of the medieval Maghreb.` },
      { img: T + 'bejaia-10.jpg', n: 'Bay', t: 'The bay & Gouraya', d: `The green headland and national park watching over the city and the sea.` },
    ],
    facets: [
      ['01', 'The Hammadids', `Béjaïa was a capital and a beacon of learning where East met West in the Middle Ages.`],
      ['02', 'Amazigh Kabylie', `A living language and culture — Tamazight, poetry, song and silver jewellery.`],
      ['03', 'The Djurdjura', `Snow peaks above the coast — Tikjda, Lalla Khedidja and the cedar forests.`],
      ['04', 'Fibonacci', `It was in Béjaïa that a young Pisan merchant learned the numerals that reshaped Europe.`],
    ],
    facts: [['Coast', 'Béjaïa · Gouraya'], ['Mountains', 'Djurdjura · Kabylie'], ['Culture', 'Amazigh heartland'], ['Best time', 'May–Sep'], ['Pair with', 'Tizi Ouzou · Tikjda']],
    gallery: [T + 'bejaia-1.jpg', T + 'bejaia-3.jpg', T + 'bejaia-5.jpg', T + 'bejaia-10.jpg'],
    links: [{ label: 'Béjaïa state guide', href: '/provinces/bejaia/' }],
    seoTitle: 'Béjaïa & Kabylie — The Amazigh Coast | Algeria Compass',
    seoDesc: 'Where the Djurdjura mountains fall into the Mediterranean: the bay of Béjaïa, the Gouraya headland and the Amazigh heartland of Kabylie.',
  },
  {
    id: 'bousaada', idx: '08', name: 'Bou Saâda', heading: 'Bou Saâda & the High Plateaus', ar: 'بوسعادة و الهضاب', kicker: 'The Hodna · Gateway to the Sahara',
    rc: '#A0511E', rcD: '#4E2710', rcL: '#DE9A66', paper: '#F6EDE2',
    hero: T + 'bousaada-6.jpg', emblem: R + 'em-bousaada.svg', pat: `url('${R}pat-bousaada.svg')`,
    tag: 'The “City of Happiness” — the first oasis of the south, of palm groves, dunes and dust-light.',
    sub: 'Bou Saâda and the high plateaus — the nearest oasis to the capital, where the Tell gives way to the Sahara.',
    intro: [
      `Bou Saâda — “the place of happiness” — is the first true oasis south of the Tell, long the painters’ town where the light drew Étienne Dinet to settle and convert. Its palm groves, gorge and old ksar mark the edge of the desert.`,
      `Around it spread the high plateaus of the Hodna and the Saharan Atlas — pastoral country of the Ouled Naïl, of weekly markets, weaving and a horizon that opens at last onto the south.`,
    ],
    monuments: [
      { img: T + 'bousaada-1.jpg', n: 'Zawiya', t: 'El Hamel & the old ksar', d: `The great religious complex and the mud-brick old town at the desert’s edge.` },
      { img: T + 'bousaada-3.jpg', n: 'Oasis', t: 'The palm groves', d: `Gardens and falaj channels in the gorge of the Oued Bou Saâda below the dunes.` },
      { img: T + 'setif-1.jpg', n: 'Highlands', t: 'Aïn El Fouara, Sétif', d: `The famous fountain of the plateau city to the east — gateway to the Roman highlands.` },
    ],
    facets: [
      ['01', 'The painters’ oasis', `Étienne Dinet and the Orientalists came for its light and never quite left.`],
      ['02', 'The Ouled Naïl', `Pastoral tribes of the plateaus, famed for their weaving, jewellery and dance.`],
      ['03', 'Gateway south', `The first palms, the first dunes — where travellers feel the Sahara begin.`],
      ['04', 'The markets', `Weekly souks of wool, dates and silver across the high plateaus of the Hodna.`],
    ],
    facts: [['Oasis', 'Bou Saâda · M’Sila'], ['Region', 'Hodna · high plateaus'], ['Known for', 'Light & weaving'], ['Best time', 'Oct–Apr'], ['Pair with', 'Sétif · Djelfa']],
    gallery: [T + 'bousaada-1.jpg', T + 'bousaada-3.jpg', T + 'bousaada-6.jpg', T + 'setif-1.jpg'],
    links: [{ label: 'Bou Saâda state guide', href: '/provinces/bousaada/' }, { label: 'Sétif state guide', href: '/provinces/setif/' }],
    seoTitle: 'Bou Saâda & the High Plateaus | Algeria Compass',
    seoDesc: 'The “City of Happiness” — Bou Saâda, the nearest oasis to the capital, its palm groves and ksar, and the high plateaus of the Hodna.',
  },
];

export const regionById = (id: string) => REGIONS.find(r => r.id === id);

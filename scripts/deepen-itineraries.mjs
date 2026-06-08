// P5 — deepen day-by-day itineraries. Adds `stops` (3-ish real places with a
// vivid "what you see & why it matters" line) + honest `note`s to each tour day.
// Places are decomposed from the existing day `body` and enriched with real
// facts about these well-known sites — nothing invented. Arrival/transfer/
// departure days that genuinely have fewer stops say so via `note`.
// Run: node scripts/deepen-itineraries.mjs   (idempotent — rewrites stops/note)
import { readFileSync, writeFileSync } from 'node:fs';

const s = (place, text) => ({ place, text });

// shared, reusable factual descriptions for places that recur across tours
const P = {
  casbah:        s('The Casbah of Algiers', 'The UNESCO-listed Ottoman citadel — a steep white labyrinth of palaces, mosques and courtyard houses climbing above the bay.'),
  bardo:         s('The Bardo Museum', 'Prehistory and ethnography inside a graceful Moorish villa, from Saharan rock-art casts to silver jewellery and everyday Algeria.'),
  martyrs:       s("The Martyrs' Memorial (Maqam Echahid)", 'Three soaring concrete palm-fronds raised in 1982 over the city, honouring the dead of the war of independence.'),
  armyMuseum:    s('The National Army Museum', "Algeria's long military story from antiquity to 1962, beside the Martyrs' Memorial."),
  ndAfrique:     s("Notre-Dame d'Afrique", "A 19th-century basilica — 'Our Lady of Africa' — on the cliffs above the bay, inscribed for Muslims and Christians alike."),
  hamma:         s('The Hamma Botanical Garden', "The grand 19th-century Jardin d'Essai, one of the finest botanical gardens in Africa."),
  mujahideen:    s('The Museum of the Mujahideen', 'The story of the independence fighters, told beneath the Martyrs’ Memorial.'),
  tipazaRuins:   s('Roman Tipaza', 'A UNESCO-listed Roman port strung along the Mediterranean — basilicas, baths and a theatre with the waves at their feet.'),
  mausoleum:     s('The Royal Mausoleum of Mauretania', 'A great stone drum on a hill above the sea — the 1st-century-BC tomb of Berber king Juba II and Cleopatra Selene, daughter of Cleopatra of Egypt.'),
  cherchell:     s('Cherchell (ancient Caesarea)', "Juba II's old capital, whose museum holds some of Algeria's finest Roman and Greek mosaics and statuary."),
  djemila:       s('Djémila (Cuicul)', 'A UNESCO Roman city in green mountains, superbly preserved — forum, temples and a steep theatre.'),
  djemilaMos:    s('The Djémila mosaics', 'On-site mosaics among the richest in the Roman world, in the site museum.'),
  timgad:        s('Timgad', "Trajan's grid-planned colony of AD 100 — the 'Pompeii of the Aurès', laid out across the open plain."),
  trajan:        s("Trajan's Arch", "The triumphal arch framing Timgad's main street — the city's iconic silhouette."),
  timgadLib:     s('The Timgad library & theatre', 'The ruins of a rare Roman public library and a 3,500-seat theatre still in use today.'),
  bridges:       s("Constantine's bridges", "The 'City of Bridges' spanning the dizzying Rhumel gorge, the Sidi M'Cid footbridge slung high above it."),
  sidiRached:    s('The Sidi Rached viaduct', 'A monumental stone-arch bridge, one of the great masonry viaducts anywhere.'),
  ahmedBey:      s('Ahmed Bey Palace', 'The early-19th-century Ottoman palace of the last bey, with painted galleries and shaded courtyards.'),
  emirMosque:    s('The Emir Abdelkader Mosque', 'One of Africa’s largest mosques, its twin minarets a modern landmark of Constantine.'),
  cirta:         s('The Cirta National Museum', 'Antiquities of ancient Cirta — mosaics, bronzes and Numidian relics.'),
  setifFountain: s('Aïn El Fouara, Sétif', "The beloved 1898 fountain at the city's heart, Sétif's enduring symbol."),
  beniIsguen:    s('Beni Isguen', 'The sacred walled town of the M’Zab, entered by its old gate, where dress and photography follow local custom.'),
  elAtteuf:      s('El Atteuf', 'The oldest of the five M’Zab towns, whose simple Sidi Brahim mosque so struck Le Corbusier that it shaped modern architecture.'),
  melika:        s('Melika', 'A hilltop M’Zab town of marabout tombs and long views over the valley.'),
  ghardaiaSouk:  s('The Ghardaïa market', "The tiered arcaded square beneath a pyramid-minaret, the M'Zab's bustling heart for a thousand years."),
  foggara:       s('The palm groves & foggaras', 'Gardens watered for a thousand years by the foggara — underground channels that make life possible in the dry valley.'),
  bouSaadaFalls: s('The Bou Saada waterfall', "A natural cascade in the oasis — the cool green corner of the 'City of Happiness'."),
  ferrero:       s('The Ferrero Mill', 'A historic riverside mill, a landmark of old Bou Saada.'),
  elHamel:       s('The El Hamel zawiya', 'A hilltop Rahmaniyya Sufi shrine and Quranic school above Bou Saada — calm, austere and panoramic.'),
  tadrart:       s('The Tadrart Rouge', "Wind-carved orange sandstone canyons and arches — among the Sahara's most cinematic landscapes."),
  tassili:       s("The Tassili n'Ajjer plateau", "A vast sandstone 'forest of rock', UNESCO-listed for one of the world's greatest concentrations of prehistoric art."),
  rockArt:       s('Prehistoric rock art', 'Paintings and engravings of herders, hunters and wildlife from a green Sahara up to ~10,000 years old — older than the pyramids.'),
  tuaregTea:     s('Tuareg tea ceremony', 'The customary three glasses of Saharan tea with a Tuareg family — the living culture of the deep south.'),
};

// STOPS[tourId] = { dayNumber: { stops:[...], note?:string } }
const STOPS = {
  'algeria-cultural-tour': {
    1: { note: 'Arrival day — a private airport welcome and transfer, with the evening free to settle into Algiers.' },
    2: { stops: [P.mausoleum, P.tipazaRuins, P.cherchell] },
    3: { stops: [P.casbah, P.bardo, P.martyrs], note: 'In the evening you fly south to Ghardaïa.' },
    4: { stops: [P.foggara, s('The dunes near Ghardaïa', 'An afternoon on the sand at the Sahara’s edge, with a traditional lunch under the desert sky.')] },
    5: { stops: [P.elAtteuf, s('The Sidi Brahim mausoleum', 'Whitewashed and hand-moulded, almost sculptural — the cubist purity that drew European architects to the M’Zab.'), P.ghardaiaSouk], note: 'Then the afternoon flight back to Algiers.' },
  },
  'djanet-sahara-safari': {
    1: { stops: [s('Djanet', 'The Tuareg oasis capital of the south-east — palmeries beneath red cliffs, your gateway to the Tassili.'), s('First dunes at sunset', 'A 4×4 run onto the sand for the day’s last light and a first night at desert camp.')], note: 'An arrival-led day, lighter on stops as you head into the desert.' },
    2: { stops: [P.tadrart, s('Sculpted rock arches', 'Stone arches and balancing boulders shaped over millennia — the Tadrart’s signature forms.'), s('Sand seas & sunset camp', 'Wide dune fields that flush crimson at dusk before a night under exceptionally dark skies.')] },
    3: { stops: [s('The great dunes on foot', 'Climbing the high sand for the silence and the view — the heart of the desert experience.'), P.rockArt, P.tuaregTea] },
    4: { stops: [s('Remote ergs & plateaus', 'Hours of open desert chosen for emptiness, not landmarks — the Sahara at its most absolute.')], note: 'This day is deliberately about distance and silence rather than ticking off named sights.' },
    5: { note: 'A breakfast in the desert and a scenic drive back to Djanet, where the journey ends.' },
  },
  'ghardaia-guided-tour': {
    1: { stops: [P.ghardaiaSouk, s('Lunch in a heritage house', 'A meal inside a traditional Mozabite home — thick-walled and cool against the desert heat.'), P.foggara] },
    2: { stops: [P.beniIsguen, s('The Tafilelt eco-town', 'A modern Mozabite settlement built on traditional principles — proof the valley’s ideas are still alive.'), s('4×4 safari toward El Guerrara', 'Open desert beyond the towns, ending with dinner under the stars.')] },
    3: { note: 'A relaxed breakfast, then the transfer back to the airport.' },
  },
  'oran-mostaganem-tlemcen': {
    1: { stops: [s('Santa Cruz Fort', 'A 16th-century Spanish fortress on Murdjadjo mountain, with the finest view over Oran and the sea.'), s('Place du 1er Novembre', "Oran's grand central square, ringed by colonial façades and the opera house."), s('Sidi El Houari', "Oran's oldest quarter, with Ottoman and Spanish remains around the old port.")] },
    2: { stops: [s('Ahmed Zabana National Museum', "Oran's main museum — natural history, fine art and the region's deep past."), s('The Sacré-Cœur', 'A landmark former cathedral, now a public library, anchoring the modern city.'), s('The seafront corniche', "Oran's Mediterranean promenade and its evening gathering place.")] },
    3: { stops: [s('Mostaganem beaches', 'Long Mediterranean sands on the Dahra coast — a relaxed seaside change of pace.'), s('Bordj el Mehal / the old fort', "An Ottoman-era fort above the town, a reminder of Mostaganem's strategic past."), s('The Tigditt quarter', 'The historic district of steep lanes above the river.')] },
    4: { stops: [s('The Great Mosque of Tlemcen', 'An Almoravid masterpiece of the 12th century, its carved mihrab among the finest in the Maghreb.'), s('El Mechouar Palace', 'The restored citadel-palace of the Zianid sultans who made Tlemcen a capital.'), s('The Lalla Setti plateau', 'A green plateau above the city with panoramas, gardens and a cable-car ride up.')] },
    5: { stops: [s('The El Ourit waterfalls', 'Cascades tumbling down wooded cliffs in Tlemcen National Park east of the city.'), s('Mansourah', 'The great ruined minaret of a 14th-century siege city on the edge of Tlemcen.')], note: 'Then the transfer for departure.' },
  },
  'djanet-ghardaia-desert-2-days': {
    1: { stops: [s('Djanet & sunset dunes', 'A Tuareg oasis town under red cliffs, with a first sunset excursion to nearby dunes.')], note: 'Arrival day in the deep south, easing you into the desert.' },
    2: { stops: [P.tadrart, P.rockArt, s('Red dunes & star camp', 'A desert picnic, sunset over the red dunes and a night camping under the stars.')] },
    3: { stops: [P.tassili, s('Cave paintings of the Tassili', 'Thousands of paintings of herders and wildlife from a wetter Sahara, walked to through canyons.'), s('Sandstone canyons & towers', 'Eroded pinnacles and gorges that feel like another planet.')] },
    4: { stops: [s('An oasis & palm groves', 'Shaded gardens and irrigation channels in the desert.'), P.tuaregTea], note: 'Then back to Djanet for the night.' },
    5: { stops: [s("Ghardaïa old town walk", "An evening through the M'Zab's hill-town lanes after the journey north.")], note: 'A long transfer day from Djanet to the M’Zab Valley.' },
    6: { stops: [P.beniIsguen, P.elAtteuf, P.melika], note: 'Lunch, then the transfer to the airport.' },
  },
  'algeria-eastern-sahara-discovery': {
    1: { stops: [P.bridges, P.emirMosque, s('The Souika old town', 'The tight lanes of Constantine’s old medina clinging to the rock.')], note: 'A travel day from Algiers east to Constantine.' },
    2: { stops: [P.djemila, P.djemilaMos, P.setifFountain] },
    3: { stops: [P.timgad, P.trajan, P.timgadLib] },
    4: { stops: [s('Biskra palm groves', "The 'Queen of the Ziban' — a great date-palm oasis marking the true start of the Sahara."), s('Bou Saada', "The 'City of Happiness', an oasis town long beloved of painters."), s('Bou Saada souks', 'Traditional markets for silver, wool and dates.')] },
    5: { stops: [P.elHamel], note: 'Then the transfer to Algiers for a free evening.' },
    6: { stops: [s('Gouraya fort, Béjaïa', 'A fort high above Béjaïa with sweeping Kabyle-coast views.'), s('Cap Carbon', "A dramatic cape and lighthouse on one of the Mediterranean's most beautiful coastlines.")], note: 'A coastal day trip before the airport transfer.' },
  },
  'algeria-tour': {
    1: { note: 'Airport welcome, hotel check-in and a welcome dinner.' },
    2: { stops: [P.tipazaRuins, P.mausoleum, P.cherchell] },
    3: { stops: [P.casbah, P.martyrs, P.armyMuseum] },
    4: { stops: [P.djemila, P.djemilaMos], note: 'A transfer day east, ending at Djémila.' },
    5: { stops: [P.bridges, P.emirMosque, P.ahmedBey] },
    6: { stops: [P.timgad, P.trajan, P.timgadLib] },
    7: { note: 'A long drive south to the M’Zab Valley and check-in at a guesthouse.' },
    8: { stops: [P.beniIsguen, P.elAtteuf, P.ghardaiaSouk] },
    9: { stops: [P.hamma, P.bardo, P.ndAfrique], note: 'Travelling back to the capital.' },
    10:{ note: 'Breakfast and the transfer to the airport.' },
  },
  'timimoun-desert-escape': {
    1: { note: 'Arrival at Timimoun, transfer to the guesthouse and a traditional dinner.' },
    2: { stops: [s('Ksar Guentour & its palm grove', 'A red-mud ksar above its palmery — classic Gourara architecture.'), s('The ksar & oasis at Tala', 'Another oasis of earthen towers among the palms.'), s('Dune sunset & music evening', 'Sand at dusk and an evening of local Gourara music.')] },
    3: { stops: [s('The Ouled Saïd foggaras', 'Ancient underground irrigation galleries threading water to the gardens — Saharan ingenuity at its finest.'), s('Beni Aïssi & its ksar', 'A palm-grove picnic and tea beside an old ksar.'), s('The large dunes', 'Sunset over the high sand.')] },
    4: { stops: [s('The Ighzer site', 'A desert site explored in the cool of the morning.'), s('4×4 dune safari', 'Golden dunes to a panoramic sunset.'), s("A 'Merdoum' camp dinner", 'A traditional sand-pit-roasted Merdoum feast under the stars.')] },
    5: { stops: [s("Timimoun's market", "The red town's market for spices and handicrafts.")], note: 'Then the return transfer toward Algiers.' },
  },
  'bousaada-desert-tour': {
    1: { stops: [P.bouSaadaFalls, P.ferrero, s('The traditional markets', 'Souks for silver jewellery, wool and dates, with a Bedouin dinner and music in the evening.')], note: 'A morning drive from Algiers, then the afternoon in town.' },
    2: { stops: [P.elHamel], note: 'A local lunch in Bou Saada, then the afternoon return to Algiers.' },
  },
  'algeria-intensive-discovery-tour': {
    1: { stops: [P.bardo, P.casbah, P.martyrs] },
    2: { stops: [P.tipazaRuins, P.mausoleum, P.cherchell] },
    3: { stops: [P.bridges, P.ahmedBey, P.timgad] },
    4: { stops: [P.djemila, P.djemilaMos, P.setifFountain] },
    5: { stops: [s('Bou Saada oasis', 'The gateway to the Sahara, with a desert excursion among the dunes.')], note: 'Then the road back to Algiers.' },
  },
  'the-beauty-of-algeria': {
    1: { stops: [P.bridges, P.ahmedBey, P.cirta], note: 'With time in the old city and its traditional markets.' },
    2: { stops: [P.trajan, P.timgadLib, s('The Timgad forum & temples', "The grid-planned heart of Trajan's colony, with its baths and temples.")] },
  },
  'algeria-through-time-and-tradition': {
    1: { stops: [P.tipazaRuins, P.cherchell, P.mausoleum] },
    2: { stops: [s('Djémila’s colonnaded streets', 'Monumental gateways and paved avenues of the Roman city in its mountain bowl.'), s('The Djémila theatre', 'A steep theatre set into the hillside, still commanding the valley.'), P.djemilaMos] },
    3: { stops: [P.trajan, P.timgadLib, s('Timgad’s grid, baths & temples', 'The textbook Roman plan that gives Timgad its fame.')] },
  },
  'the-soul-of-algeria': {
    1: { stops: [P.bardo, P.ndAfrique, P.martyrs] },
    2: { stops: [P.mausoleum, P.tipazaRuins, P.cherchell] },
    3: { stops: [s('Bou Saada panoramas', 'The fortress and viewpoints over the oasis town.'), s('The Nasreddine Dinet Museum', 'The museum of the Orientalist painter who made Bou Saada famous, with his works and relics.'), s('The historic mosque', 'The old town mosque at the heart of Bou Saada.')] },
    4: { stops: [P.casbah, P.hamma, P.mujahideen] },
  },
  'the-culture-and-heritage-of-algeria': {
    1: { note: 'Airport welcome, check-in, an evening city tour and dinner.' },
    2: { stops: [P.bardo, P.casbah, P.martyrs] },
    3: { stops: [P.mausoleum, P.tipazaRuins, P.cherchell] },
    4: { stops: [P.bridges, P.ahmedBey, P.emirMosque] },
    5: { stops: [s('The Djémila theatre & temples', 'The best-preserved monuments of the UNESCO Roman city, with a local lunch.'), P.djemilaMos] },
    6: { note: 'The road from Constantine to Bou Saada, free time, and a traditional dinner with music.' },
    7: { stops: [P.bouSaadaFalls, P.ferrero, P.elHamel], note: 'Then the return to Algiers.' },
    8: { note: 'Breakfast, check-out and transfer to Algiers airport.' },
  },
  'algeria-beyond-expectations': {
    1: { note: 'Airport reception, hotel check-in and a welcome dinner.' },
    2: { stops: [P.tipazaRuins, P.mausoleum, P.cherchell] },
    3: { stops: [P.casbah, P.martyrs, P.armyMuseum] },
    4: { stops: [P.djemila, P.djemilaMos], note: 'A transfer day to Sétif, ending at Djémila.' },
    5: { stops: [P.bridges, P.emirMosque, P.ahmedBey] },
    6: { stops: [P.timgad, P.trajan, P.timgadLib] },
    7: { note: 'A long drive south to the M’Zab Valley and check-in, with a free evening.' },
    8: { stops: [P.elAtteuf, P.beniIsguen, P.melika] },
    9: { stops: [P.hamma, P.bardo, P.ndAfrique], note: 'Travelling back to Algiers.' },
    10:{ note: 'Breakfast and the transfer to the airport.' },
  },
};

const file = 'src/data/tours.json';
const data = JSON.parse(readFileSync(file, 'utf8'));
const tours = data.tours || data;
let applied = 0, warned = 0;
for (const t of tours) {
  const spec = STOPS[t.id];
  if (!spec) continue;
  for (const day of (t.itinerary || [])) {
    const ds = spec[day.day];
    if (!ds) { console.warn(`! ${t.id} day ${day.day} has no stops spec`); warned++; continue; }
    if (ds.stops) day.stops = ds.stops; else delete day.stops;
    if (ds.note) day.note = ds.note; else delete day.note;
    applied++;
  }
}
writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
console.log(`[deepen] updated ${applied} days across ${Object.keys(STOPS).length} multi-day tours (${warned} warnings)`);

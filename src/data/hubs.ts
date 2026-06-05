// Knowledge-hub definitions. Each hub is an authority center built from the entity graph.
import type { EntityType } from './algeria';

export interface HubFaq { q: string; a: string; }
export interface Hub {
  slug: string;
  title: string;
  theme: string;            // theme entity id this hub centers on
  description: string;
  intro: string;
  featureTypes: EntityType[]; // entity types to surface as snapshots/links
  faqs: HubFaq[];
}

export const hubs: Hub[] = [
  {
    slug: 'travel-planning', title: 'Algeria Travel Planning', theme: 'theme:travel-planning',
    description: 'How to plan a trip to Algeria: seasons, transport, accommodation and travel styles.',
    intro: 'Everything needed to plan a journey through Algeria — when to go, how to move around, where to stay, and which style of trip fits.',
    featureTypes: ['season','transport','accommodation','travel-style'],
    faqs: [
      { q: 'When is the best time to visit Algeria?', a: 'Spring (March–May) and autumn (September–November) are best countrywide; winter is the prime season for the deep Sahara, while summer suits the coast.' },
      { q: 'How do travellers get around Algeria?', a: 'Domestic flights link the north with Saharan towns, trains and coaches connect northern cities, and 4x4s with guides are used in the desert.' },
    ],
  },
  {
    slug: 'history', title: 'Algeria History', theme: 'theme:history',
    description: 'Algeria from prehistory and Numidia through Rome, Islam, the Ottomans and independence.',
    intro: 'A connected view of Algerian history, from the green-Sahara rock art of the Tassili to Rome, the medieval dynasties, the Ottoman Regency and independence in 1962.',
    featureTypes: ['historical-period','roman-site','unesco','museum'],
    faqs: [
      { q: 'What are the main periods of Algerian history?', a: 'Prehistoric Sahara, Numidian kingdoms, Carthaginian and Roman North Africa, the Islamic and medieval-dynastic eras, the Ottoman Regency, French colonisation, and post-1962 independence.' },
      { q: 'Where can you see ancient history in Algeria?', a: 'At Roman cities such as Timgad, Djémila and Tipasa, and at Tassili n\'Ajjer, whose rock art records the prehistoric Sahara.' },
    ],
  },
  {
    slug: 'culture', title: 'Algeria Culture', theme: 'theme:cultural',
    description: 'Living Algerian culture: Amazigh traditions, music, crafts, festivals and food.',
    intro: 'The living culture of Algeria — Amazigh and Arab traditions, Andalusian and raï music, weaving and silverwork, festivals and cuisine.',
    featureTypes: ['tradition','festival','museum','food'],
    faqs: [
      { q: 'What is Algerian culture known for?', a: 'A blend of Amazigh (Berber) and Arab roots with Andalusian, Ottoman and Mediterranean layers, expressed in music, crafts, architecture and food.' },
      { q: 'What music is Algeria famous for?', a: 'Classical Andalusian music (malouf, gharnati, sanaa) and raï, the popular style born in Oran.' },
    ],
  },
  {
    slug: 'architecture', title: 'Algeria Architecture', theme: 'theme:architecture',
    description: 'Mozabite, Roman, Andalusian, Ottoman and French-colonial building traditions.',
    intro: 'Algeria\'s architecture spans Roman cities, the egalitarian cube-towns of the M\'Zab, Hispano-Moorish Tlemcen, Ottoman Algiers and French-colonial boulevards.',
    featureTypes: ['architecture','unesco','islamic-site','ottoman-site','french-site'],
    faqs: [
      { q: 'What is the M\'Zab valley known for architecturally?', a: 'Five fortified hilltop towns of stacked cube houses around a central mosque — a design admired by modern architects including Le Corbusier.' },
      { q: 'Where is Algeria\'s Andalusian architecture?', a: 'Above all in Tlemcen, with the Great Mosque, Mansourah and the Sidi Boumediene complex.' },
    ],
  },
  {
    slug: 'unesco', title: 'Algeria UNESCO World Heritage', theme: 'theme:unesco',
    description: 'Algeria\'s seven UNESCO World Heritage Sites and the heritage around them.',
    intro: 'Algeria holds seven UNESCO World Heritage Sites: the Roman cities of Timgad, Djémila and Tipasa, the M\'Zab Valley, the Kasbah of Algiers, Al Qal\'a of Beni Hammad and Tassili n\'Ajjer.',
    featureTypes: ['unesco'],
    faqs: [
      { q: 'How many UNESCO World Heritage Sites does Algeria have?', a: 'Seven: Tassili n\'Ajjer, the M\'Zab Valley, Djémila, Tipasa, Timgad, the Kasbah of Algiers and Al Qal\'a of Beni Hammad.' },
      { q: 'Which is Algeria\'s only natural-and-cultural UNESCO site?', a: 'Tassili n\'Ajjer, listed for both its prehistoric rock art and its desert landscapes.' },
    ],
  },
  {
    slug: 'roman-heritage', title: 'Algeria Roman Heritage', theme: 'theme:roman-heritage',
    description: 'The Roman cities, ruins and history of ancient North Africa in Algeria.',
    intro: 'Algeria has some of the best-preserved Roman cities in the world — Timgad, Djémila and Tipasa among them — alongside Numidian monuments and Roman towns across the north-east.',
    featureTypes: ['roman-site','unesco','historical-period'],
    faqs: [
      { q: 'What is the best-preserved Roman city in Algeria?', a: 'Timgad, founded by Trajan around AD 100, is often called the "Pompeii of Africa" for its complete grid plan.' },
      { q: 'Who was Saint Augustine\'s city in Algeria?', a: 'Hippo Regius, near modern Annaba, where Augustine served as bishop.' },
    ],
  },
  {
    slug: 'sahara', title: 'Algeria Sahara', theme: 'theme:sahara',
    description: 'The Algerian Sahara: ergs, oases, the Hoggar and the Tassili.',
    intro: 'Most of Algeria is Sahara — the great sand seas, the volcanic Hoggar, the rock-art plateau of the Tassili, and oasis worlds like the M\'Zab, the Souf and the Saoura.',
    featureTypes: ['sahara-area','unesco','national-park','city'],
    faqs: [
      { q: 'What can you see in the Algerian Sahara?', a: 'Rock art at Tassili n\'Ajjer, the red dunes and arches of the Tadrart, the Hoggar highlands, and oasis towns such as Ghardaïa, Timimoun and Djanet.' },
      { q: 'When should you visit the Algerian Sahara?', a: 'October to March, when the desert is cool; summer is dangerously hot for desert travel.' },
    ],
  },
  {
    slug: 'coast', title: 'Algeria Mediterranean Coast', theme: 'theme:coast',
    description: 'Algeria\'s 1,600 km Mediterranean coastline, beaches and coastal cities.',
    intro: 'Algeria has roughly 1,600 km of Mediterranean coast — the bays of Algiers and Oran, the turquoise Corniche of Jijel, and the cork-oak shores of El Kala.',
    featureTypes: ['coast-area','national-park'],
    faqs: [
      { q: 'Where are Algeria\'s best beaches?', a: 'Along the Corniche Jijelienne, the Béjaïa and Tipaza coasts, and around Oran\'s Les Andalouses.' },
      { q: 'Is the Algerian coast Roman as well?', a: 'Yes — Tipasa, a UNESCO Roman port, sits directly on the central coast.' },
    ],
  },
  {
    slug: 'mountains', title: 'Algeria Mountains', theme: 'theme:mountains',
    description: 'The Djurdjura, Aurès, Hoggar and the Atlas ranges.',
    intro: 'Algeria\'s mountains run from the cedar peaks of the Djurdjura and Aurès to the Saharan Atlas and the volcanic Hoggar of the deep south.',
    featureTypes: ['mountain-area','national-park'],
    faqs: [
      { q: 'What are the main mountain ranges in Algeria?', a: 'The Tell Atlas (including the Djurdjura), the Aurès, the Saharan Atlas and the Hoggar massif in the south.' },
      { q: 'Can you trek in Algeria\'s mountains?', a: 'Yes — the Djurdjura, the Aurès canyons around Ghoufi, and the Assekrem in the Hoggar are all trekked.' },
    ],
  },
  {
    slug: 'cuisine', title: 'Algeria Cuisine', theme: 'theme:cuisine',
    description: 'Couscous, tajine, pastries and the food cultures of Algeria\'s regions.',
    intro: 'Algerian food ranges from couscous and chorba to regional specialities like rechta in Algiers, chakhchoukha in the east and calentica in Oran, finished with date pastries and mint tea.',
    featureTypes: ['food'],
    faqs: [
      { q: 'What is Algeria\'s national dish?', a: 'Couscous, recognised by UNESCO as intangible cultural heritage shared across the Maghreb.' },
      { q: 'What sweets is Algeria known for?', a: 'Makroud (date pastry), kalb el louz (semolina-almond cake) and many honey pastries, especially in Ramadan.' },
    ],
  },
  {
    slug: 'road-trips', title: 'Algeria Road Trips', theme: 'theme:road-trips',
    description: 'Driving routes linking Algeria\'s coast, mountains and desert.',
    intro: 'Algeria rewards overland travel — coast-to-Sahara routes, the Roman north-east circuit, and oasis loops through the M\'Zab and the Saoura.',
    featureTypes: ['province','sahara-area','coast-area','mountain-area'],
    faqs: [
      { q: 'Is Algeria good for road trips?', a: 'Yes — major roads are good, and routes can link the coast, the Roman cities and the northern Sahara; the deep south is best with a guide and 4x4.' },
      { q: 'What is a classic Algerian overland route?', a: 'Algiers to Constantine via the Roman east (Djémila, Timgad), or a northern-Sahara loop through Ghardaïa and the oases.' },
    ],
  },
  {
    slug: 'photography', title: 'Algeria Photography', theme: 'theme:photography',
    description: 'The landscapes, heritage and light that make Algeria a photographer\'s country.',
    intro: 'From the rock art and dunes of the Tassili to the white Casbah of Algiers and the ochre M\'Zab, Algeria offers extraordinary subjects and light.',
    featureTypes: ['sahara-area','unesco','mountain-area','coast-area'],
    faqs: [
      { q: 'Where are the best photography locations in Algeria?', a: 'The Tassili and Tadrart in the Sahara, the M\'Zab valley, the Casbah of Algiers, and the gorges of Constantine.' },
      { q: 'When is the light best in the Sahara?', a: 'The cool months (October–March), around sunrise and sunset for the dunes and rock formations.' },
    ],
  },
  {
    slug: 'adventure', title: 'Algeria Adventure Travel', theme: 'theme:adventure',
    description: 'Desert expeditions, trekking and 4x4 journeys.',
    intro: 'Algeria is one of the great frontiers for desert adventure — multi-day Tassili and Tadrart expeditions, Hoggar trekking, and canyon walking in the Aurès.',
    featureTypes: ['sahara-area','mountain-area','national-park'],
    faqs: [
      { q: 'What adventure travel is possible in Algeria?', a: 'Sahara expeditions by 4x4 and on foot, trekking in the Hoggar and Djurdjura, and exploring the Aurès canyons.' },
      { q: 'Do you need a guide for the Algerian desert?', a: 'Yes — deep-desert travel requires authorised guides and 4x4 logistics for safety and permits.' },
    ],
  },
  {
    slug: 'family', title: 'Algeria Family Travel', theme: 'theme:family',
    description: 'Travelling Algeria with children.',
    intro: 'Family travel in Algeria works well around the coast, accessible Roman sites and oasis towns, with shorter desert experiences for younger travellers.',
    featureTypes: ['coast-area','unesco','national-park'],
    faqs: [
      { q: 'Is Algeria suitable for family travel?', a: 'Yes — the coast, easily visited Roman cities like Tipasa, and oasis towns make good family destinations; deep-desert expeditions suit older children.' },
      { q: 'What can families do on the Algerian coast?', a: 'Beaches along the Jijel and Tipaza coasts and national parks such as Gouraya near Béjaïa.' },
    ],
  },
  {
    slug: 'luxury', title: 'Algeria Luxury Travel', theme: 'theme:luxury',
    description: 'Premium and private travel in Algeria.',
    intro: 'Algeria\'s premium travel is private and curated — chartered desert camps, expert-led heritage journeys and tailored access to the Roman cities and the Sahara.',
    featureTypes: ['unesco','sahara-area','accommodation'],
    faqs: [
      { q: 'What does luxury travel in Algeria look like?', a: 'Private guides and drivers, the best available hotels and guesthouses, and well-run desert camps, rather than large international resorts.' },
      { q: 'Can you do a private Sahara trip in Algeria?', a: 'Yes — private, guided expeditions to the Tassili and Tadrart are the standard way to experience the deep south.' },
    ],
  },
];

export const hubBySlug = (slug: string) => hubs.find(h => h.slug === slug);

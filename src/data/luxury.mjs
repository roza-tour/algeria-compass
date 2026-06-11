// L1 — The 5-Star Collection: three signature private, all-inclusive 8-day
// journeys. Content supplied verbatim by the owner (names, days, hotels,
// inclusions, pricing). Images mapped from our EXISTING library; any stop
// without a real photo carries `flag:true` (owner to supply).
//
// Pricing is identical across the three programmes (per person, EUR, by group
// size) and the product is sold as a private request-to-book journey.

export const LUX_PRICING = {
  fromLabel: '€1,938',
  fromValue: 1938,
  highValue: 2748,
  currency: 'EUR',
  tiers: [
    { pax: '2–9 pax', price: '€2,748', note: 'Private & intimate' },
    { pax: '10–15 pax', price: '€2,244', note: '+ 1 leader free' },
    { pax: '16–22 pax', price: '€2,040', note: 'Group rate' },
    { pax: '22+ pax', price: '€1,938', note: 'Large group' },
  ],
};

const ARRIVAL_DAY = {
  n: 1, label: 'Day 01 · Arrival', title: 'Arrival in Algiers', img: '/assets/img/algiers-white-city-aerial.jpg',
  stops: [
    { t: 'VIP Airport Meet & Greet', d: 'A private fast-track welcome at Houari Boumediene Airport, followed by a chauffeured transfer to your 5-star hotel on the Bay of Algiers.' },
    { t: 'Bay of Algiers at Dusk', d: 'Your first evening above ‘Alger la Blanche’ — the dazzling white capital cascading in tiers down to the Mediterranean.' },
    { t: 'Welcome Briefing & Dinner', d: 'An unhurried itinerary walk-through with your dedicated tour leader over a curated Algerian welcome dinner.' },
  ],
};

const DEPARTURE_DAY = {
  n: 8, label: 'Day 08 · Farewell', title: 'Departure', img: '/assets/img/algiers-boulevards-aerial.jpg',
  stops: [
    { t: 'Leisure Morning', d: 'A final coffee, last souvenirs from the Casbah’s artisans, or simply a slow breakfast overlooking the bay.' },
    { t: 'Final Briefing', d: 'A warm send-off and trip recap with your tour leader.' },
    { t: 'VIP Airport Transfer', d: 'Private chauffeured transfer to Houari Boumediene Airport.' },
  ],
};

export const PROGRAMMES = [
  {
    id: 'classical-algeria',
    num: '01',
    name: 'Classical Algeria',
    subtitle: 'Mediterranean & Highland Heritage',
    tagline: 'Roman ports, mountain oases and the UNESCO cities of the north — the grand introduction to Algeria.',
    accent: '#1E6F5C', // coast/highland green
    region: 'coast',
    badges: ['8 Days / 7 Nights', 'Private Group', 'All-Inclusive 5-Star', '4 UNESCO Sites'],
    hero: '/assets/img/tours/djemila-1.jpg',
    heroLine: 'From the white-and-blue Casbah above the bay to the Roman theatres of Djemila, this is Algeria’s classical heart — coast, mountains and empire in eight unhurried days.',
    overview: 'Programme 01 weaves the Mediterranean and the Highlands: the Roman port of Tipaza, the oasis of Bou Saâda, the spectacular UNESCO ruins of Djemila, the suspended bridges of Constantine and the Ottoman Casbah of Algiers. It is the ideal first encounter for VIP groups who want depth without desert logistics. Every day delivers roughly three landmark experiences, framed by 5-star comfort, a private 4WD fleet and a tour leader who never leaves your group’s side.',
    route: [
      { place: 'Algiers', note: 'Arrival' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Bou Saâda', note: 'Oasis' },
      { place: 'Sétif', note: 'Highlands' }, { place: 'Djemila', note: 'UNESCO' }, { place: 'Constantine', note: 'Bridges' },
      { place: 'Algiers', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Day 02 · Roman Mediterranean', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-3.jpg', stops: [
        { t: 'Royal Mausoleum of Mauretania', d: 'The vast 30-metre circular tomb of King Juba II and Cleopatra Selene — daughter of Cleopatra VII — crowning the coastal hills since the 1st century BC.' },
        { t: 'Tipaza Archaeological Park · UNESCO', d: 'A Roman colony spread along the sea — forum, theatre, baths and early-Christian basilicas — where Albert Camus famously walked among the ruins and wild absinthe.' },
        { t: 'Seaside Lunch · Mount Chenoua', d: 'Fresh Mediterranean seafood beneath Mount Chenoua, looking over the same bay that drew Phoenician and Roman traders.' },
      ] },
      { n: 3, label: 'Day 03 · The City of Happiness', title: 'Bou Saâda Oasis', img: '/assets/img/bou-saada-oued-sunset.jpg', stops: [
        { t: 'Nasreddine Dinet Museum', d: 'The home and works of the French Orientalist painter who converted to Islam, took the name Nasreddine, and devoted his life to this oasis.' },
        { t: 'Palm Groves & the Old Ksar', d: 'A walk through the dense palmeraie and the ochre lanes of the historic ksar, where the Atlas meets the Sahara.' },
        { t: 'Saharan-Atlas Evening', d: 'Traditional crafts and music at the desert’s threshold — the oasis that has drawn artists and writers for over a century.' },
      ] },
      { n: 4, label: 'Day 04 · Scenic Crossing', title: 'Highlands to Sétif', img: '/assets/img/setif-ain-el-fouara.jpg', stops: [
        { t: 'Atlas Mountain Drive', d: 'A cinematic private 4WD crossing of the Hauts Plateaux — escarpments, golden wheat plains and wide highland skies.' },
        { t: 'Traditional Village Stop', d: 'A genuine highland pause for fresh bread, mint tea and unhurried hospitality far from any tourist trail.' },
        { t: 'Aïn El Fouara · Sétif', d: 'Arrival in cool, green Sétif and its beloved 1898 marble fountain, the city’s emblem.' },
      ] },
      { n: 5, label: 'Day 05 · Empire in the Hills', title: 'Djemila · Cuicul · UNESCO', img: '/assets/img/tours/djemila-4.jpg', stops: [
        { t: 'Djemila Archaeological Site · UNESCO', d: 'Ancient Cuicul, set 900 m up on a mountain spur — described by UNESCO as one of the world’s most beautiful Roman ruins.' },
        { t: 'Theatre, Forum & Temples', d: 'The grand hillside theatre, the Severan temple and the Arch of Caracalla, remarkably adapted to the steep mountain terrain.' },
        { t: 'Mosaic Museum & Lunch', d: 'Cuicul’s extraordinary mosaics of myth and daily life in the on-site museum, then a relaxed local lunch.' },
      ] },
      { n: 6, label: 'Day 06 · The City of Bridges', title: 'Constantine Excursion', img: '/assets/img/constantine-sidi-mcid-bridge.jpg', stops: [
        { t: 'Sidi M’Cid Suspension Bridge', d: 'The 1912 footbridge slung 175 m above the Rhumel gorge — the vertiginous signature image of Constantine.' },
        { t: 'Ahmed Bey Palace', d: 'The exquisite 1830s palace of the last Bey of Constantine, with painted galleries and Andalusian-style courtyard gardens.' },
        { t: 'Emir Abdelkader Mosque & Old City', d: 'One of Africa’s largest mosques, then the cliff-edge old quarter; return to Sétif by evening.' },
      ] },
      { n: 7, label: 'Day 07 · Return to the Capital', title: 'The Casbah of Algiers · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Casbah of Algiers · UNESCO', d: 'Back to the capital by air, then into the steep Ottoman citadel — a labyrinth of white lanes, hidden courtyards and rooftops over the bay.' },
        { t: 'Ketchaoua Mosque', d: 'The emblematic mosque at the foot of the Casbah, restored to its full Ottoman-Moorish splendour.' },
        { t: 'Palace of the Rais · Bastion 23', d: 'A trio of restored 16th-century seafront palaces — the finest surviving Ottoman residences in Algiers.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algiers', nights: '3 Nights', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Bou Saâda', nights: '1 Night', hotels: 'Kerdada · El Qaid' },
      { city: 'Sétif', nights: '3 Nights', hotels: 'Park Mall · Bayazid' },
    ],
    includes: ['Internal flights', 'All meals', '4WD vehicles & drivers', '5-star hotels', 'Tour leader & guides', 'UNESCO site fees'],
  },

  {
    id: 'sahara-heart',
    num: '02',
    name: 'Sahara Heart',
    subtitle: 'Roman Ruins & Mozabite Pentapolis',
    tagline: 'From the ‘Pompeii of Africa’ to the fortified cities of the M’Zab — Roman empire meets living desert culture.',
    accent: '#8F5018', // saharan ochre (darkened for AA contrast)
    region: 'sahara',
    badges: ['8 Days / 7 Nights', 'Private Group', 'All-Inclusive · Sahara', '3 UNESCO Sites'],
    hero: '/assets/img/timgad-theatre.jpg',
    heroLine: 'A descent from the Roman north into the timeless M’Zab — five fortified desert cities whose cubic architecture once inspired Le Corbusier.',
    overview: 'Programme 02 pairs the monumental Roman world — Tipaza by the sea and Timgad, the perfectly-gridded ‘Pompeii of Africa’ — with the spiritual, living desert culture of Ghardaïa and the Mozabite pentapolis. It is Algeria’s most evocative contrast: imperial stone and Saharan silence. The Saharan leg carries its own dedicated security and cook, with quad and camel experiences among the dunes, wrapped in the same private 5-star service.',
    route: [
      { place: 'Algiers', note: 'Arrival' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Timgad', note: 'UNESCO' },
      { place: 'Constantine', note: 'Highlands' }, { place: 'Ghardaïa', note: 'Sahara' }, { place: 'M’Zab', note: 'UNESCO' },
      { place: 'Algiers', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Day 02 · Roman Mediterranean', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-1.jpg', stops: [
        { t: 'Tipaza Roman Port · UNESCO', d: 'A Roman harbour-city of forum, theatre and basilicas tumbling toward the Mediterranean, raised on an older Phoenician trading post.' },
        { t: 'Royal Mausoleum of Mauretania', d: 'The monumental circular tomb of the Numidian-Mauretanian royal house, commanding the coast for over two thousand years.' },
        { t: 'Mediterranean Seaside Lunch', d: 'Coastal cuisine by the water before the return to Algiers.' },
      ] },
      { n: 3, label: 'Day 03 · Pompeii of Africa', title: 'Timgad · UNESCO', img: '/assets/img/tours/batna-timgad-2.jpg', stops: [
        { t: 'Flight to Constantine', d: 'A morning flight east toward the Aurès Mountains, gateway to the Roman south.' },
        { t: 'Timgad Archaeological City · UNESCO', d: 'Founded by Trajan in 100 AD for army veterans, Timgad is the textbook of Roman town planning — a perfect grid the Saharan sands preserved for centuries.' },
        { t: 'Arch of Trajan & Theatre', d: 'The 12-metre triumphal arch, the 3,500-seat theatre and the forum of the ‘Pompeii of Africa’. Overnight in Constantine.' },
      ] },
      { n: 4, label: 'Day 04 · North to Desert', title: 'Constantine to Ghardaïa', img: '/assets/img/constantine-footbridge.jpg', stops: [
        { t: 'Sidi M’Cid Bridge & Old City', d: 'Morning views over the Rhumel gorge and the cliff-top quarter of the City of Bridges.' },
        { t: 'Flight to Ghardaïa', d: 'An afternoon flight some 600 km south — from highland green to Saharan ochre.' },
        { t: 'M’Zab Valley Arrival', d: 'First sight of the fortified pentapolis rising in tiers above the palm-lined wadi.' },
      ] },
      { n: 5, label: 'Day 05 · The Pentapolis', title: 'M’Zab Valley · UNESCO', img: '/assets/img/ghardaia-mzab-panorama.jpg', stops: [
        { t: 'Beni Isguen · The Holy City · UNESCO', d: 'The pristine walled town of the Ibadi Mozabites, entered with a local guide and famous for its dusk open-air auction.' },
        { t: 'Ghardaïa Market Square', d: 'The arcaded heart of the valley — a riot of carpets, dates and spice beneath the pyramidal minaret.' },
        { t: 'Artisan Workshops', d: 'Carpet-weaving and silverwork with Mozabite craftspeople whose cubic architecture once inspired Le Corbusier.' },
      ] },
      { n: 6, label: 'Day 06 · Dunes & Oases', title: 'Ghardaïa & Return', img: '/assets/img/sahara-dunes-tadrart.jpg', stops: [
        { t: 'Palm Oases & Dunes', d: 'Date-palm gardens fed by ancient foggara water channels, and the golden dunes at the valley’s edge.' },
        { t: 'Quad & Camel Experience', d: 'Riding out across the sands with dedicated Saharan security and a desert cook handling every detail.' },
        { t: 'Traditional Souk · Evening Flight', d: 'A last wander through the souk before the evening flight back to Algiers.' },
      ] },
      { n: 7, label: 'Day 07 · The Capital', title: 'Algiers Casbah · UNESCO', img: '/assets/img/casbah-old-city-mosque.jpg', stops: [
        { t: 'Casbah of Algiers · UNESCO', d: 'A full day in the Ottoman citadel above the bay — stepped lanes, palaces and panoramic rooftops.' },
        { t: 'Ottoman Palaces & Museums', d: 'Dar Hassan Pacha, Ketchaoua Mosque and the capital’s finest museum collections.' },
        { t: 'Monuments of Algiers', d: 'Closing the circuit among the great seafront landmarks of ‘Alger la Blanche’.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algiers', nights: '3 Nights', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Constantine', nights: '2 Nights', hotels: 'Golden Tulip · Marriott' },
      { city: 'Ghardaïa', nights: '2 Nights', hotels: 'Mizab · Bellevedere · Tajami' },
    ],
    includes: ['Internal flights', 'All meals', '4WD vehicles & drivers', 'Quad & camel rides', '5-star & 4-star hotels', 'Security & cook in Sahara', 'Tour leader & guides', 'UNESCO site fees'],
  },

  {
    id: 'four-seasons',
    num: '03',
    name: 'Four Seasons',
    subtitle: 'Snow · Sahara · Mediterranean · Andalusia',
    tagline: 'Atlas snow, Saharan dunes, the Mediterranean coast and the Andalusian ‘Pearl of the Maghreb’ — all in eight days.',
    accent: '#7A4F9E', // andalusian violet
    region: 'andalusian',
    badges: ['8 Days / 7 Nights', 'Private Group', 'All-Inclusive', 'Four Landscapes'],
    hero: '/assets/img/oran-bay-santa-cruz.jpg',
    heroLine: 'The signature contrast tour — where clients can touch snow in the morning and Saharan sand within the same journey.',
    overview: 'Programme 03 is Algeria’s full spectrum: the cedar slopes of Chréa, the UNESCO desert of the M’Zab, the Mediterranean swagger of Oran and the zellige and Andalusian gardens of Tlemcen. It is the most visually dramatic of the three programmes — a country that refuses to be only one thing. Snow activities are seasonal (Atlas winter), and every leg keeps the same private, all-inclusive 5-star standard, with internal flights linking the four worlds.',
    route: [
      { place: 'Algiers', note: 'Arrival' }, { place: 'Chréa', note: 'Snow' }, { place: 'Ghardaïa', note: 'Sahara' },
      { place: 'M’Zab', note: 'UNESCO' }, { place: 'Oran', note: 'Coast' }, { place: 'Tlemcen', note: 'Andalusia' },
      { place: 'Algiers', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Day 02 · Snow & Sea', title: 'Chréa Snow & Cherchell', img: '/assets/img/blida/blida-03.jpg', flag: 'Chréa & Cherchell have no dedicated photo yet — using a Blida-province image as a placeholder.', stops: [
        { t: 'Chréa National Park', d: 'Atlas cedar forest and seasonal snow above Blida — skiing and snowshoeing within sight of the sea, home to wild Barbary macaques.' },
        { t: 'Cherchell Roman Museum', d: 'One of North Africa’s richest collections of Roman statuary and mosaics, in the old Phoenician-Roman port of Iol Caesarea.' },
        { t: 'Cherchell Coast & Beach', d: 'The ancient harbour town and its quiet Mediterranean shoreline.' },
      ] },
      { n: 3, label: 'Day 03 · Into the Sahara', title: 'Ghardaïa Sahara · UNESCO', img: '/assets/img/sahara-plateau-sunset.jpg', stops: [
        { t: 'Flight to Ghardaïa', d: 'South into the desert and the gateway of the M’Zab.' },
        { t: 'M’Zab Valley · UNESCO', d: 'First exploration of the ochre pentapolis terraced above the wadi.' },
        { t: 'Sunset Over the Dunes', d: 'Golden hour across the Saharan sands.' },
      ] },
      { n: 4, label: 'Day 04 · Living Heritage', title: 'Mozabite Culture', img: '/assets/img/ghardaia-ksar-lane.jpg', stops: [
        { t: 'M’Zab Towns Exploration', d: 'Beni Isguen and El Atteuf — the fortified cubic ksour that inspired Le Corbusier’s modern architecture.' },
        { t: 'Artisan Workshops', d: 'Weaving, pottery and silver with local makers in the heart of the valley.' },
        { t: 'Camel Rides', d: 'Riding among the palmeraies at the desert’s edge.' },
      ] },
      { n: 5, label: 'Day 05 · Mediterranean Swagger', title: 'Oran Mediterranean', img: '/assets/img/oran-bay-santa-cruz.jpg', stops: [
        { t: 'Santa Cruz Fort & Murdjajo', d: 'The 16th-century Spanish fortress crowning Murdjajo mountain, with sweeping views over the bay and the basilica below.' },
        { t: 'Place du 1er Novembre', d: 'The grand square at the heart of ‘El Bahia’ — the radiant city that gave the world raï music.' },
        { t: 'Sidi El Houari Old Quarter', d: 'The historic seafront district where Ottoman, Spanish and French Oran layer over one another.' },
      ] },
      { n: 6, label: 'Day 06 · Pearl of the Maghreb', title: 'Tlemcen Andalusia', img: '/assets/img/tlemcen-andalusian-arches.jpg', stops: [
        { t: 'Great Mosque of Tlemcen', d: 'An Almoravid masterpiece begun in 1082, its carved mihrab and ribbed dome among the finest Andalusian-Maghrebi art in existence.' },
        { t: 'Mansourah Ruins', d: 'The Marinid siege-city of 1302 — a lone towering minaret and a kilometre of ramparts within the Tlemcen National Park.' },
        { t: 'El Mechouar Palace & Gardens', d: 'The restored Zianid royal citadel and the Andalusian gardens of the ‘Pearl of the Maghreb’.' },
      ] },
      { n: 7, label: 'Day 07 · The Capital', title: 'Algiers Casbah · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Flight to Algiers · Casbah · UNESCO', d: 'A morning flight north, then a full tour of the Ottoman citadel above the bay.' },
        { t: 'Ottoman Architecture', d: 'Palaces, mosques and the white stepped lanes of the old city.' },
        { t: 'Museums of Algiers', d: 'The capital’s cultural highlights to close the four-seasons circuit.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algiers', nights: '3 Nights', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Ghardaïa', nights: '2 Nights', hotels: 'Mizab · Bellevedere · Tajami' },
      { city: 'Oran', nights: '2 Nights', hotels: 'Royal Oran · Bay Managed · Azure Routan' },
    ],
    includes: ['Internal flights', 'All meals', '4WD vehicles & drivers', 'Snow activities (seasonal)', 'Quad & camel rides', '5-star & 4-star hotels', 'Security & cook in Sahara', 'Tour leader & guides'],
  },
];

// Three private journeys built around the total solar eclipse of Monday
// 2 August 2027 (owner's go-ahead, 2026-11-26: west, Bou Saâda, Timgad).
//
// Totality figures: nationaleclipse.com, Algeria city list (representative
// samples, local time): Oran 9:51:05, 5:08 · Bou Saâda 9:57:59, 5:17 ·
// M'Sila 9:58:34, 5:11 · Batna 10:01:05, 5:17 · Arris 5:30 · Khenchela 5:20.
// Timgad itself is not listed; it lies between Batna and Khenchela, so the
// pages say "over five minutes" there, never an exact figure.
// Weather: eclipsophile.com/tse2027 (Jay Anderson, Aug 2025): the coastal Tell
// is cloudier on average than the high plains or the desert; morning cloud is
// "very subdued" at most Algerian sites; slightly more cloud over the Aurès.
//
// Prices follow the owner's day-rate rule (tour price ÷ days × days):
//   west  = Oran–Mostaganem–Tlemcen €768 / 5 d × 6 d = €922
//   hodna = Bou Saâda €288 / 2 d × 5 d = €720, +15% (owner, 2026-11-26) = €828
//   aures = Biskra & Aurès €330 / 3 d × 6 d = €660, +15% (owner)         = €759
// The owner kept the west at €922 ("its price is good").
// Photos are all our own (no credit needed).

export interface EclipseTour {
  slug: string; title: string; short: string; hook: string; seoTitle: string; seoDesc: string;
  days: number; dates: string; start: string; end: string; price: number;
  watch: { place: string; time: string; duration: string; why: string };
  totalityStart: string;   // ISO, local time (UTC+1), at the main viewing site
  guestPhotos: number[];   // client-N photos from src/data/moments.ts to show first
  hero: string; photos: string[];
  itinerary: { date: string; title: string; body: string }[];
  includes: string[]; excludes: string[];
  related: string[];
}

export const ECLIPSE_DATE = '2027-08-02';

// Day-rate prices (see header) and lengths, named once.
const WEST_DAYS = 6, WEST_PRICE_EUR = 922;
const HODNA_DAYS = 5, HODNA_PRICE_EUR = 828;
const AURES_DAYS = 6, AURES_PRICE_EUR = 759;

export const ECLIPSE_TOURS: EclipseTour[] = [
  {
    slug: 'oran-and-the-west',
    totalityStart: '2027-08-02T09:51:05+01:00',
    guestPhotos: [584, 645, 189, 500],
    seoTitle: 'Eclipse Tour 2027 in Oran, Algeria: 6 Days, Private',
    seoDesc: 'Private 6-day tour for the 2 August 2027 total eclipse: 5 min 08 s of totality over Oran, then Tlemcen and the Mostaganem coast. From €922, visa help.',
    title: 'Eclipse over Oran & the West',
    short: 'Oran & the West',
    hook: 'Watch the Sun disappear above the bay of Oran, then carry on to Andalusian Tlemcen and the beaches of Mostaganem.',
    days: WEST_DAYS, dates: '30 July – 4 August 2027', start: 'Algiers', end: 'Oran', price: WEST_PRICE_EUR,
    watch: { place: 'Oran, from the heights of Santa Cruz or inland on the plains', time: 'about 09:51 local time', duration: '5 min 08 s in Oran', why: 'The coast can hold a little morning haze, so we choose the spot with you the evening before: the Santa Cruz heights above the bay, or inland towards Mascara and Relizane, where totality lasts as long and skies are often clearer.' },
    hero: 'oran-1.jpg',
    photos: ['oran-1', 'oran-7', 'oran-3', 'tlemcen-11', 'tlemcen-6', 'tlemcen-12', 'mostaganem-1', 'mostaganem-2', 'oran-12'],
    itinerary: [
      { date: 'Fri 30 July', title: 'Welcome to Algeria, on to Oran', body: 'We meet you at Algiers airport. Depending on your arrival time, we travel to Oran by train or domestic flight, and your guide settles you into the city by the sea.' },
      { date: 'Sat 31 July', title: 'Oran, the radiant city', body: 'Santa Cruz fort and chapel above the bay, Place du 1er Novembre, the seafront boulevard and the old quarters. Calentica from a street stall, and an evening in the city of raï.' },
      { date: 'Sun 1 August', title: 'Tlemcen, the Pearl of the Maghreb', body: 'A day in Andalusian Tlemcen: the Great Mosque, El Mechouar palace, Sidi Boumediene and the Mansourah minaret, with the cool of the Lalla Setti plateau. In the evening we look at the forecast together and choose tomorrow’s spot.' },
      { date: 'Mon 2 August', title: 'Eclipse day', body: 'An early start to reach our viewing spot. The partial phase begins around 08:45; at about 09:51 the Moon covers the Sun and Oran goes dark for just over five minutes. A long, happy lunch afterwards, and a free afternoon to take it all in.' },
      { date: 'Tue 3 August', title: 'Mostaganem and the coast', body: 'The Tigditt old town, the Ottoman port and the coves of the Mostaganem coast, with time for a swim. Back to Oran for a last dinner by the sea.' },
      { date: 'Wed 4 August', title: 'Departure', body: 'Transfer to Oran airport for your flight home, or back to Algiers if you are flying from there.' },
    ],
    includes: ['Private licensed guide throughout', 'Private vehicle with driver', '5 nights in hotels with breakfast (4-star where available)', 'Eclipse-morning transfer to the chosen viewing spot', 'Entrance fees on the programme', 'Airport welcome and transfers'],
    excludes: ['International flights', 'Algiers–Oran train or domestic flight', 'Lunches and dinners', 'Visa fees', 'Travel insurance', 'Tips'],
    related: ['oran-mostaganem-tlemcen'],
  },
  {
    slug: 'bou-saada-and-the-hodna',
    totalityStart: '2027-08-02T09:57:59+01:00',
    guestPhotos: [652, 651, 649, 650, 647],
    seoTitle: 'Eclipse Tour 2027 in Bou Saâda, Algeria: 5 Days, Private',
    seoDesc: 'Watch the 2 August 2027 total eclipse from the oasis of Bou Saâda: 5 min 17 s of totality on the clear high plains, and the Qalaa of Beni Hammad. From €828.',
    title: 'Eclipse in the Oasis: Bou Saâda & the Hodna',
    short: 'Bou Saâda & the Hodna',
    hook: 'Over five minutes of totality above the palm groves of Bou Saâda, at the edge of the Sahara, in the home country of our parent agency.',
    days: HODNA_DAYS, dates: '31 July – 4 August 2027', start: 'Algiers', end: 'Algiers', price: HODNA_PRICE_EUR,
    watch: { place: 'The dunes and hills outside Bou Saâda', time: 'about 09:58 local time', duration: '5 min 17 s in Bou Saâda', why: 'Bou Saâda sits on the high plains at the edge of the desert, where the long-term records show less cloud than on the coast, and the morning air is dry and clear.' },
    hero: 'bousaada-13.jpg',
    photos: ['bousaada-2', 'bousaada-4', 'bousaada-13', 'bousaada-6', 'bousaada-1', 'bousaada-10', 'bousaada-12', 'bousaada-21', 'bousaada-18'],
    itinerary: [
      { date: 'Sat 31 July', title: 'Welcome to Algiers', body: 'We meet you at the airport and take you to your hotel. If time allows, a first walk through the white city by the sea.' },
      { date: 'Sun 1 August', title: 'To Bou Saâda, the City of Happiness', body: 'About three and a half hours by road across the Atlas to the oasis. The palm grove and the waterfall, the Ferrero Mill and the old town, then a Bedouin dinner with music.' },
      { date: 'Mon 2 August', title: 'Eclipse day', body: 'We drive out early to the dunes and hills outside town. The partial phase begins about an hour earlier; at about 09:58 totality falls over the oasis for over five minutes. In the afternoon, the El Hamel zawiya and tea in the shade.' },
      { date: 'Tue 3 August', title: 'M’Sila and the Qalaa of Beni Hammad', body: 'The UNESCO ruins of the Qalaa of Beni Hammad, the first capital of the Hammadid kings, in the hills of the Hodna. M’Sila is home to Roza Tour, our parent agency, and you will be welcomed like family.' },
      { date: 'Wed 4 August', title: 'Back to Algiers, departure', body: 'Return to Algiers and transfer to the airport for your flight home.' },
    ],
    includes: ['Private licensed guide throughout', 'Private vehicle with driver from Algiers and back', '4 nights in hotels with breakfast', 'Bedouin dinner with music in Bou Saâda', 'Eclipse-morning transfer to the viewing spot', 'Entrance fees on the programme', 'Airport welcome and transfers'],
    excludes: ['International flights', 'Other lunches and dinners', 'Visa fees', 'Travel insurance', 'Tips'],
    related: ['bousaada-desert-tour'],
  },
  {
    slug: 'timgad-and-the-aures',
    totalityStart: '2027-08-02T10:01:05+01:00',
    guestPhotos: [226, 584, 645, 186],
    seoTitle: 'Eclipse Tour 2027 in the Aurès: Timgad & Biskra, 6 Days',
    seoDesc: 'Over five minutes of totality near Timgad on 2 August 2027, with Djémila, the Aurès mountains and the palm groves of Biskra. Private, from €759, visa help.',
    title: 'Eclipse over the Aurès: Timgad, Djémila & Biskra',
    short: 'Timgad & the Aurès',
    hook: 'Two Roman cities, the Aurès mountains and the palm groves of Biskra, with over five minutes of totality near Timgad.',
    days: AURES_DAYS, dates: '30 July – 4 August 2027', start: 'Algiers', end: 'Biskra', price: AURES_PRICE_EUR,
    watch: { place: 'Near Batna and Timgad, in the Aurès', time: 'about 10:01 local time', duration: '5 min 17 s in Batna, over five minutes at Timgad', why: 'The centre of the path crosses the Aurès, where totality is among the longest in Algeria. Mountains gather a little more cloud than the plains, so we keep an alternative spot on the plain towards Barika or Aïn Touta, where totality lasts as long.' },
    hero: 'batna-timgad-14.jpg',
    photos: ['batna-timgad-14', 'batna-timgad-11', 'batna-timgad-2', 'djemila-1', 'djemila-2', 'batna-timgad-4', 'setif-2', 'batna-timgad-9', 'batna-timgad-13'],
    itinerary: [
      { date: 'Fri 30 July', title: 'Welcome to Algiers', body: 'We meet you at the airport and take you to your hotel for a first evening in the capital.' },
      { date: 'Sat 31 July', title: 'Djémila and Sétif', body: 'East along the highlands to Djémila, the Roman city on its mountain ridge, a UNESCO site. Evening in Sétif and its Aïn El Fouara fountain.' },
      { date: 'Sun 1 August', title: 'Timgad, the African Pompeii', body: 'On to the Aurès and the grid-plan streets of Timgad, the Arch of Trajan and the forum, then the Imedghassen mausoleum, older than the Romans. In the evening we choose tomorrow’s spot with the latest forecast.' },
      { date: 'Mon 2 August', title: 'Eclipse day', body: 'An early drive to our viewing spot. The partial phase begins about an hour earlier; at about 10:01 totality darkens the Aurès for over five minutes. Afternoon in the cool of the mountains and a Chaoui lunch.' },
      { date: 'Tue 3 August', title: 'Through El Kantara to Biskra', body: 'Down through the gorge of El Kantara, the Mouth of the Sahara, and the abandoned villages of the Ghoufi canyon, to the palm groves of Biskra.' },
      { date: 'Wed 4 August', title: 'Departure', body: 'Transfer to Biskra airport for your flight to Algiers and home, or back to Algiers by road.' },
    ],
    includes: ['Private licensed guide throughout', 'Private vehicle with driver', '5 nights in hotels with breakfast', 'Eclipse-morning transfer to the chosen viewing spot', 'Entrance fees on the programme', 'Airport welcome and transfers'],
    excludes: ['International flights', 'Biskra–Algiers domestic flight', 'Lunches and dinners', 'Visa fees', 'Travel insurance', 'Tips'],
    related: ['the-beauty-of-algeria', 'biskra-aures-oases'],
  },
];

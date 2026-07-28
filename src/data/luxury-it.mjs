// L1 — La Collezione 5 stelle: edizione ITALIANA di luxury.mjs. Tre viaggi
// privati e all-inclusive di 8 giorni. Deve restare strutturalmente sincronizzata
// con luxury.mjs (stesse chiavi, stessi id, stessi prezzi, stessi percorsi img);
// solo le stringhe visibili all'utente sono tradotte.
//
// Pricing is identical across the three programmes (per person, EUR, by group
// size) and the product is sold as a private request-to-book journey.

// Every user-visible string for the /luxury/ page lives in LUX_COPY (bottom of
// this file) so the shared LuxuryPage/LuxuryProgram components stay language-
// blind. This Italian edition exports the same three names as luxury.mjs:
// LUX_PRICING, PROGRAMMES, LUX_COPY.

export const LUX_PRICING = {
  fromLabel: '€1,615',
  fromValue: 1615,
  highValue: 2290,
  currency: 'EUR',
  tiers: [
    { pax: '2–9 pers.', price: '€2,290', note: 'Privato e intimo' },
    { pax: '10–15 pers.', price: '€1,870', note: '+ 1 capogruppo gratuito' },
    { pax: '16–22 pers.', price: '€1,700', note: 'Tariffa di gruppo' },
    { pax: '22+ pers.', price: '€1,615', note: 'Gruppo numeroso' },
  ],
};

const ARRIVAL_DAY = {
  n: 1, label: 'Giorno 01 · Arrivo', title: 'Arrivo ad Algeri', img: '/assets/img/algiers-white-city-aerial.jpg',
  stops: [
    { t: 'Accoglienza VIP in aeroporto', d: 'Un benvenuto privato con corsia preferenziale all’aeroporto Houari Boumediene, seguito dal trasferimento con autista al vostro hotel 5 stelle sulla baia di Algeri.' },
    { t: 'La baia di Algeri al crepuscolo', d: 'La vostra prima sera sopra ‘Alger la Blanche’ — la scintillante capitale bianca che digrada a terrazze fino al Mediterraneo.' },
    { t: 'Briefing di benvenuto e cena', d: 'Una presentazione dell’itinerario senza fretta con il vostro tour leader dedicato, davanti a una raffinata cena algerina di benvenuto.' },
  ],
};

const DEPARTURE_DAY = {
  n: 8, label: 'Giorno 08 · Congedo', title: 'Partenza', img: '/assets/img/algiers-boulevards-aerial.jpg',
  stops: [
    { t: 'Mattinata libera', d: 'Un ultimo caffè, gli ultimi souvenir dagli artigiani della Casbah, o semplicemente una colazione lenta con vista sulla baia.' },
    { t: 'Briefing finale', d: 'Un caloroso saluto e il riepilogo del viaggio con il vostro tour leader.' },
    { t: 'Trasferimento VIP in aeroporto', d: 'Trasferimento privato con autista all’aeroporto Houari Boumediene.' },
  ],
};

export const PROGRAMMES = [
  {
    id: 'classical-algeria',
    num: '01',
    name: 'Algeria Classica',
    subtitle: 'Patrimonio mediterraneo e degli altopiani',
    tagline: 'Porti romani, oasi di montagna e le città UNESCO del nord — la grande introduzione all’Algeria.',
    accent: '#1E6F5C', // coast/highland green
    region: 'coast',
    badges: ['8 giorni / 7 notti', 'Gruppo privato', 'All-inclusive 5 stelle', '4 siti UNESCO'],
    hero: '/assets/img/tours/djemila-1.jpg',
    heroLine: 'Dalla Casbah bianca e blu sopra la baia ai teatri romani di Djemila: questo è il cuore classico dell’Algeria — costa, montagne e impero in otto giorni senza fretta.',
    overview: 'Il Programma 01 intreccia il Mediterraneo e gli altopiani: il porto romano di Tipaza, l’oasi di Bou Saâda, le spettacolari rovine UNESCO di Djemila, i ponti sospesi di Costantina e la Casbah ottomana di Algeri. È il primo incontro ideale per i gruppi VIP che desiderano profondità senza la logistica del deserto. Ogni giornata offre circa tre esperienze memorabili, incorniciate dal comfort 5 stelle, da una flotta privata di 4x4 e da un tour leader che non lascia mai il vostro gruppo.',
    route: [
      { place: 'Algeri', note: 'Arrivo' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Bou Saâda', note: 'Oasi' },
      { place: 'Sétif', note: 'Altopiani' }, { place: 'Djemila', note: 'UNESCO' }, { place: 'Costantina', note: 'Ponti' },
      { place: 'Algeri', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Giorno 02 · Mediterraneo romano', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-3.jpg', stops: [
        { t: 'Mausoleo reale di Mauretania', d: 'L’imponente tomba circolare di 30 metri del re Giuba II e di Cleopatra Selene — figlia di Cleopatra VII — che corona le colline costiere dal I secolo a.C.' },
        { t: 'Parco archeologico di Tipaza · UNESCO', d: 'Una colonia romana distesa lungo il mare — foro, teatro, terme e basiliche paleocristiane — dove Albert Camus amava passeggiare tra le rovine e l’assenzio selvatico.' },
        { t: 'Pranzo sul mare · Monte Chenoua', d: 'Freschi frutti di mare mediterranei ai piedi del Monte Chenoua, affacciati sulla stessa baia che attirava i mercanti fenici e romani.' },
      ] },
      { n: 3, label: 'Giorno 03 · La città della felicità', title: 'L’oasi di Bou Saâda', img: '/assets/img/bou-saada-oued-sunset.jpg', stops: [
        { t: 'Museo Nasreddine Dinet', d: 'La casa e le opere del pittore orientalista francese che si convertì all’Islam, prese il nome di Nasreddine e dedicò la vita a questa oasi.' },
        { t: 'Palmeti e il vecchio ksar', d: 'Una passeggiata nel fitto palmeto e tra i vicoli color ocra dello ksar storico, dove l’Atlante incontra il Sahara.' },
        { t: 'Serata dell’Atlante sahariano', d: 'Artigianato e musica tradizionali alle soglie del deserto — l’oasi che da oltre un secolo attira artisti e scrittori.' },
      ] },
      { n: 4, label: 'Giorno 04 · Traversata panoramica', title: 'Dagli altopiani a Sétif', img: '/assets/img/setif-ain-el-fouara.jpg', stops: [
        { t: 'Attraversata dell’Atlante', d: 'Una traversata cinematografica in 4x4 privato degli Hauts Plateaux — scarpate, pianure dorate di grano e ampi cieli d’altopiano.' },
        { t: 'Sosta in un villaggio tradizionale', d: 'Una pausa autentica d’altopiano con pane fresco, tè alla menta e un’ospitalità senza fretta, lontano da ogni rotta turistica.' },
        { t: 'Aïn El Fouara · Sétif', d: 'Arrivo nella fresca e verde Sétif e alla sua amata fontana di marmo del 1898, emblema della città.' },
      ] },
      { n: 5, label: 'Giorno 05 · L’impero tra le colline', title: 'Djemila · Cuicul · UNESCO', img: '/assets/img/tours/djemila-4.jpg', stops: [
        { t: 'Sito archeologico di Djemila · UNESCO', d: 'L’antica Cuicul, adagiata a 900 m su uno sperone montano — descritta dall’UNESCO come una delle più belle rovine romane del mondo.' },
        { t: 'Teatro, foro e templi', d: 'Il grande teatro sul pendio, il tempio dei Severi e l’Arco di Caracalla, straordinariamente adattati al ripido terreno montano.' },
        { t: 'Museo dei mosaici e pranzo', d: 'Gli straordinari mosaici di Cuicul, tra mito e vita quotidiana, nel museo del sito; poi un rilassato pranzo locale.' },
      ] },
      { n: 6, label: 'Giorno 06 · La città dei ponti', title: 'Escursione a Costantina', img: '/assets/img/constantine-sidi-mcid-bridge.jpg', stops: [
        { t: 'Ponte sospeso di Sidi M’Cid', d: 'La passerella del 1912 sospesa a 175 m sopra le gole del Rhumel — l’immagine vertiginosa e iconica di Costantina.' },
        { t: 'Palazzo di Ahmed Bey', d: 'Lo squisito palazzo del 1830 dell’ultimo Bey di Costantina, con gallerie dipinte e giardini a corte in stile andaluso.' },
        { t: 'Moschea dell’Emiro Abdelkader e città vecchia', d: 'Una delle più grandi moschee d’Africa, poi il quartiere antico a picco sulla gola; rientro a Sétif in serata.' },
      ] },
      { n: 7, label: 'Giorno 07 · Ritorno nella capitale', title: 'La Casbah di Algeri · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Casbah di Algeri · UNESCO', d: 'Ritorno nella capitale in aereo, poi dentro la ripida cittadella ottomana — un labirinto di vicoli bianchi, cortili nascosti e terrazze sulla baia.' },
        { t: 'Moschea di Ketchaoua', d: 'La moschea emblematica ai piedi della Casbah, restituita al suo pieno splendore ottomano-moresco.' },
        { t: 'Palazzo dei Rais · Bastione 23', d: 'Un trio di palazzi cinquecenteschi restaurati sul lungomare — le più belle residenze ottomane sopravvissute ad Algeri.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algeri', nights: '3 notti', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Bou Saâda', nights: '1 notte', hotels: 'Kerdada · El Qaid' },
      { city: 'Sétif', nights: '3 notti', hotels: 'Park Mall · Bayazid' },
    ],
    includes: ['Voli interni', 'Tutti i pasti', 'Veicoli 4x4 con autista', 'Hotel 5 stelle', 'Tour leader e guide', 'Ingressi ai siti UNESCO'],
  },

  {
    id: 'sahara-heart',
    num: '02',
    name: 'Cuore del Sahara',
    subtitle: 'Rovine romane e pentapoli mozabita',
    tagline: 'Dalla ‘Pompei d’Africa’ alle città fortificate dello M’Zab — l’impero romano incontra la cultura viva del deserto.',
    accent: '#8F5018', // saharan ochre (darkened for AA contrast)
    region: 'sahara',
    badges: ['8 giorni / 7 notti', 'Gruppo privato', 'All-inclusive · Sahara', '3 siti UNESCO'],
    hero: '/assets/img/timgad-theatre.jpg',
    heroLine: 'Una discesa dal nord romano verso il senza-tempo M’Zab — cinque città fortificate del deserto la cui architettura cubica ispirò Le Corbusier.',
    overview: 'Il Programma 02 accosta il mondo romano monumentale — Tipaza sul mare e Timgad, la ‘Pompei d’Africa’ dalla griglia perfetta — alla cultura spirituale e viva del deserto di Ghardaïa e della pentapoli mozabita. È il contrasto più evocativo dell’Algeria: pietra imperiale e silenzio sahariano. La tratta sahariana dispone di sicurezza e cuoco dedicati, con esperienze in quad e a dorso di cammello tra le dune, avvolte nello stesso servizio privato 5 stelle.',
    route: [
      { place: 'Algeri', note: 'Arrivo' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Timgad', note: 'UNESCO' },
      { place: 'Costantina', note: 'Altopiani' }, { place: 'Ghardaïa', note: 'Sahara' }, { place: 'M’Zab', note: 'UNESCO' },
      { place: 'Algeri', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Giorno 02 · Mediterraneo romano', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-1.jpg', stops: [
        { t: 'Porto romano di Tipaza · UNESCO', d: 'Una città-porto romana di foro, teatro e basiliche che scende verso il Mediterraneo, sorta su un più antico scalo commerciale fenicio.' },
        { t: 'Mausoleo reale di Mauretania', d: 'La monumentale tomba circolare della casa reale numida-mauretana, che domina la costa da oltre duemila anni.' },
        { t: 'Pranzo mediterraneo sul mare', d: 'Cucina di costa in riva al mare prima del rientro ad Algeri.' },
      ] },
      { n: 3, label: 'Giorno 03 · La Pompei d’Africa', title: 'Timgad · UNESCO', img: '/assets/img/tours/batna-timgad-2.jpg', stops: [
        { t: 'Volo per Costantina', d: 'Un volo mattutino verso est, in direzione dei monti Aurès, porta del sud romano.' },
        { t: 'Città archeologica di Timgad · UNESCO', d: 'Fondata da Traiano nel 100 d.C. per i veterani dell’esercito, Timgad è il manuale dell’urbanistica romana — una griglia perfetta che le sabbie sahariane hanno custodito per secoli.' },
        { t: 'Arco di Traiano e teatro', d: 'L’arco trionfale di 12 metri, il teatro da 3.500 posti e il foro della ‘Pompei d’Africa’. Pernottamento a Costantina.' },
      ] },
      { n: 4, label: 'Giorno 04 · Dal nord al deserto', title: 'Da Costantina a Ghardaïa', img: '/assets/img/constantine-footbridge.jpg', stops: [
        { t: 'Ponte di Sidi M’Cid e città vecchia', d: 'Vedute mattutine sulle gole del Rhumel e sul quartiere a picco della Città dei Ponti.' },
        { t: 'Volo per Ghardaïa', d: 'Un volo pomeridiano di circa 600 km verso sud — dal verde degli altopiani all’ocra sahariana.' },
        { t: 'Arrivo nella valle dello M’Zab', d: 'Il primo sguardo sulla pentapoli fortificata che si innalza a terrazze sopra lo uadi orlato di palme.' },
      ] },
      { n: 5, label: 'Giorno 05 · La pentapoli', title: 'Valle dello M’Zab · UNESCO', img: '/assets/img/ghardaia-mzab-panorama.jpg', stops: [
        { t: 'Beni Isguen · La città santa · UNESCO', d: 'L’immacolata città murata dei mozabiti ibaditi, visitabile con una guida locale e celebre per la sua asta all’aperto al tramonto.' },
        { t: 'La piazza del mercato di Ghardaïa', d: 'Il cuore porticato della valle — un tripudio di tappeti, datteri e spezie sotto il minareto piramidale.' },
        { t: 'Botteghe artigiane', d: 'Tessitura di tappeti e lavorazione dell’argento con gli artigiani mozabiti, la cui architettura cubica ispirò Le Corbusier.' },
      ] },
      { n: 6, label: 'Giorno 06 · Dune e oasi', title: 'Ghardaïa e rientro', img: '/assets/img/sahara-dunes-tadrart.jpg', stops: [
        { t: 'Oasi di palme e dune', d: 'Giardini di palme da dattero alimentati dagli antichi canali foggara, e le dune dorate ai margini della valle.' },
        { t: 'Esperienza in quad e cammello', d: 'Un’escursione sulle sabbie con sicurezza sahariana dedicata e un cuoco del deserto che si occupa di ogni dettaglio.' },
        { t: 'Souk tradizionale · Volo serale', d: 'Un’ultima passeggiata nel souk prima del volo serale di ritorno ad Algeri.' },
      ] },
      { n: 7, label: 'Giorno 07 · La capitale', title: 'La Casbah di Algeri · UNESCO', img: '/assets/img/casbah-old-city-mosque.jpg', stops: [
        { t: 'Casbah di Algeri · UNESCO', d: 'Un’intera giornata nella cittadella ottomana sopra la baia — vicoli a gradini, palazzi e terrazze panoramiche.' },
        { t: 'Palazzi ottomani e musei', d: 'Dar Hassan Pacha, la moschea di Ketchaoua e le più belle collezioni museali della capitale.' },
        { t: 'I monumenti di Algeri', d: 'La chiusura del circuito tra i grandi monumenti sul lungomare di ‘Alger la Blanche’.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algeri', nights: '3 notti', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Costantina', nights: '2 notti', hotels: 'Golden Tulip · Marriott' },
      { city: 'Ghardaïa', nights: '2 notti', hotels: 'Mizab · Bellevedere · Tajami' },
    ],
    includes: ['Voli interni', 'Tutti i pasti', 'Veicoli 4x4 con autista', 'Escursioni in quad e cammello', 'Hotel 5 e 4 stelle', 'Sicurezza e cuoco nel Sahara', 'Tour leader e guide', 'Ingressi ai siti UNESCO'],
  },

  {
    id: 'four-seasons',
    num: '03',
    name: 'Quattro Stagioni',
    subtitle: 'Neve · Sahara · Mediterraneo · Andalusia',
    tagline: 'La neve dell’Atlante, le dune sahariane, la costa mediterranea e la ‘Perla del Maghreb’ andalusa — tutto in otto giorni.',
    accent: '#7A4F9E', // andalusian violet
    region: 'andalusian',
    badges: ['8 giorni / 7 notti', 'Gruppo privato', 'All-inclusive', 'Quattro paesaggi'],
    hero: '/assets/img/oran-bay-santa-cruz.jpg',
    heroLine: 'Il tour dei contrasti per eccellenza — dove si può toccare la neve al mattino e la sabbia del Sahara nello stesso viaggio.',
    overview: 'Il Programma 03 è l’intero spettro dell’Algeria: i pendii di cedri di Chréa, il deserto UNESCO dello M’Zab, l’esuberanza mediterranea di Orano e gli zellige e i giardini andalusi di Tlemcen. È il più scenografico dei tre programmi — un Paese che si rifiuta di essere una cosa sola. Le attività sulla neve sono stagionali (inverno dell’Atlante), e ogni tratta mantiene lo stesso standard privato all-inclusive 5 stelle, con voli interni a collegare i quattro mondi.',
    route: [
      { place: 'Algeri', note: 'Arrivo' }, { place: 'Chréa', note: 'Neve' }, { place: 'Ghardaïa', note: 'Sahara' },
      { place: 'M’Zab', note: 'UNESCO' }, { place: 'Orano', note: 'Costa' }, { place: 'Tlemcen', note: 'Andalusia' },
      { place: 'Algeri', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Giorno 02 · Neve e mare', title: 'La neve di Chréa e Cherchell', img: '/assets/img/blida/blida-03.jpg', flag: 'Chréa & Cherchell have no dedicated photo yet — using a Blida-province image as a placeholder.', stops: [
        { t: 'Parco nazionale di Chréa', d: 'Foresta di cedri dell’Atlante e neve stagionale sopra Blida — sci e ciaspole in vista del mare, nella dimora dei macachi di Barberia.' },
        { t: 'Museo romano di Cherchell', d: 'Una delle più ricche collezioni di statuaria e mosaici romani del Nordafrica, nell’antico porto fenicio-romano di Iol Caesarea.' },
        { t: 'Costa e spiaggia di Cherchell', d: 'L’antica città portuale e il suo tranquillo litorale mediterraneo.' },
      ] },
      { n: 3, label: 'Giorno 03 · Nel Sahara', title: 'Il Sahara di Ghardaïa · UNESCO', img: '/assets/img/sahara-plateau-sunset.jpg', stops: [
        { t: 'Volo per Ghardaïa', d: 'Verso sud, nel deserto e alla porta dello M’Zab.' },
        { t: 'Valle dello M’Zab · UNESCO', d: 'Prima esplorazione della pentapoli color ocra terrazzata sopra lo uadi.' },
        { t: 'Tramonto sulle dune', d: 'L’ora dorata sulle sabbie sahariane.' },
      ] },
      { n: 4, label: 'Giorno 04 · Patrimonio vivente', title: 'La cultura mozabita', img: '/assets/img/ghardaia-ksar-lane.jpg', stops: [
        { t: 'Esplorazione delle città dello M’Zab', d: 'Beni Isguen ed El Atteuf — gli ksour cubici fortificati che ispirarono l’architettura moderna di Le Corbusier.' },
        { t: 'Botteghe artigiane', d: 'Tessitura, ceramica e argento con gli artigiani locali nel cuore della valle.' },
        { t: 'Escursione a dorso di cammello', d: 'Una cavalcata tra i palmeti ai margini del deserto.' },
      ] },
      { n: 5, label: 'Giorno 05 · Esuberanza mediterranea', title: 'Orano mediterranea', img: '/assets/img/oran-bay-santa-cruz.jpg', stops: [
        { t: 'Forte di Santa Cruz e Murdjajo', d: 'La fortezza spagnola del XVI secolo che corona il monte Murdjajo, con vedute maestose sulla baia e sulla basilica sottostante.' },
        { t: 'Place du 1er Novembre', d: 'La grande piazza nel cuore di ‘El Bahia’ — la città radiosa che ha regalato al mondo la musica raï.' },
        { t: 'Il vecchio quartiere di Sidi El Houari', d: 'Lo storico quartiere sul mare dove l’Orano ottomana, spagnola e francese si sovrappongono l’una all’altra.' },
      ] },
      { n: 6, label: 'Giorno 06 · La Perla del Maghreb', title: 'Tlemcen andalusa', img: '/assets/img/tlemcen-andalusian-arches.jpg', stops: [
        { t: 'Grande Moschea di Tlemcen', d: 'Un capolavoro almoravide iniziato nel 1082: il mihrab scolpito e la cupola a costoloni sono tra le massime espressioni dell’arte andaluso-maghrebina.' },
        { t: 'Rovine di Mansourah', d: 'La città d’assedio merinide del 1302 — un solitario minareto svettante e un chilometro di mura nel Parco nazionale di Tlemcen.' },
        { t: 'Palazzo di El Mechouar e giardini', d: 'La cittadella reale zianide restaurata e i giardini andalusi della ‘Perla del Maghreb’.' },
      ] },
      { n: 7, label: 'Giorno 07 · La capitale', title: 'La Casbah di Algeri · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Volo per Algeri · Casbah · UNESCO', d: 'Un volo mattutino verso nord, poi la visita completa della cittadella ottomana sopra la baia.' },
        { t: 'Architettura ottomana', d: 'Palazzi, moschee e i bianchi vicoli a gradini della città vecchia.' },
        { t: 'I musei di Algeri', d: 'I vertici culturali della capitale a chiudere il circuito delle quattro stagioni.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algeri', nights: '3 notti', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Ghardaïa', nights: '2 notti', hotels: 'Mizab · Bellevedere · Tajami' },
      { city: 'Orano', nights: '2 notti', hotels: 'Royal Oran · Bay Managed · Azure Routan' },
    ],
    includes: ['Voli interni', 'Tutti i pasti', 'Veicoli 4x4 con autista', 'Attività sulla neve (stagionali)', 'Escursioni in quad e cammello', 'Hotel 5 e 4 stelle', 'Sicurezza e cuoco nel Sahara', 'Tour leader e guide'],
  },
];

// ---- Testi di pagina (IT). {programmes} e {price} sono segnaposto riempiti dal
// componente; le stringhe `prog` sono la cornice per-programma condivisa da
// tutte le lingue.
export const LUX_COPY = {
  seoTitle: 'Tour di lusso in Algeria — 5 stelle | Algeria Compass',
  seoDescription: 'Tre tour di lusso all-inclusive di 8 giorni in Algeria: rovine romane, città UNESCO e Sahara. Voli interni, hotel 5 stelle, 4x4 privati. Da €1.615.',
  keywords: ['viaggio di lusso Algeria', 'Algeria 5 stelle', 'tour privato Algeria', 'Sahara di lusso Algeria', 'viaggi di lusso in Algeria', 'tour UNESCO Algeria', 'tour Algeria all-inclusive'],
  ogImage: '/assets/img/tours/djemila-1.jpg',
  ogImageAlt: 'Le rovine romane UNESCO di Djemila — i tour di lusso di Algeria Compass',
  waPage: 'Salve Algeria Compass, vorrei informazioni sui vostri tour di lusso della Collezione 5 stelle.',
  heroAlt: 'Il Sahara algerino nell’ora dorata',
  eyebrow: 'La Collezione 5 stelle · Algeria',
  h1a: 'L’Algeria del lusso,',
  h1b: 'solo per voi.',
  heroLine: 'Tre viaggi privati attraverso un Paese che pochi hanno mai visto.',
  ctaExplore: 'Scoprite i viaggi',
  ctaSpecialist: 'Parlate con uno specialista',
  stats: [
    { v: '3', l: 'Viaggi signature' },
    { v: '8', l: 'Giorni · 7 notti' },
    { v: 'All-in', l: 'Voli · hotel · pasti' },
    { v: '€1,615', l: 'Da / persona' },
  ],
  pillarsOverline: 'Lo standard Algeria Compass',
  pillarsH2: 'Che cosa lo rende cinque stelle',
  pillars: [
    { icon: 'shield', t: 'Operatore algerino autorizzato', d: 'Gestito sul posto da algerini — ogni permesso, strada e porta curati direttamente nel Paese.' },
    { icon: 'gem', t: 'Davvero all-inclusive', d: 'Voli interni, tutti i pasti, hotel 5 stelle, una flotta privata di 4x4, guide e ingressi UNESCO — un unico prezzo.' },
    { icon: 'guide', t: 'Guide private multilingue', d: 'Un tour leader dedicato che non lascia mai il vostro gruppo, più guide locali esperte in ogni sito.' },
    { icon: 'visa', t: 'Assistenza visto inclusa', d: 'Prepariamo la documentazione per il vostro visto come parte della prenotazione.' },
    { icon: 'calendar', t: 'Cancellazione gratuita', d: 'Cancellazione gratuita fino a cinque giorni prima della data di partenza.' },
    { icon: 'key', t: 'Privato, non preconfezionato', d: 'Solo il vostro gruppo — su richiesta, con conferma scritta prima di qualsiasi pagamento.' },
  ],
  reserveOverline: 'Prenotate il vostro viaggio',
  reserveH2: 'Iniziate il vostro viaggio della Collezione 5 stelle',
  reserveLead: 'Diteci quale programma vi attira — {programmes} — insieme a date e numero di partecipanti. Confermiamo per iscritto disponibilità, voli interni e il prezzo finale a persona, di norma entro poche ore.',
  orWord: 'oppure',
  ptNoPay: 'Privato, su richiesta — nessun pagamento per informarsi',
  ptFrom: 'Da {price} a persona, all-inclusive',
  ptCancel: 'Cancellazione gratuita fino a 5 giorni prima della partenza',
  ptPrefer: 'Preferite parlarne?',
  ptWaLink: 'Scriveteci su WhatsApp',
  ptOrEmail: 'oppure via email',
  formH3: 'Richiedete il vostro viaggio privato',
  crumbHome: 'Home',
  crumbLabel: 'Collezione 5 stelle di lusso',
  schemaTouristTypes: ['Viaggiatori di lusso', 'Gruppi privati'],
  schemaDay: 'Giorno',
  prog: {
    imgAltSuffix: 'tour di lusso in Algeria',
    programmeWord: 'Programma',
    routeAria: 'Il percorso',
    itineraryEyebrow: 'L’itinerario · 8 giorni',
    dayByDay: 'Giorno per giorno',
    dayWord: 'Giorno',
    stayEyebrow: 'Dove soggiornate · 5 stelle',
    stayNote: 'Le strutture specifiche vengono confermate per iscritto con la prenotazione, salvo disponibilità.',
    inclEyebrow: 'All-inclusive',
    cancelLine: 'Cancellazione gratuita fino a 5 giorni prima della partenza',
    pricingEyebrow: 'Prezzi · A persona · EUR',
    pricingH3: 'Privato, all-inclusive',
    bestValue: 'Miglior valore',
    fromWord: 'Da',
    perPerson: 'a persona',
    reserveBtn: 'Prenotate questo viaggio',
    specialistBtn: 'Parlate con uno specialista',
    waReserve: 'Salve Algeria Compass, vorrei prenotare il viaggio 5 stelle “{name}” (Programma {num}).',
  },
};

// L1 (DE) — Die 5-Sterne-Kollektion: German edition of luxury.mjs. Three
// signature private, all-inclusive 8-day journeys. MUST stay structurally in
// sync with luxury.mjs (same keys, ids, prices, image paths); only the
// user-visible strings are translated. Any stop without a real photo carries
// `flag:true` (owner to supply) — flag notes stay in English (internal).
//
// Pricing is identical across the three programmes (per person, EUR, by group
// size) and the product is sold as a private request-to-book journey.

// Every user-visible string for the /luxury/ page lives in LUX_COPY (bottom of
// this file) so the shared LuxuryPage/LuxuryProgram components stay language-
// blind. This edition exports the same three names: LUX_PRICING, PROGRAMMES,
// LUX_COPY.

export const LUX_PRICING = {
  fromLabel: '€1,615',
  fromValue: 1615,
  highValue: 2290,
  currency: 'EUR',
  tiers: [
    { pax: '2–9 Pers.', price: '€2,290', note: 'Privat & exklusiv' },
    { pax: '10–15 Pers.', price: '€1,870', note: '+ 1 Reiseleiter frei' },
    { pax: '16–22 Pers.', price: '€1,700', note: 'Gruppentarif' },
    { pax: '22+ Pers.', price: '€1,615', note: 'Große Gruppe' },
  ],
};

const ARRIVAL_DAY = {
  n: 1, label: 'Tag 01 · Ankunft', title: 'Ankunft in Algier', img: '/assets/img/algiers-white-city-aerial.jpg',
  stops: [
    { t: 'VIP-Empfang am Flughafen', d: 'Ein privater Fast-Track-Empfang am Flughafen Houari Boumediene, anschließend Chauffeurtransfer in Ihr 5-Sterne-Hotel an der Bucht von Algier.' },
    { t: 'Die Bucht von Algier zur Dämmerung', d: 'Ihr erster Abend über ‘Alger la Blanche’ — die strahlend weiße Hauptstadt, die in Terrassen zum Mittelmeer hinabfließt.' },
    { t: 'Willkommensbriefing & Abendessen', d: 'Eine entspannte Besprechung Ihrer Reiseroute mit Ihrem persönlichen Reiseleiter bei einem erlesenen algerischen Willkommensdinner.' },
  ],
};

const DEPARTURE_DAY = {
  n: 8, label: 'Tag 08 · Abschied', title: 'Abreise', img: '/assets/img/algiers-boulevards-aerial.jpg',
  stops: [
    { t: 'Freier Vormittag', d: 'Ein letzter Kaffee, letzte Souvenirs von den Kunsthandwerkern der Kasbah — oder einfach ein langes Frühstück mit Blick über die Bucht.' },
    { t: 'Abschlussbriefing', d: 'Ein herzlicher Abschied und Reiserückblick mit Ihrem Reiseleiter.' },
    { t: 'VIP-Flughafentransfer', d: 'Privater Chauffeurtransfer zum Flughafen Houari Boumediene.' },
  ],
};

export const PROGRAMMES = [
  {
    id: 'classical-algeria',
    num: '01',
    name: 'Klassisches Algerien',
    subtitle: 'Mittelmeer & Hochland-Erbe',
    tagline: 'Römische Häfen, Bergoasen und die UNESCO-Städte des Nordens — die große Einführung in Algerien.',
    accent: '#1E6F5C', // coast/highland green
    region: 'coast',
    badges: ['8 Tage / 7 Nächte', 'Private Gruppe', 'All-inclusive 5 Sterne', '4 UNESCO-Stätten'],
    hero: '/assets/img/tours/djemila-1.jpg',
    heroLine: 'Von der weiß-blauen Kasbah über der Bucht bis zu den römischen Theatern von Djemila — das klassische Herz Algeriens: Küste, Berge und Imperium in acht entspannten Tagen.',
    overview: 'Programm 01 verwebt Mittelmeer und Hochland: den römischen Hafen von Tipaza, die Oase Bou Saâda, die spektakulären UNESCO-Ruinen von Djemila, die schwebenden Brücken von Constantine und die osmanische Kasbah von Algier. Es ist die ideale erste Begegnung für VIP-Gruppen, die Tiefe ohne Wüstenlogistik suchen. Jeder Tag bietet rund drei herausragende Erlebnisse — eingerahmt von 5-Sterne-Komfort, einer privaten Geländewagen-Flotte und einem Reiseleiter, der Ihrer Gruppe nie von der Seite weicht.',
    route: [
      { place: 'Algier', note: 'Ankunft' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Bou Saâda', note: 'Oase' },
      { place: 'Sétif', note: 'Hochland' }, { place: 'Djemila', note: 'UNESCO' }, { place: 'Constantine', note: 'Brücken' },
      { place: 'Algier', note: 'Kasbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Tag 02 · Römisches Mittelmeer', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-3.jpg', stops: [
        { t: 'Königliches Mausoleum von Mauretanien', d: 'Das gewaltige, 30 Meter messende Rundgrab von König Juba II. und Kleopatra Selene — Tochter Kleopatras VII. —, das seit dem 1. Jahrhundert v. Chr. die Küstenhügel krönt.' },
        { t: 'Archäologischer Park Tipaza · UNESCO', d: 'Eine römische Kolonie am Meer — Forum, Theater, Thermen und frühchristliche Basiliken —, wo einst Albert Camus zwischen Ruinen und wildem Wermut wandelte.' },
        { t: 'Mittagessen am Meer · Mont Chenoua', d: 'Frische mediterrane Meeresfrüchte am Fuß des Mont Chenoua, mit Blick auf dieselbe Bucht, die einst phönizische und römische Händler anzog.' },
      ] },
      { n: 3, label: 'Tag 03 · Die Stadt des Glücks', title: 'Oase Bou Saâda', img: '/assets/img/bou-saada-oued-sunset.jpg', stops: [
        { t: 'Nasreddine-Dinet-Museum', d: 'Haus und Werk des französischen Orientalisten-Malers, der zum Islam übertrat, den Namen Nasreddine annahm und sein Leben dieser Oase widmete.' },
        { t: 'Palmenhaine & der alte Ksar', d: 'Ein Spaziergang durch die dichte Palmeraie und die ockerfarbenen Gassen des historischen Ksar, wo der Atlas auf die Sahara trifft.' },
        { t: 'Abend am Saharaatlas', d: 'Traditionelles Kunsthandwerk und Musik an der Schwelle zur Wüste — die Oase, die seit über einem Jahrhundert Künstler und Schriftsteller anzieht.' },
      ] },
      { n: 4, label: 'Tag 04 · Panoramafahrt', title: 'Durchs Hochland nach Sétif', img: '/assets/img/setif-ain-el-fouara.jpg', stops: [
        { t: 'Fahrt durch den Atlas', d: 'Eine cineastische private Geländewagen-Querung der Hauts Plateaux — Steilhänge, goldene Weizenebenen und weite Hochlandhimmel.' },
        { t: 'Halt in einem traditionellen Dorf', d: 'Eine authentische Rast im Hochland mit frischem Brot, Minztee und unaufgeregter Gastfreundschaft, fern jeder Touristenroute.' },
        { t: 'Aïn El Fouara · Sétif', d: 'Ankunft im kühlen, grünen Sétif mit seinem geliebten Marmorbrunnen von 1898, dem Wahrzeichen der Stadt.' },
      ] },
      { n: 5, label: 'Tag 05 · Imperium in den Bergen', title: 'Djemila · Cuicul · UNESCO', img: '/assets/img/tours/djemila-4.jpg', stops: [
        { t: 'Archäologische Stätte Djemila · UNESCO', d: 'Das antike Cuicul, auf 900 m Höhe auf einem Bergsporn gelegen — von der UNESCO als eine der schönsten römischen Ruinenstätten der Welt beschrieben.' },
        { t: 'Theater, Forum & Tempel', d: 'Das große Hangtheater, der Severer-Tempel und der Caracalla-Bogen, meisterhaft an das steile Bergterrain angepasst.' },
        { t: 'Mosaikmuseum & Mittagessen', d: 'Cuiculs außergewöhnliche Mosaiken von Mythen und Alltagsleben im Museum vor Ort, danach ein entspanntes Mittagessen mit lokaler Küche.' },
      ] },
      { n: 6, label: 'Tag 06 · Die Stadt der Brücken', title: 'Ausflug nach Constantine', img: '/assets/img/constantine-sidi-mcid-bridge.jpg', stops: [
        { t: 'Hängebrücke Sidi M’Cid', d: 'Die 1912 erbaute Fußgängerbrücke, 175 m über der Rhumel-Schlucht gespannt — das schwindelerregende Wahrzeichen Constantines.' },
        { t: 'Ahmed-Bey-Palast', d: 'Der exquisite Palast des letzten Beys von Constantine aus den 1830er-Jahren, mit bemalten Galerien und andalusisch geprägten Hofgärten.' },
        { t: 'Emir-Abdelkader-Moschee & Altstadt', d: 'Eine der größten Moscheen Afrikas, dann das Altstadtviertel am Felsrand; abends Rückkehr nach Sétif.' },
      ] },
      { n: 7, label: 'Tag 07 · Zurück in die Hauptstadt', title: 'Die Kasbah von Algier · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Kasbah von Algier · UNESCO', d: 'Per Flug zurück in die Hauptstadt, dann hinein in die steile osmanische Zitadelle — ein Labyrinth weißer Gassen, verborgener Innenhöfe und Dachterrassen über der Bucht.' },
        { t: 'Ketchaoua-Moschee', d: 'Die emblematische Moschee am Fuß der Kasbah, in ihrer vollen osmanisch-maurischen Pracht restauriert.' },
        { t: 'Palast der Rais · Bastion 23', d: 'Ein Trio restaurierter Küstenpaläste aus dem 16. Jahrhundert — die schönsten erhaltenen osmanischen Residenzen Algiers.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algier', nights: '3 Nächte', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Bou Saâda', nights: '1 Nacht', hotels: 'Kerdada · El Qaid' },
      { city: 'Sétif', nights: '3 Nächte', hotels: 'Park Mall · Bayazid' },
    ],
    includes: ['Inlandsflüge', 'Alle Mahlzeiten', 'Geländewagen & Fahrer', '5-Sterne-Hotels', 'Reiseleiter & Guides', 'Eintritte UNESCO-Stätten'],
  },

  {
    id: 'sahara-heart',
    num: '02',
    name: 'Herz der Sahara',
    subtitle: 'Römische Ruinen & mozabitische Pentapolis',
    tagline: 'Vom ‘Pompeji Afrikas’ zu den befestigten Städten des M’Zab — römisches Imperium trifft gelebte Wüstenkultur.',
    accent: '#8F5018', // saharan ochre (darkened for AA contrast)
    region: 'sahara',
    badges: ['8 Tage / 7 Nächte', 'Private Gruppe', 'All-inclusive · Sahara', '3 UNESCO-Stätten'],
    hero: '/assets/img/timgad-theatre.jpg',
    heroLine: 'Ein Abstieg vom römischen Norden in das zeitlose M’Zab-Tal — fünf befestigte Wüstenstädte, deren kubische Architektur einst Le Corbusier inspirierte.',
    overview: 'Programm 02 verbindet die monumentale römische Welt — Tipaza am Meer und Timgad, das perfekt gerasterte ‘Pompeji Afrikas’ — mit der spirituellen, gelebten Wüstenkultur von Ghardaïa und der mozabitischen Pentapolis. Es ist Algeriens eindrucksvollster Kontrast: kaiserlicher Stein und Sahara-Stille. Die Sahara-Etappe wird von eigenem Sicherheitspersonal und einem Wüstenkoch begleitet, mit Quad- und Kamelerlebnissen zwischen den Dünen — im selben privaten 5-Sterne-Service.',
    route: [
      { place: 'Algier', note: 'Ankunft' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Timgad', note: 'UNESCO' },
      { place: 'Constantine', note: 'Hochland' }, { place: 'Ghardaïa', note: 'Sahara' }, { place: 'M’Zab', note: 'UNESCO' },
      { place: 'Algier', note: 'Kasbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Tag 02 · Römisches Mittelmeer', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-1.jpg', stops: [
        { t: 'Römischer Hafen Tipaza · UNESCO', d: 'Eine römische Hafenstadt mit Forum, Theater und Basiliken, die zum Mittelmeer hinabstürzt — errichtet auf einem älteren phönizischen Handelsposten.' },
        { t: 'Königliches Mausoleum von Mauretanien', d: 'Das monumentale Rundgrab des numidisch-mauretanischen Königshauses, das seit über zweitausend Jahren die Küste beherrscht.' },
        { t: 'Mittagessen am Mittelmeer', d: 'Küstenküche direkt am Wasser, bevor es zurück nach Algier geht.' },
      ] },
      { n: 3, label: 'Tag 03 · Das Pompeji Afrikas', title: 'Timgad · UNESCO', img: '/assets/img/tours/batna-timgad-2.jpg', stops: [
        { t: 'Flug nach Constantine', d: 'Ein Morgenflug ostwärts Richtung Aurès-Gebirge, dem Tor zum römischen Süden.' },
        { t: 'Archäologische Stadt Timgad · UNESCO', d: 'Im Jahr 100 n. Chr. von Trajan für Armeeveteranen gegründet, ist Timgad das Lehrbuch römischer Stadtplanung — ein perfektes Raster, das der Saharasand über Jahrhunderte bewahrte.' },
        { t: 'Trajansbogen & Theater', d: 'Der 12 Meter hohe Triumphbogen, das Theater mit 3.500 Plätzen und das Forum des ‘Pompeji Afrikas’. Übernachtung in Constantine.' },
      ] },
      { n: 4, label: 'Tag 04 · Vom Norden in die Wüste', title: 'Von Constantine nach Ghardaïa', img: '/assets/img/constantine-footbridge.jpg', stops: [
        { t: 'Sidi-M’Cid-Brücke & Altstadt', d: 'Morgendliche Ausblicke über die Rhumel-Schlucht und das Felsviertel der Stadt der Brücken.' },
        { t: 'Flug nach Ghardaïa', d: 'Ein Nachmittagsflug rund 600 km nach Süden — vom Grün des Hochlands ins Ocker der Sahara.' },
        { t: 'Ankunft im M’Zab-Tal', d: 'Der erste Blick auf die befestigte Pentapolis, die sich in Terrassen über dem palmengesäumten Wadi erhebt.' },
      ] },
      { n: 5, label: 'Tag 05 · Die Pentapolis', title: 'M’Zab-Tal · UNESCO', img: '/assets/img/ghardaia-mzab-panorama.jpg', stops: [
        { t: 'Beni Isguen · Die Heilige Stadt · UNESCO', d: 'Die unberührte ummauerte Stadt der ibaditischen Mozabiten, nur mit lokalem Führer zugänglich und berühmt für ihre abendliche Freiluftauktion.' },
        { t: 'Marktplatz von Ghardaïa', d: 'Das arkadengesäumte Herz des Tals — ein Farbenrausch aus Teppichen, Datteln und Gewürzen unter dem pyramidenförmigen Minarett.' },
        { t: 'Kunsthandwerker-Werkstätten', d: 'Teppichweberei und Silberschmiedekunst bei mozabitischen Handwerkern, deren kubische Architektur einst Le Corbusier inspirierte.' },
      ] },
      { n: 6, label: 'Tag 06 · Dünen & Oasen', title: 'Ghardaïa & Rückflug', img: '/assets/img/sahara-dunes-tadrart.jpg', stops: [
        { t: 'Palmenoasen & Dünen', d: 'Dattelpalmengärten, gespeist von uralten Foggara-Wasserkanälen, und die goldenen Dünen am Rand des Tals.' },
        { t: 'Quad- & Kamelerlebnis', d: 'Ein Ritt hinaus über den Sand — mit eigenem Sahara-Sicherheitsteam und einem Wüstenkoch, der sich um jedes Detail kümmert.' },
        { t: 'Traditioneller Souk · Abendflug', d: 'Ein letzter Bummel durch den Souk vor dem Abendflug zurück nach Algier.' },
      ] },
      { n: 7, label: 'Tag 07 · Die Hauptstadt', title: 'Kasbah von Algier · UNESCO', img: '/assets/img/casbah-old-city-mosque.jpg', stops: [
        { t: 'Kasbah von Algier · UNESCO', d: 'Ein ganzer Tag in der osmanischen Zitadelle über der Bucht — Treppengassen, Paläste und Panorama-Dachterrassen.' },
        { t: 'Osmanische Paläste & Museen', d: 'Dar Hassan Pacha, die Ketchaoua-Moschee und die schönsten Museumssammlungen der Hauptstadt.' },
        { t: 'Monumente von Algier', d: 'Der Abschluss des Rundwegs zwischen den großen Wahrzeichen von ‘Alger la Blanche’ am Meer.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algier', nights: '3 Nächte', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Constantine', nights: '2 Nächte', hotels: 'Golden Tulip · Marriott' },
      { city: 'Ghardaïa', nights: '2 Nächte', hotels: 'Mizab · Bellevedere · Tajami' },
    ],
    includes: ['Inlandsflüge', 'Alle Mahlzeiten', 'Geländewagen & Fahrer', 'Quad- & Kamelritte', '5-Sterne- & 4-Sterne-Hotels', 'Sicherheitsteam & Koch in der Sahara', 'Reiseleiter & Guides', 'Eintritte UNESCO-Stätten'],
  },

  {
    id: 'four-seasons',
    num: '03',
    name: 'Vier Jahreszeiten',
    subtitle: 'Schnee · Sahara · Mittelmeer · Andalusien',
    tagline: 'Atlas-Schnee, Sahara-Dünen, Mittelmeerküste und die andalusische ‘Perle des Maghreb’ — alles in acht Tagen.',
    accent: '#7A4F9E', // andalusian violet
    region: 'andalusian',
    badges: ['8 Tage / 7 Nächte', 'Private Gruppe', 'All-inclusive', 'Vier Landschaften'],
    hero: '/assets/img/oran-bay-santa-cruz.jpg',
    heroLine: 'Die Signature-Kontrastreise — morgens Schnee berühren und auf derselben Reise durch Saharasand streifen.',
    overview: 'Programm 03 ist Algeriens ganzes Spektrum: die Zedernhänge von Chréa, die UNESCO-Wüste des M’Zab, das mediterrane Selbstbewusstsein Orans und die Zellige-Kunst und andalusischen Gärten von Tlemcen. Es ist das visuell dramatischste der drei Programme — ein Land, das sich weigert, nur eines zu sein. Die Schneeaktivitäten sind saisonal (Atlas-Winter), und jede Etappe hält denselben privaten All-inclusive-5-Sterne-Standard, mit Inlandsflügen als Brücke zwischen den vier Welten.',
    route: [
      { place: 'Algier', note: 'Ankunft' }, { place: 'Chréa', note: 'Schnee' }, { place: 'Ghardaïa', note: 'Sahara' },
      { place: 'M’Zab', note: 'UNESCO' }, { place: 'Oran', note: 'Küste' }, { place: 'Tlemcen', note: 'Andalusien' },
      { place: 'Algier', note: 'Kasbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Tag 02 · Schnee & Meer', title: 'Chréa-Schnee & Cherchell', img: '/assets/img/blida/blida-03.jpg', flag: 'Chréa & Cherchell have no dedicated photo yet — using a Blida-province image as a placeholder.', stops: [
        { t: 'Nationalpark Chréa', d: 'Atlas-Zedernwald und saisonaler Schnee oberhalb von Blida — Ski und Schneeschuhwandern in Sichtweite des Meeres, Heimat wilder Berberaffen.' },
        { t: 'Römisches Museum Cherchell', d: 'Eine der reichsten Sammlungen römischer Statuen und Mosaiken Nordafrikas, im alten phönizisch-römischen Hafen Iol Caesarea.' },
        { t: 'Küste & Strand von Cherchell', d: 'Die antike Hafenstadt und ihr stiller Mittelmeerstrand.' },
      ] },
      { n: 3, label: 'Tag 03 · Hinein in die Sahara', title: 'Ghardaïa Sahara · UNESCO', img: '/assets/img/sahara-plateau-sunset.jpg', stops: [
        { t: 'Flug nach Ghardaïa', d: 'Südwärts in die Wüste, zum Tor des M’Zab.' },
        { t: 'M’Zab-Tal · UNESCO', d: 'Erste Erkundung der ockerfarbenen Pentapolis, terrassiert über dem Wadi.' },
        { t: 'Sonnenuntergang über den Dünen', d: 'Die goldene Stunde über dem Sand der Sahara.' },
      ] },
      { n: 4, label: 'Tag 04 · Lebendiges Erbe', title: 'Mozabitische Kultur', img: '/assets/img/ghardaia-ksar-lane.jpg', stops: [
        { t: 'Die Städte des M’Zab', d: 'Beni Isguen und El Atteuf — die befestigten kubischen Ksour, die Le Corbusiers moderne Architektur inspirierten.' },
        { t: 'Kunsthandwerker-Werkstätten', d: 'Weberei, Töpferei und Silberkunst bei lokalen Handwerkern im Herzen des Tals.' },
        { t: 'Kamelritte', d: 'Ein Ritt durch die Palmeraien am Rand der Wüste.' },
      ] },
      { n: 5, label: 'Tag 05 · Mediterranes Flair', title: 'Oran am Mittelmeer', img: '/assets/img/oran-bay-santa-cruz.jpg', stops: [
        { t: 'Fort Santa Cruz & Murdjajo', d: 'Die spanische Festung aus dem 16. Jahrhundert auf dem Murdjajo-Berg, mit weiten Blicken über die Bucht und die Basilika darunter.' },
        { t: 'Place du 1er Novembre', d: 'Der prachtvolle Platz im Herzen von ‘El Bahia’ — der strahlenden Stadt, die der Welt die Raï-Musik schenkte.' },
        { t: 'Altstadtviertel Sidi El Houari', d: 'Das historische Hafenviertel, in dem sich das osmanische, spanische und französische Oran übereinanderschichten.' },
      ] },
      { n: 6, label: 'Tag 06 · Perle des Maghreb', title: 'Tlemcen, das andalusische', img: '/assets/img/tlemcen-andalusian-arches.jpg', stops: [
        { t: 'Große Moschee von Tlemcen', d: 'Ein almoravidisches Meisterwerk, begonnen 1082 — der geschnitzte Mihrab und die Rippenkuppel zählen zum Feinsten andalusisch-maghrebinischer Kunst.' },
        { t: 'Ruinen von Mansourah', d: 'Die merinidische Belagerungsstadt von 1302 — ein einsam aufragendes Minarett und ein Kilometer Wehrmauern im Nationalpark von Tlemcen.' },
        { t: 'El-Mechouar-Palast & Gärten', d: 'Die restaurierte Königszitadelle der Zianiden und die andalusischen Gärten der ‘Perle des Maghreb’.' },
      ] },
      { n: 7, label: 'Tag 07 · Die Hauptstadt', title: 'Kasbah von Algier · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Flug nach Algier · Kasbah · UNESCO', d: 'Ein Morgenflug nach Norden, dann eine ausführliche Tour durch die osmanische Zitadelle über der Bucht.' },
        { t: 'Osmanische Architektur', d: 'Paläste, Moscheen und die weißen Treppengassen der Altstadt.' },
        { t: 'Museen von Algier', d: 'Die kulturellen Höhepunkte der Hauptstadt als Abschluss des Vier-Jahreszeiten-Rundwegs.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Algier', nights: '3 Nächte', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Ghardaïa', nights: '2 Nächte', hotels: 'Mizab · Bellevedere · Tajami' },
      { city: 'Oran', nights: '2 Nächte', hotels: 'Royal Oran · Bay Managed · Azure Routan' },
    ],
    includes: ['Inlandsflüge', 'Alle Mahlzeiten', 'Geländewagen & Fahrer', 'Schneeaktivitäten (saisonal)', 'Quad- & Kamelritte', '5-Sterne- & 4-Sterne-Hotels', 'Sicherheitsteam & Koch in der Sahara', 'Reiseleiter & Guides'],
  },
];

// ---- Page copy (DE). {programmes} and {price} are placeholders the component
// fills; `prog` strings are the per-programme chrome shared by all languages.
export const LUX_COPY = {
  seoTitle: 'Luxusreisen Algerien — 5-Sterne-Kollektion | Algeria Compass',
  seoDescription: 'Drei all-inclusive 8-Tage-Luxusreisen durch Algerien: römische Ruinen, UNESCO-Städte, Sahara. Inlandsflüge, 5-Sterne-Hotels, privater 4WD. Ab €1.615.',
  keywords: ['Luxusreise Algerien', 'private 5-Sterne-Rundreise Algerien', 'Algerien Privatreise', 'Luxus Sahara Reise Algerien', 'Algerien Luxusurlaub', 'UNESCO Rundreise Algerien', 'All-inclusive Reise Algerien'],
  ogImage: '/assets/img/tours/djemila-1.jpg',
  ogImageAlt: 'Die römischen UNESCO-Ruinen von Djemila — Luxusreisen von Algeria Compass',
  waPage: 'Hallo Algeria Compass, ich interessiere mich für Ihre Luxusreisen der 5-Sterne-Kollektion.',
  heroAlt: 'Die algerische Sahara zur goldenen Stunde',
  eyebrow: 'Die 5-Sterne-Kollektion · Algerien',
  h1a: 'Algerien de luxe,',
  h1b: 'ganz privat.',
  heroLine: 'Drei private Reisen durch ein Land, das kaum jemand kennt.',
  ctaExplore: 'Die Reisen entdecken',
  ctaSpecialist: 'Mit einem Spezialisten sprechen',
  stats: [
    { v: '3', l: 'Signature-Reisen' },
    { v: '8', l: 'Tage · 7 Nächte' },
    { v: 'All-in', l: 'Flüge · Hotels · Mahlzeiten' },
    { v: '€1,615', l: 'Ab / Person' },
  ],
  pillarsOverline: 'Der Algeria-Compass-Standard',
  pillarsH2: 'Was diese Reisen zu 5 Sternen macht',
  pillars: [
    { icon: 'shield', t: 'Lizenzierter algerischer Veranstalter', d: 'Vor Ort von Algeriern geführt — jede Genehmigung, jede Straße, jede Tür wird im Land selbst geregelt.' },
    { icon: 'gem', t: 'Wirklich all-inclusive', d: 'Inlandsflüge, alle Mahlzeiten, 5-Sterne-Hotels, eine private Geländewagen-Flotte, Guides und UNESCO-Eintritte — ein Preis.' },
    { icon: 'guide', t: 'Mehrsprachige Privatguides', d: 'Ein persönlicher Reiseleiter, der Ihre Gruppe nie verlässt, plus fachkundige lokale Guides an jeder Stätte.' },
    { icon: 'visa', t: 'Visa-Unterstützung inklusive', d: 'Wir bereiten Ihre Visa-Unterlagen als Teil der Buchung vor.' },
    { icon: 'calendar', t: 'Kostenlose Stornierung', d: 'Kostenlose Stornierung bis fünf Tage vor Ihrem Abreisedatum.' },
    { icon: 'key', t: 'Privat, kein Pauschalpaket', d: 'Ausschließlich Ihre eigene Gruppe — Buchung auf Anfrage, schriftlich bestätigt, bevor Sie zahlen.' },
  ],
  reserveOverline: 'Reservieren Sie Ihre Reise',
  reserveH2: 'Beginnen Sie Ihre Reise mit der 5-Sterne-Kollektion',
  reserveLead: 'Sagen Sie uns, welches Programm Sie anspricht — {programmes} —, Ihre Termine und Ihre Gruppengröße. Wir bestätigen Verfügbarkeit, Inlandsflüge und Ihren endgültigen Pro-Person-Preis schriftlich, meist innerhalb weniger Stunden.',
  orWord: 'oder',
  ptNoPay: 'Privat, Buchung auf Anfrage — Anfrage ohne Zahlung',
  ptFrom: 'Ab {price} pro Person, all-inclusive',
  ptCancel: 'Kostenlose Stornierung bis 5 Tage vor Abreise',
  ptPrefer: 'Lieber persönlich?',
  ptWaLink: 'Schreiben Sie uns auf WhatsApp',
  ptOrEmail: 'oder per E-Mail',
  formH3: 'Ihre private Reise anfragen',
  crumbHome: 'Start',
  crumbLabel: 'Luxus · 5-Sterne-Kollektion',
  schemaTouristTypes: ['Luxusreisende', 'Private Gruppen'],
  schemaDay: 'Tag',
  prog: {
    imgAltSuffix: 'Luxusreise Algerien',
    programmeWord: 'Programm',
    routeAria: 'Die Route',
    itineraryEyebrow: 'Die Reiseroute · 8 Tage',
    dayByDay: 'Tag für Tag',
    dayWord: 'Tag',
    stayEyebrow: 'Ihre Unterkünfte · 5 Sterne',
    stayNote: 'Die konkreten Häuser werden mit Ihrer Buchung schriftlich bestätigt, vorbehaltlich Verfügbarkeit.',
    inclEyebrow: 'All-inclusive',
    cancelLine: 'Kostenlose Stornierung bis 5 Tage vor Abreise',
    pricingEyebrow: 'Preise · Pro Person · EUR',
    pricingH3: 'Privat, all-inclusive',
    bestValue: 'Bester Wert',
    fromWord: 'Ab',
    perPerson: 'pro Person',
    reserveBtn: 'Diese Reise reservieren',
    specialistBtn: 'Mit einem Spezialisten sprechen',
    waReserve: 'Hallo Algeria Compass, ich möchte die 5-Sterne-Reise „{name}“ (Programm {num}) reservieren.',
  },
};

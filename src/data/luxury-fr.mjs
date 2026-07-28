// L1 — Édition FRANÇAISE de luxury.mjs (The 5-Star Collection) : trois
// programmes signature privés, tout compris, de 8 jours. Ce fichier doit
// rester structurellement synchronisé avec src/data/luxury.mjs (mêmes clés,
// mêmes ids, mêmes chemins d'images, mêmes prix). Seules les chaînes visibles
// par l'utilisateur sont traduites; les notes `flag` restent en anglais
// (usage interne).
//
// Exporte les trois mêmes noms : LUX_PRICING, PROGRAMMES, LUX_COPY.

export const LUX_PRICING = {
  fromLabel: '€1,615',
  fromValue: 1615,
  highValue: 2290,
  currency: 'EUR',
  tiers: [
    { pax: '2–9 pers.', price: '€2,290', note: 'Privé & intime' },
    { pax: '10–15 pers.', price: '€1,870', note: '+ 1 accompagnateur offert' },
    { pax: '16–22 pers.', price: '€1,700', note: 'Tarif groupe' },
    { pax: '22+ pers.', price: '€1,615', note: 'Grand groupe' },
  ],
};

const ARRIVAL_DAY = {
  n: 1, label: 'Jour 01 · Arrivée', title: 'Arrivée à Alger', img: '/assets/img/algiers-white-city-aerial.jpg',
  stops: [
    { t: 'Accueil VIP à l’aéroport', d: 'Un accueil privé avec passage prioritaire à l’aéroport Houari-Boumediene, suivi d’un transfert avec chauffeur vers votre hôtel 5 étoiles sur la baie d’Alger.' },
    { t: 'La baie d’Alger au crépuscule', d: 'Votre première soirée au-dessus d’« Alger la Blanche » — l’éblouissante capitale blanche qui descend en terrasses jusqu’à la Méditerranée.' },
    { t: 'Briefing de bienvenue & dîner', d: 'Une présentation détendue de l’itinéraire avec votre accompagnateur dédié, autour d’un dîner algérien de bienvenue soigneusement composé.' },
  ],
};

const DEPARTURE_DAY = {
  n: 8, label: 'Jour 08 · Au revoir', title: 'Départ', img: '/assets/img/algiers-boulevards-aerial.jpg',
  stops: [
    { t: 'Matinée libre', d: 'Un dernier café, quelques souvenirs chez les artisans de la Casbah, ou simplement un petit-déjeuner paisible face à la baie.' },
    { t: 'Briefing final', d: 'Des adieux chaleureux et une rétrospective du voyage avec votre accompagnateur.' },
    { t: 'Transfert VIP vers l’aéroport', d: 'Transfert privé avec chauffeur vers l’aéroport Houari-Boumediene.' },
  ],
};

export const PROGRAMMES = [
  {
    id: 'classical-algeria',
    num: '01',
    name: 'Algérie classique',
    subtitle: 'Patrimoine méditerranéen & des Hauts Plateaux',
    tagline: 'Ports romains, oasis de montagne et villes UNESCO du nord — la grande introduction à l’Algérie.',
    accent: '#1E6F5C', // coast/highland green
    region: 'coast',
    badges: ['8 jours / 7 nuits', 'Groupe privé', 'Tout compris 5 étoiles', '4 sites UNESCO'],
    hero: '/assets/img/tours/djemila-1.jpg',
    heroLine: 'De la Casbah blanche et bleue dominant la baie aux théâtres romains de Djemila, voici le cœur classique de l’Algérie — côte, montagnes et empire en huit jours sans précipitation.',
    overview: 'Le Programme 01 tisse la Méditerranée et les Hauts Plateaux : le port romain de Tipaza, l’oasis de Bou Saâda, les spectaculaires ruines UNESCO de Djemila, les ponts suspendus de Constantine et la Casbah ottomane d’Alger. C’est la première rencontre idéale pour les groupes VIP qui recherchent la profondeur sans la logistique du désert. Chaque journée offre environ trois expériences majeures, dans un confort 5 étoiles, avec une flotte privée de 4x4 et un accompagnateur qui ne quitte jamais votre groupe.',
    route: [
      { place: 'Alger', note: 'Arrivée' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Bou Saâda', note: 'Oasis' },
      { place: 'Sétif', note: 'Hauts Plateaux' }, { place: 'Djemila', note: 'UNESCO' }, { place: 'Constantine', note: 'Ponts' },
      { place: 'Alger', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Jour 02 · Méditerranée romaine', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-3.jpg', stops: [
        { t: 'Mausolée royal de Maurétanie', d: 'L’immense tombeau circulaire de 30 mètres du roi Juba II et de Cléopâtre Séléné — fille de Cléopâtre VII — qui couronne les collines côtières depuis le Ier siècle av. J.-C.' },
        { t: 'Parc archéologique de Tipaza · UNESCO', d: 'Une colonie romaine étirée le long de la mer — forum, théâtre, thermes et basiliques paléochrétiennes — où Albert Camus aimait marcher parmi les ruines et l’absinthe sauvage.' },
        { t: 'Déjeuner en bord de mer · Mont Chenoua', d: 'Poissons et fruits de mer de Méditerranée au pied du mont Chenoua, face à la baie même qui attirait les marchands phéniciens et romains.' },
      ] },
      { n: 3, label: 'Jour 03 · La cité du bonheur', title: 'Oasis de Bou Saâda', img: '/assets/img/bou-saada-oued-sunset.jpg', stops: [
        { t: 'Musée Nasreddine Dinet', d: 'La maison et l’œuvre du peintre orientaliste français converti à l’islam, qui prit le nom de Nasreddine et consacra sa vie à cette oasis.' },
        { t: 'Palmeraies & vieux ksar', d: 'Une promenade dans la dense palmeraie et les ruelles ocre du ksar historique, là où l’Atlas rencontre le Sahara.' },
        { t: 'Soirée de l’Atlas saharien', d: 'Artisanat et musique traditionnels au seuil du désert — l’oasis qui attire artistes et écrivains depuis plus d’un siècle.' },
      ] },
      { n: 4, label: 'Jour 04 · Traversée panoramique', title: 'Des Hauts Plateaux à Sétif', img: '/assets/img/setif-ain-el-fouara.jpg', stops: [
        { t: 'Route de l’Atlas', d: 'Une traversée cinématographique des Hauts Plateaux en 4x4 privé — escarpements, plaines de blé doré et vastes ciels d’altitude.' },
        { t: 'Halte dans un village traditionnel', d: 'Une pause authentique dans les hauteurs : pain frais, thé à la menthe et hospitalité sans hâte, loin de tout sentier touristique.' },
        { t: 'Aïn El Fouara · Sétif', d: 'Arrivée dans la fraîche et verdoyante Sétif et sa fontaine de marbre de 1898, emblème bien-aimé de la ville.' },
      ] },
      { n: 5, label: 'Jour 05 · L’empire dans les collines', title: 'Djemila · Cuicul · UNESCO', img: '/assets/img/tours/djemila-4.jpg', stops: [
        { t: 'Site archéologique de Djemila · UNESCO', d: 'L’antique Cuicul, perchée à 900 m sur un éperon montagneux — décrite par l’UNESCO comme l’un des plus beaux ensembles de ruines romaines au monde.' },
        { t: 'Théâtre, forum & temples', d: 'Le grand théâtre à flanc de colline, le temple sévérien et l’arc de Caracalla, remarquablement adaptés au relief escarpé de la montagne.' },
        { t: 'Musée des mosaïques & déjeuner', d: 'Les extraordinaires mosaïques de Cuicul — mythes et vie quotidienne — dans le musée du site, puis un déjeuner local en toute détente.' },
      ] },
      { n: 6, label: 'Jour 06 · La ville des ponts', title: 'Excursion à Constantine', img: '/assets/img/constantine-sidi-mcid-bridge.jpg', stops: [
        { t: 'Pont suspendu de Sidi M’Cid', d: 'La passerelle de 1912 suspendue à 175 m au-dessus des gorges du Rhumel — l’image vertigineuse et emblématique de Constantine.' },
        { t: 'Palais Ahmed Bey', d: 'Le somptueux palais des années 1830 du dernier bey de Constantine, avec ses galeries peintes et ses jardins de cour de style andalou.' },
        { t: 'Mosquée Émir Abdelkader & vieille ville', d: 'L’une des plus grandes mosquées d’Afrique, puis le vieux quartier au bord des falaises ; retour à Sétif en soirée.' },
      ] },
      { n: 7, label: 'Jour 07 · Retour dans la capitale', title: 'La Casbah d’Alger · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Casbah d’Alger · UNESCO', d: 'Retour dans la capitale par avion, puis plongée dans la citadelle ottomane escarpée — labyrinthe de ruelles blanches, de cours cachées et de terrasses au-dessus de la baie.' },
        { t: 'Mosquée Ketchaoua', d: 'La mosquée emblématique au pied de la Casbah, restaurée dans toute sa splendeur ottomane et mauresque.' },
        { t: 'Palais des Raïs · Bastion 23', d: 'Un trio de palais du XVIe siècle restaurés en front de mer — les plus belles résidences ottomanes conservées d’Alger.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Alger', nights: '3 nuits', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Bou Saâda', nights: '1 nuit', hotels: 'Kerdada · El Qaid' },
      { city: 'Sétif', nights: '3 nuits', hotels: 'Park Mall · Bayazid' },
    ],
    includes: ['Vols intérieurs', 'Tous les repas', 'Véhicules 4x4 & chauffeurs', 'Hôtels 5 étoiles', 'Accompagnateur & guides', 'Entrées des sites UNESCO'],
  },

  {
    id: 'sahara-heart',
    num: '02',
    name: 'Cœur du Sahara',
    subtitle: 'Ruines romaines & pentapole mozabite',
    tagline: 'De la « Pompéi de l’Afrique » aux cités fortifiées du M’Zab — l’empire romain rencontre une culture saharienne vivante.',
    accent: '#8F5018', // saharan ochre (darkened for AA contrast)
    region: 'sahara',
    badges: ['8 jours / 7 nuits', 'Groupe privé', 'Tout compris · Sahara', '3 sites UNESCO'],
    hero: '/assets/img/timgad-theatre.jpg',
    heroLine: 'Une descente du nord romain vers le M’Zab intemporel — cinq cités fortifiées du désert dont l’architecture cubique inspira Le Corbusier.',
    overview: 'Le Programme 02 associe le monde romain monumental — Tipaza au bord de la mer et Timgad, la « Pompéi de l’Afrique » au plan parfaitement quadrillé — à la culture désertique spirituelle et vivante de Ghardaïa et de la pentapole mozabite. C’est le contraste le plus évocateur d’Algérie : la pierre impériale et le silence saharien. L’étape saharienne dispose de sa propre escorte de sécurité et de son cuisinier dédiés, avec des expériences en quad et à dos de chameau parmi les dunes, le tout dans le même service privé 5 étoiles.',
    route: [
      { place: 'Alger', note: 'Arrivée' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Timgad', note: 'UNESCO' },
      { place: 'Constantine', note: 'Hauts Plateaux' }, { place: 'Ghardaïa', note: 'Sahara' }, { place: 'M’Zab', note: 'UNESCO' },
      { place: 'Alger', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Jour 02 · Méditerranée romaine', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-1.jpg', stops: [
        { t: 'Port romain de Tipaza · UNESCO', d: 'Une cité portuaire romaine — forum, théâtre et basiliques dévalant vers la Méditerranée — élevée sur un ancien comptoir phénicien.' },
        { t: 'Mausolée royal de Maurétanie', d: 'Le monumental tombeau circulaire de la maison royale numido-maurétanienne, qui domine la côte depuis plus de deux mille ans.' },
        { t: 'Déjeuner méditerranéen en bord de mer', d: 'Cuisine du littoral au bord de l’eau avant le retour vers Alger.' },
      ] },
      { n: 3, label: 'Jour 03 · La Pompéi de l’Afrique', title: 'Timgad · UNESCO', img: '/assets/img/tours/batna-timgad-2.jpg', stops: [
        { t: 'Vol vers Constantine', d: 'Un vol matinal vers l’est en direction des Aurès, porte du sud romain.' },
        { t: 'Cité archéologique de Timgad · UNESCO', d: 'Fondée par Trajan en l’an 100 pour les vétérans de l’armée, Timgad est le manuel d’urbanisme romain — un quadrillage parfait que les sables sahariens ont préservé pendant des siècles.' },
        { t: 'Arc de Trajan & théâtre', d: 'L’arc de triomphe de 12 mètres, le théâtre de 3 500 places et le forum de la « Pompéi de l’Afrique ». Nuit à Constantine.' },
      ] },
      { n: 4, label: 'Jour 04 · Du nord au désert', title: 'De Constantine à Ghardaïa', img: '/assets/img/constantine-footbridge.jpg', stops: [
        { t: 'Pont de Sidi M’Cid & vieille ville', d: 'Vues matinales sur les gorges du Rhumel et le quartier perché de la ville des ponts.' },
        { t: 'Vol vers Ghardaïa', d: 'Un vol d’après-midi quelque 600 km plus au sud — du vert des hauteurs à l’ocre saharien.' },
        { t: 'Arrivée dans la vallée du M’Zab', d: 'Premier regard sur la pentapole fortifiée qui s’élève en terrasses au-dessus de l’oued bordé de palmiers.' },
      ] },
      { n: 5, label: 'Jour 05 · La pentapole', title: 'Vallée du M’Zab · UNESCO', img: '/assets/img/ghardaia-mzab-panorama.jpg', stops: [
        { t: 'Beni Isguen · la ville sainte · UNESCO', d: 'La cité fortifiée immaculée des Mozabites ibadites, que l’on visite avec un guide local, célèbre pour sa vente aux enchères en plein air au crépuscule.' },
        { t: 'Place du marché de Ghardaïa', d: 'Le cœur à arcades de la vallée — un foisonnement de tapis, de dattes et d’épices sous le minaret pyramidal.' },
        { t: 'Ateliers d’artisans', d: 'Tissage de tapis et travail de l’argent avec des artisans mozabites, dont l’architecture cubique inspira Le Corbusier.' },
      ] },
      { n: 6, label: 'Jour 06 · Dunes & oasis', title: 'Ghardaïa & retour', img: '/assets/img/sahara-dunes-tadrart.jpg', stops: [
        { t: 'Palmeraies & dunes', d: 'Jardins de palmiers-dattiers irrigués par d’anciennes foggaras, et dunes dorées à la lisière de la vallée.' },
        { t: 'Expérience quad & chameau', d: 'Chevauchée à travers les sables avec une escorte de sécurité saharienne dédiée et un cuisinier du désert qui veille au moindre détail.' },
        { t: 'Souk traditionnel · vol du soir', d: 'Une dernière flânerie dans le souk avant le vol du soir vers Alger.' },
      ] },
      { n: 7, label: 'Jour 07 · La capitale', title: 'Casbah d’Alger · UNESCO', img: '/assets/img/casbah-old-city-mosque.jpg', stops: [
        { t: 'Casbah d’Alger · UNESCO', d: 'Une journée entière dans la citadelle ottomane au-dessus de la baie — ruelles en escalier, palais et terrasses panoramiques.' },
        { t: 'Palais ottomans & musées', d: 'Dar Hassan Pacha, la mosquée Ketchaoua et les plus belles collections muséales de la capitale.' },
        { t: 'Monuments d’Alger', d: 'La boucle se referme parmi les grands monuments du front de mer d’« Alger la Blanche ».' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Alger', nights: '3 nuits', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Constantine', nights: '2 nuits', hotels: 'Golden Tulip · Marriott' },
      { city: 'Ghardaïa', nights: '2 nuits', hotels: 'Mizab · Bellevedere · Tajami' },
    ],
    includes: ['Vols intérieurs', 'Tous les repas', 'Véhicules 4x4 & chauffeurs', 'Balades en quad & à dos de chameau', 'Hôtels 5 & 4 étoiles', 'Sécurité & cuisinier au Sahara', 'Accompagnateur & guides', 'Entrées des sites UNESCO'],
  },

  {
    id: 'four-seasons',
    num: '03',
    name: 'Quatre Saisons',
    subtitle: 'Neige · Sahara · Méditerranée · Andalousie',
    tagline: 'La neige de l’Atlas, les dunes du Sahara, la côte méditerranéenne et la « Perle du Maghreb » andalouse — le tout en huit jours.',
    accent: '#7A4F9E', // andalusian violet
    region: 'andalusian',
    badges: ['8 jours / 7 nuits', 'Groupe privé', 'Tout compris', 'Quatre paysages'],
    hero: '/assets/img/oran-bay-santa-cruz.jpg',
    heroLine: 'Le circuit signature des contrastes — toucher la neige au matin et le sable du Sahara au cours du même voyage.',
    overview: 'Le Programme 03, c’est l’Algérie dans toute son étendue : les versants de cèdres de Chréa, le désert UNESCO du M’Zab, le panache méditerranéen d’Oran, puis les zelliges et jardins andalous de Tlemcen. C’est le plus spectaculaire des trois programmes — un pays qui refuse de n’être qu’une seule chose. Les activités de neige sont saisonnières (hiver de l’Atlas), et chaque étape conserve le même standard privé 5 étoiles tout compris, des vols intérieurs reliant les quatre mondes.',
    route: [
      { place: 'Alger', note: 'Arrivée' }, { place: 'Chréa', note: 'Neige' }, { place: 'Ghardaïa', note: 'Sahara' },
      { place: 'M’Zab', note: 'UNESCO' }, { place: 'Oran', note: 'Côte' }, { place: 'Tlemcen', note: 'Andalousie' },
      { place: 'Alger', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Jour 02 · Neige & mer', title: 'Neige de Chréa & Cherchell', img: '/assets/img/blida/blida-03.jpg', flag: 'Chréa & Cherchell have no dedicated photo yet — using a Blida-province image as a placeholder.', stops: [
        { t: 'Parc national de Chréa', d: 'Forêt de cèdres de l’Atlas et neige saisonnière au-dessus de Blida — ski et raquettes en vue de la mer, sur les terres des macaques de Barbarie.' },
        { t: 'Musée romain de Cherchell', d: 'L’une des plus riches collections de statuaire et de mosaïques romaines d’Afrique du Nord, dans l’ancien port phénico-romain d’Iol Caesarea.' },
        { t: 'Côte & plage de Cherchell', d: 'L’antique ville portuaire et son paisible rivage méditerranéen.' },
      ] },
      { n: 3, label: 'Jour 03 · Cap sur le Sahara', title: 'Ghardaïa · Sahara · UNESCO', img: '/assets/img/sahara-plateau-sunset.jpg', stops: [
        { t: 'Vol vers Ghardaïa', d: 'Vers le sud, le désert et la porte du M’Zab.' },
        { t: 'Vallée du M’Zab · UNESCO', d: 'Première exploration de la pentapole ocre étagée au-dessus de l’oued.' },
        { t: 'Coucher de soleil sur les dunes', d: 'L’heure dorée sur les sables sahariens.' },
      ] },
      { n: 4, label: 'Jour 04 · Patrimoine vivant', title: 'Culture mozabite', img: '/assets/img/ghardaia-ksar-lane.jpg', stops: [
        { t: 'Exploration des cités du M’Zab', d: 'Beni Isguen et El Atteuf — les ksour cubiques fortifiés qui inspirèrent l’architecture moderne de Le Corbusier.' },
        { t: 'Ateliers d’artisans', d: 'Tissage, poterie et argent avec les artisans locaux, au cœur de la vallée.' },
        { t: 'Balades à dos de chameau', d: 'Chevauchée parmi les palmeraies, à la lisière du désert.' },
      ] },
      { n: 5, label: 'Jour 05 · Panache méditerranéen', title: 'Oran la Méditerranéenne', img: '/assets/img/oran-bay-santa-cruz.jpg', stops: [
        { t: 'Fort de Santa Cruz & Murdjajo', d: 'La forteresse espagnole du XVIe siècle qui couronne le mont Murdjajo, avec des vues immenses sur la baie et la basilique en contrebas.' },
        { t: 'Place du 1er Novembre', d: 'La grande place au cœur d’« El Bahia » — la ville radieuse qui a donné au monde la musique raï.' },
        { t: 'Vieux quartier de Sidi El Houari', d: 'Le quartier historique du front de mer, où l’Oran ottomane, espagnole et française se superposent.' },
      ] },
      { n: 6, label: 'Jour 06 · La Perle du Maghreb', title: 'Tlemcen l’Andalouse', img: '/assets/img/tlemcen-andalusian-arches.jpg', stops: [
        { t: 'Grande Mosquée de Tlemcen', d: 'Un chef-d’œuvre almoravide commencé en 1082 : son mihrab sculpté et sa coupole nervurée comptent parmi les plus beaux témoignages de l’art andalou-maghrébin.' },
        { t: 'Ruines de Mansourah', d: 'La ville de siège mérinide de 1302 — un minaret solitaire et un kilomètre de remparts au sein du parc national de Tlemcen.' },
        { t: 'Palais El Mechouar & jardins', d: 'La citadelle royale zianide restaurée et les jardins andalous de la « Perle du Maghreb ».' },
      ] },
      { n: 7, label: 'Jour 07 · La capitale', title: 'Casbah d’Alger · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Vol vers Alger · Casbah · UNESCO', d: 'Un vol matinal vers le nord, puis une visite complète de la citadelle ottomane au-dessus de la baie.' },
        { t: 'Architecture ottomane', d: 'Palais, mosquées et ruelles blanches en escalier de la vieille ville.' },
        { t: 'Musées d’Alger', d: 'Les grands rendez-vous culturels de la capitale pour clore le circuit des quatre saisons.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Alger', nights: '3 nuits', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Ghardaïa', nights: '2 nuits', hotels: 'Mizab · Bellevedere · Tajami' },
      { city: 'Oran', nights: '2 nuits', hotels: 'Royal Oran · Bay Managed · Azure Routan' },
    ],
    includes: ['Vols intérieurs', 'Tous les repas', 'Véhicules 4x4 & chauffeurs', 'Activités de neige (saisonnières)', 'Balades en quad & à dos de chameau', 'Hôtels 5 & 4 étoiles', 'Sécurité & cuisinier au Sahara', 'Accompagnateur & guides'],
  },
];

// ---- Textes de la page (FR). {programmes} et {price} sont des marqueurs
// remplis par le composant ; `prog` regroupe les libellés par programme
// partagés par toutes les langues.
export const LUX_COPY = {
  seoTitle: 'Algérie de luxe — Collection 5 étoiles | Algeria Compass',
  seoDescription: 'Trois circuits de luxe tout compris de 8 jours en Algérie : ruines romaines, villes UNESCO, Sahara. Vols intérieurs, hôtels 5 étoiles, 4x4 privés. Dès €1,615.',
  keywords: ['voyage de luxe Algérie', 'Algérie 5 étoiles', 'circuit privé Algérie', 'Sahara de luxe Algérie', 'séjour de luxe en Algérie', 'circuits UNESCO Algérie', 'circuit tout compris Algérie'],
  ogImage: '/assets/img/tours/djemila-1.jpg',
  ogImageAlt: 'Les ruines romaines UNESCO de Djemila — circuits de luxe Algeria Compass',
  waPage: 'Bonjour Algeria Compass, je souhaite me renseigner sur vos circuits de luxe de la Collection 5 étoiles.',
  heroAlt: 'Le Sahara algérien à l’heure dorée',
  eyebrow: 'La Collection 5 étoiles · Algérie',
  h1a: 'L’Algérie de luxe,',
  h1b: 'rien que pour vous.',
  heroLine: 'Trois voyages privés à travers un pays que si peu de voyageurs connaissent.',
  ctaExplore: 'Découvrir les voyages',
  ctaSpecialist: 'Parler à un spécialiste',
  stats: [
    { v: '3', l: 'Voyages signature' },
    { v: '8', l: 'Jours · 7 nuits' },
    { v: 'Tout compris', l: 'Vols · hôtels · repas' },
    { v: '€1,615', l: 'À partir de / personne' },
  ],
  pillarsOverline: 'Le standard Algeria Compass',
  pillarsH2: 'Ce qui fait le cinq étoiles',
  pillars: [
    { icon: 'shield', t: 'Opérateur algérien agréé', d: 'Un voyage orchestré sur place par des Algériens — chaque permis, chaque route, chaque porte gérés dans le pays.' },
    { icon: 'gem', t: 'Réellement tout compris', d: 'Vols intérieurs, tous les repas, hôtels 5 étoiles, flotte privée de 4x4, guides et entrées UNESCO — un seul prix.' },
    { icon: 'guide', t: 'Guides privés multilingues', d: 'Un accompagnateur dédié qui ne quitte jamais votre groupe, épaulé par des guides locaux experts sur chaque site.' },
    { icon: 'visa', t: 'Assistance visa incluse', d: 'Nous préparons votre dossier de visa dans le cadre de la réservation.' },
    { icon: 'calendar', t: 'Annulation gratuite', d: 'Annulation gratuite jusqu’à cinq jours avant votre date de départ.' },
    { icon: 'key', t: 'Privé, jamais standardisé', d: 'Votre groupe, et lui seul — réservation sur demande, confirmée par écrit avant tout paiement.' },
  ],
  reserveOverline: 'Réservez votre voyage',
  reserveH2: 'Commencez votre voyage Collection 5 étoiles',
  reserveLead: 'Dites-nous quel programme vous attire — {programmes} — vos dates et la taille de votre groupe. Nous confirmons par écrit la disponibilité, les vols intérieurs et votre prix final par personne, généralement en quelques heures.',
  orWord: 'ou',
  ptNoPay: 'Privé, réservation sur demande — aucune obligation de paiement pour vous renseigner',
  ptFrom: 'À partir de {price} par personne, tout compris',
  ptCancel: 'Annulation gratuite jusqu’à 5 jours avant le départ',
  ptPrefer: 'Vous préférez échanger de vive voix ?',
  ptWaLink: 'Écrivez-nous sur WhatsApp',
  ptOrEmail: 'ou par e-mail',
  formH3: 'Demandez votre voyage privé',
  crumbHome: 'Accueil',
  crumbLabel: 'Collection de luxe 5 étoiles',
  schemaTouristTypes: ['Voyageurs de luxe', 'Groupes privés'],
  schemaDay: 'Jour',
  prog: {
    imgAltSuffix: 'circuit de luxe en Algérie',
    programmeWord: 'Programme',
    routeAria: 'L’itinéraire',
    itineraryEyebrow: 'L’itinéraire · 8 jours',
    dayByDay: 'Jour par jour',
    dayWord: 'Jour',
    stayEyebrow: 'Vos hébergements · 5 étoiles',
    stayNote: 'Les établissements précis sont confirmés par écrit avec votre réservation, sous réserve de disponibilité.',
    inclEyebrow: 'Tout compris',
    cancelLine: 'Annulation gratuite jusqu’à 5 jours avant le départ',
    pricingEyebrow: 'Tarifs · Par personne · EUR',
    pricingH3: 'Privé, tout compris',
    bestValue: 'Meilleur tarif',
    fromWord: 'À partir de',
    perPerson: 'par personne',
    reserveBtn: 'Réserver ce voyage',
    specialistBtn: 'Parler à un spécialiste',
    waReserve: 'Bonjour Algeria Compass, je souhaite réserver le voyage 5 étoiles « {name} » (Programme {num}).',
  },
};

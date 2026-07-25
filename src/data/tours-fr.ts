// French translations for the tour catalogue.
//
// Every tour has a CARD translation (title / duration / hook) so the French
// index at /fr/circuits/ is fully French. Tours that also carry `full: true`
// have a complete French detail page at /fr/circuits/<id>/; the rest link to
// the English page from the French index, which is honest rather than serving
// a half-translated page.
//
// The English catalogue in tours.json stays the single source of truth for
// prices, images, wilayas and structure — this file only carries language.

export interface TourFr {
  title: string;
  duration: string;
  hook: string;
  full?: boolean;
  overview?: string;
  highlights?: string[];
  itinerary?: { day: number; title: string; body: string }[];
  includes?: string[];
  excludes?: string[];
  goodToKnow?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
  seoTitle?: string;
  seoDescription?: string;
}

export const TOURS_FR: Record<string, TourFr> = {

  'djanet-sahara-safari': {
    title: 'Safari saharien à Djanet — 5 jours dans la Tadrart Rouge',
    duration: '5 jours · 4 nuits',
    hook: "Cinq jours au cœur du Sahara algérien autour de Djanet — grès rouge de la Tadrart, dunes dorées, art rupestre préhistorique et nuits sous les étoiles.",
    full: true,
    seoTitle: 'Circuit Sahara Djanet 5 jours — Tadrart Rouge',
    seoDescription: "Circuit privé de 5 jours dans le Sahara algérien au départ de Djanet : Tadrart Rouge, dunes, art rupestre et bivouacs, avec une équipe touarègue locale.",
    overview: "C'est le Sahara tel qu'on l'imagine encore rarement : la Tadrart Rouge, un dédale de grès orange sculpté par le vent, des arches naturelles, des canyons et des dunes qui viennent buter contre la roche noire. Au départ de Djanet, oasis touarègue du sud-est algérien, vous partez en 4×4 avec une équipe locale pour quatre nuits de bivouac. Les journées alternent pistes, marches courtes vers des sites d'art rupestre vieux de plusieurs millénaires, et longues pauses photographiques à la lumière du soir. Les nuits se passent au camp, autour d'un feu et d'un thé, sans lumière ni réseau.",
    highlights: [
      'La Tadrart Rouge et ses canyons de grès orange',
      "Des sites d'art rupestre préhistorique du Tassili n'Ajjer",
      'Les grandes dunes du Sahara algérien au coucher du soleil',
      'Quatre nuits de bivouac sous un ciel sans pollution lumineuse',
      'Une équipe touarègue locale : chauffeur, guide et cuisinier',
      'Pension complète et matériel de campement fournis',
    ],
    itinerary: [
      { day: 1, title: "Arrivée et entrée dans le désert", body: "Accueil par votre équipe à Djanet, puis départ en 4×4 vers le désert. Coucher de soleil sur les dunes et première nuit au bivouac." },
      { day: 2, title: 'La Tadrart Rouge', body: "Traversée des vallées de roche rouge et de sable de la Tadrart, avec arrêts photo, avant le coucher du soleil et la nuit au camp." },
      { day: 3, title: 'Arches, gravures et grandes dunes', body: "Journée entre arches naturelles, sites d'art rupestre et cordons dunaires, au rythme de la lumière et des découvertes." },
      { day: 4, title: 'Retour vers Djanet', body: "Dernière matinée dans le désert et route de retour vers l'oasis, avec un dernier bivouac ou une nuit à Djanet." },
      { day: 5, title: 'Départ', body: "Temps libre à Djanet selon l'horaire de votre vol, puis transfert vers l'aéroport." },
    ],
    includes: ['Accueil et transfert à Djanet', '4×4 tout au long du circuit', 'Chauffeur professionnel du désert', 'Guide touareg local', 'Pension complète', 'Matériel de campement', 'Eau en bouteille'],
    excludes: ['Vols internationaux et intérieurs', 'Frais de visa', 'Assurance voyage', 'Boissons hors eau', 'Pourboires'],
    goodToKnow: [
      { label: 'Meilleure saison', value: 'Novembre à février uniquement' },
      { label: 'Nuits', value: 'Froides — prévoyez de vraies couches chaudes' },
      { label: 'Réseau', value: 'Aucun dans le désert' },
      { label: 'Accès', value: 'Vol Alger–Djanet, puis 4×4' },
    ],
    faqs: [
      { q: 'Quand ce circuit est-il possible ?', a: "De novembre à février. Au-delà, la chaleur rend les expéditions dans le grand sud dangereuses et elles ne sont pas organisées." },
      { q: 'Comment se rend-on à Djanet ?', a: "En avion depuis Alger, avec Air Algérie ou Tassili Airlines. Les vols vers le sud sont peu fréquents : il faut réserver tôt, surtout en saison." },
      { q: 'Où dort-on ?', a: "En bivouac dans le désert, avec tentes, matelas et couvertures fournis. C'est confortable mais rustique : ni électricité, ni douche, ni réseau." },
      { q: 'Faut-il une bonne condition physique ?', a: "Non. L'essentiel se fait en 4×4, avec de courtes marches sur sable et rocher. Il faut surtout supporter des journées longues et des nuits fraîches." },
    ],
  },

  'ghardaia-guided-tour': {
    title: "Ghardaïa — 3 jours dans la vallée du M'Zab",
    duration: '3 jours · 2 nuits',
    hook: "Trois jours dans la vallée du M'Zab — les villes fortifiées de Ghardaïa et Beni Isguen, les foggaras, les palmeraies et une soirée en 4×4 dans le désert.",
    full: true,
    seoTitle: "Circuit Ghardaïa 3 jours — Vallée du M'Zab",
    seoDescription: "Circuit privé de 3 jours à Ghardaïa et dans la vallée du M'Zab, classée UNESCO : les cinq cités ibadites, les foggaras, les palmeraies et une soirée au désert.",
    overview: "La vallée du M'Zab est l'un des ensembles urbains les plus remarquables du monde islamique : cinq villes fortifiées bâties à partir du XIe siècle par la communauté ibadite mozabite, empilées en ocre, blanc et bleu sur des collines du Sahara. Leur logique de construction — mosquée au sommet, maisons en cercles concentriques, palmeraie en contrebas, système d'eau partagé — a fasciné Le Corbusier au point qu'il y est revenu plusieurs fois. Trois jours suffisent pour comprendre le lieu de l'intérieur, avec un guide qui en connaît les usages et les codes.",
    highlights: [
      'Ghardaïa et son marché en amphithéâtre',
      'Beni Isguen, la cité sainte, visitée avec un guide local',
      'Les foggaras, système millénaire de partage de l\'eau',
      'Les palmeraies et les maisons d\'été mozabites',
      'Une soirée en 4×4 dans le désert sous les étoiles',
      'Artisanat du M\'Zab : tapis, laine et cuivre',
    ],
    itinerary: [
      { day: 1, title: 'Arrivée à Ghardaïa', body: "Accueil et installation, puis première approche de Ghardaïa : les ruelles en pente, la place du marché et le point de vue sur la vallée au coucher du soleil." },
      { day: 2, title: "Les cités du M'Zab", body: "Journée entre Beni Isguen, El Atteuf et Melika : mosquées, remparts, cimetières et palmeraies, avec les explications d'un guide mozabite." },
      { day: 3, title: 'Palmeraies, foggaras et désert', body: "Matinée dans les jardins et le système hydraulique de la vallée, puis sortie en 4×4 dans le désert avant le départ." },
    ],
    includes: ['Transferts aéroport à Ghardaïa', 'Hébergement 2 nuits', 'Guide privé licencié', 'Guide local pour Beni Isguen', 'Transport privé', 'Sortie 4×4 dans le désert', 'Petits déjeuners'],
    excludes: ['Vols', 'Frais de visa', 'Assurance voyage', 'Déjeuners et dîners', 'Pourboires'],
    goodToKnow: [
      { label: 'Meilleure saison', value: 'Octobre à avril' },
      { label: 'Tenue', value: 'Vallée conservatrice — tenue couvrante' },
      { label: 'Photographie', value: 'Restreinte à Beni Isguen — suivez votre guide' },
      { label: 'Accès', value: 'Vol Alger–Ghardaïa, environ 1h' },
    ],
    faqs: [
      { q: "Pourquoi la vallée du M'Zab est-elle classée à l'UNESCO ?", a: "Pour l'exceptionnelle cohérence de son urbanisme : cinq cités du XIe siècle conçues comme un système complet — défense, habitat, eau, palmeraie — encore habité et fonctionnel aujourd'hui." },
      { q: 'Peut-on visiter Beni Isguen librement ?', a: "Non. La cité sainte se visite avec un guide local mandaté, à des horaires précis, et la photographie y est restreinte. C'est une règle de la communauté, pas une formalité touristique." },
      { q: 'Comment se rendre à Ghardaïa ?', a: "Le plus simple est le vol depuis Alger, environ une heure. La route est possible mais longue — comptez une journée complète." },
      { q: 'Quelle tenue adopter ?', a: "Couvrante pour tous : épaules et genoux couverts, vêtements amples. La vallée est nettement plus conservatrice que la côte." },
    ],
  },

  'timimoun-desert-escape': {
    title: 'Timimoun — 5 jours dans l\'oasis rouge du Gourara',
    duration: '5 jours · 4 nuits',
    hook: "Cinq jours dans l'oasis rouge de Timimoun — ksour et palmeraies, foggaras anciennes, grandes dunes et une nuit au campement du désert.",
    full: true,
    seoTitle: 'Circuit Timimoun 5 jours — Oasis rouge du Gourara',
    seoDescription: "Circuit privé de 5 jours à Timimoun, l'oasis rouge du Gourara : architecture soudanaise, ksour, foggaras, palmeraies, grandes dunes et bivouac.",
    overview: "Timimoun porte bien son surnom d'oasis rouge : l'architecture y est en banco ocre, de style soudanais, et la ville domine une sebkha et une immense palmeraie. Autour d'elle, le Gourara aligne des dizaines de ksour, villages fortifiés reliés par des foggaras — ces galeries drainantes creusées à la main qui amènent l'eau depuis la nappe. C'est une région d'oasis habitées plutôt qu'un désert vide, et c'est ce qui en fait la richesse. Le circuit alterne villages, jardins, art de vivre saharien et sorties dans les dunes du Grand Erg Occidental.",
    highlights: [
      'Timimoun et son architecture rouge de style soudanais',
      'Les ksour du Gourara et leurs ruelles couvertes',
      'Les foggaras, patrimoine hydraulique vivant',
      'Les grandes dunes du Grand Erg Occidental',
      "L'Ahellil, poésie chantée classée à l'UNESCO",
      'Une nuit sous tente au campement du désert',
    ],
    itinerary: [
      { day: 1, title: 'Arrivée à Timimoun', body: "Accueil et installation, premier tour de la ville rouge et coucher de soleil sur la palmeraie et la sebkha." },
      { day: 2, title: 'Les ksour du Gourara', body: "Journée dans les villages fortifiés autour de l'oasis : ruelles couvertes, mosquées de terre et vie des jardins." },
      { day: 3, title: 'Foggaras et palmeraies', body: "Découverte du système des foggaras et des jardins qu'elles irriguent, avec les hommes qui les entretiennent encore." },
      { day: 4, title: 'Le Grand Erg et le bivouac', body: "Sortie en 4×4 vers les grandes dunes, coucher de soleil et nuit au campement du désert." },
      { day: 5, title: 'Départ', body: "Retour à Timimoun et transfert vers l'aéroport." },
    ],
    includes: ['Transferts aéroport', 'Hébergement 4 nuits', 'Guide privé licencié', 'Transport 4×4', 'Sortie dans les dunes et bivouac', 'Petits déjeuners'],
    excludes: ['Vols', 'Frais de visa', 'Assurance voyage', 'Déjeuners et dîners', 'Pourboires'],
    goodToKnow: [
      { label: 'Meilleure saison', value: 'Octobre à avril' },
      { label: 'Nuits', value: 'Fraîches en hiver — prévoyez des couches' },
      { label: 'Rythme', value: 'Détendu, avec des routes courtes' },
      { label: 'Accès', value: 'Vol depuis Alger' },
    ],
    faqs: [
      { q: "Qu'est-ce qu'une foggara ?", a: "Une galerie souterraine creusée à la main qui amène l'eau de la nappe jusqu'aux jardins par simple gravité, puis la répartit entre les familles selon un partage codifié depuis des siècles." },
      { q: "Pourquoi Timimoun est-elle rouge ?", a: "Les constructions sont en banco — terre crue mêlée de paille — d'une teinte ocre-rouge caractéristique, dans un style dit soudanais que l'on retrouve du Sahel au Sahara." },
      { q: "Qu'est-ce que l'Ahellil ?", a: "Une poésie chantée collective du Gourara, inscrite par l'UNESCO au patrimoine culturel immatériel de l'humanité en 2008." },
      { q: 'Est-ce accessible en famille ?', a: "Oui. Le rythme est doux, les distances courtes et l'hospitalité des oasis rend le voyage facile avec des adolescents." },
    ],
  },

  'algeria-cultural-tour': {
    title: 'Circuit culturel en Algérie — 5 jours',
    duration: '5 jours · 4 nuits',
    hook: "Cinq jours au cœur de l'Algérie — la Casbah d'Alger classée UNESCO, la côte romaine de Tipaza et la vallée du M'Zab, avec un guide privé licencié.",
    full: true,
    seoTitle: 'Circuit culturel Algérie 5 jours — Alger, Tipaza, M\'Zab',
    seoDescription: "Circuit privé de 5 jours en Algérie : la Casbah d'Alger, les ruines romaines de Tipaza et Cherchell, et la vallée du M'Zab, avec guide licencié.",
    overview: "C'est l'Algérie en miniature : la capitale blanche, la côte romaine et le désert, en cinq jours sans course. Vous parcourez la Casbah d'Alger, inscrite à l'UNESCO, puis suivez la Méditerranée jusqu'aux ruines de Tipaza et au musée de Cherchell, avant de rejoindre Ghardaïa par avion pour entrer dans la vallée du M'Zab — cinq cités-oasis fortifiées bâties il y a mille ans par les Mozabites ibadites. Côte, culture et Sahara, avec un guide privé et une vraie cuisine algérienne en chemin.",
    highlights: [
      "La Casbah d'Alger, patrimoine mondial de l'UNESCO",
      'Tipaza, cité romaine au bord de la Méditerranée',
      'Le musée archéologique de Cherchell',
      "La vallée du M'Zab et ses cinq cités ibadites",
      'Guide privé licencié pendant tout le séjour',
      "Cuisine algérienne quotidienne, loin des menus touristiques",
    ],
    itinerary: [
      { day: 1, title: 'Arrivée à Alger', body: "Accueil à l'aéroport Houari Boumediene et installation. Première découverte de la baie et du front de mer." },
      { day: 2, title: 'Alger et la Casbah', body: "Journée dans la capitale : la Casbah, les boulevards coloniaux, la Grande Mosquée et les points de vue sur la baie." },
      { day: 3, title: 'Tipaza et Cherchell', body: "Route vers l'ouest le long de la côte : les ruines romaines de Tipaza en bord de mer, le Mausolée royal de Maurétanie et le musée de Cherchell." },
      { day: 4, title: "Vol vers Ghardaïa et le M'Zab", body: "Vol vers le sud et entrée dans la vallée du M'Zab : Ghardaïa, son marché et ses ruelles en amphithéâtre." },
      { day: 5, title: 'Beni Isguen et départ', body: "Visite de la cité sainte de Beni Isguen avec un guide local, puis retour et départ." },
    ],
    includes: ['Tous les transferts', 'Hébergement 4 nuits', 'Guide privé licencié', 'Transport privé', 'Entrées des sites', 'Petits déjeuners'],
    excludes: ['Vols internationaux', 'Vol intérieur Alger–Ghardaïa', 'Frais de visa', 'Assurance voyage', 'Déjeuners et dîners', 'Pourboires'],
    goodToKnow: [
      { label: 'Meilleure saison', value: 'Octobre à avril' },
      { label: 'Rythme', value: 'Modéré, avec du temps sur chaque site' },
      { label: 'Tenue', value: 'Couvrante dans le M\'Zab' },
      { label: 'Départ', value: 'Alger — aéroport Houari Boumediene' },
    ],
    faqs: [
      { q: 'Ce circuit convient-il pour une première visite ?', a: "Oui, c'est le meilleur format pour un premier voyage : il donne les trois visages du pays — capitale, héritage romain et Sahara — sans distances excessives." },
      { q: 'Le vol intérieur est-il inclus ?', a: "Non, il est réservé séparément. Nous nous chargeons de la réservation et vous indiquons les horaires qui fonctionnent avec le programme." },
      { q: 'Faut-il un visa ?', a: "Oui, pour la quasi-totalité des nationalités, à obtenir avant le départ auprès d'un consulat algérien. Nous fournissons l'invitation et le programme confirmé demandés." },
      { q: 'Peut-on adapter le circuit ?', a: "Oui. Tous nos circuits sont privés : durée, rythme et étapes s'ajustent à votre calendrier." },
    ],
  },

  'algeria-tour': {
    title: "Algérie complète — grand circuit de 10 jours",
    duration: '10 jours · 9 nuits',
    hook: "Dix jours à travers l'Algérie — Alger et sa Casbah, la côte romaine, l'est et ses cités antiques, et le Sahara. Le tour complet du pays.",
    full: true,
    seoTitle: 'Grand circuit Algérie 10 jours — Nord, Est et Sahara',
    seoDescription: "Grand circuit privé de 10 jours en Algérie : Alger, la côte romaine de Tipaza, Constantine et l'est antique, puis le Sahara. Guide licencié.",
    overview: "Dix jours, c'est la première durée qui permet de relier le nord et le désert sans les traiter en coup de vent. Ce grand circuit part d'Alger et de sa Casbah, suit la côte romaine jusqu'à Tipaza et Cherchell, remonte vers l'est et ses cités antiques — Djémila, Timgad — et la ville-pont de Constantine, puis bascule vers le sud pour l'expérience saharienne. C'est le format que nous recommandons à qui vient de loin et ne reviendra pas de sitôt.",
    highlights: [
      "La Casbah d'Alger et la baie",
      'Tipaza et Cherchell, la côte romaine',
      'Djémila et Timgad, cités romaines classées UNESCO',
      'Constantine, la ville des ponts sur ses gorges',
      'Une étape saharienne complète',
      'Guide privé licencié du premier au dernier jour',
    ],
    itinerary: [
      { day: 1, title: 'Arrivée à Alger', body: "Accueil et installation dans la capitale, premier contact avec la baie et le front de mer." },
      { day: 2, title: 'Alger et la Casbah', body: "La Casbah classée UNESCO, les boulevards coloniaux, la Grande Mosquée et les musées." },
      { day: 3, title: 'Tipaza et Cherchell', body: "La côte romaine à l'ouest d'Alger : ruines en bord de mer, mausolée royal et musée de Cherchell." },
      { day: 4, title: "Vers l'est", body: "Route vers l'est du pays à travers les hauts plateaux, avec les paysages de la Kabylie et des plaines céréalières." },
      { day: 5, title: 'Djémila', body: "La cité romaine de Djémila dans son cirque de collines — l'un des sites les mieux préservés d'Afrique du Nord." },
      { day: 6, title: 'Constantine', body: "La ville des ponts : les gorges du Rhumel, le palais Ahmed Bey, le musée de Cirta et la vieille ville." },
      { day: 7, title: 'Timgad', body: "Timgad, colonie romaine fondée par Trajan et la cité en damier la plus complète qui subsiste." },
      { day: 8, title: 'Vers le Sahara', body: "Descente vers le sud et entrée dans le monde des oasis." },
      { day: 9, title: 'Journée saharienne', body: "Palmeraies, ksour et dunes, avec une soirée dans le désert." },
      { day: 10, title: 'Retour et départ', body: "Retour vers Alger et transfert aéroport." },
    ],
    includes: ['Tous les transferts', 'Hébergement 9 nuits', 'Guide privé licencié', 'Transport privé', 'Entrées des sites', 'Petits déjeuners'],
    excludes: ['Vols internationaux et intérieurs', 'Frais de visa', 'Assurance voyage', 'Déjeuners et dîners', 'Pourboires'],
    goodToKnow: [
      { label: 'Meilleure saison', value: 'Octobre à avril' },
      { label: 'Rythme', value: 'Soutenu mais réaliste' },
      { label: 'Distances', value: 'Longues — un vol intérieur est prévu' },
      { label: 'Départ', value: 'Alger' },
    ],
    faqs: [
      { q: 'Dix jours suffisent-ils pour voir l\'Algérie ?', a: "Pour l'essentiel, oui. C'est la première durée qui permet de combiner le nord et un vrai passage au Sahara sans passer ses journées sur la route." },
      { q: 'Y a-t-il beaucoup de route ?', a: "L'Algérie est le plus grand pays d'Afrique et les distances sont réelles. Le programme intègre un vol intérieur pour éviter les trajets les plus longs." },
      { q: 'Le circuit est-il privé ?', a: "Oui, entièrement : votre guide, votre véhicule, votre rythme. Rien n'est mutualisé avec d'autres groupes." },
      { q: 'Peut-on partir à deux ?', a: "Oui. La plupart de nos départs se font en couple ou en petit groupe familial." },
    ],
  },

  'oran-mostaganem-tlemcen': {
    title: "L'Ouest algérien : Oran, Mostaganem et Tlemcen — 5 jours",
    duration: '5 jours · 4 nuits',
    hook: "Cinq jours dans l'ouest algérien — le port d'Oran, les plages de Mostaganem et l'héritage andalou de Tlemcen : mosquée, palais et cascades.",
    full: true,
    seoTitle: "Circuit Ouest algérien 5 jours — Oran et Tlemcen",
    seoDescription: "Circuit privé de 5 jours dans l'ouest de l'Algérie : Oran et Santa Cruz, les plages de Mostaganem et l'héritage andalou de Tlemcen.",
    overview: "L'ouest algérien est la part andalouse du pays. Oran, deuxième ville et grand port, mêle architecture espagnole et française sous le fort de Santa Cruz, et a donné le raï au monde. Mostaganem aligne des plages et un vieux quartier ottoman au-dessus de la mer. Et Tlemcen, capitale culturelle de l'Algérie andalouse, conserve la Grande Mosquée, le minaret de Mansourah, le palais El Mechouar, le sanctuaire de Sidi Boumediene et une tradition musicale gharnati toujours vivante.",
    highlights: [
      'Oran, Santa Cruz et la baie',
      'La place du 1er Novembre et le centre historique',
      'Les plages et le vieux Tigditt de Mostaganem',
      'La Grande Mosquée de Tlemcen',
      'Mansourah, El Mechouar et Sidi Boumediene',
      "Les cascades d'El Ourit et la musique gharnati",
    ],
    itinerary: [
      { day: 1, title: 'Arrivée à Oran', body: "Accueil et installation, première découverte du front de mer et du centre." },
      { day: 2, title: 'Oran', body: "Le fort de Santa Cruz, la vieille ville, le port et la ville espagnole et française." },
      { day: 3, title: 'Mostaganem', body: "Route vers l'est le long de la côte : plages, vieux quartier de Tigditt et Bordj Ettork." },
      { day: 4, title: 'Tlemcen', body: "Journée andalouse : Grande Mosquée, Mansourah, El Mechouar et Sidi Boumediene." },
      { day: 5, title: "El Ourit et départ", body: "Les cascades d'El Ourit et le plateau de Lalla Setti avant le transfert." },
    ],
    includes: ['Transferts', 'Hébergement 4 nuits', 'Guide privé licencié', 'Transport privé', 'Entrées des sites', 'Petits déjeuners'],
    excludes: ['Vols', 'Frais de visa', 'Assurance voyage', 'Déjeuners et dîners', 'Pourboires'],
    goodToKnow: [
      { label: 'Meilleure saison', value: 'Avril à juin, septembre à novembre' },
      { label: 'Rythme', value: 'Modéré' },
      { label: 'Départ', value: 'Oran — aéroport Ahmed Ben Bella' },
      { label: 'Musique', value: 'Raï à Oran, gharnati à Tlemcen' },
    ],
    faqs: [
      { q: 'Pourquoi visiter Tlemcen ?', a: "C'est le cœur de l'héritage andalou en Algérie : mosquées, palais et sanctuaires du XIIe au XIVe siècle, dans une ville qui a conservé sa musique et son artisanat." },
      { q: 'Peut-on relier ce circuit à Alger ?', a: "Oui. Oran est reliée à Alger par vol, train et autoroute — nous ajustons le programme selon votre point d'arrivée." },
      { q: 'Est-ce une région balnéaire ?', a: "La côte est belle et les plages de Mostaganem sont réelles, mais ce circuit reste culturel avant tout." },
      { q: "Qu'est-ce que le gharnati ?", a: "Une école de musique arabo-andalouse héritée de Grenade, dont Tlemcen est le foyer principal en Algérie." },
    ],
  },

  'algeria-through-time-and-tradition': {
    title: 'Algérie romaine — Tipaza, Djémila et Timgad (3 jours)',
    duration: '3 jours · 2 nuits',
    hook: "Trois jours à travers le plus bel héritage romain d'Algérie — les ruines maritimes de Tipaza et Cherchell, Djémila à flanc de colline et le damier de Timgad.",
    full: true,
    seoTitle: 'Circuit Algérie romaine 3 jours — Tipaza, Djémila, Timgad',
    seoDescription: "Circuit privé de 3 jours sur les cités romaines d'Algérie : Tipaza et Cherchell au bord de la mer, Djémila dans ses collines et Timgad.",
    overview: "L'Algérie conserve les cités romaines les mieux préservées du monde méditerranéen, précisément parce que le tourisme de masse n'y est jamais arrivé. En trois jours, ce circuit relie les trois plus belles : Tipaza, posée sur le rivage, avec le Mausolée royal de Maurétanie au-dessus ; Djémila, dans un cirque de collines de l'est, dont le forum et les mosaïques sont d'une conservation rare ; et Timgad, colonie fondée par Trajan vers 100 après J.-C., la cité en damier la plus complète qui subsiste, avec son arc, son théâtre et sa bibliothèque.",
    highlights: [
      'Tipaza, cité romaine en bord de Méditerranée',
      'Le Mausolée royal de Maurétanie',
      'Le musée archéologique de Cherchell',
      'Djémila et son forum dans les collines',
      "Timgad, l'arc de Trajan et la bibliothèque",
      'Des sites souvent déserts, même en pleine saison',
    ],
    itinerary: [
      { day: 1, title: 'Tipaza et Cherchell', body: "Départ d'Alger vers la côte ouest : les ruines de Tipaza face à la mer, le Mausolée royal et le musée de Cherchell." },
      { day: 2, title: 'Djémila', body: "Route vers l'est et journée à Djémila : le forum, les temples, les maisons et les mosaïques du musée." },
      { day: 3, title: 'Timgad', body: "Timgad et son plan en damier intact : arc de Trajan, théâtre, thermes et bibliothèque, avant le retour." },
    ],
    includes: ['Transferts', 'Hébergement 2 nuits', 'Guide privé licencié', 'Transport privé', 'Entrées des sites', 'Petits déjeuners'],
    excludes: ['Vols', 'Frais de visa', 'Assurance voyage', 'Déjeuners et dîners', 'Pourboires'],
    goodToKnow: [
      { label: 'Meilleure saison', value: 'Mars à juin, septembre à novembre' },
      { label: 'Marche', value: 'Sites étendus — bonnes chaussures' },
      { label: 'Ombre', value: 'Rare — chapeau et eau indispensables' },
      { label: 'Départ', value: 'Alger' },
    ],
    faqs: [
      { q: 'Quelle est la plus impressionnante des trois ?', a: "Timgad pour l'intégralité de son plan urbain, Djémila pour son cadre et ses mosaïques, Tipaza pour la mer. Les trois ensemble donnent la mesure de l'Afrique romaine." },
      { q: 'Y a-t-il beaucoup de visiteurs ?', a: "Très peu. Il est courant de parcourir Timgad ou Djémila en croisant une poignée de personnes, ce qui est devenu introuvable ailleurs en Méditerranée." },
      { q: 'Les sites sont-ils aménagés ?', a: "Sommairement. Il y a des musées de site et des gardiens, mais peu de signalétique : un guide change complètement la visite." },
      { q: 'Peut-on faire les trois en trois jours ?', a: "Oui, mais les distances sont réelles. Le programme est dense et suppose des départs matinaux." },
    ],
  },

  'the-beauty-of-algeria': {
    title: 'Constantine et Timgad — 2 jours',
    duration: '2 jours · 1 nuit',
    hook: "Deux jours dans l'est algérien — la ville des ponts suspendue au-dessus des gorges du Rhumel, et la cité romaine de Timgad.",
    full: true,
    seoTitle: 'Circuit Constantine et Timgad — 2 jours dans l\'Est',
    seoDescription: "Circuit privé de 2 jours dans l'est algérien : Constantine et les gorges du Rhumel, puis la cité romaine de Timgad classée à l'UNESCO.",
    overview: "Deux jours pour l'essentiel de l'est algérien. Constantine est une ville impossible : bâtie sur un rocher fendu par les gorges du Rhumel, recousue par une série de ponts spectaculaires, et riche d'un passé qui remonte à Cirta, capitale numide. À une heure et demie de là, Timgad déploie dans la plaine le damier romain le plus complet qui subsiste. Le contraste entre la ville verticale et la cité géométrique fait tout l'intérêt de ce format court.",
    highlights: [
      'Les gorges du Rhumel et les ponts de Constantine',
      'Le palais Ahmed Bey',
      'Le musée de Cirta',
      "Timgad, l'arc de Trajan et le théâtre",
      'La musique malouf de Constantine',
      'Un format court, idéal en complément',
    ],
    itinerary: [
      { day: 1, title: 'Constantine', body: "La ville des ponts : le pont Sidi M'Cid, les gorges, le palais Ahmed Bey, le musée de Cirta et la vieille ville." },
      { day: 2, title: 'Timgad', body: "Route vers le sud et journée à Timgad : le plan romain complet, l'arc de Trajan, le théâtre et le musée de mosaïques." },
    ],
    includes: ['Transferts', 'Hébergement 1 nuit', 'Guide privé licencié', 'Transport privé', 'Entrées des sites', 'Petit déjeuner'],
    excludes: ['Vols', 'Frais de visa', 'Assurance voyage', 'Déjeuners et dîners', 'Pourboires'],
    goodToKnow: [
      { label: 'Meilleure saison', value: 'Avril à juin, septembre à novembre' },
      { label: 'Rythme', value: 'Dense sur deux jours' },
      { label: 'Départ', value: 'Constantine — aéroport Mohamed Boudiaf' },
      { label: 'Se combine avec', value: 'Djémila et Sétif' },
    ],
    faqs: [
      { q: 'Pourquoi Constantine est-elle célèbre ?', a: "Pour son site : une ville bâtie sur un piton rocheux fendu par un canyon de 200 mètres, franchi par des ponts qui font sa signature visuelle." },
      { q: 'Timgad vaut-elle le détour ?', a: "C'est la cité romaine en damier la plus complète qui subsiste, souvent appelée la Pompéi de l'Afrique, et elle est presque toujours déserte." },
      { q: 'Comment rejoindre Constantine ?', a: "Par vol depuis Alger, par train, ou par l'autoroute est-ouest." },
      { q: 'Deux jours suffisent-ils ?', a: "Pour ces deux sites, oui. Si vous voulez y ajouter Djémila, comptez un jour de plus." },
    ],
  },

  // ---- card-only translations (French index; detail pages stay in English) ----
  'algeria-eastern-sahara-discovery': {
    title: "Est algérien et Sahara — 6 jours",
    duration: '6 jours · 5 nuits',
    hook: "Six jours à travers l'est du pays — les ponts de Constantine, les cités romaines de Djémila et Timgad, une porte du Sahara à Bou Saada et une journée à Béjaïa.",
  },
  'djanet-ghardaia-desert-2-days': {
    title: "Djanet et Ghardaïa — 6 jours désert et patrimoine",
    duration: '6 jours · 5 nuits',
    hook: "Six jours réunissant les deux visages du Sahara algérien : les cités du M'Zab classées UNESCO et le grand désert autour de Djanet.",
  },
  'algeria-intensive-discovery-tour': {
    title: 'Découverte intensive de l\'Algérie — 5 jours',
    duration: '5 jours · 4 nuits',
    hook: "Cinq jours au rythme soutenu pour voir le maximum du pays : capitale, côte romaine et première approche du Sahara.",
  },
  'the-soul-of-algeria': {
    title: "L'âme de l'Algérie — 4 jours",
    duration: '4 jours · 3 nuits',
    hook: "Quatre jours entre la capitale, la côte romaine et l'arrière-pays, pour saisir le caractère du pays plus que sa liste de sites.",
  },
  'the-culture-and-heritage-of-algeria': {
    title: "Culture et patrimoine de l'Algérie — 8 jours",
    duration: '8 jours · 7 nuits',
    hook: "Huit jours à travers la culture et l'histoire algériennes — la capitale et sa Casbah, Tipaza et Djémila, les ponts de Constantine et l'oasis de Bou Saada.",
  },
  'algeria-beyond-expectations': {
    title: "L'Algérie au-delà des attentes — 10 jours",
    duration: '10 jours · 9 nuits',
    hook: "Dix jours pour le pays dans toute son étendue, du littoral méditerranéen aux oasis sahariennes, à un rythme qui laisse le temps de regarder.",
  },
  'bousaada-desert-tour': {
    title: "Bou Saada — 2 jours dans l'oasis",
    duration: '2 jours · 1 nuit',
    hook: "Deux jours à Bou Saada, la cité du bonheur — sa cascade et le moulin Ferrero, les marchés artisanaux, un dîner bédouin et la zaouïa d'El Hamel.",
  },
  'tour-bejaia-historic': {
    title: 'Béjaïa — la ville historique au bord de la mer (journée)',
    duration: '1 jour',
    hook: "Une journée sur la côte à Béjaïa — sa forteresse et son musée, la corniche du Cap Carbon et le sable des Aiguades, déjeuner face à la Méditerranée.",
  },
  'private-guided-tour': {
    title: 'Tipaza et Cherchell — journée romaine privée',
    duration: '1 jour',
    hook: "Une journée privée sur la côte romaine à l'ouest d'Alger — les ruines de Tipaza au bord de la mer et le musée de l'antique Césarée à Cherchell.",
  },
  'algiers-city-tour-casbah-bardo-martyrsmemorial': {
    title: 'Alger en une journée — Casbah, Bardo et Mémorial du Martyr',
    duration: '1 jour',
    hook: "Une journée complète dans la capitale — la Casbah classée UNESCO, le musée du Bardo et le Mémorial du Martyr au-dessus de la baie.",
  },
  'algierstour-hammagarden-notredame-dafrique': {
    title: "Alger — Jardin d'Essai et Notre-Dame d'Afrique",
    duration: '1 jour',
    hook: "Une journée à Alger entre le Jardin d'Essai du Hamma et la basilique Notre-Dame d'Afrique, avec les plus belles vues sur la baie.",
  },
  'day-tour-algeria-culture': {
    title: 'Alger — balade culturelle dans la Casbah',
    duration: '1 jour',
    hook: "Une journée à pied dans la Casbah d'Alger, ses ruelles, ses palais ottomans et ses terrasses, avec un guide qui y a grandi.",
  },
};

export const tourFr = (id: string) => TOURS_FR[id];
export const hasFrenchPage = (id: string) => !!TOURS_FR[id]?.full;

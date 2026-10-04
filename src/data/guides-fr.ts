// French guides served by src/pages/fr/[slug].astro. The older French guides are
// standalone pages under src/pages/fr/; new translations go here, so hreflang is
// derived in every direction (see lib/guide-alternates) instead of hand-written.

export interface GuideFr {
  slug: string;            // /fr/<slug>/
  en: string;              // English counterpart path, for hreflang
  eyebrow: string;
  h1: string;
  lead: string;            // intro paragraph (HTML-free)
  // table: a comparison grid (rendered by ComparisonTable); links: in-site links
  // listed under the section, e.g. the tours a guide is talking about.
  sections: { h: string; p?: string; list?: string[];
    table?: { caption: string; columns: string[]; rows: { label: string; cells: string[] }[] };
    links?: { href: string; text: string }[] }[];
  faqs: { q: string; a: string }[];
  cta: { h: string; p: string };
  seoTitle: string;
  seoDescription: string;
  published: string;
}

export const GUIDES_FR: GuideFr[] = [
  {
    slug: 'djanet-ou-timimoun',
    en: '/blog/djanet-vs-timimoun/',
    eyebrow: 'Sahara algérien',
    h1: 'Djanet ou Timimoun ? Choisir votre Sahara algérien',
    lead: "Quand on prépare un premier voyage dans le Sahara algérien, la question se résume presque toujours à deux noms : Djanet ou Timimoun. Toutes deux sahariennes, toutes deux rouges, toutes deux extraordinaires — et pourtant, ce n'est pas du tout le même voyage. Choisissez Djanet pour le grand désert : les grès rouges de la Tadrart, l'art rupestre préhistorique du Tassili n'Ajjer et des nuits de bivouac en plein désert, à 2 000 km au sud d'Alger. Choisissez Timimoun pour une entrée en matière plus douce et plus chaleureuse : des ksour rouges bâtis en terre, des palmeraies irriguées par d'anciennes foggaras et de grandes dunes, avec chaque nuit une chambre en maison d'hôtes. Nos voyages à Djanet durent de 5 à 7 jours à partir de 828 € ; notre séjour à Timimoun dure 5 jours à partir de 492 €. Nous organisons les deux : voici une comparaison franche.",
    published: '2026-09-24',
    sections: [
      { h: 'La réponse courte', list: [
        "Partez à Djanet pour le désert profond : les arches de grès et les mers de dunes de la Tadrart Rouge, l'art rupestre préhistorique du Tassili n'Ajjer, et des nuits sous un ciel sans la moindre lumière.",
        "Partez à Timimoun pour l'oasis vivante : des ksour rouges bâtis en terre, des jardins de palmiers nourris par des foggaras millénaires, des marchés, de la musique — et un lit en maison d'hôtes chaque soir.",
      ], links: [
        { href: '/fr/circuits/tadrart-rouge-7-days/', text: 'Tadrart Rouge — 7 jours dans le Sahara rouge' },
        { href: '/fr/destinations/tassili-najjer/', text: "Le Tassili n'Ajjer" },
      ]},
      { h: 'Djanet et Timimoun en un coup d’œil', table: {
        caption: 'Djanet ou Timimoun : la comparaison',
        columns: ['Djanet', 'Timimoun'],
        rows: [
          { label: 'Paysages', cells: ['Grès rouges et noirs, arches, canyons, mers de dunes', "Ksour de terre rouge, palmeraies, dunes du Grand Erg Occidental"] },
          { label: 'Le site phare', cells: ["L'art rupestre préhistorique du Tassili n'Ajjer", 'Les foggaras et les ksour du Gourara'] },
          { label: 'Hébergement', cells: ['Camps dans le désert et bivouac sauvage', "Une maison d'hôtes, quatre nuits"] },
          { label: 'Effort', cells: ['Modéré en 4×4 ; exigeant à pied jusqu’à Sefar', 'Facile à modéré'] },
          { label: 'Culture', cells: ['Guides et hospitalité touaregs (Kel Ajjer)', 'Culture oasienne zénète, marchés et musique'] },
          { label: 'Nos voyages', cells: ['5 à 7 jours, de 828 € à 1 120 €', '5 jours, 492 €'] },
          { label: 'Idéal pour', cells: ["Le désert profond, les photographes, l'art rupestre", "Un premier Sahara, le confort, l'architecture"] },
        ],
      }},
      { h: 'Les paysages', p: "Djanet, c'est le Sahara que l'on imagine avant de l'avoir vu. Autour de la ville, le sable rosé vient buter contre la roche noire et rouge : tours, canyons, arches naturelles, et les grands champs de dunes de la Tadrart, au sud-est, vers la frontière libyenne. C'est une nature sauvage que l'on parcourt en 4×4, en s'arrêtant là où le paysage l'impose. Timimoun est plus douce et plus humaine. La ville et les ksour du Gourara qui l'entourent sont bâtis dans la même terre rouge que le sol, au-dessus des palmeraies, en lisière du Grand Erg Occidental. Les dunes sont bien là — notre séjour y consacre un après-midi en 4×4 — mais le cœur du voyage, c'est l'oasis." },
      { h: 'Ce que vous verrez vraiment', list: [
        "À Djanet : des gravures et peintures rupestres vieilles de 10 000 ans, témoins d'un Sahara vert peuplé de girafes, d'éléphants et de bétail — la « Vache qui pleure » de Tigharghart, les girafes de Tin Abadène et, pour les marcheurs, les parois peintes de Sefar. Et, sur le circuit d'Ihrir, ce que personne n'attend : des vasques d'eau permanentes au milieu du désert.",
        "À Timimoun : les ksour de Charouine et de Tala, les foggaras souterraines qui irriguent encore les jardins, le marché et des soirées de musique traditionnelle.",
      ], links: [
        { href: '/fr/circuits/sefar-tassili-trek/', text: 'Trek de Sefar — à pied sur le plateau du Tassili' },
        { href: '/fr/circuits/ihrir-oasis-7-days/', text: 'Ihrir et le Tassili — 7 jours entre oasis et ergs' },
        { href: '/fr/circuits/timimoun-desert-escape/', text: "Timimoun — 5 jours dans l'oasis rouge du Gourara" },
      ]},
      { h: 'Confort et effort', p: "C'est souvent là que le choix se fait.", list: [
        "Timimoun est facile à modéré : quatre nuits dans une maison d'hôtes, des excursions à la journée et retour le soir.",
        "Djanet en 4×4 est modéré : courtes marches et montées de dunes, mais la plupart des nuits se passent en camp dans le désert, et les nuits d'hiver frôlent le gel. Plus de réseau téléphonique dès que l'on quitte la ville — et c'est un peu le but.",
        "Le trek de Sefar est exigeant : quatre à sept heures de marche par jour sur le plateau du Tassili, avec des ânes pour porter le camp. Il est réservé aux marcheurs réguliers.",
      ]},
      { h: 'La saison', p: "Ce sont deux destinations d'hiver : d'octobre à avril, avec des journées plus claires et plus fraîches de novembre à février. Le grand Sud ne se parcourt pas en été.", links: [
        { href: '/fr/quand-partir-algerie/', text: "Quand partir en Algérie, mois par mois" },
      ]},
      { h: 'Les prix', p: 'Nos tarifs publiés, par personne :', list: [
        'Safari saharien à Djanet, 5 jours — à partir de 828 € (départ de Djanet)',
        'Tadrart Rouge, 7 jours — à partir de 920 €, vol aller-retour Alger ⇄ Djanet compris',
        'Ihrir et le Tassili, 7 jours — à partir de 920 €, vol aller-retour compris',
        'Trek de Sefar, 7 jours — à partir de 1 120 €, vol aller-retour compris',
        'Timimoun, 5 jours — à partir de 492 € (départ de Timimoun)',
      ], links: [
        { href: '/fr/circuits/djanet-sahara-safari/', text: 'Safari saharien à Djanet — 5 jours' },
        { href: '/fr/budget-algerie/', text: 'Quel budget pour un voyage en Algérie ?' },
      ]},
      { h: 'Les erreurs à éviter', list: [
        "Les considérer comme deux « extensions désert » interchangeables : ce sont deux voyages différents, nature sauvage et bivouac à Djanet, villes-oasis et maison d'hôtes à Timimoun.",
        "Prévoir l'une ou l'autre en juillet ou en août : partez entre octobre et avril, le grand Sud ne se parcourt pas en été.",
        "Croire qu'on peut les relier par la route en une journée : elles se trouvent aux deux extrémités du Sahara algérien. On les combine en avion, ce qu'il faut prévoir dans ses dates.",
        "Sous-estimer le froid nocturne : les nuits d'hiver frôlent le gel dans les deux cas. Emportez de vraies couches chaudes, surtout pour les bivouacs autour de Djanet.",
      ]},
      { h: 'Alors, lequel choisir ?', p: "Si vous voulez le Sahara lui-même — le vide, la roche, le sable et le plus vieil art d'Afrique —, choisissez Djanet. Si vous voulez un désert habité, un lit chaud et un rythme plus tranquille, choisissez Timimoun. Et si vous disposez de dix jours, rien ne vous oblige à choisir : donnez-nous vos dates et nous réunirons les deux en un seul voyage. Côté formalités, comme les deux voyages incluent le Sahara, le visa peut être délivré à l'arrivée à l'aéroport d'Alger.", links: [
        { href: '/fr/contact/', text: 'Nous donner vos dates' },
        { href: '/fr/evisa-algerie/', text: 'Entrée en Algérie et e-Visa saharien' },
      ]},
    ],
    faqs: [
      { q: 'Djanet ou Timimoun pour un premier voyage dans le Sahara ?', a: "Timimoun est la découverte la plus facile : des nuits au chaud en maison d'hôtes, des excursions courtes et beaucoup de culture. Djanet offre l'expérience du désert la plus forte — les paysages et l'art rupestre que l'on imagine en pensant au Sahara — et reste tout à fait accessible à toute personne en forme raisonnable sur nos itinéraires en 4×4." },
      { q: 'Combien coûte un voyage à Djanet ou à Timimoun ?', a: "Avec Algeria Compass, le safari saharien de 5 jours à Djanet est à partir de 828 € par personne, les circuits de 7 jours Tadrart Rouge et Ihrir à partir de 920 € avec le vol aller-retour depuis Alger compris, et le trek de Sefar de 7 jours à partir de 1 120 €. Le séjour de 5 jours à Timimoun est à partir de 492 € par personne." },
      { q: 'Quelle est la meilleure période pour Djanet et Timimoun ?', a: "D'octobre à avril pour les deux. De novembre à février, les journées dans le désert sont les plus claires et les plus fraîches ; les nuits sont froides. Le grand Sud ne se parcourt pas en été." },
      { q: 'Dort-on sous la tente à Djanet ?', a: "Sur nos voyages à Djanet, oui : la plupart des nuits se passent en camp dans le désert ou en bivouac sauvage, avec tentes, matelas et couvertures fournis, et certains voyageurs choisissent de dormir à la belle étoile. À Timimoun, vous dormez chaque nuit en maison d'hôtes." },
      { q: 'Peut-on visiter Djanet et Timimoun lors du même voyage ?', a: "Oui, à partir de dix jours. Elles sont très éloignées l'une de l'autre dans le Sahara : la liaison se fait donc en avion plutôt que par la route. Nous organisons les vols et les dates autour de votre voyage." },
    ],
    cta: { h: 'Djanet, Timimoun… ou les deux ?', p: "Dites-nous vos dates et votre façon de voyager : nous vous dirons franchement quel Sahara vous correspond, et nous construirons le voyage autour de vous." },
    seoTitle: 'Djanet ou Timimoun ? Quel Sahara algérien choisir (2026)',
    seoDescription: "Djanet ou Timimoun ? Comparatif honnête des deux grandes destinations du Sahara algérien : paysages, art rupestre, confort, saison et vrais prix.",
  },
  {
    slug: 'tadrart-ou-tassili',
    en: '/blog/tadrart-vs-tassili/',
    eyebrow: 'Comparatif',
    h1: 'Tadrart Rouge, Ihrir ou Sefar ? Choisir son voyage à Djanet',
    lead: "Djanet est la porte d'entrée de la partie la plus profonde et la plus belle du Sahara algérien — et une fois la décision prise, reste à savoir quel Djanet. Nous y proposons trois voyages d'une semaine, vol aller-retour depuis Alger compris, et ce sont réellement trois voyages différents. La Tadrart Rouge est le grand classique : dunes roses, arches de pierre et gravures rupestres, en 4×4, avec six nuits de bivouac. Ihrir est le Tassili plus vert : vasques permanentes, canyons et dunes, en 4×4 également. Sefar est une expédition à pied sur le plateau du Tassili, jusqu'à la plus grande galerie de peintures préhistoriques du Sahara, à raison de 4 à 7 heures de marche par jour. Les trois durent 7 jours au départ d'Alger, vol compris : Tadrart et Ihrir à partir de 920 €, Sefar à partir de 1 120 € par personne.",
    published: '2026-09-24',
    sections: [
      { h: 'La réponse courte', list: [
        "Tadrart Rouge, 7 jours : le classique. Dunes roses, arches de pierre et gravures célèbres, en 4×4, avec six nuits de bivouac. À partir de 920 €.",
        "Ihrir et le Tassili, 7 jours : la surprise. Des vasques permanentes, un canyon où l'on peut parfois se baigner, des dunes et des rochers sculptés par le vent, en 4×4. À partir de 920 €.",
        "Trek de Sefar, 7 jours : l'expédition. À pied sur le plateau du Tassili, jusqu'à la plus grande galerie à ciel ouvert de peinture préhistorique du Sahara. À partir de 1 120 €.",
      ], links: [
        { href: '/fr/circuits/tadrart-rouge-7-days/', text: 'Tadrart Rouge — 7 jours dans le Sahara rouge' },
        { href: '/fr/circuits/ihrir-oasis-7-days/', text: 'Ihrir et le Tassili — 7 jours entre oasis et ergs' },
        { href: '/fr/circuits/sefar-tassili-trek/', text: 'Trek de Sefar — à pied sur le plateau du Tassili' },
      ]},
      { h: 'Les trois voyages comparés', table: {
        caption: 'Les trois voyages au départ de Djanet',
        columns: ['Tadrart Rouge', 'Ihrir et le Tassili', 'Trek de Sefar'],
        rows: [
          { label: "De quoi s'agit-il", cells: ['Dunes, arches et gravures', 'Vasques, canyons et ergs', 'Abris sous roche peints sur le plateau'] },
          { label: 'Mode de déplacement', cells: ['4×4, courtes marches', '4×4, courtes marches', 'À pied, 4 à 7 heures par jour'] },
          { label: 'Nuits', cells: ['6 nuits en bivouac sauvage', "1 nuit en maison d'hôtes + 5 en bivouac", '6 nuits sur le plateau'] },
          { label: 'Condition physique', cells: ['Confortable', 'Confortable', 'Exigeant — marcheurs réguliers uniquement'] },
          { label: 'Le moment fort', cells: ["Le coucher de soleil sur l'erg Tin Merzouga", "Les gueltas d'Ihrir", 'Les masques et les « dieux » de Sefar'] },
          { label: 'À partir de, par personne', cells: ['920 €', '920 €', '1 120 €'] },
        ],
      }},
      { h: 'Tadrart Rouge : le Sahara des photographies', p: "La Tadrart s'étend au sud-est de Djanet, vers la frontière libyenne, et c'est ce que la plupart des gens imaginent en pensant au Sahara : du sable rosé contre la roche noire et rouge. Au fil de la semaine, le camp change chaque soir — les gorges d'El Berdj, les dunes de Moul Naga, la grande mer de sable de l'erg Tin Merzouga au coucher du soleil, les arches autour d'Ajelati et la « cathédrale » de grès de Tamezguida. Mais il n'y a pas que le paysage : les girafes et les éléphants gravés à Tin Abadène et la « Vache qui pleure » de Tigharghart comptent parmi les œuvres rupestres les plus célèbres d'Afrique — et l'on s'en approche à quelques pas." },
      { h: "Ihrir : un Sahara où l'eau ne manque pas", p: "Ihrir est une oasis encaissée du Tassili où l'eau ne tarit jamais : des gueltas permanentes, bordées de roseaux et de verdure. La semaine se poursuit à travers les dunes de l'erg Admer, le canyon de l'oued Essendilène (baignade selon la saison), les tours sculptées par le vent de Tikoubaouine et Adaïk — surnommé localement le « petit Sefar » pour son art rupestre. La première nuit se passe dans une maison d'hôtes à Djanet, les cinq autres en bivouac. Choisissez-le si vous avez déjà vu des dunes, ou si vous voulez la plus grande variété de paysages en une seule semaine." },
      { h: 'Sefar : à pied jusqu’aux parois peintes', p: "Aucun véhicule ne peut atteindre le sommet du plateau du Tassili. On y monte depuis Tamrit — environ 500 mètres de dénivelé le premier jour —, guides, cuisiniers et âniers portant le camp, puis l'on marche quatre à sept heures par jour d'un abri sous roche à l'autre, peints il y a cinq à huit mille ans : les « danseurs » de Tin Tazarift, les masques de Sefar Noir, les grandes figures de Sefar Blanc, et Djabarren, le plus vaste ensemble de peintures du Tassili. Près de Tamrit, les vieux cyprès du Tassili sont les survivants du Sahara plus humide que décrivent les peintures. C'est le plus gratifiant des trois, et le seul qui demande un effort physique réel. Il s'adresse aux marcheurs réguliers." },
      { h: 'Peu de temps ?', p: "Le safari saharien à Djanet offre en 5 jours un avant-goût de la Tadrart, avec camps dans le désert et guide touareg, à partir de 828 €, au départ et à l'arrivée de Djanet (vol non compris).", links: [
        { href: '/fr/circuits/djanet-sahara-safari/', text: 'Safari saharien à Djanet — 5 jours dans la Tadrart Rouge' },
      ]},
      { h: 'Infos pratiques pour les trois voyages', list: [
        "Saison : d'octobre à avril ; de novembre à février, les journées sont les plus claires et les plus fraîches. Le grand Sud ne se parcourt pas en été.",
        "Nuits : froides en hiver, proches du gel. Emportez de vraies couches chaudes.",
        "Réseau : aucun dès que l'on quitte Djanet.",
        "Permis : les permis du parc du Tassili n'Ajjer sont obtenus par nos soins et inclus.",
        "Entrée : les formalités de visa pour le Sahara, Djanet compris, sont expliquées sur notre page consacrée à l'entrée et à l'e-Visa.",
      ], links: [
        { href: '/fr/evisa-algerie/', text: 'Entrée en Algérie et e-Visa saharien' },
        { href: '/fr/destinations/djanet/', text: 'Djanet' },
      ]},
      { h: 'Les erreurs à éviter', list: [
        "Réserver Sefar parce que c'est le plus impressionnant : il l'est, mais c'est un trek, avec une montée raide dès le premier jour. Si vous ne marchez pas régulièrement, choisissez la Tadrart ou Ihrir, qui comprennent tous deux de l'art rupestre.",
        "Croire que la Tadrart n'a pas d'art rupestre : elle abrite certaines des gravures les plus célèbres du Sahara — les girafes de Tin Abadène et la « Vache qui pleure » de Tigharghart.",
        "Compter sur le réseau téléphonique : il n'y en a plus dès que l'on quitte Djanet. Prévenez vos proches avant de partir.",
      ]},
      { h: 'Vous hésitez encore ?', p: "Dites-nous comment vous aimez voyager : nous vous dirons honnêtement lequel vous convient — ou nous construirons un voyage qui en combine deux. Vous hésitez encore entre Djanet et les oasis plus à l'ouest ? Lisez d'abord notre comparatif Djanet ou Timimoun.", links: [
        { href: '/fr/contact/', text: 'Nous écrire' },
        { href: '/fr/djanet-ou-timimoun/', text: 'Djanet ou Timimoun ? Choisir votre Sahara algérien' },
      ]},
    ],
    faqs: [
      { q: "Quelle différence entre la Tadrart Rouge et le Tassili n'Ajjer ?", a: "Le Tassili n'Ajjer est le grand plateau de grès et l'aire protégée qui entourent Djanet, célèbres pour leur art rupestre préhistorique. La Tadrart Rouge s'étend au sud-est, vers la frontière libyenne, et se distingue par ses dunes roses, sa roche rouge et ses arches naturelles. Sur nos voyages, les circuits Tadrart et Ihrir se font en 4×4 ; le haut plateau de Sefar n'est accessible qu'à pied." },
      { q: 'Quel voyage à Djanet choisir pour une première visite ?', a: "La Tadrart Rouge. Elle réunit les paysages pour lesquels la plupart des gens viennent, des gravures célèbres et un rythme tranquille en 4×4. Choisissez Ihrir si vous avez déjà vu des dunes et cherchez l'inattendu, et Sefar si vous êtes bon marcheur et que les peintures rupestres comptent avant tout pour vous." },
      { q: 'Quelle condition physique faut-il pour le trek de Sefar ?', a: "Une bonne forme et l'habitude de marcher : 4 à 7 heures par jour, avec environ 500 mètres de dénivelé positif le premier jour pour atteindre le plateau. Guides, cuisiniers et âniers portent le camp : vous n'avez qu'un sac à dos pour la journée." },
      { q: 'Les vols sont-ils compris dans les voyages à Djanet ?', a: "Pour les trois voyages de 7 jours — Tadrart Rouge, Ihrir et Sefar —, oui : le vol aller-retour Air Algérie Alger–Djanet et tous les transferts aéroport sont compris. Le safari saharien de 5 jours commence et se termine à Djanet ; le vol n'est donc pas compris." },
      { q: 'Peut-on se baigner à Ihrir ?', a: "Parfois. Selon la saison, on peut se baigner dans les vasques de l'oued Essendilène : prévoyez un maillot, votre guide vous dira sur place si c'est possible." },
    ],
    cta: { h: 'Quel Djanet est fait pour vous ?', p: "Racontez-nous votre façon de voyager et votre niveau de marche : nous vous conseillerons franchement entre la Tadrart, Ihrir et Sefar." },
    seoTitle: 'Tadrart Rouge, Ihrir ou Sefar ? Quel voyage à Djanet (2026)',
    seoDescription: "Trois façons de découvrir le désert autour de Djanet : dunes et arches de la Tadrart, oasis d'Ihrir ou trek de Sefar. Effort, nuits et prix comparés.",
  },
  {
    slug: 'voyage-algerie-depuis-le-canada',
    en: '/blog/algeria-tours-from-canada/',
    eyebrow: 'Préparer son voyage',
    h1: "Voyager en Algérie depuis le Canada : vols, visa et préparatifs",
    lead: "Le français est largement parlé en Algérie, ce qui rend le voyage particulièrement simple pour les Canadiens francophones — et nos guides travaillent aussi bien en français qu'en anglais. Les Canadiens ont besoin d'un visa pour l'Algérie : soit un visa obtenu auprès d'un consulat algérien avec une lettre d'invitation d'une agence agréée (25 USD, pour un programme d'au moins 3 jours incluant les transferts aéroport), soit — pour les voyages organisés qui incluent le Sahara — un visa délivré à l'arrivée à l'aéroport d'Alger grâce à notre autorisation à 45 USD. Montréal est reliée depuis longtemps à Alger par des vols directs — environ sept heures — grâce à l'importante communauté algérienne du Québec. Nos circuits privés les mieux adaptés aux voyageurs venant du Canada vont de 492 € à 1 176 € par personne. Tous nos circuits sont privés, à vos dates, avec un guide local agréé.",
    published: '2026-09-26',
    sections: [
      { h: 'Se rendre en Algérie', p: "Montréal est reliée depuis longtemps à Alger par des vols directs — environ sept heures —, grâce à l'importante communauté algérienne du Québec. Depuis Toronto, Vancouver ou Calgary, prévoyez une correspondance à Montréal ou dans une grande plateforme européenne comme Paris, Francfort ou Istanbul. Vérifiez les horaires en vigueur au moment de réserver." },
      { h: 'Le visa', p: "Les voyageurs canadiens ont besoin d'un visa pour l'Algérie. Deux voies sont possibles. Envoyez-nous votre nationalité et vos dates de voyage : nous vous dirons laquelle s'applique.", list: [
        "Un visa touristique délivré par l'ambassade ou le consulat d'Algérie dont vous relevez, à demander avant le départ. Les consulats exigent une lettre d'invitation et un programme confirmé émis par une agence algérienne agréée : nous préparons les deux pour tout programme d'au moins 3 jours incluant l'accueil et le transfert aéroport (la lettre d'invitation coûte 25 USD).",
        "L'autorisation de visa saharienne, pour les voyages organisés qui incluent le Sahara, comme Djanet ou Timimoun — quel que soit votre aéroport d'arrivée. Nous émettons l'autorisation (45 USD) et la vignette de visa est délivrée à l'arrivée à l'aéroport d'Alger ; le cachet d'entrée est un frais distinct, payé à l'aéroport.",
      ], links: [
        { href: '/fr/evisa-algerie/', text: 'Entrée en Algérie et e-Visa saharien' },
        { href: '/fr/visa-algerie/', text: 'Le visa pour l’Algérie' },
      ]},
      { h: 'Décalage horaire, électricité et argent', list: [
        "Heure : l'Algérie est à UTC+1 toute l'année, sans heure d'été. Alger a 6 heures d'avance sur Montréal et Toronto en hiver, 5 en été ; 9 heures d'avance sur Vancouver en hiver, 8 en été.",
        "Électricité : 230 V et prises européennes de type C et F. Apportez un adaptateur et vérifiez que vos appareils sans mention bitension supportent le 230 V.",
        "Argent : nos circuits sont facturés en euros et réglés avant le voyage. Sur place, l'Algérie fonctionne en espèces : apportez des euros (ou des dollars américains) en billets propres à changer — les dollars canadiens se changent difficilement. Les cartes sont rarement acceptées en dehors des grands hôtels.",
      ]},
      { h: 'Quand partir', p: "Le Sahara se parcourt d'octobre à avril — l'évasion parfaite pour fuir l'hiver canadien, avec des journées chaudes dans le désert (les nuits sont froides). Le printemps et l'automne conviennent au Nord.", links: [
        { href: '/fr/quand-partir-algerie/', text: 'Quand partir en Algérie, mois par mois' },
      ]},
      { h: 'Les circuits qui conviennent aux voyageurs du Canada', list: [
        'Algérie complète — grand circuit de 10 jours : à partir de 1 176 € par personne',
        "Culture et patrimoine de l'Algérie — 8 jours : à partir de 1 044 € par personne",
        'Tadrart Rouge — 7 jours dans le Sahara rouge : à partir de 920 € par personne',
        'Timimoun — 5 jours dans l’oasis rouge du Gourara : à partir de 492 € par personne',
        "Pour le haut de gamme, la Collection 5 étoiles : huit jours tout compris — vols intérieurs, hôtels cinq étoiles, tous les repas et une flotte privée de 4×4 — à partir de 1 615 € par personne.",
      ], links: [
        { href: '/fr/circuits/algeria-tour/', text: 'Algérie complète — grand circuit de 10 jours' },
        { href: '/fr/circuits/the-culture-and-heritage-of-algeria/', text: "Culture et patrimoine de l'Algérie — 8 jours" },
        { href: '/fr/circuits/tadrart-rouge-7-days/', text: 'Tadrart Rouge — 7 jours dans le Sahara rouge' },
        { href: '/fr/circuits/timimoun-desert-escape/', text: "Timimoun — 5 jours dans l'oasis rouge du Gourara" },
        { href: '/fr/luxe/', text: 'La Collection 5 étoiles' },
      ]},
      { h: 'Des prix clairs', p: "Tous nos prix sont par personne, publiés sur la page de chaque circuit, et fixes : ils ne changent que si vous demandez un itinéraire sur mesure ou des jours supplémentaires. L'annulation est gratuite jusqu'à 5 jours avant le départ.", links: [
        { href: '/booking-terms/', text: 'Conditions de réservation (en anglais)' },
      ]},
      { h: 'Sécurité', p: "Le nord de l'Algérie, la vallée du M'Zab et les itinéraires sahariens organisés sont calmes et très accueillants. Consultez les conseils du gouvernement du Canada sur voyage.gc.ca avant de réserver, comme pour toute destination. Une assurance voyage et médicale est obligatoire sur nos circuits sahariens.", links: [
        { href: '/fr/securite-algerie/', text: "La sécurité en Algérie" },
      ]},
      { h: 'Préparer le voyage avec nous', p: "Donnez-nous vos dates et votre façon de voyager, et nous construirons le voyage autour de vous — ou répondrons d'abord à la question du visa, avant tout engagement.", links: [
        { href: '/fr/contact/', text: 'Nous donner vos dates' },
        { href: '/fr/planifier-mon-voyage/', text: 'Planifier mon voyage' },
      ]},
    ],
    faqs: [
      { q: "Les Canadiens ont-ils besoin d'un visa pour l'Algérie ?", a: "Oui. Les voyageurs canadiens doivent obtenir un visa avant le départ auprès d'une ambassade ou d'un consulat d'Algérie, avec une lettre d'invitation d'une agence algérienne agréée — que nous préparons pour 25 USD avec tout programme d'au moins 3 jours incluant l'accueil et le transfert aéroport. Pour les voyages organisés qui incluent le Sahara, notre autorisation de visa saharienne (45 USD) permet d'obtenir le visa à l'arrivée à l'aéroport d'Alger. Envoyez-nous votre nationalité et nous vous confirmerons la voie qui s'applique." },
      { q: "Comment se rendre en Algérie depuis le Canada ?", a: "Montréal est reliée depuis longtemps à Alger par des vols directs — environ sept heures —, grâce à l'importante communauté algérienne du Québec. Depuis Toronto, Vancouver ou Calgary, prévoyez une correspondance à Montréal ou dans une plateforme européenne comme Paris, Francfort ou Istanbul. Vérifiez les horaires en vigueur au moment de réserver." },
      { q: "Quel est le décalage horaire entre le Canada et l'Algérie ?", a: "L'Algérie est à UTC+1 toute l'année, sans heure d'été. Alger a 6 heures d'avance sur Montréal et Toronto en hiver et 5 en été ; 9 heures d'avance sur Vancouver en hiver et 8 en été." },
      { q: "Combien coûte un circuit privé en Algérie ?", a: "Nos circuits privés guidés commencent à 30 € pour une journée à Alger. Ceux que nous suggérons aux voyageurs venant du Canada vont de 492 € à 1 176 € par personne, et la Collection 5 étoiles tout compris commence à 1 615 €. Chaque prix est publié sur la page du circuit." },
      { q: "L'Algérie est-elle sûre pour les Canadiens ?", a: "Le Nord, la vallée du M'Zab et les itinéraires sahariens organisés sont calmes et très accueillants pour les visiteurs. Les zones frontalières de l'extrême sud sont réglementées, et nous ne parcourons le grand désert qu'avec les permis nécessaires et des guides agréés. Consultez les conseils du gouvernement du Canada sur voyage.gc.ca avant de réserver, comme pour toute destination." },
    ],
    cta: { h: 'Partir du Canada, on s’en occupe', p: "Agence algérienne agréée : circuits privés à vos dates, guides francophones et accompagnement pour le visa. Écrivez-nous pour commencer." },
    seoTitle: "Voyage en Algérie depuis le Canada : vols, visa, préparatifs",
    seoDescription: "L'Algérie depuis le Canada : vols, visa, décalage horaire, argent, meilleure saison et circuits privés à prix publiés. Agence algérienne agréée.",
  },
];

export const guideFrByEn = (en: string) => GUIDES_FR.find(g => g.en === en);

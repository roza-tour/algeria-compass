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
  itinerary?: { day: number; title: string; body: string; stops?: { place: string; text: string }[] }[];
  includes?: string[];
  excludes?: string[];
  goodToKnow?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
  seoTitle?: string;
  seoDescription?: string;
}

export const TOURS_FR: Record<string, TourFr> = {
  "djanet-sahara-safari": {
    "title": "Safari saharien à Djanet — 5 jours dans la Tadrart Rouge",
    "duration": "5 jours · 4 nuits",
    "hook": "Cinq jours au cœur du Sahara algérien autour de Djanet — grès rouge de la Tadrart, dunes dorées, art rupestre préhistorique et nuits sous les étoiles.",
    "full": true,
    "seoTitle": "Circuit Sahara Djanet 5 jours — Tadrart Rouge",
    "seoDescription": "Circuit privé de 5 jours dans le Sahara algérien au départ de Djanet : Tadrart Rouge, dunes, art rupestre et bivouacs, avec une équipe touarègue locale.",
    "overview": "C'est le Sahara tel qu'on l'imagine encore rarement : la Tadrart Rouge, un dédale de grès orange sculpté par le vent, des arches naturelles, des canyons et des dunes qui viennent buter contre la roche noire. Au départ de Djanet, oasis touarègue du sud-est algérien, vous partez en 4×4 avec une équipe locale pour quatre nuits de bivouac. Les journées alternent pistes, marches courtes vers des sites d'art rupestre vieux de plusieurs millénaires, et longues pauses photographiques à la lumière du soir. Les nuits se passent au camp, autour d'un feu et d'un thé, sans lumière ni réseau.",
    "highlights": [
      "La Tadrart Rouge et ses canyons de grès orange",
      "Des sites d'art rupestre préhistorique du Tassili n'Ajjer",
      "Les grandes dunes du Sahara algérien au coucher du soleil",
      "Quatre nuits de bivouac sous un ciel sans pollution lumineuse",
      "Une équipe touarègue locale : chauffeur, guide et cuisinier",
      "Pension complète et matériel de campement fournis"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée et entrée dans le désert",
        "body": "Accueil par votre équipe à Djanet, puis départ en 4×4 vers le désert. Coucher de soleil sur les dunes et première nuit au bivouac.",
        "stops": [
          {
            "place": "Djanet",
            "text": "La capitale touarègue oasienne du sud-est — palmeraies au pied de falaises rouges, votre porte d'entrée vers le Tassili."
          },
          {
            "place": "Premières dunes au coucher du soleil",
            "text": "Une virée en 4×4 sur le sable pour les dernières lumières du jour et une première nuit au bivouac."
          },
          {
            "place": "Le premier bivouac",
            "text": "Le campement s'installe à l'abri d'une dune — nattes, table basse et feu de bois — pour une première nuit sans la moindre lumière électrique."
          }
        ]
      },
      {
        "day": 2,
        "title": "La Tadrart Rouge",
        "body": "Traversée des vallées de roche rouge et de sable de la Tadrart, avec arrêts photo, avant le coucher du soleil et la nuit au camp.",
        "stops": [
          {
            "place": "La Tadrart Rouge",
            "text": "Des canyons et arches de grès orange sculptés par le vent — parmi les paysages les plus spectaculaires du Sahara."
          },
          {
            "place": "Arches de pierre sculptées",
            "text": "Arches de grès et rochers en équilibre façonnés au fil des millénaires — les formes emblématiques de la Tadrart."
          },
          {
            "place": "Mers de sable et campement au coucher du soleil",
            "text": "De vastes champs de dunes qui s'embrasent de pourpre au crépuscule, avant une nuit sous un ciel d'une pureté exceptionnelle."
          }
        ]
      },
      {
        "day": 3,
        "title": "Arches, gravures et grandes dunes",
        "body": "Journée entre arches naturelles, sites d'art rupestre et cordons dunaires, au rythme de la lumière et des découvertes.",
        "stops": [
          {
            "place": "Les grandes dunes à pied",
            "text": "L'ascension des hautes dunes pour le silence et le panorama — le cœur de l'expérience désertique."
          },
          {
            "place": "Art rupestre préhistorique",
            "text": "Peintures et gravures de bergers, de chasseurs et d'animaux datant d'un Sahara verdoyant, vieilles de près de 10 000 ans — antérieures aux pyramides."
          },
          {
            "place": "Cérémonie du thé touareg",
            "text": "Les traditionnels trois verres de thé saharien partagés avec une famille touarègue — la culture vivante du grand sud."
          }
        ]
      },
      {
        "day": 4,
        "title": "Retour vers Djanet",
        "body": "Dernière matinée dans le désert et route de retour vers l'oasis, avec un dernier bivouac ou une nuit à Djanet.",
        "stops": [
          {
            "place": "Ergs et plateaux isolés",
            "text": "De longues heures de désert choisies pour leur vacuité plutôt que pour des repères — le Sahara dans ce qu'il a de plus absolu."
          },
          {
            "place": "La longue halte de midi",
            "text": "L'ombre d'un acacia ou d'un surplomb rocheux le temps que passe la chaleur : une natte, le déjeuner, le thé, et deux ou trois heures à ne rien faire du tout."
          },
          {
            "place": "Le dernier bivouac",
            "text": "Le dernier campement du circuit, dressé là où la lumière du soir est la plus belle, avec un dîner au coin du feu sous un ciel constellé d'étoiles."
          }
        ]
      },
      {
        "day": 5,
        "title": "Départ",
        "body": "Temps libre à Djanet selon l'horaire de votre vol, puis transfert vers l'aéroport.",
        "stops": [
          {
            "place": "Petit-déjeuner au campement",
            "text": "Pain cuit dans le sable, dattes, confiture et café, avant de plier bagage aux premières lueurs sur le grès."
          },
          {
            "place": "La route vers le nord à travers la Tadrart",
            "text": "Le trajet retour vers l'oasis — le même pays de roche rouge traversé à l'aller, vu sous une lumière inversée."
          },
          {
            "place": "Djanet",
            "text": "L'oasis touarègue et l'aéroport de Tiska, où le circuit s'achève et où commence le vol retour vers le nord."
          }
        ]
      }
    ],
    "includes": [
      "Accueil et transfert à Djanet",
      "4×4 tout au long du circuit",
      "Chauffeur professionnel du désert",
      "Guide touareg local",
      "Pension complète",
      "Matériel de campement",
      "Eau en bouteille"
    ],
    "excludes": [
      "Vols internationaux et intérieurs",
      "Frais de visa",
      "Assurance voyage",
      "Boissons hors eau",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Novembre à février uniquement"
      },
      {
        "label": "Nuits",
        "value": "Froides — prévoyez de vraies couches chaudes"
      },
      {
        "label": "Réseau",
        "value": "Aucun dans le désert"
      },
      {
        "label": "Accès",
        "value": "Vol Alger–Djanet, puis 4×4"
      }
    ],
    "faqs": [
      {
        "q": "Quand ce circuit est-il possible ?",
        "a": "De novembre à février. Au-delà, la chaleur rend les expéditions dans le grand sud dangereuses et elles ne sont pas organisées."
      },
      {
        "q": "Comment se rend-on à Djanet ?",
        "a": "En avion depuis Alger, avec Air Algérie ou Tassili Airlines. Les vols vers le sud sont peu fréquents : il faut réserver tôt, surtout en saison."
      },
      {
        "q": "Où dort-on ?",
        "a": "En bivouac dans le désert, avec tentes, matelas et couvertures fournis. C'est confortable mais rustique : ni électricité, ni douche, ni réseau."
      },
      {
        "q": "Faut-il une bonne condition physique ?",
        "a": "Non. L'essentiel se fait en 4×4, avec de courtes marches sur sable et rocher. Il faut surtout supporter des journées longues et des nuits fraîches."
      }
    ]
  },
  "ghardaia-guided-tour": {
    "title": "Ghardaïa — 3 jours dans la vallée du M'Zab",
    "duration": "3 jours · 2 nuits",
    "hook": "Trois jours dans la vallée du M'Zab — les villes fortifiées de Ghardaïa et Beni Isguen, les foggaras, les palmeraies et une soirée en 4×4 dans le désert.",
    "full": true,
    "seoTitle": "Circuit Ghardaïa 3 jours — Vallée du M'Zab",
    "seoDescription": "Circuit privé de 3 jours à Ghardaïa et dans la vallée du M'Zab, classée UNESCO : les cinq cités ibadites, les foggaras, les palmeraies et une soirée au désert.",
    "overview": "La vallée du M'Zab est l'un des ensembles urbains les plus remarquables du monde islamique : cinq villes fortifiées bâties à partir du XIe siècle par la communauté ibadite mozabite, empilées en ocre, blanc et bleu sur des collines du Sahara. Leur logique de construction — mosquée au sommet, maisons en cercles concentriques, palmeraie en contrebas, système d'eau partagé — a fasciné Le Corbusier au point qu'il y est revenu plusieurs fois. Trois jours suffisent pour comprendre le lieu de l'intérieur, avec un guide qui en connaît les usages et les codes.",
    "highlights": [
      "Ghardaïa et son marché en amphithéâtre",
      "Beni Isguen, la cité sainte, visitée avec un guide local",
      "Les foggaras, système millénaire de partage de l'eau",
      "Les palmeraies et les maisons d'été mozabites",
      "Une soirée en 4×4 dans le désert sous les étoiles",
      "Artisanat du M'Zab : tapis, laine et cuivre"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Ghardaïa",
        "body": "Accueil et installation, puis première approche de Ghardaïa : les ruelles en pente, la place du marché et le point de vue sur la vallée au coucher du soleil.",
        "stops": [
          {
            "place": "Le marché de Ghardaïa",
            "text": "La place à arcades étagée au pied du minaret-pyramide, cœur battant du M'Zab depuis mille ans."
          },
          {
            "place": "Déjeuner dans une maison de caractère",
            "text": "Un repas au sein d'une maison mozabite traditionnelle, aux murs épais qui préservent la fraîcheur face à la chaleur du désert."
          },
          {
            "place": "Les palmeraies et les foggaras",
            "text": "Des jardins irrigués depuis mille ans par la foggara — ces galeries souterraines qui rendent la vie possible dans cette vallée aride."
          }
        ]
      },
      {
        "day": 2,
        "title": "Les cités du M'Zab",
        "body": "Journée entre Beni Isguen, El Atteuf et Melika : mosquées, remparts, cimetières et palmeraies, avec les explications d'un guide mozabite.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La cité sainte fortifiée du M'Zab, dont on franchit l'ancienne porte, où la tenue vestimentaire et les photographies obéissent aux usages locaux."
          },
          {
            "place": "L'éco-cité de Tafilelt",
            "text": "Un établissement mozabite moderne bâti selon les principes traditionnels — la preuve que les idées de la vallée sont toujours vivantes."
          },
          {
            "place": "Safari en 4×4 vers El Guerrara",
            "text": "Le désert à perte de vue au-delà des cités, jusqu'à un dîner sous les étoiles."
          }
        ]
      },
      {
        "day": 3,
        "title": "Palmeraies, foggaras et désert",
        "body": "Matinée dans les jardins et le système hydraulique de la vallée, puis sortie en 4×4 dans le désert avant le départ.",
        "stops": [
          {
            "place": "Petit-déjeuner sur la terrasse",
            "text": "Un dernier petit-déjeuner à la maison d'hôtes face au ksar qui s'étage sur la colline — la plus belle demi-heure de la journée dans le M'Zab."
          },
          {
            "place": "La vieille place du marché",
            "text": "Une dernière heure sous les arcades du marché de Ghardaïa pour les tapis, les dattes et la laine mozabite, si l'horaire du vol le permet."
          },
          {
            "place": "L'aéroport Noumérat–Moufdi Zakaria",
            "text": "Le transfert privé hors de la vallée, avec une assistance à l'enregistrement pour le vol vers le nord."
          }
        ]
      }
    ],
    "includes": [
      "Transferts aéroport à Ghardaïa",
      "Hébergement 2 nuits",
      "Guide privé licencié",
      "Guide local pour Beni Isguen",
      "Transport privé",
      "Sortie 4×4 dans le désert",
      "Petits déjeuners"
    ],
    "excludes": [
      "Vols",
      "Frais de visa",
      "Assurance voyage",
      "Déjeuners et dîners",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril"
      },
      {
        "label": "Tenue",
        "value": "Vallée conservatrice — tenue couvrante"
      },
      {
        "label": "Photographie",
        "value": "Restreinte à Beni Isguen — suivez votre guide"
      },
      {
        "label": "Accès",
        "value": "Vol Alger–Ghardaïa, environ 1h"
      }
    ],
    "faqs": [
      {
        "q": "Pourquoi la vallée du M'Zab est-elle classée à l'UNESCO ?",
        "a": "Pour l'exceptionnelle cohérence de son urbanisme : cinq cités du XIe siècle conçues comme un système complet — défense, habitat, eau, palmeraie — encore habité et fonctionnel aujourd'hui."
      },
      {
        "q": "Peut-on visiter Beni Isguen librement ?",
        "a": "Non. La cité sainte se visite avec un guide local mandaté, à des horaires précis, et la photographie y est restreinte. C'est une règle de la communauté, pas une formalité touristique."
      },
      {
        "q": "Comment se rendre à Ghardaïa ?",
        "a": "Le plus simple est le vol depuis Alger, environ une heure. La route est possible mais longue — comptez une journée complète."
      },
      {
        "q": "Quelle tenue adopter ?",
        "a": "Couvrante pour tous : épaules et genoux couverts, vêtements amples. La vallée est nettement plus conservatrice que la côte."
      }
    ]
  },
  "timimoun-desert-escape": {
    "title": "Timimoun — 5 jours dans l'oasis rouge du Gourara",
    "duration": "5 jours · 4 nuits",
    "hook": "Cinq jours dans l'oasis rouge de Timimoun — ksour et palmeraies, foggaras anciennes, grandes dunes et une nuit au campement du désert.",
    "full": true,
    "seoTitle": "Circuit Timimoun 5 jours — Oasis rouge du Gourara",
    "seoDescription": "Circuit privé de 5 jours à Timimoun, l'oasis rouge du Gourara : architecture soudanaise, ksour, foggaras, palmeraies, grandes dunes et bivouac.",
    "overview": "Timimoun porte bien son surnom d'oasis rouge : l'architecture y est en banco ocre, de style soudanais, et la ville domine une sebkha et une immense palmeraie. Autour d'elle, le Gourara aligne des dizaines de ksour, villages fortifiés reliés par des foggaras — ces galeries drainantes creusées à la main qui amènent l'eau depuis la nappe. C'est une région d'oasis habitées plutôt qu'un désert vide, et c'est ce qui en fait la richesse. Le circuit alterne villages, jardins, art de vivre saharien et sorties dans les dunes du Grand Erg Occidental.",
    "highlights": [
      "Timimoun et son architecture rouge de style soudanais",
      "Les ksour du Gourara et leurs ruelles couvertes",
      "Les foggaras, patrimoine hydraulique vivant",
      "Les grandes dunes du Grand Erg Occidental",
      "L'Ahellil, poésie chantée classée à l'UNESCO",
      "Une nuit sous tente au campement du désert"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Timimoun",
        "body": "Accueil et installation, premier tour de la ville rouge et coucher de soleil sur la palmeraie et la sebkha.",
        "stops": [
          {
            "place": "Timimoun",
            "text": "L'« oasis rouge » du Gourara — une ville entière bâtie en architecture de terre ocre-rouge de style soudanais, dominant un lac salé."
          },
          {
            "place": "La maison d'hôtes Ti Massin",
            "text": "Une demeure traditionnelle en terre rouge, faite de cours et de terrasses, qui sert de point d'ancrage pour tout le séjour."
          },
          {
            "place": "L'escarpement au coucher du soleil",
            "text": "La corniche dominant la sebkha, où les murs de Timimoun virent à l'orange profond dans les dernières lumières, avant un dîner traditionnel."
          }
        ]
      },
      {
        "day": 2,
        "title": "Les ksour du Gourara",
        "body": "Journée dans les villages fortifiés autour de l'oasis : ruelles couvertes, mosquées de terre et vie des jardins.",
        "stops": [
          {
            "place": "Le ksar Guentour et sa palmeraie",
            "text": "Un ksar de terre rouge dominant sa palmeraie — l'architecture classique du Gourara."
          },
          {
            "place": "Le ksar et l'oasis de Tala",
            "text": "Une autre oasis aux tours de terre dressées parmi les palmiers."
          },
          {
            "place": "Coucher de soleil sur les dunes et soirée musicale",
            "text": "Le sable au crépuscule, suivi d'une soirée de musique traditionnelle du Gourara."
          }
        ]
      },
      {
        "day": 3,
        "title": "Foggaras et palmeraies",
        "body": "Découverte du système des foggaras et des jardins qu'elles irriguent, avec les hommes qui les entretiennent encore.",
        "stops": [
          {
            "place": "Les foggaras d'Ouled Saïd",
            "text": "D'antiques galeries souterraines qui acheminent l'eau vers les jardins — l'ingéniosité saharienne dans toute sa finesse."
          },
          {
            "place": "Beni Aïssi et son ksar",
            "text": "Un pique-nique dans la palmeraie et un thé au pied d'un vieux ksar."
          },
          {
            "place": "Les grandes dunes",
            "text": "Le coucher du soleil sur les hautes dunes."
          }
        ]
      },
      {
        "day": 4,
        "title": "Le Grand Erg et le bivouac",
        "body": "Sortie en 4×4 vers les grandes dunes, coucher de soleil et nuit au campement du désert.",
        "stops": [
          {
            "place": "Le site d'Ighzer",
            "text": "Un site désertique exploré dans la fraîcheur du matin."
          },
          {
            "place": "Safari en 4×4 dans les dunes",
            "text": "Des dunes dorées jusqu'à un coucher de soleil panoramique."
          },
          {
            "place": "Un dîner de campement « Merdoum »",
            "text": "Un festin traditionnel de Merdoum, cuit dans le sable, savouré sous les étoiles."
          }
        ]
      },
      {
        "day": 5,
        "title": "Départ",
        "body": "Retour à Timimoun et transfert vers l'aéroport.",
        "stops": [
          {
            "place": "Le marché de Timimoun",
            "text": "Le marché de la ville rouge, pour les épices et l'artisanat."
          },
          {
            "place": "Le vieux quartier du ksar",
            "text": "Une dernière promenade dans les ruelles de terre rouge et les passages couverts à arcades de la vieille ville."
          },
          {
            "place": "La route vers le nord",
            "text": "Le transfert retour vers Alger, le long de la lisière nord du Grand Erg Occidental."
          }
        ]
      }
    ],
    "includes": [
      "Transferts aéroport",
      "Hébergement 4 nuits",
      "Guide privé licencié",
      "Transport 4×4",
      "Sortie dans les dunes et bivouac",
      "Petits déjeuners"
    ],
    "excludes": [
      "Vols",
      "Frais de visa",
      "Assurance voyage",
      "Déjeuners et dîners",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril"
      },
      {
        "label": "Nuits",
        "value": "Fraîches en hiver — prévoyez des couches"
      },
      {
        "label": "Rythme",
        "value": "Détendu, avec des routes courtes"
      },
      {
        "label": "Accès",
        "value": "Vol depuis Alger"
      }
    ],
    "faqs": [
      {
        "q": "Qu'est-ce qu'une foggara ?",
        "a": "Une galerie souterraine creusée à la main qui amène l'eau de la nappe jusqu'aux jardins par simple gravité, puis la répartit entre les familles selon un partage codifié depuis des siècles."
      },
      {
        "q": "Pourquoi Timimoun est-elle rouge ?",
        "a": "Les constructions sont en banco — terre crue mêlée de paille — d'une teinte ocre-rouge caractéristique, dans un style dit soudanais que l'on retrouve du Sahel au Sahara."
      },
      {
        "q": "Qu'est-ce que l'Ahellil ?",
        "a": "Une poésie chantée collective du Gourara, inscrite par l'UNESCO au patrimoine culturel immatériel de l'humanité en 2008."
      },
      {
        "q": "Est-ce accessible en famille ?",
        "a": "Oui. Le rythme est doux, les distances courtes et l'hospitalité des oasis rend le voyage facile avec des adolescents."
      }
    ]
  },
  "algeria-cultural-tour": {
    "title": "Circuit culturel en Algérie — 5 jours",
    "duration": "5 jours · 4 nuits",
    "hook": "Cinq jours au cœur de l'Algérie — la Casbah d'Alger classée UNESCO, la côte romaine de Tipaza et la vallée du M'Zab, avec un guide privé licencié.",
    "full": true,
    "seoTitle": "Circuit culturel Algérie 5 jours — Alger, Tipaza, M'Zab",
    "seoDescription": "Circuit privé de 5 jours en Algérie : la Casbah d'Alger, les ruines romaines de Tipaza et Cherchell, et la vallée du M'Zab, avec guide licencié.",
    "overview": "C'est l'Algérie en miniature : la capitale blanche, la côte romaine et le désert, en cinq jours sans course. Vous parcourez la Casbah d'Alger, inscrite à l'UNESCO, puis suivez la Méditerranée jusqu'aux ruines de Tipaza et au musée de Cherchell, avant de rejoindre Ghardaïa par avion pour entrer dans la vallée du M'Zab — cinq cités-oasis fortifiées bâties il y a mille ans par les Mozabites ibadites. Côte, culture et Sahara, avec un guide privé et une vraie cuisine algérienne en chemin.",
    "highlights": [
      "La Casbah d'Alger, patrimoine mondial de l'UNESCO",
      "Tipaza, cité romaine au bord de la Méditerranée",
      "Le musée archéologique de Cherchell",
      "La vallée du M'Zab et ses cinq cités ibadites",
      "Guide privé licencié pendant tout le séjour",
      "Cuisine algérienne quotidienne, loin des menus touristiques"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Alger",
        "body": "Accueil à l'aéroport Houari Boumediene et installation. Première découverte de la baie et du front de mer.",
        "stops": [
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Accueil dans le terminal par votre guide, avec un transfert direct vers la ville dès la première heure sur place."
          },
          {
            "place": "La route de la baie d'Alger",
            "text": "L'arrivée se fait par la corniche, avec les terrasses blanches de la capitale étagées au-dessus du port."
          },
          {
            "place": "Alger et le front de mer",
            "text": "Installation à l'hôtel puis une soirée libre pour longer les arcades du front de mer avant le début des visites."
          }
        ]
      },
      {
        "day": 2,
        "title": "Alger et la Casbah",
        "body": "Journée dans la capitale : la Casbah, les boulevards coloniaux, la Grande Mosquée et les points de vue sur la baie.",
        "stops": [
          {
            "place": "La Casbah d'Alger",
            "text": "La citadelle ottomane classée UNESCO, un labyrinthe blanc escarpé de palais, de mosquées et de maisons à cour qui grimpe au-dessus de la baie."
          },
          {
            "place": "La Grande Mosquée d'Alger",
            "text": "La plus ancienne mosquée du pays, au pied de la Casbah, au bout des boulevards hérités de l'époque coloniale."
          },
          {
            "place": "Les belvédères sur la baie d'Alger",
            "text": "Des points de vue depuis les hauteurs de la ville offrant un panorama sur toute la baie et le port."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza et Cherchell",
        "body": "Route vers l'ouest le long de la côte : les ruines romaines de Tipaza en bord de mer, le Mausolée royal de Maurétanie et le musée de Cherchell.",
        "stops": [
          {
            "place": "Les ruines romaines de Tipaza",
            "text": "Un port romain classé UNESCO égrené le long de la Méditerranée, entre basiliques, thermes et théâtre les pieds dans les vagues."
          },
          {
            "place": "Le Mausolée royal de Maurétanie",
            "text": "Un vaste tambour de pierre sur une colline dominant la mer, tombeau du 1er siècle avant J.-C. du roi berbère Juba II et de Cléopâtre Séléné, fille de Cléopâtre d'Égypte."
          },
          {
            "place": "Le musée de Cherchell",
            "text": "L'ancienne capitale de Juba II, dont le musée conserve certaines des plus belles mosaïques et statues romaines et grecques d'Algérie."
          }
        ]
      },
      {
        "day": 4,
        "title": "Vol vers Ghardaïa et le M'Zab",
        "body": "Vol vers le sud et entrée dans la vallée du M'Zab : Ghardaïa, son marché et ses ruelles en amphithéâtre.",
        "stops": [
          {
            "place": "Le vol vers Ghardaïa",
            "text": "Un court vol vers le sud fait passer en une heure des rivages méditerranéens aux confins du Sahara."
          },
          {
            "place": "Ghardaïa",
            "text": "La ville principale du M'Zab, pyramide de maisons classée UNESCO qui grimpe jusqu'à la mosquée et son minaret au sommet."
          },
          {
            "place": "Le marché de Ghardaïa",
            "text": "La place à arcades étagée sous un minaret-pyramide, cœur battant du M'Zab depuis un millénaire."
          }
        ]
      },
      {
        "day": 5,
        "title": "Beni Isguen et départ",
        "body": "Visite de la cité sainte de Beni Isguen avec un guide local, puis retour et départ.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La ville sainte et fortifiée du M'Zab, franchie par son ancienne porte, où la tenue et la photographie suivent des règles locales strictes."
          },
          {
            "place": "Le retour vers Alger",
            "text": "Un vol retour vers le nord ramène le groupe de la vallée du M'Zab jusqu'à la capitale."
          },
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Le transfert privé jusqu'à l'aéroport et l'assistance jusqu'à l'enregistrement pour le vol retour."
          }
        ]
      }
    ],
    "includes": [
      "Tous les transferts",
      "Hébergement 4 nuits",
      "Guide privé licencié",
      "Transport privé",
      "Entrées des sites",
      "Petits déjeuners"
    ],
    "excludes": [
      "Vols internationaux",
      "Vol intérieur Alger–Ghardaïa",
      "Frais de visa",
      "Assurance voyage",
      "Déjeuners et dîners",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril"
      },
      {
        "label": "Rythme",
        "value": "Modéré, avec du temps sur chaque site"
      },
      {
        "label": "Tenue",
        "value": "Couvrante dans le M'Zab"
      },
      {
        "label": "Départ",
        "value": "Alger — aéroport Houari Boumediene"
      }
    ],
    "faqs": [
      {
        "q": "Ce circuit convient-il pour une première visite ?",
        "a": "Oui, c'est le meilleur format pour un premier voyage : il donne les trois visages du pays — capitale, héritage romain et Sahara — sans distances excessives."
      },
      {
        "q": "Le vol intérieur est-il inclus ?",
        "a": "Non, il est réservé séparément. Nous nous chargeons de la réservation et vous indiquons les horaires qui fonctionnent avec le programme."
      },
      {
        "q": "Faut-il un visa ?",
        "a": "Oui, pour la quasi-totalité des nationalités, à obtenir avant le départ auprès d'un consulat algérien. Nous fournissons l'invitation et le programme confirmé demandés."
      },
      {
        "q": "Peut-on adapter le circuit ?",
        "a": "Oui. Tous nos circuits sont privés : durée, rythme et étapes s'ajustent à votre calendrier."
      }
    ]
  },
  "algeria-tour": {
    "title": "Algérie complète — grand circuit de 10 jours",
    "duration": "10 jours · 9 nuits",
    "hook": "Dix jours à travers l'Algérie — Alger et sa Casbah, la côte romaine, l'est et ses cités antiques, et le Sahara. Le tour complet du pays.",
    "full": true,
    "seoTitle": "Grand circuit Algérie 10 jours — Nord, Est et Sahara",
    "seoDescription": "Grand circuit privé de 10 jours en Algérie : Alger, la côte romaine de Tipaza, Constantine et l'est antique, puis le Sahara. Guide licencié.",
    "overview": "Dix jours, c'est la première durée qui permet de relier le nord et le désert sans les traiter en coup de vent. Ce grand circuit part d'Alger et de sa Casbah, suit la côte romaine jusqu'à Tipaza et Cherchell, remonte vers l'est et ses cités antiques — Djémila, Timgad — et la ville-pont de Constantine, puis bascule vers le sud pour l'expérience saharienne. C'est le format que nous recommandons à qui vient de loin et ne reviendra pas de sitôt.",
    "highlights": [
      "La Casbah d'Alger et la baie",
      "Tipaza et Cherchell, la côte romaine",
      "Djémila et Timgad, cités romaines classées UNESCO",
      "Constantine, la ville des ponts sur ses gorges",
      "Une étape saharienne complète",
      "Guide privé licencié du premier au dernier jour"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Alger",
        "body": "Accueil et installation dans la capitale, premier contact avec la baie et le front de mer.",
        "stops": [
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Accueil à l'arrivée et transfert direct vers la ville, la partie logistique du premier jour prise en charge de bout en bout."
          },
          {
            "place": "La baie d'Alger",
            "text": "La route longe le front de mer à l'arrivée, avec la capitale blanche étagée en amphithéâtre au-dessus du port."
          },
          {
            "place": "Installation à Alger",
            "text": "Installation à l'hôtel puis une soirée libre sur le front de mer avant le début du circuit."
          }
        ]
      },
      {
        "day": 2,
        "title": "Alger et la Casbah",
        "body": "La Casbah classée UNESCO, les boulevards coloniaux, la Grande Mosquée et les musées.",
        "stops": [
          {
            "place": "La Casbah d'Alger",
            "text": "La citadelle ottomane classée UNESCO, un labyrinthe blanc escarpé de palais, de mosquées et de maisons à cour qui grimpe au-dessus de la baie."
          },
          {
            "place": "La Grande Mosquée d'Alger",
            "text": "La plus ancienne mosquée du pays, au pied de la Casbah, au bout des boulevards hérités de l'époque coloniale."
          },
          {
            "place": "Le musée national des Moudjahidine",
            "text": "Un musée retraçant l'histoire militaire de l'Algérie de l'Antiquité à 1962, à deux pas du Sanctuaire du Martyr."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza et Cherchell",
        "body": "La côte romaine à l'ouest d'Alger : ruines en bord de mer, mausolée royal et musée de Cherchell.",
        "stops": [
          {
            "place": "Les ruines romaines de Tipaza",
            "text": "Un port romain classé UNESCO égrené le long de la Méditerranée, entre basiliques, thermes et théâtre les pieds dans les vagues."
          },
          {
            "place": "Le Mausolée royal de Maurétanie",
            "text": "Un vaste tambour de pierre sur une colline dominant la mer, tombeau du 1er siècle avant J.-C. du roi berbère Juba II et de Cléopâtre Séléné, fille de Cléopâtre d'Égypte."
          },
          {
            "place": "Le musée de Cherchell",
            "text": "L'ancienne capitale de Juba II, dont le musée conserve certaines des plus belles mosaïques et statues romaines et grecques d'Algérie."
          }
        ]
      },
      {
        "day": 4,
        "title": "Vers l'est",
        "body": "Route vers l'est du pays à travers les hauts plateaux, avec les paysages de la Kabylie et des plaines céréalières.",
        "stops": [
          {
            "place": "La route vers l'est",
            "text": "La traversée des hauts plateaux relie la côte aux terres intérieures sur plusieurs heures de route."
          },
          {
            "place": "Les paysages de Kabylie",
            "text": "Les reliefs verdoyants et les villages perchés de Kabylie défilent en bordure de route."
          },
          {
            "place": "Les plaines céréalières des hauts plateaux",
            "text": "De vastes étendues de blé et d'orge s'ouvrent à l'approche du soir, annonçant l'arrivée dans l'Est algérien."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "La cité romaine de Djémila dans son cirque de collines — l'un des sites les mieux préservés d'Afrique du Nord.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Une cité romaine classée UNESCO nichée dans un cirque de montagnes verdoyantes, remarquablement conservée, avec son forum, ses temples et son théâtre en pente raide."
          },
          {
            "place": "Les mosaïques de Djémila",
            "text": "Des mosaïques in situ parmi les plus riches du monde romain, présentées dans le musée du site."
          },
          {
            "place": "La route vers Constantine",
            "text": "Le trajet se poursuit ensuite vers Constantine, où le groupe passe la nuit."
          }
        ]
      },
      {
        "day": 6,
        "title": "Constantine",
        "body": "La ville des ponts : les gorges du Rhumel, le palais Ahmed Bey, le musée de Cirta et la vieille ville.",
        "stops": [
          {
            "place": "Les gorges du Rhumel et les ponts de Constantine",
            "text": "La ville des ponts, suspendue au-dessus des vertigineuses gorges du Rhumel, avec sa passerelle Sidi M'Cid lancée dans le vide."
          },
          {
            "place": "Le palais Ahmed Bey",
            "text": "Le palais ottoman du début du XIXe siècle du dernier bey, avec ses galeries peintes et ses cours ombragées."
          },
          {
            "place": "Le musée de Cirta et la vieille ville",
            "text": "Le musée de Cirta rassemble les collections numides et romaines de l'antique cité, au cœur de la vieille ville de Constantine."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timgad",
        "body": "Timgad, colonie romaine fondée par Trajan et la cité en damier la plus complète qui subsiste.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonie de Trajan fondée en l'an 100, la Pompéi des Aurès, déployée en damier sur la plaine."
          },
          {
            "place": "L'Arc de Trajan",
            "text": "L'arc de triomphe qui encadre l'artère principale de Timgad, silhouette emblématique du site."
          },
          {
            "place": "La bibliothèque et le théâtre de Timgad",
            "text": "Les vestiges d'une rare bibliothèque publique romaine et d'un théâtre de 3 500 places toujours en usage aujourd'hui."
          }
        ]
      },
      {
        "day": 8,
        "title": "Vers le Sahara",
        "body": "Descente vers le sud et entrée dans le monde des oasis.",
        "stops": [
          {
            "place": "La route vers le sud, à travers l'Atlas",
            "text": "La route quitte le Tell, traverse les hauts plateaux et descend vers le pré-Sahara, le trajet où l'Algérie change de climat."
          },
          {
            "place": "Ghardaïa",
            "text": "La ville principale du M'Zab, pyramide de maisons classée UNESCO qui grimpe jusqu'à la mosquée et son minaret au sommet."
          },
          {
            "place": "Une auberge traditionnelle du M'Zab",
            "text": "Installation dans une maison mozabite restaurée, avec ses murs épais, sa cour intérieure et sa terrasse sur la vallée."
          }
        ]
      },
      {
        "day": 9,
        "title": "Journée saharienne",
        "body": "Palmeraies, ksour et dunes, avec une soirée dans le désert.",
        "stops": [
          {
            "place": "Les palmeraies et les foggaras du M'Zab",
            "text": "Des jardins irrigués depuis un millénaire par la foggara, ces galeries souterraines qui rendent la vie possible dans cette vallée aride."
          },
          {
            "place": "Les ksour du M'Zab : Beni Isguen",
            "text": "La ville sainte et fortifiée de Beni Isguen, franchie par son ancienne porte, où la tenue et la photographie suivent des règles locales strictes."
          },
          {
            "place": "Les dunes et la soirée dans le désert",
            "text": "Un après-midi sur le sable aux portes du Sahara, suivi d'un dîner traditionnel sous les étoiles."
          }
        ]
      },
      {
        "day": 10,
        "title": "Retour et départ",
        "body": "Retour vers Alger et transfert aéroport.",
        "stops": [
          {
            "place": "Le retour vers Alger",
            "text": "La route ou le vol retour ramène le groupe des oasis du sud jusqu'à la capitale."
          },
          {
            "place": "Derniers achats à Alger",
            "text": "Argenterie kabyle, cuir touareg, dattes Deglet Nour et pâtisseries à emporter avant le départ."
          },
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Le transfert privé jusqu'à l'aéroport et l'assistance jusqu'à l'enregistrement."
          }
        ]
      }
    ],
    "includes": [
      "Tous les transferts",
      "Hébergement 9 nuits",
      "Guide privé licencié",
      "Transport privé",
      "Entrées des sites",
      "Petits déjeuners"
    ],
    "excludes": [
      "Vols internationaux et intérieurs",
      "Frais de visa",
      "Assurance voyage",
      "Déjeuners et dîners",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril"
      },
      {
        "label": "Rythme",
        "value": "Soutenu mais réaliste"
      },
      {
        "label": "Distances",
        "value": "Longues — un vol intérieur est prévu"
      },
      {
        "label": "Départ",
        "value": "Alger"
      }
    ],
    "faqs": [
      {
        "q": "Dix jours suffisent-ils pour voir l'Algérie ?",
        "a": "Pour l'essentiel, oui. C'est la première durée qui permet de combiner le nord et un vrai passage au Sahara sans passer ses journées sur la route."
      },
      {
        "q": "Y a-t-il beaucoup de route ?",
        "a": "L'Algérie est le plus grand pays d'Afrique et les distances sont réelles. Le programme intègre un vol intérieur pour éviter les trajets les plus longs."
      },
      {
        "q": "Le circuit est-il privé ?",
        "a": "Oui, entièrement : votre guide, votre véhicule, votre rythme. Rien n'est mutualisé avec d'autres groupes."
      },
      {
        "q": "Peut-on partir à deux ?",
        "a": "Oui. La plupart de nos départs se font en couple ou en petit groupe familial."
      }
    ]
  },
  "oran-mostaganem-tlemcen": {
    "title": "L'Ouest algérien : Oran, Mostaganem et Tlemcen — 5 jours",
    "duration": "5 jours · 4 nuits",
    "hook": "Cinq jours dans l'ouest algérien — le port d'Oran, les plages de Mostaganem et l'héritage andalou de Tlemcen : mosquée, palais et cascades.",
    "full": true,
    "seoTitle": "Circuit Ouest algérien 5 jours — Oran et Tlemcen",
    "seoDescription": "Circuit privé de 5 jours dans l'ouest de l'Algérie : Oran et Santa Cruz, les plages de Mostaganem et l'héritage andalou de Tlemcen.",
    "overview": "L'ouest algérien est la part andalouse du pays. Oran, deuxième ville et grand port, mêle architecture espagnole et française sous le fort de Santa Cruz, et a donné le raï au monde. Mostaganem aligne des plages et un vieux quartier ottoman au-dessus de la mer. Et Tlemcen, capitale culturelle de l'Algérie andalouse, conserve la Grande Mosquée, le minaret de Mansourah, le palais El Mechouar, le sanctuaire de Sidi Boumediene et une tradition musicale gharnati toujours vivante.",
    "highlights": [
      "Oran, Santa Cruz et la baie",
      "La place du 1er Novembre et le centre historique",
      "Les plages et le vieux Tigditt de Mostaganem",
      "La Grande Mosquée de Tlemcen",
      "Mansourah, El Mechouar et Sidi Boumediene",
      "Les cascades d'El Ourit et la musique gharnati"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Oran",
        "body": "Accueil et installation, première découverte du front de mer et du centre.",
        "stops": [
          {
            "place": "Le fort de Santa Cruz",
            "text": "Une forteresse espagnole du XVIe siècle sur le mont Murdjadjo, offrant la plus belle vue sur Oran et la mer."
          },
          {
            "place": "La place du 1er Novembre",
            "text": "La grande place centrale d'Oran, bordée de façades coloniales et de l'opéra."
          },
          {
            "place": "Sidi El Houari",
            "text": "Le plus vieux quartier d'Oran, avec ses vestiges ottomans et espagnols autour du vieux port."
          }
        ]
      },
      {
        "day": 2,
        "title": "Oran",
        "body": "Le fort de Santa Cruz, la vieille ville, le port et la ville espagnole et française.",
        "stops": [
          {
            "place": "Le musée national Ahmed Zabana",
            "text": "Le grand musée d'Oran — histoire naturelle, beaux-arts et passé profond de la région."
          },
          {
            "place": "Le Sacré-Cœur",
            "text": "Une ancienne cathédrale emblématique, devenue bibliothèque publique, qui ancre la ville moderne."
          },
          {
            "place": "La corniche",
            "text": "La promenade méditerranéenne d'Oran, lieu de rendez-vous du soir."
          }
        ]
      },
      {
        "day": 3,
        "title": "Mostaganem",
        "body": "Route vers l'est le long de la côte : plages, vieux quartier de Tigditt et Bordj Ettork.",
        "stops": [
          {
            "place": "Les plages de Mostaganem",
            "text": "De longues plages méditerranéennes sur le littoral du Dahra — une parenthèse balnéaire tout en détente."
          },
          {
            "place": "Bordj El Mehal, l'ancien fort",
            "text": "Un fort de l'époque ottomane dominant la ville, témoin du passé stratégique de Mostaganem."
          },
          {
            "place": "Le quartier de Tigditt",
            "text": "Le quartier historique aux ruelles escarpées surplombant la rivière."
          }
        ]
      },
      {
        "day": 4,
        "title": "Tlemcen",
        "body": "Journée andalouse : Grande Mosquée, Mansourah, El Mechouar et Sidi Boumediene.",
        "stops": [
          {
            "place": "La Grande Mosquée de Tlemcen",
            "text": "Un chef-d'œuvre almoravide du XIIe siècle, dont le mihrab sculpté compte parmi les plus beaux du Maghreb."
          },
          {
            "place": "Le palais El Mechouar",
            "text": "La citadelle-palais restaurée des sultans zianides qui firent de Tlemcen une capitale."
          },
          {
            "place": "Le plateau de Lalla Setti",
            "text": "Un plateau verdoyant dominant la ville, avec panoramas, jardins et une montée en téléphérique."
          }
        ]
      },
      {
        "day": 5,
        "title": "El Ourit et départ",
        "body": "Les cascades d'El Ourit et le plateau de Lalla Setti avant le transfert.",
        "stops": [
          {
            "place": "Le plateau de Lalla Setti",
            "text": "La haute terrasse du parc national de Tlemcen dominant la ville, avec toute la médina et sa plaine déployées en contrebas."
          },
          {
            "place": "Les cascades d'El Ourit",
            "text": "Des cascades qui dévalent des falaises boisées du parc national de Tlemcen, à l'est de la ville."
          },
          {
            "place": "Mansourah",
            "text": "Le grand minaret en ruine d'une ville de siège du XIVe siècle, aux portes de Tlemcen."
          }
        ]
      }
    ],
    "includes": [
      "Transferts",
      "Hébergement 4 nuits",
      "Guide privé licencié",
      "Transport privé",
      "Entrées des sites",
      "Petits déjeuners"
    ],
    "excludes": [
      "Vols",
      "Frais de visa",
      "Assurance voyage",
      "Déjeuners et dîners",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Avril à juin, septembre à novembre"
      },
      {
        "label": "Rythme",
        "value": "Modéré"
      },
      {
        "label": "Départ",
        "value": "Oran — aéroport Ahmed Ben Bella"
      },
      {
        "label": "Musique",
        "value": "Raï à Oran, gharnati à Tlemcen"
      }
    ],
    "faqs": [
      {
        "q": "Pourquoi visiter Tlemcen ?",
        "a": "C'est le cœur de l'héritage andalou en Algérie : mosquées, palais et sanctuaires du XIIe au XIVe siècle, dans une ville qui a conservé sa musique et son artisanat."
      },
      {
        "q": "Peut-on relier ce circuit à Alger ?",
        "a": "Oui. Oran est reliée à Alger par vol, train et autoroute — nous ajustons le programme selon votre point d'arrivée."
      },
      {
        "q": "Est-ce une région balnéaire ?",
        "a": "La côte est belle et les plages de Mostaganem sont réelles, mais ce circuit reste culturel avant tout."
      },
      {
        "q": "Qu'est-ce que le gharnati ?",
        "a": "Une école de musique arabo-andalouse héritée de Grenade, dont Tlemcen est le foyer principal en Algérie."
      }
    ]
  },
  "algeria-through-time-and-tradition": {
    "title": "Algérie romaine — Tipaza, Djémila et Timgad (3 jours)",
    "duration": "3 jours · 2 nuits",
    "hook": "Trois jours à travers le plus bel héritage romain d'Algérie — les ruines maritimes de Tipaza et Cherchell, Djémila à flanc de colline et le damier de Timgad.",
    "full": true,
    "seoTitle": "Circuit Algérie romaine 3 jours — Tipaza, Djémila, Timgad",
    "seoDescription": "Circuit privé de 3 jours sur les cités romaines d'Algérie : Tipaza et Cherchell au bord de la mer, Djémila dans ses collines et Timgad.",
    "overview": "L'Algérie conserve les cités romaines les mieux préservées du monde méditerranéen, précisément parce que le tourisme de masse n'y est jamais arrivé. En trois jours, ce circuit relie les trois plus belles : Tipaza, posée sur le rivage, avec le Mausolée royal de Maurétanie au-dessus ; Djémila, dans un cirque de collines de l'est, dont le forum et les mosaïques sont d'une conservation rare ; et Timgad, colonie fondée par Trajan vers 100 après J.-C., la cité en damier la plus complète qui subsiste, avec son arc, son théâtre et sa bibliothèque.",
    "highlights": [
      "Tipaza, cité romaine en bord de Méditerranée",
      "Le Mausolée royal de Maurétanie",
      "Le musée archéologique de Cherchell",
      "Djémila et son forum dans les collines",
      "Timgad, l'arc de Trajan et la bibliothèque",
      "Des sites souvent déserts, même en pleine saison"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tipaza et Cherchell",
        "body": "Départ d'Alger vers la côte ouest : les ruines de Tipaza face à la mer, le Mausolée royal et le musée de Cherchell.",
        "stops": [
          {
            "place": "Tipaza romaine",
            "text": "Un port romain classé à l'UNESCO, étiré le long de la Méditerranée — basiliques, thermes et théâtre les pieds dans les vagues."
          },
          {
            "place": "Cherchell (l'antique Césarée)",
            "text": "L'ancienne capitale de Juba II, dont le musée abrite quelques-unes des plus belles mosaïques et statues romaines et grecques d'Algérie."
          },
          {
            "place": "Le Mausolée royal de Maurétanie",
            "text": "Un immense tambour de pierre sur une colline dominant la mer — le tombeau du 1er siècle avant J.-C. du roi berbère Juba II et de Cléopâtre Séléné, fille de Cléopâtre d'Égypte."
          }
        ]
      },
      {
        "day": 2,
        "title": "Djémila",
        "body": "Route vers l'est et journée à Djémila : le forum, les temples, les maisons et les mosaïques du musée.",
        "stops": [
          {
            "place": "Les rues à colonnades de Djémila",
            "text": "Portes monumentales et avenues pavées de la cité romaine nichée dans son cirque de montagnes."
          },
          {
            "place": "Le théâtre de Djémila",
            "text": "Un théâtre escarpé taillé à flanc de colline, qui domine toujours la vallée."
          },
          {
            "place": "Les mosaïques de Djémila",
            "text": "Des mosaïques parmi les plus riches du monde romain, conservées dans le musée du site."
          }
        ]
      },
      {
        "day": 3,
        "title": "Timgad",
        "body": "Timgad et son plan en damier intact : arc de Trajan, théâtre, thermes et bibliothèque, avant le retour.",
        "stops": [
          {
            "place": "L'arc de Trajan",
            "text": "L'arc de triomphe qui encadre l'artère principale de Timgad — la silhouette emblématique de la cité."
          },
          {
            "place": "La bibliothèque et le théâtre de Timgad",
            "text": "Les vestiges d'une rare bibliothèque publique romaine et d'un théâtre de 3 500 places toujours utilisé aujourd'hui."
          },
          {
            "place": "Le plan en damier, les thermes et les temples de Timgad",
            "text": "Le plan romain exemplaire qui a fait la renommée de Timgad."
          }
        ]
      }
    ],
    "includes": [
      "Transferts",
      "Hébergement 2 nuits",
      "Guide privé licencié",
      "Transport privé",
      "Entrées des sites",
      "Petits déjeuners"
    ],
    "excludes": [
      "Vols",
      "Frais de visa",
      "Assurance voyage",
      "Déjeuners et dîners",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Mars à juin, septembre à novembre"
      },
      {
        "label": "Marche",
        "value": "Sites étendus — bonnes chaussures"
      },
      {
        "label": "Ombre",
        "value": "Rare — chapeau et eau indispensables"
      },
      {
        "label": "Départ",
        "value": "Alger"
      }
    ],
    "faqs": [
      {
        "q": "Quelle est la plus impressionnante des trois ?",
        "a": "Timgad pour l'intégralité de son plan urbain, Djémila pour son cadre et ses mosaïques, Tipaza pour la mer. Les trois ensemble donnent la mesure de l'Afrique romaine."
      },
      {
        "q": "Y a-t-il beaucoup de visiteurs ?",
        "a": "Très peu. Il est courant de parcourir Timgad ou Djémila en croisant une poignée de personnes, ce qui est devenu introuvable ailleurs en Méditerranée."
      },
      {
        "q": "Les sites sont-ils aménagés ?",
        "a": "Sommairement. Il y a des musées de site et des gardiens, mais peu de signalétique : un guide change complètement la visite."
      },
      {
        "q": "Peut-on faire les trois en trois jours ?",
        "a": "Oui, mais les distances sont réelles. Le programme est dense et suppose des départs matinaux."
      }
    ]
  },
  "the-beauty-of-algeria": {
    "title": "Constantine et Timgad — 2 jours",
    "duration": "2 jours · 1 nuit",
    "hook": "Deux jours dans l'est algérien — la ville des ponts suspendue au-dessus des gorges du Rhumel, et la cité romaine de Timgad.",
    "full": true,
    "seoTitle": "Circuit Constantine et Timgad — 2 jours dans l'Est",
    "seoDescription": "Circuit privé de 2 jours dans l'est algérien : Constantine et les gorges du Rhumel, puis la cité romaine de Timgad classée à l'UNESCO.",
    "overview": "Deux jours pour l'essentiel de l'est algérien. Constantine est une ville impossible : bâtie sur un rocher fendu par les gorges du Rhumel, recousue par une série de ponts spectaculaires, et riche d'un passé qui remonte à Cirta, capitale numide. À une heure et demie de là, Timgad déploie dans la plaine le damier romain le plus complet qui subsiste. Le contraste entre la ville verticale et la cité géométrique fait tout l'intérêt de ce format court.",
    "highlights": [
      "Les gorges du Rhumel et les ponts de Constantine",
      "Le palais Ahmed Bey",
      "Le musée de Cirta",
      "Timgad, l'arc de Trajan et le théâtre",
      "La musique malouf de Constantine",
      "Un format court, idéal en complément"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Constantine",
        "body": "La ville des ponts : le pont Sidi M'Cid, les gorges, le palais Ahmed Bey, le musée de Cirta et la vieille ville.",
        "stops": [
          {
            "place": "Les ponts de Constantine",
            "text": "La « ville des ponts », suspendue au-dessus des vertigineuses gorges du Rhumel, avec la passerelle Sidi M'Cid jetée haut dans les airs."
          },
          {
            "place": "Le palais Ahmed Bey",
            "text": "Le palais ottoman du début du XIXe siècle du dernier bey, avec ses galeries peintes et ses cours ombragées."
          },
          {
            "place": "Le musée national de Cirta",
            "text": "Les antiquités de l'ancienne Cirta — mosaïques, bronzes et vestiges numides."
          }
        ]
      },
      {
        "day": 2,
        "title": "Timgad",
        "body": "Route vers le sud et journée à Timgad : le plan romain complet, l'arc de Trajan, le théâtre et le musée de mosaïques.",
        "stops": [
          {
            "place": "L'arc de Trajan",
            "text": "L'arc de triomphe qui encadre l'artère principale de Timgad — la silhouette emblématique de la cité."
          },
          {
            "place": "La bibliothèque et le théâtre de Timgad",
            "text": "Les vestiges d'une rare bibliothèque publique romaine et d'un théâtre de 3 500 places toujours utilisé aujourd'hui."
          },
          {
            "place": "Le forum et les temples de Timgad",
            "text": "Le cœur en damier de la colonie de Trajan, avec ses thermes et ses temples."
          }
        ]
      }
    ],
    "includes": [
      "Transferts",
      "Hébergement 1 nuit",
      "Guide privé licencié",
      "Transport privé",
      "Entrées des sites",
      "Petit déjeuner"
    ],
    "excludes": [
      "Vols",
      "Frais de visa",
      "Assurance voyage",
      "Déjeuners et dîners",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Avril à juin, septembre à novembre"
      },
      {
        "label": "Rythme",
        "value": "Dense sur deux jours"
      },
      {
        "label": "Départ",
        "value": "Constantine — aéroport Mohamed Boudiaf"
      },
      {
        "label": "Se combine avec",
        "value": "Djémila et Sétif"
      }
    ],
    "faqs": [
      {
        "q": "Pourquoi Constantine est-elle célèbre ?",
        "a": "Pour son site : une ville bâtie sur un piton rocheux fendu par un canyon de 200 mètres, franchi par des ponts qui font sa signature visuelle."
      },
      {
        "q": "Timgad vaut-elle le détour ?",
        "a": "C'est la cité romaine en damier la plus complète qui subsiste, souvent appelée la Pompéi de l'Afrique, et elle est presque toujours déserte."
      },
      {
        "q": "Comment rejoindre Constantine ?",
        "a": "Par vol depuis Alger, par train, ou par l'autoroute est-ouest."
      },
      {
        "q": "Deux jours suffisent-ils ?",
        "a": "Pour ces deux sites, oui. Si vous voulez y ajouter Djémila, comptez un jour de plus."
      }
    ]
  },
  "algeria-eastern-sahara-discovery": {
    "title": "Est algérien et Sahara — 6 jours",
    "duration": "6 jours · 5 nuits",
    "hook": "Six jours à travers l'est du pays — les ponts de Constantine, les cités romaines de Djémila et Timgad, une porte du Sahara à Bou Saada et une journée à Béjaïa.",
    "full": true,
    "seoTitle": "Circuit Est algérien 6 jours — Constantine, Timgad, Béjaïa",
    "seoDescription": "Circuit privé de 6 jours dans l'est algérien : Constantine, les cités romaines de Djémila et Timgad, Bou Saâda aux portes du Sahara et la côte de Béjaïa.",
    "overview": "Une grande boucle à travers l'est algérien, où cités romaines, gorges spectaculaires, portes du désert et Méditerranée se succèdent à moins d'une journée de route. Vous découvrez Constantine, la vertigineuse ville des ponts ; les cités romaines de Djémila et Timgad, classées à l'UNESCO ; la lisière des oasis autour de Bou Saâda et Biskra ; et une dernière journée côtière à Béjaïa. C'est l'itinéraire le plus riche à travers le nord-est du pays.",
    "highlights": [
      "Les ponts suspendus de Constantine",
      "Les ruines romaines de Djémila et Timgad, classées UNESCO",
      "Oasis et paysages désertiques autour de Bou Saâda",
      "La côte méditerranéenne à Béjaïa",
      "Alger, la capitale historique"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "D'Alger à Constantine",
        "body": "Arrivée à Alger puis route vers Constantine : les ponts suspendus, la mosquée Émir Abdelkader et la vieille ville. Nuit à Constantine.",
        "stops": [
          {
            "place": "Les ponts de Constantine",
            "text": "La « ville des ponts », suspendue au-dessus des vertigineuses gorges du Rhumel, avec la passerelle Sidi M'Cid jetée haut dans les airs."
          },
          {
            "place": "La mosquée Émir Abdelkader",
            "text": "L'une des plus grandes mosquées d'Afrique, dont les deux minarets sont devenus un repère moderne de Constantine."
          },
          {
            "place": "La vieille ville de Souika",
            "text": "Les ruelles serrées de la vieille médina de Constantine, accrochée au rocher."
          }
        ]
      },
      {
        "day": 2,
        "title": "De Constantine à Sétif",
        "body": "Route vers Sétif et la cité romaine de Djémila, classée à l'UNESCO, puis découverte du centre-ville et de la fontaine Aïn El Fouara. Nuit à Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Une cité romaine classée à l'UNESCO nichée dans des montagnes verdoyantes, superbement conservée — forum, temples et théâtre escarpé."
          },
          {
            "place": "Les mosaïques de Djémila",
            "text": "Des mosaïques parmi les plus riches du monde romain, conservées dans le musée du site."
          },
          {
            "place": "Aïn El Fouara, Sétif",
            "text": "La fontaine bien-aimée de 1898 au cœur de la ville, symbole indéfectible de Sétif."
          }
        ]
      },
      {
        "day": 3,
        "title": "De Sétif à Batna",
        "body": "Continuation vers Batna et la cité romaine de Timgad, classée à l'UNESCO — l'arc de Trajan, la bibliothèque et le théâtre. Nuit à Batna.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonie de Trajan bâtie en damier vers l'an 100 — la « Pompéi des Aurès », déployée à ciel ouvert sur la plaine."
          },
          {
            "place": "L'arc de Trajan",
            "text": "L'arc de triomphe qui encadre l'artère principale de Timgad — la silhouette emblématique de la cité."
          },
          {
            "place": "La bibliothèque et le théâtre de Timgad",
            "text": "Les vestiges d'une rare bibliothèque publique romaine et d'un théâtre de 3 500 places toujours utilisé aujourd'hui."
          }
        ]
      },
      {
        "day": 4,
        "title": "De Batna à Bou Saâda par Biskra",
        "body": "Traversée vers Biskra, porte du Sahara, pour ses palmeraies et ses paysages d'oasis, puis route vers Bou Saâda et ses marchés traditionnels. Nuit à Bou Saâda.",
        "stops": [
          {
            "place": "Les palmeraies de Biskra",
            "text": "La « reine des Ziban » — une grande oasis de palmiers-dattiers qui marque le véritable seuil du Sahara."
          },
          {
            "place": "Bou Saâda",
            "text": "La « ville du bonheur », une oasis chère aux peintres depuis longtemps."
          },
          {
            "place": "Les souks de Bou Saâda",
            "text": "Des marchés traditionnels pour l'argenterie, la laine et les dattes."
          }
        ]
      },
      {
        "day": 5,
        "title": "De Bou Saâda à Alger",
        "body": "Visite de la zaouïa d'El Hamel, sanctuaire soufi au-dessus de Bou Saâda, puis transfert vers Alger et soirée libre. Nuit à Alger.",
        "stops": [
          {
            "place": "La zaouïa d'El Hamel",
            "text": "Un sanctuaire soufi rahmaniyya et une école coranique perchés au-dessus de Bou Saâda — calme, austère et panoramique."
          },
          {
            "place": "Bou Saâda et les contreforts des Ouled Naïl",
            "text": "La « ville du bonheur » — une oasis de palmiers au pied de collines ocre dénudées, terre de peintres depuis le XIXe siècle."
          },
          {
            "place": "La route vers le nord jusqu'à Alger",
            "text": "En quittant la steppe à travers la plaine du Hodna puis par-delà le Tell atlasique, jusqu'à la capitale pour une soirée libre."
          }
        ]
      },
      {
        "day": 6,
        "title": "Béjaïa et départ",
        "body": "Excursion à Béjaïa : le fort Gouraya, le Cap Carbon et la côte kabyle, avant le transfert vers l'aéroport.",
        "stops": [
          {
            "place": "Le fort Gouraya, Béjaïa",
            "text": "Un fort dominant Béjaïa, avec de vastes panoramas sur la côte kabyle."
          },
          {
            "place": "Le Cap Carbon",
            "text": "Un cap spectaculaire et son phare, sur l'un des plus beaux littoraux de Méditerranée."
          },
          {
            "place": "La corniche de Béjaïa",
            "text": "La route en corniche entre Gouraya et le Cap Carbon, au-dessus des criques qui ont fait la renommée de ce littoral kabyle."
          }
        ]
      }
    ],
    "includes": [
      "Accueil à l'aéroport et transferts",
      "Véhicule climatisé",
      "Hébergement 5 nuits à l'hôtel",
      "Petits déjeuners",
      "Guide licencié",
      "Entrées des sites",
      "Excursion d'une journée à Béjaïa"
    ],
    "excludes": [
      "Vols internationaux",
      "Déjeuners et dîners",
      "Dépenses personnelles",
      "Assurance voyage",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Printemps et automne"
      },
      {
        "label": "Rythme",
        "value": "Modéré à soutenu — de la route chaque jour"
      },
      {
        "label": "Formule",
        "value": "Privé et guidé, 5 nuits avec petit déjeuner"
      },
      {
        "label": "À prévoir",
        "value": "Protection solaire, bonnes chaussures, chapeau"
      }
    ],
    "faqs": [
      {
        "q": "Quels sites UNESCO sont inclus ?",
        "a": "Les cités romaines de Djémila et Timgad."
      },
      {
        "q": "Y a-t-il beaucoup de route ?",
        "a": "Oui — c'est un itinéraire à travers tout l'est du pays, avec des trajets panoramiques chaque jour."
      },
      {
        "q": "La partie désert comprend-elle des bivouacs ?",
        "a": "Non. Vous atteignez les portes du Sahara autour de Bou Saâda et Biskra, sans campement dans le grand désert."
      },
      {
        "q": "Le petit déjeuner est-il inclus ?",
        "a": "Oui — petit déjeuner quotidien, ainsi que l'excursion à Béjaïa et les entrées des sites."
      }
    ]
  },
  "djanet-ghardaia-desert-2-days": {
    "title": "Djanet et Ghardaïa — 6 jours désert et patrimoine",
    "duration": "6 jours · 5 nuits",
    "hook": "Six jours réunissant les deux visages du Sahara algérien : les cités du M'Zab classées UNESCO et le grand désert autour de Djanet.",
    "full": true,
    "seoTitle": "Circuit Djanet et Ghardaïa 6 jours — Désert et M'Zab",
    "seoDescription": "Circuit privé de 6 jours entre Djanet et Ghardaïa : la Tadrart Rouge, l'art rupestre du Tassili n'Ajjer, les bivouacs sous les étoiles et la vallée du M'Zab.",
    "overview": "Le grand voyage saharien algérien par excellence, qui réunit les deux mondes du désert. Autour de Djanet, vous explorez le grès rouge sculpté de la Tadrart, les galeries préhistoriques du Tassili n'Ajjer, et passez les nuits en campement avec une équipe touarègue. Puis vous remontez vers Ghardaïa et la vallée du M'Zab, classée à l'UNESCO, où les cités-oasis fortifiées ont gardé intacte leur vie médiévale. Deux Saharas classés UNESCO en un seul voyage, en 4×4 et sous les étoiles.",
    "highlights": [
      "La Tadrart Rouge et ses formations de grès",
      "L'art rupestre préhistorique du Tassili n'Ajjer (UNESCO)",
      "Les nuits de bivouac dans le Sahara",
      "La culture touarègue et la cérémonie du thé",
      "Les cités de la vallée du M'Zab, classées UNESCO",
      "Les pistes en 4×4 et les couchers de soleil sur les dunes"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Djanet",
        "body": "Accueil à l'aéroport de Djanet et installation en maison d'hôtes ou au campement, avec une première sortie au coucher du soleil vers les dunes voisines et un dîner saharien traditionnel.",
        "stops": [
          {
            "place": "L'aéroport de Tiska, Djanet",
            "text": "Accueil à l'aéroport le plus austral d'Algérie, puis trajet à travers les palmeraies — 30 km entre le tarmac et l'oasis."
          },
          {
            "place": "Djanet et les dunes au coucher du soleil",
            "text": "Une oasis touarègue nichée sous des falaises rouges, avec une première excursion au coucher du soleil vers les dunes voisines."
          },
          {
            "place": "Un dîner de bienvenue saharien",
            "text": "Taguella cuite dans le sable, tajine et thé touareg, servis au campement ou à la maison d'hôtes pour votre première nuit dans le sud."
          }
        ]
      },
      {
        "day": 2,
        "title": "La Tadrart Rouge",
        "body": "Journée de 4×4 dans la Tadrart : formations rocheuses et gravures anciennes, pique-nique au désert, coucher de soleil sur les dunes rouges et nuit de bivouac sous les étoiles.",
        "stops": [
          {
            "place": "La Tadrart Rouge",
            "text": "Des canyons et arches de grès orange sculptés par le vent — parmi les paysages les plus spectaculaires du Sahara."
          },
          {
            "place": "Art rupestre préhistorique",
            "text": "Peintures et gravures de bergers, de chasseurs et d'animaux datant d'un Sahara verdoyant, vieilles de près de 10 000 ans — antérieures aux pyramides."
          },
          {
            "place": "Dunes rouges et campement sous les étoiles",
            "text": "Un pique-nique dans le désert, un coucher de soleil sur les dunes rouges et une nuit sous un ciel étoilé."
          }
        ]
      },
      {
        "day": 3,
        "title": "Le Tassili n'Ajjer",
        "body": "Découverte du plateau du Tassili et de ses peintures rupestres, à pied à travers canyons et paysages de grès, avec dîner et nuit au campement.",
        "stops": [
          {
            "place": "Le plateau du Tassili n'Ajjer",
            "text": "Une vaste « forêt de pierre » de grès, classée à l'UNESCO pour l'une des plus grandes concentrations d'art préhistorique au monde."
          },
          {
            "place": "Les peintures rupestres du Tassili",
            "text": "Des milliers de peintures de bergers et d'animaux d'un Sahara jadis plus humide, accessibles à pied à travers les canyons."
          },
          {
            "place": "Canyons et tours de grès",
            "text": "Des pitons érodés et des gorges qui donnent l'impression d'une autre planète."
          }
        ]
      },
      {
        "day": 4,
        "title": "Oasis et culture du désert",
        "body": "Visite d'une oasis et de ses palmeraies, rencontre avec une communauté touarègue autour de la cérémonie du thé, puis retour à Djanet pour la nuit.",
        "stops": [
          {
            "place": "Une oasis et ses palmeraies",
            "text": "Des jardins ombragés et des canaux d'irrigation en plein désert."
          },
          {
            "place": "Cérémonie du thé touareg",
            "text": "Les traditionnels trois verres de thé saharien partagés avec une famille touarègue — la culture vivante du grand sud."
          },
          {
            "place": "Les vieux ksour de Djanet",
            "text": "Les trois villages de banco étagés — Azellouaz, El Mihan et Adjahil — autour desquels s'est développée l'oasis moderne."
          }
        ]
      },
      {
        "day": 5,
        "title": "Transfert vers Ghardaïa",
        "body": "Voyage vers Ghardaïa et la vallée du M'Zab, installation dans une maison d'hôtes traditionnelle et promenade du soir dans la vieille ville.",
        "stops": [
          {
            "place": "Le trajet vers le nord jusqu'au M'Zab",
            "text": "Le long transfert depuis l'extrême sud, environ 1 000 km, du Tassili jusqu'à la lisière du Sahara septentrional."
          },
          {
            "place": "Une maison d'hôtes traditionnelle du M'Zab",
            "text": "Une maison mozabite restaurée aux murs épais, avec cour intérieure et terrasse sur le toit — au cœur de la vieille ville plutôt qu'en périphérie."
          },
          {
            "place": "Promenade dans la vieille ville de Ghardaïa",
            "text": "Une soirée à travers les ruelles de la cité perchée du M'Zab, après le long trajet vers le nord."
          }
        ]
      },
      {
        "day": 6,
        "title": "La vallée du M'Zab et départ",
        "body": "Visite de Beni Isguen, El Atteuf et Melika — mosquées, souks et ateliers — avec déjeuner avant le transfert vers l'aéroport.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La cité sainte fortifiée du M'Zab, dont on franchit l'ancienne porte, où la tenue vestimentaire et les photographies obéissent aux usages locaux."
          },
          {
            "place": "El Atteuf",
            "text": "La plus ancienne des cinq cités du M'Zab, dont la sobre mosquée Sidi Brahim frappa tant Le Corbusier qu'elle influença l'architecture moderne."
          },
          {
            "place": "Melika",
            "text": "Une cité du M'Zab perchée sur une colline, avec ses tombeaux de marabouts et ses longues vues sur la vallée."
          }
        ]
      }
    ],
    "includes": [
      "Transferts aéroport et hôtel",
      "Véhicule climatisé / 4×4",
      "Guide local professionnel",
      "Hébergement selon le programme",
      "Repas mentionnés (déjeuners et dîners)",
      "Entrées des sites",
      "Excursion au désert à Djanet"
    ],
    "excludes": [
      "Vols intérieurs et internationaux",
      "Dépenses personnelles",
      "Boissons non mentionnées",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Novembre à février"
      },
      {
        "label": "Rythme",
        "value": "Modéré — journées en 4×4 et courtes marches"
      },
      {
        "label": "Formule",
        "value": "Privé et guidé, 5 nuits, repas selon programme"
      },
      {
        "label": "À prévoir",
        "value": "Couches chaudes pour les nuits, lampe frontale, tenue couvrante pour le M'Zab"
      }
    ],
    "faqs": [
      {
        "q": "Comment rejoint-on Djanet ?",
        "a": "Par vol intérieur depuis Alger (vols non inclus) ; nous vous conseillons sur les horaires."
      },
      {
        "q": "Les deux régions sont-elles classées à l'UNESCO ?",
        "a": "Oui — le Tassili n'Ajjer (1982) et la vallée du M'Zab (1982)."
      },
      {
        "q": "Où dort-on ?",
        "a": "En campement dans le désert autour de Djanet, puis en maison d'hôtes à Ghardaïa ou à proximité."
      },
      {
        "q": "Est-ce physiquement exigeant ?",
        "a": "Modérément — l'essentiel se fait en 4×4, avec de courtes marches et des montées de dunes à votre rythme."
      }
    ]
  },
  "algeria-intensive-discovery-tour": {
    "title": "Découverte intensive de l'Algérie — 5 jours",
    "duration": "5 jours · 4 nuits",
    "hook": "Cinq jours au rythme soutenu pour voir le maximum du pays : capitale, côte romaine et première approche du Sahara.",
    "full": true,
    "seoTitle": "Circuit intensif Algérie 5 jours — L'essentiel du pays",
    "seoDescription": "Circuit privé et intensif de 5 jours en Algérie : la Casbah d'Alger, Tipaza la romaine, Constantine, Timgad, Djémila et une excursion au désert à Bou Saâda.",
    "overview": "Pour les voyageurs pressés mais curieux, ces cinq jours intensifs enchaînent les sites majeurs de l'Algérie : la Casbah, le musée du Bardo et le Mémorial du Martyr à Alger ; la côte romaine de Tipaza et Cherchell ; les ponts de Constantine ; les cités romaines de Timgad et Djémila, classées à l'UNESCO ; et une excursion au désert à Bou Saâda. Le rythme est soutenu, avec un guide licencié et tous les repas, pour concentrer les icônes du pays en un seul voyage.",
    "highlights": [
      "La Casbah, le musée du Bardo et le Mémorial du Martyr",
      "Tipaza la romaine, Cherchell et le mausolée de Cléopâtre Séléné",
      "Les ponts suspendus et les palais de Constantine",
      "Timgad et Djémila, sites romains classés UNESCO",
      "Une excursion au désert à Bou Saâda"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Alger",
        "body": "Accueil à l'aéroport et transfert, puis le musée national du Bardo, une promenade dans la Casbah classée UNESCO et le Mémorial du Martyr avec sa vue sur la capitale.",
        "stops": [
          {
            "place": "Le musée du Bardo",
            "text": "Préhistoire et ethnographie dans une élégante villa mauresque, des moulages d'art rupestre saharien aux bijoux d'argent et à l'Algérie du quotidien."
          },
          {
            "place": "La Casbah d'Alger",
            "text": "La citadelle ottomane classée à l'UNESCO — un labyrinthe blanc et escarpé de palais, de mosquées et de maisons à cour qui grimpe au-dessus de la baie."
          },
          {
            "place": "Le Mémorial du Martyr (Maqam Echahid)",
            "text": "Trois palmes de béton élancées, dressées en 1982 au-dessus de la ville, en hommage aux morts de la guerre d'indépendance."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza et Cherchell",
        "body": "Route vers l'ouest le long de la côte : les ruines romaines de Tipaza, le Mausolée royal de Maurétanie, puis le musée et le vieux port de Cherchell.",
        "stops": [
          {
            "place": "Tipaza romaine",
            "text": "Un port romain classé à l'UNESCO, étiré le long de la Méditerranée — basiliques, thermes et théâtre les pieds dans les vagues."
          },
          {
            "place": "Le Mausolée royal de Maurétanie",
            "text": "Un immense tambour de pierre sur une colline dominant la mer — le tombeau du 1er siècle avant J.-C. du roi berbère Juba II et de Cléopâtre Séléné, fille de Cléopâtre d'Égypte."
          },
          {
            "place": "Cherchell (l'antique Césarée)",
            "text": "L'ancienne capitale de Juba II, dont le musée abrite quelques-unes des plus belles mosaïques et statues romaines et grecques d'Algérie."
          }
        ]
      },
      {
        "day": 3,
        "title": "Constantine et Timgad",
        "body": "Cap à l'est vers Constantine — ses ponts suspendus et le palais Ahmed Bey — puis la cité romaine de Timgad.",
        "stops": [
          {
            "place": "Les ponts de Constantine",
            "text": "La « ville des ponts », suspendue au-dessus des vertigineuses gorges du Rhumel, avec la passerelle Sidi M'Cid jetée haut dans les airs."
          },
          {
            "place": "Le palais Ahmed Bey",
            "text": "Le palais ottoman du début du XIXe siècle du dernier bey, avec ses galeries peintes et ses cours ombragées."
          },
          {
            "place": "Timgad",
            "text": "La colonie de Trajan bâtie en damier vers l'an 100 — la « Pompéi des Aurès », déployée à ciel ouvert sur la plaine."
          }
        ]
      },
      {
        "day": 4,
        "title": "Djémila et Sétif",
        "body": "La cité romaine de Djémila, classée UNESCO, avec son forum, son théâtre et ses mosaïques, puis la fontaine Aïn El Fouara à Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Une cité romaine classée à l'UNESCO nichée dans des montagnes verdoyantes, superbement conservée — forum, temples et théâtre escarpé."
          },
          {
            "place": "Les mosaïques de Djémila",
            "text": "Des mosaïques parmi les plus riches du monde romain, conservées dans le musée du site."
          },
          {
            "place": "Aïn El Fouara, Sétif",
            "text": "La fontaine bien-aimée de 1898 au cœur de la ville, symbole indéfectible de Sétif."
          }
        ]
      },
      {
        "day": 5,
        "title": "Bou Saâda et retour",
        "body": "Descente vers Bou Saâda, porte du Sahara, pour son oasis et une excursion dans les dunes, avant la route du retour vers Alger.",
        "stops": [
          {
            "place": "L'oasis de Bou Saâda",
            "text": "La porte du Sahara, avec une excursion désertique parmi les dunes."
          },
          {
            "place": "Le moulin Ferrero",
            "text": "Le vieux moulin sur l'oued Bou Saâda, au bord des gorges et des jardins de palmiers qu'Étienne Dinet a peints."
          },
          {
            "place": "Les dunes au sud de Bou Saâda",
            "text": "Une courte excursion sur le sable — le premier vrai Sahara sur la route du sud, et le tournant de la journée."
          }
        ]
      }
    ],
    "includes": [
      "Accueil à l'aéroport et transferts",
      "Véhicule de tourisme climatisé",
      "Hébergement en hôtels sélectionnés",
      "Tous les repas pendant le circuit",
      "Guide licencié",
      "Entrées des sites",
      "Excursion au désert à Bou Saâda"
    ],
    "excludes": [
      "Vols internationaux",
      "Dépenses personnelles"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Printemps et automne"
      },
      {
        "label": "Rythme",
        "value": "Soutenu — journées pleines et transferts quotidiens"
      },
      {
        "label": "Formule",
        "value": "Privé et guidé, 4 nuits, pension complète"
      },
      {
        "label": "À prévoir",
        "value": "Bonnes chaussures, protection solaire, tenue couvrante pour la Casbah"
      }
    ],
    "faqs": [
      {
        "q": "Le rythme est-il exigeant ?",
        "a": "Oui — le circuit est intensif par conception, avec des départs matinaux et de la route chaque jour."
      },
      {
        "q": "Quels sites UNESCO sont inclus ?",
        "a": "Timgad, Djémila et la Casbah d'Alger."
      },
      {
        "q": "Les repas sont-ils inclus ?",
        "a": "Oui — tous les repas du circuit, ainsi que les entrées des sites et l'excursion de Bou Saâda."
      },
      {
        "q": "Peut-on ralentir le rythme ?",
        "a": "Oui — dites-le-nous et nous l'étendons en un itinéraire plus détendu."
      }
    ]
  },
  "the-soul-of-algeria": {
    "title": "L'âme de l'Algérie — 4 jours",
    "duration": "4 jours · 3 nuits",
    "hook": "Quatre jours entre la capitale, la côte romaine et l'arrière-pays, pour saisir le caractère du pays plus que sa liste de sites.",
    "full": true,
    "seoTitle": "Circuit Algérie 4 jours — Alger, Tipaza, Bou Saâda",
    "seoDescription": "Circuit privé de 4 jours en Algérie : la Casbah et les musées d'Alger, les ruines romaines de Tipaza et Cherchell, et l'oasis de Bou Saâda.",
    "overview": "Une introduction équilibrée, en quatre jours, à toute la palette algérienne. Vous découvrez le musée du Bardo, Notre-Dame d'Afrique, le Mémorial du Martyr et la Casbah classée UNESCO à Alger ; les ruines romaines de Tipaza au bord de la mer et le musée de Cherchell ; puis la ville-oasis de Bou Saâda, aux portes du Sahara. Culture, Antiquité et désert en un voyage court et confortable, hôtels compris.",
    "highlights": [
      "Le musée du Bardo et Notre-Dame d'Afrique",
      "Le Mémorial du Martyr et la Casbah classée UNESCO",
      "Tipaza la romaine et le musée de Cherchell",
      "La ville-oasis de Bou Saâda",
      "Un condensé de cultures et de paysages"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Alger",
        "body": "Le musée du Bardo et ses collections, la basilique Notre-Dame d'Afrique au-dessus de la baie et le Mémorial du Martyr.",
        "stops": [
          {
            "place": "Le musée du Bardo",
            "text": "Préhistoire et ethnographie dans une élégante villa mauresque, des moulages d'art rupestre saharien aux bijoux d'argent et à l'Algérie du quotidien."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Une basilique du XIXe siècle — « Notre-Dame d'Afrique » — perchée sur la falaise au-dessus de la baie, dédiée aussi bien aux musulmans qu'aux chrétiens."
          },
          {
            "place": "Le Mémorial du Martyr (Maqam Echahid)",
            "text": "Trois palmes de béton élancées, dressées en 1982 au-dessus de la ville, en hommage aux morts de la guerre d'indépendance."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza et Cherchell",
        "body": "Le Mausolée royal de Maurétanie, le parc archéologique romain de Tipaza et le musée de Cherchell.",
        "stops": [
          {
            "place": "Le Mausolée royal de Maurétanie",
            "text": "Un immense tambour de pierre sur une colline dominant la mer — le tombeau du 1er siècle avant J.-C. du roi berbère Juba II et de Cléopâtre Séléné, fille de Cléopâtre d'Égypte."
          },
          {
            "place": "Tipaza romaine",
            "text": "Un port romain classé à l'UNESCO, étiré le long de la Méditerranée — basiliques, thermes et théâtre les pieds dans les vagues."
          },
          {
            "place": "Cherchell (l'antique Césarée)",
            "text": "L'ancienne capitale de Juba II, dont le musée abrite quelques-unes des plus belles mosaïques et statues romaines et grecques d'Algérie."
          }
        ]
      },
      {
        "day": 3,
        "title": "Bou Saâda",
        "body": "Route vers le sud jusqu'à Bou Saâda : le fort et ses panoramas sur l'oasis, le musée Nasreddine Dinet et la mosquée historique.",
        "stops": [
          {
            "place": "Les panoramas de Bou Saâda",
            "text": "La forteresse et ses points de vue sur la ville-oasis."
          },
          {
            "place": "Le musée Nasreddine Dinet",
            "text": "Le musée du peintre orientaliste qui a rendu Bou Saâda célèbre, avec ses œuvres et ses souvenirs."
          },
          {
            "place": "La mosquée historique",
            "text": "La mosquée de la vieille ville, au cœur de Bou Saâda."
          }
        ]
      },
      {
        "day": 4,
        "title": "Alger",
        "body": "Retour à Alger pour la Casbah classée UNESCO, le Jardin d'Essai du Hamma et le musée du Moudjahid.",
        "stops": [
          {
            "place": "La Casbah d'Alger",
            "text": "La citadelle ottomane classée à l'UNESCO — un labyrinthe blanc et escarpé de palais, de mosquées et de maisons à cour qui grimpe au-dessus de la baie."
          },
          {
            "place": "Le Jardin botanique du Hamma",
            "text": "Le grand Jardin d'Essai du XIXe siècle, l'un des plus beaux jardins botaniques d'Afrique."
          },
          {
            "place": "Le musée du Moudjahid",
            "text": "L'histoire des combattants de l'indépendance, racontée au pied du Mémorial du Martyr."
          }
        ]
      }
    ],
    "includes": [
      "Hébergement en hôtels 4 étoiles avec petit déjeuner",
      "Déjeuner traditionnel",
      "Transport privé",
      "Guide local"
    ],
    "excludes": [],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Printemps et automne ; octobre à avril pour Bou Saâda"
      },
      {
        "label": "Rythme",
        "value": "Modéré"
      },
      {
        "label": "Formule",
        "value": "Privé et guidé, 3 nuits en hôtels 4 étoiles avec petit déjeuner"
      },
      {
        "label": "À prévoir",
        "value": "Tenue couvrante pour la Casbah, protection solaire, bonnes chaussures"
      }
    ],
    "faqs": [
      {
        "q": "Quels sites UNESCO sont inclus ?",
        "a": "Tipaza et la Casbah d'Alger."
      },
      {
        "q": "Bou Saâda est-elle loin ?",
        "a": "À quelques heures de route au sud d'Alger ; le transport est inclus."
      },
      {
        "q": "L'hébergement est-il inclus ?",
        "a": "Oui — hôtels 4 étoiles avec petit déjeuner, ainsi qu'un déjeuner traditionnel."
      },
      {
        "q": "Est-ce adapté à un séjour court ?",
        "a": "Oui — le circuit fait goûter trois régions en quatre jours."
      }
    ]
  },
  "the-culture-and-heritage-of-algeria": {
    "title": "Culture et patrimoine de l'Algérie — 8 jours",
    "duration": "8 jours · 7 nuits",
    "hook": "Huit jours à travers la culture et l'histoire algériennes — la capitale et sa Casbah, Tipaza et Djémila, les ponts de Constantine et l'oasis de Bou Saada.",
    "full": true,
    "seoTitle": "Culture et patrimoine d'Algérie — Circuit 8 jours",
    "seoDescription": "Circuit culturel privé de 8 jours en Algérie : Alger et sa Casbah, Tipaza et Cherchell, Constantine et ses ponts, Djémila et l'oasis de Bou Saâda.",
    "overview": "Un circuit culturel plus approfondi, sur huit jours. Depuis Alger et sa Casbah, vous suivez la côte romaine à Tipaza et Cherchell, gagnez Constantine et ses gorges, parcourez la cité romaine de Djémila à flanc de colline, et terminez dans le calme de l'oasis de Bou Saâda. Trois sites de calibre UNESCO, des villes vivantes et la lisière du désert, à un rythme qui laisse le temps de comprendre chaque étape.",
    "highlights": [
      "Alger, ses musées et la Casbah historique",
      "Tipaza la romaine, Cherchell et Djémila",
      "Constantine et son pont suspendu",
      "Le charme d'oasis de Bou Saâda",
      "Un équilibre de culture, d'histoire et de paysages"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Alger",
        "body": "Accueil à l'aéroport, installation dans un hôtel du centre-ville, tour de ville en soirée et dîner.",
        "stops": [
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Accueil à l'arrivée et transfert vers un hôtel du centre-ville, avec toutes les formalités prises en charge."
          },
          {
            "place": "Un tour de ville en soirée",
            "text": "Une première boucle de découverte à la tombée de la nuit — les arcades du front de mer, la place des Martyrs et la Grande Poste."
          },
          {
            "place": "Dîner à Alger",
            "text": "Une première table algérienne en plein centre-ville, pour évoquer les huit jours à venir."
          }
        ]
      },
      {
        "day": 2,
        "title": "Alger culturelle",
        "body": "Le musée du Bardo, la Casbah classée UNESCO et le Mémorial du Martyr (Maqam Echahid).",
        "stops": [
          {
            "place": "Le musée du Bardo",
            "text": "Préhistoire et ethnographie dans une élégante villa mauresque, des moulages d'art rupestre saharien aux bijoux d'argent et à l'Algérie du quotidien."
          },
          {
            "place": "La Casbah d'Alger",
            "text": "La citadelle ottomane classée à l'UNESCO — un labyrinthe blanc et escarpé de palais, de mosquées et de maisons à cour qui grimpe au-dessus de la baie."
          },
          {
            "place": "Le Mémorial du Martyr (Maqam Echahid)",
            "text": "Trois palmes de béton élancées, dressées en 1982 au-dessus de la ville, en hommage aux morts de la guerre d'indépendance."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza et Cherchell",
        "body": "Le Mausolée royal de Maurétanie, le parc archéologique de Tipaza et le musée de Cherchell.",
        "stops": [
          {
            "place": "Le Mausolée royal de Maurétanie",
            "text": "Un immense tambour de pierre sur une colline dominant la mer — le tombeau du 1er siècle avant J.-C. du roi berbère Juba II et de Cléopâtre Séléné, fille de Cléopâtre d'Égypte."
          },
          {
            "place": "Tipaza romaine",
            "text": "Un port romain classé à l'UNESCO, étiré le long de la Méditerranée — basiliques, thermes et théâtre les pieds dans les vagues."
          },
          {
            "place": "Cherchell (l'antique Césarée)",
            "text": "L'ancienne capitale de Juba II, dont le musée abrite quelques-unes des plus belles mosaïques et statues romaines et grecques d'Algérie."
          }
        ]
      },
      {
        "day": 4,
        "title": "Constantine",
        "body": "Le pont Sidi M'Cid, le palais Ahmed Bey, la mosquée Émir Abdelkader et une promenade en ville.",
        "stops": [
          {
            "place": "Les ponts de Constantine",
            "text": "La « ville des ponts », suspendue au-dessus des vertigineuses gorges du Rhumel, avec la passerelle Sidi M'Cid jetée haut dans les airs."
          },
          {
            "place": "Le palais Ahmed Bey",
            "text": "Le palais ottoman du début du XIXe siècle du dernier bey, avec ses galeries peintes et ses cours ombragées."
          },
          {
            "place": "La mosquée Émir Abdelkader",
            "text": "L'une des plus grandes mosquées d'Afrique, dont les deux minarets sont devenus un repère moderne de Constantine."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "Le site romain de Djémila, classé UNESCO — théâtre, temples et mosaïques — avec un déjeuner local.",
        "stops": [
          {
            "place": "Le théâtre et les temples de Djémila",
            "text": "Les monuments les mieux conservés de la cité romaine classée à l'UNESCO, avec un déjeuner local."
          },
          {
            "place": "L'arc de Caracalla",
            "text": "L'arc de triomphe de l'an 216, à la lisière du forum neuf de Djémila — l'image emblématique du site."
          },
          {
            "place": "Les mosaïques de Djémila",
            "text": "Des mosaïques parmi les plus riches du monde romain, conservées dans le musée du site."
          }
        ]
      },
      {
        "day": 6,
        "title": "Vers Bou Saâda",
        "body": "La route de Constantine à Bou Saâda, installation et temps libre, puis dîner traditionnel en musique.",
        "stops": [
          {
            "place": "La plaine du Hodna",
            "text": "La route au sud-ouest de Constantine, à travers les hauts plateaux et les chotts salés du Hodna."
          },
          {
            "place": "Bou Saâda",
            "text": "La « ville du bonheur » — une oasis de palmiers au pied du massif des Ouled Naïl, terme de la route du jour."
          },
          {
            "place": "Un dîner en musique",
            "text": "Une cuisine traditionnelle et de la musique saharienne live à la maison d'hôtes — le moment fort autour duquel s'articule toute la journée."
          }
        ]
      },
      {
        "day": 7,
        "title": "Bou Saâda et retour",
        "body": "La cascade de Bou Saâda, le moulin Ferrero et la zaouïa d'El Hamel, puis le retour vers Alger.",
        "stops": [
          {
            "place": "La cascade de Bou Saâda",
            "text": "Une cascade naturelle au cœur de l'oasis — le coin frais et verdoyant de la « ville du bonheur »."
          },
          {
            "place": "Le moulin Ferrero",
            "text": "Un moulin historique au bord de l'oued, symbole du vieux Bou Saâda."
          },
          {
            "place": "La zaouïa d'El Hamel",
            "text": "Un sanctuaire soufi rahmaniyya et une école coranique perchés au-dessus de Bou Saâda — calme, austère et panoramique."
          }
        ]
      },
      {
        "day": 8,
        "title": "Départ",
        "body": "Petit déjeuner, départ de l'hôtel et transfert vers l'aéroport d'Alger.",
        "stops": [
          {
            "place": "Une matinée libre",
            "text": "Le temps de rattraper ce que la semaine n'a pas permis de voir dans la capitale, ou une dernière promenade sur le front de mer, selon votre vol."
          },
          {
            "place": "Derniers achats",
            "text": "Argent kabyle, cuir touareg, dattes et pâtisseries dans les échoppes artisanales du centre-ville."
          },
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Le départ de l'hôtel, le transfert privé et une assistance à l'enregistrement."
          }
        ]
      }
    ],
    "includes": [
      "Hébergement en hôtels 4 étoiles avec petit déjeuner",
      "Transport privé",
      "Déjeuner traditionnel",
      "Toutes taxes et redevances"
    ],
    "excludes": [],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Printemps et automne"
      },
      {
        "label": "Rythme",
        "value": "Modéré, itinérant"
      },
      {
        "label": "Formule",
        "value": "Privé et guidé, 7 nuits en hôtels 4 étoiles avec petit déjeuner"
      },
      {
        "label": "À prévoir",
        "value": "Bonnes chaussures, tenue couvrante pour la Casbah, protection solaire"
      }
    ],
    "faqs": [
      {
        "q": "Quels sites UNESCO sont inclus ?",
        "a": "Tipaza, Djémila et la Casbah d'Alger."
      },
      {
        "q": "Y a-t-il beaucoup de trajets ?",
        "a": "C'est un itinéraire à travers le nord et la lisière saharienne, avec des transferts confortables."
      },
      {
        "q": "L'hébergement est-il inclus ?",
        "a": "Oui — hôtels 4 étoiles avec petit déjeuner, transport privé et un déjeuner traditionnel."
      },
      {
        "q": "Quelle différence avec le circuit de 10 jours ?",
        "a": "Il se concentre sur le nord et Bou Saâda, sans pousser jusqu'au M'Zab."
      }
    ]
  },
  "algeria-beyond-expectations": {
    "title": "L'Algérie au-delà des attentes — 10 jours",
    "duration": "10 jours · 9 nuits",
    "hook": "Dix jours pour le pays dans toute son étendue, du littoral méditerranéen aux oasis sahariennes, à un rythme qui laisse le temps de regarder.",
    "full": true,
    "seoTitle": "Algérie en 10 jours : du littoral au M'Zab saharien",
    "seoDescription": "Circuit privé de 10 jours en Algérie, de la Méditerranée au M'Zab : Alger, Tipaza, Djémila, Timgad, Constantine et une aventure saharienne à Ghardaïa.",
    "overview": "Notre grand circuit le plus aventureux. En dix jours, vous reliez Alger et Tipaza la romaine, les cités de Djémila et Timgad, les hauts plateaux de Sétif et les ponts de Constantine, avant de finir dans la vallée du M'Zab à Ghardaïa — le tout couronné par une excursion saharienne avec quad, dromadaire et sandboard. Quatre sites UNESCO et toute l'étendue du pays, du littoral au désert, entre culture et aventure à parts égales.",
    "highlights": [
      "Alger et les ruines romaines de Tipaza",
      "Constantine, la ville des ponts",
      "Sétif, Djémila et la cité romaine de Timgad",
      "La culture du désert dans la vallée du M'Zab à Ghardaïa",
      "Une excursion saharienne : quad, dromadaire et sandboard"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Alger",
        "body": "Accueil à l'aéroport, installation à l'hôtel et dîner de bienvenue.",
        "stops": [
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Accueil à l'arrivée et transfert vers la ville — l'aspect pratique du premier jour entièrement pris en charge."
          },
          {
            "place": "La baie d'Alger",
            "text": "L'arrivée en bord de mer, avec la capitale blanche qui s'étage au-dessus du port."
          },
          {
            "place": "Un dîner de bienvenue",
            "text": "Une première table algérienne — chorba, poisson de la baie ou tajine de poulet — pour évoquer les dix jours à venir."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza et Cherchell",
        "body": "Les ruines romaines et l'amphithéâtre de Tipaza, le Mausolée royal de Maurétanie, le musée de Cherchell et les panoramas de la côte.",
        "stops": [
          {
            "place": "Tipaza romaine",
            "text": "Un port romain classé à l'UNESCO, étiré le long de la Méditerranée — basiliques, thermes et théâtre les pieds dans les vagues."
          },
          {
            "place": "Le Mausolée royal de Maurétanie",
            "text": "Un immense tambour de pierre sur une colline dominant la mer — le tombeau du 1er siècle avant J.-C. du roi berbère Juba II et de Cléopâtre Séléné, fille de Cléopâtre d'Égypte."
          },
          {
            "place": "Cherchell (l'antique Césarée)",
            "text": "L'ancienne capitale de Juba II, dont le musée abrite quelques-unes des plus belles mosaïques et statues romaines et grecques d'Algérie."
          }
        ]
      },
      {
        "day": 3,
        "title": "Alger historique",
        "body": "La Casbah classée UNESCO, le Mémorial du Martyr et le Musée central de l'Armée.",
        "stops": [
          {
            "place": "La Casbah d'Alger",
            "text": "La citadelle ottomane classée à l'UNESCO — un labyrinthe blanc et escarpé de palais, de mosquées et de maisons à cour qui grimpe au-dessus de la baie."
          },
          {
            "place": "Le Mémorial du Martyr (Maqam Echahid)",
            "text": "Trois palmes de béton élancées, dressées en 1982 au-dessus de la ville, en hommage aux morts de la guerre d'indépendance."
          },
          {
            "place": "Le Musée national de l'Armée",
            "text": "La longue histoire militaire de l'Algérie, de l'Antiquité à 1962, aux côtés du Mémorial du Martyr."
          }
        ]
      },
      {
        "day": 4,
        "title": "Route vers Sétif",
        "body": "Transfert vers Sétif et visite des ruines romaines de Djémila et de leurs mosaïques ; nuit à Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Une cité romaine classée à l'UNESCO nichée dans des montagnes verdoyantes, superbement conservée — forum, temples et théâtre escarpé."
          },
          {
            "place": "Les mosaïques de Djémila",
            "text": "Des mosaïques parmi les plus riches du monde romain, conservées dans le musée du site."
          },
          {
            "place": "Sétif et la fontaine Aïn El Fouara",
            "text": "La ville des hauts plateaux, à 1 100 m d'altitude, et sa célèbre fontaine de marbre de 1898, où l'on passe la nuit."
          }
        ]
      },
      {
        "day": 5,
        "title": "Constantine",
        "body": "Les ponts suspendus de Constantine, la mosquée Émir Abdelkader et le palais Ahmed Bey ; nuit à Constantine.",
        "stops": [
          {
            "place": "Les ponts de Constantine",
            "text": "La « ville des ponts », suspendue au-dessus des vertigineuses gorges du Rhumel, avec la passerelle Sidi M'Cid jetée haut dans les airs."
          },
          {
            "place": "La mosquée Émir Abdelkader",
            "text": "L'une des plus grandes mosquées d'Afrique, dont les deux minarets sont devenus un repère moderne de Constantine."
          },
          {
            "place": "Le palais Ahmed Bey",
            "text": "Le palais ottoman du début du XIXe siècle du dernier bey, avec ses galeries peintes et ses cours ombragées."
          }
        ]
      },
      {
        "day": 6,
        "title": "Batna et Timgad",
        "body": "Route vers Batna et la cité romaine de Timgad, classée UNESCO — l'arc de Trajan, la bibliothèque et le théâtre ; nuit à Batna.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonie de Trajan bâtie en damier vers l'an 100 — la « Pompéi des Aurès », déployée à ciel ouvert sur la plaine."
          },
          {
            "place": "L'arc de Trajan",
            "text": "L'arc de triomphe qui encadre l'artère principale de Timgad — la silhouette emblématique de la cité."
          },
          {
            "place": "La bibliothèque et le théâtre de Timgad",
            "text": "Les vestiges d'une rare bibliothèque publique romaine et d'un théâtre de 3 500 places toujours utilisé aujourd'hui."
          }
        ]
      },
      {
        "day": 7,
        "title": "Vers Ghardaïa",
        "body": "Longue route vers le sud jusqu'à la vallée du M'Zab, installation dans une maison d'hôtes traditionnelle et soirée libre.",
        "stops": [
          {
            "place": "La route vers le sud, par-delà l'Atlas",
            "text": "En quittant le Tell, à travers les hauts plateaux puis vers le pré-Sahara — le trajet où l'Algérie change de climat."
          },
          {
            "place": "Ghardaïa",
            "text": "La ville principale du M'Zab, une pyramide de maisons classée à l'UNESCO qui s'élève jusqu'à la mosquée et son minaret au sommet."
          },
          {
            "place": "Une maison d'hôtes traditionnelle du M'Zab",
            "text": "Installation dans une maison mozabite restaurée — murs épais, cour intérieure et terrasse sur le toit — avec une soirée libre."
          }
        ]
      },
      {
        "day": 8,
        "title": "Ghardaïa et le M'Zab",
        "body": "Les cités d'El Atteuf, Beni Isguen et Melika, leurs mosquées et leur architecture, les souks et un déjeuner chez une famille locale.",
        "stops": [
          {
            "place": "El Atteuf",
            "text": "La plus ancienne des cinq cités du M'Zab, dont la sobre mosquée Sidi Brahim frappa tant Le Corbusier qu'elle influença l'architecture moderne."
          },
          {
            "place": "Beni Isguen",
            "text": "La cité sainte fortifiée du M'Zab, dont on franchit l'ancienne porte, où la tenue vestimentaire et les photographies obéissent aux usages locaux."
          },
          {
            "place": "Melika",
            "text": "Une cité du M'Zab perchée sur une colline, avec ses tombeaux de marabouts et ses longues vues sur la vallée."
          }
        ]
      },
      {
        "day": 9,
        "title": "Retour vers Alger",
        "body": "Retour vers la capitale, avec le Jardin d'Essai du Hamma, le musée du Bardo et Notre-Dame d'Afrique.",
        "stops": [
          {
            "place": "Le Jardin botanique du Hamma",
            "text": "Le grand Jardin d'Essai du XIXe siècle, l'un des plus beaux jardins botaniques d'Afrique."
          },
          {
            "place": "Le musée du Bardo",
            "text": "Préhistoire et ethnographie dans une élégante villa mauresque, des moulages d'art rupestre saharien aux bijoux d'argent et à l'Algérie du quotidien."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Une basilique du XIXe siècle — « Notre-Dame d'Afrique » — perchée sur la falaise au-dessus de la baie, dédiée aussi bien aux musulmans qu'aux chrétiens."
          }
        ]
      },
      {
        "day": 10,
        "title": "Départ",
        "body": "Petit déjeuner et transfert vers l'aéroport.",
        "stops": [
          {
            "place": "Une matinée libre à Alger",
            "text": "Pour rattraper ce que les dix jours n'ont pas permis de voir — le Jardin d'Essai, la mosquée Ketchaoua ou simplement le front de mer — selon l'horaire de votre vol."
          },
          {
            "place": "Derniers achats",
            "text": "Argent kabyle, cuir touareg, dattes deglet nour et pâtisseries, rue Didouche Mourad ou dans les ateliers de la Casbah."
          },
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Le transfert privé vers l'aéroport et une assistance à l'enregistrement."
          }
        ]
      }
    ],
    "includes": [
      "Hébergement en hôtels 4 étoiles avec petit déjeuner",
      "Transport touristique climatisé",
      "Guide accompagnateur",
      "Guide local privé sur les grands sites",
      "Tous les repas pendant l'excursion saharienne",
      "Activités au désert : quad, dromadaire, sandboard"
    ],
    "excludes": [
      "Programmes et activités supplémentaires",
      "Pourboires",
      "Déjeuners et dîners les autres jours"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril (idéal pour le Sahara)"
      },
      {
        "label": "Rythme",
        "value": "Actif — circuit itinérant et activités au désert"
      },
      {
        "label": "Formule",
        "value": "Privé et guidé, 9 nuits en hôtels 4 étoiles avec petit déjeuner"
      },
      {
        "label": "À prévoir",
        "value": "Couches chaudes, chaussures fermées pour le désert, protection solaire, tenue couvrante"
      }
    ],
    "faqs": [
      {
        "q": "Quelles activités au désert sont incluses ?",
        "a": "Quad, dromadaire et sandboard pendant l'excursion saharienne, avec tous les repas durant celle-ci."
      },
      {
        "q": "Quels sites UNESCO sont couverts ?",
        "a": "Tipaza, Djémila, Timgad et la vallée du M'Zab, plus la Casbah d'Alger."
      },
      {
        "q": "Convient-il aux voyageurs actifs ?",
        "a": "Oui — il associe un circuit culturel complet à un final saharien très concret."
      },
      {
        "q": "Quelle différence avec le grand circuit de 10 jours ?",
        "a": "Le même grand arc, mais avec une excursion saharienne tournée vers les activités à Ghardaïa."
      }
    ]
  },
  "bousaada-desert-tour": {
    "title": "Bou Saada — 2 jours dans l'oasis",
    "duration": "2 jours · 1 nuit",
    "hook": "Deux jours à Bou Saada, la cité du bonheur — sa cascade et le moulin Ferrero, les marchés artisanaux, un dîner bédouin et la zaouïa d'El Hamel.",
    "full": true,
    "seoTitle": "Circuit Bou Saâda 2 jours — La cité du bonheur",
    "seoDescription": "Circuit privé de 2 jours à Bou Saâda : la cascade et le moulin Ferrero, les marchés artisanaux, un dîner bédouin en musique et la zaouïa d'El Hamel.",
    "overview": "Bou Saâda, longtemps surnommée la « cité du bonheur », est la porte classique entre les Hauts Plateaux et le Sahara. En deux jours, vous découvrez sa cascade naturelle et le moulin historique Ferrero, flânez dans des marchés artisanaux animés, partagez un dîner bédouin en musique et visitez la zaouïa soufie d'El Hamel. Un avant-goût facile et plein d'atmosphère du sud algérien, à quelques heures d'Alger.",
    "highlights": [
      "Bou Saâda, la « cité du bonheur »",
      "La cascade naturelle et le moulin Ferrero",
      "Les marchés artisanaux traditionnels",
      "Un dîner bédouin avec musique live",
      "La zaouïa soufie d'El Hamel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "D'Alger à Bou Saâda",
        "body": "Départ matinal d'Alger en véhicule de tourisme, installation à l'hôtel, puis après-midi entre la cascade naturelle, le moulin Ferrero et les marchés traditionnels, avant un dîner bédouin en musique.",
        "stops": [
          {
            "place": "La cascade de Bou Saâda",
            "text": "Une cascade naturelle au cœur de l'oasis — le coin frais et verdoyant de la « ville du bonheur »."
          },
          {
            "place": "Le moulin Ferrero",
            "text": "Un moulin historique au bord de l'oued, symbole du vieux Bou Saâda."
          },
          {
            "place": "Les marchés traditionnels",
            "text": "Des souks pour les bijoux d'argent, la laine et les dattes, suivis d'un dîner bédouin en musique le soir."
          }
        ]
      },
      {
        "day": 2,
        "title": "La zaouïa d'El Hamel et retour",
        "body": "Après le petit déjeuner, visite du sanctuaire soufi d'El Hamel dans la montagne, avec le temps de profiter du paysage, déjeuner local à Bou Saâda, puis retour vers Alger dans l'après-midi.",
        "stops": [
          {
            "place": "Les contreforts des Ouled Naïl",
            "text": "La route vers El Hamel à travers des collines ocre dénudées — le paysage qui a fait de Bou Saâda une ville de peintres."
          },
          {
            "place": "La zaouïa d'El Hamel",
            "text": "Un sanctuaire soufi rahmaniyya et une école coranique perchés au-dessus de Bou Saâda — calme, austère et panoramique."
          },
          {
            "place": "Déjeuner à Bou Saâda",
            "text": "Une table locale, de retour dans l'oasis avant la route du nord — couscous ou tajine à l'ombre des palmiers."
          }
        ]
      }
    ],
    "includes": [
      "Hébergement à l'hôtel Kerdada ou similaire",
      "Visite de la cascade naturelle",
      "Visite guidée du moulin Ferrero",
      "Marchés traditionnels",
      "Dîner bédouin en musique",
      "Visite de la zaouïa d'El Hamel",
      "Déjeuner du jour 2",
      "Transport aller-retour depuis Alger",
      "Guide multilingue"
    ],
    "excludes": [
      "Dépenses personnelles",
      "Assurance voyage",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril"
      },
      {
        "label": "Rythme",
        "value": "Facile"
      },
      {
        "label": "Formule",
        "value": "Privé et guidé, 1 nuit avec hôtel et repas"
      },
      {
        "label": "À prévoir",
        "value": "Tenue couvrante, protection solaire, bonnes chaussures"
      }
    ],
    "faqs": [
      {
        "q": "À quelle distance d'Alger se trouve Bou Saâda ?",
        "a": "À quelques heures de route ; le transport aller-retour est inclus."
      },
      {
        "q": "L'hébergement est-il inclus ?",
        "a": "Oui — une nuit à l'hôtel Kerdada ou similaire, avec le déjeuner du deuxième jour."
      },
      {
        "q": "Qu'est-ce qu'El Hamel ?",
        "a": "Une zaouïa soufie historique — sanctuaire et école religieuse — près de Bou Saâda."
      },
      {
        "q": "Est-ce un bon premier aperçu du désert ?",
        "a": "Oui — c'est l'escapade vers le sud la plus simple depuis la capitale."
      }
    ]
  },
  "tour-bejaia-historic": {
    "title": "Béjaïa — la ville historique au bord de la mer (journée)",
    "duration": "1 jour",
    "hook": "Une journée sur la côte à Béjaïa — sa forteresse et son musée, la corniche du Cap Carbon et le sable des Aiguades, déjeuner face à la Méditerranée.",
    "full": true,
    "seoTitle": "Excursion Béjaïa — Journée sur la côte kabyle",
    "seoDescription": "Excursion privée d'une journée à Béjaïa depuis Alger : la forteresse et son musée, la corniche du Cap Carbon et la plage des Aiguades, déjeuner face à la mer.",
    "overview": "Béjaïa, c'est l'endroit où les montagnes vertes du Djurdjura plongent dans une Méditerranée bleu profond. En une journée depuis Alger, vous visitez sa forteresse historique et son musée, suivez la spectaculaire corniche du Cap Carbon au-dessus des falaises et profitez du sable des Aiguades, avec un déjeuner traditionnel au bord de l'eau. C'est la façon la plus simple de goûter à la côte kabyle — histoire, paysages et mer en une boucle détendue.",
    "highlights": [
      "La forteresse historique de Béjaïa et ses vues sur la mer",
      "Les collections du musée sur l'histoire de la région",
      "La côte spectaculaire du Cap Carbon",
      "Un moment de plage aux Aiguades",
      "Une cuisine algérienne authentique"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Forteresse, Cap Carbon et la côte",
        "body": "Prise en charge à Alger, visite guidée de la forteresse historique et de son musée, promenade sur la corniche du Cap Carbon, temps de plage aux Aiguades et déjeuner traditionnel avant le retour.",
        "stops": [
          {
            "place": "Le fort Gouraya et son musée",
            "text": "La forteresse dominant Béjaïa, avec la baie, le port et les montagnes de Kabylie déployés en contrebas."
          },
          {
            "place": "Le Cap Carbon",
            "text": "Le cap et son phare posés sur une arche rocheuse naturelle — l'un des phares maritimes les plus hauts au monde."
          },
          {
            "place": "Les Aiguades",
            "text": "Une crique aux eaux limpides au pied de la corniche, avec du temps libre sur la plage avant un déjeuner traditionnel."
          }
        ]
      }
    ],
    "includes": [
      "Transport en véhicule climatisé",
      "Guide multilingue",
      "Entrées de la forteresse et du musée",
      "Déjeuner algérien traditionnel",
      "Pauses en cours de route"
    ],
    "excludes": [
      "Boissons hors repas inclus",
      "Activités de plage optionnelles",
      "Assurance voyage",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Mai à octobre pour la plage ; printemps et automne pour la marche"
      },
      {
        "label": "Rythme",
        "value": "Facile, avec de la route à l'aller et au retour"
      },
      {
        "label": "Formule",
        "value": "Journée privée et guidée avec transfert depuis Alger"
      },
      {
        "label": "À prévoir",
        "value": "Maillot de bain en été, protection solaire, bonnes chaussures"
      }
    ],
    "faqs": [
      {
        "q": "D'où part l'excursion ?",
        "a": "D'Alger, avec prise en charge ; la route vers Béjaïa traverse les montagnes de Kabylie."
      },
      {
        "q": "Le déjeuner est-il inclus ?",
        "a": "Oui — un déjeuner algérien traditionnel sur la côte."
      },
      {
        "q": "Peut-on se baigner aux Aiguades ?",
        "a": "Oui, pendant les mois chauds — prévoyez un maillot ; hors saison, c'est un arrêt panoramique."
      },
      {
        "q": "La journée est-elle longue ?",
        "a": "Oui — une journée côtière complète avec de la route dans chaque sens : un départ matinal en vaut la peine."
      }
    ]
  },
  "private-guided-tour": {
    "title": "Tipaza et Cherchell — journée romaine privée",
    "duration": "1 jour",
    "hook": "Une journée privée sur la côte romaine à l'ouest d'Alger — les ruines de Tipaza au bord de la mer et le musée de l'antique Césarée à Cherchell.",
    "full": true,
    "seoTitle": "Tipaza et Cherchell — Journée romaine privée",
    "seoDescription": "Journée privée sur la côte romaine à l'ouest d'Alger : les ruines de Tipaza classées UNESCO au bord de la mer et le musée de Cherchell, à votre rythme.",
    "overview": "Tipaza est l'un des plus beaux sites antiques de la Méditerranée : son forum, ses thermes et ses maisons romaines s'étirent le long de la mer, à environ 70 km à l'ouest d'Alger. Au cours de cette journée privée, vous explorez les ruines classées UNESCO à votre rythme, puis visitez le musée archéologique de Cherchell — l'antique Césarée — riche en statues et en mosaïques. Avec un guide personnel et la prise en charge à l'hôtel, c'est la façon la plus détendue de découvrir la côte romaine.",
    "highlights": [
      "Les ruines romaines de Tipaza au bord de la mer (UNESCO)",
      "Le forum, les thermes et les quartiers d'habitation",
      "Le musée archéologique de Cherchell",
      "Un rythme privé et personnalisé",
      "Une promenade dans le vieux port de Cherchell"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ruines de Tipaza et musée de Cherchell",
        "body": "Prise en charge à l'hôtel et route privée vers Tipaza pour une visite guidée du forum, des thermes et des quartiers antiques, puis continuation vers Cherchell — l'antique Césarée — pour son musée de statues et de mosaïques romaines et une courte promenade dans la vieille ville, avant le retour.",
        "stops": [
          {
            "place": "Tipaza romaine",
            "text": "Une cité portuaire romaine classée à l'UNESCO, étirée le long de la Méditerranée — forum, thermes, basiliques et quartiers antiques les pieds dans les vagues."
          },
          {
            "place": "Le musée archéologique de Cherchell",
            "text": "Le musée de l'antique Césarée, qui abrite quelques-unes des plus belles mosaïques et statues romaines et grecques d'Algérie."
          },
          {
            "place": "La vieille ville de Cherchell",
            "text": "Une courte promenade autour du vieux port, où le plan des rues romaines reste lisible sous la ville moderne."
          }
        ]
      }
    ],
    "includes": [
      "Guide local professionnel (arabe / anglais / français / espagnol)",
      "Entrées de Tipaza et de Cherchell",
      "Visite privée guidée",
      "Prise en charge et retour à l'hôtel",
      "Confirmation immédiate"
    ],
    "excludes": [
      "Déjeuner (en option)",
      "Repas et boissons",
      "Dépenses personnelles",
      "Pourboires"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Printemps et automne"
      },
      {
        "label": "Rythme",
        "value": "Facile, avec de la marche sur terrain irrégulier"
      },
      {
        "label": "Formule",
        "value": "Journée privée (arabe / anglais / français / espagnol)"
      },
      {
        "label": "À prévoir",
        "value": "Protection solaire, eau, bonnes chaussures"
      }
    ],
    "faqs": [
      {
        "q": "Tipaza est-elle classée à l'UNESCO ?",
        "a": "Oui — inscrite en 1982."
      },
      {
        "q": "À quelle distance d'Alger ?",
        "a": "À environ 70 km à l'ouest, soit à peu près 1 h 30 de route."
      },
      {
        "q": "Quelles langues sont disponibles ?",
        "a": "Le guide travaille en arabe, en anglais, en français ou en espagnol."
      },
      {
        "q": "Les entrées sont-elles incluses ?",
        "a": "Oui — pour Tipaza comme pour le musée de Cherchell."
      }
    ]
  },
  "algiers-city-tour-casbah-bardo-martyrsmemorial": {
    "title": "Alger en une journée — Casbah, Bardo et Mémorial du Martyr",
    "duration": "1 jour",
    "hook": "Une journée complète dans la capitale — la Casbah classée UNESCO, le musée du Bardo et le Mémorial du Martyr au-dessus de la baie.",
    "full": true,
    "seoTitle": "Alger en un jour — Casbah, Bardo et Mémorial du Martyr",
    "seoDescription": "Journée complète et privée à Alger : la Casbah classée UNESCO, le musée national du Bardo et le Mémorial du Martyr, avec déjeuner traditionnel inclus.",
    "overview": "Alger porte son histoire à flanc de colline. En une seule journée, vous montez à travers la Casbah classée UNESCO — la dense médina ottomane de ruelles en escalier, de maisons à patio et de vieilles mosquées au-dessus de la baie —, découvrez l'archéologie et l'art du musée national du Bardo, et vous tenez au pied du Mémorial du Martyr pour la plus belle vue sur les maisons blanches et la Méditerranée. Un déjeuner traditionnel coupe la journée. C'est la première journée idéale en Algérie : toutes les strates de la capitale, lues de bout en bout avec un guide local.",
    "highlights": [
      "La Casbah classée UNESCO, ses ruelles et ses vieilles mosquées",
      "L'archéologie et l'histoire au musée du Bardo",
      "Le Mémorial du Martyr et son panorama",
      "Un déjeuner algérien traditionnel",
      "Les vues sur Alger et la Méditerranée"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casbah, musée du Bardo et Mémorial du Martyr",
        "body": "Boucle guidée d'une journée à travers le vieux quartier de la Casbah, les collections du musée national du Bardo et le Mémorial du Martyr, avec un déjeuner traditionnel dans un restaurant local entre les visites.",
        "stops": [
          {
            "place": "La Casbah d'Alger",
            "text": "La citadelle ottomane classée à l'UNESCO — un labyrinthe blanc et escarpé de palais, de mosquées et de maisons à cour qui grimpe au-dessus de la baie."
          },
          {
            "place": "Le musée national du Bardo",
            "text": "Préhistoire et ethnographie dans une élégante villa mauresque, des moulages d'art rupestre saharien aux bijoux d'argent et à l'Algérie du quotidien."
          },
          {
            "place": "Le Mémorial du Martyr (Maqam Echahid)",
            "text": "Trois palmes de béton élancées, dressées en 1982 au-dessus de la ville, en hommage aux morts de la guerre d'indépendance."
          }
        ]
      }
    ],
    "includes": [
      "Prise en charge et retour hôtel/aéroport",
      "Véhicule climatisé",
      "Guide local professionnel",
      "Entrées des sites",
      "Déjeuner algérien traditionnel",
      "Eau et collations"
    ],
    "excludes": [
      "Pourboires",
      "Dépenses personnelles"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Printemps et automne ; agréable presque toute l'année"
      },
      {
        "label": "Rythme",
        "value": "Facile, avec marches et escaliers dans la Casbah"
      },
      {
        "label": "Formule",
        "value": "Journée complète privée et guidée"
      },
      {
        "label": "À prévoir",
        "value": "Bonnes chaussures, protection solaire, tenue couvrante pour les mosquées"
      }
    ],
    "faqs": [
      {
        "q": "La Casbah est-elle sûre à visiter ?",
        "a": "Oui — avec un guide local, c'est une promenade accueillante et passionnante ; les ruelles sont pentues, prévoyez de bonnes chaussures."
      },
      {
        "q": "Le déjeuner est-il inclus ?",
        "a": "Oui — un déjeuner algérien traditionnel dans un restaurant local fait partie de la journée."
      },
      {
        "q": "Pouvez-vous venir me chercher à l'aéroport ?",
        "a": "Oui — la prise en charge et le retour à votre hôtel d'Alger ou à l'aéroport sont inclus."
      },
      {
        "q": "Y a-t-il beaucoup de marche ?",
        "a": "Une bonne part, surtout dans les escaliers et les pentes de la Casbah, à un rythme tranquille avec des pauses."
      }
    ]
  },
  "algierstour-hammagarden-notredame-dafrique": {
    "title": "Alger — Jardin d'Essai et Notre-Dame d'Afrique",
    "duration": "1 jour",
    "hook": "Une journée à Alger entre le Jardin d'Essai du Hamma et la basilique Notre-Dame d'Afrique, avec les plus belles vues sur la baie.",
    "full": true,
    "seoTitle": "Alger — Jardin d'Essai et Notre-Dame d'Afrique",
    "seoDescription": "Journée privée à Alger : le Jardin d'Essai du Hamma, la basilique Notre-Dame d'Afrique au-dessus de la baie et le Musée de l'Armée, déjeuner inclus.",
    "overview": "Alternative paisible à la journée dans la Casbah, cette visite privée réunit trois hauts lieux d'Alger à un rythme tranquille : le luxuriant Jardin d'Essai du Hamma, l'un des grands jardins botaniques de la Méditerranée ; la basilique Notre-Dame d'Afrique sur sa colline, avec sa vue plongeante sur la baie ; et le Musée de l'Armée, qui raconte l'histoire du pays. Un déjeuner traditionnel complète la journée, avec prise en charge à l'hôtel du début à la fin.",
    "highlights": [
      "Le jardin botanique historique du Hamma",
      "Les vues sur la mer depuis Notre-Dame d'Afrique",
      "L'histoire militaire de l'Algérie au Musée de l'Armée",
      "Un déjeuner algérien traditionnel",
      "Visite privée avec prise en charge à l'hôtel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Jardin du Hamma, Notre-Dame d'Afrique et Musée de l'Armée",
        "body": "Prise en charge à votre hôtel ou à l'aéroport, puis journée guidée entre trois sites : le Jardin d'Essai du Hamma, la basilique Notre-Dame d'Afrique sur sa colline au-dessus de la Méditerranée et le Musée de l'Armée, avec un déjeuner traditionnel en cours de route avant le retour.",
        "stops": [
          {
            "place": "Le Jardin botanique d'El Hamma",
            "text": "Dix hectares aménagés en 1832 au pied du Mémorial du Martyr — un jardin à la française, un parc paysager à l'anglaise, des allées de palmiers et une bambouseraie."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "La basilique du XIXe siècle perchée sur la falaise au-dessus de Bab El Oued, célèbre pour l'inscription de son abside demandant à Notre-Dame d'Afrique de prier « pour nous et pour les musulmans »."
          },
          {
            "place": "Le Musée central de l'Armée",
            "text": "La collection militaire nationale, aux côtés du Maqam Echahid, qui retrace les campagnes de l'Émir Abdelkader jusqu'à la guerre d'indépendance."
          }
        ]
      }
    ],
    "includes": [
      "Prise en charge et retour hôtel/aéroport",
      "Véhicule climatisé",
      "Guide local professionnel",
      "Entrées des trois sites",
      "Déjeuner algérien traditionnel",
      "Eau en bouteille et collations"
    ],
    "excludes": [
      "Pourboires",
      "Dépenses personnelles"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Toute l'année ; printemps et automne plus doux"
      },
      {
        "label": "Rythme",
        "value": "Facile, peu de marche"
      },
      {
        "label": "Formule",
        "value": "Journée privée et guidée avec prise en charge"
      },
      {
        "label": "À prévoir",
        "value": "Bonnes chaussures, tenue couvrante pour la basilique, appareil photo"
      }
    ],
    "faqs": [
      {
        "q": "Est-ce plus facile que la journée dans la Casbah ?",
        "a": "Oui — une journée plus douce, entre jardins et points de vue, avec moins de dénivelé."
      },
      {
        "q": "Le déjeuner est-il inclus ?",
        "a": "Oui — un déjeuner algérien traditionnel."
      },
      {
        "q": "Les entrées sont-elles comprises ?",
        "a": "Oui — l'entrée des trois sites est incluse."
      },
      {
        "q": "Peut-on la combiner avec la journée Casbah ?",
        "a": "Oui — beaucoup de visiteurs enchaînent les deux sur deux jours ; demandez-nous de l'organiser."
      }
    ]
  },
  "day-tour-algeria-culture": {
    "title": "Alger — balade culturelle dans la Casbah",
    "duration": "1 jour",
    "hook": "Une journée à pied dans la Casbah d'Alger, ses ruelles, ses palais ottomans et ses terrasses, avec un guide qui y a grandi.",
    "full": true,
    "seoTitle": "Balade guidée dans la Casbah d'Alger — UNESCO",
    "seoDescription": "Visite guidée à pied de la Casbah d'Alger classée UNESCO : la place des Martyrs, le palais Mustapha Pacha, la citadelle et le palais des Raïs au bord de mer.",
    "overview": "La Casbah d'Alger est l'un des grands quartiers historiques de la Méditerranée, et cette balade la lit de bas en haut. Depuis le front de mer et la place des Martyrs, vous montez par les ruelles étroites jusqu'au palais Mustapha Pacha, à la citadelle ottomane et à la maison d'Ali La Pointe — un lieu clé de la guerre d'indépendance — avant de redescendre vers le palais des Raïs (Bastion 23), au bord de l'eau. Une introduction dense et pleine d'atmosphère au vieil Alger.",
    "highlights": [
      "Les ruelles étroites et les vieilles mosquées de la Casbah",
      "Le palais Mustapha Pacha et l'architecture ottomane",
      "Des terrasses panoramiques sur la baie",
      "La citadelle et la maison d'Ali La Pointe",
      "Le palais des Raïs (Bastion 23) au bord de l'eau"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Balade guidée dans la Casbah",
        "body": "Rendez-vous avec votre guide au bord de mer, au pied de la Casbah, puis montée par la place des Martyrs et sa mosquée historique, le palais Mustapha Pacha, une terrasse panoramique, la citadelle et la maison d'Ali La Pointe, figure de l'indépendance, pour finir au palais des Raïs face à la mer.",
        "stops": [
          {
            "place": "La place des Martyrs et la mosquée Ketchaoua",
            "text": "La place au pied de la Casbah et sa mosquée ottomane du XVIIe siècle, rouverte après une décennie de restauration."
          },
          {
            "place": "Le palais Mustapha Pacha et la citadelle",
            "text": "Le palais du dey du XVIIIe siècle, orné de céramiques peintes, et la citadelle au sommet de la Casbah, là où le coup d'éventail de 1830 déclencha l'invasion française."
          },
          {
            "place": "La maison d'Ali La Pointe et le palais des Raïs",
            "text": "La cache dynamitée, préservée au cœur de la Casbah, et les palais ottomans du Bastion 23, en bord de mer, où s'achève la promenade."
          }
        ]
      }
    ],
    "includes": [
      "Guide professionnel (français, anglais ou arabe)",
      "Entrées des sites du parcours",
      "Transport pendant la visite",
      "Balade guidée dans la Casbah"
    ],
    "excludes": [
      "Repas et boissons",
      "Prise en charge à l'hôtel (sauf arrangement)",
      "Activités optionnelles et dépenses personnelles"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Printemps et automne"
      },
      {
        "label": "Rythme",
        "value": "Modéré — escaliers et ruelles pentues"
      },
      {
        "label": "Formule",
        "value": "Balade guidée à pied (français / anglais / arabe)"
      },
      {
        "label": "À prévoir",
        "value": "Bonnes chaussures, eau, tenue couvrante"
      }
    ],
    "faqs": [
      {
        "q": "La Casbah est-elle sûre avec un guide ?",
        "a": "Oui — c'est une promenade accueillante qui en vaut largement la peine ; prévoyez de bonnes chaussures pour les escaliers."
      },
      {
        "q": "Combien de temps dure la balade ?",
        "a": "Une visite guidée à travers tout le quartier, essentiellement en montée, à un rythme tranquille avec des arrêts."
      },
      {
        "q": "Les entrées sont-elles incluses ?",
        "a": "Oui — pour les monuments du parcours."
      },
      {
        "q": "Qui était Ali La Pointe ?",
        "a": "Une figure de la guerre d'indépendance algérienne ; sa maison dans la Casbah fait partie du parcours."
      }
    ]
  },
  "tadrart-rouge-7-days": {
    "title": "Tadrart Rouge — 7 jours dans le Sahara rouge",
    "duration": "7 jours · 6 nuits",
    "hook": "La Tadrart, c'est le Sahara tel qu'on l'imagine avant de l'avoir vu : du sable rose venant buter contre la roche noire, des arches grandes comme des cathédrales, et un ciel sans le moindre obstacle.",
    "full": true,
    "seoTitle": "Circuit Tadrart Rouge 7 jours — Sahara depuis Djanet",
    "seoDescription": "Expédition privée de 7 jours dans la Tadrart Rouge au départ de Djanet : dunes roses, arches, gravures rupestres et bivouacs avec équipe touarègue.",
    "overview": "C'est le circuit classique de Djanet, mené au rythme que mérite le paysage. Sept jours, dont six s'achèvent à un bivouac que vous aidez à monter, traversant la Tadrart Rouge de Tigharghart aux grandes dunes de Tin Merzouga, avant de revenir par les arches naturelles d'Ajelati. Votre guide et vos chauffeurs sont touaregs de Djanet, le cuisinier voyage avec vous, et tout le volet sud — vol depuis Alger, transferts aéroport, autorisations du parc — est organisé avant votre atterrissage. Il ne vous reste qu'à apporter un sac de voyage et l'envie de dormir sur le sable.",
    "highlights": [
      "Six nuits de bivouac sauvage sous le ciel saharien",
      "Les dunes roses et le grand erg de Tin Merzouga",
      "Les gorges d'El Berdj et leurs gravures rupestres",
      "Les arches naturelles monumentales d'Ajelati",
      "Tin Abadène — girafes et éléphants préhistoriques",
      "La « Vache qui pleure » de Tigharghart et le rocher de l'Éléphant",
      "Tamezguida, la « cathédrale » de grès",
      "Guides, chauffeurs et cuisinier de campement touaregs, du début à la fin"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Djanet → Tigharghart",
        "body": "Atterrissage à Djanet après le vol depuis Alger, et rencontre avec l'équipe qui vous accompagnera toute la semaine. Départ immédiat en 4×4 vers Tigharghart, où le premier bivouac s'installe et où le dîner cuit sur le feu. Première nuit sous tente ou, si vous préférez, à la belle étoile.",
        "stops": [
          {
            "place": "Djanet",
            "text": "La capitale touarègue oasienne du sud-est, porte d'entrée du Tassili n'Ajjer."
          },
          {
            "place": "Tigharghart",
            "text": "Le premier campement, à la lisière du pays de l'art rupestre où vous reviendrez la dernière matinée."
          },
          {
            "place": "Le premier bivouac",
            "text": "Le campement s'installe à Tigharghart — nattes, feu de bois, dîner cuit dessus, et le choix entre une tente et la voûte étoilée."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tigharghart → El Berdj",
        "body": "Petit-déjeuner au camp, puis traversée vers les gorges d'El Berdj — de profondes parois de grès portant gravures et peintures. Déjeuner pique-nique à l'ombre, campement dressé à El Berdj, et coucher de soleil depuis les dunes qui les surplombent.",
        "stops": [
          {
            "place": "La traversée vers El Berdj",
            "text": "Une matinée de 4×4 entre les deux campements, entre sable meuble et roche noire."
          },
          {
            "place": "El Berdj",
            "text": "D'impressionnantes gorges dont les parois portent à la fois gravures et panneaux peints."
          },
          {
            "place": "Les dunes au-dessus d'El Berdj",
            "text": "L'ascension pour le coucher de soleil sur le réseau de gorges, avec le campement dressé à leur pied."
          }
        ]
      },
      {
        "day": 3,
        "title": "El Berdj → Moul Naga",
        "body": "Une journée de paysages alternant sable et roche, avec plusieurs haltes sur des sites d'art rupestre remarquables. Déjeuner pique-nique, puis route vers Moul Naga, où le campement s'installe parmi des dunes majestueuses et où le dîner se prend sous les étoiles.",
        "stops": [
          {
            "place": "Le pays de sable et de roche",
            "text": "Une journée qui alterne champs de dunes et massifs de grès — ce mélange qui donne à la Tadrart son caractère."
          },
          {
            "place": "Haltes rupestres en chemin",
            "text": "Plusieurs panneaux gravés et peints visités en chemin : bovins, chasseurs et la faune d'un Sahara qui avait des rivières."
          },
          {
            "place": "Moul Naga",
            "text": "Un bivouac dressé au cœur des dunes."
          }
        ]
      },
      {
        "day": 4,
        "title": "Moul Naga → Erg Tin Merzouga",
        "body": "Marche dans les dunes roses et les paysages emblématiques de la Tadrart Rouge, puis arrivée à l'Erg Tin Merzouga — la grande mer de sable. Ascension des hautes dunes pour un coucher de soleil qui, à lui seul, justifie le voyage pour beaucoup, et campement à leur pied.",
        "stops": [
          {
            "place": "Une matinée dans les dunes roses",
            "text": "À pied dans le sable rose et la roche sculptée par le vent qui donnent son nom à la Tadrart Rouge."
          },
          {
            "place": "Erg Tin Merzouga",
            "text": "Le grand champ de dunes de la Tadrart, et son coucher de soleil le plus célèbre."
          },
          {
            "place": "La haute dune au coucher du soleil",
            "text": "L'ascension que beaucoup viennent chercher — tout l'erg qui vire au rouge, puis au violet, vu d'en haut."
          }
        ]
      },
      {
        "day": 5,
        "title": "Tin Merzouga → Tissetka → Ouanahar",
        "body": "Descente vers l'Oued In Djaren puis vers Tin Abadène, dont les gravures montrent girafes et éléphants — animaux d'un Sahara autrefois vert. Déjeuner pique-nique, puis route vers Ouanahar et campement du soir.",
        "stops": [
          {
            "place": "Oued In Djaren",
            "text": "Une vallée sèche serpentant entre des parois de grès, et la voie de sortie de l'erg."
          },
          {
            "place": "Tin Abadène",
            "text": "Girafes et éléphants gravés, de l'époque où ce désert abritait des rivières."
          },
          {
            "place": "Ouanahar",
            "text": "Le campement de la nuit, plus profondément dans la Tadrart."
          }
        ]
      },
      {
        "day": 6,
        "title": "Ouanahar → Ajelati → Oued In Djaren",
        "body": "Une matinée parmi des arches naturelles monumentales, puis la « cathédrale » de Tamezguida — une formation de grès qui porte bien son nom. Marche dans l'Oued In Djaren, déjeuner pique-nique, et campement à Ajelati pour le coucher de soleil sur les dunes noires.",
        "stops": [
          {
            "place": "Les arches naturelles",
            "text": "Une matinée parmi les arches monumentales de la Tadrart, sculptées par le vent — les formations les plus photographiées du parc."
          },
          {
            "place": "Tamezguida",
            "text": "La « cathédrale » de grès de la Tadrart."
          },
          {
            "place": "Ajelati",
            "text": "Dunes noires, et la dernière nuit dans le désert."
          }
        ]
      },
      {
        "day": 7,
        "title": "Ajelati → Tigharghart → Djanet → retour",
        "body": "Retour à Tigharghart pour les deux gravures que tout le monde vient voir : la « Vache qui pleure » et le rocher de l'Éléphant. Retour à Djanet, puis transfert à l'aéroport pour le vol vers le nord.",
        "stops": [
          {
            "place": "Tigharghart — la « Vache qui pleure »",
            "text": "La gravure la plus photographiée du Sahara, un bovin en pleurs sculpté dans une paroi basse il y a plusieurs millénaires."
          },
          {
            "place": "Le rocher de l'Éléphant",
            "text": "La seconde gravure célèbre de Tigharghart, à quelques minutes à pied de la première."
          },
          {
            "place": "Djanet et l'aéroport de Tiska",
            "text": "Retour à l'oasis pour se rafraîchir et prendre un dernier repas avant le transfert pour le vol vers le nord."
          }
        ]
      }
    ],
    "includes": [
      "Vol intérieur aller-retour Alger ⇄ Djanet (Air Algérie, direct)",
      "Tous les transferts aéroport — Alger et Djanet",
      "Véhicules 4×4 et chauffeurs du désert expérimentés pendant tout le circuit",
      "Guide touareg agréé de Djanet",
      "Pension complète — petit-déjeuner, déjeuner et dîner chaque jour",
      "Matériel de campement : tentes, matelas et couvertures",
      "Autorisations et formalités du Parc national du Tassili n'Ajjer",
      "Eau en bouteille pendant tout le circuit",
      "Documents d'appui pour le visa fournis avec votre réservation"
    ],
    "excludes": [
      "Vols internationaux à destination et au départ d'Alger",
      "Frais de visa algérien",
      "Assurance voyage et médicale (obligatoire)",
      "Boissons hors eau ; dépenses personnelles",
      "Pourboires pour le guide, les chauffeurs et l'équipe de campement",
      "Autorisations de photo ou de drone, le cas échéant"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril (le grand sud n'est pas parcouru en été)"
      },
      {
        "label": "Rythme",
        "value": "Confortable — déplacements en 4×4, courtes marches sur chaque site"
      },
      {
        "label": "Nuits",
        "value": "Bivouac sauvage — tentes, matelas et couvertures fournis"
      },
      {
        "label": "Groupe",
        "value": "Petit groupe ou départ privé"
      },
      {
        "label": "Nuits froides",
        "value": "Prévoyez de vraies couches chaudes — la température frôle le zéro en hiver"
      },
      {
        "label": "Réseau",
        "value": "Aucun dès que vous quittez Djanet — c'est un peu le but recherché"
      }
    ],
    "faqs": [
      {
        "q": "Le vol intérieur est-il vraiment inclus ?",
        "a": "Oui. Le prix couvre le vol aller-retour Air Algérie entre Alger et Djanet, direct, ainsi que tous les transferts aéroport aux deux extrémités. Vous organisez votre vol international jusqu'à Alger ; nous nous occupons de tout le reste."
      },
      {
        "q": "Le circuit est-il physiquement difficile ?",
        "a": "Modéré. Les déplacements se font en 4×4 et les marches sont courtes — une heure ici, l'ascension d'une dune là. La vraie exigence est de se sentir à l'aise avec le camping : six nuits sur un matelas sous tente, une toilette sommaire, et aucun réseau."
      },
      {
        "q": "Quand ce circuit est-il possible ?",
        "a": "D'octobre à avril. Le grand sud n'est pas parcouru en été, et la période classique va de novembre à février, quand les journées sont chaudes et claires. Les nuits de cette saison frôlent le zéro, d'où l'importance de vraies couches chaudes."
      },
      {
        "q": "Faut-il un visa ?",
        "a": "Oui, et c'est ici que s'applique l'entrée par le sud — un programme saharien organisé arrivant par Djanet, ouvert aux voyageurs de toute nationalité. Nous préparons les documents avec votre réservation ; vérifiez les conditions en vigueur auprès de votre consulat d'Algérie."
      },
      {
        "q": "Comment est constitué le groupe ?",
        "a": "Restreint. Le circuit fonctionne en petit groupe ou en départ privé pour votre propre groupe — précisez votre préférence lors de votre demande."
      }
    ]
  },
  "ihrir-oasis-7-days": {
    "title": "Ihrir et le Tassili — 7 jours entre oasis et ergs",
    "duration": "7 jours · 6 nuits",
    "hook": "Tout le monde imagine le Sahara sec. Ihrir est l'endroit où il ne l'est pas — une oasis encaissée d'eau stagnante, de roseaux et de vasques rocheuses, à une heure de dunes qui courent jusqu'à l'horizon.",
    "full": true,
    "seoTitle": "Circuit Ihrir & Tassili 7 jours — oasis et dunes",
    "seoDescription": "Circuit de 7 jours au départ de Djanet : oasis d'Ihrir, canyon d'Essendilène, dunes de l'Erg Admer et gravures rupestres, avec guide touareg.",
    "overview": "Si la Tadrart est le Sahara du sable, Ihrir est celui de l'eau. Ce circuit explore le versant nord du Tassili n'Ajjer : une oasis encaissée dont les gueltas conservent leur eau toute l'année, un canyon où l'on peut nager selon la saison, les tours rocheuses sculptées par le vent de Tikoubaouine, et les hautes dunes de l'Erg Admer pour le coucher du soleil. Six nuits sous toile, une nuit en maison d'hôtes à Djanet à l'arrivée, et le vol depuis Alger inclus dans le prix. C'est le plus discret de nos deux circuits de sept jours au départ de Djanet, et celui qui surprend le plus.",
    "highlights": [
      "L'oasis encaissée d'Ihrir et ses gueltas permanentes",
      "Gravures rupestres et vasques naturelles à Idaren et Tasourt",
      "Coucher de soleil depuis les hautes dunes de l'Erg Admer",
      "Le canyon de l'Oued Essendilène — baignade possible selon la saison",
      "Les formations rocheuses de Tikoubaouine, sculptées par le vent",
      "Le plateau d'In Imouroudene",
      "Adaik, le « petit Sefar », et son art rupestre",
      "La « Vache qui pleure » de Tigharghart et le rocher de l'Éléphant"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Djanet",
        "body": "Atterrissage à Djanet, porte d'entrée du Tassili n'Ajjer, où vous accueille notre équipe. Transfert à la maison d'hôtes, temps de repos après le vol, et dîner convivial avant le début du circuit.",
        "stops": [
          {
            "place": "L'aéroport de Tiska",
            "text": "Accueil à votre arrivée dans l'aéroport le plus austral d'Algérie, à 30 km de l'oasis."
          },
          {
            "place": "Djanet",
            "text": "Capitale touarègue oasienne du sud-est — palmeraies au pied de falaises rouges."
          },
          {
            "place": "La maison d'hôtes à Djanet",
            "text": "Une première nuit à l'abri — une maison à cour au milieu des palmiers, et un dîner avec l'équipe qui vous accompagnera toute la semaine."
          }
        ]
      },
      {
        "day": 2,
        "title": "Djanet → Ihrir → Idaren → Tasourt",
        "body": "Petit-déjeuner, puis départ en 4×4 vers la vallée d'Ihrir — une oasis encaissée réputée pour ses gueltas naturelles et sa végétation étonnamment luxuriante. Route ensuite vers Idaren et Tasourt pour explorer gravures rupestres et autres vasques naturelles. Le campement s'installe, le dîner cuit sur le feu, et vous dormez sous tente ou à la belle étoile.",
        "stops": [
          {
            "place": "Ihrir",
            "text": "Une oasis encaissée dont les vasques rocheuses conservent leur eau toute l'année."
          },
          {
            "place": "Les gueltas d'Ihrir",
            "text": "Des vasques rocheuses permanentes au fond du canyon, avec roseaux, poissons et oiseaux en plein désert."
          },
          {
            "place": "Idaren et Tasourt",
            "text": "Gravures rupestres et bassins naturels le long de la vallée."
          }
        ]
      },
      {
        "day": 3,
        "title": "Ihrir → Tilalin → Erg Admer",
        "body": "Petit-déjeuner au campement et marche dans la région de Tilalin, puis route vers l'Erg Admer. Ascension des dunes pour le coucher de soleil sur l'erg, et campement en plein désert.",
        "stops": [
          {
            "place": "Tilalin",
            "text": "Une marche matinale parmi les formations rocheuses et les lits asséchés de la région, avant la reprise de la route."
          },
          {
            "place": "Erg Admer",
            "text": "Un grand champ de dunes — l'ascension pour le coucher de soleil est la récompense de la journée."
          },
          {
            "place": "Le campement dans l'erg",
            "text": "Un campement dressé en plein sable, sans rien à l'horizon — la nuit la plus dépouillée du circuit."
          }
        ]
      },
      {
        "day": 4,
        "title": "Erg Admer → Oued Essendilène → Tikoubaouine",
        "body": "Départ vers l'Oued Essendilène et marche dans son canyon, où la baignade est possible selon la saison. Déjeuner pique-nique, puis route vers Tikoubaouine et ses formations rocheuses sculptées par le vent. Campement au milieu des rochers.",
        "stops": [
          {
            "place": "Oued Essendilène",
            "text": "Un canyon aux eaux permanentes — baignade possible selon la saison."
          },
          {
            "place": "La marche dans le canyon",
            "text": "Une heure de marche en remontant les gorges jusqu'à l'eau, entre des parois qui se resserrent peu à peu."
          },
          {
            "place": "Tikoubaouine",
            "text": "Des tours et des arches sculptées par le vent plutôt que par l'eau."
          }
        ]
      },
      {
        "day": 5,
        "title": "In Imouroudene → Adaik",
        "body": "Exploration du plateau d'In Imouroudene, marche panoramique et déjeuner pique-nique. Route ensuite vers Adaik — connu localement comme le « petit Sefar » pour sa concentration d'art rupestre — avec du temps libre pour profiter du coucher de soleil avant le dîner au bivouac.",
        "stops": [
          {
            "place": "In Imouroudene",
            "text": "Un plateau offrant de longues vues sur le Tassili."
          },
          {
            "place": "Adaik",
            "text": "Le « petit Sefar » — de l'art rupestre sans l'ascension du plateau."
          },
          {
            "place": "Coucher de soleil à Adaik",
            "text": "Du temps libre sur les rochers pour les dernières lumières, avant le dîner au bivouac."
          }
        ]
      },
      {
        "day": 6,
        "title": "Adaik → Timghas",
        "body": "Petit-déjeuner et route vers Timghas, avec une marche d'exploration et un moment consacré à la flore saharienne qui survit ici. Déjeuner pique-nique, campement dressé, et dernier dîner sous les étoiles.",
        "stops": [
          {
            "place": "Timghas",
            "text": "Le dernier campement, et un regard de plus près sur ce qui pousse réellement dans le Sahara."
          },
          {
            "place": "La flore saharienne à pied",
            "text": "Une marche consacrée à ce qui pousse vraiment ici — acacia, tamaris, calotropis et les plantes que les Touaregs utilisent encore."
          },
          {
            "place": "Le dernier bivouac",
            "text": "Un dernier dîner au coin du feu sous un ciel immense, avant le retour vers Djanet."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timghas → Tigharghart → Djanet → retour",
        "body": "Retour vers Tigharghart pour la gravure de la « Vache qui pleure » et le rocher de l'Éléphant, puis retour à Djanet et transfert à l'aéroport pour le vol de retour.",
        "stops": [
          {
            "place": "Tigharghart — la « Vache qui pleure »",
            "text": "La gravure la plus photographiée du Sahara, sur le chemin du retour vers l'oasis."
          },
          {
            "place": "Le rocher de l'Éléphant",
            "text": "La seconde gravure célèbre de Tigharghart, à quelques pas de la première."
          },
          {
            "place": "Djanet et l'aéroport de Tiska",
            "text": "Retour à l'oasis, puis transfert pour le vol vers le nord."
          }
        ]
      }
    ],
    "includes": [
      "Vol intérieur aller-retour Alger ⇄ Djanet (Air Algérie, direct)",
      "Tous les transferts aéroport — Alger et Djanet",
      "Véhicules 4×4 et chauffeurs du désert expérimentés pendant tout le circuit",
      "Guide touareg agréé de Djanet",
      "Pension complète — petit-déjeuner, déjeuner et dîner chaque jour",
      "Matériel de campement : tentes, matelas et couvertures",
      "Autorisations et formalités du Parc national du Tassili n'Ajjer",
      "Eau en bouteille pendant tout le circuit",
      "Documents d'appui pour le visa fournis avec votre réservation"
    ],
    "excludes": [
      "Vols internationaux à destination et au départ d'Alger",
      "Frais de visa algérien",
      "Assurance voyage et médicale (obligatoire)",
      "Boissons hors eau ; dépenses personnelles",
      "Pourboires pour le guide, les chauffeurs et l'équipe de campement",
      "Autorisations de photo ou de drone, le cas échéant"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril (le grand sud n'est pas parcouru en été)"
      },
      {
        "label": "Rythme",
        "value": "Confortable — déplacements en 4×4, courtes marches sur chaque site"
      },
      {
        "label": "Nuits",
        "value": "Une nuit en maison d'hôtes à Djanet, puis cinq en bivouac sauvage"
      },
      {
        "label": "Groupe",
        "value": "Petit groupe ou départ privé"
      },
      {
        "label": "Baignade",
        "value": "Possible dans l'Oued Essendilène selon la saison — prévoyez une tenue de bain"
      },
      {
        "label": "Réseau",
        "value": "Aucun dès que vous quittez Djanet"
      }
    ],
    "faqs": [
      {
        "q": "En quoi ce circuit diffère-t-il de celui de la Tadrart ?",
        "a": "Même durée, même prix, Sahara différent. La Tadrart, c'est le sable — dunes roses, arches, le grand erg. Ihrir, c'est l'eau et la diversité : une oasis permanente, un canyon où l'on peut nager, des tours sculptées par le vent et un plateau sombre. Ceux qui veulent des dunes choisissent la Tadrart ; ceux qui veulent de la variété choisissent celui-ci."
      },
      {
        "q": "Peut-on vraiment nager dans le désert ?",
        "a": "Dans l'Oued Essendilène, selon la saison et le niveau de l'eau. Les gueltas d'Ihrir conservent de l'eau toute l'année mais ne se prêtent pas toujours à la baignade. Prévoyez une tenue de bain et laissez le guide juger le jour même."
      },
      {
        "q": "Le vol est-il inclus ?",
        "a": "Oui — le vol aller-retour Air Algérie Alger ⇄ Djanet et tous les transferts aéroport. Votre vol international jusqu'à Alger reste à votre charge."
      },
      {
        "q": "Comment se passent les nuits ?",
        "a": "Une nuit en maison d'hôtes à Djanet à l'arrivée, puis cinq en bivouac sauvage, avec tentes, matelas et couvertures fournis. Les nuits d'hiver dans le Sahara sont réellement froides — prévoyez l'équipement en conséquence."
      },
      {
        "q": "Quand ce circuit est-il proposé ?",
        "a": "D'octobre à avril, avec novembre à février comme période classique. Le grand sud n'est pas parcouru en été."
      }
    ]
  },
  "sefar-tassili-trek": {
    "title": "Trek de Sefar — à pied sur le plateau du Tassili",
    "duration": "7 jours · 6 nuits",
    "hook": "On ne se rend pas à Sefar en véhicule. On y monte à pied, et l'on marche des jours durant entre des parois peintes vieilles de cinq à huit mille ans.",
    "full": true,
    "seoTitle": "Trek de Sefar — randonnée sur le plateau du Tassili",
    "seoDescription": "Trek de 7 jours sur le plateau du Tassili n'Ajjer, entre Tin Zoumaitek, Sefar et Djabarren, parmi les plus grands ensembles d'art rupestre du Sahara.",
    "overview": "Celui-ci est le circuit sérieux. Depuis Djanet, la piste grimpe sur le plateau du Tassili, et là-haut tout se fait au pas de marche — guides, cuisiniers et âniers portant le campement pendant que vous parcourez cinq à sept heures par jour entre les sites d'art rupestre. Tin Zoumaitek et la vallée des cyprès millénaires, les « danseuses » peintes de Tin Tazarift, les masques de Sefar Noir et les grands dieux de Sefar Blanc, et enfin Djabarren, le plus vaste ensemble de peintures du Tassili. Des milliers d'œuvres, témoins d'un Sahara verdoyant, peuplé d'hommes et d'animaux. Là-haut, aucun appui véhicule, aucun réseau téléphonique : c'est un trek, et c'est la raison pour laquelle les voyageurs sérieux viennent en Algérie.",
    "highlights": [
      "L'ascension du plateau du Tassili depuis Tamrit",
      "Tin Zoumaitek et la vallée des cyprès millénaires",
      "Les « danseuses » peintes de Tin Tazarift",
      "Les masques de Sefar Noir et les grands dieux de Sefar Blanc",
      "Des panneaux préhistoriques à Tirassoutine, Tin Kani et Alarendemen",
      "Djabarren — le plus vaste ensemble de peintures du Tassili",
      "Bivouac sur le plateau chaque nuit"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Djanet → Tassili du Tafilalet",
        "body": "Arrivée à Djanet et accueil par l'équipe locale. Quelques heures de repos après le vol, puis transfert vers le Tassili du Tafilalet, où débute l'expédition et où vous attendent les guides, cuisiniers et âniers qui vous accompagneront toute la semaine.",
        "stops": [
          {
            "place": "Djanet",
            "text": "La capitale touarègue oasienne du sud-est, dernière ville avant le plateau."
          },
          {
            "place": "Tassili du Tafilalet",
            "text": "Là où s'arrêtent les véhicules et où commence la marche."
          },
          {
            "place": "L'équipe du trek",
            "text": "Les guides, cuisiniers et âniers qui portent le campement et vous accompagnent toute la semaine — rencontrés dès le premier soir."
          }
        ]
      },
      {
        "day": 2,
        "title": "L'ascension → Tin Zoumaitek",
        "body": "Ascension du plateau du Tassili, campement porté par les ânes. En haut, les premiers sites d'art rupestre de Tin Zoumaitek et la vallée des cyprès millénaires — véritables survivants du Sahara plus humide que décrivent les peintures. Première nuit en bivouac sous les étoiles.",
        "stops": [
          {
            "place": "L'ascension",
            "text": "L'escarpement menant au plateau : environ 7 heures de marche, +500 m de dénivelé."
          },
          {
            "place": "Tin Zoumaitek",
            "text": "Les premiers sites peints, et la vallée des cyprès millénaires."
          },
          {
            "place": "La vallée des cyprès",
            "text": "Des cyprès sahariens millénaires (Cupressus dupreziana) sur le plateau — survivants vivants du Sahara vert que rapportent les peintures."
          }
        ]
      },
      {
        "day": 3,
        "title": "In Tinen → Tin Tazarift",
        "body": "Une journée consacrée aux peintures des aiguilles d'In Tinen — scènes de chasse, troupeaux, figures mythologiques, témoignage unique de la vie préhistorique. Après le déjeuner, le site célèbre de Tin Tazarift et ses figures emblématiques, connues sous le nom des « danseuses ».",
        "stops": [
          {
            "place": "In Tinen",
            "text": "Des aiguilles peintes : chasses, troupeaux et figures mythologiques."
          },
          {
            "place": "Tin Tazarift",
            "text": "Les « danseuses » — parmi les images les plus reproduites de l'art saharien."
          },
          {
            "place": "Bivouac parmi les aiguilles",
            "text": "Campement dressé parmi les tours de grès érodées, dîner préparé par l'équipe, et le plateau totalement silencieux une fois la nuit tombée."
          }
        ]
      },
      {
        "day": 4,
        "title": "Tin Teferieste → Sefar Noir → Sefar Blanc",
        "body": "Le remarquable site de Tin Teferieste, puis la cité mythique de Sefar elle-même : les célèbres masques de Sefar Noir et les grands dieux de Sefar Blanc. Ce secteur est considéré comme l'un des ensembles de peintures rupestres les plus impressionnants de tout le Sahara.",
        "stops": [
          {
            "place": "Tin Teferieste",
            "text": "Le site du matin sur le chemin de Sefar — remarquable en lui-même avant les panneaux célèbres."
          },
          {
            "place": "Sefar Noir",
            "text": "Les masques — les images qui ont fait la réputation du site."
          },
          {
            "place": "Sefar Blanc",
            "text": "Les « grands dieux », parmi les figures les plus saisissantes de l'art saharien."
          }
        ]
      },
      {
        "day": 5,
        "title": "Tirassoutine → Tin Kani → Alarendemen",
        "body": "Le paysage se transforme au fil de la marche, s'ouvrant sur de vastes plateaux aux tons plus sombres. Traversée de Tirassoutine et Tin Kani avant d'atteindre Alarendemen, où le campement s'installe, avec plusieurs ensembles de peintures préhistoriques remarquablement conservés découverts en chemin.",
        "stops": [
          {
            "place": "Les plateaux sombres",
            "text": "Le paysage s'ouvrant sur de larges tables aux teintes plus sombres, avec des panneaux peints bien conservés découverts pendant la traversée."
          },
          {
            "place": "Tirassoutine et Tin Kani",
            "text": "Des panneaux peints le long de la traversée."
          },
          {
            "place": "Alarendemen",
            "text": "Le bivouac de la nuit sur le plateau sombre."
          }
        ]
      },
      {
        "day": 6,
        "title": "Djabarren",
        "body": "Arrivée au site célèbre de Djabarren, considéré comme le plus vaste ensemble de peintures rupestres du Tassili. Des milliers d'œuvres y sont cataloguées, illustrant les différentes périodes de l'histoire saharienne — une journée exceptionnelle au cœur de ce qui est, très concrètement, un musée à ciel ouvert.",
        "stops": [
          {
            "place": "Djabarren",
            "text": "Le plus vaste ensemble peint du Tassili — des milliers d'œuvres cataloguées."
          },
          {
            "place": "Quatre périodes sur une même paroi",
            "text": "Des œuvres des périodes des Têtes Rondes, Bovidienne, Chevaline et Camelline côte à côte — toute la séquence de l'histoire saharienne en peinture."
          },
          {
            "place": "Le dernier bivouac sur le plateau",
            "text": "Une dernière nuit là-haut sur le Tassili avant la descente du lendemain matin."
          }
        ]
      },
      {
        "day": 7,
        "title": "Descente du plateau → Djanet → retour",
        "body": "Une dernière matinée sur le Tassili, puis la descente du plateau avec les guides et les ânes — la même ascension que le premier jour, mais en sens inverse et avec une semaine d'expérience en plus. Retour aux véhicules puis vers Djanet, avant le transfert à l'aéroport de Tiska pour le vol vers le nord.",
        "stops": [
          {
            "place": "La descente",
            "text": "La descente de l'escarpement gravi le premier jour, jusqu'au point où attendent les véhicules."
          },
          {
            "place": "Djanet",
            "text": "Un dernier regard sur l'oasis avant l'aéroport."
          },
          {
            "place": "L'aéroport de Tiska",
            "text": "Le transfert hors de l'oasis pour le vol vers le nord."
          }
        ]
      }
    ],
    "includes": [
      "Vol intérieur aller-retour Alger ⇄ Djanet (Air Algérie, direct)",
      "Tous les transferts aéroport — Alger et Djanet",
      "Pension complète pendant tout le circuit",
      "Matériel de bivouac et logistique de campement sur le plateau",
      "Guides, cuisiniers et âniers locaux expérimentés",
      "Ânes portant le matériel de campement et les bagages",
      "Autorisations et formalités du Parc national du Tassili n'Ajjer",
      "Documents d'appui pour le visa fournis avec votre réservation"
    ],
    "excludes": [
      "Vols internationaux à destination et au départ d'Alger",
      "Frais de visa algérien",
      "Assurance voyage et médicale (obligatoire)",
      "Boissons hors eau ; dépenses personnelles",
      "Pourboires pour le guide, les chauffeurs et l'équipe de campement",
      "Autorisations de photo ou de drone, le cas échéant"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril (le grand sud n'est pas parcouru en été)"
      },
      {
        "label": "Rythme",
        "value": "Soutenu — 4 à 7 heures de marche par jour, +500 m de dénivelé le premier jour"
      },
      {
        "label": "Nuits",
        "value": "Six nuits de campement et de bivouac sur le plateau"
      },
      {
        "label": "Encadrement",
        "value": "Guides, cuisiniers et âniers ; aucun accès véhicule sur le plateau"
      },
      {
        "label": "Condition physique",
        "value": "Réservé aux marcheurs réguliers — ceci est un trek, pas un circuit en véhicule"
      },
      {
        "label": "Réseau",
        "value": "Aucun sur le plateau"
      }
    ],
    "faqs": [
      {
        "q": "Quelle condition physique faut-il avoir ?",
        "a": "Assez bonne pour marcher quatre à sept heures par jour, six jours d'affilée, en commençant par une ascension de 500 m jusqu'au plateau et en terminant par la descente. Vous ne portez qu'un petit sac de jour — les ânes transportent le campement — mais il n'y a aucun appui véhicule et aucun moyen d'écourter une journée une fois là-haut. Les marcheurs réguliers s'en sortent sans difficulté ; les marcheurs occasionnels trouvent l'épreuve rude."
      },
      {
        "q": "Pourquoi ne peut-on pas se rendre à Sefar en véhicule ?",
        "a": "Le Tassili est un plateau que l'on atteint par une ascension, et les sites se trouvent tout en haut. C'est précisément ce qui explique l'état de conservation des peintures, et pourquoi les journées là-haut ne ressemblent à rien d'autre en Algérie."
      },
      {
        "q": "Quel est l'âge de l'art rupestre ?",
        "a": "Les peintures s'échelonnent sur environ cinq à huit mille ans, témoignant d'un Sahara verdoyant peuplé d'hommes, de troupeaux et d'animaux sauvages. Djabarren, à lui seul, réunit des milliers d'œuvres cataloguées appartenant à plusieurs périodes distinctes."
      },
      {
        "q": "Le vol est-il inclus ?",
        "a": "Oui — le vol aller-retour entre Alger et Djanet et tous les transferts aéroport. Votre vol international jusqu'à Alger reste à votre charge."
      },
      {
        "q": "Quand ce trek est-il proposé ?",
        "a": "D'octobre à avril. Le plateau ne se parcourt pas en été."
      }
    ]
  },
  "algeria-grand-discovery-14-days": {
    "title": "Grande Découverte de l'Algérie — 14 jours, de la côte au Sahara",
    "duration": "14 jours · 13 nuits",
    "hook": "La plupart des voyageurs doivent choisir entre l'Algérie romaine et le Sahara. Quatorze jours suffisent pour ne plus avoir à choisir.",
    "full": true,
    "seoTitle": "Algérie en 14 jours — côte, Sahara et sites romains",
    "seoDescription": "Circuit de 14 jours en Algérie : Tadrart Rouge, Constantine, Timgad, Djémila, Alger, Tipaza et le M'Zab, avec vols intérieurs et guide inclus.",
    "overview": "C'est le pays tout entier en un seul voyage, séquencé pour que chaque vol intérieur soit une liaison directe régulière — sans transit, sans journée perdue en aéroport. Vous commencez à Alger et vous envolez dès la même nuit vers Djanet pour une expédition en 4×4 de quatre jours dans la Tadrart Rouge, avec deux nuits dans le désert. Vient ensuite l'est romain : Constantine sur ses gorges, Timgad, Annaba et Djémila. Retour dans la capitale pour la Casbah et le Bardo, puis vers l'ouest à Tipaza et Cherchell, et enfin de nouveau vers le sud, à Ghardaïa, pour les cinq villes fortifiées du M'Zab et les dunes de Sebseb. Six sites classés au patrimoine mondial de l'UNESCO, quatre vols directs, treize nuits, et un guide national qui vous accompagne du début à la fin.",
    "highlights": [
      "Quatre jours dans la Tadrart Rouge avec deux nuits de campement dans le désert",
      "La Casbah d'Alger, classée à l'UNESCO, et le musée du Bardo",
      "Timgad — la « Pompéi de l'Afrique »",
      "Djémila, perchée à 900 m sur un éperon montagneux",
      "Constantine, la ville des ponts suspendus au-dessus des gorges du Rhumel",
      "Tipaza et le Mausolée royal de Maurétanie",
      "Les cinq ksour fortifiés de la vallée du M'Zab",
      "Les dunes de Sebseb, au sud de Ghardaïa",
      "La basilique Saint-Augustin et Hippone, à Annaba"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivée à Alger → vol de nuit vers Djanet",
        "body": "Arrivée à l'aéroport Houari Boumediene, accueil par notre représentant, avec une chambre en day-use pour se rafraîchir. Marche d'orientation l'après-midi — place des Martyrs, la Grande Poste, le front de mer — puis dîner tôt et transfert vers le terminal intérieur pour le vol de nuit direct vers le sud.",
        "stops": [
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Accueil par notre représentant, avec une chambre en day-use pour se doucher et se changer après le vol international."
          },
          {
            "place": "La place des Martyrs et la Grande Poste",
            "text": "La place au pied de la Casbah et la poste néo-mauresque de 1910 — les deux repères du centre d'Alger."
          },
          {
            "place": "Les arcades du front de mer",
            "text": "La longue colonnade blanche dominant le port, l'image d'Alger vue depuis la mer, avant le transfert pour le vol de nuit vers le sud."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tigharghart et la Tadrart Rouge",
        "body": "Rencontre avec votre guide touareg agréé et départ en 4×4 dans la Tadrart Rouge, au sein du Parc national du Tassili n'Ajjer. Tigharghart, où se trouve la gravure mondialement connue de la « Vache qui pleure », puis traversée de dunes rouges géantes et de formations de grès jusqu'au campement en plein désert. Dîner touareg traditionnel sous les étoiles.",
        "stops": [
          {
            "place": "Tigharghart",
            "text": "La « Vache qui pleure » — la gravure la plus célèbre du Sahara."
          },
          {
            "place": "La Tadrart Rouge",
            "text": "Des dunes rouges géantes et des tours de grès au sein du Parc national du Tassili n'Ajjer, traversées en 4×4 avec un guide touareg agréé."
          },
          {
            "place": "Le campement en plein désert",
            "text": "Un dîner touareg traditionnel cuit sur le feu, et la première nuit à la belle étoile."
          }
        ]
      },
      {
        "day": 3,
        "title": "Au cœur de la Tadrart",
        "body": "Une journée entière parmi les grands paysages de la Tadrart Rouge : El Berdj, Moul Naga et l'Erg Tin Merzouga, avec des gravures préhistoriques et des points de vue panoramiques en chemin. Coucher de soleil en plein Sahara et deuxième nuit de bivouac sauvage.",
        "stops": [
          {
            "place": "El Berdj",
            "text": "De profondes gorges de grès dont les parois portent à la fois gravures et panneaux peints."
          },
          {
            "place": "Moul Naga",
            "text": "Un paysage de dunes majestueuses au cœur de la Tadrart, et les points de vue panoramiques de la journée."
          },
          {
            "place": "Erg Tin Merzouga",
            "text": "Les grandes dunes de la Tadrart au coucher du soleil."
          }
        ]
      },
      {
        "day": 4,
        "title": "In Djaren, Tin Abadène et Ouanahar → Djanet",
        "body": "Plus profondément dans le parc : la vallée d'In Djaren, les girafes et éléphants gravés de Tin Abadène, Ouanahar, la « cathédrale » de Tamezguida et les arches naturelles. Retour à Djanet après le coucher du soleil.",
        "stops": [
          {
            "place": "La vallée d'In Djaren et ses arches",
            "text": "Une vallée sèche aux arches de grès monumentales, sculptées par le vent — les formations emblématiques de la Tadrart."
          },
          {
            "place": "Tin Abadène",
            "text": "Girafes et éléphants préhistoriques."
          },
          {
            "place": "Tamezguida",
            "text": "Une formation de grès qui porte bien le nom de « cathédrale »."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djanet → vol de nuit vers Constantine",
        "body": "Une matinée consacrée à la Djanet touarègue : le musée du Tassili — le seul musée touareg d'Algérie — le vieux ksar d'Azellouaz et le marché local, avec du temps libre pour les souvenirs. Dîner d'adieu au Sahara, puis transfert tardif vers l'aéroport de Tiska.",
        "stops": [
          {
            "place": "Le musée du Tassili",
            "text": "Le seul musée touareg d'Algérie — relevés d'art rupestre, bijoux, armes et vie quotidienne des Kel Ajjer."
          },
          {
            "place": "Le ksar d'Azellouaz",
            "text": "Le quartier le plus ancien de Djanet, un village de banco perché sur la roche au-dessus des palmeraies."
          },
          {
            "place": "Le marché de Djanet",
            "text": "Le marché de l'oasis pour l'argent touareg, le cuir et les dattes, avec du temps libre pour les souvenirs avant le dîner d'adieu."
          }
        ]
      },
      {
        "day": 6,
        "title": "Constantine, la ville des ponts",
        "body": "Un départ tardif et sans hâte après le vol de nuit, puis la découverte de la ville : le palais d'Ahmed Bey, le musée national Cirta, le pont suspendu de Sidi M'Cid et la passerelle Mellah Slimane, la place des Martyrs et la vieille ville, et les points de vue sur les gorges du Rhumel.",
        "stops": [
          {
            "place": "Le pont de Sidi M'Cid",
            "text": "Suspendu très haut au-dessus des gorges du Rhumel — l'image emblématique de Constantine."
          },
          {
            "place": "Le palais d'Ahmed Bey",
            "text": "Les galeries peintes et les cours du dernier Bey."
          },
          {
            "place": "Le musée national Cirta et la vieille ville",
            "text": "Les collections d'archéologie et de beaux-arts de Constantine, la place des Martyrs et les points de vue sur les gorges du Rhumel."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timgad",
        "body": "Excursion d'une journée entière à Timgad, la cité romaine fondée par Trajan pour ses vétérans, préservée presque intacte par le sable : l'arc de Trajan, le théâtre, le forum et le capitole, les thermes et le plan en damier qui en font un modèle d'urbanisme romain.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La « Pompéi de l'Afrique » — un plan romain en damier parfait, à 115 km de Constantine."
          },
          {
            "place": "L'arc de Trajan",
            "text": "L'arc à trois baies dressé sur le decumanus — l'image par laquelle Timgad est connue dans le monde entier."
          },
          {
            "place": "Le théâtre, le forum et les thermes",
            "text": "Un théâtre de 3 500 places taillé dans la pente, le capitole et le forum au centre, et les complexes thermaux répartis autour du plan en damier."
          }
        ]
      },
      {
        "day": 8,
        "title": "Constantine → Annaba",
        "body": "Route matinale vers Annaba, l'une des plus anciennes villes méditerranéennes d'Algérie : la basilique Saint-Augustin, les ruines romaines d'Hippone, le front de mer de la Seybouse et la corniche, et un centre-ville animé.",
        "stops": [
          {
            "place": "La basilique Saint-Augustin",
            "text": "La basilique du XIXe siècle sur la colline dominant la cité romaine, qui conserve une relique du bras d'Augustin."
          },
          {
            "place": "Hippone",
            "text": "Le lieu où Augustin fut évêque — la cité romaine en contrebas de la basilique."
          },
          {
            "place": "La corniche et le cours de la Révolution",
            "text": "Le front de mer d'Annaba et la promenade centrale ombragée de platanes, où toute la ville se retrouve le soir."
          }
        ]
      },
      {
        "day": 9,
        "title": "Annaba → Djémila → Alger",
        "body": "Départ matinal vers l'ouest par l'autoroute jusqu'à Djémila : le forum, la basilique, les temples, l'arc de triomphe et le musée de mosaïques de l'antique Cuicul, perchée à 900 m sur son éperon montagneux. Poursuite ensuite vers Alger pour la soirée.",
        "stops": [
          {
            "place": "Djémila",
            "text": "L'une des villes romaines les mieux conservées au monde, et l'une des mieux situées."
          },
          {
            "place": "L'arc de Caracalla",
            "text": "L'arc de triomphe de l'an 216 à la lisière du nouveau forum de Cuicul, perché à 900 m sur son éperon montagneux."
          },
          {
            "place": "Le musée des mosaïques de Djémila",
            "text": "Des mosaïques parmi les plus riches du monde romain, conservées sur place, à côté des maisons dont elles proviennent."
          }
        ]
      },
      {
        "day": 10,
        "title": "Alger dans son ensemble",
        "body": "Une journée entière dans la capitale : la Casbah classée à l'UNESCO, le musée national du Bardo, la basilique Notre-Dame d'Afrique, le Maqam Echahid et les points de vue panoramiques sur la baie d'Alger.",
        "stops": [
          {
            "place": "La Casbah",
            "text": "La citadelle ottomane dominant la baie — ruelles en escalier, cours et terrasses."
          },
          {
            "place": "Le musée national du Bardo",
            "text": "Préhistoire et ethnographie dans une villa mauresque — moulages d'art rupestre saharien, bijoux d'argent et Algérie du quotidien."
          },
          {
            "place": "Notre-Dame d'Afrique et le Maqam Echahid",
            "text": "La basilique perchée sur sa falaise au-dessus de Bab El Oued, et les trois palmes de béton du Mémorial des Martyrs dominant la baie."
          }
        ]
      },
      {
        "day": 11,
        "title": "Tipaza et Cherchell → vol de nuit vers Ghardaïa",
        "body": "Route côtière vers l'ouest jusqu'au site romain de Tipaza, le Mausolée royal de Maurétanie et le musée archéologique de Cherchell. Retour à Alger pour le dîner, puis direction l'aéroport.",
        "stops": [
          {
            "place": "Tipaza",
            "text": "Une cité portuaire romaine étalée le long de la mer, où Camus se promenait parmi les ruines."
          },
          {
            "place": "Le Mausolée royal de Maurétanie",
            "text": "Un grand tambour de pierre sur la colline dominant la mer — le tombeau de Juba II et de Cléopâtre Séléné, fille de Cléopâtre d'Égypte."
          },
          {
            "place": "Le musée archéologique de Cherchell",
            "text": "La collection de mosaïques et de statuaire romaines et grecques de l'antique Césarée, parmi les plus belles d'Algérie."
          }
        ]
      },
      {
        "day": 12,
        "title": "La vallée du M'Zab",
        "body": "Une journée entière parmi les cinq ksour fortifiés du M'Zab : Ghardaïa, Beni Isguen, Melika, Bounoura et El Atteuf, avec le marché traditionnel et l'architecture mozabite dont la logique a fasciné Le Corbusier.",
        "stops": [
          {
            "place": "Le marché et le ksar de Ghardaïa",
            "text": "La place du marché à arcades au pied de la ville principale, et les maisons étagées grimpant jusqu'au minaret qui les domine."
          },
          {
            "place": "Beni Isguen",
            "text": "La ville sainte fortifiée des Mozabites ibadites."
          },
          {
            "place": "El Atteuf",
            "text": "La plus ancienne des cinq villes."
          }
        ]
      },
      {
        "day": 13,
        "title": "Les dunes de Sebseb → vol du soir vers Alger",
        "body": "Excursion matinale vers le sud jusqu'aux dunes de Sebseb — un dernier avant-goût du grand Sahara — puis retour à Ghardaïa. Dîner d'adieu de cuisine algérienne traditionnelle avant le vol du soir vers le nord.",
        "stops": [
          {
            "place": "La route vers le sud à travers la hamada",
            "text": "Le désert de pierre entre Ghardaïa et le sable — une transition que presque aucun visiteur ne voit."
          },
          {
            "place": "Sebseb",
            "text": "Des dunes à 90 km au sud de Ghardaïa, et le dernier horizon désertique du voyage."
          },
          {
            "place": "Un dîner d'adieu à Ghardaïa",
            "text": "Cuisine algérienne traditionnelle pour la dernière soirée, avant le vol du soir vers le nord."
          }
        ]
      },
      {
        "day": 14,
        "title": "Départ",
        "body": "Petit-déjeuner, matinée libre pour rattraper ce qui aurait été manqué ou pour de derniers achats, puis transfert privé vers l'aéroport Houari Boumediene.",
        "stops": [
          {
            "place": "Une matinée libre à Alger",
            "text": "Tout ce que la quinzaine aurait pu manquer — le Jardin d'Essai, la mosquée Ketchaoua, ou tout simplement le front de mer."
          },
          {
            "place": "Derniers achats",
            "text": "Argent kabyle, cuir touareg, dattes deglet nour et pâtisseries, rue Didouche Mourad ou dans les échoppes de la Casbah."
          },
          {
            "place": "L'aéroport Houari Boumediene",
            "text": "Le transfert privé et l'assistance à l'enregistrement pour votre vol international."
          }
        ]
      }
    ],
    "includes": [
      "Les 4 vols intérieurs (Air Algérie, classe économique, tous directs), taxes comprises",
      "13 nuits d'hébergement, en chambre twin ou double",
      "Petit-déjeuner quotidien pendant tout le séjour",
      "Pension complète pendant l'expédition Djanet/Sahara et l'étape de Ghardaïa",
      "Tous les transferts et visites en véhicules privés climatisés",
      "Véhicules 4×4 dans le Tassili n'Ajjer",
      "Guide national anglophone pendant tout le circuit ; guides touaregs agréés à Djanet",
      "Autorisations de parc national et tous les droits d'entrée des sites et musées mentionnés",
      "Matériel de campement complet et cuisinier dédié à l'expédition",
      "Documents d'appui pour le visa et lettre d'invitation",
      "Eau en bouteille pendant toutes les excursions"
    ],
    "excludes": [
      "Vols internationaux à destination et au départ d'Alger",
      "Frais de visa algérien",
      "Déjeuners et dîners non mentionnés ; boissons hors eau",
      "Pourboires pour les guides, chauffeurs et équipe de campement",
      "Assurance voyage et médicale (obligatoire — justificatif à fournir avant le départ)",
      "Dépenses personnelles ; autorisations de photo ou de drone, le cas échéant",
      "Supplément chambre individuelle ; arrivée anticipée ou départ tardif sauf mention contraire"
    ],
    "goodToKnow": [
      {
        "label": "Meilleure saison",
        "value": "Octobre à avril (le volet saharien exige la saison fraîche)"
      },
      {
        "label": "Rythme",
        "value": "Chargé mais sans précipitation — bases de trois nuits à Constantine et à Alger"
      },
      {
        "label": "Nuits",
        "value": "11 en hôtel, 2 en campement désertique pendant l'expédition dans la Tadrart"
      },
      {
        "label": "Vols",
        "value": "4 vols intérieurs directs inclus, taxes comprises"
      },
      {
        "label": "Groupe",
        "value": "Tarif calculé pour un groupe de 4 personnes en chambre twin ou double"
      },
      {
        "label": "Guide",
        "value": "Guide national anglophone pendant tout le circuit, guides touaregs à Djanet"
      }
    ],
    "faqs": [
      {
        "q": "Les vols intérieurs sont-ils vraiment tous directs ?",
        "a": "Oui. L'itinéraire est délibérément construit autour des liaisons directes régulières d'Air Algérie — y compris le vol hebdomadaire Djanet → Constantine — de sorte qu'il n'y a ni transit ni correspondance. Si les horaires d'hiver évoluent, nous réadaptons le programme sans frais supplémentaires en conservant chaque site."
      },
      {
        "q": "Quelle part du voyage est consacrée au désert ?",
        "a": "Quatre jours, du deuxième au cinquième, dans le Tassili n'Ajjer avec deux nuits de bivouac sauvage dans la Tadrart Rouge — une véritable expédition, et non une simple excursion aux dunes. Le reste du voyage explore l'Algérie romaine, ottomane et mozabite, avec un dernier après-midi saharien aux dunes de Sebseb."
      },
      {
        "q": "Quatorze jours, n'est-ce pas trop long ?",
        "a": "C'est ce qu'il faut au pays si l'on veut découvrir à la fois l'est romain et le grand sud sans forcer l'allure. Le circuit prévoit des bases de trois nuits à Constantine et à Alger, et deux à Ghardaïa : le rythme est chargé, mais jamais précipité."
      },
      {
        "q": "Sur quelle base le prix est-il calculé ?",
        "a": "Sur un groupe de quatre personnes voyageant ensemble, en chambre twin ou double, et il couvre tout ce qui figure dans les inclusions — y compris les quatre vols intérieurs. Indiquez-nous la taille de votre groupe et vos dates, et nous vous confirmons par écrit votre tarif exact par personne."
      },
      {
        "q": "Quand faut-il partir ?",
        "a": "D'octobre à avril. Le volet saharien exige la saison fraîche, qui est aussi la période la plus agréable pour parcourir à pied les sites romains."
      }
    ]
  }
};

export const tourFr = (id: string) => TOURS_FR[id];
export const hasFrenchPage = (id: string) => !!TOURS_FR[id]?.full;

// French translations of the 44 question pages in src/content/question/.
//
// The English question collection is the single source of truth for WHICH
// questions exist and what the answer says; this file only carries language.
// Keep the slugs identical to the English ones — they are the join key, and a
// slug that drifts silently drops that question out of this language.
//
// Consumed by the on-site assistant's answer index
// (src/pages/answers-[lang].json.ts). Before this file existed the assistant
// held 462 answers in English and 204 in French, so a French-speaking
// visitor asking a question the site answers well was handed to WhatsApp
// instead of being answered.

export interface QuestionI18n {
  q: string;
  a: string;
  kf: [string, string][];
}

export const QUESTIONS_FR: Record<string, QuestionI18n> = {
  "are-there-atms-in-algeria": {
    "q": "Y a-t-il des distributeurs en Algérie ?",
    "a": "Oui, dans les villes et les grandes agglomérations, mais ne comptez pas dessus. L'acceptation des cartes Visa et Mastercard étrangères est irrégulière, les plafonds journaliers sont bas, les machines sont souvent hors service ou vides, et vous obtenez le taux officiel. Apportez les espèces dont vous avez besoin plutôt que de compter les retirer sur place.",
    "kf": [
      [
        "Où",
        "Villes et grandes agglomérations"
      ],
      [
        "Cartes étrangères",
        "Acceptation irrégulière"
      ],
      [
        "Plafonds",
        "Retraits journaliers limités"
      ],
      [
        "Taux appliqué",
        "Le taux officiel"
      ]
    ]
  },
  "are-there-domestic-flights-in-algeria": {
    "q": "Y a-t-il des vols intérieurs en Algérie ?",
    "a": "Oui, et pour le sud ils sont indispensables. Air Algérie et Tassili Airlines relient Alger à Oran, Constantine, Annaba et aux villes sahariennes, dont Djanet, Tamanrasset, Ghardaïa, Timimoun et Adrar. L'avion est le seul moyen raisonnable d'atteindre le désert profond.",
    "kf": [
      [
        "Compagnies",
        "Air Algérie, Tassili Airlines"
      ],
      [
        "Hub principal",
        "Alger (ALG)"
      ],
      [
        "Accès au Sahara",
        "Djanet, Tamanrasset, Ghardaïa, Adrar"
      ],
      [
        "Réservation",
        "Tôt — les lignes du sud sont rares"
      ]
    ]
  },
  "can-i-get-an-algeria-visa-on-arrival": {
    "q": "Peut-on obtenir un visa algérien à l'arrivée ?",
    "a": "En général non. La quasi-totalité des visiteurs doit obtenir un visa algérien avant le départ, auprès d'un consulat. La seule exception reconnue est un circuit organisé au Sahara entrant par l'extrême sud (Djanet ou Tamanrasset), où un opérateur algérien licencié peut organiser l'entrée du groupe. Vérifiez les règles en vigueur auprès de votre consulat avant de réserver vos vols.",
    "kf": [
      [
        "Règle générale",
        "Visa obtenu à l'avance"
      ],
      [
        "Exception",
        "Circuits organisés dans l'extrême sud"
      ],
      [
        "Organisé par",
        "Un opérateur algérien licencié"
      ],
      [
        "À confirmer auprès de",
        "Votre consulat le plus proche"
      ]
    ]
  },
  "can-i-use-credit-cards-in-algeria": {
    "q": "Peut-on payer par carte en Algérie ?",
    "a": "À peine. L'Algérie fonctionne au comptant. Quelques hôtels internationaux, agences de compagnies aériennes et grandes enseignes d'Alger acceptent les cartes étrangères, mais les restaurants, les commerces, les taxis, les marchés et les entrées de sites ne les prennent presque jamais. Prévoyez de régler vos dépenses courantes en dinars, en espèces.",
    "kf": [
      [
        "Dépenses courantes",
        "Espèces uniquement, en dinars"
      ],
      [
        "Cartes parfois acceptées",
        "Grands hôtels, agences aériennes"
      ],
      [
        "Presque jamais",
        "Taxis, marchés, restaurants, sites"
      ],
      [
        "À prévoir",
        "Un voyage en espèces, la carte en secours"
      ]
    ]
  },
  "can-i-visit-algeria-without-a-tour-guide": {
    "q": "Peut-on visiter l'Algérie sans guide ?",
    "a": "Dans le nord, oui — Alger, Oran, Constantine, la côte et les cités romaines se parcourent en indépendant. Le Sahara profond est différent : l'extrême sud se visite avec un opérateur licencié, un guide et des permis, et le voyage indépendant y est restreint pour des raisons de sécurité.",
    "kf": [
      [
        "Villes du nord et côte",
        "Voyage indépendant possible"
      ],
      [
        "Sites romains",
        "Voyage indépendant possible"
      ],
      [
        "Sahara profond",
        "Opérateur licencié + guide + permis"
      ],
      [
        "Vraie difficulté",
        "La langue et la logistique, pas la règle"
      ]
    ]
  },
  "can-tourists-drive-in-algeria": {
    "q": "Les touristes peuvent-ils conduire en Algérie ?",
    "a": "Légalement oui — la location existe et les permis étrangers accompagnés d'un permis international sont acceptés — mais la plupart des visiteurs ont intérêt à prendre un chauffeur. Les routes du nord sont bonnes et chargées, la conduite urbaine est offensive, la signalisation est en arabe et en français, et l'extrême sud ne se conduit pas du tout en indépendant.",
    "kf": [
      [
        "Permis",
        "Le vôtre plus un permis international"
      ],
      [
        "Routes du nord",
        "Globalement bonnes, circulation offensive"
      ],
      [
        "Conduite de nuit",
        "À éviter sur les routes rurales"
      ],
      [
        "Sahara profond",
        "Interdit en indépendant"
      ]
    ]
  },
  "can-vegetarians-eat-well-in-algeria": {
    "q": "Les végétariens mangent-ils bien en Algérie ?",
    "a": "Plutôt bien, avec un peu d'effort. La cuisine algérienne est riche en légumineuses, en légumes, en pain et en salades, et beaucoup de bases sont sans viande — mais la viande est au cœur de l'hospitalité et la notion de végétarisme est peu comprise. Dites clairement ce que vous ne mangez pas plutôt que d'employer l'étiquette.",
    "kf": [
      [
        "Naturellement sans viande",
        "Salades, légumineuses, pains, pâtisseries"
      ],
      [
        "Attention à",
        "Le bouillon de viande dans les soupes et le couscous"
      ],
      [
        "Végétalien",
        "Plus difficile — beurre, œufs et laitages sont courants"
      ],
      [
        "Meilleure approche",
        "Nommer les aliments, pas le régime"
      ]
    ]
  },
  "can-you-drink-the-tap-water-in-algeria": {
    "q": "Peut-on boire l'eau du robinet en Algérie ?",
    "a": "Mieux vaut s'abstenir. L'eau du robinet est traitée dans les villes, mais l'approvisionnement est par endroits intermittent et l'eau est stockée dans des citernes de toit : il est donc conseillé aux visiteurs de boire de l'eau en bouteille, bon marché et disponible partout. Utilisez-la pour boire et pour vous brosser les dents, surtout hors des grandes villes.",
    "kf": [
      [
        "Pour boire",
        "De l'eau en bouteille"
      ],
      [
        "Pourquoi",
        "Approvisionnement intermittent et citernes"
      ],
      [
        "Disponibilité",
        "L'eau en bouteille est partout et peu chère"
      ],
      [
        "Dans le désert",
        "L'eau est transportée par votre opérateur"
      ]
    ]
  },
  "can-you-visit-algeria-during-ramadan": {
    "q": "Peut-on visiter l'Algérie pendant le Ramadan ?",
    "a": "Oui, et c'est l'une des périodes les plus prenantes pour venir — mais le rythme de la journée s'inverse. Beaucoup de restaurants ferment en journée, les horaires changent, et les villes s'animent après le coucher du soleil. Les visiteurs non musulmans ne sont pas censés jeûner, seulement rester discrets en mangeant et en buvant en public.",
    "kf": [
      [
        "En journée",
        "Beaucoup de restaurants fermés, rues plus calmes"
      ],
      [
        "Après le coucher du soleil",
        "Les villes s'animent tard dans la nuit"
      ],
      [
        "On n'attend pas de vous",
        "Que vous jeûniez"
      ],
      [
        "On attend de vous",
        "De manger et boire discrètement en public"
      ]
    ]
  },
  "do-i-need-a-visa-for-algeria": {
    "q": "Ai-je besoin d'un visa pour l'Algérie ?",
    "a": "La plupart des nationalités ont besoin d'un visa pour se rendre en Algérie, demandé à l'avance auprès d'un consulat algérien, en général avec une lettre d'invitation d'un tour-opérateur. Certains dispositifs permettent un visa à l'arrivée pour les circuits organisés au Sahara par le sud. Vérifiez toujours les règles en vigueur auprès du consulat algérien le plus proche.",
    "kf": [
      [
        "La plupart des voyageurs",
        "Visa exigé à l'avance"
      ],
      [
        "Exigence habituelle",
        "Invitation / réservation d'hôtel ou de circuit"
      ],
      [
        "Circuits au Sahara",
        "Un visa à l'arrivée peut s'appliquer"
      ],
      [
        "À confirmer auprès du",
        "Consulat algérien"
      ]
    ]
  },
  "do-i-need-an-invitation-letter-for-an-algeria-visa": {
    "q": "Faut-il une lettre d'invitation pour un visa algérien ?",
    "a": "Dans la plupart des cas oui. Les consulats algériens veulent normalement la preuve que quelqu'un vous attend en Algérie — soit une invitation privée d'un hôte, soit une invitation et un programme confirmé d'un tour-opérateur licencié. Les touristes sans contact personnel en Algérie passent par l'opérateur.",
    "kf": [
      [
        "Généralement exigée",
        "Oui, pour les demandes touristiques"
      ],
      [
        "Voie privée",
        "Invitation d'un hôte en Algérie"
      ],
      [
        "Voie touristique",
        "Invitation de l'opérateur + réservation"
      ],
      [
        "Délivrée par",
        "Une agence algérienne licenciée"
      ]
    ]
  },
  "do-i-need-vaccinations-for-algeria": {
    "q": "Faut-il des vaccins pour l'Algérie ?",
    "a": "Aucun vaccin n'est systématiquement obligatoire pour les voyageurs arrivant d'Europe ou d'Amérique du Nord, même si un certificat de fièvre jaune peut être exigé si vous arrivez d'un pays endémique. La recommandation habituelle est d'être à jour de ses vaccins courants. Consultez un centre de vaccination internationale bien avant le départ.",
    "kf": [
      [
        "Obligatoires",
        "Aucun pour la plupart des arrivées"
      ],
      [
        "Fièvre jaune",
        "Seulement en provenance d'un pays endémique"
      ],
      [
        "Souvent conseillé",
        "Être à jour des vaccins courants"
      ],
      [
        "À confirmer auprès d'",
        "Un centre de vaccination, 6 à 8 semaines avant"
      ]
    ]
  },
  "do-people-speak-english-in-algeria": {
    "q": "Parle-t-on anglais en Algérie ?",
    "a": "Peu. L'arabe et le tamazight sont les langues officielles, et le français est la deuxième langue courante dans les affaires, la signalisation et l'administration. L'anglais progresse chez les jeunes et dans le tourisme, mais en dehors des hôtels et des guides, il ne faut pas compter dessus. Quelques mots de français rendent de grands services.",
    "kf": [
      [
        "Langues officielles",
        "Arabe et tamazight"
      ],
      [
        "Très répandu",
        "Le français"
      ],
      [
        "Anglais",
        "Limité mais en progression chez les jeunes"
      ],
      [
        "Conseil pratique",
        "Apprendre quelques phrases de français"
      ]
    ]
  },
  "do-you-tip-in-algeria": {
    "q": "Laisse-t-on un pourboire en Algérie ?",
    "a": "Le pourboire est apprécié sans être rigoureusement attendu, et l'Algérie n'a pas de culture du pourcentage fixe. Arrondir une addition, laisser un petit billet pour un bon service et remercier généreusement guides et chauffeurs en fin de voyage correspondent tous à l'usage local. Donnez toujours en dinars, en espèces.",
    "kf": [
      [
        "Restaurants",
        "Arrondir, ou environ 5 à 10 %"
      ],
      [
        "Guides et chauffeurs",
        "Une somme plus large en fin de voyage"
      ],
      [
        "Personnel d'hôtel",
        "De petits billets pour une aide réelle"
      ],
      [
        "Monnaie",
        "Des dinars, toujours en espèces"
      ]
    ]
  },
  "does-algeria-have-an-evisa": {
    "q": "L'Algérie a-t-elle un e-visa ?",
    "a": "L'Algérie n'a pas d'e-visa touristique général en ligne comme en pratiquent la Turquie ou le Kenya. Les demandes se font sur papier auprès d'une ambassade ou d'un consulat algérien, même si certains postes proposent désormais la prise de rendez-vous ou le préremplissage en ligne. Méfiez-vous de tout site qui vend un « e-visa Algérie ».",
    "kf": [
      [
        "E-visa général",
        "Non disponible"
      ],
      [
        "Comment demander",
        "En personne au consulat"
      ],
      [
        "Certains consulats proposent",
        "Rendez-vous ou formulaires en ligne"
      ],
      [
        "Attention aux",
        "Sites tiers d'« e-visa »"
      ]
    ]
  },
  "does-algeria-have-good-internet-and-mobile-coverage": {
    "q": "La couverture internet et mobile est-elle bonne en Algérie ?",
    "a": "Dans le nord, oui — la 4G est répandue dans les villes et le long du couloir peuplé, et une carte SIM locale s'achète facilement et à bas prix avec votre passeport. La couverture se raréfie vite vers le sud, et dans le Sahara profond il n'y a aucun signal, raison pour laquelle les opérateurs emportent des moyens satellitaires.",
    "kf": [
      [
        "Villes du nord",
        "Bonne 4G, largement disponible"
      ],
      [
        "SIM locale",
        "Peu chère ; s'achète avec le passeport"
      ],
      [
        "Opérateurs",
        "Djezzy, Mobilis, Ooredoo"
      ],
      [
        "Sahara profond",
        "Aucune couverture — satellite uniquement"
      ]
    ]
  },
  "how-do-you-get-around-in-algeria": {
    "q": "Comment se déplace-t-on en Algérie ?",
    "a": "L'Algérie est vaste : les longues distances — surtout vers le Sahara — se couvrent en général par vols intérieurs, tandis que les trajets régionaux se font par la route. Sur nos circuits, vous voyagez en véhicule privé avec un chauffeur-guide du début à la fin, sans avoir à affronter les transports en commun.",
    "kf": [
      [
        "Longues distances",
        "Vols intérieurs (Djanet, Tamanrasset…)"
      ],
      [
        "Régional",
        "Véhicule privé / route"
      ],
      [
        "Villes",
        "Taxis ; Alger a un métro et un tramway"
      ],
      [
        "Sur nos circuits",
        "Chauffeur-guide privé tout du long"
      ]
    ]
  },
  "how-do-you-get-from-algiers-airport-to-the-city": {
    "q": "Comment rejoindre le centre d'Alger depuis l'aéroport ?",
    "a": "L'aéroport Houari Boumediene se trouve à une vingtaine de kilomètres à l'est du centre d'Alger, soit 30 à 45 minutes de route selon la circulation. Un transfert réservé à l'avance ou une voiture de l'hôtel est la solution la plus simple ; il existe des taxis officiels et une liaison par bus. Convenez du tarif avant de monter.",
    "kf": [
      [
        "Aéroport",
        "Houari Boumediene (ALG)"
      ],
      [
        "Distance",
        "Environ 20 km à l'est du centre"
      ],
      [
        "Trajet",
        "30 à 45 minutes selon le trafic"
      ],
      [
        "Meilleure option",
        "Transfert réservé ou voiture de l'hôtel"
      ]
    ]
  },
  "how-long-does-an-algeria-visa-take": {
    "q": "Combien de temps prend un visa algérien ?",
    "a": "Les délais varient beaucoup selon le consulat et la saison, d'environ deux semaines à bien plus d'un mois. Déposez votre demande dès que votre consulat l'autorise, et ne réservez jamais de vols non remboursables avant d'avoir le visa dans votre passeport. Les demandes sont les plus lentes en été et avant les grandes fêtes.",
    "kf": [
      [
        "Fourchette habituelle",
        "D'environ 2 semaines à plus d'un mois"
      ],
      [
        "Varie selon",
        "Le consulat, la nationalité, la saison"
      ],
      [
        "Périodes chargées",
        "L'été et les périodes de fêtes"
      ],
      [
        "Règle d'or",
        "Le visa d'abord, les vols ensuite"
      ]
    ]
  },
  "how-many-days-do-you-need-in-algeria": {
    "q": "Combien de jours faut-il pour l'Algérie ?",
    "a": "Sept jours permettent de voir correctement Alger, la côte romaine et une région de plus. Dix jours laissent ajouter la vallée du M'Zab ou l'est romain sans courir. Deux semaines sont nécessaires pour combiner le nord et une vraie expédition saharienne, car le désert à lui seul absorbe quatre à cinq jours.",
    "kf": [
      [
        "7 jours",
        "Alger, la côte, une région de plus"
      ],
      [
        "10 jours",
        "Ajouter le M'Zab ou l'est romain"
      ],
      [
        "14 jours",
        "Le nord plus un vrai volet saharien"
      ],
      [
        "Le Sahara seul",
        "Compter 4 à 5 jours minimum"
      ]
    ]
  },
  "how-much-cash-should-i-bring-to-algeria": {
    "q": "Combien d'espèces faut-il emporter en Algérie ?",
    "a": "De quoi couvrir tout le séjour, car il n'est pas possible de se réapprovisionner de façon fiable. Estimez vos dépenses quotidiennes — repas, taxis, entrées, pourboires, achats —, ajoutez une marge confortable et emportez le tout en euros en espèces. Tout ce qui est prépayé — hôtels, guides, transport sur un circuit organisé — se déduit de ce total.",
    "kf": [
      [
        "Emporter",
        "Des euros en espèces, billets non abîmés"
      ],
      [
        "Couvrir",
        "Tout le séjour, plus une marge"
      ],
      [
        "Exclure",
        "Tout ce qui est déjà prépayé"
      ],
      [
        "Déclarer",
        "Les montants au-dessus du seuil douanier"
      ]
    ]
  },
  "how-much-does-a-trip-to-algeria-cost": {
    "q": "Combien coûte un voyage en Algérie ?",
    "a": "L'Algérie reste abordable au regard des standards européens. Nos excursions privées guidées à la journée démarrent à 30 € par personne, et les voyages privés de plusieurs jours vont en général d'environ 200 € à 1 200 € selon la durée, la région et la saison. Les dépenses sur place — repas, transports locaux, achats courants — sont modestes.",
    "kf": [
      [
        "Excursions à la journée",
        "À partir de 30 € / personne"
      ],
      [
        "Circuits privés de plusieurs jours",
        "≈ 200 € à 1 200 €"
      ],
      [
        "Monnaie",
        "Dinar algérien (DZD)"
      ],
      [
        "Pourboire",
        "Apprécié, non obligatoire"
      ]
    ]
  },
  "is-alcohol-available-in-algeria": {
    "q": "Trouve-t-on de l'alcool en Algérie ?",
    "a": "L'alcool est légal en Algérie, mais discret et inégalement disponible. Certains hôtels, restaurants licenciés et magasins spécialisés des grandes villes en vendent ; la plupart des restaurants n'en servent pas, et il est de fait absent des villes conservatrices et de l'extrême sud. L'Algérie produit d'ailleurs son propre vin.",
    "kf": [
      [
        "Statut légal",
        "Légal, mais socialement discret"
      ],
      [
        "Où",
        "Certains hôtels et établissements licenciés en ville"
      ],
      [
        "Où non",
        "La plupart des restaurants, villes conservatrices, grand sud"
      ],
      [
        "Production locale",
        "L'Algérie produit du vin"
      ]
    ]
  },
  "is-algeria-a-good-winter-destination": {
    "q": "L'Algérie est-elle une bonne destination d'hiver ?",
    "a": "Tout à fait. L'hiver est la seule saison où le Sahara profond se parcourt, les cités romaines sont fraîches et désertes, et la côte nord reste douce. C'est aussi le moment où l'Algérie ressemble le moins à un compromis : des journées chaudes dans le désert, aucune foule nulle part, et de la neige dans l'Atlas si vous en voulez.",
    "kf": [
      [
        "Sahara",
        "C'est la saison — de novembre à février"
      ],
      [
        "Sites romains",
        "Frais, agréables, déserts"
      ],
      [
        "Côte nord",
        "Douce, plus humide, verte"
      ],
      [
        "Montagnes de l'Atlas",
        "De la vraie neige en altitude"
      ]
    ]
  },
  "is-algeria-safe-for-solo-female-travellers": {
    "q": "L'Algérie est-elle sûre pour les femmes voyageant seules ?",
    "a": "Globalement oui, avec la vigilance habituelle. Des femmes voyagent seules à Alger, Oran, Constantine et sur la côte sans incident ; le pays est conservateur plutôt que dangereux. Attendez-vous à de l'attention et à des questions, pas à une menace ; habillez-vous sobrement et privilégiez les trajets interurbains de jour.",
    "kf": [
      [
        "Villes du nord",
        "Globalement sûres avec une vigilance normale"
      ],
      [
        "Principal désagrément",
        "Les regards et l'attention, pas la délinquance"
      ],
      [
        "Tenue",
        "Sobre ; épaules et genoux couverts"
      ],
      [
        "Sahara profond",
        "En groupe encadré, pour tout le monde"
      ]
    ]
  },
  "is-algeria-safe": {
    "q": "L'Algérie est-elle sûre à visiter ?",
    "a": "Oui — l'Algérie est globalement sûre pour les touristes en 2026. Les grandes villes, le nord, la vallée du M'Zab et les itinéraires sahariens organisés sont calmes et très accueillants. Certaines régions frontalières reculées de l'extrême sud exigent des permis et un guide licencié, et quelques zones frontalières sont fermées aux visiteurs.",
    "kf": [
      [
        "Villes et nord",
        "Sûrs pour un tourisme normal"
      ],
      [
        "Sahara profond",
        "Guide + permis obligatoires"
      ],
      [
        "Frontières de l'extrême sud",
        "Restreintes / interdites"
      ]
    ]
  },
  "is-algeria-worth-visiting": {
    "q": "L'Algérie vaut-elle le voyage ?",
    "a": "Si vous voulez des sites extraordinaires sans la foule, oui. L'Algérie offre des cités romaines que vous aurez parfois pour vous seul, l'un des grands déserts du monde et une hospitalité sincère — en échange d'une procédure de visa, d'une économie en espèces et d'infrastructures touristiques limitées. Elle récompense les voyageurs, pas les vacanciers.",
    "kf": [
      [
        "Idéal pour",
        "Patrimoine, désert, culture, photographie"
      ],
      [
        "Foule",
        "Quasi inexistante, même sur les sites UNESCO"
      ],
      [
        "Contrepartie",
        "Visa, économie en espèces, infrastructures légères"
      ],
      [
        "Peu adapté à",
        "Des vacances balnéaires en resort"
      ]
    ]
  },
  "is-algiers-safe-to-walk-around": {
    "q": "Peut-on se promener à pied dans Alger en sécurité ?",
    "a": "Oui. Le centre d'Alger est une ville animée et faite pour la marche, et les visiteurs s'y déplacent à pied tous les jours. Le vol à la tire dans la foule est le vrai point de vigilance, comme dans n'importe quelle capitale méditerranéenne. Prenez les précautions habituelles avec téléphone et sac, et préférez le taxi tard le soir dans les quartiers calmes.",
    "kf": [
      [
        "Centre en journée",
        "Agréable et animé"
      ],
      [
        "Principal risque",
        "Le vol à la tire dans la foule"
      ],
      [
        "Tard le soir",
        "Prendre un taxi dans les quartiers calmes"
      ],
      [
        "La Casbah",
        "À découvrir de préférence avec un guide"
      ]
    ]
  },
  "is-photography-allowed-in-algeria": {
    "q": "La photographie est-elle autorisée en Algérie ?",
    "a": "Oui, pour la photographie de voyage ordinaire. Les exceptions sont strictes : ne photographiez pas les installations militaires, la police, les bâtiments gouvernementaux, les aéroports ni les postes de contrôle. Demandez avant de photographier des personnes, en particulier des femmes, et attendez-vous à ce que certains musées facturent ou limitent l'usage des appareils.",
    "kf": [
      [
        "En général",
        "Libre dans les rues et sur les sites"
      ],
      [
        "Jamais",
        "Militaires, police, checkpoints, aéroports"
      ],
      [
        "Les personnes",
        "Toujours demander d'abord"
      ],
      [
        "Musées",
        "Peuvent facturer ou restreindre"
      ]
    ]
  },
  "is-the-algerian-sahara-safe": {
    "q": "Le Sahara algérien est-il sûr ?",
    "a": "Oui, lorsqu'il se parcourt comme il doit l'être — avec un opérateur licencié, un guide expérimenté, de vrais 4x4, de l'eau, des moyens de communication et des permis, sur des itinéraires autorisés. Les vrais risques sont la chaleur, la déshydratation, l'orientation et l'isolement, pas la délinquance. C'est le désert improvisé en indépendant qui est dangereux, et il est réglementé.",
    "kf": [
      [
        "Vrais risques",
        "Chaleur, déshydratation, orientation, isolement"
      ],
      [
        "Ce n'est pas le risque",
        "La délinquance envers les visiteurs"
      ],
      [
        "Obligatoire",
        "Opérateur licencié, guide, permis"
      ],
      [
        "Meilleure saison",
        "De novembre à février"
      ]
    ]
  },
  "is-the-food-in-algeria-halal": {
    "q": "La nourriture est-elle halal en Algérie ?",
    "a": "Pratiquement toute. L'Algérie est un pays très majoritairement musulman et la viande vendue et servie est halal par défaut, sans qu'il soit besoin de chercher des restaurants certifiés. Le porc est pour ainsi dire absent de l'offre alimentaire, en dehors de quelques enseignes spécialisées destinées aux résidents étrangers.",
    "kf": [
      [
        "Viande",
        "Halal par défaut dans tout le pays"
      ],
      [
        "Porc",
        "De fait absent"
      ],
      [
        "Certification",
        "Inutile de la chercher"
      ],
      [
        "Alcool",
        "Autre question — légal mais discret"
      ]
    ]
  },
  "is-there-a-train-network-in-algeria": {
    "q": "Y a-t-il un réseau ferroviaire en Algérie ?",
    "a": "Oui, dans le nord. La SNTF exploite des liaisons le long du couloir côtier et intérieur reliant Alger à Oran, Constantine, Annaba et les villes intermédiaires, avec des trains modernes et confortables sur certaines lignes. Il n'existe pas de réseau ferré vers le Sahara profond, que l'on atteint par avion.",
    "kf": [
      [
        "Opérateur",
        "La SNTF, chemins de fer nationaux"
      ],
      [
        "Couverture",
        "Le couloir nord uniquement"
      ],
      [
        "Lignes principales",
        "Alger-Oran, Alger-Constantine"
      ],
      [
        "Grand sud",
        "Pas de train — prendre l'avion"
      ]
    ]
  },
  "what-are-algerias-unesco-world-heritage-sites": {
    "q": "Quels sont les sites UNESCO de l'Algérie ?",
    "a": "L'Algérie compte sept sites inscrits au patrimoine mondial de l'UNESCO : la Kalâa des Beni Hammad, le Tassili n'Ajjer, la vallée du M'Zab, Djémila, Tipasa, Timgad et la Casbah d'Alger. Six sont des sites culturels, et le Tassili n'Ajjer est inscrit à la fois pour sa culture et sa nature.",
    "kf": [
      [
        "Nombre de sites",
        "7"
      ],
      [
        "Cités romaines",
        "Djémila, Tipasa, Timgad"
      ],
      [
        "Sahara",
        "Tassili n'Ajjer (mixte), vallée du M'Zab"
      ],
      [
        "Islamique / urbain",
        "Beni Hammad, Casbah d'Alger"
      ]
    ]
  },
  "what-are-the-customs-and-etiquette-in-algeria": {
    "q": "Quels sont les usages et la politesse en Algérie ?",
    "a": "Saluez avant toute chose, acceptez le thé quand on vous l'offre, habillez-vous sobrement, utilisez la main droite pour manger et pour donner, déchaussez-vous en entrant dans une maison, et demandez avant de photographier des personnes. L'hospitalité est centrale, et la refuser trop fermement passe pour une rebuffade.",
    "kf": [
      [
        "Salutation",
        "Toujours saluer avant de demander quoi que ce soit"
      ],
      [
        "Hospitalité",
        "Acceptez le thé — cela compte"
      ],
      [
        "Maisons",
        "Se déchausser à la porte"
      ],
      [
        "Main droite",
        "Pour manger, donner et recevoir"
      ]
    ]
  },
  "what-currency-does-algeria-use": {
    "q": "Quelle monnaie utilise-t-on en Algérie ?",
    "a": "L'Algérie utilise le dinar algérien (DZD). C'est une monnaie fermée : vous ne pouvez pas raisonnablement l'acheter ni la vendre hors du pays, vous arrivez donc avec des espèces en euros ou en dollars et vous les changez en Algérie. Il existe un taux bancaire officiel et un taux parallèle très utilisé, et l'écart entre les deux est important.",
    "kf": [
      [
        "Monnaie",
        "Dinar algérien (DZD)"
      ],
      [
        "Disponibilité à l'étranger",
        "Quasi nulle — monnaie fermée"
      ],
      [
        "À apporter",
        "Des euros ou des dollars en espèces"
      ],
      [
        "Deux taux",
        "Officiel bancaire et marché parallèle"
      ]
    ]
  },
  "what-is-algeria-famous-for": {
    "q": "Pourquoi l'Algérie est-elle connue ?",
    "a": "L'Algérie est le plus grand pays d'Afrique, connu pour le Sahara qui en occupe les quatre cinquièmes, pour certaines des cités romaines les mieux conservées au monde, pour ses sept sites du patrimoine mondial de l'UNESCO, pour l'art rupestre préhistorique du Tassili n'Ajjer, la culture amazighe, la musique raï et le couscous.",
    "kf": [
      [
        "Superficie",
        "Le plus grand pays d'Afrique"
      ],
      [
        "Sites UNESCO",
        "Sept"
      ],
      [
        "Héritage romain",
        "Timgad, Djémila, Tipaza"
      ],
      [
        "Sahara",
        "Les quatre cinquièmes du pays"
      ]
    ]
  },
  "what-is-the-best-month-to-visit-the-algerian-sahara": {
    "q": "Quel est le meilleur mois pour le Sahara algérien ?",
    "a": "De novembre à février. Les journées sont chaudes et limpides, les nuits assez froides pour un feu, et la lumière est à son meilleur pour la photographie. Décembre et janvier sont le cœur de la saison. À partir de la fin du printemps, le désert devient dangereusement chaud et les expéditions s'arrêtent.",
    "kf": [
      [
        "Meilleure fenêtre",
        "De novembre à février"
      ],
      [
        "Cœur de saison",
        "Décembre et janvier"
      ],
      [
        "Les nuits",
        "Froides — prévoyez de vraies couches"
      ],
      [
        "À éviter",
        "De mai à septembre"
      ]
    ]
  },
  "what-is-the-most-beautiful-place-in-algeria": {
    "q": "Quel est le plus bel endroit d'Algérie ?",
    "a": "Il n'y a pas de réponse unique, mais la liste courte revient toujours : le Tassili n'Ajjer et la Tadrart dans le Sahara profond, les villes ocre perchées de la vallée du M'Zab, Djémila et Timgad parmi les cités romaines, la côte kabyle autour de Béjaïa, et Constantine sur ses gorges.",
    "kf": [
      [
        "Sahara profond",
        "Le Tassili n'Ajjer et la Tadrart"
      ],
      [
        "Architecture",
        "La vallée du M'Zab"
      ],
      [
        "Romain",
        "Djémila et Timgad"
      ],
      [
        "Côte et ville",
        "Béjaïa et Constantine"
      ]
    ]
  },
  "what-is-the-national-dish-of-algeria": {
    "q": "Quel est le plat national de l'Algérie ?",
    "a": "Le couscous. Semoule vapeur servie avec un bouillon de légumes et de viande, c'est le plat du vendredi, le plat des fêtes et le plat de tous les jours dans tout le pays. L'UNESCO a inscrit les savoirs et pratiques liés au couscous au patrimoine immatériel partagé par l'Algérie, le Maroc, la Tunisie et la Mauritanie.",
    "kf": [
      [
        "Plat national",
        "Le couscous"
      ],
      [
        "Traditionnellement mangé",
        "Le vendredi et lors des fêtes"
      ],
      [
        "UNESCO",
        "Inscrit comme patrimoine maghrébin partagé"
      ],
      [
        "Variantes régionales",
        "Chaque région a la sienne"
      ]
    ]
  },
  "what-languages-are-spoken-in-algeria": {
    "q": "Quelles langues parle-t-on en Algérie ?",
    "a": "Les langues officielles de l'Algérie sont l'arabe et le tamazight (berbère). La plupart des Algériens parlent l'arabe algérien (la darija) au quotidien, le tamazight est très présent dans des régions comme la Kabylie, et le français est très largement utilisé dans les affaires, les médias et l'enseignement. L'anglais progresse chez les jeunes.",
    "kf": [
      [
        "Officielles",
        "Arabe, tamazight (berbère)"
      ],
      [
        "Au quotidien",
        "L'arabe algérien (darija)"
      ],
      [
        "Très utilisé",
        "Le français"
      ],
      [
        "En progression",
        "L'anglais"
      ]
    ]
  },
  "what-power-plugs-are-used-in-algeria": {
    "q": "Quelles prises électriques utilise-t-on en Algérie ?",
    "a": "L'Algérie utilise les prises européennes à deux broches rondes, de types C et F, en 230 volts et 50 Hz. Les voyageurs venant du Royaume-Uni, des États-Unis, d'Australie ou du Japon ont besoin d'un adaptateur ; la plupart des visiteurs européens non. Les appareils américains et japonais peuvent aussi nécessiter un convertisseur de tension s'ils ne sont pas bi-tension.",
    "kf": [
      [
        "Types de prises",
        "C et F (deux broches rondes)"
      ],
      [
        "Tension",
        "230 V, 50 Hz"
      ],
      [
        "Visiteurs RU/US/AU",
        "Adaptateur nécessaire"
      ],
      [
        "Campements du désert",
        "Prévoyez une batterie externe — pas de secteur"
      ]
    ]
  },
  "what-should-women-wear-in-algeria": {
    "q": "Comment les femmes doivent-elles s'habiller en Algérie ?",
    "a": "De façon sobre et confortable. Épaules et genoux couverts est la norme pratique — pantalon ample ou jupe longue avec un haut qui couvre le haut des bras. Le foulard n'est pas exigé, sauf à l'intérieur des mosquées, mais en avoir un sur soi est utile. Les villes sont plus détendues que les petites localités.",
    "kf": [
      [
        "Norme",
        "Épaules et genoux couverts"
      ],
      [
        "Foulard",
        "Exigé seulement dans les mosquées"
      ],
      [
        "Villes et petites localités",
        "Alger et Oran sont plus détendues"
      ],
      [
        "Sahara",
        "Des couches longues et amples, plus une protection solaire"
      ]
    ]
  },
  "when-is-the-best-time-to-visit-algeria": {
    "q": "Quelle est la meilleure période pour visiter l'Algérie ?",
    "a": "La meilleure période d'ensemble pour l'Algérie va de l'automne au printemps — grosso modo d'octobre à avril — quand les températures sont agréables dans tout le nord et au Sahara. Le Sahara profond se visite au mieux d'octobre à mars ; le plein été (juin-août) est très chaud dans le sud, mais parfait sur la côte méditerranéenne.",
    "kf": [
      [
        "Meilleure période globale",
        "Octobre – avril"
      ],
      [
        "Sahara / désert",
        "Octobre – mars"
      ],
      [
        "Côte et villes",
        "Printemps et automne idéaux ; été chaud"
      ],
      [
        "À éviter pour le désert",
        "Juin – août (chaleur extrême)"
      ]
    ]
  },
  "which-parts-of-algeria-should-tourists-avoid": {
    "q": "Quelles régions d'Algérie les touristes doivent-ils éviter ?",
    "a": "Les zones qui font l'objet d'avertissements sont les régions frontalières reculées avec le Mali, le Niger et la Libye, ainsi que certaines zones de désert lointain à l'écart des itinéraires établis. Les villes du nord, la côte, l'est romain, la Kabylie et les circuits sahariens organisés n'y figurent pas. Consultez l'avis en vigueur de votre gouvernement avant de partir.",
    "kf": [
      [
        "Déconseillé",
        "Zones frontalières du Mali, du Niger et de la Libye"
      ],
      [
        "Restreint",
        "Le désert lointain hors des itinéraires établis"
      ],
      [
        "Non restreint",
        "Le nord, la côte, l'est romain, le M'Zab"
      ],
      [
        "À vérifier",
        "L'avis à jour de votre gouvernement"
      ]
    ]
  }
};

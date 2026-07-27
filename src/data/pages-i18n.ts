// Translated content for the site's four key non-guide pages.
//
// These are the pages a visitor reaches when they are ready to act — the
// enquiry form, who we are, and the two pages that carry the strongest search
// intent (UNESCO, luxury). Until now every one of them was English only, so a
// reader who had gone through the whole German site met English at the moment
// they were about to book.
//
// Content lives here rather than in fifteen near-identical .astro files: the
// layout is shared by a component per page type, and only the words change.

import type { Lang } from '../i18n';

/** The seven inscribed sites, keyed by the destination slug in each language. */
export interface UnescoSite {
  name: string;
  where: string;
  year: string;
  text: string;
  slug: Record<Lang, string>;
}

export interface UnescoContent {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  heroText: string;
  heroAlt: string;
  quick: string;
  intro: string[];
  sitesH: string;
  visitH: string;
  visitP: string;
  crumbHome: string;
  crumbLabel: string;
  sites: { name: string; where: string; year: string; text: string }[];
}

/** Slugs are shared across languages; the prose is not. */
export const UNESCO_SLUGS: Record<Lang, string>[] = [
  { en: 'casbah-of-algiers', fr: 'casbah-alger',   it: 'casbah-algeri',  es: 'casbah-argel',   de: 'kasbah-algier' },
  { en: 'djemila',           fr: 'djemila',        it: 'djemila',        es: 'djemila',        de: 'djemila' },
  { en: 'timgad',            fr: 'timgad',         it: 'timgad',         es: 'timgad',         de: 'timgad' },
  { en: 'tipaza',            fr: 'tipaza',         it: 'tipaza',         es: 'tipaza',         de: 'tipaza' },
  { en: 'mzab-valley',       fr: 'vallee-du-mzab', it: 'valle-del-mzab', es: 'valle-del-mzab', de: 'mzab-tal' },
  { en: 'beni-hammad',       fr: 'beni-hammad',    it: 'beni-hammad',    es: 'beni-hammad',    de: 'beni-hammad' },
  { en: 'tassili-najjer',    fr: 'tassili-najjer', it: 'tassili-najjer', es: 'tassili-najjer', de: 'tassili-nadjer' },
];

export const UNESCO_PAGE: Record<Lang, UnescoContent> = {
  en: {
    seoTitle: 'The 7 UNESCO World Heritage Sites in Algeria',
    seoDescription: 'All seven of Algeria’s UNESCO World Heritage Sites — Timgad, Djémila, Tipasa, the M’Zab Valley, Beni Hammad, the Casbah and Tassili n’Ajjer.',
    eyebrow: 'World Heritage',
    h1: 'UNESCO World Heritage Sites in Algeria',
    heroText: 'Seven inscribed sites across one country — Roman cities, an Ottoman citadel, a fortified desert valley and the greatest open-air gallery of prehistoric art on earth.',
    heroAlt: 'The triumphal arch at Timgad, a UNESCO Roman city in Batna state, Algeria',
    quick: 'Algeria holds seven UNESCO World Heritage Sites, more than any other country in the Maghreb: three Roman cities (Timgad, Djémila, Tipasa), the Ottoman Casbah of Algiers, the fortified M’Zab Valley, the Hammadid fortress of Beni Hammad and the vast rock-art plateau of Tassili n’Ajjer. Six are in the north and reachable on one overland trip; Tassili n’Ajjer needs an internal flight and an organised desert expedition.',
    intro: [
      'Seven sites is a remarkable count for a country that receives so few visitors — more than Morocco, more than Tunisia, and the reason serious travellers keep arriving with a longer list than they expected. What makes the set unusual is its range: it covers close to two thousand years of building, and one site predates all the others by several millennia.',
      'Six of the seven sit in the north and can be strung together on a single overland itinerary. The seventh, Tassili n’Ajjer, is a Saharan plateau the size of a small country and needs a flight south and a licensed operator — it is the one that changes how people think about Algeria.',
    ],
    sitesH: 'The seven sites',
    visitH: 'Seeing them on one trip',
    visitP: 'The three Roman cities and the Casbah pair naturally: Tipasa is an hour west of Algiers, Djémila and Timgad sit east in the highlands, and Beni Hammad is a detour off that same road. The M’Zab is a short flight or a long drive south. Tassili n’Ajjer belongs to a different kind of journey — an organised expedition out of Djanet, which is also the route that allows entry on arrival rather than a consulate visa.',
    crumbHome: 'Home',
    crumbLabel: 'UNESCO World Heritage Sites',
    sites: [
      { name: 'Kasbah of Algiers', where: 'Algiers', year: 'Inscribed 1992', text: 'The Ottoman citadel above the bay — a dense hillside of white lanes, stairways and hidden courtyards, with palaces, mosques and the remains of the 16th-century fortifications that made Algiers a Mediterranean power.' },
      { name: 'Djémila', where: 'Sétif', year: 'Inscribed 1982', text: 'Roman Cuicul, built 900 metres up on a narrow mountain spur, where the standard imperial town plan had to bend to the terrain. The theatre, the Severan temple and the Arch of Caracalla survive in extraordinary condition, along with a museum of mosaics.' },
      { name: 'Timgad', where: 'Batna', year: 'Inscribed 1982', text: 'Founded by Trajan around 100 AD as a colony for army veterans, and laid out on a perfect grid — the textbook example of Roman town planning, preserved for centuries beneath Saharan sand. Its arch and 3,500-seat theatre still stand.' },
      { name: 'Tipasa', where: 'Tipaza', year: 'Inscribed 1982', text: 'A Phoenician trading post that became a Roman port, spread along the Mediterranean shore with a forum, theatre, baths and early-Christian basilicas. Nearby stands the Royal Mausoleum of Mauretania, the 1st-century BC tomb of Juba II and Cleopatra Selene.' },
      { name: 'M’Zab Valley', where: 'Ghardaïa', year: 'Inscribed 1982', text: 'Five fortified towns built by the Ibadi Mozabites from the 11th century, each terraced around its mosque above a palm-filled wadi. The cubic architecture and the water-sharing system that sustains it were studied closely by Le Corbusier.' },
      { name: 'Al Qal’a of Beni Hammad', where: 'M’Sila', year: 'Inscribed 1980', text: 'Algeria’s first inscribed site: the fortified capital of the Hammadid dynasty, founded in 1007 and abandoned within 150 years. Its ruined palaces and the tall minaret of the great mosque sit alone at 1,000 metres in the Hodna mountains.' },
      { name: 'Tassili n’Ajjer', where: 'Illizi · Djanet', year: 'Inscribed 1982', text: 'A sandstone plateau of eroded rock forests covering some 72,000 km², holding one of the world’s largest concentrations of prehistoric art — thousands of paintings and engravings recording a Sahara of rivers, cattle and hunters before the desert came.' },
    ],
  },
  fr: {
    seoTitle: 'Les 7 sites UNESCO de l’Algérie',
    seoDescription: 'Les sept sites du patrimoine mondial de l’UNESCO en Algérie — Timgad, Djémila, Tipasa, la vallée du M’Zab, Beni Hammad, la Casbah et le Tassili n’Ajjer.',
    eyebrow: 'Patrimoine mondial',
    h1: 'Les sites UNESCO du patrimoine mondial en Algérie',
    heroText: 'Sept sites inscrits dans un seul pays — des cités romaines, une citadelle ottomane, une vallée fortifiée du désert et la plus grande galerie d’art préhistorique à ciel ouvert du monde.',
    heroAlt: 'L’arc de triomphe de Timgad, cité romaine classée à l’UNESCO, wilaya de Batna',
    quick: 'L’Algérie compte sept sites inscrits au patrimoine mondial de l’UNESCO, plus que tout autre pays du Maghreb : trois cités romaines (Timgad, Djémila, Tipasa), la Casbah ottomane d’Alger, la vallée fortifiée du M’Zab, la forteresse hammadide de Beni Hammad et l’immense plateau d’art rupestre du Tassili n’Ajjer. Six se trouvent au nord et s’enchaînent sur un même circuit ; le Tassili n’Ajjer exige un vol intérieur et une expédition organisée.',
    intro: [
      'Sept sites, c’est beaucoup pour un pays qui reçoit si peu de visiteurs — davantage que le Maroc, davantage que la Tunisie. C’est aussi pourquoi les voyageurs sérieux repartent avec une liste plus longue que prévu. Ce qui frappe, c’est l’amplitude : près de deux mille ans de construction, et un site qui précède tous les autres de plusieurs millénaires.',
      'Six des sept sont au nord et se relient en un seul itinéraire terrestre. Le septième, le Tassili n’Ajjer, est un plateau saharien grand comme un petit pays : il demande un vol vers le sud et un opérateur agréé. C’est celui qui change le regard que l’on porte sur l’Algérie.',
    ],
    sitesH: 'Les sept sites',
    visitH: 'Les voir en un seul voyage',
    visitP: 'Les trois cités romaines et la Casbah vont naturellement ensemble : Tipasa est à une heure à l’ouest d’Alger, Djémila et Timgad se trouvent à l’est dans les hauts plateaux, et Beni Hammad est un détour sur la même route. Le M’Zab se rejoint par un vol court ou une longue route vers le sud. Le Tassili n’Ajjer relève d’un autre type de voyage — une expédition organisée au départ de Djanet, qui est aussi la voie permettant l’entrée à l’arrivée plutôt qu’un visa consulaire.',
    crumbHome: 'Accueil',
    crumbLabel: 'Sites UNESCO',
    sites: [
      { name: 'Casbah d’Alger', where: 'Alger', year: 'Inscrite en 1992', text: 'La citadelle ottomane au-dessus de la baie — un versant dense de ruelles blanches, d’escaliers et de cours cachées, avec ses palais, ses mosquées et les vestiges des fortifications du XVIe siècle qui firent d’Alger une puissance méditerranéenne.' },
      { name: 'Djémila', where: 'Sétif', year: 'Inscrite en 1982', text: 'Cuicul la romaine, bâtie à 900 mètres d’altitude sur un étroit éperon rocheux, où le plan impérial classique a dû épouser le relief. Le théâtre, le temple sévérien et l’arc de Caracalla sont remarquablement conservés, avec un musée de mosaïques.' },
      { name: 'Timgad', where: 'Batna', year: 'Inscrite en 1982', text: 'Fondée par Trajan vers 100 apr. J.-C. pour les vétérans de l’armée et tracée sur une grille parfaite — le cas d’école de l’urbanisme romain, préservé des siècles durant sous le sable saharien. Son arc et son théâtre de 3 500 places tiennent toujours debout.' },
      { name: 'Tipasa', where: 'Tipaza', year: 'Inscrite en 1982', text: 'Un comptoir phénicien devenu port romain, étiré le long du rivage méditerranéen avec forum, théâtre, thermes et basiliques paléochrétiennes. Tout près se dresse le Mausolée royal de Maurétanie, tombeau du Ier siècle av. J.-C. de Juba II et Cléopâtre Séléné.' },
      { name: 'Vallée du M’Zab', where: 'Ghardaïa', year: 'Inscrite en 1982', text: 'Cinq cités fortifiées édifiées par les Mozabites ibadites à partir du XIe siècle, chacune étagée autour de sa mosquée au-dessus d’un oued planté de palmiers. L’architecture cubique et le système de partage de l’eau qui la fait vivre ont été étudiés de près par Le Corbusier.' },
      { name: 'Al Qal’a des Beni Hammad', where: 'M’Sila', year: 'Inscrite en 1980', text: 'Premier site algérien inscrit : la capitale fortifiée de la dynastie hammadide, fondée en 1007 et abandonnée moins de 150 ans plus tard. Ses palais en ruine et le haut minaret de la grande mosquée se dressent seuls à 1 000 mètres dans les monts du Hodna.' },
      { name: 'Tassili n’Ajjer', where: 'Illizi · Djanet', year: 'Inscrit en 1982', text: 'Un plateau gréseux de forêts de roches érodées couvrant quelque 72 000 km², qui abrite l’une des plus grandes concentrations d’art préhistorique au monde — des milliers de peintures et de gravures témoignant d’un Sahara de rivières, de troupeaux et de chasseurs, avant le désert.' },
    ],
  },
  it: {
    seoTitle: 'I 7 siti UNESCO dell’Algeria',
    seoDescription: 'I sette siti del patrimonio mondiale UNESCO in Algeria — Timgad, Djémila, Tipasa, la valle del M’Zab, Beni Hammad, la Casbah e il Tassili n’Ajjer.',
    eyebrow: 'Patrimonio mondiale',
    h1: 'I siti UNESCO del patrimonio mondiale in Algeria',
    heroText: 'Sette siti iscritti in un solo paese — città romane, una cittadella ottomana, una valle fortificata nel deserto e la più grande galleria d’arte preistorica a cielo aperto del mondo.',
    heroAlt: 'L’arco di trionfo di Timgad, città romana UNESCO nella provincia di Batna, Algeria',
    quick: 'L’Algeria conta sette siti del patrimonio mondiale UNESCO, più di qualsiasi altro paese del Maghreb: tre città romane (Timgad, Djémila, Tipasa), la Casbah ottomana di Algeri, la valle fortificata del M’Zab, la fortezza hammadide di Beni Hammad e il vasto altopiano di arte rupestre del Tassili n’Ajjer. Sei si trovano al nord e si collegano in un unico itinerario; il Tassili n’Ajjer richiede un volo interno e una spedizione organizzata.',
    intro: [
      'Sette siti sono molti per un paese che riceve così pochi visitatori — più del Marocco, più della Tunisia. È anche il motivo per cui chi viaggia seriamente torna con un elenco più lungo di quanto si aspettasse. Ciò che colpisce è l’ampiezza: quasi duemila anni di costruzioni, e un sito che precede tutti gli altri di parecchi millenni.',
      'Sei dei sette sono al nord e si possono unire in un solo itinerario via terra. Il settimo, il Tassili n’Ajjer, è un altopiano sahariano grande quanto un piccolo stato: richiede un volo verso sud e un operatore autorizzato. È quello che cambia il modo di guardare all’Algeria.',
    ],
    sitesH: 'I sette siti',
    visitH: 'Vederli in un solo viaggio',
    visitP: 'Le tre città romane e la Casbah stanno insieme con naturalezza: Tipasa è a un’ora a ovest di Algeri, Djémila e Timgad sono a est sugli altipiani, e Beni Hammad è una deviazione sulla stessa strada. Il M’Zab si raggiunge con un volo breve o una lunga guida verso sud. Il Tassili n’Ajjer appartiene a un viaggio di altro genere — una spedizione organizzata da Djanet, che è anche la via che consente l’ingresso all’arrivo invece del visto consolare.',
    crumbHome: 'Home',
    crumbLabel: 'Siti UNESCO',
    sites: [
      { name: 'Casbah di Algeri', where: 'Algeri', year: 'Iscritta nel 1992', text: 'La cittadella ottomana sopra la baia — un versante fitto di vicoli bianchi, scalinate e cortili nascosti, con palazzi, moschee e i resti delle fortificazioni cinquecentesche che fecero di Algeri una potenza mediterranea.' },
      { name: 'Djémila', where: 'Sétif', year: 'Iscritta nel 1982', text: 'La romana Cuicul, costruita a 900 metri su uno stretto sperone montano, dove il piano imperiale classico dovette adattarsi al terreno. Il teatro, il tempio severiano e l’arco di Caracalla sono conservati in modo straordinario, con un museo di mosaici.' },
      { name: 'Timgad', where: 'Batna', year: 'Iscritta nel 1982', text: 'Fondata da Traiano intorno al 100 d.C. per i veterani dell’esercito e tracciata su una griglia perfetta — il caso da manuale dell’urbanistica romana, conservato per secoli sotto la sabbia sahariana. L’arco e il teatro da 3.500 posti sono ancora in piedi.' },
      { name: 'Tipasa', where: 'Tipaza', year: 'Iscritta nel 1982', text: 'Uno scalo fenicio divenuto porto romano, disteso lungo la costa mediterranea con foro, teatro, terme e basiliche paleocristiane. Poco distante si erge il Mausoleo reale di Mauretania, tomba del I secolo a.C. di Giuba II e Cleopatra Selene.' },
      { name: 'Valle del M’Zab', where: 'Ghardaïa', year: 'Iscritta nel 1982', text: 'Cinque città fortificate costruite dai mozabiti ibaditi a partire dall’XI secolo, ciascuna terrazzata attorno alla propria moschea sopra un uadi di palme. L’architettura cubica e il sistema di ripartizione dell’acqua che la sostiene furono studiati da vicino da Le Corbusier.' },
      { name: 'Al Qal’a dei Beni Hammad', where: 'M’Sila', year: 'Iscritta nel 1980', text: 'Il primo sito algerino iscritto: la capitale fortificata della dinastia hammadide, fondata nel 1007 e abbandonata in meno di 150 anni. I palazzi in rovina e l’alto minareto della grande moschea si ergono soli a 1.000 metri sui monti dell’Hodna.' },
      { name: 'Tassili n’Ajjer', where: 'Illizi · Djanet', year: 'Iscritto nel 1982', text: 'Un altopiano di arenaria di foreste di roccia erosa esteso su circa 72.000 km², che custodisce una delle maggiori concentrazioni di arte preistorica al mondo — migliaia di pitture e incisioni che raccontano un Sahara di fiumi, mandrie e cacciatori, prima del deserto.' },
    ],
  },
  es: {
    seoTitle: 'Los 7 sitios UNESCO de Argelia',
    seoDescription: 'Los siete sitios del patrimonio mundial de la UNESCO en Argelia — Timgad, Djémila, Tipasa, el valle del M’Zab, Beni Hammad, la Casbah y el Tassili n’Ajjer.',
    eyebrow: 'Patrimonio mundial',
    h1: 'Sitios del patrimonio mundial de la UNESCO en Argelia',
    heroText: 'Siete sitios inscritos en un solo país — ciudades romanas, una ciudadela otomana, un valle fortificado del desierto y la mayor galería de arte prehistórico al aire libre del mundo.',
    heroAlt: 'El arco de triunfo de Timgad, ciudad romana UNESCO en la provincia de Batna, Argelia',
    quick: 'Argelia cuenta con siete sitios del patrimonio mundial de la UNESCO, más que ningún otro país del Magreb: tres ciudades romanas (Timgad, Djémila, Tipasa), la Casbah otomana de Argel, el valle fortificado del M’Zab, la fortaleza hammadí de Beni Hammad y la inmensa meseta de arte rupestre del Tassili n’Ajjer. Seis están en el norte y se enlazan en un mismo circuito; el Tassili n’Ajjer exige un vuelo interno y una expedición organizada.',
    intro: [
      'Siete sitios son muchos para un país que recibe tan pocos visitantes — más que Marruecos, más que Túnez. Es también la razón por la que quien viaja en serio regresa con una lista más larga de la prevista. Lo llamativo es la amplitud: casi dos mil años de construcción, y un sitio que precede a todos los demás en varios milenios.',
      'Seis de los siete están en el norte y se recorren en un solo itinerario por carretera. El séptimo, el Tassili n’Ajjer, es una meseta sahariana del tamaño de un país pequeño: requiere un vuelo al sur y un operador autorizado. Es el que cambia la manera de mirar Argelia.',
    ],
    sitesH: 'Los siete sitios',
    visitH: 'Verlos en un solo viaje',
    visitP: 'Las tres ciudades romanas y la Casbah encajan de forma natural: Tipasa está a una hora al oeste de Argel, Djémila y Timgad quedan al este en los altiplanos, y Beni Hammad es un desvío en esa misma ruta. Al M’Zab se llega con un vuelo corto o una larga carretera hacia el sur. El Tassili n’Ajjer pertenece a otro tipo de viaje — una expedición organizada desde Djanet, que es además la vía que permite la entrada a la llegada en lugar del visado consular.',
    crumbHome: 'Inicio',
    crumbLabel: 'Sitios UNESCO',
    sites: [
      { name: 'Casbah de Argel', where: 'Argel', year: 'Inscrita en 1992', text: 'La ciudadela otomana sobre la bahía — una ladera densa de callejones blancos, escaleras y patios ocultos, con palacios, mezquitas y los restos de las fortificaciones del siglo XVI que hicieron de Argel una potencia mediterránea.' },
      { name: 'Djémila', where: 'Sétif', year: 'Inscrita en 1982', text: 'La romana Cuicul, levantada a 900 metros sobre un estrecho espolón de montaña, donde el plano imperial clásico tuvo que ceder al terreno. El teatro, el templo severiano y el arco de Caracalla se conservan de forma extraordinaria, junto a un museo de mosaicos.' },
      { name: 'Timgad', where: 'Batna', year: 'Inscrita en 1982', text: 'Fundada por Trajano hacia el año 100 d.C. para veteranos del ejército y trazada sobre una cuadrícula perfecta — el caso de manual del urbanismo romano, preservado durante siglos bajo la arena sahariana. Su arco y su teatro de 3.500 plazas siguen en pie.' },
      { name: 'Tipasa', where: 'Tipaza', year: 'Inscrita en 1982', text: 'Un enclave fenicio convertido en puerto romano, extendido por la orilla mediterránea con foro, teatro, termas y basílicas paleocristianas. Cerca se alza el Mausoleo Real de Mauritania, tumba del siglo I a.C. de Juba II y Cleopatra Selene.' },
      { name: 'Valle del M’Zab', where: 'Ghardaïa', year: 'Inscrito en 1982', text: 'Cinco ciudades fortificadas construidas por los mozabitas ibadíes desde el siglo XI, cada una escalonada en torno a su mezquita sobre un uadi de palmeras. La arquitectura cúbica y el sistema de reparto del agua que la sostiene fueron estudiados de cerca por Le Corbusier.' },
      { name: 'Al Qal’a de Beni Hammad', where: 'M’Sila', year: 'Inscrita en 1980', text: 'El primer sitio argelino inscrito: la capital fortificada de la dinastía hammadí, fundada en 1007 y abandonada en menos de 150 años. Sus palacios en ruinas y el alto alminar de la gran mezquita se alzan solos a 1.000 metros en los montes del Hodna.' },
      { name: 'Tassili n’Ajjer', where: 'Illizi · Djanet', year: 'Inscrito en 1982', text: 'Una meseta de arenisca de bosques de roca erosionada que cubre unos 72.000 km² y guarda una de las mayores concentraciones de arte prehistórico del mundo — miles de pinturas y grabados que registran un Sáhara de ríos, ganado y cazadores, antes del desierto.' },
    ],
  },
  de: {
    seoTitle: 'Die 7 UNESCO-Welterbestätten Algeriens',
    seoDescription: 'Alle sieben UNESCO-Welterbestätten Algeriens — Timgad, Djémila, Tipasa, das M’Zab-Tal, Beni Hammad, die Kasbah und das Tassili n’Ajjer.',
    eyebrow: 'Welterbe',
    h1: 'UNESCO-Welterbestätten in Algerien',
    heroText: 'Sieben eingeschriebene Stätten in einem einzigen Land — römische Städte, eine osmanische Zitadelle, ein befestigtes Wüstental und die größte Freiluftgalerie prähistorischer Kunst der Welt.',
    heroAlt: 'Der Triumphbogen von Timgad, römische UNESCO-Stadt in der Provinz Batna, Algerien',
    quick: 'Algerien besitzt sieben UNESCO-Welterbestätten, mehr als jedes andere Land des Maghreb: drei römische Städte (Timgad, Djémila, Tipasa), die osmanische Kasbah von Algier, das befestigte M’Zab-Tal, die Hammadiden-Festung Beni Hammad und das weite Felsbildplateau Tassili n’Ajjer. Sechs liegen im Norden und lassen sich auf einer Reise verbinden; das Tassili n’Ajjer erfordert einen Inlandsflug und eine organisierte Expedition.',
    intro: [
      'Sieben Stätten sind viel für ein Land mit so wenigen Besuchern — mehr als Marokko, mehr als Tunesien. Genau deshalb reisen Kenner mit einer längeren Liste ab, als sie erwartet hatten. Bemerkenswert ist die Spannweite: fast zweitausend Jahre Baugeschichte, und eine Stätte, die allen anderen um Jahrtausende vorausgeht.',
      'Sechs der sieben liegen im Norden und lassen sich auf einer einzigen Landroute aneinanderreihen. Die siebte, das Tassili n’Ajjer, ist ein Sahara-Plateau von der Größe eines kleinen Landes: Es verlangt einen Flug nach Süden und einen lizenzierten Veranstalter. Es ist jene Stätte, die den Blick auf Algerien verändert.',
    ],
    sitesH: 'Die sieben Stätten',
    visitH: 'Alles auf einer Reise',
    visitP: 'Die drei römischen Städte und die Kasbah gehören naturgemäß zusammen: Tipasa liegt eine Stunde westlich von Algier, Djémila und Timgad östlich im Hochland, und Beni Hammad ist ein Abstecher an derselben Route. Das M’Zab erreicht man mit einem kurzen Flug oder einer langen Fahrt nach Süden. Das Tassili n’Ajjer gehört zu einer anderen Art von Reise — einer organisierten Expedition ab Djanet, die zugleich der Weg ist, auf dem die Einreise bei Ankunft statt über ein Konsulatsvisum möglich wird.',
    crumbHome: 'Start',
    crumbLabel: 'UNESCO-Welterbe',
    sites: [
      { name: 'Kasbah von Algier', where: 'Algier', year: 'Eingeschrieben 1992', text: 'Die osmanische Zitadelle über der Bucht — ein dicht bebauter Hang aus weißen Gassen, Treppen und verborgenen Höfen, mit Palästen, Moscheen und den Resten der Befestigungen des 16. Jahrhunderts, die Algier zur Mittelmeermacht machten.' },
      { name: 'Djémila', where: 'Sétif', year: 'Eingeschrieben 1982', text: 'Das römische Cuicul, auf 900 Metern Höhe auf einem schmalen Bergsporn erbaut, wo sich der übliche Stadtgrundriss dem Gelände beugen musste. Theater, Severer-Tempel und Caracalla-Bogen sind außergewöhnlich gut erhalten, dazu ein Mosaikmuseum.' },
      { name: 'Timgad', where: 'Batna', year: 'Eingeschrieben 1982', text: 'Um 100 n. Chr. von Trajan als Kolonie für Armeeveteranen gegründet und auf einem perfekten Raster angelegt — das Lehrbuchbeispiel römischer Stadtplanung, jahrhundertelang unter Saharasand bewahrt. Bogen und Theater mit 3.500 Plätzen stehen bis heute.' },
      { name: 'Tipasa', where: 'Tipaza', year: 'Eingeschrieben 1982', text: 'Ein phönizischer Handelsplatz, der zum römischen Hafen wurde, entlang der Mittelmeerküste gelegen, mit Forum, Theater, Thermen und frühchristlichen Basiliken. In der Nähe steht das Königliche Mausoleum von Mauretanien, das Grab Jubas II. und der Kleopatra Selene aus dem 1. Jh. v. Chr.' },
      { name: 'M’Zab-Tal', where: 'Ghardaïa', year: 'Eingeschrieben 1982', text: 'Fünf befestigte Städte, ab dem 11. Jahrhundert von den ibaditischen Mozabiten erbaut, jede terrassenförmig um ihre Moschee über einem palmenbestandenen Wadi. Die kubische Architektur und das Wasserverteilungssystem, das sie trägt, wurden von Le Corbusier eingehend studiert.' },
      { name: 'Al Qal’a der Beni Hammad', where: 'M’Sila', year: 'Eingeschrieben 1980', text: 'Algeriens erste eingeschriebene Stätte: die befestigte Hauptstadt der Hammadiden-Dynastie, 1007 gegründet und binnen 150 Jahren aufgegeben. Ihre Palastruinen und das hohe Minarett der großen Moschee stehen allein auf 1.000 Metern im Hodna-Gebirge.' },
      { name: 'Tassili n’Ajjer', where: 'Illizi · Djanet', year: 'Eingeschrieben 1982', text: 'Ein Sandsteinplateau aus erodierten Felsenwäldern von rund 72.000 km², das eine der weltweit größten Konzentrationen prähistorischer Kunst birgt — Tausende Malereien und Gravuren, die eine Sahara aus Flüssen, Rinderherden und Jägern festhalten, vor der Wüste.' },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export interface AboutContent {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  lead: string[];
  sections: { h: string; p: string }[];
  closing: string;
  closingCta: string;
  crumbHome: string;
  crumbLabel: string;
}

/** English keeps its own hand-written page; these are the four translations. */
export const ABOUT_PAGE: Record<Exclude<Lang, 'en'>, AboutContent> = {
  fr: {
    seoTitle: 'À propos d’Algeria Compass',
    seoDescription: 'Opérateur touristique algérien agréé, noté 5,0 sur Google. Circuits privés et expéditions sahariennes, conçus et opérés par des Algériens.',
    eyebrow: 'À propos',
    h1: 'Voyages privés de luxe à travers l’Algérie',
    lead: [
      'Algeria Compass est un opérateur touristique algérien agréé qui ne travaille que sur un seul pays. Nous concevons et opérons des voyages privés et guidés à travers l’Algérie — le plus grand pays d’Afrique — avec des guides locaux agréés, et nous appuyons chaque itinéraire sur une connaissance de terrain, pas sur des brochures.',
      'Nous ne sommes ni un catalogue ni un annuaire. Nous cartographions l’Algérie comme un ensemble cohérent : les 58 wilayas, les sept sites du patrimoine mondial, les cités romaines du nord, les mondes oasiens du M’Zab et du Souf, les montagnes de Kabylie et la côte méditerranéenne — avec la cuisine, l’histoire, les langues et les traditions qui les relient.',
    ],
    sections: [
      { h: 'Sept ans à guider l’Algérie', p: 'Algeria Compass travaille dans le tourisme algérien depuis plus de sept ans, en concevant et en menant des voyages privés pour des voyageurs internationaux — du premier séjour aux explorateurs chevronnés qui reviennent pour le grand sud. Nous avons accompagné nos hôtes dans la Casbah ottomane d’Alger, à Tipasa, Djémila et Timgad, dans l’ouest andalou et sur la côte kabyle, et loin dans le Sahara sur des expéditions de plusieurs jours autour de Djanet, Timimoun et la vallée du M’Zab.' },
      { h: 'Deux forces côte à côte', p: 'La première : des voyages réellement privés, bien organisés sur le terrain, avec des guides locaux agréés. La seconde : de vraies rencontres culturelles — artisans, cuisine, musique et l’hospitalité quotidienne pour laquelle l’Algérie est connue. Les voyageurs qui sont partis avec nous notent l’expérience 5,0 sur 5 sur Google, et la note affichée sur notre page d’accueil renvoie directement à ces avis.' },
      { h: 'Pourquoi nous existons', p: 'L’information fiable et approfondie sur l’Algérie est rare et souvent dépassée, dans toutes les langues. Algeria Compass a été créé pour y remédier : construire, page après page, une référence digne de confiance qui traite le pays avec le sérieux qu’il mérite et aide les visiteurs à voyager avec compréhension et respect.' },
      { h: 'Comment nous travaillons', p: 'Chaque guide part de sources primaires et faisant autorité — UNESCO, ouvrages de référence reconnus, travaux historiques et culturels établis. Quand une affirmation compte, nous indiquons d’où elle vient. Les textes sont vérifiés avant publication et passent par une relecture indépendante, distincte de la rédaction. Nos normes complètes sont publiées dans notre politique éditoriale (en anglais).' },
      { h: 'Corrections et mises à jour', p: 'L’information de voyage vieillit. Nous reprenons et actualisons nos guides selon une politique de mise à jour définie, et lorsque nous nous trompons, nous corrigeons ouvertement : n’importe qui peut signaler une erreur. Nous sommes également transparents sur le fonctionnement de la plateforme, y compris notre usage limité et déclaré d’outils d’IA.' },
      { h: 'Notre mission', p: 'Devenir le guide de l’Algérie le plus fiable, le plus complet et le plus respectueux, dans toutes les langues — le premier endroit vers lequel on se tourne pour comprendre le pays. Nous construisons progressivement une couverture complète et sourcée des 58 wilayas et de leurs grands sites.' },
    ],
    closing: 'Algeria Compass conçoit et opère votre voyage privé de bout en bout, avec des guides locaux agréés tout du long.',
    closingCta: 'Écrivez-nous pour organiser votre voyage.',
    crumbHome: 'Accueil',
    crumbLabel: 'À propos',
  },
  it: {
    seoTitle: 'Chi siamo — Algeria Compass',
    seoDescription: 'Tour operator algerino autorizzato, valutato 5,0 su Google. Viaggi privati ed spedizioni sahariane, progettati e condotti da algerini.',
    eyebrow: 'Chi siamo',
    h1: 'Viaggi privati di lusso in tutta l’Algeria',
    lead: [
      'Algeria Compass è un tour operator algerino autorizzato che lavora su un solo paese. Progettiamo e conduciamo viaggi privati e guidati in tutta l’Algeria — il paese più grande dell’Africa — con guide locali autorizzate, e ogni itinerario poggia su conoscenza diretta del terreno, non su cataloghi.',
      'Non siamo né una brochure né un elenco. Raccontiamo l’Algeria come un insieme coerente: le 58 province, i sette siti del patrimonio mondiale, le città romane del nord, i mondi oasiani del M’Zab e del Souf, le montagne della Cabilia e la costa mediterranea — con la cucina, la storia, le lingue e le tradizioni che li legano.',
    ],
    sections: [
      { h: 'Sette anni a guidare in Algeria', p: 'Algeria Compass opera nel turismo algerino da oltre sette anni, progettando e conducendo viaggi privati per viaggiatori internazionali — da chi scopre il paese per la prima volta a chi torna per il grande sud. Abbiamo accompagnato i nostri ospiti nella Casbah ottomana di Algeri, a Tipasa, Djémila e Timgad, nell’ovest andaluso e sulla costa cabila, e in profondità nel Sahara con spedizioni di più giorni attorno a Djanet, Timimoun e la valle del M’Zab.' },
      { h: 'Due punti di forza affiancati', p: 'Il primo: viaggi davvero privati, organizzati bene sul terreno, con guide locali autorizzate. Il secondo: incontri culturali autentici — artigiani, cucina, musica e quell’ospitalità quotidiana per cui l’Algeria è nota. Chi ha viaggiato con noi valuta l’esperienza 5,0 su 5 su Google, e il punteggio in home page rimanda direttamente a quelle recensioni.' },
      { h: 'Perché esistiamo', p: 'Informazione affidabile e approfondita sull’Algeria è scarsa e spesso superata, in qualsiasi lingua. Algeria Compass nasce per rimediare: costruire, pagina dopo pagina, un riferimento credibile che tratti il paese con la serietà che merita e aiuti chi lo visita a viaggiare con comprensione e rispetto.' },
      { h: 'Come lavoriamo', p: 'Ogni guida parte da fonti primarie e autorevoli — UNESCO, opere di riferimento riconosciute, studi storici e culturali consolidati. Quando un’affermazione conta, indichiamo da dove viene. I testi sono verificati prima della pubblicazione e passano per una revisione indipendente, separata dalla scrittura. Le nostre norme complete sono pubblicate nella politica editoriale (in inglese).' },
      { h: 'Correzioni e aggiornamenti', p: 'Le informazioni di viaggio invecchiano. Rivediamo e aggiorniamo le guide secondo una politica definita, e quando sbagliamo correggiamo apertamente: chiunque può segnalare un errore. Siamo trasparenti anche su come funziona la piattaforma, incluso il nostro uso limitato e dichiarato di strumenti di IA.' },
      { h: 'La nostra missione', p: 'Diventare la guida all’Algeria più affidabile, approfondita e rispettosa in qualsiasi lingua — il primo posto a cui rivolgersi per capire il paese. Stiamo costruendo progressivamente una copertura completa e documentata delle 58 province e dei loro siti principali.' },
    ],
    closing: 'Algeria Compass progetta e gestisce il vostro viaggio privato dall’inizio alla fine, con guide locali autorizzate lungo tutto il percorso.',
    closingCta: 'Scriveteci per organizzare il vostro viaggio.',
    crumbHome: 'Home',
    crumbLabel: 'Chi siamo',
  },
  es: {
    seoTitle: 'Quiénes somos — Algeria Compass',
    seoDescription: 'Operador turístico argelino autorizado, valorado con 5,0 en Google. Circuitos privados y expediciones saharianas diseñados y operados por argelinos.',
    eyebrow: 'Quiénes somos',
    h1: 'Viajes privados de lujo por toda Argelia',
    lead: [
      'Algeria Compass es un operador turístico argelino autorizado dedicado a un solo país. Diseñamos y operamos viajes privados y guiados por toda Argelia — el país más grande de África — con guías locales autorizados, y cada itinerario se apoya en conocimiento de primera mano, no en catálogos.',
      'No somos un folleto ni un directorio. Trazamos Argelia como un conjunto coherente: las 58 provincias, los siete sitios del patrimonio mundial, las ciudades romanas del norte, los mundos oasianos del M’Zab y el Souf, las montañas de Cabilia y la costa mediterránea — con la cocina, la historia, las lenguas y las tradiciones que los unen.',
    ],
    sections: [
      { h: 'Siete años guiando Argelia', p: 'Algeria Compass trabaja en el turismo argelino desde hace más de siete años, diseñando y dirigiendo viajes privados para viajeros internacionales — desde quien descubre el país por primera vez hasta exploradores veteranos que vuelven por el gran sur. Hemos acompañado a nuestros huéspedes por la Casbah otomana de Argel, por Tipasa, Djémila y Timgad, por el oeste andalusí y la costa cabilia, y hasta el fondo del Sáhara en expediciones de varios días alrededor de Djanet, Timimoun y el valle del M’Zab.' },
      { h: 'Dos fortalezas a la par', p: 'La primera: viajes realmente privados, bien organizados sobre el terreno, con guías locales autorizados. La segunda: encuentros culturales auténticos — artesanos, gastronomía, música y esa hospitalidad cotidiana por la que Argelia es conocida. Quienes han viajado con nosotros valoran la experiencia con 5,0 sobre 5 en Google, y la puntuación de la página de inicio enlaza directamente con esas reseñas.' },
      { h: 'Por qué existimos', p: 'La información fiable y a fondo sobre Argelia es escasa y a menudo está desfasada, en cualquier idioma. Algeria Compass nació para corregirlo: construir, página a página, una referencia de confianza que trate al país con la seriedad que merece y ayude a viajar con comprensión y respeto.' },
      { h: 'Cómo trabajamos', p: 'Cada guía parte de fuentes primarias y autorizadas — UNESCO, obras de referencia reconocidas, y estudios históricos y culturales establecidos. Cuando una afirmación importa, indicamos de dónde procede. Los textos se verifican antes de publicarse y pasan por una revisión independiente, separada de la redacción. Nuestras normas completas están publicadas en la política editorial (en inglés).' },
      { h: 'Correcciones y actualizaciones', p: 'La información de viaje envejece. Revisamos y actualizamos las guías conforme a una política definida, y cuando nos equivocamos lo corregimos abiertamente: cualquiera puede señalar un error. También somos transparentes sobre cómo funciona la plataforma, incluido nuestro uso limitado y declarado de herramientas de IA.' },
      { h: 'Nuestra misión', p: 'Convertirnos en la guía de Argelia más fiable, profunda y respetuosa en cualquier idioma — el primer lugar al que acudir para entender el país. Avanzamos hacia una cobertura completa y documentada de las 58 provincias y de sus principales sitios.' },
    ],
    closing: 'Algeria Compass diseña y opera su viaje privado de principio a fin, con guías locales autorizados en todo el recorrido.',
    closingCta: 'Escríbanos para organizar su viaje.',
    crumbHome: 'Inicio',
    crumbLabel: 'Quiénes somos',
  },
  de: {
    seoTitle: 'Über Algeria Compass',
    seoDescription: 'Lizenzierter algerischer Reiseveranstalter, auf Google mit 5,0 bewertet. Private Rundreisen und Sahara-Expeditionen, von Algeriern geplant und durchgeführt.',
    eyebrow: 'Über uns',
    h1: 'Private Luxusreisen durch ganz Algerien',
    lead: [
      'Algeria Compass ist ein lizenzierter algerischer Reiseveranstalter, der sich auf ein einziges Land konzentriert. Wir planen und führen private, geführte Reisen durch ganz Algerien — das größte Land Afrikas — mit lizenzierten einheimischen Guides, und jede Route stützt sich auf eigene Ortskenntnis, nicht auf Kataloge.',
      'Wir sind weder Prospekt noch Verzeichnis. Wir erschließen Algerien als zusammenhängendes Ganzes: alle 58 Provinzen, die sieben Welterbestätten, die römischen Städte des Nordens, die Oasenwelten des M’Zab und des Souf, die Berge der Kabylei und die Mittelmeerküste — samt Küche, Geschichte, Sprachen und Traditionen, die sie verbinden.',
    ],
    sections: [
      { h: 'Sieben Jahre Reiseleitung in Algerien', p: 'Algeria Compass ist seit über sieben Jahren im algerischen Tourismus tätig und plant und leitet private Reisen für internationale Gäste — von Erstbesuchern bis zu erfahrenen Reisenden, die für den tiefen Süden wiederkommen. Wir haben unsere Gäste durch die osmanische Kasbah von Algier geführt, nach Tipasa, Djémila und Timgad, in den andalusisch geprägten Westen und an die kabylische Küste, und tief in die Sahara auf mehrtägigen Expeditionen um Djanet, Timimoun und das M’Zab-Tal.' },
      { h: 'Zwei Stärken nebeneinander', p: 'Die erste: wirklich private, vor Ort gut organisierte Reisen mit lizenzierten einheimischen Guides. Die zweite: echte kulturelle Begegnungen — Handwerk, Küche, Musik und jene alltägliche Gastfreundschaft, für die Algerien bekannt ist. Gäste, die mit uns gereist sind, bewerten das Erlebnis auf Google mit 5,0 von 5; die Bewertung auf unserer Startseite führt direkt zu diesen Rezensionen.' },
      { h: 'Warum es uns gibt', p: 'Verlässliche, gründliche Informationen über Algerien sind rar und oft veraltet — in jeder Sprache. Algeria Compass wurde gegründet, um das zu ändern: Seite für Seite ein vertrauenswürdiges Nachschlagewerk aufzubauen, das dem Land mit dem gebotenen Ernst begegnet und Besuchern hilft, mit Verständnis und Respekt zu reisen.' },
      { h: 'Wie wir arbeiten', p: 'Jeder Ratgeber beginnt mit Recherche in primären und maßgeblichen Quellen — UNESCO, anerkannte Nachschlagewerke sowie etablierte historische und kulturwissenschaftliche Arbeiten. Wo eine Aussage zählt, nennen wir ihre Herkunft. Texte werden vor der Veröffentlichung geprüft und durchlaufen eine vom Schreiben getrennte, unabhängige Redaktion. Unsere vollständigen Standards sind in der Redaktionsrichtlinie veröffentlicht (auf Englisch).' },
      { h: 'Korrekturen und Aktualisierungen', p: 'Reiseinformationen altern. Wir überarbeiten unsere Ratgeber nach einer festgelegten Aktualisierungsrichtlinie, und wenn uns ein Fehler unterläuft, korrigieren wir ihn offen: Jede und jeder kann uns darauf hinweisen. Wir legen ebenso offen, wie die Plattform arbeitet, einschließlich unseres begrenzten und ausgewiesenen Einsatzes von KI-Werkzeugen.' },
      { h: 'Unser Ziel', p: 'Der verlässlichste, gründlichste und respektvollste Algerien-Ratgeber in jeder Sprache zu werden — die erste Adresse, um das Land zu verstehen. Schritt für Schritt arbeiten wir auf eine vollständige, belegte Abdeckung aller 58 Provinzen und ihrer wichtigsten Stätten hin.' },
    ],
    closing: 'Algeria Compass plant und führt Ihre private Reise von Anfang bis Ende, durchgehend mit lizenzierten einheimischen Guides.',
    closingCta: 'Schreiben Sie uns, um Ihre Reise zu planen.',
    crumbHome: 'Start',
    crumbLabel: 'Über uns',
  },
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export interface ContactContent {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  talkNow: string;
  waLabel: string;
  findEyebrow: string;
  findH2: string;
  hours: string;
  mapBtn: string;
  mapTitle: string;
  crumbHome: string;
  crumbLabel: string;
}

export const CONTACT_PAGE: Record<Exclude<Lang, 'en'>, ContactContent> = {
  fr: {
    seoTitle: 'Planifier un voyage en Algérie | Algeria Compass',
    seoDescription: 'Dites-nous vos dates, vos centres d’intérêt et le nombre de voyageurs : nous concevons votre circuit privé et guidé en Algérie.',
    eyebrow: 'Organiser votre voyage',
    h1: 'Planifier un voyage en Algérie',
    lead: 'Algeria Compass est un opérateur touristique algérien agréé. Dites-nous vos dates, vos centres d’intérêt et le nombre de voyageurs, et nous concevons votre circuit privé et guidé en Algérie.',
    talkNow: 'Vous préférez parler tout de suite ?',
    waLabel: 'Écrivez-nous sur WhatsApp',
    findEyebrow: 'Nous trouver',
    findH2: 'Où nous sommes',
    hours: 'Opérateur touristique algérien agréé · nous répondons en quelques heures.',
    mapBtn: 'Ouvrir dans Google Maps',
    mapTitle: 'Emplacement d’Algeria Compass sur Google Maps',
    crumbHome: 'Accueil',
    crumbLabel: 'Planifier un voyage',
  },
  it: {
    seoTitle: 'Progetta un viaggio in Algeria | Algeria Compass',
    seoDescription: 'Diteci date, interessi e numero di viaggiatori: costruiamo il vostro viaggio privato e guidato in Algeria.',
    eyebrow: 'Organizzare il viaggio',
    h1: 'Progetta un viaggio in Algeria',
    lead: 'Algeria Compass è un tour operator algerino autorizzato. Diteci le vostre date, i vostri interessi e quante persone siete, e costruiamo il vostro viaggio privato e guidato in Algeria.',
    talkNow: 'Preferite parlarne subito?',
    waLabel: 'Scriveteci su WhatsApp',
    findEyebrow: 'Dove trovarci',
    findH2: 'Dove siamo',
    hours: 'Tour operator algerino autorizzato · rispondiamo in poche ore.',
    mapBtn: 'Apri in Google Maps',
    mapTitle: 'Posizione di Algeria Compass su Google Maps',
    crumbHome: 'Home',
    crumbLabel: 'Progetta il viaggio',
  },
  es: {
    seoTitle: 'Planifica un viaje a Argelia | Algeria Compass',
    seoDescription: 'Díganos sus fechas, sus intereses y cuántos viajan: diseñamos su circuito privado y guiado por Argelia.',
    eyebrow: 'Organizar su viaje',
    h1: 'Planifica un viaje a Argelia',
    lead: 'Algeria Compass es un operador turístico argelino autorizado. Díganos sus fechas, sus intereses y cuántas personas viajan, y diseñaremos su circuito privado y guiado por Argelia.',
    talkNow: '¿Prefiere hablar ahora?',
    waLabel: 'Escríbanos por WhatsApp',
    findEyebrow: 'Encuéntrenos',
    findH2: 'Dónde estamos',
    hours: 'Operador turístico argelino autorizado · respondemos en pocas horas.',
    mapBtn: 'Abrir en Google Maps',
    mapTitle: 'Ubicación de Algeria Compass en Google Maps',
    crumbHome: 'Inicio',
    crumbLabel: 'Planificar el viaje',
  },
  de: {
    seoTitle: 'Reise nach Algerien planen | Algeria Compass',
    seoDescription: 'Nennen Sie uns Reisedaten, Interessen und Personenzahl — wir gestalten Ihre private, geführte Rundreise durch Algerien.',
    eyebrow: 'Ihre Reise planen',
    h1: 'Eine Reise nach Algerien planen',
    lead: 'Algeria Compass ist ein lizenzierter algerischer Reiseveranstalter. Nennen Sie uns Ihre Reisedaten, Ihre Interessen und die Zahl der Reisenden, und wir gestalten Ihre private, geführte Rundreise durch Algerien.',
    talkNow: 'Lieber gleich sprechen?',
    waLabel: 'Schreiben Sie uns auf WhatsApp',
    findEyebrow: 'So finden Sie uns',
    findH2: 'Wo wir sind',
    hours: 'Lizenzierter algerischer Reiseveranstalter · wir antworten innerhalb weniger Stunden.',
    mapBtn: 'In Google Maps öffnen',
    mapTitle: 'Standort von Algeria Compass auf Google Maps',
    crumbHome: 'Start',
    crumbLabel: 'Reise planen',
  },
};

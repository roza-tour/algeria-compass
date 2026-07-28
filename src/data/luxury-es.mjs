// L1 — Colección 5 estrellas: edición en ESPAÑOL de luxury.mjs. Must stay
// structurally in sync with the English original (same three exports, same
// keys, ids, prices and image paths). Content supplied verbatim by the owner
// (names, days, hotels, inclusions, pricing). Images mapped from our EXISTING
// library; any stop without a real photo carries `flag:true` (owner to supply).
//
// Pricing is identical across the three programmes (per person, EUR, by group
// size) and the product is sold as a private request-to-book journey.

// Every user-visible string for the /luxury/ page lives in LUX_COPY (bottom of
// this file) so the shared LuxuryPage/LuxuryProgram components stay language-
// blind. This Spanish edition exports the same three names as luxury.mjs:
// LUX_PRICING, PROGRAMMES, LUX_COPY.

export const LUX_PRICING = {
  fromLabel: '€1,615',
  fromValue: 1615,
  highValue: 2290,
  currency: 'EUR',
  tiers: [
    { pax: '2–9 pers.', price: '€2,290', note: 'Privado e íntimo' },
    { pax: '10–15 pers.', price: '€1,870', note: '+ 1 líder gratis' },
    { pax: '16–22 pers.', price: '€1,700', note: 'Tarifa de grupo' },
    { pax: '22+ pers.', price: '€1,615', note: 'Grupo grande' },
  ],
};

const ARRIVAL_DAY = {
  n: 1, label: 'Día 01 · Llegada', title: 'Llegada a Argel', img: '/assets/img/algiers-white-city-aerial.jpg',
  stops: [
    { t: 'Recepción VIP en el aeropuerto', d: 'Bienvenida privada con trámite acelerado en el aeropuerto Houari Boumediene, seguida de un traslado con chófer a su hotel de 5 estrellas sobre la bahía de Argel.' },
    { t: 'La bahía de Argel al atardecer', d: 'Su primera velada sobre ‘Alger la Blanche’ — la deslumbrante capital blanca que desciende en terrazas hasta el Mediterráneo.' },
    { t: 'Briefing de bienvenida y cena', d: 'Un repaso pausado del itinerario con su líder de viaje exclusivo, en torno a una cuidada cena argelina de bienvenida.' },
  ],
};

const DEPARTURE_DAY = {
  n: 8, label: 'Día 08 · Despedida', title: 'Salida', img: '/assets/img/algiers-boulevards-aerial.jpg',
  stops: [
    { t: 'Mañana libre', d: 'Un último café, los últimos recuerdos de los artesanos de la Casbah, o simplemente un desayuno sin prisas con vistas a la bahía.' },
    { t: 'Briefing final', d: 'Una cálida despedida y un repaso del viaje con su líder de viaje.' },
    { t: 'Traslado VIP al aeropuerto', d: 'Traslado privado con chófer al aeropuerto Houari Boumediene.' },
  ],
};

export const PROGRAMMES = [
  {
    id: 'classical-algeria',
    num: '01',
    name: 'Argelia Clásica',
    subtitle: 'Patrimonio mediterráneo y del altiplano',
    tagline: 'Puertos romanos, oasis de montaña y las ciudades UNESCO del norte — la gran introducción a Argelia.',
    accent: '#1E6F5C', // coast/highland green
    region: 'coast',
    badges: ['8 días / 7 noches', 'Grupo privado', 'Todo incluido 5 estrellas', '4 sitios UNESCO'],
    hero: '/assets/img/tours/djemila-1.jpg',
    heroLine: 'De la Casbah blanca y azul sobre la bahía a los teatros romanos de Djemila: este es el corazón clásico de Argelia — costa, montañas e imperio en ocho días sin prisas.',
    overview: 'El Programa 01 entrelaza el Mediterráneo y el altiplano: el puerto romano de Tipaza, el oasis de Bou Saâda, las espectaculares ruinas UNESCO de Djemila, los puentes suspendidos de Constantina y la Casbah otomana de Argel. Es el primer encuentro ideal para grupos VIP que buscan profundidad sin la logística del desierto. Cada día ofrece unas tres experiencias emblemáticas, enmarcadas por el confort de 5 estrellas, una flota privada de 4x4 y un líder de viaje que nunca se separa de su grupo.',
    route: [
      { place: 'Argel', note: 'Llegada' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Bou Saâda', note: 'Oasis' },
      { place: 'Sétif', note: 'Altiplano' }, { place: 'Djemila', note: 'UNESCO' }, { place: 'Constantina', note: 'Puentes' },
      { place: 'Argel', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Día 02 · Mediterráneo romano', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-3.jpg', stops: [
        { t: 'Mausoleo Real de Mauritania', d: 'La inmensa tumba circular de 30 metros del rey Juba II y Cleopatra Selene — hija de Cleopatra VII — que corona las colinas costeras desde el siglo I a. C.' },
        { t: 'Parque arqueológico de Tipaza · UNESCO', d: 'Una colonia romana desplegada junto al mar — foro, teatro, termas y basílicas paleocristianas — donde Albert Camus paseó célebremente entre las ruinas y el ajenjo silvestre.' },
        { t: 'Almuerzo junto al mar · Monte Chenoua', d: 'Pescado y marisco fresco del Mediterráneo a los pies del monte Chenoua, contemplando la misma bahía que atrajo a los comerciantes fenicios y romanos.' },
      ] },
      { n: 3, label: 'Día 03 · La ciudad de la felicidad', title: 'Oasis de Bou Saâda', img: '/assets/img/bou-saada-oued-sunset.jpg', stops: [
        { t: 'Museo Nasreddine Dinet', d: 'La casa y la obra del pintor orientalista francés que se convirtió al islam, adoptó el nombre de Nasreddine y consagró su vida a este oasis.' },
        { t: 'Palmerales y el antiguo ksar', d: 'Un paseo por el denso palmeral y las callejuelas ocres del ksar histórico, donde el Atlas se encuentra con el Sáhara.' },
        { t: 'Velada en el Atlas sahariano', d: 'Artesanía y música tradicionales en el umbral del desierto — el oasis que ha atraído a artistas y escritores durante más de un siglo.' },
      ] },
      { n: 4, label: 'Día 04 · Travesía escénica', title: 'Del altiplano a Sétif', img: '/assets/img/setif-ain-el-fouara.jpg', stops: [
        { t: 'Ruta por las montañas del Atlas', d: 'Una cinematográfica travesía privada en 4x4 por los Altos Llanos — escarpes, llanuras doradas de trigo y amplios cielos de altiplano.' },
        { t: 'Parada en un pueblo tradicional', d: 'Una auténtica pausa de altiplano con pan recién hecho, té a la menta y una hospitalidad sin prisas, lejos de toda ruta turística.' },
        { t: 'Aïn El Fouara · Sétif', d: 'Llegada a la fresca y verde Sétif y a su querida fuente de mármol de 1898, emblema de la ciudad.' },
      ] },
      { n: 5, label: 'Día 05 · Imperio en las colinas', title: 'Djemila · Cuicul · UNESCO', img: '/assets/img/tours/djemila-4.jpg', stops: [
        { t: 'Sitio arqueológico de Djemila · UNESCO', d: 'La antigua Cuicul, encaramada a 900 m sobre un espolón montañoso — descrita por la UNESCO como una de las ruinas romanas más bellas del mundo.' },
        { t: 'Teatro, foro y templos', d: 'El gran teatro en ladera, el templo de los Severos y el Arco de Caracalla, admirablemente adaptados al escarpado terreno montañoso.' },
        { t: 'Museo de mosaicos y almuerzo', d: 'Los extraordinarios mosaicos de Cuicul, entre mito y vida cotidiana, en el museo del sitio; después, un almuerzo local sin prisas.' },
      ] },
      { n: 6, label: 'Día 06 · La ciudad de los puentes', title: 'Excursión a Constantina', img: '/assets/img/constantine-sidi-mcid-bridge.jpg', stops: [
        { t: 'Puente colgante de Sidi M’Cid', d: 'La pasarela de 1912 suspendida a 175 m sobre la garganta del Rhumel — la vertiginosa imagen emblemática de Constantina.' },
        { t: 'Palacio de Ahmed Bey', d: 'El exquisito palacio de los años 1830 del último bey de Constantina, con galerías pintadas y jardines de patio de estilo andalusí.' },
        { t: 'Mezquita del Emir Abdelkader y ciudad vieja', d: 'Una de las mayores mezquitas de África, y después el casco antiguo al borde del precipicio; regreso a Sétif al anochecer.' },
      ] },
      { n: 7, label: 'Día 07 · Regreso a la capital', title: 'La Casbah de Argel · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Casbah de Argel · UNESCO', d: 'Regreso a la capital en avión y, después, la escarpada ciudadela otomana — un laberinto de callejuelas blancas, patios ocultos y azoteas sobre la bahía.' },
        { t: 'Mezquita de Ketchaoua', d: 'La mezquita emblemática a los pies de la Casbah, restaurada en todo su esplendor otomano-morisco.' },
        { t: 'Palacio de los Rais · Bastión 23', d: 'Un trío de palacios del siglo XVI restaurados frente al mar — las residencias otomanas mejor conservadas de Argel.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Argel', nights: '3 noches', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Bou Saâda', nights: '1 noche', hotels: 'Kerdada · El Qaid' },
      { city: 'Sétif', nights: '3 noches', hotels: 'Park Mall · Bayazid' },
    ],
    includes: ['Vuelos internos', 'Todas las comidas', 'Vehículos 4x4 con conductor', 'Hoteles de 5 estrellas', 'Líder de viaje y guías', 'Entradas a los sitios UNESCO'],
  },

  {
    id: 'sahara-heart',
    num: '02',
    name: 'Corazón del Sáhara',
    subtitle: 'Ruinas romanas y la pentápolis mozabita',
    tagline: 'De la ‘Pompeya de África’ a las ciudades fortificadas del M’Zab — el imperio romano se encuentra con la cultura viva del desierto.',
    accent: '#8F5018', // saharan ochre (darkened for AA contrast)
    region: 'sahara',
    badges: ['8 días / 7 noches', 'Grupo privado', 'Todo incluido · Sáhara', '3 sitios UNESCO'],
    hero: '/assets/img/timgad-theatre.jpg',
    heroLine: 'Un descenso desde el norte romano hacia el M’Zab intemporal — cinco ciudades fortificadas del desierto cuya arquitectura cúbica inspiró a Le Corbusier.',
    overview: 'El Programa 02 une el mundo romano monumental — Tipaza junto al mar y Timgad, la ‘Pompeya de África’ de trazado perfecto — con la cultura espiritual y viva del desierto de Ghardaïa y la pentápolis mozabita. Es el contraste más evocador de Argelia: piedra imperial y silencio sahariano. La etapa sahariana cuenta con su propio equipo de seguridad y cocinero exclusivos, con experiencias en quad y camello entre las dunas, envuelta en el mismo servicio privado de 5 estrellas.',
    route: [
      { place: 'Argel', note: 'Llegada' }, { place: 'Tipaza', note: 'UNESCO' }, { place: 'Timgad', note: 'UNESCO' },
      { place: 'Constantina', note: 'Altiplano' }, { place: 'Ghardaïa', note: 'Sáhara' }, { place: 'M’Zab', note: 'UNESCO' },
      { place: 'Argel', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Día 02 · Mediterráneo romano', title: 'Tipaza · UNESCO', img: '/assets/img/tours/tipaza-1.jpg', stops: [
        { t: 'Puerto romano de Tipaza · UNESCO', d: 'Una ciudad portuaria romana de foro, teatro y basílicas que descienden hacia el Mediterráneo, alzada sobre un antiguo enclave comercial fenicio.' },
        { t: 'Mausoleo Real de Mauritania', d: 'La monumental tumba circular de la casa real númida-mauritana, que domina la costa desde hace más de dos mil años.' },
        { t: 'Almuerzo mediterráneo junto al mar', d: 'Cocina costera al borde del agua antes del regreso a Argel.' },
      ] },
      { n: 3, label: 'Día 03 · La Pompeya de África', title: 'Timgad · UNESCO', img: '/assets/img/tours/batna-timgad-2.jpg', stops: [
        { t: 'Vuelo a Constantina', d: 'Un vuelo matinal hacia el este, rumbo a los montes Aurès, puerta del sur romano.' },
        { t: 'Ciudad arqueológica de Timgad · UNESCO', d: 'Fundada por Trajano en el año 100 d. C. para veteranos del ejército, Timgad es el manual del urbanismo romano — una cuadrícula perfecta que las arenas del Sáhara preservaron durante siglos.' },
        { t: 'Arco de Trajano y teatro', d: 'El arco triunfal de 12 metros, el teatro de 3.500 plazas y el foro de la ‘Pompeya de África’. Noche en Constantina.' },
      ] },
      { n: 4, label: 'Día 04 · Del norte al desierto', title: 'De Constantina a Ghardaïa', img: '/assets/img/constantine-footbridge.jpg', stops: [
        { t: 'Puente de Sidi M’Cid y ciudad vieja', d: 'Vistas matinales sobre la garganta del Rhumel y el barrio encaramado al acantilado de la Ciudad de los Puentes.' },
        { t: 'Vuelo a Ghardaïa', d: 'Un vuelo vespertino de unos 600 km hacia el sur — del verde del altiplano al ocre sahariano.' },
        { t: 'Llegada al valle del M’Zab', d: 'Primera visión de la pentápolis fortificada que se alza en terrazas sobre el uadi bordeado de palmeras.' },
      ] },
      { n: 5, label: 'Día 05 · La pentápolis', title: 'Valle del M’Zab · UNESCO', img: '/assets/img/ghardaia-mzab-panorama.jpg', stops: [
        { t: 'Beni Isguen · La ciudad santa · UNESCO', d: 'La inmaculada ciudad amurallada de los mozabitas ibadíes, visitada con guía local y famosa por su subasta al aire libre al atardecer.' },
        { t: 'Plaza del mercado de Ghardaïa', d: 'El corazón porticado del valle — un estallido de alfombras, dátiles y especias bajo el minarete piramidal.' },
        { t: 'Talleres artesanos', d: 'Tejido de alfombras y orfebrería en plata con artesanos mozabitas, cuya arquitectura cúbica inspiró a Le Corbusier.' },
      ] },
      { n: 6, label: 'Día 06 · Dunas y oasis', title: 'Ghardaïa y regreso', img: '/assets/img/sahara-dunes-tadrart.jpg', stops: [
        { t: 'Oasis de palmeras y dunas', d: 'Huertos de palmeras datileras alimentados por antiguos canales de agua foggara, y las dunas doradas al borde del valle.' },
        { t: 'Experiencia en quad y camello', d: 'Una salida por las arenas con seguridad sahariana exclusiva y un cocinero del desierto que se ocupa de cada detalle.' },
        { t: 'Zoco tradicional · Vuelo vespertino', d: 'Un último paseo por el zoco antes del vuelo de la tarde de regreso a Argel.' },
      ] },
      { n: 7, label: 'Día 07 · La capital', title: 'Casbah de Argel · UNESCO', img: '/assets/img/casbah-old-city-mosque.jpg', stops: [
        { t: 'Casbah de Argel · UNESCO', d: 'Un día completo en la ciudadela otomana sobre la bahía — callejuelas escalonadas, palacios y azoteas panorámicas.' },
        { t: 'Palacios otomanos y museos', d: 'Dar Hassan Pacha, la mezquita de Ketchaoua y las mejores colecciones museísticas de la capital.' },
        { t: 'Monumentos de Argel', d: 'El cierre del circuito entre los grandes hitos frente al mar de ‘Alger la Blanche’.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Argel', nights: '3 noches', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Constantina', nights: '2 noches', hotels: 'Golden Tulip · Marriott' },
      { city: 'Ghardaïa', nights: '2 noches', hotels: 'Mizab · Bellevedere · Tajami' },
    ],
    includes: ['Vuelos internos', 'Todas las comidas', 'Vehículos 4x4 con conductor', 'Paseos en quad y camello', 'Hoteles de 5 y 4 estrellas', 'Seguridad y cocinero en el Sáhara', 'Líder de viaje y guías', 'Entradas a los sitios UNESCO'],
  },

  {
    id: 'four-seasons',
    num: '03',
    name: 'Cuatro Estaciones',
    subtitle: 'Nieve · Sáhara · Mediterráneo · Andalucía',
    tagline: 'La nieve del Atlas, las dunas del Sáhara, la costa mediterránea y la ‘Perla del Magreb’ andalusí — todo en ocho días.',
    accent: '#7A4F9E', // andalusian violet
    region: 'andalusian',
    badges: ['8 días / 7 noches', 'Grupo privado', 'Todo incluido', 'Cuatro paisajes'],
    hero: '/assets/img/oran-bay-santa-cruz.jpg',
    heroLine: 'El tour de contrastes por excelencia — donde se puede tocar la nieve por la mañana y la arena del Sáhara en el mismo viaje.',
    overview: 'El Programa 03 es Argelia en todo su espectro: las laderas de cedros de Chréa, el desierto UNESCO del M’Zab, el brío mediterráneo de Orán y los azulejos zellige y jardines andalusíes de Tlemcen. Es el más visualmente espectacular de los tres programas — un país que se niega a ser una sola cosa. Las actividades de nieve son estacionales (invierno del Atlas), y cada etapa mantiene el mismo estándar privado de 5 estrellas todo incluido, con vuelos internos que enlazan los cuatro mundos.',
    route: [
      { place: 'Argel', note: 'Llegada' }, { place: 'Chréa', note: 'Nieve' }, { place: 'Ghardaïa', note: 'Sáhara' },
      { place: 'M’Zab', note: 'UNESCO' }, { place: 'Orán', note: 'Costa' }, { place: 'Tlemcen', note: 'Andalucía' },
      { place: 'Argel', note: 'Casbah' },
    ],
    days: [
      ARRIVAL_DAY,
      { n: 2, label: 'Día 02 · Nieve y mar', title: 'Nieve de Chréa y Cherchell', img: '/assets/img/blida/blida-03.jpg', flag: 'Chréa & Cherchell have no dedicated photo yet — using a Blida-province image as a placeholder.', stops: [
        { t: 'Parque Nacional de Chréa', d: 'Bosque de cedros del Atlas y nieve estacional sobre Blida — esquí y raquetas de nieve con el mar a la vista, hogar de macacos de Berbería salvajes.' },
        { t: 'Museo Romano de Cherchell', d: 'Una de las colecciones de estatuaria y mosaicos romanos más ricas del norte de África, en el antiguo puerto fenicio-romano de Iol Caesarea.' },
        { t: 'Costa y playa de Cherchell', d: 'La antigua ciudad portuaria y su tranquilo litoral mediterráneo.' },
      ] },
      { n: 3, label: 'Día 03 · Hacia el Sáhara', title: 'Ghardaïa Sáhara · UNESCO', img: '/assets/img/sahara-plateau-sunset.jpg', stops: [
        { t: 'Vuelo a Ghardaïa', d: 'Rumbo al sur, hacia el desierto y la puerta del M’Zab.' },
        { t: 'Valle del M’Zab · UNESCO', d: 'Primera exploración de la pentápolis ocre aterrazada sobre el uadi.' },
        { t: 'Atardecer sobre las dunas', d: 'La hora dorada sobre las arenas del Sáhara.' },
      ] },
      { n: 4, label: 'Día 04 · Patrimonio vivo', title: 'Cultura mozabita', img: '/assets/img/ghardaia-ksar-lane.jpg', stops: [
        { t: 'Exploración de las ciudades del M’Zab', d: 'Beni Isguen y El Atteuf — los ksour cúbicos fortificados que inspiraron la arquitectura moderna de Le Corbusier.' },
        { t: 'Talleres artesanos', d: 'Tejido, cerámica y plata con artesanos locales en el corazón del valle.' },
        { t: 'Paseos en camello', d: 'A lomos de camello entre los palmerales, al borde del desierto.' },
      ] },
      { n: 5, label: 'Día 05 · Brío mediterráneo', title: 'Orán mediterránea', img: '/assets/img/oran-bay-santa-cruz.jpg', stops: [
        { t: 'Fuerte de Santa Cruz y Murdjajo', d: 'La fortaleza española del siglo XVI que corona el monte Murdjajo, con amplias vistas sobre la bahía y la basílica a sus pies.' },
        { t: 'Place du 1er Novembre', d: 'La gran plaza en el corazón de ‘El Bahia’ — la ciudad radiante que dio al mundo la música raï.' },
        { t: 'Barrio antiguo de Sidi El Houari', d: 'El histórico distrito frente al mar donde el Orán otomano, español y francés se superponen.' },
      ] },
      { n: 6, label: 'Día 06 · La Perla del Magreb', title: 'Tlemcen andalusí', img: '/assets/img/tlemcen-andalusian-arches.jpg', stops: [
        { t: 'Gran Mezquita de Tlemcen', d: 'Una obra maestra almorávide iniciada en 1082; su mihrab tallado y su cúpula nervada figuran entre lo más exquisito del arte andalusí-magrebí.' },
        { t: 'Ruinas de Mansourah', d: 'La ciudad-asedio meriní de 1302 — un imponente minarete solitario y un kilómetro de murallas dentro del Parque Nacional de Tlemcen.' },
        { t: 'Palacio de El Mechouar y jardines', d: 'La restaurada ciudadela real zianí y los jardines andalusíes de la ‘Perla del Magreb’.' },
      ] },
      { n: 7, label: 'Día 07 · La capital', title: 'Casbah de Argel · UNESCO', img: '/assets/img/casbah-old-street.jpg', stops: [
        { t: 'Vuelo a Argel · Casbah · UNESCO', d: 'Un vuelo matinal hacia el norte y, después, una visita completa a la ciudadela otomana sobre la bahía.' },
        { t: 'Arquitectura otomana', d: 'Palacios, mezquitas y las blancas callejuelas escalonadas de la ciudad vieja.' },
        { t: 'Museos de Argel', d: 'Los hitos culturales de la capital para cerrar el circuito de las cuatro estaciones.' },
      ] },
      DEPARTURE_DAY,
    ],
    stay: [
      { city: 'Argel', nights: '3 noches', hotels: 'Aurassi · Sheraton · Marriott' },
      { city: 'Ghardaïa', nights: '2 noches', hotels: 'Mizab · Bellevedere · Tajami' },
      { city: 'Orán', nights: '2 noches', hotels: 'Royal Oran · Bay Managed · Azure Routan' },
    ],
    includes: ['Vuelos internos', 'Todas las comidas', 'Vehículos 4x4 con conductor', 'Actividades de nieve (estacionales)', 'Paseos en quad y camello', 'Hoteles de 5 y 4 estrellas', 'Seguridad y cocinero en el Sáhara', 'Líder de viaje y guías'],
  },
];

// ---- Page copy (ES). {programmes} and {price} are placeholders the component
// fills; `prog` strings are the per-programme chrome shared by all languages.
export const LUX_COPY = {
  seoTitle: 'Tours de lujo por Argelia — 5 estrellas | Algeria Compass',
  seoDescription: 'Tres tours de lujo de 8 días por Argelia, todo incluido: ruinas romanas, ciudades UNESCO y el Sáhara. Vuelos internos, hoteles 5 estrellas. Desde €1,615.',
  keywords: ['viaje de lujo Argelia', 'Argelia 5 estrellas', 'tour privado Argelia', 'lujo Sáhara Argelia', 'viajar a Argelia de lujo', 'tours UNESCO Argelia', 'tour Argelia todo incluido'],
  ogImage: '/assets/img/tours/djemila-1.jpg',
  ogImageAlt: 'Las ruinas romanas UNESCO de Djemila — tours de lujo Algeria Compass',
  waPage: 'Hola Algeria Compass, me gustaría informarme sobre sus tours de lujo de la Colección 5 estrellas.',
  heroAlt: 'El Sáhara argelino a la hora dorada',
  eyebrow: 'Colección 5 estrellas · Argelia',
  h1a: 'Argelia de lujo,',
  h1b: 'en privado.',
  heroLine: 'Tres viajes privados por un país que pocos llegan a ver.',
  ctaExplore: 'Descubra los viajes',
  ctaSpecialist: 'Hable con un especialista',
  stats: [
    { v: '3', l: 'Viajes exclusivos' },
    { v: '8', l: 'Días · 7 noches' },
    { v: 'Todo incl.', l: 'Vuelos · hoteles · comidas' },
    { v: '€1,615', l: 'Desde / persona' },
  ],
  pillarsOverline: 'El estándar Algeria Compass',
  pillarsH2: 'Lo que lo hace cinco estrellas',
  pillars: [
    { icon: 'shield', t: 'Operador argelino con licencia', d: 'Gestionado sobre el terreno por argelinos — cada permiso, carretera y puerta se resuelve en el país.' },
    { icon: 'gem', t: 'Verdaderamente todo incluido', d: 'Vuelos internos, todas las comidas, hoteles de 5 estrellas, una flota privada de 4x4, guías y entradas UNESCO — un solo precio.' },
    { icon: 'guide', t: 'Guías privados multilingües', d: 'Un líder de viaje exclusivo que nunca se separa de su grupo, más guías locales expertos en cada sitio.' },
    { icon: 'visa', t: 'Asistencia de visado incluida', d: 'Preparamos su documentación de visado como parte de la reserva.' },
    { icon: 'calendar', t: 'Cancelación gratuita', d: 'Cancelación gratuita hasta cinco días antes de su fecha de salida.' },
    { icon: 'key', t: 'Privado, no empaquetado', d: 'Solo su propio grupo — reserva bajo petición, confirmada por escrito antes de pagar.' },
  ],
  reserveOverline: 'Reserve su viaje',
  reserveH2: 'Comience su viaje de la Colección 5 estrellas',
  reserveLead: 'Cuéntenos qué programa le atrae — {programmes} — junto con sus fechas y el tamaño de su grupo. Le confirmamos por escrito la disponibilidad, los vuelos internos y su precio final por persona, normalmente en pocas horas.',
  orWord: 'o',
  ptNoPay: 'Privado, reserva bajo petición — consultar no cuesta nada',
  ptFrom: 'Desde {price} por persona, todo incluido',
  ptCancel: 'Cancelación gratuita hasta 5 días antes de la salida',
  ptPrefer: '¿Prefiere hablar con nosotros?',
  ptWaLink: 'Escríbanos por WhatsApp',
  ptOrEmail: 'o envíe un correo a',
  formH3: 'Solicite su viaje privado',
  crumbHome: 'Inicio',
  crumbLabel: 'Colección de lujo 5 estrellas',
  schemaTouristTypes: ['Viajeros de lujo', 'Grupos privados'],
  schemaDay: 'Día',
  prog: {
    imgAltSuffix: 'tour de lujo por Argelia',
    programmeWord: 'Programa',
    routeAria: 'La ruta',
    itineraryEyebrow: 'El itinerario · 8 días',
    dayByDay: 'Día a día',
    dayWord: 'Día',
    stayEyebrow: 'Dónde se aloja · 5 estrellas',
    stayNote: 'Los establecimientos concretos se confirman por escrito con su reserva, sujetos a disponibilidad.',
    inclEyebrow: 'Todo incluido',
    cancelLine: 'Cancelación gratuita hasta 5 días antes de la salida',
    pricingEyebrow: 'Precios · Por persona · EUR',
    pricingH3: 'Privado, todo incluido',
    bestValue: 'La mejor relación',
    fromWord: 'Desde',
    perPerson: 'por persona',
    reserveBtn: 'Reservar este viaje',
    specialistBtn: 'Hablar con un especialista',
    waReserve: 'Hola Algeria Compass, me gustaría reservar el viaje 5 estrellas «{name}» (Programa {num}).',
  },
};

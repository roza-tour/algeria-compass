// Spanish translations for the tour catalogue — same contract as tours-fr.ts.
//
// Every tour has a CARD translation so the Spanish index at /es/circuitos/ is fully
// Spanish. Tours marked `full` also get a complete detail page; the rest link
// to the English page from the index, which is honest rather than serving a
// half-translated page. tours.json stays the single source of truth for prices,
// images and structure.

export interface TourEs {
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

export const TOURS_ES: Record<string, TourEs> = {
  "djanet-sahara-safari": {
    "title": "Safari por el Sáhara en Djanet — 5 días en el Tadrart Rojo",
    "duration": "5 días · 4 noches",
    "hook": "Cinco días en el corazón del Sáhara argelino en torno a Djanet — arenisca roja del Tadrart, dunas doradas, arte rupestre prehistórico y noches bajo las estrellas.",
    "full": true,
    "seoTitle": "Viaje al Sáhara en Djanet 5 días — Tadrart Rojo",
    "seoDescription": "Circuito privado de 5 días por el Sáhara argelino desde Djanet: Tadrart Rojo, dunas, arte rupestre y vivac, con un equipo tuareg local.",
    "overview": "Es el Sáhara tal como se imagina y rara vez se ve: el Tadrart Rojo, un laberinto de arenisca anaranjada esculpida por el viento, arcos naturales, cañones y dunas que se apoyan en la roca negra. Desde Djanet, oasis tuareg del sureste argelino, se parte en 4×4 con un equipo local para cuatro noches de vivac. Los días alternan pistas, caminatas cortas hasta yacimientos de arte rupestre de varios milenios y largas pausas fotográficas con la luz de la tarde. Las noches se pasan en el campamento, junto al fuego y al té, sin luces ni cobertura.",
    "highlights": [
      "El Tadrart Rojo y sus cañones de arenisca anaranjada",
      "Yacimientos de arte rupestre prehistórico del Tassili n'Ajjer",
      "Las grandes dunas del Sáhara argelino al atardecer",
      "Cuatro noches de vivac bajo un cielo sin contaminación lumínica",
      "Un equipo tuareg local: conductor, guía y cocinero",
      "Pensión completa y equipo de acampada incluidos"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada y entrada al desierto",
        "body": "Encuentro con el equipo en Djanet y salida en 4×4 hacia el desierto. Atardecer sobre las dunas y primera noche en el campamento."
      },
      {
        "day": 2,
        "title": "El Tadrart Rojo",
        "body": "Travesía de los valles de roca roja y arena del Tadrart, con paradas fotográficas, hasta la puesta de sol y la noche en el campamento."
      },
      {
        "day": 3,
        "title": "Arcos, grabados y grandes dunas",
        "body": "Jornada entre arcos naturales, yacimientos de arte rupestre y cordones dunares, siguiendo la luz y los hallazgos."
      },
      {
        "day": 4,
        "title": "Regreso hacia Djanet",
        "body": "Última mañana en el desierto y regreso hacia el oasis, con un último vivac o una noche en Djanet."
      },
      {
        "day": 5,
        "title": "Salida",
        "body": "Tiempo libre en Djanet según el horario del vuelo y traslado al aeropuerto."
      }
    ],
    "includes": [
      "Recepción y traslados en Djanet",
      "4×4 durante todo el circuito",
      "Conductor experto del desierto",
      "Guía tuareg local",
      "Pensión completa",
      "Equipo de acampada",
      "Agua embotellada"
    ],
    "excludes": [
      "Vuelos internacionales e internos",
      "Tasas de visado",
      "Seguro de viaje",
      "Bebidas salvo agua",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Solo de noviembre a febrero"
      },
      {
        "label": "Noches",
        "value": "Frías — hacen falta capas de verdad"
      },
      {
        "label": "Cobertura",
        "value": "Inexistente en el desierto"
      },
      {
        "label": "Acceso",
        "value": "Vuelo Argel–Djanet y luego 4×4"
      }
    ],
    "faqs": [
      {
        "q": "¿Cuándo es posible este viaje?",
        "a": "De noviembre a febrero. Fuera de temporada el calor hace peligrosas las expediciones en el gran sur y no se organizan."
      },
      {
        "q": "¿Cómo se llega a Djanet?",
        "a": "En avión desde Argel, con Air Algérie o Tassili Airlines. Los vuelos al sur son escasos: conviene reservar pronto, sobre todo en temporada."
      },
      {
        "q": "¿Dónde se duerme?",
        "a": "En vivac en el desierto, con tiendas, colchonetas y mantas incluidas. Es cómodo pero básico: sin electricidad, sin duchas y sin cobertura."
      },
      {
        "q": "¿Hace falta buena forma física?",
        "a": "No. Se viaja en 4×4, con caminatas cortas sobre arena y roca. Lo que hay que soportar son jornadas largas y noches frías."
      }
    ]
  },
  "ghardaia-guided-tour": {
    "title": "Ghardaïa — 3 días en el valle del M'Zab",
    "duration": "3 días · 2 noches",
    "hook": "Tres días en el valle del M'Zab — las ciudades fortificadas de Ghardaïa y Beni Isguen, las foggaras, los palmerales y una tarde en 4×4 por el desierto.",
    "full": true,
    "seoTitle": "Viaje a Ghardaïa 3 días — Valle del M'Zab",
    "seoDescription": "Circuito privado de 3 días en Ghardaïa y el valle del M'Zab, Patrimonio de la UNESCO: las cinco ciudades ibadíes, las foggaras y los palmerales.",
    "overview": "El valle del M'Zab es uno de los conjuntos urbanos más notables del mundo islámico: cinco ciudades fortificadas levantadas desde el siglo XI por la comunidad ibadí mozabita, apiladas en ocre, blanco y azul sobre colinas del Sáhara. Su lógica constructiva — mezquita en lo alto, casas en círculos concéntricos, palmeral abajo, sistema de agua compartido — fascinó a Le Corbusier hasta el punto de volver varias veces. Tres días bastan para entender el lugar desde dentro, con un guía que conoce sus usos y sus códigos.",
    "highlights": [
      "Ghardaïa y su mercado en anfiteatro",
      "Beni Isguen, la ciudad santa, con guía local",
      "Las foggaras, sistema milenario de reparto del agua",
      "Los palmerales y las casas de verano mozabitas",
      "Una tarde en 4×4 por el desierto bajo las estrellas",
      "Artesanía del M'Zab: alfombras, lana y cobre"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada a Ghardaïa",
        "body": "Recepción y alojamiento, y primera aproximación a Ghardaïa: las callejuelas en pendiente, la plaza del mercado y la vista del valle al atardecer."
      },
      {
        "day": 2,
        "title": "Las ciudades del M'Zab",
        "body": "Jornada entre Beni Isguen, El Atteuf y Melika: mezquitas, murallas, cementerios y palmerales, con las explicaciones de un guía mozabita."
      },
      {
        "day": 3,
        "title": "Palmerales, foggaras y desierto",
        "body": "Mañana en los huertos y el sistema hidráulico del valle, y salida en 4×4 por el desierto antes de la partida."
      }
    ],
    "includes": [
      "Traslados al aeropuerto de Ghardaïa",
      "Alojamiento 2 noches",
      "Guía privado autorizado",
      "Guía local para Beni Isguen",
      "Transporte privado",
      "Salida en 4×4 por el desierto",
      "Desayunos"
    ],
    "excludes": [
      "Vuelos",
      "Tasas de visado",
      "Seguro de viaje",
      "Almuerzos y cenas",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "De octubre a abril"
      },
      {
        "label": "Vestimenta",
        "value": "Valle conservador — ropa cubierta"
      },
      {
        "label": "Fotografía",
        "value": "Restringida en Beni Isguen"
      },
      {
        "label": "Acceso",
        "value": "Vuelo Argel–Ghardaïa, unos 60 min"
      }
    ],
    "faqs": [
      {
        "q": "¿Por qué el valle del M'Zab es Patrimonio de la UNESCO?",
        "a": "Por la coherencia excepcional de su urbanismo: cinco ciudades del siglo XI concebidas como un sistema completo — defensa, vivienda, agua, palmeral — todavía habitado y en funcionamiento."
      },
      {
        "q": "¿Se puede visitar Beni Isguen libremente?",
        "a": "No. La ciudad santa se visita con un guía local designado, en horarios concretos, y la fotografía está restringida. Es una norma de la comunidad, no una formalidad turística."
      },
      {
        "q": "¿Cómo se llega a Ghardaïa?",
        "a": "Lo más sencillo es el vuelo desde Argel, alrededor de una hora. Por carretera es posible pero largo: cuente una jornada completa."
      },
      {
        "q": "¿Qué ropa llevar?",
        "a": "Cubierta para todos: hombros y rodillas tapados, prendas holgadas. El valle es bastante más conservador que la costa."
      }
    ]
  },
  "algeria-cultural-tour": {
    "title": "Circuito cultural por Argelia — 5 días",
    "duration": "5 días · 4 noches",
    "hook": "Cinco días por el corazón de Argelia — la Casbah de Argel Patrimonio de la UNESCO, la costa romana de Tipaza y el valle del M'Zab, con guía privado autorizado.",
    "full": true,
    "seoTitle": "Circuito cultural Argelia 5 días — Argel, Tipaza, M'Zab",
    "seoDescription": "Circuito privado de 5 días por Argelia: la Casbah de Argel, las ruinas romanas de Tipaza y Cherchell y el valle del M'Zab, con guía autorizado.",
    "overview": "Es Argelia en miniatura: la capital blanca, la costa romana y el desierto, en cinco días sin prisas. Se recorre la Casbah de Argel, inscrita por la UNESCO, se sigue el Mediterráneo hasta las ruinas de Tipaza y el museo de Cherchell, y luego se vuela a Ghardaïa para entrar en el valle del M'Zab — cinco ciudades-oasis fortificadas levantadas hace mil años por los mozabitas ibadíes. Costa, cultura y Sáhara, con guía privado y cocina argelina de verdad por el camino.",
    "highlights": [
      "La Casbah de Argel, Patrimonio Mundial de la UNESCO",
      "Tipaza, ciudad romana junto al Mediterráneo",
      "El museo arqueológico de Cherchell",
      "El valle del M'Zab y sus cinco ciudades ibadíes",
      "Guía privado autorizado durante toda la estancia",
      "Cocina argelina cotidiana, lejos de los menús turísticos"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada a Argel",
        "body": "Recepción en el aeropuerto Houari Boumediene y alojamiento. Primer contacto con la bahía y el paseo marítimo."
      },
      {
        "day": 2,
        "title": "Argel y la Casbah",
        "body": "Jornada en la capital: la Casbah, los bulevares coloniales, la Gran Mezquita y los miradores sobre la bahía."
      },
      {
        "day": 3,
        "title": "Tipaza y Cherchell",
        "body": "Hacia el oeste por la costa: las ruinas romanas de Tipaza junto al mar, el Mausoleo real de Mauritania y el museo de Cherchell."
      },
      {
        "day": 4,
        "title": "Vuelo a Ghardaïa y el M'Zab",
        "body": "Vuelo al sur y entrada en el valle del M'Zab: Ghardaïa, su mercado y sus callejuelas en anfiteatro."
      },
      {
        "day": 5,
        "title": "Beni Isguen y salida",
        "body": "Visita de la ciudad santa de Beni Isguen con guía local, regreso y salida."
      }
    ],
    "includes": [
      "Todos los traslados",
      "Alojamiento 4 noches",
      "Guía privado autorizado",
      "Transporte privado",
      "Entradas a los sitios",
      "Desayunos"
    ],
    "excludes": [
      "Vuelos internacionales",
      "Vuelo interno Argel–Ghardaïa",
      "Tasas de visado",
      "Seguro de viaje",
      "Almuerzos y cenas",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "De octubre a abril"
      },
      {
        "label": "Ritmo",
        "value": "Moderado, con tiempo en cada sitio"
      },
      {
        "label": "Vestimenta",
        "value": "Cubierta en el M'Zab"
      },
      {
        "label": "Salida",
        "value": "Argel — aeropuerto Houari Boumediene"
      }
    ],
    "faqs": [
      {
        "q": "¿Es adecuado para una primera visita?",
        "a": "Sí, es el mejor formato para un primer viaje: ofrece las tres caras del país — capital, herencia romana y Sáhara — sin distancias excesivas."
      },
      {
        "q": "¿Está incluido el vuelo interno?",
        "a": "No, se reserva aparte. Nosotros nos encargamos de la reserva e indicamos los horarios compatibles con el programa."
      },
      {
        "q": "¿Hace falta visado?",
        "a": "Sí, para casi todas las nacionalidades, y se obtiene antes de viajar en un consulado argelino. Facilitamos la carta de invitación y el programa confirmado que exigen."
      },
      {
        "q": "¿Se puede adaptar el circuito?",
        "a": "Sí. Todos nuestros circuitos son privados: duración, ritmo y etapas se ajustan a su calendario."
      }
    ]
  },
  "timimoun-desert-escape": {
    "title": "Timimoun — 5 días en el oasis rojo del Gourara",
    "duration": "5 días · 4 noches",
    "hook": "Cinco días en el oasis rojo de Timimoun — ksour y palmerales, antiguas foggaras, grandes dunas y una noche de campamento en el desierto.",
    "full": true,
    "seoTitle": "Viaje a Timimoun 5 días — Oasis rojo del Gourara",
    "seoDescription": "Circuito privado de 5 días en Timimoun, el oasis rojo del Gourara: arquitectura sudanesa, ksour, foggaras, palmerales, grandes dunas y vivac.",
    "overview": "Timimoun hace honor a su apodo de oasis rojo: la arquitectura es de adobe ocre, de estilo sudanés, y la ciudad domina una sebja y un palmeral inmenso. A su alrededor, el Gourara alinea decenas de ksour, aldeas fortificadas unidas por foggaras — galerías drenantes excavadas a mano que traen el agua del acuífero. Es una región de oasis habitados más que de desierto vacío, y ahí está su riqueza. El circuito alterna aldeas, huertos, arte de vivir sahariano y salidas a las dunas del Gran Erg Occidental.",
    "highlights": [
      "Timimoun y su arquitectura roja de estilo sudanés",
      "Los ksour del Gourara y sus callejuelas cubiertas",
      "Las foggaras, patrimonio hidráulico vivo",
      "Las grandes dunas del Gran Erg Occidental",
      "El Ahellil, poesía cantada inscrita por la UNESCO",
      "Una noche en tienda en el campamento del desierto"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada a Timimoun",
        "body": "Recepción y alojamiento, primer recorrido por la ciudad roja y atardecer sobre el palmeral y la sebja."
      },
      {
        "day": 2,
        "title": "Los ksour del Gourara",
        "body": "Jornada por las aldeas fortificadas en torno al oasis: callejuelas cubiertas, mezquitas de tierra y vida de los huertos."
      },
      {
        "day": 3,
        "title": "Foggaras y palmerales",
        "body": "Descubrimiento del sistema de foggaras y de los huertos que riegan, con los hombres que aún las mantienen."
      },
      {
        "day": 4,
        "title": "El Gran Erg y el vivac",
        "body": "Salida en 4×4 hacia las grandes dunas, atardecer y noche en el campamento del desierto."
      },
      {
        "day": 5,
        "title": "Salida",
        "body": "Regreso a Timimoun y traslado al aeropuerto."
      }
    ],
    "includes": [
      "Traslados al aeropuerto",
      "Alojamiento 4 noches",
      "Guía privado autorizado",
      "Transporte 4×4",
      "Salida a las dunas y vivac",
      "Desayunos"
    ],
    "excludes": [
      "Vuelos",
      "Tasas de visado",
      "Seguro de viaje",
      "Almuerzos y cenas",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "De octubre a abril"
      },
      {
        "label": "Noches",
        "value": "Frescas en invierno — lleve capas"
      },
      {
        "label": "Ritmo",
        "value": "Relajado, con trayectos cortos"
      },
      {
        "label": "Acceso",
        "value": "Vuelo desde Argel"
      }
    ],
    "faqs": [
      {
        "q": "¿Qué es una foggara?",
        "a": "Una galería subterránea excavada a mano que lleva el agua del acuífero hasta los huertos por simple gravedad y luego la reparte entre las familias según un reparto codificado desde hace siglos."
      },
      {
        "q": "¿Por qué Timimoun es roja?",
        "a": "Las construcciones son de adobe — tierra cruda mezclada con paja — de un tono ocre rojizo característico, en un estilo llamado sudanés que se extiende del Sahel al Sáhara."
      },
      {
        "q": "¿Qué es el Ahellil?",
        "a": "Una poesía cantada colectiva del Gourara, inscrita por la UNESCO en el patrimonio cultural inmaterial de la humanidad en 2008."
      },
      {
        "q": "¿Es apto para familias?",
        "a": "Sí. El ritmo es suave, las distancias cortas y la hospitalidad de los oasis facilita mucho el viaje con adolescentes."
      }
    ]
  },
  "algeria-tour": {
    "title": "Argelia completa — gran circuito de 10 días",
    "duration": "10 días · 9 noches",
    "hook": "Diez días a través de Argelia — Argel y su Casbah, la costa romana, el este y sus ciudades antiguas, y el Sáhara. La vuelta completa al país.",
    "full": true,
    "seoTitle": "Gran circuito Argelia 10 días — Norte, Este y Sáhara",
    "seoDescription": "Gran circuito privado de 10 días por Argelia: Argel, la costa romana de Tipaza, Constantina y el este antiguo, y luego el Sáhara. Guía autorizado.",
    "overview": "Diez días es la primera duración que permite unir el norte y el desierto sin despacharlos deprisa. Este gran circuito parte de Argel y su Casbah, sigue la costa romana hasta Tipaza y Cherchell, sube al este y sus ciudades antiguas — Djémila, Timgad — y la ciudad de los puentes de Constantina, y luego baja al sur para la experiencia sahariana. Es el formato que recomendamos a quien viene de lejos y no volverá pronto.",
    "highlights": [
      "La Casbah de Argel y la bahía",
      "Tipaza y Cherchell, la costa romana",
      "Djémila y Timgad, ciudades romanas UNESCO",
      "Constantina, la ciudad de los puentes sobre sus gargantas",
      "Una etapa sahariana completa",
      "Guía privado autorizado del primer al último día"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada a Argel",
        "body": "Recepción y alojamiento en la capital, primer contacto con la bahía y el paseo marítimo."
      },
      {
        "day": 2,
        "title": "Argel y la Casbah",
        "body": "La Casbah UNESCO, los bulevares coloniales, la Gran Mezquita y los museos."
      },
      {
        "day": 3,
        "title": "Tipaza y Cherchell",
        "body": "La costa romana al oeste de Argel: ruinas junto al mar, mausoleo real y museo de Cherchell."
      },
      {
        "day": 4,
        "title": "Hacia el este",
        "body": "Ruta hacia el este del país por las mesetas, entre los paisajes de la Cabilia y las llanuras cerealistas."
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "La ciudad romana de Djémila en su anfiteatro de colinas — uno de los yacimientos mejor conservados del norte de África."
      },
      {
        "day": 6,
        "title": "Constantina",
        "body": "La ciudad de los puentes: las gargantas del Rhumel, el palacio Ahmed Bey, el museo de Cirta y el casco antiguo."
      },
      {
        "day": 7,
        "title": "Timgad",
        "body": "Timgad, colonia romana fundada por Trajano y la ciudad en damero más completa que se conserva."
      },
      {
        "day": 8,
        "title": "Hacia el Sáhara",
        "body": "Descenso al sur y entrada en el mundo de los oasis."
      },
      {
        "day": 9,
        "title": "Jornada sahariana",
        "body": "Palmerales, ksour y dunas, con una velada en el desierto."
      },
      {
        "day": 10,
        "title": "Regreso y salida",
        "body": "Regreso a Argel y traslado al aeropuerto."
      }
    ],
    "includes": [
      "Todos los traslados",
      "Alojamiento 9 noches",
      "Guía privado autorizado",
      "Transporte privado",
      "Entradas a los sitios",
      "Desayunos"
    ],
    "excludes": [
      "Vuelos internacionales e internos",
      "Tasas de visado",
      "Seguro de viaje",
      "Almuerzos y cenas",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "De octubre a abril"
      },
      {
        "label": "Ritmo",
        "value": "Intenso pero realista"
      },
      {
        "label": "Distancias",
        "value": "Largas — incluye un vuelo interno"
      },
      {
        "label": "Salida",
        "value": "Argel"
      }
    ],
    "faqs": [
      {
        "q": "¿Diez días bastan para ver Argelia?",
        "a": "Para lo esencial, sí. Es la primera duración que permite unir el norte y un paso real por el Sáhara sin pasar los días en la carretera."
      },
      {
        "q": "¿Se viaja mucho por carretera?",
        "a": "Argelia es el país más grande de África y las distancias son reales. El programa incluye un vuelo interno para evitar los trayectos más largos."
      },
      {
        "q": "¿El circuito es privado?",
        "a": "Sí, por completo: su guía, su vehículo, su ritmo. Nada se comparte con otros grupos."
      },
      {
        "q": "¿Se puede viajar en pareja?",
        "a": "Sí. La mayoría de nuestras salidas son en pareja o en pequeño grupo familiar."
      }
    ]
  },
  "algeria-through-time-and-tradition": {
    "title": "Argelia romana — Tipaza, Djémila y Timgad (3 días)",
    "duration": "3 días · 2 noches",
    "hook": "Tres días por la mejor herencia romana de Argelia — las ruinas junto al mar de Tipaza y Cherchell, Djémila en las colinas y el damero de Timgad.",
    "full": true,
    "seoTitle": "Argelia romana 3 días — Tipaza, Djémila, Timgad",
    "seoDescription": "Circuito privado de 3 días por las ciudades romanas de Argelia: Tipaza y Cherchell junto al mar, Djémila entre colinas y Timgad.",
    "overview": "Argelia conserva las ciudades romanas mejor preservadas del mundo mediterráneo, precisamente porque el turismo de masas nunca llegó. En tres días este circuito enlaza las tres más bellas: Tipaza, asomada a la orilla, con el Mausoleo real de Mauritania encima; Djémila, en un anfiteatro de colinas del este, cuyo foro y mosaicos son de una conservación rara; y Timgad, colonia fundada por Trajano hacia el año 100, la ciudad en damero más completa que se conserva, con su arco, su teatro y su biblioteca.",
    "highlights": [
      "Tipaza, ciudad romana junto al Mediterráneo",
      "El Mausoleo real de Mauritania",
      "El museo arqueológico de Cherchell",
      "Djémila y su foro entre colinas",
      "Timgad, el arco de Trajano y la biblioteca",
      "Yacimientos a menudo desiertos, incluso en temporada"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tipaza y Cherchell",
        "body": "Salida de Argel hacia la costa oeste: las ruinas de Tipaza junto al mar, el Mausoleo real y el museo de Cherchell."
      },
      {
        "day": 2,
        "title": "Djémila",
        "body": "Ruta hacia el este y jornada en Djémila: el foro, los templos, las casas y los mosaicos del museo."
      },
      {
        "day": 3,
        "title": "Timgad",
        "body": "Timgad y su damero intacto: arco de Trajano, teatro, termas y biblioteca, antes del regreso."
      }
    ],
    "includes": [
      "Traslados",
      "Alojamiento 2 noches",
      "Guía privado autorizado",
      "Transporte privado",
      "Entradas a los sitios",
      "Desayunos"
    ],
    "excludes": [
      "Vuelos",
      "Tasas de visado",
      "Seguro de viaje",
      "Almuerzos y cenas",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Marzo–junio, septiembre–noviembre"
      },
      {
        "label": "Caminatas",
        "value": "Yacimientos amplios — calzado adecuado"
      },
      {
        "label": "Sombra",
        "value": "Escasa — sombrero y agua"
      },
      {
        "label": "Salida",
        "value": "Argel"
      }
    ],
    "faqs": [
      {
        "q": "¿Cuál de las tres impresiona más?",
        "a": "Timgad por la integridad de su trazado urbano, Djémila por su entorno y sus mosaicos, Tipaza por el mar. Juntas dan la medida del África romana."
      },
      {
        "q": "¿Hay muchos visitantes?",
        "a": "Muy pocos. Es normal recorrer Timgad o Djémila cruzándose con un puñado de personas, algo ya imposible en el resto del Mediterráneo."
      },
      {
        "q": "¿Los yacimientos están acondicionados?",
        "a": "De forma somera. Hay museos de sitio y guardas, pero poca señalización: un guía cambia por completo la visita."
      },
      {
        "q": "¿Se pueden ver las tres en tres días?",
        "a": "Sí, pero las distancias son reales. El programa es denso y supone salidas tempranas."
      }
    ]
  },
  "oran-mostaganem-tlemcen": {
    "title": "El oeste argelino: Orán, Mostaganem y Tlemcén — 5 días",
    "duration": "5 días · 4 noches",
    "hook": "Cinco días por el oeste argelino — el puerto de Orán, las playas de Mostaganem y la herencia andalusí de Tlemcén: mezquita, palacio y cascadas.",
    "full": true,
    "seoTitle": "Oeste argelino 5 días — Orán y Tlemcén",
    "seoDescription": "Circuito privado de 5 días por el oeste de Argelia: Orán y Santa Cruz, las playas de Mostaganem y la herencia andalusí de Tlemcén.",
    "overview": "El oeste argelino es la parte andalusí del país. Orán, segunda ciudad y gran puerto, mezcla arquitectura española y francesa bajo el fuerte de Santa Cruz, y dio el raï al mundo. Mostaganem alinea playas y un viejo barrio otomano sobre el mar. Y Tlemcén, capital cultural de la Argelia andalusí, conserva la Gran Mezquita, el alminar de Mansourah, el palacio El Mechouar, el santuario de Sidi Bumedién y una tradición musical gharnati todavía viva.",
    "highlights": [
      "Orán, Santa Cruz y la bahía",
      "La plaza del 1 de Noviembre y el centro histórico",
      "Las playas y el viejo Tigditt de Mostaganem",
      "La Gran Mezquita de Tlemcén",
      "Mansourah, El Mechouar y Sidi Bumedién",
      "Las cascadas de El Ourit y la música gharnati"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada a Orán",
        "body": "Recepción y alojamiento, primer contacto con el paseo marítimo y el centro."
      },
      {
        "day": 2,
        "title": "Orán",
        "body": "El fuerte de Santa Cruz, el casco antiguo, el puerto y la ciudad española y francesa."
      },
      {
        "day": 3,
        "title": "Mostaganem",
        "body": "Hacia el este por la costa: playas, viejo barrio de Tigditt y Bordj Ettork."
      },
      {
        "day": 4,
        "title": "Tlemcén",
        "body": "Jornada andalusí: Gran Mezquita, Mansourah, El Mechouar y Sidi Bumedién."
      },
      {
        "day": 5,
        "title": "El Ourit y salida",
        "body": "Las cascadas de El Ourit y la meseta de Lalla Setti antes del traslado."
      }
    ],
    "includes": [
      "Traslados",
      "Alojamiento 4 noches",
      "Guía privado autorizado",
      "Transporte privado",
      "Entradas a los sitios",
      "Desayunos"
    ],
    "excludes": [
      "Vuelos",
      "Tasas de visado",
      "Seguro de viaje",
      "Almuerzos y cenas",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Abril–junio, septiembre–noviembre"
      },
      {
        "label": "Ritmo",
        "value": "Moderado"
      },
      {
        "label": "Salida",
        "value": "Orán — aeropuerto Ahmed Ben Bella"
      },
      {
        "label": "Música",
        "value": "Raï en Orán, gharnati en Tlemcén"
      }
    ],
    "faqs": [
      {
        "q": "¿Por qué visitar Tlemcén?",
        "a": "Es el corazón de la herencia andalusí en Argelia: mezquitas, palacios y santuarios de los siglos XII al XIV, en una ciudad que ha conservado su música y su artesanía."
      },
      {
        "q": "¿Se puede enlazar con Argel?",
        "a": "Sí. Orán está conectada con Argel por avión, tren y autopista — ajustamos el programa a su punto de llegada."
      },
      {
        "q": "¿Es una región de playa?",
        "a": "La costa es hermosa y las playas de Mostaganem son reales, pero este circuito sigue siendo sobre todo cultural."
      },
      {
        "q": "¿Qué es el gharnati?",
        "a": "Una escuela de música arabigoandalusí heredada de Granada, de la que Tlemcén es el principal foco en Argelia."
      }
    ]
  },
  "the-beauty-of-algeria": {
    "title": "Constantina y Timgad — 2 días",
    "duration": "2 días · 1 noche",
    "hook": "Dos días por el este argelino — la ciudad de los puentes suspendida sobre las gargantas del Rhumel, y la ciudad romana de Timgad.",
    "full": true,
    "seoTitle": "Constantina y Timgad — 2 días en el este argelino",
    "seoDescription": "Circuito privado de 2 días por el este argelino: Constantina y las gargantas del Rhumel, y la ciudad romana de Timgad, Patrimonio de la UNESCO.",
    "overview": "Dos días para lo esencial del este argelino. Constantina es una ciudad imposible: construida sobre una roca partida por las gargantas del Rhumel y recosida por una serie de puentes espectaculares, con un pasado que se remonta a Cirta, capital númida. A hora y media, Timgad despliega en la llanura el damero romano más completo que se conserva. El contraste entre la ciudad vertical y la ciudad geométrica es todo el interés de este formato corto.",
    "highlights": [
      "Las gargantas del Rhumel y los puentes de Constantina",
      "El palacio Ahmed Bey",
      "El museo de Cirta",
      "Timgad, el arco de Trajano y el teatro",
      "La música malouf de Constantina",
      "Un formato corto, ideal como complemento"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Constantina",
        "body": "La ciudad de los puentes: el puente Sidi M'Cid, las gargantas, el palacio Ahmed Bey, el museo de Cirta y el casco antiguo."
      },
      {
        "day": 2,
        "title": "Timgad",
        "body": "Hacia el sur y jornada en Timgad: el trazado romano completo, el arco de Trajano, el teatro y el museo de mosaicos."
      }
    ],
    "includes": [
      "Traslados",
      "Alojamiento 1 noche",
      "Guía privado autorizado",
      "Transporte privado",
      "Entradas a los sitios",
      "Desayuno"
    ],
    "excludes": [
      "Vuelos",
      "Tasas de visado",
      "Seguro de viaje",
      "Almuerzos y cenas",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Abril–junio, septiembre–noviembre"
      },
      {
        "label": "Ritmo",
        "value": "Denso en dos días"
      },
      {
        "label": "Salida",
        "value": "Constantina — aeropuerto Mohamed Boudiaf"
      },
      {
        "label": "Se combina con",
        "value": "Djémila y Sétif"
      }
    ],
    "faqs": [
      {
        "q": "¿Por qué es famosa Constantina?",
        "a": "Por su emplazamiento: una ciudad sobre un espolón rocoso partido por un cañón de 200 metros, cruzado por puentes que son su firma visual."
      },
      {
        "q": "¿Merece la pena Timgad?",
        "a": "Es la ciudad romana en damero más completa que se conserva, llamada a menudo la Pompeya de África, y casi siempre está desierta."
      },
      {
        "q": "¿Cómo llegar a Constantina?",
        "a": "En avión desde Argel, en tren o por la autopista este-oeste."
      },
      {
        "q": "¿Bastan dos días?",
        "a": "Para estos dos lugares, sí. Añadiendo Djémila hace falta un día más."
      }
    ]
  },
  "algeria-eastern-sahara-discovery": {
    "title": "Este argelino y Sáhara — 6 días",
    "duration": "6 días · 5 noches",
    "hook": "Seis días por el este del país — los puentes de Constantina, las ciudades romanas de Djémila y Timgad, una puerta del Sáhara en Bou Saada y un día en Béjaïa."
  },
  "djanet-ghardaia-desert-2-days": {
    "title": "Djanet y Ghardaïa — 6 días de desierto y patrimonio",
    "duration": "6 días · 5 noches",
    "hook": "Seis días que reúnen las dos caras del Sáhara argelino: las ciudades del M'Zab Patrimonio de la UNESCO y el gran desierto en torno a Djanet."
  },
  "algeria-intensive-discovery-tour": {
    "title": "Descubrimiento intensivo de Argelia — 5 días",
    "duration": "5 días · 4 noches",
    "hook": "Cinco días a ritmo intenso para ver lo máximo del país: capital, costa romana y primera aproximación al Sáhara."
  },
  "the-soul-of-algeria": {
    "title": "El alma de Argelia — 4 días",
    "duration": "4 días · 3 noches",
    "hook": "Cuatro días entre la capital, la costa romana y el interior, para captar el carácter del país más que su lista de lugares."
  },
  "the-culture-and-heritage-of-algeria": {
    "title": "Cultura y patrimonio de Argelia — 8 días",
    "duration": "8 días · 7 noches",
    "hook": "Ocho días por la cultura y la historia argelinas — la capital y su Casbah, Tipaza y Djémila, los puentes de Constantina y el oasis de Bou Saada."
  },
  "algeria-beyond-expectations": {
    "title": "Argelia más allá de lo esperado — 10 días",
    "duration": "10 días · 9 noches",
    "hook": "Diez días para el país en toda su extensión, del litoral mediterráneo a los oasis saharianos, a un ritmo que deja tiempo para mirar."
  },
  "bousaada-desert-tour": {
    "title": "Bou Saada — 2 días en el oasis",
    "duration": "2 días · 1 noche",
    "hook": "Dos días en Bou Saada, la ciudad de la felicidad — su cascada y el molino Ferrero, los mercados artesanales, una cena beduina y la zauia de El Hamel."
  },
  "tour-bejaia-historic": {
    "title": "Béjaïa — la ciudad histórica junto al mar (día completo)",
    "duration": "1 día",
    "hook": "Un día en la costa en Béjaïa — su fortaleza y su museo, la cornisa de Cap Carbon y la arena de Les Aiguades, con almuerzo frente al Mediterráneo."
  },
  "private-guided-tour": {
    "title": "Tipaza y Cherchell — día romano privado",
    "duration": "1 día",
    "hook": "Un día privado en la costa romana al oeste de Argel — las ruinas de Tipaza junto al mar y el museo de la antigua Cesarea en Cherchell."
  },
  "algiers-city-tour-casbah-bardo-martyrsmemorial": {
    "title": "Argel en un día — Casbah, Bardo y Monumento al Mártir",
    "duration": "1 día",
    "hook": "Un día completo en la capital — la Casbah UNESCO, el museo del Bardo y el Monumento al Mártir sobre la bahía."
  },
  "algierstour-hammagarden-notredame-dafrique": {
    "title": "Argel — Jardín de Hamma y Notre-Dame d'Afrique",
    "duration": "1 día",
    "hook": "Un día en Argel entre el Jardín de Ensayo de Hamma y la basílica de Notre-Dame d'Afrique, con las mejores vistas de la bahía."
  },
  "day-tour-algeria-culture": {
    "title": "Argel — paseo cultural por la Casbah",
    "duration": "1 día",
    "hook": "Un día a pie por la Casbah de Argel, sus callejuelas, sus palacios otomanos y sus terrazas, con un guía que creció allí."
  }
};

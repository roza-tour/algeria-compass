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
  itinerary?: { day: number; title: string; body: string; stops?: { place: string; text: string }[] }[];
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
        "body": "Encuentro con el equipo en Djanet y salida en 4×4 hacia el desierto. Atardecer sobre las dunas y primera noche en el campamento.",
        "stops": [
          {
            "place": "Djanet",
            "text": "La capital tuareg del sudeste — palmerales bajo acantilados rojos, tu puerta de entrada al Tassili."
          },
          {
            "place": "Primeras dunas al atardecer",
            "text": "Una salida en 4x4 a la arena para la última luz del día y una primera noche en el campamento del desierto."
          },
          {
            "place": "El primer vivac",
            "text": "El campamento se monta al abrigo de una duna — esteras, una mesa baja y una hoguera — y la primera noche transcurre sin una sola luz eléctrica."
          }
        ]
      },
      {
        "day": 2,
        "title": "El Tadrart Rojo",
        "body": "Travesía de los valles de roca roja y arena del Tadrart, con paradas fotográficas, hasta la puesta de sol y la noche en el campamento.",
        "stops": [
          {
            "place": "El Tadrart Rouge",
            "text": "Cañones y arcos de arenisca anaranjada esculpidos por el viento — uno de los paisajes más cinematográficos del Sahara."
          },
          {
            "place": "Arcos de roca esculpidos",
            "text": "Arcos de piedra y rocas en equilibrio modelados durante milenios — las formas emblemáticas del Tadrart."
          },
          {
            "place": "Mares de arena y campamento al atardecer",
            "text": "Extensos campos de dunas que se tiñen de carmesí al anochecer, antes de una noche bajo cielos excepcionalmente oscuros."
          }
        ]
      },
      {
        "day": 3,
        "title": "Arcos, grabados y grandes dunas",
        "body": "Jornada entre arcos naturales, yacimientos de arte rupestre y cordones dunares, siguiendo la luz y los hallazgos.",
        "stops": [
          {
            "place": "Las grandes dunas a pie",
            "text": "La subida a la arena alta en busca del silencio y las vistas — el corazón de la experiencia del desierto."
          },
          {
            "place": "Arte rupestre prehistórico",
            "text": "Pinturas y grabados de pastores, cazadores y fauna de un Sahara verde, de hasta unos 10.000 años de antigüedad — más antiguos que las pirámides."
          },
          {
            "place": "Ceremonia del té tuareg",
            "text": "Los tres vasos rituales de té sahariano con una familia tuareg — la cultura viva del extremo sur."
          }
        ]
      },
      {
        "day": 4,
        "title": "Regreso hacia Djanet",
        "body": "Última mañana en el desierto y regreso hacia el oasis, con un último vivac o una noche en Djanet.",
        "stops": [
          {
            "place": "Ergs y mesetas remotas",
            "text": "Horas de desierto abierto elegidas por su vacío, no por sus hitos — el Sahara en su forma más absoluta."
          },
          {
            "place": "La larga parada del mediodía",
            "text": "Sombra bajo una acacia o un saliente rocoso mientras pasa el calor: una estera, el almuerzo, té y dos o tres horas de no hacer absolutamente nada."
          },
          {
            "place": "El último vivac",
            "text": "El último campamento del circuito, montado allí donde la luz de la tarde es más bella, con cena junto al fuego y todo el cielo estrellado."
          }
        ]
      },
      {
        "day": 5,
        "title": "Salida",
        "body": "Tiempo libre en Djanet según el horario del vuelo y traslado al aeropuerto.",
        "stops": [
          {
            "place": "Desayuno en el campamento",
            "text": "Pan del horno de arena, dátiles, mermelada y café, mientras se recoge el campamento con las primeras luces sobre la arenisca."
          },
          {
            "place": "El regreso hacia el norte por el Tadrart",
            "text": "El trayecto de vuelta al oasis — el mismo territorio de roca roja recorrido a la ida, visto ahora con una luz opuesta."
          },
          {
            "place": "Djanet",
            "text": "El oasis tuareg y el aeropuerto de Tiska, donde termina el circuito y comienza el vuelo hacia el norte."
          }
        ]
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
        "body": "Recepción y alojamiento, y primera aproximación a Ghardaïa: las callejuelas en pendiente, la plaza del mercado y la vista del valle al atardecer.",
        "stops": [
          {
            "place": "El mercado de Ghardaïa",
            "text": "La plaza escalonada de arcadas bajo un minarete piramidal, el corazón bullicioso del M'Zab desde hace mil años."
          },
          {
            "place": "Almuerzo en una casa de patrimonio",
            "text": "Una comida en una casa mozabita tradicional, de muros gruesos y fresca frente al calor del desierto."
          },
          {
            "place": "Los palmerales y las foggaras",
            "text": "Huertos regados desde hace mil años por la foggara, los canales subterráneos que hacen posible la vida en el valle seco."
          }
        ]
      },
      {
        "day": 2,
        "title": "Las ciudades del M'Zab",
        "body": "Jornada entre Beni Isguen, El Atteuf y Melika: mezquitas, murallas, cementerios y palmerales, con las explicaciones de un guía mozabita.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La ciudad sagrada y amurallada del M'Zab, a la que se entra por su antigua puerta, donde el vestuario y la fotografía siguen las costumbres locales."
          },
          {
            "place": "La ecociudad de Tafilelt",
            "text": "Un asentamiento mozabita moderno construido sobre principios tradicionales — prueba de que las ideas del valle siguen vivas."
          },
          {
            "place": "Safari en 4x4 hacia El Guerrara",
            "text": "Desierto abierto más allá de las ciudades, con una cena bajo las estrellas para terminar."
          }
        ]
      },
      {
        "day": 3,
        "title": "Palmerales, foggaras y desierto",
        "body": "Mañana en los huertos y el sistema hidráulico del valle, y salida en 4×4 por el desierto antes de la partida.",
        "stops": [
          {
            "place": "Desayuno en la terraza",
            "text": "Un último desayuno en la casa de huéspedes con el ksar apilado en la colina de enfrente — la mejor media hora del día en el M'Zab."
          },
          {
            "place": "La antigua plaza del mercado",
            "text": "Una última hora bajo las arcadas del mercado de Ghardaïa para alfombras, dátiles y lana mozabita, si el horario del vuelo lo permite."
          },
          {
            "place": "El aeropuerto Noumérat-Moufdi Zakaria",
            "text": "El traslado privado fuera del valle, con asistencia en el check-in para el vuelo hacia el norte."
          }
        ]
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
        "body": "Recepción en el aeropuerto Houari Boumediene y alojamiento. Primer contacto con la bahía y el paseo marítimo.",
        "stops": [
          {
            "place": "El aeropuerto Houari Boumediene",
            "text": "El guía recibe al viajero en la propia terminal y lo traslada directamente al hotel, sin colas ni esperas en las primeras horas en el país."
          },
          {
            "place": "La bahía de Argel",
            "text": "La llegada a la capital recorre la costa, con la ciudad blanca escalonada en terrazas sobre el puerto."
          },
          {
            "place": "El paseo marítimo de Argel",
            "text": "Tras el registro en el hotel, una tarde libre para pasear por las arcadas de la fachada marítima y la plaza de los Mártires antes de comenzar el circuito."
          }
        ]
      },
      {
        "day": 2,
        "title": "Argel y la Casbah",
        "body": "Jornada en la capital: la Casbah, los bulevares coloniales, la Gran Mezquita y los miradores sobre la bahía.",
        "stops": [
          {
            "place": "La Casba de Argel",
            "text": "La ciudadela otomana declarada Patrimonio Mundial, un laberinto blanco y empinado de palacios, mezquitas y casas con patio sobre la bahía."
          },
          {
            "place": "La Gran Mezquita de Argel",
            "text": "La Yamaa el Djazair, una de las mayores mezquitas del mundo, con un minarete de más de 265 metros que domina el litoral."
          },
          {
            "place": "Los miradores sobre la bahía",
            "text": "Entre bulevares coloniales de estilo haussmaniano, los miradores del centro ofrecen vistas de la ciudad blanca escalonada hacia el mar."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza y Cherchell",
        "body": "Hacia el oeste por la costa: las ruinas romanas de Tipaza junto al mar, el Mausoleo real de Mauritania y el museo de Cherchell.",
        "stops": [
          {
            "place": "Las ruinas romanas de Tipaza",
            "text": "Un puerto romano declarado Patrimonio Mundial a orillas del Mediterráneo, con basílicas, termas y un teatro a los pies de las olas."
          },
          {
            "place": "El Mausoleo real de Mauritania",
            "text": "Un gran tambor de piedra sobre una colina frente al mar, tumba del siglo I a.C. del rey bereber Juba II y de Cleopatra Selene, hija de Cleopatra de Egipto."
          },
          {
            "place": "El Museo de Cherchell",
            "text": "En la antigua Caesarea, capital de Juba II, el museo conserva algunos de los mosaicos y esculturas romanas y griegas más notables de Argelia."
          }
        ]
      },
      {
        "day": 4,
        "title": "Vuelo a Ghardaïa y el M'Zab",
        "body": "Vuelo al sur y entrada en el valle del M'Zab: Ghardaïa, su mercado y sus callejuelas en anfiteatro.",
        "stops": [
          {
            "place": "El vuelo a Ghardaïa",
            "text": "Un salto en avión hacia el sur que lleva del Mediterráneo al valle sahariano del M'Zab en poco más de una hora."
          },
          {
            "place": "Ghardaïa",
            "text": "La localidad principal del M'Zab, una pirámide de casas declarada Patrimonio Mundial que asciende hasta la mezquita y el minarete de su cumbre."
          },
          {
            "place": "El mercado y las callejuelas de Ghardaïa",
            "text": "La plaza porticada y escalonada bajo el minarete piramidal, corazón bullicioso del M'Zab desde hace mil años."
          }
        ]
      },
      {
        "day": 5,
        "title": "Beni Isguen y salida",
        "body": "Visita de la ciudad santa de Beni Isguen con guía local, regreso y salida.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La ciudad santa y amurallada del M'Zab, a la que se entra por su antigua puerta y donde el vestido y las fotografías siguen las costumbres locales."
          },
          {
            "place": "El regreso a Argel",
            "text": "Vuelo de vuelta hacia el norte, de regreso a la capital tras los días en el Sáhara."
          },
          {
            "place": "El aeropuerto Houari Boumediene",
            "text": "Traslado privado hasta el aeropuerto y asistencia durante los trámites de facturación antes de la salida."
          }
        ]
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
        "body": "Recepción y alojamiento, primer recorrido por la ciudad roja y atardecer sobre el palmeral y la sebja.",
        "stops": [
          {
            "place": "Timimoun",
            "text": "El «oasis rojo» del Gourara — una ciudad entera construida en arquitectura de tierra de estilo sudanés, de un rojo ocre, sobre un lago salado."
          },
          {
            "place": "La casa de huéspedes Ti Massin",
            "text": "Una casa tradicional de tierra roja con patios y terrazas, base de toda la estancia."
          },
          {
            "place": "El escarpe al atardecer",
            "text": "El saliente sobre la sebja donde los muros de Timimoun se vuelven de un naranja intenso con la última luz, antes de una cena tradicional."
          }
        ]
      },
      {
        "day": 2,
        "title": "Los ksour del Gourara",
        "body": "Jornada por las aldeas fortificadas en torno al oasis: callejuelas cubiertas, mezquitas de tierra y vida de los huertos.",
        "stops": [
          {
            "place": "El ksar de Guentour y su palmeral",
            "text": "Un ksar de barro rojo sobre su palmeral — arquitectura clásica del Gourara."
          },
          {
            "place": "El ksar y el oasis de Tala",
            "text": "Otro oasis de torres de tierra entre las palmeras."
          },
          {
            "place": "Atardecer en las dunas y velada musical",
            "text": "Arena al anochecer y una velada de música tradicional del Gourara."
          }
        ]
      },
      {
        "day": 3,
        "title": "Foggaras y palmerales",
        "body": "Descubrimiento del sistema de foggaras y de los huertos que riegan, con los hombres que aún las mantienen.",
        "stops": [
          {
            "place": "Las foggaras de Ouled Saïd",
            "text": "Antiguas galerías subterráneas de riego que llevan el agua hasta los huertos — el ingenio sahariano en su máxima expresión."
          },
          {
            "place": "Beni Aïssi y su ksar",
            "text": "Un picnic en el palmeral y té junto a un antiguo ksar."
          },
          {
            "place": "Las grandes dunas",
            "text": "Atardecer sobre la arena alta."
          }
        ]
      },
      {
        "day": 4,
        "title": "El Gran Erg y el vivac",
        "body": "Salida en 4×4 hacia las grandes dunas, atardecer y noche en el campamento del desierto.",
        "stops": [
          {
            "place": "El yacimiento de Ighzer",
            "text": "Un enclave del desierto explorado en el fresco de la mañana."
          },
          {
            "place": "Safari en 4x4 por las dunas",
            "text": "Dunas doradas hasta una puesta de sol panorámica."
          },
          {
            "place": "Una cena de campamento «merdoum»",
            "text": "Un festín tradicional de merdoum, asado bajo la arena, disfrutado bajo las estrellas."
          }
        ]
      },
      {
        "day": 5,
        "title": "Salida",
        "body": "Regreso a Timimoun y traslado al aeropuerto.",
        "stops": [
          {
            "place": "El mercado de Timimoun",
            "text": "El mercado de la ciudad roja para especias y artesanía."
          },
          {
            "place": "El antiguo barrio del ksar",
            "text": "Un último paseo por las callejuelas de tierra roja y los pasajes cubiertos de arcadas del casco antiguo."
          },
          {
            "place": "La carretera hacia el norte",
            "text": "El traslado de regreso hacia Argel bordeando el límite norte del Gran Erg Occidental."
          }
        ]
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
        "body": "Recepción y alojamiento en la capital, primer contacto con la bahía y el paseo marítimo.",
        "stops": [
          {
            "place": "El aeropuerto Houari Boumediene",
            "text": "Recepción en la terminal y traslado directo al hotel para comenzar el gran circuito."
          },
          {
            "place": "La bahía de Argel",
            "text": "El acceso a la capital bordea la costa, con la ciudad blanca alzándose en terrazas sobre el puerto."
          },
          {
            "place": "El paseo marítimo de Argel",
            "text": "Tras el alojamiento, primer contacto con la ciudad paseando por su fachada marítima."
          }
        ]
      },
      {
        "day": 2,
        "title": "Argel y la Casbah",
        "body": "La Casbah UNESCO, los bulevares coloniales, la Gran Mezquita y los museos.",
        "stops": [
          {
            "place": "La Casba de Argel",
            "text": "La ciudadela otomana declarada Patrimonio Mundial, un laberinto blanco de palacios, mezquitas y casas con patio sobre la bahía."
          },
          {
            "place": "La Gran Mezquita de Argel",
            "text": "La Yamaa el Djazair, con más de 265 metros de minarete, una de las mayores mezquitas del mundo."
          },
          {
            "place": "Los museos de Argel",
            "text": "El Museo del Bardo, en una villa morisca con piezas prehistóricas y etnográficas, y el Museo Nacional del Ejército, junto al Monumento a los Mártires."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza y Cherchell",
        "body": "La costa romana al oeste de Argel: ruinas junto al mar, mausoleo real y museo de Cherchell.",
        "stops": [
          {
            "place": "Las ruinas romanas de Tipaza",
            "text": "Un puerto romano declarado Patrimonio Mundial a orillas del Mediterráneo, con basílicas, termas y un teatro junto al mar."
          },
          {
            "place": "El Mausoleo real de Mauritania",
            "text": "Un gran tambor de piedra sobre una colina frente al mar, tumba del siglo I a.C. del rey bereber Juba II y de Cleopatra Selene."
          },
          {
            "place": "El Museo de Cherchell",
            "text": "En la antigua Caesarea, el museo reúne algunos de los mejores mosaicos y esculturas romanas y griegas de Argelia."
          }
        ]
      },
      {
        "day": 4,
        "title": "Hacia el este",
        "body": "Ruta hacia el este del país por las mesetas, entre los paisajes de la Cabilia y las llanuras cerealistas.",
        "stops": [
          {
            "place": "La ruta hacia el este",
            "text": "Traslado por carretera desde Argel hacia el interior, cruzando las altas mesetas del Tell."
          },
          {
            "place": "Los paisajes de la Cabilia",
            "text": "El trayecto bordea las montañas de la Cabilia, con sus pueblos aferrados a las laderas."
          },
          {
            "place": "Las llanuras cerealistas",
            "text": "Antes de llegar a destino, la ruta atraviesa las grandes llanuras de cereal del interior argelino."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "La ciudad romana de Djémila en su anfiteatro de colinas — uno de los yacimientos mejor conservados del norte de África.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Una ciudad romana declarada Patrimonio Mundial entre montañas verdes, uno de los yacimientos mejor conservados del norte de África."
          },
          {
            "place": "El foro y el teatro de Djémila",
            "text": "Templos, foro y un empinado teatro asentados en el anfiteatro natural de colinas que rodea el yacimiento."
          },
          {
            "place": "Los mosaicos de Djémila",
            "text": "El museo del sitio conserva algunos de los mosaicos romanos más ricos que se conocen."
          }
        ]
      },
      {
        "day": 6,
        "title": "Constantina",
        "body": "La ciudad de los puentes: las gargantas del Rhumel, el palacio Ahmed Bey, el museo de Cirta y el casco antiguo.",
        "stops": [
          {
            "place": "Las gargantas del Rhumel",
            "text": "La 'ciudad de los puentes' se asoma al vertiginoso cañón del Rhumel, salvado por pasarelas colgadas en el vacío."
          },
          {
            "place": "El palacio de Ahmed Bey",
            "text": "El palacio otomano de principios del siglo XIX del último bey, con galerías pintadas y patios en sombra."
          },
          {
            "place": "El Museo de Cirta y el casco antiguo",
            "text": "Las colecciones de historia y arqueología de Cirta, en el corazón del casco antiguo de Constantina."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timgad",
        "body": "Timgad, colonia romana fundada por Trajano y la ciudad en damero más completa que se conserva.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonia romana en damero fundada por Trajano hacia el año 100, la 'Pompeya del Aurès' extendida sobre la llanura."
          },
          {
            "place": "El Arco de Trajano",
            "text": "El arco triunfal que enmarca la calle principal de Timgad y da al yacimiento su silueta más reconocible."
          },
          {
            "place": "La biblioteca y el teatro de Timgad",
            "text": "Los restos de una rara biblioteca pública romana y un teatro de 3.500 localidades todavía en uso."
          }
        ]
      },
      {
        "day": 8,
        "title": "Hacia el Sáhara",
        "body": "Descenso al sur y entrada en el mundo de los oasis.",
        "stops": [
          {
            "place": "La ruta hacia el sur",
            "text": "El descenso deja atrás el Tell y las altas estepas para entrar en el pre-Sáhara."
          },
          {
            "place": "Ghardaïa",
            "text": "La entrada en el mundo de los oasis por Ghardaïa, pirámide de casas declarada Patrimonio Mundial que asciende hasta su mezquita."
          },
          {
            "place": "Una casa de huéspedes del M'Zab",
            "text": "Alojamiento en una vivienda mozabita restaurada, con muros gruesos, patio interior y terraza sobre el valle."
          }
        ]
      },
      {
        "day": 9,
        "title": "Jornada sahariana",
        "body": "Palmerales, ksour y dunas, con una velada en el desierto.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La ciudad santa y amurallada del M'Zab, a la que se accede por su antigua puerta siguiendo estrictas costumbres locales."
          },
          {
            "place": "Los palmerales del M'Zab",
            "text": "Huertos de palmeras regados desde hace siglos por las foggaras, los canales subterráneos que hacen posible la vida en el valle."
          },
          {
            "place": "Una velada en las dunas",
            "text": "Una tarde y una cena bajo las estrellas en las dunas a las puertas del Sáhara."
          }
        ]
      },
      {
        "day": 10,
        "title": "Regreso y salida",
        "body": "Regreso a Argel y traslado al aeropuerto.",
        "stops": [
          {
            "place": "El regreso a Argel",
            "text": "Vuelo o traslado por carretera de vuelta al norte, tras cerrar el círculo por el sur del país."
          },
          {
            "place": "Tiempo libre en Argel",
            "text": "Unas últimas horas en la capital antes del traslado, para un paseo final o unas compras de recuerdo."
          },
          {
            "place": "El aeropuerto Houari Boumediene",
            "text": "Traslado privado al aeropuerto con asistencia durante los trámites de facturación."
          }
        ]
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
        "body": "Salida de Argel hacia la costa oeste: las ruinas de Tipaza junto al mar, el Mausoleo real y el museo de Cherchell.",
        "stops": [
          {
            "place": "La Tipaza romana",
            "text": "Un puerto romano declarado Patrimonio de la Humanidad por la UNESCO, extendido a lo largo del Mediterráneo — basílicas, termas y un teatro con las olas a sus pies."
          },
          {
            "place": "Cherchell (la antigua Cesarea)",
            "text": "La antigua capital de Juba II, cuyo museo alberga algunos de los mejores mosaicos y esculturas romanas y griegas de Argelia."
          },
          {
            "place": "El Mausoleo Real de Mauritania",
            "text": "Un gran tambor de piedra sobre una colina frente al mar — la tumba, del siglo I a.C., del rey bereber Juba II y de Cleopatra Selene, hija de Cleopatra de Egipto."
          }
        ]
      },
      {
        "day": 2,
        "title": "Djémila",
        "body": "Ruta hacia el este y jornada en Djémila: el foro, los templos, las casas y los mosaicos del museo.",
        "stops": [
          {
            "place": "Las calles porticadas de Djémila",
            "text": "Puertas monumentales y avenidas empedradas de la ciudad romana, enclavada en su hoya de montaña."
          },
          {
            "place": "El teatro de Djémila",
            "text": "Un teatro en pendiente excavado en la ladera, que aún domina el valle."
          },
          {
            "place": "Los mosaicos de Djémila",
            "text": "Mosaicos in situ entre los más ricos del mundo romano, expuestos en el museo del yacimiento."
          }
        ]
      },
      {
        "day": 3,
        "title": "Timgad",
        "body": "Timgad y su damero intacto: arco de Trajano, teatro, termas y biblioteca, antes del regreso.",
        "stops": [
          {
            "place": "El Arco de Trajano",
            "text": "El arco triunfal que enmarca la calle principal de Timgad — la silueta icónica de la ciudad."
          },
          {
            "place": "La biblioteca y el teatro de Timgad",
            "text": "Las ruinas de una infrecuente biblioteca pública romana y un teatro de 3.500 asientos que aún hoy se sigue usando."
          },
          {
            "place": "La cuadrícula, las termas y los templos de Timgad",
            "text": "El trazado romano de manual que ha dado fama a Timgad."
          }
        ]
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
        "body": "Recepción y alojamiento, primer contacto con el paseo marítimo y el centro.",
        "stops": [
          {
            "place": "El Fuerte de Santa Cruz",
            "text": "Una fortaleza española del siglo XVI en el monte Murdjadjo, con las mejores vistas sobre Orán y el mar."
          },
          {
            "place": "La Place du 1er Novembre",
            "text": "La gran plaza central de Orán, rodeada de fachadas coloniales y de la ópera."
          },
          {
            "place": "Sidi El Houari",
            "text": "El barrio más antiguo de Orán, con vestigios otomanos y españoles alrededor del puerto viejo."
          }
        ]
      },
      {
        "day": 2,
        "title": "Orán",
        "body": "El fuerte de Santa Cruz, el casco antiguo, el puerto y la ciudad española y francesa.",
        "stops": [
          {
            "place": "El Museo Nacional Ahmed Zabana",
            "text": "El principal museo de Orán — historia natural, bellas artes y el pasado profundo de la región."
          },
          {
            "place": "El Sacré-Cœur",
            "text": "Una antigua catedral emblemática, hoy biblioteca pública, que ancla la ciudad moderna."
          },
          {
            "place": "El paseo marítimo",
            "text": "El paseo mediterráneo de Orán, su punto de encuentro al caer la tarde."
          }
        ]
      },
      {
        "day": 3,
        "title": "Mostaganem",
        "body": "Hacia el este por la costa: playas, viejo barrio de Tigditt y Bordj Ettork.",
        "stops": [
          {
            "place": "Las playas de Mostaganem",
            "text": "Largas arenas mediterráneas en la costa del Dahra — un relajado cambio de ritmo junto al mar."
          },
          {
            "place": "Bordj el Mehal, el fuerte antiguo",
            "text": "Un fuerte de época otomana sobre la ciudad, recuerdo del pasado estratégico de Mostaganem."
          },
          {
            "place": "El barrio de Tigditt",
            "text": "El distrito histórico de callejuelas empinadas sobre el río."
          }
        ]
      },
      {
        "day": 4,
        "title": "Tlemcén",
        "body": "Jornada andalusí: Gran Mezquita, Mansourah, El Mechouar y Sidi Bumedién.",
        "stops": [
          {
            "place": "La Gran Mezquita de Tlemcen",
            "text": "Una obra maestra almorávide del siglo XII, con un mihrab tallado entre los más bellos del Magreb."
          },
          {
            "place": "El Palacio de El Mechouar",
            "text": "La ciudadela-palacio restaurada de los sultanes zayaníes que convirtieron a Tlemcen en capital."
          },
          {
            "place": "La meseta de Lalla Setti",
            "text": "Una meseta verde sobre la ciudad, con panorámicas, jardines y un teleférico para subir."
          }
        ]
      },
      {
        "day": 5,
        "title": "El Ourit y salida",
        "body": "Las cascadas de El Ourit y la meseta de Lalla Setti antes del traslado.",
        "stops": [
          {
            "place": "La meseta de Lalla Setti",
            "text": "La terraza alta del Parque Nacional de Tlemcen sobre la ciudad, con toda la medina y su llanura desplegadas abajo."
          },
          {
            "place": "Las cascadas de El Ourit",
            "text": "Cascadas que caen por acantilados boscosos en el Parque Nacional de Tlemcen, al este de la ciudad."
          },
          {
            "place": "Mansourah",
            "text": "El gran minarete en ruinas de una ciudad de asedio del siglo XIV, a las afueras de Tlemcen."
          }
        ]
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
        "body": "La ciudad de los puentes: el puente Sidi M'Cid, las gargantas, el palacio Ahmed Bey, el museo de Cirta y el casco antiguo.",
        "stops": [
          {
            "place": "Los puentes de Constantina",
            "text": "La «Ciudad de los Puentes», tendida sobre el vertiginoso desfiladero del Rhumel, con la pasarela de Sidi M'Cid suspendida muy por encima."
          },
          {
            "place": "El Palacio de Ahmed Bey",
            "text": "El palacio otomano de principios del siglo XIX del último bey, con galerías pintadas y patios en sombra."
          },
          {
            "place": "El Museo Nacional de Cirta",
            "text": "Antigüedades de la antigua Cirta — mosaicos, bronces y reliquias numidas."
          }
        ]
      },
      {
        "day": 2,
        "title": "Timgad",
        "body": "Hacia el sur y jornada en Timgad: el trazado romano completo, el arco de Trajano, el teatro y el museo de mosaicos.",
        "stops": [
          {
            "place": "El Arco de Trajano",
            "text": "El arco triunfal que enmarca la calle principal de Timgad — la silueta icónica de la ciudad."
          },
          {
            "place": "La biblioteca y el teatro de Timgad",
            "text": "Las ruinas de una infrecuente biblioteca pública romana y un teatro de 3.500 asientos que aún hoy se sigue usando."
          },
          {
            "place": "El foro y los templos de Timgad",
            "text": "El corazón en cuadrícula de la colonia de Trajano, con sus termas y templos."
          }
        ]
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
    "hook": "Seis días por el este del país — los puentes de Constantina, las ciudades romanas de Djémila y Timgad, una puerta del Sáhara en Bou Saada y un día en Béjaïa.",
    "full": true,
    "seoTitle": "Este argelino y Sáhara — circuito de 6 días",
    "seoDescription": "Circuito privado de 6 días por el este de Argelia: Constantina, las ciudades romanas de Djémila y Timgad, Bou Saada y la costa de Béjaïa.",
    "overview": "Un gran bucle por el este argelino, donde ciudades romanas, gargantas espectaculares, puertas del desierto y el Mediterráneo quedan a una jornada de carretera unas de otras. Se descubre Constantina, la vertiginosa ciudad de los puentes; las ciudades romanas de Djémila y Timgad, Patrimonio de la UNESCO; el borde de los oasis en torno a Bou Saada y Biskra; y una última jornada costera en Béjaïa. Es la ruta única más rica que puede trazarse por el noreste del país.",
    "highlights": [
      "Los puentes colgantes de Constantina",
      "Las ruinas romanas de Djémila y Timgad (UNESCO)",
      "Los paisajes de oasis y desierto en torno a Bou Saada",
      "La costa mediterránea en Béjaïa",
      "Argel, la capital histórica"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "De Argel a Constantina",
        "body": "Llegada a Argel y traslado a Constantina: los puentes colgantes, la mezquita Emir Abdelkader y el casco antiguo. Noche en Constantina.",
        "stops": [
          {
            "place": "Los puentes de Constantina",
            "text": "La «Ciudad de los Puentes», tendida sobre el vertiginoso desfiladero del Rhumel, con la pasarela de Sidi M'Cid suspendida muy por encima."
          },
          {
            "place": "La Mezquita Emir Abdelkader",
            "text": "Una de las mezquitas más grandes de África, cuyos minaretes gemelos son un hito moderno de Constantina."
          },
          {
            "place": "El casco antiguo de Souika",
            "text": "Las estrechas callejuelas de la antigua medina de Constantina, aferradas a la roca."
          }
        ]
      },
      {
        "day": 2,
        "title": "De Constantina a Sétif",
        "body": "Ruta hacia Sétif y las ruinas romanas de Djémila, Patrimonio de la UNESCO, con un paseo por el centro de la ciudad. Noche en Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Una ciudad romana Patrimonio de la Humanidad en montañas verdes, magníficamente conservada — foro, templos y un teatro en pendiente."
          },
          {
            "place": "Los mosaicos de Djémila",
            "text": "Mosaicos in situ entre los más ricos del mundo romano, expuestos en el museo del yacimiento."
          },
          {
            "place": "Aïn El Fouara, Sétif",
            "text": "La querida fuente de 1898 en el corazón de la ciudad, símbolo perdurable de Sétif."
          }
        ]
      },
      {
        "day": 3,
        "title": "De Sétif a Batna",
        "body": "Continuación hacia Batna y la ciudad romana de Timgad, Patrimonio de la UNESCO, con tiempo para el patrimonio local. Noche en Batna.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonia de Trajano del año 100 d.C., trazada en cuadrícula — la «Pompeya del Aurès», extendida sobre la llanura abierta."
          },
          {
            "place": "El Arco de Trajano",
            "text": "El arco triunfal que enmarca la calle principal de Timgad — la silueta icónica de la ciudad."
          },
          {
            "place": "La biblioteca y el teatro de Timgad",
            "text": "Las ruinas de una infrecuente biblioteca pública romana y un teatro de 3.500 asientos que aún hoy se sigue usando."
          }
        ]
      },
      {
        "day": 4,
        "title": "De Batna a Bou Saada por Biskra",
        "body": "Paso por Biskra, puerta del Sáhara, con sus palmerales y su paisaje de oasis, y continuación hasta Bou Saada y sus mercados tradicionales. Noche en Bou Saada.",
        "stops": [
          {
            "place": "Los palmerales de Biskra",
            "text": "La «Reina del Ziban» — un gran oasis de palmeras datileras que marca el verdadero inicio del Sahara."
          },
          {
            "place": "Bou Saada",
            "text": "La «Ciudad de la Felicidad», una localidad oasis que los pintores adoran desde hace mucho tiempo."
          },
          {
            "place": "Los zocos de Bou Saada",
            "text": "Mercados tradicionales de plata, lana y dátiles."
          }
        ]
      },
      {
        "day": 5,
        "title": "De Bou Saada a Argel",
        "body": "Visita de la zauia de El Hamel y su entorno, y traslado a Argel con la tarde libre. Noche en Argel.",
        "stops": [
          {
            "place": "La zauia de El Hamel",
            "text": "Un santuario sufí rahmaniyya y escuela coránica en lo alto de una colina sobre Bou Saada — tranquilo, austero y panorámico."
          },
          {
            "place": "Bou Saada y las estribaciones de Ouled Naïl",
            "text": "La «ciudad de la felicidad» — un oasis de palmeras al pie de colinas ocres y desnudas, y localidad de pintores desde el siglo XIX."
          },
          {
            "place": "La carretera hacia el norte, a Argel",
            "text": "Saliendo de la estepa a través de la llanura del Hodna y cruzando el Tell Atlas, con llegada a la capital para una tarde libre."
          }
        ]
      },
      {
        "day": 6,
        "title": "Béjaïa y salida",
        "body": "Excursión de un día a Béjaïa — la fortaleza, Cap Carbon y las vistas de la costa — antes del traslado al aeropuerto.",
        "stops": [
          {
            "place": "El fuerte de Gouraya, Béjaïa",
            "text": "Un fuerte en lo alto sobre Béjaïa con amplias vistas de la costa cabilia."
          },
          {
            "place": "Cap Carbon",
            "text": "Un cabo espectacular y su faro, en una de las costas más bellas del Mediterráneo."
          },
          {
            "place": "La corniche de Béjaïa",
            "text": "La carretera de acantilados entre Gouraya y Cap Carbon, sobre las calas que dieron fama a este tramo de la costa cabilia."
          }
        ]
      }
    ],
    "includes": [
      "Recepción en el aeropuerto y traslados",
      "Vehículo con aire acondicionado",
      "Alojamiento 5 noches en hotel",
      "Desayuno diario",
      "Guía turístico autorizado",
      "Todas las entradas",
      "Excursión de un día a Béjaïa"
    ],
    "excludes": [
      "Vuelos internacionales",
      "Almuerzos y cenas",
      "Gastos personales",
      "Seguro de viaje",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Primavera y otoño"
      },
      {
        "label": "Ritmo",
        "value": "De moderado a intenso, con etapas diarias"
      },
      {
        "label": "Estilo",
        "value": "Privado y guiado, 5 noches con desayuno"
      },
      {
        "label": "Equipaje",
        "value": "Protección solar, calzado resistente y sombrero"
      }
    ],
    "faqs": [
      {
        "q": "¿Qué sitios UNESCO incluye?",
        "a": "Las ciudades romanas de Djémila y Timgad."
      },
      {
        "q": "¿Se conduce mucho?",
        "a": "Sí: es una ruta itinerante por el este, con traslados panorámicos cada día."
      },
      {
        "q": "¿La parte de desierto incluye vivac?",
        "a": "No. Se llega a la puerta del Sáhara en torno a Bou Saada y Biskra, sin campamentos en el desierto profundo."
      },
      {
        "q": "¿Está incluido el desayuno?",
        "a": "Sí, el desayuno diario, además de la excursión a Béjaïa y todas las entradas."
      }
    ]
  },
  "djanet-ghardaia-desert-2-days": {
    "title": "Djanet y Ghardaïa — 6 días de desierto y patrimonio",
    "duration": "6 días · 5 noches",
    "hook": "Seis días que reúnen las dos caras del Sáhara argelino: las ciudades del M'Zab Patrimonio de la UNESCO y el gran desierto en torno a Djanet.",
    "full": true,
    "seoTitle": "Djanet y Ghardaïa 6 días — Desierto y M'Zab",
    "seoDescription": "Circuito privado de 6 días por el Sáhara argelino: el Tadrart Rojo y el arte rupestre del Tassili en Djanet, vivac bajo las estrellas y el valle del M'Zab.",
    "overview": "El viaje definitivo por el Sáhara argelino, que reúne los dos grandes mundos del desierto. En torno a Djanet se exploran la roca roja esculpida del Tadrart, las galerías prehistóricas del Tassili n'Ajjer y las noches en campamento con un equipo tuareg. Después se sube hacia el norte, a Ghardaïa y el valle del M'Zab, Patrimonio de la UNESCO, donde las ciudades-oasis fortificadas conservan intacta su vida medieval. Dos Sáharas UNESCO en un solo viaje, en 4×4 y bajo las estrellas.",
    "highlights": [
      "El Tadrart Rojo y sus formaciones de roca roja",
      "El arte rupestre prehistórico del Tassili n'Ajjer (UNESCO)",
      "Noches de campamento en el Sáhara",
      "La cultura tuareg y la ceremonia del té",
      "Las ciudades del valle del M'Zab (UNESCO)",
      "Pistas en 4×4 y atardeceres sobre las dunas"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada a Djanet",
        "body": "Recepción en el aeropuerto de Djanet y traslado a una casa de huéspedes o un campamento, con una salida al atardecer a las dunas cercanas y una cena sahariana tradicional.",
        "stops": [
          {
            "place": "El aeropuerto de Tiska, Djanet",
            "text": "Recibimiento en el aeropuerto más austral de Argelia y traslado a través de los palmerales — 30 km del asfalto al oasis."
          },
          {
            "place": "Djanet y las dunas al atardecer",
            "text": "Una localidad oasis tuareg bajo acantilados rojos, con una primera excursión al atardecer a las dunas cercanas."
          },
          {
            "place": "Una cena sahariana de bienvenida",
            "text": "Taguella cocida en la arena con un tayín y té tuareg, servidos en el campamento o la casa de huéspedes en tu primera noche en el sur."
          }
        ]
      },
      {
        "day": 2,
        "title": "El Tadrart Rojo",
        "body": "Jornada en 4×4 por el Tadrart entre formaciones rocosas y grabados antiguos, con pícnic en el desierto, atardecer sobre las dunas rojas y noche de campamento bajo las estrellas.",
        "stops": [
          {
            "place": "El Tadrart Rouge",
            "text": "Cañones y arcos de arenisca anaranjada esculpidos por el viento — uno de los paisajes más cinematográficos del Sahara."
          },
          {
            "place": "Arte rupestre prehistórico",
            "text": "Pinturas y grabados de pastores, cazadores y fauna de un Sahara verde, de hasta unos 10.000 años de antigüedad — más antiguos que las pirámides."
          },
          {
            "place": "Dunas rojas y campamento bajo las estrellas",
            "text": "Un picnic en el desierto, atardecer sobre las dunas rojas y una noche de campamento bajo las estrellas."
          }
        ]
      },
      {
        "day": 3,
        "title": "El Tassili n'Ajjer",
        "body": "Descubrimiento de la meseta del Tassili y sus pinturas rupestres, caminando entre cañones y paisajes de arenisca, con cena y noche en el campamento.",
        "stops": [
          {
            "place": "La meseta del Tassili n'Ajjer",
            "text": "Un vasto «bosque de roca» de arenisca, declarado Patrimonio de la Humanidad por albergar una de las mayores concentraciones de arte prehistórico del mundo."
          },
          {
            "place": "Las pinturas rupestres del Tassili",
            "text": "Miles de pinturas de pastores y fauna de un Sahara más húmedo, a las que se llega caminando por cañones."
          },
          {
            "place": "Cañones y torres de arenisca",
            "text": "Pináculos erosionados y gargantas que parecen de otro planeta."
          }
        ]
      },
      {
        "day": 4,
        "title": "Oasis y cultura del desierto",
        "body": "Visita de un oasis local y sus palmerales, encuentro con una comunidad tuareg en torno a la ceremonia del té y regreso a Djanet para pasar la noche.",
        "stops": [
          {
            "place": "Un oasis y sus palmerales",
            "text": "Huertos umbríos y canales de riego en pleno desierto."
          },
          {
            "place": "Ceremonia del té tuareg",
            "text": "Los tres vasos rituales de té sahariano con una familia tuareg — la cultura viva del extremo sur."
          },
          {
            "place": "Los antiguos ksour de Djanet",
            "text": "Los tres poblados de adobe apilados — Azellouaz, El Mihan y Adjahil — en torno a los cuales creció el oasis moderno."
          }
        ]
      },
      {
        "day": 5,
        "title": "Traslado a Ghardaïa",
        "body": "Viaje hasta Ghardaïa, en el valle del M'Zab, alojamiento en una casa tradicional y paseo vespertino por el casco antiguo.",
        "stops": [
          {
            "place": "El viaje hacia el norte, al M'Zab",
            "text": "El largo traslado desde el extremo sur, unos 1.000 km, del Tassili al borde del Sahara septentrional."
          },
          {
            "place": "Una casa de huéspedes tradicional del M'Zab",
            "text": "Una casa mozabita restaurada de muros gruesos, patio interior y terraza en la azotea — dentro del casco antiguo y no en la periferia."
          },
          {
            "place": "Paseo por el casco antiguo de Ghardaïa",
            "text": "Una tarde por las callejuelas de la ciudad colina del M'Zab tras el viaje hacia el norte."
          }
        ]
      },
      {
        "day": 6,
        "title": "El valle del M'Zab y salida",
        "body": "Visita de Beni Isguen, El Atteuf y Melika — mezquitas, zocos y talleres — con almuerzo antes del traslado al aeropuerto.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La ciudad sagrada y amurallada del M'Zab, a la que se entra por su antigua puerta, donde el vestuario y la fotografía siguen las costumbres locales."
          },
          {
            "place": "El Atteuf",
            "text": "La más antigua de las cinco ciudades del M'Zab, cuya sencilla mezquita de Sidi Brahim impresionó tanto a Le Corbusier que llegó a marcar la arquitectura moderna."
          },
          {
            "place": "Melika",
            "text": "Una localidad del M'Zab en lo alto de una colina, con tumbas de marabutos y amplias vistas sobre el valle."
          }
        ]
      }
    ],
    "includes": [
      "Recogida y traslados aeropuerto/hotel",
      "Vehículo con aire acondicionado / 4×4",
      "Guía local profesional",
      "Alojamiento según programa",
      "Comidas indicadas (almuerzo y cena)",
      "Entradas a los sitios",
      "Excursión al desierto en Djanet"
    ],
    "excludes": [
      "Vuelos internos e internacionales",
      "Gastos personales",
      "Bebidas no mencionadas",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "De noviembre a febrero"
      },
      {
        "label": "Ritmo",
        "value": "Moderado — jornadas en 4×4 y caminatas cortas"
      },
      {
        "label": "Estilo",
        "value": "Privado y guiado, 5 noches"
      },
      {
        "label": "Equipaje",
        "value": "Abrigo para las noches, frontal y ropa cubierta para el M'Zab"
      }
    ],
    "faqs": [
      {
        "q": "¿Cómo se llega a Djanet?",
        "a": "En vuelo interno desde Argel (no incluido); le asesoramos sobre los horarios."
      },
      {
        "q": "¿Ambas zonas son Patrimonio de la UNESCO?",
        "a": "Sí: el Tassili n'Ajjer y el valle del M'Zab, ambos inscritos en 1982."
      },
      {
        "q": "¿Dónde se duerme?",
        "a": "En campamentos del desierto en torno a Djanet y en alojamiento en Ghardaïa o sus alrededores."
      },
      {
        "q": "¿Es exigente físicamente?",
        "a": "Moderado: sobre todo trayectos en 4×4, con caminatas cortas y subidas a dunas a su ritmo."
      }
    ]
  },
  "algeria-intensive-discovery-tour": {
    "title": "Descubrimiento intensivo de Argelia — 5 días",
    "duration": "5 días · 4 noches",
    "hook": "Cinco días a ritmo intenso para ver lo máximo del país: capital, costa romana y primera aproximación al Sáhara.",
    "full": true,
    "seoTitle": "Descubrimiento intensivo de Argelia — 5 días",
    "seoDescription": "Circuito privado e intensivo de 5 días: la Casbah de Argel, Tipaza romana, Constantina, Timgad, Djémila y una excursión al desierto en Bou Saada.",
    "overview": "Para viajeros con poco tiempo y mucha curiosidad, estos cinco días intensivos recorren lo más destacado de Argelia: la Casbah, el museo del Bardo y el Monumento al Mártir en Argel; la costa romana de Tipaza y Cherchell; los puentes de Constantina; las ciudades romanas de Timgad y Djémila, Patrimonio de la UNESCO; y una excursión al desierto en Bou Saada. El ritmo es vivo, con guía autorizado y pensión completa, para concentrar los iconos del país en un solo viaje.",
    "highlights": [
      "La Casbah, el museo del Bardo y el Monumento al Mártir",
      "Tipaza romana, Cherchell y el mausoleo de Cleopatra Selene",
      "Los puentes colgantes y los palacios de Constantina",
      "Los sitios romanos UNESCO de Timgad y Djémila",
      "Una excursión al desierto en Bou Saada"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Argel",
        "body": "Recepción en el aeropuerto y traslado, y jornada en la capital: el museo nacional del Bardo, un paseo por la Casbah UNESCO y el Monumento al Mártir con su vista sobre la ciudad.",
        "stops": [
          {
            "place": "El Museo del Bardo",
            "text": "Prehistoria y etnografía en una elegante villa morisca, desde reproducciones de arte rupestre sahariano hasta joyas de plata y la Argelia cotidiana."
          },
          {
            "place": "La Casba de Argel",
            "text": "La ciudadela otomana declarada Patrimonio de la Humanidad — un empinado laberinto blanco de palacios, mezquitas y casas de patio que trepa sobre la bahía."
          },
          {
            "place": "El Monumento a los Mártires (Maqam Echahid)",
            "text": "Tres esbeltas hojas de palmera de hormigón alzadas en 1982 sobre la ciudad, en homenaje a los caídos de la guerra de independencia."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza y Cherchell",
        "body": "Hacia el oeste por la costa: las ruinas romanas de Tipaza, el Mausoleo real de Mauritania y el museo y el viejo puerto de Cherchell.",
        "stops": [
          {
            "place": "La Tipaza romana",
            "text": "Un puerto romano declarado Patrimonio de la Humanidad por la UNESCO, extendido a lo largo del Mediterráneo — basílicas, termas y un teatro con las olas a sus pies."
          },
          {
            "place": "El Mausoleo Real de Mauritania",
            "text": "Un gran tambor de piedra sobre una colina frente al mar — la tumba, del siglo I a.C., del rey bereber Juba II y de Cleopatra Selene, hija de Cleopatra de Egipto."
          },
          {
            "place": "Cherchell (la antigua Cesarea)",
            "text": "La antigua capital de Juba II, cuyo museo alberga algunos de los mejores mosaicos y esculturas romanas y griegas de Argelia."
          }
        ]
      },
      {
        "day": 3,
        "title": "Constantina y Timgad",
        "body": "Hacia el este: los puentes colgantes de Constantina y el palacio Ahmed Bey, y continuación hasta la ciudad romana de Timgad.",
        "stops": [
          {
            "place": "Los puentes de Constantina",
            "text": "La «Ciudad de los Puentes», tendida sobre el vertiginoso desfiladero del Rhumel, con la pasarela de Sidi M'Cid suspendida muy por encima."
          },
          {
            "place": "El Palacio de Ahmed Bey",
            "text": "El palacio otomano de principios del siglo XIX del último bey, con galerías pintadas y patios en sombra."
          },
          {
            "place": "Timgad",
            "text": "La colonia de Trajano del año 100 d.C., trazada en cuadrícula — la «Pompeya del Aurès», extendida sobre la llanura abierta."
          }
        ]
      },
      {
        "day": 4,
        "title": "Djémila y Sétif",
        "body": "La ciudad romana de Djémila, Patrimonio de la UNESCO, con su foro, su teatro y sus mosaicos, y la fuente de Aïn El Fouara en Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Una ciudad romana Patrimonio de la Humanidad en montañas verdes, magníficamente conservada — foro, templos y un teatro en pendiente."
          },
          {
            "place": "Los mosaicos de Djémila",
            "text": "Mosaicos in situ entre los más ricos del mundo romano, expuestos en el museo del yacimiento."
          },
          {
            "place": "Aïn El Fouara, Sétif",
            "text": "La querida fuente de 1898 en el corazón de la ciudad, símbolo perdurable de Sétif."
          }
        ]
      },
      {
        "day": 5,
        "title": "Bou Saada y regreso",
        "body": "Hacia el sur hasta Bou Saada, puerta del Sáhara, con su oasis y una excursión entre las dunas, antes del regreso a Argel.",
        "stops": [
          {
            "place": "El oasis de Bou Saada",
            "text": "La puerta del Sahara, con una excursión al desierto entre las dunas."
          },
          {
            "place": "El Moulin Ferrero",
            "text": "El antiguo molino sobre el Oued Bou Saada, junto al desfiladero y los huertos de palmeras que pintó Étienne Dinet."
          },
          {
            "place": "Las dunas al sur de Bou Saada",
            "text": "Una breve excursión a la arena — el primer Sahara auténtico en la ruta hacia el sur, y el punto de inflexión del día."
          }
        ]
      }
    ],
    "includes": [
      "Recepción en el aeropuerto y traslados",
      "Vehículo turístico con aire acondicionado",
      "Alojamiento en hoteles seleccionados",
      "Pensión completa durante el circuito",
      "Guía turístico autorizado",
      "Entradas a los sitios",
      "Excursión al desierto en Bou Saada"
    ],
    "excludes": [
      "Vuelos internacionales",
      "Gastos personales"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Primavera y otoño"
      },
      {
        "label": "Ritmo",
        "value": "Intenso — jornadas completas con traslados diarios"
      },
      {
        "label": "Estilo",
        "value": "Privado y guiado, 4 noches con pensión completa"
      },
      {
        "label": "Equipaje",
        "value": "Calzado cómodo, protección solar y ropa cubierta para la Casbah"
      }
    ],
    "faqs": [
      {
        "q": "¿El ritmo es exigente?",
        "a": "Sí, es intensivo por diseño, con salidas tempranas y desplazamientos diarios."
      },
      {
        "q": "¿Qué sitios UNESCO incluye?",
        "a": "Timgad, Djémila y la Casbah de Argel."
      },
      {
        "q": "¿Están incluidas las comidas?",
        "a": "Sí: todas las comidas durante el circuito, además de las entradas y la excursión de Bou Saada."
      },
      {
        "q": "¿Se puede suavizar el ritmo?",
        "a": "Sí. Díganoslo y lo convertimos en un itinerario más largo y relajado."
      }
    ]
  },
  "the-soul-of-algeria": {
    "title": "El alma de Argelia — 4 días",
    "duration": "4 días · 3 noches",
    "hook": "Cuatro días entre la capital, la costa romana y el interior, para captar el carácter del país más que su lista de lugares.",
    "full": true,
    "seoTitle": "El alma de Argelia — circuito de 4 días",
    "seoDescription": "Circuito privado de 4 días por Argelia: la Casbah y los museos de Argel, las ruinas romanas de Tipaza y Cherchell y el oasis de Bou Saada.",
    "overview": "Una introducción equilibrada de cuatro días al abanico argelino. En Argel se visitan el museo del Bardo, Notre-Dame d'Afrique, el Monumento al Mártir y la Casbah UNESCO; después, las ruinas romanas de Tipaza junto al mar y el museo de Cherchell; y por último la ciudad-oasis de Bou Saada, al borde del Sáhara. Cultura, antigüedad y desierto en un viaje corto y cómodo, con hoteles incluidos.",
    "highlights": [
      "El museo del Bardo y Notre-Dame d'Afrique",
      "El Monumento al Mártir y la Casbah UNESCO",
      "Tipaza romana y el museo de Cherchell",
      "La ciudad-oasis de Bou Saada",
      "Un viaje corto a través de culturas y paisajes"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Argel",
        "body": "El museo del Bardo y sus colecciones, la basílica de Notre-Dame d'Afrique sobre la bahía y el Monumento al Mártir.",
        "stops": [
          {
            "place": "El Museo del Bardo",
            "text": "Prehistoria y etnografía en una elegante villa morisca, desde reproducciones de arte rupestre sahariano hasta joyas de plata y la Argelia cotidiana."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Una basílica del siglo XIX — «Nuestra Señora de África» — en los acantilados sobre la bahía, dedicada por igual a musulmanes y cristianos."
          },
          {
            "place": "El Monumento a los Mártires (Maqam Echahid)",
            "text": "Tres esbeltas hojas de palmera de hormigón alzadas en 1982 sobre la ciudad, en homenaje a los caídos de la guerra de independencia."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza y Cherchell",
        "body": "El Mausoleo real de Mauritania, el parque arqueológico romano de Tipaza y el museo de Cherchell.",
        "stops": [
          {
            "place": "El Mausoleo Real de Mauritania",
            "text": "Un gran tambor de piedra sobre una colina frente al mar — la tumba, del siglo I a.C., del rey bereber Juba II y de Cleopatra Selene, hija de Cleopatra de Egipto."
          },
          {
            "place": "La Tipaza romana",
            "text": "Un puerto romano declarado Patrimonio de la Humanidad por la UNESCO, extendido a lo largo del Mediterráneo — basílicas, termas y un teatro con las olas a sus pies."
          },
          {
            "place": "Cherchell (la antigua Cesarea)",
            "text": "La antigua capital de Juba II, cuyo museo alberga algunos de los mejores mosaicos y esculturas romanas y griegas de Argelia."
          }
        ]
      },
      {
        "day": 3,
        "title": "Bou Saada",
        "body": "Hacia el sur hasta Bou Saada: la fortaleza y sus panorámicas, el museo Nasreddine Dinet y su mezquita histórica.",
        "stops": [
          {
            "place": "Panorámicas de Bou Saada",
            "text": "La fortaleza y los miradores sobre la localidad oasis."
          },
          {
            "place": "El Museo Nasreddine Dinet",
            "text": "El museo del pintor orientalista que dio fama a Bou Saada, con sus obras y objetos personales."
          },
          {
            "place": "La mezquita histórica",
            "text": "La mezquita del casco antiguo, en el corazón de Bou Saada."
          }
        ]
      },
      {
        "day": 4,
        "title": "Argel",
        "body": "Regreso a Argel para la Casbah UNESCO, el jardín botánico de Hamma y el museo de los Muyahidines.",
        "stops": [
          {
            "place": "La Casba de Argel",
            "text": "La ciudadela otomana declarada Patrimonio de la Humanidad — un empinado laberinto blanco de palacios, mezquitas y casas de patio que trepa sobre la bahía."
          },
          {
            "place": "El Jardín Botánico de Hamma",
            "text": "El gran Jardin d'Essai del siglo XIX, uno de los mejores jardines botánicos de África."
          },
          {
            "place": "El Museo de los Muyahidines",
            "text": "La historia de los combatientes de la independencia, contada a los pies del Monumento a los Mártires."
          }
        ]
      }
    ],
    "includes": [
      "Alojamiento en hoteles de 4 estrellas con desayuno",
      "Almuerzo tradicional",
      "Transporte privado",
      "Guía local"
    ],
    "excludes": [],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Primavera y otoño; octubre–abril para Bou Saada"
      },
      {
        "label": "Ritmo",
        "value": "Moderado"
      },
      {
        "label": "Estilo",
        "value": "Privado y guiado, 3 noches en hoteles de 4 estrellas"
      },
      {
        "label": "Equipaje",
        "value": "Ropa cubierta para la Casbah, protección solar y calzado cómodo"
      }
    ],
    "faqs": [
      {
        "q": "¿Qué sitios UNESCO incluye?",
        "a": "Tipaza y la Casbah de Argel."
      },
      {
        "q": "¿Está lejos Bou Saada?",
        "a": "A unas horas al sur de Argel; el transporte está incluido."
      },
      {
        "q": "¿Está incluido el alojamiento?",
        "a": "Sí: hoteles de 4 estrellas con desayuno y un almuerzo tradicional."
      },
      {
        "q": "¿Es adecuado para un viaje corto?",
        "a": "Sí: reúne tres regiones distintas en solo cuatro días."
      }
    ]
  },
  "the-culture-and-heritage-of-algeria": {
    "title": "Cultura y patrimonio de Argelia — 8 días",
    "duration": "8 días · 7 noches",
    "hook": "Ocho días por la cultura y la historia argelinas — la capital y su Casbah, Tipaza y Djémila, los puentes de Constantina y el oasis de Bou Saada.",
    "full": true,
    "seoTitle": "Cultura y patrimonio de Argelia — 8 días",
    "seoDescription": "Circuito privado de 8 días: Argel y su Casbah, Tipaza y Djémila romanas, los puentes de Constantina y el oasis de Bou Saada. Guía y hoteles incluidos.",
    "overview": "Un circuito cultural más profundo, de ocho días. Desde Argel y su Casbah se sigue la costa romana en Tipaza y Cherchell, se cruza hasta Constantina y sus gargantas, se recorre la ciudad romana de Djémila en su ladera y se termina en la calma del oasis de Bou Saada. Combina tres sitios de rango UNESCO con ciudades vivas y el borde del desierto, a un ritmo que deja tiempo para entender cada lugar.",
    "highlights": [
      "Argel, sus museos y la Casbah histórica",
      "Tipaza romana, Cherchell y Djémila",
      "Constantina y su puente colgante",
      "El encanto de oasis de Bou Saada",
      "Una mezcla de cultura, historia y paisaje"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada a Argel",
        "body": "Recepción en el aeropuerto, alojamiento en un hotel céntrico, paseo vespertino por la ciudad y cena.",
        "stops": [
          {
            "place": "El aeropuerto Houari Boumediene",
            "text": "Recibimiento a la llegada y traslado a un hotel del centro, con todos los trámites resueltos."
          },
          {
            "place": "Un recorrido nocturno por la ciudad",
            "text": "Una primera vuelta de orientación al encenderse las luces — las arcadas del paseo marítimo, la Plaza de los Mártires y la Grande Poste."
          },
          {
            "place": "Cena en Argel",
            "text": "Una primera mesa argelina en el centro, mientras se repasan los ocho días por delante."
          }
        ]
      },
      {
        "day": 2,
        "title": "Argel cultural",
        "body": "El museo del Bardo, la Casbah Patrimonio de la UNESCO y el Monumento al Mártir (Maqam Echahid).",
        "stops": [
          {
            "place": "El Museo del Bardo",
            "text": "Prehistoria y etnografía en una elegante villa morisca, desde reproducciones de arte rupestre sahariano hasta joyas de plata y la Argelia cotidiana."
          },
          {
            "place": "La Casba de Argel",
            "text": "La ciudadela otomana declarada Patrimonio de la Humanidad — un empinado laberinto blanco de palacios, mezquitas y casas de patio que trepa sobre la bahía."
          },
          {
            "place": "El Monumento a los Mártires (Maqam Echahid)",
            "text": "Tres esbeltas hojas de palmera de hormigón alzadas en 1982 sobre la ciudad, en homenaje a los caídos de la guerra de independencia."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza y Cherchell",
        "body": "El Mausoleo real de Mauritania, el parque arqueológico de Tipaza y el museo de Cherchell.",
        "stops": [
          {
            "place": "El Mausoleo Real de Mauritania",
            "text": "Un gran tambor de piedra sobre una colina frente al mar — la tumba, del siglo I a.C., del rey bereber Juba II y de Cleopatra Selene, hija de Cleopatra de Egipto."
          },
          {
            "place": "La Tipaza romana",
            "text": "Un puerto romano declarado Patrimonio de la Humanidad por la UNESCO, extendido a lo largo del Mediterráneo — basílicas, termas y un teatro con las olas a sus pies."
          },
          {
            "place": "Cherchell (la antigua Cesarea)",
            "text": "La antigua capital de Juba II, cuyo museo alberga algunos de los mejores mosaicos y esculturas romanas y griegas de Argelia."
          }
        ]
      },
      {
        "day": 4,
        "title": "Constantina",
        "body": "El puente Sidi M'Cid, el palacio Ahmed Bey, la mezquita Emir Abdelkader y un paseo por la ciudad.",
        "stops": [
          {
            "place": "Los puentes de Constantina",
            "text": "La «Ciudad de los Puentes», tendida sobre el vertiginoso desfiladero del Rhumel, con la pasarela de Sidi M'Cid suspendida muy por encima."
          },
          {
            "place": "El Palacio de Ahmed Bey",
            "text": "El palacio otomano de principios del siglo XIX del último bey, con galerías pintadas y patios en sombra."
          },
          {
            "place": "La Mezquita Emir Abdelkader",
            "text": "Una de las mezquitas más grandes de África, cuyos minaretes gemelos son un hito moderno de Constantina."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "El sitio romano de Djémila, Patrimonio de la UNESCO — su teatro y sus templos — con un almuerzo local.",
        "stops": [
          {
            "place": "El teatro y los templos de Djémila",
            "text": "Los monumentos mejor conservados de la ciudad romana Patrimonio de la Humanidad, con un almuerzo local."
          },
          {
            "place": "El Arco de Caracalla",
            "text": "El arco triunfal del año 216 d.C. en el límite del nuevo foro de Djémila — la imagen por la que se conoce el yacimiento."
          },
          {
            "place": "Los mosaicos de Djémila",
            "text": "Mosaicos in situ entre los más ricos del mundo romano, expuestos en el museo del yacimiento."
          }
        ]
      },
      {
        "day": 6,
        "title": "Hacia Bou Saada",
        "body": "La carretera de Constantina a Bou Saada, alojamiento y tiempo libre, y cena tradicional con música local.",
        "stops": [
          {
            "place": "La llanura del Hodna",
            "text": "La carretera al suroeste de Constantina, a través de la alta estepa y los salares del Chott El Hodna."
          },
          {
            "place": "Bou Saada",
            "text": "La «ciudad de la felicidad» — un oasis de palmeras al pie de la sierra de Ouled Naïl, final del trayecto."
          },
          {
            "place": "Una cena con música local",
            "text": "Comida tradicional y música sahariana en vivo en la casa de huéspedes — la velada en torno a la que gira todo el día."
          }
        ]
      },
      {
        "day": 7,
        "title": "Bou Saada y regreso",
        "body": "La cascada de Bou Saada, el molino Ferrero y la zauia de El Hamel, y regreso a Argel.",
        "stops": [
          {
            "place": "La cascada de Bou Saada",
            "text": "Una cascada natural en el oasis — el rincón verde y fresco de la «Ciudad de la Felicidad»."
          },
          {
            "place": "El Molino Ferrero",
            "text": "Un molino histórico junto al río, un hito del viejo Bou Saada."
          },
          {
            "place": "La zauia de El Hamel",
            "text": "Un santuario sufí rahmaniyya y escuela coránica en lo alto de una colina sobre Bou Saada — tranquilo, austero y panorámico."
          }
        ]
      },
      {
        "day": 8,
        "title": "Salida",
        "body": "Desayuno, salida del hotel y traslado al aeropuerto de Argel.",
        "stops": [
          {
            "place": "Una mañana libre",
            "text": "Tiempo para lo que la semana haya dejado pendiente en la capital, o un último paseo por el paseo marítimo, según tu vuelo."
          },
          {
            "place": "Últimas compras",
            "text": "Plata cabilia, cuero tuareg, dátiles y repostería en los talleres artesanales del centro."
          },
          {
            "place": "El aeropuerto Houari Boumediene",
            "text": "Salida del hotel, traslado privado y asistencia durante el check-in."
          }
        ]
      }
    ],
    "includes": [
      "Alojamiento en hoteles de 4 estrellas con desayuno",
      "Transporte privado",
      "Almuerzo tradicional",
      "Todas las tasas incluidas"
    ],
    "excludes": [],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Primavera y otoño"
      },
      {
        "label": "Ritmo",
        "value": "Moderado, itinerante"
      },
      {
        "label": "Estilo",
        "value": "Privado y guiado, 7 noches en hoteles de 4 estrellas"
      },
      {
        "label": "Equipaje",
        "value": "Calzado cómodo, ropa cubierta para la Casbah y protección solar"
      }
    ],
    "faqs": [
      {
        "q": "¿Qué sitios UNESCO incluye?",
        "a": "Tipaza, Djémila y la Casbah de Argel."
      },
      {
        "q": "¿Cuánto se viaja?",
        "a": "Es un itinerario por el norte y el borde sahariano, con traslados cómodos entre etapas."
      },
      {
        "q": "¿Está incluido el alojamiento?",
        "a": "Sí: hoteles de 4 estrellas con desayuno, transporte privado y un almuerzo tradicional."
      },
      {
        "q": "¿En qué se diferencia del circuito de 10 días?",
        "a": "Se concentra en el norte y Bou Saada, sin llegar hasta el M'Zab."
      }
    ]
  },
  "algeria-beyond-expectations": {
    "title": "Argelia más allá de lo esperado — 10 días",
    "duration": "10 días · 9 noches",
    "hook": "Diez días para el país en toda su extensión, del litoral mediterráneo a los oasis saharianos, a un ritmo que deja tiempo para mirar.",
    "full": true,
    "seoTitle": "Argelia más allá de lo esperado — 10 días",
    "seoDescription": "Gran circuito privado de 10 días: del Mediterráneo al M'Zab — Tipaza, Djémila, Timgad, Constantina y Ghardaïa, con quad, camello y sandboard en el Sáhara.",
    "overview": "Nuestro gran circuito más aventurero. En diez días se enlazan Argel y la Tipaza romana, las ciudades romanas de Djémila y Timgad, las mesetas de Sétif y los puentes de Constantina, para terminar en el valle del M'Zab, en Ghardaïa — con una excursión sahariana de quad, camello y sandboard como colofón. Cuatro sitios UNESCO y el barrido completo del norte al desierto, con aventura y cultura a partes iguales.",
    "highlights": [
      "Argel y las ruinas romanas de Tipaza",
      "Constantina, la ciudad de los puentes",
      "Sétif, Djémila y la ciudad romana de Timgad",
      "La cultura del desierto del M'Zab en Ghardaïa",
      "Una excursión sahariana con quad, camello y sandboard"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Llegada a Argel",
        "body": "Recepción en el aeropuerto, alojamiento en el hotel y cena de bienvenida.",
        "stops": [
          {
            "place": "El aeropuerto Houari Boumediene",
            "text": "Recibimiento en llegadas y traslado a la ciudad — la parte práctica del primer día, resuelta para ti."
          },
          {
            "place": "La bahía de Argel",
            "text": "El trayecto de llegada bordeando el mar, con la capital blanca alzándose en terrazas sobre el puerto."
          },
          {
            "place": "Una cena de bienvenida",
            "text": "Una primera mesa argelina — chorba, pescado de la bahía o un tayín de pollo — mientras se repasan los diez días por delante."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza y Cherchell",
        "body": "Las ruinas romanas y el anfiteatro de Tipaza, el Mausoleo real de Mauritania, el museo de Cherchell y las vistas de la costa.",
        "stops": [
          {
            "place": "La Tipaza romana",
            "text": "Un puerto romano declarado Patrimonio de la Humanidad por la UNESCO, extendido a lo largo del Mediterráneo — basílicas, termas y un teatro con las olas a sus pies."
          },
          {
            "place": "El Mausoleo Real de Mauritania",
            "text": "Un gran tambor de piedra sobre una colina frente al mar — la tumba, del siglo I a.C., del rey bereber Juba II y de Cleopatra Selene, hija de Cleopatra de Egipto."
          },
          {
            "place": "Cherchell (la antigua Cesarea)",
            "text": "La antigua capital de Juba II, cuyo museo alberga algunos de los mejores mosaicos y esculturas romanas y griegas de Argelia."
          }
        ]
      },
      {
        "day": 3,
        "title": "Argel histórica",
        "body": "La Casbah Patrimonio de la UNESCO, el Monumento al Mártir y el Museo Nacional del Ejército.",
        "stops": [
          {
            "place": "La Casba de Argel",
            "text": "La ciudadela otomana declarada Patrimonio de la Humanidad — un empinado laberinto blanco de palacios, mezquitas y casas de patio que trepa sobre la bahía."
          },
          {
            "place": "El Monumento a los Mártires (Maqam Echahid)",
            "text": "Tres esbeltas hojas de palmera de hormigón alzadas en 1982 sobre la ciudad, en homenaje a los caídos de la guerra de independencia."
          },
          {
            "place": "El Museo Nacional del Ejército",
            "text": "La larga historia militar de Argelia, desde la Antigüedad hasta 1962, junto al Monumento a los Mártires."
          }
        ]
      },
      {
        "day": 4,
        "title": "Hacia Sétif",
        "body": "Traslado a Sétif y visita de las ruinas romanas de Djémila, Patrimonio de la UNESCO. Noche en Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Una ciudad romana Patrimonio de la Humanidad en montañas verdes, magníficamente conservada — foro, templos y un teatro en pendiente."
          },
          {
            "place": "Los mosaicos de Djémila",
            "text": "Mosaicos in situ entre los más ricos del mundo romano, expuestos en el museo del yacimiento."
          },
          {
            "place": "Sétif y la fuente de Ain El Fouara",
            "text": "La ciudad de los altos llanos a 1.100 m y su célebre fuente de mármol de 1898, donde se pasa la noche."
          }
        ]
      },
      {
        "day": 5,
        "title": "Constantina",
        "body": "Los puentes colgantes de Constantina, la mezquita Emir Abdelkader y el palacio Ahmed Bey. Noche en Constantina.",
        "stops": [
          {
            "place": "Los puentes de Constantina",
            "text": "La «Ciudad de los Puentes», tendida sobre el vertiginoso desfiladero del Rhumel, con la pasarela de Sidi M'Cid suspendida muy por encima."
          },
          {
            "place": "La Mezquita Emir Abdelkader",
            "text": "Una de las mezquitas más grandes de África, cuyos minaretes gemelos son un hito moderno de Constantina."
          },
          {
            "place": "El Palacio de Ahmed Bey",
            "text": "El palacio otomano de principios del siglo XIX del último bey, con galerías pintadas y patios en sombra."
          }
        ]
      },
      {
        "day": 6,
        "title": "Batna y Timgad",
        "body": "Ruta hacia Batna y la ciudad romana de Timgad, Patrimonio de la UNESCO, con el patrimonio local. Noche en Batna.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonia de Trajano del año 100 d.C., trazada en cuadrícula — la «Pompeya del Aurès», extendida sobre la llanura abierta."
          },
          {
            "place": "El Arco de Trajano",
            "text": "El arco triunfal que enmarca la calle principal de Timgad — la silueta icónica de la ciudad."
          },
          {
            "place": "La biblioteca y el teatro de Timgad",
            "text": "Las ruinas de una infrecuente biblioteca pública romana y un teatro de 3.500 asientos que aún hoy se sigue usando."
          }
        ]
      },
      {
        "day": 7,
        "title": "Hacia Ghardaïa",
        "body": "Larga ruta hacia el sur hasta el valle del M'Zab y alojamiento en una casa tradicional, con la tarde libre.",
        "stops": [
          {
            "place": "La carretera hacia el sur, sobre el Atlas",
            "text": "Saliendo del Tell, cruzando la alta estepa y descendiendo hacia el presáhara — el trayecto en el que Argelia cambia de clima."
          },
          {
            "place": "Ghardaïa",
            "text": "La ciudad principal del M'Zab, una pirámide de casas, Patrimonio de la Humanidad, que trepa hasta la mezquita y el minarete de su cima."
          },
          {
            "place": "Una casa de huéspedes tradicional en el M'Zab",
            "text": "Registro en una casa mozabita restaurada — muros gruesos, patio interior y terraza en la azotea — con una tarde libre."
          }
        ]
      },
      {
        "day": 8,
        "title": "Ghardaïa cultural",
        "body": "Las ciudades de El Atteuf, Beni Isguen y Melika, sus mezquitas y su arquitectura, los zocos y un almuerzo con una familia local.",
        "stops": [
          {
            "place": "El Atteuf",
            "text": "La más antigua de las cinco ciudades del M'Zab, cuya sencilla mezquita de Sidi Brahim impresionó tanto a Le Corbusier que llegó a marcar la arquitectura moderna."
          },
          {
            "place": "Beni Isguen",
            "text": "La ciudad sagrada y amurallada del M'Zab, a la que se entra por su antigua puerta, donde el vestuario y la fotografía siguen las costumbres locales."
          },
          {
            "place": "Melika",
            "text": "Una localidad del M'Zab en lo alto de una colina, con tumbas de marabutos y amplias vistas sobre el valle."
          }
        ]
      },
      {
        "day": 9,
        "title": "Regreso a Argel",
        "body": "Vuelta a Argel con el jardín botánico de Hamma, el museo del Bardo y Notre-Dame d'Afrique.",
        "stops": [
          {
            "place": "El Jardín Botánico de Hamma",
            "text": "El gran Jardin d'Essai del siglo XIX, uno de los mejores jardines botánicos de África."
          },
          {
            "place": "El Museo del Bardo",
            "text": "Prehistoria y etnografía en una elegante villa morisca, desde reproducciones de arte rupestre sahariano hasta joyas de plata y la Argelia cotidiana."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Una basílica del siglo XIX — «Nuestra Señora de África» — en los acantilados sobre la bahía, dedicada por igual a musulmanes y cristianos."
          }
        ]
      },
      {
        "day": 10,
        "title": "Salida",
        "body": "Desayuno y traslado al aeropuerto.",
        "stops": [
          {
            "place": "Una mañana libre en Argel",
            "text": "Lo que hayan dejado pendiente los diez días — el Jardin d'Essai, la mezquita de Ketchaoua o simplemente el paseo marítimo — según el horario de tu vuelo."
          },
          {
            "place": "Últimas compras",
            "text": "Plata cabilia, cuero tuareg, dátiles Deglet Nour y repostería, en la Rue Didouche Mourad o en los talleres de la Casba."
          },
          {
            "place": "El aeropuerto Houari Boumediene",
            "text": "El traslado privado de salida y asistencia durante el check-in."
          }
        ]
      }
    ],
    "includes": [
      "Alojamiento en hoteles de 4 estrellas con desayuno",
      "Transporte turístico con aire acondicionado",
      "Guía acompañante",
      "Guía local privado en los grandes sitios",
      "Todas las comidas durante la excursión al desierto",
      "Actividades en el desierto: quad, camello y sandboard"
    ],
    "excludes": [
      "Programas y actividades adicionales",
      "Propinas",
      "Almuerzos y cenas los demás días"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "De octubre a abril (lo mejor para el Sáhara)"
      },
      {
        "label": "Ritmo",
        "value": "Activo — circuito itinerante y actividades en el desierto"
      },
      {
        "label": "Estilo",
        "value": "Privado y guiado, 9 noches en hoteles de 4 estrellas"
      },
      {
        "label": "Equipaje",
        "value": "Capas de abrigo, calzado cerrado para el desierto y ropa cubierta"
      }
    ],
    "faqs": [
      {
        "q": "¿Qué actividades incluye en el desierto?",
        "a": "Quad, paseo en camello y sandboard durante la excursión sahariana, con todas las comidas incluidas en ella."
      },
      {
        "q": "¿Qué sitios UNESCO se visitan?",
        "a": "Tipaza, Djémila, Timgad y el valle del M'Zab, además de la Casbah de Argel."
      },
      {
        "q": "¿Es adecuado para viajeros activos?",
        "a": "Sí: combina el circuito cultural con un final activo en el desierto."
      },
      {
        "q": "¿En qué se diferencia del gran circuito de 10 días?",
        "a": "El recorrido general es similar, pero con una excursión sahariana centrada en las actividades en Ghardaïa."
      }
    ]
  },
  "bousaada-desert-tour": {
    "title": "Bou Saada — 2 días en el oasis",
    "duration": "2 días · 1 noche",
    "hook": "Dos días en Bou Saada, la ciudad de la felicidad — su cascada y el molino Ferrero, los mercados artesanales, una cena beduina y la zauia de El Hamel.",
    "full": true,
    "seoTitle": "Bou Saada 2 días — Escapada al oasis",
    "seoDescription": "Escapada privada de 2 días a Bou Saada desde Argel: la cascada y el molino Ferrero, los zocos artesanales, cena beduina con música y la zauia de El Hamel.",
    "overview": "Bou Saada, conocida desde antiguo como la ciudad de la felicidad, es la puerta clásica entre las altas mesetas y el Sáhara. En dos días se visitan su cascada natural y el histórico molino Ferrero, se recorren animados mercados artesanales, se comparte una cena beduina con música en directo y se descubre la zauia sufí de El Hamel. Una escapada fácil y llena de ambiente al sur argelino, a pocas horas de Argel.",
    "highlights": [
      "Bou Saada, la ciudad de la felicidad",
      "La cascada natural y el histórico molino Ferrero",
      "Los mercados artesanales tradicionales",
      "Una cena beduina con música en directo",
      "La zauia sufí de El Hamel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "De Argel a Bou Saada",
        "body": "Salida de Argel por la mañana en vehículo turístico y alojamiento en el hotel; por la tarde, la cascada natural, el histórico molino Ferrero y los mercados tradicionales, con una cena beduina y música local por la noche.",
        "stops": [
          {
            "place": "La cascada de Bou Saada",
            "text": "Una cascada natural en el oasis — el rincón verde y fresco de la «Ciudad de la Felicidad»."
          },
          {
            "place": "El Molino Ferrero",
            "text": "Un molino histórico junto al río, un hito del viejo Bou Saada."
          },
          {
            "place": "Los mercados tradicionales",
            "text": "Zocos de joyas de plata, lana y dátiles, con una cena beduina y música por la noche."
          }
        ]
      },
      {
        "day": 2,
        "title": "La zauia de El Hamel y regreso",
        "body": "Tras el desayuno, visita del santuario sufí de El Hamel en la montaña, con tiempo para las fotos y el paisaje, almuerzo local en Bou Saada y regreso a Argel por la tarde.",
        "stops": [
          {
            "place": "Las estribaciones de Ouled Naïl",
            "text": "El trayecto hacia El Hamel a través de colinas ocres y desnudas — el paisaje que convirtió a Bou Saada en localidad de pintores."
          },
          {
            "place": "La zauia de El Hamel",
            "text": "Un santuario sufí rahmaniyya y escuela coránica en lo alto de una colina sobre Bou Saada — tranquilo, austero y panorámico."
          },
          {
            "place": "Almuerzo en Bou Saada",
            "text": "Una mesa local de vuelta en el oasis antes de la carretera hacia el norte — cuscús o un tayín a la sombra de las palmeras."
          }
        ]
      }
    ],
    "includes": [
      "Alojamiento en el hotel Kerdada o similar",
      "Visita de la cascada natural",
      "Visita guiada del molino Ferrero",
      "Mercados tradicionales",
      "Cena beduina con música",
      "Visita de la zauia de El Hamel",
      "Almuerzo del día 2",
      "Transporte de ida y vuelta desde Argel",
      "Guía multilingüe"
    ],
    "excludes": [
      "Gastos personales",
      "Seguro de viaje",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "De octubre a abril"
      },
      {
        "label": "Ritmo",
        "value": "Tranquilo"
      },
      {
        "label": "Estilo",
        "value": "Privado y guiado, 1 noche con hotel y comidas"
      },
      {
        "label": "Equipaje",
        "value": "Ropa cubierta, protección solar y calzado cómodo"
      }
    ],
    "faqs": [
      {
        "q": "¿A qué distancia está Bou Saada de Argel?",
        "a": "A unas horas por carretera; el transporte de ida y vuelta está incluido."
      },
      {
        "q": "¿Está incluido el alojamiento?",
        "a": "Sí: una noche en el hotel Kerdada o similar, con almuerzo el segundo día."
      },
      {
        "q": "¿Qué es El Hamel?",
        "a": "Una zauia sufí histórica — santuario y escuela religiosa — cerca de Bou Saada."
      },
      {
        "q": "¿Es una buena primera toma de contacto con el desierto?",
        "a": "Sí: es la escapada al sur más sencilla desde la capital."
      }
    ]
  },
  "tour-bejaia-historic": {
    "title": "Béjaïa — la ciudad histórica junto al mar (día completo)",
    "duration": "1 día",
    "hook": "Un día en la costa en Béjaïa — su fortaleza y su museo, la cornisa de Cap Carbon y la arena de Les Aiguades, con almuerzo frente al Mediterráneo.",
    "full": true,
    "seoTitle": "Excursión a Béjaïa — Ciudad histórica junto al mar",
    "seoDescription": "Excursión privada de un día a Béjaïa desde Argel: la fortaleza y su museo, la cornisa de Cap Carbon y la playa de Les Aiguades, con almuerzo junto al mar.",
    "overview": "Béjaïa es el punto donde las verdes montañas del Djurdjura caen directamente sobre un Mediterráneo azul profundo. En un día desde Argel se visita su fortaleza histórica con su museo, se recorre la espectacular cornisa de Cap Carbon sobre los acantilados y se descansa en la arena de Les Aiguades, con un almuerzo tradicional junto al agua. Es la forma más fácil de probar la costa cabilia: historia, paisaje y mar en un solo bucle relajado.",
    "highlights": [
      "La fortaleza histórica de Béjaïa y sus vistas al mar",
      "Las colecciones del museo sobre la historia de la región",
      "La espectacular costa de Cap Carbon",
      "Tiempo de playa en Les Aiguades",
      "Auténtica cocina local argelina"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "La fortaleza de Béjaïa, Cap Carbon y la costa",
        "body": "Recogida en Argel, visita guiada de la fortaleza histórica y su museo, paseo por la cornisa de Cap Carbon, tiempo de playa en Les Aiguades y almuerzo tradicional antes del regreso.",
        "stops": [
          {
            "place": "El fuerte de Gouraya y su museo",
            "text": "La fortaleza en lo alto sobre Béjaïa, con la bahía, el puerto y las montañas cabilias desplegados abajo."
          },
          {
            "place": "Cap Carbon",
            "text": "El cabo y su faro, asentado sobre un arco de roca natural — uno de los faros marítimos más altos del mundo."
          },
          {
            "place": "Les Aiguades",
            "text": "Una cala de aguas claras bajo la corniche, con tiempo en la playa antes de un almuerzo tradicional."
          }
        ]
      }
    ],
    "includes": [
      "Transporte en vehículo con aire acondicionado",
      "Guía turístico multilingüe",
      "Entradas a la fortaleza y el museo",
      "Almuerzo tradicional argelino",
      "Paradas de descanso en el trayecto"
    ],
    "excludes": [
      "Bebidas fuera de la comida incluida",
      "Actividades opcionales de playa",
      "Seguro de viaje",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Mayo–octubre para la playa; primavera y otoño para caminar"
      },
      {
        "label": "Ritmo",
        "value": "Tranquilo, con carretera larga en cada sentido"
      },
      {
        "label": "Estilo",
        "value": "Excursión privada y guiada desde Argel"
      },
      {
        "label": "Equipaje",
        "value": "Bañador en verano, protección solar y calzado cómodo"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde empieza la excursión?",
        "a": "Con la recogida en Argel; la ruta hasta Béjaïa atraviesa las montañas de la Cabilia."
      },
      {
        "q": "¿Está incluido el almuerzo?",
        "a": "Sí: un almuerzo tradicional argelino en la costa."
      },
      {
        "q": "¿Se puede nadar en Les Aiguades?",
        "a": "En los meses cálidos, sí — lleve bañador; en temporada fresca es una parada panorámica."
      },
      {
        "q": "¿Es un día largo?",
        "a": "Sí: una jornada costera completa con carretera en ambos sentidos, así que conviene salir temprano."
      }
    ]
  },
  "private-guided-tour": {
    "title": "Tipaza y Cherchell — día romano privado",
    "duration": "1 día",
    "hook": "Un día privado en la costa romana al oeste de Argel — las ruinas de Tipaza junto al mar y el museo de la antigua Cesarea en Cherchell.",
    "full": true,
    "seoTitle": "Tipaza y Cherchell — Día romano privado",
    "seoDescription": "Excursión privada de un día a la costa romana: las ruinas de Tipaza junto al mar, Patrimonio de la UNESCO, y el museo de la antigua Cesarea en Cherchell.",
    "overview": "Tipaza es uno de los yacimientos antiguos más bellos del Mediterráneo, con su foro, sus termas y sus casas romanas extendidos junto al mar, a unos 70 km al oeste de Argel. En este día privado se exploran las ruinas UNESCO al propio ritmo y se visita después el museo arqueológico de Cherchell — la antigua Cesarea —, rico en estatuas y mosaicos. Con guía personal y recogida en el hotel, es la manera más relajada de ver la costa romana.",
    "highlights": [
      "Las ruinas romanas de Tipaza junto al mar (UNESCO)",
      "El foro, las termas y los barrios residenciales",
      "El museo arqueológico de Cherchell",
      "Un ritmo privado y a medida",
      "Un paseo por el viejo puerto de Cherchell"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Las ruinas de Tipaza y el museo de Cherchell",
        "body": "Recogida en el hotel y trayecto privado hasta Tipaza para una visita guiada del foro, las termas y los barrios antiguos; después, Cherchell — la antigua Cesarea — con su museo de estatuas y mosaicos romanos y un breve paseo por el casco antiguo, antes del regreso.",
        "stops": [
          {
            "place": "La Tipaza romana",
            "text": "Una ciudad portuaria Patrimonio de la Humanidad, extendida a lo largo del Mediterráneo — foro, termas, basílicas y barrios antiguos con las olas a sus pies."
          },
          {
            "place": "El Museo Arqueológico de Cherchell",
            "text": "El museo de la antigua Cesarea, que alberga algunos de los mejores mosaicos y esculturas romanas y griegas de Argelia."
          },
          {
            "place": "El casco antiguo de Cherchell",
            "text": "Un breve paseo por el antiguo puerto y el trazado romano de calles, aún legible bajo la ciudad moderna."
          }
        ]
      }
    ],
    "includes": [
      "Guía local profesional (árabe/inglés/francés/español)",
      "Entradas a Tipaza y Cherchell",
      "Visita guiada privada",
      "Recogida y regreso al hotel",
      "Confirmación inmediata"
    ],
    "excludes": [
      "Almuerzo (opcional)",
      "Comidas y bebidas",
      "Gastos personales",
      "Propinas"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Primavera y otoño"
      },
      {
        "label": "Ritmo",
        "value": "Tranquilo, con marcha sobre terreno irregular"
      },
      {
        "label": "Estilo",
        "value": "Excursión privada (árabe / inglés / francés / español)"
      },
      {
        "label": "Equipaje",
        "value": "Protección solar, agua y calzado cómodo"
      }
    ],
    "faqs": [
      {
        "q": "¿Tipaza es Patrimonio de la UNESCO?",
        "a": "Sí, inscrita en 1982."
      },
      {
        "q": "¿A qué distancia está de Argel?",
        "a": "A unos 70 km al oeste, aproximadamente hora y media."
      },
      {
        "q": "¿En qué idiomas trabaja el guía?",
        "a": "En árabe, inglés, francés o español."
      },
      {
        "q": "¿Están incluidas las entradas?",
        "a": "Sí, tanto a Tipaza como al museo de Cherchell."
      }
    ]
  },
  "algiers-city-tour-casbah-bardo-martyrsmemorial": {
    "title": "Argel en un día — Casbah, Bardo y Monumento al Mártir",
    "duration": "1 día",
    "hook": "Un día completo en la capital — la Casbah UNESCO, el museo del Bardo y el Monumento al Mártir sobre la bahía.",
    "full": true,
    "seoTitle": "Argel en un día — Casbah, Bardo y Monumento",
    "seoDescription": "Visita privada de un día en Argel: la Casbah Patrimonio de la UNESCO, el museo nacional del Bardo y el Monumento al Mártir, con almuerzo tradicional.",
    "overview": "Argel lleva su historia escrita en la ladera. En un solo día se sube por la Casbah inscrita por la UNESCO — la densa medina otomana de callejuelas escalonadas, casas con patio y mezquitas antiguas sobre la bahía —, se recorren la arqueología y el arte del museo nacional del Bardo y se contempla, bajo el imponente Monumento al Mártir, la mejor vista de la ciudad blanca y el Mediterráneo. Un almuerzo tradicional parte la jornada. Es el primer día ideal en Argelia: las capas de la capital, leídas de principio a fin con un guía local.",
    "highlights": [
      "La Casbah UNESCO, sus callejuelas y sus mezquitas antiguas",
      "Arqueología e historia en el museo del Bardo",
      "El Monumento al Mártir y su panorámica",
      "Un almuerzo tradicional argelino",
      "Vistas sobre Argel y el Mediterráneo"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casbah, museo del Bardo y Monumento al Mártir",
        "body": "Recorrido guiado de jornada completa por el viejo barrio de la Casbah, las colecciones del museo nacional del Bardo y el Monumento al Mártir, con un almuerzo tradicional en un restaurante local entre las visitas.",
        "stops": [
          {
            "place": "La Casba de Argel",
            "text": "La ciudadela otomana declarada Patrimonio de la Humanidad — un empinado laberinto blanco de palacios, mezquitas y casas de patio que trepa sobre la bahía."
          },
          {
            "place": "El Museo Nacional del Bardo",
            "text": "Prehistoria y etnografía en una elegante villa morisca, desde reproducciones de arte rupestre sahariano hasta joyas de plata y la Argelia cotidiana."
          },
          {
            "place": "El Monumento a los Mártires (Maqam Echahid)",
            "text": "Tres esbeltas hojas de palmera de hormigón alzadas en 1982 sobre la ciudad, en homenaje a los caídos de la guerra de independencia."
          }
        ]
      }
    ],
    "includes": [
      "Recogida y regreso en el hotel o el aeropuerto",
      "Vehículo con aire acondicionado",
      "Guía local profesional",
      "Entradas",
      "Almuerzo tradicional argelino",
      "Agua y aperitivos"
    ],
    "excludes": [
      "Propinas",
      "Gastos personales"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Primavera y otoño; agradable casi todo el año"
      },
      {
        "label": "Ritmo",
        "value": "Tranquilo, con marcha y escaleras en la Casbah"
      },
      {
        "label": "Estilo",
        "value": "Visita privada y guiada de jornada completa"
      },
      {
        "label": "Equipaje",
        "value": "Calzado cómodo, protección solar y ropa cubierta para las mezquitas"
      }
    ],
    "faqs": [
      {
        "q": "¿Es segura la visita de la Casbah?",
        "a": "Sí. Con un guía local es un paseo acogedor y muy gratificante; las callejuelas son empinadas, así que conviene buen calzado."
      },
      {
        "q": "¿Está incluido el almuerzo?",
        "a": "Sí: un almuerzo tradicional argelino en un restaurante local forma parte del día."
      },
      {
        "q": "¿Pueden recogerme en el aeropuerto?",
        "a": "Sí: la recogida y el regreso en su hotel de Argel o en el aeropuerto están incluidos."
      },
      {
        "q": "¿Se camina mucho?",
        "a": "Bastante, buena parte por las escaleras y cuestas de la Casbah, a ritmo tranquilo y con paradas."
      }
    ]
  },
  "algierstour-hammagarden-notredame-dafrique": {
    "title": "Argel — Jardín de Hamma y Notre-Dame d'Afrique",
    "duration": "1 día",
    "hook": "Un día en Argel entre el Jardín de Ensayo de Hamma y la basílica de Notre-Dame d'Afrique, con las mejores vistas de la bahía.",
    "full": true,
    "seoTitle": "Argel — Jardín de Hamma y Notre-Dame d'Afrique",
    "seoDescription": "Día privado en Argel: el Jardín de Ensayo de Hamma, la basílica de Notre-Dame d'Afrique sobre la bahía y el Museo del Ejército, con almuerzo argelino.",
    "overview": "Alternativa relajada al día de la Casbah, esta visita privada reúne tres emblemas de Argel a un ritmo suave: el frondoso Jardín de Ensayo de Hamma, uno de los grandes jardines botánicos del Mediterráneo; la basílica de Notre-Dame d'Afrique en su colina, con una vista amplísima de la bahía; y el relato de la historia argelina en el Museo del Ejército. Un almuerzo tradicional redondea la jornada, con recogida en el hotel incluida.",
    "highlights": [
      "El histórico jardín botánico de Hamma",
      "Las vistas al mar desde Notre-Dame d'Afrique",
      "La historia militar argelina en el Museo del Ejército",
      "Un almuerzo tradicional argelino",
      "Guía privado con recogida en el hotel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Jardín de Hamma, Notre-Dame d'Afrique y Museo del Ejército",
        "body": "Recogida en el hotel o el aeropuerto y jornada guiada por tres lugares: el jardín botánico de Hamma, la basílica de Notre-Dame d'Afrique en su colina sobre el Mediterráneo y el Museo del Ejército, con un almuerzo tradicional por el camino antes del regreso.",
        "stops": [
          {
            "place": "El Jardín Botánico de El Hamma",
            "text": "Diez hectáreas trazadas en 1832 a los pies del Monumento a los Mártires — un jardín francés a la francesa, un parque paisajístico inglés, avenidas de palmeras y un bambusal."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "La basílica del siglo XIX en el acantilado sobre Bab El Oued, célebre por la inscripción del ábside que pide a Nuestra Señora de África que ruegue «por nosotros y por los musulmanes»."
          },
          {
            "place": "El Museo Central del Ejército",
            "text": "La colección militar nacional junto al Maqam Echahid, que recorre desde las campañas del emir Abdelkader hasta la guerra de independencia."
          }
        ]
      }
    ],
    "includes": [
      "Recogida y regreso en el hotel o el aeropuerto",
      "Vehículo con aire acondicionado",
      "Guía local profesional",
      "Entradas a los sitios",
      "Almuerzo tradicional argelino",
      "Agua embotellada y aperitivos"
    ],
    "excludes": [
      "Propinas",
      "Gastos personales"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Todo el año; primavera y otoño, lo más suave"
      },
      {
        "label": "Ritmo",
        "value": "Tranquilo, con poca marcha"
      },
      {
        "label": "Estilo",
        "value": "Visita privada y guiada con recogida"
      },
      {
        "label": "Equipaje",
        "value": "Calzado cómodo, ropa cubierta para la basílica y cámara"
      }
    ],
    "faqs": [
      {
        "q": "¿Es más fácil que la visita de la Casbah?",
        "a": "Sí: es una jornada más suave entre jardines y miradores, con menos cuestas."
      },
      {
        "q": "¿Está incluido el almuerzo?",
        "a": "Sí, un almuerzo tradicional argelino."
      },
      {
        "q": "¿Están cubiertas las entradas?",
        "a": "Sí: la entrada a los tres sitios está incluida."
      },
      {
        "q": "¿Se puede combinar con el día de la Casbah?",
        "a": "Sí. Muchos visitantes unen las dos visitas en dos días; pídanos organizarlo."
      }
    ]
  },
  "day-tour-algeria-culture": {
    "title": "Argel — paseo cultural por la Casbah",
    "duration": "1 día",
    "hook": "Un día a pie por la Casbah de Argel, sus callejuelas, sus palacios otomanos y sus terrazas, con un guía que creció allí.",
    "full": true,
    "seoTitle": "Paseo cultural por la Casbah de Argel — 1 día",
    "seoDescription": "Paseo guiado por la Casbah de Argel, Patrimonio de la UNESCO: la plaza de los Mártires, el palacio de Mustafá Pachá, la ciudadela y el palacio del Rais.",
    "overview": "La Casbah de Argel es uno de los grandes barrios históricos del Mediterráneo, y este paseo la lee de abajo arriba. Desde el frente marítimo y la plaza de los Mártires se sube por callejuelas estrechas hasta el palacio de Mustafá Pachá, la ciudadela otomana y la casa de Ali La Pointe — lugar clave de la guerra de independencia —, antes de bajar hasta el palacio del Rais (Bastión 23), junto al mar. Una introducción compacta y llena de atmósfera al viejo Argel.",
    "highlights": [
      "Las callejuelas y las mezquitas antiguas de la Casbah",
      "El palacio de Mustafá Pachá y la arquitectura otomana",
      "Terrazas panorámicas sobre la bahía",
      "La ciudadela y la casa de Ali La Pointe",
      "El palacio del Rais (Bastión 23), junto al mar"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Paseo a pie por la Casbah",
        "body": "Encuentro con el guía junto al mar, al pie de la Casbah, y subida por la plaza de los Mártires y su mezquita histórica, el palacio de Mustafá Pachá, una terraza panorámica, la ciudadela y la casa del héroe de la independencia Ali La Pointe, para terminar en el palacio del Rais, junto al mar.",
        "stops": [
          {
            "place": "La Plaza de los Mártires y la Mezquita de Ketchaoua",
            "text": "La plaza a los pies de la Casba y su mezquita otomana del siglo XVII, reabierta tras una década de restauración."
          },
          {
            "place": "El Palacio de Mustafa Pasha y la ciudadela",
            "text": "El palacio del dey del siglo XVIII, con sus azulejos pintados, y la ciudadela en lo alto de la Casba, donde el golpe de abanico de 1830 desencadenó la invasión francesa."
          },
          {
            "place": "La casa de Ali La Pointe y el Palacio de los Rais",
            "text": "El escondite bombardeado, conservado en el corazón de la Casba, y los palacios otomanos frente al mar del Bastión 23, donde termina el paseo."
          }
        ]
      }
    ],
    "includes": [
      "Guía profesional (inglés, francés o árabe)",
      "Entradas a los monumentos incluidos",
      "Transporte durante la visita",
      "Paseo guiado a pie por la Casbah"
    ],
    "excludes": [
      "Comidas y bebidas",
      "Recogida en el hotel (salvo acuerdo previo)",
      "Actividades opcionales y gastos personales"
    ],
    "goodToKnow": [
      {
        "label": "Temporada",
        "value": "Primavera y otoño"
      },
      {
        "label": "Ritmo",
        "value": "Moderado — escaleras y cuestas empinadas"
      },
      {
        "label": "Estilo",
        "value": "Paseo guiado a pie (inglés / francés / árabe)"
      },
      {
        "label": "Equipaje",
        "value": "Calzado cómodo, agua y ropa cubierta"
      }
    ],
    "faqs": [
      {
        "q": "¿Es segura la Casbah con guía?",
        "a": "Sí: es un paseo acogedor y muy gratificante; lleve buen calzado para las escaleras."
      },
      {
        "q": "¿Cuánto dura el paseo?",
        "a": "Un recorrido guiado por el barrio, casi todo cuesta arriba, a ritmo tranquilo y con paradas."
      },
      {
        "q": "¿Están incluidas las entradas?",
        "a": "Sí, a los monumentos incluidos en el recorrido."
      },
      {
        "q": "¿Quién fue Ali La Pointe?",
        "a": "Una figura de la guerra de independencia argelina; su casa en la Casbah forma parte del recorrido."
      }
    ]
  }
};

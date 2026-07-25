// Spanish practical guides. One data file plus one template beats five nearly
// identical .astro pages, and keeps the hreflang pairing with the English
// article (via `en`) explicit and impossible to forget.

export interface GuideEs {
  slug: string;
  en: string;
  fr?: string;
  it?: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: { h: string; p?: string; list?: string[] }[];
  faqs: { q: string; a: string }[];
  cta: { h: string; p: string };
  seoTitle: string;
  seoDescription: string;
  published: string;
}

export const GUIDES_ES: GuideEs[] = [
  {
    "slug": "guia-viaje-argelia",
    "en": "/blog/complete-algeria-travel-guide/",
    "fr": "/fr/guide-voyage-algerie/",
    "it": "/it/guida-viaggio-algeria/",
    "eyebrow": "Guía completa",
    "h1": "Guía de viaje a Argelia",
    "published": "2026-07-25",
    "lead": "Argelia es el país más grande de África y uno de los menos visitados del Mediterráneo: ciudades romanas casi desiertas, un Sáhara que ocupa cuatro quintas partes del mapa y una hospitalidad que sorprende a cualquiera. Por eso mismo recompensa a quien se prepara. Esta guía reúne lo esencial — cuándo ir, visado, seguridad, transporte, presupuesto, cocina — y remite a las guías de detalle.",
    "sections": [
      {
        "h": "El país en breve",
        "p": "República del Mediterráneo meridional, Argelia limita con Túnez y Libia al este, Níger, Malí y Mauritania al sur, y el Sáhara Occidental y Marruecos al oeste. La población se concentra en la franja costera y las mesetas del norte, mientras que el vasto sur está casi despoblado. El árabe y el tamazight son lenguas oficiales; el francés sigue muy presente en la administración, el comercio y la señalización. El país está dividido en 58 provincias."
      },
      {
        "h": "Cuándo ir",
        "p": "La primavera (marzo–mayo) y el otoño (septiembre–noviembre) son las mejores épocas para el norte, la costa y las ciudades romanas. El invierno (noviembre–febrero) es la única temporada en la que se puede recorrer el Sáhara profundo, y también cuando los yacimientos romanos resultan más agradables. El verano es caluroso en la costa y prohibitivo en el sur."
      },
      {
        "h": "Visado y entrada",
        "p": "Casi todas las nacionalidades necesitan un visado turístico obtenido antes de viajar en un consulado argelino, por lo general con carta de invitación y reservas confirmadas. No existe un e-visa general. La única excepción reconocida son los viajes organizados al gran sur, que entran por Djanet o Tamanrasset con un operador autorizado."
      },
      {
        "h": "Seguridad",
        "p": "Para el viaje ordinario, las ciudades del norte, la costa, el este romano y los circuitos saharianos organizados son en general tranquilos, con los pequeños hurtos como principal preocupación. Algunas zonas fronterizas remotas y partes del desierto alejadas de las rutas habituales tienen avisos oficiales. El gran sur se recorre con operador, guía y permisos."
      },
      {
        "h": "Cómo moverse",
        "p": "El país es demasiado grande para cruzarlo por tierra en unas vacaciones normales. En el norte funcionan bien el tren y la autopista este-oeste; para el sur el vuelo interno es prácticamente obligatorio, seguido de 4×4 con conductor. Air Algérie y Tassili Airlines conectan Argel con Orán, Constantina, Ghardaïa, Timimoun, Tamanrasset y Djanet."
      },
      {
        "h": "Dinero",
        "p": "La moneda es el dinar argelino, no convertible fuera del país: se llega con efectivo en euros y se cambia en Argelia. Las tarjetas extranjeras son prácticamente inservibles y los cajeros poco fiables. Existe un tipo oficial y un tipo paralelo muy extendido, y la diferencia pesa mucho en el presupuesto."
      },
      {
        "h": "Cocina",
        "p": "El cuscús es el plato nacional, reconocido por la UNESCO como patrimonio compartido del Magreb. A su lado están la chorba, los tayines, la rechta de Argel, la chakhchoukha del este, la comida callejera como mhadjeb y msemen, y una honda tradición de dulces de almendra y dátil. El té a la menta acompaña todo."
      },
      {
        "h": "Qué ver",
        "list": [
          "Los siete sitios UNESCO: Casbah de Argel, Timgad, Djémila, Tipaza, valle del M'Zab, Al Qal'a de los Beni Hammad y Tassili n'Ajjer",
          "Argel, la capital blanca sobre la bahía",
          "Constantina, la ciudad de los puentes sobre las gargantas del Rhumel",
          "Tlemcén y la herencia andalusí del oeste",
          "El Sáhara: Djanet y el Tadrart, Timimoun, el Hoggar",
          "La costa cabilia en torno a Béjaïa"
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Cuántos días hacen falta para Argelia?",
        "a": "Siete días cubren bien Argel, la costa romana y una región más. Diez permiten añadir el M'Zab o el este romano sin prisas. Dos semanas es lo que hace falta para unir el norte con una verdadera expedición al Sáhara."
      },
      {
        "q": "¿Es cara Argelia?",
        "a": "No, una vez que se tienen dinares. Comida, transporte y entradas cuestan poco para los estándares europeos. Lo que pesa es el vuelo internacional y, si se va al desierto, la logística del operador."
      },
      {
        "q": "¿Se habla inglés?",
        "a": "Poco. El árabe y el tamazight son las lenguas oficiales y el francés es la segunda lengua extendida. El inglés crece entre los jóvenes y entre los guías profesionales, pero no conviene darlo por hecho."
      },
      {
        "q": "¿Se puede viajar por libre?",
        "a": "En el norte sí: ciudades, costa y yacimientos romanos se visitan por cuenta propia. El Sáhara profundo no — exige operador autorizado, guía y permisos, por razones de seguridad y de entorno."
      }
    ],
    "cta": {
      "h": "Diseñamos su viaje",
      "p": "Somos un operador turístico argelino autorizado: itinerarios privados, guías locales y ayuda con el visado."
    },
    "seoTitle": "Guía de viaje a Argelia 2026 | Algeria Compass",
    "seoDescription": "Guía completa de viaje a Argelia: cuándo ir, visado, seguridad, transporte, presupuesto, cocina y qué ver. Por un operador argelino autorizado."
  },
  {
    "slug": "visado-argelia",
    "en": "/blog/algeria-visa-guide/",
    "fr": "/fr/visa-algerie/",
    "it": "/it/visto-algeria/",
    "eyebrow": "Visado y entrada",
    "h1": "Visado para Argelia: cómo obtenerlo",
    "published": "2026-07-25",
    "lead": "El visado es el primer paso real de un viaje a Argelia, y el único capaz de arruinar las fechas si se subestima. No existe un e-visa general: la solicitud se presenta en un consulado argelino antes de viajar, con carta de invitación y programa confirmado. Así funciona.",
    "sections": [
      {
        "h": "Quién necesita visado",
        "p": "Prácticamente todos los visitantes europeos, norteamericanos y asiáticos. Las exenciones son escasas y afectan sobre todo a países del Magreb y a algunos acuerdos bilaterales. Consulte siempre con el consulado argelino competente para su residencia: las normas cambian sin mucho preaviso."
      },
      {
        "h": "Documentos exigidos",
        "list": [
          "Pasaporte con validez mínima de seis meses y páginas libres",
          "Formulario de solicitud cumplimentado y firmado",
          "Fotografías recientes sobre fondo claro",
          "Carta de invitación: de un particular residente en Argelia o de la agencia que organiza el viaje",
          "Reservas de alojamiento o programa confirmado",
          "Reserva del vuelo de ida y vuelta",
          "Prueba de medios económicos suficientes",
          "Seguro de viaje"
        ]
      },
      {
        "h": "La carta de invitación",
        "p": "Es la parte que sorprende a quien solicita por primera vez. Los consulados argelinos quieren saber quién le recibe. Si no tiene contactos privados en Argelia, la vía habitual es la invitación de una agencia autorizada, emitida en papel con membrete con sus fechas, el itinerario y los alojamientos. La carta por sí sola rara vez basta: debe coincidir con las reservas que la acompañan."
      },
      {
        "h": "Plazos",
        "p": "No hay un plazo único: cada consulado gestiona su propia carga. En la práctica van de unas dos semanas a más de un mes, con los periodos más lentos en verano y antes de las grandes festividades. La regla que ahorra dinero es sencilla: no compre vuelos no reembolsables hasta tener el visado físicamente en el pasaporte."
      },
      {
        "h": "La excepción del gran sur",
        "p": "Para los viajes organizados al desierto profundo que entran por Djanet o Tamanrasset, una agencia argelina autorizada puede en algunos casos tramitar al grupo a la llegada, porque ha depositado antes los datos y los permisos. No es algo que un viajero independiente pueda gestionar en el aeropuerto."
      },
      {
        "h": "Por qué se deniegan las solicitudes",
        "list": [
          "Expediente incompleto — con diferencia la causa más frecuente",
          "Invitación y reservas que no coinciden entre sí",
          "Pasaporte con validez residual insuficiente",
          "Solicitud presentada en el consulado equivocado para su residencia",
          "Medios económicos no documentados"
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Existe un e-visa para Argelia?",
        "a": "No, no existe un visado turístico electrónico general. Desconfíe de los sitios comerciales que lo prometen: como mucho son servicios de cumplimentación de formularios, y el consulado no está obligado a reconocerlos."
      },
      {
        "q": "¿Se puede obtener el visado en el aeropuerto?",
        "a": "En general no. La única excepción son los viajes organizados al gran sur, gestionados por un operador argelino autorizado que ha depositado la documentación con antelación."
      },
      {
        "q": "¿Facilitan ustedes la carta de invitación?",
        "a": "Sí. Para cada viajero que reserva con nosotros preparamos la invitación, el programa confirmado y los datos de alojamiento en el formato que esperan los consulados."
      },
      {
        "q": "¿Cuánto cuesta el visado?",
        "a": "Las tasas consulares varían según nacionalidad y tipo de visado y se actualizan periódicamente. Pregunte el importe vigente directamente al consulado competente."
      }
    ],
    "cta": {
      "h": "Le ayudamos con el visado",
      "p": "Invitación, programa confirmado y reservas en el formato que exigen los consulados — incluidos en la organización del viaje."
    },
    "seoTitle": "Visado para Argelia: documentos y plazos",
    "seoDescription": "Cómo obtener el visado turístico para Argelia: documentos exigidos, carta de invitación de la agencia, plazos y por qué se deniegan las solicitudes."
  },
  {
    "slug": "seguridad-argelia",
    "en": "/blog/algeria-safety-guide/",
    "fr": "/fr/securite-algerie/",
    "it": "/it/sicurezza-algeria/",
    "eyebrow": "Seguridad",
    "h1": "¿Es segura Argelia? Una valoración honesta",
    "published": "2026-07-25",
    "lead": "La reputación de Argelia está modelada por los años noventa, no por el país de hoy. Lleva más de veinte años estable y es conocida por una hospitalidad fuera de lo común. Dicho esto, aquí la seguridad se lee en un mapa, no en un veredicto único: algunas zonas remotas tienen avisos reales, y el desierto es un entorno antes que una cuestión de orden público.",
    "sections": [
      {
        "h": "Dónde el viaje es sencillo",
        "p": "Argel, Orán, Constantina, Béjaïa, la costa mediterránea, los yacimientos romanos del este, la Cabilia y el valle del M'Zab se visitan con normalidad. El riesgo realista es el hurto en lugares concurridos, como en cualquier capital mediterránea."
      },
      {
        "h": "Dónde hace falta un operador",
        "p": "El Sáhara profundo — Tassili n'Ajjer, Tadrart, Hoggar — se recorre con operador autorizado, guía acreditado, 4×4 equipados y permisos. No es una formalidad: el calor, las distancias, la navegación y la falta de cobertura hacen peligrosa la improvisación."
      },
      {
        "h": "Dónde no se va",
        "p": "Las franjas fronterizas remotas con Malí, Níger y Libia, y algunas zonas desérticas alejadas de las rutas establecidas, concentran los avisos más firmes de los gobiernos. Son además lugares para los que no se emite ningún permiso y a los que ningún operador le llevará."
      },
      {
        "h": "Los riesgos reales",
        "list": [
          "Hurtos en mercados, transportes y zonas concurridas",
          "Accidentes de tráfico, sobre todo de noche en carreteras rurales sin iluminación",
          "Calor y deshidratación en el sur, con diferencia el principal riesgo en el desierto",
          "Pequeños timos: precios no acordados, guías no oficiales, cambio de moneda"
        ]
      },
      {
        "h": "Mujeres que viajan solas",
        "p": "Argelia es un país conservador con una baja tasa de delincuencia violenta, y ambas cosas juntas explican la experiencia habitual: mucha atención y curiosidad, poca amenaza real. Ropa cubierta, desplazamientos entre ciudades de día, taxis pedidos en lugar de parados en la calle. En las ciudades el ambiente es bastante más relajado que en los pueblos pequeños."
      },
      {
        "h": "Buenas costumbres",
        "list": [
          "Lea los avisos actualizados de su gobierno, que se basan en mapas",
          "Evite conducir de noche por carreteras rurales",
          "Lleve copia del pasaporte y del visado aparte de los originales",
          "En el desierto beba con regularidad, sin esperar a tener sed",
          "Siga las indicaciones de guías y autoridades sobre dónde no ir"
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Es segura Argelia para los turistas?",
        "a": "Para el viaje ordinario, sí: las ciudades del norte, la costa, el este romano y los circuitos saharianos organizados son en general tranquilos. Algunas zonas fronterizas remotas tienen avisos oficiales."
      },
      {
        "q": "¿Es peligroso el Sáhara?",
        "a": "El Sáhara es seguro si se recorre como debe recorrerse: operador autorizado, guía experto, 4×4, agua, comunicaciones por satélite y permisos. Los riesgos reales son el calor, la deshidratación y el aislamiento, no la delincuencia."
      },
      {
        "q": "¿Es segura para mujeres que viajan solas?",
        "a": "En general sí, con la atención habitual. Espere miradas y curiosidad más que amenazas; la ropa cubierta y los desplazamientos diurnos entre ciudades lo hacen todo más fácil."
      },
      {
        "q": "¿Se puede conducir en Argelia?",
        "a": "Legalmente sí, con permiso y carné internacional. En la práctica muchos visitantes prefieren un conductor: tráfico urbano agresivo, señalización en árabe y francés y conducción nocturna desaconsejada."
      }
    ],
    "cta": {
      "h": "Viaje con un operador local",
      "p": "Guías acreditados, vehículos adecuados y permisos gestionados por nosotros — la seguridad como cuestión organizativa, no como preocupación."
    },
    "seoTitle": "¿Es segura Argelia? Guía actualizada",
    "seoDescription": "¿Es segura Argelia para los turistas? Una valoración honesta: dónde el viaje es sencillo, dónde hace falta un operador, qué zonas evitar y los riesgos reales."
  },
  {
    "slug": "cuando-viajar-argelia",
    "en": "/blog/best-time-to-visit-algeria/",
    "fr": "/fr/quand-partir-algerie/",
    "it": "/it/quando-andare-algeria/",
    "eyebrow": "Temporadas",
    "h1": "Cuándo viajar a Argelia",
    "published": "2026-07-25",
    "lead": "Argelia no tiene una sola buena temporada: tiene dos, y son casi opuestas. El norte da lo mejor de sí en primavera y otoño; el Sáhara profundo solo se visita en invierno. Entender esa división es la decisión más importante al planificar el viaje.",
    "sections": [
      {
        "h": "Primavera (marzo–mayo)",
        "p": "La mejor temporada para el norte: temperaturas suaves, paisajes verdes tras las lluvias de invierno y yacimientos romanos como Timgad o Djémila cómodos de recorrer a pie. Es también un buen momento para los oasis del norte del Sáhara, antes del gran calor."
      },
      {
        "h": "Verano (junio–agosto)",
        "p": "Temporada de playa en la costa, con mar cálido y ciudades animadas hasta bien entrada la noche. Los yacimientos resultan duros a mediodía y el gran sur queda excluido: el calor lo hace peligroso y no se organizan expediciones. Es además el periodo de mayor demanda de vuelos por el regreso de la diáspora."
      },
      {
        "h": "Otoño (septiembre–noviembre)",
        "p": "Quizá la mejor época para un primer viaje: el calor se retira, hay luz dorada sobre las ciudades romanas, el mar sigue apto para el baño en septiembre y, desde noviembre, se abre la temporada sahariana."
      },
      {
        "h": "Invierno (diciembre–febrero)",
        "p": "La temporada del Sáhara, y la única en la que Tassili, Tadrart y Hoggar son transitables: días suaves, noches frías, aire limpio y la mejor luz para fotografiar. En el norte hace más fresco y llueve, pero los yacimientos romanos están casi desiertos y en el Atlas nieva — en Chréa, sobre Blida, se esquía."
      },
      {
        "h": "Región por región",
        "list": [
          "Costa mediterránea — de abril a octubre; julio y agosto para el mar",
          "Ciudades romanas (Timgad, Djémila, Tipaza) — marzo–junio y septiembre–noviembre",
          "Valle del M'Zab y oasis del norte — de octubre a abril",
          "Sáhara profundo (Djanet, Tamanrasset) — solo de noviembre a febrero",
          "Montañas de la Cabilia y los Aurés — primavera para las flores, invierno para la nieve"
        ]
      },
      {
        "h": "Ramadán y festividades",
        "p": "Durante el Ramadán el ritmo del país se invierte: días tranquilos con muchos restaurantes cerrados y ciudades muy vivas tras la puesta de sol. Es un periodo fascinante para quien viaja por entender, menos adecuado para quien lleva un programa apretado de visitas. Las fiestas del Eid cierran muchos negocios durante varios días."
      }
    ],
    "faqs": [
      {
        "q": "¿Cuál es el mejor mes para Argelia?",
        "a": "Octubre y abril son los dos meses que funcionan casi en todas partes: norte agradable, oasis accesibles y, en octubre, la temporada sahariana a punto de abrirse."
      },
      {
        "q": "¿Cuándo se puede ir al Sáhara?",
        "a": "De noviembre a febrero. Fuera de esa ventana el calor en el gran sur hace peligrosas las expediciones y los operadores no las organizan."
      },
      {
        "q": "¿Merece la pena Argelia en invierno?",
        "a": "Mucho. Es la única temporada para el desierto, los yacimientos romanos están frescos y vacíos, la costa sigue templada y en el Atlas hay nieve de verdad: en dos semanas se puede pasar de la nieve a las dunas."
      },
      {
        "q": "¿Hace frío de noche en el desierto?",
        "a": "Sí, mucho. En pleno invierno las temperaturas nocturnas en el vivac pueden acercarse a cero: chaqueta de abrigo, gorro y capas de verdad."
      }
    ],
    "cta": {
      "h": "La época adecuada para su viaje",
      "p": "Díganos sus fechas y le diremos con franqueza qué funciona y qué no en ese periodo."
    },
    "seoTitle": "Cuándo viajar a Argelia: clima y temporadas",
    "seoDescription": "Cuándo viajar a Argelia: primavera y otoño para el norte y las ciudades romanas, invierno para el Sáhara. El clima región por región, mes a mes."
  },
  {
    "slug": "sahara-argelia",
    "en": "/blog/algerian-sahara-travel-guide/",
    "fr": "/fr/sahara-algerie/",
    "it": "/it/sahara-algeria/",
    "eyebrow": "Sáhara",
    "h1": "El Sáhara argelino: guía de viaje",
    "published": "2026-07-25",
    "lead": "El Sáhara argelino está entre los más vastos y mejor conservados del mundo: las mesetas de arenisca del Tassili n'Ajjer, las dunas y arcos del Tadrart, las cumbres volcánicas del Hoggar, los oasis rojos del Gourara. No es una excursión: es una expedición invernal guiada, organizada por un operador autorizado.",
    "sections": [
      {
        "h": "Cuándo ir",
        "p": "De noviembre a febrero, sin excepciones. Los días son suaves y el aire limpio; las noches son frías y en el vivac pueden acercarse a cero, así que hacen falta capas de verdad. Desde finales de primavera el calor se convierte en un riesgo fisiológico serio y las expediciones se detienen."
      },
      {
        "h": "Las grandes regiones",
        "list": [
          "Djanet y el Tassili n'Ajjer — arte rupestre prehistórico y bosques de arenisca, Patrimonio de la UNESCO",
          "El Tadrart Rojo — dunas, cañones y arcos naturales en el sureste profundo",
          "El Hoggar, desde Tamanrasset — picos volcánicos y el amanecer del Assekrem",
          "Timimoun y el Gourara — el oasis rojo, los ksour y las foggaras",
          "El Gran Erg Occidental — los grandes cordones de dunas"
        ]
      },
      {
        "h": "Permisos, 4×4 y logística",
        "p": "No se va por libre. Guía acreditado, 4×4 equipados y permisos son imprescindibles, y no por burocracia: son el sistema de seguridad. Se llega al sur en avión desde Argel y se continúa en 4×4. Agua, combustible y comunicaciones por satélite se calculan por vehículo y por persona."
      },
      {
        "h": "Dónde se duerme",
        "p": "En vivac, montado cada tarde en un punto elegido por el equipo. Tiendas, colchonetas y mantas están incluidas; no hay electricidad, ni duchas, ni cobertura. La cena se hace al fuego, el pan se cuece bajo la arena y el té se prepara tres veces."
      },
      {
        "h": "Qué llevar",
        "list": [
          "Capas de abrigo de verdad para la noche: chaqueta, gorro, calcetines gruesos",
          "Protección solar, sombrero y un pañuelo para el sol y el viento",
          "Calzado cerrado y cómodo para arena y roca",
          "Batería externa de gran capacidad y baterías de repuesto",
          "Linterna frontal y toallitas, dadas las condiciones del vivac"
        ]
      },
      {
        "h": "Los tuareg",
        "p": "Guías, conductores y cocineros de las expediciones son tuareg locales, y la hospitalidad que acompaña el viaje no es una escenificación para visitantes. Es también la razón por la que el turismo sahariano, bien hecho, sigue siendo una de las pocas fuentes de ingresos de la región."
      }
    ],
    "faqs": [
      {
        "q": "¿Se puede visitar el Sáhara argelino por libre?",
        "a": "No. El gran sur exige operador autorizado, guía acreditado, 4×4 y permisos. Es una norma de seguridad antes que administrativa."
      },
      {
        "q": "¿Cómo se llega a Djanet o Tamanrasset?",
        "a": "En avión desde Argel, con Air Algérie o Tassili Airlines, y luego en 4×4 con el equipo. Las distancias por carretera desde el norte son enormes e inviables en unas vacaciones."
      },
      {
        "q": "¿Hace falta preparación física?",
        "a": "Para el Tadrart en 4×4 no: se viaja en todoterreno con caminatas cortas. Para la meseta del Tassili sí, porque es una travesía de varios días con noches frías."
      },
      {
        "q": "¿Qué se ve exactamente?",
        "a": "Arte rupestre prehistórico del Tassili, los arcos y las dunas rojas del Tadrart, el amanecer del Assekrem en el Hoggar y los oasis del Gourara en torno a Timimoun."
      }
    ],
    "cta": {
      "h": "Su expedición al desierto",
      "p": "Guías, 4×4 y permisos gestionados por nosotros — a usted solo le queda el viaje."
    },
    "seoTitle": "Sáhara argelino: guía 2026 (Djanet, Tassili)",
    "seoDescription": "Guía del Sáhara argelino: Djanet y el Tassili n'Ajjer, el Hoggar, Timimoun y el Tadrart. Cuándo ir, permisos, 4×4 y cómo se organiza una expedición."
  }
];

export const guideEsByEn = (en: string) => GUIDES_ES.find(g => g.en === en);

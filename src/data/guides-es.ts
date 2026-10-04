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
        "p": "Casi todas las nacionalidades necesitan un visado turístico obtenido antes de viajar en un consulado argelino, por lo general con carta de invitación y reservas confirmadas. No existe un e-visa general. La única excepción reconocida son los viajes organizados que incluyen el Sáhara: con un operador autorizado, el visado se emite a la llegada en el aeropuerto de Argel."
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
        "h": "La excepción de los viajes con Sáhara",
        "p": "Para los viajes organizados que incluyen una estancia en el Sáhara, una agencia argelina autorizada deposita antes los datos y los permisos, y el visado se emite a la llegada en el aeropuerto de Argel. No es algo que un viajero independiente pueda gestionar en el aeropuerto."
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
        "a": "En general no. La única excepción son los viajes organizados que incluyen el Sáhara: un operador argelino autorizado deposita la documentación con antelación y el visado se emite a la llegada en el aeropuerto de Argel (autorización 45 USD, sello pagado aparte en el aeropuerto)."
      },
      {
        "q": "¿Facilitan ustedes la carta de invitación?",
        "a": "Sí, para cualquier programa de al menos 3 días con recogida y traslado al aeropuerto: la carta de invitación cuesta 25 USD e incluye el programa confirmado y los datos de alojamiento en el formato que esperan los consulados."
      },
      {
        "q": "¿Cuánto cuesta el visado?",
        "a": "Las tasas consulares varían según nacionalidad y tipo de visado y se actualizan periódicamente. Pregunte el importe vigente directamente al consulado competente."
      }
    ],
    "cta": {
      "h": "Le ayudamos con el visado",
      "p": "Invitación (25 USD), programa confirmado y reservas en el formato que exigen los consulados, para cualquier programa de al menos 3 días con traslados al aeropuerto."
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
  },
  {
    "slug": "visado-llegada-argelia",
    "en": "/algeria-visa-requirements/",
    "fr": "/fr/visa-arrivee-algerie/",
    "eyebrow": "Visado y entrada",
    "h1": "¿Necesita visado para Argelia?",
    "published": "2026-07-27",
    "lead": "Dos formas de entrar en Argelia, y una de ellas se salta el consulado por completo. La mayoría de los viajeros obtiene un visado turístico antes de salir; quien tiene un viaje organizado que incluye el Sáhara puede obtener el visado a la llegada en el aeropuerto de Argel, y esa vía está abierta a viajeros de cualquier nacionalidad.",
    "sections": [
      {
        "h": "Vía 1: visado consular, antes de viajar",
        "p": "Sirve para quien no va al Sáhara — el norte, la costa, las ciudades romanas — y para quien viaje por libre. Usted nos dice fechas e itinerario, nosotros emitimos la carta de invitación (25 USD, para cualquier programa de al menos 3 días con recogida y traslado al aeropuerto) y el programa confirmado en papel con membrete, usted presenta el expediente en el consulado argelino que le corresponde por residencia, y el visado se estampa en el pasaporte antes de salir. Cuente entre dos semanas y más de un mes, y no compre vuelos no reembolsables hasta tener el visado físicamente en el pasaporte."
      },
      {
        "h": "Vía 2: visado a la llegada en el aeropuerto de Argel",
        "p": "Sirve para quien viaja con un programa organizado que incluye una estancia en el Sáhara, y está abierta a cualquier nacionalidad. Usted reserva con nosotros un programa con Sáhara, nosotros depositamos por adelantado los datos del pasaporte y los permisos del desierto, usted llega a Argel como de costumbre y el visado se emite a la llegada en el aeropuerto de Argel. Autorización sahariana 45 USD; el sello de entrada se paga aparte en el aeropuerto. Sin cita consular. Le confirmamos por escrito que su caso entra en esta vía antes de que reserve vuelos."
      },
      {
        "h": "Cuál le corresponde",
        "p": "Depende de adónde va, no de su pasaporte. Si su viaje organizado incluye el Sáhara — Tassili n'Ajjer, Tadrart, Timimún, el valle del M'Zab — la vía del visado a la llegada está disponible sea cual sea su pasaporte, aunque el resto del viaje sea Argel, la costa y las ciudades romanas. Si el viaje se queda en el norte, o viaja por libre, necesita el visado consular. Las dos pasan por nosotros como operador autorizado."
      },
      {
        "h": "¿Y la exención de visado?",
        "p": "Un número reducido de nacionalidades entra en Argelia sin visado. La lista es corta, cambia, y las consecuencias de un error las paga el viajero en la puerta de embarque: por eso no publicamos ninguna. El consulado argelino más cercano es la autoridad sobre su pasaporte y una llamada lo resuelve."
      }
    ],
    "faqs": [
      {
        "q": "¿Necesito visado para visitar Argelia?",
        "a": "Casi con total seguridad sí si viaja por libre o al norte. El visado turístico se obtiene antes de salir en el consulado que le corresponde por residencia, con carta de invitación y reservas confirmadas."
      },
      {
        "q": "¿Se puede entrar sin pasar por el consulado?",
        "a": "Sí, por una sola vía: un viaje organizado que incluye una estancia en el Sáhara. Un operador argelino autorizado deposita por adelantado los datos y los permisos y el visado se emite a la llegada en el aeropuerto de Argel."
      },
      {
        "q": "¿Qué nacionalidades pueden usar el visado a la llegada?",
        "a": "Está abierto a viajeros de cualquier nacionalidad con un programa organizado que incluya el Sáhara. Confirmamos su caso concreto por escrito antes de que reserve vuelos."
      },
      {
        "q": "¿Argelia tiene e-visa?",
        "a": "No, no existe un visado turístico electrónico general. Desconfíe de los sitios comerciales que lo prometen: como mucho son servicios de cumplimentación de formularios."
      },
      {
        "q": "¿Cuánto tarda el visado consular?",
        "a": "Entre unas dos semanas y más de un mes, según el consulado y la temporada. El verano y los periodos previos a las grandes fiestas son los más lentos."
      }
    ],
    "cta": {
      "h": "Díganos pasaporte y fechas",
      "p": "Le confirmamos por escrito qué vía le corresponde, antes de que reserve nada."
    },
    "seoTitle": "¿Necesita visado para Argelia? Las dos vías de entrada",
    "seoDescription": "Dos vías para Argelia: visado consular antes de viajar, o visado a la llegada en Argel con un viaje organizado que incluye el Sáhara."
  },
  {
    "slug": "asistencia-visado-argelia",
    "en": "/visa-support/",
    "fr": "/fr/assistance-visa-algerie/",
    "eyebrow": "Antes de viajar",
    "h1": "Asistencia para el visado de Argelia",
    "lead": "El visado es la parte de la planificación que echa atrás a más viajeros, casi siempre por un motivo sencillo: los consulados piden documentos que sólo puede emitir un operador argelino autorizado. Ese operador somos nosotros. No expedimos el visado — lo hace el consulado o la autoridad argelina — pero preparamos el expediente completo con su reserva y le decimos exactamente qué llevar.",
    "published": "2026-07-27",
    "sections": [
      {
        "h": "Qué preparamos (programas de al menos 3 días con traslados al aeropuerto)",
        "list": [
          "La carta de invitación oficial (voucher turístico) en papel con membrete de la agencia — 25 USD",
          "La confirmación del itinerario y de los hoteles, coherente con la carta",
          "La lista exacta de documentos exigidos para su nacionalidad",
          "Acompañamiento paso a paso hasta presentar el expediente"
        ]
      },
      {
        "h": "Vía 1 — el visado consular",
        "p": "Es la vía ordinaria para los viajes que se quedan en el norte — la costa, las ciudades romanas — y la única para quien viaja por libre. La solicitud se presenta en el consulado argelino que cubre su lugar de residencia, normalmente en persona. Casi todos los consulados exigen la carta de invitación de una agencia argelina autorizada: es justamente el documento que le emitimos. Que la carta y las reservas coincidan es lo que hace que un expediente pase o sea devuelto."
      },
      {
        "h": "Vía 2 — la autorización sahariana",
        "p": "Para los viajes organizados que incluyen una estancia en el Sáhara (Djanet, Tamanrasset, Timimún, el M'Zab…), preparamos por adelantado un documento de autorización de visado con código QR verificable en el portal del Ministerio del Interior argelino. El visado se estampa a la llegada en el aeropuerto de Argel, sin cita consular. Lo que cuenta es el itinerario, no el pasaporte: esta vía está abierta a viajeros de cualquier nacionalidad, siempre que el programa organizado incluya el Sáhara. El documento cuesta 45 USD; la preparación del expediente sigue siendo gratuita, y el sello de entrada se paga aparte en el aeropuerto de Argel, según la duración de la estancia."
      },
      {
        "h": "Lo que suele hacer falta",
        "list": [
          "Pasaporte con validez de al menos seis meses desde la fecha de entrada",
          "Fotografía reciente tamaño carné y formulario cumplimentado",
          "Reserva de vuelo",
          "Nuestra carta de invitación y la confirmación del circuito y los hoteles"
        ]
      },
      {
        "h": "Plazos",
        "p": "Para el visado consular calcule de dos a cuatro semanas, con diferencias notables entre consulados y temporadas: el verano y las vísperas de las grandes fiestas son lo más lento. La vía sahariana es más rápida porque no depende de una cita. En ambos casos recomendamos confirmar el viaje al menos un mes antes de la salida y no comprar vuelos no reembolsables hasta tener el visado."
      },
      {
        "h": "Lo que no prometemos",
        "p": "Las normas de entrada argelinas varían según la nacionalidad y cambian con el tiempo. No publicamos listas de países exentos, porque un error lo paga el viajero en la puerta de embarque: su consulado argelino es la autoridad sobre su propio pasaporte. Nosotros somos su socio documental, y confirmamos por escrito qué vía le corresponde antes de que reserve ningún vuelo."
      }
    ],
    "faqs": [
      {
        "q": "¿Cuánto cuesta su asistencia con el visado?",
        "a": "La carta de invitación cuesta 25 USD, con cualquier programa de al menos 3 días con recogida y traslado al aeropuerto; confirmaciones y lista de documentos no tienen coste. Para la vía sahariana la autorización cuesta 45 USD y el sello de entrada se paga aparte en el aeropuerto, según la duración de la estancia."
      },
      {
        "q": "¿Cuánto tarda el visado consular?",
        "a": "De dos a cuatro semanas de media, según el consulado y la temporada. Confirme el viaje al menos un mes antes y no compre vuelos no reembolsables hasta tener el visado en el pasaporte."
      },
      {
        "q": "¿Puedo combinar el norte y el desierto?",
        "a": "Sí. Basta con que el programa organizado incluya una estancia en el Sáhara: el resto del viaje puede transcurrir en Argel, en la costa y en las ciudades romanas."
      },
      {
        "q": "¿El documento de autorización es oficial?",
        "a": "Sí. Lleva un código QR verificable en el portal del Ministerio del Interior argelino. La emisión sigue los canales oficiales: nosotros llevamos el expediente, el visado lo conceden las autoridades argelinas."
      },
      {
        "q": "¿Tengo que reservar un circuito completo?",
        "a": "Para la vía sahariana sí: la autorización forma parte de la organización del viaje, no es un servicio suelto. Para la vía consular emitimos la carta de invitación (25 USD) para cualquier programa de al menos 3 días con recogida y traslado al aeropuerto, incluso enteramente en el norte."
      }
    ],
    "cta": {
      "h": "Díganos su nacionalidad y sus fechas",
      "p": "Le confirmamos por escrito qué vía le corresponde y le enviamos la lista de documentos."
    },
    "seoTitle": "Asistencia para el visado de Argelia | Algeria Compass",
    "seoDescription": "Carta de invitación (25 USD) para programas de al menos 3 días con traslados al aeropuerto, y visado a la llegada en Argel para viajes con Sáhara (45 USD)."
  },
  {
    "slug": "presupuesto-argelia",
    "en": "/blog/algeria-travel-cost/",
    "fr": "/fr/budget-algerie/",
    "eyebrow": "Presupuesto",
    "h1": "¿Cuánto cuesta un viaje a Argelia?",
    "published": "2026-08-01",
    "lead": "Argelia tiene fama de ser difícil de leer en materia de precios, y la causa es una peculiaridad: existe un tipo de cambio oficial y un tipo paralelo muy extendido, y la diferencia entre ambos es grande. Entendido eso, y pagando en efectivo, Argelia resulta un destino asequible en casi todo — con una excepción, el Sáhara guiado.",
    "sections": [
      {
        "h": "La respuesta corta",
        "list": [
          "Comida y transporte local — baratos para los estándares europeos",
          "Hoteles — gama media: entre 50 y 90 € la habitación confortable en ciudad",
          "Sáhara — el capítulo caro: guía acreditado, 4×4, permisos y vuelos internos"
        ]
      },
      {
        "h": "Cuánto al día en el norte",
        "p": "Un viajero de gama media gasta en el norte entre 55 y 110 € al día, sin contar el vuelo internacional: hotel confortable, algún traslado privado y un guía de jornada. Quien viaja con presupuesto ajustado — casas de huéspedes, comida local, tren y autobús — se mueve entre 25 y 45 €. Por encima de esa horquilla están los mejores hoteles, el conductor-guía privado y los vuelos internos, que suben la cifra deprisa."
      },
      {
        "h": "El Sáhara se presupuesta aparte",
        "p": "Una expedición guiada al desierto profundo es de otro orden de magnitud: en torno a 140–280 € al día o más, porque incluye guía acreditado, 4×4, permisos, combustible, agua y víveres. No es caro para lo que es una expedición, pero eclipsa la parte norte del viaje. Conviene calcularlo como un paquete propio, y es donde una buena planificación ahorra más."
      },
      {
        "h": "Efectivo, tarjetas y tipo de cambio",
        "p": "Para el viajero, Argelia es una economía de efectivo. Las tarjetas se aceptan poco fuera de los grandes hoteles de las ciudades y los cajeros no siempre son fiables. Lleve dinares para el gasto diario y algo de moneda fuerte — euros — para cambiar sobre el terreno, e infórmese de los tipos vigentes antes de salir: el tipo paralelo es sensiblemente mejor que el oficial y cambia lo que vale su presupuesto."
      },
      {
        "h": "Adónde va realmente el dinero",
        "list": [
          "El vuelo internacional — casi siempre el mayor gasto único del viaje",
          "El Sáhara, si baja al sur — guía, 4×4, permisos y vuelo interno",
          "La forma de cambiar el dinero — el margen entre el tipo oficial y el paralelo"
        ]
      },
      {
        "h": "Errores que salen caros",
        "list": [
          "Contar con la tarjeta de crédito en lugar de llevar efectivo en dinares",
          "Cambiar todo el dinero al tipo oficial sin haberse informado antes",
          "Subestimar el desierto: la etapa sahariana se presupuesta por separado",
          "No llevar nada de moneda fuerte que cambiar a la llegada"
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Es cara Argelia para viajar?",
        "a": "No para comida y transporte local, que son baratos para los estándares europeos. Los hoteles confortables son de gama media y las expediciones guiadas al Sáhara son la parte cara. Cuente entre 55 y 110 € al día en el norte, sin el vuelo internacional."
      },
      {
        "q": "¿Qué presupuesto diario hace falta en Argelia?",
        "a": "En el norte, entre 25 y 45 € al día viajando con presupuesto ajustado y entre 55 y 110 € en gama media. Una expedición guiada al desierto profundo es muy superior: en torno a 140–280 € al día una vez incluidos guías, 4×4 y permisos."
      },
      {
        "q": "¿Efectivo o tarjeta en Argelia?",
        "a": "Efectivo. La aceptación de tarjetas es limitada fuera de los hoteles de las grandes ciudades y los cajeros pueden fallar, así que lleve dinares y algo de moneda fuerte para cambiar."
      },
      {
        "q": "¿Por qué importa tanto el tipo de cambio?",
        "a": "Porque Argelia tiene un tipo oficial y un tipo paralelo muy extendido, y el margen entre ambos es importante. Cambiar moneda fuerte sobre el terreno puede estirar el presupuesto de forma notable, así que conviene entenderlo antes de llegar."
      },
      {
        "q": "¿Cuál es la parte más cara de un viaje a Argelia?",
        "a": "Después del vuelo internacional, el Sáhara guiado: exige guías acreditados, 4×4, permisos y vuelos internos. La parte norte del viaje resulta comparativamente asequible."
      }
    ],
    "cta": {
      "h": "Un presupuesto claro, todo incluido",
      "p": "Díganos sus fechas y cifraremos un viaje privado sin sorpresas sobre el terreno."
    },
    "seoTitle": "Presupuesto de viaje a Argelia 2026",
    "seoDescription": "¿Es cara Argelia? Desglose de costes: alojamiento, comida, transporte, guías y Sáhara, más el doble tipo de cambio que lo cambia todo sobre el terreno."
  },
  {
    "slug": "itinerario-argelia",
    "en": "/blog/algeria-itinerary/",
    "fr": "/fr/itineraire-algerie/",
    "eyebrow": "Itinerarios",
    "h1": "Itinerario por Argelia: 7, 10 y 14 días",
    "published": "2026-08-01",
    "lead": "Argelia es el país más grande de África, y el error de planificación más común es tratarlo como un solo destino. Un buen itinerario elige una o dos regiones y las recorre bien, en lugar de correr entre la costa mediterránea y el Sáhara profundo. Estos son tres planes que funcionan.",
    "sections": [
      {
        "h": "Cuántos días hacen falta",
        "list": [
          "Una semana basta para un viaje centrado en el norte: Argel, un tramo de costa y las ciudades romanas del este",
          "Diez días permiten añadir una región más: el oeste andalusí o el valle del M'Zab",
          "Dos semanas son el punto justo para un primer viaje que una el norte romano con una verdadera etapa sahariana"
        ]
      },
      {
        "h": "7 días — lo esencial del norte",
        "p": "Argel y la Casbah (2 noches), Tipaza en excursión de medio día desde la capital, Constantina (2 noches) como base del este, y Timgad y Djémila en excursiones — dos de las ciudades romanas mejor conservadas del mundo, y casi sin visitantes. Regreso a Argel vía Sétif. Todo es accesible por carretera y tren, sin permisos especiales. Mejor en primavera o en otoño."
      },
      {
        "h": "10 días — el norte y una región más",
        "p": "Se mantiene el núcleo de siete días y se añade un solo capítulo: el oeste andalusí, con Tlemcén (herencia almohade y ziyánida) y Orán, la ciudad del raï y de la costa; o bien el Sáhara septentrional, volando a Ghardaïa para recorrer el valle del M'Zab y sus cinco ciudades-oasis fortificadas. Ambas opciones añaden un segundo acto sin forzar la logística."
      },
      {
        "h": "14 días — el norte y el gran Sáhara",
        "p": "El primer viaje completo. El norte romano la primera semana y después un vuelo al sur para una etapa guiada en 4×4, siempre en la ventana de noviembre a febrero: Djanet, puerta del Tassili n'Ajjer y de su arte rupestre prehistórico, o Tamanrasset y las montañas del Hoggar con el amanecer del Assekrem. Las etapas del sur se organizan con operador autorizado, con guía, 4×4 y permisos."
      },
      {
        "h": "La logística que hace que funcione",
        "list": [
          "Vuele las etapas largas: Argel–Djanet y Argel–Tamanrasset no se hacen por carretera",
          "Respete la temporada: norte y oeste de marzo a mayo y de septiembre a noviembre, desierto de noviembre a febrero",
          "Empiece pronto con el papeleo: el visado se tramita con antelación y los permisos del sur los gestiona su operador"
        ]
      },
      {
        "h": "Errores frecuentes",
        "list": [
          "Querer ver el norte y el gran sur en una sola semana",
          "Conducir las etapas largas del sur para ahorrar — las distancias son enormes",
          "Programar el desierto en primavera o en verano",
          "Dejar el visado y los permisos del sur para el último momento"
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Cuántos días hacen falta para Argelia?",
        "a": "Calcule de 10 a 14 días para un primer viaje que combine el norte romano con una región desértica. Una semana basta si se queda en el norte, en torno a Argel y las ciudades romanas del este."
      },
      {
        "q": "¿Es suficiente una semana en Argelia?",
        "a": "Sí, para una región. Una semana cubre con holgura Argel, un tramo de costa y las ciudades romanas del este — Constantina, Timgad y Djémila. No alcanza para añadir el Sáhara profundo."
      },
      {
        "q": "¿Cuál es el mejor itinerario de 10 días?",
        "a": "Dedique la primera mitad a Argel y al circuito romano del este, y la segunda al oeste andalusí — Tlemcén y Orán — o a las ciudades-oasis del valle del M'Zab, según sus intereses."
      },
      {
        "q": "¿Se pueden combinar el norte y el Sáhara?",
        "a": "Sí, en catorce días: primero el norte romano y después un vuelo a Djanet o Tamanrasset para una etapa guiada en 4×4 por el Tassili n'Ajjer o el Hoggar, entre noviembre y febrero."
      },
      {
        "q": "¿Hace falta guía para un itinerario por Argelia?",
        "a": "En el norte no: se viaja por cuenta propia con algo de paciencia. El gran sur exige guía acreditado, 4×4 y permisos, de modo que esas etapas se organizan a través de un operador."
      }
    ],
    "cta": {
      "h": "Un itinerario privado a su medida",
      "p": "Díganos sus fechas y construimos el viaje a su alrededor, con las etapas del desierto y los permisos incluidos."
    },
    "seoTitle": "Itinerario por Argelia: 7, 10 y 14 días",
    "seoDescription": "Itinerarios listos para usar por Argelia — 7, 10 o 14 días: Argel, la costa, las ciudades romanas y el Sáhara, con rutas, temporadas y logística."
  },
  {
    "slug": "cocina-argelina",
    "en": "/blog/algerian-food-guide/",
    "fr": "/fr/cuisine-algerienne/",
    "eyebrow": "Cultura y cocina",
    "h1": "¿Qué comer en Argelia?",
    "published": "2026-08-01",
    "lead": "La cocina argelina está en un cruce de caminos: tradiciones amazigh, árabes, otomanas, andalusíes y francesas en la misma mesa. Es generosa, perfumada y distinta de una región a otra. Comer en Argelia rara vez es una transacción y casi siempre es hospitalidad: uno se sienta y la comida sigue llegando mucho después de estar saciado.",
    "sections": [
      {
        "h": "Los imprescindibles",
        "list": [
          "Cuscús — el plato nacional, sémola al vapor con caldo de carne y verduras, tradicionalmente el viernes y en las celebraciones",
          "Chorba y h'rira — sopas perfumadas que abren la comida de la tarde, muy presentes en Ramadán",
          "Mechoui — cordero asado, plato de fiesta",
          "Tayines — guisos lentos con aceitunas, ciruelas o membrillo",
          "Bourek — rollos de hojaldre fritos, de carne o de queso"
        ]
      },
      {
        "h": "Más allá del cuscús",
        "p": "Los platos de todos los días cambian de una región y de una familia a otra. Busque la rechta, fideos finos estirados a mano típicos de Argel; el mhadjeb, una torta de sémola rellena que se vende en la calle; el hmiss, una ensalada cocida de pimiento asado y tomate; y la chakhchoukha del este. El pan es sagrado, de la baguette a la kesra plana y al msemen hojaldrado."
      },
      {
        "h": "Dulces y pastelería",
        "p": "La repostería argelina se apoya en la almendra, el dátil, la miel y el agua de azahar. No se pierda los makrout de sémola y dátil, los cuernos de gacela, la baklawa ni las bandejas de dulces que aparecen en cualquier visita. Se comen con té o con un café corto, y siempre en cantidad mayor de la prevista."
      },
      {
        "h": "El ritual del té",
        "p": "En el Sáhara, los tres vasos de té a la menta servidos desde lo alto son una ceremonia y no una bebida que despachar. El primero es amargo, el segundo dulce y el tercero suave; rechazarlos con prisa es el único error de verdad. En el norte compite con un café fuerte de herencia mediterránea."
      },
      {
        "h": "Bueno saber",
        "list": [
          "La comida es predominantemente halal y no se sirve cerdo",
          "El alcohol existe en algunos hoteles y locales autorizados, pero está poco extendido: conviene la discreción fuera de las grandes ciudades",
          "La cocina es perfumada más que picante — comino, cilantro, canela, y harissa aparte",
          "Los vegetarianos se defienden bien con ensaladas, sopas, pan y cuscús de verduras, aunque muchos caldos llevan carne",
          "En el sur, beba siempre agua embotellada"
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Cuál es el plato nacional de Argelia?",
        "a": "El cuscús: sémola al vapor con un caldo de carne y verduras, que se come tradicionalmente los viernes y en las celebraciones. La UNESCO lo reconoce como patrimonio compartido del Magreb."
      },
      {
        "q": "¿Qué hay que comer en Argelia?",
        "a": "Cuscús, chorba, mechoui, tayines y bourek entre los grandes clásicos; rechta, mhadjeb y hmiss en el día a día; y una repostería enorme de miel y almendra, como los makrout y los cuernos de gacela."
      },
      {
        "q": "¿Hay alcohol en Argelia?",
        "a": "Argelia es un país de mayoría musulmana: el alcohol se encuentra en algunos hoteles y locales autorizados, pero está poco extendido. Sea discreto, sobre todo fuera de las grandes ciudades."
      },
      {
        "q": "¿Es picante la cocina argelina?",
        "a": "Es perfumada más que picante: comino, cilantro y canela dominan, y la harissa suele servirse aparte. Casi siempre se puede ajustar el punto de picante."
      },
      {
        "q": "¿Es fácil ser vegetariano en Argelia?",
        "a": "Razonablemente. Ensaladas, sopas, pan y cuscús de verduras son habituales, aunque conviene preguntar: muchos caldos se hacen con carne."
      }
    ],
    "cta": {
      "h": "Pruebe Argelia con nosotros",
      "p": "Nuestros circuitos reservan un lugar de verdad a la mesa, a los mercados y a las casas que cocinan."
    },
    "seoTitle": "Cocina argelina: qué comer en Argelia",
    "seoDescription": "Qué comer en Argelia: cuscús, chorba, mechoui, tayines, dulces y té a la menta. La cocina argelina plato a plato, con las notas prácticas útiles."
  },
  {
    "slug": "nieve-sahara-argelia",
    "en": "/blog/algeria-snow-to-sahara/",
    "fr": "/fr/neige-sahara-algerie/",
    "eyebrow": "Invierno en Argelia",
    "h1": "De la nieve al Sáhara: cuatro estaciones en un viaje",
    "published": "2026-08-01",
    "lead": "Casi todo el mundo imagina Argelia como un solo decorado: arena. Es el país más grande de África y sus climas se apilan — costa mediterránea, montañas boscosas, altiplanos fríos y después el Sáhara. En invierno, esa superposición produce un viaje poco común: nieve un día y dunas cálidas pocos días después.",
    "sections": [
      {
        "h": "Sí, nieva en Argelia",
        "list": [
          "Chréa, en los cedros sobre Blida — a una hora de Argel, con una pequeña estación de esquí",
          "Tikjda, en el macizo del Djurdjura, en la Cabilia — senderismo, nieve y otra estación modesta",
          "Los Aurés, sobre Batna — cumbres nevadas cerca de la ciudad romana de Timgad"
        ]
      },
      {
        "h": "Una nieve real, no alpina",
        "p": "La nieve cae por lo general entre diciembre y marzo, y los altiplanos de Sétif y Batna conocen inviernos francamente fríos, con nevadas ocasionales en las propias ciudades. Las instalaciones son modestas y no tienen nada que ver con los Alpes; lo que sí es real es la nieve, el bosque de cedros y el silencio."
      },
      {
        "h": "Las cuatro zonas, en un solo país",
        "list": [
          "Costa mediterránea — suave, verde y agradable a pie, en torno a 10–17 °C, con algo de lluvia",
          "Montañas — cedros, nieve y pequeñas estaciones, cerca o por debajo de cero",
          "Altiplanos — ciudades romanas, cielos inmensos y frío seco",
          "Sáhara — dunas, arte rupestre y vivacs, con días de 20–25 °C y noches heladas"
        ]
      },
      {
        "h": "La semana nieve-Sáhara",
        "p": "El contraste sólo funciona de diciembre a febrero, cuando la temporada de nieve en la montaña coincide con la gran temporada sahariana. Un esquema que funciona: Argel dos noches, con la Casbah y el aire marino; Chréa en excursión de un día o una noche, entre cedros y nieve; vuelo a Djanet o Tamanrasset para tres o cuatro noches de 4×4 guiado, dunas y vivac bajo un cielo de invierno excepcional; y, si queda tiempo, el este romano — Timgad y Djémila — en jornadas frías y limpias. El sur se hace en avión: las distancias por carretera son enormes."
      },
      {
        "h": "Hacer la maleta para dos climas",
        "p": "Es la parte que más gente falla. En la misma maleta hacen falta capas de abrigo de montaña — ropa caliente de verdad, capa exterior impermeable y calzado decente — y el equipo del desierto: protección solar fuerte para el día y, otra vez, ropa de abrigo para unas noches saharianas que se acercan a cero."
      },
      {
        "h": "Cuándo no funciona",
        "p": "En primavera la nieve ya se ha ido: el norte está espléndido, pero el contraste desaparece. En verano el desierto profundo es peligrosamente caluroso y queda excluido. Es, por tanto, un viaje exclusivamente invernal, que encaja bien con las fechas de Navidad y Año Nuevo, cuando el Sáhara está en su mejor momento."
      }
    ],
    "faqs": [
      {
        "q": "¿Nieva en Argelia?",
        "a": "Sí. El Atlas recibe nieve de invierno de verdad: Chréa sobre Blida, el Djurdjura en torno a Tikjda, en la Cabilia, y los Aurés. Suele nevar entre diciembre y marzo, y los altiplanos de Sétif y Batna también tienen inviernos fríos y a veces nevados."
      },
      {
        "q": "¿Se puede esquiar en Argelia?",
        "a": "Hay pequeñas estaciones en Chréa, a alrededor de una hora de Argel, y en Tikjda, en el Djurdjura. Son instalaciones modestas y no estaciones alpinas, pero en un buen invierno el esquí y las jornadas de nieve son perfectamente posibles."
      },
      {
        "q": "¿Se pueden ver la nieve y el Sáhara en el mismo viaje?",
        "a": "Sí, en invierno. Argelia apila costa mediterránea, montañas, altiplanos y desierto: se puede caminar sobre la nieve entre los cedros cerca de Blida y, tras un corto vuelo interno, estar entre las dunas cálidas del Sáhara esa misma semana."
      },
      {
        "q": "¿Cuál es el mejor mes para el contraste nieve-Sáhara?",
        "a": "De diciembre a febrero. Esa ventana superpone la temporada de nieve en la montaña con la gran temporada sahariana, cuando los días del desierto son suaves y las noches claras y frías. En primavera la nieve ya ha desaparecido y en verano el gran desierto es impracticable."
      },
      {
        "q": "¿Cuánto frío hace en Argelia?",
        "a": "En la montaña se baja a cero o por debajo en invierno, con nieve. La costa norte se mantiene suave, en torno a 10–17 °C. Los días saharianos son cálidos, a menudo de 20–25 °C, pero las noches del desierto pueden acercarse a cero, y eso sorprende a casi todo el mundo."
      }
    ],
    "cta": {
      "h": "¿La versión nieve y Sáhara de sus vacaciones?",
      "p": "Díganos sus fechas: jornadas de montaña, vuelo al sur, permisos y vivacs incluidos."
    },
    "seoTitle": "De la nieve al Sáhara: Argelia en invierno",
    "seoDescription": "¿Nieva en Argelia? Sí: Chréa, Tikjda y los Aurés. Cómo ver la nieve del Atlas y las dunas cálidas del Sáhara en la misma semana de invierno."
  },
  {
    "slug": "navidad-ano-nuevo-argelia",
    "en": "/blog/christmas-new-year-in-algeria/",
    "fr": "/fr/noel-nouvel-an-algerie/",
    "eyebrow": "Escapada de invierno",
    "h1": "Navidad y Año Nuevo en Argelia",
    "published": "2026-08-01",
    "lead": "Casi todo el mundo reserva la Navidad en destinos caros y abarrotados. Argelia ofrece justo lo contrario: días templados en el desierto, yacimientos de primer orden vacíos y ninguna subida de precios por las fiestas — porque en un país de mayoría musulmana el 25 de diciembre es un día laborable como otro cualquiera.",
    "sections": [
      {
        "h": "Por qué finales de diciembre es un buen momento",
        "list": [
          "El Sáhara está en plena temporada — días de 20–25 °C y noches frías y extraordinariamente limpias; una Nochebuena en un campamento del desierto no se olvida",
          "El norte sigue templado y verde, en torno a 10–17 °C, mientras Europa tirita",
          "El Atlas tiene nieve — Chréa y el Djurdjura, a una o dos horas de la capital",
          "No hay multitudes: ni colas en Timgad, ni recargo festivo en los hoteles"
        ]
      },
      {
        "h": "Cómo es la Navidad sobre el terreno",
        "p": "Seamos claros: Argelia no celebra la Navidad en el sentido comercial. No encontrará mercadillos, calles decoradas ni menús festivos fuera de un puñado de hoteles internacionales. Lo que sí hay son oficios religiosos: la pequeña comunidad cristiana celebra la Navidad en la catedral del Sagrado Corazón y en la basílica de Nuestra Señora de África, en Argel, así como en Orán y en Constantina. Nuestra Señora de África es además un lugar de visita habitual todo el año, con una vista soberbia sobre la bahía. Por lo demás, normalidad completa — que, si uno está cansado de la temporada comercial, es precisamente el atractivo."
      },
      {
        "h": "Año Nuevo y después Yennayer",
        "p": "El 1 de enero es festivo en Argelia. Y el 12 de enero llega Yennayer, el Año Nuevo amazigh, también fiesta nacional, celebrado con comidas tradicionales y reuniones familiares, con especial fuerza en la Cabilia, los Aurés y el M'Zab. Un viaje que vaya de finales de diciembre a mediados de enero puede reunir así tres celebraciones."
      },
      {
        "h": "Una semana que funciona",
        "p": "De siete a diez días durante las fiestas: Argel dos o tres noches, con la Casbah, el paseo marítimo y Nuestra Señora de África; vuelo al sur, a Djanet o Tamanrasset, para una etapa guiada en el desierto de tres o cuatro noches, con dunas, arte rupestre y vivac bajo las estrellas en plena Navidad; y regreso al norte para el Año Nuevo, o desvío por Chréa en busca de la nieve y el bosque de cedros."
      },
      {
        "h": "Notas prácticas",
        "list": [
          "Prepare la maleta para los dos extremos: norte templado y a veces lluvioso, y noches del desierto próximas a cero",
          "Empiece pronto con el visado — diciembre es un periodo cargado en los consulados",
          "Reserve la etapa del desierto con antelación: el invierno es la alta temporada del Sáhara y la capacidad guiada es limitada",
          "No espere que todo cierre el 25 de diciembre: es un día laborable y comercios, yacimientos y transportes funcionan con normalidad"
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Se puede pasar la Navidad en Argelia?",
        "a": "Sí, y es una época excelente. La Navidad no es festivo en Argelia: todo funciona con normalidad, sin multitudes ni subidas de precio. Finales de diciembre es además la plena temporada del Sáhara, con días templados y noches claras, mientras el norte se mantiene suave. Hay oficios religiosos en Argel, Orán y Constantina para quien desee asistir."
      },
      {
        "q": "¿Es Argelia un buen destino de sol invernal?",
        "a": "Para el desierto, sí: en diciembre y enero los días saharianos alcanzan a menudo 20–25 °C, con noches frías y despejadas, y el norte mediterráneo sigue templado y verde, en torno a 10–17 °C. No es, en cambio, un destino de baño en invierno."
      },
      {
        "q": "¿Qué tiempo hace en Argelia en diciembre?",
        "a": "La costa norte está templada y bastante lluviosa, entre 10 y 17 °C. El Atlas puede estar nevado. El Sáhara es seco, con días cálidos de 20–25 °C y noches que pueden acercarse a cero."
      },
      {
        "q": "¿Hay celebraciones de Navidad en Argelia?",
        "a": "No en el sentido comercial: no hay mercadillos navideños y el 25 de diciembre es día laborable. La pequeña comunidad cristiana lo celebra en la iglesia — catedral del Sagrado Corazón y Nuestra Señora de África en Argel, y también en Orán y Constantina."
      },
      {
        "q": "¿Es festivo el Año Nuevo en Argelia?",
        "a": "Sí, el 1 de enero es festivo. Yennayer, el Año Nuevo amazigh, es también fiesta nacional el 12 de enero, de modo que un viaje entre finales de diciembre y enero puede abarcar ambas."
      }
    ],
    "cta": {
      "h": "¿Un fin de año entre las dunas?",
      "p": "Díganos sus fechas y montamos el itinerario de las fiestas, permisos incluidos."
    },
    "seoTitle": "Navidad y Año Nuevo en Argelia",
    "seoDescription": "Navidad y Año Nuevo en Argelia: plena temporada del Sáhara, costa templada, nieve en el Atlas y ninguna multitud ni subida de precios por las fiestas."
  },
  {
    "slug": "transporte-argelia",
    "en": "/blog/algeria-transportation-guide/",
    "fr": "/fr/transport-algerie/",
    "eyebrow": "Transporte",
    "h1": "Cómo moverse por Argelia",
    "published": "2026-08-01",
    "lead": "Argelia es el país más grande de África, y el mayor error del viajero es tratarlo como uno pequeño. Ir del Mediterráneo al Sáhara profundo es un trayecto continental, no una excursión. La regla es sencilla: volar las distancias largas, sobre todo hacia el sur, y usar tren, autobús y taxi en el norte. El desierto sólo se recorre en 4×4 con guía.",
    "sections": [
      {
        "h": "Vuelos internos",
        "p": "Para las etapas largas, y sobre todo para llegar al Sáhara, el avión es la opción sensata. Air Algérie, junto a otras compañías, conecta Argel, Orán y Constantina entre sí y con las puertas del sur — Djanet, Tamanrasset y Ghardaïa. Un vuelo convierte varios días de carretera en un par de horas. Las rutas del sur tienen frecuencias limitadas y se llenan en fiestas y vacaciones: reserve con mucha antelación."
      },
      {
        "h": "Tren y autobús en el norte",
        "p": "La compañía nacional SNTF opera trenes interurbanos por todo el norte poblado y enlaza Argel con Orán, Constantina, Annaba y Sétif, además de las líneas de cercanías de la capital. Los trenes de las líneas principales son cómodos y en tramos muy panorámicos. El autobús interurbano es el caballo de batalla del país: red amplia, tarifas bajas y conexiones con ciudades a las que el tren no llega."
      },
      {
        "h": "Taxis compartidos y taxis urbanos",
        "p": "Donde el tren y el autobús se agotan aparece el louage, el taxi compartido: rutas fijas entre localidades, salida cuando el vehículo se llena — no por horario — y pago en efectivo. Son rápidos y útiles para cubrir huecos, a cambio de cierta imprevisibilidad. Acuerde la tarifa o confirme el precio fijo antes de salir, y cuente con viajar con el coche completo."
      },
      {
        "h": "Tranvías y metro",
        "p": "Las grandes ciudades están bien servidas: Argel tiene metro y tranvía, y Orán, Constantina y Sétif, entre otras, disponen de tranvías modernos, baratos y fáciles de usar. Para moverse dentro de la ciudad son la mejor opción, muy por delante del coche."
      },
      {
        "h": "Conductor privado y alquiler de coche",
        "p": "Muchos visitantes con poco tiempo, o poco dispuestos a conducir, contratan un conductor privado por jornadas o para todo el itinerario: desaparecen la navegación, el aparcamiento, el idioma y los controles, y el conocimiento local convierte el trayecto en parte del viaje. El alquiler de coche existe en las ciudades y los aeropuertos y encaja bien en el norte, donde las carreteras principales son buenas."
      },
      {
        "h": "El desierto: 4×4 y guía",
        "p": "El Sáhara tiene su propia lógica y no es negociable: se llega en avión a una ciudad del sur y desde allí se viaja en 4×4 guiado dentro de las zonas autorizadas. Los operadores acreditados aportan vehículos, conductores y guías experimentados, combustible, agua y comunicaciones, y gestionan los permisos. Conducir por libre en el desierto no es una alternativa más barata: es la herramienta equivocada."
      },
      {
        "h": "Carreteras y buenas costumbres",
        "list": [
          "La autopista este-oeste y los ejes principales están en buen estado; los riesgos son de comportamiento y de entorno",
          "Evite las carreteras rurales de noche, cuando el riesgo aumenta con claridad",
          "Los controles de policía y gendarmería son rutinarios: tenga la documentación a mano y sea paciente",
          "Lleve efectivo — muchos billetes y todos los louages se pagan en metálico",
          "Deje margen entre enlaces: los horarios pueden moverse y la escala del país castiga la planificación ajustada"
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Cuál es la mejor forma de moverse por Argelia?",
        "a": "Volar las distancias largas, sobre todo hacia el Sáhara; usar tren y autobús entre las ciudades del norte; recurrir al taxi compartido para los trayectos cortos; y viajar en 4×4 con guía en el desierto."
      },
      {
        "q": "¿Hay vuelos internos en Argelia?",
        "a": "Sí. Air Algérie y otras compañías enlazan Argel, Orán y Constantina entre sí y con ciudades del sur como Djanet, Tamanrasset y Ghardaïa. Reserve con antelación: las frecuencias del sur son limitadas."
      },
      {
        "q": "¿Hay trenes en Argelia?",
        "a": "Sí. La compañía nacional SNTF opera trenes interurbanos por el norte, cómodos en las líneas principales, además de servicios de cercanías en torno a Argel."
      },
      {
        "q": "¿Se puede alquilar un coche en Argelia?",
        "a": "Sí, sobre todo en las ciudades y los aeropuertos. Funciona bien en el norte; para el desierto, en cambio, hay que recurrir a un operador autorizado con 4×4 en lugar de conducir por libre."
      },
      {
        "q": "¿Cómo se llega al Sáhara?",
        "a": "En avión hasta una puerta del sur, como Djanet o Tamanrasset, y desde allí en 4×4 guiado, organizado por un operador autorizado que gestiona los permisos."
      }
    ],
    "cta": {
      "h": "Nos ocupamos de toda la logística",
      "p": "Vuelos internos, traslados y 4×4 del desierto — organizados por nosotros de principio a fin."
    },
    "seoTitle": "Cómo moverse por Argelia: transporte 2026",
    "seoDescription": "Cómo moverse por Argelia: vuelos internos al sur, tren y autobús en el norte, taxis compartidos, tranvías y 4×4 con guía para el desierto."
  },
  {
    "slug": "djanet-o-timimoun",
    "en": "/blog/djanet-vs-timimoun/",
    "fr": "/fr/djanet-ou-timimoun/",
    "eyebrow": "Sáhara",
    "h1": "¿Djanet o Timimoun? Cómo elegir su Sáhara argelino",
    "published": "2026-09-24",
    "lead": "Pregunte a cualquiera que prepare su primer viaje al Sáhara argelino y la duda acabará reduciéndose a dos nombres: Djanet o Timimoun. Los dos son saharianos, los dos son rojos, los dos son extraordinarios… y no se parecen en nada como viaje. Elija Djanet si busca el Sáhara profundo: la arenisca roja del Tadrart, el arte rupestre prehistórico del Tassili n'Ajjer y noches de acampada en pleno desierto, a 2.000 km al sur de Argel. Elija Timimoun si prefiere una iniciación más fácil y cálida: ksur rojos construidos en barro, palmerales regados por antiguas foggaras y grandes dunas, con todas las noches en una casa de huéspedes. Nuestros viajes a Djanet duran de 5 a 7 días, desde 828 €; el de Timimoun, 5 días desde 492 €. Organizamos circuitos a ambos destinos, así que aquí va la comparación sin rodeos.",
    "sections": [
      {
        "h": "La respuesta corta",
        "list": [
          "Vaya a Djanet por el desierto profundo: los arcos de arenisca y los mares de dunas del Tadrart Rouge, el arte rupestre prehistórico del Tassili n'Ajjer y noches de acampada bajo un cielo sin una sola luz.",
          "Vaya a Timimoun por el oasis vivo: ksur rojos de barro, huertos de palmeras alimentados por foggaras milenarias, mercados y música, y una cama en una casa de huéspedes cada noche."
        ],
        "links": [
          { "href": "/es/circuitos/tadrart-rouge-7-days/", "text": "Circuito Tadrart Rouge, 7 días" },
          { "href": "/es/destinos/tassili-najjer/", "text": "Tassili n'Ajjer, patrimonio de la UNESCO" },
          { "href": "/es/destinos/djanet/", "text": "Djanet, puerta del Tassili" }
        ]
      },
      {
        "h": "El paisaje",
        "p": "Djanet es el Sáhara que casi todo el mundo imagina antes de haberlo visto. Alrededor de la ciudad, la arena rosada choca contra la roca negra y roja: torres, cañones, arcos naturales y los grandes campos de dunas del Tadrart, al sureste, hacia la frontera libia. Es un territorio salvaje que se recorre en 4×4, deteniéndose donde el paisaje lo pide. Timimoun es más amable y más humano. La ciudad y los ksur del Gurara que la rodean están construidos con la misma tierra roja del suelo, asomados a los palmerales en el borde del Gran Erg Occidental. Las dunas están ahí — y nuestro viaje incluye una tarde en 4×4 entre ellas —, pero el corazón de todo es el oasis."
      },
      {
        "h": "Lo que realmente se ve",
        "list": [
          "Djanet: grabados y pinturas rupestres de hasta 10.000 años que retratan un Sáhara verde de jirafas, elefantes y ganado — la «vaca que llora» de Tigharghart, las jirafas de Tin Abadène y, para quien camina, los muros pintados de Sefar. Y, en el circuito de Ihrir, algo que nadie espera: pozas de agua permanente en mitad del desierto.",
          "Timimoun: los ksur de Charouine y Tala, las foggaras subterráneas que todavía llevan el agua a los huertos, el mercado y veladas de música tradicional."
        ],
        "links": [
          { "href": "/es/circuitos/sefar-tassili-trek/", "text": "Trekking de Sefar, 7 días" },
          { "href": "/es/circuitos/ihrir-oasis-7-days/", "text": "Ihrir y el Tassili, 7 días" },
          { "href": "/es/circuitos/timimoun-desert-escape/", "text": "Escapada al desierto de Timimoun, 5 días" }
        ]
      },
      {
        "h": "Comodidad y esfuerzo",
        "p": "Aquí es donde suele decidirse la elección.",
        "list": [
          "Timimoun es de nivel fácil a moderado: cuatro noches en una casa de huéspedes, con excursiones de ida y vuelta.",
          "Djanet en 4×4 es de nivel moderado: paseos cortos y subidas a dunas, pero la mayoría de las noches se pasan en campamentos en el desierto, y en invierno rozan la helada. En cuanto se sale de la ciudad no hay cobertura de móvil, y en eso consiste precisamente la gracia.",
          "El trekking de Sefar es exigente: de cuatro a siete horas de marcha al día por la meseta del Tassili, con burros que cargan el campamento. Sólo para quien camina con regularidad."
        ]
      },
      {
        "h": "Temporada",
        "p": "Los dos son destinos de invierno: de octubre a abril, con noviembre a febrero como los meses más despejados y frescos. El sur profundo no se recorre en verano.",
        "links": [
          { "href": "/es/cuando-viajar-argelia/", "text": "Cuándo viajar a Argelia, mes a mes" }
        ]
      },
      {
        "h": "Precio",
        "p": "Nuestros precios publicados, por persona:",
        "list": [
          "Safari por el Sáhara en Djanet, 5 días: desde 828 € (comienza en Djanet)",
          "Tadrart Rouge, 7 días: desde 920 €, con el vuelo de ida y vuelta Argel ⇄ Djanet incluido",
          "Ihrir y el Tassili, 7 días: desde 920 €, vuelo de ida y vuelta incluido",
          "Trekking de Sefar, 7 días: desde 1.120 €, vuelo de ida y vuelta incluido",
          "Escapada al desierto de Timimoun, 5 días: desde 492 € (comienza en Timimoun)"
        ],
        "links": [
          { "href": "/es/circuitos/djanet-sahara-safari/", "text": "Safari por el Sáhara en Djanet, 5 días" },
          { "href": "/es/presupuesto-argelia/", "text": "Cuánto cuesta un viaje a Argelia" }
        ]
      },
      {
        "h": "Djanet y Timimoun de un vistazo",
        "table": {
          "caption": "Djanet frente a Timimoun",
          "columns": ["Djanet", "Timimoun"],
          "rows": [
            { "label": "Paisaje", "cells": ["Arenisca roja y negra, arcos, cañones, mares de dunas", "Ksur de tierra roja, palmerales, dunas del Gran Erg Occidental"] },
            { "label": "Lo imprescindible", "cells": ["El arte rupestre prehistórico del Tassili n'Ajjer", "Las foggaras de regadío y los ksur del Gurara"] },
            { "label": "Dónde se duerme", "cells": ["Campamentos en el desierto y vivac salvaje", "Una casa de huéspedes, cuatro noches"] },
            { "label": "Esfuerzo", "cells": ["Moderado en 4×4; exigente a pie hasta Sefar", "De fácil a moderado"] },
            { "label": "Cultura", "cells": ["Guías y hospitalidad tuareg (kel ajjer)", "Cultura zenata de los oasis, mercados y música"] },
            { "label": "Nuestros viajes", "cells": ["5–7 días, 828–1.120 €", "5 días, 492 €"] },
            { "label": "Ideal para", "cells": ["El desierto profundo, fotógrafos, arte rupestre", "Un primer viaje al Sáhara, comodidad, arquitectura"] }
          ]
        }
      },
      {
        "h": "Errores frecuentes",
        "list": [
          "Tratarlos como «complementos de desierto» intercambiables: son viajes distintos. Djanet es naturaleza salvaje y acampada; Timimoun, ciudades-oasis y casa de huéspedes.",
          "Planear cualquiera de los dos para julio o agosto: vaya entre octubre y abril. El sur profundo no se recorre en verano.",
          "Dar por hecho que se pueden combinar por carretera en un día: están en extremos opuestos del Sáhara argelino. Combínelos en avión y téngalo en cuenta en las fechas.",
          "Llevar poca ropa para la noche: en invierno las noches rozan la helada en ambos destinos. Lleve abrigo de verdad, sobre todo para acampar en torno a Djanet."
        ]
      },
      {
        "h": "Entonces, ¿cuál elegir?",
        "p": "Si quiere el Sáhara en estado puro — vacío, roca, arena y el arte más antiguo de África —, elija Djanet. Si quiere el desierto con gente dentro, una cama caliente y un ritmo más tranquilo, elija Timimoun. Y si dispone de diez días, nada le obliga a elegir: díganos sus fechas y uniremos los dos en un solo viaje. En cuanto a los trámites: como ambos viajes incluyen el Sáhara, el visado puede emitirse a la llegada en el aeropuerto de Argel.",
        "links": [
          { "href": "/es/contacto/", "text": "Díganos sus fechas" },
          { "href": "/es/evisa-argelia/", "text": "Entrada y visado a la llegada" },
          { "href": "/es/tadrart-o-tassili/", "text": "¿Tadrart Rouge, Ihrir o Sefar? Cómo elegir su viaje a Djanet" }
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Qué es mejor para un primer viaje al Sáhara, Djanet o Timimoun?",
        "a": "Timimoun es la iniciación más fácil: noches cálidas en una casa de huéspedes, excursiones cortas y mucha cultura. Djanet ofrece la experiencia de desierto más intensa — los paisajes y el arte rupestre que casi todo el mundo imagina al pensar en el Sáhara — y resulta perfectamente asequible en nuestros itinerarios en 4×4 para cualquiera con una forma física razonable."
      },
      {
        "q": "¿Cuánto cuesta un viaje a Djanet o a Timimoun?",
        "a": "Con Algeria Compass, nuestro Safari por el Sáhara en Djanet de 5 días cuesta desde 828 € por persona; los circuitos de 7 días del Tadrart Rouge y de Ihrir, desde 920 € con el vuelo de ida y vuelta desde Argel incluido; y el trekking de Sefar de 7 días, desde 1.120 €. La Escapada al desierto de Timimoun, de 5 días, cuesta desde 492 € por persona."
      },
      {
        "q": "¿Cuál es la mejor época para visitar Djanet y Timimoun?",
        "a": "De octubre a abril en ambos casos. De noviembre a febrero los días son los más despejados y frescos en el desierto, y las noches, frías. El sur profundo no se recorre en verano."
      },
      {
        "q": "¿Se duerme en tienda de campaña en Djanet?",
        "a": "En nuestros viajes a Djanet, sí: la mayoría de las noches se pasan en campamentos en el desierto o en vivac salvaje, con tiendas, colchonetas y mantas incluidas, y algunos viajeros prefieren dormir al raso. En Timimoun se duerme todas las noches en una casa de huéspedes."
      },
      {
        "q": "¿Se pueden visitar Djanet y Timimoun en un mismo viaje?",
        "a": "Sí, con diez días o más. Están muy alejados dentro del Sáhara, así que el enlace se hace en avión y no por carretera; nosotros organizamos los vuelos y las fechas en función de su viaje."
      }
    ],
    "cta": {
      "h": "¿Djanet, Timimoun o los dos?",
      "p": "Cuéntenos sus fechas y cómo le gusta viajar: le diremos con franqueza qué desierto le conviene, o los uniremos en un solo viaje."
    },
    "seoTitle": "¿Djanet o Timimoun? Qué Sáhara argelino visitar (2026)",
    "seoDescription": "¿Djanet o Timimoun? Comparación honesta de los dos grandes destinos del Sáhara argelino: paisaje, arte rupestre, comodidad, temporada y precios reales."
  },
  {
    "slug": "tadrart-o-tassili",
    "en": "/blog/tadrart-vs-tassili/",
    "fr": "/fr/tadrart-ou-tassili/",
    "eyebrow": "Sáhara",
    "h1": "¿Tadrart Rouge, Ihrir o Sefar? Cómo elegir su viaje a Djanet",
    "published": "2026-09-24",
    "lead": "Djanet es la puerta de entrada a la parte más profunda y más bella del Sáhara argelino, y una vez decidido el viaje surge la siguiente pregunta: ¿qué Djanet? Desde allí salen tres viajes muy distintos. El Tadrart Rouge es el clásico: dunas rosadas, arcos de piedra y grabados rupestres, en 4×4 y con seis noches de vivac. Ihrir es el Tassili más verde: pozas permanentes, cañones y dunas, también en 4×4. Sefar es una expedición a pie a la meseta del Tassili, hasta la mayor galería de pintura prehistórica del Sáhara, con 4–7 horas de marcha al día. Los tres duran 7 días desde Argel con el vuelo incluido: Tadrart e Ihrir desde 920 €, Sefar desde 1.120 € por persona. Así se elige entre ellos.",
    "sections": [
      {
        "h": "La respuesta corta",
        "list": [
          "Tadrart Rouge, 7 días: el clásico. Dunas rosadas, arcos de piedra y grabados célebres, en 4×4 y con seis noches de vivac. Desde 920 €.",
          "Ihrir y el Tassili, 7 días: la sorpresa. Pozas permanentes, un cañón en el que a veces se puede nadar, dunas y roca esculpida por el viento, en 4×4. Desde 920 €.",
          "Trekking de Sefar, 7 días: la expedición. A pie hasta la meseta del Tassili, a la mayor galería al aire libre de pintura prehistórica del Sáhara. Desde 1.120 €."
        ],
        "links": [
          { "href": "/es/circuitos/tadrart-rouge-7-days/", "text": "Circuito Tadrart Rouge, 7 días" },
          { "href": "/es/circuitos/ihrir-oasis-7-days/", "text": "Ihrir y el Tassili, 7 días" },
          { "href": "/es/circuitos/sefar-tassili-trek/", "text": "Trekking de Sefar, 7 días" },
          { "href": "/es/djanet-o-timimoun/", "text": "¿Aún duda entre Djanet y Timimoun? Lea primero esta comparación" }
        ]
      },
      {
        "h": "Tadrart Rouge: el Sáhara de las fotografías",
        "p": "El Tadrart se extiende al sureste de Djanet, hacia la frontera libia, y es lo que casi todo el mundo imagina al pensar en el Sáhara: arena rosada contra roca negra y roja. A lo largo de la semana se cambia de campamento cada tarde — las gargantas de El Berdj, las dunas de Moul Naga, el gran mar de arena del Erg Tin Merzouga al atardecer, los arcos en torno a Ajelati y la «catedral» de arenisca de Tamezguida. Y no es sólo paisaje: las jirafas y los elefantes grabados en Tin Abadène y la «vaca que llora» de Tigharghart figuran entre las obras de arte rupestre más famosas de África, y se llega hasta ellas a pie de roca."
      },
      {
        "h": "Ihrir: un Sáhara con agua",
        "p": "Ihrir es un oasis hundido en el Tassili donde el agua nunca se seca: gueltas permanentes rodeadas de juncos y verdor. La semana continúa por las dunas del Erg Admer, el cañón de Oued Essendilène (con baño, según la temporada), las torres esculpidas por el viento de Tikoubaouine y Adaik, conocido en la zona como el «pequeño Sefar» por su arte rupestre. La primera noche se pasa en una casa de huéspedes en Djanet; las otras cinco, en vivac. Elíjalo si ya ha visto dunas o si quiere la mayor variedad de paisajes en una sola semana."
      },
      {
        "h": "Sefar: a pie hasta los muros pintados",
        "p": "Ningún vehículo llega a lo alto de la meseta del Tassili. Se sube desde Tamrit — unos 500 metros de desnivel el primer día —, con guías, cocineros y arrieros que cargan el campamento, y después se caminan de cuatro a siete horas diarias entre abrigos rocosos pintados hace entre cinco y ocho mil años: los «danzantes» de Tin Tazarift, las máscaras de Sefar Noir, las grandes figuras de Sefar Blanc y Djabarren, el mayor conjunto de pinturas del Tassili. Cerca de Tamrit, los antiquísimos cipreses del Tassili son supervivientes del Sáhara más húmedo que describen las pinturas. Es el más gratificante de los tres, y el único que exige algo al cuerpo: está pensado para quien camina con regularidad."
      },
      {
        "h": "¿Poco tiempo?",
        "p": "El Safari por el Sáhara en Djanet es un anticipo de 5 días del Tadrart, con campamentos en el desierto y guía tuareg, desde 828 €, con salida y llegada en Djanet (el vuelo no está incluido).",
        "links": [
          { "href": "/es/circuitos/djanet-sahara-safari/", "text": "Safari por el Sáhara en Djanet, 5 días" }
        ]
      },
      {
        "h": "Los tres viajes, comparados",
        "table": {
          "caption": "Los tres viajes desde Djanet",
          "columns": ["Tadrart Rouge", "Ihrir y el Tassili", "Trekking de Sefar"],
          "rows": [
            { "label": "Qué es", "cells": ["Dunas, arcos y grabados", "Pozas de oasis, cañones y ergs", "Abrigos pintados en la meseta"] },
            { "label": "Cómo se viaja", "cells": ["4×4, paseos cortos", "4×4, paseos cortos", "A pie, 4–7 horas al día"] },
            { "label": "Noches", "cells": ["6 noches de vivac salvaje", "1 en casa de huéspedes + 5 de vivac", "6 noches en la meseta"] },
            { "label": "Forma física", "cells": ["Cómodo", "Cómodo", "Exigente: sólo para quien camina con regularidad"] },
            { "label": "El gran momento", "cells": ["El atardecer desde el Erg Tin Merzouga", "Las gueltas de Ihrir", "Las máscaras y los «dioses» de Sefar"] },
            { "label": "Desde, por persona", "cells": ["920 €", "920 €", "1.120 €"] }
          ]
        }
      },
      {
        "h": "Notas prácticas para los tres",
        "list": [
          "Temporada: de octubre a abril; de noviembre a febrero, los días más despejados y frescos. El sur profundo no se recorre en verano.",
          "Noches: frías en invierno, cercanas a la helada. Lleve abrigo de verdad.",
          "Cobertura: ninguna en cuanto se sale de Djanet.",
          "Permisos: los permisos del parque del Tassili n'Ajjer los tramitamos nosotros y están incluidos.",
          "Entrada: las vías de visado para el Sáhara, Djanet incluido, se explican en nuestra página de entrada y visado."
        ],
        "links": [
          { "href": "/es/evisa-argelia/", "text": "Entrada y visado a la llegada" },
          { "href": "/es/destinos/tassili-najjer/", "text": "Tassili n'Ajjer, patrimonio de la UNESCO" }
        ]
      },
      {
        "h": "Errores frecuentes",
        "list": [
          "Reservar Sefar porque parece el más impresionante: lo es, pero es un trekking con una subida empinada el primer día. Si no camina con regularidad, elija el Tadrart o Ihrir, que también incluyen arte rupestre.",
          "Pensar que el Tadrart no tiene arte rupestre: alberga algunos de los grabados más famosos del Sáhara, las jirafas de Tin Abadène y la «vaca que llora» de Tigharghart.",
          "Contar con cobertura de móvil: no la hay en cuanto se sale de Djanet. Avise a los suyos antes de partir."
        ],
        "links": [
          { "href": "/es/contacto/", "text": "Cuéntenos cómo le gusta viajar" }
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Qué diferencia hay entre el Tadrart Rouge y el Tassili n'Ajjer?",
        "a": "El Tassili n'Ajjer es la gran meseta de arenisca y el espacio protegido que rodean Djanet, famosos por su arte rupestre prehistórico. El Tadrart Rouge se encuentra al sureste, hacia la frontera libia, y es conocido por sus dunas rosadas, su roca roja y sus arcos naturales. En nuestros viajes, los circuitos del Tadrart y de Ihrir se recorren en 4×4; a la meseta alta de Sefar sólo se llega a pie."
      },
      {
        "q": "¿Qué viaje a Djanet es mejor para una primera visita?",
        "a": "El Tadrart Rouge. Tiene los paisajes por los que viene la mayoría, grabados célebres y un ritmo tranquilo en 4×4. Elija Ihrir si ya ha visto dunas y busca algo inesperado, y Sefar si es un buen caminante y lo que más le importa son las pinturas rupestres."
      },
      {
        "q": "¿Qué forma física hace falta para el trekking de Sefar?",
        "a": "Una forma razonable y costumbre de caminar: de 4 a 7 horas al día, con unos 500 metros de desnivel el primer día para subir a la meseta. Guías, cocineros y arrieros cargan con el campamento, así que usted sólo lleva una mochila de día."
      },
      {
        "q": "¿Están incluidos los vuelos en los viajes a Djanet?",
        "a": "En los tres viajes de 7 días — Tadrart Rouge, Ihrir y Sefar —, sí: el vuelo de ida y vuelta de Air Algérie entre Argel y Djanet y todos los traslados al aeropuerto están incluidos. El Safari por el Sáhara en Djanet, de 5 días, empieza y termina en Djanet, por lo que no incluye el vuelo."
      },
      {
        "q": "¿Se puede nadar en Ihrir?",
        "a": "A veces. En las pozas de Oued Essendilène se puede nadar según la temporada: lleve bañador, y su guía le dirá ese mismo día si es posible."
      }
    ],
    "cta": {
      "h": "¿No sabe cuál le conviene?",
      "p": "Cuéntenos cómo le gusta viajar y le diremos con franqueza cuál encaja con usted, o le prepararemos un viaje que combine dos."
    },
    "seoTitle": "¿Tadrart Rouge, Ihrir o Sefar? Qué viaje a Djanet elegir",
    "seoDescription": "Tres formas de recorrer el desierto de Djanet: las dunas y arcos del Tadrart Rouge, el oasis de Ihrir o el trekking de Sefar. Esfuerzo, noches y precios."
  }
];

export const guideEsByEn = (en: string) => GUIDES_ES.find(g => g.en === en);

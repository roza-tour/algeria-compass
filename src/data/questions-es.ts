// Spanish translations of the 44 question pages in src/content/question/.
//
// The English question collection is the single source of truth for WHICH
// questions exist and what the answer says; this file only carries language.
// Keep the slugs identical to the English ones — they are the join key, and a
// slug that drifts silently drops that question out of this language.
//
// Consumed by the on-site assistant's answer index
// (src/pages/answers-[lang].json.ts). Before this file existed the assistant
// held 462 answers in English and 204 in Spanish, so a Spanish-speaking
// visitor asking a question the site answers well was handed to WhatsApp
// instead of being answered.

export interface QuestionI18n {
  q: string;
  a: string;
  kf: [string, string][];
}

export const QUESTIONS_ES: Record<string, QuestionI18n> = {
  "are-there-atms-in-algeria": {
    "q": "¿Hay cajeros automáticos en Argelia?",
    "a": "Sí, en las ciudades y en las poblaciones grandes, pero no cuente con ellos. La aceptación de tarjetas Visa y Mastercard extranjeras es irregular, los límites diarios son bajos, los cajeros suelen estar averiados o sin efectivo, y se aplica el cambio oficial. Lleve el efectivo que necesite en lugar de contar con sacarlo allí.",
    "kf": [
      [
        "Dónde",
        "Ciudades y poblaciones grandes"
      ],
      [
        "Tarjetas extranjeras",
        "Aceptación irregular"
      ],
      [
        "Límites",
        "Retiradas diarias bajas"
      ],
      [
        "Cambio aplicado",
        "El oficial"
      ]
    ]
  },
  "are-there-domestic-flights-in-algeria": {
    "q": "¿Hay vuelos nacionales en Argelia?",
    "a": "Sí, y para el sur son imprescindibles. Air Algérie y Tassili Airlines conectan Argel con Orán, Constantina, Annaba y las ciudades saharianas, entre ellas Djanet, Tamanrasset, Ghardaïa, Timimoun y Adrar. El avión es la única forma sensata de llegar al desierto profundo.",
    "kf": [
      [
        "Aerolíneas",
        "Air Algérie, Tassili Airlines"
      ],
      [
        "Hub principal",
        "Argel (ALG)"
      ],
      [
        "Acceso al Sáhara",
        "Djanet, Tamanrasset, Ghardaïa, Adrar"
      ],
      [
        "Reserva",
        "Con antelación — hay pocas rutas al sur"
      ]
    ]
  },
  "can-i-get-an-algeria-visa-on-arrival": {
    "q": "¿Se puede obtener el visado argelino a la llegada?",
    "a": "En general no. Casi todos los visitantes deben obtener el visado argelino antes de viajar, en un consulado. La única excepción reconocida es un circuito organizado por el Sáhara que entra por el extremo sur (Djanet o Tamanrasset), donde un operador argelino autorizado puede gestionar la entrada del grupo. Confirme las normas vigentes con su consulado antes de reservar los vuelos.",
    "kf": [
      [
        "Norma general",
        "Visado obtenido con antelación"
      ],
      [
        "Excepción",
        "Circuitos organizados en el extremo sur"
      ],
      [
        "Gestionado por",
        "Un operador argelino autorizado"
      ],
      [
        "Confirmar con",
        "Su consulado más cercano"
      ]
    ]
  },
  "can-i-use-credit-cards-in-algeria": {
    "q": "¿Se pueden usar tarjetas de crédito en Argelia?",
    "a": "Apenas. Argelia funciona con efectivo. Unos pocos hoteles internacionales, oficinas de aerolíneas y grandes negocios de Argel aceptan tarjetas extranjeras, pero los restaurantes, las tiendas, los taxis, los mercados y las entradas a los sitios casi nunca. Cuente con pagar el gasto diario en dinares, en efectivo.",
    "kf": [
      [
        "Gasto diario",
        "Solo efectivo, en dinares"
      ],
      [
        "Tarjetas a veces",
        "Grandes hoteles, oficinas de aerolíneas"
      ],
      [
        "Casi nunca",
        "Taxis, mercados, restaurantes, sitios"
      ],
      [
        "Prevea",
        "Un viaje en efectivo, tarjeta de reserva"
      ]
    ]
  },
  "can-i-visit-algeria-without-a-tour-guide": {
    "q": "¿Se puede visitar Argelia sin guía?",
    "a": "En el norte sí — Argel, Orán, Constantina, la costa y las ciudades romanas se pueden recorrer por libre. El Sáhara profundo es distinto: el extremo sur se visita con un operador autorizado, un guía y permisos, y el viaje independiente está allí restringido por seguridad.",
    "kf": [
      [
        "Ciudades del norte y costa",
        "Viaje independiente posible"
      ],
      [
        "Sitios romanos",
        "Viaje independiente posible"
      ],
      [
        "Sáhara profundo",
        "Operador autorizado + guía + permisos"
      ],
      [
        "Verdadera dificultad",
        "El idioma y la logística, no las normas"
      ]
    ]
  },
  "can-tourists-drive-in-algeria": {
    "q": "¿Pueden conducir los turistas en Argelia?",
    "a": "Legalmente sí — el alquiler existe y se aceptan los permisos extranjeros con permiso internacional — pero a la mayoría de los visitantes les conviene un conductor. Las carreteras del norte son buenas y transitadas, la conducción urbana es agresiva, la señalización está en árabe y francés, y el extremo sur no se puede conducir por libre.",
    "kf": [
      [
        "Permiso",
        "El suyo más el permiso internacional"
      ],
      [
        "Carreteras del norte",
        "En general buenas, tráfico agresivo"
      ],
      [
        "Conducir de noche",
        "Mejor evitarlo en rutas rurales"
      ],
      [
        "Sáhara profundo",
        "No permitido por libre"
      ]
    ]
  },
  "can-vegetarians-eat-well-in-algeria": {
    "q": "¿Comen bien los vegetarianos en Argelia?",
    "a": "Razonablemente bien, con algo de esfuerzo. La cocina argelina es rica en legumbres, verduras, pan y ensaladas, y muchos básicos no llevan carne — pero la carne es central en la hospitalidad y el concepto de vegetarianismo se entiende poco. Diga claramente qué no come en lugar de usar la etiqueta.",
    "kf": [
      [
        "Naturalmente sin carne",
        "Ensaladas, legumbres, panes, dulces"
      ],
      [
        "Ojo con",
        "El caldo de carne en sopas y cuscús"
      ],
      [
        "Vegano",
        "Más difícil — mantequilla, huevos y lácteos son comunes"
      ],
      [
        "Mejor enfoque",
        "Nombrar los alimentos, no la dieta"
      ]
    ]
  },
  "can-you-drink-the-tap-water-in-algeria": {
    "q": "¿Se puede beber el agua del grifo en Argelia?",
    "a": "Mejor no. El agua está tratada en las ciudades, pero el suministro es intermitente en algunos puntos y se almacena en depósitos en las azoteas, así que se aconseja a los visitantes beber agua embotellada, barata y disponible en todas partes. Úsela para beber y para lavarse los dientes, sobre todo fuera de las grandes ciudades.",
    "kf": [
      [
        "Para beber",
        "Agua embotellada"
      ],
      [
        "Por qué",
        "Suministro intermitente y depósitos"
      ],
      [
        "Disponibilidad",
        "El agua embotellada es barata y está en todas partes"
      ],
      [
        "En el desierto",
        "El agua la lleva su operador"
      ]
    ]
  },
  "can-you-visit-algeria-during-ramadan": {
    "q": "¿Se puede visitar Argelia durante el Ramadán?",
    "a": "Sí, y es una de las épocas más evocadoras para venir — pero el ritmo del día se invierte. Muchos restaurantes cierran de día, los horarios cambian y las ciudades cobran vida tras la puesta de sol. A los visitantes no musulmanes no se les pide ayunar, solo discreción al comer y beber en público.",
    "kf": [
      [
        "De día",
        "Muchos restaurantes cerrados, calles más tranquilas"
      ],
      [
        "Tras la puesta de sol",
        "Las ciudades se animan hasta tarde"
      ],
      [
        "No se espera que",
        "Ayune"
      ],
      [
        "Sí se espera que",
        "Coma y beba con discreción en público"
      ]
    ]
  },
  "do-i-need-a-visa-for-algeria": {
    "q": "¿Necesito visado para Argelia?",
    "a": "La mayoría de las nacionalidades necesita visado para visitar Argelia, solicitado con antelación en un consulado argelino, normalmente con una carta de invitación de un turoperador. Algunas fórmulas permiten el visado a la llegada para circuitos organizados por el Sáhara desde el sur. Confirme siempre las normas vigentes con el consulado argelino más cercano.",
    "kf": [
      [
        "La mayoría de los viajeros",
        "Visado exigido con antelación"
      ],
      [
        "Requisito habitual",
        "Invitación / reserva de hotel o circuito"
      ],
      [
        "Circuitos por el Sáhara",
        "Puede aplicarse el visado a la llegada"
      ],
      [
        "Confirmar con",
        "El consulado argelino"
      ]
    ]
  },
  "do-i-need-an-invitation-letter-for-an-algeria-visa": {
    "q": "¿Hace falta una carta de invitación para el visado argelino?",
    "a": "En la mayoría de los casos sí. Los consulados argelinos suelen querer la prueba de que alguien le espera en Argelia — bien una invitación privada de un anfitrión, bien una invitación y un programa confirmado de un turoperador autorizado. Los turistas sin contacto personal en Argelia usan la vía del operador.",
    "kf": [
      [
        "Normalmente exigida",
        "Sí, para solicitudes turísticas"
      ],
      [
        "Vía privada",
        "Invitación de un anfitrión en Argelia"
      ],
      [
        "Vía turística",
        "Invitación del operador + reserva"
      ],
      [
        "Emitida por",
        "Una agencia argelina autorizada"
      ]
    ]
  },
  "do-i-need-vaccinations-for-algeria": {
    "q": "¿Hacen falta vacunas para Argelia?",
    "a": "Ninguna vacuna es obligatoria de forma sistemática para quienes llegan de Europa o Norteamérica, aunque puede exigirse el certificado de fiebre amarilla si llega desde un país endémico. El consejo habitual es tener al día las vacunas de rutina. Consulte a un centro de vacunación internacional bastante antes de viajar.",
    "kf": [
      [
        "Obligatorias",
        "Ninguna para la mayoría de las llegadas"
      ],
      [
        "Fiebre amarilla",
        "Solo si llega de un país endémico"
      ],
      [
        "Suele aconsejarse",
        "Vacunas de rutina al día"
      ],
      [
        "Confirmar con",
        "Un centro de viajes, 6-8 semanas antes"
      ]
    ]
  },
  "do-people-speak-english-in-algeria": {
    "q": "¿Se habla inglés en Argelia?",
    "a": "Poco. El árabe y el tamazight son las lenguas oficiales y el francés es la segunda lengua común en los negocios, la señalización y la administración. El inglés crece entre los jóvenes y en el turismo, pero fuera de los hoteles y los guías no conviene contar con él. Unas palabras de francés ayudan mucho.",
    "kf": [
      [
        "Lenguas oficiales",
        "Árabe y tamazight"
      ],
      [
        "Muy extendido",
        "El francés"
      ],
      [
        "Inglés",
        "Limitado pero creciendo entre los jóvenes"
      ],
      [
        "Consejo práctico",
        "Aprender frases básicas en francés"
      ]
    ]
  },
  "do-you-tip-in-algeria": {
    "q": "¿Se deja propina en Argelia?",
    "a": "La propina se agradece pero no se espera de forma rígida, y Argelia no tiene una cultura de porcentaje fijo. Redondear la cuenta, dejar un billete pequeño por un buen servicio y agradecer con generosidad a guías y conductores al final del viaje encajan con la costumbre local. Dé siempre en dinares, en efectivo.",
    "kf": [
      [
        "Restaurantes",
        "Redondear, o en torno al 5-10%"
      ],
      [
        "Guías y conductores",
        "Una cantidad mayor al final del viaje"
      ],
      [
        "Personal del hotel",
        "Billetes pequeños por una ayuda real"
      ],
      [
        "Moneda",
        "Dinares, siempre en efectivo"
      ]
    ]
  },
  "does-algeria-have-an-evisa": {
    "q": "¿Tiene Argelia un visado electrónico?",
    "a": "Argelia no tiene un visado electrónico turístico general como los de Turquía o Kenia. Las solicitudes se hacen en papel en una embajada o consulado argelino, aunque algunas sedes ofrecen ya cita previa o formularios en línea. Desconfíe de cualquier sitio que venda un «e-visa de Argelia».",
    "kf": [
      [
        "Visado electrónico general",
        "No disponible"
      ],
      [
        "Cómo solicitarlo",
        "En persona en el consulado"
      ],
      [
        "Algunos consulados ofrecen",
        "Citas o formularios en línea"
      ],
      [
        "Cuidado con",
        "Los sitios de «e-visa» de terceros"
      ]
    ]
  },
  "does-algeria-have-good-internet-and-mobile-coverage": {
    "q": "¿Tiene Argelia buena cobertura de internet y móvil?",
    "a": "En el norte sí — el 4G está extendido en las ciudades y a lo largo del corredor poblado, y una SIM local es barata y fácil de comprar con el pasaporte. La cobertura se reduce deprisa hacia el sur, y en el Sáhara profundo no hay señal alguna, por lo que los operadores llevan comunicaciones por satélite.",
    "kf": [
      [
        "Ciudades del norte",
        "Buen 4G, ampliamente disponible"
      ],
      [
        "SIM local",
        "Barata; se compra con el pasaporte"
      ],
      [
        "Operadores",
        "Djezzy, Mobilis, Ooredoo"
      ],
      [
        "Sáhara profundo",
        "Sin cobertura — solo satélite"
      ]
    ]
  },
  "how-do-you-get-around-in-algeria": {
    "q": "¿Cómo se viaja dentro de Argelia?",
    "a": "Argelia es grande: las distancias largas — sobre todo hacia el Sáhara — se cubren normalmente con vuelos nacionales, mientras que los trayectos regionales se hacen por carretera. En nuestros circuitos viaja en vehículo privado con chófer-guía de principio a fin, sin tener que lidiar con el transporte público.",
    "kf": [
      [
        "Distancias largas",
        "Vuelos nacionales (Djanet, Tamanrasset…)"
      ],
      [
        "Regional",
        "Vehículo privado / carretera"
      ],
      [
        "Ciudades",
        "Taxis; Argel tiene metro y tranvía"
      ],
      [
        "En nuestros circuitos",
        "Chófer-guía privado todo el tiempo"
      ]
    ]
  },
  "how-do-you-get-from-algiers-airport-to-the-city": {
    "q": "¿Cómo se va del aeropuerto de Argel al centro?",
    "a": "El aeropuerto Houari Boumediene está a unos 20 km al este del centro de Argel, entre 30 y 45 minutos por carretera según el tráfico. Un traslado reservado de antemano o el coche del hotel es lo más cómodo; hay taxis oficiales y un enlace en autobús. Acuerde la tarifa antes de subir.",
    "kf": [
      [
        "Aeropuerto",
        "Houari Boumediene (ALG)"
      ],
      [
        "Distancia",
        "Unos 20 km al este del centro"
      ],
      [
        "Trayecto",
        "30-45 minutos según el tráfico"
      ],
      [
        "Mejor opción",
        "Traslado reservado o coche del hotel"
      ]
    ]
  },
  "how-long-does-an-algeria-visa-take": {
    "q": "¿Cuánto tarda el visado de Argelia?",
    "a": "Los plazos varían mucho según el consulado y la temporada, desde unas dos semanas hasta bastante más de un mes. Presente la solicitud en cuanto su consulado lo permita y nunca reserve vuelos no reembolsables antes de tener el visado en el pasaporte. Las solicitudes son más lentas en verano y antes de las grandes fiestas.",
    "kf": [
      [
        "Rango habitual",
        "De unas 2 semanas a más de un mes"
      ],
      [
        "Varía según",
        "Consulado, nacionalidad, temporada"
      ],
      [
        "Épocas de más carga",
        "Verano y periodos de fiestas"
      ],
      [
        "Regla de oro",
        "Primero el visado, después los vuelos"
      ]
    ]
  },
  "how-many-days-do-you-need-in-algeria": {
    "q": "¿Cuántos días hacen falta en Argelia?",
    "a": "Siete días permiten ver bien Argel, la costa romana y una región más. Diez días dejan añadir el valle del M'Zab o el este romano sin prisas. Dos semanas son lo necesario para combinar el norte con una verdadera expedición sahariana, porque el desierto por sí solo absorbe cuatro o cinco días.",
    "kf": [
      [
        "7 días",
        "Argel, la costa, una región más"
      ],
      [
        "10 días",
        "Añadir el M'Zab o el este romano"
      ],
      [
        "14 días",
        "El norte más un tramo sahariano real"
      ],
      [
        "Solo el Sáhara",
        "Contar 4-5 días como mínimo"
      ]
    ]
  },
  "how-much-cash-should-i-bring-to-algeria": {
    "q": "¿Cuánto efectivo hay que llevar a Argelia?",
    "a": "El suficiente para todo el viaje, porque no es posible reponer con fiabilidad. Calcule su gasto diario — comidas, taxis, entradas, propinas, compras —, añada un margen holgado y llévelo todo en euros en efectivo. Todo lo prepagado — hoteles, guías, transporte en un circuito organizado — se descuenta de ese total.",
    "kf": [
      [
        "Llevar",
        "Euros en efectivo, billetes en buen estado"
      ],
      [
        "Cubrir",
        "Toda la estancia, más un margen"
      ],
      [
        "Excluir",
        "Todo lo ya prepagado"
      ],
      [
        "Declarar",
        "Importes por encima del umbral aduanero"
      ]
    ]
  },
  "how-much-does-a-trip-to-algeria-cost": {
    "q": "¿Cuánto cuesta un viaje a Argelia?",
    "a": "Argelia sigue siendo asequible para los estándares europeos. Nuestras excursiones privadas guiadas de un día parten de 30 € por persona, y los viajes privados de varios días suelen ir de unos 200 € a 1.200 € según la duración, la región y la temporada. Los gastos sobre el terreno — comidas, transporte local, compras diarias — son moderados.",
    "kf": [
      [
        "Excursiones de un día",
        "Desde 30 € / persona"
      ],
      [
        "Circuitos privados de varios días",
        "≈ 200 € - 1.200 €"
      ],
      [
        "Moneda",
        "Dinar argelino (DZD)"
      ],
      [
        "Propinas",
        "Se agradecen, no son obligatorias"
      ]
    ]
  },
  "is-alcohol-available-in-algeria": {
    "q": "¿Se encuentra alcohol en Argelia?",
    "a": "El alcohol es legal en Argelia, pero discreto y de disponibilidad desigual. Algunos hoteles, restaurantes con licencia y tiendas especializadas de las grandes ciudades lo venden; la mayoría de los restaurantes no, y está prácticamente ausente en las ciudades conservadoras y en el extremo sur. Argelia produce además su propio vino.",
    "kf": [
      [
        "Situación legal",
        "Legal, pero socialmente discreto"
      ],
      [
        "Dónde",
        "Algunos hoteles y locales con licencia en ciudades"
      ],
      [
        "Dónde no",
        "La mayoría de restaurantes, ciudades conservadoras, extremo sur"
      ],
      [
        "Producción local",
        "Argelia produce vino"
      ]
    ]
  },
  "is-algeria-a-good-winter-destination": {
    "q": "¿Es Argelia un buen destino de invierno?",
    "a": "Mucho. El invierno es la única estación en que puede recorrerse el Sáhara profundo, las ciudades romanas están frescas y vacías, y la costa norte se mantiene suave. Es también cuando Argelia menos parece un compromiso: días cálidos en el desierto, ninguna multitud en ninguna parte y nieve en el Atlas si la quiere.",
    "kf": [
      [
        "Sáhara",
        "Es la temporada — de noviembre a febrero"
      ],
      [
        "Sitios romanos",
        "Frescos, cómodos, vacíos"
      ],
      [
        "Costa norte",
        "Suave, más húmeda, verde"
      ],
      [
        "Montañas del Atlas",
        "Nieve de verdad en altura"
      ]
    ]
  },
  "is-algeria-safe-for-solo-female-travellers": {
    "q": "¿Es Argelia segura para mujeres que viajan solas?",
    "a": "En general sí, con la atención habitual. Hay mujeres que viajan solas por Argel, Orán, Constantina y la costa sin incidentes; el país es conservador más que peligroso. Espere atención y preguntas, no amenazas; vista con sobriedad y prefiera los desplazamientos interurbanos de día.",
    "kf": [
      [
        "Ciudades del norte",
        "En general seguras con precaución normal"
      ],
      [
        "Principal molestia",
        "Miradas y atención, no delincuencia"
      ],
      [
        "Vestimenta",
        "Sobria; hombros y rodillas cubiertos"
      ],
      [
        "Sáhara profundo",
        "Solo en grupos guiados, para todos"
      ]
    ]
  },
  "is-algeria-safe": {
    "q": "¿Es seguro visitar Argelia?",
    "a": "Sí — en 2026 Argelia es en general segura para los turistas. Las grandes ciudades, el norte, el valle del M'Zab y las rutas saharianas organizadas están tranquilos y son muy acogedores. Algunas zonas fronterizas remotas del extremo sur exigen permisos y un guía autorizado, y unas pocas franjas fronterizas están cerradas a los visitantes.",
    "kf": [
      [
        "Ciudades y norte",
        "Seguros para el turismo normal"
      ],
      [
        "Sáhara profundo",
        "Guía + permiso obligatorios"
      ],
      [
        "Fronteras del extremo sur",
        "Restringidas / prohibidas"
      ]
    ]
  },
  "is-algeria-worth-visiting": {
    "q": "¿Merece la pena visitar Argelia?",
    "a": "Si busca lugares extraordinarios sin multitudes, sí. Argelia ofrece ciudades romanas que a veces tendrá para usted solo, uno de los grandes desiertos del mundo y una hospitalidad genuina — a cambio de un trámite de visado, una economía en efectivo e infraestructura turística limitada. Recompensa a los viajeros, no a los veraneantes.",
    "kf": [
      [
        "Ideal para",
        "Patrimonio, desierto, cultura, fotografía"
      ],
      [
        "Multitudes",
        "Casi inexistentes, incluso en sitios UNESCO"
      ],
      [
        "Contrapartida",
        "Visado, economía en efectivo, poca infraestructura"
      ],
      [
        "Poco indicada para",
        "Vacaciones de playa en resort"
      ]
    ]
  },
  "is-algiers-safe-to-walk-around": {
    "q": "¿Es seguro pasear a pie por Argel?",
    "a": "Sí. El centro de Argel es una ciudad viva y caminable, y los visitantes se mueven a pie por ella a diario. El carterismo entre la multitud es la preocupación real, como en cualquier capital mediterránea. Tome las precauciones normales con el móvil y el bolso, y prefiera el taxi a última hora en los barrios tranquilos.",
    "kf": [
      [
        "Centro de día",
        "Cómodo y animado"
      ],
      [
        "Riesgo principal",
        "Carterismo entre la multitud"
      ],
      [
        "De noche",
        "Taxi en los barrios tranquilos"
      ],
      [
        "La Casbah",
        "Mejor explorarla con un guía"
      ]
    ]
  },
  "is-photography-allowed-in-algeria": {
    "q": "¿Se permite hacer fotos en Argelia?",
    "a": "Sí, para la fotografía de viaje corriente. Las excepciones son firmes: no fotografíe instalaciones militares, policía, edificios gubernamentales, aeropuertos ni controles. Pida permiso antes de fotografiar a personas, sobre todo a mujeres, y cuente con que algunos museos cobren o restrinjan las cámaras.",
    "kf": [
      [
        "En general",
        "Libre en calles y sitios"
      ],
      [
        "Nunca",
        "Militares, policía, controles, aeropuertos"
      ],
      [
        "Las personas",
        "Pedir siempre permiso"
      ],
      [
        "Museos",
        "Pueden cobrar o restringir"
      ]
    ]
  },
  "is-the-algerian-sahara-safe": {
    "q": "¿Es seguro el Sáhara argelino?",
    "a": "Sí, cuando se recorre como debe hacerse — con un operador autorizado, un guía experimentado, 4x4 en condiciones, agua, comunicaciones y permisos, por rutas autorizadas. Los riesgos reales son el calor, la deshidratación, la orientación y el aislamiento, no la delincuencia. Lo peligroso es el desierto improvisado por libre, y está regulado.",
    "kf": [
      [
        "Riesgos reales",
        "Calor, deshidratación, orientación, aislamiento"
      ],
      [
        "No es el riesgo",
        "La delincuencia contra los visitantes"
      ],
      [
        "Obligatorio",
        "Operador autorizado, guía, permisos"
      ],
      [
        "Mejor temporada",
        "De noviembre a febrero"
      ]
    ]
  },
  "is-the-food-in-algeria-halal": {
    "q": "¿La comida en Argelia es halal?",
    "a": "Prácticamente toda. Argelia es un país mayoritariamente musulmán y la carne que se vende y se sirve es halal por defecto, sin necesidad de buscar restaurantes certificados. El cerdo está esencialmente ausente de la oferta alimentaria, salvo en unos pocos comercios especializados para residentes extranjeros.",
    "kf": [
      [
        "Carne",
        "Halal por defecto en todo el país"
      ],
      [
        "Cerdo",
        "De hecho ausente"
      ],
      [
        "Certificación",
        "No hace falta buscarla"
      ],
      [
        "Alcohol",
        "Otra cuestión — legal pero discreto"
      ]
    ]
  },
  "is-there-a-train-network-in-algeria": {
    "q": "¿Hay red ferroviaria en Argelia?",
    "a": "Sí, en el norte. La SNTF opera servicios a lo largo del corredor costero e interior que une Argel con Orán, Constantina, Annaba y las localidades intermedias, con trenes modernos y cómodos en algunas líneas. No hay red ferroviaria hacia el Sáhara profundo, al que se llega en avión.",
    "kf": [
      [
        "Operador",
        "SNTF, los ferrocarriles nacionales"
      ],
      [
        "Cobertura",
        "Solo el corredor norte"
      ],
      [
        "Líneas principales",
        "Argel-Orán, Argel-Constantina"
      ],
      [
        "Extremo sur",
        "Sin tren — hay que volar"
      ]
    ]
  },
  "what-are-algerias-unesco-world-heritage-sites": {
    "q": "¿Cuáles son los sitios UNESCO de Argelia?",
    "a": "Argelia tiene siete sitios inscritos en el patrimonio mundial de la UNESCO: la Alcazaba de Beni Hammad, el Tassili n'Ajjer, el valle del M'Zab, Djémila, Tipasa, Timgad y la Casbah de Argel. Seis son sitios culturales, y el Tassili n'Ajjer está inscrito tanto por su cultura como por su naturaleza.",
    "kf": [
      [
        "Número de sitios",
        "7"
      ],
      [
        "Ciudades romanas",
        "Djémila, Tipasa, Timgad"
      ],
      [
        "Sáhara",
        "Tassili n'Ajjer (mixto), valle del M'Zab"
      ],
      [
        "Islámico / urbano",
        "Beni Hammad, Casbah de Argel"
      ]
    ]
  },
  "what-are-the-customs-and-etiquette-in-algeria": {
    "q": "¿Cuáles son las costumbres y la etiqueta en Argelia?",
    "a": "Salude antes que nada, acepte el té cuando se lo ofrezcan, vista con sobriedad, use la mano derecha para comer y para dar, descálcese al entrar en una casa y pida permiso antes de fotografiar a personas. La hospitalidad es central, y rechazarla con demasiada firmeza se interpreta como un desaire.",
    "kf": [
      [
        "Saludo",
        "Saludar siempre antes de pedir nada"
      ],
      [
        "Hospitalidad",
        "Acepte el té — importa"
      ],
      [
        "Casas",
        "Descalzarse en la puerta"
      ],
      [
        "Mano derecha",
        "Para comer, dar y recibir"
      ]
    ]
  },
  "what-currency-does-algeria-use": {
    "q": "¿Qué moneda se usa en Argelia?",
    "a": "Argelia usa el dinar argelino (DZD). Es una moneda cerrada: no puede comprarla ni venderla de forma realista fuera del país, así que se llega con efectivo en euros o dólares y se cambia en Argelia. Hay un tipo bancario oficial y un tipo paralelo muy usado, y la diferencia entre ambos es grande.",
    "kf": [
      [
        "Moneda",
        "Dinar argelino (DZD)"
      ],
      [
        "Disponibilidad en el extranjero",
        "Prácticamente nula — moneda cerrada"
      ],
      [
        "Llevar",
        "Euros o dólares en efectivo"
      ],
      [
        "Dos tipos",
        "Oficial bancario y mercado paralelo"
      ]
    ]
  },
  "what-is-algeria-famous-for": {
    "q": "¿Por qué es conocida Argelia?",
    "a": "Argelia es el país más grande de África y es conocida por el Sáhara que ocupa cuatro quintas partes de su territorio, por algunas de las ciudades romanas mejor conservadas del mundo, por sus siete sitios del patrimonio mundial de la UNESCO, por el arte rupestre prehistórico del Tassili n'Ajjer, la cultura amazigh, la música raï y el cuscús.",
    "kf": [
      [
        "Superficie",
        "El país más grande de África"
      ],
      [
        "Sitios UNESCO",
        "Siete"
      ],
      [
        "Herencia romana",
        "Timgad, Djémila, Tipaza"
      ],
      [
        "Sáhara",
        "Cuatro quintas partes del país"
      ]
    ]
  },
  "what-is-the-best-month-to-visit-the-algerian-sahara": {
    "q": "¿Cuál es el mejor mes para el Sáhara argelino?",
    "a": "De noviembre a febrero. Los días son cálidos y despejados, las noches lo bastante frías para encender fuego, y la luz está en su mejor momento para la fotografía. Diciembre y enero son el corazón de la temporada. Desde finales de primavera el desierto se vuelve peligrosamente caluroso y las expediciones se detienen.",
    "kf": [
      [
        "Mejor ventana",
        "De noviembre a febrero"
      ],
      [
        "Corazón de la temporada",
        "Diciembre y enero"
      ],
      [
        "Las noches",
        "Frías — lleve capas de verdad"
      ],
      [
        "Evitar",
        "De mayo a septiembre"
      ]
    ]
  },
  "what-is-the-most-beautiful-place-in-algeria": {
    "q": "¿Cuál es el lugar más bonito de Argelia?",
    "a": "No hay una única respuesta, pero la lista corta se repite: el Tassili n'Ajjer y el Tadrart en el Sáhara profundo, los pueblos ocres encaramados del valle del M'Zab, Djémila y Timgad entre las ciudades romanas, la costa cabileña en torno a Béjaïa, y Constantina sobre sus gargantas.",
    "kf": [
      [
        "Sáhara profundo",
        "El Tassili n'Ajjer y el Tadrart"
      ],
      [
        "Arquitectura",
        "El valle del M'Zab"
      ],
      [
        "Romano",
        "Djémila y Timgad"
      ],
      [
        "Costa y ciudad",
        "Béjaïa y Constantina"
      ]
    ]
  },
  "what-is-the-national-dish-of-algeria": {
    "q": "¿Cuál es el plato nacional de Argelia?",
    "a": "El cuscús. Sémola al vapor servida con un caldo de verduras y carne, es el plato del viernes, el de las celebraciones y el de todos los días en todo el país. La UNESCO inscribió los saberes y prácticas en torno al cuscús como patrimonio inmaterial compartido por Argelia, Marruecos, Túnez y Mauritania.",
    "kf": [
      [
        "Plato nacional",
        "El cuscús"
      ],
      [
        "Se come tradicionalmente",
        "Los viernes y en las celebraciones"
      ],
      [
        "UNESCO",
        "Inscrito como patrimonio magrebí compartido"
      ],
      [
        "Variantes regionales",
        "Cada región tiene la suya"
      ]
    ]
  },
  "what-languages-are-spoken-in-algeria": {
    "q": "¿Qué idiomas se hablan en Argelia?",
    "a": "Las lenguas oficiales de Argelia son el árabe y el tamazight (bereber). La mayoría de los argelinos habla árabe argelino (daridja) en el día a día, el tamazight está muy extendido en regiones como la Cabilia, y el francés se usa ampliamente en los negocios, los medios y la enseñanza. El inglés crece entre los jóvenes.",
    "kf": [
      [
        "Oficiales",
        "Árabe, tamazight (bereber)"
      ],
      [
        "Día a día",
        "Árabe argelino (daridja)"
      ],
      [
        "Muy usado",
        "El francés"
      ],
      [
        "En crecimiento",
        "El inglés"
      ]
    ]
  },
  "what-power-plugs-are-used-in-algeria": {
    "q": "¿Qué enchufes se usan en Argelia?",
    "a": "Argelia usa los enchufes europeos de dos clavijas redondas, tipos C y F, a 230 voltios y 50 Hz. Quienes llegan del Reino Unido, Estados Unidos, Australia o Japón necesitan adaptador; la mayoría de los visitantes europeos no. Los aparatos estadounidenses y japoneses pueden necesitar además un convertidor de tensión si no son de doble voltaje.",
    "kf": [
      [
        "Tipos de enchufe",
        "C y F (dos clavijas redondas)"
      ],
      [
        "Tensión",
        "230 V, 50 Hz"
      ],
      [
        "Visitantes RU/EE. UU./AU",
        "Adaptador necesario"
      ],
      [
        "Campamentos del desierto",
        "Lleve una batería externa — no hay red"
      ]
    ]
  },
  "what-should-women-wear-in-algeria": {
    "q": "¿Cómo deben vestir las mujeres en Argelia?",
    "a": "De forma sobria y cómoda. Hombros y rodillas cubiertos es el estándar práctico — pantalón holgado o falda larga con una prenda que cubra la parte alta de los brazos. El pañuelo no es obligatorio, salvo dentro de las mezquitas, pero llevar uno resulta útil. Las ciudades son más relajadas que los pueblos.",
    "kf": [
      [
        "Estándar",
        "Hombros y rodillas cubiertos"
      ],
      [
        "Pañuelo",
        "Solo obligatorio dentro de las mezquitas"
      ],
      [
        "Ciudades y pueblos",
        "Argel y Orán son más relajadas"
      ],
      [
        "Sáhara",
        "Capas largas y holgadas, más protección solar"
      ]
    ]
  },
  "when-is-the-best-time-to-visit-algeria": {
    "q": "¿Cuál es la mejor época para visitar Argelia?",
    "a": "La mejor época en conjunto para Argelia va del otoño a la primavera — a grandes rasgos de octubre a abril — cuando las temperaturas son agradables en todo el norte y en el Sáhara. El Sáhara profundo se visita mejor de octubre a marzo; el pleno verano (junio-agosto) es muy caluroso en el sur, pero estupendo en la costa mediterránea.",
    "kf": [
      [
        "Mejor en general",
        "Octubre – abril"
      ],
      [
        "Sáhara / desierto",
        "Octubre – marzo"
      ],
      [
        "Costa y ciudades",
        "Primavera y otoño ideales; verano cálido"
      ],
      [
        "Evitar para el desierto",
        "Junio – agosto (calor extremo)"
      ]
    ]
  },
  "which-parts-of-algeria-should-tourists-avoid": {
    "q": "¿Qué zonas de Argelia deben evitar los turistas?",
    "a": "Las áreas con advertencias son las remotas franjas fronterizas con Malí, Níger y Libia, y algunas zonas de desierto lejano fuera de las rutas establecidas. Las ciudades del norte, la costa, el este romano, la Cabilia y los circuitos saharianos organizados no están en esa lista. Consulte el aviso vigente de su gobierno antes de viajar.",
    "kf": [
      [
        "Desaconsejado",
        "Franjas fronterizas con Malí, Níger y Libia"
      ],
      [
        "Restringido",
        "Desierto remoto fuera de las rutas establecidas"
      ],
      [
        "No restringido",
        "Norte, costa, este romano, M'Zab"
      ],
      [
        "Comprobar",
        "El aviso actualizado de su gobierno"
      ]
    ]
  }
};

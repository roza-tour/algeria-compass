// Spanish versions of the destination guides — same contract as destinations-fr.ts.
// Photography and coordinates are read from the English collection at build time,
// so every language version shows the same picture of the same place.

export interface DestEs {
  slug: string;          // Spanish URL segment
  en: string;            // English collection slug (hreflang + image lookup)
  name: string;
  eyebrow: string;
  intro: string;
  quick: string;
  sections: { h: string; p: string }[];
  facts: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const DESTINATIONS_ES: DestEs[] = [
  {
    "slug": "timgad",
    "en": "timgad",
    "name": "Timgad",
    "eyebrow": "Patrimonio Mundial · Batna",
    "intro": "La ciudad romana en damero más completa que se conserva, fundada por Trajano hacia el año 100 y llamada a menudo la Pompeya de África.",
    "quick": "Timgad, la antigua Thamugadi, es una colonia romana fundada hacia el año 100 por el emperador Trajano para sus veteranos, en la provincia de Batna. Sepultada por la arena durante siglos, conserva intacto su trazado en damero: el arco de Trajano, el teatro, el foro, las termas y una biblioteca pública. Es Patrimonio Mundial de la UNESCO desde 1982.",
    "sections": [
      {
        "h": "Por qué Timgad es única",
        "p": "La mayoría de las ciudades romanas fueron reocupadas, demolidas y reconstruidas. Timgad, en cambio, fue abandonada y luego cubierta por la arena, lo que congeló su trazado original. Todavía se lee por completo el damero militar romano: el cardo y el decumano, las manzanas regulares, las puertas y la muralla. Es ese grado de legibilidad, más que la altura de los restos, lo que hace excepcional el yacimiento."
      },
      {
        "h": "Qué ver",
        "p": "El arco de Trajano, al oeste, es la imagen icónica del lugar. El teatro, apoyado en la ladera, todavía acoge un festival en verano. El foro, las termas del norte y del sur, el mercado de Sertius y sobre todo la biblioteca pública — una de las pocas conocidas del mundo romano — jalonan la visita. El museo del yacimiento conserva un notable conjunto de mosaicos hallados en las casas."
      },
      {
        "h": "El contexto: los Aurés",
        "p": "Timgad se encuentra al pie de los Aurés, el macizo bereber chaui que domina el este argelino. A una veintena de kilómetros se alza el mausoleo númida de Imedghassen, anterior a la presencia romana, que recuerda que la región tenía sus reinos mucho antes de Roma."
      },
      {
        "h": "Cómo llegar",
        "p": "Timgad está a unos 35 km al este de Batna, media hora de carretera. Batna tiene aeropuerto con vuelos desde Argel y también se llega por la autopista este-oeste. El yacimiento es amplio y sin sombra: calzado adecuado, sombrero y agua, y mejor en primavera u otoño."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "Batna"
      },
      {
        "label": "Fundación",
        "value": "Hacia el año 100, por Trajano"
      },
      {
        "label": "UNESCO",
        "value": "Inscrita en 1982"
      },
      {
        "label": "Duración",
        "value": "Media jornada"
      },
      {
        "label": "Mejor época",
        "value": "Marzo–junio, septiembre–noviembre"
      }
    ],
    "faqs": [
      {
        "q": "¿Por qué llaman a Timgad la Pompeya de África?",
        "a": "Porque, como Pompeya, la ciudad se conservó bajo una cubierta — la arena en vez de las cenizas — y se conserva un trazado urbano completo en lugar de monumentos aislados."
      },
      {
        "q": "¿Cuánto tiempo hace falta?",
        "a": "Media jornada para el yacimiento y el museo. Sumando el mausoleo de Imedghassen y una incursión en los Aurés, la jornada queda completa."
      },
      {
        "q": "¿Hay muchos visitantes?",
        "a": "Muy pocos. Es habitual recorrer el yacimiento cruzándose con un puñado de personas, algo ya imposible en el resto del Mediterráneo."
      },
      {
        "q": "¿Se puede visitar desde Argel en el día?",
        "a": "Es muy largo: unos 450 km. Mejor pernoctar en Batna o Constantina, o integrar Timgad en un circuito por el este del país."
      }
    ],
    "seoTitle": "Timgad, Argelia: la ciudad romana Patrimonio UNESCO",
    "seoDescription": "Timgad, ciudad romana fundada por Trajano y Patrimonio de la UNESCO: arco de Trajano, teatro, biblioteca y damero intacto. Qué ver y cómo llegar."
  },
  {
    "slug": "djemila",
    "en": "djemila",
    "name": "Djémila",
    "eyebrow": "Patrimonio Mundial · Sétif",
    "intro": "Cuicul, ciudad romana asentada en un anfiteatro de colinas a 900 metros — uno de los conjuntos mejor conservados del norte de África.",
    "quick": "Djémila, la antigua Cuicul, es una ciudad romana de la provincia de Sétif, sobre un espolón entre dos uadis a 900 metros de altitud. Fundada en el siglo I, conserva un foro, templos, basílicas, casas con mosaicos y un conjunto cristiano tardío. Es Patrimonio Mundial de la UNESCO desde 1982.",
    "sections": [
      {
        "h": "El yacimiento y su entorno",
        "p": "Djémila debe su nombre actual — «la bella» en árabe — a su entorno. La ciudad se adapta a un relieve accidentado, lo que la aleja del trazado romano teórico y produce un urbanismo que sigue la montaña: calles en pendiente, plazas desplazadas, barrios escalonados. El resultado es más pintoresco y más legible que muchos yacimientos de llanura."
      },
      {
        "h": "Qué ver",
        "p": "El foro de los Severos y el arco de Caracalla forman el núcleo monumental. El templo de la familia severiana, el teatro excavado en la ladera fuera de las murallas, el mercado de Cosinio con sus mesas de medida, las termas y las basílicas cristianas completan el conjunto. El museo del yacimiento alberga una de las mejores colecciones de mosaicos romanos del norte de África."
      },
      {
        "h": "El contexto: las mesetas",
        "p": "Djémila depende de Sétif, la antigua Sitifis, capital regional romana y luego ciudad de las mesetas cerealistas. La región es fresca, verde en primavera y nevada algunos inviernos — un contraste útil frente a la imagen sahariana de Argelia."
      },
      {
        "h": "Cómo llegar",
        "p": "Djémila está a unos 50 km al noreste de Sétif, por carretera de montaña. A Sétif se llega en avión desde Argel, en tren o por la autopista este-oeste. El yacimiento se visita en dos o tres horas, museo incluido; la altitud hace frescas las mañanas fuera del verano."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "Sétif"
      },
      {
        "label": "Nombre antiguo",
        "value": "Cuicul"
      },
      {
        "label": "UNESCO",
        "value": "Inscrita en 1982"
      },
      {
        "label": "Altitud",
        "value": "Unos 900 m"
      },
      {
        "label": "Duración",
        "value": "2–3 horas"
      }
    ],
    "faqs": [
      {
        "q": "¿Djémila o Timgad?",
        "a": "Las dos, si es posible. Timgad impresiona por la integridad de su trazado, Djémila por su entorno y sus mosaicos. Están a unas tres horas de carretera."
      },
      {
        "q": "¿Merece la pena el museo?",
        "a": "Sin duda. Los mosaicos de Djémila están entre los mejores conservados del norte de África e iluminan la vida cotidiana de la ciudad."
      },
      {
        "q": "¿Cuándo visitarla?",
        "a": "En primavera y otoño. A 900 metros los inviernos son fríos y húmedos y los veranos pueden ser calurosos a mediodía."
      },
      {
        "q": "¿Hace falta guía?",
        "a": "Muy recomendable: la señalización es mínima y la organización de la ciudad, adaptada al relieve, se entiende mucho mejor con explicaciones."
      }
    ],
    "seoTitle": "Djémila, Argelia: la ciudad romana de Cuicul (UNESCO)",
    "seoDescription": "Djémila (Cuicul), ciudad romana UNESCO en la provincia de Sétif: foro de los Severos, arco de Caracalla, teatro y mosaicos. Qué ver y cómo llegar."
  },
  {
    "slug": "tipaza",
    "en": "tipaza",
    "name": "Tipaza",
    "eyebrow": "Patrimonio Mundial · Tipaza",
    "intro": "Ruinas romanas y púnicas asomadas al Mediterráneo, a una hora de Argel — el yacimiento más accesible del país.",
    "quick": "Tipaza es un yacimiento arqueológico del litoral argelino, a unos 70 km al oeste de Argel. Factoría púnica convertida en colonia romana, conserva un teatro, basílicas, termas y necrópolis directamente sobre el mar. Es Patrimonio Mundial de la UNESCO desde 1982, junto con el cercano Mausoleo real de Mauritania.",
    "sections": [
      {
        "h": "Un yacimiento junto al mar",
        "p": "Lo que distingue a Tipaza es su emplazamiento: las ruinas descienden hasta la roca y el agua, de modo que se visita un yacimiento antiguo con el Mediterráneo como fondo permanente. Albert Camus, que solía ir, escribió allí uno de sus textos más conocidos, Bodas en Tipasa."
      },
      {
        "h": "Qué ver",
        "p": "El parque arqueológico reúne el teatro, el anfiteatro, las termas, la basílica de Alejandro y la gran basílica cristiana, además del decumano que atraviesa la ciudad. El museo expone mosaicos y piezas de las excavaciones. A pocos kilómetros, sobre la loma, el Mausoleo real de Mauritania — vasta tumba circular escalonada atribuida a Juba II y Cleopatra Selene — domina la llanura."
      },
      {
        "h": "El contexto: Cherchell",
        "p": "Unos treinta kilómetros más al oeste, Cherchell es la antigua Caesarea, capital de la Mauritania Cesariense. Su museo arqueológico conserva esculturas y mosaicos de primer orden y se combina de forma natural con Tipaza en una misma jornada."
      },
      {
        "h": "Cómo llegar",
        "p": "Tipaza está a una hora de carretera de Argel por la costa, lo que la convierte en la excursión de un día más sencilla desde la capital. El yacimiento está al aire libre y con poca sombra: sombrero, agua y calzado adecuado. Primavera y otoño son las mejores épocas."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "Tipaza"
      },
      {
        "label": "Distancia de Argel",
        "value": "Unos 70 km"
      },
      {
        "label": "UNESCO",
        "value": "Inscrita en 1982"
      },
      {
        "label": "Combinar con",
        "value": "Cherchell y el Mausoleo real"
      },
      {
        "label": "Duración",
        "value": "Media jornada"
      }
    ],
    "faqs": [
      {
        "q": "¿Se puede visitar desde Argel en el día?",
        "a": "Sí, es la excursión clásica: una hora de carretera, media jornada en el yacimiento y regreso por la tarde. Añadiendo Cherchell, la jornada queda completa."
      },
      {
        "q": "¿Qué es el Mausoleo real de Mauritania?",
        "a": "Una tumba monumental circular y escalonada, sobre la loma que domina la costa, atribuida tradicionalmente al rey Juba II y a su esposa Cleopatra Selene, hija de Cleopatra VII y Marco Antonio."
      },
      {
        "q": "¿Se puede uno bañar en Tipaza?",
        "a": "La costa de alrededor tiene playas y la zona es destino de baño para los argelinos en verano. El baño no forma parte de la visita al yacimiento."
      },
      {
        "q": "¿Hace falta guía?",
        "a": "El yacimiento se recorre bien por libre, pero un guía aporta la cronología púnica, romana y luego cristiana, que no resulta evidente sobre el terreno."
      }
    ],
    "seoTitle": "Tipaza, Argelia: ruinas romanas junto al mar",
    "seoDescription": "Tipaza, yacimiento romano UNESCO junto al Mediterráneo a una hora de Argel: teatro, basílicas, Mausoleo real de Mauritania y museo de Cherchell."
  },
  {
    "slug": "valle-del-mzab",
    "en": "mzab-valley",
    "name": "El valle del M'Zab",
    "eyebrow": "Patrimonio Mundial · Ghardaïa",
    "intro": "Cinco ciudades fortificadas levantadas en el siglo XI por la comunidad ibadí mozabita — un urbanismo tan coherente que Le Corbusier volvió varias veces.",
    "quick": "El valle del M'Zab, en la provincia de Ghardaïa, reúne cinco ksour fortificados — Ghardaïa, Beni Isguen, Melika, Bounoura y El Atteuf — fundados desde el siglo XI por los ibadíes mozabitas. Cada ciudad se organiza en círculos concéntricos en torno a su mezquita, con su palmeral y su sistema de agua. El conjunto es Patrimonio Mundial de la UNESCO desde 1982.",
    "sections": [
      {
        "h": "Un urbanismo completo",
        "p": "El M'Zab no es un decorado: es un sistema. Mezquita-fortaleza en lo alto, viviendas en círculos concéntricos descendiendo la colina, murallas, cementerio fuera, palmeral abajo con las casas de verano, y un dispositivo de captación y reparto de las aguas de crecida que alimenta los huertos. Cada elemento responde a una restricción — defensa, calor, escasez de agua, igualdad comunitaria — y el conjunto sigue funcionando."
      },
      {
        "h": "La influencia en la arquitectura moderna",
        "p": "Le Corbusier visitó el M'Zab varias veces en los años treinta y extrajo de allí principios que reivindicó abiertamente: economía de medios, formas puras, relación entre el espacio privado y la luz. El lugar se cita con regularidad como una referencia mayor de la arquitectura vernácula."
      },
      {
        "h": "Qué ver",
        "p": "Ghardaïa y su mercado en anfiteatro son la puerta de entrada. Beni Isguen, la ciudad santa, se visita con un guía designado por la comunidad, en horarios concretos y con normas estrictas de fotografía. El Atteuf, la más antigua, conserva la mezquita Sidi Brahim. Melika domina el valle desde su colina y su cementerio."
      },
      {
        "h": "Cómo llegar y cómo comportarse",
        "p": "A Ghardaïa se llega en una hora de vuelo desde Argel. El valle es bastante más conservador que el norte: ropa cubierta para todos, fotografía discreta y nunca de personas sin permiso, y respeto absoluto de las normas en Beni Isguen. La mejor época va de octubre a abril."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "Ghardaïa"
      },
      {
        "label": "Fundación",
        "value": "Desde el siglo XI"
      },
      {
        "label": "UNESCO",
        "value": "Inscrito en 1982"
      },
      {
        "label": "Ciudades",
        "value": "5 ksour fortificados"
      },
      {
        "label": "Acceso",
        "value": "Vuelo Argel–Ghardaïa, ~1 h"
      }
    ],
    "faqs": [
      {
        "q": "¿Se puede visitar Beni Isguen libremente?",
        "a": "No. La ciudad santa se visita acompañado de un guía local designado, en horarios definidos, y la fotografía está restringida. Es una norma comunitaria, no una formalidad turística."
      },
      {
        "q": "¿Quiénes son los mozabitas?",
        "a": "Una comunidad bereber de rito ibadí, rama del islam distinta del sunismo y del chiismo, instalada en el valle desde el siglo XI y conocida por su organización social y su comercio."
      },
      {
        "q": "¿Cuántos días prever?",
        "a": "Dos o tres días permiten ver varias ciudades, el palmeral y el sistema de agua sin prisas, con una posible salida al desierto."
      },
      {
        "q": "¿Qué ropa llevar?",
        "a": "Cubierta para hombres y mujeres: hombros y rodillas tapados, prendas holgadas. Es la región más conservadora de un itinerario argelino clásico."
      }
    ],
    "seoTitle": "Valle del M'Zab, Ghardaïa: la guía (UNESCO)",
    "seoDescription": "El valle del M'Zab en Ghardaïa, Patrimonio de la UNESCO: las cinco ciudades ibadíes, Beni Isguen, los palmerales y el urbanismo que inspiró a Le Corbusier."
  },
  {
    "slug": "casbah-argel",
    "en": "casbah-of-algiers",
    "name": "La Casbah de Argel",
    "eyebrow": "Patrimonio Mundial · Argel",
    "intro": "La medina otomana de Argel, que baja de la colina hasta la bahía en un laberinto de callejuelas, escaleras y palacios.",
    "quick": "La Casbah de Argel es el casco antiguo de la capital, construido sobre una colina que desciende hacia el Mediterráneo. Ciudad otomana fortificada desarrollada desde el siglo XVI sobre cimientos más antiguos, conserva palacios, mezquitas, hammams y un tejido urbano denso de callejuelas y escaleras. Es Patrimonio Mundial de la UNESCO desde 1992.",
    "sections": [
      {
        "h": "Una ciudad vertical",
        "p": "En la Casbah no hay una sola calle llana. Todo es pendiente, escalón y pasaje cubierto, y la trama está pensada tanto para la vida comunitaria como para la defensa: casas con patio vueltas hacia dentro, terrazas comunicadas, callejones privados sin salida. No se atraviesa: se entra en ella."
      },
      {
        "h": "Qué ver",
        "p": "La ciudadela que corona la colina, el palacio de los Rais (Bastión 23) frente al mar, la mezquita Ketchaoua en la bisagra con la ciudad colonial, la Djamaa el-Kebir, varias casas otomanas restauradas y las vistas de la bahía desde las terrazas. Mucho de lo que importa está tras las puertas: la visita depende en gran medida de quién le acompañe."
      },
      {
        "h": "Historia y memoria",
        "p": "La Casbah es también un lugar de memoria de la guerra de independencia: sus callejuelas albergaron la Batalla de Argel, episodio central de 1957, y el barrio sigue estrechamente asociado a esa historia en el imaginario argelino."
      },
      {
        "h": "Cómo visitarla",
        "p": "Con guía, sin dudarlo. No por seguridad — el barrio está habitado y es acogedor — sino porque orientarse es imposible y el acceso a los palacios y las terrazas pasa por quienes viven allí. Calzado adecuado: el empedrado es empinado y resbala con la lluvia."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "Argel"
      },
      {
        "label": "UNESCO",
        "value": "Inscrita en 1992"
      },
      {
        "label": "Periodo",
        "value": "Otomano, desde el siglo XVI"
      },
      {
        "label": "Duración",
        "value": "2–4 horas"
      },
      {
        "label": "Consejo",
        "value": "Guía local muy recomendable"
      }
    ],
    "faqs": [
      {
        "q": "¿Es segura la Casbah?",
        "a": "Sí. Es un barrio habitado y hospitalario; la dificultad es orientarse, no sentirse en peligro. Como en todas partes, lleve el teléfono y el bolso discretos."
      },
      {
        "q": "¿Hace falta guía?",
        "a": "Muy recomendable. El laberinto es realmente impracticable sin referencias, y lo esencial — patios, terrazas, palacios — está tras puertas que un guía local puede abrir."
      },
      {
        "q": "¿Cuánto tiempo prever?",
        "a": "De dos a cuatro horas según el ritmo y el número de casas visitadas. Es una visita a pie, en subida y bajada."
      },
      {
        "q": "¿Qué más ver en Argel?",
        "a": "La Gran Mezquita de Argel, el Monumento al Mártir, el museo del Bardo, el Jardín de Ensayo de Hamma, la basílica de Notre-Dame d'Afrique y los bulevares con soportales del paseo marítimo."
      }
    ],
    "seoTitle": "La Casbah de Argel: visitar la medina (UNESCO)",
    "seoDescription": "La Casbah de Argel, medina otomana Patrimonio de la UNESCO: ciudadela, palacio de los Rais, mezquita Ketchaoua y callejuelas escalonadas."
  },
  {
    "slug": "tassili-najjer",
    "en": "tassili-najjer",
    "name": "El Tassili n'Ajjer",
    "eyebrow": "Patrimonio Mundial · Illizi y Djanet",
    "intro": "Una meseta de arenisca erosionada del tamaño de un país, cubierta por miles de pinturas y grabados prehistóricos de un Sáhara entonces verde.",
    "quick": "El Tassili n'Ajjer es una meseta de arenisca del sureste argelino, en las provincias de Illizi y Djanet. Alberga una de las mayores concentraciones de arte rupestre prehistórico del mundo — varios miles de yacimientos — entre formaciones erosionadas en pilares, arcos y cañones. Es Patrimonio Mundial de la UNESCO desde 1982, por criterios culturales y naturales.",
    "sections": [
      {
        "h": "Un Sáhara que fue verde",
        "p": "Los grabados más antiguos se remontan a unos 10.000 años y representan elefantes, jirafas, hipopótamos y cocodrilos. Siguen las fases pastoriles, con los rebaños de bovinos, luego los caballos y los carros, y por último el camello. Es un registro visual de la desecación progresiva del Sáhara, realizado por quienes la vivieron."
      },
      {
        "h": "El paisaje",
        "p": "La meseta está erosionada en lo que se llaman bosques de roca: miles de pilares de arenisca separados por corredores de arena, salpicados de arcos naturales y de guelta — pozas de agua permanente que albergan una fauna relicta. Al sur, el Tadrart despliega arenisca roja y dunas entre las más fotogénicas del Sáhara."
      },
      {
        "h": "Los tuareg",
        "p": "El Tassili es territorio de los Kel Ajjer, confederación tuareg que dio nombre al macizo. Son ellos quienes guían, conducen y cocinan en todas las expediciones, y la hospitalidad que acompaña el viaje — el té, el pan cocido en la arena — no es una escenificación."
      },
      {
        "h": "Cómo visitarlo",
        "p": "Con un vuelo Argel–Djanet y luego en 4×4 y a pie con un operador autorizado que disponga de permisos. La meseta propiamente dicha se recorre en travesías de varios días con asnos o camellos de carga. La temporada es estrictamente invernal, de noviembre a febrero, y no hay cobertura una vez fuera de la ciudad."
      }
    ],
    "facts": [
      {
        "label": "Provincias",
        "value": "Illizi y Djanet"
      },
      {
        "label": "UNESCO",
        "value": "Inscrito en 1982 (mixto)"
      },
      {
        "label": "Arte rupestre",
        "value": "Varios miles de yacimientos"
      },
      {
        "label": "Temporada",
        "value": "Solo de noviembre a febrero"
      },
      {
        "label": "Acceso",
        "value": "Vuelo Argel–Djanet y 4×4"
      }
    ],
    "faqs": [
      {
        "q": "¿Se puede visitar el Tassili por libre?",
        "a": "No. El gran sur se recorre con operador autorizado, guía acreditado y permisos. No es solo una norma administrativa: distancias, calor y falta de cobertura lo convierten en un entorno de expedición."
      },
      {
        "q": "¿Qué antigüedad tiene el arte rupestre?",
        "a": "Los grabados más antiguos se datan habitualmente en unos 10.000 años, y la producción continuó durante varios milenios en fases sucesivas."
      },
      {
        "q": "¿Hace falta estar en forma?",
        "a": "Para el Tadrart en 4×4, no: bastan caminatas cortas. Para la meseta del Tassili sí — es una travesía de varios días con noches frías."
      },
      {
        "q": "¿Cuándo ir?",
        "a": "De noviembre a febrero. Fuera de esa ventana el calor hace peligrosas las expediciones y no se organizan."
      }
    ],
    "seoTitle": "Tassili n'Ajjer: arte rupestre y desierto (UNESCO)",
    "seoDescription": "El Tassili n'Ajjer, meseta UNESCO del Sáhara argelino: arte rupestre prehistórico, bosques de roca, guelta y Tadrart. Temporada, acceso y permisos."
  },
  {
    "slug": "beni-hammad",
    "en": "beni-hammad",
    "name": "Al Qal'a de los Beni Hammad",
    "eyebrow": "Patrimonio Mundial · M'Sila",
    "intro": "La capital hammadí fundada en 1007, abandonada y luego arrasada — y el alminar más alto conservado en Argelia, solo entre las mesetas.",
    "quick": "Al Qal'a de los Beni Hammad, en la provincia de M'Sila, es la primera capital de la dinastía hammadí, fundada en 1007 en las montañas del Hodna. Abandonada en favor de Béjaïa y destruida en el siglo XII, conserva los cimientos de sus palacios, su gran mezquita y su alminar, el más alto que se conserva en Argelia. Es Patrimonio Mundial de la UNESCO desde 1980.",
    "sections": [
      {
        "h": "Una capital desaparecida",
        "p": "Fundada por Hammad ibn Buluggin, príncipe zirí, la ciudad se convirtió en un siglo en una próspera capital bereber, con palacios, baños, mercados y talleres. El traslado de la corte a Béjaïa y luego las destrucciones del siglo XII la vaciaron. Lo que queda es un campo de ruinas excepcionalmente legible: precisamente porque el lugar nunca fue reocupado, ofrece la imagen completa de una ciudad musulmana fortificada."
      },
      {
        "h": "Qué ver",
        "p": "El alminar de la gran mezquita, de una veintena de metros, domina el yacimiento y se ve desde lejos. Los cimientos del palacio Dar al-Bahr, con su gran alberca, dejan intuir una arquitectura de patio y de agua. Los restos de las murallas, las viviendas y los talleres de cerámica completan el conjunto, en un paisaje de colinas abiertas."
      },
      {
        "h": "Combinar con",
        "p": "La provincia de M'Sila conserva también Bou Saada, oasis en el borde sahariano a pocas horas de carretera, con su palmeral, su garganta y la zauia de El Hamel. Ambos se combinan bien en dos jornadas, llegando desde Argel o Sétif."
      },
      {
        "h": "Cómo llegar",
        "p": "El yacimiento está en pleno campo, a unos treinta kilómetros al noreste de M'Sila, y no tiene transporte público: se llega en coche. Lleve agua y sombrero, el lugar está totalmente despejado. Primavera y otoño son las mejores estaciones."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "M'Sila"
      },
      {
        "label": "Fundación",
        "value": "1007, por Hammad ibn Buluggin"
      },
      {
        "label": "UNESCO",
        "value": "Inscrita en 1980"
      },
      {
        "label": "Alminar",
        "value": "El más alto conservado en Argelia"
      },
      {
        "label": "Acceso",
        "value": "Solo en coche"
      }
    ],
    "faqs": [
      {
        "q": "¿Qué queda de Al Qal'a?",
        "a": "Un vasto campo de ruinas sin reconstruir: el alminar de la gran mezquita, los cimientos de los palacios y de la alberca, y los restos de murallas y barrios artesanales."
      },
      {
        "q": "¿Quiénes eran los hammadíes?",
        "a": "Una dinastía bereber surgida de los ziríes, que gobernó el Magreb central entre los siglos XI y XII desde esta capital y luego desde Béjaïa."
      },
      {
        "q": "¿Está acondicionado el yacimiento?",
        "a": "De forma somera. Hay guardas y un acceso señalizado, pero poca interpretación sobre el terreno: un guía marca una diferencia real."
      },
      {
        "q": "¿Cuánto tiempo hace falta?",
        "a": "Unas dos horas en el lugar, más el trayecto. Media jornada desde M'Sila, más desde Argel o Sétif."
      }
    ],
    "seoTitle": "Al Qal'a de los Beni Hammad: la capital hammadí",
    "seoDescription": "Al Qal'a de los Beni Hammad, capital hammadí de 1007 y Patrimonio de la UNESCO en la provincia de M'Sila: alminar, palacio Dar al-Bahr y murallas."
  },
  {
    "slug": "constantina",
    "en": "constantine",
    "name": "Constantina",
    "eyebrow": "La ciudad de los puentes · Este argelino",
    "intro": "Una ciudad construida sobre una roca partida por un cañón de doscientos metros, recosida por una serie de puentes espectaculares.",
    "quick": "Constantina es la gran ciudad del este argelino, construida sobre un espolón rocoso que atraviesan las gargantas del Rhumel, salvadas por varios puentes, entre ellos el célebre puente colgante Sidi M'Cid. Antigua Cirta, capital del reino númida de Masinisa, conserva el palacio Ahmed Bey, el museo de Cirta y una tradición musical malouf todavía viva.",
    "sections": [
      {
        "h": "El emplazamiento",
        "p": "Pocas ciudades tienen un emplazamiento tan improbable. La roca de Constantina está rodeada y cortada por las gargantas del Rhumel, de casi doscientos metros de profundidad, y la ciudad se desarrolló salvando ese vacío: pasarelas, puentes de carretera, viaductos. El puente colgante Sidi M'Cid, el puente de El Kantara y la pasarela Perrégaux dibujan una silueta única."
      },
      {
        "h": "Historia",
        "p": "La ciudad es la antigua Cirta, capital del reino númida bajo Masinisa en el siglo II a. C., y después ciudad romana reconstruida por el emperador Constantino, que le dejó su nombre. Bajo la regencia otomana se convirtió en la gran ciudad del beylicato del Este, y el palacio del último bey lo atestigua."
      },
      {
        "h": "Qué ver",
        "p": "El palacio Ahmed Bey, con sus patios, sus galerías pintadas y sus jardines, es el monumento principal. El museo de Cirta reúne las colecciones númidas y romanas de la región. El monumento a los caídos, las gargantas vistas desde las pasarelas, el casco antiguo, la mezquita del Emir Abdelkader y la medersa completan la visita."
      },
      {
        "h": "Música y cultura",
        "p": "Constantina es el foco del malouf, escuela de música arabigoandalusí heredada de Sevilla, que se toca en las bodas y en los festivales de la ciudad. Es además una ciudad de cocina reputada, conocida sobre todo por su chakhchoukha."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "Constantina"
      },
      {
        "label": "Nombre antiguo",
        "value": "Cirta"
      },
      {
        "label": "Gargantas",
        "value": "Unos 200 m de profundidad"
      },
      {
        "label": "Música",
        "value": "Malouf (arabigoandalusí)"
      },
      {
        "label": "Combinar con",
        "value": "Djémila y Timgad"
      }
    ],
    "faqs": [
      {
        "q": "¿Por qué la llaman la ciudad de los puentes?",
        "a": "Porque su roca está cortada por las gargantas del Rhumel y la ciudad solo pudo crecer salvándolas: varios puentes y pasarelas unen sus barrios sobre el vacío."
      },
      {
        "q": "¿Cuánto tiempo prever?",
        "a": "Una o dos jornadas para la ciudad. Añadiendo Djémila y Timgad, tres o cuatro días para el este del país."
      },
      {
        "q": "¿Cómo llegar a Constantina?",
        "a": "En avión desde Argel, en tren o por la autopista este-oeste. La ciudad tiene el aeropuerto internacional Mohamed Boudiaf."
      },
      {
        "q": "¿Qué es el malouf?",
        "a": "Una escuela de música arabigoandalusí de la que Constantina es el principal foco en Argelia, transmitida desde el exilio andalusí y todavía interpretada hoy."
      }
    ],
    "seoTitle": "Constantina, Argelia: la ciudad de los puentes",
    "seoDescription": "Constantina, la ciudad de los puentes sobre las gargantas del Rhumel: palacio Ahmed Bey, museo de Cirta, la antigua Cirta númida y la música malouf."
  },
  {
    "slug": "djanet",
    "en": "djanet",
    "name": "Djanet",
    "eyebrow": "Puerta del Sáhara · Sureste",
    "intro": "El oasis tuareg del sureste argelino, base de partida del Tassili n'Ajjer y del Tadrart Rojo.",
    "quick": "Djanet es un oasis del sureste argelino, apoyado en acantilados rojos al pie del Tassili n'Ajjer. Es la ciudad tuareg de referencia del gran sur y el punto de partida de las expediciones hacia la meseta del Tassili y el desierto del Tadrart. Se accede en avión desde Argel y la temporada va de noviembre a febrero.",
    "sections": [
      {
        "h": "El oasis",
        "p": "Djanet es un lugar de vida antes que una base logística: un palmeral extenso, antiguos ksour agarrados a la roca — El Mihan, Azelouaz, Adjahil — y un mercado donde se cruzan tuareg y gente venida del norte. La ciudad es tranquila, la acogida cálida, y se nota de inmediato que se ha cambiado de país cultural."
      },
      {
        "h": "El Tadrart Rojo",
        "p": "Al sur de Djanet se extiende el Tadrart, un macizo de arenisca roja esculpida por el viento, con arcos naturales, cañones y dunas que se apoyan en la roca negra. Es el paisaje sahariano más fotografiado de Argelia, recorrido en 4×4 durante varios días con noches de vivac."
      },
      {
        "h": "El Tassili n'Ajjer",
        "p": "Al norte y al este, la meseta del Tassili se recorre en travesías de varios días, con asnos de carga y un equipo tuareg, para llegar a los grandes yacimientos de arte rupestre. Es más exigente físicamente que el Tadrart, y complementario."
      },
      {
        "h": "Práctica",
        "p": "El acceso es en avión desde Argel con Air Algérie o Tassili Airlines; las frecuencias son limitadas y los vuelos se llenan en temporada, así que conviene reservar pronto. No hay cobertura fuera de la ciudad, las noches de invierno son frías, y todo se hace con operador autorizado y permisos."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "Djanet"
      },
      {
        "label": "Cultura",
        "value": "Tuareg (Kel Ajjer)"
      },
      {
        "label": "Acceso",
        "value": "Vuelo desde Argel"
      },
      {
        "label": "Temporada",
        "value": "De noviembre a febrero"
      },
      {
        "label": "Cerca",
        "value": "Tadrart Rojo, Tassili n'Ajjer"
      }
    ],
    "faqs": [
      {
        "q": "¿Cómo se llega a Djanet?",
        "a": "En avión desde Argel, con Air Algérie o Tassili Airlines. La carretera desde el norte supone varios días y no es una opción para un viaje normal."
      },
      {
        "q": "¿Qué diferencia hay entre el Tadrart y el Tassili?",
        "a": "El Tadrart se recorre en 4×4, con caminatas cortas, y ofrece los paisajes de arenisca roja y dunas. La meseta del Tassili se hace en travesía de varios días y concentra los grandes yacimientos de arte rupestre."
      },
      {
        "q": "¿Hace frío de noche?",
        "a": "Sí, mucho. En pleno invierno las temperaturas nocturnas pueden acercarse a cero en el vivac: chaqueta de abrigo, gorro y capas de verdad son imprescindibles."
      },
      {
        "q": "¿Hay cobertura?",
        "a": "En la ciudad de Djanet, sí. En cuanto se entra en el desierto, nada — los equipos usan comunicaciones por satélite."
      }
    ],
    "seoTitle": "Djanet, Argelia: puerta del Tassili y del Tadrart",
    "seoDescription": "Djanet, oasis tuareg del sureste argelino: base de partida del Tassili n'Ajjer y del Tadrart Rojo. Acceso, temporada, permisos y qué saber."
  },
  {
    "slug": "tlemcen",
    "en": "tlemcen",
    "name": "Tlemcén",
    "eyebrow": "Herencia andalusí · Oeste argelino",
    "intro": "La capital cultural de la Argelia andalusí — Gran Mezquita, alminar de Mansourah, palacio El Mechouar y música gharnati.",
    "quick": "Tlemcén es una ciudad del oeste argelino, próxima a la frontera marroquí, considerada el foco de la herencia andalusí en Argelia. Antigua capital ziyánida, conserva la Gran Mezquita del siglo XII, el alminar inacabado de Mansourah, el palacio El Mechouar, el santuario de Sidi Bumedién y una tradición musical gharnati heredada de Granada.",
    "sections": [
      {
        "h": "Una capital andalusí",
        "p": "Tlemcén fue capital del reino ziyánida entre los siglos XIII y XVI y encrucijada entre el Magreb, al-Ándalus y el Sáhara. Las sucesivas oleadas de refugiados andalusíes trajeron su arquitectura, su artesanía y su música, hasta el punto de que hoy la ciudad es la referencia de esa herencia en Argelia."
      },
      {
        "h": "Qué ver",
        "p": "La Gran Mezquita, fundada en el siglo XI y reformada en el XII, con su mihrab de yesería calada. El conjunto de Mansourah y su alminar inacabado, resto de un asedio meriní. El palacio El Mechouar, restaurado, en el corazón de la ciudadela ziyánida. El santuario y la medersa de Sidi Bumedién en El Eubbad. Y la meseta de Lalla Setti para la vista sobre la ciudad."
      },
      {
        "h": "Naturaleza y alrededores",
        "p": "Las cascadas de El Ourit, en una garganta boscosa a las puertas de la ciudad, ofrecen un contraste con los monumentos. La región cuenta además con cuevas, pinares y, más lejos, los restos romanos y númidas de Siga hacia la costa."
      },
      {
        "h": "Música y artesanía",
        "p": "El gharnati, escuela de música arabigoandalusí surgida en Granada, sigue vivo en Tlemcén y se toca en bodas y festivales. La ciudad es conocida también por su artesanía: alfombras, bordado en hilo de oro, cobre y cerámica."
      }
    ],
    "facts": [
      {
        "label": "Provincia",
        "value": "Tlemcén"
      },
      {
        "label": "Época destacada",
        "value": "Reino ziyánida, s. XIII–XVI"
      },
      {
        "label": "Música",
        "value": "Gharnati (arabigoandalusí)"
      },
      {
        "label": "Qué ver",
        "value": "Gran Mezquita, Mansourah, El Mechouar"
      },
      {
        "label": "Mejor época",
        "value": "Abril–junio, septiembre–noviembre"
      }
    ],
    "faqs": [
      {
        "q": "¿Por qué se llama capital andalusí?",
        "a": "Porque acogió oleadas sucesivas de refugiados de al-Ándalus, cuya arquitectura, artesanía y música dieron forma a la ciudad, y porque sigue siendo su principal conservatorio en Argelia."
      },
      {
        "q": "¿Qué es Mansourah?",
        "a": "Una ciudad de asedio construida por los meriníes en el siglo XIV frente a Tlemcén. Quedan murallas y un alminar monumental que nunca se terminó."
      },
      {
        "q": "¿Cuántos días prever?",
        "a": "Dos jornadas permiten ver los grandes monumentos, El Ourit y Lalla Setti sin prisas."
      },
      {
        "q": "¿Cómo llegar a Tlemcén?",
        "a": "Por su aeropuerto con vuelos desde Argel, o por carretera desde Orán, a unas dos horas."
      }
    ],
    "seoTitle": "Tlemcén, Argelia: herencia andalusí y gharnati",
    "seoDescription": "Tlemcén, capital de la Argelia andalusí: Gran Mezquita, alminar de Mansourah, palacio El Mechouar, Sidi Bumedién y cascadas de El Ourit."
  }
];

export const destEsByEn = (en: string) => DESTINATIONS_ES.find(d => d.en === en);

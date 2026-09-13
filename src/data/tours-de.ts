// German translations for the tour catalogue — same contract as tours-fr.ts.
//
// Every tour has a CARD translation so the German index at /de/reisen/ is fully
// German. Tours marked `full` also get a complete detail page; the rest link
// to the English page from the index, which is honest rather than serving a
// half-translated page. tours.json stays the single source of truth for prices,
// images and structure.

export interface TourDe {
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

export const TOURS_DE: Record<string, TourDe> = {
  "djanet-sahara-safari": {
    "title": "Sahara-Safari ab Djanet — 5 Tage im Tadrart Rouge",
    "duration": "5 Tage · 4 Nächte",
    "hook": "Fünf Tage im Herzen der algerischen Sahara rund um Djanet — roter Sandstein des Tadrart, goldene Dünen, prähistorische Felskunst und Nächte unter den Sternen.",
    "full": true,
    "seoTitle": "Sahara-Reise Djanet 5 Tage — Tadrart Rouge",
    "seoDescription": "Private 5-Tage-Reise durch die algerische Sahara ab Djanet: Tadrart Rouge, Dünen, Felskunst und Wüstencamp, mit einem lokalen Tuareg-Team.",
    "overview": "Das ist die Sahara, wie man sie sich vorstellt und selten zu sehen bekommt: der Tadrart Rouge, ein Labyrinth aus windgeformtem orangefarbenem Sandstein, Naturbögen, Schluchten und Dünen, die sich an schwarzen Fels lehnen. Von Djanet aus, der Tuareg-Oase im Südosten Algeriens, geht es im 4×4 mit einem lokalen Team zu vier Nächten im Camp. Die Tage wechseln zwischen Pisten, kurzen Wanderungen zu jahrtausendealten Felskunststätten und langen Fotopausen im Abendlicht. Die Nächte verbringt man im Camp, am Feuer und beim Tee, ohne Licht und ohne Netz.",
    "highlights": [
      "Der Tadrart Rouge und seine orangefarbenen Sandsteinschluchten",
      "Prähistorische Felskunststätten des Tassili n'Ajjer",
      "Die großen Dünen der algerischen Sahara bei Sonnenuntergang",
      "Vier Nächte im Camp unter einem Himmel ohne Lichtverschmutzung",
      "Ein lokales Tuareg-Team: Fahrer, Guide und Koch",
      "Vollpension und Campingausrüstung inklusive"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft und Aufbruch in die Wüste",
        "body": "Treffen mit dem Team in Djanet, dann Aufbruch im 4×4 in die Wüste. Sonnenuntergang über den Dünen und erste Nacht im Camp.",
        "stops": [
          {
            "place": "Djanet",
            "text": "Die Tuareg-Oasenhauptstadt im Südosten — Palmenhaine unter roten Felsen, Ihr Tor zum Tassili."
          },
          {
            "place": "Erste Dünen bei Sonnenuntergang",
            "text": "Eine 4x4-Fahrt auf den Sand für das letzte Licht des Tages und die erste Nacht im Wüstencamp."
          },
          {
            "place": "Das erste Biwak",
            "text": "Das Lager entsteht im Windschatten einer Düne — Matten, ein niedriger Tisch und ein Holzfeuer — und die erste Nacht vergeht ohne ein einziges elektrisches Licht."
          }
        ]
      },
      {
        "day": 2,
        "title": "Der Tadrart Rouge",
        "body": "Durchquerung der roten Fels- und Sandtäler des Tadrart mit Fotostopps, bis zum Sonnenuntergang und zur Nacht im Camp.",
        "stops": [
          {
            "place": "Der Tadrart Rouge",
            "text": "Vom Wind geschliffene orangefarbene Sandsteincanyons und Felsbögen — eine der eindrucksvollsten Landschaften der Sahara."
          },
          {
            "place": "Skulptural geformte Felsbögen",
            "text": "Über Jahrtausende geformte Steinbögen und balancierende Felsblöcke — die charakteristischen Formen des Tadrart."
          },
          {
            "place": "Sandmeere & Sonnenuntergangscamp",
            "text": "Weite Dünenfelder, die sich in der Dämmerung purpurrot färben, vor einer Nacht unter außergewöhnlich dunklem Sternenhimmel."
          }
        ]
      },
      {
        "day": 3,
        "title": "Dünen und Felskunst",
        "body": "Erkundung der großen Dünen und der alten Gravuren zu Fuß, eine Teepause, Sonnenuntergang und Übernachtung im Camp.",
        "stops": [
          {
            "place": "Die großen Dünen zu Fuß",
            "text": "Der Aufstieg auf den hohen Sand für die Stille und den Ausblick — das Herzstück des Wüstenerlebnisses."
          },
          {
            "place": "Prähistorische Felskunst",
            "text": "Malereien und Gravuren von Hirten, Jägern und Wildtieren aus der grünen Sahara, bis zu 10.000 Jahre alt — älter als die Pyramiden."
          },
          {
            "place": "Tuareg-Teezeremonie",
            "text": "Die traditionellen drei Gläser Saharatee bei einer Tuareg-Familie — gelebte Kultur des tiefen Südens."
          }
        ]
      },
      {
        "day": 4,
        "title": "Tief in der Wüste",
        "body": "Weiter hinein in die abgelegene Wüste, in die Stille und die weiten Horizonte der Sahara; letzte Nacht im Camp.",
        "stops": [
          {
            "place": "Abgelegene Ergs & Plateaus",
            "text": "Stundenlang offene Wüste, bewusst wegen ihrer Leere gewählt, nicht wegen Sehenswürdigkeiten — die Sahara in ihrer reinsten Form."
          },
          {
            "place": "Die lange Mittagsrast",
            "text": "Schatten unter einer Akazie oder einem Felsvorsprung, während die Hitze vergeht: eine Matte, Mittagessen, Tee und zwei bis drei Stunden völliges Nichtstun."
          },
          {
            "place": "Das letzte Biwak",
            "text": "Das letzte Lager der Rundreise, aufgeschlagen dort, wo das Abendlicht am schönsten ist, mit Abendessen am Feuer und dem vollen Sternenhimmel."
          }
        ]
      },
      {
        "day": 5,
        "title": "Rückkehr nach Djanet",
        "body": "Frühstück in der Wüste und eine landschaftlich reizvolle Rückfahrt nach Djanet, wo die Reise endet.",
        "stops": [
          {
            "place": "Frühstück im Camp",
            "text": "Brot aus dem Sandofen, Datteln, Marmelade und Kaffee, während im ersten Licht über dem Sandstein das Lager abgebaut wird."
          },
          {
            "place": "Die Fahrt nach Norden durch den Tadrart",
            "text": "Die Rückfahrt zur Oase — dieselbe rote Felslandschaft, durch die Sie gekommen sind, nun im umgekehrten Licht."
          },
          {
            "place": "Djanet",
            "text": "Die Tuareg-Oase und der Flughafen Tiska, wo die Rundreise endet und der Flug nach Norden beginnt."
          }
        ]
      }
    ],
    "includes": [
      "Empfang und Transfers in Djanet",
      "4×4 während der gesamten Reise",
      "Erfahrener Wüstenfahrer",
      "Lokaler Tuareg-Guide",
      "Vollpension",
      "Campingausrüstung",
      "Trinkwasser in Flaschen"
    ],
    "excludes": [
      "Internationale und inländische Flüge",
      "Visumgebühren",
      "Reiseversicherung",
      "Getränke außer Wasser",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Nur November bis Februar"
      },
      {
        "label": "Nächte",
        "value": "Kalt — echte Schichten nötig"
      },
      {
        "label": "Mobilfunk",
        "value": "In der Wüste keiner"
      },
      {
        "label": "Anreise",
        "value": "Flug Algier–Djanet, dann 4×4"
      }
    ],
    "faqs": [
      {
        "q": "Wann ist diese Reise möglich?",
        "a": "Von November bis Februar. Außerhalb der Saison macht die Hitze Expeditionen im tiefen Süden gefährlich, und sie werden nicht durchgeführt."
      },
      {
        "q": "Wie kommt man nach Djanet?",
        "a": "Mit dem Flugzeug ab Algier, mit Air Algérie oder Tassili Airlines. Die Flüge in den Süden sind selten: früh buchen, besonders in der Saison."
      },
      {
        "q": "Wo übernachtet man?",
        "a": "Im Wüstencamp, mit gestellten Zelten, Matten und Decken. Komfortabel, aber einfach: kein Strom, keine Duschen, kein Netz."
      },
      {
        "q": "Braucht man gute Kondition?",
        "a": "Nein. Gefahren wird im 4×4, mit kurzen Wanderungen über Sand und Fels. Auszuhalten sind vor allem lange Tage und kalte Nächte."
      }
    ]
  },
  "ghardaia-guided-tour": {
    "title": "Ghardaïa — 3 Tage im M'Zab-Tal",
    "duration": "3 Tage · 2 Nächte",
    "hook": "Drei Tage im M'Zab-Tal — die befestigten Städte Ghardaïa und Beni Isguen, die Foggaras, die Palmenhaine und ein Abend im 4×4 in der Wüste.",
    "full": true,
    "seoTitle": "Reise Ghardaïa 3 Tage — M'Zab-Tal (UNESCO)",
    "seoDescription": "Private 3-Tage-Reise nach Ghardaïa und ins UNESCO-Welterbe M'Zab-Tal: die fünf ibaditischen Städte, die Foggaras und die Palmenhaine.",
    "overview": "Das M'Zab-Tal ist eines der bemerkenswertesten Stadtensembles der islamischen Welt: fünf befestigte Städte, ab dem 11. Jahrhundert von der ibaditischen Gemeinschaft der Mozabiten erbaut, in Ocker, Weiß und Blau über Saharahügel geschichtet. Ihre Bauweise — Moschee auf der Kuppe, Häuser in konzentrischen Ringen, Palmenhain unten, geteiltes Wassersystem — faszinierte Le Corbusier so sehr, dass er mehrfach zurückkehrte. Drei Tage genügen, um den Ort von innen zu verstehen, mit einem Guide, der seine Regeln kennt.",
    "highlights": [
      "Ghardaïa und sein amphitheatralischer Markt",
      "Beni Isguen, die heilige Stadt, mit lokalem Guide",
      "Die Foggaras, jahrtausendealtes System der Wasserverteilung",
      "Die Palmenhaine und die Sommerhäuser der Mozabiten",
      "Ein Abend im 4×4 in der Wüste unter Sternen",
      "Handwerk des M'Zab: Teppiche, Wolle und Kupfer"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ghardaïa und die Oase",
        "body": "Empfang am Flughafen Ghardaïa und Transfer zur Unterkunft. Erkundung der steilen Gassen der Stadt und ihres lebhaften Marktes, Mittagessen in einem restaurierten Altstadthaus, danach der Palmenhain und die Foggara-Kanäle. Abendessen und Übernachtung in Ghardaïa.",
        "stops": [
          {
            "place": "Der Markt von Ghardaïa",
            "text": "Der terrassierte Arkadenplatz unterhalb des pyramidenförmigen Minaretts — seit tausend Jahren das pulsierende Herz des M'Zab."
          },
          {
            "place": "Mittagessen in einem historischen Haus",
            "text": "Ein Essen in einem traditionellen mosabitischen Haus — dickwandig und kühl gegen die Wüstenhitze."
          },
          {
            "place": "Die Palmenhaine & Foggaras",
            "text": "Gärten, seit tausend Jahren durch die Foggara bewässert — unterirdische Kanäle, die das Leben im trockenen Tal erst möglich machen."
          }
        ]
      },
      {
        "day": 2,
        "title": "Beni Isguen und Wüstensafari",
        "body": "Vormittag im befestigten Dorf Beni Isguen und in der Ökostadt Tafilelt, mit Panoramablicken über das Tal. Nach einem traditionellen Mittagessen eine 4×4-Safari Richtung El Guerrara und Abendessen in der offenen Wüste unter den Sternen.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "Die heilige ummauerte Stadt des M'Zab, betreten durch ihr altes Tor, wo Kleidung und Fotografieren den örtlichen Sitten folgen."
          },
          {
            "place": "Die Öko-Stadt Tafilelt",
            "text": "Eine moderne mosabitische Siedlung nach traditionellen Prinzipien — der Beweis, dass die Ideen des Tals lebendig geblieben sind."
          },
          {
            "place": "4x4-Safari Richtung El Guerrara",
            "text": "Offene Wüste jenseits der Städte, die mit einem Abendessen unter den Sternen endet."
          }
        ]
      },
      {
        "day": 3,
        "title": "Abreise",
        "body": "Ein gemütliches Frühstück, dann der Transfer zurück zum Flughafen — das Ende einer Reise durch das saharische Herz Algeriens.",
        "stops": [
          {
            "place": "Frühstück auf der Terrasse",
            "text": "Ein letztes Frühstück im Gästehaus mit Blick auf den gegenüber den Hügel hinaufgestaffelten Ksar — die schönste halbe Stunde des Tages im M'Zab."
          },
          {
            "place": "Der alte Marktplatz",
            "text": "Eine letzte Stunde unter den Arkaden von Ghardaïas Markt für Teppiche, Datteln und mosabitische Wolle, sofern die Flugzeit es erlaubt."
          },
          {
            "place": "Flughafen Noumérat–Moufdi Zakaria",
            "text": "Der private Transfer aus dem Tal, mit Unterstützung beim Check-in für den Flug nach Norden."
          }
        ]
      }
    ],
    "includes": [
      "Flughafentransfers in Ghardaïa",
      "2 Übernachtungen",
      "Privater lizenzierter Guide",
      "Lokaler Guide für Beni Isguen",
      "Privater Transport",
      "4×4-Ausfahrt in die Wüste",
      "Frühstück"
    ],
    "excludes": [
      "Flüge",
      "Visumgebühren",
      "Reiseversicherung",
      "Mittag- und Abendessen",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Oktober bis April"
      },
      {
        "label": "Kleidung",
        "value": "Konservatives Tal — bedeckende Kleidung"
      },
      {
        "label": "Fotografieren",
        "value": "In Beni Isguen eingeschränkt"
      },
      {
        "label": "Anreise",
        "value": "Flug Algier–Ghardaïa, ca. 1 Std."
      }
    ],
    "faqs": [
      {
        "q": "Warum ist das M'Zab-Tal UNESCO-Welterbe?",
        "a": "Wegen der außergewöhnlichen Stimmigkeit seines Städtebaus: fünf Städte des 11. Jahrhunderts, als vollständiges System aus Verteidigung, Wohnen, Wasser und Palmenhain entworfen — bis heute bewohnt und funktionsfähig."
      },
      {
        "q": "Kann man Beni Isguen frei besichtigen?",
        "a": "Nein. Die heilige Stadt wird mit einem von der Gemeinschaft bestimmten Guide zu festen Zeiten besucht, und das Fotografieren ist eingeschränkt. Das ist eine Regel der Gemeinschaft, keine touristische Formalität."
      },
      {
        "q": "Wie kommt man nach Ghardaïa?",
        "a": "Am einfachsten mit dem Flug ab Algier, etwa eine Stunde. Über Land ist es möglich, dauert aber einen ganzen Tag."
      },
      {
        "q": "Welche Kleidung ist angemessen?",
        "a": "Bedeckend für alle: Schultern und Knie bedeckt, weite Kleidung. Das Tal ist deutlich konservativer als die Küste."
      }
    ]
  },
  "algeria-cultural-tour": {
    "title": "Kulturreise durch Algerien — 5 Tage",
    "duration": "5 Tage · 4 Nächte",
    "hook": "Fünf Tage durch das Herz Algeriens — die UNESCO-Kasbah von Algier, die römische Küste bei Tipaza und das M'Zab-Tal, mit privatem lizenziertem Guide.",
    "full": true,
    "seoTitle": "Kulturreise Algerien 5 Tage — Algier, Tipaza, M'Zab",
    "seoDescription": "Private 5-Tage-Reise durch Algerien: die Kasbah von Algier, die römischen Ruinen von Tipaza und Cherchell sowie das M'Zab-Tal, mit lizenziertem Guide.",
    "overview": "Das ist Algerien im Kleinen: die weiße Hauptstadt, die römische Küste und die Wüste, in fünf Tagen ohne Hetze. Sie durchstreifen die UNESCO-Kasbah von Algier, folgen dem Mittelmeer zu den Ruinen von Tipaza und dem Museum von Cherchell und fliegen dann nach Ghardaïa, um das M'Zab-Tal zu betreten — fünf befestigte Oasenstädte, vor tausend Jahren von den ibaditischen Mozabiten erbaut. Küste, Kultur und Sahara, mit privatem Guide und echter algerischer Küche unterwegs.",
    "highlights": [
      "Die Kasbah von Algier, UNESCO-Welterbe",
      "Tipaza, römische Stadt am Mittelmeer",
      "Das archäologische Museum von Cherchell",
      "Das M'Zab-Tal und seine fünf ibaditischen Städte",
      "Privater lizenzierter Guide während des gesamten Aufenthalts",
      "Alltägliche algerische Küche, fern von Touristenmenüs"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Algier",
        "body": "Empfang am Flughafen Houari Boumediene und privater Transfer zu Ihrem Hotel. Ankommen und ausruhen; Übernachtung in Algier.",
        "stops": [
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Empfang bei Ankunft und Transfer in ein Hotel im Stadtzentrum — organisatorisch bereits alles erledigt."
          },
          {
            "place": "Die Küstenstraße nach Algier",
            "text": "Die Küstenstraße in die Hauptstadt, an der sich die weißen Terrassen der Stadt in Stufen über dem Hafen auftürmen."
          },
          {
            "place": "Zentrum von Algier",
            "text": "Check-in und ein freier Abend, um die Arkaden der Uferpromenade und den Märtyrerplatz in eigenem Tempo zu erkunden, bevor das Programm beginnt."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza und Cherchell",
        "body": "Nach dem Frühstück entlang der Küste zum Königlichen Mausoleum von Mauretanien und zu den römischen Ruinen von Tipaza. Mittagessen am Mittelmeer, danach das Archäologische Museum von Cherchell. Rückkehr zur Übernachtung nach Algier.",
        "stops": [
          {
            "place": "Das Königliche Mausoleum von Mauretanien",
            "text": "Ein gewaltiger steinerner Rundbau auf einem Hügel über dem Meer — die Grabstätte des Berberkönigs Juba II. und Kleopatra Selenes, der Tochter Kleopatras von Ägypten, aus dem 1. Jahrhundert v. Chr."
          },
          {
            "place": "Das römische Tipaza",
            "text": "Eine zum UNESCO-Welterbe zählende römische Hafenstadt entlang des Mittelmeers — Basiliken, Thermen und ein Theater, dem die Wellen zu Füßen liegen."
          },
          {
            "place": "Cherchell (das antike Caesarea)",
            "text": "Die einstige Hauptstadt Juba II., deren Museum einige der schönsten römischen und griechischen Mosaiken und Statuen Algeriens bewahrt."
          }
        ]
      },
      {
        "day": 3,
        "title": "Algier und Flug nach Ghardaïa",
        "body": "Besuch der UNESCO-Kasbah, des Bardo-Museums und des Märtyrerdenkmals. Am Abend Flug nach Süden zur Übernachtung in Ghardaïa.",
        "stops": [
          {
            "place": "Die Kasbah von Algier",
            "text": "Die zum UNESCO-Welterbe zählende osmanische Zitadelle — ein steiles, weißes Labyrinth aus Palästen, Moscheen und Hofhäusern, das sich über der Bucht erhebt."
          },
          {
            "place": "Das Bardo-Museum",
            "text": "Vor- und Frühgeschichte sowie Völkerkunde in einer eleganten maurischen Villa, von Abgüssen saharischer Felskunst bis zu Silberschmuck und dem Alltag Algeriens."
          },
          {
            "place": "Das Märtyrerdenkmal (Maqam Echahid)",
            "text": "Drei aufragende Betonpalmwedel, 1982 über der Stadt errichtet, zum Gedenken an die Gefallenen des Unabhängigkeitskrieges."
          }
        ]
      },
      {
        "day": 4,
        "title": "Sahara rund um Ghardaïa",
        "body": "Ein Wüstentag rund um Ghardaïa mit einem traditionellen Mittagessen und Zeit in den Dünen. Übernachtung in Ghardaïa.",
        "stops": [
          {
            "place": "Die Palmenhaine & Foggaras",
            "text": "Gärten, seit tausend Jahren durch die Foggara bewässert — unterirdische Kanäle, die das Leben im trockenen Tal erst möglich machen."
          },
          {
            "place": "Ein traditionelles Sahara-Mittagessen",
            "text": "Taguella — im heißen Sand gebackenes Fladenbrot — mit Grillfleisch und Minztee, unter einem Sonnensegel am Fuß der Düne."
          },
          {
            "place": "Die Dünen bei Ghardaïa",
            "text": "Ein Nachmittag im Sand am Rand der Sahara, mit einem traditionellen Mittagessen unter dem Wüstenhimmel."
          }
        ]
      },
      {
        "day": 5,
        "title": "Das M'Zab-Tal und Rückreise",
        "body": "Besuch von El Atteuf und des Sidi-Brahim-Mausoleums, Mittagessen in Ghardaïa und Rückflug nach Algier.",
        "stops": [
          {
            "place": "El Atteuf",
            "text": "Die älteste der fünf Städte des M'Zab, deren schlichte Sidi-Brahim-Moschee Le Corbusier so beeindruckte, dass sie die moderne Architektur mitprägte."
          },
          {
            "place": "Das Sidi-Brahim-Mausoleum",
            "text": "Weiß gekalkt und von Hand geformt, fast skulptural — die kubistische Klarheit, die europäische Architekten ins M'Zab zog."
          },
          {
            "place": "Der Markt von Ghardaïa",
            "text": "Der terrassierte Arkadenplatz unterhalb des pyramidenförmigen Minaretts — seit tausend Jahren das pulsierende Herz des M'Zab."
          }
        ]
      }
    ],
    "includes": [
      "Alle Transfers",
      "4 Übernachtungen",
      "Privater lizenzierter Guide",
      "Privater Transport",
      "Eintritte",
      "Frühstück"
    ],
    "excludes": [
      "Internationale Flüge",
      "Inlandsflug Algier–Ghardaïa",
      "Visumgebühren",
      "Reiseversicherung",
      "Mittag- und Abendessen",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Oktober bis April"
      },
      {
        "label": "Tempo",
        "value": "Moderat, mit Zeit an jedem Ort"
      },
      {
        "label": "Kleidung",
        "value": "Bedeckend im M'Zab"
      },
      {
        "label": "Start",
        "value": "Algier — Flughafen Houari Boumediene"
      }
    ],
    "faqs": [
      {
        "q": "Eignet sich die Reise für einen ersten Besuch?",
        "a": "Ja, es ist das beste Format für eine erste Reise: Sie erleben die drei Gesichter des Landes — Hauptstadt, römisches Erbe und Sahara — ohne übermäßige Distanzen."
      },
      {
        "q": "Ist der Inlandsflug enthalten?",
        "a": "Nein, er wird separat gebucht. Wir übernehmen die Buchung und nennen die Zeiten, die zum Programm passen."
      },
      {
        "q": "Braucht man ein Visum?",
        "a": "Ja, für nahezu alle Nationalitäten, und es muss vor der Abreise bei einem algerischen Konsulat beantragt werden. Wir stellen die geforderte Einladung und das bestätigte Programm."
      },
      {
        "q": "Lässt sich die Reise anpassen?",
        "a": "Ja. Alle unsere Reisen sind privat: Dauer, Tempo und Etappen richten sich nach Ihrem Kalender."
      }
    ]
  },
  "timimoun-desert-escape": {
    "title": "Timimoun — 5 Tage in der roten Oase des Gourara",
    "duration": "5 Tage · 4 Nächte",
    "hook": "Fünf Tage in der roten Oase Timimoun — Ksour und Palmenhaine, alte Foggaras, große Dünen und eine Nacht im Wüstencamp.",
    "full": true,
    "seoTitle": "Reise Timimoun 5 Tage — Rote Oase des Gourara",
    "seoDescription": "Private 5-Tage-Reise nach Timimoun, der roten Oase des Gourara: sudanesische Lehmarchitektur, Ksour, Foggaras, Palmenhaine, große Dünen und Camp.",
    "overview": "Timimoun trägt den Beinamen rote Oase zu Recht: Gebaut wird hier in ockerrotem Lehm im sogenannten sudanesischen Stil, und die Stadt überblickt eine Salzsenke und einen riesigen Palmenhain. Ringsum reiht der Gourara Dutzende Ksour aneinander, befestigte Dörfer, verbunden durch Foggaras — von Hand gegrabene Sickerstollen, die das Wasser aus dem Grundwasser holen. Es ist eine Region bewohnter Oasen, nicht leerer Wüste, und darin liegt ihr Reichtum. Die Reise wechselt zwischen Dörfern, Gärten, saharischer Lebensart und Ausfahrten in die Dünen des Großen Westlichen Erg.",
    "highlights": [
      "Timimoun und seine rote Architektur im sudanesischen Stil",
      "Die Ksour des Gourara und ihre überdachten Gassen",
      "Die Foggaras, lebendiges Wasserbau-Erbe",
      "Die großen Dünen des Großen Westlichen Erg",
      "Der Ahellil, von der UNESCO gelistete Gesangsdichtung",
      "Eine Nacht im Zelt im Wüstencamp"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Timimoun",
        "body": "Empfang in Timimoun und Transfer zum Gästehaus Ti Massin, mit Zeit zum Ankommen vor einem traditionellen Abendessen und der Übernachtung.",
        "stops": [
          {
            "place": "Timimoun",
            "text": "Die „rote Oase“ des Gourara — eine gesamte Stadt aus rotocker sudanesischer Lehmarchitektur, hoch über einem Salzsee."
          },
          {
            "place": "Das Gästehaus Ti Massin",
            "text": "Ein traditionelles Lehmhaus mit Innenhöfen und Terrassen — der Ausgangspunkt für den gesamten Aufenthalt."
          },
          {
            "place": "Der Steilhang bei Sonnenuntergang",
            "text": "Der Felsvorsprung über der Sebkha, wo sich Timimouns Mauern im letzten Licht tief orange färben, vor einem traditionellen Abendessen."
          }
        ]
      },
      {
        "day": 2,
        "title": "Charouine — Ksour und Palmenhaine",
        "body": "Ausflug nach Charouine zum Ksar Guentour und seinem Palmenhain, Mittagessen im Freien, dann der Ksar und die Oase von Tala, mit Rückkehr zum Sonnenuntergang über den Dünen und einem festlichen Abend mit Musik.",
        "stops": [
          {
            "place": "Ksar Guentour & sein Palmenhain",
            "text": "Ein Ksar aus rotem Lehm über seinem Palmenhain — klassische Architektur des Gourara."
          },
          {
            "place": "Der Ksar & die Oase von Tala",
            "text": "Eine weitere Oase aus Lehmtürmen inmitten der Palmen."
          },
          {
            "place": "Dünensonnenuntergang & Musikabend",
            "text": "Sand in der Abenddämmerung und ein Abend mit traditioneller Musik des Gourara."
          }
        ]
      },
      {
        "day": 3,
        "title": "Aghlad und Ouled Saïd — die Foggaras",
        "body": "Besuch der Gärten und der alten Foggara-Kanäle von Ouled Saïd, ein Picknick mit Tee im Palmenhain von Beni Aïssi und seinem Ksar, und Sonnenuntergang über den großen Dünen.",
        "stops": [
          {
            "place": "Die Foggaras von Ouled Saïd",
            "text": "Uralte unterirdische Bewässerungsstollen, die Wasser zu den Gärten leiten — saharischer Erfindungsgeist in Vollendung."
          },
          {
            "place": "Beni Aïssi & sein Ksar",
            "text": "Ein Picknick im Palmenhain und Tee neben einem alten Ksar."
          },
          {
            "place": "Die großen Dünen",
            "text": "Sonnenuntergang über dem hohen Sand."
          }
        ]
      },
      {
        "day": 4,
        "title": "Wüstenabenteuer und Abendessen unter Sternen",
        "body": "Am Vormittag die Stätte Ighzer, am Nachmittag eine 4×4-Safari über goldene Dünen zu einem Panorama-Sonnenuntergang, gefolgt von einem „Merdoum“-Abendessen im Wüstencamp unter den Sternen.",
        "stops": [
          {
            "place": "Die Stätte von Ighzer",
            "text": "Eine Wüstenstätte, erkundet in der morgendlichen Kühle."
          },
          {
            "place": "4x4-Dünensafari",
            "text": "Goldene Dünen bis zu einem Panoramasonnenuntergang."
          },
          {
            "place": "Ein Camp-Abendessen „Merdoum“",
            "text": "Ein traditionelles, im Sand gegartes Merdoum-Festmahl unter den Sternen."
          }
        ]
      },
      {
        "day": 5,
        "title": "Markt und Abreise",
        "body": "Besuch des traditionellen Marktes von Timimoun mit Gewürzen und Kunsthandwerk, danach der Rücktransfer Richtung Algier.",
        "stops": [
          {
            "place": "Der Markt von Timimoun",
            "text": "Der Markt der roten Stadt für Gewürze und Kunsthandwerk."
          },
          {
            "place": "Das alte Ksar-Viertel",
            "text": "Ein letzter Spaziergang durch die roten Lehmgassen und die überdachten Arkadengänge der Altstadt."
          },
          {
            "place": "Die Straße nach Norden",
            "text": "Der Rücktransfer nach Algier entlang des nördlichen Randes des Grand Erg Occidental."
          }
        ]
      }
    ],
    "includes": [
      "Flughafentransfers",
      "4 Übernachtungen",
      "Privater lizenzierter Guide",
      "4×4-Transport",
      "Dünenausfahrt und Camp",
      "Frühstück"
    ],
    "excludes": [
      "Flüge",
      "Visumgebühren",
      "Reiseversicherung",
      "Mittag- und Abendessen",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Oktober bis April"
      },
      {
        "label": "Nächte",
        "value": "Im Winter kühl — Schichten mitnehmen"
      },
      {
        "label": "Tempo",
        "value": "Entspannt, kurze Wege"
      },
      {
        "label": "Anreise",
        "value": "Flug ab Algier"
      }
    ],
    "faqs": [
      {
        "q": "Was ist eine Foggara?",
        "a": "Ein von Hand gegrabener unterirdischer Stollen, der Wasser allein durch Gefälle aus dem Grundwasser zu den Gärten führt und es dann nach einer seit Jahrhunderten festgelegten Ordnung unter den Familien aufteilt."
      },
      {
        "q": "Warum ist Timimoun rot?",
        "a": "Gebaut wird aus Lehm — Erde mit Stroh vermischt — in einem charakteristischen ockerroten Ton, im sogenannten sudanesischen Stil, der vom Sahel bis in die Sahara verbreitet ist."
      },
      {
        "q": "Was ist der Ahellil?",
        "a": "Eine kollektive Gesangsdichtung des Gourara, 2008 von der UNESCO in die Liste des immateriellen Kulturerbes der Menschheit aufgenommen."
      },
      {
        "q": "Ist die Reise familientauglich?",
        "a": "Ja. Das Tempo ist ruhig, die Wege sind kurz, und die Gastfreundschaft der Oasen macht die Reise mit Jugendlichen leicht."
      }
    ]
  },
  "algeria-tour": {
    "title": "Algerien komplett — große 10-Tage-Rundreise",
    "duration": "10 Tage · 9 Nächte",
    "hook": "Zehn Tage quer durch Algerien — Algier und die Kasbah, die römische Küste, der Osten mit seinen antiken Städten und die Sahara. Die vollständige Runde.",
    "full": true,
    "seoTitle": "Große Algerien-Rundreise 10 Tage — Norden, Osten, Sahara",
    "seoDescription": "Private 10-Tage-Rundreise durch Algerien: Algier, die römische Küste bei Tipaza, Constantine und der antike Osten, dann die Sahara. Lizenzierter Guide.",
    "overview": "Zehn Tage sind die erste Dauer, mit der sich Norden und Wüste verbinden lassen, ohne beides im Vorbeigehen abzuhaken. Diese große Rundreise beginnt in Algier und seiner Kasbah, folgt der römischen Küste nach Tipaza und Cherchell, führt nach Osten zu den antiken Städten — Djémila, Timgad — und der Brückenstadt Constantine und wendet sich dann nach Süden zur Sahara-Etappe. Es ist das Format, das wir Gästen empfehlen, die von weit her kommen und so bald nicht wiederkehren.",
    "highlights": [
      "Die Kasbah von Algier und die Bucht",
      "Tipaza und Cherchell, die römische Küste",
      "Djémila und Timgad, römische UNESCO-Städte",
      "Constantine, die Brückenstadt über ihren Schluchten",
      "Eine vollständige Sahara-Etappe",
      "Privater lizenzierter Guide vom ersten bis zum letzten Tag"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Algier",
        "body": "Empfang am Flughafen, Check-in im Hotel und ein Willkommensessen.",
        "stops": [
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Empfang in der Ankunftshalle und Fahrt in die Stadt — der organisatorische Teil des ersten Tages ist bereits erledigt."
          },
          {
            "place": "Die Bucht von Algier",
            "text": "Die Fahrt entlang der Küste, während sich die weiße Hauptstadt stufenweise über dem Hafen erhebt."
          },
          {
            "place": "Ein Willkommensessen",
            "text": "Eine erste algerische Tafel — Chorba, Fisch aus der Bucht oder ein Hühnertajine — bei der die kommenden zehn Tage besprochen werden."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza und Cherchell",
        "body": "Ein Küstentag bei den römischen Ruinen von Tipaza — Amphitheater und Mausoleum — mit dem Museum von Cherchell und Blick aufs Meer.",
        "stops": [
          {
            "place": "Das römische Tipaza",
            "text": "Eine zum UNESCO-Welterbe zählende römische Hafenstadt entlang des Mittelmeers — Basiliken, Thermen und ein Theater, dem die Wellen zu Füßen liegen."
          },
          {
            "place": "Das Königliche Mausoleum von Mauretanien",
            "text": "Ein gewaltiger steinerner Rundbau auf einem Hügel über dem Meer — die Grabstätte des Berberkönigs Juba II. und Kleopatra Selenes, der Tochter Kleopatras von Ägypten, aus dem 1. Jahrhundert v. Chr."
          },
          {
            "place": "Cherchell (das antike Caesarea)",
            "text": "Die einstige Hauptstadt Juba II., deren Museum einige der schönsten römischen und griechischen Mosaiken und Statuen Algeriens bewahrt."
          }
        ]
      },
      {
        "day": 3,
        "title": "Historisches Algier",
        "body": "Die Kasbah, das Märtyrerdenkmal und das Nationale Armeemuseum.",
        "stops": [
          {
            "place": "Die Kasbah von Algier",
            "text": "Die zum UNESCO-Welterbe zählende osmanische Zitadelle — ein steiles, weißes Labyrinth aus Palästen, Moscheen und Hofhäusern, das sich über der Bucht erhebt."
          },
          {
            "place": "Das Märtyrerdenkmal (Maqam Echahid)",
            "text": "Drei aufragende Betonpalmwedel, 1982 über der Stadt errichtet, zum Gedenken an die Gefallenen des Unabhängigkeitskrieges."
          },
          {
            "place": "Das Nationale Armeemuseum",
            "text": "Algeriens lange Militärgeschichte von der Antike bis 1962, gleich neben dem Märtyrerdenkmal."
          }
        ]
      },
      {
        "day": 4,
        "title": "Fahrt nach Sétif",
        "body": "Fahrt nach Osten und Besuch der römischen UNESCO-Ruinen von Djémila.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Eine römische UNESCO-Stadt in grünen Bergen, hervorragend erhalten — Forum, Tempel und ein steil angelegtes Theater."
          },
          {
            "place": "Die Mosaiken von Djémila",
            "text": "Mosaiken vor Ort, zu den prächtigsten der römischen Welt zählend, im Museum der Ausgrabungsstätte."
          },
          {
            "place": "Sétif und der Brunnen Ain El Fouara",
            "text": "Die Hochplateau-Stadt auf 1.100 m und ihr berühmter Marmorbrunnen von 1898, wo übernachtet wird."
          }
        ]
      },
      {
        "day": 5,
        "title": "Constantine",
        "body": "Stadtrundgang in Constantine — seine Hängebrücken, die Moschee und der Palast.",
        "stops": [
          {
            "place": "Die Brücken von Constantine",
            "text": "Die „Stadt der Brücken“ überspannt die schwindelerregende Rhumel-Schlucht, hoch über der die Fußgängerbrücke Sidi M'Cid gespannt ist."
          },
          {
            "place": "Die Emir-Abdelkader-Moschee",
            "text": "Eine der größten Moscheen Afrikas, deren Zwillingsminarette ein modernes Wahrzeichen Constantines sind."
          },
          {
            "place": "Der Palast von Ahmed Bey",
            "text": "Der osmanische Palast des letzten Bey aus dem frühen 19. Jahrhundert, mit bemalten Galerien und schattigen Innenhöfen."
          }
        ]
      },
      {
        "day": 6,
        "title": "Batna und Timgad",
        "body": "Fahrt nach Batna und Besuch der römischen UNESCO-Stadt Timgad.",
        "stops": [
          {
            "place": "Timgad",
            "text": "Trajans schachbrettartig angelegte Kolonie aus dem Jahr 100 n. Chr. — das „Pompeji des Aurès“, ausgebreitet über die offene Ebene."
          },
          {
            "place": "Der Trajansbogen",
            "text": "Der Triumphbogen, der Timgads Hauptstraße einrahmt — die unverwechselbare Silhouette der Stadt."
          },
          {
            "place": "Die Bibliothek & das Theater von Timgad",
            "text": "Die Ruinen einer seltenen römischen öffentlichen Bibliothek und eines Theaters mit 3.500 Plätzen, das bis heute genutzt wird."
          }
        ]
      },
      {
        "day": 7,
        "title": "Fahrt nach Ghardaïa",
        "body": "Fahrt nach Süden ins M'Zab-Tal und Bezug eines Gästehauses.",
        "stops": [
          {
            "place": "Die Straße südwärts über den Atlas",
            "text": "Aus dem Tell hinaus, über die Hochsteppe und hinab in die Vorsahara — die Fahrt, auf der Algerien das Klima wechselt."
          },
          {
            "place": "Ghardaïa",
            "text": "Die Hauptstadt des M'Zab, eine zum UNESCO-Welterbe zählende Häuserpyramide, die bis zur Moschee und dem Minarett auf ihrer Spitze aufsteigt."
          },
          {
            "place": "Ein traditionelles Gästehaus im M'Zab",
            "text": "Check-in in einem restaurierten mosabitischen Haus — dicke Mauern, ein Innenhof und eine Dachterrasse — mit einem freien Abend."
          }
        ]
      },
      {
        "day": 8,
        "title": "Kulturtag in Ghardaïa",
        "body": "Die befestigten Dörfer, traditionellen Moscheen, Souks und die lokale Küche des M'Zab.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "Die heilige ummauerte Stadt des M'Zab, betreten durch ihr altes Tor, wo Kleidung und Fotografieren den örtlichen Sitten folgen."
          },
          {
            "place": "El Atteuf",
            "text": "Die älteste der fünf Städte des M'Zab, deren schlichte Sidi-Brahim-Moschee Le Corbusier so beeindruckte, dass sie die moderne Architektur mitprägte."
          },
          {
            "place": "Der Markt von Ghardaïa",
            "text": "Der terrassierte Arkadenplatz unterhalb des pyramidenförmigen Minaretts — seit tausend Jahren das pulsierende Herz des M'Zab."
          }
        ]
      },
      {
        "day": 9,
        "title": "Rückkehr nach Algier",
        "body": "Rückfahrt in die Hauptstadt, mit dem Botanischen Garten von Hamma, dem Bardo-Museum und Notre-Dame d'Afrique.",
        "stops": [
          {
            "place": "Der Botanische Garten von Hamma",
            "text": "Der prachtvolle Jardin d'Essai aus dem 19. Jahrhundert, einer der schönsten botanischen Gärten Afrikas."
          },
          {
            "place": "Das Bardo-Museum",
            "text": "Vor- und Frühgeschichte sowie Völkerkunde in einer eleganten maurischen Villa, von Abgüssen saharischer Felskunst bis zu Silberschmuck und dem Alltag Algeriens."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Eine Basilika aus dem 19. Jahrhundert — „Unsere Liebe Frau von Afrika“ — auf den Klippen über der Bucht, deren Inschrift Muslimen wie Christen gleichermaßen gilt."
          }
        ]
      },
      {
        "day": 10,
        "title": "Abreise",
        "body": "Frühstück und Transfer zum Flughafen.",
        "stops": [
          {
            "place": "Ein freier Vormittag in Algier",
            "text": "Was auch immer die zehn Tage ausgelassen haben — der Jardin d'Essai, die Ketchaoua-Moschee oder einfach die Uferpromenade — je nach Ihrer Flugzeit."
          },
          {
            "place": "Letzte Einkäufe",
            "text": "Kabylischer Silberschmuck, Tuareg-Leder, Deglet-Nour-Datteln und Gebäck, in der Rue Didouche Mourad oder in den Werkstätten der Kasbah."
          },
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Der private Transfer und Unterstützung beim Check-in."
          }
        ]
      }
    ],
    "includes": [
      "Alle Transfers",
      "9 Übernachtungen",
      "Privater lizenzierter Guide",
      "Privater Transport",
      "Eintritte",
      "Frühstück"
    ],
    "excludes": [
      "Internationale und inländische Flüge",
      "Visumgebühren",
      "Reiseversicherung",
      "Mittag- und Abendessen",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Oktober bis April"
      },
      {
        "label": "Tempo",
        "value": "Intensiv, aber realistisch"
      },
      {
        "label": "Distanzen",
        "value": "Groß — ein Inlandsflug ist eingeplant"
      },
      {
        "label": "Start",
        "value": "Algier"
      }
    ],
    "faqs": [
      {
        "q": "Reichen zehn Tage für Algerien?",
        "a": "Für das Wesentliche ja. Es ist die erste Dauer, die Norden und einen echten Sahara-Abschnitt verbindet, ohne die Tage auf der Straße zu verbringen."
      },
      {
        "q": "Wird viel gefahren?",
        "a": "Algerien ist das größte Land Afrikas, und die Distanzen sind real. Das Programm enthält einen Inlandsflug, um die längsten Strecken zu vermeiden."
      },
      {
        "q": "Ist die Reise privat?",
        "a": "Ja, vollständig: Ihr Guide, Ihr Fahrzeug, Ihr Tempo. Nichts wird mit anderen Gruppen geteilt."
      },
      {
        "q": "Kann man zu zweit reisen?",
        "a": "Ja. Die meisten unserer Abreisen finden als Paar oder in kleiner Familiengruppe statt."
      }
    ]
  },
  "algeria-through-time-and-tradition": {
    "title": "Römisches Algerien — Tipaza, Djémila und Timgad (3 Tage)",
    "duration": "3 Tage · 2 Nächte",
    "hook": "Drei Tage durch das schönste römische Erbe Algeriens — die Ruinen am Meer bei Tipaza und Cherchell, Djémila in den Hügeln und das Schachbrett von Timgad.",
    "full": true,
    "seoTitle": "Römisches Algerien 3 Tage — Tipaza, Djémila, Timgad",
    "seoDescription": "Private 3-Tage-Reise zu den römischen Städten Algeriens: Tipaza und Cherchell am Meer, Djémila in den Hügeln und Timgad.",
    "overview": "Algerien bewahrt die besterhaltenen römischen Städte des Mittelmeerraums — gerade weil der Massentourismus nie kam. In drei Tagen verbindet diese Reise die drei schönsten: Tipaza, direkt am Ufer, mit dem Königlichen Mausoleum von Mauretanien darüber; Djémila, in einem Hügelkessel im Osten, dessen Forum und Mosaike außergewöhnlich erhalten sind; und Timgad, um 100 n. Chr. von Trajan gegründet, die vollständigste erhaltene Schachbrettstadt, mit Bogen, Theater und Bibliothek.",
    "highlights": [
      "Tipaza, römische Stadt am Mittelmeer",
      "Das Königliche Mausoleum von Mauretanien",
      "Das archäologische Museum von Cherchell",
      "Djémila und sein Forum in den Hügeln",
      "Timgad, der Trajansbogen und die Bibliothek",
      "Oft menschenleere Stätten, selbst in der Hauptsaison"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tipaza und Cherchell",
        "body": "Von Algier an die Westküste: die Ruinen von Tipaza am Meer, das Königliche Mausoleum und das Museum von Cherchell.",
        "stops": [
          {
            "place": "Das römische Tipaza",
            "text": "Eine zum UNESCO-Welterbe zählende römische Hafenstadt entlang des Mittelmeers — Basiliken, Thermen und ein Theater, dem die Wellen zu Füßen liegen."
          },
          {
            "place": "Cherchell (das antike Caesarea)",
            "text": "Die einstige Hauptstadt Juba II., deren Museum einige der schönsten römischen und griechischen Mosaiken und Statuen Algeriens bewahrt."
          },
          {
            "place": "Das Königliche Mausoleum von Mauretanien",
            "text": "Ein gewaltiger steinerner Rundbau auf einem Hügel über dem Meer — die Grabstätte des Berberkönigs Juba II. und Kleopatra Selenes, der Tochter Kleopatras von Ägypten, aus dem 1. Jahrhundert v. Chr."
          }
        ]
      },
      {
        "day": 2,
        "title": "Djémila",
        "body": "Fahrt nach Osten und ein Tag in Djémila: Forum, Tempel, Wohnhäuser und die Mosaike des Museums.",
        "stops": [
          {
            "place": "Die Säulenstraßen von Djémila",
            "text": "Monumentale Tore und gepflasterte Alleen der römischen Stadt in ihrem Bergkessel."
          },
          {
            "place": "Das Theater von Djémila",
            "text": "Ein steil in den Hang gebautes Theater, das noch immer das Tal beherrscht."
          },
          {
            "place": "Die Mosaiken von Djémila",
            "text": "Mosaiken vor Ort, zu den prächtigsten der römischen Welt zählend, im Museum der Ausgrabungsstätte."
          }
        ]
      },
      {
        "day": 3,
        "title": "Timgad",
        "body": "Timgad und sein unversehrtes Schachbrett: Trajansbogen, Theater, Thermen und Bibliothek, vor der Rückkehr.",
        "stops": [
          {
            "place": "Der Trajansbogen",
            "text": "Der Triumphbogen, der Timgads Hauptstraße einrahmt — die unverwechselbare Silhouette der Stadt."
          },
          {
            "place": "Die Bibliothek & das Theater von Timgad",
            "text": "Die Ruinen einer seltenen römischen öffentlichen Bibliothek und eines Theaters mit 3.500 Plätzen, das bis heute genutzt wird."
          },
          {
            "place": "Timgads Straßenraster, Thermen & Tempel",
            "text": "Der lehrbuchhafte römische Stadtplan, der Timgad seinen Ruhm verleiht."
          }
        ]
      }
    ],
    "includes": [
      "Transfers",
      "2 Übernachtungen",
      "Privater lizenzierter Guide",
      "Privater Transport",
      "Eintritte",
      "Frühstück"
    ],
    "excludes": [
      "Flüge",
      "Visumgebühren",
      "Reiseversicherung",
      "Mittag- und Abendessen",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "März–Juni, September–November"
      },
      {
        "label": "Gehen",
        "value": "Weitläufige Stätten — festes Schuhwerk"
      },
      {
        "label": "Schatten",
        "value": "Kaum — Hut und Wasser nötig"
      },
      {
        "label": "Start",
        "value": "Algier"
      }
    ],
    "faqs": [
      {
        "q": "Welche der drei beeindruckt am meisten?",
        "a": "Timgad wegen der Vollständigkeit des Stadtgrundrisses, Djémila wegen der Lage und der Mosaike, Tipaza wegen des Meeres. Zusammen zeigen sie, was das römische Afrika war."
      },
      {
        "q": "Sind viele Besucher dort?",
        "a": "Sehr wenige. Es ist normal, Timgad oder Djémila zu durchstreifen und dabei nur einer Handvoll Menschen zu begegnen — anderswo im Mittelmeerraum kaum noch möglich."
      },
      {
        "q": "Sind die Stätten erschlossen?",
        "a": "Nur knapp. Es gibt Museen vor Ort und Wärter, aber wenig Beschilderung: ein Guide verändert den Besuch grundlegend."
      },
      {
        "q": "Schafft man alle drei in drei Tagen?",
        "a": "Ja, aber die Distanzen sind real. Das Programm ist dicht und setzt frühe Aufbrüche voraus."
      }
    ]
  },
  "oran-mostaganem-tlemcen": {
    "title": "Der algerische Westen: Oran, Mostaganem und Tlemcen — 5 Tage",
    "duration": "5 Tage · 4 Nächte",
    "hook": "Fünf Tage im algerischen Westen — der Hafen von Oran, die Strände von Mostaganem und das andalusische Erbe von Tlemcen: Moschee, Palast und Wasserfälle.",
    "full": true,
    "seoTitle": "Algerischer Westen 5 Tage — Oran und Tlemcen",
    "seoDescription": "Private 5-Tage-Reise durch den Westen Algeriens: Oran und Santa Cruz, die Strände von Mostaganem und das andalusische Erbe von Tlemcen.",
    "overview": "Der algerische Westen ist der andalusische Teil des Landes. Oran, zweitgrößte Stadt und großer Hafen, mischt spanische und französische Architektur unter dem Fort Santa Cruz und schenkte der Welt den Raï. Mostaganem reiht Strände und ein altes osmanisches Viertel über dem Meer aneinander. Und Tlemcen, kulturelle Hauptstadt des andalusischen Algerien, bewahrt die Große Moschee, das Minarett von Mansourah, den El-Mechouar-Palast, das Heiligtum von Sidi Boumediene und eine bis heute lebendige Gharnati-Musiktradition.",
    "highlights": [
      "Oran, Santa Cruz und die Bucht",
      "Der Platz des 1. November und die Altstadt",
      "Die Strände und das alte Tigditt von Mostaganem",
      "Die Große Moschee von Tlemcen",
      "Mansourah, El Mechouar und Sidi Boumediene",
      "Die Wasserfälle von El Ourit und die Gharnati-Musik"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Oran",
        "body": "Empfang und Unterkunft, erster Eindruck von Uferpromenade und Zentrum.",
        "stops": [
          {
            "place": "Fort Santa Cruz",
            "text": "Eine spanische Festung aus dem 16. Jahrhundert auf dem Berg Murdjadjo, mit dem schönsten Ausblick über Oran und das Meer."
          },
          {
            "place": "Place du 1er Novembre",
            "text": "Orans großer zentraler Platz, umgeben von kolonialen Fassaden und dem Opernhaus."
          },
          {
            "place": "Sidi El Houari",
            "text": "Orans ältestes Viertel, mit osmanischen und spanischen Überresten rund um den alten Hafen."
          }
        ]
      },
      {
        "day": 2,
        "title": "Oran",
        "body": "Das Fort Santa Cruz, die Altstadt, der Hafen und die spanische und französische Stadt.",
        "stops": [
          {
            "place": "Nationalmuseum Ahmed Zabana",
            "text": "Orans wichtigstes Museum — Naturkunde, bildende Kunst und die tiefe Vergangenheit der Region."
          },
          {
            "place": "Sacré-Cœur",
            "text": "Eine markante ehemalige Kathedrale, heute eine öffentliche Bibliothek und Ankerpunkt der modernen Stadt."
          },
          {
            "place": "Die Uferpromenade",
            "text": "Orans Mittelmeerpromenade und abendlicher Treffpunkt der Stadt."
          }
        ]
      },
      {
        "day": 3,
        "title": "Mostaganem",
        "body": "Ostwärts an der Küste: Strände, das alte Viertel Tigditt und Bordj Ettork.",
        "stops": [
          {
            "place": "Die Strände von Mostaganem",
            "text": "Lange Mittelmeerstrände an der Küste des Dahra — ein entspannter Tempowechsel am Meer."
          },
          {
            "place": "Bordj el Mehal / die alte Festung",
            "text": "Eine Festung aus osmanischer Zeit über der Stadt, ein Zeugnis von Mostaganems strategischer Vergangenheit."
          },
          {
            "place": "Das Viertel Tigditt",
            "text": "Das historische Viertel mit steilen Gassen über dem Fluss."
          }
        ]
      },
      {
        "day": 4,
        "title": "Tlemcen",
        "body": "Andalusischer Tag: Große Moschee, Mansourah, El Mechouar und Sidi Boumediene.",
        "stops": [
          {
            "place": "Die Große Moschee von Tlemcen",
            "text": "Ein almoravidisches Meisterwerk des 12. Jahrhunderts, dessen geschnitzter Mihrab zu den schönsten des Maghreb zählt."
          },
          {
            "place": "Palast El Mechouar",
            "text": "Der restaurierte Zitadellenpalast der zianidischen Sultane, die Tlemcen zu einer Hauptstadt machten."
          },
          {
            "place": "Das Plateau Lalla Setti",
            "text": "Ein grünes Plateau über der Stadt mit Panoramablicken, Gärten und einer Seilbahnfahrt hinauf."
          }
        ]
      },
      {
        "day": 5,
        "title": "El Ourit und Abreise",
        "body": "Die Wasserfälle von El Ourit und das Plateau Lalla Setti vor dem Transfer.",
        "stops": [
          {
            "place": "Plateau Lalla Setti",
            "text": "Die hoch gelegene Terrasse des Nationalparks Tlemcen über der Stadt, mit der gesamten Medina und ihrer Ebene ausgebreitet darunter."
          },
          {
            "place": "Die Wasserfälle von El Ourit",
            "text": "Kaskaden, die über bewaldete Klippen im Nationalpark Tlemcen östlich der Stadt herabstürzen."
          },
          {
            "place": "Mansourah",
            "text": "Das große, verfallene Minarett einer Belagerungsstadt aus dem 14. Jahrhundert am Rand von Tlemcen."
          }
        ]
      }
    ],
    "includes": [
      "Transfers",
      "4 Übernachtungen",
      "Privater lizenzierter Guide",
      "Privater Transport",
      "Eintritte",
      "Frühstück"
    ],
    "excludes": [
      "Flüge",
      "Visumgebühren",
      "Reiseversicherung",
      "Mittag- und Abendessen",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "April–Juni, September–November"
      },
      {
        "label": "Tempo",
        "value": "Moderat"
      },
      {
        "label": "Start",
        "value": "Oran — Flughafen Ahmed Ben Bella"
      },
      {
        "label": "Musik",
        "value": "Raï in Oran, Gharnati in Tlemcen"
      }
    ],
    "faqs": [
      {
        "q": "Warum Tlemcen besuchen?",
        "a": "Es ist das Herz des andalusischen Erbes in Algerien: Moscheen, Paläste und Heiligtümer vom 12. bis 14. Jahrhundert, in einer Stadt, die ihre Musik und ihr Handwerk bewahrt hat."
      },
      {
        "q": "Lässt sich die Reise mit Algier verbinden?",
        "a": "Ja. Oran ist per Flug, Bahn und Autobahn mit Algier verbunden — wir passen das Programm Ihrem Ankunftsort an."
      },
      {
        "q": "Ist das eine Badedestination?",
        "a": "Die Küste ist schön und die Strände von Mostaganem sind real, aber diese Reise bleibt vor allem kulturell."
      },
      {
        "q": "Was ist Gharnati?",
        "a": "Eine arabo-andalusische Musikschule, aus Granada überliefert, deren wichtigster Ort in Algerien Tlemcen ist."
      }
    ]
  },
  "the-beauty-of-algeria": {
    "title": "Constantine und Timgad — 2 Tage",
    "duration": "2 Tage · 1 Nacht",
    "hook": "Zwei Tage im algerischen Osten — die Brückenstadt über den Rhumel-Schluchten und die römische Stadt Timgad.",
    "full": true,
    "seoTitle": "Constantine und Timgad — 2 Tage im Osten Algeriens",
    "seoDescription": "Private 2-Tage-Reise in den Osten Algeriens: Constantine und die Rhumel-Schluchten, dann die römische UNESCO-Stadt Timgad.",
    "overview": "Zwei Tage für das Wesentliche des algerischen Ostens. Constantine ist eine unmögliche Stadt: auf einem Felsen erbaut, den die Rhumel-Schluchten spalten, wieder zusammengenäht von einer Reihe spektakulärer Brücken, mit einer Geschichte, die bis Cirta zurückreicht, der numidischen Hauptstadt. Anderthalb Stunden entfernt entfaltet Timgad in der Ebene das vollständigste erhaltene römische Schachbrett. Der Kontrast zwischen der senkrechten und der geometrischen Stadt macht den Reiz dieses kurzen Formats aus.",
    "highlights": [
      "Die Rhumel-Schluchten und die Brücken von Constantine",
      "Der Ahmed-Bey-Palast",
      "Das Cirta-Museum",
      "Timgad, der Trajansbogen und das Theater",
      "Die Malouf-Musik von Constantine",
      "Ein kurzes Format, ideal als Ergänzung"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Constantine",
        "body": "Die Brückenstadt: die Sidi-M'Cid-Brücke, die Schluchten, der Ahmed-Bey-Palast, das Cirta-Museum und die Altstadt.",
        "stops": [
          {
            "place": "Die Brücken von Constantine",
            "text": "Die „Stadt der Brücken“ überspannt die schwindelerregende Rhumel-Schlucht, hoch über der die Fußgängerbrücke Sidi M'Cid gespannt ist."
          },
          {
            "place": "Der Palast von Ahmed Bey",
            "text": "Der osmanische Palast des letzten Bey aus dem frühen 19. Jahrhundert, mit bemalten Galerien und schattigen Innenhöfen."
          },
          {
            "place": "Das Nationalmuseum Cirta",
            "text": "Antiken des antiken Cirta — Mosaiken, Bronzen und numidische Relikte."
          }
        ]
      },
      {
        "day": 2,
        "title": "Timgad",
        "body": "Fahrt nach Süden und ein Tag in Timgad: der vollständige römische Grundriss, der Trajansbogen, das Theater und das Mosaikmuseum.",
        "stops": [
          {
            "place": "Der Trajansbogen",
            "text": "Der Triumphbogen, der Timgads Hauptstraße einrahmt — die unverwechselbare Silhouette der Stadt."
          },
          {
            "place": "Die Bibliothek & das Theater von Timgad",
            "text": "Die Ruinen einer seltenen römischen öffentlichen Bibliothek und eines Theaters mit 3.500 Plätzen, das bis heute genutzt wird."
          },
          {
            "place": "Das Forum & die Tempel von Timgad",
            "text": "Das schachbrettartig angelegte Herz von Trajans Kolonie, mit seinen Thermen und Tempeln."
          }
        ]
      }
    ],
    "includes": [
      "Transfers",
      "1 Übernachtung",
      "Privater lizenzierter Guide",
      "Privater Transport",
      "Eintritte",
      "Frühstück"
    ],
    "excludes": [
      "Flüge",
      "Visumgebühren",
      "Reiseversicherung",
      "Mittag- und Abendessen",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "April–Juni, September–November"
      },
      {
        "label": "Tempo",
        "value": "Dicht auf zwei Tage"
      },
      {
        "label": "Start",
        "value": "Constantine — Flughafen Mohamed Boudiaf"
      },
      {
        "label": "Kombinierbar mit",
        "value": "Djémila und Sétif"
      }
    ],
    "faqs": [
      {
        "q": "Warum ist Constantine berühmt?",
        "a": "Wegen seiner Lage: eine Stadt auf einem Felssporn, den ein 200 Meter tiefer Canyon spaltet, überspannt von Brücken, die ihr Wahrzeichen sind."
      },
      {
        "q": "Lohnt sich Timgad?",
        "a": "Es ist die vollständigste erhaltene römische Schachbrettstadt, oft das Pompeji Afrikas genannt, und fast immer menschenleer."
      },
      {
        "q": "Wie erreicht man Constantine?",
        "a": "Per Flug ab Algier, mit der Bahn oder über die Ost-West-Autobahn."
      },
      {
        "q": "Reichen zwei Tage?",
        "a": "Für diese beiden Orte ja. Wer Djémila ergänzen möchte, braucht einen Tag mehr."
      }
    ]
  },
  "algeria-eastern-sahara-discovery": {
    "title": "Ostalgerien und Sahara — 6 Tage",
    "duration": "6 Tage · 5 Nächte",
    "hook": "Sechs Tage durch den Osten des Landes — die Brücken von Constantine, die römischen Städte Djémila und Timgad, ein Sahara-Tor bei Bou Saada und ein Tag in Béjaïa.",
    "full": true,
    "seoTitle": "Ostalgerien und Sahara 6 Tage — Constantine, Timgad",
    "seoDescription": "Private 6-Tage-Rundreise durch den Osten Algeriens: Constantine, die römischen Städte Djémila und Timgad, Bou Saada am Tor zur Sahara und die Küste von Béjaïa.",
    "overview": "Eine große Schleife durch den algerischen Osten, wo römische Städte, dramatische Schluchten, Wüstentore und das Mittelmeer nur je eine Tagesfahrt auseinanderliegen. Sie erleben Constantine, die schwindelerregende Brückenstadt; die römischen UNESCO-Städte Djémila und Timgad; den Oasenrand um Bou Saada und Biskra; und zum Abschluss einen Küstentag in Béjaïa. Es ist die reichste Einzelroute durch den Nordosten des Landes.",
    "highlights": [
      "Die Hängebrücken von Constantine",
      "Die römischen Ruinen von Djémila und Timgad (UNESCO)",
      "Oasen- und Wüstenlandschaften um Bou Saada",
      "Die Mittelmeerküste bei Béjaïa",
      "Algier, die historische Hauptstadt"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Von Algier nach Constantine",
        "body": "Ankunft in Algier und Transfer nach Constantine: die Hängebrücken über der Rhumel-Schlucht, die Emir-Abdelkader-Moschee und die Altstadt Souika. Übernachtung in Constantine.",
        "stops": [
          {
            "place": "Die Brücken von Constantine",
            "text": "Die „Stadt der Brücken“ überspannt die schwindelerregende Rhumel-Schlucht, hoch über der die Fußgängerbrücke Sidi M'Cid gespannt ist."
          },
          {
            "place": "Die Emir-Abdelkader-Moschee",
            "text": "Eine der größten Moscheen Afrikas, deren Zwillingsminarette ein modernes Wahrzeichen Constantines sind."
          },
          {
            "place": "Die Altstadt Souika",
            "text": "Die engen Gassen von Constantines alter Medina, die sich an den Felsen schmiegt."
          }
        ]
      },
      {
        "day": 2,
        "title": "Von Constantine nach Sétif",
        "body": "Fahrt nach Sétif und zu den römischen UNESCO-Ruinen von Djémila mit Forum, Tempeln und Mosaiken, danach das Stadtzentrum von Sétif mit dem Brunnen Aïn El Fouara. Übernachtung in Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Eine römische UNESCO-Stadt in grünen Bergen, hervorragend erhalten — Forum, Tempel und ein steil angelegtes Theater."
          },
          {
            "place": "Die Mosaiken von Djémila",
            "text": "Mosaiken vor Ort, zu den prächtigsten der römischen Welt zählend, im Museum der Ausgrabungsstätte."
          },
          {
            "place": "Aïn El Fouara, Sétif",
            "text": "Der beliebte Brunnen von 1898 im Herzen der Stadt, Sétifs bleibendes Wahrzeichen."
          }
        ]
      },
      {
        "day": 3,
        "title": "Von Sétif nach Batna",
        "body": "Weiter nach Batna und in die römische UNESCO-Stadt Timgad: der Trajansbogen, die Bibliothek und das Theater, mit Zeit für das örtliche Erbe. Übernachtung in Batna.",
        "stops": [
          {
            "place": "Timgad",
            "text": "Trajans schachbrettartig angelegte Kolonie aus dem Jahr 100 n. Chr. — das „Pompeji des Aurès“, ausgebreitet über die offene Ebene."
          },
          {
            "place": "Der Trajansbogen",
            "text": "Der Triumphbogen, der Timgads Hauptstraße einrahmt — die unverwechselbare Silhouette der Stadt."
          },
          {
            "place": "Die Bibliothek & das Theater von Timgad",
            "text": "Die Ruinen einer seltenen römischen öffentlichen Bibliothek und eines Theaters mit 3.500 Plätzen, das bis heute genutzt wird."
          }
        ]
      },
      {
        "day": 4,
        "title": "Von Batna über Biskra nach Bou Saada",
        "body": "Über Biskra, das Tor zur Sahara, mit seinen Palmenhainen und Oasenlandschaften, dann weiter nach Bou Saada und auf seine traditionellen Märkte. Übernachtung in Bou Saada.",
        "stops": [
          {
            "place": "Die Palmenhaine von Biskra",
            "text": "Die „Königin des Ziban“ — eine große Dattelpalmenoase, die den eigentlichen Beginn der Sahara markiert."
          },
          {
            "place": "Bou Saada",
            "text": "Die „Stadt des Glücks“, ein Oasenstädtchen, das Maler seit jeher liebten."
          },
          {
            "place": "Die Souks von Bou Saada",
            "text": "Traditionelle Märkte für Silber, Wolle und Datteln."
          }
        ]
      },
      {
        "day": 5,
        "title": "Von Bou Saada nach Algier",
        "body": "Besuch der Zawiya von El Hamel über der Stadt und des umliegenden Erbes, dann Transfer nach Algier und ein freier Abend. Übernachtung in Algier.",
        "stops": [
          {
            "place": "Die Zawiya von El Hamel",
            "text": "Ein auf einem Hügel gelegenes Rahmaniyya-Sufi-Heiligtum und eine Koranschule über Bou Saada — ruhig, schlicht und mit weitem Ausblick."
          },
          {
            "place": "Bou Saada und die Ausläufer des Ouled Naïl",
            "text": "Die „Stadt des Glücks“ — eine Palmenoase am Fuß kahler ockerfarbener Hügel und seit dem 19. Jahrhundert ein Städtchen der Maler."
          },
          {
            "place": "Die Straße nordwärts nach Algier",
            "text": "Hinauf aus der Steppe über die Hodna-Ebene und den Tell-Atlas, mit Ankunft in der Hauptstadt für einen freien Abend."
          }
        ]
      },
      {
        "day": 6,
        "title": "Béjaïa und Abreise",
        "body": "Tagesausflug nach Béjaïa: das Fort Gouraya, das Cap Carbon und die Küstenblicke, danach Transfer zum Flughafen.",
        "stops": [
          {
            "place": "Fort Gouraya, Béjaïa",
            "text": "Eine Festung hoch über Béjaïa mit weiten Ausblicken auf die kabylische Küste."
          },
          {
            "place": "Cap Carbon",
            "text": "Ein eindrucksvolles Kap mit Leuchtturm an einer der schönsten Küsten des Mittelmeers."
          },
          {
            "place": "Die Corniche von Béjaïa",
            "text": "Die Klippenstraße zwischen Gouraya und Cap Carbon, über den Buchten, die diesen Küstenabschnitt der Kabylei berühmt gemacht haben."
          }
        ]
      }
    ],
    "includes": [
      "Empfang am Flughafen und alle Transfers",
      "Klimatisiertes Fahrzeug",
      "5 Übernachtungen im Hotel",
      "Tägliches Frühstück",
      "Lizenzierter Guide",
      "Alle Eintritte",
      "Tagesausflug nach Béjaïa"
    ],
    "excludes": [
      "Internationale Flüge",
      "Mittag- und Abendessen",
      "Persönliche Ausgaben",
      "Reiseversicherung",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Frühjahr und Herbst"
      },
      {
        "label": "Tempo",
        "value": "Moderat bis aktiv — tägliche Etappen"
      },
      {
        "label": "Stil",
        "value": "Privat, geführt, 5 Nächte mit Frühstück"
      },
      {
        "label": "Mitbringen",
        "value": "Sonnenschutz, festes Schuhwerk, Hut"
      }
    ],
    "faqs": [
      {
        "q": "Welche UNESCO-Stätten sind enthalten?",
        "a": "Die römischen Städte Djémila und Timgad."
      },
      {
        "q": "Wird viel gefahren?",
        "a": "Ja — es ist eine Rundroute durch den Osten, mit landschaftlich schönen Etappen an jedem Tag."
      },
      {
        "q": "Führt der Wüstenteil in die tiefe Sahara?",
        "a": "Nein — Sie erreichen das Saharator um Bou Saada und Biskra, nicht die Camps der tiefen Wüste."
      },
      {
        "q": "Ist das Frühstück enthalten?",
        "a": "Ja — tägliches Frühstück, dazu der Ausflug nach Béjaïa und alle Eintritte."
      }
    ]
  },
  "djanet-ghardaia-desert-2-days": {
    "title": "Djanet und Ghardaïa — 6 Tage Wüste und Kulturerbe",
    "duration": "6 Tage · 5 Nächte",
    "hook": "Sechs Tage, die beide Gesichter der algerischen Sahara verbinden: die UNESCO-Städte des M'Zab und die große Wüste rund um Djanet.",
    "full": true,
    "seoTitle": "Djanet und Ghardaïa 6 Tage — Sahara und M'Zab",
    "seoDescription": "Private 6-Tage-Reise durch zwei Saharawelten: der Tadrart Rouge und die Felskunst des Tassili bei Djanet, dann die UNESCO-Städte des M'Zab-Tals bei Ghardaïa.",
    "overview": "Die definitive Sahara-Reise Algeriens, die die beiden großen Wüstenwelten des Landes verbindet. Rund um Djanet erkunden Sie den skulptierten roten Fels des Tadrart und die prähistorischen Galerien des Tassili n'Ajjer und verbringen die Nächte im Wüstencamp mit einem Tuareg-Team. Dann geht es nordwärts nach Ghardaïa und ins UNESCO-gelistete M'Zab-Tal, dessen befestigte Oasenstädte ihr mittelalterliches Leben unversehrt bewahrt haben. Zwei UNESCO-Saharas auf einer Reise, im 4×4 und unter den Sternen.",
    "highlights": [
      "Der Tadrart Rouge und seine Felsformationen",
      "Prähistorische Felskunst im Tassili n'Ajjer (UNESCO)",
      "Nächte im Camp in der Sahara",
      "Tuareg-Kultur und eine Teezeremonie",
      "Die UNESCO-Städte des M'Zab-Tals",
      "4×4-Fahrten und Sonnenuntergänge über den Dünen"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Djanet",
        "body": "Empfang am Flughafen von Djanet und Transfer zum Gästehaus oder Camp, dann eine erste Ausfahrt zum Sonnenuntergang in den nahen Dünen und ein traditionelles saharisches Abendessen.",
        "stops": [
          {
            "place": "Flughafen Tiska, Djanet",
            "text": "Empfang am südlichsten Flughafen Algeriens und Fahrt durch die Palmenhaine — 30 km vom Rollfeld bis zur Oase."
          },
          {
            "place": "Djanet & Dünen bei Sonnenuntergang",
            "text": "Ein Tuareg-Oasenstädtchen unter roten Felsen, mit einem ersten Sonnenuntergangsausflug zu nahen Dünen."
          },
          {
            "place": "Ein saharisches Willkommensessen",
            "text": "Im Sand gebackene Taguella mit einem Tajine und Tuareg-Tee, serviert im Camp oder Gästehaus in Ihrer ersten Nacht im Süden."
          }
        ]
      },
      {
        "day": 2,
        "title": "Der Tadrart Rouge",
        "body": "Ein 4×4-Tag im Tadrart zwischen Felsformationen und jahrtausendealten Gravuren, mit Picknick in der Wüste, Sonnenuntergang über den roten Dünen und einer Nacht im Camp unter Sternen.",
        "stops": [
          {
            "place": "Der Tadrart Rouge",
            "text": "Vom Wind geschliffene orangefarbene Sandsteincanyons und Felsbögen — eine der eindrucksvollsten Landschaften der Sahara."
          },
          {
            "place": "Prähistorische Felskunst",
            "text": "Malereien und Gravuren von Hirten, Jägern und Wildtieren aus der grünen Sahara, bis zu 10.000 Jahre alt — älter als die Pyramiden."
          },
          {
            "place": "Rote Dünen & Sternenlager",
            "text": "Ein Picknick in der Wüste, Sonnenuntergang über den roten Dünen und eine Nacht im Camp unter den Sternen."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tassili n'Ajjer",
        "body": "Das Tassili-Plateau und seine Felsmalereien: Wanderungen durch Schluchten und Sandsteinlandschaften, dann Abendessen und Nacht im Camp.",
        "stops": [
          {
            "place": "Das Plateau Tassili n'Ajjer",
            "text": "Ein gewaltiger „Wald aus Fels“ aus Sandstein, von der UNESCO gelistet für eine der größten Konzentrationen prähistorischer Kunst weltweit."
          },
          {
            "place": "Die Höhlenmalereien des Tassili",
            "text": "Tausende Malereien von Hirten und Wildtieren aus einer feuchteren Sahara, erreichbar zu Fuß durch Canyons."
          },
          {
            "place": "Sandsteincanyons & -türme",
            "text": "Erodierte Felstürme und Schluchten, die sich wie ein anderer Planet anfühlen."
          }
        ]
      },
      {
        "day": 4,
        "title": "Oasen und Wüstenkultur",
        "body": "Besuch einer Oase und ihrer Palmenhaine, Begegnung mit einer Tuareg-Gemeinschaft bei einer Teezeremonie, dann Rückkehr nach Djanet zur Übernachtung.",
        "stops": [
          {
            "place": "Eine Oase & Palmenhaine",
            "text": "Schattige Gärten und Bewässerungskanäle in der Wüste."
          },
          {
            "place": "Tuareg-Teezeremonie",
            "text": "Die traditionellen drei Gläser Saharatee bei einer Tuareg-Familie — gelebte Kultur des tiefen Südens."
          },
          {
            "place": "Djanets alte Ksour",
            "text": "Die drei terrassierten Lehmziegeldörfer — Azellouaz, El Mihan und Adjahil —, um die herum die moderne Oase gewachsen ist."
          }
        ]
      },
      {
        "day": 5,
        "title": "Transfer nach Ghardaïa",
        "body": "Reise nach Ghardaïa ins M'Zab-Tal, Bezug eines traditionellen Gästehauses und ein Abendspaziergang durch die Altstadt.",
        "stops": [
          {
            "place": "Die Fahrt nordwärts ins M'Zab",
            "text": "Der lange Transfer aus dem tiefen Süden, rund 1.000 km, vom Tassili bis an den Rand der nördlichen Sahara."
          },
          {
            "place": "Ein traditionelles Gästehaus im M'Zab",
            "text": "Ein restauriertes mosabitisches Haus mit dicken Mauern, einem Innenhof und einer Dachterrasse — mitten in der Altstadt statt draußen an der Umgehungsstraße."
          },
          {
            "place": "Spaziergang durch die Altstadt von Ghardaïa",
            "text": "Ein Abend durch die Gassen der Hügelstadt des M'Zab nach der Fahrt nach Norden."
          }
        ]
      },
      {
        "day": 6,
        "title": "M'Zab-Tal und Abreise",
        "body": "Besuch von Beni Isguen, El Atteuf und Melika mit ihren Moscheen, Souks und Werkstätten, dann Mittagessen und Transfer zum Flughafen.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "Die heilige ummauerte Stadt des M'Zab, betreten durch ihr altes Tor, wo Kleidung und Fotografieren den örtlichen Sitten folgen."
          },
          {
            "place": "El Atteuf",
            "text": "Die älteste der fünf Städte des M'Zab, deren schlichte Sidi-Brahim-Moschee Le Corbusier so beeindruckte, dass sie die moderne Architektur mitprägte."
          },
          {
            "place": "Melika",
            "text": "Eine auf einem Hügel gelegene Stadt des M'Zab mit Marabout-Gräbern und weiten Blicken über das Tal."
          }
        ]
      }
    ],
    "includes": [
      "Abholung und Transfers ab Flughafen/Hotel",
      "Klimatisiertes Fahrzeug / 4×4",
      "Professioneller lokaler Guide",
      "Unterkunft laut Programm",
      "Mahlzeiten laut Programm (Mittag- und Abendessen)",
      "Eintritte zu den Stätten",
      "Wüstenexkursion in Djanet"
    ],
    "excludes": [
      "Inlands- und Auslandsflüge",
      "Persönliche Ausgaben",
      "Nicht genannte Getränke",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "November bis Februar"
      },
      {
        "label": "Tempo",
        "value": "Moderat — 4×4-Tage und kurze Wüstenwanderungen"
      },
      {
        "label": "Stil",
        "value": "Privat, geführt, 5 Nächte; Mahlzeiten laut Programm"
      },
      {
        "label": "Mitbringen",
        "value": "Warme Schichten, Stirnlampe, Sonnenschutz, bedeckende Kleidung fürs M'Zab"
      }
    ],
    "faqs": [
      {
        "q": "Wie erreiche ich Djanet?",
        "a": "Mit dem Inlandsflug ab Algier (Flüge nicht enthalten); wir beraten bei den Zeiten."
      },
      {
        "q": "Sind beide Regionen UNESCO-Welterbe?",
        "a": "Ja — das Tassili n'Ajjer (1982) und das M'Zab-Tal (1982)."
      },
      {
        "q": "Wo übernachtet man?",
        "a": "In Wüstencamps rund um Djanet und in einer Unterkunft in oder bei Ghardaïa."
      },
      {
        "q": "Ist die Reise körperlich anstrengend?",
        "a": "Moderat — überwiegend 4×4-Fahrten mit kurzen Wanderungen und Dünenaufstiegen in Ihrem Tempo."
      }
    ]
  },
  "algeria-intensive-discovery-tour": {
    "title": "Algerien intensiv entdecken — 5 Tage",
    "duration": "5 Tage · 4 Nächte",
    "hook": "Fünf Tage in zügigem Tempo, um möglichst viel vom Land zu sehen: Hauptstadt, römische Küste und ein erster Eindruck der Sahara.",
    "full": true,
    "seoTitle": "Algerien intensiv 5 Tage — Kasbah, Timgad, Djémila",
    "seoDescription": "Private 5-Tage-Reise zu den großen Sehenswürdigkeiten Algeriens: Kasbah und Bardo, römisches Tipaza, Constantine, Timgad, Djémila und die Wüste bei Bou Saada.",
    "overview": "Für Reisende mit wenig Zeit und viel Neugier bündelt diese intensive 5-Tage-Reise die größten Sehenswürdigkeiten Algeriens: die Kasbah, das Bardo-Museum und das Märtyrerdenkmal in Algier; die römische Küste bei Tipaza und Cherchell; die Brücken von Constantine; die römischen UNESCO-Städte Timgad und Djémila; und eine Wüstenexkursion bei Bou Saada. Das Tempo ist zügig, mit lizenziertem Guide und allen Mahlzeiten — die Ikonen des Landes in einer einzigen Reise.",
    "highlights": [
      "Die Kasbah, das Bardo-Museum und das Märtyrerdenkmal",
      "Das römische Tipaza, Cherchell und das Mausoleum der Cleopatra Selene",
      "Die Hängebrücken und Paläste von Constantine",
      "Die römischen UNESCO-Stätten Timgad und Djémila",
      "Eine Wüstenexkursion bei Bou Saada"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Stadtrundgang Algier",
        "body": "Empfang am Flughafen und Transfer, dann das Nationalmuseum Bardo, ein Spaziergang durch die UNESCO-Kasbah und das Märtyrerdenkmal mit seinem Blick über die Hauptstadt.",
        "stops": [
          {
            "place": "Das Bardo-Museum",
            "text": "Vor- und Frühgeschichte sowie Völkerkunde in einer eleganten maurischen Villa, von Abgüssen saharischer Felskunst bis zu Silberschmuck und dem Alltag Algeriens."
          },
          {
            "place": "Die Kasbah von Algier",
            "text": "Die zum UNESCO-Welterbe zählende osmanische Zitadelle — ein steiles, weißes Labyrinth aus Palästen, Moscheen und Hofhäusern, das sich über der Bucht erhebt."
          },
          {
            "place": "Das Märtyrerdenkmal (Maqam Echahid)",
            "text": "Drei aufragende Betonpalmwedel, 1982 über der Stadt errichtet, zum Gedenken an die Gefallenen des Unabhängigkeitskrieges."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza und Cherchell",
        "body": "Westwärts an der Küste zu den römischen Ruinen von Tipaza und dem Königlichen Mausoleum von Mauretanien, dann das Museum von Cherchell und der alte Hafen.",
        "stops": [
          {
            "place": "Das römische Tipaza",
            "text": "Eine zum UNESCO-Welterbe zählende römische Hafenstadt entlang des Mittelmeers — Basiliken, Thermen und ein Theater, dem die Wellen zu Füßen liegen."
          },
          {
            "place": "Das Königliche Mausoleum von Mauretanien",
            "text": "Ein gewaltiger steinerner Rundbau auf einem Hügel über dem Meer — die Grabstätte des Berberkönigs Juba II. und Kleopatra Selenes, der Tochter Kleopatras von Ägypten, aus dem 1. Jahrhundert v. Chr."
          },
          {
            "place": "Cherchell (das antike Caesarea)",
            "text": "Die einstige Hauptstadt Juba II., deren Museum einige der schönsten römischen und griechischen Mosaiken und Statuen Algeriens bewahrt."
          }
        ]
      },
      {
        "day": 3,
        "title": "Constantine und Timgad",
        "body": "Ostwärts nach Constantine mit seinen Hängebrücken und dem Ahmed-Bey-Palast, dann weiter zur römischen Stadt Timgad.",
        "stops": [
          {
            "place": "Die Brücken von Constantine",
            "text": "Die „Stadt der Brücken“ überspannt die schwindelerregende Rhumel-Schlucht, hoch über der die Fußgängerbrücke Sidi M'Cid gespannt ist."
          },
          {
            "place": "Der Palast von Ahmed Bey",
            "text": "Der osmanische Palast des letzten Bey aus dem frühen 19. Jahrhundert, mit bemalten Galerien und schattigen Innenhöfen."
          },
          {
            "place": "Timgad",
            "text": "Trajans schachbrettartig angelegte Kolonie aus dem Jahr 100 n. Chr. — das „Pompeji des Aurès“, ausgebreitet über die offene Ebene."
          }
        ]
      },
      {
        "day": 4,
        "title": "Djémila und Sétif",
        "body": "Die römische UNESCO-Stadt Djémila mit Forum, Theater und Mosaiken, danach der Brunnen Aïn El Fouara in Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Eine römische UNESCO-Stadt in grünen Bergen, hervorragend erhalten — Forum, Tempel und ein steil angelegtes Theater."
          },
          {
            "place": "Die Mosaiken von Djémila",
            "text": "Mosaiken vor Ort, zu den prächtigsten der römischen Welt zählend, im Museum der Ausgrabungsstätte."
          },
          {
            "place": "Aïn El Fouara, Sétif",
            "text": "Der beliebte Brunnen von 1898 im Herzen der Stadt, Sétifs bleibendes Wahrzeichen."
          }
        ]
      },
      {
        "day": 5,
        "title": "Bou Saada und Rückkehr",
        "body": "Südwärts nach Bou Saada, dem Tor zur Sahara, mit seiner Oase und einer Wüstenexkursion in den Dünen, bevor es zurück nach Algier geht.",
        "stops": [
          {
            "place": "Die Oase Bou Saada",
            "text": "Das Tor zur Sahara, mit einem Wüstenausflug zwischen den Dünen."
          },
          {
            "place": "Die Moulin Ferrero",
            "text": "Die alte Mühle am Oued Bou Saada neben der Schlucht und den Palmengärten, die Étienne Dinet malte."
          },
          {
            "place": "Die Dünen südlich von Bou Saada",
            "text": "Ein kurzer Ausflug auf den Sand — die erste echte Sahara auf der Fahrt nach Süden und der Wendepunkt des Tages."
          }
        ]
      }
    ],
    "includes": [
      "Empfang am Flughafen und Transfers",
      "Klimatisiertes Touristenfahrzeug",
      "Unterkunft in ausgewählten Hotels",
      "Alle Mahlzeiten während der Reise",
      "Lizenzierter Guide",
      "Eintritte zu den Stätten",
      "Wüstenexkursion bei Bou Saada"
    ],
    "excludes": [
      "Internationale Flüge",
      "Persönliche Ausgaben"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Frühjahr und Herbst"
      },
      {
        "label": "Tempo",
        "value": "Aktiv — volle Tage mit täglichen Transfers"
      },
      {
        "label": "Stil",
        "value": "Privat, geführt, 4 Nächte; alle Mahlzeiten enthalten"
      },
      {
        "label": "Mitbringen",
        "value": "Bequeme Schuhe, Sonnenschutz, bedeckende Kleidung für die Kasbah"
      }
    ],
    "faqs": [
      {
        "q": "Ist das Tempo anspruchsvoll?",
        "a": "Ja — die Reise ist bewusst intensiv, mit frühen Aufbrüchen und täglichen Etappen."
      },
      {
        "q": "Welche UNESCO-Stätten sind enthalten?",
        "a": "Timgad, Djémila und die Kasbah von Algier."
      },
      {
        "q": "Sind die Mahlzeiten enthalten?",
        "a": "Ja — alle Mahlzeiten während der Reise, dazu die Eintritte und die Exkursion bei Bou Saada."
      },
      {
        "q": "Lässt sich das Tempo entschärfen?",
        "a": "Ja — sagen Sie uns Bescheid, und wir dehnen das Programm zu einer ruhigeren Route."
      }
    ]
  },
  "the-soul-of-algeria": {
    "title": "Die Seele Algeriens — 4 Tage",
    "duration": "4 Tage · 3 Nächte",
    "hook": "Vier Tage zwischen Hauptstadt, römischer Küste und Hinterland, um eher den Charakter des Landes als eine Liste von Sehenswürdigkeiten zu erfassen.",
    "full": true,
    "seoTitle": "Die Seele Algeriens 4 Tage — Algier, Tipaza, Bou Saada",
    "seoDescription": "Private 4-Tage-Reise: das Bardo-Museum, Notre-Dame d'Afrique und die UNESCO-Kasbah in Algier, die römischen Ruinen von Tipaza und die Oase Bou Saada.",
    "overview": "Eine ausgewogene viertägige Einführung in die Spannweite Algeriens. Sie erleben das Bardo-Museum, Notre-Dame d'Afrique, das Märtyrerdenkmal und die UNESCO-Kasbah in Algier; die römischen Ruinen von Tipaza am Meer und das Museum von Cherchell; und die Oasenstadt Bou Saada am Rand der Sahara. Kultur, Antike und Wüste in einer kurzen, komfortablen Reise mit Hotels inklusive.",
    "highlights": [
      "Das Bardo-Museum und Notre-Dame d'Afrique",
      "Das Märtyrerdenkmal und die UNESCO-Kasbah",
      "Das römische Tipaza und das Museum von Cherchell",
      "Die Oasenstadt Bou Saada",
      "Eine kurze Reise durch Kulturen und Landschaften"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Algier",
        "body": "Das Bardo-Museum und seine Sammlungen, Notre-Dame d'Afrique über der Bucht und das Märtyrerdenkmal.",
        "stops": [
          {
            "place": "Das Bardo-Museum",
            "text": "Vor- und Frühgeschichte sowie Völkerkunde in einer eleganten maurischen Villa, von Abgüssen saharischer Felskunst bis zu Silberschmuck und dem Alltag Algeriens."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Eine Basilika aus dem 19. Jahrhundert — „Unsere Liebe Frau von Afrika“ — auf den Klippen über der Bucht, deren Inschrift Muslimen wie Christen gleichermaßen gilt."
          },
          {
            "place": "Das Märtyrerdenkmal (Maqam Echahid)",
            "text": "Drei aufragende Betonpalmwedel, 1982 über der Stadt errichtet, zum Gedenken an die Gefallenen des Unabhängigkeitskrieges."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza und Cherchell",
        "body": "Das Königliche Mausoleum von Mauretanien, der römische Archäologiepark von Tipaza und das Museum von Cherchell.",
        "stops": [
          {
            "place": "Das Königliche Mausoleum von Mauretanien",
            "text": "Ein gewaltiger steinerner Rundbau auf einem Hügel über dem Meer — die Grabstätte des Berberkönigs Juba II. und Kleopatra Selenes, der Tochter Kleopatras von Ägypten, aus dem 1. Jahrhundert v. Chr."
          },
          {
            "place": "Das römische Tipaza",
            "text": "Eine zum UNESCO-Welterbe zählende römische Hafenstadt entlang des Mittelmeers — Basiliken, Thermen und ein Theater, dem die Wellen zu Füßen liegen."
          },
          {
            "place": "Cherchell (das antike Caesarea)",
            "text": "Die einstige Hauptstadt Juba II., deren Museum einige der schönsten römischen und griechischen Mosaiken und Statuen Algeriens bewahrt."
          }
        ]
      },
      {
        "day": 3,
        "title": "Bou Saada",
        "body": "Südwärts nach Bou Saada: die Festung und ihre Panoramen, das Museum des Malers Nasreddine Dinet und die historische Moschee der Altstadt.",
        "stops": [
          {
            "place": "Panoramen von Bou Saada",
            "text": "Die Festung und Aussichtspunkte über dem Oasenstädtchen."
          },
          {
            "place": "Das Nasreddine-Dinet-Museum",
            "text": "Das Museum des Orientalisten-Malers, der Bou Saada berühmt machte, mit seinen Werken und Erinnerungsstücken."
          },
          {
            "place": "Die historische Moschee",
            "text": "Die Altstadtmoschee im Herzen von Bou Saada."
          }
        ]
      },
      {
        "day": 4,
        "title": "Algier",
        "body": "Zurück in Algier: die UNESCO-Kasbah, der Botanische Garten von Hamma und das Museum der Mudschahidin.",
        "stops": [
          {
            "place": "Die Kasbah von Algier",
            "text": "Die zum UNESCO-Welterbe zählende osmanische Zitadelle — ein steiles, weißes Labyrinth aus Palästen, Moscheen und Hofhäusern, das sich über der Bucht erhebt."
          },
          {
            "place": "Der Botanische Garten von Hamma",
            "text": "Der prachtvolle Jardin d'Essai aus dem 19. Jahrhundert, einer der schönsten botanischen Gärten Afrikas."
          },
          {
            "place": "Das Museum der Mujahideen",
            "text": "Die Geschichte der Unabhängigkeitskämpfer, erzählt unterhalb des Märtyrerdenkmals."
          }
        ]
      }
    ],
    "includes": [
      "Unterkunft in 4-Sterne-Hotels mit Frühstück",
      "Traditionelles Mittagessen",
      "Privater Transport",
      "Lokaler Guide"
    ],
    "excludes": [],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Frühjahr und Herbst; Oktober–April für Bou Saada"
      },
      {
        "label": "Tempo",
        "value": "Moderat"
      },
      {
        "label": "Stil",
        "value": "Privat, geführt, 3 Nächte in 4-Sterne-Hotels mit Frühstück"
      },
      {
        "label": "Mitbringen",
        "value": "Bedeckende Kleidung für die Kasbah, Sonnenschutz, bequeme Schuhe"
      }
    ],
    "faqs": [
      {
        "q": "Welche UNESCO-Stätten sind enthalten?",
        "a": "Tipaza und die Kasbah von Algier."
      },
      {
        "q": "Ist Bou Saada weit entfernt?",
        "a": "Einige Stunden südlich von Algier; der Transport ist enthalten."
      },
      {
        "q": "Ist die Unterkunft enthalten?",
        "a": "Ja — 4-Sterne-Hotels mit Frühstück und ein traditionelles Mittagessen."
      },
      {
        "q": "Eignet sich die Reise für einen Kurztrip?",
        "a": "Ja — sie verbindet drei Regionen in vier Tagen."
      }
    ]
  },
  "the-culture-and-heritage-of-algeria": {
    "title": "Kultur und Kulturerbe Algeriens — 8 Tage",
    "duration": "8 Tage · 7 Nächte",
    "hook": "Acht Tage durch Kultur und Geschichte Algeriens — die Hauptstadt und ihre Kasbah, Tipaza und Djémila, die Brücken von Constantine und die Oase Bou Saada.",
    "full": true,
    "seoTitle": "Kulturerbe Algeriens 8 Tage — Algier bis Bou Saada",
    "seoDescription": "Private 8-Tage-Kulturreise durch Algerien: Algier und die Kasbah, Tipaza und Cherchell, Constantine, das römische Djémila und die Oase Bou Saada.",
    "overview": "Ein tieferer Kulturkreis von acht Tagen. Von Algier und seiner Kasbah folgen Sie der römischen Küste bei Tipaza und Cherchell, wechseln nach Constantine und seiner Schlucht, durchwandern die römische Hügelstadt Djémila und schließen in der Oasenruhe von Bou Saada. Die Reise verbindet drei Stätten von UNESCO-Rang mit lebendigen Städten und dem Wüstenrand, in einem Tempo, das Raum lässt, jeden Ort zu verstehen.",
    "highlights": [
      "Algier, seine Museen und die historische Kasbah",
      "Das römische Tipaza, Cherchell und Djémila",
      "Constantine und seine Hängebrücke",
      "Der Oasencharme von Bou Saada",
      "Eine Mischung aus Kultur, Geschichte und Landschaft"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Algier",
        "body": "Empfang am Flughafen, Bezug eines Hotels im Stadtzentrum, abendlicher Stadtrundgang und Abendessen.",
        "stops": [
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Empfang bei Ankunft und Transfer in ein Hotel im Stadtzentrum — organisatorisch bereits alles erledigt."
          },
          {
            "place": "Eine abendliche Stadtrundfahrt",
            "text": "Eine erste Orientierungsrunde, während die Lichter angehen — die Arkaden der Uferpromenade, der Märtyrerplatz und die Grande Poste."
          },
          {
            "place": "Abendessen in Algier",
            "text": "Eine erste algerische Tafel im Zentrum, bei der die kommenden acht Tage besprochen werden."
          }
        ]
      },
      {
        "day": 2,
        "title": "Kulturtag in Algier",
        "body": "Das Bardo-Museum, die UNESCO-Kasbah und das Märtyrerdenkmal (Maqam Echahid).",
        "stops": [
          {
            "place": "Das Bardo-Museum",
            "text": "Vor- und Frühgeschichte sowie Völkerkunde in einer eleganten maurischen Villa, von Abgüssen saharischer Felskunst bis zu Silberschmuck und dem Alltag Algeriens."
          },
          {
            "place": "Die Kasbah von Algier",
            "text": "Die zum UNESCO-Welterbe zählende osmanische Zitadelle — ein steiles, weißes Labyrinth aus Palästen, Moscheen und Hofhäusern, das sich über der Bucht erhebt."
          },
          {
            "place": "Das Märtyrerdenkmal (Maqam Echahid)",
            "text": "Drei aufragende Betonpalmwedel, 1982 über der Stadt errichtet, zum Gedenken an die Gefallenen des Unabhängigkeitskrieges."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza und Cherchell",
        "body": "Das Königliche Mausoleum von Mauretanien, der Archäologiepark von Tipaza und das Museum von Cherchell.",
        "stops": [
          {
            "place": "Das Königliche Mausoleum von Mauretanien",
            "text": "Ein gewaltiger steinerner Rundbau auf einem Hügel über dem Meer — die Grabstätte des Berberkönigs Juba II. und Kleopatra Selenes, der Tochter Kleopatras von Ägypten, aus dem 1. Jahrhundert v. Chr."
          },
          {
            "place": "Das römische Tipaza",
            "text": "Eine zum UNESCO-Welterbe zählende römische Hafenstadt entlang des Mittelmeers — Basiliken, Thermen und ein Theater, dem die Wellen zu Füßen liegen."
          },
          {
            "place": "Cherchell (das antike Caesarea)",
            "text": "Die einstige Hauptstadt Juba II., deren Museum einige der schönsten römischen und griechischen Mosaiken und Statuen Algeriens bewahrt."
          }
        ]
      },
      {
        "day": 4,
        "title": "Constantine",
        "body": "Die Sidi-M'Cid-Brücke, der Ahmed-Bey-Palast, die Emir-Abdelkader-Moschee und ein Stadtspaziergang.",
        "stops": [
          {
            "place": "Die Brücken von Constantine",
            "text": "Die „Stadt der Brücken“ überspannt die schwindelerregende Rhumel-Schlucht, hoch über der die Fußgängerbrücke Sidi M'Cid gespannt ist."
          },
          {
            "place": "Der Palast von Ahmed Bey",
            "text": "Der osmanische Palast des letzten Bey aus dem frühen 19. Jahrhundert, mit bemalten Galerien und schattigen Innenhöfen."
          },
          {
            "place": "Die Emir-Abdelkader-Moschee",
            "text": "Eine der größten Moscheen Afrikas, deren Zwillingsminarette ein modernes Wahrzeichen Constantines sind."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "Die römische UNESCO-Stätte Djémila mit Theater, Tempeln und Mosaiken, dazu ein lokales Mittagessen.",
        "stops": [
          {
            "place": "Das Theater & die Tempel von Djémila",
            "text": "Die am besten erhaltenen Monumente der römischen UNESCO-Stadt, mit einem regionalen Mittagessen."
          },
          {
            "place": "Der Bogen des Caracalla",
            "text": "Der Triumphbogen aus dem Jahr 216 n. Chr. am Rand von Djémilas neuem Forum — das Bild, für das die Stätte bekannt ist."
          },
          {
            "place": "Die Mosaiken von Djémila",
            "text": "Mosaiken vor Ort, zu den prächtigsten der römischen Welt zählend, im Museum der Ausgrabungsstätte."
          }
        ]
      },
      {
        "day": 6,
        "title": "Nach Bou Saada",
        "body": "Die Straße von Constantine nach Bou Saada, Bezug der Unterkunft und freie Zeit, abends ein traditionelles Essen mit lokaler Musik.",
        "stops": [
          {
            "place": "Die Hodna-Ebene",
            "text": "Die Straße südwestlich von Constantine über die Hochsteppe und die Salzflächen des Chott El Hodna."
          },
          {
            "place": "Bou Saada",
            "text": "Die „Stadt des Glücks“ — eine Palmenoase am Fuß der Ouled-Naïl-Berge und das Ziel der heutigen Fahrt."
          },
          {
            "place": "Ein Abendessen mit lokaler Musik",
            "text": "Traditionelle Küche und live gespielte Saharamusik im Gästehaus — der Abend, um den sich der ganze Tag dreht."
          }
        ]
      },
      {
        "day": 7,
        "title": "Bou Saada und Rückkehr",
        "body": "Der Wasserfall von Bou Saada, die Ferrero-Mühle und die Zawiya von El Hamel, dann die Rückkehr nach Algier.",
        "stops": [
          {
            "place": "Der Wasserfall von Bou Saada",
            "text": "Eine natürliche Kaskade in der Oase — die kühle, grüne Ecke der „Stadt des Glücks“."
          },
          {
            "place": "Die Mühle Ferrero",
            "text": "Eine historische Mühle am Fluss, ein Wahrzeichen des alten Bou Saada."
          },
          {
            "place": "Die Zawiya von El Hamel",
            "text": "Ein auf einem Hügel gelegenes Rahmaniyya-Sufi-Heiligtum und eine Koranschule über Bou Saada — ruhig, schlicht und mit weitem Ausblick."
          }
        ]
      },
      {
        "day": 8,
        "title": "Abreise",
        "body": "Frühstück, Check-out und Transfer zum Flughafen von Algier.",
        "stops": [
          {
            "place": "Ein freier Vormittag",
            "text": "Zeit für alles, was die Woche in der Hauptstadt ausgelassen hat, oder ein letzter Spaziergang an der Uferpromenade — je nach Ihrem Flug."
          },
          {
            "place": "Letzte Einkäufe",
            "text": "Kabylischer Silberschmuck, Tuareg-Leder, Datteln und Gebäck aus den Kunsthandwerksläden im Stadtzentrum."
          },
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Check-out, privater Transfer und Unterstützung beim Check-in."
          }
        ]
      }
    ],
    "includes": [
      "Unterkunft in 4-Sterne-Hotels mit Frühstück",
      "Privater Transport",
      "Traditionelles Mittagessen",
      "Alle Steuern und Gebühren"
    ],
    "excludes": [],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Frühjahr und Herbst"
      },
      {
        "label": "Tempo",
        "value": "Moderat, Rundreise"
      },
      {
        "label": "Stil",
        "value": "Privat, geführt, 7 Nächte in 4-Sterne-Hotels mit Frühstück"
      },
      {
        "label": "Mitbringen",
        "value": "Bequeme Schuhe, bedeckende Kleidung für die Kasbah, Sonnenschutz"
      }
    ],
    "faqs": [
      {
        "q": "Welche UNESCO-Stätten sind enthalten?",
        "a": "Tipaza, Djémila und die Kasbah von Algier."
      },
      {
        "q": "Wie viel Fahrzeit ist eingeplant?",
        "a": "Es ist eine Rundreise durch den Norden und den Wüstenrand, mit komfortablen Transfers."
      },
      {
        "q": "Ist die Unterkunft enthalten?",
        "a": "Ja — 4-Sterne-Hotels mit Frühstück, privater Transport und ein traditionelles Mittagessen."
      },
      {
        "q": "Worin unterscheidet sich die Reise von der 10-Tage-Tour?",
        "a": "Sie konzentriert sich auf den Norden und Bou Saada, statt bis ins M'Zab zu reichen."
      }
    ]
  },
  "algeria-beyond-expectations": {
    "title": "Algerien jenseits der Erwartungen — 10 Tage",
    "duration": "10 Tage · 9 Nächte",
    "hook": "Zehn Tage für das Land in seiner ganzen Weite, von der Mittelmeerküste bis zu den Sahara-Oasen, in einem Tempo, das Zeit zum Schauen lässt.",
    "full": true,
    "seoTitle": "Algerien 10 Tage — Rundreise mit Sahara-Abenteuer",
    "seoDescription": "Private 10-Tage-Reise vom Mittelmeer bis ins M'Zab: Algier und Tipaza, Djémila und Timgad, Constantine und Ghardaïa — mit Quad, Kamel und Sandboard.",
    "overview": "Unsere abenteuerlichste große Rundreise. In zehn Tagen verbinden Sie Algier und das römische Tipaza, die Römerstädte Djémila und Timgad, die Hochebenen von Sétif und die Brücken von Constantine — und schließen im M'Zab-Tal bei Ghardaïa, gekrönt von einer Sahara-Exkursion mit Quad, Kamelritt und Sandboarding. Vier UNESCO-Stätten und der volle Bogen vom Norden in die Wüste, mit Abenteuer und Kultur zu gleichen Teilen.",
    "highlights": [
      "Algier und die römischen Ruinen von Tipaza",
      "Constantine, die Stadt der Brücken",
      "Sétif, Djémila und die römische Stadt Timgad",
      "Die Wüstenkultur des M'Zab-Tals bei Ghardaïa",
      "Eine Sahara-Exkursion mit Quad, Kamel und Sandboard"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Algier",
        "body": "Empfang am Flughafen, Check-in im Hotel und ein Willkommensabendessen.",
        "stops": [
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Empfang in der Ankunftshalle und Fahrt in die Stadt — der organisatorische Teil des ersten Tages ist bereits erledigt."
          },
          {
            "place": "Die Bucht von Algier",
            "text": "Die Fahrt entlang der Küste, während sich die weiße Hauptstadt stufenweise über dem Hafen erhebt."
          },
          {
            "place": "Ein Willkommensessen",
            "text": "Eine erste algerische Tafel — Chorba, Fisch aus der Bucht oder ein Hühnertajine — bei der die kommenden zehn Tage besprochen werden."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza und Cherchell",
        "body": "Die römischen Ruinen und das Theater von Tipaza, das Königliche Mausoleum von Mauretanien, das Museum von Cherchell und die Küstenblicke.",
        "stops": [
          {
            "place": "Das römische Tipaza",
            "text": "Eine zum UNESCO-Welterbe zählende römische Hafenstadt entlang des Mittelmeers — Basiliken, Thermen und ein Theater, dem die Wellen zu Füßen liegen."
          },
          {
            "place": "Das Königliche Mausoleum von Mauretanien",
            "text": "Ein gewaltiger steinerner Rundbau auf einem Hügel über dem Meer — die Grabstätte des Berberkönigs Juba II. und Kleopatra Selenes, der Tochter Kleopatras von Ägypten, aus dem 1. Jahrhundert v. Chr."
          },
          {
            "place": "Cherchell (das antike Caesarea)",
            "text": "Die einstige Hauptstadt Juba II., deren Museum einige der schönsten römischen und griechischen Mosaiken und Statuen Algeriens bewahrt."
          }
        ]
      },
      {
        "day": 3,
        "title": "Historisches Algier",
        "body": "Die UNESCO-Kasbah, das Märtyrerdenkmal und das Nationale Armeemuseum.",
        "stops": [
          {
            "place": "Die Kasbah von Algier",
            "text": "Die zum UNESCO-Welterbe zählende osmanische Zitadelle — ein steiles, weißes Labyrinth aus Palästen, Moscheen und Hofhäusern, das sich über der Bucht erhebt."
          },
          {
            "place": "Das Märtyrerdenkmal (Maqam Echahid)",
            "text": "Drei aufragende Betonpalmwedel, 1982 über der Stadt errichtet, zum Gedenken an die Gefallenen des Unabhängigkeitskrieges."
          },
          {
            "place": "Das Nationale Armeemuseum",
            "text": "Algeriens lange Militärgeschichte von der Antike bis 1962, gleich neben dem Märtyrerdenkmal."
          }
        ]
      },
      {
        "day": 4,
        "title": "Fahrt nach Sétif",
        "body": "Transfer nach Sétif und zu den römischen Ruinen von Djémila mit ihren Mosaiken; Übernachtung in Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Eine römische UNESCO-Stadt in grünen Bergen, hervorragend erhalten — Forum, Tempel und ein steil angelegtes Theater."
          },
          {
            "place": "Die Mosaiken von Djémila",
            "text": "Mosaiken vor Ort, zu den prächtigsten der römischen Welt zählend, im Museum der Ausgrabungsstätte."
          },
          {
            "place": "Sétif und der Brunnen Ain El Fouara",
            "text": "Die Hochplateau-Stadt auf 1.100 m und ihr berühmter Marmorbrunnen von 1898, wo übernachtet wird."
          }
        ]
      },
      {
        "day": 5,
        "title": "Constantine",
        "body": "Die Hängebrücken von Constantine, die Emir-Abdelkader-Moschee und der Ahmed-Bey-Palast; Übernachtung in Constantine.",
        "stops": [
          {
            "place": "Die Brücken von Constantine",
            "text": "Die „Stadt der Brücken“ überspannt die schwindelerregende Rhumel-Schlucht, hoch über der die Fußgängerbrücke Sidi M'Cid gespannt ist."
          },
          {
            "place": "Die Emir-Abdelkader-Moschee",
            "text": "Eine der größten Moscheen Afrikas, deren Zwillingsminarette ein modernes Wahrzeichen Constantines sind."
          },
          {
            "place": "Der Palast von Ahmed Bey",
            "text": "Der osmanische Palast des letzten Bey aus dem frühen 19. Jahrhundert, mit bemalten Galerien und schattigen Innenhöfen."
          }
        ]
      },
      {
        "day": 6,
        "title": "Batna und Timgad",
        "body": "Fahrt nach Batna und in die römische UNESCO-Stadt Timgad: Trajansbogen, Bibliothek und Theater; Übernachtung in Batna.",
        "stops": [
          {
            "place": "Timgad",
            "text": "Trajans schachbrettartig angelegte Kolonie aus dem Jahr 100 n. Chr. — das „Pompeji des Aurès“, ausgebreitet über die offene Ebene."
          },
          {
            "place": "Der Trajansbogen",
            "text": "Der Triumphbogen, der Timgads Hauptstraße einrahmt — die unverwechselbare Silhouette der Stadt."
          },
          {
            "place": "Die Bibliothek & das Theater von Timgad",
            "text": "Die Ruinen einer seltenen römischen öffentlichen Bibliothek und eines Theaters mit 3.500 Plätzen, das bis heute genutzt wird."
          }
        ]
      },
      {
        "day": 7,
        "title": "Fahrt nach Ghardaïa",
        "body": "Lange Etappe nach Süden ins M'Zab-Tal, Bezug eines traditionellen Gästehauses und ein freier Abend.",
        "stops": [
          {
            "place": "Die Straße südwärts über den Atlas",
            "text": "Aus dem Tell hinaus, über die Hochsteppe und hinab in die Vorsahara — die Fahrt, auf der Algerien das Klima wechselt."
          },
          {
            "place": "Ghardaïa",
            "text": "Die Hauptstadt des M'Zab, eine zum UNESCO-Welterbe zählende Häuserpyramide, die bis zur Moschee und dem Minarett auf ihrer Spitze aufsteigt."
          },
          {
            "place": "Ein traditionelles Gästehaus im M'Zab",
            "text": "Check-in in einem restaurierten mosabitischen Haus — dicke Mauern, ein Innenhof und eine Dachterrasse — mit einem freien Abend."
          }
        ]
      },
      {
        "day": 8,
        "title": "Kulturtag in Ghardaïa",
        "body": "Die Städte El Atteuf, Beni Isguen und Melika mit ihren Moscheen und ihrer Architektur, die Souks und ein Mittagessen bei einer Familie.",
        "stops": [
          {
            "place": "El Atteuf",
            "text": "Die älteste der fünf Städte des M'Zab, deren schlichte Sidi-Brahim-Moschee Le Corbusier so beeindruckte, dass sie die moderne Architektur mitprägte."
          },
          {
            "place": "Beni Isguen",
            "text": "Die heilige ummauerte Stadt des M'Zab, betreten durch ihr altes Tor, wo Kleidung und Fotografieren den örtlichen Sitten folgen."
          },
          {
            "place": "Melika",
            "text": "Eine auf einem Hügel gelegene Stadt des M'Zab mit Marabout-Gräbern und weiten Blicken über das Tal."
          }
        ]
      },
      {
        "day": 9,
        "title": "Rückkehr nach Algier",
        "body": "Rückreise nach Algier mit dem Botanischen Garten von Hamma, dem Bardo-Museum und Notre-Dame d'Afrique.",
        "stops": [
          {
            "place": "Der Botanische Garten von Hamma",
            "text": "Der prachtvolle Jardin d'Essai aus dem 19. Jahrhundert, einer der schönsten botanischen Gärten Afrikas."
          },
          {
            "place": "Das Bardo-Museum",
            "text": "Vor- und Frühgeschichte sowie Völkerkunde in einer eleganten maurischen Villa, von Abgüssen saharischer Felskunst bis zu Silberschmuck und dem Alltag Algeriens."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Eine Basilika aus dem 19. Jahrhundert — „Unsere Liebe Frau von Afrika“ — auf den Klippen über der Bucht, deren Inschrift Muslimen wie Christen gleichermaßen gilt."
          }
        ]
      },
      {
        "day": 10,
        "title": "Abreise",
        "body": "Frühstück und Transfer zum Flughafen.",
        "stops": [
          {
            "place": "Ein freier Vormittag in Algier",
            "text": "Was auch immer die zehn Tage ausgelassen haben — der Jardin d'Essai, die Ketchaoua-Moschee oder einfach die Uferpromenade — je nach Ihrer Flugzeit."
          },
          {
            "place": "Letzte Einkäufe",
            "text": "Kabylischer Silberschmuck, Tuareg-Leder, Deglet-Nour-Datteln und Gebäck, in der Rue Didouche Mourad oder in den Werkstätten der Kasbah."
          },
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Der private Transfer und Unterstützung beim Check-in."
          }
        ]
      }
    ],
    "includes": [
      "Unterkunft in 4-Sterne-Hotels mit Frühstück",
      "Klimatisierter Touristentransport",
      "Begleitender Guide",
      "Privater lokaler Guide an den großen Stätten",
      "Alle Mahlzeiten während der Wüstenexkursion",
      "Wüstenaktivitäten: Quad, Kamelritt, Sandboarding"
    ],
    "excludes": [
      "Zusätzliche Programme und Aktivitäten",
      "Trinkgelder",
      "Mittag- und Abendessen an den übrigen Tagen"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Oktober bis April (beste Zeit für die Sahara)"
      },
      {
        "label": "Tempo",
        "value": "Aktiv — Rundreise plus Wüstenaktivitäten"
      },
      {
        "label": "Stil",
        "value": "Privat, geführt, 9 Nächte in 4-Sterne-Hotels mit Frühstück"
      },
      {
        "label": "Mitbringen",
        "value": "Schichten, geschlossene Schuhe für die Wüste, Sonnenschutz, bedeckende Kleidung"
      }
    ],
    "faqs": [
      {
        "q": "Welche Wüstenaktivitäten sind enthalten?",
        "a": "Quad, Kamelritt und Sandboarding während der Sahara-Exkursion, mit allen Mahlzeiten währenddessen."
      },
      {
        "q": "Welche UNESCO-Stätten werden besucht?",
        "a": "Tipaza, Djémila, Timgad und das M'Zab-Tal, dazu die Kasbah von Algier."
      },
      {
        "q": "Eignet sich die Reise für aktive Reisende?",
        "a": "Ja — sie verbindet die Kulturrundreise mit einem aktiven Wüstenfinale."
      },
      {
        "q": "Worin unterscheidet sie sich von der großen 10-Tage-Rundreise?",
        "a": "Gleicher großer Bogen, aber mit einer aktivitätsorientierten Sahara-Exkursion bei Ghardaïa."
      }
    ]
  },
  "bousaada-desert-tour": {
    "title": "Bou Saada — 2 Tage in der Oase",
    "duration": "2 Tage · 1 Nacht",
    "hook": "Zwei Tage in Bou Saada, der Stadt des Glücks — Wasserfall und historische Ferrero-Mühle, Handwerksmärkte, ein Beduinen-Abendessen und die Zawiya von El Hamel.",
    "full": true,
    "seoTitle": "Bou Saada 2 Tage — Oase, Märkte und El Hamel",
    "seoDescription": "Private 2-Tage-Reise nach Bou Saada, der Stadt des Glücks: Wasserfall und Ferrero-Mühle, Handwerksmärkte, Beduinen-Abendessen und die Zawiya von El Hamel.",
    "overview": "Bou Saada, seit jeher die Stadt des Glücks genannt, ist das klassische Tor zwischen den Hochebenen und der Sahara. In zwei Tagen besuchen Sie den natürlichen Wasserfall und die historische Ferrero-Mühle, schlendern über lebhafte Handwerksmärkte, teilen ein Abendessen im Beduinenstil mit Live-Musik und sehen die Sufi-Zawiya von El Hamel. Ein leichter, stimmungsvoller Vorgeschmack auf den Süden Algeriens, wenige Stunden von Algier entfernt.",
    "highlights": [
      "Bou Saada, die Stadt des Glücks",
      "Der natürliche Wasserfall und die historische Ferrero-Mühle",
      "Traditionelle Handwerksmärkte",
      "Ein Abendessen im Beduinenstil mit Live-Musik",
      "Die Sufi-Zawiya von El Hamel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Von Algier nach Bou Saada",
        "body": "Morgendliche Abfahrt in Algier, Check-in im Hotel, dann der Nachmittag am natürlichen Wasserfall, an der historischen Ferrero-Mühle und auf den traditionellen Märkten, abends ein Essen im Beduinenstil mit lokaler Musik.",
        "stops": [
          {
            "place": "Der Wasserfall von Bou Saada",
            "text": "Eine natürliche Kaskade in der Oase — die kühle, grüne Ecke der „Stadt des Glücks“."
          },
          {
            "place": "Die Mühle Ferrero",
            "text": "Eine historische Mühle am Fluss, ein Wahrzeichen des alten Bou Saada."
          },
          {
            "place": "Die traditionellen Märkte",
            "text": "Souks für Silberschmuck, Wolle und Datteln, am Abend mit einem beduinischen Abendessen und Musik."
          }
        ]
      },
      {
        "day": 2,
        "title": "Die Zawiya von El Hamel und Rückkehr",
        "body": "Nach dem Frühstück Besuch der Sufi-Zawiya von El Hamel in den Bergen, mit Zeit für Fotos und die Landschaft, dann ein lokales Mittagessen in Bou Saada und am Nachmittag die Rückfahrt nach Algier.",
        "stops": [
          {
            "place": "Die Ausläufer des Ouled Naïl",
            "text": "Die Fahrt nach El Hamel durch kahle ockerfarbene Hügel — die Landschaft, die Bou Saada zur Stadt der Maler machte."
          },
          {
            "place": "Die Zawiya von El Hamel",
            "text": "Ein auf einem Hügel gelegenes Rahmaniyya-Sufi-Heiligtum und eine Koranschule über Bou Saada — ruhig, schlicht und mit weitem Ausblick."
          },
          {
            "place": "Mittagessen in Bou Saada",
            "text": "Eine regionale Tafel zurück in der Oase vor der Fahrt nach Norden — Couscous oder ein Tajine im Schatten der Palmen."
          }
        ]
      }
    ],
    "includes": [
      "Unterkunft im Hotel Kerdada oder vergleichbar",
      "Besuch des natürlichen Wasserfalls",
      "Geführter Besuch der Ferrero-Mühle",
      "Traditionelle Märkte",
      "Abendessen im Beduinenstil mit Musik",
      "Besuch der Zawiya von El Hamel",
      "Mittagessen an Tag 2",
      "Hin- und Rücktransport ab Algier",
      "Mehrsprachiger Guide"
    ],
    "excludes": [
      "Persönliche Ausgaben",
      "Reiseversicherung",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Oktober bis April"
      },
      {
        "label": "Tempo",
        "value": "Leicht"
      },
      {
        "label": "Stil",
        "value": "Privat, geführt, 1 Nacht mit Hotel und Mahlzeiten"
      },
      {
        "label": "Mitbringen",
        "value": "Bedeckende Kleidung, Sonnenschutz, bequeme Schuhe"
      }
    ],
    "faqs": [
      {
        "q": "Wie weit ist Bou Saada von Algier entfernt?",
        "a": "Einige Stunden über die Straße; der Hin- und Rücktransport ist enthalten."
      },
      {
        "q": "Ist die Unterkunft enthalten?",
        "a": "Ja — eine Nacht im Hotel Kerdada oder vergleichbar, mit Mittagessen am zweiten Tag."
      },
      {
        "q": "Was ist El Hamel?",
        "a": "Eine historische Sufi-Zawiya — Heiligtum und Religionsschule — bei Bou Saada."
      },
      {
        "q": "Eignet sich die Reise als kurzer Wüsten-Vorgeschmack?",
        "a": "Ja — es ist der einfachste Ausflug in den Süden ab der Hauptstadt."
      }
    ]
  },
  "tour-bejaia-historic": {
    "title": "Béjaïa — die historische Stadt am Meer (Tagesausflug)",
    "duration": "1 Tag",
    "hook": "Ein Tag an der Küste in Béjaïa — Festung und Museum, die Corniche am Cap Carbon und der Sand von Les Aiguades, mit Mittagessen am Mittelmeer.",
    "full": true,
    "seoTitle": "Béjaïa Tagesausflug — Fort, Cap Carbon und Strand",
    "seoDescription": "Privater Tagesausflug ab Algier nach Béjaïa: Festung und Museum, die Corniche am Cap Carbon, der Strand von Les Aiguades und ein Mittagessen am Meer.",
    "overview": "In Béjaïa stürzen die grünen Berge des Djurdjura direkt ins tiefblaue Mittelmeer. An einem Tag ab Algier besuchen Sie die historische Festung und ihr Museum, fahren die dramatische Corniche am Cap Carbon über den Klippen entlang und entspannen im Sand von Les Aiguades, mit einem traditionellen Mittagessen am Wasser. Es ist der leichteste Weg, die kabylische Küste zu kosten — Geschichte, Landschaft und Meer in einer entspannten Runde.",
    "highlights": [
      "Die historische Festung von Béjaïa und ihre Meerblicke",
      "Museumsausstellungen zur Geschichte der Region",
      "Die dramatische Küste am Cap Carbon",
      "Strandzeit in Les Aiguades",
      "Authentische algerische Küche"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Festung, Cap Carbon und die Küste",
        "body": "Abholung in Algier, geführter Besuch der historischen Festung und ihres Museums, ein Spaziergang entlang der Corniche am Cap Carbon, Strandzeit in Les Aiguades und ein traditionelles Mittagessen vor der Rückfahrt.",
        "stops": [
          {
            "place": "Fort Gouraya und sein Museum",
            "text": "Die Festung hoch über Béjaïa, mit der Bucht, dem Hafen und den kabylischen Bergen darunter ausgebreitet."
          },
          {
            "place": "Cap Carbon",
            "text": "Das Kap mit seinem Leuchtturm auf einem natürlichen Felsbogen — einer der höchstgelegenen Seeleuchttürme der Welt."
          },
          {
            "place": "Les Aiguades",
            "text": "Eine Bucht mit klarem Wasser unterhalb der Corniche, mit Zeit am Strand vor einem traditionellen Mittagessen."
          }
        ]
      }
    ],
    "includes": [
      "Transport im klimatisierten Fahrzeug",
      "Mehrsprachiger Guide",
      "Eintritte für Festung und Museum",
      "Traditionelles algerisches Mittagessen",
      "Pausen entlang der Strecke"
    ],
    "excludes": [
      "Getränke außerhalb der enthaltenen Mahlzeit",
      "Optionale Strandaktivitäten",
      "Reiseversicherung",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Mai–Oktober für den Strand; Frühjahr und Herbst zum Wandern"
      },
      {
        "label": "Tempo",
        "value": "Leicht, mit langer Fahrt je Richtung"
      },
      {
        "label": "Stil",
        "value": "Privater geführter Tagesausflug ab Algier"
      },
      {
        "label": "Mitbringen",
        "value": "Im Sommer Badesachen, Sonnenschutz, bequeme Schuhe"
      }
    ],
    "faqs": [
      {
        "q": "Wo beginnt die Tour?",
        "a": "Mit Abholung in Algier; die Fahrt nach Béjaïa führt durch die Berge der Kabylei."
      },
      {
        "q": "Ist das Mittagessen enthalten?",
        "a": "Ja — ein traditionelles algerisches Mittagessen an der Küste."
      },
      {
        "q": "Kann man in Les Aiguades baden?",
        "a": "In den warmen Monaten ja — Badesachen mitbringen; in der kühleren Zeit ist es ein landschaftlicher Stopp."
      },
      {
        "q": "Ist es ein langer Tag?",
        "a": "Ja — ein voller Küstentag mit Fahrzeit je Richtung; ein früher Aufbruch lohnt sich."
      }
    ]
  },
  "private-guided-tour": {
    "title": "Tipaza und Cherchell — privater römischer Tag",
    "duration": "1 Tag",
    "hook": "Ein privater Tag an der römischen Küste westlich von Algier — die Ruinen von Tipaza am Meer und das Museum des antiken Caesarea in Cherchell.",
    "full": true,
    "seoTitle": "Tipaza und Cherchell — privater Tagesausflug",
    "seoDescription": "Privater Tag an der römischen Küste westlich von Algier: die UNESCO-Ruinen von Tipaza am Meer und das Archäologische Museum von Cherchell, in Ihrem Tempo.",
    "overview": "Tipaza ist eine der schönsten antiken Stätten des Mittelmeerraums: Forum, Thermen und Wohnhäuser der römischen Stadt ziehen sich rund 70 Kilometer westlich von Algier am Meer entlang. An diesem privaten Tag erkunden Sie die UNESCO-Ruinen in Ihrem eigenen Tempo und besuchen anschließend das Archäologische Museum von Cherchell — dem römischen Caesarea —, reich an Statuen und Mosaiken. Mit persönlichem Guide und Hotelabholung ist es der entspannte Weg, die römische Küste zu sehen.",
    "highlights": [
      "Die römischen Ruinen von Tipaza am Meer (UNESCO)",
      "Forum, Thermen und Wohnviertel",
      "Das Archäologische Museum von Cherchell",
      "Ein privates, persönliches Tempo",
      "Ein Spaziergang am alten Hafen von Cherchell"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Die Ruinen von Tipaza und das Museum von Cherchell",
        "body": "Abholung am Hotel und private Fahrt nach Tipaza zur geführten Besichtigung von Forum, Thermen und antiken Vierteln, dann weiter nach Cherchell — dem antiken Caesarea — mit seinem Museum römischer Statuen und Mosaiken und einem kurzen Spaziergang durch die Altstadt, vor der Rückfahrt.",
        "stops": [
          {
            "place": "Das römische Tipaza",
            "text": "Eine zum UNESCO-Welterbe zählende Hafenstadt entlang des Mittelmeers — Forum, Thermen, Basiliken und antike Viertel, denen die Wellen zu Füßen liegen."
          },
          {
            "place": "Das Archäologische Museum von Cherchell",
            "text": "Das Museum des antiken Caesarea, das einige der schönsten römischen und griechischen Mosaiken und Statuen Algeriens bewahrt."
          },
          {
            "place": "Die Altstadt von Cherchell",
            "text": "Ein kurzer Spaziergang um den alten Hafen, wo der römische Straßenplan unter der modernen Stadt noch erkennbar ist."
          }
        ]
      }
    ],
    "includes": [
      "Professioneller lokaler Guide (Arabisch/Englisch/Französisch/Spanisch)",
      "Eintritte in Tipaza und Cherchell",
      "Private geführte Tour",
      "Hotelabholung und Rücktransfer",
      "Sofortige Bestätigung"
    ],
    "excludes": [
      "Mittagessen (optional)",
      "Speisen und Getränke",
      "Persönliche Ausgaben",
      "Trinkgelder"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Frühjahr und Herbst"
      },
      {
        "label": "Tempo",
        "value": "Leicht, mit Gehstrecken auf unebenem Grund"
      },
      {
        "label": "Stil",
        "value": "Privater Tagesausflug (Arabisch / Englisch / Französisch / Spanisch)"
      },
      {
        "label": "Mitbringen",
        "value": "Sonnenschutz, Wasser, bequeme Schuhe"
      }
    ],
    "faqs": [
      {
        "q": "Ist Tipaza UNESCO-Welterbe?",
        "a": "Ja — eingeschrieben 1982."
      },
      {
        "q": "Wie weit ist es von Algier entfernt?",
        "a": "Rund 70 Kilometer westlich, etwa anderthalb Stunden."
      },
      {
        "q": "In welchen Sprachen wird geführt?",
        "a": "Der Guide arbeitet auf Arabisch, Englisch, Französisch oder Spanisch."
      },
      {
        "q": "Sind die Eintritte enthalten?",
        "a": "Ja — sowohl für Tipaza als auch für das Museum von Cherchell."
      }
    ]
  },
  "algiers-city-tour-casbah-bardo-martyrsmemorial": {
    "title": "Algier an einem Tag — Kasbah, Bardo und Märtyrerdenkmal",
    "duration": "1 Tag",
    "hook": "Ein ganzer Tag in der Hauptstadt — die UNESCO-Kasbah, das Bardo-Museum und das Märtyrerdenkmal über der Bucht.",
    "full": true,
    "seoTitle": "Algier an einem Tag — Kasbah, Bardo, Märtyrerdenkmal",
    "seoDescription": "Privater Tagesausflug durch Algier: die UNESCO-Kasbah, das Bardo-Museum und das Märtyrerdenkmal über der Bucht, mit traditionellem Mittagessen.",
    "overview": "Algier trägt seine Geschichte am Hang. An einem einzigen Tag steigen Sie durch die UNESCO-gelistete Kasbah — die dichte osmanische Medina aus Treppengassen, Hofhäusern und alten Moscheen über der Bucht —, sehen die Archäologie und Kunst des Nationalmuseums Bardo und stehen unter dem aufragenden Märtyrerdenkmal, mit dem besten Blick über die weißen Häuser und das Mittelmeer. Ein traditionelles Mittagessen unterbricht den Tag. Es ist der ideale erste Tag in Algerien: die Schichten der Hauptstadt, von Anfang bis Ende gelesen, mit einem lokalen Guide.",
    "highlights": [
      "Die UNESCO-Kasbah, ihre Gassen und alten Moscheen",
      "Archäologie und Geschichte im Bardo-Museum",
      "Das Märtyrerdenkmal und sein Panorama",
      "Ein traditionelles algerisches Mittagessen",
      "Blicke über Algier und das Mittelmeer"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kasbah, Bardo-Museum und Märtyrerdenkmal",
        "body": "Eine geführte Tagesrunde durch das alte Viertel der Kasbah, die Sammlungen des Nationalmuseums Bardo und das Märtyrerdenkmal, mit einem traditionellen Mittagessen in einem lokalen Restaurant zwischen den Besuchen.",
        "stops": [
          {
            "place": "Die Kasbah von Algier",
            "text": "Die zum UNESCO-Welterbe zählende osmanische Zitadelle — ein steiles, weißes Labyrinth aus Palästen, Moscheen und Hofhäusern, das sich über der Bucht erhebt."
          },
          {
            "place": "Das Nationalmuseum Bardo",
            "text": "Vor- und Frühgeschichte sowie Völkerkunde in einer eleganten maurischen Villa, von Abgüssen saharischer Felskunst bis zu Silberschmuck und dem Alltag Algeriens."
          },
          {
            "place": "Das Märtyrerdenkmal (Maqam Echahid)",
            "text": "Drei aufragende Betonpalmwedel, 1982 über der Stadt errichtet, zum Gedenken an die Gefallenen des Unabhängigkeitskrieges."
          }
        ]
      }
    ],
    "includes": [
      "Abholung und Rücktransfer ab Hotel/Flughafen",
      "Klimatisiertes Fahrzeug",
      "Professioneller lokaler Guide",
      "Eintritte",
      "Traditionelles algerisches Mittagessen",
      "Wasser und Snacks"
    ],
    "excludes": [
      "Trinkgelder",
      "Persönliche Ausgaben"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Frühjahr und Herbst (mild); fast ganzjährig angenehm"
      },
      {
        "label": "Tempo",
        "value": "Leicht, mit Gehstrecken und Stufen in der Kasbah"
      },
      {
        "label": "Stil",
        "value": "Privater geführter Ganztagesausflug"
      },
      {
        "label": "Mitbringen",
        "value": "Bequeme Schuhe, Sonnenschutz, bedeckende Kleidung für Moscheen"
      }
    ],
    "faqs": [
      {
        "q": "Ist die Kasbah sicher zu besuchen?",
        "a": "Ja — mit lokalem Guide ist es ein lohnender, gastfreundlicher Spaziergang; die Gassen sind steil, gutes Schuhwerk hilft."
      },
      {
        "q": "Ist das Mittagessen enthalten?",
        "a": "Ja — ein traditionelles algerisches Mittagessen in einem lokalen Restaurant gehört zum Tag."
      },
      {
        "q": "Holen Sie mich am Flughafen ab?",
        "a": "Ja — Abholung und Rücktransfer am Hotel in Algier oder am Flughafen sind enthalten."
      },
      {
        "q": "Wie viel wird gelaufen?",
        "a": "Einiges, vor allem auf den Stufen und Hängen der Kasbah — in ruhigem Tempo mit Pausen."
      }
    ]
  },
  "algierstour-hammagarden-notredame-dafrique": {
    "title": "Algier — Hamma-Garten und Notre-Dame d'Afrique",
    "duration": "1 Tag",
    "hook": "Ein Tag in Algier zwischen dem Versuchsgarten von Hamma und der Basilika Notre-Dame d'Afrique, mit den schönsten Blicken über die Bucht.",
    "full": true,
    "seoTitle": "Algier Tagestour — Hamma-Garten, Notre-Dame d'Afrique",
    "seoDescription": "Privater Tag in Algier: der Jardin d'Essai von Hamma, die Basilika Notre-Dame d'Afrique über der Bucht und das Armeemuseum, mit traditionellem Mittagessen.",
    "overview": "Als entspannte Alternative zum Kasbah-Tag verbindet diese private Tour drei Wahrzeichen von Algier in ruhigem Tempo: den üppigen Jardin d'Essai von Hamma, einen der großen botanischen Gärten des Mittelmeerraums; die Basilika Notre-Dame d'Afrique auf ihrem Hügel mit weitem Blick über die Bucht; und das Armeemuseum mit seiner Darstellung der algerischen Geschichte. Ein traditionelles Mittagessen rundet den Tag ab, mit Hotelabholung inklusive.",
    "highlights": [
      "Der historische Botanische Garten von Hamma",
      "Meerblicke von Notre-Dame d'Afrique",
      "Algeriens Militärgeschichte im Armeemuseum",
      "Ein traditionelles algerisches Mittagessen",
      "Private Führung mit Hotelabholung"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hamma-Garten, Notre-Dame d'Afrique und Armeemuseum",
        "body": "Abholung am Hotel oder Flughafen, dann ein geführter Tag zu drei Sehenswürdigkeiten: der botanische Garten von Hamma, die Basilika Notre-Dame d'Afrique auf ihrem Hügel über dem Mittelmeer und das Armeemuseum, mit einem traditionellen Mittagessen unterwegs, vor der Rückfahrt.",
        "stops": [
          {
            "place": "Der Botanische Garten El Hamma",
            "text": "Zehn Hektar, 1832 unterhalb des Märtyrerdenkmals angelegt — ein französischer Ziergarten, ein englischer Landschaftspark, Palmenalleen und ein Bambushain."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Die Basilika aus dem 19. Jahrhundert auf der Klippe über Bab El Oued, berühmt für die Inschrift in der Apsis, die Unsere Liebe Frau von Afrika bittet, „für uns und für die Muslime“ zu beten."
          },
          {
            "place": "Das Zentrale Armeemuseum",
            "text": "Die nationale Militärsammlung neben dem Maqam Echahid, die von den Feldzügen des Emir Abdelkader bis zum Unabhängigkeitskrieg reicht."
          }
        ]
      }
    ],
    "includes": [
      "Abholung und Rücktransfer ab Hotel/Flughafen",
      "Klimatisiertes Fahrzeug",
      "Professioneller lokaler Guide",
      "Eintritte zu den Stätten",
      "Traditionelles algerisches Mittagessen",
      "Wasser in Flaschen und Snacks"
    ],
    "excludes": [
      "Trinkgelder",
      "Persönliche Ausgaben"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Ganzjährig; Frühjahr und Herbst am mildesten"
      },
      {
        "label": "Tempo",
        "value": "Leicht, überwiegend kurze Gehstrecken"
      },
      {
        "label": "Stil",
        "value": "Privater geführter Tagesausflug mit Abholung"
      },
      {
        "label": "Mitbringen",
        "value": "Bequeme Schuhe, bedeckende Kleidung für die Basilika, Kamera"
      }
    ],
    "faqs": [
      {
        "q": "Ist dieser Tag leichter als die Kasbah-Tour?",
        "a": "Ja — ein sanfterer Tag zwischen Gärten und Aussichtspunkten, mit weniger Steigungen."
      },
      {
        "q": "Ist das Mittagessen enthalten?",
        "a": "Ja — ein traditionelles algerisches Mittagessen."
      },
      {
        "q": "Sind die Eintritte abgedeckt?",
        "a": "Ja — der Eintritt zu allen drei Stätten ist enthalten."
      },
      {
        "q": "Lässt sich der Tag mit der Kasbah-Tour kombinieren?",
        "a": "Ja — viele Gäste verbinden beide an zwei Tagen; sprechen Sie uns an, wir organisieren es."
      }
    ]
  },
  "day-tour-algeria-culture": {
    "title": "Algier — Kulturspaziergang durch die Kasbah",
    "duration": "1 Tag",
    "hook": "Ein Tag zu Fuß durch die Kasbah von Algier, ihre Gassen, osmanischen Paläste und Dachterrassen, mit einem Guide, der dort aufgewachsen ist.",
    "full": true,
    "seoTitle": "Kasbah von Algier — geführter Kulturspaziergang",
    "seoDescription": "Geführter Spaziergang durch die UNESCO-Kasbah von Algier: Märtyrerplatz, Mustafa-Pascha-Palast, die Zitadelle und der Rais-Palast am Meer.",
    "overview": "Die Kasbah von Algier ist eines der großen historischen Viertel des Mittelmeerraums, und dieser Spaziergang liest sie von unten nach oben. Vom Meer und vom Märtyrerplatz steigen Sie durch enge Gassen zum Mustafa-Pascha-Palast, zur osmanischen Zitadelle und zum Haus von Ali La Pointe — einem Schlüsselort des Unabhängigkeitskriegs —, bevor es hinab zum Rais-Palast (Bastion 23) am Meer geht. Eine kompakte, atmosphärische Einführung in das alte Algier.",
    "highlights": [
      "Die engen Gassen und alten Moscheen der Kasbah",
      "Der Mustafa-Pascha-Palast und osmanische Architektur",
      "Panoramaterrassen über der Bucht",
      "Die Zitadelle der Kasbah und das Haus von Ali La Pointe",
      "Der Rais-Palast (Bastion 23) am Meer"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Spaziergang durch die Kasbah",
        "body": "Treffen mit dem Guide am Meer, am Fuß der Kasbah, dann der Aufstieg über den Märtyrerplatz mit seiner historischen Moschee, den Mustafa-Pascha-Palast, eine Panoramaterrasse, die Zitadelle und das Haus der Unabhängigkeitsfigur Ali La Pointe, mit Abschluss am Rais-Palast am Meer.",
        "stops": [
          {
            "place": "Der Märtyrerplatz und die Ketchaoua-Moschee",
            "text": "Der Platz am Fuß der Kasbah und ihre osmanische Moschee aus dem 17. Jahrhundert, nach zehnjähriger Restaurierung wiedereröffnet."
          },
          {
            "place": "Der Palast Mustafa Pascha und die Zitadelle",
            "text": "Der Palast des Dey aus dem 18. Jahrhundert mit seinen bemalten Fliesen, und die Zitadelle an der Spitze der Kasbah, wo der Fächerschlag von 1830 die französische Invasion auslöste."
          },
          {
            "place": "Das Haus von Ali La Pointe und der Rais-Palast",
            "text": "Das gesprengte Versteck, bewahrt im Herzen der Kasbah, und die osmanischen Palastbauten von Bastion 23 am Meer, wo der Spaziergang endet."
          }
        ]
      }
    ],
    "includes": [
      "Professioneller Guide (Englisch, Französisch oder Arabisch)",
      "Eintritte zu den enthaltenen Sehenswürdigkeiten",
      "Transport während der Tour",
      "Geführter Spaziergang durch die Kasbah"
    ],
    "excludes": [
      "Mahlzeiten und Getränke",
      "Hotelabholung und Rücktransfer (sofern nicht vereinbart)",
      "Optionale Aktivitäten und persönliche Ausgaben"
    ],
    "goodToKnow": [
      {
        "label": "Saison",
        "value": "Frühjahr und Herbst"
      },
      {
        "label": "Tempo",
        "value": "Moderat — steile Stufen und Hänge"
      },
      {
        "label": "Stil",
        "value": "Geführter Stadtspaziergang (Englisch / Französisch / Arabisch)"
      },
      {
        "label": "Mitbringen",
        "value": "Bequeme Schuhe, Wasser, bedeckende Kleidung"
      }
    ],
    "faqs": [
      {
        "q": "Ist die Kasbah mit Guide sicher?",
        "a": "Ja — es ist ein lohnender, gastfreundlicher Spaziergang; gutes Schuhwerk für die Stufen hilft."
      },
      {
        "q": "Wie lang ist der Spaziergang?",
        "a": "Ein geführter Weg durch das Viertel, überwiegend bergauf, in ruhigem Tempo mit Pausen."
      },
      {
        "q": "Sind die Eintritte enthalten?",
        "a": "Ja — für die enthaltenen Sehenswürdigkeiten."
      },
      {
        "q": "Wer war Ali La Pointe?",
        "a": "Eine Figur des algerischen Unabhängigkeitskriegs; sein Haus in der Kasbah liegt auf der Route."
      }
    ]
  },
  "tadrart-rouge-7-days": {
    "title": "Tadrart Rouge — 7 Tage in der Roten Sahara",
    "duration": "7 Tage · 6 Nächte",
    "hook": "Der Tadrart ist die Sahara, wie man sie sich vorstellt, bevor man sie gesehen hat: rosafarbener Sand, der auf schwarzen Fels trifft, Bögen von der Größe von Kathedralen und ein Himmel ohne jedes Hindernis.",
    "full": true,
    "seoTitle": "Tadrart Rouge Sahara-Reise — 7 Tage ab Djanet",
    "seoDescription": "Private 7-Tage-Expedition in den Tadrart Rouge ab Djanet: rosa Dünen, Felsbögen und sechs Nächte Biwak unter dem Sternenhimmel der Sahara.",
    "overview": "Dies ist die klassische Djanet-Rundreise, im Tempo der Landschaft. Sieben Tage, sechs davon enden an einem Biwak, das Sie selbst mit aufschlagen, auf einer Durchquerung des Tadrart Rouge von Tigharghart bis zu den großen Dünen von Tin Merzouga und zurück durch die Felsbögen von Ajelati. Ihr Guide und die Fahrer sind Tuareg aus Djanet, der Koch reist mit, und die gesamte Südetappe — der Flug ab Algier, die Flughafentransfers, die Parkgenehmigungen — ist schon vor Ihrer Landung organisiert. Was Sie mitbringen, ist eine Reisetasche und die Bereitschaft, im Sand zu schlafen.",
    "highlights": [
      "Sechs Nächte wildes Biwak unter dem Sternenhimmel der Sahara",
      "Die rosafarbenen Dünen und der große Erg von Tin Merzouga",
      "Die Schluchten von El Berdj und ihre Felsgravuren",
      "Die monumentalen Felsbögen rund um Ajelati",
      "Tin Abadène — prähistorische Giraffen und Elefanten",
      "Die \"Weinende Kuh\" von Tigharghart und der Elefantenfelsen",
      "Tamezguida, die sandsteinerne \"Kathedrale\"",
      "Tuareg-Guides, Fahrer und Lagerkoch während der gesamten Reise"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Djanet → Tigharghart",
        "body": "Landung in Djanet nach dem Flug aus Algier und Treffen mit dem Team, das Sie die ganze Woche begleitet. Direkt weiter im 4×4 nach Tigharghart, wo das erste Biwak aufgeschlagen und das Abendessen am Feuer gekocht wird. Erste Nacht im Zelt oder, wenn Sie möchten, einfach unter freiem Himmel.",
        "stops": [
          {
            "place": "Djanet",
            "text": "Die Tuareg-Oasenhauptstadt im Südosten und das Tor zum Tassili n'Ajjer."
          },
          {
            "place": "Tigharghart",
            "text": "Das erste Lager, am Rand des Felskunstlandes, in das Sie am letzten Morgen zurückkehren."
          },
          {
            "place": "Das erste Biwak",
            "text": "Das Lager entsteht in Tigharghart — Matten, ein Feuer, darauf gekochtes Abendessen und die Wahl zwischen einem Zelt und einfach dem offenen Himmel."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tigharghart → El Berdj",
        "body": "Frühstück im Camp, dann eine Durchquerung bis zu den Schluchten von El Berdj — tief eingeschnittene Sandsteinwände mit Gravuren und Malereien. Picknick im Schatten, Lager in El Berdj und Sonnenuntergang von den Dünen darüber.",
        "stops": [
          {
            "place": "Die Durchquerung nach El Berdj",
            "text": "Ein Vormittag im 4×4 zwischen den beiden Lagern, abwechselnd weicher Sand und schwarzer Fels."
          },
          {
            "place": "El Berdj",
            "text": "Eindrucksvolle Schluchten, deren Wände sowohl Gravuren als auch bemalte Felstafeln tragen."
          },
          {
            "place": "Die Dünen über El Berdj",
            "text": "Der Aufstieg für den Sonnenuntergang über dem Schluchtensystem, das Lager zu ihren Füßen."
          }
        ]
      },
      {
        "day": 3,
        "title": "El Berdj → Moul Naga",
        "body": "Ein Tag mit Landschaften, die zwischen Sand und Fels wechseln, mit Halt an mehreren bemerkenswerten Felskunststätten unterwegs. Picknick, dann weiter nach Moul Naga, wo das Lager inmitten majestätischer Dünen aufgeschlagen und unter den Sternen zu Abend gegessen wird.",
        "stops": [
          {
            "place": "Sand- und Felslandschaft",
            "text": "Ein Tag im Wechsel zwischen Dünenfeldern und Sandsteinmassiven — die Mischung, die dem Tadrart seinen Charakter gibt."
          },
          {
            "place": "Felskunststätten am Weg",
            "text": "Mehrere gravierte und bemalte Felstafeln unterwegs: Rinder, Jäger und die Tierwelt einer Sahara, die einst Flüsse hatte."
          },
          {
            "place": "Moul Naga",
            "text": "Ein Biwak mitten in den Dünen."
          }
        ]
      },
      {
        "day": 4,
        "title": "Moul Naga → Erg Tin Merzouga",
        "body": "Wanderung durch die rosafarbenen Dünen und die emblematische Landschaft des Tadrart Rouge, dann Ankunft am Erg Tin Merzouga — dem großen Sandmeer. Aufstieg auf die hohen Dünen für einen Sonnenuntergang, dessentwegen viele Menschen anreisen, und Lager zu ihren Füßen.",
        "stops": [
          {
            "place": "Ein Vormittag in den rosa Dünen",
            "text": "Zu Fuß durch den rosa Sand und windgeschliffenen Fels, die dem Tadrart Rouge seinen Namen geben."
          },
          {
            "place": "Erg Tin Merzouga",
            "text": "Das große Dünenfeld des Tadrart und sein berühmtester Sonnenuntergang."
          },
          {
            "place": "Die hohe Düne bei Sonnenuntergang",
            "text": "Der Aufstieg, für den die meisten kommen — der ganze Erg färbt sich von oben gesehen rot, dann violett."
          }
        ]
      },
      {
        "day": 5,
        "title": "Tin Merzouga → Tissetka → Ouanahar",
        "body": "Hinab zum Oued In Djaren und weiter nach Tin Abadène, dessen Gravuren Giraffen und Elefanten zeigen — Tiere aus einer grünen Sahara. Picknick, dann die Strecke nach Ouanahar und das Abendlager.",
        "stops": [
          {
            "place": "Oued In Djaren",
            "text": "Ein trockenes Tal zwischen Sandsteinwänden und der Weg hinab aus dem Erg."
          },
          {
            "place": "Tin Abadène",
            "text": "Gravierte Giraffen und Elefanten aus der Zeit, als diese Wüste Flüsse führte."
          },
          {
            "place": "Ouanahar",
            "text": "Das nächtliche Lager, tiefer im Tadrart."
          }
        ]
      },
      {
        "day": 6,
        "title": "Ouanahar → Ajelati → Oued In Djaren",
        "body": "Ein Vormittag zwischen monumentalen Felsbögen, dann die Tamezguida-\"Kathedrale\" — eine Sandsteinformation, die ihren Namen zu Recht trägt. Ein Spaziergang im Oued In Djaren, Picknick und Lager in Ajelati für den Sonnenuntergang über den schwarzen Dünen.",
        "stops": [
          {
            "place": "Die Felsbögen",
            "text": "Ein Vormittag zwischen den monumentalen, windgeformten Felsbögen des Tadrart — die meistfotografierten Formationen des Parks."
          },
          {
            "place": "Tamezguida",
            "text": "Die sandsteinerne \"Kathedrale\" des Tadrart."
          },
          {
            "place": "Ajelati",
            "text": "Schwarze Dünen und die letzte Nacht in der Wüste."
          }
        ]
      },
      {
        "day": 7,
        "title": "Ajelati → Tigharghart → Djanet → Heimreise",
        "body": "Zurück nach Tigharghart zu den zwei Gravuren, die jeder sehen möchte: die \"Weinende Kuh\" und der Elefantenfelsen. Rückkehr nach Djanet, dann Transfer zum Flughafen für den Flug nach Norden.",
        "stops": [
          {
            "place": "Tigharghart — die \"Weinende Kuh\"",
            "text": "Die meistfotografierte Gravur der Sahara, ein weinendes Rind, vor Jahrtausenden in eine niedrige Felswand geschlagen."
          },
          {
            "place": "Der Elefantenfelsen",
            "text": "Die zweite berühmte Gravur von Tigharghart, wenige Gehminuten von der ersten entfernt."
          },
          {
            "place": "Djanet und der Flughafen Tiska",
            "text": "Zurück in der Oase für eine Wäsche und ein letztes Essen vor dem Transfer zum Flug nach Norden."
          }
        ]
      }
    ],
    "includes": [
      "Inländischer Hin- und Rückflug Algier ⇄ Djanet (Air Algérie, Direktflug)",
      "Alle Flughafentransfers — in Algier und Djanet",
      "4×4-Fahrzeuge und erfahrene Wüstenfahrer während der gesamten Reise",
      "Lizenzierter Tuareg-Guide aus Djanet",
      "Vollpension — Frühstück, Mittag- und Abendessen jeden Tag",
      "Campingausrüstung: Zelte, Matratzen und Decken",
      "Genehmigungen und Formalitäten für den Nationalpark Tassili n'Ajjer",
      "Trinkwasser in Flaschen während der gesamten Reise",
      "Unterstützende Unterlagen für das Visum bei Ihrer Buchung"
    ],
    "excludes": [
      "Internationale Flüge von und nach Algier",
      "Gebühr für das algerische Visum",
      "Reise- und Krankenversicherung (Pflicht)",
      "Getränke außer Wasser; persönliche Ausgaben",
      "Trinkgelder für Guide, Fahrer und Lagerteam",
      "Kamera- oder Drohnengenehmigungen, sofern erforderlich"
    ],
    "goodToKnow": [
      {
        "label": "Beste Reisezeit",
        "value": "Oktober bis April (die tiefe Sahara wird im Sommer nicht bereist)"
      },
      {
        "label": "Tempo",
        "value": "Angenehm — Fortbewegung im 4×4, kurze Spaziergänge an jedem Ort"
      },
      {
        "label": "Nächte",
        "value": "Wildes Biwak — Zelte, Matratzen und Decken werden gestellt"
      },
      {
        "label": "Gruppe",
        "value": "Kleingruppe oder private Abreise"
      },
      {
        "label": "Kalte Nächte",
        "value": "Echte warme Kleidungsschichten mitbringen — Wüstennächte fallen im Winter fast bis zum Gefrierpunkt"
      },
      {
        "label": "Mobilfunk",
        "value": "Keiner, sobald Sie Djanet verlassen — genau das ist der Sinn der Sache"
      }
    ],
    "faqs": [
      {
        "q": "Ist der Inlandsflug wirklich inklusive?",
        "a": "Ja. Der Preis deckt den Hin- und Rückflug mit Air Algérie zwischen Algier und Djanet, direkt, sowie sämtliche Flughafentransfers an beiden Enden ab. Ihren internationalen Flug nach Algier organisieren Sie selbst; ab dort übernehmen wir alles."
      },
      {
        "q": "Wie anstrengend ist die Reise körperlich?",
        "a": "Moderat. Sie reisen im 4×4, und die Wanderungen sind kurz — hier eine Stunde, dort ein Dünenaufstieg. Die eigentliche Anforderung ist die Bereitschaft zum Camping: sechs Nächte auf einer Matratze im Zelt, Waschen mit dem, was Sie mitbringen, und keine Netzverbindung."
      },
      {
        "q": "Wann ist diese Reise möglich?",
        "a": "Von Oktober bis April. Die tiefe Sahara wird im Sommer nicht bereist, und das klassische Zeitfenster liegt zwischen November und Februar, wenn die Tage warm und klar sind. Die Nächte fallen in dieser Saison nahe an den Gefrierpunkt, echte warme Kleidungsschichten sind also wichtig."
      },
      {
        "q": "Brauche ich ein Visum?",
        "a": "Ja, und dies ist die Route, für die die südliche Einreise gilt — ein organisiertes Sahara-Programm mit Ankunft über Djanet, offen für Reisende jeder Nationalität. Wir bereiten die Unterlagen mit Ihrer Buchung vor; bestätigen Sie die aktuellen Anforderungen bei Ihrem algerischen Konsulat."
      },
      {
        "q": "Wie ist die Gruppe zusammengesetzt?",
        "a": "Klein. Die Rundreise läuft als Kleingruppe oder als private Abreise für Ihre eigene Reisegesellschaft — teilen Sie uns bei der Anfrage mit, was Sie bevorzugen."
      }
    ]
  },
  "ihrir-oasis-7-days": {
    "title": "Ihrir & der Tassili — 7 Tage zwischen Oasen und Ergs",
    "duration": "7 Tage · 6 Nächte",
    "hook": "Alle erwarten, dass die Sahara trocken ist. In Ihrir ist sie es nicht — eine versunkene Oase mit stehendem Wasser, Schilf und Felsbecken, eine Stunde von Dünen entfernt, die bis zum Horizont reichen.",
    "full": true,
    "seoTitle": "Ihrir & Tassili Sahara-Reise — 7 Tage ab Djanet",
    "seoDescription": "Private 7-Tage-Rundreise ab Djanet: die Oase Ihrir, Gueltas, der Erg Admer und Oued Essendilène — Wasser und Dünen im Herzen der Sahara.",
    "overview": "Wenn der Tadrart die Sahara des Sandes ist, dann ist Ihrir die Sahara des Wassers. Diese Rundreise erschließt die Nordseite des Tassili n'Ajjer: eine abgeschlossene Oase, deren Gueltas das ganze Jahr über Wasser führen, eine Schlucht, in der man je nach Saison schwimmen kann, windgeformte Felstürme bei Tikoubaouine und die hohen Dünen des Erg Admer zum Sonnenuntergang. Sechs Nächte unter Zeltplanen draußen, eine bei der Ankunft in einem Gästehaus in Djanet, und der Flug in den Süden ab Algier im Preis inbegriffen. Es ist die ruhigere unserer beiden siebentägigen Djanet-Rundreisen — und diejenige, von der die Menschen am meisten überrascht sind.",
    "highlights": [
      "Die versunkene Oase Ihrir und ihre dauerhaften Gueltas",
      "Felsgravuren und natürliche Wasserbecken bei Idaren und Tasourt",
      "Sonnenuntergang von den hohen Dünen des Erg Admer",
      "Die Schlucht des Oued Essendilène — je nach Saison zum Schwimmen",
      "Die windgeformten Felsformationen von Tikoubaouine",
      "Das Plateau von In Imouroudene",
      "Adaik, das \"kleine Sefar\", und seine Felskunst",
      "Die \"Weinende Kuh\" von Tigharghart und der Elefantenfelsen"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Djanet",
        "body": "Landung in Djanet, dem Tor zum Tassili n'Ajjer, und Empfang durch unser Team. Transfer zum Gästehaus, Zeit zum Ausruhen nach dem Flug und ein geselliges Abendessen, bevor die Rundreise beginnt.",
        "stops": [
          {
            "place": "Flughafen Tiska",
            "text": "Empfang bei der Ankunft am südlichsten Flughafen Algeriens, 30 km von der Oase entfernt."
          },
          {
            "place": "Djanet",
            "text": "Tuareg-Oasenhauptstadt im Südosten — Palmenhaine unter roten Felswänden."
          },
          {
            "place": "Das Gästehaus in Djanet",
            "text": "Die erste Nacht unter einem Dach — ein Hofhaus zwischen den Palmen, und Abendessen mit dem Team, das Sie die ganze Woche begleitet."
          }
        ]
      },
      {
        "day": 2,
        "title": "Djanet → Ihrir → Idaren → Tasourt",
        "body": "Frühstück, dann im 4×4 hinaus ins Tal von Ihrir — eine abgeschlossene Oase, berühmt für ihre natürlichen Gueltas und ihre unerwartet üppige Vegetation. Weiter nach Idaren und Tasourt, um Felsgravuren und weitere natürliche Wasserbecken zu erkunden. Das Lager entsteht, das Abendessen wird am Feuer gekocht, und Sie schlafen im Zelt oder unter den Sternen.",
        "stops": [
          {
            "place": "Ihrir",
            "text": "Eine versunkene Oase, deren Felsbecken das ganze Jahr über Wasser führen."
          },
          {
            "place": "Die Gueltas von Ihrir",
            "text": "Dauerhafte Felsbecken entlang des Schluchtbodens, mit Schilf, Fischen und Vogelleben mitten in der Wüste."
          },
          {
            "place": "Idaren & Tasourt",
            "text": "Felsgravuren und natürliche Becken entlang des Tals."
          }
        ]
      },
      {
        "day": 3,
        "title": "Ihrir → Tilalin → Erg Admer",
        "body": "Frühstück im Camp und ein Spaziergang durch die Gegend von Tilalin, dann die Strecke zum Erg Admer. Aufstieg auf die Dünen für den Sonnenuntergang über dem Erg und Lager mitten in der Wüste.",
        "stops": [
          {
            "place": "Tilalin",
            "text": "Ein Vormittagsspaziergang durch die Felsformationen und Trockentäler der Gegend, bevor die Fahrt weitergeht."
          },
          {
            "place": "Erg Admer",
            "text": "Ein großes Dünenfeld — der Aufstieg für den Sonnenuntergang ist die Belohnung des Tages."
          },
          {
            "place": "Das Lager im Erg",
            "text": "Das Lager im offenen Sand, ohne irgendetwas am Horizont — die leerste Nacht der Rundreise."
          }
        ]
      },
      {
        "day": 4,
        "title": "Erg Admer → Oued Essendilène → Tikoubaouine",
        "body": "Weiter zum Oued Essendilène und ein Spaziergang durch seine Schlucht, wo je nach Saison Schwimmen möglich ist. Picknick, dann weiter nach Tikoubaouine und seinen vom Wind geformten Felsformationen. Lager zwischen den Felsen.",
        "stops": [
          {
            "place": "Oued Essendilène",
            "text": "Eine Schlucht mit dauerhaftem Wasser — je nach Saison zum Schwimmen."
          },
          {
            "place": "Der Schluchtenspaziergang",
            "text": "Eine Stunde zu Fuß die Schlucht hinauf bis zum Wasser, zwischen Wänden, die sich zusehends enger schließen."
          },
          {
            "place": "Tikoubaouine",
            "text": "Türme und Bögen, geformt vom Wind, nicht vom Wasser."
          }
        ]
      },
      {
        "day": 5,
        "title": "In Imouroudene → Adaik",
        "body": "Erkundung des Plateaus von In Imouroudene, ein Panoramaspaziergang und ein Picknick. Weiter nach Adaik — vor Ort das \"kleine Sefar\" genannt wegen seiner Konzentration an Felskunst — mit freier Zeit für den Sonnenuntergang vor dem Abendessen am Biwak.",
        "stops": [
          {
            "place": "In Imouroudene",
            "text": "Ein Plateau mit weitem Blick über den Tassili."
          },
          {
            "place": "Adaik",
            "text": "Das \"kleine Sefar\" — Felskunst ohne den Aufstieg zum Plateau."
          },
          {
            "place": "Sonnenuntergang in Adaik",
            "text": "Freie Zeit auf den Felsen für das letzte Licht, vor dem Abendessen am Biwak."
          }
        ]
      },
      {
        "day": 6,
        "title": "Adaik → Timghas",
        "body": "Frühstück und Fahrt nach Timghas, mit einem Erkundungsspaziergang und Zeit für die Saharaflora, die hier draußen überlebt. Picknick, Lager wird aufgeschlagen, und ein letztes Abendessen unter den Sternen.",
        "stops": [
          {
            "place": "Timghas",
            "text": "Das letzte Lager und ein genauerer Blick auf das, was in der Sahara tatsächlich wächst."
          },
          {
            "place": "Die Saharaflora zu Fuß",
            "text": "Ein Spaziergang, der dem gewidmet ist, was hier draußen wirklich wächst — Akazie, Tamariske, Calotropis und die Pflanzen, die die Tuareg noch heute nutzen."
          },
          {
            "place": "Das letzte Biwak",
            "text": "Ein letztes Abendessen am Feuer unter dem ganzen Himmel, vor der Rückkehr nach Djanet."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timghas → Tigharghart → Djanet → Heimreise",
        "body": "Zurück in Richtung Tigharghart zur Gravur der \"Weinenden Kuh\" und zum Elefantenfelsen, dann Rückkehr nach Djanet und Transfer zum Flughafen für den Heimflug.",
        "stops": [
          {
            "place": "Tigharghart — die \"Weinende Kuh\"",
            "text": "Die meistfotografierte Gravur der Sahara, auf dem Rückweg zur Oase."
          },
          {
            "place": "Der Elefantenfelsen",
            "text": "Die zweite berühmte Gravur von Tigharghart, ein kurzer Spaziergang von der ersten entfernt."
          },
          {
            "place": "Djanet und der Flughafen Tiska",
            "text": "Zurück in der Oase, dann der Transfer zum Flug nach Norden."
          }
        ]
      }
    ],
    "includes": [
      "Inländischer Hin- und Rückflug Algier ⇄ Djanet (Air Algérie, Direktflug)",
      "Alle Flughafentransfers — in Algier und Djanet",
      "4×4-Fahrzeuge und erfahrene Wüstenfahrer während der gesamten Reise",
      "Lizenzierter Tuareg-Guide aus Djanet",
      "Vollpension — Frühstück, Mittag- und Abendessen jeden Tag",
      "Campingausrüstung: Zelte, Matratzen und Decken",
      "Genehmigungen und Formalitäten für den Nationalpark Tassili n'Ajjer",
      "Trinkwasser in Flaschen während der gesamten Reise",
      "Unterstützende Unterlagen für das Visum bei Ihrer Buchung"
    ],
    "excludes": [
      "Internationale Flüge von und nach Algier",
      "Gebühr für das algerische Visum",
      "Reise- und Krankenversicherung (Pflicht)",
      "Getränke außer Wasser; persönliche Ausgaben",
      "Trinkgelder für Guide, Fahrer und Lagerteam",
      "Kamera- oder Drohnengenehmigungen, sofern erforderlich"
    ],
    "goodToKnow": [
      {
        "label": "Beste Reisezeit",
        "value": "Oktober bis April (die tiefe Sahara wird im Sommer nicht bereist)"
      },
      {
        "label": "Tempo",
        "value": "Angenehm — Fortbewegung im 4×4, kurze Spaziergänge an jedem Ort"
      },
      {
        "label": "Nächte",
        "value": "Eine Nacht im Gästehaus in Djanet, danach fünf im wilden Biwak"
      },
      {
        "label": "Gruppe",
        "value": "Kleingruppe oder private Abreise"
      },
      {
        "label": "Schwimmen",
        "value": "Je nach Saison im Oued Essendilène möglich — Badesachen mitbringen"
      },
      {
        "label": "Mobilfunk",
        "value": "Keiner, sobald Sie Djanet verlassen"
      }
    ],
    "faqs": [
      {
        "q": "Wie unterscheidet sich das von der Tadrart-Rundreise?",
        "a": "Gleiche Länge, gleicher Preis, andere Sahara. Der Tadrart ist Sand — rosa Dünen, Felsbögen, der große Erg. Ihrir ist Wasser und Vielfalt: eine dauerhafte Oase, eine schwimmbare Schlucht, windgeformte Türme und ein dunkles Plateau. Reisende, die Dünen wollen, nehmen den Tadrart; Reisende, die Abwechslung wollen, nehmen diese Reise."
      },
      {
        "q": "Kann man wirklich in der Wüste schwimmen?",
        "a": "Im Oued Essendilène, je nach Saison und Wasserstand. Die Gueltas von Ihrir führen das ganze Jahr über Wasser, sind aber nicht immer zum Schwimmen geeignet. Bringen Sie Badesachen mit und lassen Sie den Guide vor Ort entscheiden."
      },
      {
        "q": "Ist der Flug inklusive?",
        "a": "Ja — der Hin- und Rückflug mit Air Algérie zwischen Algier und Djanet sowie alle Flughafentransfers. Ihr internationaler Flug nach Algier ist separat zu buchen."
      },
      {
        "q": "Wie sind die Nächte?",
        "a": "Eine bei der Ankunft im Gästehaus in Djanet, danach fünf im wilden Biwak mit gestellten Zelten, Matratzen und Decken. Die Winternächte in der Sahara sind wirklich kalt — packen Sie entsprechend."
      },
      {
        "q": "Wann findet die Reise statt?",
        "a": "Von Oktober bis April, wobei November bis Februar das klassische Zeitfenster ist. Der tiefe Süden wird im Sommer nicht bereist."
      }
    ]
  },
  "sefar-tassili-trek": {
    "title": "Sefar-Trekking — zu Fuß auf das Tassili-Plateau",
    "duration": "7 Tage · 6 Nächte",
    "hook": "Nach Sefar kann man nicht fahren. Man steigt hinauf und wandert tagelang zwischen bemalten Felswänden, die fünf- bis achttausend Jahre alt sind.",
    "full": true,
    "seoTitle": "Sefar-Trekking Tassili-Plateau — 7 Tage zu Fuß",
    "seoDescription": "Siebentägiges Trekking auf das Tassili-Plateau: Tin Tazarift, Sefar und Djabarren — Jahrtausende alte Felsmalereien, jede Nacht im Biwak.",
    "overview": "Das hier ist die ernsthafte Reise. Von Djanet aus steigt die Piste auf das Tassili-Plateau, und von dort an bestimmt das Gehtempo alles — Guides, Köche und Eseltreiber tragen das Lager, während Sie fünf bis sieben Stunden am Tag zwischen den Felskunststätten zurücklegen. Tin Zoumaitek und das Tal der jahrtausendealten Zypressen, die bemalten \"Tänzer\" von Tin Tazarift, die Masken von Sefar Noir und die großen Götter von Sefar Blanc, schließlich Djabarren, das größte zusammenhängende Ensemble an Malereien im Tassili. Tausende Werke, die eine grüne, von Menschen und Tieren bevölkerte Sahara dokumentieren. Dort oben gibt es keine Fahrzeugunterstützung und kein Mobilfunknetz; es ist ein Trekking, und es ist der Grund, warum ernsthafte Reisende nach Algerien kommen.",
    "highlights": [
      "Der Aufstieg auf das Tassili-Plateau von Tamrit aus",
      "Tin Zoumaitek und das Tal der jahrtausendealten Zypressen",
      "Die bemalten \"Tänzer\" von Tin Tazarift",
      "Die Masken von Sefar Noir und die großen Götter von Sefar Blanc",
      "Prähistorische Felstafeln in Tirassoutine, Tin Kani und Alarendemen",
      "Djabarren — das größte Malereien-Ensemble des Tassili",
      "Jede Nacht Biwak auf dem Plateau"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Djanet → Tassili du Tafilalet",
        "body": "Ankunft in Djanet und Empfang durch das lokale Team. Ein paar Stunden Ruhe nach dem Flug, dann der Transfer Richtung Tassili du Tafilalet, wo die Expedition beginnt und die Guides, Köche und Eseltreiber warten, die Sie die ganze Woche begleiten werden.",
        "stops": [
          {
            "place": "Djanet",
            "text": "Die Tuareg-Oasenhauptstadt im Südosten und die letzte Stadt vor dem Plateau."
          },
          {
            "place": "Tassili du Tafilalet",
            "text": "Wo die Fahrzeuge halten und das Gehen beginnt."
          },
          {
            "place": "Das Trekking-Team",
            "text": "Die Guides, Köche und Eseltreiber, die das Lager tragen und Sie die ganze Woche begleiten — kennengelernt am ersten Abend."
          }
        ]
      },
      {
        "day": 2,
        "title": "Der Aufstieg → Tin Zoumaitek",
        "body": "Der Aufstieg auf das Tassili-Plateau, während die Eseltreams das Lager tragen. Oben angekommen die ersten Felskunststätten bei Tin Zoumaitek und das Tal der jahrtausendealten Zypressen — echte Überlebende der feuchteren Sahara, die die Malereien beschreiben. Erste Nacht im Biwak unter den Sternen.",
        "stops": [
          {
            "place": "Der Aufstieg",
            "text": "Die Steilstufe hinauf auf das Plateau: etwa 7 Stunden Gehzeit, +500 Höhenmeter."
          },
          {
            "place": "Tin Zoumaitek",
            "text": "Die ersten bemalten Stätten und das Tal der jahrtausendealten Zypressen."
          },
          {
            "place": "Das Zypressental",
            "text": "Jahrtausendealte Sahara-Zypressen (Cupressus dupreziana) auf dem Plateau — lebende Überlebende der grünen Sahara, die die Malereien festhalten."
          }
        ]
      },
      {
        "day": 3,
        "title": "In Tinen → Tin Tazarift",
        "body": "Ein Tag, der den Malereien der Felsnadeln von In Tinen gewidmet ist — Jagdszenen, Herden, mythologische Figuren und ein einzigartiges Zeugnis prähistorischen Lebens. Nach dem Mittagessen die berühmte Stätte Tin Tazarift mit ihren emblematischen Figuren, bekannt als \"die Tänzer\".",
        "stops": [
          {
            "place": "In Tinen",
            "text": "Bemalte Felsnadeln: Jagdszenen, Herden und mythologische Figuren."
          },
          {
            "place": "Tin Tazarift",
            "text": "Die \"Tänzer\" — eines der meistreproduzierten Motive der Saharakunst."
          },
          {
            "place": "Biwak zwischen den Felsnadeln",
            "text": "Das Lager wird zwischen den erodierten Sandsteintürmen aufgeschlagen, das Abendessen vom Team gekocht, und das Plateau ist nach Einbruch der Dunkelheit vollkommen still."
          }
        ]
      },
      {
        "day": 4,
        "title": "Tin Teferieste → Sefar Noir → Sefar Blanc",
        "body": "Die bemerkenswerte Stätte von Tin Teferieste, dann die mythische Stadt Sefar selbst: die berühmten Masken von Sefar Noir und die großen Götter von Sefar Blanc. Dieser Bereich gilt als eines der eindrucksvollsten Ensembles an Felsmalerei in der gesamten Sahara.",
        "stops": [
          {
            "place": "Tin Teferieste",
            "text": "Die morgendliche Stätte auf dem Weg nach Sefar — schon für sich bemerkenswert, bevor die berühmten Tafeln folgen."
          },
          {
            "place": "Sefar Noir",
            "text": "Die Masken — die Bilder, für die die Stätte bekannt ist."
          },
          {
            "place": "Sefar Blanc",
            "text": "Die \"großen Götter\", eine der eindrucksvollsten Figurengruppen der Saharakunst."
          }
        ]
      },
      {
        "day": 5,
        "title": "Tirassoutine → Tin Kani → Alarendemen",
        "body": "Die Landschaft verändert sich unterwegs und öffnet sich zu weiten Plateaus in dunkleren Farbtönen. Durchquerung von Tirassoutine und Tin Kani, bevor Alarendemen erreicht wird, wo das Lager aufgeschlagen wird — mit mehreren bemerkenswert gut erhaltenen prähistorischen Malereien, die unterwegs entdeckt werden.",
        "stops": [
          {
            "place": "Die dunklen Plateaus",
            "text": "Die Landschaft öffnet sich zu weiten Hochebenen in tieferen Farbtönen, mit gut erhaltenen bemalten Felstafeln entlang der Durchquerung."
          },
          {
            "place": "Tirassoutine & Tin Kani",
            "text": "Bemalte Felstafeln entlang der Durchquerung."
          },
          {
            "place": "Alarendemen",
            "text": "Das nächtliche Biwak auf dem dunklen Plateau."
          }
        ]
      },
      {
        "day": 6,
        "title": "Djabarren",
        "body": "Ankunft an der berühmten Stätte von Djabarren, die als das größte Ensemble an Felsmalerei im Tassili gilt. Hier sind Tausende Werke katalogisiert, die die verschiedenen Epochen der Saharageschichte veranschaulichen — ein außergewöhnlicher Tag inmitten eines regelrechten Freilichtmuseums.",
        "stops": [
          {
            "place": "Djabarren",
            "text": "Das größte bemalte Ensemble des Tassili — Tausende katalogisierte Werke."
          },
          {
            "place": "Vier Epochen auf einer Wand",
            "text": "Werke aus der Rundkopf-, Rinder-, Pferde- und Kamelperiode nebeneinander — die gesamte Abfolge der Saharageschichte in Farbe."
          },
          {
            "place": "Das letzte Biwak auf dem Plateau",
            "text": "Eine letzte Nacht oben auf dem Tassili vor dem Abstieg am Morgen."
          }
        ]
      },
      {
        "day": 7,
        "title": "Abstieg vom Plateau → Djanet → Heimreise",
        "body": "Ein letzter Morgen auf dem Tassili, dann der Abstieg vom Plateau mit den Guides und Eselteams — derselbe Aufstieg wie am ersten Tag, nun umgekehrt und mit einer Woche in den Beinen. Zurück zu den Fahrzeugen und weiter nach Djanet, dann Transfer zum Flughafen Tiska für den Flug nach Norden.",
        "stops": [
          {
            "place": "Der Abstieg",
            "text": "Hinunter über die Steilstufe, die Sie am ersten Tag hinaufgestiegen sind, zurück zu den wartenden Fahrzeugen."
          },
          {
            "place": "Djanet",
            "text": "Ein letzter Blick auf die Oase vor dem Flughafen."
          },
          {
            "place": "Flughafen Tiska",
            "text": "Der Transfer aus der Oase für den Flug nach Norden."
          }
        ]
      }
    ],
    "includes": [
      "Inländischer Hin- und Rückflug Algier ⇄ Djanet (Air Algérie, Direktflug)",
      "Alle Flughafentransfers — in Algier und Djanet",
      "Vollpension während der gesamten Rundreise",
      "Biwakausrüstung und Lagerlogistik auf dem Plateau",
      "Erfahrene lokale Guides, Köche und Eseltreiber",
      "Esel für den Transport von Lagerausrüstung und Gepäck",
      "Genehmigungen und Formalitäten für den Nationalpark Tassili n'Ajjer",
      "Unterstützende Unterlagen für das Visum bei Ihrer Buchung"
    ],
    "excludes": [
      "Internationale Flüge von und nach Algier",
      "Gebühr für das algerische Visum",
      "Reise- und Krankenversicherung (Pflicht)",
      "Getränke außer Wasser; persönliche Ausgaben",
      "Trinkgelder für Guide, Fahrer und Lagerteam",
      "Kamera- oder Drohnengenehmigungen, sofern erforderlich"
    ],
    "goodToKnow": [
      {
        "label": "Beste Reisezeit",
        "value": "Oktober bis April (die tiefe Sahara wird im Sommer nicht bereist)"
      },
      {
        "label": "Tempo",
        "value": "Anspruchsvoll — 4 bis 7 Stunden Gehzeit täglich, +500 Höhenmeter am ersten Tag"
      },
      {
        "label": "Nächte",
        "value": "Sechs Nächte Lager und Biwak auf dem Plateau"
      },
      {
        "label": "Unterstützung",
        "value": "Guides, Köche und Eseltreiber; auf dem Plateau keine Fahrzeuge"
      },
      {
        "label": "Kondition",
        "value": "Nur für regelmäßige Wanderer — dies ist ein Trekking, keine Fahrt"
      },
      {
        "label": "Mobilfunk",
        "value": "Auf dem Plateau keiner"
      }
    ],
    "faqs": [
      {
        "q": "Wie fit muss ich sein?",
        "a": "Fit genug, um sechs Tage in Folge vier bis sieben Stunden täglich zu gehen, beginnend mit einem Aufstieg von 500 Höhenmetern auf das Plateau und endend mit dem Abstieg. Sie tragen nur einen Tagesrucksack — die Esel bewegen das Lager —, aber es gibt keine Fahrzeugunterstützung und keine Möglichkeit, einen Tag zu verkürzen, sobald Sie oben sind. Regelmäßige Wanderer schaffen das gut; Gelegenheitswanderer finden es hart."
      },
      {
        "q": "Warum kann man nicht nach Sefar fahren?",
        "a": "Der Tassili ist ein Plateau, das nur über einen Aufstieg erreichbar ist, und die Stätten liegen oben darauf. Genau deshalb sind die Malereien in dem Zustand, in dem sie sind, und deshalb fühlen sich die Tage dort oben an wie nirgendwo sonst in Algerien."
      },
      {
        "q": "Wie alt ist die Felskunst?",
        "a": "Die Malereien umfassen etwa fünf- bis achttausend Jahre und dokumentieren eine grüne Sahara, bevölkert von Menschen, Herden und Wildtieren. Allein Djabarren enthält Tausende katalogisierte Werke aus mehreren unterschiedlichen Epochen."
      },
      {
        "q": "Ist der Flug inklusive?",
        "a": "Ja — der Hin- und Rückflug zwischen Algier und Djanet sowie alle Flughafentransfers. Ihr internationaler Flug nach Algier ist separat zu buchen."
      },
      {
        "q": "Wann findet die Reise statt?",
        "a": "Oktober bis April. Das Plateau wird im Sommer nicht bewandert."
      }
    ]
  },
  "algeria-grand-discovery-14-days": {
    "title": "Algeria Grand Discovery — 14 Tage von der Küste in die Sahara",
    "duration": "14 Tage · 13 Nächte",
    "hook": "Die meisten entscheiden sich zwischen dem römischen Algerien und der Sahara. Vierzehn Tage reichen, um diese Entscheidung nicht treffen zu müssen.",
    "full": true,
    "seoTitle": "Algerien Rundreise 14 Tage — Küste & Sahara",
    "seoDescription": "14 Tage Algerien: Kasbah, Timgad, Djémila und Constantine im Norden, Tadrart Rouge und M'Zab-Tal im Süden — vier Direktflüge inklusive.",
    "overview": "Dies ist das ganze Land in einer Reise, so getaktet, dass jeder Inlandsflug ein planmäßiger Direktflug ist — keine Zwischenstopps, keine verlorenen Tage am Flughafen. Sie beginnen in Algier und fliegen noch in derselben Nacht nach Djanet, zu einer viertägigen 4×4-Expedition in den Tadrart Rouge mit zwei Nächten in der Wüste. Danach der römische Osten: Constantine über seiner Schlucht, Timgad, Annaba und Djémila. Zurück in die Hauptstadt für die Kasbah und das Bardo-Museum, weiter westlich nach Tipaza und Cherchell, und schließlich noch einmal südwärts nach Ghardaïa, zu den fünf befestigten Städten des M'Zab und den Dünen von Sebseb. Sechs UNESCO-Weltkulturerbestätten, vier Direktflüge, dreizehn Nächte und ein Nationalguide, der Sie durchgehend begleitet.",
    "highlights": [
      "Vier Tage im Tadrart Rouge mit zwei Wüstenlagern",
      "Die UNESCO-Kasbah von Algier und das Bardo-Museum",
      "Timgad — das \"Pompeji Afrikas\"",
      "Djémila, 900 m hoch auf einem Bergsporn gelegen",
      "Constantine, die Stadt der Brücken, über der Rhumel-Schlucht",
      "Tipaza und das Königsmausoleum von Mauretanien",
      "Die fünf befestigten Ksour des M'Zab-Tals",
      "Die Dünen von Sebseb südlich von Ghardaïa",
      "Die Basilika des Heiligen Augustinus und Hippo Regius in Annaba"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ankunft in Algier → Nachtflug nach Djanet",
        "body": "Ankunft am Flughafen Houari Boumediene, Empfang durch unseren Vertreter, mit einem Tageszimmer zum Frischmachen. Ein Orientierungsspaziergang am Nachmittag — Märtyrerplatz, die Grande Poste, die Uferpromenade —, dann ein frühes Abendessen und der Transfer zum Inlandsterminal für den direkten Nachtflug in den Süden.",
        "stops": [
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Empfang durch unseren Vertreter, mit einem Tageszimmer zum Duschen und Umziehen nach dem internationalen Flug."
          },
          {
            "place": "Märtyrerplatz und die Grande Poste",
            "text": "Der Platz am Fuß der Kasbah und das neomaurische Postamt von 1910 — die beiden Wahrzeichen des Zentrums von Algier."
          },
          {
            "place": "Die Uferarkaden",
            "text": "Die lange weiße Kolonnade über dem Hafen, das Bild von Algier vom Meer aus gesehen, vor dem Transfer zum Nachtflug in den Süden."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tigharghart & der Tadrart Rouge",
        "body": "Treffen mit Ihrem lizenzierten Tuareg-Guide und Aufbruch im 4×4 in den Tadrart Rouge, im Nationalpark Tassili n'Ajjer. Tigharghart, Heimat der weltberühmten Gravur der \"Weinenden Kuh\", dann weiter durch riesige rote Dünen und Sandsteinformationen bis zum Lager tief in der Wüste. Traditionelles Tuareg-Abendessen unter den Sternen.",
        "stops": [
          {
            "place": "Tigharghart",
            "text": "Die \"Weinende Kuh\" — die berühmteste Gravur der Sahara."
          },
          {
            "place": "Der Tadrart Rouge",
            "text": "Riesige rote Dünen und Sandsteintürme im Nationalpark Tassili n'Ajjer, durchquert im 4×4 mit einem lizenzierten Tuareg-Guide."
          },
          {
            "place": "Das Lager tief in der Wüste",
            "text": "Ein traditionelles Tuareg-Abendessen, am Feuer gekocht, und die erste Nacht unter den Sternen."
          }
        ]
      },
      {
        "day": 3,
        "title": "Das Herz des Tadrart",
        "body": "Ein voller Tag inmitten der großen Landschaften des Tadrart Rouge: El Berdj, Moul Naga und der Erg Tin Merzouga, mit prähistorischen Gravuren und Panoramablicken unterwegs. Sonnenuntergang mitten in der Sahara und eine zweite Nacht wildes Camping.",
        "stops": [
          {
            "place": "El Berdj",
            "text": "Tiefe Sandsteinschluchten, deren Wände sowohl Gravuren als auch bemalte Felstafeln tragen."
          },
          {
            "place": "Moul Naga",
            "text": "Majestätische Dünenlandschaft mitten im Tadrart und die Panoramablicke des Tages."
          },
          {
            "place": "Erg Tin Merzouga",
            "text": "Die großen Dünen des Tadrart bei Sonnenuntergang."
          }
        ]
      },
      {
        "day": 4,
        "title": "In Djaren, Tin Abadène & Ouanahar → Djanet",
        "body": "Tiefer in den Park hinein: das Tal von In Djaren, die bei Tin Abadène gravierten Giraffen und Elefanten, Ouanahar, die Tamezguida-\"Kathedrale\" und die Felsbögen. Rückkehr nach Djanet nach Sonnenuntergang.",
        "stops": [
          {
            "place": "Das Tal von In Djaren und seine Bögen",
            "text": "Ein trockenes Tal mit monumentalen, windgeformten Sandsteinbögen — die charakteristischen Formationen des Tadrart."
          },
          {
            "place": "Tin Abadène",
            "text": "Prähistorische Giraffen und Elefanten."
          },
          {
            "place": "Tamezguida",
            "text": "Eine Sandsteinformation, die den Namen \"Kathedrale\" zu Recht trägt."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djanet → Nachtflug nach Constantine",
        "body": "Ein Vormittag im Zeichen des Tuareg-Djanet: das Tassili-Museum — das einzige Tuareg-Museum Algeriens —, der alte Ksar von Azellouaz und der örtliche Markt, mit freier Zeit für Souvenirs. Ein Abschiedsessen von der Sahara, dann der späte Transfer zum Flughafen Tiska.",
        "stops": [
          {
            "place": "Das Tassili-Museum",
            "text": "Das einzige Tuareg-Museum Algeriens — Zeugnisse der Felskunst, Schmuck, Waffen und das Alltagsleben der Kel Ajjer."
          },
          {
            "place": "Der Ksar von Azellouaz",
            "text": "Djanets ältestes Viertel, ein Lehmziegeldorf, das sich über den Palmenhainen auf dem Fels erhebt."
          },
          {
            "place": "Der Markt von Djanet",
            "text": "Der Oasenmarkt für Tuareg-Silber, Leder und Datteln, mit freier Zeit für Souvenirs vor dem Abschiedsessen."
          }
        ]
      },
      {
        "day": 6,
        "title": "Constantine, Stadt der Brücken",
        "body": "Ein entspannter, später Start nach dem Nachtflug, dann die Stadt: der Palast von Ahmed Bey, das Nationalmuseum Cirta, die Hängebrücke Sidi M'Cid und der Steg Mellah Slimane, der Märtyrerplatz und die Altstadt, sowie die Aussichtspunkte über der Rhumel-Schlucht.",
        "stops": [
          {
            "place": "Sidi-M'Cid-Brücke",
            "text": "Hoch über die Rhumel-Schlucht gespannt — das Wahrzeichen von Constantine."
          },
          {
            "place": "Palast von Ahmed Bey",
            "text": "Die bemalten Galerien und Innenhöfe des letzten Bey."
          },
          {
            "place": "Das Nationalmuseum Cirta und die Altstadt",
            "text": "Constantines Sammlung von Archäologie und bildender Kunst, der Märtyrerplatz und die Aussichtspunkte über der Rhumel-Schlucht."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timgad",
        "body": "Ein ganztägiger Ausflug nach Timgad, die von Trajan für Armeeveteranen gegründete römische Stadt, deren Sand sie nahezu unversehrt erhalten hat: der Trajansbogen, das Theater, das Forum und Kapitol, die Thermen und das Straßenraster, das sie zum Lehrbuchbeispiel römischer Stadtplanung machte.",
        "stops": [
          {
            "place": "Timgad",
            "text": "Das \"Pompeji Afrikas\" — ein perfektes römisches Raster, 115 km von Constantine entfernt."
          },
          {
            "place": "Der Trajansbogen",
            "text": "Der dreitorige Bogen über dem Decumanus — das Bild, für das Timgad weltweit bekannt ist."
          },
          {
            "place": "Das Theater, Forum und die Thermen",
            "text": "Ein in den Hang geschlagenes Theater mit 3.500 Plätzen, Kapitol und Forum im Zentrum sowie die Thermenanlagen entlang des Rasters."
          }
        ]
      },
      {
        "day": 8,
        "title": "Constantine → Annaba",
        "body": "Fahrt am Morgen nach Annaba, einer der ältesten Mittelmeerstädte Algeriens: die Basilika des Heiligen Augustinus, die römischen Ruinen von Hippo Regius, die Uferpromenade am Seybouse und die Corniche sowie ein lebendiges Stadtzentrum.",
        "stops": [
          {
            "place": "Die Basilika des Heiligen Augustinus",
            "text": "Die Basilika aus dem 19. Jahrhundert auf dem Hügel über der römischen Stadt, die eine Armreliquie des Augustinus birgt."
          },
          {
            "place": "Hippo Regius",
            "text": "Wo Augustinus Bischof war — die römische Stadt unterhalb der Basilika."
          },
          {
            "place": "Die Corniche und der Cours de la Révolution",
            "text": "Annabas Uferstraße und die von Platanen beschattete zentrale Promenade, auf der sich abends die ganze Stadt trifft."
          }
        ]
      },
      {
        "day": 9,
        "title": "Annaba → Djémila → Algier",
        "body": "Ein früher Start westwärts über die Autobahn nach Djémila: Forum, Basilika, Tempel, Triumphbogen und das Mosaikmuseum des antiken Cuicul, 900 m hoch auf seinem Bergsporn. Dann weiter nach Algier für den Abend.",
        "stops": [
          {
            "place": "Djémila",
            "text": "Eine der besterhaltenen römischen Städte der Welt und eine der schönstgelegenen."
          },
          {
            "place": "Der Bogen des Caracalla",
            "text": "Der Triumphbogen aus dem Jahr 216 n. Chr. am Rand von Cuiculs neuem Forum, 900 m hoch auf seinem Bergsporn."
          },
          {
            "place": "Das Mosaikmuseum von Djémila",
            "text": "Vor Ort erhaltene Mosaiken, die zu den reichsten der römischen Welt zählen, aufbewahrt neben den Häusern, aus denen sie stammen."
          }
        ]
      },
      {
        "day": 10,
        "title": "Algier in voller Länge",
        "body": "Ein ganzer Tag in der Hauptstadt: die von der UNESCO gelistete Kasbah, das Nationalmuseum Bardo, die Basilika Notre-Dame d'Afrique, das Maqam Echahid und die Panoramablicke über die Bucht von Algier.",
        "stops": [
          {
            "place": "Die Kasbah",
            "text": "Die osmanische Zitadelle über der Bucht — verwinkelte Gassen, Innenhöfe und Dachterrassen."
          },
          {
            "place": "Das Nationalmuseum Bardo",
            "text": "Prähistorie und Ethnografie in einer maurischen Villa — Abgüsse saharanischer Felskunst, Silberschmuck und das alltägliche Algerien."
          },
          {
            "place": "Notre-Dame d'Afrique und das Maqam Echahid",
            "text": "Die Basilika auf ihrer Klippe über Bab El Oued und die drei Betonpalmwedel des Märtyrerdenkmals über der Bucht."
          }
        ]
      },
      {
        "day": 11,
        "title": "Tipaza & Cherchell → Nachtflug nach Ghardaïa",
        "body": "Westwärts entlang der Küste zur römischen Stätte von Tipaza, dem Königsmausoleum von Mauretanien und dem archäologischen Museum in Cherchell. Zurück nach Algier zum Abendessen, dann zum Flughafen.",
        "stops": [
          {
            "place": "Tipaza",
            "text": "Eine römische Hafenstadt am Meer, in deren Ruinen Camus spazieren ging."
          },
          {
            "place": "Das Königsmausoleum von Mauretanien",
            "text": "Eine mächtige steinerne Trommel auf dem Hügel über dem Meer — das Grabmal von Juba II. und Cleopatra Selene, der Tochter Kleopatras von Ägypten."
          },
          {
            "place": "Das Archäologische Museum von Cherchell",
            "text": "Die Sammlung des antiken Caesarea an römischen und griechischen Mosaiken und Skulpturen, zu den schönsten Algeriens zählend."
          }
        ]
      },
      {
        "day": 12,
        "title": "Das M'Zab-Tal",
        "body": "Ein voller Tag unter den fünf befestigten Ksour des M'Zab: Ghardaïa, Beni Isguen, Melika, Bounoura und El Atteuf, mit dem traditionellen Markt und der mozabitischen Architektur, deren Logik Le Corbusier faszinierte.",
        "stops": [
          {
            "place": "Markt und Ksar von Ghardaïa",
            "text": "Der von Arkaden gesäumte Marktplatz am Fuß der Hauptstadt und die terrassierten Häuser, die zum Minarett darüber emporsteigen."
          },
          {
            "place": "Beni Isguen",
            "text": "Die ummauerte heilige Stadt der ibaditischen Mozabiten."
          },
          {
            "place": "El Atteuf",
            "text": "Die älteste der fünf Städte."
          }
        ]
      },
      {
        "day": 13,
        "title": "Die Dünen von Sebseb → Abendflug nach Algier",
        "body": "Ein Vormittagsausflug südwärts zu den Dünen von Sebseb — ein letzter Vorgeschmack auf die große Sahara —, dann zurück nach Ghardaïa. Abschiedsessen mit traditioneller algerischer Küche vor dem Abendflug nach Norden.",
        "stops": [
          {
            "place": "Die Straße südwärts durch die Hamada",
            "text": "Die Steinwüste zwischen Ghardaïa und dem Sand — der Übergang, den kaum ein Besucher zu sehen bekommt."
          },
          {
            "place": "Sebseb",
            "text": "Dünen 90 km südlich von Ghardaïa und der letzte Wüstenhorizont der Reise."
          },
          {
            "place": "Ein Abschiedsessen in Ghardaïa",
            "text": "Traditionelle algerische Küche am letzten Abend, vor dem Abendflug nach Norden."
          }
        ]
      },
      {
        "day": 14,
        "title": "Abreise",
        "body": "Frühstück, ein freier Vormittag für Verpasstes oder letzte Einkäufe, dann der private Transfer zum Flughafen Houari Boumediene.",
        "stops": [
          {
            "place": "Ein freier Vormittag in Algier",
            "text": "Was auch immer die zwei Wochen ausgelassen haben — der Jardin d'Essai, die Ketchaoua-Moschee oder einfach die Uferpromenade."
          },
          {
            "place": "Letzte Einkäufe",
            "text": "Kabylischer Silberschmuck, Tuareg-Leder, Deglet-Nour-Datteln und Gebäck, auf der Rue Didouche Mourad oder in den Werkstätten der Kasbah."
          },
          {
            "place": "Flughafen Houari Boumediene",
            "text": "Der private Transfer und Begleitung durch den Check-in für Ihren internationalen Flug."
          }
        ]
      }
    ],
    "includes": [
      "Alle 4 Inlandsflüge (Air Algérie, Economy, ausschließlich Direktflüge) inklusive Steuern",
      "13 Übernachtungen, Doppel-/Zweibettzimmer",
      "Täglich Frühstück",
      "Vollpension während der Djanet-/Sahara-Expedition und der Ghardaïa-Etappe",
      "Alle Transfers und Besichtigungen in privaten klimatisierten Fahrzeugen",
      "4×4-Fahrzeuge im Tassili n'Ajjer",
      "Englischsprachiger Nationalguide während der gesamten Reise; lizenzierte Tuareg-Guides in Djanet",
      "Nationalpark-Genehmigungen und alle aufgeführten Eintrittsgebühren für Stätten und Museen",
      "Vollständige Wüsten-Campingausrüstung und ein eigener Expeditionskoch",
      "Unterstützende Unterlagen/Einladungsschreiben für das Visum",
      "Trinkwasser in Flaschen bei allen Ausflügen"
    ],
    "excludes": [
      "Internationale Flüge von und nach Algier",
      "Gebühr für das algerische Visum",
      "Nicht ausdrücklich genannte Mittag- und Abendessen; Getränke außer Wasser",
      "Trinkgelder für Guides, Fahrer und Lagerteam",
      "Reise- und Krankenversicherung (Pflicht — Nachweis vor Abreise)",
      "Persönliche Ausgaben; Kamera- oder Drohnengenehmigungen, sofern erforderlich",
      "Einzelzimmerzuschlag; früher Check-in oder später Check-out, sofern nicht angegeben"
    ],
    "goodToKnow": [
      {
        "label": "Beste Reisezeit",
        "value": "Oktober bis April (die Sahara-Etappe braucht die kühle Jahreszeit)"
      },
      {
        "label": "Tempo",
        "value": "Ausgefüllt, aber nicht gehetzt — drei Nächte an einem Standort in Constantine und Algier"
      },
      {
        "label": "Nächte",
        "value": "11 im Hotel, 2 im Wüstencamp während der Tadrart-Expedition"
      },
      {
        "label": "Flüge",
        "value": "4 Direkt-Inlandsflüge inklusive, mit Steuern"
      },
      {
        "label": "Gruppe",
        "value": "Kalkuliert für eine Gruppe von 4 Personen im Doppel-/Zweibettzimmer"
      },
      {
        "label": "Guide",
        "value": "Englischsprachiger Nationalguide durchgehend, Tuareg-Guides in Djanet"
      }
    ],
    "faqs": [
      {
        "q": "Sind die Inlandsflüge wirklich alle Direktflüge?",
        "a": "Ja. Die Reiseroute ist bewusst um die planmäßigen Direktverbindungen von Air Algérie getaktet — einschließlich des einmal wöchentlich verkehrenden Fluges Djanet → Constantine —, sodass es keine Zwischenstopps und keine Anschlüsse gibt. Sollte sich der Winterflugplan ändern, passen wir das Programm ohne Mehrkosten an und behalten jede Station bei."
      },
      {
        "q": "Wie viel davon ist Wüste?",
        "a": "Vier Tage, Tag zwei bis fünf, im Tassili n'Ajjer mit zwei Nächten wildem Camping im Tadrart Rouge — eine echte Expedition und kein Dünenausflug. Der Rest ist römisches, osmanisches und mozabitisches Algerien, mit einem abschließenden Sahara-Nachmittag an den Dünen von Sebseb."
      },
      {
        "q": "Sind vierzehn Tage nicht zu lang?",
        "a": "Das ist es, was das Land braucht, wenn man sowohl den römischen Osten als auch die tiefe Sahara ohne Hetzmarsch erleben möchte. Es gibt Drei-Nächte-Standorte in Constantine und Algier sowie zwei in Ghardaïa, sodass das Tempo ausgefüllt statt hektisch ist."
      },
      {
        "q": "Worauf basiert der Preis?",
        "a": "Auf einer Reisegruppe von vier Personen, die gemeinsam reisen und sich Doppel- oder Zweibettzimmer teilen, und er deckt alles unter den Leistungen ab — einschließlich aller vier Inlandsflüge. Teilen Sie uns Ihre Gruppengröße und Ihre Reisedaten mit, und wir bestätigen Ihnen den genauen Preis pro Person schriftlich."
      },
      {
        "q": "Wann sollten wir reisen?",
        "a": "Von Oktober bis April. Die Sahara-Etappe braucht die kühle Jahreszeit, und es ist auch die Zeit, in der die römischen Stätten am angenehmsten zu Fuß zu erkunden sind."
      }
    ]
  }
};

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
  itinerary?: { day: number; title: string; body: string }[];
  includes?: string[];
  excludes?: string[];
  goodToKnow?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
  seoTitle?: string;
  seoDescription?: string;
}

export const TOURS_DE: Record<string, TourDe> = {
  "djanet-sahara-safari": {
    "title": "Sahara-Safari ab Djanet — 5 Tage im Roten Tadrart",
    "duration": "5 Tage · 4 Nächte",
    "hook": "Fünf Tage im Herzen der algerischen Sahara rund um Djanet — roter Sandstein des Tadrart, goldene Dünen, prähistorische Felskunst und Nächte unter den Sternen.",
    "full": true,
    "seoTitle": "Sahara-Reise Djanet 5 Tage — Roter Tadrart",
    "seoDescription": "Private 5-Tage-Reise durch die algerische Sahara ab Djanet: Roter Tadrart, Dünen, Felskunst und Wüstencamp, mit einem lokalen Tuareg-Team.",
    "overview": "Das ist die Sahara, wie man sie sich vorstellt und selten zu sehen bekommt: der Rote Tadrart, ein Labyrinth aus windgeformtem orangefarbenem Sandstein, Naturbögen, Schluchten und Dünen, die sich an schwarzen Fels lehnen. Von Djanet aus, der Tuareg-Oase im Südosten Algeriens, geht es im 4×4 mit einem lokalen Team zu vier Nächten im Camp. Die Tage wechseln zwischen Pisten, kurzen Wanderungen zu jahrtausendealten Felskunststätten und langen Fotopausen im Abendlicht. Die Nächte verbringt man im Camp, am Feuer und beim Tee, ohne Licht und ohne Netz.",
    "highlights": [
      "Der Rote Tadrart und seine orangefarbenen Sandsteinschluchten",
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
        "body": "Treffen mit dem Team in Djanet, dann Aufbruch im 4×4 in die Wüste. Sonnenuntergang über den Dünen und erste Nacht im Camp."
      },
      {
        "day": 2,
        "title": "Der Rote Tadrart",
        "body": "Durchquerung der roten Fels- und Sandtäler des Tadrart mit Fotostopps, bis zum Sonnenuntergang und zur Nacht im Camp."
      },
      {
        "day": 3,
        "title": "Bögen, Gravuren und große Dünen",
        "body": "Ein Tag zwischen Naturbögen, Felskunststätten und Dünenzügen, dem Licht und den Funden folgend."
      },
      {
        "day": 4,
        "title": "Rückweg nach Djanet",
        "body": "Letzter Morgen in der Wüste und Rückfahrt zur Oase, mit einem letzten Camp oder einer Nacht in Djanet."
      },
      {
        "day": 5,
        "title": "Abreise",
        "body": "Freie Zeit in Djanet je nach Flugzeit, dann Transfer zum Flughafen."
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
        "title": "Ankunft in Ghardaïa",
        "body": "Empfang und Unterkunft, dann erste Annäherung an Ghardaïa: die steilen Gassen, der Marktplatz und der Blick über das Tal bei Sonnenuntergang."
      },
      {
        "day": 2,
        "title": "Die Städte des M'Zab",
        "body": "Ein Tag zwischen Beni Isguen, El Atteuf und Melika: Moscheen, Mauern, Friedhöfe und Palmenhaine, erklärt von einem mozabitischen Guide."
      },
      {
        "day": 3,
        "title": "Palmenhaine, Foggaras und Wüste",
        "body": "Vormittag in den Gärten und im Wassersystem des Tals, danach Ausfahrt im 4×4 in die Wüste vor der Abreise."
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
        "body": "Empfang am Flughafen Houari Boumediene und Unterkunft. Erster Eindruck von Bucht und Uferpromenade."
      },
      {
        "day": 2,
        "title": "Algier und die Kasbah",
        "body": "Ein Tag in der Hauptstadt: die Kasbah, die kolonialen Boulevards, die Große Moschee und die Aussichtspunkte über die Bucht."
      },
      {
        "day": 3,
        "title": "Tipaza und Cherchell",
        "body": "Westwärts an der Küste: die römischen Ruinen von Tipaza am Meer, das Königliche Mausoleum von Mauretanien und das Museum von Cherchell."
      },
      {
        "day": 4,
        "title": "Flug nach Ghardaïa und ins M'Zab",
        "body": "Flug in den Süden und Eintritt ins M'Zab-Tal: Ghardaïa, sein Markt und seine amphitheatralischen Gassen."
      },
      {
        "day": 5,
        "title": "Beni Isguen und Abreise",
        "body": "Besuch der heiligen Stadt Beni Isguen mit lokalem Guide, dann Rückreise und Abflug."
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
        "body": "Empfang und Unterkunft, erster Rundgang durch die rote Stadt und Sonnenuntergang über Palmenhain und Salzsenke."
      },
      {
        "day": 2,
        "title": "Die Ksour des Gourara",
        "body": "Ein Tag in den befestigten Dörfern rund um die Oase: überdachte Gassen, Lehmmoscheen und das Leben in den Gärten."
      },
      {
        "day": 3,
        "title": "Foggaras und Palmenhaine",
        "body": "Das System der Foggaras und die Gärten, die sie bewässern, gezeigt von den Männern, die sie bis heute instand halten."
      },
      {
        "day": 4,
        "title": "Der Große Erg und das Camp",
        "body": "Ausfahrt im 4×4 zu den großen Dünen, Sonnenuntergang und Nacht im Wüstencamp."
      },
      {
        "day": 5,
        "title": "Abreise",
        "body": "Rückkehr nach Timimoun und Transfer zum Flughafen."
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
        "body": "Empfang und Unterkunft in der Hauptstadt, erster Kontakt mit Bucht und Uferpromenade."
      },
      {
        "day": 2,
        "title": "Algier und die Kasbah",
        "body": "Die UNESCO-Kasbah, die kolonialen Boulevards, die Große Moschee und die Museen."
      },
      {
        "day": 3,
        "title": "Tipaza und Cherchell",
        "body": "Die römische Küste westlich von Algier: Ruinen am Meer, Königliches Mausoleum und Museum von Cherchell."
      },
      {
        "day": 4,
        "title": "Nach Osten",
        "body": "Fahrt in den Osten über die Hochebenen, durch die Landschaften der Kabylei und die Getreideebenen."
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "Die römische Stadt Djémila in ihrem Hügelkessel — eine der besterhaltenen Stätten Nordafrikas."
      },
      {
        "day": 6,
        "title": "Constantine",
        "body": "Die Brückenstadt: die Rhumel-Schluchten, der Ahmed-Bey-Palast, das Cirta-Museum und die Altstadt."
      },
      {
        "day": 7,
        "title": "Timgad",
        "body": "Timgad, von Trajan gegründete römische Kolonie und die vollständigste erhaltene Schachbrettstadt."
      },
      {
        "day": 8,
        "title": "Richtung Sahara",
        "body": "Fahrt nach Süden und Eintritt in die Welt der Oasen."
      },
      {
        "day": 9,
        "title": "Sahara-Tag",
        "body": "Palmenhaine, Ksour und Dünen, mit einem Abend in der Wüste."
      },
      {
        "day": 10,
        "title": "Rückkehr und Abreise",
        "body": "Rückkehr nach Algier und Transfer zum Flughafen."
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
        "body": "Von Algier an die Westküste: die Ruinen von Tipaza am Meer, das Königliche Mausoleum und das Museum von Cherchell."
      },
      {
        "day": 2,
        "title": "Djémila",
        "body": "Fahrt nach Osten und ein Tag in Djémila: Forum, Tempel, Wohnhäuser und die Mosaike des Museums."
      },
      {
        "day": 3,
        "title": "Timgad",
        "body": "Timgad und sein unversehrtes Schachbrett: Trajansbogen, Theater, Thermen und Bibliothek, vor der Rückkehr."
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
        "body": "Empfang und Unterkunft, erster Eindruck von Uferpromenade und Zentrum."
      },
      {
        "day": 2,
        "title": "Oran",
        "body": "Das Fort Santa Cruz, die Altstadt, der Hafen und die spanische und französische Stadt."
      },
      {
        "day": 3,
        "title": "Mostaganem",
        "body": "Ostwärts an der Küste: Strände, das alte Viertel Tigditt und Bordj Ettork."
      },
      {
        "day": 4,
        "title": "Tlemcen",
        "body": "Andalusischer Tag: Große Moschee, Mansourah, El Mechouar und Sidi Boumediene."
      },
      {
        "day": 5,
        "title": "El Ourit und Abreise",
        "body": "Die Wasserfälle von El Ourit und das Plateau Lalla Setti vor dem Transfer."
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
        "body": "Die Brückenstadt: die Sidi-M'Cid-Brücke, die Schluchten, der Ahmed-Bey-Palast, das Cirta-Museum und die Altstadt."
      },
      {
        "day": 2,
        "title": "Timgad",
        "body": "Fahrt nach Süden und ein Tag in Timgad: der vollständige römische Grundriss, der Trajansbogen, das Theater und das Mosaikmuseum."
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
        "body": "Ankunft in Algier und Transfer nach Constantine: die Hängebrücken über der Rhumel-Schlucht, die Emir-Abdelkader-Moschee und die Altstadt Souika. Übernachtung in Constantine."
      },
      {
        "day": 2,
        "title": "Von Constantine nach Sétif",
        "body": "Fahrt nach Sétif und zu den römischen UNESCO-Ruinen von Djémila mit Forum, Tempeln und Mosaiken, danach das Stadtzentrum von Sétif mit dem Brunnen Aïn El Fouara. Übernachtung in Sétif."
      },
      {
        "day": 3,
        "title": "Von Sétif nach Batna",
        "body": "Weiter nach Batna und in die römische UNESCO-Stadt Timgad: der Trajansbogen, die Bibliothek und das Theater, mit Zeit für das örtliche Erbe. Übernachtung in Batna."
      },
      {
        "day": 4,
        "title": "Von Batna über Biskra nach Bou Saada",
        "body": "Über Biskra, das Tor zur Sahara, mit seinen Palmenhainen und Oasenlandschaften, dann weiter nach Bou Saada und auf seine traditionellen Märkte. Übernachtung in Bou Saada."
      },
      {
        "day": 5,
        "title": "Von Bou Saada nach Algier",
        "body": "Besuch der Zawiya von El Hamel über der Stadt und des umliegenden Erbes, dann Transfer nach Algier und ein freier Abend. Übernachtung in Algier."
      },
      {
        "day": 6,
        "title": "Béjaïa und Abreise",
        "body": "Tagesausflug nach Béjaïa: das Fort Gouraya, das Cap Carbon und die Küstenblicke, danach Transfer zum Flughafen."
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
    "seoDescription": "Private 6-Tage-Reise durch zwei Saharawelten: der Rote Tadrart und die Felskunst des Tassili bei Djanet, dann die UNESCO-Städte des M'Zab-Tals bei Ghardaïa.",
    "overview": "Die definitive Sahara-Reise Algeriens, die die beiden großen Wüstenwelten des Landes verbindet. Rund um Djanet erkunden Sie den skulptierten roten Fels des Tadrart und die prähistorischen Galerien des Tassili n'Ajjer und verbringen die Nächte im Wüstencamp mit einem Tuareg-Team. Dann geht es nordwärts nach Ghardaïa und ins UNESCO-gelistete M'Zab-Tal, dessen befestigte Oasenstädte ihr mittelalterliches Leben unversehrt bewahrt haben. Zwei UNESCO-Saharas auf einer Reise, im 4×4 und unter den Sternen.",
    "highlights": [
      "Der Rote Tadrart und seine Felsformationen",
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
        "body": "Empfang am Flughafen von Djanet und Transfer zum Gästehaus oder Camp, dann eine erste Ausfahrt zum Sonnenuntergang in den nahen Dünen und ein traditionelles saharisches Abendessen."
      },
      {
        "day": 2,
        "title": "Der Rote Tadrart",
        "body": "Ein 4×4-Tag im Tadrart zwischen Felsformationen und jahrtausendealten Gravuren, mit Picknick in der Wüste, Sonnenuntergang über den roten Dünen und einer Nacht im Camp unter Sternen."
      },
      {
        "day": 3,
        "title": "Tassili n'Ajjer",
        "body": "Das Tassili-Plateau und seine Felsmalereien: Wanderungen durch Schluchten und Sandsteinlandschaften, dann Abendessen und Nacht im Camp."
      },
      {
        "day": 4,
        "title": "Oasen und Wüstenkultur",
        "body": "Besuch einer Oase und ihrer Palmenhaine, Begegnung mit einer Tuareg-Gemeinschaft bei einer Teezeremonie, dann Rückkehr nach Djanet zur Übernachtung."
      },
      {
        "day": 5,
        "title": "Transfer nach Ghardaïa",
        "body": "Reise nach Ghardaïa ins M'Zab-Tal, Bezug eines traditionellen Gästehauses und ein Abendspaziergang durch die Altstadt."
      },
      {
        "day": 6,
        "title": "M'Zab-Tal und Abreise",
        "body": "Besuch von Beni Isguen, El Atteuf und Melika mit ihren Moscheen, Souks und Werkstätten, dann Mittagessen und Transfer zum Flughafen."
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
        "body": "Empfang am Flughafen und Transfer, dann das Nationalmuseum Bardo, ein Spaziergang durch die UNESCO-Kasbah und das Märtyrerdenkmal mit seinem Blick über die Hauptstadt."
      },
      {
        "day": 2,
        "title": "Tipaza und Cherchell",
        "body": "Westwärts an der Küste zu den römischen Ruinen von Tipaza und dem Königlichen Mausoleum von Mauretanien, dann das Museum von Cherchell und der alte Hafen."
      },
      {
        "day": 3,
        "title": "Constantine und Timgad",
        "body": "Ostwärts nach Constantine mit seinen Hängebrücken und dem Ahmed-Bey-Palast, dann weiter zur römischen Stadt Timgad."
      },
      {
        "day": 4,
        "title": "Djémila und Sétif",
        "body": "Die römische UNESCO-Stadt Djémila mit Forum, Theater und Mosaiken, danach der Brunnen Aïn El Fouara in Sétif."
      },
      {
        "day": 5,
        "title": "Bou Saada und Rückkehr",
        "body": "Südwärts nach Bou Saada, dem Tor zur Sahara, mit seiner Oase und einer Wüstenexkursion in den Dünen, bevor es zurück nach Algier geht."
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
        "body": "Das Bardo-Museum und seine Sammlungen, Notre-Dame d'Afrique über der Bucht und das Märtyrerdenkmal."
      },
      {
        "day": 2,
        "title": "Tipaza und Cherchell",
        "body": "Das Königliche Mausoleum von Mauretanien, der römische Archäologiepark von Tipaza und das Museum von Cherchell."
      },
      {
        "day": 3,
        "title": "Bou Saada",
        "body": "Südwärts nach Bou Saada: die Festung und ihre Panoramen, das Museum des Malers Nasreddine Dinet und die historische Moschee der Altstadt."
      },
      {
        "day": 4,
        "title": "Algier",
        "body": "Zurück in Algier: die UNESCO-Kasbah, der Botanische Garten von Hamma und das Museum der Mudschahidin."
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
        "body": "Empfang am Flughafen, Bezug eines Hotels im Stadtzentrum, abendlicher Stadtrundgang und Abendessen."
      },
      {
        "day": 2,
        "title": "Kulturtag in Algier",
        "body": "Das Bardo-Museum, die UNESCO-Kasbah und das Märtyrerdenkmal (Maqam Echahid)."
      },
      {
        "day": 3,
        "title": "Tipaza und Cherchell",
        "body": "Das Königliche Mausoleum von Mauretanien, der Archäologiepark von Tipaza und das Museum von Cherchell."
      },
      {
        "day": 4,
        "title": "Constantine",
        "body": "Die Sidi-M'Cid-Brücke, der Ahmed-Bey-Palast, die Emir-Abdelkader-Moschee und ein Stadtspaziergang."
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "Die römische UNESCO-Stätte Djémila mit Theater, Tempeln und Mosaiken, dazu ein lokales Mittagessen."
      },
      {
        "day": 6,
        "title": "Nach Bou Saada",
        "body": "Die Straße von Constantine nach Bou Saada, Bezug der Unterkunft und freie Zeit, abends ein traditionelles Essen mit lokaler Musik."
      },
      {
        "day": 7,
        "title": "Bou Saada und Rückkehr",
        "body": "Der Wasserfall von Bou Saada, die Ferrero-Mühle und die Zawiya von El Hamel, dann die Rückkehr nach Algier."
      },
      {
        "day": 8,
        "title": "Abreise",
        "body": "Frühstück, Check-out und Transfer zum Flughafen von Algier."
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
        "body": "Empfang am Flughafen, Check-in im Hotel und ein Willkommensabendessen."
      },
      {
        "day": 2,
        "title": "Tipaza und Cherchell",
        "body": "Die römischen Ruinen und das Theater von Tipaza, das Königliche Mausoleum von Mauretanien, das Museum von Cherchell und die Küstenblicke."
      },
      {
        "day": 3,
        "title": "Historisches Algier",
        "body": "Die UNESCO-Kasbah, das Märtyrerdenkmal und das Nationale Armeemuseum."
      },
      {
        "day": 4,
        "title": "Fahrt nach Sétif",
        "body": "Transfer nach Sétif und zu den römischen Ruinen von Djémila mit ihren Mosaiken; Übernachtung in Sétif."
      },
      {
        "day": 5,
        "title": "Constantine",
        "body": "Die Hängebrücken von Constantine, die Emir-Abdelkader-Moschee und der Ahmed-Bey-Palast; Übernachtung in Constantine."
      },
      {
        "day": 6,
        "title": "Batna und Timgad",
        "body": "Fahrt nach Batna und in die römische UNESCO-Stadt Timgad: Trajansbogen, Bibliothek und Theater; Übernachtung in Batna."
      },
      {
        "day": 7,
        "title": "Fahrt nach Ghardaïa",
        "body": "Lange Etappe nach Süden ins M'Zab-Tal, Bezug eines traditionellen Gästehauses und ein freier Abend."
      },
      {
        "day": 8,
        "title": "Kulturtag in Ghardaïa",
        "body": "Die Städte El Atteuf, Beni Isguen und Melika mit ihren Moscheen und ihrer Architektur, die Souks und ein Mittagessen bei einer Familie."
      },
      {
        "day": 9,
        "title": "Rückkehr nach Algier",
        "body": "Rückreise nach Algier mit dem Botanischen Garten von Hamma, dem Bardo-Museum und Notre-Dame d'Afrique."
      },
      {
        "day": 10,
        "title": "Abreise",
        "body": "Frühstück und Transfer zum Flughafen."
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
        "body": "Morgendliche Abfahrt in Algier, Check-in im Hotel, dann der Nachmittag am natürlichen Wasserfall, an der historischen Ferrero-Mühle und auf den traditionellen Märkten, abends ein Essen im Beduinenstil mit lokaler Musik."
      },
      {
        "day": 2,
        "title": "Die Zawiya von El Hamel und Rückkehr",
        "body": "Nach dem Frühstück Besuch der Sufi-Zawiya von El Hamel in den Bergen, mit Zeit für Fotos und die Landschaft, dann ein lokales Mittagessen in Bou Saada und am Nachmittag die Rückfahrt nach Algier."
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
        "body": "Abholung in Algier, geführter Besuch der historischen Festung und ihres Museums, ein Spaziergang entlang der Corniche am Cap Carbon, Strandzeit in Les Aiguades und ein traditionelles Mittagessen vor der Rückfahrt."
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
        "body": "Abholung am Hotel und private Fahrt nach Tipaza zur geführten Besichtigung von Forum, Thermen und antiken Vierteln, dann weiter nach Cherchell — dem antiken Caesarea — mit seinem Museum römischer Statuen und Mosaiken und einem kurzen Spaziergang durch die Altstadt, vor der Rückfahrt."
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
        "body": "Eine geführte Tagesrunde durch das alte Viertel der Kasbah, die Sammlungen des Nationalmuseums Bardo und das Märtyrerdenkmal, mit einem traditionellen Mittagessen in einem lokalen Restaurant zwischen den Besuchen."
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
        "body": "Abholung am Hotel oder Flughafen, dann ein geführter Tag zu drei Sehenswürdigkeiten: der botanische Garten von Hamma, die Basilika Notre-Dame d'Afrique auf ihrem Hügel über dem Mittelmeer und das Armeemuseum, mit einem traditionellen Mittagessen unterwegs, vor der Rückfahrt."
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
        "body": "Treffen mit dem Guide am Meer, am Fuß der Kasbah, dann der Aufstieg über den Märtyrerplatz mit seiner historischen Moschee, den Mustafa-Pascha-Palast, eine Panoramaterrasse, die Zitadelle und das Haus der Unabhängigkeitsfigur Ali La Pointe, mit Abschluss am Rais-Palast am Meer."
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
  }
};

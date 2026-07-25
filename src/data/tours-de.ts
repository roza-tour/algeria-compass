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
    "hook": "Sechs Tage durch den Osten des Landes — die Brücken von Constantine, die römischen Städte Djémila und Timgad, ein Sahara-Tor bei Bou Saada und ein Tag in Béjaïa."
  },
  "djanet-ghardaia-desert-2-days": {
    "title": "Djanet und Ghardaïa — 6 Tage Wüste und Kulturerbe",
    "duration": "6 Tage · 5 Nächte",
    "hook": "Sechs Tage, die beide Gesichter der algerischen Sahara verbinden: die UNESCO-Städte des M'Zab und die große Wüste rund um Djanet."
  },
  "algeria-intensive-discovery-tour": {
    "title": "Algerien intensiv entdecken — 5 Tage",
    "duration": "5 Tage · 4 Nächte",
    "hook": "Fünf Tage in zügigem Tempo, um möglichst viel vom Land zu sehen: Hauptstadt, römische Küste und ein erster Eindruck der Sahara."
  },
  "the-soul-of-algeria": {
    "title": "Die Seele Algeriens — 4 Tage",
    "duration": "4 Tage · 3 Nächte",
    "hook": "Vier Tage zwischen Hauptstadt, römischer Küste und Hinterland, um eher den Charakter des Landes als eine Liste von Sehenswürdigkeiten zu erfassen."
  },
  "the-culture-and-heritage-of-algeria": {
    "title": "Kultur und Kulturerbe Algeriens — 8 Tage",
    "duration": "8 Tage · 7 Nächte",
    "hook": "Acht Tage durch Kultur und Geschichte Algeriens — die Hauptstadt und ihre Kasbah, Tipaza und Djémila, die Brücken von Constantine und die Oase Bou Saada."
  },
  "algeria-beyond-expectations": {
    "title": "Algerien jenseits der Erwartungen — 10 Tage",
    "duration": "10 Tage · 9 Nächte",
    "hook": "Zehn Tage für das Land in seiner ganzen Weite, von der Mittelmeerküste bis zu den Sahara-Oasen, in einem Tempo, das Zeit zum Schauen lässt."
  },
  "bousaada-desert-tour": {
    "title": "Bou Saada — 2 Tage in der Oase",
    "duration": "2 Tage · 1 Nacht",
    "hook": "Zwei Tage in Bou Saada, der Stadt des Glücks — Wasserfall und historische Ferrero-Mühle, Handwerksmärkte, ein Beduinen-Abendessen und die Zawiya von El Hamel."
  },
  "tour-bejaia-historic": {
    "title": "Béjaïa — die historische Stadt am Meer (Tagesausflug)",
    "duration": "1 Tag",
    "hook": "Ein Tag an der Küste in Béjaïa — Festung und Museum, die Corniche am Cap Carbon und der Sand von Les Aiguades, mit Mittagessen am Mittelmeer."
  },
  "private-guided-tour": {
    "title": "Tipaza und Cherchell — privater römischer Tag",
    "duration": "1 Tag",
    "hook": "Ein privater Tag an der römischen Küste westlich von Algier — die Ruinen von Tipaza am Meer und das Museum des antiken Caesarea in Cherchell."
  },
  "algiers-city-tour-casbah-bardo-martyrsmemorial": {
    "title": "Algier an einem Tag — Kasbah, Bardo und Märtyrerdenkmal",
    "duration": "1 Tag",
    "hook": "Ein ganzer Tag in der Hauptstadt — die UNESCO-Kasbah, das Bardo-Museum und das Märtyrerdenkmal über der Bucht."
  },
  "algierstour-hammagarden-notredame-dafrique": {
    "title": "Algier — Hamma-Garten und Notre-Dame d'Afrique",
    "duration": "1 Tag",
    "hook": "Ein Tag in Algier zwischen dem Versuchsgarten von Hamma und der Basilika Notre-Dame d'Afrique, mit den schönsten Blicken über die Bucht."
  },
  "day-tour-algeria-culture": {
    "title": "Algier — Kulturspaziergang durch die Kasbah",
    "duration": "1 Tag",
    "hook": "Ein Tag zu Fuß durch die Kasbah von Algier, ihre Gassen, osmanischen Paläste und Dachterrassen, mit einem Guide, der dort aufgewachsen ist."
  }
};

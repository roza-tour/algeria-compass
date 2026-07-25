// German versions of the destination guides — same contract as destinations-fr.ts.
// Photography and coordinates are read from the English collection at build time,
// so every language version shows the same picture of the same place.

export interface DestDe {
  slug: string;          // German URL segment
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

export const DESTINATIONS_DE: DestDe[] = [
  {
    "slug": "timgad",
    "en": "timgad",
    "name": "Timgad",
    "eyebrow": "Welterbe · Batna",
    "intro": "Die vollständigste erhaltene römische Schachbrettstadt, um 100 n. Chr. von Trajan gegründet und oft das Pompeji Afrikas genannt.",
    "quick": "Timgad, das antike Thamugadi, ist eine um 100 n. Chr. von Kaiser Trajan für seine Veteranen gegründete römische Kolonie in der Provinz Batna. Jahrhundertelang vom Sand bedeckt, hat sie ihren Schachbrettgrundriss unversehrt bewahrt: den Trajansbogen, das Theater, das Forum, die Thermen und eine öffentliche Bibliothek. Seit 1982 gehört sie zum UNESCO-Welterbe.",
    "sections": [
      {
        "h": "Warum Timgad einzigartig ist",
        "p": "Die meisten römischen Städte wurden wieder besiedelt, abgerissen und überbaut. Timgad dagegen wurde aufgegeben und vom Sand überdeckt, was den ursprünglichen Grundriss konservierte. Das römische Militärraster ist bis heute vollständig lesbar: Cardo und Decumanus, die regelmäßigen Insulae, die Tore und die Mauer. Diese Lesbarkeit — mehr als die Höhe der Reste — macht die Stätte außergewöhnlich."
      },
      {
        "h": "Was man sieht",
        "p": "Der Trajansbogen im Westen ist das Wahrzeichen. Das an den Hang gebaute Theater beherbergt im Sommer noch immer ein Festival. Forum, Nord- und Südthermen, der Markt des Sertius und vor allem die öffentliche Bibliothek — eine der wenigen bekannten der römischen Welt — gliedern den Rundgang. Das Museum vor Ort bewahrt eine bemerkenswerte Sammlung von Mosaiken aus den Wohnhäusern."
      },
      {
        "h": "Der Kontext: das Aurès-Gebirge",
        "p": "Timgad liegt am Fuß des Aurès, des Berbergebirges der Chaoui, das Ostalgerien prägt. Rund zwanzig Kilometer entfernt steht das numidische Mausoleum von Imedghassen, älter als die römische Präsenz — eine Erinnerung daran, dass die Region lange vor Rom eigene Königreiche hatte."
      },
      {
        "h": "Anreise",
        "p": "Timgad liegt etwa 35 km östlich von Batna, eine halbe Stunde Fahrt. Batna hat einen Flughafen mit Verbindungen ab Algier und ist auch über die Ost-West-Autobahn erreichbar. Die Stätte ist weitläufig und schattenlos: festes Schuhwerk, Hut und Wasser, und am besten im Frühjahr oder Herbst."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "Batna"
      },
      {
        "label": "Gründung",
        "value": "Um 100 n. Chr., durch Trajan"
      },
      {
        "label": "UNESCO",
        "value": "Seit 1982"
      },
      {
        "label": "Dauer",
        "value": "Ein halber Tag"
      },
      {
        "label": "Beste Zeit",
        "value": "März–Juni, September–November"
      }
    ],
    "faqs": [
      {
        "q": "Warum heißt Timgad das Pompeji Afrikas?",
        "a": "Weil die Stadt wie Pompeji unter einer Decke konserviert wurde — Sand statt Asche — und weil hier ein vollständiger Stadtgrundriss erhalten ist statt einzelner Monumente."
      },
      {
        "q": "Wie viel Zeit braucht man?",
        "a": "Ein halber Tag für Stätte und Museum. Zusammen mit dem Mausoleum von Imedghassen und einem Abstecher ins Aurès füllt sich der Tag."
      },
      {
        "q": "Sind viele Besucher dort?",
        "a": "Sehr wenige. Es ist normal, die Stätte zu durchstreifen und dabei nur einer Handvoll Menschen zu begegnen — anderswo im Mittelmeerraum kaum noch denkbar."
      },
      {
        "q": "Ist ein Tagesausflug ab Algier möglich?",
        "a": "Er ist sehr lang: rund 450 km. Besser in Batna oder Constantine übernachten oder Timgad in eine Rundreise durch den Osten einbinden."
      }
    ],
    "seoTitle": "Timgad, Algerien: die römische UNESCO-Stadt",
    "seoDescription": "Timgad, von Trajan gegründete römische Stadt und UNESCO-Welterbe: Trajansbogen, Theater, Bibliothek und unversehrtes Schachbrett-Stadtbild."
  },
  {
    "slug": "djemila",
    "en": "djemila",
    "name": "Djémila",
    "eyebrow": "Welterbe · Sétif",
    "intro": "Cuicul, römische Stadt in einem Hügelkessel auf 900 Metern — eines der besterhaltenen Ensembles Nordafrikas.",
    "quick": "Djémila, das antike Cuicul, ist eine römische Stadt in der Provinz Sétif, auf einem Sporn zwischen zwei Wadis in 900 Metern Höhe. Im 1. Jahrhundert gegründet, bewahrt sie ein Forum, Tempel, Basiliken, Wohnhäuser mit Mosaiken und ein spätchristliches Ensemble. Seit 1982 gehört sie zum UNESCO-Welterbe.",
    "sections": [
      {
        "h": "Die Stätte und ihre Lage",
        "p": "Djémila verdankt seinen heutigen Namen — arabisch „die Schöne“ — der Lage. Die Stadt folgt einem bewegten Relief, was sie vom theoretischen römischen Raster löst und einen Grundriss ergibt, der sich dem Berg anpasst: abschüssige Straßen, versetzte Plätze, terrassierte Viertel. Das Ergebnis ist malerischer und lesbarer als bei vielen Stätten in der Ebene."
      },
      {
        "h": "Was man sieht",
        "p": "Das Severerforum und der Caracalla-Bogen bilden den monumentalen Kern. Der Tempel der severischen Familie, das außerhalb der Mauern in den Hang gegrabene Theater, der Markt des Cosinius mit seinen Maßtischen, die Thermen und die christlichen Basiliken vervollständigen das Ensemble. Das Museum vor Ort beherbergt eine der schönsten Sammlungen römischer Mosaike Nordafrikas."
      },
      {
        "h": "Der Kontext: die Hochebenen",
        "p": "Djémila gehört zu Sétif, dem antiken Sitifis, römischer Regionalhauptstadt und später Stadt der Getreidehochebenen. Die Region ist kühl, im Frühjahr grün und in manchen Wintern verschneit — ein nützlicher Kontrast zum Sahara-Bild Algeriens."
      },
      {
        "h": "Anreise",
        "p": "Djémila liegt etwa 50 km nordöstlich von Sétif an einer Bergstraße. Sétif erreicht man per Flug ab Algier, mit der Bahn oder über die Ost-West-Autobahn. Die Stätte lässt sich in zwei bis drei Stunden besichtigen, Museum inbegriffen; die Höhe macht die Vormittage außerhalb des Sommers kühl."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "Sétif"
      },
      {
        "label": "Antiker Name",
        "value": "Cuicul"
      },
      {
        "label": "UNESCO",
        "value": "Seit 1982"
      },
      {
        "label": "Höhe",
        "value": "Etwa 900 m"
      },
      {
        "label": "Dauer",
        "value": "2–3 Stunden"
      }
    ],
    "faqs": [
      {
        "q": "Djémila oder Timgad?",
        "a": "Wenn möglich beide. Timgad beeindruckt durch die Vollständigkeit des Grundrisses, Djémila durch Lage und Mosaike. Sie liegen etwa drei Autostunden auseinander."
      },
      {
        "q": "Lohnt das Museum?",
        "a": "Unbedingt. Die Mosaike von Djémila gehören zu den schönsten erhaltenen Nordafrikas und erhellen den Alltag der Stadt."
      },
      {
        "q": "Wann besuchen?",
        "a": "Im Frühjahr und Herbst. Auf 900 Metern sind die Winter kalt und feucht, und die Sommer können mittags heiß werden."
      },
      {
        "q": "Braucht man einen Guide?",
        "a": "Sehr zu empfehlen: Die Beschilderung ist minimal, und die dem Relief angepasste Struktur der Stadt erschließt sich mit Erklärungen deutlich besser."
      }
    ],
    "seoTitle": "Djémila, Algerien: die römische Stadt Cuicul (UNESCO)",
    "seoDescription": "Djémila (Cuicul), römische UNESCO-Stadt in der Provinz Sétif: Severerforum, Caracalla-Bogen, Theater und Mosaike. Was man sieht und wie man hinkommt."
  },
  {
    "slug": "tipaza",
    "en": "tipaza",
    "name": "Tipaza",
    "eyebrow": "Welterbe · Tipaza",
    "intro": "Römische und punische Ruinen direkt am Mittelmeer, eine Stunde von Algier — die zugänglichste archäologische Stätte des Landes.",
    "quick": "Tipaza ist eine archäologische Stätte an der algerischen Küste, rund 70 km westlich von Algier. Aus einem punischen Handelsplatz wurde eine römische Kolonie; erhalten sind ein Theater, Basiliken, Thermen und Nekropolen unmittelbar am Meer. Seit 1982 gehört die Stätte zusammen mit dem nahen Königlichen Mausoleum von Mauretanien zum UNESCO-Welterbe.",
    "sections": [
      {
        "h": "Eine Stätte am Meer",
        "p": "Was Tipaza auszeichnet, ist die Lage: Die Ruinen reichen bis an Fels und Wasser, sodass man eine antike Stätte mit dem Mittelmeer als ständigem Hintergrund besichtigt. Albert Camus, der oft herkam, schrieb hier einen seiner bekanntesten Texte, Hochzeit in Tipasa."
      },
      {
        "h": "Was man sieht",
        "p": "Der archäologische Park vereint Theater, Amphitheater, Thermen, die Alexander-Basilika und die große christliche Basilika sowie den Decumanus, der die Stadt durchquert. Das Museum zeigt Mosaike und Funde aus den Grabungen. Wenige Kilometer entfernt beherrscht auf dem Höhenrücken das Königliche Mausoleum von Mauretanien — ein weitläufiges, gestuftes Rundgrab, das Juba II. und Kleopatra Selene zugeschrieben wird — die Ebene."
      },
      {
        "h": "Der Kontext: Cherchell",
        "p": "Rund dreißig Kilometer weiter westlich liegt Cherchell, das antike Caesarea, Hauptstadt der Mauretania Caesariensis. Sein archäologisches Museum bewahrt bedeutende Skulpturen und Mosaike und lässt sich gut mit Tipaza an einem Tag verbinden."
      },
      {
        "h": "Anreise",
        "p": "Tipaza liegt etwa eine Autostunde von Algier entfernt an der Küste und ist damit der einfachste Tagesausflug ab der Hauptstadt. Die Stätte liegt im Freien und bietet wenig Schatten: Hut, Wasser und festes Schuhwerk. Frühjahr und Herbst sind die besten Zeiten."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "Tipaza"
      },
      {
        "label": "Entfernung Algier",
        "value": "Etwa 70 km"
      },
      {
        "label": "UNESCO",
        "value": "Seit 1982"
      },
      {
        "label": "Kombinieren mit",
        "value": "Cherchell und dem Königlichen Mausoleum"
      },
      {
        "label": "Dauer",
        "value": "Ein halber Tag"
      }
    ],
    "faqs": [
      {
        "q": "Ist ein Tagesausflug ab Algier möglich?",
        "a": "Ja, das ist der klassische Ausflug: eine Stunde Fahrt, ein halber Tag auf der Stätte, Rückkehr am Nachmittag. Mit Cherchell wird der Tag vollständig."
      },
      {
        "q": "Was ist das Königliche Mausoleum von Mauretanien?",
        "a": "Ein monumentales, gestuftes Rundgrab auf dem Höhenrücken über der Küste, traditionell König Juba II. und seiner Frau Kleopatra Selene zugeschrieben, der Tochter Kleopatras VII. und Marcus Antonius'."
      },
      {
        "q": "Kann man in Tipaza baden?",
        "a": "Die Küste ringsum hat Strände, und die Gegend ist im Sommer ein Badeziel für Algerier. Zum Besuch der archäologischen Stätte gehört das Baden nicht."
      },
      {
        "q": "Braucht man einen Guide?",
        "a": "Die Stätte lässt sich gut allein erkunden, doch ein Guide liefert die punische, römische und dann christliche Abfolge, die vor Ort nicht leicht zu lesen ist."
      }
    ],
    "seoTitle": "Tipaza, Algerien: römische Ruinen am Meer",
    "seoDescription": "Tipaza, römische UNESCO-Stätte am Mittelmeer eine Stunde von Algier: Theater, Basiliken, Königliches Mausoleum von Mauretanien und Museum von Cherchell."
  },
  {
    "slug": "mzab-tal",
    "en": "mzab-valley",
    "name": "Das M'Zab-Tal",
    "eyebrow": "Welterbe · Ghardaïa",
    "intro": "Fünf befestigte Städte, im 11. Jahrhundert von der ibaditischen Gemeinschaft der Mozabiten erbaut — ein so stimmiger Städtebau, dass Le Corbusier mehrfach zurückkehrte.",
    "quick": "Das M'Zab-Tal in der Provinz Ghardaïa vereint fünf befestigte Ksour — Ghardaïa, Beni Isguen, Melika, Bounoura und El Atteuf —, ab dem 11. Jahrhundert von den ibaditischen Mozabiten gegründet. Jede Stadt ist in konzentrischen Ringen um ihre Moschee angelegt, mit eigenem Palmenhain und eigenem Wassersystem. Seit 1982 gehört das Ensemble zum UNESCO-Welterbe.",
    "sections": [
      {
        "h": "Ein vollständiger Städtebau",
        "p": "Das M'Zab ist keine Kulisse, sondern ein System. Wehrmoschee auf der Kuppe, Wohnbebauung in konzentrischen Ringen den Hügel hinab, Mauern, Friedhof außerhalb, Palmenhain unten mit den Sommerhäusern, dazu eine Anlage zur Fassung und Verteilung des Hochwassers, die die Gärten speist. Jedes Element antwortet auf einen Zwang — Verteidigung, Hitze, Wasserknappheit, gemeinschaftliche Gleichheit — und das Ganze funktioniert bis heute."
      },
      {
        "h": "Der Einfluss auf die moderne Architektur",
        "p": "Le Corbusier besuchte das M'Zab in den 1930er-Jahren mehrfach und zog daraus Prinzipien, zu denen er sich offen bekannte: Sparsamkeit der Mittel, reine Formen, das Verhältnis von privatem Raum und Licht. Die Stätte gilt regelmäßig als eine Hauptreferenz der vernakulären Architektur."
      },
      {
        "h": "Was man sieht",
        "p": "Ghardaïa und sein amphitheatralischer Markt sind der Auftakt. Beni Isguen, die heilige Stadt, wird mit einem von der Gemeinschaft bestimmten Guide zu festen Zeiten und unter strengen Fotoregeln besucht. El Atteuf, die älteste, bewahrt die Sidi-Brahim-Moschee. Melika überblickt das Tal von seinem Hügel und seinem Friedhof."
      },
      {
        "h": "Anreise und Verhalten",
        "p": "Ghardaïa erreicht man in einer Flugstunde ab Algier. Das Tal ist deutlich konservativer als der Norden: bedeckende Kleidung für alle, zurückhaltendes Fotografieren und niemals Personen ohne Erlaubnis, sowie strikte Beachtung der Regeln in Beni Isguen. Beste Zeit ist Oktober bis April."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "Ghardaïa"
      },
      {
        "label": "Gründung",
        "value": "Ab dem 11. Jahrhundert"
      },
      {
        "label": "UNESCO",
        "value": "Seit 1982"
      },
      {
        "label": "Städte",
        "value": "5 befestigte Ksour"
      },
      {
        "label": "Anreise",
        "value": "Flug Algier–Ghardaïa, ~1 Std."
      }
    ],
    "faqs": [
      {
        "q": "Kann man Beni Isguen frei besichtigen?",
        "a": "Nein. Die heilige Stadt wird in Begleitung eines bestimmten lokalen Guides zu festen Zeiten besucht, und das Fotografieren ist eingeschränkt. Das ist eine Regel der Gemeinschaft, keine touristische Formalität."
      },
      {
        "q": "Wer sind die Mozabiten?",
        "a": "Eine berberische Gemeinschaft ibaditischen Ritus — einer vom Sunnitentum und Schiitentum unterschiedenen Richtung des Islam —, seit dem 11. Jahrhundert im Tal ansässig und bekannt für ihre soziale Organisation und ihren Handel."
      },
      {
        "q": "Wie viele Tage einplanen?",
        "a": "Zwei bis drei Tage reichen, um mehrere Städte, den Palmenhain und das Wassersystem in Ruhe zu sehen, gegebenenfalls mit einer Ausfahrt in die Wüste."
      },
      {
        "q": "Welche Kleidung ist angemessen?",
        "a": "Bedeckend für Männer und Frauen: Schultern und Knie bedeckt, weite Kleidung. Es ist die konservativste Region einer klassischen Algerien-Route."
      }
    ],
    "seoTitle": "M'Zab-Tal, Ghardaïa: der Reiseführer (UNESCO)",
    "seoDescription": "Das M'Zab-Tal bei Ghardaïa, UNESCO-Welterbe: die fünf ibaditischen Städte, Beni Isguen, die Palmenhaine und der Städtebau, der Le Corbusier inspirierte."
  },
  {
    "slug": "kasbah-algier",
    "en": "casbah-of-algiers",
    "name": "Die Kasbah von Algier",
    "eyebrow": "Welterbe · Algier",
    "intro": "Die osmanische Medina von Algier, die in einem Labyrinth aus Gassen, Treppen und Palästen vom Hügel zur Bucht hinabfällt.",
    "quick": "Die Kasbah von Algier ist die Altstadt der Hauptstadt, erbaut auf einem Hügel, der zum Mittelmeer abfällt. Als befestigte osmanische Stadt ab dem 16. Jahrhundert auf älteren Fundamenten entwickelt, bewahrt sie Paläste, Moscheen, Hammams und ein dichtes Stadtgefüge aus Gassen und Treppen. Seit 1992 gehört sie zum UNESCO-Welterbe.",
    "sections": [
      {
        "h": "Eine senkrechte Stadt",
        "p": "In der Kasbah gibt es keine ebene Straße. Alles ist Steigung, Stufe und überdachter Durchgang, und das Gefüge ist ebenso auf Gemeinschaftsleben wie auf Verteidigung angelegt: nach innen gewandte Hofhäuser, verbundene Dachterrassen, private Sackgassen. Man durchquert sie nicht, man tritt in sie ein."
      },
      {
        "h": "Was man sieht",
        "p": "Die Zitadelle auf der Kuppe, der Palast der Rais (Bastion 23) am Wasser, die Ketchaoua-Moschee an der Nahtstelle zur Kolonialstadt, die Djamaa el-Kebir, mehrere restaurierte osmanische Häuser und die Blicke über die Bucht von den Dachterrassen. Vieles, worauf es ankommt, liegt hinter Türen: Der Besuch hängt wesentlich davon ab, wer Sie begleitet."
      },
      {
        "h": "Geschichte und Erinnerung",
        "p": "Die Kasbah ist auch ein Erinnerungsort des Unabhängigkeitskriegs: In ihren Gassen spielte sich 1957 die Schlacht um Algier ab, und das Viertel bleibt im algerischen Bewusstsein eng mit dieser Geschichte verbunden."
      },
      {
        "h": "Wie man sie besucht",
        "p": "Mit Guide, ohne Zögern. Nicht aus Sicherheitsgründen — das Viertel ist bewohnt und gastfreundlich —, sondern weil Orientierung unmöglich ist und der Zugang zu Palästen und Terrassen über die Menschen führt, die dort leben. Festes Schuhwerk: Das Pflaster ist steil und bei Regen rutschig."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "Algier"
      },
      {
        "label": "UNESCO",
        "value": "Seit 1992"
      },
      {
        "label": "Epoche",
        "value": "Osmanisch, ab dem 16. Jh."
      },
      {
        "label": "Dauer",
        "value": "2–4 Stunden"
      },
      {
        "label": "Tipp",
        "value": "Lokaler Guide sehr empfohlen"
      }
    ],
    "faqs": [
      {
        "q": "Ist die Kasbah sicher?",
        "a": "Ja. Es ist ein bewohntes, gastfreundliches Viertel; die Schwierigkeit ist die Orientierung, nicht das Sicherheitsgefühl. Wie überall gilt: Telefon und Tasche unauffällig tragen."
      },
      {
        "q": "Braucht man einen Guide?",
        "a": "Sehr zu empfehlen. Das Labyrinth ist ohne Anhaltspunkte tatsächlich unpassierbar, und das Wesentliche — Höfe, Terrassen, Paläste — liegt hinter Türen, die ein lokaler Guide öffnen kann."
      },
      {
        "q": "Wie viel Zeit einplanen?",
        "a": "Zwei bis vier Stunden, je nach Tempo und Zahl der besichtigten Häuser. Es ist ein Besuch zu Fuß, bergauf und bergab."
      },
      {
        "q": "Was gibt es in Algier sonst zu sehen?",
        "a": "Die Große Moschee von Algier, das Märtyrerdenkmal, das Bardo-Museum, den Versuchsgarten von Hamma, die Basilika Notre-Dame d'Afrique und die Arkadenboulevards an der Uferpromenade."
      }
    ],
    "seoTitle": "Die Kasbah von Algier: die Medina besuchen (UNESCO)",
    "seoDescription": "Die Kasbah von Algier, osmanische Medina und UNESCO-Welterbe: Zitadelle, Palast der Rais, Ketchaoua-Moschee und Treppengassen."
  },
  {
    "slug": "tassili-nadjer",
    "en": "tassili-najjer",
    "name": "Das Tassili n'Ajjer",
    "eyebrow": "Welterbe · Illizi und Djanet",
    "intro": "Ein erodiertes Sandsteinplateau von der Größe eines Landes, bedeckt mit Tausenden prähistorischen Malereien und Gravuren einer damals grünen Sahara.",
    "quick": "Das Tassili n'Ajjer ist ein Sandsteinplateau im Südosten Algeriens, in den Provinzen Illizi und Djanet. Es birgt eine der größten Konzentrationen prähistorischer Felskunst weltweit — mehrere Tausend Fundstellen — inmitten von Formationen, die zu Säulen, Bögen und Schluchten erodiert sind. Seit 1982 steht es nach kulturellen und nach natürlichen Kriterien auf der UNESCO-Welterbeliste.",
    "sections": [
      {
        "h": "Eine Sahara, die einmal grün war",
        "p": "Die ältesten Gravuren sind rund 10.000 Jahre alt und zeigen Elefanten, Giraffen, Flusspferde und Krokodile. Es folgen die Hirtenphasen mit Rinderherden, dann Pferde und Wagen und schließlich das Kamel. Es ist eine bildliche Aufzeichnung der allmählichen Austrocknung der Sahara, angefertigt von denen, die sie erlebten."
      },
      {
        "h": "Die Landschaft",
        "p": "Das Plateau ist zu sogenannten Felswäldern erodiert: Tausende Sandsteinsäulen, getrennt durch Sandgassen, durchsetzt von Naturbögen und Gueltas — dauerhaften Wasserbecken mit einer Reliktfauna. Im Süden entfaltet der Tadrart roten Sandstein und Dünen, die zu den fotogensten der Sahara zählen."
      },
      {
        "h": "Die Tuareg",
        "p": "Das Tassili ist Gebiet der Kel Ajjer, jener Tuareg-Konföderation, die dem Massiv den Namen gab. Sie führen, fahren und kochen auf allen Expeditionen, und die Gastfreundschaft, die die Reise begleitet — der Tee, das im Sand gebackene Brot — ist keine Inszenierung."
      },
      {
        "h": "Wie man es besucht",
        "p": "Mit einem Flug Algier–Djanet, dann im 4×4 und zu Fuß mit einem lizenzierten Veranstalter, der über die Genehmigungen verfügt. Das Plateau selbst wird auf mehrtägigen Trekkings mit Trag-Eseln oder -Kamelen erschlossen. Die Saison ist strikt winterlich, von November bis Februar, und außerhalb der Stadt gibt es keinerlei Netz."
      }
    ],
    "facts": [
      {
        "label": "Provinzen",
        "value": "Illizi und Djanet"
      },
      {
        "label": "UNESCO",
        "value": "Seit 1982 (gemischt)"
      },
      {
        "label": "Felskunst",
        "value": "Mehrere Tausend Fundstellen"
      },
      {
        "label": "Saison",
        "value": "Nur November bis Februar"
      },
      {
        "label": "Anreise",
        "value": "Flug Algier–Djanet, dann 4×4"
      }
    ],
    "faqs": [
      {
        "q": "Kann man das Tassili allein besuchen?",
        "a": "Nein. Der tiefe Süden wird mit lizenziertem Veranstalter, akkreditiertem Guide und Genehmigungen bereist. Das ist nicht nur Verwaltungsvorschrift: Distanzen, Hitze und fehlendes Netz machen daraus eine Expeditionsumgebung."
      },
      {
        "q": "Wie alt ist die Felskunst?",
        "a": "Die ältesten Gravuren werden gewöhnlich auf etwa 10.000 Jahre datiert, und die Produktion setzte sich über mehrere Jahrtausende in aufeinanderfolgenden Phasen fort."
      },
      {
        "q": "Muss man sportlich sein?",
        "a": "Für den Tadrart im 4×4 nicht: Kurze Wanderungen genügen. Für das Tassili-Plateau ja — es ist ein mehrtägiges Trekking mit kalten Nächten."
      },
      {
        "q": "Wann sollte man reisen?",
        "a": "Von November bis Februar. Außerhalb dieses Fensters macht die Hitze Expeditionen gefährlich, und sie werden nicht angeboten."
      }
    ],
    "seoTitle": "Tassili n'Ajjer: Felskunst und Wüste (UNESCO)",
    "seoDescription": "Das Tassili n'Ajjer, UNESCO-Plateau der algerischen Sahara: prähistorische Felskunst, Felswälder, Gueltas und Tadrart. Saison, Anreise und Genehmigungen."
  },
  {
    "slug": "beni-hammad",
    "en": "beni-hammad",
    "name": "Al Qal'a der Beni Hammad",
    "eyebrow": "Welterbe · M'Sila",
    "intro": "Die 1007 gegründete Hauptstadt der Hammadiden, aufgegeben und dann zerstört — und das höchste erhaltene Minarett Algeriens, allein in den Hochebenen.",
    "quick": "Al Qal'a der Beni Hammad in der Provinz M'Sila ist die erste Hauptstadt der Hammadiden-Dynastie, 1007 im Hodna-Gebirge gegründet. Zugunsten von Béjaïa aufgegeben und im 12. Jahrhundert zerstört, bewahrt sie die Fundamente ihrer Paläste, ihre große Moschee und deren Minarett — das höchste erhaltene Algeriens. Seit 1980 gehört sie zum UNESCO-Welterbe.",
    "sections": [
      {
        "h": "Eine verschwundene Hauptstadt",
        "p": "Von Hammad ibn Buluggin, einem ziridischen Fürsten, gegründet, wurde die Stadt binnen eines Jahrhunderts zu einer wohlhabenden berberischen Hauptstadt mit Palästen, Bädern, Märkten und Werkstätten. Die Verlegung des Hofes nach Béjaïa und die Zerstörungen des 12. Jahrhunderts leerten sie. Was bleibt, ist ein außergewöhnlich lesbares Ruinenfeld: Gerade weil die Stätte nie wieder besiedelt wurde, gibt sie ein vollständiges Bild einer befestigten muslimischen Stadt."
      },
      {
        "h": "Was man sieht",
        "p": "Das rund zwanzig Meter hohe Minarett der großen Moschee überragt die Stätte und ist von Weitem sichtbar. Die Fundamente des Palasts Dar al-Bahr mit seinem großen Becken lassen eine Architektur aus Hof und Wasser erahnen. Spuren der Mauern, der Wohnbauten und der Keramikwerkstätten vervollständigen das Bild in einer Landschaft offener Hügel."
      },
      {
        "h": "Kombinieren mit",
        "p": "Die Provinz M'Sila bewahrt auch Bou Saada, eine Oase am Saharasaum wenige Fahrstunden entfernt, mit Palmenhain, Schlucht und der Zawiya von El Hamel. Beides lässt sich gut auf zwei Tage verbinden, von Algier oder Sétif aus."
      },
      {
        "h": "Anreise",
        "p": "Die Stätte liegt auf freiem Feld, rund dreißig Kilometer nordöstlich von M'Sila, und ist nicht an den öffentlichen Verkehr angebunden: Man kommt mit dem Auto. Wasser und Hut mitnehmen, der Ort ist völlig ungeschützt. Frühjahr und Herbst sind die besten Jahreszeiten."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "M'Sila"
      },
      {
        "label": "Gründung",
        "value": "1007, durch Hammad ibn Buluggin"
      },
      {
        "label": "UNESCO",
        "value": "Seit 1980"
      },
      {
        "label": "Minarett",
        "value": "Das höchste erhaltene Algeriens"
      },
      {
        "label": "Anreise",
        "value": "Nur mit dem Auto"
      }
    ],
    "faqs": [
      {
        "q": "Was ist von Al Qal'a erhalten?",
        "a": "Ein weitläufiges, nicht rekonstruiertes Ruinenfeld: das Minarett der großen Moschee, die Fundamente der Paläste und des Beckens sowie Spuren von Mauern und Handwerksvierteln."
      },
      {
        "q": "Wer waren die Hammadiden?",
        "a": "Eine aus den Ziriden hervorgegangene Berberdynastie, die vom 11. bis 12. Jahrhundert den zentralen Maghreb von dieser Hauptstadt und später von Béjaïa aus beherrschte."
      },
      {
        "q": "Ist die Stätte erschlossen?",
        "a": "Nur knapp. Es gibt Wärter und einen ausgeschilderten Zugang, aber wenig Vermittlung vor Ort: Ein Guide macht einen echten Unterschied."
      },
      {
        "q": "Wie viel Zeit braucht man?",
        "a": "Etwa zwei Stunden vor Ort, plus Anfahrt. Ein halber Tag ab M'Sila, mehr ab Algier oder Sétif."
      }
    ],
    "seoTitle": "Al Qal'a der Beni Hammad: die Hammadiden-Hauptstadt",
    "seoDescription": "Al Qal'a der Beni Hammad, Hammadiden-Hauptstadt von 1007 und UNESCO-Welterbe in der Provinz M'Sila: Minarett, Palast Dar al-Bahr und Mauern."
  },
  {
    "slug": "constantine",
    "en": "constantine",
    "name": "Constantine",
    "eyebrow": "Die Brückenstadt · Ostalgerien",
    "intro": "Eine Stadt auf einem Felsen, den ein zweihundert Meter tiefer Canyon spaltet, zusammengenäht von einer Reihe spektakulärer Brücken.",
    "quick": "Constantine ist die große Stadt Ostalgeriens, erbaut auf einem Felssporn, den die Rhumel-Schluchten durchziehen; überspannt werden sie von mehreren Brücken, darunter die berühmte Hängebrücke Sidi M'Cid. Als antikes Cirta war sie Hauptstadt des numidischen Königreichs von Massinissa; erhalten sind der Ahmed-Bey-Palast, das Cirta-Museum und eine bis heute lebendige Malouf-Musiktradition.",
    "sections": [
      {
        "h": "Die Lage",
        "p": "Wenige Städte haben eine so unwahrscheinliche Lage. Der Felsen von Constantine wird von den fast zweihundert Meter tiefen Rhumel-Schluchten umschlossen und zerschnitten, und die Stadt wuchs, indem sie diese Leere überspannte: Fußgängerstege, Straßenbrücken, Viadukte. Die Hängebrücke Sidi M'Cid, die Brücke von El Kantara und der Perrégaux-Steg zeichnen eine unverwechselbare Silhouette."
      },
      {
        "h": "Geschichte",
        "p": "Die Stadt ist das antike Cirta, im 2. Jahrhundert v. Chr. unter Massinissa Hauptstadt des numidischen Königreichs, danach römische Stadt, von Kaiser Konstantin wiederaufgebaut, der ihr den Namen hinterließ. Unter der osmanischen Regentschaft wurde sie zur großen Stadt des östlichen Beyliks, wovon der Palast des letzten Bey zeugt."
      },
      {
        "h": "Was man sieht",
        "p": "Der Ahmed-Bey-Palast mit seinen Höfen, bemalten Galerien und Gärten ist das Hauptmonument. Das Cirta-Museum vereint die numidischen und römischen Sammlungen der Region. Das Gefallenendenkmal, die Schluchten von den Stegen aus, die Altstadt, die Emir-Abdelkader-Moschee und die Medersa vervollständigen den Besuch."
      },
      {
        "h": "Musik und Kultur",
        "p": "Constantine ist das Zentrum des Malouf, einer aus Sevilla überlieferten arabo-andalusischen Musikschule, die auf Hochzeiten und bei Festivals der Stadt gespielt wird. Die Stadt ist zudem für ihre Küche bekannt, insbesondere für die Chakhchoukha."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "Constantine"
      },
      {
        "label": "Antiker Name",
        "value": "Cirta"
      },
      {
        "label": "Schluchten",
        "value": "Rund 200 m tief"
      },
      {
        "label": "Musik",
        "value": "Malouf (arabo-andalusisch)"
      },
      {
        "label": "Kombinieren mit",
        "value": "Djémila und Timgad"
      }
    ],
    "faqs": [
      {
        "q": "Warum heißt Constantine die Brückenstadt?",
        "a": "Weil ihr Felsen von den Rhumel-Schluchten zerschnitten ist und die Stadt nur wachsen konnte, indem sie sie überspannte: Mehrere Brücken und Stege verbinden ihre Viertel über dem Abgrund."
      },
      {
        "q": "Wie viel Zeit einplanen?",
        "a": "Ein bis zwei Tage für die Stadt. Mit Djémila und Timgad drei bis vier Tage für den Osten des Landes."
      },
      {
        "q": "Wie erreicht man Constantine?",
        "a": "Per Flug ab Algier, mit der Bahn oder über die Ost-West-Autobahn. Die Stadt hat den internationalen Flughafen Mohamed Boudiaf."
      },
      {
        "q": "Was ist Malouf?",
        "a": "Eine arabo-andalusische Musikschule, deren wichtigstes Zentrum in Algerien Constantine ist, aus dem andalusischen Exil überliefert und bis heute gespielt."
      }
    ],
    "seoTitle": "Constantine, Algerien: die Brückenstadt — Reiseführer",
    "seoDescription": "Constantine, die Brückenstadt über den Rhumel-Schluchten: Ahmed-Bey-Palast, Cirta-Museum, das antike numidische Cirta und die Malouf-Musik."
  },
  {
    "slug": "djanet",
    "en": "djanet",
    "name": "Djanet",
    "eyebrow": "Tor zur Sahara · Südosten",
    "intro": "Die Tuareg-Oase im Südosten Algeriens, Ausgangsbasis für das Tassili n'Ajjer und den Roten Tadrart.",
    "quick": "Djanet ist eine Oase im Südosten Algeriens, an rote Felswände am Fuß des Tassili n'Ajjer gelehnt. Sie ist die maßgebliche Tuareg-Stadt des tiefen Südens und Ausgangspunkt der Expeditionen zum Tassili-Plateau und in die Tadrart-Wüste. Erreichbar ist sie per Flug ab Algier; die Saison reicht von November bis Februar.",
    "sections": [
      {
        "h": "Die Oase",
        "p": "Djanet ist zuerst ein Lebensort und dann eine logistische Basis: ein ausgedehnter Palmenhain, alte, an den Fels geschmiegte Ksour — El Mihan, Azelouaz, Adjahil — und ein Markt, auf dem sich Tuareg und Menschen aus dem Norden begegnen. Die Stadt ist ruhig, der Empfang herzlich, und man spürt sofort, dass man kulturell das Land gewechselt hat."
      },
      {
        "h": "Der Rote Tadrart",
        "p": "Südlich von Djanet erstreckt sich der Tadrart, ein Massiv aus windgeformtem rotem Sandstein mit Naturbögen, Schluchten und Dünen, die sich an schwarzen Fels lehnen. Es ist die meistfotografierte Sahara-Landschaft Algeriens, befahren im 4×4 über mehrere Tage mit Nächten im Camp."
      },
      {
        "h": "Das Tassili n'Ajjer",
        "p": "Im Norden und Osten wird das Tassili-Plateau auf mehrtägigen Trekkings mit Trag-Eseln und einem Tuareg-Team erschlossen, um die großen Felskunststätten zu erreichen. Es ist körperlich anspruchsvoller als der Tadrart — und eine Ergänzung dazu."
      },
      {
        "h": "Praktisches",
        "p": "Die Anreise erfolgt per Flug ab Algier mit Air Algérie oder Tassili Airlines; die Frequenzen sind begrenzt und die Flüge in der Saison ausgebucht, also früh buchen. Außerhalb der Stadt gibt es kein Netz, die Winternächte sind kalt, und alles läuft über einen lizenzierten Veranstalter mit Genehmigungen."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "Djanet"
      },
      {
        "label": "Kultur",
        "value": "Tuareg (Kel Ajjer)"
      },
      {
        "label": "Anreise",
        "value": "Flug ab Algier"
      },
      {
        "label": "Saison",
        "value": "November bis Februar"
      },
      {
        "label": "In der Nähe",
        "value": "Roter Tadrart, Tassili n'Ajjer"
      }
    ],
    "faqs": [
      {
        "q": "Wie kommt man nach Djanet?",
        "a": "Mit dem Flugzeug ab Algier, mit Air Algérie oder Tassili Airlines. Die Straße aus dem Norden bedeutet mehrere Tage und ist für eine normale Reise keine Option."
      },
      {
        "q": "Was unterscheidet Tadrart und Tassili?",
        "a": "Der Tadrart wird im 4×4 mit kurzen Wanderungen erschlossen und bietet die roten Sandstein- und Dünenlandschaften. Das Tassili-Plateau erfordert ein mehrtägiges Trekking und versammelt die großen Felskunststätten."
      },
      {
        "q": "Ist es nachts kalt?",
        "a": "Ja, sehr. Im Hochwinter können die Nachttemperaturen im Camp gegen null gehen: warme Jacke, Mütze und echte Schichten sind unerlässlich."
      },
      {
        "q": "Gibt es Mobilfunk?",
        "a": "In der Stadt Djanet ja. Sobald man in die Wüste fährt, nichts — die Teams nutzen Satellitenkommunikation."
      }
    ],
    "seoTitle": "Djanet, Algerien: Tor zum Tassili und zum Tadrart",
    "seoDescription": "Djanet, Tuareg-Oase im Südosten Algeriens: Ausgangsbasis für das Tassili n'Ajjer und den Roten Tadrart. Anreise, Saison, Genehmigungen und Wissenswertes."
  },
  {
    "slug": "tlemcen",
    "en": "tlemcen",
    "name": "Tlemcen",
    "eyebrow": "Andalusisches Erbe · Westalgerien",
    "intro": "Die kulturelle Hauptstadt des andalusischen Algerien — Große Moschee, Minarett von Mansourah, El-Mechouar-Palast und Gharnati-Musik.",
    "quick": "Tlemcen ist eine Stadt im Westen Algeriens nahe der marokkanischen Grenze und gilt als Zentrum des andalusischen Erbes in Algerien. Als ehemalige Hauptstadt der Zayyaniden bewahrt sie die Große Moschee aus dem 12. Jahrhundert, das unvollendete Minarett von Mansourah, den El-Mechouar-Palast, das Heiligtum von Sidi Boumediene und eine aus Granada überlieferte Gharnati-Musiktradition.",
    "sections": [
      {
        "h": "Eine andalusische Hauptstadt",
        "p": "Tlemcen war vom 13. bis zum 16. Jahrhundert Hauptstadt des Zayyaniden-Reichs und Knotenpunkt zwischen Maghreb, al-Andalus und Sahara. Die aufeinanderfolgenden Wellen andalusischer Flüchtlinge brachten ihre Architektur, ihr Handwerk und ihre Musik mit — so sehr, dass die Stadt heute die Referenz dieses Erbes in Algerien ist."
      },
      {
        "h": "Was man sieht",
        "p": "Die Große Moschee, im 11. Jahrhundert gegründet und im 12. umgebaut, mit ihrem durchbrochenen Stuckmihrab. Das Ensemble von Mansourah und sein unvollendetes Minarett, Überrest einer merinidischen Belagerung. Der restaurierte El-Mechouar-Palast im Herzen der zayyanidischen Zitadelle. Heiligtum und Medersa von Sidi Boumediene in El Eubbad. Und das Plateau Lalla Setti für den Blick über die Stadt."
      },
      {
        "h": "Natur und Umgebung",
        "p": "Die Wasserfälle von El Ourit in einer bewaldeten Schlucht vor den Toren der Stadt bilden einen Kontrast zu den Monumenten. Die Region zählt außerdem Höhlen, Kiefernwälder und, weiter entfernt, die römischen und numidischen Reste von Siga in Richtung Küste."
      },
      {
        "h": "Musik und Handwerk",
        "p": "Der Gharnati, eine in Granada entstandene arabo-andalusische Musikschule, ist in Tlemcen lebendig und wird auf Hochzeiten und Festivals gespielt. Bekannt ist die Stadt auch für ihr Handwerk: Teppiche, Goldfadenstickerei, Kupfer und Keramik."
      }
    ],
    "facts": [
      {
        "label": "Provinz",
        "value": "Tlemcen"
      },
      {
        "label": "Blütezeit",
        "value": "Zayyaniden-Reich, 13.–16. Jh."
      },
      {
        "label": "Musik",
        "value": "Gharnati (arabo-andalusisch)"
      },
      {
        "label": "Sehenswert",
        "value": "Große Moschee, Mansourah, El Mechouar"
      },
      {
        "label": "Beste Zeit",
        "value": "April–Juni, September–November"
      }
    ],
    "faqs": [
      {
        "q": "Warum gilt Tlemcen als andalusische Hauptstadt?",
        "a": "Weil die Stadt aufeinanderfolgende Wellen von Flüchtlingen aus al-Andalus aufnahm, deren Architektur, Handwerk und Musik sie geprägt haben, und weil sie in Algerien der wichtigste Bewahrer dieses Erbes bleibt."
      },
      {
        "q": "Was ist Mansourah?",
        "a": "Eine im 14. Jahrhundert von den Meriniden gegenüber Tlemcen errichtete Belagerungsstadt. Erhalten sind Mauern und ein monumentales, nie vollendetes Minarett."
      },
      {
        "q": "Wie viele Tage einplanen?",
        "a": "Zwei Tage reichen, um die großen Monumente, El Ourit und Lalla Setti in Ruhe zu sehen."
      },
      {
        "q": "Wie erreicht man Tlemcen?",
        "a": "Über den eigenen Flughafen mit Flügen ab Algier oder auf der Straße ab Oran, rund zwei Stunden."
      }
    ],
    "seoTitle": "Tlemcen, Algerien: andalusisches Erbe und Gharnati",
    "seoDescription": "Tlemcen, Hauptstadt des andalusischen Algerien: Große Moschee, Minarett von Mansourah, El-Mechouar-Palast, Sidi Boumediene und die Wasserfälle von El Ourit."
  }
];

export const destDeByEn = (en: string) => DESTINATIONS_DE.find(d => d.en === en);

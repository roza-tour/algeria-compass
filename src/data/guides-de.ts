// German practical guides. One data file plus one template beats five nearly
// identical .astro pages, and keeps the hreflang pairing with the English
// article (via `en`) explicit and impossible to forget.

export interface GuideDe {
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

export const GUIDES_DE: GuideDe[] = [
  {
    "slug": "algerien-reisefuehrer",
    "en": "/blog/complete-algeria-travel-guide/",
    "fr": "/fr/guide-voyage-algerie/",
    "it": "/it/guida-viaggio-algeria/",
    "eyebrow": "Kompletter Reiseführer",
    "h1": "Algerien: der komplette Reiseführer",
    "published": "2026-07-25",
    "lead": "Algerien ist das größte Land Afrikas und eines der am wenigsten bereisten des Mittelmeerraums: fast menschenleere römische Städte, eine Sahara, die vier Fünftel der Karte einnimmt, und eine Gastfreundschaft, die jeden überrascht. Genau deshalb belohnt es alle, die sich vorbereiten. Dieser Ratgeber bündelt das Wesentliche — Reisezeit, Visum, Sicherheit, Verkehr, Budget, Küche — und verweist auf die Detailratgeber.",
    "sections": [
      {
        "h": "Das Land in Kürze",
        "p": "Algerien ist eine Republik am südlichen Mittelmeer und grenzt im Osten an Tunesien und Libyen, im Süden an Niger, Mali und Mauretanien, im Westen an die Westsahara und Marokko. Die Bevölkerung konzentriert sich auf den Küstenstreifen und die Hochebenen des Nordens, während der weite Süden nahezu unbesiedelt ist. Arabisch und Tamazight sind Amtssprachen; Französisch ist in Verwaltung, Handel und Beschilderung weiterhin sehr präsent. Das Land ist in 58 Provinzen gegliedert."
      },
      {
        "h": "Beste Reisezeit",
        "p": "Frühling (März–Mai) und Herbst (September–November) sind die besten Zeiten für den Norden, die Küste und die römischen Städte. Der Winter (November–Februar) ist die einzige Saison, in der die tiefe Sahara bereist werden kann — und zugleich die Zeit, in der die römischen Stätten am angenehmsten sind. Der Sommer ist an der Küste heiß und im Süden untragbar."
      },
      {
        "h": "Visum und Einreise",
        "p": "Nahezu alle Nationalitäten benötigen ein Touristenvisum, das vor der Abreise bei einem algerischen Konsulat beantragt wird, in der Regel mit Einladungsschreiben und bestätigten Buchungen. Ein allgemeines E-Visum gibt es nicht. Die einzige anerkannte Ausnahme sind organisierte Reisen in den tiefen Süden, die über Djanet oder Tamanrasset mit einem lizenzierten Veranstalter einreisen."
      },
      {
        "h": "Sicherheit",
        "p": "Für normales Reisen sind die Städte des Nordens, die Küste, der römische Osten und die organisierten Sahara-Routen im Allgemeinen ruhig; die realistische Sorge sind Taschendiebstähle. Für einige abgelegene Grenzgebiete und für Wüstenteile fernab der etablierten Routen gelten offizielle Warnungen. Der tiefe Süden wird mit Veranstalter, Guide und Genehmigungen bereist."
      },
      {
        "h": "Fortbewegung",
        "p": "Das Land ist zu groß, um es im Rahmen eines normalen Urlaubs über Land zu durchqueren. Im Norden funktionieren Bahn und Ost-West-Autobahn gut; in den Süden ist der Inlandsflug faktisch Pflicht, gefolgt von 4×4 mit Fahrer. Air Algérie und Tassili Airlines verbinden Algier mit Oran, Constantine, Ghardaïa, Timimoun, Tamanrasset und Djanet."
      },
      {
        "h": "Geld",
        "p": "Die Währung ist der algerische Dinar, außerhalb des Landes nicht konvertierbar: Man reist mit Bargeld in Euro an und wechselt in Algerien. Ausländische Karten sind praktisch unbrauchbar, Geldautomaten unzuverlässig. Es gibt einen offiziellen und einen weit verbreiteten Parallelkurs, und der Unterschied wirkt sich stark auf das Budget aus."
      },
      {
        "h": "Küche",
        "p": "Couscous ist das Nationalgericht und von der UNESCO als gemeinsames Erbe des Maghreb anerkannt. Daneben stehen Chorba, Tajines, die Rechta von Algier, die Chakhchoukha des Ostens, Straßenküche wie Mhadjeb und Msemen sowie eine tiefe Tradition von Mandel- und Dattelgebäck. Minztee begleitet alles."
      },
      {
        "h": "Was man sehen sollte",
        "list": [
          "Die sieben UNESCO-Stätten: Kasbah von Algier, Timgad, Djémila, Tipaza, M'Zab-Tal, Al Qal'a der Beni Hammad und Tassili n'Ajjer",
          "Algier, die weiße Hauptstadt über der Bucht",
          "Constantine, die Brückenstadt über den Rhumel-Schluchten",
          "Tlemcen und das andalusische Erbe des Westens",
          "Die Sahara: Djanet und der Tadrart, Timimoun, das Hoggar",
          "Die kabylische Küste rund um Béjaïa"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Wie viele Tage braucht man für Algerien?",
        "a": "Sieben Tage decken Algier, die römische Küste und eine weitere Region gut ab. Zehn erlauben es, das M'Zab oder den römischen Osten ohne Hetze zu ergänzen. Zwei Wochen braucht es, um den Norden mit einer echten Sahara-Expedition zu verbinden."
      },
      {
        "q": "Ist Algerien teuer?",
        "a": "Nein, sobald man Dinar hat. Essen, Verkehr und Eintritte kosten nach europäischen Maßstäben wenig. Ins Gewicht fallen der internationale Flug und, bei einer Wüstenreise, die Logistik des Veranstalters."
      },
      {
        "q": "Spricht man Englisch?",
        "a": "Wenig. Arabisch und Tamazight sind Amtssprachen, Französisch die verbreitete Zweitsprache. Englisch nimmt bei jungen Menschen und professionellen Guides zu, sollte aber nicht vorausgesetzt werden."
      },
      {
        "q": "Kann man individuell reisen?",
        "a": "Im Norden ja: Städte, Küste und römische Stätten lassen sich eigenständig besuchen. Die tiefe Sahara nicht — sie erfordert lizenzierten Veranstalter, Guide und Genehmigungen, aus Sicherheits- und Umweltgründen."
      }
    ],
    "cta": {
      "h": "Wir planen Ihre Reise",
      "p": "Wir sind ein lizenzierter algerischer Reiseveranstalter: private Routen, lokale Guides und Unterstützung beim Visum."
    },
    "seoTitle": "Algerien Reiseführer 2026 | Algeria Compass",
    "seoDescription": "Kompletter Algerien-Reiseführer: beste Reisezeit, Visum, Sicherheit, Verkehr, Budget, Küche und Sehenswürdigkeiten. Von einem lizenzierten Veranstalter."
  },
  {
    "slug": "visum-algerien",
    "en": "/blog/algeria-visa-guide/",
    "fr": "/fr/visa-algerie/",
    "it": "/it/visto-algeria/",
    "eyebrow": "Visum und Einreise",
    "h1": "Visum für Algerien: so bekommen Sie es",
    "published": "2026-07-25",
    "lead": "Das Visum ist der erste echte Schritt einer Algerien-Reise — und der einzige, der die Termine kippen kann, wenn man ihn unterschätzt. Ein allgemeines E-Visum gibt es nicht: Der Antrag wird vor der Abreise bei einem algerischen Konsulat gestellt, mit Einladungsschreiben und bestätigtem Programm. So läuft es ab.",
    "sections": [
      {
        "h": "Wer ein Visum braucht",
        "p": "Praktisch alle europäischen, nordamerikanischen und asiatischen Besucher. Ausnahmen sind selten und betreffen vor allem Maghreb-Staaten und einzelne bilaterale Abkommen. Prüfen Sie immer beim für Ihren Wohnsitz zuständigen algerischen Konsulat: Die Regeln ändern sich ohne große Vorankündigung."
      },
      {
        "h": "Erforderliche Unterlagen",
        "list": [
          "Reisepass mit mindestens sechs Monaten Gültigkeit und freien Seiten",
          "Ausgefülltes und unterschriebenes Antragsformular",
          "Aktuelle Passfotos vor hellem Hintergrund",
          "Einladungsschreiben: von einer Privatperson in Algerien oder von der organisierenden Agentur",
          "Hotelbuchungen oder bestätigtes Programm",
          "Hin- und Rückflugbuchung",
          "Nachweis ausreichender finanzieller Mittel",
          "Reiseversicherung"
        ]
      },
      {
        "h": "Das Einladungsschreiben",
        "p": "Das ist der Teil, der Erstantragsteller überrascht. Die algerischen Konsulate wollen wissen, wer Sie empfängt. Wer keine privaten Kontakte in Algerien hat, geht den Standardweg über die Einladung einer lizenzierten Agentur, ausgestellt auf Briefpapier mit Ihren Daten, der Route und den Unterkünften. Das Schreiben allein genügt selten: Es muss zu den beigefügten Buchungen passen."
      },
      {
        "h": "Bearbeitungszeit",
        "p": "Es gibt keine einheitliche Frist: Jedes Konsulat bearbeitet sein eigenes Aufkommen. In der Praxis reicht die Spanne von rund zwei Wochen bis über einen Monat, am langsamsten im Sommer und vor den großen Feiertagen. Die Regel, die Geld spart, ist einfach: Kaufen Sie keine nicht erstattbaren Flüge, bevor das Visum physisch im Pass klebt."
      },
      {
        "h": "Die Ausnahme im tiefen Süden",
        "p": "Für organisierte Wüstenreisen, die über Djanet oder Tamanrasset einreisen, kann eine lizenzierte algerische Agentur die Gruppe in bestimmten Fällen bei Ankunft abfertigen lassen, weil sie Daten und Genehmigungen vorab hinterlegt hat. Für Individualreisende ist das am Flughafen nicht zu organisieren."
      },
      {
        "h": "Warum Anträge abgelehnt werden",
        "list": [
          "Unvollständige Unterlagen — mit Abstand der häufigste Grund",
          "Einladung und Buchungen, die nicht zueinander passen",
          "Reisepass mit zu kurzer Restgültigkeit",
          "Antrag beim für den Wohnsitz falschen Konsulat",
          "Nicht belegte finanzielle Mittel"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Gibt es ein E-Visum für Algerien?",
        "a": "Nein, ein allgemeines elektronisches Touristenvisum existiert nicht. Seien Sie skeptisch bei kommerziellen Websites, die eines versprechen: Bestenfalls handelt es sich um Ausfüllservices, und das Konsulat muss sie nicht anerkennen."
      },
      {
        "q": "Bekommt man das Visum am Flughafen?",
        "a": "In der Regel nein. Die einzige Ausnahme sind organisierte Reisen in den tiefen Süden, betreut von einem lizenzierten algerischen Veranstalter, der die Unterlagen vorab hinterlegt hat."
      },
      {
        "q": "Stellen Sie das Einladungsschreiben aus?",
        "a": "Ja. Für jeden Gast, der bei uns bucht, erstellen wir Einladung, bestätigtes Programm und Unterkunftsangaben in dem Format, das die Konsulate erwarten."
      },
      {
        "q": "Was kostet das Visum?",
        "a": "Die Konsulatsgebühren richten sich nach Nationalität und Visumtyp und werden regelmäßig angepasst. Erfragen Sie den aktuellen Betrag direkt beim zuständigen Konsulat."
      }
    ],
    "cta": {
      "h": "Wir unterstützen Sie beim Visum",
      "p": "Einladung, bestätigtes Programm und Buchungen im geforderten Format — Teil der Reiseorganisation."
    },
    "seoTitle": "Visum für Algerien: Unterlagen und Fristen",
    "seoDescription": "Touristenvisum für Algerien beantragen: erforderliche Unterlagen, Einladungsschreiben der Agentur, Bearbeitungszeiten und häufige Ablehnungsgründe."
  },
  {
    "slug": "sicherheit-algerien",
    "en": "/blog/algeria-safety-guide/",
    "fr": "/fr/securite-algerie/",
    "it": "/it/sicurezza-algeria/",
    "eyebrow": "Sicherheit",
    "h1": "Ist Algerien sicher? Eine ehrliche Einschätzung",
    "published": "2026-07-25",
    "lead": "Der Ruf Algeriens ist von den 1990er-Jahren geprägt, nicht vom heutigen Land. Es ist seit über zwanzig Jahren stabil und für außergewöhnliche Gastfreundschaft bekannt. Dennoch liest sich Sicherheit hier auf einer Karte, nicht als pauschales Urteil: Für einige abgelegene Zonen gelten reale Warnungen, und die Wüste ist zuerst eine Umgebung und dann eine Frage der öffentlichen Ordnung.",
    "sections": [
      {
        "h": "Wo Reisen unkompliziert ist",
        "p": "Algier, Oran, Constantine, Béjaïa, die Mittelmeerküste, die römischen Stätten des Ostens, die Kabylei und das M'Zab-Tal lassen sich normal bereisen. Das realistische Risiko ist der Taschendiebstahl an belebten Orten — wie in jeder Mittelmeermetropole."
      },
      {
        "h": "Wo ein Veranstalter nötig ist",
        "p": "Die tiefe Sahara — Tassili n'Ajjer, Tadrart, Hoggar — wird mit lizenziertem Veranstalter, akkreditiertem Guide, ausgerüsteten 4×4 und Genehmigungen bereist. Das ist keine Formalität: Hitze, Distanzen, Navigation und fehlendes Netz machen Improvisation gefährlich."
      },
      {
        "h": "Wohin man nicht fährt",
        "p": "Die abgelegenen Grenzstreifen zu Mali, Niger und Libyen sowie einige Wüstengebiete fernab etablierter Routen tragen die deutlichsten Warnungen der Regierungen. Es sind zugleich Orte, für die keine Genehmigung erteilt wird und zu denen Sie kein Veranstalter bringt."
      },
      {
        "h": "Die realen Risiken",
        "list": [
          "Taschendiebstahl auf Märkten, im Verkehr und an belebten Orten",
          "Verkehrsunfälle, vor allem nachts auf unbeleuchteten Landstraßen",
          "Hitze und Dehydrierung im Süden, mit Abstand das Hauptrisiko in der Wüste",
          "Kleine Betrügereien: nicht vereinbarte Preise, inoffizielle Guides, Geldwechsel"
        ]
      },
      {
        "h": "Alleinreisende Frauen",
        "p": "Algerien ist ein konservatives Land mit niedriger Gewaltkriminalität, und beides zusammen erklärt die typische Erfahrung: viel Aufmerksamkeit und Neugier, wenig reale Bedrohung. Bedeckende Kleidung, Fahrten zwischen Städten bei Tag, bestellte Taxis statt an der Straße angehaltener. In den Städten ist die Atmosphäre deutlich entspannter als in kleinen Orten."
      },
      {
        "h": "Gute Gewohnheiten",
        "list": [
          "Lesen Sie die aktuellen, kartenbasierten Hinweise Ihrer Regierung",
          "Vermeiden Sie Nachtfahrten auf Landstraßen",
          "Führen Sie Kopien von Pass und Visum getrennt von den Originalen mit",
          "Trinken Sie in der Wüste regelmäßig, ohne auf Durst zu warten",
          "Folgen Sie den Hinweisen von Guides und Behörden, wohin man nicht fährt"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Ist Algerien für Touristen sicher?",
        "a": "Für normales Reisen ja: Die Städte des Nordens, die Küste, der römische Osten und die organisierten Sahara-Routen sind im Allgemeinen ruhig. Für einige abgelegene Grenzgebiete gelten offizielle Warnungen."
      },
      {
        "q": "Ist die Sahara gefährlich?",
        "a": "Die Sahara ist sicher, wenn sie so bereist wird, wie es vorgesehen ist: lizenzierter Veranstalter, erfahrener Guide, 4×4, Wasser, Satellitenkommunikation und Genehmigungen. Die realen Risiken sind Hitze, Dehydrierung und Isolation, nicht Kriminalität."
      },
      {
        "q": "Ist es für alleinreisende Frauen sicher?",
        "a": "Im Allgemeinen ja, mit der üblichen Aufmerksamkeit. Rechnen Sie eher mit Blicken und Neugier als mit Bedrohung; bedeckende Kleidung und Tagesfahrten zwischen Städten machen vieles leichter."
      },
      {
        "q": "Darf man in Algerien selbst fahren?",
        "a": "Rechtlich ja, mit Führerschein und internationalem Führerschein. In der Praxis bevorzugen viele Besucher einen Fahrer: fordernder Stadtverkehr, Beschilderung auf Arabisch und Französisch und von Nachtfahrten wird abgeraten."
      }
    ],
    "cta": {
      "h": "Reisen Sie mit einem lokalen Veranstalter",
      "p": "Akkreditierte Guides, geeignete Fahrzeuge und Genehmigungen über uns — Sicherheit als Frage der Organisation, nicht der Sorge."
    },
    "seoTitle": "Ist Algerien sicher? Aktueller Ratgeber",
    "seoDescription": "Ist Algerien für Touristen sicher? Eine ehrliche Einschätzung: wo Reisen einfach ist, wo ein Veranstalter nötig ist, welche Zonen zu meiden sind."
  },
  {
    "slug": "beste-reisezeit-algerien",
    "en": "/blog/best-time-to-visit-algeria/",
    "fr": "/fr/quand-partir-algerie/",
    "it": "/it/quando-andare-algeria/",
    "eyebrow": "Jahreszeiten",
    "h1": "Beste Reisezeit für Algerien",
    "published": "2026-07-25",
    "lead": "Algerien hat nicht eine gute Saison, sondern zwei — und sie sind fast gegensätzlich. Der Norden zeigt sich im Frühling und Herbst von seiner besten Seite; die tiefe Sahara lässt sich nur im Winter bereisen. Diese Zweiteilung zu verstehen ist die wichtigste Entscheidung bei der Reiseplanung.",
    "sections": [
      {
        "h": "Frühling (März–Mai)",
        "p": "Die beste Zeit für den Norden: milde Temperaturen, nach den Winterregen grüne Landschaften und römische Stätten wie Timgad oder Djémila, die sich angenehm zu Fuß erschließen. Auch für die Oasen am Nordrand der Sahara ist es eine gute Zeit, vor der großen Hitze."
      },
      {
        "h": "Sommer (Juni–August)",
        "p": "Badesaison an der Küste, mit warmem Meer und Städten, die bis tief in die Nacht lebendig sind. Die archäologischen Stätten sind mittags anstrengend, und der tiefe Süden fällt aus: Die Hitze macht ihn gefährlich, und Expeditionen finden nicht statt. Zudem ist es die nachfragestärkste Flugzeit, weil die Diaspora zurückkehrt."
      },
      {
        "h": "Herbst (September–November)",
        "p": "Vielleicht die beste Zeit für eine erste Reise: Die Hitze weicht, goldenes Licht liegt auf den römischen Städten, im September ist das Meer noch zum Baden geeignet, und ab November öffnet die Sahara-Saison."
      },
      {
        "h": "Winter (Dezember–Februar)",
        "p": "Die Sahara-Saison und die einzige Zeit, in der Tassili, Tadrart und Hoggar befahrbar sind: milde Tage, kalte Nächte, klare Luft und das beste Fotolicht. Im Norden ist es kühler und regnerischer, doch die römischen Stätten sind nahezu menschenleer, und im Atlas fällt Schnee — in Chréa oberhalb von Blida wird Ski gefahren."
      },
      {
        "h": "Region für Region",
        "list": [
          "Mittelmeerküste — April bis Oktober; Juli und August fürs Meer",
          "Römische Städte (Timgad, Djémila, Tipaza) — März–Juni und September–November",
          "M'Zab-Tal und Oasen im Norden — Oktober bis April",
          "Tiefe Sahara (Djanet, Tamanrasset) — nur November bis Februar",
          "Berge der Kabylei und des Aurès — Frühling für die Blüte, Winter für den Schnee"
        ]
      },
      {
        "h": "Ramadan und Feiertage",
        "p": "Während des Ramadan kehrt sich der Rhythmus des Landes um: ruhige Tage mit vielen geschlossenen Restaurants und nach Sonnenuntergang sehr lebendige Städte. Für Reisende, die verstehen wollen, ist es eine faszinierende Zeit; für ein dichtes Besichtigungsprogramm weniger geeignet. Die Eid-Feiertage schließen viele Betriebe für mehrere Tage."
      }
    ],
    "faqs": [
      {
        "q": "Welcher Monat ist der beste für Algerien?",
        "a": "Oktober und April funktionieren fast überall: angenehmer Norden, zugängliche Oasen und im Oktober die bevorstehende Sahara-Saison."
      },
      {
        "q": "Wann kann man in die Sahara?",
        "a": "Von November bis Februar. Außerhalb dieses Fensters macht die Hitze im tiefen Süden Expeditionen gefährlich, und die Veranstalter bieten sie nicht an."
      },
      {
        "q": "Lohnt sich Algerien im Winter?",
        "a": "Sehr. Es ist die einzige Saison für die Wüste, die römischen Stätten sind kühl und leer, die Küste bleibt mild, und im Atlas liegt echter Schnee: In zwei Wochen kommt man vom Schnee zu den Dünen."
      },
      {
        "q": "Ist es nachts in der Wüste kalt?",
        "a": "Ja, sehr. Im Hochwinter können die Nachttemperaturen im Camp gegen null gehen: warme Jacke, Mütze und echte Schichten."
      }
    ],
    "cta": {
      "h": "Die richtige Zeit für Ihre Reise",
      "p": "Nennen Sie uns Ihre Termine, und wir sagen Ihnen offen, was in diesem Zeitraum funktioniert und was nicht."
    },
    "seoTitle": "Beste Reisezeit Algerien: Klima und Jahreszeiten",
    "seoDescription": "Beste Reisezeit für Algerien: Frühling und Herbst für den Norden und die römischen Städte, Winter für die Sahara. Das Klima Region für Region."
  },
  {
    "slug": "sahara-algerien",
    "en": "/blog/algerian-sahara-travel-guide/",
    "fr": "/fr/sahara-algerie/",
    "it": "/it/sahara-algeria/",
    "eyebrow": "Sahara",
    "h1": "Die algerische Sahara: der Reiseratgeber",
    "published": "2026-07-25",
    "lead": "Die algerische Sahara gehört zu den größten und am besten erhaltenen der Welt: die Sandsteinplateaus des Tassili n'Ajjer, die Dünen und Bögen des Tadrart, die Vulkangipfel des Hoggar, die roten Oasen des Gourara. Das ist kein Ausflug, sondern eine geführte Winterexpedition, organisiert von einem lizenzierten Veranstalter.",
    "sections": [
      {
        "h": "Wann reisen",
        "p": "Von November bis Februar, ohne Ausnahme. Die Tage sind mild und die Luft klar; die Nächte sind kalt und können im Camp gegen null gehen, also braucht es echte Schichten. Ab dem späten Frühjahr wird die Hitze zu einem ernsten physiologischen Risiko, und die Expeditionen ruhen."
      },
      {
        "h": "Die großen Regionen",
        "list": [
          "Djanet und das Tassili n'Ajjer — prähistorische Felskunst und Sandsteinwälder, UNESCO-Welterbe",
          "Der Rote Tadrart — Dünen, Schluchten und Naturbögen im tiefen Südosten",
          "Das Hoggar, ab Tamanrasset — Vulkangipfel und der Sonnenaufgang am Assekrem",
          "Timimoun und der Gourara — die rote Oase, die Ksour und die Foggaras",
          "Der Große Westliche Erg — die großen Dünenzüge"
        ]
      },
      {
        "h": "Genehmigungen, 4×4 und Logistik",
        "p": "Auf eigene Faust geht hier nichts. Akkreditierter Guide, ausgerüstete 4×4 und Genehmigungen sind unerlässlich — nicht aus Bürokratie, sondern als Sicherheitssystem. In den Süden fliegt man ab Algier und fährt dann im 4×4 weiter. Wasser, Treibstoff und Satellitenkommunikation werden pro Fahrzeug und pro Person kalkuliert."
      },
      {
        "h": "Wie man übernachtet",
        "p": "Im Camp, das jeden Abend an einem vom Team gewählten Ort aufgebaut wird. Zelte, Matten und Decken werden gestellt; es gibt keinen Strom, keine Duschen und kein Netz. Gekocht wird am Feuer, das Brot backt unter dem Sand, und der Tee wird dreimal aufgegossen."
      },
      {
        "h": "Was mitnehmen",
        "list": [
          "Echte warme Schichten für die Nacht: Jacke, Mütze, dicke Socken",
          "Sonnenschutz, Hut und ein Tuch gegen Sonne und Wind",
          "Geschlossene, bequeme Schuhe für Sand und Fels",
          "Große Powerbank und Ersatzakkus",
          "Stirnlampe und Feuchttücher, angesichts der Campbedingungen"
        ]
      },
      {
        "h": "Die Tuareg",
        "p": "Guides, Fahrer und Köche der Expeditionen sind lokale Tuareg, und die Gastfreundschaft, die die Reise begleitet, ist keine Inszenierung für Besucher. Sie ist auch der Grund, warum gut gemachter Sahara-Tourismus eine der wenigen Einkommensquellen der Region bleibt."
      }
    ],
    "faqs": [
      {
        "q": "Kann man die algerische Sahara allein bereisen?",
        "a": "Nein. Der tiefe Süden erfordert lizenzierten Veranstalter, akkreditierten Guide, 4×4 und Genehmigungen. Das ist zuerst eine Sicherheits- und dann eine Verwaltungsregel."
      },
      {
        "q": "Wie kommt man nach Djanet oder Tamanrasset?",
        "a": "Mit dem Flugzeug ab Algier, mit Air Algérie oder Tassili Airlines, dann im 4×4 mit dem Team. Die Straßendistanzen aus dem Norden sind enorm und im Urlaub nicht machbar."
      },
      {
        "q": "Braucht man Kondition?",
        "a": "Für den Tadrart im 4×4 nicht: Man fährt geländegängig mit kurzen Wanderungen. Für das Tassili-Plateau schon, denn es ist ein mehrtägiges Trekking mit kalten Nächten."
      },
      {
        "q": "Was sieht man genau?",
        "a": "Prähistorische Felskunst im Tassili, die Bögen und roten Dünen des Tadrart, den Sonnenaufgang am Assekrem im Hoggar und die Oasen des Gourara rund um Timimoun."
      }
    ],
    "cta": {
      "h": "Ihre Wüstenexpedition",
      "p": "Guides, 4×4 und Genehmigungen über uns — für Sie bleibt die Reise."
    },
    "seoTitle": "Algerische Sahara: Ratgeber 2026 (Djanet, Tassili)",
    "seoDescription": "Ratgeber zur algerischen Sahara: Djanet und das Tassili n'Ajjer, das Hoggar, Timimoun und der Tadrart. Reisezeit, Genehmigungen, 4×4 und Organisation."
  },
  {
    "slug": "visum-bei-ankunft-algerien",
    "en": "/algeria-visa-requirements/",
    "fr": "/fr/visa-arrivee-algerie/",
    "eyebrow": "Visum und Einreise",
    "h1": "Brauchen Sie ein Visum für Algerien?",
    "published": "2026-07-27",
    "lead": "Es gibt zwei Wege nach Algerien, und einer davon lässt das Konsulat ganz aus. Die meisten Reisenden besorgen vor der Abreise ein Touristenvisum; wer mit einer organisierten Reise über den tiefen Süden einreist — Djanet oder Tamanrasset — kann dagegen bei Ankunft abgefertigt werden, und dieser Weg steht Reisenden jeder Nationalität offen.",
    "sections": [
      {
        "h": "Weg 1: Konsulatsvisum, vor der Abreise",
        "p": "Gilt für alle, die den Norden, die Küste, die römischen Städte oder das M'Zab-Tal besuchen, und für alle, die individuell reisen. Sie nennen uns Termine und Route, wir stellen Einladungsschreiben und bestätigtes Programm auf Briefpapier aus, Sie reichen die Unterlagen beim für Ihren Wohnsitz zuständigen algerischen Konsulat ein, und das Visum wird vor der Abreise in den Pass geklebt. Rechnen Sie mit zwei Wochen bis über einem Monat, und kaufen Sie keine nicht erstattbaren Flüge, bevor das Visum physisch im Pass ist."
      },
      {
        "h": "Weg 2: Visum bei Ankunft, über die südlichen Zugänge",
        "p": "Gilt für Reisende auf einer organisierten Sahara-Route, die in Djanet oder Tamanrasset landen, und steht jeder Nationalität offen. Sie buchen bei uns ein Südprogramm, wir hinterlegen Passdaten und Wüstengenehmigungen im Voraus, Sie fliegen von Algier in den Süden, und die Einreise wird bei Ankunft abgewickelt. Kein Konsulatstermin nötig. Wir bestätigen Ihnen schriftlich, dass Ihr Fall unter diesen Weg fällt, bevor Sie Flüge buchen."
      },
      {
        "h": "Welcher Weg für Sie gilt",
        "p": "Es hängt davon ab, wohin Sie reisen, nicht von Ihrem Pass. Umfasst die Reise Algier, die Mittelmeerküste, die römischen Städte des Ostens oder das M'Zab-Tal, brauchen Sie das Konsulatsvisum. Ist die Reise eine Sahara-Expedition über den Süden — Tassili n'Ajjer, Tadrart, Hoggar — steht Ihnen der Weg über das Visum bei Ankunft offen, welchen Pass Sie auch halten. Beide laufen über uns als lizenzierten Veranstalter."
      },
      {
        "h": "Und die Visumbefreiung?",
        "p": "Eine kleine Zahl von Nationalitäten reist ohne Visum nach Algerien ein. Die Liste ist kurz, sie ändert sich, und die Folgen eines Fehlers trägt der Reisende am Gate — deshalb veröffentlichen wir keine. Das nächstgelegene algerische Konsulat ist die Instanz für Ihren Pass, und ein Anruf klärt die Frage."
      }
    ],
    "faqs": [
      {
        "q": "Brauche ich ein Visum für Algerien?",
        "a": "Mit ziemlicher Sicherheit ja, wenn Sie individuell oder in den Norden reisen. Das Touristenvisum wird vor der Abreise beim für Ihren Wohnsitz zuständigen Konsulat beantragt, mit Einladungsschreiben und bestätigten Buchungen."
      },
      {
        "q": "Kann man ohne Konsulat einreisen?",
        "a": "Ja, auf genau einem Weg: eine organisierte Reise über die südlichen Zugänge Djanet oder Tamanrasset. Ein lizenzierter algerischer Veranstalter hinterlegt Daten und Genehmigungen vorab, und die Einreise erfolgt bei Ankunft."
      },
      {
        "q": "Welche Nationalitäten können das Visum bei Ankunft nutzen?",
        "a": "Es steht Reisenden jeder Nationalität auf einer geeigneten Südroute offen. Wir bestätigen Ihren konkreten Fall schriftlich, bevor Sie Flüge buchen."
      },
      {
        "q": "Gibt es ein E-Visum für Algerien?",
        "a": "Nein, ein allgemeines elektronisches Touristenvisum existiert nicht. Seien Sie skeptisch bei kommerziellen Websites, die eines versprechen."
      },
      {
        "q": "Wie lange dauert das Konsulatsvisum?",
        "a": "Von rund zwei Wochen bis über einen Monat, je nach Konsulat und Saison. Der Sommer und die Zeit vor großen Feiertagen sind am langsamsten."
      }
    ],
    "cta": {
      "h": "Nennen Sie uns Pass und Termine",
      "p": "Wir bestätigen Ihnen schriftlich, welcher Weg für Sie gilt, bevor Sie irgendetwas buchen."
    },
    "seoTitle": "Visum für Algerien nötig? Die zwei Einreisewege",
    "seoDescription": "Zwei Wege nach Algerien: Konsulatsvisum vor der Abreise oder Visum bei Ankunft im Süden auf einer organisierten Reise — offen für jede Nationalität."
  },
  {
    "slug": "visum-hilfe-algerien",
    "en": "/visa-support/",
    "fr": "/fr/assistance-visa-algerie/",
    "eyebrow": "Vor der Reise",
    "h1": "Visum-Hilfe für Algerien",
    "lead": "Das Visum schreckt mehr Reisende ab als jeder andere Teil der Planung, fast immer aus einem einfachen Grund: Die Konsulate verlangen Unterlagen, die nur ein lizenzierter algerischer Veranstalter ausstellen kann. Genau das sind wir. Wir erteilen das Visum nicht — das tun das Konsulat oder die algerischen Behörden — aber wir stellen die gesamte Akte zusammen, kostenlos bei jeder Buchung, und sagen Ihnen genau, was Sie mitbringen müssen.",
    "published": "2026-07-27",
    "sections": [
      {
        "h": "Was wir vorbereiten — kostenlos bei jeder Buchung",
        "list": [
          "Das offizielle Einladungsschreiben (Touristen-Voucher) auf Briefpapier der Agentur",
          "Die Bestätigung von Reiseverlauf und Hotels, stimmig zum Einladungsschreiben",
          "Die genaue Liste der für Ihre Staatsangehörigkeit verlangten Dokumente",
          "Begleitung Schritt für Schritt bis zur Abgabe der Unterlagen"
        ]
      },
      {
        "h": "Weg 1 — das Konsulatsvisum",
        "p": "Das ist der übliche Weg für den Norden, die Küste, die römischen Städte und das M'Zab-Tal — und der einzige für Individualreisende. Der Antrag wird bei dem algerischen Konsulat gestellt, das für Ihren Wohnort zuständig ist, in der Regel persönlich. Nahezu alle Konsulate verlangen das Einladungsschreiben einer lizenzierten algerischen Agentur: genau dieses Dokument stellen wir Ihnen aus. Dass Schreiben und Buchungen zusammenpassen, entscheidet darüber, ob eine Akte durchgeht oder zurückkommt."
      },
      {
        "h": "Weg 2 — die Sahara-Genehmigung",
        "p": "Für organisierte Reisen, die über den tiefen Süden einreisen — Djanet oder Tamanrasset — erstellen wir vorab ein Visum-Genehmigungsdokument mit QR-Code, der im Portal des algerischen Innenministeriums überprüfbar ist. Das Visum wird dann bei der Ankunft erteilt, ohne Konsulatstermin. Entscheidend ist die Route, nicht der Pass: Dieser Weg steht Reisenden jeder Staatsangehörigkeit offen, sofern das Programm eine organisierte Sahara-Reise ist. Das Dokument kostet 40 €; die Zusammenstellung der Akte bleibt kostenlos, und bei der Ankunft wird an die Behörden eine Visumgebühr fällig, deren Höhe von der Staatsangehörigkeit abhängt."
      },
      {
        "h": "Was in der Regel verlangt wird",
        "list": [
          "Ein Reisepass, der bei Einreise noch mindestens sechs Monate gültig ist",
          "Ein aktuelles Passfoto und das ausgefüllte Antragsformular",
          "Eine Flugreservierung",
          "Unser Einladungsschreiben sowie die Reise- und Hotelbestätigung"
        ]
      },
      {
        "h": "Bearbeitungszeit",
        "p": "Für das Konsulatsvisum rechnen Sie mit zwei bis vier Wochen, mit deutlichen Unterschieden je nach Konsulat und Jahreszeit: Der Sommer und die Wochen vor den großen Festen sind am langsamsten. Der Sahara-Weg ist schneller, weil er von keinem Termin abhängt. In beiden Fällen empfehlen wir, die Reise mindestens einen Monat vor Abflug zu bestätigen und keine nicht erstattbaren Flüge zu kaufen, solange das Visum nicht vorliegt."
      },
      {
        "h": "Was wir nicht versprechen",
        "p": "Die algerischen Einreiseregeln unterscheiden sich nach Staatsangehörigkeit und ändern sich mit der Zeit. Wir veröffentlichen keine Listen visumfreier Länder, denn einen Fehler bezahlt die reisende Person am Abfluggate: Ihr algerisches Konsulat ist die maßgebliche Stelle für Ihren eigenen Pass. Wir sind Ihr Partner für die Unterlagen und bestätigen Ihnen schriftlich, welcher Weg für Sie gilt, bevor Sie einen Flug buchen."
      }
    ],
    "faqs": [
      {
        "q": "Was kostet Ihre Visum-Hilfe?",
        "a": "Die Vorbereitung der Unterlagen ist bei jeder Buchung kostenlos: Einladungsschreiben, Bestätigungen und Checkliste kosten nichts. Kostenpflichtig ist allein das Sahara-Genehmigungsdokument mit 40 €, dazu die Visumgebühr, die bei der Ankunft an die Behörden gezahlt wird."
      },
      {
        "q": "Wie lange dauert das Konsulatsvisum?",
        "a": "Im Schnitt zwei bis vier Wochen, je nach Konsulat und Jahreszeit. Bestätigen Sie die Reise mindestens einen Monat vorher und kaufen Sie keine nicht erstattbaren Flüge, bevor das Visum im Pass steht."
      },
      {
        "q": "Kann ich Norden und Wüste verbinden?",
        "a": "Ja. Über den Sahara-Weg lässt sich eine Reise aus Norden und Süden zusammensetzen, sofern etwa die Hälfte der Reise in einer Sahara-Wilaya stattfindet. Wir gestalten das Programm so, dass es diese Bedingung erfüllt."
      },
      {
        "q": "Ist das Genehmigungsdokument offiziell?",
        "a": "Ja. Es trägt einen QR-Code, der im Portal des algerischen Innenministeriums überprüft werden kann. Die Ausstellung läuft über die offiziellen Kanäle: Wir führen die Akte, das Visum erteilen die algerischen Behörden."
      },
      {
        "q": "Muss ich eine komplette Rundreise buchen?",
        "a": "Für den Sahara-Weg ja: Die Genehmigung gehört zur Organisation der Reise und ist keine eigenständige Dienstleistung. Für den Konsulatsweg stellen wir das Einladungsschreiben für jede Reise aus, die wir durchführen — auch für eine reine Nordroute."
      }
    ],
    "cta": {
      "h": "Nennen Sie uns Pass und Reisedaten",
      "p": "Wir bestätigen Ihnen schriftlich, welcher Weg für Sie gilt, und senden Ihnen die Dokumenten-Checkliste."
    },
    "seoTitle": "Visum-Hilfe für Algerien | Algeria Compass",
    "seoDescription": "Einladungsschreiben, Bestätigungen und Dokumenten-Checkliste kostenlos bei jeder Buchung — plus die Sahara-Genehmigung für die Einreise im Süden."
  },
  {
    "slug": "budget-algerien",
    "en": "/blog/algeria-travel-cost/",
    "fr": "/fr/budget-algerie/",
    "eyebrow": "Reise vorbereiten",
    "h1": "Was kostet eine Reise nach Algerien?",
    "published": "2026-08-01",
    "lead": "Algerien gilt als schwer kalkulierbar, und das hat einen einzigen Grund: Es gibt einen offiziellen Wechselkurs und einen weit verbreiteten Parallelkurs, und der Abstand zwischen beiden ist groß. Wer das verstanden hat und mit Bargeld reist, findet ein erschwingliches Land vor — mit einer Ausnahme, der geführten Sahara.",
    "sections": [
      {
        "h": "Die kurze Antwort",
        "list": [
          "Essen und lokale Verkehrsmittel — nach europäischen Maßstäben günstig",
          "Hotels — Mittelklasse, 50–90 € für ein komfortables Zimmer in der Stadt",
          "Sahara — der teuerste Posten: Guide, 4×4, Genehmigungen und Inlandsflüge"
        ]
      },
      {
        "h": "Tagesbudgets im Norden",
        "p": "Ohne internationale Flüge gerechnet: Sparsam Reisende kommen im Norden mit rund 25–45 € pro Tag aus — einfache Häuser, lokale Küche, Bahn und Bus. In der Mittelklasse liegt der Tag bei etwa 55–110 €, mit komfortablen Hotels, dem einen oder anderen privaten Transfer und einem Tagesguide. Eine geführte Expedition in die tiefe Wüste ist eine andere Größenordnung: rund 140–280 € und mehr pro Tag."
      },
      {
        "h": "Bargeld, Karten und der Wechselkurs",
        "p": "Für Reisende ist Algerien eine Bargeldwirtschaft. Außerhalb der großen Stadthotels werden Karten kaum akzeptiert, und Geldautomaten arbeiten unzuverlässig. Nehmen Sie Dinar für den Alltag und Euro zum Wechseln mit, und informieren Sie sich vor der Abreise über die aktuellen Kurse — der Unterschied zwischen offiziellem und Parallelkurs verändert die Kaufkraft vor Ort erheblich."
      },
      {
        "h": "Wohin das Geld geht",
        "list": [
          "Der internationale Flug — meist der größte Einzelposten der ganzen Reise",
          "Die Sahara — wer in den tiefen Süden fährt, bezahlt hier das eigentliche Kapitel",
          "Die Art, wie Sie Geld wechseln — sie entscheidet, was Ihr Budget vor Ort wert ist"
        ]
      },
      {
        "h": "Warum die Wüste den Unterschied macht",
        "p": "Für Expeditionsverhältnisse ist die algerische Sahara nicht teuer, doch sie stellt den Nordteil einer Reise in den Schatten. Bezahlt werden akkreditierte Guides, ausgerüstete 4×4 mit Fahrern, Treibstoff, Wasser, Satellitenkommunikation, Verpflegung im Camp, die Genehmigungen und der Inlandsflug in den Süden. Kalkulieren Sie diese Etappe getrennt: Sie wird als eigenes Paket organisiert, und genau hier zahlt sich sorgfältige Planung am stärksten aus."
      },
      {
        "h": "Fehler, die Geld kosten",
        "list": [
          "Sich auf Kreditkarten verlassen — führen Sie Bargeld in Dinar mit",
          "Das gesamte Geld zum offiziellen Kurs wechseln, ohne den Parallelkurs zu kennen",
          "Die Sahara unterschätzen und sie nicht als eigenen Budgetposten führen",
          "Ohne Euro anreisen, die sich vor Ort wechseln lassen"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Ist Algerien ein teures Reiseland?",
        "a": "Nein. Essen und lokale Verkehrsmittel sind günstig, komfortable Hotels liegen in der Mittelklasse, und teuer wird allein die geführte Wüstenexpedition. Im Norden rechnen Sie ohne internationale Flüge mit etwa 55–110 € pro Tag."
      },
      {
        "q": "Welches Tagesbudget braucht man in Algerien?",
        "a": "Sparsam Reisende kommen im Norden mit 25–45 € pro Tag aus, in der Mittelklasse sind es 55–110 €. Eine geführte Wüstenexpedition kostet deutlich mehr: rund 140–280 € und mehr pro Tag."
      },
      {
        "q": "Bargeld oder Karte?",
        "a": "Bargeld. Karten werden außerhalb der großen Stadthotels kaum akzeptiert und Geldautomaten sind unzuverlässig. Nehmen Sie Dinar für den Alltag und Euro zum Wechseln mit."
      },
      {
        "q": "Warum ist der Wechselkurs so wichtig?",
        "a": "Algerien hat einen offiziellen und einen weit verbreiteten Parallelkurs, und der Abstand ist erheblich. Wo und wie Sie wechseln, verändert Ihre Kaufkraft vor Ort spürbar — es lohnt sich, das vor der Abreise zu klären."
      }
    ],
    "cta": {
      "h": "Ein klares Angebot, alles inklusive",
      "p": "Nennen Sie uns Ihre Termine — wir kalkulieren eine private Reise ohne Überraschungen vor Ort."
    },
    "seoTitle": "Algerien: was kostet die Reise? Budget 2026",
    "seoDescription": "Ist Algerien teuer? Kosten für Unterkunft, Essen, Verkehr, Guides und Sahara — und der Parallelkurs, der vor Ort alles verändert."
  },
  {
    "slug": "reiseroute-algerien",
    "en": "/blog/algeria-itinerary/",
    "fr": "/fr/itineraire-algerie/",
    "eyebrow": "Reise vorbereiten",
    "h1": "Reiseroute für Algerien: 7, 10 und 14 Tage",
    "published": "2026-08-01",
    "lead": "Algerien ist das größte Land Afrikas, und der häufigste Planungsfehler besteht darin, es als ein einziges Ziel zu behandeln. Eine gute Route wählt eine oder zwei Regionen und bereist sie richtig, statt zwischen Mittelmeer und tiefer Sahara hin und her zu hetzen. Drei Pläne, die funktionieren.",
    "sections": [
      {
        "h": "Wie viele Tage braucht man?",
        "list": [
          "Eine Woche genügt für einen konzentrierten Norden — Algier, ein Stück Küste, der römische Osten",
          "Zehn Tage erlauben eine zweite Region: den Westen oder das M'Zab-Tal",
          "Zwei Wochen sind das ideale Maß für eine erste Reise, die den Norden mit einer echten Sahara-Etappe verbindet"
        ]
      },
      {
        "h": "7 Tage — das Wesentliche des Nordens",
        "p": "Eine erste Reise mit knapper Zeit, am besten im Frühling oder Herbst. Algier und die Kasbah (zwei Nächte), Tipaza als Tagesausflug an der Küste, Constantine (zwei Nächte) als Basis für den Osten, dann Timgad und Djémila als Tagesausflüge und die Rückfahrt über Sétif. Alles ist über Straße, Bahn und kurze Inlandsflüge erreichbar und verlangt keine besonderen Genehmigungen."
      },
      {
        "h": "10 Tage — der Norden plus eine Region",
        "p": "Nehmen Sie den Kern der sieben Tage und ergänzen Sie genau eine Region. Entweder den andalusischen Westen mit Tlemcen und seinem almohadischen und zianidischen Erbe sowie Oran an der Küste. Oder Sie fliegen nach Ghardaïa ins M'Zab-Tal, fünf befestigte Oasenstädte, die die moderne Architektur beeinflusst haben. Beides fügt ein eigenes zweites Kapitel hinzu, ohne die Logistik zu überdehnen."
      },
      {
        "h": "14 Tage — Norden und tiefe Sahara",
        "p": "Die vollständige erste Reise. In der ersten Woche der römische Norden, danach der Flug in den Süden für eine geführte Wüstenetappe im Fenster von November bis Februar: Djanet als Tor zum Tassili n'Ajjer mit prähistorischer Felskunst und Sandsteinwäldern, oder Tamanrasset für das Hoggar und den Sonnenaufgang am Assekrem. Die Südetappen laufen über einen lizenzierten Veranstalter, mit 4×4, akkreditiertem Guide und Genehmigungen."
      },
      {
        "h": "Die Logistik richtig planen",
        "list": [
          "Fliegen Sie die langen Etappen — Algier–Djanet und Algier–Tamanrasset sind Flüge, keine Fahrten",
          "Halten Sie sich an die Saison: der Norden im Frühling und Herbst, die Wüste im Winter",
          "Beginnen Sie mit den Papieren früh — Visum und Südgenehmigungen brauchen Vorlauf"
        ]
      },
      {
        "h": "Fehler, die eine Route ruinieren",
        "list": [
          "Norden und tiefen Süden in eine einzige Woche pressen",
          "Die langen Südstrecken fahren, statt zu fliegen",
          "Die Sahara im Frühling oder Sommer einplanen",
          "Visum und Wüstengenehmigungen zu spät starten"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Wie viele Tage braucht man für Algerien?",
        "a": "Rechnen Sie mit zehn bis vierzehn Tagen für eine erste Reise, die den römischen Norden mit einer Wüstenregion verbindet. Eine Woche genügt für einen konzentrierten Aufenthalt im Norden."
      },
      {
        "q": "Reicht eine Woche für Algerien?",
        "a": "Ja, für eine Region. Eine Woche deckt Algier, ein Stück Küste und die römischen Städte des Ostens bequem ab. Für die große Sahara reicht sie nicht."
      },
      {
        "q": "Kann man Norden und Sahara verbinden?",
        "a": "Ja, auf vierzehn Tagen: erst der römische Norden, dann der Flug nach Djanet oder Tamanrasset für eine geführte 4×4-Etappe, zwischen November und Februar."
      },
      {
        "q": "Braucht man für eine Route durch Algerien einen Guide?",
        "a": "Im Norden nicht, dort reist man eigenständig. Der tiefe Süden verlangt akkreditierten Guide, 4×4 und Genehmigungen, organisiert von einem lizenzierten Veranstalter."
      }
    ],
    "cta": {
      "h": "Eine private Route nach Maß",
      "p": "Nennen Sie uns Ihre Termine — wir bauen die Reise um Sie herum, Wüstenetappen und Genehmigungen inbegriffen."
    },
    "seoTitle": "Algerien Reiseroute: 7, 10 und 14 Tage (2026)",
    "seoDescription": "Fertige Reiserouten für Algerien — 7, 10 oder 14 Tage: Algier, Küste, römische Städte und Sahara, mit Etappen, Saison und Logistik."
  },
  {
    "slug": "algerische-kueche",
    "en": "/blog/algerian-food-guide/",
    "fr": "/fr/cuisine-algerienne/",
    "eyebrow": "Kultur & Küche",
    "h1": "Was isst man in Algerien?",
    "published": "2026-08-01",
    "lead": "Essen ist in Algerien selten ein Geschäft und fast immer Gastfreundschaft: Man setzt sich, und das Essen kommt noch lange, nachdem man satt ist. Die Küche steht an einer Kreuzung aus amazighischen, arabischen, osmanischen, andalusischen und französischen Einflüssen — großzügig, aromatisch und von Region zu Region verschieden.",
    "sections": [
      {
        "h": "Die Klassiker",
        "list": [
          "Couscous — das Nationalgericht aus gedämpftem Hartweizengrieß mit Fleisch-Gemüse-Brühe, traditionell freitags und zu Festen",
          "Chorba und H'rira — duftende Suppen, die das Abendessen tragen, allgegenwärtig im Ramadan",
          "Mechoui — am Spieß gebratenes Lamm, das Festgericht schlechthin",
          "Tajines — langsam geschmorte Gerichte mit Oliven, Pflaumen oder Quitten",
          "Bourek — knusprige frittierte Teigrollen mit Fleisch oder Käse"
        ]
      },
      {
        "h": "Was jenseits des Couscous auf den Tisch kommt",
        "p": "Suchen Sie nach Rechta, den fein von Hand gezogenen Nudeln von Algier, nach Mhadjeb, dem gefüllten Grießfladen der Straßenküche, und nach Hmiss, einem Dip aus gerösteten Paprika und Tomaten. Brot ist heilig, vom Baguette über das flache Kesra bis zum blättrigen Msemen. Diese Alltagsgerichte wechseln von Region zu Region und von Familie zu Familie."
      },
      {
        "h": "Süßes",
        "p": "Die Konditorei ist ein eigenes Kapitel und lebt von Mandeln, Datteln und Honig: Makrout aus Grieß und Datteln, Gazellenhörner, Baklawa und eine lange Reihe von Festgebäcken, die zu Hochzeiten und zum Eid gebacken werden. Dazu kommen frische Datteln aus den Oasen des Südens, die mit den abgepackten Früchten des Supermarkts wenig gemein haben."
      },
      {
        "h": "Das Ritual des Tees",
        "p": "Minztee begleitet alles. In der Sahara sind die drei aus großer Höhe eingeschenkten Gläser eine Zeremonie und kein Getränk, das man eilig hinunterstürzt: Das erste Glas gilt als stark, das zweite als mild, das dritte als süß. Wer sich Zeit dafür nimmt, versteht mehr von der Gastfreundschaft des Landes als bei jeder Besichtigung."
      },
      {
        "h": "Gut zu wissen",
        "list": [
          "Gegessen wird überwiegend halal; Schweinefleisch wird nicht serviert",
          "Vegetarisch geht gut mit Gemüse-Couscous, Suppen, Salaten und Brot — viele Brühen sind allerdings auf Fleischbasis",
          "Die Küche ist aromatisch mehr als scharf: Kreuzkümmel, Koriander, Zimt und Harissa nach Gericht",
          "Alkohol ist wenig verbreitet und in einigen Hotels und lizenzierten Lokalen erhältlich; bleiben Sie diskret",
          "Trinken Sie im Süden abgefülltes Wasser"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Was ist das Nationalgericht Algeriens?",
        "a": "Couscous — gedämpfter Hartweizengrieß mit einer Brühe aus Fleisch und Gemüse, traditionell freitags und zu Festen gegessen. Die UNESCO hat ihn als gemeinsames Erbe des Maghreb anerkannt."
      },
      {
        "q": "Was sollte man in Algerien unbedingt probieren?",
        "a": "Couscous, Chorba, Mechoui, Bourek und Tajines, dazu Rechta, Mhadjeb und traditionelles Brot. Und die Konditorei: Makrout, Gazellenhörner und Baklawa, begleitet von Minztee."
      },
      {
        "q": "Ist die algerische Küche scharf?",
        "a": "Sie ist aromatisch mehr als scharf. Kreuzkümmel, Koriander und Zimt prägen die Gerichte, Harissa kommt je nach Rezept dazu und lässt sich in der Regel dosieren."
      },
      {
        "q": "Kann man sich vegetarisch ernähren?",
        "a": "Recht gut. Gemüse-Couscous, Suppen, Salate und Brot sind überall zu finden; achten Sie darauf, dass viele Brühen auf Fleischbasis zubereitet werden."
      },
      {
        "q": "Bekommt man in Algerien Alkohol?",
        "a": "Algerien ist mehrheitlich muslimisch; Alkohol ist in einigen Hotels und lizenzierten Lokalen erhältlich, aber wenig verbreitet. Außerhalb der großen Städte bleibt man besser diskret."
      }
    ],
    "cta": {
      "h": "Algerien schmecken",
      "p": "Unsere Reisen geben dem Tisch und den Märkten echten Raum — Familienküche, Konditoreien und Tee im Camp."
    },
    "seoTitle": "Algerische Küche: was man in Algerien isst",
    "seoDescription": "Was man in Algerien isst: Couscous, Chorba, Mechoui, Tajines, Konditorei und Minztee. Der Ratgeber zur algerischen Küche, Gericht für Gericht."
  },
  {
    "slug": "schnee-sahara-algerien",
    "en": "/blog/algeria-snow-to-sahara/",
    "fr": "/fr/neige-sahara-algerie/",
    "eyebrow": "Winter in Algerien",
    "h1": "Vom Schnee in die Sahara: vier Jahreszeiten in einer Reise",
    "published": "2026-08-01",
    "lead": "Die meisten Besucher stellen sich Algerien als eine einzige Kulisse vor: Sand. Tatsächlich ist es das größte Land Afrikas, und seine Klimazonen stapeln sich — Mittelmeerküste, bewaldete Berge, kalte Hochebenen, dann die Sahara. Im Winter entsteht daraus eine seltene Reise: an einem Tag Schnee, wenige Tage später warme Dünen.",
    "sections": [
      {
        "h": "Ja, in Algerien schneit es",
        "list": [
          "Chréa, in den Zedernwäldern über Blida — rund eine Stunde von Algier, mit einer kleinen Skistation",
          "Tikjda im Djurdjura der Kabylei — Bergwandern, Schnee und eine weitere bescheidene Station",
          "Die Aurès über Batna — verschneite Gipfel in der Nähe der römischen Stadt Timgad",
          "Die Hochebenen um Sétif und Batna — echte kalte Winter, gelegentlich mit Schnee in den Städten selbst"
        ]
      },
      {
        "h": "Vier Zonen in einem Land",
        "list": [
          "Mittelmeerküste — mild, grün und zu Fuß angenehm, etwa 10–17 °C bei etwas Regen",
          "Berge — Zedernwald, Schnee und kleine Skistationen, um den Gefrierpunkt oder darunter",
          "Hochebenen — römische Städte unter einem riesigen Himmel, kalt und klar",
          "Sahara — Dünen, Felskunst und Camps, Tage um 20–25 °C und eisige Nächte"
        ]
      },
      {
        "h": "Die Schnee-Sahara-Woche",
        "p": "Der Kontrast funktioniert nur von Dezember bis Februar, wenn sich der Schnee in den Bergen mit der Hochsaison der Sahara überschneidet. Algier für zwei Nächte, mit der Kasbah und der Seeluft. Chréa als Tagesausflug oder eine Nacht, für Zedern und Schnee. Dann der Flug nach Djanet oder Tamanrasset für drei bis vier Nächte im geführten 4×4, mit Dünen, Felskunst und Camps unter einem außergewöhnlichen Winterhimmel. Wer möchte, ergänzt den römischen Osten — Timgad und Djémila — an kalten, glasklaren Tagen."
      },
      {
        "h": "Fliegen Sie die Südetappe",
        "p": "Die Straßendistanzen zwischen dem Norden und dem tiefen Süden sind enorm und in einem normalen Urlaub nicht zu bewältigen. Air Algérie und Tassili Airlines verbinden Algier mit Djanet und Tamanrasset; von dort übernimmt das Team mit den 4×4. Alles Weitere zur Fortbewegung steht in unserem Verkehrsratgeber."
      },
      {
        "h": "Packen für zwei Klimazonen",
        "p": "Das ist der Teil, den fast alle unterschätzen. In dieselbe Tasche gehören echte Bergschichten — warme Kleidung, wasserdichte Außenlage, feste Schuhe — und zugleich die Ausrüstung für die Wüste: konsequenter Sonnenschutz am Tag und noch einmal warme Schichten für die Nächte im Camp, die gegen null gehen."
      },
      {
        "h": "Wann es nicht funktioniert",
        "p": "Im Frühling ist der Schnee weitgehend verschwunden: Der Norden ist wunderschön, aber der Kontrast fehlt. Im Sommer ist die tiefe Wüste gefährlich heiß und faktisch gesperrt, und die Veranstalter fahren nicht. Diese Reise ist damit ausdrücklich eine Winterreise — was sich gut mit Weihnachten und Neujahr verbindet, wenn die Sahara ohnehin in Bestform ist."
      }
    ],
    "faqs": [
      {
        "q": "Schneit es in Algerien?",
        "a": "Ja. Der Atlas bekommt echten Winterschnee: Chréa über Blida, das Djurdjura um Tikjda in der Kabylei und die Aurès. Schnee fällt in der Regel von Dezember bis März, und auch die Hochebenen um Sétif und Batna erleben kalte, gelegentlich verschneite Winter."
      },
      {
        "q": "Kann man in Algerien Ski fahren?",
        "a": "Es gibt kleine Stationen in Chréa, etwa eine Stunde von Algier, und in Tikjda im Djurdjura. Das sind bescheidene Anlagen und keine Alpenorte, doch Ski und Schneetage sind in einem guten Winter durchaus real."
      },
      {
        "q": "Kann man Schnee und Sahara auf derselben Reise sehen?",
        "a": "Ja, im Winter. Weil sich Küste, Berge, Hochebenen und Wüste in einem Land stapeln, können Sie im Zedernschnee bei Blida wandern und nach einem kurzen Inlandsflug in derselben Woche in warmen Dünen stehen."
      },
      {
        "q": "Welcher Monat eignet sich am besten für diesen Kontrast?",
        "a": "Dezember bis Februar. In diesem Fenster überschneidet sich die Schneesaison der Berge mit der Hochsaison der Sahara, wenn die Wüstentage mild und die Nächte klar und kalt sind. Im Frühling ist der Schnee fort, im Sommer ist die tiefe Wüste unzugänglich."
      },
      {
        "q": "Wie kalt wird es in Algerien?",
        "a": "In den Bergen fällt die Temperatur im Winter um den Gefrierpunkt oder darunter, mit Schnee. Die Nordküste bleibt mild bei etwa 10–17 °C. Die Sahara hat warme Tage, oft 20–25 °C, doch die Nächte können gegen null gehen — das überrascht die meisten Gäste."
      }
    ],
    "cta": {
      "h": "Die Schnee-und-Sahara-Version Ihres Urlaubs",
      "p": "Nennen Sie uns Ihre Termine — Bergtage, Südflug, Genehmigungen und Camps inbegriffen."
    },
    "seoTitle": "Schnee und Sahara: Algerien im Winter erleben",
    "seoDescription": "Schneit es in Algerien? Ja — Chréa, Tikjda und die Aurès. Wie Sie Bergschnee und warme Sahara-Dünen in einer einzigen Winterwoche verbinden."
  },
  {
    "slug": "weihnachten-neujahr-algerien",
    "en": "/blog/christmas-new-year-in-algeria/",
    "fr": "/fr/noel-nouvel-an-algerie/",
    "eyebrow": "Winterreise",
    "h1": "Weihnachten und Neujahr in Algerien",
    "published": "2026-08-01",
    "lead": "Die meisten buchen Weihnachten irgendwo teuer und überfüllt. Algerien bietet das Gegenteil: warme Wüstentage, menschenleere Weltklassestätten und keinen Feiertagsaufschlag — denn in einem mehrheitlich muslimischen Land ist der 25. Dezember schlicht ein Arbeitstag. Das ist das ehrliche Argument. So sieht eine Reise über die Feiertage tatsächlich aus.",
    "sections": [
      {
        "h": "Warum Ende Dezember eine ausgezeichnete Zeit ist",
        "list": [
          "Die Sahara ist in Hochsaison — Tage um 20–25 °C und kalte, außergewöhnlich klare Nächte. Heiligabend in einem Wüstencamp vergisst man nicht",
          "Der Norden bleibt mild und grün, etwa 10–17 °C, während Europa friert",
          "Der Atlas trägt Schnee — Chréa und das Djurdjura, ein bis zwei Stunden von der Hauptstadt",
          "Keine Menschenmengen: keine Schlange in Timgad, kein Feiertagsaufschlag im Hotel"
        ]
      },
      {
        "h": "Wie Weihnachten vor Ort aussieht",
        "p": "Sagen wir es offen: Algerien begeht Weihnachten kommerziell nicht. Es gibt keine Weihnachtsmärkte, keine geschmückten Einkaufsstraßen und außerhalb einiger internationaler Hotels auch keine Festmenüs. Was es gibt, sind Gottesdienste der kleinen christlichen Gemeinde — in der Kathedrale Sacré-Cœur und in der Basilika Notre-Dame d'Afrique in Algier sowie in Oran und Constantine. Notre-Dame d'Afrique ist ganzjährig ein regulärer Besuchsort mit einem großartigen Blick über die Bucht. Ansonsten herrscht vollkommene Normalität — was für alle, die die kommerzielle Saison satthaben, genau der Reiz ist."
      },
      {
        "h": "Neujahr — und dann Yennayer",
        "p": "Der 1. Januar ist gesetzlicher Feiertag. Und am 12. Januar folgt Yennayer, das amazighische Neujahr, ebenfalls ein nationaler Feiertag, gefeiert mit traditionellen Mahlzeiten und Familientreffen, am stärksten in der Kabylei, in den Aurès und im M'Zab. Eine Reise von Ende Dezember bis Mitte Januar kann damit drei Neujahrsfeste umfassen."
      },
      {
        "h": "Eine Woche, die funktioniert",
        "p": "Sieben bis zehn Tage über die Feiertage: Algier für zwei bis drei Nächte mit der Kasbah, der Uferpromenade und Notre-Dame d'Afrique. Dann der Flug nach Djanet oder Tamanrasset für eine geführte Wüstenetappe von drei bis vier Nächten, mit Dünen, Felskunst und Camps unter dem Sternenhimmel über Weihnachten. Zum Jahreswechsel zurück in den Norden — oder ein Abstecher nach Chréa für Schnee und Zedernwald."
      },
      {
        "h": "Praktische Hinweise",
        "list": [
          "Packen Sie für beide Extreme: mild und zeitweise nass im Norden, Wüstennächte nahe dem Gefrierpunkt",
          "Starten Sie das Visum früh — die Konsulate sind im Dezember stark ausgelastet",
          "Buchen Sie die Wüstenetappe rechtzeitig: Der Winter ist die Hochsaison der Sahara, und die geführten Kapazitäten sind begrenzt",
          "Rechnen Sie am 25. Dezember mit einem gewöhnlichen Arbeitstag — Geschäfte, Stätten und Verkehr laufen normal"
        ]
      },
      {
        "h": "Für wen sich diese Reise eignet",
        "p": "Für alle, die Wintersonne ohne Langstreckenflug suchen, für Fotografinnen und Sternebeobachter, die auf klare, trockene Wüstenhimmel und tiefstehendes Winterlicht aus sind, und für alle, die Menschenmengen meiden. Weniger geeignet ist sie für Gäste, die ein europäisches Weihnachtsfest mit Märkten und Dekoration erwarten — das findet hier nicht statt."
      }
    ],
    "faqs": [
      {
        "q": "Kann man Weihnachten in Algerien verbringen?",
        "a": "Ja, und es ist eine ausgezeichnete Zeit. Weihnachten ist in Algerien kein Feiertag: Alles läuft normal, ohne Menschenmengen und ohne Preisaufschlag. Ende Dezember ist zudem Hochsaison in der Sahara, mit milden Tagen und sternklaren Nächten, während der Norden gemäßigt bleibt. In Algier, Oran und Constantine werden Gottesdienste gefeiert."
      },
      {
        "q": "Ist Algerien ein gutes Ziel für Wintersonne?",
        "a": "Für die Wüste ja: Im Dezember und Januar erreichen die Sahara-Tage oft 20–25 °C, bei kalten, klaren Nächten. Der mediterrane Norden bleibt mild und grün, etwa 10–17 °C. Ein Badeziel ist Algerien im Winter allerdings nicht."
      },
      {
        "q": "Wie ist das Wetter in Algerien im Dezember?",
        "a": "Die Nordküste ist mild und ziemlich regnerisch, um 10–17 °C. Der Atlas kann verschneit sein. Die Sahara ist trocken, mit warmen Tagen um 20–25 °C und Nächten nahe dem Gefrierpunkt."
      },
      {
        "q": "Gibt es in Algerien Weihnachtsfeiern?",
        "a": "Nicht im kommerziellen Sinn: keine Weihnachtsmärkte, und der 25. Dezember ist ein Arbeitstag. Die kleine christliche Gemeinde feiert in der Kirche — Kathedrale Sacré-Cœur und Notre-Dame d'Afrique in Algier sowie Kirchen in Oran und Constantine."
      },
      {
        "q": "Ist Neujahr in Algerien ein Feiertag?",
        "a": "Ja, der 1. Januar ist gesetzlicher Feiertag. Auch Yennayer, das amazighische Neujahr, ist am 12. Januar ein nationaler Feiertag — eine Reise Ende Dezember bis Mitte Januar kann also drei Feste verbinden."
      }
    ],
    "cta": {
      "h": "Ein Jahreswechsel in den Dünen?",
      "p": "Nennen Sie uns Ihre Termine — wir bauen die Route über die Feiertage, Genehmigungen inbegriffen."
    },
    "seoTitle": "Weihnachten in Algerien: die warme Winterreise",
    "seoDescription": "Weihnachten und Neujahr in Algerien: Sahara in Hochsaison, milde Küste, Schnee im Atlas — ohne Menschenmengen und ohne Feiertagsaufschlag."
  },
  {
    "slug": "transport-algerien",
    "en": "/blog/algeria-transportation-guide/",
    "fr": "/fr/transport-algerie/",
    "eyebrow": "Verkehr",
    "h1": "Fortbewegung in Algerien",
    "published": "2026-08-01",
    "lead": "Algerien ist das größte Land Afrikas, und der häufigste Fehler besteht darin, es wie ein kleines zu behandeln. Der Weg vom Mittelmeer in die tiefe Sahara ist eine kontinentale Reise und kein Tagesausflug. Die Regel ist einfach: für die langen Etappen fliegen, im Norden Bahn, Bus und Taxi nutzen, und in der Wüste den geführten 4×4.",
    "sections": [
      {
        "h": "Inlandsflüge",
        "p": "Für die langen Etappen und vor allem für die Sahara ist das Flugzeug die vernünftige Wahl. Air Algérie und Tassili Airlines verbinden Algier, Oran und Constantine untereinander sowie mit den südlichen Toren Djanet, Tamanrasset, Ghardaïa und Timimoun. Ein Flug macht aus einer zermürbenden Überlandfahrt von mehreren Tagen ein paar Stunden. Die Südstrecken verkehren mit begrenzter Frequenz und sind rund um Feste schnell ausgebucht: früh buchen und den Plan flexibel halten. Flüge sind das teuerste gängige Verkehrsmittel des Landes, für den Süden aber praktisch unverzichtbar."
      },
      {
        "h": "Bahn und Bus im Norden",
        "p": "Die staatliche SNTF fährt Fernzüge durch den besiedelten Norden und verbindet Algier mit Oran, Constantine, Annaba und Sétif, dazu Vorortlinien rund um die Hauptstadt. Auf den Hauptstrecken sind die Züge bequem und streckenweise landschaftlich schön. Die Takte sind dünner als in Europa, prüfen Sie die Fahrpläne also vorab. Fernbusse sind das Arbeitspferd des Landes: dichtes Netz, niedrige Preise und Verbindungen in Städte, die keine Bahn hat."
      },
      {
        "h": "Sammeltaxis und Straßenbahnen",
        "p": "Wo Bus und Bahn ausdünnen, übernimmt das Sammeltaxi, der Louage. Diese Taxis fahren feste Strecken zwischen Städten, starten nicht nach Fahrplan, sondern wenn sie voll sind, und werden bar bezahlt. Vereinbaren Sie den Preis oder lassen Sie sich den Festtarif bestätigen, bevor es losgeht. In den Städten selbst sind die öffentlichen Netze gut: Algier hat Metro und Straßenbahn, Oran, Constantine und Sétif moderne, günstige Trams."
      },
      {
        "h": "Mietwagen und private Fahrer",
        "p": "Mietwagen gibt es in den Städten und an den Flughäfen; im Norden mit guten Hauptstraßen und überschaubaren Distanzen funktioniert das gut. Viele Besucher entscheiden sich dennoch für einen privaten Fahrer: Er nimmt Navigation, Parkplatzsuche, Sprache und Kontrollpunkte ab, und Ortskenntnis macht aus Fahrzeit oft einen Teil der Reise. Für die Wüste ist Selbstfahren dagegen das falsche Werkzeug — dort braucht es einen lizenzierten Veranstalter mit ausgerüstetem 4×4."
      },
      {
        "h": "Straßen und Kontrollpunkte",
        "p": "Die Hauptachsen, allen voran die große Ost-West-Autobahn, sind im Allgemeinen gut, und das Netz ist weitläufig. Die Risiken sind weniger baulicher als menschlicher Natur: forscher Fahrstil, Fußgänger und Tiere, wechselnde Beleuchtung und lange leere Abschnitte im Landesinneren. Die feste Regel für Besucher lautet, Landstraßen nach Einbruch der Dunkelheit zu meiden. Routinekontrollen von Polizei und Gendarmerie sind normal: Papiere griffbereit halten und Geduld mitbringen."
      },
      {
        "h": "Die Wüste: 4×4 und Guide",
        "p": "Die Sahara folgt einer eigenen Verkehrslogik, und die ist nicht verhandelbar. Man erreicht eine südliche Stadt per Flug und bewegt sich von dort im geführten 4×4 innerhalb der genehmigten Zonen. Lizenzierte Veranstalter stellen Fahrzeuge, erfahrene Fahrer und Guides, Treibstoff, Wasser und Kommunikation und führen die Genehmigungen, die Wüstenreisen verlangen. Das ist organisiertes Expeditionsreisen und nichts, was man improvisiert."
      },
      {
        "h": "Praktische Regeln",
        "list": [
          "Führen Sie Bargeld mit — viele Fahrpreise und alle Louages sind bar zu zahlen",
          "Buchen Sie Inlandsflüge früh, besonders in den Süden, und über die Kanäle der Fluggesellschaft",
          "Planen Sie Puffer ein: Der Maßstab des Landes bestraft enge Anschlüsse",
          "Halten Sie die Adresse Ihrer Unterkunft auf Französisch oder Arabisch bereit",
          "Bestätigen Sie die erste Abfahrt eines Anschlusses am Vortag"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Wie bewegt man sich in Algerien am besten fort?",
        "a": "Fliegen Sie die langen Distanzen, vor allem in die Sahara, nutzen Sie Bahn und Bus zwischen den Städten des Nordens, Sammeltaxis für kurze Etappen und einen geführten 4×4 für die Wüste."
      },
      {
        "q": "Gibt es Inlandsflüge in Algerien?",
        "a": "Ja. Air Algérie und Tassili Airlines verbinden Algier, Oran und Constantine untereinander und mit südlichen Städten wie Djanet, Tamanrasset und Ghardaïa. Buchen Sie früh, die Frequenzen im Süden sind begrenzt."
      },
      {
        "q": "Fahren in Algerien Züge?",
        "a": "Ja. Die staatliche SNTF betreibt Fernverkehr im Norden, auf den Hauptstrecken bequem, dazu Vorortverkehr rund um Algier. Die Takte sind dünner als in Europa, also vorab die Fahrpläne prüfen."
      },
      {
        "q": "Wie funktionieren die Sammeltaxis?",
        "a": "Die Louages fahren feste Strecken zwischen Städten, starten, sobald sie voll sind, und werden bar bezahlt. Sie sind günstig und flexibel, aber weniger planbar als der Bus."
      },
      {
        "q": "Kann man in Algerien ein Auto mieten?",
        "a": "Ja, vor allem in den Städten und an den Flughäfen, und für den Norden ist das eine gute Lösung. Für die Wüste nicht: Dort braucht es einen lizenzierten Veranstalter mit 4×4, Guide und Genehmigungen."
      }
    ],
    "cta": {
      "h": "Wir übernehmen die gesamte Logistik",
      "p": "Inlandsflüge, Transfers und die 4×4 der Wüste — organisiert, bevor Sie ankommen."
    },
    "seoTitle": "Fortbewegung in Algerien: Verkehrsratgeber 2026",
    "seoDescription": "Wie man sich in Algerien fortbewegt: Inlandsflüge in den Süden, Bahn und Bus im Norden, Sammeltaxis, Trams und 4×4 für die Sahara."
  }
];

export const guideDeByEn = (en: string) => GUIDES_DE.find(g => g.en === en);

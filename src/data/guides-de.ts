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
  }
];

export const guideDeByEn = (en: string) => GUIDES_DE.find(g => g.en === en);

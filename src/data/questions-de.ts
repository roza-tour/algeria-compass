// German translations of the 44 question pages in src/content/question/.
//
// The English question collection is the single source of truth for WHICH
// questions exist and what the answer says; this file only carries language.
// Keep the slugs identical to the English ones — they are the join key, and a
// slug that drifts silently drops that question out of this language.
//
// Consumed by the on-site assistant's answer index
// (src/pages/answers-[lang].json.ts). Before this file existed the assistant
// held 462 answers in English and 204 in German, so a German-speaking
// visitor asking a question the site answers well was handed to WhatsApp
// instead of being answered.

export interface QuestionI18n {
  q: string;
  a: string;
  kf: [string, string][];
}

export const QUESTIONS_DE: Record<string, QuestionI18n> = {
  "are-there-atms-in-algeria": {
    "q": "Gibt es Geldautomaten in Algerien?",
    "a": "Ja, in den Städten und größeren Orten, aber verlassen Sie sich nicht darauf. Ausländische Visa- und Mastercard-Karten werden uneinheitlich akzeptiert, die Tageslimits sind niedrig, die Automaten sind oft außer Betrieb oder leer, und Sie erhalten den offiziellen Kurs. Bringen Sie das Bargeld mit, das Sie brauchen, statt damit zu rechnen, es vor Ort abzuheben.",
    "kf": [
      [
        "Wo",
        "Städte und größere Orte"
      ],
      [
        "Ausländische Karten",
        "Uneinheitlich akzeptiert"
      ],
      [
        "Limits",
        "Niedrige Tagesgrenzen"
      ],
      [
        "Kurs",
        "Der offizielle"
      ]
    ]
  },
  "are-there-domestic-flights-in-algeria": {
    "q": "Gibt es Inlandsflüge in Algerien?",
    "a": "Ja, und für den Süden sind sie unverzichtbar. Air Algérie und Tassili Airlines verbinden Algier mit Oran, Constantine, Annaba und den Sahara-Städten, darunter Djanet, Tamanrasset, Ghardaïa, Timimoun und Adrar. Das Flugzeug ist der einzige sinnvolle Weg in die tiefe Wüste.",
    "kf": [
      [
        "Fluggesellschaften",
        "Air Algérie, Tassili Airlines"
      ],
      [
        "Haupt-Drehkreuz",
        "Algier (ALG)"
      ],
      [
        "Sahara-Zugang",
        "Djanet, Tamanrasset, Ghardaïa, Adrar"
      ],
      [
        "Buchung",
        "Früh — die Südstrecken sind dünn"
      ]
    ]
  },
  "can-i-get-an-algeria-visa-on-arrival": {
    "q": "Bekommt man ein Algerien-Visum bei der Einreise?",
    "a": "In der Regel nein. Fast alle Besucher müssen das algerische Visum vor der Reise bei einem Konsulat beantragen. Die einzige anerkannte Ausnahme ist eine organisierte Sahara-Reise mit Einreise über den äußersten Süden (Djanet oder Tamanrasset), bei der ein lizenzierter algerischer Veranstalter die Einreise der Gruppe regeln kann. Klären Sie die aktuellen Regeln mit Ihrem Konsulat, bevor Sie Flüge buchen.",
    "kf": [
      [
        "Grundregel",
        "Visum im Voraus"
      ],
      [
        "Ausnahme",
        "Organisierte Reisen im äußersten Süden"
      ],
      [
        "Geregelt durch",
        "Einen lizenzierten algerischen Veranstalter"
      ],
      [
        "Bestätigen bei",
        "Ihrem nächsten Konsulat"
      ]
    ]
  },
  "can-i-use-credit-cards-in-algeria": {
    "q": "Kann man in Algerien mit Kreditkarte zahlen?",
    "a": "Kaum. Algerien läuft über Bargeld. Einige internationale Hotels, Airline-Büros und größere Geschäfte in Algier nehmen ausländische Karten, Restaurants, Läden, Taxis, Märkte und Eintrittskassen so gut wie nie. Rechnen Sie damit, den Alltag bar in Dinar zu bezahlen.",
    "kf": [
      [
        "Alltagsausgaben",
        "Nur bar, in Dinar"
      ],
      [
        "Karten manchmal",
        "Große Hotels, Airline-Büros"
      ],
      [
        "So gut wie nie",
        "Taxis, Märkte, Restaurants, Stätten"
      ],
      [
        "Planen Sie",
        "Eine Bargeldreise, Karte als Reserve"
      ]
    ]
  },
  "can-i-visit-algeria-without-a-tour-guide": {
    "q": "Kann man Algerien ohne Reiseführer besuchen?",
    "a": "Im Norden ja — Algier, Oran, Constantine, die Küste und die römischen Städte lassen sich selbstständig bereisen. Die tiefe Sahara ist anders: Der äußerste Süden wird mit einem lizenzierten Veranstalter, einem Guide und Genehmigungen besucht, individuelles Reisen ist dort aus Sicherheitsgründen eingeschränkt.",
    "kf": [
      [
        "Nordstädte und Küste",
        "Individuelles Reisen möglich"
      ],
      [
        "Römische Stätten",
        "Individuelles Reisen möglich"
      ],
      [
        "Tiefe Sahara",
        "Lizenzierter Veranstalter + Guide + Genehmigungen"
      ],
      [
        "Eigentliche Hürde",
        "Sprache und Logistik, nicht die Vorschriften"
      ]
    ]
  },
  "can-tourists-drive-in-algeria": {
    "q": "Dürfen Touristen in Algerien selbst fahren?",
    "a": "Rechtlich ja — Mietwagen gibt es, und ausländische Führerscheine mit internationalem Führerschein werden anerkannt — doch die meisten Besucher fahren besser mit Fahrer. Die Straßen im Norden sind gut und stark befahren, der Stadtverkehr ist forsch, die Beschilderung arabisch und französisch, und der tiefe Süden lässt sich gar nicht individuell befahren.",
    "kf": [
      [
        "Führerschein",
        "Der eigene plus internationaler Führerschein"
      ],
      [
        "Straßen im Norden",
        "Meist gut, forscher Verkehr"
      ],
      [
        "Nachtfahrten",
        "Auf Landstraßen besser meiden"
      ],
      [
        "Tiefe Sahara",
        "Individuell nicht erlaubt"
      ]
    ]
  },
  "can-vegetarians-eat-well-in-algeria": {
    "q": "Essen Vegetarier in Algerien gut?",
    "a": "Recht gut, mit etwas Mühe. Die algerische Küche ist reich an Hülsenfrüchten, Gemüse, Brot und Salaten, und viele Grundgerichte sind fleischlos — doch Fleisch steht im Zentrum der Gastfreundschaft, und der Begriff Vegetarismus ist wenig verbreitet. Sagen Sie klar, was Sie nicht essen, statt das Etikett zu verwenden.",
    "kf": [
      [
        "Von Natur aus fleischlos",
        "Salate, Hülsenfrüchte, Brote, Gebäck"
      ],
      [
        "Achten Sie auf",
        "Fleischbrühe in Suppen und Couscous"
      ],
      [
        "Vegan",
        "Schwieriger — Butter, Eier und Milch sind üblich"
      ],
      [
        "Bester Weg",
        "Die Lebensmittel nennen, nicht die Diät"
      ]
    ]
  },
  "can-you-drink-the-tap-water-in-algeria": {
    "q": "Kann man in Algerien Leitungswasser trinken?",
    "a": "Besser nicht. In den Städten wird das Wasser aufbereitet, doch die Versorgung ist stellenweise unterbrochen und das Wasser wird in Dachtanks gelagert; Besuchern wird daher Flaschenwasser empfohlen, das billig und überall erhältlich ist. Nutzen Sie es zum Trinken und Zähneputzen, besonders außerhalb der großen Städte.",
    "kf": [
      [
        "Zum Trinken",
        "Flaschenwasser"
      ],
      [
        "Warum",
        "Unterbrochene Versorgung und Tanklagerung"
      ],
      [
        "Erhältlich",
        "Flaschenwasser ist billig und überall"
      ],
      [
        "In der Wüste",
        "Das Wasser führt Ihr Veranstalter mit"
      ]
    ]
  },
  "can-you-visit-algeria-during-ramadan": {
    "q": "Kann man Algerien während des Ramadan besuchen?",
    "a": "Ja, und es ist eine der stimmungsvollsten Zeiten für einen Besuch — doch der Tagesrhythmus kehrt sich um. Viele Restaurants schließen tagsüber, Öffnungszeiten verschieben sich, und die Städte erwachen nach Sonnenuntergang. Von nicht-muslimischen Besuchern wird kein Fasten erwartet, nur Zurückhaltung beim Essen und Trinken in der Öffentlichkeit.",
    "kf": [
      [
        "Tagsüber",
        "Viele Restaurants geschlossen, ruhigere Straßen"
      ],
      [
        "Nach Sonnenuntergang",
        "Die Städte leben bis spät"
      ],
      [
        "Von Ihnen erwartet wird nicht",
        "Zu fasten"
      ],
      [
        "Von Ihnen erwartet wird",
        "Diskretes Essen und Trinken in der Öffentlichkeit"
      ]
    ]
  },
  "do-i-need-a-visa-for-algeria": {
    "q": "Brauche ich ein Visum für Algerien?",
    "a": "Die meisten Nationalitäten brauchen für Algerien ein Visum, das im Voraus bei einem algerischen Konsulat beantragt wird, in der Regel mit einem Einladungsschreiben eines Reiseveranstalters. Einige Regelungen erlauben ein Visum bei der Einreise für organisierte Sahara-Reisen über den Süden. Klären Sie die aktuellen Regeln stets mit dem nächstgelegenen algerischen Konsulat.",
    "kf": [
      [
        "Die meisten Reisenden",
        "Visum im Voraus erforderlich"
      ],
      [
        "Übliche Anforderung",
        "Einladung / Hotel- oder Reisebuchung"
      ],
      [
        "Sahara-Reisen",
        "Visum bei Einreise kann gelten"
      ],
      [
        "Bestätigen beim",
        "Algerischen Konsulat"
      ]
    ]
  },
  "do-i-need-an-invitation-letter-for-an-algeria-visa": {
    "q": "Brauche ich ein Einladungsschreiben für ein Algerien-Visum?",
    "a": "In den meisten Fällen ja. Algerische Konsulate wollen üblicherweise den Nachweis, dass Sie in Algerien erwartet werden — entweder eine private Einladung eines Gastgebers oder eine Einladung mit bestätigtem Programm eines lizenzierten Reiseveranstalters. Touristen ohne persönlichen Kontakt in Algerien nutzen den Weg über den Veranstalter.",
    "kf": [
      [
        "Meist erforderlich",
        "Ja, bei touristischen Anträgen"
      ],
      [
        "Privater Weg",
        "Einladung eines Gastgebers in Algerien"
      ],
      [
        "Touristischer Weg",
        "Einladung des Veranstalters + Buchung"
      ],
      [
        "Ausgestellt von",
        "Einer lizenzierten algerischen Agentur"
      ]
    ]
  },
  "do-i-need-vaccinations-for-algeria": {
    "q": "Brauche ich Impfungen für Algerien?",
    "a": "Für Reisende aus Europa oder Nordamerika ist routinemäßig keine Impfung vorgeschrieben, ein Gelbfieber-Nachweis kann jedoch verlangt werden, wenn Sie aus einem Endemiegebiet einreisen. Üblich ist der Rat, die Standardimpfungen aktuell zu halten. Sprechen Sie rechtzeitig mit einer reisemedizinischen Beratung.",
    "kf": [
      [
        "Vorgeschrieben",
        "Für die meisten Einreisen keine"
      ],
      [
        "Gelbfieber",
        "Nur bei Einreise aus einem Endemiegebiet"
      ],
      [
        "Häufig empfohlen",
        "Standardimpfungen aktuell"
      ],
      [
        "Klären mit",
        "Einer Reiseklinik, 6-8 Wochen vorher"
      ]
    ]
  },
  "do-people-speak-english-in-algeria": {
    "q": "Spricht man in Algerien Englisch?",
    "a": "Wenig. Arabisch und Tamazight sind Amtssprachen, Französisch ist die verbreitete Zweitsprache in Wirtschaft, Beschilderung und Verwaltung. Englisch nimmt unter jungen Leuten und im Tourismus zu, doch außerhalb von Hotels und Guides sollten Sie sich nicht darauf verlassen. Ein paar Brocken Französisch helfen sehr.",
    "kf": [
      [
        "Amtssprachen",
        "Arabisch und Tamazight"
      ],
      [
        "Weit verbreitet",
        "Französisch"
      ],
      [
        "Englisch",
        "Begrenzt, aber wachsend bei Jüngeren"
      ],
      [
        "Praktischer Tipp",
        "Ein paar französische Sätze lernen"
      ]
    ]
  },
  "do-you-tip-in-algeria": {
    "q": "Gibt man in Algerien Trinkgeld?",
    "a": "Trinkgeld wird geschätzt, aber nicht streng erwartet, und Algerien kennt keine feste Prozentkultur. Eine Rechnung aufrunden, einen kleinen Schein für guten Service liegen lassen und Guides und Fahrern am Ende der Reise spürbar danken — all das entspricht dem örtlichen Brauch. Geben Sie stets in Dinar, in bar.",
    "kf": [
      [
        "Restaurants",
        "Aufrunden oder rund 5-10 %"
      ],
      [
        "Guides und Fahrer",
        "Ein größerer Betrag am Reiseende"
      ],
      [
        "Hotelpersonal",
        "Kleine Scheine für echte Hilfe"
      ],
      [
        "Währung",
        "Dinar, immer bar"
      ]
    ]
  },
  "does-algeria-have-an-evisa": {
    "q": "Hat Algerien ein E-Visum?",
    "a": "Algerien hat kein allgemeines Online-Touristen-E-Visum, wie es etwa die Türkei oder Kenia anbieten. Anträge werden auf Papier bei einer algerischen Botschaft oder einem Konsulat gestellt, auch wenn manche Vertretungen inzwischen Online-Terminvergabe oder Formularvorbereitung anbieten. Seien Sie bei jeder Seite vorsichtig, die ein „Algerien-E-Visum“ verkauft.",
    "kf": [
      [
        "Allgemeines E-Visum",
        "Nicht verfügbar"
      ],
      [
        "Antragstellung",
        "Persönlich im Konsulat"
      ],
      [
        "Manche Konsulate bieten",
        "Online-Termine oder Formulare"
      ],
      [
        "Vorsicht vor",
        "Fremden „E-Visum“-Seiten"
      ]
    ]
  },
  "does-algeria-have-good-internet-and-mobile-coverage": {
    "q": "Hat Algerien gute Internet- und Mobilfunkabdeckung?",
    "a": "Im Norden ja — 4G ist in den Städten und entlang des besiedelten Korridors verbreitet, und eine lokale SIM ist billig und mit dem Reisepass leicht zu bekommen. Nach Süden dünnt die Abdeckung schnell aus, und in der tiefen Sahara gibt es gar kein Signal, weshalb Veranstalter Satellitentechnik mitführen.",
    "kf": [
      [
        "Städte im Norden",
        "Gutes 4G, breit verfügbar"
      ],
      [
        "Lokale SIM",
        "Günstig; Kauf mit Reisepass"
      ],
      [
        "Anbieter",
        "Djezzy, Mobilis, Ooredoo"
      ],
      [
        "Tiefe Sahara",
        "Keine Abdeckung — nur Satellit"
      ]
    ]
  },
  "how-do-you-get-around-in-algeria": {
    "q": "Wie kommt man in Algerien voran?",
    "a": "Algerien ist groß: Lange Strecken — vor allem in die Sahara — werden meist per Inlandsflug zurückgelegt, regionale Wege führen über die Straße. Auf unseren Reisen fahren Sie durchgehend im privaten Fahrzeug mit Fahrer-Guide und müssen sich nicht mit öffentlichen Verkehrsmitteln befassen.",
    "kf": [
      [
        "Lange Strecken",
        "Inlandsflüge (Djanet, Tamanrasset…)"
      ],
      [
        "Regional",
        "Privatfahrzeug / Straße"
      ],
      [
        "Städte",
        "Taxis; Algier hat Metro und Tram"
      ],
      [
        "Auf unseren Reisen",
        "Durchgehend privater Fahrer-Guide"
      ]
    ]
  },
  "how-do-you-get-from-algiers-airport-to-the-city": {
    "q": "Wie kommt man vom Flughafen Algier in die Stadt?",
    "a": "Der Flughafen Houari Boumediene liegt rund 20 km östlich der Innenstadt von Algier, je nach Verkehr 30 bis 45 Minuten Fahrt. Ein vorab gebuchter Transfer oder der Hotelwagen ist am unkompliziertesten; es gibt offizielle Taxis und eine Busverbindung. Vereinbaren Sie den Preis, bevor Sie einsteigen.",
    "kf": [
      [
        "Flughafen",
        "Houari Boumediene (ALG)"
      ],
      [
        "Entfernung",
        "Etwa 20 km östlich des Zentrums"
      ],
      [
        "Fahrt",
        "30-45 Minuten, je nach Verkehr"
      ],
      [
        "Beste Option",
        "Gebuchter Transfer oder Hotelwagen"
      ]
    ]
  },
  "how-long-does-an-algeria-visa-take": {
    "q": "Wie lange dauert ein Algerien-Visum?",
    "a": "Die Bearbeitungszeiten schwanken stark je nach Konsulat und Saison, von etwa zwei Wochen bis deutlich über einen Monat. Beantragen Sie es, sobald Ihr Konsulat es zulässt, und buchen Sie nie nicht erstattbare Flüge, bevor das Visum im Pass ist. Am langsamsten sind Anträge im Sommer und vor großen Feiertagen.",
    "kf": [
      [
        "Üblicher Rahmen",
        "Etwa 2 Wochen bis über einen Monat"
      ],
      [
        "Hängt ab von",
        "Konsulat, Nationalität, Saison"
      ],
      [
        "Stoßzeiten",
        "Sommer und Feiertagszeiten"
      ],
      [
        "Goldene Regel",
        "Erst das Visum, dann die Flüge"
      ]
    ]
  },
  "how-many-days-do-you-need-in-algeria": {
    "q": "Wie viele Tage braucht man für Algerien?",
    "a": "Sieben Tage reichen, um Algier, die römische Küste und eine weitere Region richtig zu sehen. Zehn Tage erlauben, das M'Zab-Tal oder den römischen Osten ohne Hetze zu ergänzen. Zwei Wochen braucht es, um den Norden mit einer echten Sahara-Expedition zu verbinden, denn die Wüste allein verschlingt vier bis fünf Tage.",
    "kf": [
      [
        "7 Tage",
        "Algier, Küste, eine weitere Region"
      ],
      [
        "10 Tage",
        "M'Zab oder römischer Osten dazu"
      ],
      [
        "14 Tage",
        "Norden plus ein echter Sahara-Teil"
      ],
      [
        "Sahara allein",
        "Mindestens 4-5 Tage einplanen"
      ]
    ]
  },
  "how-much-cash-should-i-bring-to-algeria": {
    "q": "Wie viel Bargeld sollte ich nach Algerien mitnehmen?",
    "a": "Genug für die ganze Reise, denn zuverlässig nachlegen lässt sich nicht. Rechnen Sie Ihre Tagesausgaben aus — Essen, Taxis, Eintritte, Trinkgeld, Einkäufe —, geben Sie einen komfortablen Puffer dazu und bringen Sie alles in Euro-Bargeld mit. Alles Vorausbezahlte — Hotels, Guides, Transport auf einer organisierten Reise — geht von dieser Summe ab.",
    "kf": [
      [
        "Mitbringen",
        "Euro in bar, unbeschädigte Scheine"
      ],
      [
        "Abdecken",
        "Den ganzen Aufenthalt, plus Puffer"
      ],
      [
        "Ausnehmen",
        "Alles bereits Vorausbezahlte"
      ],
      [
        "Anmelden",
        "Beträge über der Zollgrenze"
      ]
    ]
  },
  "how-much-does-a-trip-to-algeria-cost": {
    "q": "Was kostet eine Reise nach Algerien?",
    "a": "Algerien ist nach europäischen Maßstäben erschwinglich. Unsere privaten geführten Tagestouren beginnen bei 30 € pro Person, mehrtägige Privatreisen liegen üblicherweise zwischen etwa 200 € und 1.200 €, je nach Dauer, Region und Saison. Die Ausgaben vor Ort — Essen, lokale Fahrten, Alltägliches — sind bescheiden.",
    "kf": [
      [
        "Tagestouren",
        "Ab 30 € / Person"
      ],
      [
        "Mehrtägige Privatreisen",
        "≈ 200 € - 1.200 €"
      ],
      [
        "Währung",
        "Algerischer Dinar (DZD)"
      ],
      [
        "Trinkgeld",
        "Willkommen, nicht verpflichtend"
      ]
    ]
  },
  "is-alcohol-available-in-algeria": {
    "q": "Bekommt man in Algerien Alkohol?",
    "a": "Alkohol ist in Algerien legal, aber diskret und ungleich verfügbar. Einige Hotels, konzessionierte Restaurants und Fachgeschäfte in den größeren Städten verkaufen ihn; die meisten Restaurants nicht, und in konservativen Städten und im tiefen Süden fehlt er praktisch ganz. Algerien stellt übrigens eigenen Wein her.",
    "kf": [
      [
        "Rechtslage",
        "Legal, aber gesellschaftlich diskret"
      ],
      [
        "Wo",
        "Einige Hotels und konzessionierte Lokale in Städten"
      ],
      [
        "Wo nicht",
        "Die meisten Restaurants, konservative Städte, tiefer Süden"
      ],
      [
        "Lokale Produktion",
        "Algerien macht Wein"
      ]
    ]
  },
  "is-algeria-a-good-winter-destination": {
    "q": "Ist Algerien ein gutes Winterziel?",
    "a": "Sehr. Der Winter ist die einzige Jahreszeit, in der die tiefe Sahara bereist werden kann, die römischen Städte sind kühl und leer, und die Nordküste bleibt mild. Es ist auch die Zeit, in der Algerien am wenigsten nach Kompromiss aussieht: warme Wüstentage, nirgends Gedränge und Schnee im Atlas, wenn Sie wollen.",
    "kf": [
      [
        "Sahara",
        "Das ist die Saison — November bis Februar"
      ],
      [
        "Römische Stätten",
        "Kühl, angenehm, leer"
      ],
      [
        "Nordküste",
        "Mild, feuchter, grün"
      ],
      [
        "Atlasgebirge",
        "Echter Schnee in der Höhe"
      ]
    ]
  },
  "is-algeria-safe-for-solo-female-travellers": {
    "q": "Ist Algerien für allein reisende Frauen sicher?",
    "a": "Im Großen und Ganzen ja, mit der üblichen Umsicht. Frauen reisen allein in Algier, Oran, Constantine und an der Küste ohne Zwischenfälle; das Land ist konservativ, nicht gefährlich. Rechnen Sie mit Aufmerksamkeit und Fragen, nicht mit Bedrohung; kleiden Sie sich zurückhaltend und bevorzugen Sie Überlandfahrten bei Tag.",
    "kf": [
      [
        "Städte im Norden",
        "Meist sicher bei normaler Vorsicht"
      ],
      [
        "Hauptärgernis",
        "Blicke und Aufmerksamkeit, keine Kriminalität"
      ],
      [
        "Kleidung",
        "Zurückhaltend; Schultern und Knie bedeckt"
      ],
      [
        "Tiefe Sahara",
        "Nur in geführten Gruppen, für alle"
      ]
    ]
  },
  "is-algeria-safe": {
    "q": "Ist Algerien sicher zu bereisen?",
    "a": "Ja — Algerien ist 2026 für Touristen im Großen und Ganzen sicher. Die großen Städte, der Norden, das M'Zab-Tal und die organisierten Sahara-Routen sind ruhig und sehr gastfreundlich. Einige abgelegene Grenzregionen im äußersten Süden verlangen Genehmigungen und einen lizenzierten Guide, und einige Grenzstreifen sind für Besucher gesperrt.",
    "kf": [
      [
        "Städte und Norden",
        "Sicher für normalen Tourismus"
      ],
      [
        "Tiefe Sahara",
        "Guide + Genehmigung erforderlich"
      ],
      [
        "Grenzen im äußersten Süden",
        "Eingeschränkt / gesperrt"
      ]
    ]
  },
  "is-algeria-worth-visiting": {
    "q": "Lohnt sich eine Reise nach Algerien?",
    "a": "Wenn Sie außergewöhnliche Stätten ohne Gedränge wollen, ja. Algerien bietet römische Städte, die Sie mitunter für sich allein haben, eine der großen Wüsten der Welt und echte Gastfreundschaft — im Tausch gegen ein Visumverfahren, eine Bargeldwirtschaft und begrenzte touristische Infrastruktur. Es belohnt Reisende, nicht Urlauber.",
    "kf": [
      [
        "Ideal für",
        "Kulturerbe, Wüste, Kultur, Fotografie"
      ],
      [
        "Andrang",
        "Fast keiner, selbst an UNESCO-Stätten"
      ],
      [
        "Der Preis dafür",
        "Visum, Bargeldwirtschaft, dünne Infrastruktur"
      ],
      [
        "Weniger geeignet für",
        "Strandurlaub im Resort"
      ]
    ]
  },
  "is-algiers-safe-to-walk-around": {
    "q": "Kann man in Algier sicher zu Fuß gehen?",
    "a": "Ja. Das Zentrum von Algier ist eine lebendige, fußgängerfreundliche Stadt, und Besucher bewegen sich dort täglich zu Fuß. Taschendiebstahl im Gedränge ist die realistische Sorge, wie in jeder Mittelmeer-Hauptstadt. Passen Sie wie überall auf Handy und Tasche auf, und nehmen Sie spät abends in ruhigen Vierteln ein Taxi.",
    "kf": [
      [
        "Zentrum tagsüber",
        "Angenehm und belebt"
      ],
      [
        "Hauptrisiko",
        "Taschendiebstahl im Gedränge"
      ],
      [
        "Spät abends",
        "In ruhigen Vierteln ein Taxi"
      ],
      [
        "Die Kasbah",
        "Am besten mit Guide erkunden"
      ]
    ]
  },
  "is-photography-allowed-in-algeria": {
    "q": "Darf man in Algerien fotografieren?",
    "a": "Ja, für gewöhnliche Reisefotografie. Die Ausnahmen sind streng: Fotografieren Sie keine militärischen Anlagen, Polizei, Regierungsgebäude, Flughäfen oder Kontrollpunkte. Fragen Sie, bevor Sie Menschen fotografieren, besonders Frauen, und rechnen Sie damit, dass manche Museen Gebühren erheben oder Kameras einschränken.",
    "kf": [
      [
        "Allgemein",
        "Straßen und Stätten frei"
      ],
      [
        "Niemals",
        "Militär, Polizei, Kontrollpunkte, Flughäfen"
      ],
      [
        "Menschen",
        "Immer vorher fragen"
      ],
      [
        "Museen",
        "Können Gebühren erheben oder einschränken"
      ]
    ]
  },
  "is-the-algerian-sahara-safe": {
    "q": "Ist die algerische Sahara sicher?",
    "a": "Ja, wenn sie so bereist wird, wie es sich gehört — mit lizenziertem Veranstalter, erfahrenem Guide, echten Geländewagen, Wasser, Kommunikationsmitteln und Genehmigungen, auf zugelassenen Routen. Die echten Risiken sind Hitze, Dehydrierung, Orientierung und Abgeschiedenheit, nicht Kriminalität. Gefährlich ist die improvisierte Wüstenfahrt auf eigene Faust — und die ist reglementiert.",
    "kf": [
      [
        "Echte Risiken",
        "Hitze, Dehydrierung, Orientierung, Abgeschiedenheit"
      ],
      [
        "Nicht das Risiko",
        "Kriminalität gegen Besucher"
      ],
      [
        "Erforderlich",
        "Lizenzierter Veranstalter, Guide, Genehmigungen"
      ],
      [
        "Beste Saison",
        "November bis Februar"
      ]
    ]
  },
  "is-the-food-in-algeria-halal": {
    "q": "Ist das Essen in Algerien halal?",
    "a": "So gut wie alles. Algerien ist ein überwiegend muslimisches Land, und verkauftes wie serviertes Fleisch ist standardmäßig halal, ohne dass man zertifizierte Restaurants suchen müsste. Schweinefleisch fehlt im Lebensmittelangebot praktisch ganz, abgesehen von einigen Spezialgeschäften für ausländische Residenten.",
    "kf": [
      [
        "Fleisch",
        "Landesweit standardmäßig halal"
      ],
      [
        "Schweinefleisch",
        "Faktisch nicht vorhanden"
      ],
      [
        "Zertifizierung",
        "Muss man nicht suchen"
      ],
      [
        "Alkohol",
        "Eigene Frage — legal, aber diskret"
      ]
    ]
  },
  "is-there-a-train-network-in-algeria": {
    "q": "Gibt es ein Eisenbahnnetz in Algerien?",
    "a": "Ja, im Norden. Die SNTF betreibt Verbindungen entlang des Küsten- und Binnenkorridors zwischen Algier, Oran, Constantine, Annaba und den Orten dazwischen, auf einigen Strecken mit modernen, bequemen Zügen. In die tiefe Sahara führt keine Bahn; dorthin fliegt man.",
    "kf": [
      [
        "Betreiber",
        "SNTF, die Staatsbahn"
      ],
      [
        "Abdeckung",
        "Nur der Nordkorridor"
      ],
      [
        "Hauptstrecken",
        "Algier-Oran, Algier-Constantine"
      ],
      [
        "Tiefer Süden",
        "Keine Bahn — fliegen"
      ]
    ]
  },
  "what-are-algerias-unesco-world-heritage-sites": {
    "q": "Welche UNESCO-Welterbestätten hat Algerien?",
    "a": "Algerien hat sieben Stätten des UNESCO-Welterbes: Al Qal'a der Beni Hammad, Tassili n'Ajjer, das M'Zab-Tal, Djémila, Tipasa, Timgad und die Kasbah von Algier. Sechs sind Kulturstätten, und Tassili n'Ajjer ist sowohl für seine Kultur als auch für seine Natur eingetragen.",
    "kf": [
      [
        "Anzahl der Stätten",
        "7"
      ],
      [
        "Römische Städte",
        "Djémila, Tipasa, Timgad"
      ],
      [
        "Sahara",
        "Tassili n'Ajjer (gemischt), M'Zab-Tal"
      ],
      [
        "Islamisch / urban",
        "Beni Hammad, Kasbah von Algier"
      ]
    ]
  },
  "what-are-the-customs-and-etiquette-in-algeria": {
    "q": "Welche Sitten und Umgangsformen gelten in Algerien?",
    "a": "Grüßen Sie vor allem anderen, nehmen Sie den angebotenen Tee an, kleiden Sie sich zurückhaltend, benutzen Sie die rechte Hand zum Essen und Geben, ziehen Sie beim Betreten eines Hauses die Schuhe aus, und fragen Sie, bevor Sie Menschen fotografieren. Gastfreundschaft steht im Mittelpunkt, und sie zu entschieden abzulehnen wirkt wie eine Zurückweisung.",
    "kf": [
      [
        "Begrüßung",
        "Immer grüßen, bevor Sie etwas fragen"
      ],
      [
        "Gastfreundschaft",
        "Nehmen Sie den Tee an — das zählt"
      ],
      [
        "Häuser",
        "Schuhe an der Tür ausziehen"
      ],
      [
        "Rechte Hand",
        "Zum Essen, Geben und Nehmen"
      ]
    ]
  },
  "what-currency-does-algeria-use": {
    "q": "Welche Währung gilt in Algerien?",
    "a": "Algerien verwendet den algerischen Dinar (DZD). Er ist eine geschlossene Währung: Außerhalb des Landes lässt er sich realistisch weder kaufen noch verkaufen, man reist also mit Bargeld in Euro oder Dollar an und wechselt in Algerien. Es gibt einen offiziellen Bankkurs und einen weit verbreiteten Parallelkurs, und der Abstand zwischen beiden ist groß.",
    "kf": [
      [
        "Währung",
        "Algerischer Dinar (DZD)"
      ],
      [
        "Verfügbarkeit im Ausland",
        "Praktisch keine — geschlossene Währung"
      ],
      [
        "Mitbringen",
        "Euro oder US-Dollar in bar"
      ],
      [
        "Zwei Kurse",
        "Offizieller Bankkurs vs. Parallelmarkt"
      ]
    ]
  },
  "what-is-algeria-famous-for": {
    "q": "Wofür ist Algerien bekannt?",
    "a": "Algerien ist das größte Land Afrikas und bekannt für die Sahara, die vier Fünftel davon einnimmt, für einige der am besten erhaltenen römischen Städte überhaupt, für seine sieben UNESCO-Welterbestätten, für die prähistorische Felskunst des Tassili n'Ajjer, die amazighische Kultur, die Raï-Musik und Couscous.",
    "kf": [
      [
        "Fläche",
        "Größtes Land Afrikas"
      ],
      [
        "UNESCO-Stätten",
        "Sieben"
      ],
      [
        "Römisches Erbe",
        "Timgad, Djémila, Tipaza"
      ],
      [
        "Sahara",
        "Vier Fünftel des Landes"
      ]
    ]
  },
  "what-is-the-best-month-to-visit-the-algerian-sahara": {
    "q": "Welcher Monat ist der beste für die algerische Sahara?",
    "a": "November bis Februar. Die Tage sind warm und klar, die Nächte kalt genug für ein Feuer, und das Licht ist am besten zum Fotografieren. Dezember und Januar sind der Höhepunkt der Saison. Ab dem späten Frühjahr wird die Wüste gefährlich heiß, und die Expeditionen enden.",
    "kf": [
      [
        "Bestes Zeitfenster",
        "November bis Februar"
      ],
      [
        "Höhepunkt",
        "Dezember und Januar"
      ],
      [
        "Die Nächte",
        "Kalt — richtige Schichten mitnehmen"
      ],
      [
        "Meiden",
        "Mai bis September"
      ]
    ]
  },
  "what-is-the-most-beautiful-place-in-algeria": {
    "q": "Was ist der schönste Ort Algeriens?",
    "a": "Eine einzige Antwort gibt es nicht, doch die engere Auswahl wiederholt sich: Tassili n'Ajjer und die Tadrart in der tiefen Sahara, die ockerfarbenen Hügelstädte des M'Zab-Tals, Djémila und Timgad unter den römischen Städten, die kabylische Küste um Béjaïa und Constantine über seiner Schlucht.",
    "kf": [
      [
        "Tiefe Sahara",
        "Tassili n'Ajjer und die Tadrart"
      ],
      [
        "Architektur",
        "Das M'Zab-Tal"
      ],
      [
        "Römisch",
        "Djémila und Timgad"
      ],
      [
        "Küste und Stadt",
        "Béjaïa und Constantine"
      ]
    ]
  },
  "what-is-the-national-dish-of-algeria": {
    "q": "Was ist das Nationalgericht Algeriens?",
    "a": "Couscous. Gedämpfter Hartweizengrieß mit einer Gemüse- und Fleischbrühe — das Freitagsgericht, das Festgericht und das Alltagsgericht im ganzen Land. Die UNESCO hat das Wissen und die Praktiken rund um Couscous als immaterielles Erbe eingetragen, das Algerien, Marokko, Tunesien und Mauretanien teilen.",
    "kf": [
      [
        "Nationalgericht",
        "Couscous"
      ],
      [
        "Traditionell gegessen",
        "Freitags und zu Festen"
      ],
      [
        "UNESCO",
        "Als gemeinsames Maghreb-Erbe eingetragen"
      ],
      [
        "Regionale Varianten",
        "Jede Region hat ihre eigene"
      ]
    ]
  },
  "what-languages-are-spoken-in-algeria": {
    "q": "Welche Sprachen spricht man in Algerien?",
    "a": "Algeriens Amtssprachen sind Arabisch und Tamazight (Berberisch). Die meisten Algerier sprechen im Alltag algerisches Arabisch (Darija), Tamazight ist in Regionen wie der Kabylei weit verbreitet, und Französisch wird in Wirtschaft, Medien und Bildung sehr häufig verwendet. Englisch nimmt unter jungen Leuten zu.",
    "kf": [
      [
        "Amtlich",
        "Arabisch, Tamazight (Berberisch)"
      ],
      [
        "Alltag",
        "Algerisches Arabisch (Darija)"
      ],
      [
        "Weit verbreitet",
        "Französisch"
      ],
      [
        "Wachsend",
        "Englisch"
      ]
    ]
  },
  "what-power-plugs-are-used-in-algeria": {
    "q": "Welche Steckdosen gibt es in Algerien?",
    "a": "Algerien nutzt die europäischen Stecker mit zwei runden Stiften, Typ C und F, bei 230 Volt und 50 Hz. Reisende aus Großbritannien, den USA, Australien oder Japan brauchen einen Adapter; die meisten europäischen Besucher nicht. US- und japanische Geräte brauchen zusätzlich einen Spannungswandler, sofern sie nicht für beide Spannungen ausgelegt sind.",
    "kf": [
      [
        "Steckertypen",
        "C und F (zwei runde Stifte)"
      ],
      [
        "Spannung",
        "230 V, 50 Hz"
      ],
      [
        "Besucher aus UK/US/AU",
        "Adapter erforderlich"
      ],
      [
        "Wüstencamps",
        "Powerbank mitnehmen — kein Netzstrom"
      ]
    ]
  },
  "what-should-women-wear-in-algeria": {
    "q": "Was sollten Frauen in Algerien tragen?",
    "a": "Zurückhaltende, bequeme Kleidung. Schultern und Knie bedeckt ist der praktische Standard — weite Hosen oder lange Röcke mit einem Oberteil, das die Oberarme bedeckt. Ein Kopftuch ist außer in Moscheen nicht erforderlich, eines dabeizuhaben aber nützlich. Städte sind entspannter als kleinere Orte.",
    "kf": [
      [
        "Standard",
        "Schultern und Knie bedeckt"
      ],
      [
        "Kopftuch",
        "Nur in Moscheen erforderlich"
      ],
      [
        "Städte vs. Kleinstädte",
        "Algier und Oran sind entspannter"
      ],
      [
        "Sahara",
        "Lange, weite Schichten plus Sonnenschutz"
      ]
    ]
  },
  "when-is-the-best-time-to-visit-algeria": {
    "q": "Wann ist die beste Reisezeit für Algerien?",
    "a": "Die insgesamt beste Zeit für Algerien reicht vom Herbst bis zum Frühjahr — grob Oktober bis April — wenn die Temperaturen im ganzen Norden und in der Sahara angenehm sind. Die tiefe Sahara bereist man am besten von Oktober bis März; der Hochsommer (Juni–August) ist im Süden sehr heiß, an der Mittelmeerküste aber schön.",
    "kf": [
      [
        "Insgesamt am besten",
        "Oktober – April"
      ],
      [
        "Sahara / Wüste",
        "Oktober – März"
      ],
      [
        "Küste und Städte",
        "Frühling und Herbst ideal; Sommer warm"
      ],
      [
        "Für die Wüste meiden",
        "Juni – August (extreme Hitze)"
      ]
    ]
  },
  "which-parts-of-algeria-should-tourists-avoid": {
    "q": "Welche Gebiete Algeriens sollten Touristen meiden?",
    "a": "Mit Warnungen belegt sind die abgelegenen Grenzgebiete zu Mali, Niger und Libyen sowie einige Regionen der fernen Wüste abseits etablierter Routen. Die Städte im Norden, die Küste, der römische Osten, die Kabylei und die organisierten Sahara-Rundreisen stehen nicht auf dieser Liste. Prüfen Sie vor der Reise den aktuellen Hinweis Ihrer Regierung.",
    "kf": [
      [
        "Abgeraten",
        "Grenzgebiete zu Mali, Niger und Libyen"
      ],
      [
        "Eingeschränkt",
        "Ferne Wüste abseits fester Routen"
      ],
      [
        "Nicht eingeschränkt",
        "Norden, Küste, römischer Osten, M'Zab"
      ],
      [
        "Prüfen",
        "Den aktuellen Hinweis Ihrer Regierung"
      ]
    ]
  }
};

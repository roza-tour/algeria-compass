// Italian translations for the tour catalogue — same contract as tours-fr.ts.
//
// Every tour has a CARD translation so the Italian index at /it/circuiti/ is
// fully Italian. Tours marked `full` also get a complete Italian detail page at
// /it/circuiti/<id>/; the rest link to the English page from the index, which is
// honest rather than serving a half-translated page.
//
// tours.json stays the single source of truth for prices, images and structure.

export interface TourIt {
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

export const TOURS_IT: Record<string, TourIt> = {
  "djanet-sahara-safari": {
    "title": "Safari nel Sahara a Djanet — 5 giorni nel Tadrart Rouge",
    "duration": "5 giorni · 4 notti",
    "hook": "Cinque giorni nel cuore del Sahara algerino attorno a Djanet — arenaria rossa del Tadrart, dune dorate, arte rupestre preistorica e notti sotto le stelle.",
    "full": true,
    "seoTitle": "Viaggio Sahara Djanet 5 giorni — Tadrart Rouge",
    "seoDescription": "Viaggio privato di 5 giorni nel Sahara algerino da Djanet: Tadrart Rouge, dune, arte rupestre e campo tendato, con una squadra tuareg locale.",
    "overview": "È il Sahara come si immagina ma si vede di rado: il Tadrart Rouge, un labirinto di arenaria arancione scolpita dal vento, archi naturali, canyon e dune che si appoggiano alla roccia nera. Da Djanet, oasi tuareg del sud-est algerino, si parte in 4×4 con una squadra locale per quattro notti di campo. Le giornate alternano piste, brevi camminate verso siti di arte rupestre vecchi di millenni e lunghe soste fotografiche nella luce della sera. Le notti si passano al campo, attorno al fuoco e al tè, senza luci e senza rete.",
    "highlights": [
      "Il Tadrart Rouge e i suoi canyon di arenaria arancione",
      "Siti di arte rupestre preistorica del Tassili n'Ajjer",
      "Le grandi dune del Sahara algerino al tramonto",
      "Quattro notti di campo sotto un cielo senza inquinamento luminoso",
      "Una squadra tuareg locale: autista, guida e cuoco",
      "Pensione completa e attrezzatura da campo incluse"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo e ingresso nel deserto",
        "body": "Incontro con la squadra a Djanet, poi partenza in 4×4 verso il deserto. Tramonto sulle dune e prima notte al campo.",
        "stops": [
          {
            "place": "Djanet",
            "text": "La capitale oasi tuareg del sud-est — palmeti ai piedi di falesie rosse, la vostra porta d'accesso al Tassili."
          },
          {
            "place": "Prime dune al tramonto",
            "text": "Un'uscita in 4x4 sulla sabbia per l'ultima luce del giorno e una prima notte al campo nel deserto."
          },
          {
            "place": "Il primo bivacco",
            "text": "Il campo si allestisce al riparo di una duna — stuoie, un tavolino basso e un fuoco di legna — e la prima notte trascorre senza una sola luce elettrica."
          }
        ]
      },
      {
        "day": 2,
        "title": "Il Tadrart Rouge",
        "body": "Attraversamento delle valli di roccia rossa e sabbia del Tadrart, con soste fotografiche, fino al tramonto e alla notte al campo.",
        "stops": [
          {
            "place": "La Tadrart Rouge",
            "text": "Canyon e archi di arenaria arancione scolpiti dal vento — tra i paesaggi più spettacolari del Sahara."
          },
          {
            "place": "Archi di roccia scolpiti",
            "text": "Archi di pietra e massi in equilibrio modellati nel corso dei millenni — le forme simbolo della Tadrart."
          },
          {
            "place": "Mari di sabbia e campo al tramonto",
            "text": "Ampi campi di dune che si tingono di cremisi al crepuscolo, prima di una notte sotto cieli straordinariamente bui."
          }
        ]
      },
      {
        "day": 3,
        "title": "Archi, incisioni e grandi dune",
        "body": "Giornata tra archi naturali, siti di arte rupestre e cordoni dunali, seguendo la luce e le scoperte.",
        "stops": [
          {
            "place": "Le grandi dune a piedi",
            "text": "La salita sulla sabbia alta per il silenzio e il panorama — il cuore dell'esperienza nel deserto."
          },
          {
            "place": "Arte rupestre preistorica",
            "text": "Pitture e incisioni di pastori, cacciatori e animali selvatici di un Sahara verde, vecchie fino a circa 10.000 anni — più antiche delle piramidi."
          },
          {
            "place": "Cerimonia del tè tuareg",
            "text": "I tradizionali tre bicchieri di tè sahariano con una famiglia tuareg — la cultura viva del profondo sud."
          }
        ]
      },
      {
        "day": 4,
        "title": "Rientro verso Djanet",
        "body": "Ultima mattina nel deserto e rientro verso l'oasi, con un ultimo campo o una notte a Djanet.",
        "stops": [
          {
            "place": "Erg e altopiani remoti",
            "text": "Ore di deserto aperto scelte per il vuoto, non per i punti di riferimento — il Sahara nella sua forma più assoluta."
          },
          {
            "place": "La lunga sosta di mezzogiorno",
            "text": "Ombra sotto un'acacia o uno sperone di roccia in attesa che passi il caldo: una stuoia, il pranzo, il tè e due o tre ore senza fare assolutamente nulla."
          },
          {
            "place": "L'ultimo bivacco",
            "text": "L'ultimo campo del circuito, allestito dove la luce della sera è più bella, con la cena sul fuoco e il cielo pieno di stelle."
          }
        ]
      },
      {
        "day": 5,
        "title": "Partenza",
        "body": "Tempo libero a Djanet secondo l'orario del volo, poi trasferimento in aeroporto.",
        "stops": [
          {
            "place": "Colazione al campo",
            "text": "Pane cotto nel forno di sabbia, datteri, marmellata e caffè, mentre si smonta il campo alle prime luci sull'arenaria."
          },
          {
            "place": "Il rientro verso nord attraverso la Tadrart",
            "text": "Il tragitto di ritorno verso l'oasi — lo stesso paesaggio di roccia rossa attraversato all'andata, visto con una luce opposta."
          },
          {
            "place": "Djanet",
            "text": "L'oasi tuareg e l'aeroporto di Tiska, dove il circuito si conclude e inizia il volo verso nord."
          }
        ]
      }
    ],
    "includes": [
      "Accoglienza e trasferimenti a Djanet",
      "4×4 per tutto il viaggio",
      "Autista esperto del deserto",
      "Guida tuareg locale",
      "Pensione completa",
      "Attrezzatura da campo",
      "Acqua in bottiglia"
    ],
    "excludes": [
      "Voli internazionali e interni",
      "Costi del visto",
      "Assicurazione di viaggio",
      "Bevande oltre all'acqua",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Solo da novembre a febbraio"
      },
      {
        "label": "Notti",
        "value": "Fredde — servono strati veri"
      },
      {
        "label": "Rete telefonica",
        "value": "Assente nel deserto"
      },
      {
        "label": "Accesso",
        "value": "Volo Algeri–Djanet, poi 4×4"
      }
    ],
    "faqs": [
      {
        "q": "Quando è possibile questo viaggio?",
        "a": "Da novembre a febbraio. Fuori stagione il caldo rende le spedizioni nel grande sud pericolose e non vengono organizzate."
      },
      {
        "q": "Come si arriva a Djanet?",
        "a": "In aereo da Algeri, con Air Algérie o Tassili Airlines. I voli verso sud sono pochi: conviene prenotare presto, soprattutto in stagione."
      },
      {
        "q": "Dove si dorme?",
        "a": "In campo tendato nel deserto, con tende, materassini e coperte forniti. È confortevole ma essenziale: niente elettricità, niente docce, niente rete."
      },
      {
        "q": "Serve una buona preparazione fisica?",
        "a": "No. Ci si sposta in 4×4, con brevi camminate su sabbia e roccia. Serve piuttosto sopportare giornate lunghe e notti fredde."
      }
    ]
  },
  "ghardaia-guided-tour": {
    "title": "Ghardaïa — 3 giorni nella valle del M'Zab",
    "duration": "3 giorni · 2 notti",
    "hook": "Tre giorni nella valle del M'Zab — le città fortificate di Ghardaïa e Beni Isguen, le foggara, i palmeti e una serata in 4×4 nel deserto.",
    "full": true,
    "seoTitle": "Viaggio Ghardaïa 3 giorni — Valle del M'Zab",
    "seoDescription": "Viaggio privato di 3 giorni a Ghardaïa e nella valle del M'Zab, patrimonio UNESCO: le cinque città ibadite, le foggara, i palmeti e una serata nel deserto.",
    "overview": "La valle del M'Zab è uno degli insiemi urbani più notevoli del mondo islamico: cinque città fortificate costruite dall'XI secolo dalla comunità ibadita mozabita, impilate in ocra, bianco e blu su colline del Sahara. La loro logica costruttiva — moschea in cima, case in cerchi concentrici, palmeto in basso, sistema idrico condiviso — affascinò Le Corbusier al punto da farlo tornare più volte. Tre giorni bastano per capire il luogo dall'interno, con una guida che ne conosce usi e regole.",
    "highlights": [
      "Ghardaïa e il suo mercato ad anfiteatro",
      "Beni Isguen, la città santa, visitata con guida locale",
      "Le foggara, sistema millenario di condivisione dell'acqua",
      "I palmeti e le case estive mozabite",
      "Una serata in 4×4 nel deserto sotto le stelle",
      "Artigianato del M'Zab: tappeti, lana e rame"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo a Ghardaïa",
        "body": "Accoglienza e sistemazione, poi primo approccio a Ghardaïa: i vicoli in pendenza, la piazza del mercato e il panorama sulla valle al tramonto.",
        "stops": [
          {
            "place": "Il mercato di Ghardaïa",
            "text": "La piazza porticata a terrazze ai piedi del minareto-piramide, il cuore pulsante del M'Zab da mille anni."
          },
          {
            "place": "Pranzo in una casa storica",
            "text": "Un pasto all'interno di una tradizionale casa mozabita, dalle mura spesse e fresche contro il caldo del deserto."
          },
          {
            "place": "I palmeti e le foggara",
            "text": "Giardini irrigati da mille anni grazie alle foggara — canali sotterranei che rendono possibile la vita nella valle arida."
          }
        ]
      },
      {
        "day": 2,
        "title": "Le città del M'Zab",
        "body": "Giornata tra Beni Isguen, El Atteuf e Melika: moschee, mura, cimiteri e palmeti, con le spiegazioni di una guida mozabita.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La città sacra murata del M'Zab, cui si accede dall'antica porta, dove abbigliamento e fotografie seguono le usanze locali."
          },
          {
            "place": "L'eco-città di Tafilelt",
            "text": "Un insediamento mozabita moderno costruito su principi tradizionali — la prova che le idee della valle sono ancora vive."
          },
          {
            "place": "Safari in 4x4 verso El Guerrara",
            "text": "Deserto aperto oltre le città, con una cena sotto le stelle a chiudere la giornata."
          }
        ]
      },
      {
        "day": 3,
        "title": "Palmeti, foggara e deserto",
        "body": "Mattina nei giardini e nel sistema idrico della valle, poi uscita in 4×4 nel deserto prima della partenza.",
        "stops": [
          {
            "place": "Colazione in terrazza",
            "text": "L'ultima colazione in guesthouse con il ksar che si arrampica sulla collina di fronte — la mezz'ora più bella della giornata nel M'Zab."
          },
          {
            "place": "L'antica piazza del mercato",
            "text": "Un'ultima ora sotto i portici del mercato di Ghardaïa per tappeti, datteri e lana mozabita, se l'orario del volo lo consente."
          },
          {
            "place": "Aeroporto Noumérat–Moufdi Zakaria",
            "text": "Il trasferimento privato fuori dalla valle, con assistenza al check-in per il volo verso nord."
          }
        ]
      }
    ],
    "includes": [
      "Trasferimenti aeroportuali a Ghardaïa",
      "Sistemazione 2 notti",
      "Guida privata autorizzata",
      "Guida locale per Beni Isguen",
      "Trasporto privato",
      "Uscita 4×4 nel deserto",
      "Colazioni"
    ],
    "excludes": [
      "Voli",
      "Costi del visto",
      "Assicurazione di viaggio",
      "Pranzi e cene",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Da ottobre ad aprile"
      },
      {
        "label": "Abbigliamento",
        "value": "Valle conservatrice — abiti coprenti"
      },
      {
        "label": "Fotografia",
        "value": "Limitata a Beni Isguen — segui la guida"
      },
      {
        "label": "Accesso",
        "value": "Volo Algeri–Ghardaïa, circa 1 h"
      }
    ],
    "faqs": [
      {
        "q": "Perché la valle del M'Zab è patrimonio UNESCO?",
        "a": "Per la coerenza eccezionale del suo urbanismo: cinque città dell'XI secolo progettate come un sistema completo — difesa, abitato, acqua, palmeto — ancora abitato e funzionante."
      },
      {
        "q": "Si può visitare Beni Isguen liberamente?",
        "a": "No. La città santa si visita con una guida locale incaricata, a orari precisi, e la fotografia è limitata. È una regola della comunità, non una formalità turistica."
      },
      {
        "q": "Come si arriva a Ghardaïa?",
        "a": "Il modo più semplice è il volo da Algeri, circa un'ora. La strada è possibile ma lunga: serve una giornata intera."
      },
      {
        "q": "Che abbigliamento serve?",
        "a": "Coprente per tutti: spalle e ginocchia coperte, abiti ampi. La valle è nettamente più conservatrice della costa."
      }
    ]
  },
  "algeria-cultural-tour": {
    "title": "Viaggio culturale in Algeria — 5 giorni",
    "duration": "5 giorni · 4 notti",
    "hook": "Cinque giorni nel cuore dell'Algeria — la Casbah di Algeri patrimonio UNESCO, la costa romana di Tipaza e la valle del M'Zab, con guida privata autorizzata.",
    "full": true,
    "seoTitle": "Viaggio culturale Algeria 5 giorni — Algeri, Tipaza, M'Zab",
    "seoDescription": "Viaggio privato di 5 giorni in Algeria: la Casbah di Algeri, le rovine romane di Tipaza e Cherchell e la valle del M'Zab, con guida autorizzata.",
    "overview": "È l'Algeria in miniatura: la capitale bianca, la costa romana e il deserto, in cinque giorni senza corse. Si percorre la Casbah di Algeri, iscritta all'UNESCO, poi si segue il Mediterraneo fino alle rovine di Tipaza e al museo di Cherchell, prima di raggiungere Ghardaïa in aereo per entrare nella valle del M'Zab — cinque città-oasi fortificate costruite mille anni fa dai mozabiti ibaditi. Costa, cultura e Sahara, con guida privata e vera cucina algerina lungo la strada.",
    "highlights": [
      "La Casbah di Algeri, patrimonio mondiale UNESCO",
      "Tipaza, città romana in riva al Mediterraneo",
      "Il museo archeologico di Cherchell",
      "La valle del M'Zab e le sue cinque città ibadite",
      "Guida privata autorizzata per tutto il soggiorno",
      "Cucina algerina quotidiana, lontano dai menù turistici"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo ad Algeri",
        "body": "Accoglienza all'aeroporto Houari Boumediene e sistemazione. Prima scoperta della baia e del lungomare.",
        "stops": [
          {
            "place": "L'aeroporto Houari Boumediene",
            "text": "Accoglienza in aeroporto da parte della guida e trasferimento diretto in hotel, senza code né contrattazioni nella prima ora in Algeria."
          },
          {
            "place": "La baia di Algeri",
            "text": "La strada costiera verso la capitale, con le terrazze bianche della città disposte a gradoni sopra il porto."
          },
          {
            "place": "Il lungomare di Algeri",
            "text": "Una prima passeggiata serale lungo gli archi del fronte mare e Place des Martyrs, prima dell'inizio del tour."
          }
        ]
      },
      {
        "day": 2,
        "title": "Algeri e la Casbah",
        "body": "Giornata nella capitale: la Casbah, i viali coloniali, la Grande Moschea e i panorami sulla baia.",
        "stops": [
          {
            "place": "La Casbah di Algeri",
            "text": "La cittadella ottomana patrimonio UNESCO, un labirinto bianco e ripido di palazzi, moschee e case a cortile che sale sopra la baia."
          },
          {
            "place": "I viali coloniali",
            "text": "I grandi boulevard di epoca francese nel centro città, con le facciate haussmanniane affacciate sul porto."
          },
          {
            "place": "La Grande Moschea di Algeri",
            "text": "Sul lungomare, la Grande Moschea con il minareto più alto d'Africa, da cui si gode un ampio panorama sulla baia."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza e Cherchell",
        "body": "Verso ovest lungo la costa: le rovine romane di Tipaza sul mare, il Mausoleo reale di Mauretania e il museo di Cherchell.",
        "stops": [
          {
            "place": "Tipaza romana",
            "text": "Un porto romano patrimonio UNESCO disteso lungo il Mediterraneo, tra basiliche, terme e un teatro a un passo dalle onde."
          },
          {
            "place": "Il Mausoleo reale di Mauretania",
            "text": "Un grande tamburo di pietra su una collina sul mare, tomba del I secolo a.C. del re berbero Giuba II e di Cleopatra Selene, figlia di Cleopatra d'Egitto."
          },
          {
            "place": "Cherchell (l'antica Cesarea)",
            "text": "L'antica capitale di Giuba II, il cui museo conserva alcuni dei più bei mosaici e statue romane e greche dell'Algeria."
          }
        ]
      },
      {
        "day": 4,
        "title": "Volo per Ghardaïa e il M'Zab",
        "body": "Volo verso sud e ingresso nella valle del M'Zab: Ghardaïa, il suo mercato e i vicoli ad anfiteatro.",
        "stops": [
          {
            "place": "Il volo verso sud",
            "text": "Un breve volo interno che in un paio d'ore porta dal clima mediterraneo della capitale alle porte del Sahara."
          },
          {
            "place": "Ghardaïa",
            "text": "La cittadina del M'Zab, con le sue case a gradoni disposte come un anfiteatro intorno alla moschea sulla collina."
          },
          {
            "place": "Il mercato di Ghardaïa",
            "text": "La piazza porticata a più livelli sotto il minareto a piramide, cuore pulsante del M'Zab da un migliaio di anni."
          }
        ]
      },
      {
        "day": 5,
        "title": "Beni Isguen e partenza",
        "body": "Visita della città santa di Beni Isguen con guida locale, poi rientro e partenza.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La città santa e murata del M'Zab, visitata con una guida locale che ne spiega le regole di abbigliamento e comportamento ancora oggi osservate."
          },
          {
            "place": "Il rientro attraverso la valle del M'Zab",
            "text": "Il viaggio di ritorno tra i palmeti e le cittadine color ocra della valle, prima del trasferimento in aeroporto."
          },
          {
            "place": "L'aeroporto di Ghardaïa",
            "text": "Il trasferimento in aeroporto e il volo di partenza, a chiusura del viaggio culturale in Algeria."
          }
        ]
      }
    ],
    "includes": [
      "Tutti i trasferimenti",
      "Sistemazione 4 notti",
      "Guida privata autorizzata",
      "Trasporto privato",
      "Ingressi ai siti",
      "Colazioni"
    ],
    "excludes": [
      "Voli internazionali",
      "Volo interno Algeri–Ghardaïa",
      "Costi del visto",
      "Assicurazione di viaggio",
      "Pranzi e cene",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Da ottobre ad aprile"
      },
      {
        "label": "Ritmo",
        "value": "Moderato, con tempo su ogni sito"
      },
      {
        "label": "Abbigliamento",
        "value": "Coprente nel M'Zab"
      },
      {
        "label": "Partenza",
        "value": "Algeri — aeroporto Houari Boumediene"
      }
    ],
    "faqs": [
      {
        "q": "È adatto a una prima visita?",
        "a": "Sì, è il formato migliore per un primo viaggio: dà i tre volti del paese — capitale, eredità romana e Sahara — senza distanze eccessive."
      },
      {
        "q": "Il volo interno è incluso?",
        "a": "No, si prenota separatamente. Ce ne occupiamo noi e indichiamo gli orari compatibili con il programma."
      },
      {
        "q": "Serve il visto?",
        "a": "Sì, per quasi tutte le nazionalità, da ottenere prima della partenza presso un consolato algerino. Forniamo l'invito e il programma confermato richiesti."
      },
      {
        "q": "Il viaggio si può adattare?",
        "a": "Sì. Tutti i nostri viaggi sono privati: durata, ritmo e tappe si adattano al vostro calendario."
      }
    ]
  },
  "timimoun-desert-escape": {
    "title": "Timimoun — 5 giorni nell'oasi rossa del Gourara",
    "duration": "5 giorni · 4 notti",
    "hook": "Cinque giorni nell'oasi rossa di Timimoun — ksour e palmeti, antiche foggara, grandi dune e una notte al campo nel deserto.",
    "full": true,
    "seoTitle": "Viaggio Timimoun 5 giorni — Oasi rossa del Gourara",
    "seoDescription": "Viaggio privato di 5 giorni a Timimoun, l'oasi rossa del Gourara: architettura sudanese, ksour, foggara, palmeti, grandi dune e campo nel deserto.",
    "overview": "Timimoun merita il soprannome di oasi rossa: l'architettura è in terra cruda ocra, di stile sudanese, e la città domina una sebkha e un palmeto immenso. Attorno, il Gourara allinea decine di ksour, villaggi fortificati collegati da foggara — gallerie drenanti scavate a mano che portano l'acqua dalla falda. È una regione di oasi abitate più che di deserto vuoto, e questa è la sua ricchezza. Il viaggio alterna villaggi, giardini, arte di vivere sahariana e uscite tra le dune del Grande Erg Occidentale.",
    "highlights": [
      "Timimoun e la sua architettura rossa di stile sudanese",
      "I ksour del Gourara e i loro vicoli coperti",
      "Le foggara, patrimonio idraulico vivo",
      "Le grandi dune del Grande Erg Occidentale",
      "L'Ahellil, poesia cantata iscritta all'UNESCO",
      "Una notte in tenda al campo nel deserto"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo a Timimoun",
        "body": "Accoglienza e sistemazione, primo giro della città rossa e tramonto sul palmeto e sulla sebkha.",
        "stops": [
          {
            "place": "Timimoun",
            "text": "L'«oasi rossa» del Gourara — un'intera città costruita in architettura di terra color ocra rossa in stile sudanese, sopra un lago salato."
          },
          {
            "place": "La guesthouse Ti Massin",
            "text": "Una tradizionale casa in terra rossa fatta di cortili e terrazze, base per l'intero soggiorno."
          },
          {
            "place": "La falesia al tramonto",
            "text": "Il ciglio sopra la sebkha dove le mura di Timimoun si tingono d'arancio intenso nell'ultima luce, prima di una cena tradizionale."
          }
        ]
      },
      {
        "day": 2,
        "title": "I ksour del Gourara",
        "body": "Giornata nei villaggi fortificati attorno all'oasi: vicoli coperti, moschee di terra e vita dei giardini.",
        "stops": [
          {
            "place": "Ksar Guentour e il suo palmeto",
            "text": "Un ksar in terra rossa sopra il proprio palmeto — architettura classica del Gourara."
          },
          {
            "place": "Il ksar e l'oasi di Tala",
            "text": "Un'altra oasi di torri di terra tra le palme."
          },
          {
            "place": "Tramonto sulle dune e serata musicale",
            "text": "Sabbia al crepuscolo e una serata di musica tradizionale del Gourara."
          }
        ]
      },
      {
        "day": 3,
        "title": "Foggara e palmeti",
        "body": "Scoperta del sistema delle foggara e dei giardini che irrigano, con gli uomini che ancora le mantengono.",
        "stops": [
          {
            "place": "Le foggara di Ouled Saïd",
            "text": "Antiche gallerie sotterranee di irrigazione che convogliano l'acqua fino ai giardini — l'ingegno sahariano al suo meglio."
          },
          {
            "place": "Beni Aïssi e il suo ksar",
            "text": "Un picnic nel palmeto e il tè accanto a un antico ksar."
          },
          {
            "place": "Le grandi dune",
            "text": "Il tramonto sulla sabbia alta."
          }
        ]
      },
      {
        "day": 4,
        "title": "Il Grande Erg e il campo",
        "body": "Uscita in 4×4 verso le grandi dune, tramonto e notte al campo nel deserto.",
        "stops": [
          {
            "place": "Il sito di Ighzer",
            "text": "Un sito nel deserto esplorato nel fresco del mattino."
          },
          {
            "place": "Safari in 4x4 sulle dune",
            "text": "Dune dorate fino a un tramonto panoramico."
          },
          {
            "place": "Una cena al campo « Merdoum »",
            "text": "Un tradizionale banchetto Merdoum cotto in una fossa di sabbia, sotto le stelle."
          }
        ]
      },
      {
        "day": 5,
        "title": "Partenza",
        "body": "Rientro a Timimoun e trasferimento in aeroporto.",
        "stops": [
          {
            "place": "Il mercato di Timimoun",
            "text": "Il mercato della città rossa per spezie e artigianato."
          },
          {
            "place": "Il vecchio quartiere del ksar",
            "text": "Un'ultima passeggiata tra i vicoli di terra rossa e i passaggi coperti porticati della città vecchia."
          },
          {
            "place": "La strada verso nord",
            "text": "Il trasferimento di ritorno verso Algeri lungo il margine settentrionale del Grand Erg Occidental."
          }
        ]
      }
    ],
    "includes": [
      "Trasferimenti aeroportuali",
      "Sistemazione 4 notti",
      "Guida privata autorizzata",
      "Trasporto 4×4",
      "Uscita tra le dune e campo",
      "Colazioni"
    ],
    "excludes": [
      "Voli",
      "Costi del visto",
      "Assicurazione di viaggio",
      "Pranzi e cene",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Da ottobre ad aprile"
      },
      {
        "label": "Notti",
        "value": "Fresche d'inverno — servono strati"
      },
      {
        "label": "Ritmo",
        "value": "Rilassato, con spostamenti brevi"
      },
      {
        "label": "Accesso",
        "value": "Volo da Algeri"
      }
    ],
    "faqs": [
      {
        "q": "Che cos'è una foggara?",
        "a": "Una galleria sotterranea scavata a mano che porta l'acqua dalla falda ai giardini per semplice gravità, e poi la ripartisce tra le famiglie secondo una divisione codificata da secoli."
      },
      {
        "q": "Perché Timimoun è rossa?",
        "a": "Le costruzioni sono in terra cruda impastata con paglia, di una tinta ocra-rossa caratteristica, in uno stile detto sudanese diffuso dal Sahel al Sahara."
      },
      {
        "q": "Che cos'è l'Ahellil?",
        "a": "Una poesia cantata collettiva del Gourara, iscritta dall'UNESCO nel patrimonio culturale immateriale dell'umanità nel 2008."
      },
      {
        "q": "È adatto alle famiglie?",
        "a": "Sì. Il ritmo è dolce, le distanze brevi e l'ospitalità delle oasi rende il viaggio facile con ragazzi."
      }
    ]
  },
  "algeria-tour": {
    "title": "Algeria completa — grande viaggio di 10 giorni",
    "duration": "10 giorni · 9 notti",
    "hook": "Dieci giorni attraverso l'Algeria — Algeri e la Casbah, la costa romana, l'est e le sue città antiche, e il Sahara. Il giro completo del paese.",
    "full": true,
    "seoTitle": "Gran tour Algeria 10 giorni — Nord, Est e Sahara",
    "seoDescription": "Gran tour privato di 10 giorni in Algeria: Algeri, la costa romana di Tipaza, Costantina e l'est antico, poi il Sahara. Guida autorizzata.",
    "overview": "Dieci giorni è la prima durata che permette di collegare il nord e il deserto senza liquidarli in fretta. Questo grande itinerario parte da Algeri e dalla sua Casbah, segue la costa romana fino a Tipaza e Cherchell, risale verso est e le sue città antiche — Djémila, Timgad — e la città dei ponti di Costantina, poi scende a sud per l'esperienza sahariana. È il formato che consigliamo a chi viene da lontano e non tornerà presto.",
    "highlights": [
      "La Casbah di Algeri e la baia",
      "Tipaza e Cherchell, la costa romana",
      "Djémila e Timgad, città romane UNESCO",
      "Costantina, la città dei ponti sulle sue gole",
      "Una tappa sahariana completa",
      "Guida privata autorizzata dal primo all'ultimo giorno"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo ad Algeri",
        "body": "Accoglienza e sistemazione nella capitale, primo contatto con la baia e il lungomare.",
        "stops": [
          {
            "place": "L'aeroporto Houari Boumediene",
            "text": "Accoglienza in aeroporto da parte della guida e trasferimento diretto in hotel, prima tappa pratica del grande viaggio in Algeria."
          },
          {
            "place": "La baia di Algeri",
            "text": "L'arrivo lungo la costa, con la capitale bianca disposta a gradoni sopra il porto."
          },
          {
            "place": "Il lungomare di Algeri",
            "text": "Una prima passeggiata serale sul fronte mare, per prendere contatto con la città prima di partire alla sua scoperta."
          }
        ]
      },
      {
        "day": 2,
        "title": "Algeri e la Casbah",
        "body": "La Casbah UNESCO, i viali coloniali, la Grande Moschea e i musei.",
        "stops": [
          {
            "place": "La Casbah di Algeri",
            "text": "La cittadella ottomana patrimonio UNESCO, un labirinto bianco di palazzi, moschee e case a cortile che sale sopra la baia."
          },
          {
            "place": "La Grande Moschea di Algeri",
            "text": "Sul lungomare, la terza moschea più grande al mondo, con il minareto più alto d'Africa."
          },
          {
            "place": "Il Museo del Bardo",
            "text": "Preistoria ed etnografia in un'elegante villa moresca, dalle incisioni rupestri sahariane ai gioielli d'argento della vita quotidiana algerina."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza e Cherchell",
        "body": "La costa romana a ovest di Algeri: rovine sul mare, mausoleo reale e museo di Cherchell.",
        "stops": [
          {
            "place": "Le rovine romane di Tipaza",
            "text": "Un porto romano patrimonio UNESCO disteso lungo il Mediterraneo, tra basiliche, terme e un teatro a un passo dalle onde."
          },
          {
            "place": "Il Mausoleo reale di Mauretania",
            "text": "Un grande tamburo di pietra su una collina sul mare, tomba del I secolo a.C. del re berbero Giuba II e di Cleopatra Selene, figlia di Cleopatra d'Egitto."
          },
          {
            "place": "Il museo di Cherchell",
            "text": "Nell'antica capitale di Giuba II, un museo che custodisce alcuni dei più bei mosaici e statue romane e greche dell'Algeria."
          }
        ]
      },
      {
        "day": 4,
        "title": "Verso est",
        "body": "Strada verso l'est del paese attraverso gli altipiani, tra i paesaggi della Cabilia e le pianure cerealicole.",
        "stops": [
          {
            "place": "Gli altipiani orientali",
            "text": "La strada che lascia il Tell per salire sui grandi altipiani interni, in direzione dell'est del paese."
          },
          {
            "place": "I paesaggi della Cabilia",
            "text": "Le montagne verdi della Cabilia intraviste in lontananza lungo il percorso verso l'interno."
          },
          {
            "place": "Le pianure cerealicole",
            "text": "I campi di grano a perdita d'occhio delle pianure dell'est algerino, tappa di passaggio verso Costantina."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "La città romana di Djémila nel suo anfiteatro di colline — uno dei siti meglio conservati del Nord Africa.",
        "stops": [
          {
            "place": "Djémila (l'antica Cuicul)",
            "text": "Una città romana patrimonio UNESCO tra le colline verdi, straordinariamente conservata, con foro, templi e un teatro scavato nel pendio."
          },
          {
            "place": "I mosaici di Djémila",
            "text": "I mosaici del sito, tra i più ricchi del mondo romano, custoditi nel museo del sito."
          },
          {
            "place": "Il sito tra le colline",
            "text": "Le rovine racchiuse in un anfiteatro naturale di colline, uno dei paesaggi archeologici meglio conservati del Nord Africa."
          }
        ]
      },
      {
        "day": 6,
        "title": "Costantina",
        "body": "La città dei ponti: le gole del Rhumel, il palazzo Ahmed Bey, il museo di Cirta e la città vecchia.",
        "stops": [
          {
            "place": "Le gole del Rhumel e i ponti di Costantina",
            "text": "La \"città dei ponti\" sospesa sulla vertiginosa gola del Rhumel, attraversata dalla passerella di Sidi M'Cid."
          },
          {
            "place": "Il Palazzo Ahmed Bey",
            "text": "Il palazzo ottomano di inizio Ottocento dell'ultimo bey, con gallerie decorate e cortili ombreggiati."
          },
          {
            "place": "Il Museo di Cirta e la città vecchia",
            "text": "Le collezioni archeologiche del museo di Cirta, nel cuore della città vecchia dai vicoli sospesi sul canyon."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timgad",
        "body": "Timgad, colonia romana fondata da Traiano e la città a scacchiera più completa che sopravviva.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonia fondata da Traiano nel 100 d.C., la \"Pompei dell'Aurès\", distesa a scacchiera sull'altopiano."
          },
          {
            "place": "L'Arco di Traiano",
            "text": "L'arco trionfale che inquadra la via principale di Timgad, immagine simbolo della città."
          },
          {
            "place": "La biblioteca e il teatro di Timgad",
            "text": "Le rovine di una rara biblioteca pubblica romana e un teatro da 3.500 posti ancora oggi utilizzato."
          }
        ]
      },
      {
        "day": 8,
        "title": "Verso il Sahara",
        "body": "Discesa a sud e ingresso nel mondo delle oasi.",
        "stops": [
          {
            "place": "La strada a sud dell'Atlante",
            "text": "La discesa dal Tell attraverso l'alta steppa fino al pre-Sahara, il tragitto in cui il clima dell'Algeria cambia volto."
          },
          {
            "place": "Ghardaïa",
            "text": "La città principale del M'Zab, piramide di case patrimonio UNESCO che sale fino alla moschea e al minareto in cima."
          },
          {
            "place": "Una casa d'ospiti tradizionale del M'Zab",
            "text": "L'arrivo in una casa mozabita restaurata, con mura spesse, cortile interno e terrazza sulla valle."
          }
        ]
      },
      {
        "day": 9,
        "title": "Giornata sahariana",
        "body": "Palmeti, ksour e dune, con una serata nel deserto.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La città santa e murata del M'Zab, attraversata dall'antica porta d'ingresso, dove abbigliamento e fotografie seguono ancora l'usanza locale."
          },
          {
            "place": "El Atteuf",
            "text": "La più antica delle cinque città del M'Zab, la cui semplice moschea di Sidi Brahim colpì Le Corbusier e ne ispirò l'architettura moderna."
          },
          {
            "place": "Una serata tra le dune",
            "text": "Il tramonto tra palmeti e dune ai margini del deserto, con una cena sotto il cielo stellato del Sahara."
          }
        ]
      },
      {
        "day": 10,
        "title": "Rientro e partenza",
        "body": "Rientro verso Algeri e trasferimento in aeroporto.",
        "stops": [
          {
            "place": "Il viaggio di rientro verso Algeri",
            "text": "La lunga risalita verso nord, che ripercorre a ritroso il tragitto compiuto durante il viaggio."
          },
          {
            "place": "Un ultimo sguardo sulla baia di Algeri",
            "text": "L'arrivo nella capitale, con un'ultima vista sulla città bianca disposta a gradoni sopra il porto."
          },
          {
            "place": "L'aeroporto Houari Boumediene",
            "text": "Il trasferimento in aeroporto e l'assistenza al check-in per il volo di rientro."
          }
        ]
      }
    ],
    "includes": [
      "Tutti i trasferimenti",
      "Sistemazione 9 notti",
      "Guida privata autorizzata",
      "Trasporto privato",
      "Ingressi ai siti",
      "Colazioni"
    ],
    "excludes": [
      "Voli internazionali e interni",
      "Costi del visto",
      "Assicurazione di viaggio",
      "Pranzi e cene",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Da ottobre ad aprile"
      },
      {
        "label": "Ritmo",
        "value": "Intenso ma realistico"
      },
      {
        "label": "Distanze",
        "value": "Lunghe — previsto un volo interno"
      },
      {
        "label": "Partenza",
        "value": "Algeri"
      }
    ],
    "faqs": [
      {
        "q": "Dieci giorni bastano per vedere l'Algeria?",
        "a": "Per l'essenziale, sì. È la prima durata che permette di unire il nord e un vero passaggio nel Sahara senza passare le giornate in strada."
      },
      {
        "q": "Si viaggia molto su strada?",
        "a": "L'Algeria è il paese più grande d'Africa e le distanze sono reali. Il programma include un volo interno per evitare i tragitti più lunghi."
      },
      {
        "q": "Il viaggio è privato?",
        "a": "Sì, interamente: la vostra guida, il vostro veicolo, il vostro ritmo. Nulla è condiviso con altri gruppi."
      },
      {
        "q": "Si può partire in due?",
        "a": "Sì. La maggior parte delle nostre partenze è in coppia o in piccolo gruppo familiare."
      }
    ]
  },
  "algeria-through-time-and-tradition": {
    "title": "Algeria romana — Tipaza, Djémila e Timgad (3 giorni)",
    "duration": "3 giorni · 2 notti",
    "hook": "Tre giorni tra la più bella eredità romana dell'Algeria — le rovine sul mare di Tipaza e Cherchell, Djémila sulle colline e la scacchiera di Timgad.",
    "full": true,
    "seoTitle": "Algeria romana 3 giorni — Tipaza, Djémila, Timgad",
    "seoDescription": "Viaggio privato di 3 giorni tra le città romane dell'Algeria: Tipaza e Cherchell sul mare, Djémila tra le colline e Timgad.",
    "overview": "L'Algeria conserva le città romane meglio preservate del mondo mediterraneo, proprio perché il turismo di massa non è mai arrivato. In tre giorni questo itinerario collega le tre più belle: Tipaza, affacciata sulla riva, con il Mausoleo reale di Mauretania sopra; Djémila, in un anfiteatro di colline dell'est, il cui foro e i cui mosaici sono di rara conservazione; e Timgad, colonia fondata da Traiano attorno al 100 d.C., la città a scacchiera più completa che sopravviva, con il suo arco, il teatro e la biblioteca.",
    "highlights": [
      "Tipaza, città romana sul Mediterraneo",
      "Il Mausoleo reale di Mauretania",
      "Il museo archeologico di Cherchell",
      "Djémila e il suo foro tra le colline",
      "Timgad, l'arco di Traiano e la biblioteca",
      "Siti spesso deserti, anche in piena stagione"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tipaza e Cherchell",
        "body": "Partenza da Algeri verso la costa ovest: le rovine di Tipaza sul mare, il Mausoleo reale e il museo di Cherchell.",
        "stops": [
          {
            "place": "La Tipaza romana",
            "text": "Un porto romano patrimonio UNESCO che si allunga lungo il Mediterraneo — basiliche, terme e un teatro lambiti dalle onde."
          },
          {
            "place": "Cherchell (l'antica Cesarea)",
            "text": "L'antica capitale di Giuba II, il cui museo custodisce alcuni dei più bei mosaici e statue romane e greche dell'Algeria."
          },
          {
            "place": "Il Mausoleo reale di Mauretania",
            "text": "Un grande tamburo di pietra su una collina sopra il mare — la tomba del I secolo a.C. del re berbero Giuba II e di Cleopatra Selene, figlia di Cleopatra d'Egitto."
          }
        ]
      },
      {
        "day": 2,
        "title": "Djémila",
        "body": "Strada verso est e giornata a Djémila: il foro, i templi, le case e i mosaici del museo.",
        "stops": [
          {
            "place": "Le strade colonnate di Djémila",
            "text": "Porte monumentali e viali lastricati della città romana adagiata nella sua conca montana."
          },
          {
            "place": "Il teatro di Djémila",
            "text": "Un teatro scosceso incastonato nel pendio, che domina ancora la valle."
          },
          {
            "place": "I mosaici di Djémila",
            "text": "Mosaici in loco tra i più ricchi del mondo romano, esposti nel museo del sito."
          }
        ]
      },
      {
        "day": 3,
        "title": "Timgad",
        "body": "Timgad e la sua scacchiera intatta: arco di Traiano, teatro, terme e biblioteca, prima del rientro.",
        "stops": [
          {
            "place": "L'Arco di Traiano",
            "text": "L'arco trionfale che incornicia la via principale di Timgad — la sagoma simbolo della città."
          },
          {
            "place": "La biblioteca e il teatro di Timgad",
            "text": "Le rovine di una rara biblioteca pubblica romana e un teatro da 3.500 posti ancora in uso oggi."
          },
          {
            "place": "La griglia, le terme e i templi di Timgad",
            "text": "Il piano urbanistico romano da manuale che ha reso famosa Timgad."
          }
        ]
      }
    ],
    "includes": [
      "Trasferimenti",
      "Sistemazione 2 notti",
      "Guida privata autorizzata",
      "Trasporto privato",
      "Ingressi ai siti",
      "Colazioni"
    ],
    "excludes": [
      "Voli",
      "Costi del visto",
      "Assicurazione di viaggio",
      "Pranzi e cene",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Marzo–giugno, settembre–novembre"
      },
      {
        "label": "Camminate",
        "value": "Siti estesi — scarpe adatte"
      },
      {
        "label": "Ombra",
        "value": "Scarsa — cappello e acqua"
      },
      {
        "label": "Partenza",
        "value": "Algeri"
      }
    ],
    "faqs": [
      {
        "q": "Qual è la più impressionante delle tre?",
        "a": "Timgad per l'integrità del suo impianto urbano, Djémila per il contesto e i mosaici, Tipaza per il mare. Insieme danno la misura dell'Africa romana."
      },
      {
        "q": "Ci sono molti visitatori?",
        "a": "Pochissimi. È normale percorrere Timgad o Djémila incrociando una manciata di persone, cosa ormai introvabile altrove nel Mediterraneo."
      },
      {
        "q": "I siti sono attrezzati?",
        "a": "Sommariamente. Ci sono musei di sito e custodi, ma poca segnaletica: una guida cambia completamente la visita."
      },
      {
        "q": "Si possono fare tutte e tre in tre giorni?",
        "a": "Sì, ma le distanze sono reali. Il programma è intenso e prevede partenze mattutine."
      }
    ]
  },
  "oran-mostaganem-tlemcen": {
    "title": "L'Ovest algerino: Orano, Mostaganem e Tlemcen — 5 giorni",
    "duration": "5 giorni · 4 notti",
    "hook": "Cinque giorni nell'ovest algerino — il porto di Orano, le spiagge di Mostaganem e l'eredità andalusa di Tlemcen: moschea, palazzo e cascate.",
    "full": true,
    "seoTitle": "Ovest algerino 5 giorni — Orano e Tlemcen",
    "seoDescription": "Viaggio privato di 5 giorni nell'ovest dell'Algeria: Orano e Santa Cruz, le spiagge di Mostaganem e l'eredità andalusa di Tlemcen.",
    "overview": "L'ovest algerino è la parte andalusa del paese. Orano, seconda città e grande porto, mescola architettura spagnola e francese sotto il forte di Santa Cruz, e ha dato il raï al mondo. Mostaganem allinea spiagge e un vecchio quartiere ottomano sopra il mare. E Tlemcen, capitale culturale dell'Algeria andalusa, conserva la Grande Moschea, il minareto di Mansourah, il palazzo El Mechouar, il santuario di Sidi Boumediene e una tradizione musicale gharnati ancora viva.",
    "highlights": [
      "Orano, Santa Cruz e la baia",
      "La piazza del 1° Novembre e il centro storico",
      "Le spiagge e la vecchia Tigditt di Mostaganem",
      "La Grande Moschea di Tlemcen",
      "Mansourah, El Mechouar e Sidi Boumediene",
      "Le cascate di El Ourit e la musica gharnati"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo a Orano",
        "body": "Accoglienza e sistemazione, prima scoperta del lungomare e del centro.",
        "stops": [
          {
            "place": "Il forte di Santa Cruz",
            "text": "Una fortezza spagnola del XVI secolo sul monte Murdjadjo, con la vista più bella su Orano e sul mare."
          },
          {
            "place": "Place du 1er Novembre",
            "text": "La grande piazza centrale di Orano, circondata da facciate coloniali e dal teatro dell'opera."
          },
          {
            "place": "Sidi El Houari",
            "text": "Il quartiere più antico di Orano, con vestigia ottomane e spagnole intorno al vecchio porto."
          }
        ]
      },
      {
        "day": 2,
        "title": "Orano",
        "body": "Il forte di Santa Cruz, la città vecchia, il porto e la città spagnola e francese.",
        "stops": [
          {
            "place": "Il Museo nazionale Ahmed Zabana",
            "text": "Il museo principale di Orano — storia naturale, belle arti e il passato più profondo della regione."
          },
          {
            "place": "Il Sacré-Cœur",
            "text": "Un'ex cattedrale simbolo della città, oggi biblioteca pubblica, punto di riferimento della città moderna."
          },
          {
            "place": "La corniche sul lungomare",
            "text": "La passeggiata mediterranea di Orano e il suo punto d'incontro serale."
          }
        ]
      },
      {
        "day": 3,
        "title": "Mostaganem",
        "body": "Verso est lungo la costa: spiagge, vecchio quartiere di Tigditt e Bordj Ettork.",
        "stops": [
          {
            "place": "Le spiagge di Mostaganem",
            "text": "Lunghe distese di sabbia mediterranea sulla costa del Dahra — una rilassante pausa di mare."
          },
          {
            "place": "Bordj el Mehal, il vecchio forte",
            "text": "Un forte di epoca ottomana sopra la città, testimonianza del passato strategico di Mostaganem."
          },
          {
            "place": "Il quartiere di Tigditt",
            "text": "Il quartiere storico dai vicoli ripidi sopra il fiume."
          }
        ]
      },
      {
        "day": 4,
        "title": "Tlemcen",
        "body": "Giornata andalusa: Grande Moschea, Mansourah, El Mechouar e Sidi Boumediene.",
        "stops": [
          {
            "place": "La Grande Moschea di Tlemcen",
            "text": "Un capolavoro almoravide del XII secolo, il cui mihrab scolpito è tra i più belli del Maghreb."
          },
          {
            "place": "Il palazzo di El Mechouar",
            "text": "Il palazzo-cittadella restaurato dei sultani zianidi che fecero di Tlemcen una capitale."
          },
          {
            "place": "L'altopiano di Lalla Setti",
            "text": "Un altopiano verde sopra la città, con panorami, giardini e una funivia per raggiungerlo."
          }
        ]
      },
      {
        "day": 5,
        "title": "El Ourit e partenza",
        "body": "Le cascate di El Ourit e il plateau di Lalla Setti prima del trasferimento.",
        "stops": [
          {
            "place": "L'altopiano di Lalla Setti",
            "text": "La terrazza alta del Parco nazionale di Tlemcen sopra la città, con l'intera medina e la sua pianura distese in basso."
          },
          {
            "place": "Le cascate di El Ourit",
            "text": "Cascate che precipitano lungo pareti boscose nel Parco nazionale di Tlemcen, a est della città."
          },
          {
            "place": "Mansourah",
            "text": "Il grande minareto in rovina di una città d'assedio del XIV secolo ai margini di Tlemcen."
          }
        ]
      }
    ],
    "includes": [
      "Trasferimenti",
      "Sistemazione 4 notti",
      "Guida privata autorizzata",
      "Trasporto privato",
      "Ingressi ai siti",
      "Colazioni"
    ],
    "excludes": [
      "Voli",
      "Costi del visto",
      "Assicurazione di viaggio",
      "Pranzi e cene",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Aprile–giugno, settembre–novembre"
      },
      {
        "label": "Ritmo",
        "value": "Moderato"
      },
      {
        "label": "Partenza",
        "value": "Orano — aeroporto Ahmed Ben Bella"
      },
      {
        "label": "Musica",
        "value": "Raï a Orano, gharnati a Tlemcen"
      }
    ],
    "faqs": [
      {
        "q": "Perché visitare Tlemcen?",
        "a": "È il cuore dell'eredità andalusa in Algeria: moschee, palazzi e santuari dal XII al XIV secolo, in una città che ha conservato musica e artigianato."
      },
      {
        "q": "Si può collegare ad Algeri?",
        "a": "Sì. Orano è collegata ad Algeri da voli, treno e autostrada — adattiamo il programma al vostro punto di arrivo."
      },
      {
        "q": "È una regione balneare?",
        "a": "La costa è bella e le spiagge di Mostaganem sono reali, ma questo viaggio resta soprattutto culturale."
      },
      {
        "q": "Che cos'è il gharnati?",
        "a": "Una scuola di musica arabo-andalusa ereditata da Granada, di cui Tlemcen è il principale centro in Algeria."
      }
    ]
  },
  "the-beauty-of-algeria": {
    "title": "Costantina e Timgad — 2 giorni",
    "duration": "2 giorni · 1 notte",
    "hook": "Due giorni nell'est algerino — la città dei ponti sospesa sopra le gole del Rhumel, e la città romana di Timgad.",
    "full": true,
    "seoTitle": "Costantina e Timgad — 2 giorni nell'Est algerino",
    "seoDescription": "Viaggio privato di 2 giorni nell'est algerino: Costantina e le gole del Rhumel, poi la città romana di Timgad patrimonio UNESCO.",
    "overview": "Due giorni per l'essenziale dell'est algerino. Costantina è una città impossibile: costruita su una rocca spaccata dalle gole del Rhumel, ricucita da una serie di ponti spettacolari, e ricca di un passato che risale a Cirta, capitale numida. A un'ora e mezza di strada, Timgad dispiega nella pianura la scacchiera romana più completa che sopravviva. Il contrasto tra la città verticale e la città geometrica è tutto l'interesse di questo formato breve.",
    "highlights": [
      "Le gole del Rhumel e i ponti di Costantina",
      "Il palazzo Ahmed Bey",
      "Il museo di Cirta",
      "Timgad, l'arco di Traiano e il teatro",
      "La musica malouf di Costantina",
      "Un formato breve, ideale come complemento"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Costantina",
        "body": "La città dei ponti: il ponte Sidi M'Cid, le gole, il palazzo Ahmed Bey, il museo di Cirta e la città vecchia.",
        "stops": [
          {
            "place": "I ponti di Costantina",
            "text": "La «città dei ponti» che scavalca la vertiginosa gola del Rhumel, con la passerella di Sidi M'Cid sospesa in alto sopra di essa."
          },
          {
            "place": "Il palazzo di Ahmed Bey",
            "text": "Il palazzo ottomano di inizio Ottocento dell'ultimo bey, con gallerie dipinte e cortili ombreggiati."
          },
          {
            "place": "Il Museo nazionale Cirta",
            "text": "Antichità dell'antica Cirta — mosaici, bronzi e reperti numidi."
          }
        ]
      },
      {
        "day": 2,
        "title": "Timgad",
        "body": "Verso sud e giornata a Timgad: la pianta romana completa, l'arco di Traiano, il teatro e il museo dei mosaici.",
        "stops": [
          {
            "place": "L'Arco di Traiano",
            "text": "L'arco trionfale che incornicia la via principale di Timgad — la sagoma simbolo della città."
          },
          {
            "place": "La biblioteca e il teatro di Timgad",
            "text": "Le rovine di una rara biblioteca pubblica romana e un teatro da 3.500 posti ancora in uso oggi."
          },
          {
            "place": "Il foro e i templi di Timgad",
            "text": "Il cuore a scacchiera della colonia di Traiano, con le sue terme e i suoi templi."
          }
        ]
      }
    ],
    "includes": [
      "Trasferimenti",
      "Sistemazione 1 notte",
      "Guida privata autorizzata",
      "Trasporto privato",
      "Ingressi ai siti",
      "Colazione"
    ],
    "excludes": [
      "Voli",
      "Costi del visto",
      "Assicurazione di viaggio",
      "Pranzi e cene",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Aprile–giugno, settembre–novembre"
      },
      {
        "label": "Ritmo",
        "value": "Intenso su due giorni"
      },
      {
        "label": "Partenza",
        "value": "Costantina — aeroporto Mohamed Boudiaf"
      },
      {
        "label": "Si combina con",
        "value": "Djémila e Sétif"
      }
    ],
    "faqs": [
      {
        "q": "Perché Costantina è famosa?",
        "a": "Per il suo sito: una città costruita su uno sperone roccioso spaccato da un canyon di 200 metri, attraversato da ponti che ne sono la firma visiva."
      },
      {
        "q": "Timgad vale la deviazione?",
        "a": "È la città romana a scacchiera più completa che sopravviva, spesso chiamata la Pompei d'Africa, ed è quasi sempre deserta."
      },
      {
        "q": "Come si raggiunge Costantina?",
        "a": "In aereo da Algeri, in treno, o con l'autostrada est-ovest."
      },
      {
        "q": "Due giorni bastano?",
        "a": "Per questi due siti, sì. Aggiungendo Djémila serve un giorno in più."
      }
    ]
  },
  "algeria-eastern-sahara-discovery": {
    "title": "Est algerino e Sahara — 6 giorni",
    "duration": "6 giorni · 5 notti",
    "hook": "Sei giorni attraverso l'est del paese — i ponti di Costantina, le città romane di Djémila e Timgad, una porta del Sahara a Bou Saada e una giornata a Béjaïa.",
    "full": true,
    "seoTitle": "Est algerino e Sahara — viaggio di 6 giorni",
    "seoDescription": "Viaggio privato di 6 giorni nell'est algerino: i ponti di Costantina, Djémila e Timgad, la porta del Sahara a Bou Saada e la costa di Béjaïa.",
    "overview": "Un grande anello attraverso l'est algerino, dove città romane, gole vertiginose, porte del deserto e Mediterraneo si susseguono a una giornata di strada l'una dall'altra. Si toccano Costantina, la vertiginosa città dei ponti; le città romane UNESCO di Djémila e Timgad; il limite delle oasi attorno a Bou Saada e Biskra; e una giornata finale sulla costa a Béjaïa. È l'itinerario più ricco che attraversi il nord-est del paese.",
    "highlights": [
      "I ponti sospesi di Costantina",
      "Le rovine romane di Djémila e Timgad (UNESCO)",
      "Oasi e paesaggi desertici attorno a Bou Saada",
      "La costa mediterranea di Béjaïa",
      "Algeri, la capitale storica"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Da Algeri a Costantina",
        "body": "Arrivo ad Algeri e trasferimento a Costantina: i ponti sospesi sopra le gole del Rhumel, la moschea Emir Abdelkader e la città vecchia. Notte a Costantina.",
        "stops": [
          {
            "place": "I ponti di Costantina",
            "text": "La «città dei ponti» che scavalca la vertiginosa gola del Rhumel, con la passerella di Sidi M'Cid sospesa in alto sopra di essa."
          },
          {
            "place": "La moschea dell'Emiro Abdelkader",
            "text": "Una delle moschee più grandi d'Africa, i cui minareti gemelli sono un moderno simbolo di Costantina."
          },
          {
            "place": "La città vecchia di Souika",
            "text": "I vicoli stretti dell'antica medina di Costantina, aggrappata alla roccia."
          }
        ]
      },
      {
        "day": 2,
        "title": "Da Costantina a Sétif",
        "body": "Verso Sétif e le rovine romane UNESCO di Djémila — foro, templi e mosaici — poi il centro città e la fontana di Aïn El Fouara. Notte a Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Una città romana patrimonio UNESCO tra montagne verdi, splendidamente conservata — foro, templi e un teatro scosceso."
          },
          {
            "place": "I mosaici di Djémila",
            "text": "Mosaici in loco tra i più ricchi del mondo romano, esposti nel museo del sito."
          },
          {
            "place": "Aïn El Fouara, Sétif",
            "text": "L'amata fontana del 1898 nel cuore della città, il simbolo duraturo di Sétif."
          }
        ]
      },
      {
        "day": 3,
        "title": "Da Sétif a Batna",
        "body": "Proseguimento verso Batna e la città romana UNESCO di Timgad: l'arco di Traiano, la biblioteca e il teatro, con tempo per il patrimonio locale. Notte a Batna.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonia di Traiano del 100 d.C., pianificata a scacchiera — la «Pompei dell'Aurès», distesa sulla pianura aperta."
          },
          {
            "place": "L'Arco di Traiano",
            "text": "L'arco trionfale che incornicia la via principale di Timgad — la sagoma simbolo della città."
          },
          {
            "place": "La biblioteca e il teatro di Timgad",
            "text": "Le rovine di una rara biblioteca pubblica romana e un teatro da 3.500 posti ancora in uso oggi."
          }
        ]
      },
      {
        "day": 4,
        "title": "Da Batna a Biskra e Bou Saada",
        "body": "Attraverso Biskra, porta del Sahara, per i suoi palmeti e i paesaggi di oasi, poi Bou Saada e i suoi mercati tradizionali. Notte a Bou Saada.",
        "stops": [
          {
            "place": "I palmeti di Biskra",
            "text": "La «regina dello Ziban» — una grande oasi di palme da dattero che segna il vero inizio del Sahara."
          },
          {
            "place": "Bou Saada",
            "text": "La «città della felicità», una cittadina-oasi amata dai pittori da lungo tempo."
          },
          {
            "place": "I souk di Bou Saada",
            "text": "Mercati tradizionali per argento, lana e datteri."
          }
        ]
      },
      {
        "day": 5,
        "title": "Da Bou Saada ad Algeri",
        "body": "Visita della zawiya di El Hamel e del patrimonio vicino, poi trasferimento ad Algeri e serata libera. Notte ad Algeri.",
        "stops": [
          {
            "place": "La zawiya di El Hamel",
            "text": "Un santuario sufi Rahmaniyya e una scuola coranica in cima a una collina sopra Bou Saada — tranquilla, austera e panoramica."
          },
          {
            "place": "Bou Saada e i contrafforti degli Ouled Naïl",
            "text": "La «città della felicità» — un'oasi di palme ai piedi di colline ocra spoglie, città di pittori fin dall'Ottocento."
          },
          {
            "place": "La strada verso nord, per Algeri",
            "text": "Fuori dalla steppa, attraverso la piana dell'Hodna e oltre il Tell Atlas, con l'arrivo in capitale per una serata libera."
          }
        ]
      },
      {
        "day": 6,
        "title": "Béjaïa e partenza",
        "body": "Escursione in giornata a Béjaïa: il forte di Gouraya, Cap Carbon e i panorami sulla costa, poi il trasferimento in aeroporto.",
        "stops": [
          {
            "place": "Il forte di Gouraya, Béjaïa",
            "text": "Un forte in alto sopra Béjaïa, con ampie vedute sulla costa cabila."
          },
          {
            "place": "Cap Carbon",
            "text": "Un promontorio spettacolare con faro, su una delle coste più belle del Mediterraneo."
          },
          {
            "place": "La corniche di Béjaïa",
            "text": "La strada panoramica tra Gouraya e Cap Carbon, sopra le calette che hanno reso famoso questo tratto della costa cabila."
          }
        ]
      }
    ],
    "includes": [
      "Accoglienza in aeroporto e trasferimenti",
      "Veicolo climatizzato",
      "Sistemazione 5 notti in hotel",
      "Colazione quotidiana",
      "Guida turistica autorizzata",
      "Tutti gli ingressi ai siti",
      "Escursione in giornata a Béjaïa"
    ],
    "excludes": [
      "Voli internazionali",
      "Pranzi e cene",
      "Spese personali",
      "Assicurazione di viaggio",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Primavera e autunno"
      },
      {
        "label": "Ritmo",
        "value": "Da moderato ad attivo — tappe quotidiane"
      },
      {
        "label": "Formula",
        "value": "Privato, con guida, 5 notti con colazione"
      },
      {
        "label": "Da portare",
        "value": "Protezione solare, scarpe robuste, cappello"
      }
    ],
    "faqs": [
      {
        "q": "Quali siti UNESCO sono inclusi?",
        "a": "Le città romane di Djémila e Timgad."
      },
      {
        "q": "Si guida molto?",
        "a": "Sì: è un itinerario attraverso tutto l'est, con trasferimenti panoramici ogni giorno."
      },
      {
        "q": "La parte desertica prevede campi nel deserto profondo?",
        "a": "No: si raggiunge la porta del Sahara attorno a Bou Saada e Biskra, senza campi nel deserto profondo."
      },
      {
        "q": "La colazione è inclusa?",
        "a": "Sì: colazione quotidiana, oltre all'escursione a Béjaïa e agli ingressi ai siti."
      }
    ]
  },
  "djanet-ghardaia-desert-2-days": {
    "title": "Djanet e Ghardaïa — 6 giorni tra deserto e patrimonio",
    "duration": "6 giorni · 5 notti",
    "hook": "Sei giorni che uniscono i due volti del Sahara algerino: le città del M'Zab patrimonio UNESCO e il grande deserto attorno a Djanet.",
    "full": true,
    "seoTitle": "Djanet e Ghardaïa — 6 giorni di deserto e M'Zab",
    "seoDescription": "Viaggio privato di 6 giorni: il Tadrart Rouge e l'arte rupestre del Tassili attorno a Djanet, poi le città millenarie del M'Zab a Ghardaïa. Due Sahara UNESCO.",
    "overview": "Il viaggio sahariano algerino per eccellenza, che unisce i due grandi mondi del deserto. Attorno a Djanet si esplorano l'arenaria rossa scolpita del Tadrart, le gallerie preistoriche del Tassili n'Ajjer e le notti al campo con una squadra tuareg. Poi si risale verso Ghardaïa e la valle del M'Zab, patrimonio UNESCO, dove le città-oasi fortificate hanno conservato intatta la loro vita medievale. Due Sahara UNESCO in un solo viaggio, in 4×4 e sotto le stelle.",
    "highlights": [
      "Il Tadrart Rouge e le sue formazioni di arenaria",
      "L'arte rupestre preistorica del Tassili n'Ajjer (UNESCO)",
      "Le notti al campo nel Sahara",
      "La cultura tuareg e la cerimonia del tè",
      "Le città della valle del M'Zab (UNESCO)",
      "Il 4×4 tra le dune e i tramonti nel deserto"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo a Djanet",
        "body": "Accoglienza all'aeroporto di Djanet e trasferimento in guesthouse o al campo, con un'uscita al tramonto sulle dune vicine e una cena sahariana tradizionale.",
        "stops": [
          {
            "place": "L'aeroporto di Tiska, Djanet",
            "text": "Accolti nell'aeroporto più a sud dell'Algeria e trasferiti attraverso i palmeti — 30 km dalla pista all'oasi."
          },
          {
            "place": "Djanet e le dune al tramonto",
            "text": "Una cittadina oasi tuareg sotto falesie rosse, con una prima escursione al tramonto verso le dune vicine."
          },
          {
            "place": "Una cena di benvenuto sahariana",
            "text": "Taguella cotta nella sabbia con un tagine e tè tuareg, servita al campo o in guesthouse la prima notte nel sud."
          }
        ]
      },
      {
        "day": 2,
        "title": "Il Tadrart Rouge",
        "body": "Giornata in 4×4 nel Tadrart tra formazioni rocciose e incisioni antiche, picnic nel deserto, tramonto sulle dune rosse e notte in campo sotto le stelle.",
        "stops": [
          {
            "place": "La Tadrart Rouge",
            "text": "Canyon e archi di arenaria arancione scolpiti dal vento — tra i paesaggi più spettacolari del Sahara."
          },
          {
            "place": "Arte rupestre preistorica",
            "text": "Pitture e incisioni di pastori, cacciatori e animali selvatici di un Sahara verde, vecchie fino a circa 10.000 anni — più antiche delle piramidi."
          },
          {
            "place": "Dune rosse e campo sotto le stelle",
            "text": "Un picnic nel deserto, il tramonto sulle dune rosse e una notte in campeggio sotto le stelle."
          }
        ]
      },
      {
        "day": 3,
        "title": "Il Tassili n'Ajjer",
        "body": "Scoperta dell'altopiano del Tassili e delle sue pitture rupestri, camminando tra canyon e paesaggi di arenaria; cena e notte al campo.",
        "stops": [
          {
            "place": "L'altopiano del Tassili n'Ajjer",
            "text": "Una vasta «foresta di roccia» di arenaria, patrimonio UNESCO per una delle più grandi concentrazioni al mondo di arte preistorica."
          },
          {
            "place": "Le pitture rupestri del Tassili",
            "text": "Migliaia di pitture di pastori e animali selvatici di un Sahara più umido, raggiunte a piedi attraverso i canyon."
          },
          {
            "place": "Canyon e torri di arenaria",
            "text": "Pinnacoli erosi e gole che sembrano appartenere a un altro pianeta."
          }
        ]
      },
      {
        "day": 4,
        "title": "Oasi e cultura del deserto",
        "body": "Visita di un'oasi e dei suoi palmeti, incontro con una comunità tuareg attorno alla cerimonia del tè, poi rientro a Djanet per la notte.",
        "stops": [
          {
            "place": "Un'oasi e i suoi palmeti",
            "text": "Giardini ombreggiati e canali di irrigazione nel deserto."
          },
          {
            "place": "Cerimonia del tè tuareg",
            "text": "I tradizionali tre bicchieri di tè sahariano con una famiglia tuareg — la cultura viva del profondo sud."
          },
          {
            "place": "I vecchi ksour di Djanet",
            "text": "I tre villaggi in mattoni di fango sovrapposti — Azellouaz, El Mihan e Adjahil — attorno ai quali è cresciuta l'oasi moderna."
          }
        ]
      },
      {
        "day": 5,
        "title": "Trasferimento a Ghardaïa",
        "body": "Viaggio verso Ghardaïa nella valle del M'Zab, sistemazione in una guesthouse tradizionale e passeggiata serale nella città vecchia.",
        "stops": [
          {
            "place": "Il viaggio verso nord, al M'Zab",
            "text": "Il lungo trasferimento fuori dal profondo sud, circa 1.000 km, dal Tassili al margine del Sahara settentrionale."
          },
          {
            "place": "Una guesthouse tradizionale nel M'Zab",
            "text": "Una casa mozabita restaurata, con mura spesse, un cortile interno e una terrazza sul tetto — nel cuore della città vecchia e non sulla circonvallazione."
          },
          {
            "place": "Passeggiata nella città vecchia di Ghardaïa",
            "text": "Una serata tra i vicoli delle città collinari del M'Zab, dopo il viaggio verso nord."
          }
        ]
      },
      {
        "day": 6,
        "title": "La valle del M'Zab e partenza",
        "body": "Visita di Beni Isguen, El Atteuf e Melika — moschee, souk e botteghe — con pranzo prima del trasferimento in aeroporto.",
        "stops": [
          {
            "place": "Beni Isguen",
            "text": "La città sacra murata del M'Zab, cui si accede dall'antica porta, dove abbigliamento e fotografie seguono le usanze locali."
          },
          {
            "place": "El Atteuf",
            "text": "La più antica delle cinque città del M'Zab, la cui semplice moschea di Sidi Brahim colpì così tanto Le Corbusier da influenzare l'architettura moderna."
          },
          {
            "place": "Melika",
            "text": "Una città del M'Zab in cima a una collina, con tombe di marabutti e ampie viste sulla valle."
          }
        ]
      }
    ],
    "includes": [
      "Trasferimenti aeroporto/hotel",
      "Veicolo climatizzato / 4×4",
      "Guida locale professionale",
      "Sistemazione secondo programma",
      "Pasti indicati (pranzo e cena)",
      "Ingressi ai siti",
      "Escursione nel deserto a Djanet"
    ],
    "excludes": [
      "Voli interni e internazionali",
      "Spese personali",
      "Bevande non indicate",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Da novembre a febbraio"
      },
      {
        "label": "Ritmo",
        "value": "Moderato — giornate in 4×4 e brevi camminate"
      },
      {
        "label": "Formula",
        "value": "Privato, con guida, 5 notti; pasti come da programma"
      },
      {
        "label": "Da portare",
        "value": "Strati caldi per le notti, lampada frontale, abiti coprenti per il M'Zab"
      }
    ],
    "faqs": [
      {
        "q": "Come si raggiunge Djanet?",
        "a": "Con un volo interno da Algeri (non incluso); vi consigliamo noi gli orari compatibili."
      },
      {
        "q": "Le due zone sono patrimonio UNESCO?",
        "a": "Sì: il Tassili n'Ajjer e la valle del M'Zab, entrambi iscritti nel 1982."
      },
      {
        "q": "Dove si dorme?",
        "a": "In campi nel deserto attorno a Djanet e in guesthouse a Ghardaïa o nei dintorni."
      },
      {
        "q": "È fisicamente impegnativo?",
        "a": "Moderato: soprattutto spostamenti in 4×4, con brevi camminate e salite sulle dune al vostro ritmo."
      }
    ]
  },
  "algeria-intensive-discovery-tour": {
    "title": "Scoperta intensiva dell'Algeria — 5 giorni",
    "duration": "5 giorni · 4 notti",
    "hook": "Cinque giorni a ritmo serrato per vedere il massimo del paese: capitale, costa romana e primo approccio al Sahara.",
    "full": true,
    "seoTitle": "Scoperta intensiva dell'Algeria — 5 giorni",
    "seoDescription": "Viaggio privato e intensivo di 5 giorni: la Casbah e i musei di Algeri, Tipaza romana, i ponti di Costantina, Timgad e Djémila e il deserto di Bou Saada.",
    "overview": "Per chi ha poco tempo e molta curiosità: cinque giorni intensivi sui grandi luoghi dell'Algeria. La Casbah, il museo del Bardo e il Memoriale del Martire ad Algeri; la costa romana di Tipaza e Cherchell; i ponti di Costantina; le città romane UNESCO di Timgad e Djémila; e un'escursione nel deserto a Bou Saada. Il ritmo è sostenuto, con guida autorizzata e pensione completa, per concentrare le icone del paese in un solo viaggio.",
    "highlights": [
      "La Casbah, il museo del Bardo e il Memoriale del Martire",
      "Tipaza romana, Cherchell e il mausoleo di Cleopatra Selene",
      "I ponti sospesi e i palazzi di Costantina",
      "I siti romani UNESCO di Timgad e Djémila",
      "Un'escursione nel deserto a Bou Saada"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Algeri",
        "body": "Accoglienza in aeroporto e trasferimento, poi il museo nazionale del Bardo, una passeggiata nella Casbah UNESCO e il Memoriale del Martire con la sua vista sulla capitale.",
        "stops": [
          {
            "place": "Il Museo del Bardo",
            "text": "Preistoria ed etnografia in un'elegante villa moresca, dai calchi dell'arte rupestre sahariana ai gioielli d'argento e alla vita quotidiana algerina."
          },
          {
            "place": "La Casbah di Algeri",
            "text": "La cittadella ottomana patrimonio UNESCO — un ripido labirinto bianco di palazzi, moschee e case a corte che si arrampica sopra la baia."
          },
          {
            "place": "Il Memoriale dei Martiri (Maqam Echahid)",
            "text": "Tre alte foglie di palma in cemento innalzate nel 1982 sopra la città, in onore dei caduti della guerra d'indipendenza."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza e Cherchell",
        "body": "Verso ovest lungo la costa: le rovine romane di Tipaza, il Mausoleo reale di Mauretania, poi il museo e il vecchio porto di Cherchell.",
        "stops": [
          {
            "place": "La Tipaza romana",
            "text": "Un porto romano patrimonio UNESCO che si allunga lungo il Mediterraneo — basiliche, terme e un teatro lambiti dalle onde."
          },
          {
            "place": "Il Mausoleo reale di Mauretania",
            "text": "Un grande tamburo di pietra su una collina sopra il mare — la tomba del I secolo a.C. del re berbero Giuba II e di Cleopatra Selene, figlia di Cleopatra d'Egitto."
          },
          {
            "place": "Cherchell (l'antica Cesarea)",
            "text": "L'antica capitale di Giuba II, il cui museo custodisce alcuni dei più bei mosaici e statue romane e greche dell'Algeria."
          }
        ]
      },
      {
        "day": 3,
        "title": "Costantina e Timgad",
        "body": "Verso est: i ponti sospesi di Costantina e il palazzo Ahmed Bey, poi la città romana di Timgad.",
        "stops": [
          {
            "place": "I ponti di Costantina",
            "text": "La «città dei ponti» che scavalca la vertiginosa gola del Rhumel, con la passerella di Sidi M'Cid sospesa in alto sopra di essa."
          },
          {
            "place": "Il palazzo di Ahmed Bey",
            "text": "Il palazzo ottomano di inizio Ottocento dell'ultimo bey, con gallerie dipinte e cortili ombreggiati."
          },
          {
            "place": "Timgad",
            "text": "La colonia di Traiano del 100 d.C., pianificata a scacchiera — la «Pompei dell'Aurès», distesa sulla pianura aperta."
          }
        ]
      },
      {
        "day": 4,
        "title": "Djémila e Sétif",
        "body": "La città romana UNESCO di Djémila — foro, teatro e mosaici — poi la fontana di Aïn El Fouara a Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Una città romana patrimonio UNESCO tra montagne verdi, splendidamente conservata — foro, templi e un teatro scosceso."
          },
          {
            "place": "I mosaici di Djémila",
            "text": "Mosaici in loco tra i più ricchi del mondo romano, esposti nel museo del sito."
          },
          {
            "place": "Aïn El Fouara, Sétif",
            "text": "L'amata fontana del 1898 nel cuore della città, il simbolo duraturo di Sétif."
          }
        ]
      },
      {
        "day": 5,
        "title": "Bou Saada e rientro",
        "body": "Verso sud fino a Bou Saada, porta del Sahara, per l'oasi e un'escursione tra le dune, prima della strada di ritorno verso Algeri.",
        "stops": [
          {
            "place": "L'oasi di Bou Saada",
            "text": "La porta d'accesso al Sahara, con un'escursione nel deserto tra le dune."
          },
          {
            "place": "Il Mulino Ferrero",
            "text": "Il vecchio mulino sull'Oued Bou Saada, accanto alla gola e ai giardini di palme dipinti da Étienne Dinet."
          },
          {
            "place": "Le dune a sud di Bou Saada",
            "text": "Una breve escursione sulla sabbia — il primo vero Sahara lungo la strada verso sud, e il momento cardine della giornata."
          }
        ]
      }
    ],
    "includes": [
      "Accoglienza in aeroporto e trasferimenti",
      "Veicolo turistico climatizzato",
      "Sistemazione in hotel selezionati",
      "Tutti i pasti durante il viaggio",
      "Guida turistica autorizzata",
      "Ingressi ai siti",
      "Escursione nel deserto a Bou Saada"
    ],
    "excludes": [
      "Voli internazionali",
      "Spese personali"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Primavera e autunno"
      },
      {
        "label": "Ritmo",
        "value": "Attivo — giornate piene con trasferimenti quotidiani"
      },
      {
        "label": "Formula",
        "value": "Privato, con guida, 4 notti; pensione completa"
      },
      {
        "label": "Da portare",
        "value": "Scarpe comode, protezione solare, abiti coprenti per la Casbah"
      }
    ],
    "faqs": [
      {
        "q": "Il ritmo è impegnativo?",
        "a": "Sì, è intensivo per costruzione: partenze mattutine e spostamenti quotidiani."
      },
      {
        "q": "Quali siti UNESCO sono inclusi?",
        "a": "Timgad, Djémila e la Casbah di Algeri."
      },
      {
        "q": "I pasti sono inclusi?",
        "a": "Sì: tutti i pasti durante il viaggio, oltre agli ingressi e all'escursione di Bou Saada."
      },
      {
        "q": "Il ritmo si può alleggerire?",
        "a": "Sì: ditecelo e lo trasformiamo in un itinerario più disteso."
      }
    ]
  },
  "the-soul-of-algeria": {
    "title": "L'anima dell'Algeria — 4 giorni",
    "duration": "4 giorni · 3 notti",
    "hook": "Quattro giorni tra la capitale, la costa romana e l'entroterra, per cogliere il carattere del paese più che la lista dei siti.",
    "full": true,
    "seoTitle": "L'anima dell'Algeria — viaggio di 4 giorni",
    "seoDescription": "Viaggio privato di 4 giorni: la Casbah e i musei di Algeri, le rovine romane di Tipaza e Cherchell e l'oasi di Bou Saada. Hotel 4 stelle inclusi.",
    "overview": "Un'introduzione equilibrata, in quattro giorni, alla varietà dell'Algeria. Ad Algeri il museo del Bardo, Notre-Dame d'Afrique, il Memoriale del Martire e la Casbah UNESCO; sulla costa le rovine romane di Tipaza in riva al mare e il museo di Cherchell; e infine Bou Saada, città-oasi al limite del Sahara. Cultura, antichità e deserto in un viaggio breve e confortevole, con gli hotel inclusi.",
    "highlights": [
      "Il museo del Bardo e Notre-Dame d'Afrique",
      "Il Memoriale del Martire e la Casbah UNESCO",
      "Tipaza romana e il museo di Cherchell",
      "La città-oasi di Bou Saada",
      "Un breve viaggio attraverso culture e paesaggi"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Algeri",
        "body": "Il museo del Bardo e i suoi mosaici, la basilica di Notre-Dame d'Afrique sopra la baia e il Memoriale del Martire.",
        "stops": [
          {
            "place": "Il Museo del Bardo",
            "text": "Preistoria ed etnografia in un'elegante villa moresca, dai calchi dell'arte rupestre sahariana ai gioielli d'argento e alla vita quotidiana algerina."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Una basilica ottocentesca — «Nostra Signora d'Africa» — sulle scogliere sopra la baia, dedicata tanto ai musulmani quanto ai cristiani."
          },
          {
            "place": "Il Memoriale dei Martiri (Maqam Echahid)",
            "text": "Tre alte foglie di palma in cemento innalzate nel 1982 sopra la città, in onore dei caduti della guerra d'indipendenza."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza e Cherchell",
        "body": "Il Mausoleo reale di Mauretania, il parco archeologico romano di Tipaza e il museo di Cherchell.",
        "stops": [
          {
            "place": "Il Mausoleo reale di Mauretania",
            "text": "Un grande tamburo di pietra su una collina sopra il mare — la tomba del I secolo a.C. del re berbero Giuba II e di Cleopatra Selene, figlia di Cleopatra d'Egitto."
          },
          {
            "place": "La Tipaza romana",
            "text": "Un porto romano patrimonio UNESCO che si allunga lungo il Mediterraneo — basiliche, terme e un teatro lambiti dalle onde."
          },
          {
            "place": "Cherchell (l'antica Cesarea)",
            "text": "L'antica capitale di Giuba II, il cui museo custodisce alcuni dei più bei mosaici e statue romane e greche dell'Algeria."
          }
        ]
      },
      {
        "day": 3,
        "title": "Bou Saada",
        "body": "Verso sud fino a Bou Saada: la fortezza e i suoi panorami, il museo Nasreddine Dinet e la moschea storica.",
        "stops": [
          {
            "place": "I panorami di Bou Saada",
            "text": "La fortezza e i punti panoramici sulla cittadina-oasi."
          },
          {
            "place": "Il Museo Nasreddine Dinet",
            "text": "Il museo del pittore orientalista che rese famosa Bou Saada, con le sue opere e i suoi cimeli."
          },
          {
            "place": "La moschea storica",
            "text": "La moschea della città vecchia, nel cuore di Bou Saada."
          }
        ]
      },
      {
        "day": 4,
        "title": "Algeri",
        "body": "Rientro ad Algeri per la Casbah UNESCO, il Giardino di prova di Hamma e il museo dei Moudjahidine.",
        "stops": [
          {
            "place": "La Casbah di Algeri",
            "text": "La cittadella ottomana patrimonio UNESCO — un ripido labirinto bianco di palazzi, moschee e case a corte che si arrampica sopra la baia."
          },
          {
            "place": "Il Giardino botanico di Hamma",
            "text": "Il grande Jardin d'Essai ottocentesco, uno dei più bei giardini botanici d'Africa."
          },
          {
            "place": "Il Museo dei Mujahidin",
            "text": "La storia dei combattenti per l'indipendenza, raccontata ai piedi del Memoriale dei Martiri."
          }
        ]
      }
    ],
    "includes": [
      "Sistemazione in hotel 4 stelle con colazione",
      "Pranzo tradizionale",
      "Trasporto privato",
      "Guida locale"
    ],
    "excludes": [],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Primavera e autunno; ottobre–aprile per Bou Saada"
      },
      {
        "label": "Ritmo",
        "value": "Moderato"
      },
      {
        "label": "Formula",
        "value": "Privato, con guida, 3 notti in hotel 4 stelle"
      },
      {
        "label": "Da portare",
        "value": "Abiti coprenti per la Casbah, protezione solare, scarpe comode"
      }
    ],
    "faqs": [
      {
        "q": "Quali siti UNESCO sono inclusi?",
        "a": "Tipaza e la Casbah di Algeri."
      },
      {
        "q": "Bou Saada è lontana?",
        "a": "Qualche ora a sud di Algeri; il trasporto è incluso."
      },
      {
        "q": "La sistemazione è inclusa?",
        "a": "Sì: hotel 4 stelle con colazione e un pranzo tradizionale."
      },
      {
        "q": "Va bene per un viaggio breve?",
        "a": "Sì: fa assaggiare tre regioni in quattro giorni."
      }
    ]
  },
  "the-culture-and-heritage-of-algeria": {
    "title": "Cultura e patrimonio dell'Algeria — 8 giorni",
    "duration": "8 giorni · 7 notti",
    "hook": "Otto giorni tra la cultura e la storia algerine — la capitale e la Casbah, Tipaza e Djémila, i ponti di Costantina e l'oasi di Bou Saada.",
    "full": true,
    "seoTitle": "Cultura e patrimonio dell'Algeria — 8 giorni",
    "seoDescription": "Circuito culturale privato di 8 giorni: Algeri e la Casbah, Tipaza e Cherchell, Costantina, Djémila e l'oasi di Bou Saada, in hotel 4 stelle.",
    "overview": "Un circuito culturale più profondo, lungo otto giorni. Da Algeri e dalla sua Casbah si segue la costa romana a Tipaza e Cherchell, si attraversa il paese verso Costantina e le sue gole, si percorre la città romana di Djémila sulle colline e si finisce nella calma di oasi di Bou Saada. Unisce tre siti di livello UNESCO a città vive e al limite del deserto, a un ritmo che lascia il tempo di capire ciascuna tappa.",
    "highlights": [
      "Algeri, i suoi musei e la Casbah storica",
      "Tipaza romana, Cherchell e Djémila",
      "Costantina e il suo ponte sospeso",
      "Il fascino di oasi di Bou Saada",
      "Un intreccio di cultura, storia e paesaggio"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo ad Algeri",
        "body": "Accoglienza in aeroporto, sistemazione in un hotel del centro, giro serale della città e cena.",
        "stops": [
          {
            "place": "L'aeroporto Houari Boumediene",
            "text": "Accolti all'arrivo e trasferiti in un hotel del centro città, con ogni aspetto pratico già organizzato."
          },
          {
            "place": "Un giro serale della città",
            "text": "Un primo giro di orientamento mentre si accendono le luci — i portici del lungomare, Place des Martyrs e la Grande Poste."
          },
          {
            "place": "Cena ad Algeri",
            "text": "Una prima tavola algerina nel centro città, mentre si ripercorrono gli otto giorni che vi attendono."
          }
        ]
      },
      {
        "day": 2,
        "title": "Algeri culturale",
        "body": "Il museo del Bardo, la Casbah UNESCO e il Memoriale del Martire (Maqam Echahid).",
        "stops": [
          {
            "place": "Il Museo del Bardo",
            "text": "Preistoria ed etnografia in un'elegante villa moresca, dai calchi dell'arte rupestre sahariana ai gioielli d'argento e alla vita quotidiana algerina."
          },
          {
            "place": "La Casbah di Algeri",
            "text": "La cittadella ottomana patrimonio UNESCO — un ripido labirinto bianco di palazzi, moschee e case a corte che si arrampica sopra la baia."
          },
          {
            "place": "Il Memoriale dei Martiri (Maqam Echahid)",
            "text": "Tre alte foglie di palma in cemento innalzate nel 1982 sopra la città, in onore dei caduti della guerra d'indipendenza."
          }
        ]
      },
      {
        "day": 3,
        "title": "Tipaza e Cherchell",
        "body": "Il Mausoleo reale di Mauretania, il parco archeologico di Tipaza e il museo di Cherchell.",
        "stops": [
          {
            "place": "Il Mausoleo reale di Mauretania",
            "text": "Un grande tamburo di pietra su una collina sopra il mare — la tomba del I secolo a.C. del re berbero Giuba II e di Cleopatra Selene, figlia di Cleopatra d'Egitto."
          },
          {
            "place": "La Tipaza romana",
            "text": "Un porto romano patrimonio UNESCO che si allunga lungo il Mediterraneo — basiliche, terme e un teatro lambiti dalle onde."
          },
          {
            "place": "Cherchell (l'antica Cesarea)",
            "text": "L'antica capitale di Giuba II, il cui museo custodisce alcuni dei più bei mosaici e statue romane e greche dell'Algeria."
          }
        ]
      },
      {
        "day": 4,
        "title": "Costantina",
        "body": "Il ponte Sidi M'Cid, il palazzo Ahmed Bey, la moschea Emir Abdelkader e una passeggiata in città.",
        "stops": [
          {
            "place": "I ponti di Costantina",
            "text": "La «città dei ponti» che scavalca la vertiginosa gola del Rhumel, con la passerella di Sidi M'Cid sospesa in alto sopra di essa."
          },
          {
            "place": "Il palazzo di Ahmed Bey",
            "text": "Il palazzo ottomano di inizio Ottocento dell'ultimo bey, con gallerie dipinte e cortili ombreggiati."
          },
          {
            "place": "La moschea dell'Emiro Abdelkader",
            "text": "Una delle moschee più grandi d'Africa, i cui minareti gemelli sono un moderno simbolo di Costantina."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djémila",
        "body": "Il sito romano UNESCO di Djémila — il teatro, i templi e i mosaici — con un pranzo locale.",
        "stops": [
          {
            "place": "Il teatro e i templi di Djémila",
            "text": "I monumenti meglio conservati della città romana patrimonio UNESCO, con un pranzo tipico."
          },
          {
            "place": "L'Arco di Caracalla",
            "text": "L'arco trionfale del 216 d.C. ai margini del nuovo foro di Djémila — l'immagine simbolo del sito."
          },
          {
            "place": "I mosaici di Djémila",
            "text": "Mosaici in loco tra i più ricchi del mondo romano, esposti nel museo del sito."
          }
        ]
      },
      {
        "day": 6,
        "title": "Verso Bou Saada",
        "body": "La strada da Costantina a Bou Saada, sistemazione e tempo libero, poi una cena tradizionale con musica locale.",
        "stops": [
          {
            "place": "La piana dell'Hodna",
            "text": "La strada a sud-ovest di Costantina, attraverso l'alta steppa e le distese saline dello Chott El Hodna."
          },
          {
            "place": "Bou Saada",
            "text": "La «città della felicità» — un'oasi di palme ai piedi della catena degli Ouled Naïl, meta finale del tragitto."
          },
          {
            "place": "Una cena con musica dal vivo",
            "text": "Cucina tradizionale e musica sahariana dal vivo in guesthouse — la serata attorno a cui ruota l'intera giornata."
          }
        ]
      },
      {
        "day": 7,
        "title": "Bou Saada e rientro",
        "body": "La cascata di Bou Saada, il mulino Ferrero e la zawiya di El Hamel, poi il rientro verso Algeri.",
        "stops": [
          {
            "place": "La cascata di Bou Saada",
            "text": "Una cascata naturale nell'oasi — l'angolo fresco e verde della «città della felicità»."
          },
          {
            "place": "Il Mulino Ferrero",
            "text": "Un mulino storico sulle rive del fiume, punto di riferimento della vecchia Bou Saada."
          },
          {
            "place": "La zawiya di El Hamel",
            "text": "Un santuario sufi Rahmaniyya e una scuola coranica in cima a una collina sopra Bou Saada — tranquilla, austera e panoramica."
          }
        ]
      },
      {
        "day": 8,
        "title": "Partenza",
        "body": "Colazione, check-out e trasferimento all'aeroporto di Algeri.",
        "stops": [
          {
            "place": "Una mattina libera",
            "text": "Tempo per tutto ciò che la settimana non ha coperto in capitale, o per un'ultima passeggiata sul lungomare, in base al volo."
          },
          {
            "place": "Ultimi acquisti",
            "text": "Argento cabilo, pelletteria tuareg, datteri e dolci dalle botteghe artigiane del centro città."
          },
          {
            "place": "L'aeroporto Houari Boumediene",
            "text": "Check-out, trasferimento privato e assistenza al check-in."
          }
        ]
      }
    ],
    "includes": [
      "Sistemazione in hotel 4 stelle con colazione",
      "Trasporto privato",
      "Pranzo tradizionale",
      "Tutte le tasse e i costi di servizio"
    ],
    "excludes": [],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Primavera e autunno"
      },
      {
        "label": "Ritmo",
        "value": "Moderato, itinerante"
      },
      {
        "label": "Formula",
        "value": "Privato, con guida, 7 notti in hotel 4 stelle"
      },
      {
        "label": "Da portare",
        "value": "Scarpe comode, abiti coprenti per la Casbah, protezione solare"
      }
    ],
    "faqs": [
      {
        "q": "Quali siti UNESCO sono inclusi?",
        "a": "Tipaza, Djémila e la Casbah di Algeri."
      },
      {
        "q": "Quanto si viaggia?",
        "a": "È un itinerario attraverso il nord e il limite sahariano, con trasferimenti confortevoli."
      },
      {
        "q": "La sistemazione è inclusa?",
        "a": "Sì: hotel 4 stelle con colazione, trasporto privato e un pranzo tradizionale."
      },
      {
        "q": "In cosa differisce dal viaggio di 10 giorni?",
        "a": "Si concentra sul nord e su Bou Saada, senza spingersi fino al M'Zab."
      }
    ]
  },
  "algeria-beyond-expectations": {
    "title": "L'Algeria oltre le aspettative — 10 giorni",
    "duration": "10 giorni · 9 notti",
    "hook": "Dieci giorni per il paese in tutta la sua estensione, dal litorale mediterraneo alle oasi sahariane, a un ritmo che lascia il tempo di guardare.",
    "full": true,
    "seoTitle": "L'Algeria oltre le aspettative — 10 giorni",
    "seoDescription": "Gran tour privato di 10 giorni dal Mediterraneo al M'Zab: Algeri, Tipaza, Djémila e Timgad, Costantina e Ghardaïa, con quad, cammello e sandboard.",
    "overview": "Il nostro grande viaggio più avventuroso. In dieci giorni si uniscono Algeri e la Tipaza romana, le città romane di Djémila e Timgad, gli altipiani di Sétif e i ponti di Costantina, per finire nella valle del M'Zab a Ghardaïa — coronata da un'escursione sahariana con quad, cammello e sandboard. Quattro siti UNESCO e l'intero arco dal nord al deserto, con avventura e cultura in parti uguali.",
    "highlights": [
      "Algeri e le rovine romane di Tipaza",
      "Costantina, la città dei ponti",
      "Sétif, Djémila e la città romana di Timgad",
      "La cultura del deserto nella valle del M'Zab a Ghardaïa",
      "Un'escursione sahariana con quad, cammello e sandboard"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo ad Algeri",
        "body": "Accoglienza in aeroporto, sistemazione in hotel e cena di benvenuto.",
        "stops": [
          {
            "place": "L'aeroporto Houari Boumediene",
            "text": "Accolti all'arrivo e accompagnati in città — gli aspetti pratici del primo giorno già organizzati per voi."
          },
          {
            "place": "La baia di Algeri",
            "text": "Il tragitto lungo il lungomare, con la capitale bianca che si alza a gradoni sopra il porto."
          },
          {
            "place": "Una cena di benvenuto",
            "text": "Una prima tavola algerina — chorba, pesce della baia o un tagine di pollo — mentre si ripercorrono i dieci giorni che vi attendono."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tipaza e Cherchell",
        "body": "Le rovine romane e l'anfiteatro di Tipaza, il Mausoleo reale di Mauretania, il museo di Cherchell e i panorami sulla costa.",
        "stops": [
          {
            "place": "La Tipaza romana",
            "text": "Un porto romano patrimonio UNESCO che si allunga lungo il Mediterraneo — basiliche, terme e un teatro lambiti dalle onde."
          },
          {
            "place": "Il Mausoleo reale di Mauretania",
            "text": "Un grande tamburo di pietra su una collina sopra il mare — la tomba del I secolo a.C. del re berbero Giuba II e di Cleopatra Selene, figlia di Cleopatra d'Egitto."
          },
          {
            "place": "Cherchell (l'antica Cesarea)",
            "text": "L'antica capitale di Giuba II, il cui museo custodisce alcuni dei più bei mosaici e statue romane e greche dell'Algeria."
          }
        ]
      },
      {
        "day": 3,
        "title": "Algeri storica",
        "body": "La Casbah UNESCO, il Memoriale del Martire e il museo nazionale dell'Esercito.",
        "stops": [
          {
            "place": "La Casbah di Algeri",
            "text": "La cittadella ottomana patrimonio UNESCO — un ripido labirinto bianco di palazzi, moschee e case a corte che si arrampica sopra la baia."
          },
          {
            "place": "Il Memoriale dei Martiri (Maqam Echahid)",
            "text": "Tre alte foglie di palma in cemento innalzate nel 1982 sopra la città, in onore dei caduti della guerra d'indipendenza."
          },
          {
            "place": "Il Museo nazionale dell'esercito",
            "text": "La lunga storia militare dell'Algeria, dall'antichità al 1962, accanto al Memoriale dei Martiri."
          }
        ]
      },
      {
        "day": 4,
        "title": "Verso Sétif",
        "body": "Trasferimento a Sétif e visita delle rovine romane di Djémila, con i mosaici del museo di sito. Notte a Sétif.",
        "stops": [
          {
            "place": "Djémila (Cuicul)",
            "text": "Una città romana patrimonio UNESCO tra montagne verdi, splendidamente conservata — foro, templi e un teatro scosceso."
          },
          {
            "place": "I mosaici di Djémila",
            "text": "Mosaici in loco tra i più ricchi del mondo romano, esposti nel museo del sito."
          },
          {
            "place": "Sétif e la fontana Ain El Fouara",
            "text": "La città degli altipiani a 1.100 m e la sua celebre fontana di marmo del 1898, dove si trascorre la notte."
          }
        ]
      },
      {
        "day": 5,
        "title": "Costantina",
        "body": "I ponti sospesi di Costantina, la moschea Emir Abdelkader e il palazzo Ahmed Bey. Notte a Costantina.",
        "stops": [
          {
            "place": "I ponti di Costantina",
            "text": "La «città dei ponti» che scavalca la vertiginosa gola del Rhumel, con la passerella di Sidi M'Cid sospesa in alto sopra di essa."
          },
          {
            "place": "La moschea dell'Emiro Abdelkader",
            "text": "Una delle moschee più grandi d'Africa, i cui minareti gemelli sono un moderno simbolo di Costantina."
          },
          {
            "place": "Il palazzo di Ahmed Bey",
            "text": "Il palazzo ottomano di inizio Ottocento dell'ultimo bey, con gallerie dipinte e cortili ombreggiati."
          }
        ]
      },
      {
        "day": 6,
        "title": "Batna e Timgad",
        "body": "Verso Batna e la città romana UNESCO di Timgad, con il patrimonio locale. Notte a Batna.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La colonia di Traiano del 100 d.C., pianificata a scacchiera — la «Pompei dell'Aurès», distesa sulla pianura aperta."
          },
          {
            "place": "L'Arco di Traiano",
            "text": "L'arco trionfale che incornicia la via principale di Timgad — la sagoma simbolo della città."
          },
          {
            "place": "La biblioteca e il teatro di Timgad",
            "text": "Le rovine di una rara biblioteca pubblica romana e un teatro da 3.500 posti ancora in uso oggi."
          }
        ]
      },
      {
        "day": 7,
        "title": "Verso Ghardaïa",
        "body": "Lunga strada verso sud fino alla valle del M'Zab e sistemazione in una guesthouse tradizionale, con serata libera.",
        "stops": [
          {
            "place": "La strada a sud, oltre l'Atlante",
            "text": "Fuori dal Tell, attraverso l'alta steppa e giù verso il pre-Sahara — il tragitto in cui l'Algeria cambia clima."
          },
          {
            "place": "Ghardaïa",
            "text": "La città principale del M'Zab, una piramide di case patrimonio UNESCO che si arrampica fino alla moschea e al minareto sulla sommità."
          },
          {
            "place": "Una guesthouse tradizionale nel M'Zab",
            "text": "Check-in in una casa mozabita restaurata — mura spesse, un cortile interno e una terrazza sul tetto — con una serata libera."
          }
        ]
      },
      {
        "day": 8,
        "title": "Ghardaïa culturale",
        "body": "I villaggi di El Atteuf, Beni Isguen e Melika, le loro moschee e la loro architettura, i souk e un pranzo presso una famiglia locale.",
        "stops": [
          {
            "place": "El Atteuf",
            "text": "La più antica delle cinque città del M'Zab, la cui semplice moschea di Sidi Brahim colpì così tanto Le Corbusier da influenzare l'architettura moderna."
          },
          {
            "place": "Beni Isguen",
            "text": "La città sacra murata del M'Zab, cui si accede dall'antica porta, dove abbigliamento e fotografie seguono le usanze locali."
          },
          {
            "place": "Melika",
            "text": "Una città del M'Zab in cima a una collina, con tombe di marabutti e ampie viste sulla valle."
          }
        ]
      },
      {
        "day": 9,
        "title": "Rientro ad Algeri",
        "body": "Ritorno verso Algeri, con il Giardino di prova di Hamma, il museo del Bardo e Notre-Dame d'Afrique.",
        "stops": [
          {
            "place": "Il Giardino botanico di Hamma",
            "text": "Il grande Jardin d'Essai ottocentesco, uno dei più bei giardini botanici d'Africa."
          },
          {
            "place": "Il Museo del Bardo",
            "text": "Preistoria ed etnografia in un'elegante villa moresca, dai calchi dell'arte rupestre sahariana ai gioielli d'argento e alla vita quotidiana algerina."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "Una basilica ottocentesca — «Nostra Signora d'Africa» — sulle scogliere sopra la baia, dedicata tanto ai musulmani quanto ai cristiani."
          }
        ]
      },
      {
        "day": 10,
        "title": "Partenza",
        "body": "Colazione e trasferimento in aeroporto.",
        "stops": [
          {
            "place": "Una mattina libera ad Algeri",
            "text": "Tutto ciò che i dieci giorni non hanno coperto — il Jardin d'Essai, la moschea Ketchaoua o semplicemente il lungomare — in base all'orario del volo."
          },
          {
            "place": "Ultimi acquisti",
            "text": "Argento cabilo, pelletteria tuareg, datteri Deglet Nour e dolci, lungo Rue Didouche Mourad o nelle botteghe della Casbah."
          },
          {
            "place": "L'aeroporto Houari Boumediene",
            "text": "Il trasferimento privato in partenza e l'assistenza al check-in."
          }
        ]
      }
    ],
    "includes": [
      "Sistemazione in hotel 4 stelle con colazione",
      "Trasporto turistico climatizzato",
      "Guida accompagnatrice",
      "Guida locale privata nei siti principali",
      "Tutti i pasti durante l'escursione nel deserto",
      "Attività nel deserto: quad, cammello e sandboard"
    ],
    "excludes": [
      "Programmi e attività supplementari",
      "Mance",
      "Pranzi e cene negli altri giorni"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Ottobre–aprile (ideale per il Sahara)"
      },
      {
        "label": "Ritmo",
        "value": "Attivo — itinerante, con attività nel deserto"
      },
      {
        "label": "Formula",
        "value": "Privato, con guida, 9 notti in hotel 4 stelle"
      },
      {
        "label": "Da portare",
        "value": "Strati, scarpe chiuse per il deserto, protezione solare, abiti coprenti"
      }
    ],
    "faqs": [
      {
        "q": "Quali attività nel deserto sono incluse?",
        "a": "Quad, cammello e sandboard durante l'escursione sahariana, con tutti i pasti compresi."
      },
      {
        "q": "Quali siti UNESCO si toccano?",
        "a": "Tipaza, Djémila, Timgad e la valle del M'Zab, oltre alla Casbah di Algeri."
      },
      {
        "q": "È adatto ai viaggiatori attivi?",
        "a": "Sì: unisce il circuito culturale a un finale sahariano molto concreto."
      },
      {
        "q": "In cosa differisce dal gran tour di 10 giorni?",
        "a": "Stesso arco complessivo, ma con un'escursione sahariana orientata alle attività a Ghardaïa."
      }
    ]
  },
  "bousaada-desert-tour": {
    "title": "Bou Saada — 2 giorni nell'oasi",
    "duration": "2 giorni · 1 notte",
    "hook": "Due giorni a Bou Saada, la città della felicità — la cascata e il mulino Ferrero, i mercati artigianali, una cena beduina e la zawiya di El Hamel.",
    "full": true,
    "seoTitle": "Bou Saada — 2 giorni nell'oasi della felicità",
    "seoDescription": "Viaggio privato di 2 giorni a Bou Saada: la cascata e il mulino Ferrero, i mercati artigianali, una cena beduina con musica e la zawiya di El Hamel.",
    "overview": "Bou Saada, da sempre chiamata la città della felicità, è la porta classica tra gli Altipiani e il Sahara. In due giorni si visitano la cascata naturale e lo storico mulino Ferrero, si passeggia tra vivaci mercati artigianali, si condivide una cena in stile beduino con musica dal vivo e si sale alla zawiya sufi di El Hamel. Un assaggio facile e pieno di atmosfera dell'Algeria del sud, a poche ore da Algeri.",
    "highlights": [
      "Bou Saada, la città della felicità",
      "La cascata naturale e lo storico mulino Ferrero",
      "I mercati artigianali tradizionali",
      "Una cena in stile beduino con musica dal vivo",
      "La zawiya sufi di El Hamel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Da Algeri a Bou Saada",
        "body": "Partenza al mattino da Algeri in veicolo turistico e sistemazione in hotel, poi pomeriggio tra la cascata naturale, il mulino Ferrero e i mercati tradizionali; la sera, cena in stile beduino con musica locale.",
        "stops": [
          {
            "place": "La cascata di Bou Saada",
            "text": "Una cascata naturale nell'oasi — l'angolo fresco e verde della «città della felicità»."
          },
          {
            "place": "Il Mulino Ferrero",
            "text": "Un mulino storico sulle rive del fiume, punto di riferimento della vecchia Bou Saada."
          },
          {
            "place": "I mercati tradizionali",
            "text": "Souk di gioielli d'argento, lana e datteri, con una cena beduina e musica in serata."
          }
        ]
      },
      {
        "day": 2,
        "title": "La zawiya di El Hamel e rientro",
        "body": "Dopo colazione, visita del santuario sufi di El Hamel in montagna, con tempo per le foto e il paesaggio, pranzo locale a Bou Saada e rientro pomeridiano verso Algeri.",
        "stops": [
          {
            "place": "I contrafforti degli Ouled Naïl",
            "text": "Il tragitto verso El Hamel tra colline ocra spoglie — il paesaggio che ha reso Bou Saada una città di pittori."
          },
          {
            "place": "La zawiya di El Hamel",
            "text": "Un santuario sufi Rahmaniyya e una scuola coranica in cima a una collina sopra Bou Saada — tranquilla, austera e panoramica."
          },
          {
            "place": "Pranzo a Bou Saada",
            "text": "Una tavola tipica di ritorno nell'oasi prima della strada verso nord — cous cous o un tagine all'ombra delle palme."
          }
        ]
      }
    ],
    "includes": [
      "Sistemazione all'hotel Kerdada o simile",
      "Visita della cascata naturale",
      "Visita guidata del mulino Ferrero",
      "I mercati tradizionali",
      "Cena in stile beduino con musica",
      "Visita della zawiya di El Hamel",
      "Pranzo del secondo giorno",
      "Trasporto andata e ritorno da Algeri",
      "Guida multilingue"
    ],
    "excludes": [
      "Spese personali",
      "Assicurazione di viaggio",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Ottobre–aprile"
      },
      {
        "label": "Ritmo",
        "value": "Facile"
      },
      {
        "label": "Formula",
        "value": "Privato, con guida, 1 notte con hotel e pasti indicati"
      },
      {
        "label": "Da portare",
        "value": "Abiti coprenti, protezione solare, scarpe comode"
      }
    ],
    "faqs": [
      {
        "q": "Quanto dista Bou Saada da Algeri?",
        "a": "Qualche ora di strada; il trasporto andata e ritorno è incluso."
      },
      {
        "q": "La sistemazione è inclusa?",
        "a": "Sì: una notte all'hotel Kerdada o simile, con il pranzo del secondo giorno."
      },
      {
        "q": "Che cos'è El Hamel?",
        "a": "Una storica zawiya sufi — santuario e scuola religiosa — vicino a Bou Saada."
      },
      {
        "q": "È un buon assaggio di deserto?",
        "a": "Sì: è la fuga verso sud più semplice dalla capitale."
      }
    ]
  },
  "tour-bejaia-historic": {
    "title": "Béjaïa — la città storica sul mare (giornata)",
    "duration": "1 giorno",
    "hook": "Una giornata sulla costa a Béjaïa — la fortezza e il museo, la corniche di Cap Carbon e la sabbia di Les Aiguades, pranzo davanti al Mediterraneo.",
    "full": true,
    "seoTitle": "Béjaïa in un giorno — fortezza, Cap Carbon e mare",
    "seoDescription": "Escursione privata di un giorno da Algeri a Béjaïa: la fortezza storica e il museo, la corniche di Cap Carbon e la spiaggia di Les Aiguades, con pranzo.",
    "overview": "Béjaïa è il punto in cui le verdi montagne del Djurdjura precipitano in un Mediterraneo blu profondo. In una giornata da Algeri si visitano la fortezza storica e il suo museo, si percorre la spettacolare corniche di Cap Carbon sopra le falesie e ci si rilassa sulla sabbia di Les Aiguades, con un pranzo tradizionale in riva all'acqua. È il modo più semplice per assaggiare la costa cabila: storia, paesaggio e mare in un solo anello.",
    "highlights": [
      "La fortezza storica di Béjaïa e le sue viste sul mare",
      "Il museo e la storia della regione",
      "La spettacolare costa di Cap Carbon",
      "Tempo in spiaggia a Les Aiguades",
      "La vera cucina algerina locale"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Fortezza di Béjaïa, Cap Carbon e la costa",
        "body": "Partenza da Algeri, visita guidata della fortezza storica e del suo museo, passeggiata lungo la corniche di Cap Carbon, tempo in spiaggia a Les Aiguades e pranzo tradizionale prima del rientro.",
        "stops": [
          {
            "place": "Il Forte Gouraya e il suo museo",
            "text": "La fortezza in alto sopra Béjaïa, con la baia, il porto e le montagne cabile distese in basso."
          },
          {
            "place": "Cap Carbon",
            "text": "Il promontorio e il suo faro, poggiato su un arco di roccia naturale — tra i fari marittimi più alti del mondo."
          },
          {
            "place": "Les Aiguades",
            "text": "Una cala dalle acque limpide sotto la corniche, con tempo libero in spiaggia prima di un pranzo tradizionale."
          }
        ]
      }
    ],
    "includes": [
      "Trasporto in veicolo climatizzato",
      "Guida turistica multilingue",
      "Ingressi alla fortezza e al museo",
      "Pranzo tradizionale algerino",
      "Soste lungo il percorso"
    ],
    "excludes": [
      "Bevande fuori dal pasto incluso",
      "Attività balneari facoltative",
      "Assicurazione di viaggio",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Maggio–ottobre per la spiaggia; primavera e autunno per camminare"
      },
      {
        "label": "Ritmo",
        "value": "Facile, con molta strada tra andata e ritorno"
      },
      {
        "label": "Formula",
        "value": "Escursione privata in giornata da Algeri"
      },
      {
        "label": "Da portare",
        "value": "Costume in estate, protezione solare, scarpe comode"
      }
    ],
    "faqs": [
      {
        "q": "Da dove parte il tour?",
        "a": "Con il ritiro ad Algeri; la strada per Béjaïa attraversa le montagne della Cabilia."
      },
      {
        "q": "Il pranzo è incluso?",
        "a": "Sì: un pranzo tradizionale algerino sulla costa."
      },
      {
        "q": "Si può nuotare a Les Aiguades?",
        "a": "Nei mesi caldi sì — portate il costume; nei mesi freschi resta una sosta panoramica."
      },
      {
        "q": "È una giornata lunga?",
        "a": "Sì: una giornata piena di costa con strada in entrambe le direzioni; vale la pena partire presto."
      }
    ]
  },
  "private-guided-tour": {
    "title": "Tipaza e Cherchell — giornata romana privata",
    "duration": "1 giorno",
    "hook": "Una giornata privata sulla costa romana a ovest di Algeri — le rovine di Tipaza sul mare e il museo dell'antica Cesarea a Cherchell.",
    "full": true,
    "seoTitle": "Tipaza e Cherchell — giornata romana privata",
    "seoDescription": "Giornata privata sulla costa romana a ovest di Algeri: le rovine UNESCO di Tipaza sul mare e il museo dell'antica Cesarea a Cherchell, al vostro ritmo.",
    "overview": "Tipaza è uno dei siti antichi più belli del Mediterraneo: foro, terme e case romane distesi lungo il mare, a circa 70 km a ovest di Algeri. In questa giornata privata esplorate le rovine UNESCO al vostro ritmo, poi visitate il museo archeologico di Cherchell — la Cesarea romana — ricco di statue e mosaici. Con guida personale e ritiro in hotel, è il modo più rilassato di vedere la costa romana.",
    "highlights": [
      "Le rovine romane di Tipaza sul mare (UNESCO)",
      "Foro, terme e quartieri residenziali",
      "Il museo archeologico di Cherchell",
      "Un ritmo privato e personalizzato",
      "Una passeggiata nel vecchio porto di Cherchell"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Le rovine di Tipaza e il museo di Cherchell",
        "body": "Ritiro in hotel e strada privata verso Tipaza per la visita guidata di foro, terme e quartieri antichi, poi Cherchell — l'antica Cesarea — per il suo museo di statue e mosaici romani e una breve passeggiata nella città vecchia, prima del rientro.",
        "stops": [
          {
            "place": "La Tipaza romana",
            "text": "Una città portuale patrimonio UNESCO che si allunga lungo il Mediterraneo — foro, terme, basiliche e quartieri antichi lambiti dalle onde."
          },
          {
            "place": "Il Museo archeologico di Cherchell",
            "text": "Il museo dell'antica Cesarea, che custodisce alcuni dei più bei mosaici e statue romane e greche dell'Algeria."
          },
          {
            "place": "La città vecchia di Cherchell",
            "text": "Una breve passeggiata intorno al vecchio porto e alla pianta stradale romana ancora leggibile sotto la città moderna."
          }
        ]
      }
    ],
    "includes": [
      "Guida locale professionale (arabo/inglese/francese/spagnolo)",
      "Ingressi a Tipaza e Cherchell",
      "Visita guidata privata",
      "Ritiro e rientro in hotel",
      "Conferma immediata"
    ],
    "excludes": [
      "Pranzo (facoltativo)",
      "Cibo e bevande",
      "Spese personali",
      "Mance"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Primavera e autunno"
      },
      {
        "label": "Ritmo",
        "value": "Facile, con camminate su terreno irregolare"
      },
      {
        "label": "Formula",
        "value": "Giornata privata (arabo / inglese / francese / spagnolo)"
      },
      {
        "label": "Da portare",
        "value": "Protezione solare, acqua, scarpe comode"
      }
    ],
    "faqs": [
      {
        "q": "Tipaza è patrimonio UNESCO?",
        "a": "Sì, iscritta nel 1982."
      },
      {
        "q": "Quanto dista da Algeri?",
        "a": "Circa 70 km a ovest, all'incirca un'ora e mezza di strada."
      },
      {
        "q": "In quali lingue lavora la guida?",
        "a": "In arabo, inglese, francese o spagnolo."
      },
      {
        "q": "Gli ingressi sono inclusi?",
        "a": "Sì, sia a Tipaza sia al museo di Cherchell."
      }
    ]
  },
  "algiers-city-tour-casbah-bardo-martyrsmemorial": {
    "title": "Algeri in un giorno — Casbah, Bardo e Memoriale del Martire",
    "duration": "1 giorno",
    "hook": "Una giornata intera nella capitale — la Casbah UNESCO, il museo del Bardo e il Memoriale del Martire sopra la baia.",
    "full": true,
    "seoTitle": "Algeri in un giorno — Casbah, Bardo e Memoriale",
    "seoDescription": "Giornata intera privata ad Algeri: la Casbah UNESCO, il museo nazionale del Bardo e il Memoriale del Martire sopra la baia, con pranzo tradizionale.",
    "overview": "Algeri porta la sua storia sulla collina. In una sola giornata si sale attraverso la Casbah UNESCO — la fitta medina ottomana di vicoli a gradini, case a corte e antiche moschee sopra la baia — si visitano l'archeologia e l'arte del museo nazionale del Bardo e ci si ferma sotto lo slancio del Memoriale del Martire per la più bella vista sulla città bianca e sul Mediterraneo. Un pranzo tradizionale spezza la giornata. È il primo giorno ideale in Algeria: gli strati della capitale letti da cima a fondo con una guida locale.",
    "highlights": [
      "La Casbah UNESCO, i suoi vicoli e le antiche moschee",
      "Archeologia e storia al museo del Bardo",
      "Il Memoriale del Martire e il suo panorama",
      "Un pranzo tradizionale algerino",
      "Viste su Algeri e sul Mediterraneo"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casbah, museo del Bardo e Memoriale del Martire",
        "body": "Un anello guidato di una giornata attraverso il vecchio quartiere della Casbah, le collezioni del museo nazionale del Bardo e il Memoriale del Martire, con un pranzo tradizionale in un ristorante locale tra le visite.",
        "stops": [
          {
            "place": "La Casbah di Algeri",
            "text": "La cittadella ottomana patrimonio UNESCO — un ripido labirinto bianco di palazzi, moschee e case a corte che si arrampica sopra la baia."
          },
          {
            "place": "Il Museo nazionale del Bardo",
            "text": "Preistoria ed etnografia in un'elegante villa moresca, dai calchi dell'arte rupestre sahariana ai gioielli d'argento e alla vita quotidiana algerina."
          },
          {
            "place": "Il Memoriale dei Martiri (Maqam Echahid)",
            "text": "Tre alte foglie di palma in cemento innalzate nel 1982 sopra la città, in onore dei caduti della guerra d'indipendenza."
          }
        ]
      }
    ],
    "includes": [
      "Ritiro e rientro in hotel o aeroporto",
      "Veicolo climatizzato",
      "Guida locale professionale",
      "Ingressi",
      "Pranzo tradizionale algerino",
      "Acqua e snack"
    ],
    "excludes": [
      "Mance",
      "Spese personali"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Primavera e autunno; gradevole quasi tutto l'anno"
      },
      {
        "label": "Ritmo",
        "value": "Facile, con camminate e scale nella Casbah"
      },
      {
        "label": "Formula",
        "value": "Giornata intera privata con guida"
      },
      {
        "label": "Da portare",
        "value": "Scarpe comode, protezione solare, abiti coprenti per le moschee"
      }
    ],
    "faqs": [
      {
        "q": "La Casbah è sicura da visitare?",
        "a": "Sì: con una guida locale è una passeggiata accogliente e ricca; i vicoli sono ripidi, servono buone scarpe."
      },
      {
        "q": "Il pranzo è incluso?",
        "a": "Sì: un pranzo tradizionale algerino in un ristorante locale fa parte della giornata."
      },
      {
        "q": "Potete venirmi a prendere in aeroporto?",
        "a": "Sì: il ritiro e il rientro in hotel ad Algeri o in aeroporto sono inclusi."
      },
      {
        "q": "Quanto si cammina?",
        "a": "Parecchio, in gran parte sulle scale e sulle pendenze della Casbah, a ritmo tranquillo e con soste."
      }
    ]
  },
  "algierstour-hammagarden-notredame-dafrique": {
    "title": "Algeri — Giardino di Hamma e Notre-Dame d'Afrique",
    "duration": "1 giorno",
    "hook": "Una giornata ad Algeri tra il Giardino di prova di Hamma e la basilica di Notre-Dame d'Afrique, con le più belle viste sulla baia.",
    "full": true,
    "seoTitle": "Algeri — Giardino di Hamma e Notre-Dame d'Afrique",
    "seoDescription": "Giornata privata ad Algeri: il Giardino di prova di Hamma, la basilica di Notre-Dame d'Afrique sopra la baia e il museo dell'Esercito, con pranzo.",
    "overview": "Un'alternativa distesa alla giornata della Casbah: questo tour privato unisce tre luoghi simbolo di Algeri a un ritmo facile. Il lussureggiante Giardino di prova di Hamma, uno dei grandi giardini botanici del Mediterraneo; la basilica di Notre-Dame d'Afrique sulla sua altura, con la vista che abbraccia la baia; e il racconto della storia algerina al museo dell'Esercito. Un pranzo tradizionale completa la giornata, con ritiro in hotel incluso.",
    "highlights": [
      "Lo storico giardino botanico di Hamma",
      "Le viste sul mare da Notre-Dame d'Afrique",
      "La storia militare dell'Algeria al museo dell'Esercito",
      "Un pranzo tradizionale algerino",
      "Guida privata con ritiro in hotel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Giardino di Hamma, Notre-Dame d'Afrique e museo dell'Esercito",
        "body": "Ritiro in hotel o in aeroporto, poi una giornata guidata tra tre luoghi: il giardino botanico di Hamma, la basilica di Notre-Dame d'Afrique sulla collina sopra il Mediterraneo e il museo dell'Esercito, con un pranzo tradizionale lungo il percorso prima del rientro.",
        "stops": [
          {
            "place": "Il Giardino botanico di El Hamma",
            "text": "Dieci ettari disegnati nel 1832 ai piedi del Memoriale dei Martiri — un giardino formale francese, un parco paesaggistico all'inglese, viali di palme e un boschetto di bambù."
          },
          {
            "place": "Notre-Dame d'Afrique",
            "text": "La basilica ottocentesca sulla scogliera sopra Bab El Oued, famosa per l'iscrizione dell'abside che invoca Nostra Signora d'Africa «per noi e per i musulmani»."
          },
          {
            "place": "Il Museo centrale dell'esercito",
            "text": "La collezione militare nazionale accanto al Maqam Echahid, che ripercorre le campagne dell'Emiro Abdelkader fino alla guerra d'indipendenza."
          }
        ]
      }
    ],
    "includes": [
      "Ritiro e rientro in hotel o aeroporto",
      "Veicolo climatizzato",
      "Guida locale professionale",
      "Ingressi ai siti",
      "Pranzo tradizionale algerino",
      "Acqua in bottiglia e snack"
    ],
    "excludes": [
      "Mance",
      "Spese personali"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Tutto l'anno; primavera e autunno i più miti"
      },
      {
        "label": "Ritmo",
        "value": "Facile, con poche camminate"
      },
      {
        "label": "Formula",
        "value": "Giornata privata con guida e ritiro in hotel"
      },
      {
        "label": "Da portare",
        "value": "Scarpe comode, abiti coprenti per la basilica, macchina fotografica"
      }
    ],
    "faqs": [
      {
        "q": "È più facile del tour della Casbah?",
        "a": "Sì: una giornata più dolce tra giardini e punti panoramici, con meno salite."
      },
      {
        "q": "Il pranzo è incluso?",
        "a": "Sì, un pranzo tradizionale algerino."
      },
      {
        "q": "Gli ingressi sono coperti?",
        "a": "Sì: l'ingresso ai tre siti è incluso."
      },
      {
        "q": "Si può combinare con la giornata della Casbah?",
        "a": "Sì: molti visitatori abbinano le due giornate; chiedeteci di organizzarle."
      }
    ]
  },
  "day-tour-algeria-culture": {
    "title": "Algeri — passeggiata culturale nella Casbah",
    "duration": "1 giorno",
    "hook": "Una giornata a piedi nella Casbah di Algeri, tra vicoli, palazzi ottomani e terrazze, con una guida che ci è cresciuta.",
    "full": true,
    "seoTitle": "Casbah di Algeri — passeggiata culturale guidata",
    "seoDescription": "Passeggiata guidata nella Casbah UNESCO di Algeri: piazza dei Martiri, il palazzo di Mustafa Pascià, la cittadella e il palazzo dei Rais sul mare.",
    "overview": "La Casbah di Algeri è uno dei grandi quartieri storici del Mediterraneo, e questa passeggiata la legge dal basso verso l'alto. Dal lungomare e dalla piazza dei Martiri si sale per vicoli stretti fino al palazzo di Mustafa Pascià, alla cittadella ottomana e alla casa di Ali La Pointe — luogo chiave della guerra d'indipendenza — prima di ridiscendere al palazzo dei Rais (Bastion 23) in riva al mare. Un'introduzione compatta e piena di atmosfera alla vecchia Algeri.",
    "highlights": [
      "I vicoli stretti e le antiche moschee della Casbah",
      "Il palazzo di Mustafa Pascià e l'architettura ottomana",
      "Le terrazze panoramiche sulla baia",
      "La cittadella della Casbah e la casa di Ali La Pointe",
      "Il palazzo dei Rais (Bastion 23) in riva al mare"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Passeggiata guidata nella Casbah",
        "body": "Incontro con la guida in riva al mare ai piedi della Casbah, poi la salita per la piazza dei Martiri e la sua moschea storica, il palazzo di Mustafa Pascià, una terrazza panoramica, la cittadella e la casa di Ali La Pointe, figura dell'indipendenza, per finire al palazzo dei Rais sul mare.",
        "stops": [
          {
            "place": "Place des Martyrs e la moschea Ketchaoua",
            "text": "La piazza ai piedi della Casbah e la sua moschea ottomana del XVII secolo, riaperta dopo un decennio di restauro."
          },
          {
            "place": "Il Palazzo di Mustafa Pasha e la cittadella",
            "text": "Il palazzo settecentesco del dey con le sue maioliche dipinte, e la cittadella in cima alla Casbah dove nel 1830 il colpo di ventaglio scatenò l'invasione francese."
          },
          {
            "place": "La casa di Ali La Pointe e il Palazzo dei Rais",
            "text": "Il rifugio bombardato conservato nel cuore della Casbah, e i palazzi ottomani sul mare del Bastione 23 dove si conclude la passeggiata."
          }
        ]
      }
    ],
    "includes": [
      "Guida professionale (inglese, francese o arabo)",
      "Ingressi ai monumenti inclusi",
      "Trasporto durante il tour",
      "Passeggiata guidata nella Casbah"
    ],
    "excludes": [
      "Pasti e bevande",
      "Ritiro in hotel (se non concordato)",
      "Attività facoltative e spese personali"
    ],
    "goodToKnow": [
      {
        "label": "Stagione",
        "value": "Primavera e autunno"
      },
      {
        "label": "Ritmo",
        "value": "Moderato — scale e pendenze ripide"
      },
      {
        "label": "Formula",
        "value": "Passeggiata guidata (inglese / francese / arabo)"
      },
      {
        "label": "Da portare",
        "value": "Scarpe comode, acqua, abiti coprenti"
      }
    ],
    "faqs": [
      {
        "q": "La Casbah è sicura con una guida?",
        "a": "Sì: è una passeggiata accogliente e ricca; servono buone scarpe per le scale."
      },
      {
        "q": "Quanto dura la passeggiata?",
        "a": "Una camminata guidata attraverso il quartiere, quasi tutta in salita, a ritmo tranquillo e con soste."
      },
      {
        "q": "Gli ingressi sono inclusi?",
        "a": "Sì, ai monumenti previsti dal percorso."
      },
      {
        "q": "Chi era Ali La Pointe?",
        "a": "Una figura della guerra d'indipendenza algerina; la sua casa nella Casbah fa parte del percorso."
      }
    ]
  },
  "tadrart-rouge-7-days": {
    "title": "Tadrart Rouge — 7 Giorni nel Sahara Rosso",
    "duration": "7 giorni · 6 notti",
    "hook": "La Tadrart Rouge è il Sahara che si immagina prima di averlo visto: sabbia color rosa che si appoggia alla roccia nera, archi grandi come cattedrali e un cielo senza nulla a fermarne la vista.",
    "full": true,
    "seoTitle": "Tour Tadrart Rouge 7 giorni — Sahara da Djanet",
    "seoDescription": "Spedizione privata di 7 giorni nella Tadrart Rouge da Djanet: dune rosa, archi di arenaria, arte rupestre e bivacco nel deserto con guide tuareg.",
    "overview": "Questo è il circuito classico di Djanet, percorso al ritmo che il paesaggio merita. Sette giorni, sei conclusi in un bivacco che aiuterete a montare, attraversando la Tadrart Rouge da Tigharghart alle grandi dune di Tin Merzouga e ritorno tra gli archi naturali di Ajelati. Guida e autisti sono tuareg di Djanet; il cuoco viaggia con voi; e l'intero tratto meridionale — il volo da Algeri, i trasferimenti in aeroporto, i permessi del parco — è organizzato prima del vostro arrivo. Quello che portate è una sacca da viaggio e la voglia di dormire sulla sabbia.",
    "highlights": [
      "Sei notti di bivacco selvaggio sotto il cielo sahariano",
      "Le dune rosa e il grande erg di Tin Merzouga",
      "Le gole di El Berdj e le loro incisioni rupestri",
      "Gli archi naturali monumentali di Ajelati",
      "Tin Abadène — giraffe ed elefanti preistorici",
      "La «Mucca che piange» di Tigharghart e la Roccia dell'Elefante",
      "Tamezguida, la «cattedrale» di arenaria",
      "Guide, autisti e cuoco di campo tuareg per tutto il viaggio"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Djanet → Tigharghart",
        "body": "Atterraggio a Djanet dopo il volo da Algeri e incontro con la squadra che vi accompagnerà per tutta la settimana. Si parte subito in 4×4 verso Tigharghart, dove si allestisce il primo bivacco e la cena si cuoce sul fuoco. Prima notte in tenda o, se preferite, semplicemente sotto le stelle.",
        "stops": [
          {
            "place": "Djanet",
            "text": "La capitale oasi tuareg del sud-est, porta d'accesso al Tassili n'Ajjer."
          },
          {
            "place": "Tigharghart",
            "text": "Il primo campo, ai margini della regione dell'arte rupestre a cui farete ritorno l'ultima mattina."
          },
          {
            "place": "Il primo bivacco",
            "text": "Il campo si allestisce a Tigharghart — stuoie, un fuoco, la cena cucinata sopra, e la scelta tra una tenda e il cielo aperto."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tigharghart → El Berdj",
        "body": "Colazione al campo, poi un attraversamento verso le gole di El Berdj — pareti di arenaria scavate in profondità, incise e dipinte lungo tutto il percorso. Pranzo al sacco all'ombra, campo allestito a El Berdj e tramonto dalle dune che lo sovrastano.",
        "stops": [
          {
            "place": "L'attraversamento verso El Berdj",
            "text": "Una mattinata in 4×4 tra i due campi, alternando sabbia morbida e roccia nera."
          },
          {
            "place": "El Berdj",
            "text": "Gole imponenti le cui pareti portano sia incisioni sia pannelli dipinti."
          },
          {
            "place": "Le dune sopra El Berdj",
            "text": "La salita per il tramonto sul sistema di gole, con il campo allestito ai loro piedi."
          }
        ]
      },
      {
        "day": 3,
        "title": "El Berdj → Moul Naga",
        "body": "Una giornata di paesaggi alternati tra sabbia e roccia, con soste in diversi siti di arte rupestre di rilievo lungo il percorso. Pranzo al sacco, poi proseguimento verso Moul Naga, dove il campo si allestisce tra dune maestose e si cena sotto le stelle.",
        "stops": [
          {
            "place": "Terra di sabbia e roccia",
            "text": "Una giornata che alterna campi di dune e massicci di arenaria — la combinazione che dà carattere alla Tadrart."
          },
          {
            "place": "Soste di arte rupestre lungo il percorso",
            "text": "Diversi pannelli incisi e dipinti visitati lungo il tragitto: bovini, cacciatori e la fauna selvatica di un Sahara che aveva fiumi."
          },
          {
            "place": "Moul Naga",
            "text": "Un bivacco allestito nel cuore delle dune."
          }
        ]
      },
      {
        "day": 4,
        "title": "Moul Naga → Erg Tin Merzouga",
        "body": "Cammino tra le dune color rosa e i paesaggi simbolo della Tadrart Rouge, poi arrivo all'Erg Tin Merzouga — il grande mare di sabbia. Salita sulle dune alte per un tramonto che è il motivo per cui molti vengono fin qui, e campo ai loro piedi.",
        "stops": [
          {
            "place": "Una mattinata tra le dune rosa",
            "text": "A piedi tra la sabbia rosa e la roccia scolpita dal vento che danno il nome alla Tadrart Rouge."
          },
          {
            "place": "Erg Tin Merzouga",
            "text": "Il grande campo dunale della Tadrart, e il suo tramonto più celebre."
          },
          {
            "place": "La duna alta al tramonto",
            "text": "La salita per cui molti arrivano fin qui — l'intero erg che si tinge di rosso, poi di viola, visto dall'alto."
          }
        ]
      },
      {
        "day": 5,
        "title": "Tin Merzouga → Tissetka → Ouanahar",
        "body": "Discesa verso l'Oued In Djaren e proseguimento verso Tin Abadène, le cui incisioni raffigurano giraffe ed elefanti — animali di un Sahara che era verde. Pranzo al sacco, poi la pista verso Ouanahar e il campo della sera.",
        "stops": [
          {
            "place": "Oued In Djaren",
            "text": "Una valle secca che si insinua tra pareti di arenaria, e la via di uscita dall'erg."
          },
          {
            "place": "Tin Abadène",
            "text": "Giraffe ed elefanti incisi, risalenti all'epoca in cui questo deserto aveva fiumi."
          },
          {
            "place": "Ouanahar",
            "text": "Il campo della notte, più in profondità nella Tadrart."
          }
        ]
      },
      {
        "day": 6,
        "title": "Ouanahar → Ajelati → Oued In Djaren",
        "body": "Una mattinata tra archi naturali monumentali, poi la «cattedrale» di Tamezguida — una formazione di arenaria che ne merita il nome. Una camminata nell'Oued In Djaren, pranzo al sacco, e campo ad Ajelati per il tramonto sulle dune nere.",
        "stops": [
          {
            "place": "Gli archi naturali",
            "text": "Una mattinata tra gli archi monumentali scolpiti dal vento della Tadrart — le formazioni più fotografate del parco."
          },
          {
            "place": "Tamezguida",
            "text": "La «cattedrale» di arenaria della Tadrart."
          },
          {
            "place": "Ajelati",
            "text": "Dune nere, e l'ultima notte nel deserto."
          }
        ]
      },
      {
        "day": 7,
        "title": "Ajelati → Tigharghart → Djanet → rientro",
        "body": "Ritorno a Tigharghart per le due incisioni che tutti vengono a vedere: la «Mucca che piange» e la Roccia dell'Elefante. Rientro a Djanet, poi il trasferimento in aeroporto per il volo verso nord.",
        "stops": [
          {
            "place": "Tigharghart — la «Mucca che piange»",
            "text": "L'incisione più fotografata del Sahara, un bovino in lacrime scolpito su una bassa parete rocciosa migliaia di anni fa."
          },
          {
            "place": "La Roccia dell'Elefante",
            "text": "La seconda incisione celebre di Tigharghart, a pochi minuti a piedi dalla prima."
          },
          {
            "place": "Djanet e l'aeroporto di Tiska",
            "text": "Ritorno all'oasi per rinfrescarsi e un ultimo pasto prima del trasferimento per il volo verso nord."
          }
        ]
      }
    ],
    "includes": [
      "Volo interno andata e ritorno Algeri ⇄ Djanet (Air Algérie, diretto)",
      "Tutti i trasferimenti aeroportuali — Algeri e Djanet",
      "Veicoli 4×4 e autisti esperti del deserto per tutto il viaggio",
      "Guida tuareg autorizzata di Djanet",
      "Pensione completa — colazione, pranzo e cena ogni giorno",
      "Attrezzatura da campo: tende, materassini e coperte",
      "Permessi e pratiche per il Parco Nazionale del Tassili n'Ajjer",
      "Acqua in bottiglia per tutto il viaggio",
      "Documentazione di supporto per il visto inclusa nella prenotazione"
    ],
    "excludes": [
      "Voli internazionali da e per Algeri",
      "Costo del visto algerino",
      "Assicurazione di viaggio e medica (obbligatoria)",
      "Bevande diverse dall'acqua; spese personali",
      "Mance per guida, autisti e squadra di campo",
      "Permessi per fotocamera o drone, dove applicabili"
    ],
    "goodToKnow": [
      {
        "label": "Stagione migliore",
        "value": "Da ottobre ad aprile (il grande sud non si percorre in estate)"
      },
      {
        "label": "Ritmo",
        "value": "Confortevole — spostamenti in 4×4, brevi camminate a ogni sito"
      },
      {
        "label": "Notti",
        "value": "Bivacco selvaggio — tende, materassini e coperte forniti"
      },
      {
        "label": "Gruppo",
        "value": "Piccolo gruppo o partenza privata"
      },
      {
        "label": "Le notti sono fredde",
        "value": "Portate strati veri e caldi — in inverno le notti nel deserto si avvicinano allo zero"
      },
      {
        "label": "Rete telefonica",
        "value": "Assente non appena si lascia Djanet — ed è proprio questo il punto"
      }
    ],
    "faqs": [
      {
        "q": "Il volo interno è davvero incluso?",
        "a": "Sì. Il prezzo comprende il volo Air Algérie andata e ritorno tra Algeri e Djanet, diretto, oltre a tutti i trasferimenti aeroportuali alle due estremità. Il volo internazionale fino ad Algeri lo organizzate voi; da lì in poi ci occupiamo di tutto noi."
      },
      {
        "q": "Quanto è impegnativo dal punto di vista fisico?",
        "a": "Moderato. Ci si sposta in 4×4 e le camminate sono brevi — un'ora qui, una salita su una duna là. La vera richiesta è la tolleranza per il campeggio: sei notti su un materassino in tenda, lavarsi con quello che si porta con sé, e nessuna rete."
      },
      {
        "q": "Quando è possibile questo viaggio?",
        "a": "Da ottobre ad aprile. Il grande sud non si percorre in estate, e il periodo classico va da novembre a febbraio, quando le giornate sono calde e limpide. In quella stagione le notti si avvicinano allo zero, quindi servono strati veri e caldi."
      },
      {
        "q": "Serve un visto?",
        "a": "Sì, ed è proprio su questo itinerario che si applica l'ingresso dal sud — un programma sahariano organizzato in arrivo da Djanet, aperto a viaggiatori di qualsiasi nazionalità. Prepariamo la documentazione al momento della prenotazione; verificate i requisiti aggiornati presso il vostro consolato algerino."
      },
      {
        "q": "Com'è composto il gruppo?",
        "a": "Piccolo. Il circuito viene organizzato come piccolo gruppo oppure come partenza privata per il vostro gruppo — indicateci la vostra preferenza al momento della richiesta."
      }
    ]
  },
  "ihrir-oasis-7-days": {
    "title": "Ihrir e il Tassili — 7 Giorni tra Oasi ed Erg",
    "duration": "7 giorni · 6 notti",
    "hook": "Tutti si aspettano che il Sahara sia arido. A Ihrir non lo è — un'oasi incassata di acque stagnanti, canne e pozze di roccia, a un'ora dalle dune che corrono fino all'orizzonte.",
    "full": true,
    "seoTitle": "Ihrir e Tassili, 7 giorni — oasi e dune del Sahara",
    "seoDescription": "Circuito di 7 giorni tra oasi e dune del Tassili n'Ajjer: Ihrir, Erg Admer, Oued Essendilène e Tikoubaouine, con guide tuareg da Djanet.",
    "overview": "Se la Tadrart è il Sahara di sabbia, Ihrir è il Sahara d'acqua. Questo circuito percorre il versante settentrionale del Tassili n'Ajjer: un'oasi incassata le cui gueltas trattengono acqua tutto l'anno, un canyon in cui è possibile nuotare quando la stagione lo consente, torri di roccia scolpite dal vento a Tikoubaouine, e le alte dune dell'Erg Admer per il tramonto. Sei notti sotto la tela, una in una guesthouse a Djanet all'arrivo, e il volo verso sud da Algeri incluso nel prezzo. È il più tranquillo dei nostri due circuiti di sette giorni da Djanet, e quello che sorprende di più.",
    "highlights": [
      "L'oasi incassata di Ihrir e le sue gueltas permanenti",
      "Incisioni rupestri e pozze naturali a Idaren e Tasourt",
      "Tramonto dalle alte dune dell'Erg Admer",
      "Il canyon dell'Oued Essendilène — bagno possibile in stagione",
      "Le formazioni rocciose scolpite dal vento di Tikoubaouine",
      "L'altopiano di In Imouroudene",
      "Adaik, la «piccola Sefar», e la sua arte rupestre",
      "La «Mucca che piange» di Tigharghart e la Roccia dell'Elefante"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo a Djanet",
        "body": "Atterraggio a Djanet, porta d'accesso al Tassili n'Ajjer, e accoglienza da parte della nostra squadra. Trasferimento in guesthouse, tempo per riposare dopo il volo e una cena conviviale prima dell'inizio del circuito.",
        "stops": [
          {
            "place": "Aeroporto di Tiska",
            "text": "Accoglienza all'arrivo nell'aeroporto più a sud dell'Algeria, a 30 km dall'oasi."
          },
          {
            "place": "Djanet",
            "text": "Capitale oasi tuareg del sud-est — palmeti ai piedi di falesie rosse."
          },
          {
            "place": "La guesthouse a Djanet",
            "text": "Una prima notte al chiuso — una casa a corte tra le palme, e la cena con la squadra che vi accompagnerà per tutta la settimana."
          }
        ]
      },
      {
        "day": 2,
        "title": "Djanet → Ihrir → Idaren → Tasourt",
        "body": "Colazione, poi partenza in 4×4 verso la valle di Ihrir — un'oasi incassata famosa per le sue gueltas naturali e per una vegetazione inaspettatamente lussureggiante. Si prosegue verso Idaren e Tasourt per esplorare incisioni rupestri e altre pozze naturali. Si allestisce il campo, la cena si cucina sul fuoco, e si dorme in tenda o sotto le stelle.",
        "stops": [
          {
            "place": "Ihrir",
            "text": "Un'oasi incassata le cui pozze di roccia trattengono acqua tutto l'anno."
          },
          {
            "place": "Le gueltas di Ihrir",
            "text": "Pozze di roccia permanenti sul fondo del canyon, con canne, pesci e uccelli nel cuore del deserto."
          },
          {
            "place": "Idaren e Tasourt",
            "text": "Incisioni rupestri e bacini naturali lungo la valle."
          }
        ]
      },
      {
        "day": 3,
        "title": "Ihrir → Tilalin → Erg Admer",
        "body": "Colazione al campo e una camminata nell'area di Tilalin, poi la pista verso l'Erg Admer. Salita sulle dune per il tramonto sull'erg, e campo nel cuore del deserto.",
        "stops": [
          {
            "place": "Tilalin",
            "text": "Una camminata mattutina tra le formazioni rocciose e i corsi d'acqua secchi della zona, prima di riprendere la pista."
          },
          {
            "place": "Erg Admer",
            "text": "Un grande campo dunale — la salita per il tramonto è la ricompensa della giornata."
          },
          {
            "place": "Il campo nell'erg",
            "text": "Campo allestito in piena sabbia, senza nulla all'orizzonte — la notte più vuota del circuito."
          }
        ]
      },
      {
        "day": 4,
        "title": "Erg Admer → Oued Essendilène → Tikoubaouine",
        "body": "Partenza verso l'Oued Essendilène e una camminata nel suo canyon, dove il bagno è possibile a seconda della stagione. Pranzo al sacco, poi proseguimento verso Tikoubaouine e le sue formazioni rocciose scolpite dal vento. Campo tra le rocce.",
        "stops": [
          {
            "place": "Oued Essendilène",
            "text": "Un canyon con acqua permanente — bagno possibile in stagione."
          },
          {
            "place": "La camminata nel canyon",
            "text": "Un'ora a piedi risalendo la gola fino all'acqua, tra pareti che si stringono man mano che si procede."
          },
          {
            "place": "Tikoubaouine",
            "text": "Torri e archi scolpiti dal vento più che dall'acqua."
          }
        ]
      },
      {
        "day": 5,
        "title": "In Imouroudene → Adaik",
        "body": "Esplorazione dell'altopiano di In Imouroudene, una camminata panoramica e un pranzo al sacco. Proseguimento verso Adaik — conosciuta localmente come la «piccola Sefar» per la sua concentrazione di arte rupestre — con tempo libero per godersi il tramonto prima della cena al bivacco.",
        "stops": [
          {
            "place": "In Imouroudene",
            "text": "Un altopiano con ampie vedute sul Tassili."
          },
          {
            "place": "Adaik",
            "text": "La «piccola Sefar» — arte rupestre senza il trekking sull'altopiano."
          },
          {
            "place": "Tramonto a Adaik",
            "text": "Tempo libero sulle rocce per l'ultima luce, prima della cena al bivacco."
          }
        ]
      },
      {
        "day": 6,
        "title": "Adaik → Timghas",
        "body": "Colazione e trasferimento a Timghas, con una camminata esplorativa e del tempo dedicato alla flora sahariana che sopravvive qui. Pranzo al sacco, campo allestito e un'ultima cena sotto le stelle.",
        "stops": [
          {
            "place": "Timghas",
            "text": "L'ultimo campo, e uno sguardo più da vicino a ciò che cresce davvero nel Sahara."
          },
          {
            "place": "La flora sahariana a piedi",
            "text": "Una camminata dedicata a ciò che cresce davvero qui — acacia, tamerici, calotropis e le piante che i tuareg utilizzano ancora oggi."
          },
          {
            "place": "L'ultimo bivacco",
            "text": "Un'ultima cena sul fuoco sotto il cielo intero, prima del rientro a Djanet."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timghas → Tigharghart → Djanet → rientro",
        "body": "Ritorno verso Tigharghart per l'incisione della «Mucca che piange» e la Roccia dell'Elefante, poi rientro a Djanet e trasferimento in aeroporto per il volo di ritorno.",
        "stops": [
          {
            "place": "Tigharghart — la «Mucca che piange»",
            "text": "L'incisione più fotografata del Sahara, lungo il tragitto di rientro verso l'oasi."
          },
          {
            "place": "La Roccia dell'Elefante",
            "text": "La seconda incisione celebre di Tigharghart, a pochi passi dalla prima."
          },
          {
            "place": "Djanet e l'aeroporto di Tiska",
            "text": "Ritorno all'oasi, poi il trasferimento per il volo verso nord."
          }
        ]
      }
    ],
    "includes": [
      "Volo interno andata e ritorno Algeri ⇄ Djanet (Air Algérie, diretto)",
      "Tutti i trasferimenti aeroportuali — Algeri e Djanet",
      "Veicoli 4×4 e autisti esperti del deserto per tutto il viaggio",
      "Guida tuareg autorizzata di Djanet",
      "Pensione completa — colazione, pranzo e cena ogni giorno",
      "Attrezzatura da campo: tende, materassini e coperte",
      "Permessi e pratiche per il Parco Nazionale del Tassili n'Ajjer",
      "Acqua in bottiglia per tutto il viaggio",
      "Documentazione di supporto per il visto inclusa nella prenotazione"
    ],
    "excludes": [
      "Voli internazionali da e per Algeri",
      "Costo del visto algerino",
      "Assicurazione di viaggio e medica (obbligatoria)",
      "Bevande diverse dall'acqua; spese personali",
      "Mance per guida, autisti e squadra di campo",
      "Permessi per fotocamera o drone, dove applicabili"
    ],
    "goodToKnow": [
      {
        "label": "Stagione migliore",
        "value": "Da ottobre ad aprile (il grande sud non si percorre in estate)"
      },
      {
        "label": "Ritmo",
        "value": "Confortevole — spostamenti in 4×4, brevi camminate a ogni sito"
      },
      {
        "label": "Notti",
        "value": "Una notte in guesthouse a Djanet, poi cinque in bivacco selvaggio"
      },
      {
        "label": "Gruppo",
        "value": "Piccolo gruppo o partenza privata"
      },
      {
        "label": "Bagno",
        "value": "Possibile nell'Oued Essendilène a seconda della stagione — portate un costume"
      },
      {
        "label": "Rete telefonica",
        "value": "Assente non appena si lascia Djanet"
      }
    ],
    "faqs": [
      {
        "q": "In cosa si differenzia dal circuito della Tadrart?",
        "a": "Stessa durata, stesso prezzo, Sahara diverso. La Tadrart è sabbia — dune rosa, archi, il grande erg. Ihrir è acqua e varietà: un'oasi permanente, un canyon balneabile, torri scolpite dal vento e un altopiano scuro. Chi cerca le dune sceglie la Tadrart; chi cerca varietà sceglie questo."
      },
      {
        "q": "Si può davvero nuotare nel deserto?",
        "a": "Nell'Oued Essendilène, a seconda della stagione e del livello dell'acqua. Le gueltas di Ihrir trattengono acqua tutto l'anno ma non sono sempre adatte al bagno. Portate un costume e lasciate che sia la guida a valutare sul momento."
      },
      {
        "q": "Il volo è incluso?",
        "a": "Sì — il volo Air Algérie andata e ritorno Algeri ⇄ Djanet e tutti i trasferimenti aeroportuali. Il volo internazionale fino ad Algeri è a parte."
      },
      {
        "q": "Come sono le notti?",
        "a": "Una in guesthouse a Djanet all'arrivo, poi cinque in bivacco selvaggio con tende, materassini e coperte forniti. In inverno le notti nel Sahara sono davvero fredde — preparate il bagaglio di conseguenza."
      },
      {
        "q": "Quando si svolge?",
        "a": "Da ottobre ad aprile, con novembre-febbraio come periodo classico. Il grande sud non si percorre in estate."
      }
    ]
  },
  "sefar-tassili-trek": {
    "title": "Trekking a Sefar — Sull'Altopiano del Tassili a Piedi",
    "duration": "7 giorni · 6 notti",
    "hook": "A Sefar non si arriva in auto. Ci si sale, e si cammina per giorni tra pareti dipinte che hanno da cinque a ottomila anni.",
    "full": true,
    "seoTitle": "Trekking a Sefar, 7 giorni sul Tassili n'Ajjer",
    "seoDescription": "Trekking di 7 giorni sull'altopiano del Tassili n'Ajjer: Sefar, Tin Tazarift e Djabarren, pitture rupestri millenarie, guide e asini da Djanet.",
    "overview": "Questo è il viaggio serio. Da Djanet la pista sale sull'altopiano del Tassili, e da lì in poi tutto si muove al passo del cammino — guide, cuochi e conducenti d'asini portano il campo mentre voi percorrete dalle cinque alle sette ore al giorno tra i siti di arte rupestre. Tin Zoumaitek e la valle dei cipressi millenari, le «danzatrici» dipinte di Tin Tazarift, le maschere di Sefar Noir e i grandi dèi di Sefar Blanc, e infine Djabarren, il più grande insieme di pitture del Tassili. Migliaia di opere, testimonianza di un Sahara che era verde e popolato di uomini e animali. Lassù non c'è alcun supporto motorizzato né campo telefonico; è un trekking, ed è il motivo per cui i viaggiatori più esigenti vengono in Algeria.",
    "highlights": [
      "La salita sull'altopiano del Tassili da Tamrit",
      "Tin Zoumaitek e la valle dei cipressi millenari",
      "Le «danzatrici» dipinte di Tin Tazarift",
      "Le maschere di Sefar Noir e i grandi dèi di Sefar Blanc",
      "Pannelli preistorici a Tirassoutine, Tin Kani e Alarendemen",
      "Djabarren — il più grande insieme di pitture del Tassili",
      "Bivacco sull'altopiano ogni notte"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo a Djanet → Tassili du Tafilalet",
        "body": "Arrivo a Djanet e accoglienza da parte della squadra locale. Qualche ora di riposo dopo il volo, poi il trasferimento verso il Tassili du Tafilalet, dove inizia la spedizione e dove ad aspettarvi ci sono le guide, i cuochi e i conducenti d'asini che vi accompagneranno per tutta la settimana.",
        "stops": [
          {
            "place": "Djanet",
            "text": "La capitale oasi tuareg del sud-est, e l'ultimo centro abitato prima dell'altopiano."
          },
          {
            "place": "Tassili du Tafilalet",
            "text": "Dove i veicoli si fermano e inizia il cammino."
          },
          {
            "place": "La squadra del trekking",
            "text": "Le guide, i cuochi e i conducenti d'asini che trasportano il campo e vi accompagnano per l'intera settimana — incontrati la prima sera."
          }
        ]
      },
      {
        "day": 2,
        "title": "La salita → Tin Zoumaitek",
        "body": "La salita sull'altopiano del Tassili, con le squadre di asini che trasportano il campo. In cima, i primi siti di arte rupestre a Tin Zoumaitek e la valle dei cipressi millenari — autentici superstiti del Sahara più umido raccontato dalle pitture. Prima notte in bivacco sotto le stelle.",
        "stops": [
          {
            "place": "La salita",
            "text": "La scarpata che conduce sull'altopiano: circa 7 ore di cammino, +500 m di dislivello."
          },
          {
            "place": "Tin Zoumaitek",
            "text": "I primi siti dipinti, e la valle dei cipressi millenari."
          },
          {
            "place": "La valle dei cipressi",
            "text": "Cipressi sahariani millenari (Cupressus dupreziana) sull'altopiano — superstiti viventi del Sahara verde raccontato dalle pitture."
          }
        ]
      },
      {
        "day": 3,
        "title": "In Tinen → Tin Tazarift",
        "body": "Una giornata dedicata alle pitture degli spuntoni di In Tinen — scene di caccia, mandrie, figure mitologiche, e una testimonianza unica della vita preistorica. Dopo pranzo, il celebre sito di Tin Tazarift e le sue figure emblematiche, note come «le danzatrici».",
        "stops": [
          {
            "place": "In Tinen",
            "text": "Spuntoni dipinti: cacce, mandrie e figure mitologiche."
          },
          {
            "place": "Tin Tazarift",
            "text": "Le «danzatrici» — tra le immagini più riprodotte dell'arte sahariana."
          },
          {
            "place": "Bivacco tra gli spuntoni",
            "text": "Campo allestito tra le torri di arenaria erose, con la cena cucinata dalla squadra e l'altopiano completamente silenzioso dopo il tramonto."
          }
        ]
      },
      {
        "day": 4,
        "title": "Tin Teferieste → Sefar Noir → Sefar Blanc",
        "body": "Il notevole sito di Tin Teferieste, poi la mitica città di Sefar vera e propria: le celebri maschere di Sefar Noir e i grandi dèi di Sefar Blanc. Questo settore è considerato uno degli insiemi di pittura rupestre più impressionanti di tutto il Sahara.",
        "stops": [
          {
            "place": "Tin Teferieste",
            "text": "Il sito della mattinata lungo il percorso verso Sefar — notevole di per sé, prima dei pannelli celebri."
          },
          {
            "place": "Sefar Noir",
            "text": "Le maschere — le immagini per cui il sito è conosciuto."
          },
          {
            "place": "Sefar Blanc",
            "text": "I «grandi dèi», tra le figure più straordinarie dell'arte sahariana."
          }
        ]
      },
      {
        "day": 5,
        "title": "Tirassoutine → Tin Kani → Alarendemen",
        "body": "Il paesaggio cambia man mano che si avanza, aprendosi in vasti altopiani dalle tonalità più scure. Si attraversano Tirassoutine e Tin Kani prima di raggiungere Alarendemen, dove si allestisce il campo, con diversi insiemi di pittura preistorica notevolmente conservati scoperti lungo il percorso.",
        "stops": [
          {
            "place": "Gli altopiani scuri",
            "text": "Il paesaggio che si apre in ampi tavolati dalle tonalità più scure, con pannelli dipinti ben conservati incontrati lungo l'attraversamento."
          },
          {
            "place": "Tirassoutine e Tin Kani",
            "text": "Pannelli dipinti lungo l'attraversamento."
          },
          {
            "place": "Alarendemen",
            "text": "Il bivacco della notte sull'altopiano scuro."
          }
        ]
      },
      {
        "day": 6,
        "title": "Djabarren",
        "body": "Arrivo al celebre sito di Djabarren, considerato il più grande insieme di pittura rupestre del Tassili. Qui sono catalogate migliaia di opere, che illustrano i diversi periodi della storia sahariana — una giornata eccezionale nel cuore di quello che è a tutti gli effetti un museo a cielo aperto.",
        "stops": [
          {
            "place": "Djabarren",
            "text": "Il più grande insieme dipinto del Tassili — migliaia di opere catalogate."
          },
          {
            "place": "Quattro periodi su una sola parete",
            "text": "Opere dei periodi Teste Rotonde, Bovidiano, dei Cavalli e dei Cammelli fianco a fianco — l'intera sequenza della storia sahariana dipinta su roccia."
          },
          {
            "place": "L'ultimo bivacco sull'altopiano",
            "text": "Un'ultima notte lassù sul Tassili prima della discesa del mattino."
          }
        ]
      },
      {
        "day": 7,
        "title": "Discesa dall'altopiano → Djanet → rientro",
        "body": "Un'ultima mattina sul Tassili, poi la discesa dall'altopiano con le guide e le squadre di asini — la stessa salita del primo giorno, ma al contrario e con una settimana ormai alle spalle. Si ridiscende fino ai veicoli e si prosegue verso Djanet, poi il trasferimento all'aeroporto di Tiska per il volo verso nord.",
        "stops": [
          {
            "place": "La discesa",
            "text": "Giù per la scarpata salita il primo giorno, fino al punto in cui attendono i veicoli."
          },
          {
            "place": "Djanet",
            "text": "Un ultimo sguardo all'oasi prima dell'aeroporto."
          },
          {
            "place": "L'aeroporto di Tiska",
            "text": "Il trasferimento fuori dall'oasi per il volo verso nord."
          }
        ]
      }
    ],
    "includes": [
      "Volo interno andata e ritorno Algeri ⇄ Djanet (Air Algérie, diretto)",
      "Tutti i trasferimenti aeroportuali — Algeri e Djanet",
      "Pensione completa per tutto il circuito",
      "Attrezzatura da bivacco e logistica di campo sull'altopiano",
      "Guide locali esperte, cuochi e conducenti d'asini",
      "Asini per il trasporto dell'attrezzatura da campo e dei bagagli",
      "Permessi e pratiche per il Parco Nazionale del Tassili n'Ajjer",
      "Documentazione di supporto per il visto inclusa nella prenotazione"
    ],
    "excludes": [
      "Voli internazionali da e per Algeri",
      "Costo del visto algerino",
      "Assicurazione di viaggio e medica (obbligatoria)",
      "Bevande diverse dall'acqua; spese personali",
      "Mance per guida, autisti e squadra di campo",
      "Permessi per fotocamera o drone, dove applicabili"
    ],
    "goodToKnow": [
      {
        "label": "Stagione migliore",
        "value": "Da ottobre ad aprile (il grande sud non si percorre in estate)"
      },
      {
        "label": "Ritmo",
        "value": "Impegnativo — da 4 a 7 ore di cammino al giorno, +500 m di dislivello il primo giorno"
      },
      {
        "label": "Notti",
        "value": "Sei notti di campo e bivacco sull'altopiano"
      },
      {
        "label": "Supporto",
        "value": "Guide, cuochi e conducenti d'asini; nessun accesso motorizzato sull'altopiano"
      },
      {
        "label": "Forma fisica",
        "value": "Solo per camminatori abituali — è un trekking, non un giro in fuoristrada"
      },
      {
        "label": "Rete telefonica",
        "value": "Assente sull'altopiano"
      }
    ],
    "faqs": [
      {
        "q": "Quanta forma fisica serve?",
        "a": "Abbastanza in forma da camminare dalle quattro alle sette ore al giorno per sei giorni consecutivi, iniziando con un dislivello di 500 m per salire sull'altopiano e terminando con la discesa. Si porta solo uno zaino leggero — gli asini trasportano il campo — ma non c'è alcun supporto motorizzato né modo di accorciare una giornata una volta saliti lassù. I camminatori abituali se la cavano senza difficoltà; chi cammina solo occasionalmente lo trova impegnativo."
      },
      {
        "q": "Perché non si può arrivare a Sefar in auto?",
        "a": "Il Tassili è un altopiano a cui si accede con una salita, e i siti si trovano sulla sua sommità. È proprio per questo che le pitture si sono conservate così bene, ed è per questo che le giornate lassù non somigliano a nient'altro in Algeria."
      },
      {
        "q": "Quanto è antica l'arte rupestre?",
        "a": "Le pitture coprono un arco di circa cinque-ottomila anni, testimonianza di un Sahara verde e popolato da uomini, mandrie e animali selvatici. Solo Djabarren custodisce migliaia di opere catalogate, ripartite su diversi periodi distinti."
      },
      {
        "q": "Il volo è incluso?",
        "a": "Sì — il volo andata e ritorno tra Algeri e Djanet e tutti i trasferimenti aeroportuali. Il volo internazionale fino ad Algeri è a parte."
      },
      {
        "q": "Quando si svolge?",
        "a": "Da ottobre ad aprile. L'altopiano non si percorre in estate."
      }
    ]
  },
  "algeria-grand-discovery-14-days": {
    "title": "Grande Scoperta dell'Algeria — 14 Giorni dalla Costa al Sahara",
    "duration": "14 giorni · 13 notti",
    "hook": "La maggior parte delle persone deve scegliere tra l'Algeria romana e il Sahara. Quattordici giorni sono quello che serve per smettere di scegliere.",
    "full": true,
    "seoTitle": "Algeria in 14 giorni — Sahara, Roma e M'Zab",
    "seoDescription": "Tour di 14 giorni in Algeria: Tadrart Rouge, città romane di Costantina, Timgad e Djémila, Algeri e il M'Zab, con 4 voli interni inclusi.",
    "overview": "Questo è l'intero paese in un solo viaggio, organizzato in modo che ogni volo interno sia un collegamento diretto di linea — senza transiti, senza giornate perse in aeroporto. Si parte da Algeri e la stessa notte si vola verso Djanet per una spedizione in 4×4 di quattro giorni nella Tadrart Rouge, con due notti nel deserto. Poi l'est romano: Costantina sulla sua gola, Timgad, Annaba e Djémila. Ritorno nella capitale per la Casbah e il Bardo, verso ovest a Tipaza e Cherchell, e infine di nuovo a sud, a Ghardaïa, per le cinque città fortificate del M'Zab e le dune di Sebseb. Sei siti Patrimonio dell'Umanità UNESCO, quattro voli diretti, tredici notti, e una guida nazionale al vostro fianco per tutto il viaggio.",
    "highlights": [
      "Quattro giorni nella Tadrart Rouge con due campi nel deserto",
      "La Casbah di Algeri, patrimonio UNESCO, e il Museo del Bardo",
      "Timgad — la «Pompei d'Africa»",
      "Djémila, a 900 m di altitudine su uno sperone montano",
      "Costantina, la Città dei Ponti, sospesa sulla gola del Rhumel",
      "Tipaza e il Mausoleo Reale di Mauretania",
      "I cinque ksour fortificati della Valle del M'Zab",
      "Le dune di Sebseb a sud di Ghardaïa",
      "La basilica di Sant'Agostino e Hippo Regius ad Annaba"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrivo ad Algeri → volo notturno per Djanet",
        "body": "Arrivo all'aeroporto Houari Boumediene, accoglienza da parte del nostro rappresentante, con una stanza a disposizione per rinfrescarsi durante il giorno. Nel pomeriggio, una camminata di orientamento — Place des Martyrs, la Grande Poste, il lungomare — poi una cena anticipata e il trasferimento al terminal interno per il volo notturno diretto verso sud.",
        "stops": [
          {
            "place": "Aeroporto Houari Boumediene",
            "text": "Accoglienza da parte del nostro rappresentante, con una stanza a disposizione per fare la doccia e cambiarsi dopo il volo internazionale."
          },
          {
            "place": "Place des Martyrs e la Grande Poste",
            "text": "La piazza ai piedi della Casbah e l'ufficio postale neomoresco del 1910 — i due simboli del centro di Algeri."
          },
          {
            "place": "I portici del lungomare",
            "text": "Il lungo colonnato bianco sopra il porto, l'immagine di Algeri vista dal mare, prima del trasferimento per il volo notturno verso sud."
          }
        ]
      },
      {
        "day": 2,
        "title": "Tigharghart e la Tadrart Rouge",
        "body": "Incontro con la guida tuareg autorizzata e partenza in 4×4 verso la Tadrart Rouge, nel Parco Nazionale del Tassili n'Ajjer. Tigharghart, patria della celebre incisione della «Mucca che piange», poi il percorso tra dune rosse gigantesche e formazioni di arenaria fino al campo nel profondo deserto. Cena tuareg tradizionale sotto le stelle.",
        "stops": [
          {
            "place": "Tigharghart",
            "text": "La «Mucca che piange» — l'incisione più famosa del Sahara."
          },
          {
            "place": "La Tadrart Rouge",
            "text": "Dune rosse gigantesche e torri di arenaria all'interno del Parco Nazionale del Tassili n'Ajjer, attraversate in 4×4 con una guida tuareg autorizzata."
          },
          {
            "place": "Il campo nel profondo deserto",
            "text": "Una cena tuareg tradizionale cucinata sul fuoco, e la prima notte sotto le stelle."
          }
        ]
      },
      {
        "day": 3,
        "title": "Il cuore della Tadrart",
        "body": "Una giornata intera tra i grandi paesaggi della Tadrart Rouge: El Berdj, Moul Naga e l'Erg Tin Merzouga, con incisioni preistoriche e punti panoramici lungo il percorso. Tramonto nel cuore del Sahara e una seconda notte di campeggio selvaggio.",
        "stops": [
          {
            "place": "El Berdj",
            "text": "Gole profonde di arenaria le cui pareti portano sia incisioni sia pannelli dipinti."
          },
          {
            "place": "Moul Naga",
            "text": "Un territorio di dune maestose nel cuore della Tadrart, e i punti panoramici della giornata."
          },
          {
            "place": "Erg Tin Merzouga",
            "text": "Le grandi dune della Tadrart al tramonto."
          }
        ]
      },
      {
        "day": 4,
        "title": "In Djaren, Tin Abadène e Ouanahar → Djanet",
        "body": "Più in profondità nel parco: la valle di In Djaren, le giraffe e gli elefanti incisi a Tin Abadène, Ouanahar, la «cattedrale» di Tamezguida e gli archi naturali. Rientro a Djanet dopo il tramonto.",
        "stops": [
          {
            "place": "La valle di In Djaren e i suoi archi",
            "text": "Una valle secca di archi monumentali di arenaria scolpiti dal vento — le formazioni simbolo della Tadrart."
          },
          {
            "place": "Tin Abadène",
            "text": "Giraffe ed elefanti preistorici."
          },
          {
            "place": "Tamezguida",
            "text": "Una formazione di arenaria che merita davvero il nome di «cattedrale»."
          }
        ]
      },
      {
        "day": 5,
        "title": "Djanet → volo notturno per Costantina",
        "body": "Una mattinata dedicata alla Djanet tuareg: il Museo del Tassili — l'unico museo tuareg d'Algeria — l'antico ksar di Azellouaz e il mercato locale, con tempo libero per i souvenir. Una cena di addio al Sahara, poi il trasferimento serale all'aeroporto di Tiska.",
        "stops": [
          {
            "place": "Il Museo del Tassili",
            "text": "L'unico museo tuareg d'Algeria — documentazione sull'arte rupestre, gioielli, armi e la vita quotidiana dei Kel Ajjer."
          },
          {
            "place": "Il ksar di Azellouaz",
            "text": "Il quartiere più antico di Djanet, un villaggio in mattoni di fango arroccato sulla roccia sopra i palmeti."
          },
          {
            "place": "Il mercato di Djanet",
            "text": "Il mercato dell'oasi per l'argento tuareg, il cuoio e i datteri, con tempo libero per i souvenir prima della cena d'addio."
          }
        ]
      },
      {
        "day": 6,
        "title": "Costantina, la Città dei Ponti",
        "body": "Una partenza tranquilla e senza fretta dopo il volo notturno, poi la città: il Palazzo di Ahmed Bey, il Museo Nazionale Cirta, il ponte sospeso di Sidi M'Cid e la passerella di Mellah Slimane, Place des Martyrs e il centro storico, e i punti panoramici sulla gola del Rhumel.",
        "stops": [
          {
            "place": "Il ponte di Sidi M'Cid",
            "text": "Sospeso in alto sopra la gola del Rhumel — l'immagine simbolo di Costantina."
          },
          {
            "place": "Il Palazzo di Ahmed Bey",
            "text": "Le gallerie dipinte e i cortili dell'ultimo Bey."
          },
          {
            "place": "Il Museo Nazionale Cirta e il centro storico",
            "text": "La collezione archeologica e artistica di Costantina, Place des Martyrs e i punti panoramici sulla gola del Rhumel."
          }
        ]
      },
      {
        "day": 7,
        "title": "Timgad",
        "body": "Un'escursione di un'intera giornata a Timgad, la città romana fondata da Traiano per i veterani dell'esercito e conservata dalla sabbia quasi intatta: l'Arco di Traiano, il teatro, il foro e il campidoglio, le terme e la griglia di strade che ne fanno un manuale di urbanistica romana.",
        "stops": [
          {
            "place": "Timgad",
            "text": "La «Pompei d'Africa» — una griglia romana perfetta, a 115 km da Costantina."
          },
          {
            "place": "L'Arco di Traiano",
            "text": "L'arco a tre fornici che si erge sul decumano — l'immagine per cui Timgad è conosciuta in tutto il mondo."
          },
          {
            "place": "Il teatro, il foro e le terme",
            "text": "Un teatro da 3.500 posti scavato nel pendio, il campidoglio e il foro al centro, e i complessi termali disposti lungo la griglia urbana."
          }
        ]
      },
      {
        "day": 8,
        "title": "Costantina → Annaba",
        "body": "Trasferimento mattutino ad Annaba, una delle città mediterranee più antiche d'Algeria: la Basilica di Sant'Agostino, le rovine romane di Hippo Regius, il lungomare della Seybouse e la corniche, e un vivace centro cittadino.",
        "stops": [
          {
            "place": "La Basilica di Sant'Agostino",
            "text": "La basilica ottocentesca sulla collina che domina la città romana, che custodisce una reliquia del braccio di Agostino."
          },
          {
            "place": "Hippo Regius",
            "text": "Dove Agostino fu vescovo — la città romana ai piedi della basilica."
          },
          {
            "place": "La corniche e il Cours de la Révolution",
            "text": "La strada costiera di Annaba e la passeggiata centrale ombreggiata dai platani, dove tutta la città si ritrova la sera."
          }
        ]
      },
      {
        "day": 9,
        "title": "Annaba → Djémila → Algeri",
        "body": "Partenza mattutina verso ovest lungo l'autostrada in direzione di Djémila: il foro, la basilica, i templi, l'arco di trionfo e il museo dei mosaici dell'antica Cuicul, a 900 m di altitudine sul suo sperone montano. Poi proseguimento verso Algeri per la sera.",
        "stops": [
          {
            "place": "Djémila",
            "text": "Una delle città romane meglio conservate al mondo, e tra le più suggestivamente collocate."
          },
          {
            "place": "L'Arco di Caracalla",
            "text": "L'arco di trionfo del 216 d.C. al margine del nuovo foro di Cuicul, a 900 m di altitudine sul suo sperone montano."
          },
          {
            "place": "Il museo dei mosaici di Djémila",
            "text": "Mosaici in loco tra i più ricchi del mondo romano, conservati accanto alle case da cui sono stati sollevati."
          }
        ]
      },
      {
        "day": 10,
        "title": "Algeri in giornata piena",
        "body": "Una giornata intera nella capitale: la Casbah, patrimonio UNESCO, il Museo Nazionale del Bardo, la basilica di Notre-Dame d'Afrique, il Maqam Echahid e i punti panoramici sulla baia di Algeri.",
        "stops": [
          {
            "place": "La Casbah",
            "text": "La cittadella ottomana che domina la baia — vicoli a gradoni, cortili e terrazze."
          },
          {
            "place": "Il Museo Nazionale del Bardo",
            "text": "Preistoria ed etnografia in una villa moresca — calchi di arte rupestre sahariana, gioielli d'argento e l'Algeria quotidiana."
          },
          {
            "place": "Notre-Dame d'Afrique e il Maqam Echahid",
            "text": "La basilica sulla sua rupe sopra Bab El Oued, e le tre foglie di palma in cemento del Memoriale dei Martiri che dominano la baia."
          }
        ]
      },
      {
        "day": 11,
        "title": "Tipaza e Cherchell → volo notturno per Ghardaïa",
        "body": "Verso ovest lungo la costa fino al sito romano di Tipaza, il Mausoleo Reale di Mauretania e il museo archeologico di Cherchell. Rientro ad Algeri per la cena, poi l'aeroporto.",
        "stops": [
          {
            "place": "Tipaza",
            "text": "Una città portuale romana distesa lungo il mare, dove Camus passeggiava tra le rovine."
          },
          {
            "place": "Il Mausoleo Reale di Mauretania",
            "text": "Un grande tamburo di pietra sulla collina sopra il mare — la tomba di Giuba II e Cleopatra Selene, figlia di Cleopatra d'Egitto."
          },
          {
            "place": "Il Museo Archeologico di Cherchell",
            "text": "La collezione di mosaici e statue romane e greche dell'antica Cesarea, tra le più belle d'Algeria."
          }
        ]
      },
      {
        "day": 12,
        "title": "La Valle del M'Zab",
        "body": "Una giornata intera tra i cinque ksour fortificati del M'Zab: Ghardaïa, Beni Isguen, Melika, Bounoura ed El Atteuf, con il mercato tradizionale e l'architettura mozabita la cui logica affascinò Le Corbusier.",
        "stops": [
          {
            "place": "Il mercato e il ksar di Ghardaïa",
            "text": "La piazza del mercato porticata ai piedi del centro principale, e le case a terrazze che salgono fino al minareto che le sovrasta."
          },
          {
            "place": "Beni Isguen",
            "text": "La città santa fortificata dei mozabiti ibaditi."
          },
          {
            "place": "El Atteuf",
            "text": "La più antica delle cinque città."
          }
        ]
      },
      {
        "day": 13,
        "title": "Le dune di Sebseb → volo serale per Algeri",
        "body": "Un'escursione mattutina verso sud fino alle dune di Sebseb — un ultimo assaggio del grande Sahara — poi ritorno a Ghardaïa. Cena d'addio a base di cucina algerina tradizionale prima del volo serale verso nord.",
        "stops": [
          {
            "place": "La pista verso sud attraverso l'hamada",
            "text": "Il deserto di pietra tra Ghardaïa e la sabbia — la transizione che quasi nessun visitatore vede."
          },
          {
            "place": "Sebseb",
            "text": "Dune a 90 km a sud di Ghardaïa, e l'ultimo orizzonte desertico del viaggio."
          },
          {
            "place": "Una cena d'addio a Ghardaïa",
            "text": "Cucina algerina tradizionale nell'ultima serata, prima del volo serale verso nord."
          }
        ]
      },
      {
        "day": 14,
        "title": "Partenza",
        "body": "Colazione, una mattinata libera per tutto ciò che è rimasto da vedere o per gli ultimi acquisti, poi il trasferimento privato all'aeroporto Houari Boumediene.",
        "stops": [
          {
            "place": "Una mattinata libera ad Algeri",
            "text": "Tutto ciò che le due settimane hanno lasciato fuori — il Jardin d'Essai, la Moschea Ketchaoua, o semplicemente il lungomare."
          },
          {
            "place": "Ultimi acquisti",
            "text": "Argento cabilo, cuoio tuareg, datteri Deglet Nour e dolci, lungo Rue Didouche Mourad o nelle botteghe della Casbah."
          },
          {
            "place": "Aeroporto Houari Boumediene",
            "text": "Il trasferimento privato e l'assistenza al check-in per il vostro volo internazionale."
          }
        ]
      }
    ],
    "includes": [
      "Tutti i 4 voli interni (Air Algérie, classe economica, tutti diretti), tasse incluse",
      "13 notti di alloggio, in camera doppia",
      "Colazione giornaliera per tutto il viaggio",
      "Pensione completa durante la spedizione a Djanet/Sahara e nel tratto di Ghardaïa",
      "Tutti i trasferimenti e le visite in veicoli privati con aria condizionata",
      "Veicoli 4×4 nel Tassili n'Ajjer",
      "Guida nazionale in lingua inglese per tutto il viaggio; guide tuareg autorizzate a Djanet",
      "Permessi per i parchi nazionali e tutti i biglietti d'ingresso ai siti e ai musei indicati",
      "Attrezzatura completa da campeggio nel deserto e un cuoco dedicato alla spedizione",
      "Documentazione di supporto per il visto / lettera di invito",
      "Acqua in bottiglia durante tutte le escursioni"
    ],
    "excludes": [
      "Voli internazionali da e per Algeri",
      "Costo del visto algerino",
      "Pranzi e cene non specificati; bevande diverse dall'acqua",
      "Mance per guide, autisti e squadra di campo",
      "Assicurazione di viaggio e medica (obbligatoria — da esibire prima della partenza)",
      "Spese personali; permessi per fotocamera o drone, dove applicabili",
      "Supplemento camera singola; check-in anticipato o check-out posticipato salvo diversa indicazione"
    ],
    "goodToKnow": [
      {
        "label": "Stagione migliore",
        "value": "Da ottobre ad aprile (il tratto sahariano richiede la stagione fresca)"
      },
      {
        "label": "Ritmo",
        "value": "Intenso ma non frettoloso — basi di tre notti a Costantina e Algeri"
      },
      {
        "label": "Notti",
        "value": "11 in hotel, 2 in campo nel deserto durante la spedizione nella Tadrart"
      },
      {
        "label": "Voli",
        "value": "4 voli interni diretti inclusi, tasse comprese"
      },
      {
        "label": "Gruppo",
        "value": "Prezzo calcolato per un gruppo di 4 persone in camera doppia"
      },
      {
        "label": "Guida",
        "value": "Guida nazionale in lingua inglese per tutto il viaggio, guide tuareg a Djanet"
      }
    ],
    "faqs": [
      {
        "q": "I voli interni sono davvero tutti diretti?",
        "a": "Sì. L'itinerario è studiato apposta attorno ai collegamenti diretti di linea di Air Algérie — incluso il volo settimanale Djanet → Costantina — così da eliminare transiti e coincidenze. Se l'orario invernale dovesse cambiare, riorganizziamo il programma senza costi aggiuntivi e mantenendo tutti i siti previsti."
      },
      {
        "q": "Quanto spazio occupa il deserto in questo viaggio?",
        "a": "Quattro giorni, dal secondo al quinto, nel Tassili n'Ajjer con due notti di campeggio selvaggio nella Tadrart Rouge — una vera spedizione, non una semplice escursione tra le dune. Il resto è l'Algeria romana, ottomana e mozabita, con un ultimo pomeriggio sahariano alle dune di Sebseb."
      },
      {
        "q": "Quattordici giorni sono troppi?",
        "a": "È quello di cui il paese ha bisogno se si vuole vedere sia l'est romano sia il grande sud senza una marcia forzata. Ci sono basi di tre notti a Costantina e Algeri e di due notti a Ghardaïa, quindi il ritmo è intenso ma non frenetico."
      },
      {
        "q": "Su cosa si basa il prezzo?",
        "a": "Su un gruppo di quattro persone che viaggiano insieme, in camera doppia, e comprende tutto quanto elencato ne «La quota comprende» — inclusi tutti e quattro i voli interni. Comunicateci la dimensione del vostro gruppo e le date, e vi confermeremo per iscritto il prezzo esatto a persona."
      },
      {
        "q": "Quando conviene partire?",
        "a": "Da ottobre ad aprile. Il tratto sahariano richiede la stagione fresca, ed è anche il periodo in cui è più piacevole visitare a piedi i siti romani."
      }
    ]
  }
};

export const tourIt = (id: string) => TOURS_IT[id];

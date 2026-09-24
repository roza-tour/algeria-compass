// Italian translations of the 44 question pages in src/content/question/.
//
// The English question collection is the single source of truth for WHICH
// questions exist and what the answer says; this file only carries language.
// Keep the slugs identical to the English ones — they are the join key, and a
// slug that drifts silently drops that question out of this language.
//
// Consumed by the on-site assistant's answer index
// (src/pages/answers-[lang].json.ts). Before this file existed the assistant
// held 462 answers in English and 204 in Italian, so a Italian-speaking
// visitor asking a question the site answers well was handed to WhatsApp
// instead of being answered.

export interface QuestionI18n {
  q: string;
  a: string;
  kf: [string, string][];
}

export const QUESTIONS_IT: Record<string, QuestionI18n> = {
  "are-there-atms-in-algeria": {
    "q": "Ci sono bancomat in Algeria?",
    "a": "Sì, nelle città e nei centri maggiori, ma non fateci affidamento. L'accettazione delle carte Visa e Mastercard estere è discontinua, i limiti giornalieri sono bassi, gli sportelli sono spesso fuori servizio o senza contanti, e viene applicato il cambio ufficiale. Portate il contante che vi serve invece di contare di prelevarlo sul posto.",
    "kf": [
      [
        "Dove",
        "Città e centri maggiori"
      ],
      [
        "Carte estere",
        "Accettazione discontinua"
      ],
      [
        "Limiti",
        "Prelievi giornalieri bassi"
      ],
      [
        "Cambio applicato",
        "Quello ufficiale"
      ]
    ]
  },
  "are-there-domestic-flights-in-algeria": {
    "q": "Ci sono voli interni in Algeria?",
    "a": "Sì, e per il sud sono indispensabili. Air Algérie e Tassili Airlines collegano Algeri con Orano, Costantina, Annaba e le città sahariane, tra cui Djanet, Tamanrasset, Ghardaïa, Timimoun e Adrar. L'aereo è l'unico modo sensato per raggiungere il deserto profondo.",
    "kf": [
      [
        "Compagnie",
        "Air Algérie, Tassili Airlines"
      ],
      [
        "Hub principale",
        "Algeri (ALG)"
      ],
      [
        "Accesso al Sahara",
        "Djanet, Tamanrasset, Ghardaïa, Adrar"
      ],
      [
        "Prenotazione",
        "Per tempo — le rotte del sud sono poche"
      ]
    ]
  },
  "can-i-get-an-algeria-visa-on-arrival": {
    "q": "Si può ottenere il visto algerino all'arrivo?",
    "a": "In generale no. Quasi tutti i visitatori devono ottenere il visto algerino prima di partire, presso un consolato. L'unica eccezione riconosciuta è un viaggio organizzato nel Sahara con ingresso dall'estremo sud (Djanet o Tamanrasset), dove un operatore algerino autorizzato può organizzare l'ingresso del gruppo. Verificate le regole in vigore con il consolato prima di prenotare i voli.",
    "kf": [
      [
        "Regola generale",
        "Visto ottenuto in anticipo"
      ],
      [
        "Eccezione",
        "Viaggi organizzati nell'estremo sud"
      ],
      [
        "Organizzato da",
        "Un operatore algerino autorizzato"
      ],
      [
        "Da confermare con",
        "Il consolato più vicino"
      ]
    ]
  },
  "can-i-use-credit-cards-in-algeria": {
    "q": "Si possono usare le carte di credito in Algeria?",
    "a": "Molto poco. L'Algeria funziona in contanti. Qualche hotel internazionale, ufficio di compagnia aerea e grande esercizio ad Algeri accetta le carte estere, ma ristoranti, negozi, taxi, mercati e biglietterie dei siti quasi mai. Mettete in conto di pagare le spese quotidiane in dinari, in contanti.",
    "kf": [
      [
        "Spese quotidiane",
        "Solo contanti, in dinari"
      ],
      [
        "Carte a volte accettate",
        "Grandi hotel, uffici aerei"
      ],
      [
        "Quasi mai",
        "Taxi, mercati, ristoranti, siti"
      ],
      [
        "Da prevedere",
        "Un viaggio in contanti, carta di riserva"
      ]
    ]
  },
  "can-i-visit-algeria-without-a-tour-guide": {
    "q": "Si può visitare l'Algeria senza guida?",
    "a": "Al nord sì — Algeri, Orano, Costantina, la costa e le città romane si possono percorrere in autonomia. Il Sahara profondo è diverso: l'estremo sud si visita con un operatore autorizzato, una guida e i permessi, e il viaggio indipendente è lì limitato per ragioni di sicurezza.",
    "kf": [
      [
        "Città del nord e costa",
        "Viaggio indipendente possibile"
      ],
      [
        "Siti romani",
        "Viaggio indipendente possibile"
      ],
      [
        "Sahara profondo",
        "Operatore autorizzato + guida + permessi"
      ],
      [
        "Vera difficoltà",
        "Lingua e logistica, non le regole"
      ]
    ]
  },
  "can-tourists-drive-in-algeria": {
    "q": "I turisti possono guidare in Algeria?",
    "a": "Legalmente sì — il noleggio esiste e le patenti estere con permesso internazionale sono accettate — ma per la maggior parte dei visitatori è meglio avere un autista. Le strade del nord sono buone e trafficate, la guida urbana è aggressiva, la segnaletica è in arabo e francese, e l'estremo sud non si può guidare in autonomia.",
    "kf": [
      [
        "Patente",
        "La vostra più il permesso internazionale"
      ],
      [
        "Strade del nord",
        "In genere buone, traffico aggressivo"
      ],
      [
        "Guida notturna",
        "Da evitare sulle strade rurali"
      ],
      [
        "Sahara profondo",
        "Non consentito in autonomia"
      ]
    ]
  },
  "can-vegetarians-eat-well-in-algeria": {
    "q": "I vegetariani mangiano bene in Algeria?",
    "a": "Discretamente bene, con un po' di impegno. La cucina algerina è ricca di legumi, verdure, pane e insalate, e molti piatti base sono senza carne — ma la carne è centrale nell'ospitalità e il concetto di vegetarianismo è poco diffuso. Dite chiaramente che cosa non mangiate invece di usare l'etichetta.",
    "kf": [
      [
        "Naturalmente senza carne",
        "Insalate, legumi, pane, dolci"
      ],
      [
        "Attenzione a",
        "Il brodo di carne in zuppe e couscous"
      ],
      [
        "Vegano",
        "Più difficile — burro, uova e latticini sono comuni"
      ],
      [
        "Approccio migliore",
        "Nominare i cibi, non la dieta"
      ]
    ]
  },
  "can-you-drink-the-tap-water-in-algeria": {
    "q": "Si può bere l'acqua del rubinetto in Algeria?",
    "a": "Meglio di no. L'acqua è trattata nelle città, ma in alcuni punti l'erogazione è intermittente e l'acqua viene conservata in serbatoi sui tetti: ai visitatori si consiglia quindi l'acqua in bottiglia, che costa poco e si trova ovunque. Usatela per bere e per lavarvi i denti, soprattutto fuori dalle grandi città.",
    "kf": [
      [
        "Per bere",
        "Acqua in bottiglia"
      ],
      [
        "Perché",
        "Erogazione intermittente e serbatoi"
      ],
      [
        "Disponibilità",
        "L'acqua in bottiglia costa poco ed è ovunque"
      ],
      [
        "Nel deserto",
        "L'acqua la trasporta il vostro operatore"
      ]
    ]
  },
  "can-you-visit-algeria-during-ramadan": {
    "q": "Si può visitare l'Algeria durante il Ramadan?",
    "a": "Sì, ed è uno dei periodi più suggestivi per venire — ma il ritmo della giornata si rovescia. Molti ristoranti chiudono di giorno, gli orari cambiano e le città si animano dopo il tramonto. Ai visitatori non musulmani non si chiede di digiunare, solo di essere discreti nel mangiare e bere in pubblico.",
    "kf": [
      [
        "Di giorno",
        "Molti ristoranti chiusi, strade più tranquille"
      ],
      [
        "Dopo il tramonto",
        "Le città si animano fino a tardi"
      ],
      [
        "Non vi si chiede di",
        "Digiunare"
      ],
      [
        "Vi si chiede di",
        "Mangiare e bere con discrezione in pubblico"
      ]
    ]
  },
  "do-i-need-a-visa-for-algeria": {
    "q": "Serve il visto per l'Algeria?",
    "a": "La maggior parte delle nazionalità ha bisogno di un visto per visitare l'Algeria, richiesto in anticipo presso un consolato algerino, di solito con una lettera di invito di un tour operator. Alcune formule consentono il visto all'arrivo per i viaggi organizzati nel Sahara dal sud. Verificate sempre le regole in vigore con il consolato algerino più vicino.",
    "kf": [
      [
        "La maggior parte dei viaggiatori",
        "Visto richiesto in anticipo"
      ],
      [
        "Requisito abituale",
        "Invito / prenotazione di hotel o viaggio"
      ],
      [
        "Viaggi nel Sahara",
        "Il visto all'arrivo può applicarsi"
      ],
      [
        "Da confermare con",
        "Il consolato algerino"
      ]
    ]
  },
  "do-i-need-an-invitation-letter-for-an-algeria-visa": {
    "q": "Serve una lettera di invito per il visto algerino?",
    "a": "Nella maggior parte dei casi sì. I consolati algerini vogliono di norma la prova che qualcuno vi attende in Algeria — un invito privato da un ospite, oppure un invito e un programma confermato da un tour operator autorizzato. I turisti senza un contatto personale in Algeria seguono la via dell'operatore.",
    "kf": [
      [
        "Di solito richiesta",
        "Sì, per le domande turistiche"
      ],
      [
        "Via privata",
        "Invito di un ospite in Algeria"
      ],
      [
        "Via turistica",
        "Invito dell'operatore + prenotazione"
      ],
      [
        "Rilasciata da",
        "Un'agenzia algerina autorizzata"
      ]
    ]
  },
  "do-i-need-vaccinations-for-algeria": {
    "q": "Servono vaccinazioni per l'Algeria?",
    "a": "Nessuna vaccinazione è di norma obbligatoria per chi arriva dall'Europa o dal Nord America, anche se il certificato di febbre gialla può essere richiesto se si arriva da un paese endemico. Il consiglio abituale è di essere in regola con i vaccini di routine. Rivolgetevi a un centro di medicina dei viaggi con buon anticipo.",
    "kf": [
      [
        "Obbligatorie",
        "Nessuna per la maggior parte degli arrivi"
      ],
      [
        "Febbre gialla",
        "Solo in arrivo da un paese endemico"
      ],
      [
        "Spesso consigliato",
        "Vaccini di routine aggiornati"
      ],
      [
        "Da confermare con",
        "Un centro viaggi, 6-8 settimane prima"
      ]
    ]
  },
  "do-people-speak-english-in-algeria": {
    "q": "Si parla inglese in Algeria?",
    "a": "Poco. L'arabo e il tamazight sono le lingue ufficiali e il francese è la seconda lingua comune negli affari, nella segnaletica e nell'amministrazione. L'inglese cresce tra i giovani e nel turismo, ma fuori dagli hotel e dalle guide non conviene farci conto. Qualche parola di francese aiuta molto.",
    "kf": [
      [
        "Lingue ufficiali",
        "Arabo e tamazight"
      ],
      [
        "Molto diffuso",
        "Il francese"
      ],
      [
        "Inglese",
        "Limitato ma in crescita tra i giovani"
      ],
      [
        "Consiglio pratico",
        "Imparare qualche frase di francese"
      ]
    ]
  },
  "do-you-tip-in-algeria": {
    "q": "Si lascia la mancia in Algeria?",
    "a": "La mancia è gradita ma non rigidamente attesa, e l'Algeria non ha una cultura della percentuale fissa. Arrotondare il conto, lasciare una banconota piccola per un buon servizio e ringraziare con generosità guide e autisti a fine viaggio rientrano tutti nell'uso locale. Date sempre in dinari, in contanti.",
    "kf": [
      [
        "Ristoranti",
        "Arrotondare, o circa il 5-10%"
      ],
      [
        "Guide e autisti",
        "Una somma più consistente a fine viaggio"
      ],
      [
        "Personale d'albergo",
        "Banconote piccole per un aiuto reale"
      ],
      [
        "Valuta",
        "Dinari, sempre in contanti"
      ]
    ]
  },
  "does-algeria-have-an-evisa": {
    "q": "L'Algeria ha un e-visa?",
    "a": "L'Algeria non ha un e-visa turistico generale online come quelli di Turchia o Kenya. Le domande si presentano su carta presso un'ambasciata o un consolato algerino, anche se alcune sedi offrono ormai la prenotazione dell'appuntamento o la precompilazione online. Diffidate di qualsiasi sito che venda un « e-visa Algeria ».",
    "kf": [
      [
        "E-visa generale",
        "Non disponibile"
      ],
      [
        "Come fare domanda",
        "Di persona al consolato"
      ],
      [
        "Alcuni consolati offrono",
        "Appuntamenti o moduli online"
      ],
      [
        "Attenzione ai",
        "Siti terzi di « e-visa »"
      ]
    ]
  },
  "does-algeria-have-good-internet-and-mobile-coverage": {
    "q": "L'Algeria ha buona copertura internet e mobile?",
    "a": "Al nord sì — il 4G è diffuso nelle città e lungo la fascia popolata, e una SIM locale costa poco e si acquista facilmente con il passaporto. La copertura si dirada rapidamente verso sud, e nel Sahara profondo non c'è segnale, ragione per cui gli operatori portano apparati satellitari.",
    "kf": [
      [
        "Città del nord",
        "Buon 4G, ampiamente disponibile"
      ],
      [
        "SIM locale",
        "Economica; si compra col passaporto"
      ],
      [
        "Operatori",
        "Djezzy, Mobilis, Ooredoo"
      ],
      [
        "Sahara profondo",
        "Nessuna copertura — solo satellitare"
      ]
    ]
  },
  "how-do-you-get-around-in-algeria": {
    "q": "Come ci si sposta in Algeria?",
    "a": "L'Algeria è grande: le lunghe distanze — soprattutto verso il Sahara — si coprono di solito con voli interni, mentre gli spostamenti regionali avvengono su strada. Nei nostri viaggi vi muovete in veicolo privato con autista-guida per tutto il percorso, senza dover affrontare i trasporti pubblici.",
    "kf": [
      [
        "Lunghe distanze",
        "Voli interni (Djanet, Tamanrasset…)"
      ],
      [
        "Regionale",
        "Veicolo privato / strada"
      ],
      [
        "Città",
        "Taxi; Algeri ha metro e tram"
      ],
      [
        "Nei nostri viaggi",
        "Autista-guida privato per tutto il tempo"
      ]
    ]
  },
  "how-do-you-get-from-algiers-airport-to-the-city": {
    "q": "Come si arriva dall'aeroporto di Algeri al centro?",
    "a": "L'aeroporto Houari Boumediene si trova a una ventina di chilometri a est del centro di Algeri, ossia 30-45 minuti di strada a seconda del traffico. Un transfer prenotato in anticipo o l'auto dell'hotel è la soluzione più comoda; ci sono taxi ufficiali e un collegamento in autobus. Concordate la tariffa prima di salire.",
    "kf": [
      [
        "Aeroporto",
        "Houari Boumediene (ALG)"
      ],
      [
        "Distanza",
        "Circa 20 km a est del centro"
      ],
      [
        "Percorso",
        "30-45 minuti secondo il traffico"
      ],
      [
        "Opzione migliore",
        "Transfer prenotato o auto dell'hotel"
      ]
    ]
  },
  "how-long-does-an-algeria-visa-take": {
    "q": "Quanto tempo richiede il visto per l'Algeria?",
    "a": "I tempi variano molto a seconda del consolato e della stagione, da circa due settimane a ben oltre un mese. Presentate la domanda appena il consolato lo consente e non prenotate mai voli non rimborsabili prima di avere il visto sul passaporto. Le domande sono più lente in estate e prima delle grandi festività.",
    "kf": [
      [
        "Intervallo tipico",
        "Da circa 2 settimane a oltre un mese"
      ],
      [
        "Varia per",
        "Consolato, nazionalità, stagione"
      ],
      [
        "Periodi di punta",
        "Estate e festività"
      ],
      [
        "Regola d'oro",
        "Prima il visto, poi i voli"
      ]
    ]
  },
  "how-many-days-do-you-need-in-algeria": {
    "q": "Quanti giorni servono per l'Algeria?",
    "a": "Sette giorni bastano per vedere bene Algeri, la costa romana e un'altra regione. Dieci giorni permettono di aggiungere la valle del M'Zab o l'est romano senza correre. Due settimane servono per unire il nord a una vera spedizione sahariana, perché il deserto da solo assorbe quattro o cinque giorni.",
    "kf": [
      [
        "7 giorni",
        "Algeri, la costa, un'altra regione"
      ],
      [
        "10 giorni",
        "Aggiungere il M'Zab o l'est romano"
      ],
      [
        "14 giorni",
        "Il nord più una vera parte sahariana"
      ],
      [
        "Solo il Sahara",
        "Calcolare 4-5 giorni minimo"
      ]
    ]
  },
  "how-much-cash-should-i-bring-to-algeria": {
    "q": "Quanti contanti portare in Algeria?",
    "a": "Abbastanza per tutto il viaggio, perché non è possibile rifornirsi in modo affidabile. Stimate la spesa quotidiana — pasti, taxi, biglietti, mance, acquisti —, aggiungete un margine comodo e portate il tutto in euro contanti. Tutto ciò che è prepagato — hotel, guide, trasporti in un viaggio organizzato — si sottrae da quel totale.",
    "kf": [
      [
        "Portare",
        "Euro in contanti, banconote integre"
      ],
      [
        "Coprire",
        "Tutto il soggiorno, più un margine"
      ],
      [
        "Escludere",
        "Tutto ciò che è già prepagato"
      ],
      [
        "Dichiarare",
        "Importi sopra la soglia doganale"
      ]
    ]
  },
  "how-much-does-a-trip-to-algeria-cost": {
    "q": "Quanto costa un viaggio in Algeria?",
    "a": "L'Algeria resta accessibile per gli standard europei. Le nostre escursioni private guidate in giornata partono da 30 € a persona, e i viaggi privati di più giorni vanno in genere da circa 200 € a 1.850 € secondo durata, regione e stagione. Le spese sul posto — pasti, trasporti locali, acquisti quotidiani — sono contenute.",
    "kf": [
      [
        "Escursioni in giornata",
        "Da 30 € / persona"
      ],
      [
        "Viaggi privati di più giorni",
        "≈ 200 € - 1.850 €"
      ],
      [
        "Valuta",
        "Dinaro algerino (DZD)"
      ],
      [
        "Mance",
        "Gradite, non obbligatorie"
      ]
    ]
  },
  "is-alcohol-available-in-algeria": {
    "q": "Si trova alcol in Algeria?",
    "a": "L'alcol è legale in Algeria, ma discreto e disponibile a macchia di leopardo. Alcuni hotel, ristoranti autorizzati e negozi specializzati delle grandi città lo vendono; la maggior parte dei ristoranti no, ed è di fatto assente nelle città conservatrici e nell'estremo sud. L'Algeria produce peraltro il proprio vino.",
    "kf": [
      [
        "Stato legale",
        "Legale, ma socialmente discreto"
      ],
      [
        "Dove",
        "Alcuni hotel e locali autorizzati in città"
      ],
      [
        "Dove no",
        "Gran parte dei ristoranti, città conservatrici, estremo sud"
      ],
      [
        "Produzione locale",
        "L'Algeria produce vino"
      ]
    ]
  },
  "is-algeria-a-good-winter-destination": {
    "q": "L'Algeria è una buona meta invernale?",
    "a": "Assolutamente. L'inverno è l'unica stagione in cui si può percorrere il Sahara profondo, le città romane sono fresche e deserte, e la costa settentrionale resta mite. È anche il momento in cui l'Algeria assomiglia meno a un compromesso: giornate calde nel deserto, nessuna folla da nessuna parte e neve sull'Atlante se la volete.",
    "kf": [
      [
        "Sahara",
        "È la stagione — da novembre a febbraio"
      ],
      [
        "Siti romani",
        "Freschi, comodi, deserti"
      ],
      [
        "Costa settentrionale",
        "Mite, più piovosa, verde"
      ],
      [
        "Monti dell'Atlante",
        "Neve vera in quota"
      ]
    ]
  },
  "is-algeria-safe-for-solo-female-travellers": {
    "q": "L'Algeria è sicura per le donne che viaggiano sole?",
    "a": "In generale sì, con la consueta attenzione. Le donne viaggiano sole ad Algeri, Orano, Costantina e sulla costa senza incidenti; il paese è conservatore più che pericoloso. Aspettatevi attenzioni e domande, non minacce; vestitevi in modo sobrio e preferite gli spostamenti interurbani di giorno.",
    "kf": [
      [
        "Città del nord",
        "In genere sicure con la normale prudenza"
      ],
      [
        "Fastidio principale",
        "Sguardi e attenzioni, non criminalità"
      ],
      [
        "Abbigliamento",
        "Sobrio; spalle e ginocchia coperte"
      ],
      [
        "Sahara profondo",
        "Solo in gruppi guidati, per tutti"
      ]
    ]
  },
  "is-algeria-safe": {
    "q": "L'Algeria è sicura da visitare?",
    "a": "Sì — nel 2026 l'Algeria è nel complesso sicura per i turisti. Le grandi città, il nord, la valle del M'Zab e gli itinerari sahariani organizzati sono tranquilli e molto accoglienti. Alcune remote zone di confine dell'estremo sud richiedono permessi e una guida autorizzata, e alcune fasce di frontiera sono chiuse ai visitatori.",
    "kf": [
      [
        "Città e nord",
        "Sicuri per il turismo normale"
      ],
      [
        "Sahara profondo",
        "Guida + permesso obbligatori"
      ],
      [
        "Confini dell'estremo sud",
        "Limitati / vietati"
      ]
    ]
  },
  "is-algeria-worth-visiting": {
    "q": "Vale la pena visitare l'Algeria?",
    "a": "Se cercate luoghi straordinari senza folla, sì. L'Algeria offre città romane che a volte avrete tutte per voi, uno dei grandi deserti del mondo e un'ospitalità autentica — in cambio di una procedura di visto, di un'economia in contanti e di infrastrutture turistiche limitate. Premia i viaggiatori, non i vacanzieri.",
    "kf": [
      [
        "Ideale per",
        "Patrimonio, deserto, cultura, fotografia"
      ],
      [
        "Folla",
        "Quasi assente, anche nei siti UNESCO"
      ],
      [
        "Contropartita",
        "Visto, economia in contanti, infrastrutture scarse"
      ],
      [
        "Poco adatta a",
        "Vacanze balneari in resort"
      ]
    ]
  },
  "is-algiers-safe-to-walk-around": {
    "q": "Si può girare a piedi ad Algeri in sicurezza?",
    "a": "Sì. Il centro di Algeri è una città viva e adatta a camminare, e i visitatori vi si muovono a piedi ogni giorno. I borseggi tra la folla sono la preoccupazione concreta, come in qualsiasi capitale mediterranea. Usate le normali precauzioni con telefono e borsa, e la sera tardi preferite il taxi nei quartieri tranquilli.",
    "kf": [
      [
        "Centro di giorno",
        "Piacevole e animato"
      ],
      [
        "Rischio principale",
        "Borseggi tra la folla"
      ],
      [
        "Sera tardi",
        "Taxi nei quartieri tranquilli"
      ],
      [
        "La Casbah",
        "Meglio esplorarla con una guida"
      ]
    ]
  },
  "is-photography-allowed-in-algeria": {
    "q": "È permesso fotografare in Algeria?",
    "a": "Sì, per la normale fotografia di viaggio. Le eccezioni sono rigide: non fotografate installazioni militari, polizia, edifici governativi, aeroporti o posti di blocco. Chiedete prima di fotografare le persone, in particolare le donne, e mettete in conto che alcuni musei facciano pagare o limitino le macchine fotografiche.",
    "kf": [
      [
        "In generale",
        "Libero per strade e siti"
      ],
      [
        "Mai",
        "Militari, polizia, posti di blocco, aeroporti"
      ],
      [
        "Le persone",
        "Chiedere sempre prima"
      ],
      [
        "Musei",
        "Possono far pagare o limitare"
      ]
    ]
  },
  "is-the-algerian-sahara-safe": {
    "q": "Il Sahara algerino è sicuro?",
    "a": "Sì, quando lo si percorre come si deve — con un operatore autorizzato, una guida esperta, veri 4x4, acqua, comunicazioni e permessi, su itinerari consentiti. I rischi veri sono il caldo, la disidratazione, l'orientamento e l'isolamento, non la criminalità. È il deserto improvvisato in autonomia a essere pericoloso, ed è regolamentato.",
    "kf": [
      [
        "Rischi veri",
        "Caldo, disidratazione, orientamento, isolamento"
      ],
      [
        "Non è il rischio",
        "La criminalità verso i visitatori"
      ],
      [
        "Obbligatorio",
        "Operatore autorizzato, guida, permessi"
      ],
      [
        "Stagione migliore",
        "Da novembre a febbraio"
      ]
    ]
  },
  "is-the-food-in-algeria-halal": {
    "q": "Il cibo in Algeria è halal?",
    "a": "Praticamente tutto. L'Algeria è un paese a larghissima maggioranza musulmana e la carne venduta e servita è halal per impostazione, senza bisogno di cercare ristoranti certificati. Il maiale è sostanzialmente assente dall'offerta alimentare, salvo qualche negozio specializzato per residenti stranieri.",
    "kf": [
      [
        "Carne",
        "Halal per impostazione in tutto il paese"
      ],
      [
        "Maiale",
        "Di fatto assente"
      ],
      [
        "Certificazione",
        "Non serve cercarla"
      ],
      [
        "Alcol",
        "Questione a parte — legale ma discreto"
      ]
    ]
  },
  "is-there-a-train-network-in-algeria": {
    "q": "C'è una rete ferroviaria in Algeria?",
    "a": "Sì, al nord. La SNTF gestisce collegamenti lungo il corridoio costiero e interno che unisce Algeri a Orano, Costantina, Annaba e alle località intermedie, con treni moderni e confortevoli su alcune linee. Non esiste una rete ferroviaria verso il Sahara profondo, che si raggiunge in aereo.",
    "kf": [
      [
        "Operatore",
        "SNTF, le ferrovie nazionali"
      ],
      [
        "Copertura",
        "Solo il corridoio settentrionale"
      ],
      [
        "Linee principali",
        "Algeri-Orano, Algeri-Costantina"
      ],
      [
        "Estremo sud",
        "Niente treni — si vola"
      ]
    ]
  },
  "what-are-algerias-unesco-world-heritage-sites": {
    "q": "Quali sono i siti UNESCO dell'Algeria?",
    "a": "L'Algeria ha sette siti iscritti al patrimonio mondiale UNESCO: la Qal'a dei Beni Hammad, il Tassili n'Ajjer, la valle del M'Zab, Djémila, Tipasa, Timgad e la Casbah di Algeri. Sei sono siti culturali, e il Tassili n'Ajjer è iscritto sia per la cultura sia per la natura.",
    "kf": [
      [
        "Numero di siti",
        "7"
      ],
      [
        "Città romane",
        "Djémila, Tipasa, Timgad"
      ],
      [
        "Sahara",
        "Tassili n'Ajjer (misto), valle del M'Zab"
      ],
      [
        "Islamico / urbano",
        "Beni Hammad, Casbah di Algeri"
      ]
    ]
  },
  "what-are-the-customs-and-etiquette-in-algeria": {
    "q": "Quali sono le usanze e le buone maniere in Algeria?",
    "a": "Salutate prima di ogni altra cosa, accettate il tè quando ve lo offrono, vestitevi in modo sobrio, usate la mano destra per mangiare e per dare, togliete le scarpe entrando in casa e chiedete prima di fotografare le persone. L'ospitalità è centrale, e rifiutarla con troppa fermezza suona come un rifiuto.",
    "kf": [
      [
        "Saluto",
        "Salutare sempre prima di chiedere"
      ],
      [
        "Ospitalità",
        "Accettate il tè — conta"
      ],
      [
        "Case",
        "Togliersi le scarpe sulla porta"
      ],
      [
        "Mano destra",
        "Per mangiare, dare e ricevere"
      ]
    ]
  },
  "what-currency-does-algeria-use": {
    "q": "Quale valuta si usa in Algeria?",
    "a": "L'Algeria usa il dinaro algerino (DZD). È una valuta chiusa: non si può realisticamente comprarla o venderla fuori dal paese, quindi si arriva con contanti in euro o dollari e li si cambia in Algeria. Esiste un tasso bancario ufficiale e un tasso parallelo molto usato, e il divario tra i due è ampio.",
    "kf": [
      [
        "Valuta",
        "Dinaro algerino (DZD)"
      ],
      [
        "Disponibilità all'estero",
        "Praticamente nulla — valuta chiusa"
      ],
      [
        "Da portare",
        "Euro o dollari in contanti"
      ],
      [
        "Due tassi",
        "Ufficiale bancario e mercato parallelo"
      ]
    ]
  },
  "what-is-algeria-famous-for": {
    "q": "Per cosa è famosa l'Algeria?",
    "a": "L'Algeria è il paese più grande d'Africa ed è nota per il Sahara che ne occupa quattro quinti, per alcune delle città romane meglio conservate al mondo, per i suoi sette siti del patrimonio mondiale UNESCO, per l'arte rupestre preistorica del Tassili n'Ajjer, la cultura amazigh, la musica raï e il couscous.",
    "kf": [
      [
        "Superficie",
        "Il paese più grande d'Africa"
      ],
      [
        "Siti UNESCO",
        "Sette"
      ],
      [
        "Eredità romana",
        "Timgad, Djémila, Tipaza"
      ],
      [
        "Sahara",
        "Quattro quinti del paese"
      ]
    ]
  },
  "what-is-the-best-month-to-visit-the-algerian-sahara": {
    "q": "Qual è il mese migliore per il Sahara algerino?",
    "a": "Da novembre a febbraio. Le giornate sono calde e limpide, le notti abbastanza fredde da accendere un fuoco, e la luce è al suo meglio per la fotografia. Dicembre e gennaio sono il cuore della stagione. Da fine primavera il deserto diventa pericolosamente caldo e le spedizioni si fermano.",
    "kf": [
      [
        "Finestra migliore",
        "Da novembre a febbraio"
      ],
      [
        "Cuore della stagione",
        "Dicembre e gennaio"
      ],
      [
        "Le notti",
        "Fredde — portate strati veri"
      ],
      [
        "Da evitare",
        "Da maggio a settembre"
      ]
    ]
  },
  "what-is-the-most-beautiful-place-in-algeria": {
    "q": "Qual è il posto più bello dell'Algeria?",
    "a": "Non c'è una risposta sola, ma la rosa dei nomi torna sempre: il Tassili n'Ajjer e il Tadrart nel Sahara profondo, le città ocra arroccate della valle del M'Zab, Djémila e Timgad tra le città romane, la costa cabila intorno a Béjaïa, e Costantina sulle sue gole.",
    "kf": [
      [
        "Sahara profondo",
        "Il Tassili n'Ajjer e il Tadrart"
      ],
      [
        "Architettura",
        "La valle del M'Zab"
      ],
      [
        "Romano",
        "Djémila e Timgad"
      ],
      [
        "Costa e città",
        "Béjaïa e Costantina"
      ]
    ]
  },
  "what-is-the-national-dish-of-algeria": {
    "q": "Qual è il piatto nazionale dell'Algeria?",
    "a": "Il couscous. Semola cotta al vapore servita con un brodo di verdure e carne, è il piatto del venerdì, quello delle feste e quello di tutti i giorni in tutto il paese. L'UNESCO ha iscritto i saperi e le pratiche legate al couscous nel patrimonio immateriale condiviso da Algeria, Marocco, Tunisia e Mauritania.",
    "kf": [
      [
        "Piatto nazionale",
        "Il couscous"
      ],
      [
        "Tradizionalmente si mangia",
        "Il venerdì e nelle feste"
      ],
      [
        "UNESCO",
        "Iscritto come patrimonio maghrebino condiviso"
      ],
      [
        "Varianti regionali",
        "Ogni regione ha la sua"
      ]
    ]
  },
  "what-languages-are-spoken-in-algeria": {
    "q": "Che lingue si parlano in Algeria?",
    "a": "Le lingue ufficiali dell'Algeria sono l'arabo e il tamazight (berbero). La maggior parte degli algerini parla l'arabo algerino (darija) ogni giorno, il tamazight è molto diffuso in regioni come la Cabilia, e il francese è largamente usato negli affari, nei media e nell'istruzione. L'inglese cresce tra i giovani.",
    "kf": [
      [
        "Ufficiali",
        "Arabo, tamazight (berbero)"
      ],
      [
        "Quotidiano",
        "Arabo algerino (darija)"
      ],
      [
        "Molto usato",
        "Il francese"
      ],
      [
        "In crescita",
        "L'inglese"
      ]
    ]
  },
  "what-power-plugs-are-used-in-algeria": {
    "q": "Che prese elettriche si usano in Algeria?",
    "a": "L'Algeria usa le prese europee a due spinotti tondi, tipi C ed F, a 230 volt e 50 Hz. Chi arriva da Regno Unito, Stati Uniti, Australia o Giappone ha bisogno di un adattatore; la maggior parte dei visitatori europei no. Gli apparecchi statunitensi e giapponesi possono richiedere anche un convertitore di tensione se non sono bi-tensione.",
    "kf": [
      [
        "Tipi di presa",
        "C ed F (due spinotti tondi)"
      ],
      [
        "Tensione",
        "230 V, 50 Hz"
      ],
      [
        "Visitatori UK/US/AU",
        "Serve un adattatore"
      ],
      [
        "Campi nel deserto",
        "Portate un power bank — niente rete"
      ]
    ]
  },
  "what-should-women-wear-in-algeria": {
    "q": "Come devono vestirsi le donne in Algeria?",
    "a": "In modo sobrio e comodo. Spalle e ginocchia coperte è lo standard pratico — pantaloni ampi o gonna lunga con un top che copra la parte alta delle braccia. Il foulard non è richiesto, salvo all'interno delle moschee, ma averne uno con sé è utile. Le città sono più rilassate dei piccoli centri.",
    "kf": [
      [
        "Standard",
        "Spalle e ginocchia coperte"
      ],
      [
        "Foulard",
        "Richiesto solo nelle moschee"
      ],
      [
        "Città e piccoli centri",
        "Algeri e Orano sono più rilassate"
      ],
      [
        "Sahara",
        "Strati lunghi e ampi, più protezione dal sole"
      ]
    ]
  },
  "when-is-the-best-time-to-visit-algeria": {
    "q": "Qual è il periodo migliore per visitare l'Algeria?",
    "a": "Il periodo complessivamente migliore per l'Algeria va dall'autunno alla primavera — grosso modo da ottobre ad aprile — quando le temperature sono gradevoli in tutto il nord e nel Sahara. Il Sahara profondo si visita al meglio da ottobre a marzo; la piena estate (giugno-agosto) è molto calda al sud, ma ottima sulla costa mediterranea.",
    "kf": [
      [
        "Migliore in assoluto",
        "Ottobre – aprile"
      ],
      [
        "Sahara / deserto",
        "Ottobre – marzo"
      ],
      [
        "Costa e città",
        "Primavera e autunno ideali; estate calda"
      ],
      [
        "Da evitare per il deserto",
        "Giugno – agosto (caldo estremo)"
      ]
    ]
  },
  "which-parts-of-algeria-should-tourists-avoid": {
    "q": "Quali zone dell'Algeria dovrebbero evitare i turisti?",
    "a": "Le aree oggetto di avvisi sono le remote fasce di confine con Mali, Niger e Libia, e alcune zone di deserto lontano fuori dagli itinerari consolidati. Le città del nord, la costa, l'est romano, la Cabilia e i circuiti sahariani organizzati non rientrano in quell'elenco. Consultate l'avviso aggiornato del vostro governo prima di partire.",
    "kf": [
      [
        "Sconsigliato",
        "Fasce di confine con Mali, Niger e Libia"
      ],
      [
        "Limitato",
        "Deserto remoto fuori dalle rotte stabilite"
      ],
      [
        "Non limitato",
        "Nord, costa, est romano, M'Zab"
      ],
      [
        "Da verificare",
        "L'avviso aggiornato del vostro governo"
      ]
    ]
  }
};

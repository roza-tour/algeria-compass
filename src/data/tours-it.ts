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
  itinerary?: { day: number; title: string; body: string }[];
  includes?: string[];
  excludes?: string[];
  goodToKnow?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
  seoTitle?: string;
  seoDescription?: string;
}

export const TOURS_IT: Record<string, TourIt> = {

  'djanet-sahara-safari': {
    title: 'Safari nel Sahara a Djanet — 5 giorni nel Tadrart Rosso',
    duration: '5 giorni · 4 notti',
    hook: 'Cinque giorni nel cuore del Sahara algerino attorno a Djanet — arenaria rossa del Tadrart, dune dorate, arte rupestre preistorica e notti sotto le stelle.',
    full: true,
    seoTitle: 'Viaggio Sahara Djanet 5 giorni — Tadrart Rosso',
    seoDescription: 'Viaggio privato di 5 giorni nel Sahara algerino da Djanet: Tadrart Rosso, dune, arte rupestre e campo tendato, con una squadra tuareg locale.',
    overview: "È il Sahara come si immagina ma si vede di rado: il Tadrart Rosso, un labirinto di arenaria arancione scolpita dal vento, archi naturali, canyon e dune che si appoggiano alla roccia nera. Da Djanet, oasi tuareg del sud-est algerino, si parte in 4×4 con una squadra locale per quattro notti di campo. Le giornate alternano piste, brevi camminate verso siti di arte rupestre vecchi di millenni e lunghe soste fotografiche nella luce della sera. Le notti si passano al campo, attorno al fuoco e al tè, senza luci e senza rete.",
    highlights: [
      'Il Tadrart Rosso e i suoi canyon di arenaria arancione',
      "Siti di arte rupestre preistorica del Tassili n'Ajjer",
      'Le grandi dune del Sahara algerino al tramonto',
      'Quattro notti di campo sotto un cielo senza inquinamento luminoso',
      'Una squadra tuareg locale: autista, guida e cuoco',
      'Pensione completa e attrezzatura da campo incluse',
    ],
    itinerary: [
      { day: 1, title: 'Arrivo e ingresso nel deserto', body: 'Incontro con la squadra a Djanet, poi partenza in 4×4 verso il deserto. Tramonto sulle dune e prima notte al campo.' },
      { day: 2, title: 'Il Tadrart Rosso', body: "Attraversamento delle valli di roccia rossa e sabbia del Tadrart, con soste fotografiche, fino al tramonto e alla notte al campo." },
      { day: 3, title: 'Archi, incisioni e grandi dune', body: 'Giornata tra archi naturali, siti di arte rupestre e cordoni dunali, seguendo la luce e le scoperte.' },
      { day: 4, title: 'Rientro verso Djanet', body: "Ultima mattina nel deserto e rientro verso l'oasi, con un ultimo campo o una notte a Djanet." },
      { day: 5, title: 'Partenza', body: "Tempo libero a Djanet secondo l'orario del volo, poi trasferimento in aeroporto." },
    ],
    includes: ['Accoglienza e trasferimenti a Djanet', '4×4 per tutto il viaggio', 'Autista esperto del deserto', 'Guida tuareg locale', 'Pensione completa', 'Attrezzatura da campo', 'Acqua in bottiglia'],
    excludes: ['Voli internazionali e interni', 'Costi del visto', 'Assicurazione di viaggio', 'Bevande oltre all\'acqua', 'Mance'],
    goodToKnow: [
      { label: 'Stagione', value: 'Solo da novembre a febbraio' },
      { label: 'Notti', value: 'Fredde — servono strati veri' },
      { label: 'Rete telefonica', value: 'Assente nel deserto' },
      { label: 'Accesso', value: 'Volo Algeri–Djanet, poi 4×4' },
    ],
    faqs: [
      { q: 'Quando è possibile questo viaggio?', a: 'Da novembre a febbraio. Fuori stagione il caldo rende le spedizioni nel grande sud pericolose e non vengono organizzate.' },
      { q: 'Come si arriva a Djanet?', a: 'In aereo da Algeri, con Air Algérie o Tassili Airlines. I voli verso sud sono pochi: conviene prenotare presto, soprattutto in stagione.' },
      { q: 'Dove si dorme?', a: 'In campo tendato nel deserto, con tende, materassini e coperte forniti. È confortevole ma essenziale: niente elettricità, niente docce, niente rete.' },
      { q: 'Serve una buona preparazione fisica?', a: 'No. Ci si sposta in 4×4, con brevi camminate su sabbia e roccia. Serve piuttosto sopportare giornate lunghe e notti fredde.' },
    ],
  },

  'ghardaia-guided-tour': {
    title: "Ghardaïa — 3 giorni nella valle del M'Zab",
    duration: '3 giorni · 2 notti',
    hook: "Tre giorni nella valle del M'Zab — le città fortificate di Ghardaïa e Beni Isguen, le foggara, i palmeti e una serata in 4×4 nel deserto.",
    full: true,
    seoTitle: "Viaggio Ghardaïa 3 giorni — Valle del M'Zab",
    seoDescription: "Viaggio privato di 3 giorni a Ghardaïa e nella valle del M'Zab, patrimonio UNESCO: le cinque città ibadite, le foggara, i palmeti e una serata nel deserto.",
    overview: "La valle del M'Zab è uno degli insiemi urbani più notevoli del mondo islamico: cinque città fortificate costruite dall'XI secolo dalla comunità ibadita mozabita, impilate in ocra, bianco e blu su colline del Sahara. La loro logica costruttiva — moschea in cima, case in cerchi concentrici, palmeto in basso, sistema idrico condiviso — affascinò Le Corbusier al punto da farlo tornare più volte. Tre giorni bastano per capire il luogo dall'interno, con una guida che ne conosce usi e regole.",
    highlights: [
      'Ghardaïa e il suo mercato ad anfiteatro',
      'Beni Isguen, la città santa, visitata con guida locale',
      "Le foggara, sistema millenario di condivisione dell'acqua",
      'I palmeti e le case estive mozabite',
      'Una serata in 4×4 nel deserto sotto le stelle',
      "Artigianato del M'Zab: tappeti, lana e rame",
    ],
    itinerary: [
      { day: 1, title: 'Arrivo a Ghardaïa', body: 'Accoglienza e sistemazione, poi primo approccio a Ghardaïa: i vicoli in pendenza, la piazza del mercato e il panorama sulla valle al tramonto.' },
      { day: 2, title: "Le città del M'Zab", body: 'Giornata tra Beni Isguen, El Atteuf e Melika: moschee, mura, cimiteri e palmeti, con le spiegazioni di una guida mozabita.' },
      { day: 3, title: 'Palmeti, foggara e deserto', body: 'Mattina nei giardini e nel sistema idrico della valle, poi uscita in 4×4 nel deserto prima della partenza.' },
    ],
    includes: ['Trasferimenti aeroportuali a Ghardaïa', 'Sistemazione 2 notti', 'Guida privata autorizzata', 'Guida locale per Beni Isguen', 'Trasporto privato', 'Uscita 4×4 nel deserto', 'Colazioni'],
    excludes: ['Voli', 'Costi del visto', 'Assicurazione di viaggio', 'Pranzi e cene', 'Mance'],
    goodToKnow: [
      { label: 'Stagione', value: 'Da ottobre ad aprile' },
      { label: 'Abbigliamento', value: 'Valle conservatrice — abiti coprenti' },
      { label: 'Fotografia', value: 'Limitata a Beni Isguen — segui la guida' },
      { label: 'Accesso', value: 'Volo Algeri–Ghardaïa, circa 1 h' },
    ],
    faqs: [
      { q: "Perché la valle del M'Zab è patrimonio UNESCO?", a: "Per la coerenza eccezionale del suo urbanismo: cinque città dell'XI secolo progettate come un sistema completo — difesa, abitato, acqua, palmeto — ancora abitato e funzionante." },
      { q: 'Si può visitare Beni Isguen liberamente?', a: 'No. La città santa si visita con una guida locale incaricata, a orari precisi, e la fotografia è limitata. È una regola della comunità, non una formalità turistica.' },
      { q: 'Come si arriva a Ghardaïa?', a: 'Il modo più semplice è il volo da Algeri, circa un\'ora. La strada è possibile ma lunga: serve una giornata intera.' },
      { q: 'Che abbigliamento serve?', a: 'Coprente per tutti: spalle e ginocchia coperte, abiti ampi. La valle è nettamente più conservatrice della costa.' },
    ],
  },

  'algeria-cultural-tour': {
    title: 'Viaggio culturale in Algeria — 5 giorni',
    duration: '5 giorni · 4 notti',
    hook: "Cinque giorni nel cuore dell'Algeria — la Casbah di Algeri patrimonio UNESCO, la costa romana di Tipaza e la valle del M'Zab, con guida privata autorizzata.",
    full: true,
    seoTitle: "Viaggio culturale Algeria 5 giorni — Algeri, Tipaza, M'Zab",
    seoDescription: "Viaggio privato di 5 giorni in Algeria: la Casbah di Algeri, le rovine romane di Tipaza e Cherchell e la valle del M'Zab, con guida autorizzata.",
    overview: "È l'Algeria in miniatura: la capitale bianca, la costa romana e il deserto, in cinque giorni senza corse. Si percorre la Casbah di Algeri, iscritta all'UNESCO, poi si segue il Mediterraneo fino alle rovine di Tipaza e al museo di Cherchell, prima di raggiungere Ghardaïa in aereo per entrare nella valle del M'Zab — cinque città-oasi fortificate costruite mille anni fa dai mozabiti ibaditi. Costa, cultura e Sahara, con guida privata e vera cucina algerina lungo la strada.",
    highlights: [
      'La Casbah di Algeri, patrimonio mondiale UNESCO',
      'Tipaza, città romana in riva al Mediterraneo',
      'Il museo archeologico di Cherchell',
      "La valle del M'Zab e le sue cinque città ibadite",
      'Guida privata autorizzata per tutto il soggiorno',
      'Cucina algerina quotidiana, lontano dai menù turistici',
    ],
    itinerary: [
      { day: 1, title: 'Arrivo ad Algeri', body: "Accoglienza all'aeroporto Houari Boumediene e sistemazione. Prima scoperta della baia e del lungomare." },
      { day: 2, title: 'Algeri e la Casbah', body: 'Giornata nella capitale: la Casbah, i viali coloniali, la Grande Moschea e i panorami sulla baia.' },
      { day: 3, title: 'Tipaza e Cherchell', body: 'Verso ovest lungo la costa: le rovine romane di Tipaza sul mare, il Mausoleo reale di Mauretania e il museo di Cherchell.' },
      { day: 4, title: "Volo per Ghardaïa e il M'Zab", body: "Volo verso sud e ingresso nella valle del M'Zab: Ghardaïa, il suo mercato e i vicoli ad anfiteatro." },
      { day: 5, title: 'Beni Isguen e partenza', body: 'Visita della città santa di Beni Isguen con guida locale, poi rientro e partenza.' },
    ],
    includes: ['Tutti i trasferimenti', 'Sistemazione 4 notti', 'Guida privata autorizzata', 'Trasporto privato', 'Ingressi ai siti', 'Colazioni'],
    excludes: ['Voli internazionali', 'Volo interno Algeri–Ghardaïa', 'Costi del visto', 'Assicurazione di viaggio', 'Pranzi e cene', 'Mance'],
    goodToKnow: [
      { label: 'Stagione', value: 'Da ottobre ad aprile' },
      { label: 'Ritmo', value: 'Moderato, con tempo su ogni sito' },
      { label: 'Abbigliamento', value: "Coprente nel M'Zab" },
      { label: 'Partenza', value: 'Algeri — aeroporto Houari Boumediene' },
    ],
    faqs: [
      { q: 'È adatto a una prima visita?', a: "Sì, è il formato migliore per un primo viaggio: dà i tre volti del paese — capitale, eredità romana e Sahara — senza distanze eccessive." },
      { q: 'Il volo interno è incluso?', a: 'No, si prenota separatamente. Ce ne occupiamo noi e indichiamo gli orari compatibili con il programma.' },
      { q: 'Serve il visto?', a: "Sì, per quasi tutte le nazionalità, da ottenere prima della partenza presso un consolato algerino. Forniamo l'invito e il programma confermato richiesti." },
      { q: 'Il viaggio si può adattare?', a: 'Sì. Tutti i nostri viaggi sono privati: durata, ritmo e tappe si adattano al vostro calendario.' },
    ],
  },

  'timimoun-desert-escape': {
    title: "Timimoun — 5 giorni nell'oasi rossa del Gourara",
    duration: '5 giorni · 4 notti',
    hook: "Cinque giorni nell'oasi rossa di Timimoun — ksour e palmeti, antiche foggara, grandi dune e una notte al campo nel deserto.",
    full: true,
    seoTitle: 'Viaggio Timimoun 5 giorni — Oasi rossa del Gourara',
    seoDescription: "Viaggio privato di 5 giorni a Timimoun, l'oasi rossa del Gourara: architettura sudanese, ksour, foggara, palmeti, grandi dune e campo nel deserto.",
    overview: "Timimoun merita il soprannome di oasi rossa: l'architettura è in terra cruda ocra, di stile sudanese, e la città domina una sebkha e un palmeto immenso. Attorno, il Gourara allinea decine di ksour, villaggi fortificati collegati da foggara — gallerie drenanti scavate a mano che portano l'acqua dalla falda. È una regione di oasi abitate più che di deserto vuoto, e questa è la sua ricchezza. Il viaggio alterna villaggi, giardini, arte di vivere sahariana e uscite tra le dune del Grande Erg Occidentale.",
    highlights: [
      "Timimoun e la sua architettura rossa di stile sudanese",
      'I ksour del Gourara e i loro vicoli coperti',
      'Le foggara, patrimonio idraulico vivo',
      'Le grandi dune del Grande Erg Occidentale',
      "L'Ahellil, poesia cantata iscritta all'UNESCO",
      'Una notte in tenda al campo nel deserto',
    ],
    itinerary: [
      { day: 1, title: 'Arrivo a Timimoun', body: 'Accoglienza e sistemazione, primo giro della città rossa e tramonto sul palmeto e sulla sebkha.' },
      { day: 2, title: 'I ksour del Gourara', body: "Giornata nei villaggi fortificati attorno all'oasi: vicoli coperti, moschee di terra e vita dei giardini." },
      { day: 3, title: 'Foggara e palmeti', body: 'Scoperta del sistema delle foggara e dei giardini che irrigano, con gli uomini che ancora le mantengono.' },
      { day: 4, title: 'Il Grande Erg e il campo', body: 'Uscita in 4×4 verso le grandi dune, tramonto e notte al campo nel deserto.' },
      { day: 5, title: 'Partenza', body: 'Rientro a Timimoun e trasferimento in aeroporto.' },
    ],
    includes: ['Trasferimenti aeroportuali', 'Sistemazione 4 notti', 'Guida privata autorizzata', 'Trasporto 4×4', 'Uscita tra le dune e campo', 'Colazioni'],
    excludes: ['Voli', 'Costi del visto', 'Assicurazione di viaggio', 'Pranzi e cene', 'Mance'],
    goodToKnow: [
      { label: 'Stagione', value: 'Da ottobre ad aprile' },
      { label: 'Notti', value: "Fresche d'inverno — servono strati" },
      { label: 'Ritmo', value: 'Rilassato, con spostamenti brevi' },
      { label: 'Accesso', value: 'Volo da Algeri' },
    ],
    faqs: [
      { q: "Che cos'è una foggara?", a: "Una galleria sotterranea scavata a mano che porta l'acqua dalla falda ai giardini per semplice gravità, e poi la ripartisce tra le famiglie secondo una divisione codificata da secoli." },
      { q: 'Perché Timimoun è rossa?', a: 'Le costruzioni sono in terra cruda impastata con paglia, di una tinta ocra-rossa caratteristica, in uno stile detto sudanese diffuso dal Sahel al Sahara.' },
      { q: "Che cos'è l'Ahellil?", a: "Una poesia cantata collettiva del Gourara, iscritta dall'UNESCO nel patrimonio culturale immateriale dell'umanità nel 2008." },
      { q: 'È adatto alle famiglie?', a: 'Sì. Il ritmo è dolce, le distanze brevi e l\'ospitalità delle oasi rende il viaggio facile con ragazzi.' },
    ],
  },

  'algeria-tour': {
    title: 'Algeria completa — grande viaggio di 10 giorni',
    duration: '10 giorni · 9 notti',
    hook: "Dieci giorni attraverso l'Algeria — Algeri e la Casbah, la costa romana, l'est e le sue città antiche, e il Sahara. Il giro completo del paese.",
    full: true,
    seoTitle: 'Gran tour Algeria 10 giorni — Nord, Est e Sahara',
    seoDescription: "Gran tour privato di 10 giorni in Algeria: Algeri, la costa romana di Tipaza, Costantina e l'est antico, poi il Sahara. Guida autorizzata.",
    overview: "Dieci giorni è la prima durata che permette di collegare il nord e il deserto senza liquidarli in fretta. Questo grande itinerario parte da Algeri e dalla sua Casbah, segue la costa romana fino a Tipaza e Cherchell, risale verso est e le sue città antiche — Djémila, Timgad — e la città dei ponti di Costantina, poi scende a sud per l'esperienza sahariana. È il formato che consigliamo a chi viene da lontano e non tornerà presto.",
    highlights: [
      'La Casbah di Algeri e la baia',
      'Tipaza e Cherchell, la costa romana',
      'Djémila e Timgad, città romane UNESCO',
      'Costantina, la città dei ponti sulle sue gole',
      'Una tappa sahariana completa',
      "Guida privata autorizzata dal primo all'ultimo giorno",
    ],
    itinerary: [
      { day: 1, title: 'Arrivo ad Algeri', body: 'Accoglienza e sistemazione nella capitale, primo contatto con la baia e il lungomare.' },
      { day: 2, title: 'Algeri e la Casbah', body: 'La Casbah UNESCO, i viali coloniali, la Grande Moschea e i musei.' },
      { day: 3, title: 'Tipaza e Cherchell', body: 'La costa romana a ovest di Algeri: rovine sul mare, mausoleo reale e museo di Cherchell.' },
      { day: 4, title: 'Verso est', body: "Strada verso l'est del paese attraverso gli altipiani, tra i paesaggi della Cabilia e le pianure cerealicole." },
      { day: 5, title: 'Djémila', body: "La città romana di Djémila nel suo anfiteatro di colline — uno dei siti meglio conservati del Nord Africa." },
      { day: 6, title: 'Costantina', body: 'La città dei ponti: le gole del Rhumel, il palazzo Ahmed Bey, il museo di Cirta e la città vecchia.' },
      { day: 7, title: 'Timgad', body: 'Timgad, colonia romana fondata da Traiano e la città a scacchiera più completa che sopravviva.' },
      { day: 8, title: 'Verso il Sahara', body: 'Discesa a sud e ingresso nel mondo delle oasi.' },
      { day: 9, title: 'Giornata sahariana', body: 'Palmeti, ksour e dune, con una serata nel deserto.' },
      { day: 10, title: 'Rientro e partenza', body: 'Rientro verso Algeri e trasferimento in aeroporto.' },
    ],
    includes: ['Tutti i trasferimenti', 'Sistemazione 9 notti', 'Guida privata autorizzata', 'Trasporto privato', 'Ingressi ai siti', 'Colazioni'],
    excludes: ['Voli internazionali e interni', 'Costi del visto', 'Assicurazione di viaggio', 'Pranzi e cene', 'Mance'],
    goodToKnow: [
      { label: 'Stagione', value: 'Da ottobre ad aprile' },
      { label: 'Ritmo', value: 'Intenso ma realistico' },
      { label: 'Distanze', value: 'Lunghe — previsto un volo interno' },
      { label: 'Partenza', value: 'Algeri' },
    ],
    faqs: [
      { q: "Dieci giorni bastano per vedere l'Algeria?", a: "Per l'essenziale, sì. È la prima durata che permette di unire il nord e un vero passaggio nel Sahara senza passare le giornate in strada." },
      { q: 'Si viaggia molto su strada?', a: "L'Algeria è il paese più grande d'Africa e le distanze sono reali. Il programma include un volo interno per evitare i tragitti più lunghi." },
      { q: 'Il viaggio è privato?', a: 'Sì, interamente: la vostra guida, il vostro veicolo, il vostro ritmo. Nulla è condiviso con altri gruppi.' },
      { q: 'Si può partire in due?', a: 'Sì. La maggior parte delle nostre partenze è in coppia o in piccolo gruppo familiare.' },
    ],
  },

  'algeria-through-time-and-tradition': {
    title: 'Algeria romana — Tipaza, Djémila e Timgad (3 giorni)',
    duration: '3 giorni · 2 notti',
    hook: "Tre giorni tra la più bella eredità romana dell'Algeria — le rovine sul mare di Tipaza e Cherchell, Djémila sulle colline e la scacchiera di Timgad.",
    full: true,
    seoTitle: 'Algeria romana 3 giorni — Tipaza, Djémila, Timgad',
    seoDescription: "Viaggio privato di 3 giorni tra le città romane dell'Algeria: Tipaza e Cherchell sul mare, Djémila tra le colline e Timgad.",
    overview: "L'Algeria conserva le città romane meglio preservate del mondo mediterraneo, proprio perché il turismo di massa non è mai arrivato. In tre giorni questo itinerario collega le tre più belle: Tipaza, affacciata sulla riva, con il Mausoleo reale di Mauretania sopra; Djémila, in un anfiteatro di colline dell'est, il cui foro e i cui mosaici sono di rara conservazione; e Timgad, colonia fondata da Traiano attorno al 100 d.C., la città a scacchiera più completa che sopravviva, con il suo arco, il teatro e la biblioteca.",
    highlights: [
      'Tipaza, città romana sul Mediterraneo',
      'Il Mausoleo reale di Mauretania',
      'Il museo archeologico di Cherchell',
      'Djémila e il suo foro tra le colline',
      'Timgad, l\'arco di Traiano e la biblioteca',
      'Siti spesso deserti, anche in piena stagione',
    ],
    itinerary: [
      { day: 1, title: 'Tipaza e Cherchell', body: 'Partenza da Algeri verso la costa ovest: le rovine di Tipaza sul mare, il Mausoleo reale e il museo di Cherchell.' },
      { day: 2, title: 'Djémila', body: 'Strada verso est e giornata a Djémila: il foro, i templi, le case e i mosaici del museo.' },
      { day: 3, title: 'Timgad', body: 'Timgad e la sua scacchiera intatta: arco di Traiano, teatro, terme e biblioteca, prima del rientro.' },
    ],
    includes: ['Trasferimenti', 'Sistemazione 2 notti', 'Guida privata autorizzata', 'Trasporto privato', 'Ingressi ai siti', 'Colazioni'],
    excludes: ['Voli', 'Costi del visto', 'Assicurazione di viaggio', 'Pranzi e cene', 'Mance'],
    goodToKnow: [
      { label: 'Stagione', value: 'Marzo–giugno, settembre–novembre' },
      { label: 'Camminate', value: 'Siti estesi — scarpe adatte' },
      { label: 'Ombra', value: 'Scarsa — cappello e acqua' },
      { label: 'Partenza', value: 'Algeri' },
    ],
    faqs: [
      { q: 'Qual è la più impressionante delle tre?', a: "Timgad per l'integrità del suo impianto urbano, Djémila per il contesto e i mosaici, Tipaza per il mare. Insieme danno la misura dell'Africa romana." },
      { q: 'Ci sono molti visitatori?', a: 'Pochissimi. È normale percorrere Timgad o Djémila incrociando una manciata di persone, cosa ormai introvabile altrove nel Mediterraneo.' },
      { q: 'I siti sono attrezzati?', a: 'Sommariamente. Ci sono musei di sito e custodi, ma poca segnaletica: una guida cambia completamente la visita.' },
      { q: 'Si possono fare tutte e tre in tre giorni?', a: 'Sì, ma le distanze sono reali. Il programma è intenso e prevede partenze mattutine.' },
    ],
  },

  'oran-mostaganem-tlemcen': {
    title: "L'Ovest algerino: Orano, Mostaganem e Tlemcen — 5 giorni",
    duration: '5 giorni · 4 notti',
    hook: "Cinque giorni nell'ovest algerino — il porto di Orano, le spiagge di Mostaganem e l'eredità andalusa di Tlemcen: moschea, palazzo e cascate.",
    full: true,
    seoTitle: 'Ovest algerino 5 giorni — Orano e Tlemcen',
    seoDescription: "Viaggio privato di 5 giorni nell'ovest dell'Algeria: Orano e Santa Cruz, le spiagge di Mostaganem e l'eredità andalusa di Tlemcen.",
    overview: "L'ovest algerino è la parte andalusa del paese. Orano, seconda città e grande porto, mescola architettura spagnola e francese sotto il forte di Santa Cruz, e ha dato il raï al mondo. Mostaganem allinea spiagge e un vecchio quartiere ottomano sopra il mare. E Tlemcen, capitale culturale dell'Algeria andalusa, conserva la Grande Moschea, il minareto di Mansourah, il palazzo El Mechouar, il santuario di Sidi Boumediene e una tradizione musicale gharnati ancora viva.",
    highlights: [
      'Orano, Santa Cruz e la baia',
      'La piazza del 1° Novembre e il centro storico',
      'Le spiagge e la vecchia Tigditt di Mostaganem',
      'La Grande Moschea di Tlemcen',
      'Mansourah, El Mechouar e Sidi Boumediene',
      "Le cascate di El Ourit e la musica gharnati",
    ],
    itinerary: [
      { day: 1, title: 'Arrivo a Orano', body: 'Accoglienza e sistemazione, prima scoperta del lungomare e del centro.' },
      { day: 2, title: 'Orano', body: 'Il forte di Santa Cruz, la città vecchia, il porto e la città spagnola e francese.' },
      { day: 3, title: 'Mostaganem', body: 'Verso est lungo la costa: spiagge, vecchio quartiere di Tigditt e Bordj Ettork.' },
      { day: 4, title: 'Tlemcen', body: 'Giornata andalusa: Grande Moschea, Mansourah, El Mechouar e Sidi Boumediene.' },
      { day: 5, title: 'El Ourit e partenza', body: 'Le cascate di El Ourit e il plateau di Lalla Setti prima del trasferimento.' },
    ],
    includes: ['Trasferimenti', 'Sistemazione 4 notti', 'Guida privata autorizzata', 'Trasporto privato', 'Ingressi ai siti', 'Colazioni'],
    excludes: ['Voli', 'Costi del visto', 'Assicurazione di viaggio', 'Pranzi e cene', 'Mance'],
    goodToKnow: [
      { label: 'Stagione', value: 'Aprile–giugno, settembre–novembre' },
      { label: 'Ritmo', value: 'Moderato' },
      { label: 'Partenza', value: 'Orano — aeroporto Ahmed Ben Bella' },
      { label: 'Musica', value: 'Raï a Orano, gharnati a Tlemcen' },
    ],
    faqs: [
      { q: 'Perché visitare Tlemcen?', a: "È il cuore dell'eredità andalusa in Algeria: moschee, palazzi e santuari dal XII al XIV secolo, in una città che ha conservato musica e artigianato." },
      { q: 'Si può collegare ad Algeri?', a: 'Sì. Orano è collegata ad Algeri da voli, treno e autostrada — adattiamo il programma al vostro punto di arrivo.' },
      { q: 'È una regione balneare?', a: 'La costa è bella e le spiagge di Mostaganem sono reali, ma questo viaggio resta soprattutto culturale.' },
      { q: "Che cos'è il gharnati?", a: 'Una scuola di musica arabo-andalusa ereditata da Granada, di cui Tlemcen è il principale centro in Algeria.' },
    ],
  },

  'the-beauty-of-algeria': {
    title: 'Costantina e Timgad — 2 giorni',
    duration: '2 giorni · 1 notte',
    hook: "Due giorni nell'est algerino — la città dei ponti sospesa sopra le gole del Rhumel, e la città romana di Timgad.",
    full: true,
    seoTitle: "Costantina e Timgad — 2 giorni nell'Est algerino",
    seoDescription: "Viaggio privato di 2 giorni nell'est algerino: Costantina e le gole del Rhumel, poi la città romana di Timgad patrimonio UNESCO.",
    overview: "Due giorni per l'essenziale dell'est algerino. Costantina è una città impossibile: costruita su una rocca spaccata dalle gole del Rhumel, ricucita da una serie di ponti spettacolari, e ricca di un passato che risale a Cirta, capitale numida. A un'ora e mezza di strada, Timgad dispiega nella pianura la scacchiera romana più completa che sopravviva. Il contrasto tra la città verticale e la città geometrica è tutto l'interesse di questo formato breve.",
    highlights: [
      'Le gole del Rhumel e i ponti di Costantina',
      'Il palazzo Ahmed Bey',
      'Il museo di Cirta',
      "Timgad, l'arco di Traiano e il teatro",
      'La musica malouf di Costantina',
      'Un formato breve, ideale come complemento',
    ],
    itinerary: [
      { day: 1, title: 'Costantina', body: "La città dei ponti: il ponte Sidi M'Cid, le gole, il palazzo Ahmed Bey, il museo di Cirta e la città vecchia." },
      { day: 2, title: 'Timgad', body: 'Verso sud e giornata a Timgad: la pianta romana completa, l\'arco di Traiano, il teatro e il museo dei mosaici.' },
    ],
    includes: ['Trasferimenti', 'Sistemazione 1 notte', 'Guida privata autorizzata', 'Trasporto privato', 'Ingressi ai siti', 'Colazione'],
    excludes: ['Voli', 'Costi del visto', 'Assicurazione di viaggio', 'Pranzi e cene', 'Mance'],
    goodToKnow: [
      { label: 'Stagione', value: 'Aprile–giugno, settembre–novembre' },
      { label: 'Ritmo', value: 'Intenso su due giorni' },
      { label: 'Partenza', value: 'Costantina — aeroporto Mohamed Boudiaf' },
      { label: 'Si combina con', value: 'Djémila e Sétif' },
    ],
    faqs: [
      { q: 'Perché Costantina è famosa?', a: 'Per il suo sito: una città costruita su uno sperone roccioso spaccato da un canyon di 200 metri, attraversato da ponti che ne sono la firma visiva.' },
      { q: 'Timgad vale la deviazione?', a: "È la città romana a scacchiera più completa che sopravviva, spesso chiamata la Pompei d'Africa, ed è quasi sempre deserta." },
      { q: 'Come si raggiunge Costantina?', a: 'In aereo da Algeri, in treno, o con l\'autostrada est-ovest.' },
      { q: 'Due giorni bastano?', a: 'Per questi due siti, sì. Aggiungendo Djémila serve un giorno in più.' },
    ],
  },

  // ---- card-only translations (Italian index; detail pages stay in English) ----
  'algeria-eastern-sahara-discovery': {
    title: 'Est algerino e Sahara — 6 giorni',
    duration: '6 giorni · 5 notti',
    hook: "Sei giorni attraverso l'est del paese — i ponti di Costantina, le città romane di Djémila e Timgad, una porta del Sahara a Bou Saada e una giornata a Béjaïa.",
  },
  'djanet-ghardaia-desert-2-days': {
    title: 'Djanet e Ghardaïa — 6 giorni tra deserto e patrimonio',
    duration: '6 giorni · 5 notti',
    hook: "Sei giorni che uniscono i due volti del Sahara algerino: le città del M'Zab patrimonio UNESCO e il grande deserto attorno a Djanet.",
  },
  'algeria-intensive-discovery-tour': {
    title: "Scoperta intensiva dell'Algeria — 5 giorni",
    duration: '5 giorni · 4 notti',
    hook: 'Cinque giorni a ritmo serrato per vedere il massimo del paese: capitale, costa romana e primo approccio al Sahara.',
  },
  'the-soul-of-algeria': {
    title: "L'anima dell'Algeria — 4 giorni",
    duration: '4 giorni · 3 notti',
    hook: "Quattro giorni tra la capitale, la costa romana e l'entroterra, per cogliere il carattere del paese più che la lista dei siti.",
  },
  'the-culture-and-heritage-of-algeria': {
    title: "Cultura e patrimonio dell'Algeria — 8 giorni",
    duration: '8 giorni · 7 notti',
    hook: "Otto giorni tra la cultura e la storia algerine — la capitale e la Casbah, Tipaza e Djémila, i ponti di Costantina e l'oasi di Bou Saada.",
  },
  'algeria-beyond-expectations': {
    title: "L'Algeria oltre le aspettative — 10 giorni",
    duration: '10 giorni · 9 notti',
    hook: 'Dieci giorni per il paese in tutta la sua estensione, dal litorale mediterraneo alle oasi sahariane, a un ritmo che lascia il tempo di guardare.',
  },
  'bousaada-desert-tour': {
    title: "Bou Saada — 2 giorni nell'oasi",
    duration: '2 giorni · 1 notte',
    hook: "Due giorni a Bou Saada, la città della felicità — la cascata e il mulino Ferrero, i mercati artigianali, una cena beduina e la zawiya di El Hamel.",
  },
  'tour-bejaia-historic': {
    title: 'Béjaïa — la città storica sul mare (giornata)',
    duration: '1 giorno',
    hook: 'Una giornata sulla costa a Béjaïa — la fortezza e il museo, la corniche di Cap Carbon e la sabbia di Les Aiguades, pranzo davanti al Mediterraneo.',
  },
  'private-guided-tour': {
    title: 'Tipaza e Cherchell — giornata romana privata',
    duration: '1 giorno',
    hook: "Una giornata privata sulla costa romana a ovest di Algeri — le rovine di Tipaza sul mare e il museo dell'antica Cesarea a Cherchell.",
  },
  'algiers-city-tour-casbah-bardo-martyrsmemorial': {
    title: 'Algeri in un giorno — Casbah, Bardo e Memoriale del Martire',
    duration: '1 giorno',
    hook: 'Una giornata intera nella capitale — la Casbah UNESCO, il museo del Bardo e il Memoriale del Martire sopra la baia.',
  },
  'algierstour-hammagarden-notredame-dafrique': {
    title: "Algeri — Giardino di Hamma e Notre-Dame d'Afrique",
    duration: '1 giorno',
    hook: "Una giornata ad Algeri tra il Giardino di prova di Hamma e la basilica di Notre-Dame d'Afrique, con le più belle viste sulla baia.",
  },
  'day-tour-algeria-culture': {
    title: 'Algeri — passeggiata culturale nella Casbah',
    duration: '1 giorno',
    hook: 'Una giornata a piedi nella Casbah di Algeri, tra vicoli, palazzi ottomani e terrazze, con una guida che ci è cresciuta.',
  },
};

export const tourIt = (id: string) => TOURS_IT[id];

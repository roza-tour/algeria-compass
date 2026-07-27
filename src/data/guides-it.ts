// Italian practical guides. One data file plus one template beats five nearly
// identical .astro pages, and it keeps the hreflang pairing with the English
// article (via `en`) explicit and impossible to forget.

export interface GuideIt {
  slug: string;            // /it/<slug>/
  en: string;              // English counterpart path, for hreflang
  fr?: string;             // French counterpart path, when one exists
  eyebrow: string;
  h1: string;
  lead: string;            // intro paragraph (HTML-free)
  sections: { h: string; p?: string; list?: string[] }[];
  faqs: { q: string; a: string }[];
  cta: { h: string; p: string };
  seoTitle: string;
  seoDescription: string;
  published: string;
}

export const GUIDES_IT: GuideIt[] = [
  {
    slug: 'guida-viaggio-algeria',
    en: '/blog/complete-algeria-travel-guide/',
    fr: '/fr/guide-voyage-algerie/',
    eyebrow: 'Guida completa',
    h1: "Guida di viaggio all'Algeria",
    lead: "L'Algeria è il paese più grande d'Africa e uno dei meno visitati del Mediterraneo: città romane quasi deserte, un Sahara che occupa quattro quinti della mappa e un'ospitalità che sorprende chiunque. Proprio per questo ripaga chi si prepara. Questa guida raccoglie l'essenziale — quando andare, visto, sicurezza, trasporti, budget, cucina — e rimanda alle guide di dettaglio.",
    published: '2026-07-25',
    sections: [
      { h: 'Il paese in breve', p: "Repubblica sul Mediterraneo meridionale, l'Algeria confina con Tunisia e Libia a est, Niger, Mali e Mauritania a sud, Sahara Occidentale e Marocco a ovest. La popolazione è concentrata nella fascia costiera e negli altipiani del nord, mentre il vasto sud è quasi disabitato. Arabo e tamazight sono lingue ufficiali; il francese resta molto diffuso in amministrazione, commercio e segnaletica. Il paese è diviso in 58 province." },
      { h: 'Quando andare', p: "Primavera (marzo–maggio) e autunno (settembre–novembre) sono i periodi migliori per il nord, la costa e le città romane. L'inverno (novembre–febbraio) è l'unica stagione in cui si può percorrere il Sahara profondo, ed è anche quando i siti romani sono più piacevoli. L'estate è calda sulla costa e proibitiva nel sud." },
      { h: 'Visto e ingresso', p: "Quasi tutte le nazionalità hanno bisogno di un visto turistico ottenuto prima della partenza presso un consolato algerino, di norma con una lettera d'invito e prenotazioni confermate. Non esiste un e-visa generale. L'unica eccezione riconosciuta riguarda i viaggi organizzati nel grande sud, che entrano da Djanet o Tamanrasset con un operatore autorizzato." },
      { h: 'Sicurezza', p: "Per il viaggio ordinario le città del nord, la costa, l'est romano e i circuiti sahariani organizzati sono generalmente tranquilli, con i piccoli furti come preoccupazione principale. Alcune zone di frontiera remote e parti del deserto lontane dalle rotte battute portano avvisi ufficiali. Il grande sud si percorre con operatore, guida e permessi." },
      { h: 'Muoversi', p: "Il paese è troppo grande per essere attraversato via terra in una vacanza normale. Nel nord funzionano bene treno e autostrada est-ovest; per il sud il volo interno è di fatto obbligatorio, seguito da 4×4 con autista. Air Algérie e Tassili Airlines collegano Algeri con Orano, Costantina, Ghardaïa, Timimoun, Tamanrasset e Djanet." },
      { h: 'Soldi', p: "La valuta è il dinaro algerino, non convertibile all'estero: si arriva con contanti in euro e si cambia in Algeria. Le carte di credito straniere sono di fatto inutilizzabili e i bancomat inaffidabili. Esiste un tasso ufficiale e un tasso parallelo largamente praticato, e la differenza incide molto sul budget." },
      { h: 'Cucina', p: "Il couscous è il piatto nazionale, riconosciuto dall'UNESCO come patrimonio condiviso del Maghreb. Accanto ci sono la chorba, i tajine, la rechta di Algeri, la chakhchoukha dell'est, lo street food come mhadjeb e msemen, e una tradizione profonda di dolci alle mandorle e datteri. Il tè alla menta accompagna tutto." },
      { h: 'Cosa vedere', list: [
        "I sette siti UNESCO: Casbah di Algeri, Timgad, Djémila, Tipaza, valle del M'Zab, Al Qal'a dei Beni Hammad e Tassili n'Ajjer",
        'Algeri, la capitale bianca sulla baia',
        "Costantina, la città dei ponti sulle gole del Rhumel",
        "Tlemcen e l'eredità andalusa dell'ovest",
        'Il Sahara: Djanet e il Tadrart, Timimoun, l\'Hoggar',
        'La costa cabila attorno a Béjaïa',
      ]},
    ],
    faqs: [
      { q: "Quanti giorni servono per l'Algeria?", a: "Sette giorni coprono bene Algeri, la costa romana e una regione in più. Dieci permettono di aggiungere il M'Zab o l'est romano senza fretta. Due settimane sono ciò che serve per unire il nord a una vera spedizione nel Sahara." },
      { q: "L'Algeria è cara?", a: "No, una volta ottenuti i dinari. Cibo, trasporti e ingressi costano poco per gli standard europei. Le voci pesanti sono il volo internazionale e, se si va nel deserto, la logistica dell'operatore." },
      { q: 'Si parla inglese?', a: "Poco. Arabo e tamazight sono le lingue ufficiali e il francese è la seconda lingua diffusa. L'inglese cresce tra i giovani e tra le guide professionali, ma non va dato per scontato." },
      { q: 'Si può viaggiare in autonomia?', a: "Nel nord sì: città, costa e siti romani si visitano da soli. Il Sahara profondo no — richiede operatore autorizzato, guida e permessi, per ragioni di sicurezza e di ambiente." },
    ],
    cta: { h: 'Progettiamo il vostro viaggio', p: 'Siamo un tour operator algerino autorizzato: itinerari privati, guide locali e assistenza per il visto.' },
    seoTitle: "Guida di viaggio all'Algeria 2026 | Algeria Compass",
    seoDescription: "Guida completa di viaggio all'Algeria: quando andare, visto, sicurezza, trasporti, budget, cucina e cosa vedere. A cura di un operatore algerino autorizzato.",
  },
  {
    slug: 'visto-algeria',
    en: '/blog/algeria-visa-guide/',
    fr: '/fr/visa-algerie/',
    eyebrow: 'Visto e ingresso',
    h1: "Visto per l'Algeria: come ottenerlo",
    lead: "Il visto è il primo vero passo di un viaggio in Algeria, e l'unico che può far saltare le date se sottovalutato. Non esiste un e-visa generale: la domanda si presenta a un consolato algerino prima della partenza, con una lettera d'invito e un programma confermato. Ecco come funziona.",
    published: '2026-07-25',
    sections: [
      { h: 'Chi ha bisogno del visto', p: "Praticamente tutti i visitatori europei, nordamericani e asiatici. Le esenzioni sono poche e riguardano soprattutto paesi del Maghreb e alcuni accordi bilaterali. Verificate sempre con il consolato algerino competente per la vostra residenza: le regole cambiano senza grande preavviso." },
      { h: 'Documenti richiesti', list: [
        'Passaporto valido almeno sei mesi, con pagine libere',
        'Modulo di domanda compilato e firmato',
        'Fototessere recenti su sfondo chiaro',
        "Lettera d'invito: da un privato residente in Algeria, oppure dall'agenzia che organizza il viaggio",
        'Prenotazioni alberghiere o programma confermato',
        'Prenotazione del volo di andata e ritorno',
        'Prova di mezzi economici sufficienti',
        'Assicurazione di viaggio',
      ]},
      { h: "La lettera d'invito", p: "È la parte che sorprende chi presenta domanda per la prima volta. I consolati algerini vogliono sapere chi vi riceve. Se non avete contatti privati in Algeria, la via standard è l'invito di un'agenzia autorizzata, emesso su carta intestata con le vostre date, l'itinerario e gli alloggi. La lettera da sola raramente basta: deve corrispondere alle prenotazioni allegate." },
      { h: 'Tempi', p: "Non esiste un tempo unico: ogni consolato gestisce il proprio carico. In pratica si va da circa due settimane a oltre un mese, con i periodi più lenti in estate e prima delle grandi festività. La regola che fa risparmiare denaro è semplice: non comprate voli non rimborsabili finché il visto non è fisicamente sul passaporto." },
      { h: "L'eccezione del grande sud", p: "Per i viaggi organizzati nel deserto profondo che entrano da Djanet o Tamanrasset, un'agenzia algerina autorizzata può in alcuni casi far processare il gruppo all'arrivo, perché ha depositato in anticipo dati e permessi. Non è qualcosa che un viaggiatore indipendente possa organizzare in aeroporto." },
      { h: 'Perché le domande vengono respinte', list: [
        'Fascicolo incompleto — la causa di gran lunga più frequente',
        "Invito e prenotazioni che non coincidono tra loro",
        'Passaporto con validità residua insufficiente',
        'Domanda presentata al consolato sbagliato per la propria residenza',
        'Mezzi economici non documentati',
      ]},
    ],
    faqs: [
      { q: "Esiste un e-visa per l'Algeria?", a: 'No, non esiste un visto turistico elettronico generale. Diffidate dei siti commerciali che ne promettono uno: al massimo sono servizi di compilazione moduli, e il consolato non è tenuto a riconoscerli.' },
      { q: 'Si può ottenere il visto in aeroporto?', a: "In generale no. L'unica eccezione riguarda i viaggi organizzati nel grande sud, gestiti da un operatore algerino autorizzato che ha depositato i documenti in anticipo." },
      { q: 'Fornite voi la lettera di invito?', a: 'Sì. Per ogni viaggiatore che prenota con noi prepariamo invito, programma confermato e dettagli degli alloggi nel formato che i consolati si aspettano.' },
      { q: 'Quanto costa il visto?', a: "Le tariffe consolari variano per nazionalità e tipo di visto e vengono aggiornate periodicamente. Chiedete l'importo attuale direttamente al consolato competente." },
    ],
    cta: { h: 'Vi aiutiamo con il visto', p: "Invito, programma confermato e prenotazioni nel formato richiesto dai consolati — compresi nell'organizzazione del viaggio." },
    seoTitle: "Visto per l'Algeria: documenti e tempi | Algeria Compass",
    seoDescription: "Come ottenere il visto turistico per l'Algeria: documenti richiesti, lettera d'invito dell'agenzia, tempi di rilascio e perché le domande vengono respinte.",
  },
  {
    slug: 'sicurezza-algeria',
    en: '/blog/algeria-safety-guide/',
    fr: '/fr/securite-algerie/',
    eyebrow: 'Sicurezza',
    h1: "L'Algeria è sicura? Una valutazione onesta",
    lead: "La reputazione dell'Algeria è modellata sugli anni Novanta, non sul paese di oggi. È stabile da oltre vent'anni e conosciuta per un'ospitalità fuori dal comune. Detto questo, la sicurezza qui si legge su una mappa, non con un giudizio unico: alcune zone remote portano avvisi reali, e il deserto è un ambiente prima che una questione di ordine pubblico.",
    published: '2026-07-25',
    sections: [
      { h: 'Dove il viaggio è semplice', p: "Algeri, Orano, Costantina, Béjaïa, la costa mediterranea, i siti romani dell'est, la Cabilia e la valle del M'Zab si visitano normalmente. Il rischio realistico è il piccolo furto nei luoghi affollati, come in qualsiasi capitale mediterranea." },
      { h: 'Dove serve un operatore', p: "Il Sahara profondo — Tassili n'Ajjer, Tadrart, Hoggar — si percorre con un operatore autorizzato, una guida accreditata, 4×4 attrezzati e permessi. Non è una formalità: calore, distanze, navigazione e assenza di rete rendono l'improvvisazione pericolosa." },
      { h: 'Dove non si va', p: "Le fasce di frontiera remote con Mali, Niger e Libia, e alcune aree desertiche lontane dalle rotte stabilite, portano gli avvisi più forti dei governi. Sono anche luoghi in cui nessun permesso verrà rilasciato e nessun operatore vi porterà." },
      { h: 'I rischi reali', list: [
        'Furti con destrezza nei mercati, nei trasporti e nelle zone affollate',
        'Incidenti stradali, soprattutto di notte su strade rurali non illuminate',
        'Calore e disidratazione nel sud, di gran lunga il rischio principale nel deserto',
        'Piccole truffe: prezzi non concordati, guide non ufficiali, cambio valuta',
      ]},
      { h: 'Viaggiatrici sole', p: "L'Algeria è un paese conservatore con un basso tasso di criminalità violenta, e le due cose insieme spiegano l'esperienza tipica: molte attenzioni e curiosità, poca minaccia reale. Abbigliamento coprente, spostamenti tra città di giorno, taxi prenotati anziché fermati per strada. Nelle città la situazione è nettamente più rilassata che nei piccoli centri." },
      { h: 'Buone abitudini', list: [
        'Leggete gli avvisi aggiornati del vostro governo, che sono basati su mappe',
        'Evitate la guida notturna sulle strade rurali',
        'Portate copia di passaporto e visto separata dagli originali',
        'Nel deserto bevete con regolarità, senza aspettare la sete',
        'Seguite le indicazioni di guide e autorità su dove non andare',
      ]},
    ],
    faqs: [
      { q: "L'Algeria è sicura per i turisti?", a: 'Per il viaggio ordinario, sì: le città del nord, la costa, l\'est romano e i circuiti sahariani organizzati sono generalmente tranquilli. Alcune zone di frontiera remote portano avvisi ufficiali.' },
      { q: 'Il Sahara è pericoloso?', a: "Il Sahara è sicuro se percorso come va percorso: operatore autorizzato, guida esperta, 4×4, acqua, comunicazioni satellitari e permessi. I rischi reali sono calore, disidratazione e isolamento, non la criminalità." },
      { q: 'È sicura per le donne che viaggiano sole?', a: 'Generalmente sì, con la consueta attenzione. Aspettatevi sguardi e curiosità più che minacce; abbigliamento coprente e spostamenti diurni tra le città rendono tutto più semplice.' },
      { q: 'Si può guidare in Algeria?', a: "Legalmente sì, con patente e permesso internazionale. In pratica molti visitatori preferiscono un autista: traffico urbano aggressivo, segnaletica in arabo e francese e guida notturna sconsigliata." },
    ],
    cta: { h: 'Viaggiate con un operatore locale', p: 'Guide accreditate, veicoli adeguati e permessi gestiti da noi — così la sicurezza è un fatto organizzativo, non una preoccupazione.' },
    seoTitle: "L'Algeria è sicura? Guida aggiornata | Algeria Compass",
    seoDescription: "L'Algeria è sicura per i turisti? Una valutazione onesta: dove il viaggio è semplice, dove serve un operatore, quali zone evitare e i rischi reali.",
  },
  {
    slug: 'quando-andare-algeria',
    en: '/blog/best-time-to-visit-algeria/',
    fr: '/fr/quand-partir-algerie/',
    eyebrow: 'Stagioni',
    h1: 'Quando andare in Algeria',
    lead: "L'Algeria non ha una sola stagione buona: ne ha due, e sono quasi opposte. Il nord dà il meglio in primavera e in autunno; il Sahara profondo si visita solo d'inverno. Capire questa divisione è la scelta più importante nella progettazione del viaggio.",
    published: '2026-07-25',
    sections: [
      { h: 'Primavera (marzo–maggio)', p: "La stagione migliore in assoluto per il nord: temperature miti, paesaggi verdi dopo le piogge invernali, e siti romani come Timgad e Djémila piacevoli da percorrere a piedi. È anche un buon momento per le oasi del nord del Sahara, prima del gran caldo." },
      { h: 'Estate (giugno–agosto)', p: "Stagione balneare sulla costa, con mare caldo e città animate fino a tarda notte. I siti archeologici sono faticosi a metà giornata e il grande sud è escluso: il caldo lo rende pericoloso e le spedizioni non vengono organizzate. È anche il periodo più affollato per i voli, per via del ritorno della diaspora." },
      { h: 'Autunno (settembre–novembre)', p: "Forse il periodo migliore in assoluto per un primo viaggio: caldo che si ritira, luce dorata sulle città romane, mare ancora balneabile a settembre e, da novembre, l'apertura della stagione sahariana." },
      { h: 'Inverno (dicembre–febbraio)', p: "La stagione del Sahara, e l'unica in cui Tassili, Tadrart e Hoggar sono percorribili: giornate miti, notti fredde, aria tersa e la luce migliore per la fotografia. Al nord è più fresco e piovoso, ma i siti romani sono quasi deserti e sull'Atlante cade la neve — a Chréa, sopra Blida, si scia." },
      { h: 'Regione per regione', list: [
        'Costa mediterranea — da aprile a ottobre; luglio e agosto per il mare',
        'Città romane (Timgad, Djémila, Tipaza) — marzo–giugno e settembre–novembre',
        "Valle del M'Zab e oasi del nord — da ottobre ad aprile",
        'Sahara profondo (Djanet, Tamanrasset) — solo da novembre a febbraio',
        'Montagne della Cabilia e Aurès — primavera per i fiori, inverno per la neve',
      ]},
      { h: 'Ramadan e festività', p: "Durante il Ramadan il ritmo del paese si inverte: giornate tranquille con molti ristoranti chiusi, e città vivissime dopo il tramonto. È un periodo affascinante per chi viaggia per capire, meno adatto a chi ha un programma serrato di visite. Le festività di Eid chiudono molte attività per alcuni giorni." },
    ],
    faqs: [
      { q: "Qual è il mese migliore per l'Algeria?", a: 'Ottobre e aprile sono i due mesi che funzionano quasi ovunque: nord piacevole, oasi accessibili e, in ottobre, la stagione sahariana alle porte.' },
      { q: 'Quando si può andare nel Sahara?', a: "Da novembre a febbraio. Fuori da questa finestra il caldo nel grande sud rende le spedizioni pericolose e gli operatori non le organizzano." },
      { q: "L'Algeria d'inverno vale il viaggio?", a: "Molto. È l'unica stagione per il deserto, i siti romani sono freschi e vuoti, la costa resta mite e sull'Atlante c'è neve vera: in due settimane si può passare dalla neve alle dune." },
      { q: 'Fa freddo di notte nel deserto?', a: 'Sì, molto. In pieno inverno le temperature notturne al campo possono avvicinarsi allo zero: servono giacca calda, berretto e strati veri.' },
    ],
    cta: { h: 'Il periodo giusto per il vostro viaggio', p: 'Ditecci le vostre date e vi diciamo con franchezza cosa funziona e cosa no in quel periodo.' },
    seoTitle: 'Quando andare in Algeria: clima e stagioni',
    seoDescription: "Quando andare in Algeria: primavera e autunno per il nord e le città romane, inverno per il Sahara. Il clima regione per regione, mese per mese.",
  },
  {
    slug: 'sahara-algeria',
    en: '/blog/algerian-sahara-travel-guide/',
    fr: '/fr/sahara-algerie/',
    eyebrow: 'Sahara',
    h1: 'Il Sahara algerino: guida al viaggio',
    lead: "Il Sahara algerino è tra i più vasti e meglio conservati al mondo: gli altopiani di arenaria del Tassili n'Ajjer, le dune e gli archi del Tadrart, le vette vulcaniche dell'Hoggar, le oasi rosse del Gourara. Non è una gita: è una spedizione invernale guidata, organizzata da un operatore autorizzato.",
    published: '2026-07-25',
    sections: [
      { h: 'Quando andare', p: "Da novembre a febbraio, senza eccezioni. Le giornate sono miti e l'aria tersa; le notti sono fredde e al campo possono avvicinarsi allo zero, quindi servono strati veri. Da tarda primavera il caldo diventa un rischio fisiologico serio e le spedizioni si fermano." },
      { h: 'Le grandi regioni', list: [
        "Djanet e il Tassili n'Ajjer — arte rupestre preistorica e foreste di arenaria, patrimonio UNESCO",
        'Il Tadrart Rosso — dune, canyon e archi naturali nel sud-est profondo',
        "L'Hoggar, da Tamanrasset — picchi vulcanici e l'alba dell'Assekrem",
        "Timimoun e il Gourara — l'oasi rossa, i ksour e le foggara",
        'Il Grande Erg Occidentale — i grandi cordoni dunali',
      ]},
      { h: 'Permessi, 4×4 e logistica', p: "Non ci si avventura da soli. Guida accreditata, 4×4 attrezzati e permessi sono indispensabili, e non per burocrazia: sono il sistema di sicurezza. Si raggiunge il sud in aereo da Algeri, poi si prosegue in 4×4. Acqua, carburante e comunicazioni satellitari vengono calcolati per veicolo e per persona." },
      { h: 'Come si dorme', p: "In campo tendato, montato ogni sera in un punto scelto dalla squadra. Tende, materassini e coperte sono forniti; non c'è elettricità, non ci sono docce e non c'è rete telefonica. La cena si cuoce sul fuoco, il pane si cuoce sotto la sabbia, e il tè si prepara tre volte." },
      { h: 'Cosa portare', list: [
        'Strati caldi veri per la notte: giacca, berretto, calze pesanti',
        'Protezione solare, cappello e uno scialle per sole e vento',
        'Scarpe chiuse e comode per sabbia e roccia',
        'Power bank di grande capacità e batterie di riserva',
        'Torcia frontale e salviette, viste le condizioni del campo',
      ]},
      { h: 'I tuareg', p: "Guide, autisti e cuochi delle spedizioni sono tuareg locali, e l'ospitalità che accompagna il viaggio non è una messa in scena per visitatori. È anche il motivo per cui il turismo sahariano, fatto bene, resta una delle poche fonti di reddito della regione." },
    ],
    faqs: [
      { q: 'Si può visitare il Sahara algerino da soli?', a: "No. Il grande sud richiede operatore autorizzato, guida accreditata, 4×4 e permessi. È una regola di sicurezza prima che amministrativa." },
      { q: 'Come si arriva a Djanet o Tamanrasset?', a: 'In aereo da Algeri, con Air Algérie o Tassili Airlines, poi in 4×4 con la squadra. Le distanze stradali dal nord sono enormi e non praticabili in una vacanza.' },
      { q: 'Serve allenamento?', a: "Per il Tadrart in 4×4 no: ci si sposta in fuoristrada con brevi camminate. Per l'altopiano del Tassili sì, perché è un trekking di più giorni con notti fredde." },
      { q: 'Che cosa si vede esattamente?', a: "Arte rupestre preistorica del Tassili, gli archi e le dune rosse del Tadrart, l'alba dell'Assekrem nell'Hoggar e le oasi del Gourara attorno a Timimoun." },
    ],
    cta: { h: 'La vostra spedizione nel deserto', p: 'Guide, 4×4 e permessi gestiti da noi — a voi resta solo il viaggio.' },
    seoTitle: 'Sahara algerino: guida 2026 (Djanet, Tassili)',
    seoDescription: "Guida al Sahara algerino: Djanet e il Tassili n'Ajjer, l'Hoggar, Timimoun e il Tadrart. Quando andare, permessi, 4×4 e come si organizza una spedizione.",
  },
  {
    "slug": "visto-arrivo-algeria",
    "en": "/algeria-visa-requirements/",
    "fr": "/fr/visa-arrivee-algerie/",
    "eyebrow": "Visto e ingresso",
    "h1": "Serve il visto per l'Algeria?",
    "published": "2026-07-27",
    "lead": "Due strade per entrare in Algeria, e una delle due salta del tutto il consolato. La maggior parte dei viaggiatori ottiene un visto turistico prima della partenza; chi arriva con un viaggio organizzato attraverso il grande sud — Djanet o Tamanrasset — può invece essere sdoganato all'arrivo, e quella via è aperta a viaggiatori di qualsiasi nazionalità.",
    "sections": [
      {
        "h": "Strada 1: visto consolare, prima di partire",
        "p": "Vale per chiunque visiti il nord, la costa, le città romane o la valle del M'Zab, e per chiunque viaggi in autonomia. Voi ci dite date e itinerario, noi emettiamo la lettera d'invito e il programma confermato su carta intestata, voi presentate il fascicolo al consolato algerino competente per la vostra residenza, e il visto viene apposto sul passaporto prima della partenza. Mettete in conto da due settimane a oltre un mese, e non comprate voli non rimborsabili finché il visto non è fisicamente sul passaporto."
      },
      {
        "h": "Strada 2: visto all'arrivo, dai varchi del sud",
        "p": "Vale per chi viaggia con un itinerario sahariano organizzato e atterra a Djanet o Tamanrasset, ed è aperta a qualsiasi nazionalità. Voi prenotate un programma del sud con noi, noi depositiamo in anticipo i dati del passaporto e i permessi del deserto, voi volate da Algeri verso sud e l'ingresso viene processato all'arrivo. Non serve appuntamento in consolato. Confermiamo per iscritto che la vostra posizione rientra in questa via prima che prenotiate i voli."
      },
      {
        "h": "Quale delle due vi riguarda",
        "p": "Dipende da dove andate, non dal vostro passaporto. Se il viaggio comprende Algeri, la costa mediterranea, le città romane dell'est o la valle del M'Zab, serve il visto consolare. Se il viaggio è una spedizione sahariana che entra dal sud — Tassili n'Ajjer, Tadrart, Hoggar — la via del visto all'arrivo è disponibile qualunque sia il vostro passaporto. Entrambe passano da noi come operatore autorizzato."
      },
      {
        "h": "E l'esenzione dal visto?",
        "p": "Un piccolo numero di nazionalità entra in Algeria senza visto. L'elenco è breve, cambia, e le conseguenze di un errore ricadono sul viaggiatore al gate d'imbarco: per questo non ne pubblichiamo uno. Il consolato algerino più vicino è l'autorità sul vostro passaporto e una telefonata chiude la questione."
      }
    ],
    "faqs": [
      {
        "q": "Serve il visto per visitare l'Algeria?",
        "a": "Quasi certamente sì se viaggiate in autonomia o verso il nord. Il visto turistico si ottiene prima della partenza al consolato competente per la vostra residenza, con lettera d'invito e prenotazioni confermate."
      },
      {
        "q": "Si può entrare senza passare dal consolato?",
        "a": "Sì, per una via sola: un viaggio organizzato che entra dai varchi meridionali di Djanet o Tamanrasset. Un operatore algerino autorizzato deposita in anticipo i dati e i permessi e l'ingresso avviene all'arrivo. Non è qualcosa che un viaggiatore indipendente possa organizzare in aeroporto."
      },
      {
        "q": "Quali nazionalità possono usare il visto all'arrivo?",
        "a": "È aperto a viaggiatori di qualsiasi nazionalità su un itinerario meridionale idoneo. Confermiamo il vostro caso specifico per iscritto prima che prenotiate i voli."
      },
      {
        "q": "L'Algeria ha un e-visa?",
        "a": "No, non esiste un visto turistico elettronico generale. Diffidate dei siti commerciali che ne promettono uno: al massimo sono servizi di compilazione moduli."
      },
      {
        "q": "Quanto tempo richiede il visto consolare?",
        "a": "Da circa due settimane a oltre un mese, secondo il consolato e la stagione. L'estate e i periodi prefestivi sono i più lenti."
      }
    ],
    "cta": {
      "h": "Diteci passaporto e date",
      "p": "Vi confermiamo per iscritto quale via vi riguarda, prima che prenotiate qualsiasi cosa."
    },
    "seoTitle": "Serve il visto per l'Algeria? Le due vie d'ingresso",
    "seoDescription": "Due vie per entrare in Algeria: visto consolare prima della partenza, o visto all'arrivo nel sud con un viaggio organizzato — aperto a ogni nazionalità."
  },
  {
    "slug": "assistenza-visto-algeria",
    "en": "/visa-support/",
    "fr": "/fr/assistance-visa-algerie/",
    "eyebrow": "Prima di partire",
    "h1": "Assistenza per il visto algerino",
    "lead": "Il visto è la parte della pianificazione che scoraggia più viaggiatori, e quasi sempre per un motivo banale: i consolati chiedono documenti che solo un operatore algerino autorizzato può emettere. Siamo quell'operatore. Non rilasciamo il visto — lo fa il consolato o l'autorità algerina — ma prepariamo l'intero fascicolo, gratis con ogni prenotazione, e vi diciamo esattamente cosa portare.",
    "published": "2026-07-27",
    "sections": [
      {
        "h": "Cosa prepariamo, gratis con ogni prenotazione",
        "list": [
          "La lettera d'invito ufficiale (voucher turistico) su carta intestata dell'agenzia",
          "La conferma dell'itinerario e degli alberghi, coerente con la lettera",
          "L'elenco preciso dei documenti richiesti per la vostra nazionalità",
          "L'assistenza passo per passo fino al deposito della pratica"
        ]
      },
      {
        "h": "Via 1 — il visto consolare",
        "p": "È la via ordinaria per il nord, la costa, le città romane e la valle del M'Zab, e l'unica per chi viaggia in autonomia. Si deposita la domanda al consolato algerino competente per la propria residenza, di norma di persona. Quasi tutti i consolati chiedono la lettera d'invito di un'agenzia algerina autorizzata: è esattamente il documento che vi emettiamo noi. La coerenza fra lettera e prenotazioni è ciò che fa passare o respingere un fascicolo."
      },
      {
        "h": "Via 2 — l'autorizzazione sahariana",
        "p": "Per i viaggi organizzati che entrano dal grande sud, Djanet o Tamanrasset, prepariamo in anticipo un documento di autorizzazione al visto con QR code verificabile sul portale del Ministero dell'Interno algerino. Il visto viene poi apposto all'arrivo, senza appuntamento consolare. Conta l'itinerario, non il passaporto: questa via è aperta ai viaggiatori di ogni nazionalità, purché il programma sia sahariano e organizzato. Il documento costa 40 €; la preparazione del fascicolo resta gratuita, e all'arrivo si paga alle autorità una tassa di bollo che varia secondo la nazionalità."
      },
      {
        "h": "Cosa serve di solito",
        "list": [
          "Passaporto valido almeno sei mesi oltre la data d'ingresso",
          "Foto tessera recente e modulo di domanda compilato",
          "Prenotazione del volo",
          "La nostra lettera d'invito e la conferma del circuito e degli alberghi"
        ]
      },
      {
        "h": "Tempi",
        "p": "Per il visto consolare mettete in conto da due a quattro settimane, con differenze sensibili fra consolati e stagioni: l'estate e i periodi prefestivi sono i più lenti. La via sahariana è più rapida perché non dipende da un appuntamento. In entrambi i casi consigliamo di confermare il viaggio almeno un mese prima della partenza, e di non acquistare voli non rimborsabili finché il visto non è in mano."
      },
      {
        "h": "Quello che non promettiamo",
        "p": "Le regole d'ingresso algerine variano per nazionalità e cambiano nel tempo. Non pubblichiamo elenchi di paesi esenti, perché un errore lo paga il viaggiatore al gate d'imbarco: il vostro consolato algerino è l'autorità sul vostro passaporto. Noi siamo il vostro partner documentale, e confermiamo per iscritto quale via vi riguarda prima che prenotiate qualsiasi volo."
      }
    ],
    "faqs": [
      {
        "q": "Quanto costa la vostra assistenza per il visto?",
        "a": "La preparazione dei documenti è gratuita con ogni prenotazione: lettera d'invito, conferme e checklist non hanno costo. L'unica voce a pagamento è il documento di autorizzazione sahariana, 40 €, più la tassa di bollo che si paga alle autorità all'arrivo."
      },
      {
        "q": "Quanto tempo richiede il visto consolare?",
        "a": "Da due a quattro settimane in media, secondo consolato e stagione. Confermate il viaggio almeno un mese prima e non comprate voli non rimborsabili finché il visto non è sul passaporto."
      },
      {
        "q": "Posso unire il nord e il deserto?",
        "a": "Sì. Con la via sahariana l'itinerario può combinare nord e sud, a condizione che circa metà del viaggio si svolga in una wilaya sahariana. Costruiamo il programma in modo che rientri nei requisiti."
      },
      {
        "q": "Il documento di autorizzazione è ufficiale?",
        "a": "Sì. Porta un QR code verificabile sul portale del Ministero dell'Interno algerino. L'emissione segue i canali ufficiali: noi curiamo il fascicolo, il visto lo concedono le autorità algerine."
      },
      {
        "q": "Devo per forza prenotare un circuito completo?",
        "a": "Per la via sahariana sì: l'autorizzazione fa parte dell'organizzazione del viaggio, non è un servizio a sé. Per la via consolare emettiamo la lettera d'invito per qualsiasi itinerario che operiamo, anche interamente nel nord."
      }
    ],
    "cta": {
      "h": "Diteci nazionalità e date",
      "p": "Vi confermiamo per iscritto quale via vi riguarda e vi inviamo la checklist dei documenti."
    },
    "seoTitle": "Assistenza visto Algeria | Algeria Compass",
    "seoDescription": "Lettera d'invito, conferme e checklist dei documenti gratis con ogni prenotazione, più l'autorizzazione sahariana per l'ingresso dal sud."
  }
];

export const guideItBySlug = (slug: string) => GUIDES_IT.find(g => g.slug === slug);
export const guideItByEn = (en: string) => GUIDES_IT.find(g => g.en === en);

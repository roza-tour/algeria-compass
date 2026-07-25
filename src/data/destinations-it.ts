// Italian versions of the destination guides — same contract as destinations-fr.ts.
// Photography and coordinates are read from the English collection at build time,
// so the three language versions can never show different pictures of one place.

export interface DestIt {
  slug: string;          // Italian URL segment
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

export const DESTINATIONS_IT: DestIt[] = [
  {
    slug: 'timgad', en: 'timgad',
    name: 'Timgad', eyebrow: 'Patrimonio mondiale · Batna',
    intro: "La città romana a scacchiera più completa che sopravviva, fondata da Traiano attorno al 100 d.C. e spesso chiamata la Pompei d'Africa.",
    quick: "Timgad, l'antica Thamugadi, è una colonia romana fondata attorno al 100 d.C. dall'imperatore Traiano per i suoi veterani, nella provincia di Batna. Sepolta dalla sabbia per secoli, ha conservato intatta la sua pianta a scacchiera: l'arco di Traiano, il teatro, il foro, le terme e una biblioteca pubblica. È patrimonio mondiale UNESCO dal 1982.",
    sections: [
      { h: 'Perché Timgad è unica', p: "La maggior parte delle città romane è stata rioccupata, demolita e ricostruita. Timgad invece fu abbandonata e poi ricoperta dalla sabbia, il che ne ha congelato l'impianto originario. Vi si legge ancora per intero la scacchiera militare romana: il cardo e il decumano, gli isolati regolari, le porte e le mura. È questo grado di leggibilità, più dell'altezza dei resti, a rendere il sito eccezionale." },
      { h: 'Cosa vedere', p: "L'arco di Traiano, a ovest, è l'immagine simbolo del sito. Il teatro, addossato al pendio, ospita ancora un festival estivo. Il foro, le terme nord e sud, il mercato di Sertius e soprattutto la biblioteca pubblica — una delle poche note del mondo romano — scandiscono la visita. Il museo di sito conserva un notevole insieme di mosaici trovati nelle case." },
      { h: 'Il contesto: gli Aurès', p: "Timgad si trova ai piedi degli Aurès, il massiccio berbero chaoui che domina l'est algerino. A una ventina di chilometri si erge il mausoleo numida di Imedghassen, anteriore alla presenza romana, che ricorda come la regione avesse i suoi regni ben prima di Roma." },
      { h: 'Come arrivare', p: "Timgad è a circa 35 km a est di Batna, mezz'ora di strada. Batna ha un aeroporto con voli da Algeri ed è raggiungibile anche dall'autostrada est-ovest. Il sito è vasto e senza ombra: servono scarpe adatte, cappello e acqua, e sono da preferire primavera o autunno." },
    ],
    facts: [
      { label: 'Provincia', value: 'Batna' },
      { label: 'Fondazione', value: 'Circa 100 d.C., da Traiano' },
      { label: 'UNESCO', value: 'Iscritto nel 1982' },
      { label: 'Durata visita', value: 'Mezza giornata' },
      { label: 'Stagione migliore', value: 'Marzo–giugno, settembre–novembre' },
    ],
    faqs: [
      { q: "Perché Timgad è chiamata la Pompei d'Africa?", a: "Perché, come Pompei, la città si è conservata sotto una copertura — la sabbia invece della cenere — e vi si ritrova una pianta urbana completa anziché monumenti isolati." },
      { q: 'Quanto tempo serve per visitare Timgad?', a: "Mezza giornata per il sito e il museo. Unendo il mausoleo di Imedghassen e una puntata negli Aurès la giornata è piena." },
      { q: 'Ci sono molti visitatori?', a: 'Pochissimi. È frequente percorrere il sito incrociando una manciata di persone, cosa ormai introvabile altrove nel Mediterraneo.' },
      { q: 'Si può visitare Timgad da Algeri in giornata?', a: 'È molto lungo: circa 450 km. Meglio pernottare a Batna o a Costantina, oppure inserire Timgad in un itinerario nell\'est del paese.' },
    ],
    seoTitle: 'Timgad, Algeria: la città romana patrimonio UNESCO',
    seoDescription: "Timgad, città romana fondata da Traiano e patrimonio UNESCO: arco di Traiano, teatro, biblioteca e pianta a scacchiera intatta. Cosa vedere e come arrivare.",
  },
  {
    slug: 'djemila', en: 'djemila',
    name: 'Djémila', eyebrow: 'Patrimonio mondiale · Sétif',
    intro: "Cuicul, città romana adagiata in un anfiteatro di colline a 900 metri — uno degli insiemi meglio conservati del Nord Africa.",
    quick: "Djémila, l'antica Cuicul, è una città romana della provincia di Sétif, su uno sperone tra due uadi a 900 metri di quota. Fondata nel I secolo, conserva un foro, templi, basiliche, case con mosaici e un complesso cristiano tardo. È patrimonio mondiale UNESCO dal 1982.",
    sections: [
      { h: 'Il sito e il suo contesto', p: "Djémila deve il nome attuale — «la bella» in arabo — al suo contesto. La città segue un rilievo accidentato, il che la allontana dalla pianta romana teorica e produce un abitato che si adatta alla montagna: strade in pendenza, piazze sfalsate, quartieri terrazzati. Il risultato è più pittoresco e più leggibile di molti siti di pianura." },
      { h: 'Cosa vedere', p: "Il foro dei Severi e l'arco di Caracalla formano il cuore monumentale. Il tempio della famiglia severiana, il teatro scavato nel pendio fuori dalle mura, il mercato di Cosinius con le sue tavole di misura, le terme e le basiliche cristiane completano l'insieme. Il museo di sito ospita una delle più belle collezioni di mosaici romani del Nord Africa." },
      { h: 'Il contesto: gli altipiani', p: "Djémila fa capo a Sétif, l'antica Sitifis, capitale regionale romana e poi città degli altipiani cerealicoli. La regione è fresca, verde in primavera e innevata in certi inverni — un contrasto utile rispetto all'immagine sahariana dell'Algeria." },
      { h: 'Come arrivare', p: "Djémila è a circa 50 km a nord-est di Sétif, su una strada di montagna. Sétif si raggiunge in aereo da Algeri, in treno o dall'autostrada est-ovest. Il sito si visita in due o tre ore, museo compreso; la quota rende fresche le mattine fuori stagione estiva." },
    ],
    facts: [
      { label: 'Provincia', value: 'Sétif' },
      { label: 'Nome antico', value: 'Cuicul' },
      { label: 'UNESCO', value: 'Iscritto nel 1982' },
      { label: 'Quota', value: 'Circa 900 m' },
      { label: 'Durata visita', value: '2–3 ore' },
    ],
    faqs: [
      { q: 'Djémila o Timgad?', a: "Entrambe, se possibile. Timgad colpisce per l'integrità della pianta, Djémila per il contesto e i mosaici. Distano circa tre ore di strada." },
      { q: 'Il museo vale la visita?', a: 'Assolutamente sì. I mosaici di Djémila sono tra i più belli conservati in Nord Africa e illuminano la vita quotidiana della città.' },
      { q: 'Quando visitare Djémila?', a: 'In primavera e in autunno. A 900 metri gli inverni sono freddi e umidi e le estati possono essere calde a metà giornata.' },
      { q: 'Serve una guida?', a: 'È vivamente consigliata: la segnaletica è minima e l\'organizzazione della città, adattata al rilievo, si capisce molto meglio con spiegazioni.' },
    ],
    seoTitle: 'Djémila, Algeria: la città romana di Cuicul (UNESCO)',
    seoDescription: 'Djémila (Cuicul), città romana UNESCO nella provincia di Sétif: foro dei Severi, arco di Caracalla, teatro e mosaici. Cosa vedere e come arrivare.',
  },
  {
    slug: 'tipaza', en: 'tipaza',
    name: 'Tipaza', eyebrow: 'Patrimonio mondiale · Tipaza',
    intro: "Rovine romane e puniche affacciate sul Mediterraneo, a un'ora da Algeri — il sito archeologico più accessibile del paese.",
    quick: "Tipaza è un sito archeologico del litorale algerino, a circa 70 km a ovest di Algeri. Emporio punico divenuto colonia romana, conserva un teatro, basiliche, terme e necropoli direttamente sul mare. È patrimonio mondiale UNESCO dal 1982, insieme al vicino Mausoleo reale di Mauretania.",
    sections: [
      { h: 'Un sito sul mare', p: "Ciò che distingue Tipaza è la posizione: le rovine scendono fino alla roccia e all'acqua, così si visita un sito antico con il Mediterraneo come sfondo permanente. Albert Camus, che vi si recava, ne ha tratto uno dei suoi testi più noti, Nozze a Tipasa." },
      { h: 'Cosa vedere', p: "Il parco archeologico riunisce il teatro, l'anfiteatro, le terme, la basilica di Alessandro e la grande basilica cristiana, oltre al decumano che attraversa la città. Il museo espone mosaici e reperti degli scavi. A pochi chilometri, sul crinale, il Mausoleo reale di Mauretania — vasta tomba circolare a gradoni attribuita a Giuba II e Cleopatra Selene — domina la pianura." },
      { h: 'Il contesto: Cherchell', p: "Una trentina di chilometri più a ovest, Cherchell è l'antica Caesarea, capitale della Mauretania Cesariense. Il suo museo archeologico conserva sculture e mosaici di primo piano e si combina naturalmente con Tipaza nella stessa giornata." },
      { h: 'Come arrivare', p: "Tipaza è a circa un'ora di strada da Algeri lungo la costa, il che ne fa la gita in giornata più semplice dalla capitale. Il sito è all'aperto e poco ombreggiato: cappello, acqua e scarpe adatte. Primavera e autunno sono i periodi migliori." },
    ],
    facts: [
      { label: 'Provincia', value: 'Tipaza' },
      { label: 'Distanza da Algeri', value: 'Circa 70 km' },
      { label: 'UNESCO', value: 'Iscritto nel 1982' },
      { label: 'Da abbinare a', value: 'Cherchell e il Mausoleo reale' },
      { label: 'Durata visita', value: 'Mezza giornata' },
    ],
    faqs: [
      { q: 'Si può visitare Tipaza da Algeri in giornata?', a: "Sì, è la gita classica: un'ora di strada, mezza giornata sul sito e rientro nel pomeriggio. Aggiungendo Cherchell la giornata è completa." },
      { q: "Che cos'è il Mausoleo reale di Mauretania?", a: 'Una tomba monumentale circolare a gradoni, sul crinale sopra la costa, tradizionalmente attribuita al re Giuba II e alla moglie Cleopatra Selene, figlia di Cleopatra VII e Marco Antonio.' },
      { q: 'Ci si può fare il bagno a Tipaza?', a: "La costa intorno ha diverse spiagge e la regione è meta balneare per gli algerini in estate. La balneazione non è prevista nel sito archeologico." },
      { q: 'Serve una guida a Tipaza?', a: 'Il sito si percorre bene anche da soli, ma una guida restituisce la cronologia punica, romana e poi cristiana, che non è ovvia da leggere sul posto.' },
    ],
    seoTitle: 'Tipaza, Algeria: rovine romane in riva al mare',
    seoDescription: "Tipaza, sito romano UNESCO sul Mediterraneo a un'ora da Algeri: teatro, basiliche, Mausoleo reale di Mauretania e museo di Cherchell.",
  },
  {
    slug: 'valle-del-mzab', en: 'mzab-valley',
    name: "La valle del M'Zab", eyebrow: 'Patrimonio mondiale · Ghardaïa',
    intro: "Cinque città fortificate costruite nell'XI secolo dalla comunità ibadita mozabita — un urbanismo così coerente che Le Corbusier vi tornò più volte.",
    quick: "La valle del M'Zab, nella provincia di Ghardaïa, riunisce cinque ksour fortificati — Ghardaïa, Beni Isguen, Melika, Bounoura e El Atteuf — fondati a partire dall'XI secolo dagli ibaditi mozabiti. Ogni città si organizza in cerchi concentrici attorno alla propria moschea, con il suo palmeto e il suo sistema idrico. L'insieme è patrimonio mondiale UNESCO dal 1982.",
    sections: [
      { h: 'Un urbanismo completo', p: "Il M'Zab non è una scenografia: è un sistema. Moschea-fortezza in cima, abitato in cerchi concentrici lungo la collina, mura, cimitero all'esterno, palmeto in basso con le case estive, e un dispositivo di raccolta e ripartizione delle acque di piena che alimenta i giardini. Ogni elemento risponde a un vincolo — difesa, calore, scarsità d'acqua, uguaglianza comunitaria — e l'insieme funziona ancora." },
      { h: "L'influenza sull'architettura moderna", p: "Le Corbusier visitò il M'Zab più volte negli anni Trenta e vi trovò principi che rivendicò apertamente: economia di mezzi, forme pure, rapporto tra spazio privato e luce. Il sito è regolarmente citato come un riferimento maggiore dell'architettura vernacolare." },
      { h: 'Cosa vedere', p: "Ghardaïa e il suo mercato ad anfiteatro sono il punto d'ingresso. Beni Isguen, la città santa, si visita con una guida incaricata dalla comunità, a orari precisi e con regole fotografiche rigide. El Atteuf, la più antica, conserva la moschea Sidi Brahim. Melika domina la valle dalla sua collina e dal suo cimitero." },
      { h: 'Come arrivare e come comportarsi', p: "Ghardaïa si raggiunge in un'ora di volo da Algeri. La valle è nettamente più conservatrice del nord: abiti coprenti per tutti, fotografia discreta e mai di persone senza permesso, e rispetto assoluto delle regole a Beni Isguen. Il periodo migliore va da ottobre ad aprile." },
    ],
    facts: [
      { label: 'Provincia', value: 'Ghardaïa' },
      { label: 'Fondazione', value: "Dall'XI secolo" },
      { label: 'UNESCO', value: 'Iscritto nel 1982' },
      { label: 'Città', value: '5 ksour fortificati' },
      { label: 'Accesso', value: 'Volo Algeri–Ghardaïa, circa 1 h' },
    ],
    faqs: [
      { q: 'Si può visitare Beni Isguen liberamente?', a: 'No. La città santa si visita accompagnati da una guida locale incaricata, a orari definiti, e la fotografia è limitata. È una regola comunitaria, non una formalità turistica.' },
      { q: 'Chi sono i mozabiti?', a: "Una comunità berbera di rito ibadita, ramo dell'islam distinto dal sunnismo e dallo sciismo, insediata nella valle dall'XI secolo e nota per la sua organizzazione sociale e il commercio." },
      { q: 'Quanti giorni prevedere?', a: 'Due o tre giorni permettono di vedere più città, il palmeto e il sistema idrico senza fretta, eventualmente con un\'uscita nel deserto.' },
      { q: 'Che abbigliamento serve?', a: 'Coprente per uomini e donne: spalle e ginocchia coperte, abiti ampi. È la regione più conservatrice di un itinerario algerino classico.' },
    ],
    seoTitle: "Valle del M'Zab, Ghardaïa: la guida (UNESCO)",
    seoDescription: "La valle del M'Zab a Ghardaïa, patrimonio UNESCO: le cinque città ibadite, Beni Isguen, i palmeti e l'urbanismo che ispirò Le Corbusier.",
  },
  {
    slug: 'casbah-algeri', en: 'casbah-of-algiers',
    name: 'La Casbah di Algeri', eyebrow: 'Patrimonio mondiale · Algeri',
    intro: "La medina ottomana di Algeri, che scende dalla collina fino alla baia in un labirinto di vicoli, scale e palazzi.",
    quick: "La Casbah di Algeri è la città vecchia della capitale, costruita su una collina che digrada verso il Mediterraneo. Città ottomana fortificata sviluppata dal XVI secolo su fondamenta più antiche, conserva palazzi, moschee, hammam e un tessuto urbano denso di vicoli e scalinate. È patrimonio mondiale UNESCO dal 1992.",
    sections: [
      { h: 'Una città verticale', p: "Nella Casbah non esiste una strada piana. Tutto è pendenza, gradino e passaggio coperto, e la trama è pensata tanto per la vita comunitaria quanto per la difesa: case a patio rivolte verso l'interno, terrazze comunicanti, vicoli ciechi privati. Non la si attraversa: ci si entra." },
      { h: 'Cosa vedere', p: "La cittadella che corona la collina, il palazzo dei Rais (Bastione 23) sul fronte mare, la moschea Ketchaoua alla cerniera con la città coloniale, la Djamaa el-Kebir, diverse dimore ottomane restaurate e le vedute sulla baia dalle terrazze. Molto di ciò che conta sta dietro le porte: la visita dipende in larga parte da chi vi accompagna." },
      { h: 'Storia e memoria', p: "La Casbah è anche un luogo della memoria della guerra d'indipendenza: i suoi vicoli ospitarono la Battaglia di Algeri, episodio centrale del 1957, e il quartiere resta strettamente associato a quella storia nell'immaginario algerino." },
      { h: 'Come visitarla', p: "Con una guida, senza esitazione. Non per ragioni di sicurezza — il quartiere è abitato e accogliente — ma perché orientarsi è impossibile e l'accesso ai palazzi e alle terrazze passa da chi ci vive. Scarpe adatte: il selciato è ripido e scivoloso con la pioggia." },
    ],
    facts: [
      { label: 'Provincia', value: 'Algeri' },
      { label: 'UNESCO', value: 'Iscritta nel 1992' },
      { label: 'Periodo', value: 'Ottomano, dal XVI secolo' },
      { label: 'Durata visita', value: '2–4 ore' },
      { label: 'Consiglio', value: 'Guida locale vivamente consigliata' },
    ],
    faqs: [
      { q: 'La Casbah è sicura?', a: "Sì. È un quartiere abitato e ospitale; la difficoltà è orientarsi, non sentirsi in pericolo. Come ovunque, tenete telefono e borsa discreti." },
      { q: 'Serve una guida per la Casbah?', a: "È fortemente consigliata. Il dedalo è davvero impraticabile senza riferimenti, e l'essenziale — patii, terrazze, palazzi — sta dietro porte che una guida locale può aprire." },
      { q: 'Quanto tempo prevedere?', a: 'Da due a quattro ore secondo il ritmo e il numero di case visitate. È una visita che si fa a piedi, in salita e in discesa.' },
      { q: "Cos'altro vedere ad Algeri?", a: "La Grande Moschea di Algeri, il Memoriale del Martire, il museo del Bardo, il Giardino di prova di Hamma, la basilica di Notre-Dame d'Afrique e i viali porticati del lungomare." },
    ],
    seoTitle: 'La Casbah di Algeri: visitare la medina (UNESCO)',
    seoDescription: 'La Casbah di Algeri, medina ottomana patrimonio UNESCO: cittadella, palazzo dei Rais, moschea Ketchaoua e vicoli a scalinata. Cosa vedere e come visitarla.',
  },
  {
    slug: 'tassili-najjer', en: 'tassili-najjer',
    name: "Il Tassili n'Ajjer", eyebrow: 'Patrimonio mondiale · Illizi e Djanet',
    intro: "Un altopiano di arenaria erosa grande come un paese, coperto da migliaia di pitture e incisioni preistoriche di un Sahara allora verde.",
    quick: "Il Tassili n'Ajjer è un altopiano di arenaria del sud-est algerino, nelle province di Illizi e Djanet. Ospita una delle maggiori concentrazioni di arte rupestre preistorica al mondo — diverse migliaia di siti — tra formazioni erose in pilastri, archi e canyon. È patrimonio mondiale UNESCO dal 1982, sia per criteri culturali sia naturali.",
    sections: [
      { h: 'Un Sahara che fu verde', p: "Le incisioni più antiche risalgono a circa 10.000 anni fa e raffigurano elefanti, giraffe, ippopotami e coccodrilli. Seguono le fasi pastorali, con le mandrie bovine, poi i cavalli e i carri, infine il cammello. È una registrazione visiva del progressivo inaridimento del Sahara, realizzata da chi lo ha vissuto." },
      { h: 'Il paesaggio', p: "L'altopiano è eroso in quelle che vengono chiamate foreste di roccia: migliaia di pilastri di arenaria separati da corridoi di sabbia, punteggiati da archi naturali e da guelta — vasche d'acqua permanente che ospitano una fauna relitta. A sud, il Tadrart dispiega arenaria rossa e dune tra le più fotogeniche del Sahara." },
      { h: 'I tuareg', p: "Il Tassili è territorio dei Kel Ajjer, confederazione tuareg che ha dato il nome al massiccio. Sono loro a guidare, condurre e cucinare in tutte le spedizioni, e l'ospitalità che accompagna il viaggio — il tè, il pane cotto nella sabbia — non è una messa in scena." },
      { h: 'Come visitarlo', p: "Con un volo Algeri–Djanet, poi in 4×4 e a piedi con un operatore autorizzato munito di permessi. L'altopiano vero e proprio si percorre in trekking di più giorni con asini o cammelli da soma. La stagione è rigorosamente invernale, da novembre a febbraio, e non c'è alcuna rete una volta fuori città." },
    ],
    facts: [
      { label: 'Province', value: 'Illizi e Djanet' },
      { label: 'UNESCO', value: 'Iscritto nel 1982 (misto)' },
      { label: 'Arte rupestre', value: 'Diverse migliaia di siti' },
      { label: 'Stagione', value: 'Solo da novembre a febbraio' },
      { label: 'Accesso', value: 'Volo Algeri–Djanet poi 4×4' },
    ],
    faqs: [
      { q: 'Si può visitare il Tassili da soli?', a: "No. Il grande sud si percorre con un operatore autorizzato, una guida accreditata e permessi. Non è solo una regola amministrativa: distanze, calore e assenza di rete ne fanno un ambiente da spedizione." },
      { q: "Quanti anni ha l'arte rupestre del Tassili?", a: 'Le incisioni più antiche sono comunemente datate a circa 10.000 anni fa, e la produzione è proseguita per diversi millenni attraverso fasi successive.' },
      { q: 'Bisogna essere allenati?', a: 'Per il Tadrart in 4×4, no: bastano brevi camminate. Per l\'altopiano del Tassili sì — è un trekking di più giorni in autonomia, con notti fredde.' },
      { q: 'Quando partire?', a: 'Da novembre a febbraio. Fuori da questa finestra il caldo rende le spedizioni pericolose e non vengono organizzate.' },
    ],
    seoTitle: "Tassili n'Ajjer: arte rupestre e deserto (UNESCO)",
    seoDescription: "Il Tassili n'Ajjer, altopiano UNESCO del Sahara algerino: arte rupestre preistorica, foreste di roccia, guelta e Tadrart. Stagione, accesso e permessi.",
  },
  {
    slug: 'beni-hammad', en: 'beni-hammad',
    name: "Al Qal'a dei Beni Hammad", eyebrow: "Patrimonio mondiale · M'Sila",
    intro: "La capitale hammadide fondata nel 1007, abbandonata e poi distrutta — e il minareto più alto conservato in Algeria, solo tra gli altipiani.",
    quick: "Al Qal'a dei Beni Hammad, nella provincia di M'Sila, è la prima capitale della dinastia hammadide, fondata nel 1007 sui monti dell'Hodna. Abbandonata a favore di Béjaïa e poi distrutta nel XII secolo, conserva le fondazioni dei palazzi, la grande moschea e il suo minareto, il più alto sopravvissuto in Algeria. È patrimonio mondiale UNESCO dal 1980.",
    sections: [
      { h: 'Una capitale scomparsa', p: "Fondata da Hammad ibn Buluggin, principe ziride, la città divenne in un secolo una prospera capitale berbera, con palazzi, bagni, mercati e botteghe. Il trasferimento della corte a Béjaïa e poi le distruzioni del XII secolo la svuotarono. Ciò che resta è un campo di rovine eccezionalmente leggibile: proprio perché il sito non fu mai rioccupato, restituisce l'immagine completa di una città musulmana fortificata." },
      { h: 'Cosa vedere', p: "Il minareto della grande moschea, alto una ventina di metri, domina il sito e si vede da lontano. Le fondazioni del palazzo Dar al-Bahr, con la sua grande vasca, lasciano intuire un'architettura di corte e d'acqua. Le tracce delle mura, delle abitazioni e delle botteghe ceramiche completano l'insieme, in un paesaggio di colline aperte." },
      { h: 'Da abbinare a', p: "La provincia di M'Sila conserva anche Bou Saada, oasi al margine sahariano a poche ore di strada, con il suo palmeto, la gola e la zawiya di El Hamel. I due si combinano bene su due giornate, arrivando da Algeri o da Sétif." },
      { h: 'Come arrivare', p: "Il sito è in aperta campagna, a una trentina di chilometri a nord-est di M'Sila, e non è servito dai trasporti pubblici: si raggiunge in auto. Servono acqua e cappello, il luogo è totalmente scoperto. Primavera e autunno sono le stagioni migliori." },
    ],
    facts: [
      { label: 'Provincia', value: "M'Sila" },
      { label: 'Fondazione', value: '1007, da Hammad ibn Buluggin' },
      { label: 'UNESCO', value: 'Iscritto nel 1980' },
      { label: 'Minareto', value: 'Il più alto conservato in Algeria' },
      { label: 'Accesso', value: 'Solo in auto' },
    ],
    faqs: [
      { q: "Che cosa resta di Al Qal'a dei Beni Hammad?", a: 'Un vasto campo di rovine non ricostruite: il minareto della grande moschea, le fondazioni dei palazzi e della vasca, e le tracce delle mura e dei quartieri artigianali.' },
      { q: 'Chi erano gli hammadidi?', a: 'Una dinastia berbera nata dagli ziridi, che regnò sul Maghreb centrale dall\'XI al XII secolo da questa capitale e poi da Béjaïa.' },
      { q: 'Il sito è attrezzato?', a: 'Sommariamente. Ci sono custodi e un accesso segnalato, ma poca interpretazione sul posto: una guida fa una differenza reale.' },
      { q: 'Quanto tempo serve?', a: "Circa due ore sul posto, più il viaggio. Mezza giornata da M'Sila, di più da Algeri o Sétif." },
    ],
    seoTitle: "Al Qal'a dei Beni Hammad: la capitale hammadide",
    seoDescription: "Al Qal'a dei Beni Hammad, capitale hammadide del 1007 patrimonio UNESCO nella provincia di M'Sila: minareto, palazzo Dar al-Bahr e mura.",
  },
  {
    slug: 'costantina', en: 'constantine',
    name: 'Costantina', eyebrow: 'Città dei ponti · Est algerino',
    intro: 'Una città costruita su una rocca spaccata da un canyon di duecento metri, ricucita da una serie di ponti spettacolari.',
    quick: "Costantina è la grande città dell'est algerino, costruita su uno sperone roccioso attraversato dalle gole del Rhumel, superate da diversi ponti tra cui il celebre ponte sospeso Sidi M'Cid. Antica Cirta, capitale del regno numida di Massinissa, conserva il palazzo Ahmed Bey, il museo di Cirta e una tradizione musicale malouf ancora viva.",
    sections: [
      { h: 'Il sito', p: "Poche città hanno un sito così improbabile. La rocca di Costantina è circondata e tagliata dalle gole del Rhumel, profonde quasi duecento metri, e la città si è sviluppata scavalcando quel vuoto: passerelle, ponti stradali, viadotti. Il ponte sospeso Sidi M'Cid, il ponte di El Kantara e la passerella Perrégaux ne disegnano una silhouette unica." },
      { h: 'Storia', p: "La città è l'antica Cirta, capitale del regno numida sotto Massinissa nel II secolo a.C., poi città romana ricostruita dall'imperatore Costantino, che le lascia il nome. Sotto la reggenza ottomana diventa la grande città del beilicato dell'Est, e il palazzo dell'ultimo bey ne conserva la testimonianza." },
      { h: 'Cosa vedere', p: "Il palazzo Ahmed Bey, con i suoi cortili, le gallerie dipinte e i giardini, è il monumento principale. Il museo di Cirta raccoglie le collezioni numide e romane della regione. Il monumento ai caduti, le gole viste dalle passerelle, la città vecchia, la moschea dell'Emiro Abdelkader e la medersa completano la visita." },
      { h: 'Musica e cultura', p: "Costantina è il centro del malouf, scuola di musica arabo-andalusa ereditata da Siviglia, suonata ai matrimoni e nei festival della città. È anche una città di cucina rinomata, nota in particolare per la chakhchoukha." },
    ],
    facts: [
      { label: 'Provincia', value: 'Costantina' },
      { label: 'Nome antico', value: 'Cirta' },
      { label: 'Gole', value: 'Circa 200 m di profondità' },
      { label: 'Musica', value: 'Malouf (arabo-andaluso)' },
      { label: 'Da abbinare a', value: 'Djémila e Timgad' },
    ],
    faqs: [
      { q: 'Perché Costantina è chiamata la città dei ponti?', a: 'Perché la sua rocca è tagliata dalle gole del Rhumel e la città ha potuto svilupparsi solo scavalcandole: diversi ponti e passerelle collegano i quartieri sopra il vuoto.' },
      { q: 'Quanto tempo prevedere a Costantina?', a: "Una o due giornate per la città. Aggiungendo Djémila e Timgad, tre o quattro giorni per l'est del paese." },
      { q: 'Come raggiungere Costantina?', a: "In aereo da Algeri, in treno o dall'autostrada est-ovest. La città ha l'aeroporto internazionale Mohamed Boudiaf." },
      { q: "Che cos'è il malouf?", a: 'Una scuola di musica arabo-andalusa di cui Costantina è il principale centro in Algeria, tramandata dall\'esilio andaluso e ancora suonata oggi.' },
    ],
    seoTitle: 'Costantina, Algeria: la città dei ponti — guida',
    seoDescription: "Costantina, la città dei ponti sulle gole del Rhumel: palazzo Ahmed Bey, museo di Cirta, l'antica Cirta numida e la musica malouf.",
  },
  {
    slug: 'djanet', en: 'djanet',
    name: 'Djanet', eyebrow: 'Porta del Sahara · Sud-est',
    intro: "L'oasi tuareg del sud-est algerino, base di partenza per il Tassili n'Ajjer e il Tadrart Rosso.",
    quick: "Djanet è un'oasi del sud-est algerino, addossata a falesie rosse ai piedi del Tassili n'Ajjer. È la città tuareg di riferimento del grande sud e il punto di partenza delle spedizioni verso l'altopiano del Tassili e il deserto del Tadrart. Vi si accede in aereo da Algeri e la stagione va da novembre a febbraio.",
    sections: [
      { h: "L'oasi", p: "Djanet è un vero luogo di vita prima ancora che una base logistica: un palmeto esteso, antichi ksour aggrappati alla roccia — El Mihan, Azelouaz, Adjahil — e un mercato dove si incrociano tuareg e gente venuta dal nord. La città è tranquilla, l'accoglienza calorosa, e si percepisce subito di aver cambiato paese culturale." },
      { h: 'Il Tadrart Rosso', p: "A sud di Djanet si estende il Tadrart, un massiccio di arenaria rossa scolpita dal vento, con archi naturali, canyon e dune che si appoggiano alla roccia nera. È il paesaggio sahariano più fotografato d'Algeria, percorso in 4×4 su più giorni con notti al campo." },
      { h: "Il Tassili n'Ajjer", p: "A nord e a est, l'altopiano del Tassili si percorre in trekking di più giorni, con asini da soma e una squadra tuareg, per raggiungere i grandi siti di arte rupestre. È più impegnativo fisicamente del Tadrart, e complementare." },
      { h: 'Informazioni pratiche', p: "L'accesso è in aereo da Algeri con Air Algérie o Tassili Airlines; le frequenze sono limitate e i voli si riempiono in stagione, quindi conviene prenotare presto. Non c'è alcuna rete fuori città, le notti invernali sono fredde, e tutto si svolge con un operatore autorizzato e permessi." },
    ],
    facts: [
      { label: 'Provincia', value: 'Djanet' },
      { label: 'Cultura', value: 'Tuareg (Kel Ajjer)' },
      { label: 'Accesso', value: 'Volo da Algeri' },
      { label: 'Stagione', value: 'Da novembre a febbraio' },
      { label: 'Nelle vicinanze', value: "Tadrart Rosso, Tassili n'Ajjer" },
    ],
    faqs: [
      { q: 'Come si arriva a Djanet?', a: "In aereo da Algeri, con Air Algérie o Tassili Airlines. La strada dal nord richiede diversi giorni e non è un'opzione per un viaggio classico." },
      { q: 'Che differenza c\'è tra il Tadrart e il Tassili?', a: "Il Tadrart si percorre in 4×4, con brevi camminate, e offre i paesaggi di arenaria rossa e dune. L'altopiano del Tassili si fa in trekking di più giorni e concentra i grandi siti di arte rupestre." },
      { q: 'Fa freddo di notte?', a: 'Sì, molto. In pieno inverno le temperature notturne possono avvicinarsi allo zero al campo: giacca calda, berretto e strati veri sono indispensabili.' },
      { q: "C'è campo telefonico?", a: 'In città a Djanet sì. Appena si entra nel deserto, nulla — le squadre usano comunicazioni satellitari.' },
    ],
    seoTitle: 'Djanet, Algeria: porta del Tassili e del Tadrart',
    seoDescription: "Djanet, oasi tuareg del sud-est algerino: base di partenza per il Tassili n'Ajjer e il Tadrart Rosso. Accesso, stagione, permessi e cosa sapere.",
  },
  {
    slug: 'tlemcen', en: 'tlemcen',
    name: 'Tlemcen', eyebrow: 'Eredità andalusa · Ovest algerino',
    intro: "La capitale culturale dell'Algeria andalusa — Grande Moschea, minareto di Mansourah, palazzo El Mechouar e musica gharnati.",
    quick: "Tlemcen è una città dell'ovest algerino, vicina al confine marocchino, considerata il centro dell'eredità andalusa in Algeria. Antica capitale zianide, conserva la Grande Moschea del XII secolo, il minareto incompiuto di Mansourah, il palazzo El Mechouar, il santuario di Sidi Boumediene e una tradizione musicale gharnati ereditata da Granada.",
    sections: [
      { h: 'Una capitale andalusa', p: "Tlemcen fu capitale del regno zianide dal XIII al XVI secolo e crocevia tra Maghreb, Andalusia e Sahara. Le ondate successive di profughi andalusi vi portarono architettura, artigianato e musica, al punto che oggi la città è il riferimento di quell'eredità in Algeria." },
      { h: 'Cosa vedere', p: "La Grande Moschea, fondata nell'XI secolo e rimaneggiata nel XII, con il suo mihrab in stucco traforato. Il complesso di Mansourah e il suo minareto incompiuto, resto di un assedio merinide. Il palazzo El Mechouar, restaurato, nel cuore della cittadella zianide. Il santuario e la medersa di Sidi Boumediene a El Eubbad. E il plateau di Lalla Setti per la vista sulla città." },
      { h: 'Natura e dintorni', p: "Le cascate di El Ourit, in una gola boscosa alle porte della città, offrono un contrasto con i monumenti. La regione conta anche grotte, pinete e, più lontano, i resti romani e numidi di Siga verso la costa." },
      { h: 'Musica e artigianato', p: "Il gharnati, scuola di musica arabo-andalusa nata a Granada, è vivo a Tlemcen e si suona ai matrimoni e nei festival. La città è nota anche per l'artigianato: tappeti, ricamo a filo d'oro, rame e ceramica." },
    ],
    facts: [
      { label: 'Provincia', value: 'Tlemcen' },
      { label: 'Periodo di punta', value: 'Regno zianide, XIII–XVI sec.' },
      { label: 'Musica', value: 'Gharnati (arabo-andaluso)' },
      { label: 'Da vedere', value: 'Grande Moschea, Mansourah, El Mechouar' },
      { label: 'Stagione migliore', value: 'Aprile–giugno, settembre–novembre' },
    ],
    faqs: [
      { q: 'Perché Tlemcen è chiamata capitale andalusa?', a: "Perché ha accolto ondate successive di profughi da Al-Andalus, la cui architettura, artigianato e musica hanno plasmato la città, e perché ne resta il principale conservatorio in Algeria." },
      { q: "Che cos'è Mansourah?", a: 'Una città d\'assedio costruita dai merinidi nel XIV secolo di fronte a Tlemcen. Ne restano mura e un minareto monumentale rimasto incompiuto.' },
      { q: 'Quanti giorni prevedere?', a: 'Due giornate permettono di vedere i grandi monumenti, El Ourit e Lalla Setti senza fretta.' },
      { q: 'Come raggiungere Tlemcen?', a: 'Dal suo aeroporto con voli da Algeri, oppure su strada da Orano, a circa due ore.' },
    ],
    seoTitle: 'Tlemcen, Algeria: eredità andalusa e gharnati',
    seoDescription: "Tlemcen, capitale dell'Algeria andalusa: Grande Moschea, minareto di Mansourah, palazzo El Mechouar, Sidi Boumediene e cascate di El Ourit.",
  },
];

export const destItByEn = (en: string) => DESTINATIONS_IT.find(d => d.en === en);

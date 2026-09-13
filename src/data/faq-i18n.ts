// Translations of the 39 categorised site FAQ answers in src/data/faq.ts.
//
// Positional: entry N here is the translation of the Nth item when faq.ts is
// flattened category by category. The build asserts the counts match, so a
// question added to faq.ts fails the build here rather than silently shipping
// the wrong answer under the right question.
//
// English stays the source of truth for what the policy IS; this file only
// carries language. The cancellation answer in particular is the owner's
// confirmed policy — change it in faq.ts first, then here.

export const FAQ_I18N: Record<string, [string, string][]> = {
  "fr": [
    [
      "L'Algérie est-elle sûre pour les touristes ?",
      "Oui pour un tourisme normal dans le nord et sur les circuits organisés dans le désert. Les villes sont globalement calmes et accueillantes ; prenez les précautions habituelles, comme partout. Le grand sud et les régions frontalières sont réglementés et ne se visitent qu'avec des opérateurs licenciés et des permis."
    ],
    [
      "Y a-t-il des régions à éviter ?",
      "Les zones frontalières avec le Mali, le Niger et la Libye, ainsi que certaines parties de l'extrême sud hors des itinéraires autorisés, sont interdites au voyage indépendant. Les expéditions organisées restent dans les zones permises avec les autorisations requises."
    ],
    [
      "Puis-je voyager en indépendant ?",
      "Dans le nord, oui, avec de la patience et une vigilance normale. Le Sahara ne se prête pas au voyage indépendant : il s'organise avec un opérateur algérien licencié, des guides, des 4x4 et des permis."
    ],
    [
      "Ai-je besoin d'un visa pour l'Algérie ?",
      "La plupart des nationalités ont besoin d'un visa obtenu à l'avance auprès d'un consulat algérien, généralement appuyé par une invitation ou un voucher d'une agence licenciée. Les règles varient selon la nationalité et évoluent — vérifiez toujours auprès de votre consulat."
    ],
    [
      "Pouvez-vous m'aider pour le visa ?",
      "Oui — en tant qu'opérateur algérien licencié, nous fournissons la lettre d'invitation / le voucher touristique et la confirmation de réservation que la plupart des consulats exigent pour un visa touristique."
    ],
    [
      "Existe-t-il un e-visa ou un visa à l'arrivée ?",
      "En général non pour le tourisme ordinaire. La principale exception est le tourisme organisé vers le désert de l'extrême sud, où une entrée simplifiée peut être organisée pour le groupe. Vérifiez officiellement les règles en vigueur avant de compter dessus."
    ],
    [
      "Quelle est la meilleure période pour visiter l'Algérie ?",
      "Le printemps (mars-mai) et l'automne (septembre-novembre) sont les meilleures saisons pour le nord — la côte, les cités romaines et les montagnes. Le Sahara est une destination d'hiver, au mieux de novembre à février."
    ],
    [
      "Quand faut-il aller au Sahara ?",
      "De novembre à février, quand les températures du désert sont fraîches et le ciel limpide. L'été dans l'extrême sud est dangereusement chaud et ne se prête pas au voyage."
    ],
    [
      "Peut-on voyager pendant le Ramadan ?",
      "Oui — c'est une période particulière pour venir, même si les possibilités de restauration en journée et certains horaires changent. Nous construisons les itinéraires en conséquence pour que votre voyage se déroule sans accroc."
    ],
    [
      "Combien coûte un voyage en Algérie ?",
      "Cela dépend de la durée et du style. Nos excursions à la journée démarrent autour de 30 €, les circuits privés de plusieurs jours à partir de quelques centaines d'euros, et nos plus longs voyages privés de 10 jours tournent autour de 1 200 € par personne. Chaque page de circuit indique son prix."
    ],
    [
      "L'Algérie est-elle chère ?",
      "Les dépenses quotidiennes sont modérées. Le coût principal d'un voyage tient au guidage privé, au transport, aux permis et aux vols intérieurs, plutôt qu'à des prix locaux élevés."
    ],
    [
      "Que comprennent les prix des circuits ?",
      "Cela varie d'un circuit à l'autre — chaque page comporte une liste « Inclus / Non inclus ». En général, un guide licencié, le transport privé et certains repas ou nuitées sont inclus ; les vols internationaux et les frais de visa ne le sont pas."
    ],
    [
      "Comment se déplace-t-on en Algérie ?",
      "Les vols intérieurs couvrent les longues distances (surtout vers le Sahara), des trains confortables relient les villes du nord, et le véhicule privé avec chauffeur est la façon la plus simple de circuler. Dans le désert, on se déplace uniquement en 4x4."
    ],
    [
      "Faut-il louer une voiture ?",
      "Pour le nord c'est possible, mais la plupart des visiteurs préfèrent une voiture privée avec chauffeur. Pour le sud, un opérateur licencié avec un 4x4 correctement équipé est obligatoire — nous organisons tous les transports."
    ],
    [
      "Les vols intérieurs sont-ils fiables ?",
      "Air Algérie et d'autres compagnies relient Alger aux grandes villes et aux villes sahariennes comme Djanet et Timimoun. Nous vous conseillons sur les horaires et intégrons les vols à votre programme (leur coût est en général séparé)."
    ],
    [
      "Peut-on utiliser les cartes bancaires et les distributeurs ?",
      "L'Algérie fonctionne très largement au comptant. Les cartes ne sont acceptées que dans certains hôtels urbains et rarement ailleurs, et les distributeurs acceptant les cartes étrangères ne sont pas fiables. Prévoyez de payer la plupart des choses en espèces."
    ],
    [
      "Quelle monnaie est utilisée, et peut-on s'en procurer à l'avance ?",
      "Le dinar algérien (DZD). Il ne peut pas s'obtenir hors du pays : apportez des euros ou des dollars américains en espèces et changez-les à l'arrivée."
    ],
    [
      "Combien d'espèces faut-il apporter ?",
      "De quoi couvrir vos dépenses personnelles, les repas non inclus dans votre circuit, les pourboires et les souvenirs. Emportez un mélange de grosses et de petites coupures et gardez-les en sécurité."
    ],
    [
      "Y a-t-il du wifi et des données mobiles ?",
      "Les hôtels urbains ont généralement le wifi. Une carte SIM locale (Djezzy, Mobilis ou Ooredoo) offre des données à bas prix et s'enregistre avec votre passeport. La couverture s'amenuise vite dans le désert."
    ],
    [
      "Mon téléphone fonctionnera-t-il au Sahara ?",
      "Dans les villes et à leurs abords, oui. Le désert profond est très largement hors réseau, avec peu ou pas de signal — cela fait partie de son charme —, alors prévenez vos proches de votre programme avant de partir."
    ],
    [
      "À quoi ressemble la cuisine algérienne ?",
      "Couscous, tajines mijotés, grillades et poissons de la côte, pain frais, dattes sahariennes, huile d'olive kabyle et thé à la menthe versé de haut — méditerranéenne et régionale, et généreuse."
    ],
    [
      "Pouvez-vous prendre en charge les végétariens ou les régimes particuliers ?",
      "Oui — couscous aux légumes, salades, légumineuses et pain rendent le végétarisme facile, et nous pouvons tenir compte des allergies ou d'autres besoins si vous nous le dites à l'avance."
    ],
    [
      "L'eau du robinet est-elle potable ?",
      "Tenez-vous-en à l'eau en bouteille, bon marché et largement disponible ; elle est fournie sur nos voyages dans le désert."
    ],
    [
      "L'Algérie est-elle sûre pour les femmes ?",
      "Globalement oui, avec les précautions habituelles. Le harcèlement grave est rare, mais une tenue sobre et de l'attention — surtout hors des grandes villes — rendent le voyage plus confortable. Un voyage privé et encadré ajoute une couche de tranquillité."
    ],
    [
      "Comment les femmes doivent-elles s'habiller ?",
      "Des vêtements sobres et couvrants sont appréciés ; emportez un foulard pour les mosquées et les zones conservatrices. Les plages et les quartiers des grandes villes sont plus détendus, surtout en été."
    ],
    [
      "Faut-il un permis pour le Sahara ?",
      "Oui — les zones désertiques protégées, dont le Tassili n'Ajjer et la Tadrart, exigent des permis et un guide local licencié. Nous nous chargeons des permis et du guidage dans le cadre de tout voyage dans le désert."
    ],
    [
      "Puis-je explorer le désert par moi-même ?",
      "Non — le voyage indépendant dans le désert profond est restreint pour des raisons de sécurité et de conservation. Il se fait avec un opérateur licencié, des 4x4 et les autorisations requises."
    ],
    [
      "Puis-je photographier librement ?",
      "Les paysages, les monuments et les ruines ne posent généralement pas de problème. Demandez toujours avant de photographier des personnes, et évitez de photographier les sites militaires et policiers ainsi que certains bâtiments gouvernementaux."
    ],
    [
      "Puis-je apporter un drone ?",
      "Les drones sont réglementés et souvent interdits en Algérie. N'en apportez pas et n'en faites pas voler sans autorisation préalable explicite — cela peut causer de sérieux problèmes à la frontière ou sur place."
    ],
    [
      "Faut-il des vaccins ?",
      "Aucun vaccin particulier n'est exigé pour la plupart des voyageurs. Assurez-vous que vos vaccins courants sont à jour, consultez votre médecin ou un centre de vaccination internationale, et emportez vos médicaments personnels dans leur emballage d'origine."
    ],
    [
      "Y a-t-il des soins médicaux ?",
      "Les villes disposent d'hôpitaux et de pharmacies ; le désert est isolé, emportez donc une trousse de premiers secours personnelle. Les pharmacies sont bien approvisionnées dans les villes."
    ],
    [
      "Faut-il une assurance voyage ?",
      "Oui — nous recommandons vivement une assurance voyage complète couvrant les zones reculées et le désert. Elle n'est pas comprise dans le prix des circuits."
    ],
    [
      "Que faut-il emporter pour le Sahara ?",
      "Des couches chaudes pour des nuits réellement froides, une forte protection solaire, une lampe frontale, des chaussures fermées solides, un foulard contre le soleil et la poussière, et une gourde réutilisable."
    ],
    [
      "Et pour les villes et le nord ?",
      "De bonnes chaussures de marche pour la Casbah et les ruines, des vêtements sobres, et une veste légère pour les soirées de printemps et d'automne. Ajoutez un maillot de bain pour la côte en été."
    ],
    [
      "Comment réserver un circuit ?",
      "Envoyez-nous vos dates, la taille du groupe et vos centres d'intérêt via le formulaire de contact ou sur WhatsApp. Nous vérifions les disponibilités et les permis éventuels, puis nous confirmons les détails par e-mail."
    ],
    [
      "Comment et quand paie-t-on ?",
      "Le paiement s'organise à la réservation — en général un acompte pour confirmer le voyage et le solde avant ou au début. Contactez-nous pour les modalités et conditions en vigueur pour votre circuit."
    ],
    [
      "Ma réservation est-elle confirmée immédiatement ?",
      "Nous confirmons par e-mail ou WhatsApp une fois vérifiés les disponibilités, le transport et les permis nécessaires — pas automatiquement, afin que ce que nous confirmons soit réel."
    ],
    [
      "Quelle est votre politique d'annulation ?",
      "Annulation gratuite jusqu'à 5 jours avant la date de départ de votre circuit — annulez à tout moment avant cette échéance et vous êtes intégralement remboursé. Dans les 5 jours précédant le départ, les frais déjà engagés pour vous (hôtels, vols intérieurs, guides et prestataires) peuvent ne plus être récupérables, et nous remboursons ce qui reste. Les frais de visa gouvernementaux et les vols réservés par vous-même sont versés à des tiers et ne sont jamais remboursables. Les conditions complètes vous sont confirmées par écrit lors de la réservation."
    ],
    [
      "Puis-je changer mes dates ou mon itinéraire ?",
      "Nous ferons de notre mieux pour accueillir les changements, sous réserve des disponibilités et des conditions des prestataires ou des permis. Prévenez-nous le plus tôt possible pour que nous puissions ajuster le programme."
    ]
  ],
  "it": [
    [
      "L'Algeria è sicura per i turisti?",
      "Sì per il turismo normale al nord e sui viaggi organizzati nel deserto. Le città sono in genere tranquille e accoglienti; usate le precauzioni consuete, come ovunque. L'estremo sud e le zone di confine sono regolamentati e si visitano solo con operatori autorizzati e permessi."
    ],
    [
      "Ci sono zone da evitare?",
      "Le fasce di confine con Mali, Niger e Libia, e alcune parti dell'estremo sud fuori dagli itinerari autorizzati, sono vietate al viaggio indipendente. Le spedizioni organizzate restano nelle aree consentite con le autorizzazioni richieste."
    ],
    [
      "Posso viaggiare in autonomia?",
      "Al nord sì, con pazienza e la normale attenzione. Il Sahara non si presta al viaggio indipendente: si organizza con un operatore algerino autorizzato, guide, 4x4 e permessi."
    ],
    [
      "Serve il visto per l'Algeria?",
      "La maggior parte delle nazionalità ha bisogno di un visto ottenuto in anticipo presso un consolato algerino, di norma con un invito o un voucher di un'agenzia autorizzata. Le regole variano per nazionalità e cambiano nel tempo — verificate sempre con il vostro consolato."
    ],
    [
      "Potete aiutarmi con il visto?",
      "Sì — come operatore algerino autorizzato forniamo la lettera di invito / il voucher turistico e la conferma di prenotazione che la maggior parte dei consolati richiede per un visto turistico."
    ],
    [
      "Esiste un e-visa o il visto all'arrivo?",
      "In genere no per il turismo ordinario. L'eccezione principale è il turismo organizzato verso il deserto dell'estremo sud, dove per il gruppo può essere predisposto un ingresso semplificato. Verificate ufficialmente le regole in vigore prima di farci affidamento."
    ],
    [
      "Qual è il periodo migliore per visitare l'Algeria?",
      "La primavera (marzo-maggio) e l'autunno (settembre-novembre) sono i periodi migliori per il nord — costa, città romane e montagne. Il Sahara è una meta invernale, al meglio da novembre a febbraio."
    ],
    [
      "Quando conviene andare nel Sahara?",
      "Da novembre a febbraio, quando le temperature del deserto sono fresche e il cielo limpido. L'estate nell'estremo sud è pericolosamente calda e non adatta al viaggio."
    ],
    [
      "Si può viaggiare durante il Ramadan?",
      "Sì — è un periodo speciale per venire, anche se le possibilità di mangiare di giorno e alcuni orari cambiano. Costruiamo gli itinerari tenendone conto, perché il viaggio fili liscio."
    ],
    [
      "Quanto costa un viaggio in Algeria?",
      "Dipende dalla durata e dallo stile. Le nostre escursioni in giornata partono da circa 30 €, i viaggi privati di più giorni da qualche centinaio di euro, e i nostri viaggi privati più lunghi di 10 giorni si aggirano sui 1.200 € a persona. Ogni pagina di viaggio indica il suo prezzo."
    ],
    [
      "L'Algeria è cara?",
      "Le spese quotidiane sono contenute. Il costo principale di un viaggio sta nella guida privata, nei trasporti, nei permessi e nei voli interni, più che in prezzi locali alti."
    ],
    [
      "Che cosa comprendono i prezzi dei viaggi?",
      "Varia da viaggio a viaggio — ogni pagina ha un elenco « Incluso / Non incluso ». In genere sono inclusi una guida autorizzata, il trasporto privato e alcuni pasti o pernottamenti; non lo sono i voli internazionali e i costi del visto."
    ],
    [
      "Come ci si sposta in Algeria?",
      "I voli interni coprono le lunghe distanze (soprattutto verso il Sahara), treni confortevoli collegano le città del nord, e il veicolo privato con autista è il modo più semplice per girare. Nel deserto ci si muove solo in 4x4."
    ],
    [
      "Devo noleggiare un'auto?",
      "Per il nord è possibile, ma la maggior parte dei visitatori preferisce un'auto privata con autista. Per il sud è obbligatorio un operatore autorizzato con un 4x4 adeguatamente equipaggiato — organizziamo noi tutti i trasporti."
    ],
    [
      "I voli interni sono affidabili?",
      "Air Algérie e altre compagnie collegano Algeri con le città principali e con centri sahariani come Djanet e Timimoun. Vi consigliamo sugli orari e inseriamo i voli nel programma (il loro costo è di norma separato)."
    ],
    [
      "Si possono usare carte e bancomat?",
      "L'Algeria è in larghissima parte un'economia in contanti. Le carte sono accettate solo in alcuni hotel cittadini e raramente altrove, e gli sportelli che accettano carte estere non sono affidabili. Mettete in conto di pagare quasi tutto in contanti."
    ],
    [
      "Che valuta si usa, e la si può avere in anticipo?",
      "Il dinaro algerino (DZD). Non si può ottenere fuori dal paese, quindi portate euro o dollari statunitensi in contanti e cambiateli all'arrivo."
    ],
    [
      "Quanti contanti portare?",
      "Abbastanza per le spese personali, i pasti non inclusi nel viaggio, le mance e i souvenir. Portate un misto di banconote grandi e piccole e tenetele al sicuro."
    ],
    [
      "C'è wifi e connessione dati?",
      "Gli hotel cittadini di solito hanno il wifi. Una SIM locale (Djezzy, Mobilis o Ooredoo) offre dati a poco prezzo e si registra con il passaporto. La copertura si dirada rapidamente nel deserto."
    ],
    [
      "Il mio telefono funzionerà nel Sahara?",
      "Nei centri abitati e nei dintorni sì. Il deserto profondo è in gran parte fuori rete, con poco o nessun segnale — fa parte del suo fascino — quindi avvisate i vostri cari del programma prima di partire."
    ],
    [
      "Com'è la cucina algerina?",
      "Couscous, tajine cotti a lungo, carni alla griglia e pesce della costa, pane fresco, datteri sahariani, olio d'oliva cabilo e tè alla menta versato dall'alto — mediterranea e regionale, e generosa."
    ],
    [
      "Potete gestire vegetariani o esigenze alimentari?",
      "Sì — couscous di verdure, insalate, legumi e pane rendono facile mangiare vegetariano, e possiamo tenere conto di allergie o altre necessità se ce lo dite in anticipo."
    ],
    [
      "L'acqua del rubinetto è potabile?",
      "Attenetevi all'acqua in bottiglia, che costa poco ed è ovunque; nei nostri viaggi nel deserto è fornita da noi."
    ],
    [
      "L'Algeria è sicura per le donne?",
      "In generale sì, con le normali precauzioni. Le molestie gravi sono rare, ma un abbigliamento sobrio e un po' di attenzione — soprattutto fuori dalle grandi città — rendono il viaggio più confortevole. Un viaggio privato e guidato aggiunge tranquillità."
    ],
    [
      "Come devono vestirsi le donne?",
      "Abiti sobri e coprenti sono apprezzati; portate un foulard per le moschee e le zone conservatrici. Le spiagge e i quartieri delle grandi città sono più rilassati, soprattutto d'estate."
    ],
    [
      "Serve un permesso per il Sahara?",
      "Sì — le zone desertiche protette, tra cui il Tassili n'Ajjer e il Tadrart, richiedono permessi e una guida locale autorizzata. Ci occupiamo noi dei permessi e della guida come parte di ogni viaggio nel deserto."
    ],
    [
      "Posso esplorare il deserto da solo?",
      "No — il viaggio indipendente nel deserto profondo è limitato per ragioni di sicurezza e conservazione. Si fa con un operatore autorizzato, veicoli 4x4 e le autorizzazioni necessarie."
    ],
    [
      "Posso fotografare liberamente?",
      "Paesaggi, monumenti e rovine in genere non pongono problemi. Chiedete sempre prima di fotografare le persone ed evitate di fotografare siti militari e di polizia e alcuni edifici governativi."
    ],
    [
      "Posso portare un drone?",
      "I droni sono regolamentati e spesso vietati in Algeria. Non portateli né fateli volare senza un'autorizzazione preventiva esplicita — può causare seri problemi alla frontiera o sul posto."
    ],
    [
      "Servono vaccinazioni?",
      "Per la maggior parte dei viaggiatori non è richiesta alcuna vaccinazione particolare. Verificate che i vaccini di routine siano aggiornati, consultate il vostro medico o un centro di medicina dei viaggi, e portate i farmaci personali nella confezione originale."
    ],
    [
      "C'è assistenza medica?",
      "Le città hanno ospedali e farmacie; il deserto è remoto, quindi portate un kit di primo soccorso personale. Nelle città le farmacie sono ben fornite."
    ],
    [
      "Serve un'assicurazione di viaggio?",
      "Sì — raccomandiamo vivamente un'assicurazione di viaggio completa che copra le zone remote e il deserto. Non è compresa nel prezzo dei viaggi."
    ],
    [
      "Che cosa mettere in valigia per il Sahara?",
      "Strati caldi per notti davvero fredde, una forte protezione solare, una torcia frontale, scarpe chiuse robuste, un foulard contro sole e polvere, e una borraccia riutilizzabile."
    ],
    [
      "E per le città e il nord?",
      "Scarpe comode per la Casbah e le rovine, abiti sobri e una giacca leggera per le serate di primavera e autunno. Aggiungete il costume da bagno per la costa in estate."
    ],
    [
      "Come si prenota un viaggio?",
      "Inviateci le vostre date, il numero di partecipanti e i vostri interessi tramite il modulo di contatto o su WhatsApp. Verifichiamo la disponibilità e gli eventuali permessi e vi confermiamo i dettagli via e-mail."
    ],
    [
      "Come e quando si paga?",
      "Il pagamento si concorda alla prenotazione — di norma un acconto per confermare il viaggio e il saldo prima o all'inizio. Contattateci per le modalità e le condizioni in vigore per il vostro viaggio."
    ],
    [
      "La mia prenotazione è confermata subito?",
      "Confermiamo via e-mail o WhatsApp dopo aver verificato disponibilità, trasporti ed eventuali permessi — non in automatico, così che ciò che confermiamo sia reale."
    ],
    [
      "Qual è la vostra politica di cancellazione?",
      "Cancellazione gratuita fino a 5 giorni prima della data di partenza del viaggio — cancellate in qualsiasi momento prima di allora e ricevete il rimborso completo. Nei 5 giorni precedenti la partenza, i costi già impegnati per voi (hotel, voli interni, guide e fornitori) potrebbero non essere più recuperabili, e vi rimborsiamo quanto resta. Le tasse di visto governative e i voli prenotati da voi sono versati a terzi e non sono mai rimborsabili. Le condizioni complete vi vengono confermate per iscritto al momento della prenotazione."
    ],
    [
      "Posso cambiare le date o l'itinerario?",
      "Faremo del nostro meglio per accogliere i cambiamenti, nei limiti della disponibilità e delle condizioni di fornitori e permessi. Avvisateci il prima possibile perché possiamo adattare il programma."
    ]
  ],
  "es": [
    [
      "¿Es Argelia segura para los turistas?",
      "Sí para el turismo normal en el norte y en los viajes organizados por el desierto. Las ciudades son en general tranquilas y acogedoras; tome las precauciones habituales, como en cualquier sitio. El extremo sur y las regiones fronterizas están regulados y solo se visitan con operadores autorizados y permisos."
    ],
    [
      "¿Hay zonas que evitar?",
      "Las franjas fronterizas con Malí, Níger y Libia, y algunas partes del extremo sur fuera de las rutas autorizadas, están vetadas al viaje independiente. Las expediciones organizadas se mantienen en las áreas permitidas con las autorizaciones requeridas."
    ],
    [
      "¿Puedo viajar por libre?",
      "En el norte sí, con paciencia y la precaución habitual. El Sáhara no se presta al viaje independiente: se organiza con un operador argelino autorizado, guías, 4x4 y permisos."
    ],
    [
      "¿Necesito visado para Argelia?",
      "La mayoría de las nacionalidades necesita un visado obtenido con antelación en un consulado argelino, normalmente respaldado por una invitación o un voucher de una agencia autorizada. Las normas varían según la nacionalidad y cambian con el tiempo — confirme siempre con su consulado."
    ],
    [
      "¿Pueden ayudarme con el visado?",
      "Sí — como operador argelino autorizado facilitamos la carta de invitación / voucher turístico y la confirmación de reserva que la mayoría de los consulados exige para un visado de turismo."
    ],
    [
      "¿Hay visado electrónico o a la llegada?",
      "En general no para el turismo corriente. La excepción principal es el turismo organizado al desierto del extremo sur, donde puede gestionarse una entrada simplificada para el grupo. Verifique oficialmente las normas vigentes antes de contar con ello."
    ],
    [
      "¿Cuál es la mejor época para visitar Argelia?",
      "La primavera (marzo-mayo) y el otoño (septiembre-noviembre) son las mejores épocas para el norte — costa, ciudades romanas y montañas. El Sáhara es un destino de invierno, mejor de noviembre a febrero."
    ],
    [
      "¿Cuándo conviene ir al Sáhara?",
      "De noviembre a febrero, cuando las temperaturas del desierto son frescas y el cielo está despejado. El verano en el extremo sur es peligrosamente caluroso y no es apto para viajar."
    ],
    [
      "¿Se puede viajar durante el Ramadán?",
      "Sí — es una época especial para venir, aunque cambian las opciones para comer de día y algunos horarios. Planificamos los itinerarios teniéndolo en cuenta para que su viaje transcurra sin problemas."
    ],
    [
      "¿Cuánto cuesta un viaje a Argelia?",
      "Depende de la duración y del estilo. Nuestras excursiones de un día parten de unos 30 €, los circuitos privados de varios días desde unos cientos de euros, y nuestros viajes privados más largos de 10 días rondan los 1.200 € por persona. Cada página de circuito indica su precio."
    ],
    [
      "¿Es cara Argelia?",
      "El gasto diario es moderado. El coste principal de un viaje está en el guía privado, el transporte, los permisos y los vuelos nacionales, más que en unos precios locales altos."
    ],
    [
      "¿Qué incluyen los precios de los circuitos?",
      "Varía según el circuito — cada página tiene una lista de «Incluido / No incluido». Normalmente se incluyen un guía autorizado, el transporte privado y algunas comidas o alojamientos; no se incluyen los vuelos internacionales ni las tasas de visado."
    ],
    [
      "¿Cómo se viaja dentro de Argelia?",
      "Los vuelos nacionales cubren las distancias largas (sobre todo hacia el Sáhara), trenes cómodos conectan las ciudades del norte, y el vehículo privado con conductor es la forma más fácil de recorrer el país. En el desierto se viaja solo en 4x4."
    ],
    [
      "¿Hace falta alquilar coche?",
      "Para el norte es posible, pero la mayoría de los visitantes prefiere un coche privado con conductor. Para el sur es obligatorio un operador autorizado con un 4x4 debidamente equipado — nosotros organizamos todo el transporte."
    ],
    [
      "¿Son fiables los vuelos nacionales?",
      "Air Algérie y otras compañías conectan Argel con las principales ciudades y con localidades saharianas como Djanet y Timimoun. Le asesoramos sobre los horarios e integramos los vuelos en su plan (su coste suele ir aparte)."
    ],
    [
      "¿Puedo usar tarjetas y cajeros?",
      "Argelia es en gran medida una economía en efectivo. Las tarjetas solo se aceptan en algunos hoteles urbanos y rara vez en otros sitios, y los cajeros que admiten tarjetas extranjeras no son fiables. Cuente con pagar casi todo en efectivo."
    ],
    [
      "¿Qué moneda se usa y se puede conseguir por adelantado?",
      "El dinar argelino (DZD). No puede obtenerse fuera del país, así que traiga euros o dólares estadounidenses en efectivo y cámbielos a su llegada."
    ],
    [
      "¿Cuánto efectivo debo traer?",
      "El suficiente para sus gastos personales, las comidas no incluidas en el circuito, las propinas y los recuerdos. Traiga una mezcla de billetes grandes y pequeños y guárdelos con cuidado."
    ],
    [
      "¿Hay wifi y datos móviles?",
      "Los hoteles urbanos suelen tener wifi. Una SIM local (Djezzy, Mobilis u Ooredoo) da datos baratos y se registra con el pasaporte. La cobertura se reduce deprisa en el desierto."
    ],
    [
      "¿Funcionará mi móvil en el Sáhara?",
      "En los pueblos y sus alrededores sí. El desierto profundo está en gran parte fuera de cobertura, con poca o ninguna señal — parte de su atractivo — así que avise a los suyos de sus planes antes de salir."
    ],
    [
      "¿Cómo es la comida argelina?",
      "Cuscús, tajines cocinados a fuego lento, carnes a la brasa y pescado de la costa, pan recién hecho, dátiles saharianos, aceite de oliva cabileño y té a la menta servido desde lo alto — mediterránea y regional, y generosa."
    ],
    [
      "¿Pueden atender a vegetarianos o dietas especiales?",
      "Sí — el cuscús de verduras, las ensaladas, las legumbres y el pan hacen fácil comer vegetariano, y podemos tener en cuenta alergias u otras necesidades si nos lo dice con antelación."
    ],
    [
      "¿Es potable el agua del grifo?",
      "Aténgase al agua embotellada, que es barata y está en todas partes; en nuestros viajes por el desierto la proporcionamos nosotros."
    ],
    [
      "¿Es Argelia segura para las mujeres?",
      "En general sí, con las precauciones normales. El acoso grave es poco frecuente, pero vestir con sobriedad y estar atenta — sobre todo fuera de las grandes ciudades — hace el viaje más cómodo. Un viaje privado y guiado añade tranquilidad."
    ],
    [
      "¿Cómo deben vestir las mujeres?",
      "Se agradece la ropa sobria y que cubra; lleve un pañuelo para las mezquitas y las zonas conservadoras. Las playas y los barrios de las grandes ciudades son más relajados, sobre todo en verano."
    ],
    [
      "¿Hace falta permiso para el Sáhara?",
      "Sí — las zonas desérticas protegidas, incluidos el Tassili n'Ajjer y el Tadrart, exigen permisos y un guía local autorizado. Nosotros gestionamos los permisos y el guía como parte de cualquier viaje al desierto."
    ],
    [
      "¿Puedo explorar el desierto por mi cuenta?",
      "No — el viaje independiente por el desierto profundo está restringido por seguridad y conservación. Se hace con un operador autorizado, vehículos 4x4 y las autorizaciones correspondientes."
    ],
    [
      "¿Puedo hacer fotos libremente?",
      "Los paisajes, los monumentos y las ruinas no suelen dar problemas. Pida siempre permiso antes de fotografiar a personas y evite fotografiar instalaciones militares y policiales y algunos edificios gubernamentales."
    ],
    [
      "¿Puedo llevar un dron?",
      "Los drones están regulados y a menudo prohibidos en Argelia. No lo traiga ni lo haga volar sin autorización previa explícita — puede causar problemas serios en la frontera o sobre el terreno."
    ],
    [
      "¿Necesito vacunas?",
      "Para la mayoría de los viajeros no se exige ninguna vacuna especial. Asegúrese de tener al día las vacunas de rutina, consulte a su médico o a un centro de vacunación internacional, y lleve su medicación personal en el envase original."
    ],
    [
      "¿Hay asistencia médica?",
      "Las ciudades tienen hospitales y farmacias; el desierto es remoto, así que lleve un botiquín personal básico. En las ciudades las farmacias están bien surtidas."
    ],
    [
      "¿Necesito seguro de viaje?",
      "Sí — recomendamos encarecidamente un seguro de viaje completo que cubra zonas remotas y el desierto. No está incluido en el precio de los circuitos."
    ],
    [
      "¿Qué debo llevar al Sáhara?",
      "Capas de abrigo para noches realmente frías, buena protección solar, un frontal, calzado cerrado y resistente, un pañuelo para el sol y el polvo, y una botella reutilizable."
    ],
    [
      "¿Y para las ciudades y el norte?",
      "Calzado cómodo para la Casbah y las ruinas, ropa sobria y una chaqueta ligera para las noches de primavera y otoño. Añada bañador para la costa en verano."
    ],
    [
      "¿Cómo se reserva un circuito?",
      "Envíenos sus fechas, el tamaño del grupo y sus intereses a través del formulario de contacto o por WhatsApp. Comprobamos la disponibilidad y los permisos necesarios y le confirmamos los detalles por correo electrónico."
    ],
    [
      "¿Cómo y cuándo se paga?",
      "El pago se acuerda al reservar — normalmente una señal para confirmar el viaje y el resto antes o al comienzo. Contáctenos para conocer los métodos y las condiciones vigentes para su circuito."
    ],
    [
      "¿Se confirma mi reserva de inmediato?",
      "Confirmamos por correo o WhatsApp una vez comprobados la disponibilidad, el transporte y los permisos necesarios — no de forma automática, para que lo que confirmamos sea real."
    ],
    [
      "¿Cuál es su política de cancelación?",
      "Cancelación gratuita hasta 5 días antes de la fecha de salida de su circuito — cancele en cualquier momento antes de eso y recibirá el reembolso completo. Dentro de los 5 días previos a la salida, los costes ya comprometidos por usted (hoteles, vuelos internos, guías y proveedores) pueden no ser recuperables, y le reembolsamos lo que quede. Las tasas de visado gubernamentales y los vuelos reservados por su cuenta se pagan a terceros y nunca son reembolsables. Las condiciones completas se le confirman por escrito al reservar."
    ],
    [
      "¿Puedo cambiar las fechas o el itinerario?",
      "Haremos lo posible por atender los cambios, sujeto a disponibilidad y a las condiciones de proveedores o permisos. Avísenos cuanto antes para que podamos ajustar el plan."
    ]
  ],
  "de": [
    [
      "Ist Algerien für Touristen sicher?",
      "Ja für normalen Tourismus im Norden und auf organisierten Wüstenreisen. Die Städte sind in der Regel ruhig und gastfreundlich; treffen Sie die üblichen Vorkehrungen wie überall. Der tiefe Süden und die Grenzregionen sind reglementiert und werden nur mit lizenzierten Veranstaltern und Genehmigungen besucht."
    ],
    [
      "Gibt es Gebiete, die man meiden sollte?",
      "Die Grenzgebiete zu Mali, Niger und Libyen sowie Teile des äußersten Südens außerhalb genehmigter Routen sind für individuelles Reisen gesperrt. Organisierte Wüstenreisen bleiben mit den erforderlichen Genehmigungen in den erlaubten Zonen."
    ],
    [
      "Kann ich individuell reisen?",
      "Im Norden ja, mit Geduld und normaler Umsicht. Die Sahara eignet sich nicht für individuelles Reisen — sie wird über einen lizenzierten algerischen Veranstalter mit Guides, Geländewagen und Genehmigungen organisiert."
    ],
    [
      "Brauche ich ein Visum für Algerien?",
      "Die meisten Nationalitäten brauchen ein im Voraus bei einem algerischen Konsulat beantragtes Visum, üblicherweise gestützt auf eine Einladung oder einen Voucher einer lizenzierten Agentur. Die Regeln unterscheiden sich nach Nationalität und ändern sich — klären Sie es immer mit Ihrem Konsulat."
    ],
    [
      "Können Sie mir beim Visum helfen?",
      "Ja — als lizenzierter algerischer Veranstalter stellen wir das Einladungsschreiben / den Touristen-Voucher und die Buchungsbestätigung aus, die die meisten Konsulate für ein Touristenvisum verlangen."
    ],
    [
      "Gibt es ein E-Visum oder ein Visum bei Einreise?",
      "Für gewöhnlichen Tourismus in der Regel nicht. Die Hauptausnahme ist der organisierte Tourismus in die Wüste des äußersten Südens, wo für die Gruppe eine vereinfachte Einreise arrangiert werden kann. Prüfen Sie die geltenden Regeln offiziell, bevor Sie sich darauf verlassen."
    ],
    [
      "Wann ist die beste Reisezeit für Algerien?",
      "Frühling (März-Mai) und Herbst (September-November) sind die besten Zeiten für den Norden — Küste, römische Städte und Berge. Die Sahara ist ein Winterziel, am besten von November bis Februar."
    ],
    [
      "Wann sollte man in die Sahara reisen?",
      "Von November bis Februar, wenn die Wüstentemperaturen kühl und die Sicht klar ist. Der Sommer im tiefen Süden ist gefährlich heiß und zum Reisen nicht geeignet."
    ],
    [
      "Kann man während des Ramadan reisen?",
      "Ja — es ist eine besondere Zeit für einen Besuch, auch wenn sich die Essensmöglichkeiten tagsüber und manche Öffnungszeiten ändern. Wir planen die Routen entsprechend, damit Ihre Reise reibungslos läuft."
    ],
    [
      "Was kostet eine Reise nach Algerien?",
      "Das hängt von Dauer und Stil ab. Unsere Tagestouren beginnen bei rund 30 €, mehrtägige Privatreisen ab einigen hundert Euro, und unsere längsten zehntägigen Privatreisen liegen bei etwa 1.200 € pro Person. Jede Reiseseite nennt ihren Preis."
    ],
    [
      "Ist Algerien teuer?",
      "Die täglichen Ausgaben sind moderat. Die Hauptkosten einer Reise entstehen durch private Führung, Transport, Genehmigungen und Inlandsflüge, nicht durch hohe lokale Preise."
    ],
    [
      "Was ist im Reisepreis enthalten?",
      "Das unterscheidet sich je Reise — jede Seite hat eine Liste „Inbegriffen / Nicht inbegriffen“. Üblicherweise sind ein lizenzierter Guide, privater Transport und einige Mahlzeiten oder Übernachtungen enthalten; internationale Flüge und Visagebühren nicht."
    ],
    [
      "Wie kommt man in Algerien voran?",
      "Inlandsflüge decken die langen Strecken ab (vor allem in die Sahara), bequeme Züge verbinden die Städte im Norden, und ein Privatfahrzeug mit Fahrer ist der einfachste Weg zu reisen. In der Wüste geht es nur mit Geländewagen."
    ],
    [
      "Muss ich einen Mietwagen nehmen?",
      "Für den Norden ist das möglich, doch die meisten Besucher bevorzugen ein Privatauto mit Fahrer. Für den Süden ist ein lizenzierter Veranstalter mit einem richtig ausgerüsteten Geländewagen vorgeschrieben — wir organisieren den gesamten Transport."
    ],
    [
      "Sind Inlandsflüge zuverlässig?",
      "Air Algérie und andere Gesellschaften verbinden Algier mit den größeren Städten und Sahara-Orten wie Djanet und Timimoun. Wir beraten zu den Zeiten und bauen die Flüge in Ihren Plan ein (die Kosten sind meist separat)."
    ],
    [
      "Kann ich Karten und Geldautomaten nutzen?",
      "Algerien ist weitgehend eine Bargeldwirtschaft. Karten werden nur in einigen Stadthotels und selten anderswo akzeptiert, und Automaten für ausländische Karten sind unzuverlässig. Rechnen Sie damit, das meiste bar zu zahlen."
    ],
    [
      "Welche Währung gilt, und bekommt man sie vorab?",
      "Den algerischen Dinar (DZD). Er ist außerhalb des Landes nicht erhältlich, bringen Sie also Euro oder US-Dollar in bar mit und wechseln Sie bei der Ankunft."
    ],
    [
      "Wie viel Bargeld sollte ich mitbringen?",
      "Genug für Ihre persönlichen Ausgaben, nicht inbegriffene Mahlzeiten, Trinkgelder und Souvenirs. Nehmen Sie eine Mischung aus größeren und kleineren Scheinen mit und bewahren Sie sie sicher auf."
    ],
    [
      "Gibt es WLAN und mobile Daten?",
      "Stadthotels haben meist WLAN. Eine lokale SIM (Djezzy, Mobilis oder Ooredoo) bietet günstige Daten und wird mit dem Reisepass registriert. In der Wüste dünnt die Abdeckung schnell aus."
    ],
    [
      "Funktioniert mein Handy in der Sahara?",
      "In und um die Orte ja. Die tiefe Wüste ist weitgehend ohne Netz, mit wenig oder gar keinem Signal — Teil ihres Reizes — sagen Sie also Ihren Leuten vorher Bescheid, was Sie vorhaben."
    ],
    [
      "Wie ist die algerische Küche?",
      "Couscous, langsam geschmorte Tajines, Grillfleisch und Fisch von der Küste, frisches Brot, Sahara-Datteln, kabylisches Olivenöl und aus der Höhe eingeschenkter Minztee — mediterran und regional, und großzügig."
    ],
    [
      "Können Sie Vegetarier oder besondere Ernährung berücksichtigen?",
      "Ja — Gemüse-Couscous, Salate, Hülsenfrüchte und Brot machen vegetarisches Essen leicht, und wir können Allergien oder andere Bedürfnisse berücksichtigen, wenn Sie es uns vorher sagen."
    ],
    [
      "Kann man das Leitungswasser trinken?",
      "Bleiben Sie bei Flaschenwasser, das billig und überall erhältlich ist; auf unseren Wüstenreisen stellen wir es."
    ],
    [
      "Ist Algerien für Frauen sicher?",
      "Im Allgemeinen ja, mit den normalen Vorsichtsmaßnahmen. Ernsthafte Belästigung ist selten, doch zurückhaltende Kleidung und Aufmerksamkeit — besonders außerhalb der großen Städte — machen die Reise angenehmer. Eine private, geführte Reise gibt zusätzliche Ruhe."
    ],
    [
      "Was sollten Frauen tragen?",
      "Zurückhaltende, bedeckende Kleidung wird geschätzt; nehmen Sie ein Tuch für Moscheen und konservative Gegenden mit. Strände und Viertel der großen Städte sind entspannter, vor allem im Sommer."
    ],
    [
      "Brauche ich eine Genehmigung für die Sahara?",
      "Ja — die geschützten Wüstenzonen, darunter Tassili n'Ajjer und die Tadrart, erfordern Genehmigungen und einen lizenzierten lokalen Guide. Wir besorgen Genehmigungen und Führung als Teil jeder Wüstenreise."
    ],
    [
      "Kann ich die Wüste allein erkunden?",
      "Nein — individuelles Reisen in der tiefen Wüste ist aus Sicherheits- und Schutzgründen eingeschränkt. Es erfolgt mit einem lizenzierten Veranstalter, Geländewagen und den nötigen Genehmigungen."
    ],
    [
      "Darf ich frei fotografieren?",
      "Landschaften, Denkmäler und Ruinen sind in der Regel unproblematisch. Fragen Sie immer, bevor Sie Menschen fotografieren, und meiden Sie Aufnahmen von Militär- und Polizeianlagen sowie einigen Regierungsgebäuden."
    ],
    [
      "Darf ich eine Drohne mitbringen?",
      "Drohnen sind in Algerien reglementiert und oft verboten. Bringen Sie keine mit und lassen Sie keine ohne ausdrückliche vorherige Genehmigung steigen — das kann an der Grenze oder vor Ort ernste Probleme verursachen."
    ],
    [
      "Brauche ich Impfungen?",
      "Für die meisten Reisenden sind keine besonderen Impfungen vorgeschrieben. Sorgen Sie dafür, dass die Standardimpfungen aktuell sind, sprechen Sie mit Ihrem Arzt oder einer Reiseklinik, und nehmen Sie persönliche Medikamente in der Originalverpackung mit."
    ],
    [
      "Gibt es medizinische Versorgung?",
      "Die Städte haben Krankenhäuser und Apotheken; die Wüste ist abgelegen, nehmen Sie also ein einfaches persönliches Erste-Hilfe-Set mit. In den Städten sind die Apotheken gut sortiert."
    ],
    [
      "Brauche ich eine Reiseversicherung?",
      "Ja — wir empfehlen dringend eine umfassende Reiseversicherung, die abgelegene Gebiete und Wüstenreisen abdeckt. Sie ist nicht im Reisepreis enthalten."
    ],
    [
      "Was packe ich für die Sahara ein?",
      "Warme Schichten für wirklich kalte Wüstennächte, starken Sonnenschutz, eine Stirnlampe, feste geschlossene Schuhe, ein Tuch gegen Sonne und Staub, und eine wiederbefüllbare Trinkflasche."
    ],
    [
      "Und für die Städte und den Norden?",
      "Bequeme Schuhe für die Kasbah und die Ruinen, zurückhaltende Kleidung und eine leichte Jacke für Frühlings- und Herbstabende. Im Sommer für die Küste Badesachen dazu."
    ],
    [
      "Wie buche ich eine Reise?",
      "Schicken Sie uns Ihre Daten, die Gruppengröße und Ihre Interessen über das Kontaktformular oder per WhatsApp. Wir prüfen die Verfügbarkeit und etwaige Genehmigungen und bestätigen Ihnen die Einzelheiten per E-Mail."
    ],
    [
      "Wie und wann wird bezahlt?",
      "Die Zahlung wird bei der Buchung vereinbart — üblicherweise eine Anzahlung zur Bestätigung und der Rest davor oder zu Beginn. Fragen Sie uns nach den aktuellen Methoden und Bedingungen für Ihre Reise."
    ],
    [
      "Ist meine Buchung sofort bestätigt?",
      "Wir bestätigen per E-Mail oder WhatsApp, sobald wir Verfügbarkeit, Transport und nötige Genehmigungen geprüft haben — nicht automatisch, damit das Bestätigte auch wirklich steht."
    ],
    [
      "Wie sind Ihre Stornobedingungen?",
      "Kostenlose Stornierung bis 5 Tage vor dem Abreisedatum Ihrer Reise — stornieren Sie jederzeit davor und Sie erhalten den vollen Betrag zurück. Innerhalb von 5 Tagen vor Abreise sind bereits für Sie eingegangene Kosten (Hotels, Inlandsflüge, Guides und Leistungsträger) möglicherweise nicht mehr erstattungsfähig, und wir erstatten, was übrig bleibt. Staatliche Visagebühren und selbst gebuchte Flüge gehen an Dritte und sind nie erstattungsfähig. Die vollständigen Bedingungen werden Ihnen bei der Buchung schriftlich bestätigt."
    ],
    [
      "Kann ich Daten oder Route ändern?",
      "Wir tun unser Bestes, Änderungen zu ermöglichen, vorbehaltlich Verfügbarkeit und der Bedingungen von Leistungsträgern oder Genehmigungen. Sagen Sie uns so früh wie möglich Bescheid, damit wir den Plan anpassen können."
    ]
  ]
};

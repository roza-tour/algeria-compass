// "A guide who speaks your language" — one source for the badge on every tour
// page, the per-language landing pages, llms-<lang>.txt and the assistant.
//
// Owner-confirmed 2026-10-13: every language we publish in has its own guides
// on the team (English, French, Italian, Spanish, German, Russian, Arabic).
// The visitor's trip is guided in their language — it is not a translated
// English tour with an interpreter. No guide names are published.

export type GLang = 'en' | 'fr' | 'it' | 'es' | 'de' | 'ru';

export const GUIDE_PAGES: Record<GLang, string> = {
  en: '/english-speaking-guide-algeria/',
  fr: '/fr/circuit-algerie-guide-francophone/',
  it: '/it/viaggio-algeria-guida-italiano/',
  es: '/es/viaje-argelia-guia-espanol/',
  de: '/de/algerien-reise-deutschsprachiger-reiseleiter/',
  ru: '/ru/tur-v-alzhir-s-russkoyazychnym-gidom/',
};

export const LANG_NAME: Record<GLang, { en: string; self: string; code: string }> = {
  en: { en: 'English', self: 'English', code: 'en' },
  fr: { en: 'French', self: 'Français', code: 'fr' },
  it: { en: 'Italian', self: 'Italiano', code: 'it' },
  es: { en: 'Spanish', self: 'Español', code: 'es' },
  de: { en: 'German', self: 'Deutsch', code: 'de' },
  ru: { en: 'Russian', self: 'Русский', code: 'ru' },
};

// Short line shown on every tour page, next to the price.
export const BADGE: Record<GLang, { t: string; more: string }> = {
  en: { t: 'Guided in English by our own English-speaking guides — not a translator', more: 'How it works' },
  fr: { t: 'Guidé en français par nos guides francophones — pas par un traducteur', more: 'Comment ça marche' },
  it: { t: 'Guidato in italiano dalle nostre guide che parlano italiano — non da un traduttore', more: 'Come funziona' },
  es: { t: 'Guiado en español por nuestros guías hispanohablantes — no por un traductor', more: 'Cómo funciona' },
  de: { t: 'Auf Deutsch geführt von unseren deutschsprachigen Reiseleitern — kein Dolmetscher', more: 'So funktioniert es' },
  ru: { t: 'Экскурсии на русском языке с нашим русскоязычным гидом — не через переводчика', more: 'Как это работает' },
};

type Page = {
  title: string; desc: string; eyebrow: string; h1: string; lead: string;
  sections: { h: string; p?: string; list?: string[] }[];
  toursH: string; toursNote?: string; from: string; per: string;
  faqs: { q: string; a: string }[];
  ctaH: string; ctaP: string; ctaPlan: string; ctaWa: string; waText: string;
};

export const PAGE: Record<GLang, Page> = {
  en: {
    title: 'Algeria Tours with an English-Speaking Guide | Algeria Compass',
    desc: 'Private tours of Algeria guided in English by our own English-speaking guides — the Sahara, Roman cities, Algiers and the M\'Zab, on your dates.',
    eyebrow: 'Guided in your language',
    h1: 'Algeria tours with an English-speaking guide',
    lead: 'Every Algeria Compass trip is guided in the traveller\'s own language. For English speakers that means a guide from our English-speaking team, with you from the airport to the last day — not a French-language tour with someone translating.',
    sections: [
      { h: 'A guide who speaks your language', p: 'Algeria is a French- and Arabic-speaking country, and many tours run in French with an interpreter added on. Ours do not. We keep a team of guides for each language we work in, so the explanations at the Casbah, the stories behind Timgad and the small talk over tea in the M\'Zab all happen directly in English.' },
      { h: 'How it works', list: [
        'Tell us your language when you enquire — on the form, by email or on WhatsApp.',
        'We assign a guide from our English-speaking team for your dates.',
        'Where a site has its own local specialist (the walled town of Beni Isguen, the Tuareg guides of the Tassili), your guide stays with you and makes sure nothing is lost in translation.',
        'The price is the same in every language.',
      ] },
    ],
    toursH: 'Trips available with an English-speaking guide', from: 'from', per: 'per person',
    faqs: [
      { q: 'Is there an extra charge for an English-speaking guide?', a: 'No. The published price of every tour is the same whatever language you are guided in.' },
      { q: 'Is the guide with us for the whole trip?', a: 'Yes — your guide travels with you for the programme. At a few sites a local specialist guide joins as well, and your guide is there to make sure you understand everything.' },
      { q: 'Can we have an English-speaking guide in the Sahara?', a: 'Yes, on every tour, including Djanet and the Tassili. In the deep desert a licensed Tuareg guide also accompanies the group, as the rules require.' },
      { q: 'Do you have guides in other languages?', a: 'Yes — French, Italian, Spanish, German, Russian and Arabic, each with its own guides on our team.' },
    ],
    ctaH: 'Tell us your dates', ctaP: 'Private trips on your own dates, with a guide who speaks your language.', ctaPlan: 'Plan my trip', ctaWa: 'Ask on WhatsApp',
    waText: 'Hello Algeria Compass, I would like a private tour of Algeria with an English-speaking guide.',
  },
  fr: {
    title: 'Circuit en Algérie avec guide francophone | Algeria Compass',
    desc: "Circuits privés en Algérie guidés en français par nos propres guides francophones : Sahara, cités romaines, Alger et le M'Zab, à vos dates.",
    eyebrow: 'Guidé dans votre langue',
    h1: 'Circuit en Algérie avec un guide francophone',
    lead: "Chaque voyage Algeria Compass est guidé dans la langue du voyageur. Pour vous, cela veut dire un guide de notre équipe francophone, avec vous de l'aéroport jusqu'au dernier jour — pas un circuit pensé dans une autre langue puis traduit.",
    sections: [
      { h: 'Un guide qui parle votre langue', p: "Nous avons une équipe de guides pour chaque langue dans laquelle nous travaillons. Les explications dans la Casbah, l'histoire de Timgad, les échanges autour d'un thé dans le M'Zab : tout se passe directement en français, sans intermédiaire." },
      { h: 'Comment ça marche', list: [
        "Indiquez votre langue lors de votre demande — par le formulaire, par e-mail ou sur WhatsApp.",
        'Nous vous attribuons un guide de notre équipe francophone pour vos dates.',
        "Là où un site a son propre guide local (la ville fortifiée de Beni Isguen, les guides touaregs du Tassili), votre guide reste avec vous et veille à ce que rien ne se perde.",
        'Le prix est le même dans toutes les langues.',
      ] },
    ],
    toursH: 'Circuits proposés avec guide francophone', from: 'dès', per: 'par personne',
    faqs: [
      { q: 'Un guide francophone coûte-t-il plus cher ?', a: "Non. Le prix publié de chaque circuit est le même, quelle que soit la langue du guidage." },
      { q: 'Le guide est-il avec nous pendant tout le voyage ?', a: "Oui — votre guide vous accompagne pendant tout le programme. Sur certains sites, un guide local spécialisé se joint au groupe, et votre guide s'assure que vous compreniez tout." },
      { q: 'Peut-on avoir un guide francophone dans le Sahara ?', a: "Oui, sur tous les circuits, y compris Djanet et le Tassili. Dans le grand sud, un guide touareg agréé accompagne aussi le groupe, comme l'exige la réglementation." },
      { q: "Avez-vous des guides dans d'autres langues ?", a: 'Oui — anglais, italien, espagnol, allemand, russe et arabe, chaque langue avec ses propres guides dans notre équipe.' },
    ],
    ctaH: 'Donnez-nous vos dates', ctaP: 'Des voyages privés à vos dates, avec un guide qui parle votre langue.', ctaPlan: 'Planifier mon voyage', ctaWa: 'Écrire sur WhatsApp',
    waText: "Bonjour Algeria Compass, je souhaite un circuit privé en Algérie avec un guide francophone.",
  },
  it: {
    title: 'Viaggio in Algeria con guida in italiano | Algeria Compass',
    desc: "Viaggi privati in Algeria guidati in italiano dalle nostre guide che parlano italiano: Sahara, città romane, Algeri e il M'Zab, nelle vostre date.",
    eyebrow: 'Guidato nella vostra lingua',
    h1: 'Viaggio in Algeria con guida in italiano',
    lead: "Ogni viaggio Algeria Compass è guidato nella lingua del viaggiatore. Per voi significa una guida del nostro team che parla italiano, con voi dall'aeroporto all'ultimo giorno — non un tour in francese con qualcuno che traduce.",
    sections: [
      { h: 'Una guida che parla la vostra lingua', p: "L'Algeria è un paese di lingua araba e francese, e molti tour si svolgono in francese con un interprete aggiunto. I nostri no. Abbiamo un team di guide per ogni lingua in cui lavoriamo: le spiegazioni nella Casbah, la storia di Timgad, le chiacchiere davanti a un tè nel M'Zab avvengono direttamente in italiano." },
      { h: 'Come funziona', list: [
        'Indicateci la vostra lingua quando ci scrivete — dal modulo, via email o su WhatsApp.',
        'Vi assegniamo una guida del nostro team che parla italiano per le vostre date.',
        'Dove un sito ha la sua guida locale specializzata (la città fortificata di Beni Isguen, le guide tuareg del Tassili), la vostra guida resta con voi e si assicura che non vi sfugga nulla.',
        'Il prezzo è lo stesso in tutte le lingue.',
      ] },
    ],
    toursH: 'Viaggi disponibili con guida in italiano', from: 'da', per: 'a persona',
    faqs: [
      { q: 'Una guida in italiano costa di più?', a: 'No. Il prezzo pubblicato di ogni viaggio è lo stesso in qualsiasi lingua.' },
      { q: 'La guida è con noi per tutto il viaggio?', a: "Sì — la vostra guida vi accompagna per tutto il programma. In alcuni siti si aggiunge una guida locale specializzata, e la vostra guida fa in modo che capiate tutto." },
      { q: 'Si può avere una guida in italiano nel Sahara?', a: 'Sì, in tutti i viaggi, compresi Djanet e il Tassili. Nel profondo sud accompagna il gruppo anche una guida tuareg autorizzata, come prevedono le regole.' },
      { q: 'Avete guide in altre lingue?', a: 'Sì — inglese, francese, spagnolo, tedesco, russo e arabo, ognuna con le proprie guide nel nostro team.' },
    ],
    ctaH: 'Diteci le vostre date', ctaP: 'Viaggi privati nelle vostre date, con una guida che parla la vostra lingua.', ctaPlan: 'Pianifica il viaggio', ctaWa: 'Scrivici su WhatsApp',
    waText: 'Buongiorno Algeria Compass, vorrei un viaggio privato in Algeria con guida in italiano.',
  },
  es: {
    title: 'Viaje a Argelia con guía en español | Algeria Compass',
    desc: "Viajes privados por Argelia guiados en español por nuestros propios guías hispanohablantes: Sáhara, ciudades romanas, Argel y el M'Zab, en sus fechas.",
    eyebrow: 'Guiado en su idioma',
    h1: 'Viaje a Argelia con guía en español',
    lead: 'Cada viaje de Algeria Compass se guía en el idioma del viajero. Para usted significa un guía de nuestro equipo hispanohablante, con usted desde el aeropuerto hasta el último día — no un circuito en francés con alguien que traduce.',
    sections: [
      { h: 'Un guía que habla su idioma', p: "Argelia es un país de habla árabe y francesa, y muchos circuitos se hacen en francés con un intérprete añadido. Los nuestros no. Tenemos un equipo de guías para cada idioma en el que trabajamos: las explicaciones en la Casbah, la historia de Timgad y la conversación con un té en el M'Zab ocurren directamente en español." },
      { h: 'Cómo funciona', list: [
        'Indíquenos su idioma al escribirnos — por el formulario, por correo o por WhatsApp.',
        'Le asignamos un guía de nuestro equipo hispanohablante para sus fechas.',
        'Donde un sitio tiene su propio guía local especializado (la ciudad amurallada de Beni Isguen, los guías tuaregs del Tassili), su guía se queda con usted y se asegura de que no se pierda nada.',
        'El precio es el mismo en todos los idiomas.',
      ] },
    ],
    toursH: 'Viajes disponibles con guía en español', from: 'desde', per: 'por persona',
    faqs: [
      { q: '¿Un guía en español cuesta más?', a: 'No. El precio publicado de cada viaje es el mismo en cualquier idioma.' },
      { q: '¿El guía está con nosotros todo el viaje?', a: 'Sí — su guía le acompaña durante todo el programa. En algunos sitios se suma un guía local especializado, y su guía se asegura de que lo entienda todo.' },
      { q: '¿Se puede tener guía en español en el Sáhara?', a: 'Sí, en todos los viajes, incluidos Djanet y el Tassili. En el gran sur también acompaña al grupo un guía tuareg autorizado, como exige la normativa.' },
      { q: '¿Tienen guías en otros idiomas?', a: 'Sí — inglés, francés, italiano, alemán, ruso y árabe, cada uno con sus propios guías en nuestro equipo.' },
    ],
    ctaH: 'Díganos sus fechas', ctaP: 'Viajes privados en sus fechas, con un guía que habla su idioma.', ctaPlan: 'Planificar mi viaje', ctaWa: 'Escribir por WhatsApp',
    waText: 'Hola Algeria Compass, me gustaría un viaje privado por Argelia con guía en español.',
  },
  de: {
    title: 'Algerienreise mit deutschsprachigem Reiseleiter | Algeria Compass',
    desc: "Privatreisen durch Algerien, auf Deutsch geführt von unseren eigenen deutschsprachigen Reiseleitern: Sahara, Römerstädte, Algier und das M'Zab-Tal.",
    eyebrow: 'In Ihrer Sprache geführt',
    h1: 'Algerien-Reise mit deutschsprachigem Reiseleiter',
    lead: 'Jede Reise von Algeria Compass wird in der Sprache der Reisenden geführt. Für Sie heißt das: ein Reiseleiter aus unserem deutschsprachigen Team, vom Flughafen bis zum letzten Tag — keine französische Tour mit nachträglicher Übersetzung.',
    sections: [
      { h: 'Ein Reiseleiter, der Ihre Sprache spricht', p: "Algerien ist ein arabisch- und französischsprachiges Land, und viele Touren laufen auf Französisch mit einem zusätzlichen Dolmetscher. Unsere nicht. Wir haben für jede Sprache, in der wir arbeiten, ein eigenes Team: Die Erklärungen in der Kasbah, die Geschichte von Timgad und das Gespräch beim Tee im M'Zab laufen direkt auf Deutsch." },
      { h: 'So funktioniert es', list: [
        'Nennen Sie uns Ihre Sprache bei der Anfrage — über das Formular, per E-Mail oder WhatsApp.',
        'Wir teilen Ihnen für Ihre Termine einen Reiseleiter aus unserem deutschsprachigen Team zu.',
        'Wo ein Ort einen eigenen lokalen Führer hat (die Wehrstadt Beni Isguen, die Tuareg-Führer im Tassili), bleibt Ihr Reiseleiter bei Ihnen und sorgt dafür, dass nichts verloren geht.',
        'Der Preis ist in jeder Sprache gleich.',
      ] },
    ],
    toursH: 'Reisen mit deutschsprachigem Reiseleiter', from: 'ab', per: 'pro Person',
    faqs: [
      { q: 'Kostet ein deutschsprachiger Reiseleiter extra?', a: 'Nein. Der veröffentlichte Preis jeder Reise ist in jeder Sprache gleich.' },
      { q: 'Ist der Reiseleiter die ganze Reise dabei?', a: 'Ja — Ihr Reiseleiter begleitet Sie das ganze Programm über. An einigen Orten kommt ein lokaler Spezialführer hinzu, und Ihr Reiseleiter sorgt dafür, dass Sie alles verstehen.' },
      { q: 'Gibt es einen deutschsprachigen Reiseleiter auch in der Sahara?', a: 'Ja, auf jeder Reise, auch in Djanet und im Tassili. In der tiefen Wüste begleitet zusätzlich ein lizenzierter Tuareg-Führer die Gruppe, wie es die Vorschriften verlangen.' },
      { q: 'Haben Sie Reiseleiter in anderen Sprachen?', a: 'Ja — Englisch, Französisch, Italienisch, Spanisch, Russisch und Arabisch, jede Sprache mit eigenen Reiseleitern in unserem Team.' },
    ],
    ctaH: 'Nennen Sie uns Ihre Termine', ctaP: 'Privatreisen zu Ihren Terminen, mit einem Reiseleiter, der Ihre Sprache spricht.', ctaPlan: 'Reise planen', ctaWa: 'Per WhatsApp fragen',
    waText: 'Hallo Algeria Compass, ich möchte eine Privatreise durch Algerien mit deutschsprachigem Reiseleiter.',
  },
  ru: {
    title: 'Тур по Алжиру с русскоязычным гидом | Algeria Compass',
    desc: 'Индивидуальные туры по Алжиру с нашим русскоязычным гидом: Сахара, римские города, Алжир и долина Мзаб — в ваши даты, без переводчика.',
    eyebrow: 'На вашем языке',
    h1: 'Тур по Алжиру с русскоязычным гидом',
    lead: 'Каждое путешествие Algeria Compass проходит на языке путешественника. Для вас это гид из нашей русскоязычной команды — от аэропорта до последнего дня, а не тур на французском с переводчиком.',
    sections: [
      { h: 'Гид, который говорит на вашем языке', p: 'В Алжире говорят на арабском и французском, и многие туры проходят на французском с добавленным переводчиком. У нас иначе: для каждого языка, на котором мы работаем, есть свои гиды. Рассказы в Касбе, история Тимгада и разговор за чаем в долине Мзаб — всё напрямую по-русски.' },
      { h: 'Как это работает', list: [
        'Напишите нам на русском — по WhatsApp или по электронной почте — и укажите даты.',
        'Мы назначаем на ваши даты гида из нашей русскоязычной команды.',
        'Там, где у объекта есть свой местный гид (город-крепость Бени-Изген, туарегские гиды Тассилина), ваш гид остаётся с вами и следит, чтобы вы всё поняли.',
        'Цена одинакова на любом языке. Описания программ на сайте пока на английском — всё остальное мы обсудим с вами по-русски.',
      ] },
      { h: 'Виза', p: 'Если в вашей программе есть Сахара (Джанет, Таманрассет, Гардая, Тимимун), виза может быть выдана по прибытии в аэропорту Алжира: мы готовим разрешение заранее. Для других программ мы оформляем приглашение для консульства.' },
    ],
    toursH: 'Программы с русскоязычным гидом', toursNote: 'Страницы программ на английском языке.', from: 'от', per: 'с человека',
    faqs: [
      { q: 'Русскоязычный гид стоит дороже?', a: 'Нет. Опубликованная цена каждого тура одинакова на любом языке.' },
      { q: 'Гид будет с нами всю поездку?', a: 'Да — ваш гид сопровождает вас всю программу. На некоторых объектах к группе присоединяется местный гид, а ваш гид следит, чтобы вы всё поняли.' },
      { q: 'Можно ли с русскоязычным гидом поехать в Сахару?', a: 'Да, на любой программе, включая Джанет и Тассилин-Аджер. В глубокой пустыне группу также сопровождает лицензированный гид-туарег, как того требуют правила.' },
      { q: 'Как с вами связаться на русском?', a: 'Напишите нам по WhatsApp +213 784 193 176 или на hello@algeriacompass.com — на русском языке.' },
    ],
    ctaH: 'Напишите нам ваши даты', ctaP: 'Индивидуальные поездки в ваши даты, с гидом, который говорит на вашем языке.', ctaPlan: 'Написать нам', ctaWa: 'Написать в WhatsApp',
    waText: 'Здравствуйте, Algeria Compass! Хочу индивидуальный тур по Алжиру с русскоязычным гидом.',
  },
};

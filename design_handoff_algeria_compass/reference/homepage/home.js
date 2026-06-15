/* Algeria Compass — real homepage data + interactivity (vanilla JS). */
(function () {
  var T = '../../assets/img/tours/';
  var IMG = '../../assets/img/';
  var REG = '../../assets/regions/';
  var WA = 'https://wa.me/213784193176';

  /* ---------- STATES STRIP ---------- */
  var states = [
    { n: 'Algiers', img: T + 'algiers-9.jpg' }, { n: 'Oran', img: T + 'oran-1.jpg' },
    { n: 'Tlemcen', img: T + 'tlemcen-1.jpg' }, { n: 'Constantine', img: T + 'constantine-1.jpg' },
    { n: 'Sétif', img: T + 'setif-1.jpg' }, { n: 'Béjaïa', img: T + 'bejaia-1.jpg' },
    { n: 'Ghardaïa', img: T + 'ghardaia-1.jpg' }, { n: 'Bou Saâda', img: T + 'bousaada-6.jpg' },
    { n: 'Djanet', img: T + 'djanet-1.jpg' }, { n: 'Tipaza', img: T + 'tipaza-5.jpg' },
    { n: 'Timgad', img: T + 'batna-timgad-1.jpg' }, { n: 'Djémila', img: T + 'djemila-1.jpg' },
    { n: 'Mostaganem', img: T + 'oran-5.jpg' }
  ];
  var loop = states.concat(states);
  var ssTrack = document.getElementById('ss-track');
  if (ssTrack) ssTrack.innerHTML = loop.map(function (s, i) {
    return '<li class="ss-card"><a href="#"' + (i >= states.length ? ' tabindex="-1" aria-hidden="true"' : '') + '>' +
      '<img src="' + s.img + '" alt="' + (i >= states.length ? '' : s.n) + '" loading="lazy"><span class="ss-name">' + s.n + '</span></a></li>';
  }).join('');

  /* ---------- FEATURED TOURS ---------- */
  var tours = [
    { id: 'djanet-sahara-safari', t: 'Djanet Sahara Safari — 5-Day Tadrart Rouge', dur: '5 days · 4 nights', p: 828, hero: 'djanet-1.jpg', a: '#C8680A',
      h: 'Five days in the most beautiful desert on Earth — blood-red sandstone, golden dunes and 10,000-year-old art, guided by the Tuareg who have always called it home.' },
    { id: 'algiers-city', t: "Algiers Full-Day — Casbah, Bardo & Martyrs' Memorial", dur: '1 day', p: 83, hero: 'algiers-1.jpg', a: '#11738A',
      h: 'A full day through the white city — the Ottoman Casbah, a great museum, and the monument that crowns Algiers, with a real Algerian lunch in between.' },
    { id: 'eastern', t: 'Eastern Algeria & Sahara Discovery — 6 Days', dur: '6 days · 5 nights', p: 912, hero: 'constantine-7.jpg', a: '#6B2D8B',
      h: "Six days across Algeria's east — Constantine's bridges, the Roman cities of Djémila and Timgad, a Saharan gateway at Bou Saâda, and the Béjaïa coast." },
    { id: 'west', t: 'Western Algeria — Oran, Mostaganem & Tlemcen (5 Days)', dur: '5 days · 4 nights', p: 768, hero: 'tlemcen-1.jpg', a: '#0D5C7A',
      h: 'Five days across the Algerian west — raï-city Oran, the beaches of Mostaganem, and the deep Andalusian soul of Tlemcen.' },
    { id: 'ghardaia', t: "Ghardaïa — 3-Day M'Zab Valley Tour", dur: '3 days · 2 nights', p: 330, hero: 'ghardaia-1.jpg', a: '#B87A0A',
      h: "Three days in the M'Zab — the thousand-year-old hill-towns of the Mozabites, their secret water channels, and a night in the open desert." },
    { id: 'cultural', t: 'Algeria Cultural Tour — 5 Days', dur: '5 days · 4 nights', p: 900, hero: 'tipaza-1.jpg', a: '#B58A2E',
      h: 'Five days from the Casbah to the Sahara — Algiers, Roman Tipaza, and the timeless M\'Zab Valley, with a private licensed guide throughout.' }
  ];
  var tg = document.getElementById('tours-grid');
  if (tg) tg.innerHTML = tours.map(function (t) {
    return '<a class="tcard" href="#" style="--accent:' + t.a + '">' +
      '<div class="tcard-img"><img src="' + T + t.hero + '" alt="' + t.t + '" loading="lazy">' +
      '<div class="tcard-badges"><span class="tcard-badge">Private</span></div>' +
      '<span class="tcard-dur">' + t.dur + '</span></div>' +
      '<div class="tcard-body"><h3 class="tcard-title">' + t.t + '</h3>' +
      '<p class="tcard-benefit">' + t.h + '</p>' +
      '<ul class="tcard-trust"><li>Licensed Algerian operator</li><li>Free cancellation up to 5 days before</li></ul>' +
      '<div class="tcard-foot"><span class="tcard-price"><em>from</em> <b>€' + t.p + '</b> <small>/ person</small></span>' +
      '<span class="tcard-cta">View &amp; book →</span></div></div></a>';
  }).join('');

  /* ---------- PLAN CARDS ---------- */
  var plan = [
    { e: '🧭', t: 'Browse tours', x: '20 private, guided itineraries — Sahara, coast and Roman north.', a: '#0B3D2E', b: '#11543D' },
    { e: '🏛️', t: 'Destinations', x: "Casbah of Algiers, Tassili n'Ajjer, Constantine, Djémila and more.", a: '#8A3F2E', b: '#b4543b' },
    { e: '🗺️', t: 'States', x: "Region-by-region guides across Algeria's States.", a: '#1E8C8C', b: '#27a9a9' },
    { e: '🛂', t: 'Travel guides', x: 'Visa, safety, best time to visit, food and transport.', a: '#C19333', b: '#dba63c' },
    { e: '🍵', t: 'Culture & food', x: 'Cuisine, crafts, music and the civilisations that shaped Algeria.', a: '#7a3b16', b: '#9c5223' },
    { e: '✨', t: 'Discover Algeria', x: 'Our in-depth, researched guide to the whole country.', a: '#4A2A6A', b: '#6b3f97' }
  ];
  var pg = document.getElementById('plan-grid');
  if (pg) pg.innerHTML = plan.map(function (c) {
    return '<a class="plan-card" href="#" style="--a:' + c.a + ';--b:' + c.b + '">' +
      '<span class="plan-emoji">' + c.e + '</span><span class="plan-t">' + c.t + '</span>' +
      '<span class="plan-x">' + c.x + '</span><span class="plan-go">→</span></a>';
  }).join('');

  /* ---------- CIVILISATIONS ---------- */
  var civ = [
    { id: '01', r: 'bejaia', a: '#1466A0', name: 'Amazigh', hook: 'The indigenous soul of North Africa', photo: 'bejaia-1.jpg',
      lead: "Long before Rome or Islam, the Imazighen — the 'free people' — held these mountains and oases and gave the land its oldest living language, Tamazight. Their script, silver, pottery and the Yennayer new year endure, strongest in Kabylie and the Aurès.",
      fact: 'Tifinagh script and Berber pottery patterns are over 3,000 years old.', states: ['Béjaïa', 'Tizi Ouzou'] },
    { id: '02', r: 'sahara', a: '#C8680A', name: 'Tuareg & the Sahara', hook: 'Blue-veiled nomads, a sea of dunes', photo: 'djanet-1.jpg',
      lead: 'The deep south belongs to the Tuareg — the blue-veiled caravan people — and to a Sahara of vast dunes and rock-art plateaus. At Tassili n’Ajjer, thousands of paintings record a green Sahara that vanished millennia ago.',
      fact: "Tassili n'Ajjer holds ~15,000 rock paintings, older than the pyramids.", states: ['Djanet', 'Timimoun'] },
    { id: '03', r: 'mzab', a: '#B87A0A', name: 'The Mozabites', hook: 'White ksour of the desert', photo: 'ghardaia-1.jpg',
      lead: 'In a dry valley of the northern Sahara, the Ibadi Mozabites raised five fortified white towns around watchtower-minarets. Their austere, ingenious urbanism has survived a thousand years — and shaped modern architecture.',
      fact: "The M'Zab's cubist architecture inspired Le Corbusier; UNESCO since 1982.", states: ['Ghardaïa'] },
    { id: '04', r: 'roman', a: '#8B2020', name: 'Roman & Numidian', hook: "Africa's Rome, frozen in stone", photo: 'djemila-1.jpg',
      lead: 'Before and during Rome, the Numidian kings and then the empire raised cities across the fertile north. Djémila, Timgad and Tipaza survive as some of the best-preserved Roman cities anywhere — forums, theatres and mosaics standing in open country.',
      fact: 'Djémila and Timgad are among the best-preserved Roman cities on Earth.', states: ['Sétif', 'Batna', 'Tipaza', 'Annaba', 'Constantine'] },
    { id: '05', r: 'constantine', a: '#7A2E5E', name: 'First Islamic Kingdoms', hook: 'Brick minarets of the first kingdoms', photo: 'constantine-1.jpg',
      lead: 'From the 10th century, Berber Muslim dynasties — Hammadid, Zirid and others — founded the first kingdoms of the central Maghreb, leaving brick minarets and ruined capitals across the high country.',
      fact: "The Qal'a of Beni Hammad, first Hammadid capital, is UNESCO-listed (1980).", states: ["M'Sila", 'Béjaïa'] },
    { id: '06', r: 'tlemcen', a: '#0D5C7A', name: 'Andalusian', hook: 'Andalusia in exile — arches & zellige', photo: 'tlemcen-1.jpg',
      lead: 'When Muslims and Jews were expelled from Spain, many settled in Tlemcen, Oran and the western cities, bringing Andalusian music, zellige tilework and refined architecture. Tlemcen, the Zianid capital, became their great refuge.',
      fact: 'Tlemcen was the Zianid capital and a refuge for the exiles of Al-Andalus.', states: ['Tlemcen', 'Oran', 'Mostaganem'] },
    { id: '07', r: 'algiers', a: '#11738A', name: 'Ottoman Algiers', hook: 'Corsair palaces above the bay', photo: 'algiers-9.jpg',
      lead: 'For three centuries Algiers was the seat of Ottoman power in the Maghreb — a corsair city-state above its bay. Its legacy is clearest in the UNESCO-listed Casbah, a steep maze of palaces, mosques and Ottoman houses.',
      fact: 'For 300 years Algiers led Ottoman Barbary; its Casbah is UNESCO-listed.', states: ['Algiers', 'Constantine', 'Blida'] },
    { id: '08', r: 'bousaada', a: '#A0511E', name: 'Modern Algeria', hook: 'The mountains that made a nation', photo: 'bousaada-6.jpg',
      lead: 'Modern Algeria was forged in its mountains — above all the Aurès, where the 1954 war of independence began. This is the Algeria of resistance, of high plateaus and young cities, and of a republic still being written.',
      fact: 'The Aurès mountains lit the spark of the 1954 war of independence.', states: ['Batna', 'Bou Saâda'] }
  ];
  function tint(hex, p) { return 'color-mix(in srgb, ' + hex + ' ' + p + '%, #fff)'; }
  var cg = document.getElementById('civ-grid'), cp = document.getElementById('civ-panels');
  if (cg) cg.innerHTML = civ.map(function (c, i) {
    return '<button type="button" class="civx-card' + (i === 0 ? ' active' : '') + '" data-civ="' + c.id + '" aria-expanded="' + (i === 0) + '"' +
      ' style="--ca:' + c.a + ';color:' + c.a + ';background-color:' + tint(c.a, 8) + ';background-image:url(' + REG + 'pat-' + c.r + '.svg);border:1px solid ' + c.a + '">' +
      '<img class="civx-emblem" src="' + REG + 'em-' + c.r + '.svg" alt="">' +
      '<span class="civx-label">Civilisation ' + c.id + '</span>' +
      '<span class="civx-name">' + c.name + '</span>' +
      '<span class="civx-hook">' + c.hook + '</span></button>';
  }).join('');
  if (cp) cp.innerHTML = civ.map(function (c, i) {
    var chips = c.states.map(function (s) { return '<span class="civx-chip">' + s + '</span>'; }).join('');
    return '<div class="civx-panel"' + (i !== 0 ? ' hidden' : '') + ' data-civ-panel="' + c.id + '"' +
      ' style="--ca:' + c.a + ';color:#2a2018;background-color:' + tint(c.a, 7) + ';background-image:url(' + REG + 'pat-' + c.r + '.svg);background-size:150px 150px;border:1px solid ' + c.a + '">' +
      '<figure class="civx-photo"><img src="' + T + c.photo + '" alt="' + c.name + '" loading="lazy"></figure>' +
      '<div><div class="civx-head"><img class="civx-emblem lg" src="' + REG + 'em-' + c.r + '.svg" alt="">' +
      '<div><span class="civx-label" style="color:' + c.a + '">Civilisation ' + c.id + '</span><h3 class="civx-title">' + c.name + '</h3></div></div>' +
      '<span class="civx-divider"></span><p class="civx-text">' + c.lead + '</p>' +
      '<p class="civx-fact"><span class="civx-star">★</span> ' + c.fact + '</p>' +
      '<div class="civx-states">' + chips + '</div>' +
      '<div class="civx-tours"><a class="civx-tour" href="#"><span class="civx-tour-meta"><strong>Browse journeys to ' + c.name + '</strong><em>Private &amp; guided</em></span><span class="civx-pill">Explore →</span></a></div>' +
      '</div></div>';
  }).join('');
  if (cg) {
    var cards = [].slice.call(cg.querySelectorAll('.civx-card'));
    var panels = [].slice.call(cp.querySelectorAll('.civx-panel'));
    cards.forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-civ'), open = b.getAttribute('aria-expanded') === 'true';
        cards.forEach(function (x) { x.classList.remove('active'); x.setAttribute('aria-expanded', 'false'); });
        panels.forEach(function (p) { p.hidden = true; });
        if (!open) { b.classList.add('active'); b.setAttribute('aria-expanded', 'true'); cp.querySelector('[data-civ-panel="' + id + '"]').hidden = false; }
      });
    });
  }

  /* ---------- SWEETS ---------- */
  var sweets = ['Baklawa', 'Makroud', 'Qalb el Louz', 'Kaab el Ghzal', 'Griwech', 'Tcharek', 'Mhencha'];
  var sg = document.getElementById('sws-row');
  if (sg) sg.innerHTML = sweets.map(function (s, i) {
    var grads = ['#C9912F,#8A5A0C', '#B4543b,#7a3b16', '#D9A441,#A8740F', '#C07A2A,#7a4a12', '#B98A3C,#7E5E1A', '#C9633F,#8A3F2E', '#D69A2D,#96620A'];
    return '<li class="sws-item"><a href="#"><span class="sws-thumb" style="background:linear-gradient(140deg,' + grads[i % grads.length] + ');display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-display);font-size:1.6rem">' + s.charAt(0) + '</span><span class="sws-name">' + s + '</span></a></li>';
  }).join('');

  /* ---------- TRAVELLER MARQUEE ---------- */
  var trav = ['algiers-5.jpg', 'djanet-3.jpg', 'bejaia-3.jpg', 'ghardaia-7.jpg', 'tlemcen-3.jpg', 'constantine-2.jpg', 'bousaada-1.jpg', 'oran-5.jpg', 'djanet-9.jpg', 'tipaza-5.jpg', 'batna-timgad-6.jpg', 'djemila-4.jpg'];
  function strip(arr) { return arr.concat(arr).map(function (s, i) { return '<li class="tmq-tile"><img src="' + T + s + '" alt="' + (i >= arr.length ? '' : 'An Algeria Compass traveller') + '" loading="lazy"></li>'; }).join(''); }
  var ta = document.getElementById('tmq-a'), tb = document.getElementById('tmq-b');
  if (ta) ta.innerHTML = strip(trav.slice(0, 6));
  if (tb) tb.innerHTML = strip(trav.slice(6));

  /* ---------- HONEST ANSWERS ---------- */
  var ICON = {
    shield: '<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>',
    passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 16h6"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    chat: '<path d="M4 5h16v11H9l-4 3v-3H4z"/><path d="M8 9h8M8 12h5"/>',
    map: '<path d="M9 4L4 6v14l5-2 6 2 5-2V4l-5 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
    check: '<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>'
  };
  var cats = [
    { title: 'Safety & welcome', icon: 'shield', items: [
      ['Is Algeria actually safe to visit?', 'Yes. The north — Algiers, the coast, the Roman cities, Kabylie — is calm, and Algerians are famously hospitable to the few foreigners who come. The deep south and borders are restricted, and we only travel them with permits and licensed guides.'],
      ['Will I be welcome as a foreign tourist?', 'More than welcome. Algeria sees a tiny fraction of its neighbours’ visitors, so you arrive as a guest, not a number — expect curiosity, invitations to tea, and very little hassle.'],
      ['Is it safe for solo and women travellers?', 'Generally yes, with modest dress and normal awareness; serious harassment is uncommon. Travelling privately with a local guide removes most of the friction women tell us they worry about.'] ] },
    { title: 'Visa & entry', icon: 'passport', items: [
      ['Do I need a visa, and is it hard?', 'Most nationalities need a tourist visa from an Algerian consulate before travel — and consulates require an invitation letter from a licensed Algerian agency. That is exactly the part we handle for you, free, with every booking.'],
      ['Is there an e-visa or visa on arrival?', 'Not for ordinary tourism. The main exception is organised Sahara tourism entered via the south, where a simplified group entry can be arranged. We tell you honestly which route applies.'] ] },
    { title: 'Why Algeria feels “hard”', icon: 'compass', items: [
      ['Why does planning Algeria feel so difficult?', 'Because information is thin, English is patchy, the desert needs permits, and you can’t just book everything online. That gap is the whole reason we exist: one licensed operator handling visa paperwork, permits, flights, guides and logistics.'],
      ['Can’t I just do it independently?', 'In the north, with patience, yes — and we’ll say so. The Sahara, no: protected zones legally require a licensed operator, a 4x4 and permits.'] ] },
    { title: 'Money, language & daily life', icon: 'chat', items: [
      ['Can I pay by card, or is it cash?', 'Algeria runs on cash. Cards work in a few city hotels and foreign-card ATMs are unreliable, so bring euros or dollars to exchange on arrival.'],
      ['What languages will I get by in?', 'Arabic and Tamazight are everyday, French is widely spoken, English less so outside tourism. Our guides bridge the gap in all four.'] ] },
    { title: 'What to see & how long', icon: 'map', items: [
      ['How long do I really need?', 'A long weekend covers Algiers and the Roman coast. A week adds the M’Zab Valley or a Sahara leg. Ten days lets you cross from the Mediterranean to the dunes.'],
      ['First trip — where should I go?', 'Most first-timers love the mix of the UNESCO Casbah of Algiers, the Roman cities (Tipaza, Djémila, Timgad) and a few nights of Sahara at Djanet or Timimoun.'] ] },
    { title: 'Why we’re legitimate', icon: 'check', items: [
      ['Who are Algeria Compass, exactly?', 'A licensed Algerian tour operator, run by locals, specialising only in Algeria — not a reseller bolting Algeria onto a global catalogue. The visa paperwork we issue is the kind consulates accept.'],
      ['Why trust you over a random online listing?', 'Because we put our licence, our local guides and our real itineraries and prices in front of you, we confirm every trip by hand, and we’d rather tell you a hard truth than oversell.'] ] }
  ];
  var hc = document.getElementById('ha-cats');
  if (hc) hc.innerHTML = cats.map(function (c) {
    return '<div class="ha-cat"><div class="ha-cat-h"><span class="ha-cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + ICON[c.icon] + '</svg></span><h3>' + c.title + '</h3></div><div class="faq">' +
      c.items.map(function (it) { return '<details name="ha-faq"><summary>' + it[0] + '</summary><div class="ha-a"><p>' + it[1] + '</p></div></details>'; }).join('') +
      '</div></div>';
  }).join('');

  /* ---------- WhatsApp links ---------- */
  var waMsg = encodeURIComponent("Hello Algeria Compass, I'd like to plan an Algeria tour.");
  [].slice.call(document.querySelectorAll('[data-wa]')).forEach(function (a) { a.href = WA + '?text=' + waMsg; });

  /* ---------- SCROLL PROGRESS ---------- */
  var bar = document.getElementById('hp-progress');
  function onScroll() {
    var h = document.documentElement, p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if (bar) bar.style.transform = 'scaleX(' + p + ')';
    if (heroImg) heroImg.style.transform = 'translateY(' + (h.scrollTop * 0.18) + 'px) scale(1.1)';
    if (heroIn && h.scrollTop < 700) { heroIn.style.transform = 'translateY(' + (h.scrollTop * 0.3) + 'px)'; heroIn.style.opacity = String(Math.max(0, 1 - h.scrollTop / 560)); }
  }
  var heroImg = document.getElementById('hero-img'), heroIn = document.getElementById('hero-in'), heroPat = document.getElementById('hero-pat');
  var hero = document.querySelector('.hero');
  if (hero) hero.addEventListener('mousemove', function (e) {
    var r = hero.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
    if (heroPat) heroPat.style.transform = 'translate(' + (px * 30) + 'px,' + (py * 30) + 'px)';
  });
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- REVEAL ---------- */
  if (document.visibilityState === 'visible' && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    [].slice.call(document.querySelectorAll('.reveal')).forEach(function (el) {
      el.classList.add('armed', 'up');
      var r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.92) { requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('is-in'); }); }); }
      else io.observe(el);
    });
  }
})();

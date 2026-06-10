// Phase 7 — categorized FAQ. Substantive, accurate answers grouped by topic.
// Rendered on /questions/ (with FAQPage JSON-LD) and a curated subset on the home page.
// `href` links a question to its fuller dedicated guide where one exists.
//
// NOTE (flagged to owner): cancellation is now the confirmed policy — free
// cancellation up to 5 days before the tour departure date. Deposit % and exact
// payment methods are still general; confirm them to make those answers exact.

export interface FaqItem { q: string; a: string; href?: string; }
export interface FaqCategory { id: string; title: string; items: FaqItem[]; }

export const FAQ: FaqCategory[] = [
  { id: 'safety', title: 'Safety', items: [
    { q: 'Is Algeria safe for tourists?', a: 'Yes for normal tourism in the north and on organised desert trips. Cities are generally calm and welcoming; take the usual precautions you would anywhere. The deep south and border regions are restricted and are visited only with licensed operators and permits.', href: '/questions/is-algeria-safe/' },
    { q: 'Are there areas to avoid?', a: 'The border zones with Mali, Niger, Libya and parts of the far south outside authorised routes are off-limits to independent travel. Organised desert journeys keep to permitted areas with the required authorisations.' },
    { q: 'Can I travel independently?', a: 'In the north, yes, with patience and standard care. The Sahara is not for independent travel — it is organised through a licensed Algerian operator with guides, 4x4 and permits.' },
  ]},
  { id: 'visa', title: 'Visas & entry', items: [
    { q: 'Do I need a visa for Algeria?', a: 'Most nationalities need a visa arranged in advance at an Algerian consulate, usually supported by an invitation/voucher from a licensed agency. Rules vary by nationality and change over time — always confirm with your consulate.', href: '/questions/do-i-need-a-visa-for-algeria/' },
    { q: 'Can you help with my visa?', a: 'Yes — as a licensed Algerian operator we provide the invitation letter / tourist voucher and booking confirmation that most consulates require for a tourist visa.' },
    { q: 'Is there an e-visa or visa on arrival?', a: 'Generally not for ordinary tourism. The main exception is organised tourism to the far-south desert, where a simplified entry can be arranged for the group. Verify current rules officially before you rely on them.' },
  ]},
  { id: 'best-time', title: 'Best time to visit', items: [
    { q: 'When is the best time to visit Algeria?', a: 'Spring (March–May) and autumn (September–November) are best for the north — coast, Roman cities and mountains. The Sahara is a winter destination, best from November to February.', href: '/questions/when-is-the-best-time-to-visit-algeria/' },
    { q: 'When should I visit the Sahara?', a: 'November to February, when desert temperatures are cool and clear. Summer in the deep south is dangerously hot and not suitable for travel.' },
    { q: 'Can I travel during Ramadan?', a: 'Yes — it is a special time to visit, though daytime eating options and some opening hours change. We plan itineraries around it so your trip runs smoothly.' },
  ]},
  { id: 'costs', title: 'Costs & budget', items: [
    { q: 'How much does a trip to Algeria cost?', a: 'It depends on length and style. Our day tours start around €30, multi-day private tours run from a few hundred euros, and our longest 10-day private journeys are around €1,200 per person. Each tour page lists its price.', href: '/questions/how-much-does-a-trip-to-algeria-cost/' },
    { q: 'Is Algeria expensive?', a: 'Day-to-day costs are moderate. The main cost of a trip is private guiding, transport, permits and domestic flights rather than high local prices.' },
    { q: 'What do tour prices include?', a: 'It varies by tour — each page has a "What\'s included / Not included" list. Typically a licensed guide, private transport and some meals or accommodation are included; international flights and visa fees are not.' },
  ]},
  { id: 'getting-around', title: 'Getting around', items: [
    { q: 'How do you get around in Algeria?', a: 'Domestic flights cover the long distances (especially to the Sahara), comfortable trains link the northern cities, and private vehicles with a driver are the easiest way to tour. In the desert, travel is by 4x4 only.', href: '/questions/how-do-you-get-around-in-algeria/' },
    { q: 'Do I need to rent a car?', a: 'For the north it is possible, but most visitors prefer a private car and driver. For the south a licensed operator with a properly equipped 4x4 is required — we arrange all transport.' },
    { q: 'Are domestic flights reliable?', a: 'Air Algérie and other carriers link Algiers with the main cities and Saharan towns like Djanet and Timimoun. We advise on timings and build flights into your plan (flight cost is usually separate).' },
  ]},
  { id: 'money', title: 'Money & cards', items: [
    { q: 'Can I use credit cards and ATMs?', a: 'Algeria is largely a cash economy. Cards are accepted only in some city hotels and rarely elsewhere, and foreign-card ATMs are unreliable. Plan to pay cash for most things.' },
    { q: 'What currency is used, and can I get it in advance?', a: 'The Algerian dinar (DZD). It cannot be obtained outside the country, so bring euros or US dollars in cash and exchange them on arrival.' },
    { q: 'How much cash should I bring?', a: 'Enough for your personal spending, meals not included in your tour, tips and souvenirs. Bring a mix of larger and smaller notes and keep them secure.' },
  ]},
  { id: 'connectivity', title: 'Connectivity', items: [
    { q: 'Is there wifi and mobile data?', a: 'City hotels usually have wifi. A local SIM card (Djezzy, Mobilis or Ooredoo) gives affordable data and is registered with your passport. Coverage thins out quickly in the desert.' },
    { q: 'Will my phone work in the Sahara?', a: 'In and around towns, yes. The deep desert is largely off-grid with little or no signal — part of its appeal — so let people know your plans before you head out.' },
  ]},
  { id: 'food', title: 'Food & drink', items: [
    { q: 'What is Algerian food like?', a: 'Couscous, slow tagines, grilled meats and coastal fish, fresh bread, Saharan dates, Kabyle olive oil and mint tea poured from a height — Mediterranean and regional, and generous.', href: '/food/' },
    { q: 'Can you cater for vegetarians or dietary needs?', a: 'Yes — vegetable couscous, salads, pulses and bread make vegetarian eating easy, and we can arrange for allergies or other needs if you tell us in advance.' },
    { q: 'Is the tap water safe to drink?', a: 'Stick to bottled water, which is cheap and widely available; it is provided on our desert trips.' },
  ]},
  { id: 'women', title: 'Women travellers', items: [
    { q: 'Is Algeria safe for women travellers?', a: 'Generally yes, with normal precautions. Serious harassment is uncommon, but modest dress and awareness — especially outside the big cities — make for a more comfortable trip. Private, guided travel adds an extra layer of ease.' },
    { q: 'What should women wear?', a: 'Modest, loosely covering clothing is appreciated; carry a scarf for mosques and conservative areas. Beaches and big-city districts are more relaxed, especially in summer.' },
  ]},
  { id: 'sahara-permits', title: 'Sahara & permits', items: [
    { q: 'Do I need a permit for the Sahara?', a: 'Yes — the protected desert zones, including Tassili n\'Ajjer and the Tadrart, require permits and a licensed local guide. We arrange the permits and guiding as part of any desert trip.' },
    { q: 'Can I explore the desert on my own?', a: 'No — independent deep-desert travel is restricted for safety and conservation. It is done with a licensed operator, 4x4 vehicles and the proper authorisations.' },
  ]},
  { id: 'photography', title: 'Photography', items: [
    { q: 'Can I take photos freely?', a: 'Landscapes, monuments and ruins are generally fine. Always ask before photographing people, and avoid photographing military and police sites and some government buildings.' },
    { q: 'Can I bring a drone?', a: 'Drones are restricted and often prohibited in Algeria. Do not bring or fly one without explicit prior authorisation — it can cause serious problems at the border or on site.' },
  ]},
  { id: 'health', title: 'Health & insurance', items: [
    { q: 'Do I need vaccinations?', a: 'No special vaccinations are required for most travellers. Make sure routine vaccinations are up to date and consult your doctor or a travel clinic, and bring any personal medication in its original packaging.' },
    { q: 'Is medical care available?', a: 'Cities have hospitals and pharmacies; the desert is remote, so carry a basic personal first-aid kit. Pharmacies are well stocked in towns.' },
    { q: 'Do I need travel insurance?', a: 'Yes — we strongly recommend comprehensive travel insurance that covers remote and desert travel. It is not included in tour prices.' },
  ]},
  { id: 'packing', title: 'What to pack', items: [
    { q: 'What should I pack for the Sahara?', a: 'Warm layers for genuinely cold desert nights, strong sun protection, a headtorch, sturdy closed shoes, a scarf for sun and dust, and a refillable water bottle.' },
    { q: 'What about the cities and the north?', a: 'Comfortable walking shoes for the Casbah and ruins, modest clothing, and a light jacket for spring and autumn evenings. Add swimwear for the coast in summer.' },
  ]},
  { id: 'booking', title: 'Booking & payment', items: [
    { q: 'How do I book a tour?', a: 'Send us your dates, group size and interests through the contact form or on WhatsApp. We check availability and any permits and confirm the details with you by email.' },
    { q: 'How and when do I pay?', a: 'Payment is arranged at booking — typically a deposit to confirm your trip and the balance before or at the start. Contact us for the current methods and terms for your tour.' },
    { q: 'Is my booking confirmed immediately?', a: 'We confirm by email or WhatsApp once we have checked availability, transport and any required permits — not automatically, so that what we confirm is real.' },
  ]},
  { id: 'cancellation', title: 'Changes & cancellation', items: [
    { q: 'What is your cancellation policy?', a: 'Free cancellation up to 5 days before your tour departure date — cancel any time before then and you receive a full refund. Within 5 days of departure, costs already committed on your behalf (hotels, internal flights, guides and suppliers) may no longer be recoverable, and we refund whatever remains. Government visa fees and independently booked flights are paid to third parties and are never refundable. Full terms are confirmed in writing when you book.' },
    { q: 'Can I change my dates or itinerary?', a: 'We will do our best to accommodate changes, subject to availability and any supplier or permit conditions. Tell us as early as possible so we can adjust the plan.' },
  ]},
];

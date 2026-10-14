# Listings kit: the same facts, everywhere

AI assistants decide who to recommend partly by checking that a business looks
the **same** in many independent places. Every field below matches the website
exactly (`src/config.ts`). Copy it as written; do not rephrase the name,
address or phone number, even slightly.

**Order to do them in** (most valuable for AI first):

1. **Bing Places** (bingplaces.com). ChatGPT's web search runs on Bing. You can
   import the whole listing straight from Google Business Profile in two clicks.
2. **Apple Business Connect** (businessconnect.apple.com). Feeds Apple Maps and Siri.
3. **TripAdvisor** (tripadvisor.com/Owners). The first place travellers and AI
   look for tour-operator reviews.
4. **Wikidata** (wikidata.org). Read the note in that section first.

---

## The facts (identical on every platform)

| Field | Value |
|---|---|
| Name | Algeria Compass |
| Category | Tour operator / Travel agency |
| Address | Rue Larbi Ben M’Hidi, Alger-Centre, 16000 Algiers, Algeria |
| Coordinates | 36.7791524, 3.0580592 |
| Phone / WhatsApp | +213 784 193 176 |
| Email | hello@algeriacompass.com |
| Website | https://algeriacompass.com/ |
| Hours | Open 24 hours, 7 days |
| Languages | English, French, Italian, Spanish, German, Russian, Arabic — each language has its own guides on the team (not an interpreter) |
| Instagram | https://www.instagram.com/algeria_compass/ |
| Facebook | https://www.facebook.com/profile.php?id=61590718167514 |
| Prices | From €30 (day tours) to €1,850 (14 days); luxury 8-day journeys €1,615–€2,290 per person |
| Cancellation | Free up to 5 days before departure, full refund |
| Payment | 20% deposit before arrival (bank transfer, card or PayPal); balance on arrival in Algeria |

### Short description (up to 160 characters)
Licensed Algerian operator: private tours of the Sahara, Roman cities and Algiers, guided in your own language. From €30.

### Long description (up to 750 characters)
Algeria Compass is a licensed Algerian tour operator based in Algiers, running
private journeys across the country: the Sahara around Djanet, the Tadrart
Rouge and Timimoun, the Roman cities of Timgad, Djémila and Tipaza, the Casbah
of Algiers, Constantine and the M'Zab Valley. Every tour is private, on your own
dates, and guided in your own language by our own guides — English, French,
Italian, Spanish, German, Russian or Arabic. We arrange the visa invitation
letter, or the visa on arrival for trips that include the Sahara. Tours run from
€30 for a day in Algiers to 14 days from the coast to the Sahara. Free
cancellation up to 5 days before departure.

### Photos to upload (in this order)
Use the site's own photographs so the images match everywhere:
`public/assets/img/tours/djanet-13.jpg`, `djemila-2.jpg`, `timimoun-7.jpg`,
`tipaza-10.jpg`, `constantine-14.jpg`, plus the logo `public/assets/img/logo-full.png`.

---

## Bing Webmaster Tools (also feeds ChatGPT search and Copilot)

1. Go to https://www.bing.com/webmasters and sign in (Microsoft or Google account).
2. **Add site** → `https://algeriacompass.com/`. Choose **Import from Google
   Search Console** if it is offered (fastest); otherwise pick **XML file**
   verification — the file `BingSiteAuth.xml` is already live on the site.
3. **Sitemaps** → submit `https://algeriacompass.com/sitemap.xml` and
   `https://algeriacompass.com/sitemap-images.xml`.
4. **IndexNow** (left menu) → you should see the URLs our deploy already sent
   (key `b00ed809a36308c30a813741d1f5bff4`). Nothing to set up.
5. Two weeks later: **Search Performance** shows the queries people find us with
   on Bing — send a screenshot so we can act on it.

### بالعربي — Bing (10 دقايق)
١. افتحي bing.com/webmasters وادخلي بحساب جوجل.
٢. Add site ← اكتبي https://algeriacompass.com/ ← لو ظهر «Import from Google Search Console» اختاريه، غير كده اختاري XML file (الملف موجود على الموقع).
٣. من Sitemaps ضيفي: https://algeriacompass.com/sitemap.xml
٤. من قسم IndexNow هتلاقي الصفحات اللي اتبعتت — مفيش حاجة تتعمل.

---

## TripAdvisor

- Listing type: **Attraction → Tours → Private tours / Multi-day tours**.
- Add each main tour as a product with the **same name and price as the
  website**. Start with: Tadrart Rouge 7 days (€920), Djanet Sahara Safari
  5 days (€828), Algeria Grand Discovery 14 days (€1,850), Algiers Culture Walk
  (€30).
- After the listing is live, send it to us: it gets added to the website's
  structured data (`sameAs`), which ties the two together for Google and AI.
- In **Languages offered**, tick every language we guide in (English, French,
  Italian, Spanish, German, Russian, Arabic).

### بالعربي — TripAdvisor (20 دقيقة)
١. افتحي tripadvisor.com/Owners ← «Add your business» ← اختاري **Attraction** ثم **Tours**.
٢. انسخي الاسم والعنوان والتليفون والإيميل والموقع من جدول «The facts» فوق — حرفياً، نفس الكتابة.
٣. الوصف: انسخي «Long description» فوق.
٤. الصور: الصور المذكورة فوق بالترتيب، واللوجو.
٥. ضيفي الرحلات الأربعة بنفس الاسم والسعر اللي على الموقع.
٦. أول ما الصفحة تتنشر ابعتيلي اللينك، وأنا أربطه بالموقع.


## Wikidata

**Read first:** Wikidata keeps an item only if it has **independent sources**:
a newspaper article, a tourism-ministry register, a guidebook mention. Without
one, the item may be deleted. Create it once there is at least one such source.

| Property | Value |
|---|---|
| Label (en) | Algeria Compass |
| Description (en) | tour operator based in Algiers, Algeria |
| Label (fr) | Algeria Compass |
| Description (fr) | agence de voyages et tour-opérateur basé à Alger |
| instance of (P31) | travel agency |
| country (P17) | Algeria (Q262) |
| headquarters location (P159) | Algiers |
| official website (P856) | https://algeriacompass.com/ |
| email address (P968) | mailto:hello@algeriacompass.com |
| phone number (P1329) | +213784193176 |
| coordinate location (P625) | 36.7791524, 3.0580592 |
| Instagram username (P2003) | algeria_compass |
| Facebook ID (P2013) | 61590718167514 |
| described at URL (P973) | *the independent source* |

Once the item exists, send us its Q-number: it goes into the website's
`sameAs`, the strongest single link between a website and a known entity.

## Google Business Profile: small fixes

- Business description: use the long description above.
- Add the same photos, and the tours as **Products** with the website's prices.
- Send us the full profile link (`https://www.google.com/maps/place/...`). The
  short `share.google` link on the site is a weaker signal.

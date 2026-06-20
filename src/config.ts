// Single source of truth for site-wide settings.
// Site URL itself lives in astro.config.mjs (`site`) and is read via import.meta.env.SITE.
export const CONTACT = {
  whatsapp: '213784193176',          // digits only, for wa.me links
  email: 'hello@algeriacompass.com',
  phoneDisplay: '+213 784 193 176',
  phoneE164: '+213784193176',
  // NAP — single source of truth. Owner-confirmed 2026-06-20 to match the
  // Google Business Profile (https://maps.app.goo.gl/Ro5E2HnFp7GjRX9s9 ->
  // Alger-Centre, central Algiers). Use these EXACT values on every citation.
  address: {
    street: 'Rue Larbi Ben M’Hidi',
    locality: 'Alger-Centre',
    region: 'Algiers',
    postalCode: '16000',
    country: 'Algeria',
    countryCode: 'DZ',
    full: 'Rue Larbi Ben M’Hidi, Alger-Centre, 16000 Algiers, Algeria',
  },
  geo: { lat: 36.7791524, lng: 3.0580592 },
  mapShort: 'https://maps.app.goo.gl/Ro5E2HnFp7GjRX9s9',
  mapEmbed: 'https://maps.google.com/maps?q=36.7791524,3.0580592&z=16&output=embed',
};

// Set ONE of these to turn analytics on. Leave blank to disable entirely (no tracking, no banner needed).
export const ANALYTICS = {
  plausibleDomain: '',            // e.g. 'algeriacompass.com'  (privacy-friendly, no cookie banner)
  ga4: 'G-FH7BZFG1YM',            // Google Analytics 4 — loaded with Consent Mode v2 (denied by default)
};

// Optional email-backed form fallback. Leave blank to use WhatsApp/email handoff only.
export const FORMSPREE_ID = '';   // e.g. 'xrgkabcd'  -> https://formspree.io/f/xrgkabcd

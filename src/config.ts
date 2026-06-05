// Single source of truth for site-wide settings.
// Site URL itself lives in astro.config.mjs (`site`) and is read via import.meta.env.SITE.
export const CONTACT = {
  whatsapp: '213784193176',          // digits only, for wa.me links
  email: 'hello@algeriacompass.com',
  phoneDisplay: '+213 784 193 176',
};

// Set ONE of these to turn analytics on. Leave blank to disable entirely (no tracking, no banner needed).
export const ANALYTICS = {
  plausibleDomain: '',   // e.g. 'algeriacompass.com'  (privacy-friendly, no cookie banner)
  ga4: '',               // e.g. 'G-XXXXXXX'          (needs a cookie-consent banner in the EU)
};

// Optional email-backed form fallback. Leave blank to use WhatsApp/email handoff only.
export const FORMSPREE_ID = '';   // e.g. 'xrgkabcd'  -> https://formspree.io/f/xrgkabcd

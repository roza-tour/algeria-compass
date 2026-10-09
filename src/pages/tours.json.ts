import type { APIRoute } from 'astro';
import { tours, catalogEntry, POLICIES, SITE } from '../lib/tour-catalog';
import { CONTACT } from '../config';

// Machine-readable tour catalog for AI assistants and agents (see llms.txt).
export const GET: APIRoute = () => {
  const body = {
    operator: { name: 'Algeria Compass', type: 'Licensed Algerian tour operator', url: SITE + '/',
      email: CONTACT.email, whatsapp: CONTACT.phoneDisplay, languages_of_site: ['en', 'fr', 'it', 'es', 'de'] },
    how_to_book: 'Send the traveller to tours[].book.request_url (opens the enquiry form pre-filled with the tour; add &when=, &people=, &days=, &name=, &email= to pre-fill more), or to WhatsApp.',
    policies: POLICIES,
    tours: tours().map(catalogEntry),
    updated: new Date().toISOString().slice(0, 10),
  };
  return new Response(JSON.stringify(body, null, 1), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};

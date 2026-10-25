// The site's one icon set (DESIGN.md: "one line set, stroke 1.75, no emoji in
// UI"). Every icon is drawn on a 24x24 grid with currentColor strokes, so it
// takes the colour of the text beside it and renders identically on every
// device -- unlike emoji, which each phone maker draws in its own cartoon
// style, and which were the most cartoonish thing left on the site.
//
// Render with <Icon name="..." /> (src/components/Icon.astro).

export const ICONS: Record<string, string> = {
  compass:   '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  landmark:  '<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  map:       '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  book:      '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  utensils:  '<path d="M3 2v7c0 1.1.9 2 2 2a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  sparkles:  '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',
  search:    '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  chat:      '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.3A8.4 8.4 0 1 1 21 11.5Z"/>',
  languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  file:      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>',
  passport:  '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3.2"/><line x1="8" y1="17" x2="16" y2="17"/>',
  dunes:     '<circle cx="17" cy="6" r="2.5"/><path d="M2 19c3-5 6-7 9-7s6 4 11 7"/><path d="M2 22h20"/><path d="M8 19.5c2-1.6 4-2 7-1"/>',
  mosque:    '<path d="M6 21v-7a6 6 0 0 1 12 0v7"/><path d="M12 4v4"/><path d="M3 21h18"/><path d="M3 21v-9"/><path d="M21 21v-9"/><path d="M10 21v-3a2 2 0 0 1 4 0v3"/>',
  moon:      '<path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"/>',
  gem:       '<path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M2 9h20"/><path d="m12 21-4-12 3-6"/><path d="m12 21 4-12-3-6"/>',
  leaf:      '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
  triangle:  '<path d="M12 3 2.5 20h19Z"/><path d="M12 9.5 7.6 17h8.8Z"/>',
  flower:    '<circle cx="12" cy="12" r="2.6"/><path d="M12 9.4C12 6 13.5 3 12 3s0 3-0 6.4"/><path d="M12 9.4c-1.6-3-4.5-4.7-5.3-3.5-.8 1.3 2.5 2.3 3 4"/><path d="M14.6 11c3-1.6 4.7-4.5 3.5-5.3-1.3-.8-2.3 2.5-4 3"/><path d="M13 14.4c1.6 3 4.5 4.7 5.3 3.5.8-1.3-2.5-2.3-3-4"/><path d="M10 14c-3 1.6-4.7 4.5-3.5 5.3 1.3.8 2.3-2.5 4-3"/>',
  horns:     '<path d="M8 21c-3-4-4-9-1-15"/><path d="M16 21c3-4 4-9 1-15"/><path d="M7 11c1 .4 2 .4 3 0"/><path d="M14 11c1 .4 2 .4 3 0"/>',
  crown:     '<path d="m2 7 5 5 5-8 5 8 5-5-2 12H4Z"/><path d="M4 22h16"/>',
  cloud:     '<path d="M17.5 19H7a5 5 0 1 1 1.6-9.7A6.5 6.5 0 0 1 21 11.5a4 4 0 0 1-3.5 7.5Z"/>',
  bowl:      '<path d="M3 11h18a9 9 0 0 1-18 0Z"/><path d="M7 21h10"/><path d="M12 3c-1 1.5 1 2.5 0 4"/><path d="M8.5 4c-.8 1.2.8 2 0 3.2"/><path d="M15.5 4c-.8 1.2.8 2 0 3.2"/>',
  ring:      '<circle cx="12" cy="15" r="6"/><path d="m9 6 3-4 3 4-3 3Z"/>',
  tea:       '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M7 2v3"/><path d="M11 2v3"/>',
  clock:     '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  eye:       '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  drop:      '<path d="M12 2.7s6 6.4 6 11.3a6 6 0 0 1-12 0c0-4.9 6-11.3 6-11.3Z"/>',
  star:      '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z"/>',
  check:     '<path d="M20 6 9 17l-5-5"/>',
  arrow:     '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  phone:     '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  mail:      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  pin:       '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  shield:    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  users:     '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  calendar:  '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  wallet:    '<path d="M20 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3v3a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5"/>',
};

// WhatsApp's own glyph (a filled brand mark, not a line icon): it is the one
// place a recognisable logo beats a generic speech bubble.
export const WHATSAPP_PATH =
  'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24Z';

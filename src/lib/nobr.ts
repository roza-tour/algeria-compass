// Keep compounds like "5-Day" or "3-Night" on one line.
//
// A line may break after any hyphen, so tour titles kept wrapping as "5-" on
// one line and "Day Tadrart Rouge" on the next; text-wrap: balance does not
// prevent that. The U+2011 non-breaking hyphen is the standard fix, and every
// font the site loads draws it the same as an ordinary hyphen.
//
// Matches a number joined by a hyphen to a word: "5-Day", "14-day", "3-Night";
// leaves "Tlemcen-Oran" and "e-Visa" alone.
// https://regex101.com/?regex=(%5Cd)-(%3F%3D%5Cp%7BL%7D)&flags=gu&testString=5-Day%20Tadrart%20Rouge%0A14-day%20grand%20tour%0Ae-Visa%0ATlemcen-Oran
const NUMBER_COMPOUND = /(\d)-(?=\p{L})/gu;

export const nobr = (s: string): string => (s || '').replace(NUMBER_COMPOUND, '$1‑');

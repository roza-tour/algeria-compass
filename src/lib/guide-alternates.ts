// One source of truth for the hreflang set of a translated guide.
//
// WHY THIS EXISTS: hreflang used to be hand-declared — English articles carried
// frAlt/itAlt/esAlt/deAlt in their frontmatter, and the French pages hardcoded
// their own list. Adding the Italian, Spanish and German guides therefore left
// 36 one-way annotations: the translations pointed at English and French, and
// neither pointed back. Google discards a hreflang set that is not reciprocal,
// so those pages were getting no multilingual signal at all despite being
// correctly translated.
//
// The guides data already knows every mapping (each entry carries `en` and
// `fr`), so the set is derived from it instead. A new translation now wires
// its own hreflang in every direction on the next build.

import { GUIDES_IT } from '../data/guides-it';
import { GUIDES_ES } from '../data/guides-es';
import { GUIDES_DE } from '../data/guides-de';

type Alts = { en?: string; fr?: string; it?: string; es?: string; de?: string };

const SETS: [keyof Alts, { slug: string; en?: string; fr?: string }[]][] = [
  ['it', GUIDES_IT as any],
  ['es', GUIDES_ES as any],
  ['de', GUIDES_DE as any],
];

/**
 * Full alternate map for a page whose English canonical is `enPath`.
 * Returns only languages that actually have a published page, so hreflang can
 * never point at a URL that was not built.
 */
export function altsForEnglish(enPath: string): Alts {
  const out: Alts = { en: enPath };
  for (const [lang, list] of SETS) {
    const hit = list.find((g) => g.en === enPath);
    if (hit) {
      (out as any)[lang] = `/${lang}/${hit.slug}/`;
      // Every translated entry carries the French counterpart too; the French
      // pages are standalone routes with no data file of their own.
      if (!out.fr && hit.fr) out.fr = hit.fr;
    }
  }
  return out;
}

/** Same set, addressed from a French page that translates `enPath`. */
export function altsForFrench(enPath: string, frPath: string): Alts {
  return { ...altsForEnglish(enPath), fr: frPath };
}

// Registry of vetted, authoritative source types used across the site.
// Pages cite specific sources in their `sources` frontmatter; this registry
// documents the categories our Sources Policy commits to and powers labelling.
export const SOURCE_TYPES: Record<string,{label:string}> = {
  unesco: { label: 'UNESCO World Heritage Centre' },
  government: { label: 'Government source' },
  tourism: { label: 'Official tourism source' },
  academic: { label: 'Academic source' },
  museum: { label: 'Museum source' },
  historical: { label: 'Historical source' },
  transport: { label: 'Transport operator' },
  'local-authority': { label: 'Local authority' },
  news: { label: 'News source' },
  reference: { label: 'Reference work' }
};
export function typeLabel(t?: string){ return t && SOURCE_TYPES[t] ? SOURCE_TYPES[t].label : 'Source'; }

import { getEntry } from 'astro:content';
export async function resolveAuthor(slug?: string){
  const s = slug || 'editorial-team';
  try { const e = await getEntry('team', s); if(e) return { name:e.data.name, href:`/team/${e.slug}/`, entry:e }; } catch {}
  return { name:'Algeria Compass Editorial Team', href:'/team/editorial-team/', entry:null };
}
export async function resolveReviewer(slug?: string){
  const s = slug || 'editorial-review';
  try { const e = await getEntry('reviewer', s); if(e) return { name:e.data.name, href:`/reviewers/${e.slug}/`, entry:e }; } catch {}
  return { name:'Algeria Compass Editorial Review', href:'/reviewers/editorial-review/', entry:null };
}
// Stable schema @ids
export function authorNode(site:string, e:any){
  if(!e) return { "@id": site+"/#editorial-team" };
  if(e.data.isOrganization) return {
    "@type":"Organization","@id":site+"/#editorial-team","name":e.data.name,
    "url":site+`/team/${e.slug}/`,"parentOrganization":{"@id":site+"/#organization"},
    "knowsAbout":e.data.expertise,"areaServed":{"@id":site+"/#algeria"}
  };
  return {
    "@type":"Person","@id":site+`/team/${e.slug}/#person`,"name":e.data.name,"jobTitle":e.data.role,
    "url":site+`/team/${e.slug}/`,"worksFor":{"@id":site+"/#organization"},
    "knowsAbout":e.data.expertise,"knowsLanguage":e.data.languages,
    ...(e.data.image?{"image":site+e.data.image}:{}) ,...(e.data.sameAs?.length?{"sameAs":e.data.sameAs}:{})
  };
}
export function reviewerNode(site:string, e:any){
  if(!e) return { "@id": site+"/#editorial-review" };
  if(e.data.isOrganization) return {
    "@type":"Organization","@id":site+"/#editorial-review","name":e.data.name,
    "url":site+`/reviewers/${e.slug}/`,"parentOrganization":{"@id":site+"/#organization"}
  };
  return {
    "@type":"Person","@id":site+`/reviewers/${e.slug}/#person`,"name":e.data.name,"jobTitle":e.data.role,
    "url":site+`/reviewers/${e.slug}/`,"worksFor":{"@id":site+"/#organization"}
  };
}
export function citationNodes(sources:any[]=[]) {
  return sources.filter(s=>s&&s.title).map(s=>({
    "@type":"CreativeWork", "name":s.title, ...(s.url?{"url":s.url}:{}) , ...(s.publisher?{"publisher":{"@type":"Organization","name":s.publisher}}:{})
  }));
}

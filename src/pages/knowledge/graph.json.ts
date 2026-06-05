import type { APIRoute } from 'astro';
import { entities } from '../../data/algeria';
export const GET: APIRoute = () => new Response(
  JSON.stringify({ name: 'Algeria Compass Algeria knowledge graph', generated: new Date().toISOString(), count: entities.length, entities }),
  { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
);

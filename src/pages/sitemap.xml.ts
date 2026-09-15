import { site } from '../config';
import { notes } from '../lib/notes';
export function GET() { const paths=['','/about','/projects','/notes','/ask','/now','/readings',...notes.map(n=>'/notes/'+n.slug)]; return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${new URL(p,site.url).href.replace(/&/g,'&amp;')}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}}); }

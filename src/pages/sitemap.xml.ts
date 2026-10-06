import { projects } from '../data/projects';
import { site } from '../config';
export function GET() { const paths=['','/about','/projects','/ask','/now','/library',...projects.map(p=>'/projects/'+p.slug)]; return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${new URL(p,site.url).href.replace(/&/g,'&amp;')}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}}); }

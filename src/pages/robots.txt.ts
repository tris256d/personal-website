import { site } from '../config';
export function GET() { return new Response(`User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`); }

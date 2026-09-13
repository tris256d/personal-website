import { site } from '../config';
import { notes } from '../lib/notes';
const escape = (s: string) => s.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
export function GET() { return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escape(site.name)} — Notes</title><link>${site.url}</link><description>${escape(site.description)}</description>${notes.map(n=>`<item><title>${escape(n.title)}</title><description>${escape(n.description)}</description><link>${site.url}/notes/${n.slug}</link><guid>${site.url}/notes/${n.slug}</guid><pubDate>${n.date.toUTCString()}</pubDate></item>`).join('')}</channel></rss>`,{headers:{'Content-Type':'application/rss+xml'}}); }

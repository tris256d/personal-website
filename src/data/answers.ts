import { site } from '../config';
export const answers = [
  { question: 'What are you working on?', keywords: ['working', 'building', 'current', 'now'], answer: 'Right now, this website is the project: a small home for work, notes, and whatever comes next. The Now page is where future updates will live.', links: [{ label: 'The current snapshot', href: '/now' }] },
  { question: 'What have you made?', keywords: ['project', 'made', 'built', 'work'], answer: 'The project list starts with this site. Other entries are clearly marked as placeholders until there is more to share.', links: [{ label: 'Explore projects', href: '/projects' }] },
  { question: 'How can I get in touch?', keywords: ['contact', 'email', 'touch', 'github', 'linkedin'], answer: 'You can find Tristan on GitHub. More contact details will appear here once they have been added to the site.', links: [{ label: 'GitHub', href: site.github }] },
  { question: 'What is this website built with?', keywords: ['website', 'stack', 'astro', 'tech', 'source'], answer: 'Astro, TypeScript, and plain CSS. Static pages with a small amount of JavaScript for the details you can interact with. No external AI service powers these answers.', links: [{ label: 'Read the source', href: site.source }] },
];

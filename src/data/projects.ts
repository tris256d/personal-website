import { site } from '../config';
export type Project = { title: string; year: string; description: string; url?: string; repo?: string; status: string; tags: string[] };
export const projects: Project[] = [
  { title: 'Personal website', year: '2026', description: 'A small, hand-built digital home. Static pages, quiet interactions, and room to grow.', url: '/', repo: site.source, status: 'Live', tags: ['Astro', 'TypeScript'] },
  { title: 'An idea in progress', year: '2026', description: 'A placeholder for the next project. Details will go here when there is something worth sharing.', status: 'Placeholder', tags: [] },
];

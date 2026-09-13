import { site } from '../config';

export type Project = {
  title: string;
  year: string;
  description: string;
  url?: string;
  repo?: string;
  status: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'People Exchange',
    year: '2026',
    description:
      'An iOS social game where groups of friends trade each other with virtual currency and prices move with demand.',
    status: 'In progress',
    tags: ['iOS', 'SwiftUI'],
  },
  {
    title: 'UniDine',
    year: '2025–26',
    description:
      'A Columbia dining app I co-built and launched during my first semester, reaching 200 downloads on launch day.',
    status: 'Shipped',
    tags: [],
  },
  {
    title: 'TheNetwork Labs',
    year: '2025–26',
    description:
      'A six-person startup I founded to explore personal social agents and network intelligence. We shut it down in 2026.',
    status: 'Ended',
    tags: [],
  },
  {
    title: 'Foucault Pendulum',
    year: '2024',
    description:
      "A physics investigation using pendulum measurements from 21 locations to study how Earth's rotation appears through precession.",
    status: 'Complete',
    tags: ['Physics'],
  },
];
export type Project = {
  slug: string;
  title: string;
  year: string;
  tier: 'Selected' | 'More builds';
  type: 'Case study' | 'Project' | 'Build note' | 'Experiment';
  description: string;
  status: string;
  tags: string[];
  url?: string;
  repo?: string;
  sections?: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: 'dash', title: 'Dash', year: '2026', tier: 'Selected', type: 'Case study',
    description: 'A private operating system I built to centralize the different systems of my life.',
    status: 'Archived', tags: ['systems', 'structured state', 'AI'],
    url: 'https://dash.tristandh.com',
  },
  {
    slug: 'syllabl', title: 'Syllabl', year: '2026', tier: 'Selected', type: 'Project',
    description: 'An active project exploring ChatGPT plugins, tooling, and agent infrastructure.',
    status: 'In progress', tags: ['ChatGPT', 'plugins', 'agent infrastructure'],
  },
  {
    slug: 'the-network', title: 'TheNetwork Labs', year: '2025–26', tier: 'Selected', type: 'Case study',
    description: 'A six-person startup I founded to explore personal social agents and network intelligence. We shut it down in 2026.',
    status: 'Ended', tags: ['AI systems', 'social graphs', 'product', 'founding'],
    sections: [
      { title: 'The idea', body: 'I imagined an internet of specialized agents acting on behalf of people and organizations: discovering one another, exchanging information, negotiating, and coordinating tasks. Personal social agents could form a machine-readable social layer around their owners.' },
      { title: 'What I did', body: 'I founded and led a six-person team working on personal social agents and network intelligence.' },
      { title: 'What happened', body: 'We shut it down in 2026. I still find the thesis interesting, but the execution was not right, and my own inexperience mattered.' },
      { title: 'What I learned', body: 'Having a compelling thesis and executing it well are different skills. This project made that distinction concrete for me.' },
    ],
  },
  {
    slug: 'columbiaos', title: 'ColumbiaOS', year: '2026', tier: 'Selected', type: 'Project',
    description: 'A personal operating system I built for college and now use every day to coordinate courses, deadlines, projects, training, and the rest of my life.',
    status: 'In use', tags: ['agents', 'workflows', 'personal systems'],
  },
  {
    slug: 'unidine', title: 'UniDine', year: '2025–26', tier: 'Selected', type: 'Project',
    description: 'A Columbia dining app I co-built and launched during my first semester, reaching 200 downloads on launch day.',
    status: 'Shipped', tags: ['iOS', 'product', 'consumer'],
  },
  {
    slug: 'people-exchange', title: 'People Exchange', year: '2026', tier: 'More builds', type: 'Build note',
    description: 'An experiment in social markets and game economies, built as a native iOS app.',
    status: 'In progress', tags: ['iOS', 'SwiftUI', 'game economies'],
    sections: [{ title: 'The experiment', body: 'I built a SwiftUI social game where groups of friends trade each other using virtual currency, with prices moving in response to demand. The question is whether markets, competition, and incentives can create something people return to after the novelty wears off.' }],
  },
  {
    slug: 'lifedb', title: 'LifeDB', year: '2026', tier: 'More builds', type: 'Build note',
    description: 'A 2026 build; documentation in progress.', status: '', tags: [],
  },
  {
    slug: 'financial-behavioral-model', title: 'Financial Behavioral Model', year: '2026', tier: 'More builds', type: 'Experiment',
    description: 'A 2026 experiment; documentation in progress.', status: '', tags: [],
  },
  {
    slug: 'foucault-pendulum', title: 'Foucault Pendulum', year: '2024', tier: 'More builds', type: 'Project',
    description: "A physics investigation using pendulum measurements from 21 locations to study how Earth's rotation appears through precession.",
    status: 'Complete', tags: ['Physics'],
    sections: [{ title: 'The investigation', body: 'I contacted roughly 50 universities and institutions operating Foucault pendulums, collected usable measurements from 21 locations at different latitudes, and compared the observed precession with what Earth’s rotation predicts.' }],
  },
];

export type NowSnapshot = {
  date: string;
  label: string;
  entries: ([string, string] | null)[];
};

// Add another month here; the newest date is always shown first.
// A null entry preserves the visual break between Reading and Exploring.
export const nowSnapshots: NowSnapshot[] = [
  {
    date: '2026-09',
    label: 'September 2026',
    entries: [
      ['Building', 'People Exchange'],
      ['Studying', 'AI Networks and Contemporary Civilizations'],
      ['Reading', "Plato's Republic"],
      null,
      ['Exploring', 'Physical AI'],
      ['Learning', 'Music production in Ableton'],
      ['Training', 'Running and cycling toward an Ironman'],
      ['Location', 'New York'],
    ],
  },
  {
    date: '2026-10',
    label: 'October 2026',
    entries: [
      ['Building', 'Syllabl'],
      ['Studying', 'AI Networks and Contemporary Civilizations'],
      ['Reading', 'Hebrew Bible & the New Testament'],
      null,
      ['Exploring', 'RL Environments'],
      ['Learning', 'AR Engineering'],
      ['Training', 'Running and cycling toward an Ironman'],
      ['Location', 'New York'],
    ],
  },
];

/**
 * Add { title: 'Title', byline: 'Author / creator' } to current or a year's items.
 * score: optional 0–10 rating; omitted means unrated, not a low rating.
 * thought: optional short personal impression.
 * noteSlug: optional slug for a longer piece at /notes/<slug>.
 * url: optional external book, paper, film or source link.
 * Years display newest first; items keep your order.
 */
export type LibraryItem = {
  title: string;
  byline: string;
  url?: string;
  score?: number;
  thought?: string;
  noteSlug?: string;
};
export type LibraryYear = { year: number; items: LibraryItem[] };
export type LibraryCategory = { current: LibraryItem[]; years: LibraryYear[] };
export const library: Record<'books' | 'papers' | 'films', LibraryCategory> = {
  books: {
    current: [
  {
    title: 'Dune (Book 6)',
    byline: 'Frank Herbert',
  },
  {
    title: 'Nicomachean Ethics and Politics',
    byline: 'Aristotle',
  },
],
    years: [
  {
    year: 2026,
    items: [
      {
        title: "Republic",
        byline: 'Plato',
      },
      {
        title: 'Dune (Books 2–5)',
        byline: 'Frank Herbert',
      },
      {
        title: 'Excellent Sheep',
        byline: 'William Deresiewicz',
      },
      {
        title: 'Zero to One',
        byline: 'Peter Thiel',
      },
      {
        title: 'Enter Ghost',
        byline: 'Isabella Hammad',
      },
      {
        title: 'Song of Solomon',
        byline: 'Toni Morrison',
      },
      {
        title: 'To the Lighthouse',
        byline: 'Virginia Woolf',
      },
      {
        title: 'Crime and Punishment',
        byline: 'Fyodor Dostoevsky',
      },
      {
        title: 'Pride and Prejudice',
        byline: 'Jane Austen',
      },
      {
        title: 'Selected Works',
        byline: 'Sor Juana Inés de la Cruz',
      },
      {
        title: 'Hamlet',
        byline: 'William Shakespeare',
      },
      {
        title: 'Selections from The Complete Essays of Montaigne',
        byline: 'Michel de Montaigne',
      },
      {
        title: 'Inferno',
        byline: 'Dante Alighieri',
      },
      {
        title: 'The Translator of Desires: Poems',
        byline: 'Ibn ‘Arabi',
      },
      {
        title: 'Confessions',
        byline: 'Augustine',
      },
      {
        title: 'Citizen: An American Lyric',
        byline: 'Claudia Rankine',
      },
    ],
  },

  {
    year: 2025,
    items: [
      {
        title: 'Father Comes Home from the Wars',
        byline: 'Suzan-Lori Parks',
      },
      {
        title: 'Gospel of John',
        byline: 'New Testament',
      },
      {
        title: 'Gospel of Luke',
        byline: 'New Testament',
      },
      {
        title: 'Aeneid',
        byline: 'Virgil',
      },
      {
        title: 'Symposium',
        byline: 'Plato',
      },
      {
        title: 'Oresteia',
        byline: 'Aeschylus',
      },
      {
        title: 'Odyssey',
        byline: 'Homer',
      },
      {
        title: 'If Not, Winter: Fragments of Sappho',
        byline: 'Sappho',
      },
      {
        title: 'Iliad',
        byline: 'Homer',
      },
      {
        title: 'Genesis',
        byline: '',
      },
      {
        title: 'Gilgamesh',
        byline: '',
      },
      {
        title: 'The Exaltation of Inana',
        byline: 'Enheduana',
      },
      {
        title: 'The Art of Seduction',
        byline: 'Robert Greene',
      },
      {
        title: 'Chronicle of a Death Foretold',
        byline: 'Gabriel García Márquez',
      },
      {
        title: 'La Grève des bàttu',
        byline: 'Aminata Sow Fall',
      },
      {
        title: 'Candide',
        byline: 'Voltaire',
      },
      {
        title: 'Le Misanthrope',
        byline: 'Molière',
      },
    ],
  },

  {
    year: 2024,
    items: [
      {
        title: 'Animal Farm',
        byline: 'George Orwell',
      },
      {
        title: 'Les Fleurs du mal',
        byline: 'Charles Baudelaire',
      },
      {
        title: "Meurtre sur l'Orient-Express",
        byline: 'Agatha Christie',
      },
      {
        title: 'Dune (Books 1–3)',
        byline: 'Frank Herbert',
      },
      {
        title: 'The Three-Body Problem Trilogy',
        byline: 'Cixin Liu',
      },
      {
        title: 'Random',
        byline: 'Andy Weir',
      },
      {
        title: 'The Circle',
        byline: 'Dave Eggers',
      },
      {
        title: 'Ready Player Two',
        byline: 'Ernest Cline',
      },
    ],
  },

  {
    year: 2023,
    items: [
      {
        title: 'Ready Player One',
        byline: 'Ernest Cline',
      },
      {
        title: 'Snow Crash',
        byline: 'Neal Stephenson',
      },
      {
        title: 'Brave New World',
        byline: 'Aldous Huxley',
      },
      {
        title: 'Scythe Trilogy',
        byline: 'Neal Shusterman',
      },
      {
        title: 'Dry',
        byline: 'Neal Shusterman',
      },
      {
        title: 'Project Hail Mary',
        byline: 'Andy Weir',
      },
      {
        title: 'The Martian',
        byline: 'Andy Weir',
      },
      {
        title: 'Artemis',
        byline: 'Andy Weir',
      },
      {
        title: 'Lord of the Flies',
        byline: 'William Golding',
      },
      {
        title: 'The Chronicles of Narnia',
        byline: 'C. S. Lewis',
      },
      {
        title: 'White Fang',
        byline: 'Jack London',
      },
    ],
  },

  {
    year: 2022,
    items: [
      {
        title: 'The Way Things Work',
        byline: 'David Macaulay',
      },
    ],
  },
],
  },
  papers: { current: [], years: [] },
  films: { current: [], years: [] },
};

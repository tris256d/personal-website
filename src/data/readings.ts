/**
 * Add a book by copying { title: "Book title", author: 'Author' } into an items array.
 * Optionally add url: 'https://...' inside the same braces.
 *
 * Keep books in currentReading while reading; move finished books into readings:
 * { year: 2026, items: [{ title: "Book title", author: 'Author' }] },
 *
 * Years display newest first; books stay in the order you enter them.
 */

export type ReadingItem = {
  title: string;
  author: string;
  url?: string;
};

export type ReadingYear = {
  year: number;
  items: ReadingItem[];
};

export const currentReading: ReadingItem[] = [
  {
    title: 'Dune (Book 6)',
    author: 'Frank Herbert',
  },
  {
    title: 'Nicomachean Ethics and Politics',
    author: 'Aristotle',
  },
];

export const readings: ReadingYear[] = [
  {
    year: 2026,
    items: [
      {
        title: "Republic",
        author: 'Plato',
      },
      {
        title: 'Dune (Books 2–5)',
        author: 'Frank Herbert',
      },
      {
        title: 'Excellent Sheep',
        author: 'William Deresiewicz',
      },
      {
        title: 'Zero to One',
        author: 'Peter Thiel',
      },
      {
        title: 'Enter Ghost',
        author: 'Isabella Hammad',
      },
      {
        title: 'Song of Solomon',
        author: 'Toni Morrison',
      },
      {
        title: 'To the Lighthouse',
        author: 'Virginia Woolf',
      },
      {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
      },
      {
        title: 'Selected Works',
        author: 'Sor Juana Inés de la Cruz',
      },
      {
        title: 'Hamlet',
        author: 'William Shakespeare',
      },
      {
        title: 'Selections from The Complete Essays of Montaigne',
        author: 'Michel de Montaigne',
      },
      {
        title: 'Inferno',
        author: 'Dante Alighieri',
      },
      {
        title: 'The Translator of Desires: Poems',
        author: 'Ibn ‘Arabi',
      },
      {
        title: 'Confessions',
        author: 'Augustine',
      },
      {
        title: 'Citizen: An American Lyric',
        author: 'Claudia Rankine',
      },
    ],
  },

  {
    year: 2025,
    items: [
      {
        title: 'Father Comes Home from the Wars',
        author: 'Suzan-Lori Parks',
      },
      {
        title: 'Gospel of John',
        author: 'New Testament',
      },
      {
        title: 'Gospel of Luke',
        author: 'New Testament',
      },
      {
        title: 'Aeneid',
        author: 'Virgil',
      },
      {
        title: 'Symposium',
        author: 'Plato',
      },
      {
        title: 'Oresteia',
        author: 'Aeschylus',
      },
      {
        title: 'Odyssey',
        author: 'Homer',
      },
      {
        title: 'If Not, Winter: Fragments of Sappho',
        author: 'Sappho',
      },
      {
        title: 'Iliad',
        author: 'Homer',
      },
      {
        title: 'Genesis',
        author: '',
      },
      {
        title: 'Gilgamesh',
        author: '',
      },
      {
        title: 'The Exaltation of Inana',
        author: 'Enheduana',
      },
      {
        title: 'The Art of Seduction',
        author: 'Robert Greene',
      },
      {
        title: 'Chronicle of a Death Foretold',
        author: 'Gabriel García Márquez',
      },
      {
        title: 'La Grève des bàttu',
        author: 'Aminata Sow Fall',
      },
      {
        title: 'Candide',
        author: 'Voltaire',
      },
      {
        title: 'Le Misanthrope',
        author: 'Molière',
      },
    ],
  },

  {
    year: 2024,
    items: [
      {
        title: 'Animal Farm',
        author: 'George Orwell',
      },
      {
        title: 'Les Fleurs du mal',
        author: 'Charles Baudelaire',
      },
      {
        title: "Meurtre sur l'Orient-Express",
        author: 'Agatha Christie',
      },
      {
        title: 'Dune (Books 1–3)',
        author: 'Frank Herbert',
      },
      {
        title: 'The Three-Body Problem Trilogy',
        author: 'Cixin Liu',
      },
      {
        title: 'Random',
        author: 'Andy Weir',
      },
      {
        title: 'The Circle',
        author: 'Dave Eggers',
      },
      {
        title: 'Ready Player Two',
        author: 'Ernest Cline',
      },
    ],
  },

  {
    year: 2023,
    items: [
      {
        title: 'Ready Player One',
        author: 'Ernest Cline',
      },
      {
        title: 'Snow Crash',
        author: 'Neal Stephenson',
      },
      {
        title: 'Brave New World',
        author: 'Aldous Huxley',
      },
      {
        title: 'Scythe Trilogy',
        author: 'Neal Shusterman',
      },
      {
        title: 'Dry',
        author: 'Neal Shusterman',
      },
      {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
      },
      {
        title: 'The Martian',
        author: 'Andy Weir',
      },
      {
        title: 'Artemis',
        author: 'Andy Weir',
      },
      {
        title: 'Lord of the Flies',
        author: 'William Golding',
      },
      {
        title: 'The Chronicles of Narnia',
        author: 'C. S. Lewis',
      },
      {
        title: 'White Fang',
        author: 'Jack London',
      },
    ],
  },

  {
    year: 2022,
    items: [
      {
        title: 'The Way Things Work',
        author: 'David Macaulay',
      },
    ],
  },
];

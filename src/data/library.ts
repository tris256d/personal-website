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
  papers: {
  current: [],
  years: [
    {
      year: 2026,
      items: [
        {
          title: 'Language Models are Few-Shot Learners',
          byline: 'Brown et al. · 2020',
          url: 'https://arxiv.org/abs/2005.14165',
        },
        {
          title: 'Attention Is All You Need',
          byline: 'Vaswani et al. · 2017',
          url: 'https://arxiv.org/abs/1706.03762',
        },
      ],
    },
  ],
},
  films: {
  current: [],
  years: [
    {
      // These are being logged as Prev; this is  meant to imply
      // that every film below was watched before the website was created.
      year: Prev,
      items: [
        {
          title: 'Blade Runner 2049 (2017)',
          byline: 'Denis Villeneuve',
          score: 10,
        },
        {
          title: 'The Matrix (1999)',
          byline: 'Lana & Lilly Wachowski',
          score: 10,
        },
        {
          title: 'Enter the Void (2009)',
          byline: 'Gaspar Noé',
          score: 9,
        },
        {
          title: 'War Dogs (2016)',
          byline: 'Todd Phillips',
          score: 8,
        },
        {
          title: 'The Wolf of Wall Street (2013)',
          byline: 'Martin Scorsese',
          score: 8,
        },
        {
          title: 'Inception (2010)',
          byline: 'Christopher Nolan',
          score: 9,
        },
        {
          title: '12 Monkeys (1995)',
          byline: 'Terry Gilliam',
          score: 9,
        },
        {
          title: 'Shutter Island (2010)',
          byline: 'Martin Scorsese',
          score: 9,
        },
        {
          title: 'Enemy (2013)',
          byline: 'Denis Villeneuve',
          score: 8,
        },
        {
          title: 'Trainspotting (1996)',
          byline: 'Danny Boyle',
          score: 8,
        },
        {
          title: 'One Battle After Another (2025)',
          byline: 'Paul Thomas Anderson',
          score: 6,
        },
        {
          title: 'Marty Supreme (2025)',
          byline: 'Josh Safdie',
          score: 5,
        },
        {
          title: 'Limitless (2011)',
          byline: 'Neil Burger',
          score: 7,
        },
        {
          title: 'The Social Network (2010)',
          byline: 'David Fincher',
          score: 8,
        },
        {
          title: 'The Grey (2011)',
          byline: 'Joe Carnahan',
          score: 7,
        },
        {
          title: 'Blood Diamond (2006)',
          byline: 'Edward Zwick',
          score: 8,
        },
        {
          title: 'Chernobyl (2019, TV)',
          byline: 'Craig Mazin',
          score: 10,
        },
        {
          title: 'Fight Club (1999)',
          byline: 'David Fincher',
          score: 9,
        },
        {
          title: 'American Psycho (2000)',
          byline: 'Mary Harron',
          score: 8,
        },
        {
          title: 'The Interview (2014)',
          byline: 'Seth Rogen & Evan Goldberg',
          score: 7,
        },
        {
          title: 'Kingdom of Heaven (2005)',
          byline: 'Ridley Scott',
          score: 9,
        },
        {
          title: 'Borat (2006)',
          byline: 'Larry Charles',
          score: 9,
        },
        {
          title: 'The Godfather (1972)',
          byline: 'Francis Ford Coppola',
          score: 8,
        },
        {
          title: 'Zoolander (2001)',
          byline: 'Ben Stiller',
          score: 5,
        },
        {
          title: 'Jury Duty (2023, TV)',
          byline: 'Lee Eisenberg & Gene Stupnitsky',
          score: 7,
        },
        {
          title: 'Interstellar (2014)',
          byline: 'Christopher Nolan',
          score: 9,
        },
        {
          title: 'Breaking Bad (2008–2013, TV)',
          byline: 'Vince Gilligan',
          score: 5,
        },
        {
          title: 'The Circle (2017)',
          byline: 'James Ponsoldt',
          score: 6,
        },
        {
          title: 'Money Heist (2017–2021, TV)',
          byline: 'Álex Pina',
          score: 8,
        },
        {
          title: 'Arrival (2016)',
          byline: 'Denis Villeneuve',
          score: 6,
        },
        {
          title: '6 Underground (2019)',
          byline: 'Michael Bay',
          score: 3,
        },

        {
          title: 'Knives Out (2019)',
          byline: 'Rian Johnson',
          score: 6,
        },
        {
          title: "Don't Worry Darling (2022)",
          byline: 'Olivia Wilde',
          score: 6,
        },
        {
          title: 'Everything Everywhere All at Once (2022)',
          byline: 'Daniel Kwan & Daniel Scheinert',
          score: 7,
        },
        {
          title: 'The Imitation Game (2014)',
          byline: 'Morten Tyldum',
          score: 7,
        },
        {
          title: 'Bullet Train (2022)',
          byline: 'David Leitch',
          score: 7,
        },
        {
          title: 'Eraser: Reborn (2022)',
          byline: 'John Pogue',
          score: 4,
        },
        {
          title: 'Uncharted (2022)',
          byline: 'Ruben Fleischer',
          score: 3,
        },
        {
          title: 'Ambulance (2022)',
          byline: 'Michael Bay',
          score: 5,
        },
        {
          title: 'Dunkirk (2017)',
          byline: 'Christopher Nolan',
          score: 9,
        },
        {
          title: 'Operation Mincemeat (2021)',
          byline: 'John Madden',
          score: 7,
        },
        {
          title: 'Morbius (2022)',
          byline: 'Daniel Espinosa',
          score: 5,
        },
        {
          title: 'Old (2021)',
          byline: 'M. Night Shyamalan',
          score: 3,
        },
        {
          title: 'The Outfit (2022)',
          byline: 'Graham Moore',
          score: 6,
        },
        {
          title: 'Death on the Nile (2022)',
          byline: 'Kenneth Branagh',
          score: 6,
        },
        {
          title: 'Moonfall (2022)',
          byline: 'Roland Emmerich',
          score: 6,
        },
        {
          title: "The King's Man (2021)",
          byline: 'Matthew Vaughn',
          score: 5,
        },
        {
          title: 'The 355 (2022)',
          byline: 'Simon Kinberg',
          score: 5,
        },
        {
          title: 'Eternals (2021)',
          byline: 'Chloé Zhao',
          score: 4,
        },
        {
          title: 'House of Gucci (2021)',
          byline: 'Ridley Scott',
          score: 6,
        },
        {
          title: 'Fractured (2019)',
          byline: 'Brad Anderson',
          score: 8,
        },
        {
          title: 'Dune (2021)',
          byline: 'Denis Villeneuve',
          score: 9,
        },
        {
          title: 'Ghost Town (2008)',
          byline: 'David Koepp',
          score: 5,
        },
        {
          title: 'Free Guy (2021)',
          byline: 'Shawn Levy',
          score: 5,
        },
        {
          title: 'The Good Place (2016–2020, TV)',
          byline: 'Michael Schur',
          score: 6,
        },
        {
          title: 'Archive (2020)',
          byline: 'Gavin Rothery',
          score: 8,
        },
        {
          title: "Don't Look Up (2021)",
          byline: 'Adam McKay',
          score: 7,
        },
        {
          title: 'Glass Onion: A Knives Out Mystery (2022)',
          byline: 'Rian Johnson',
          score: 6,
        },
        {
          title: 'The Giver (2014)',
          byline: 'Phillip Noyce',
          score: 6,
        },
        {
          title: 'Troll (2022)',
          byline: 'Roar Uthaug',
          score: 5,
        },
        {
          title: 'TRON: Legacy (2010)',
          byline: 'Joseph Kosinski',
          score: 9,
        },
      ],
    },
  ],
},
};

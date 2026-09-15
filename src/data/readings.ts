/**
 * Add a book by copying { title: "Book title", author: 'Author' } into an items array.
 * Optionally add url: 'https://...' inside the same braces.
 * Keep books in currentReading while reading; move finished books into readings:
 * { year: 2026, items: [{ title: "Book title", author: 'Author' }] },
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
  { title: "Plato's Republic", author: 'Plato' },
];

export const readings: ReadingYear[] = [];

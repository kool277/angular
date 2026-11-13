export interface Book {
  readonly isbn: string;
  title: string;
  author: string;
  subtitle?: string;
}

export function fullTitle(book: Book): string {
  return book.subtitle ? `${book.title}: ${book.subtitle}` : book.title;
}

export function lastItem<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

export const shelf: Book[] = [
  {isbn: '978-0-00-000001-1', title: 'Learning Angular', author: 'A. Karimova'},
  {
    isbn: '978-0-00-000002-8',
    title: 'TypeScript',
    author: 'B. Usmonov',
    subtitle: 'The good parts',
  },
];

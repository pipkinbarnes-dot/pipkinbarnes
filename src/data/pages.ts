// One entry per page: its title and meta description for search results and link previews.
// Titles stay under ~60 characters and descriptions under ~155 where possible.
// The build fails if two pages share a title or a description.
import { book } from './book';

export const pages = {
  home: {
    path: '/',
    title: book.title ? `${book.title} by ${book.author}` : 'Draw animals and foods step by step with Pip the fox',
    description:
      'A coloring book by Pipkin Barnes that teaches kids to draw animals and foods step by step, with Pip the fox as their guide.',
  },
} satisfies Record<string, { path: string; title: string; description: string }>;

export type PageKey = keyof typeof pages;

for (const field of ['title', 'description'] as const) {
  const seen = new Map<string, string>();
  for (const [key, page] of Object.entries(pages)) {
    const other = seen.get(page[field]);
    if (other) throw new Error(`Pages "${other}" and "${key}" have the same ${field}. Each page needs its own.`);
    seen.set(page[field], key);
  }
}

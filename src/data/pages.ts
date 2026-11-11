// One entry per page: its title and meta description for search results and link previews.
// Titles stay under ~60 characters and descriptions under ~155 where possible.
// The build fails if two pages share a title or a description.
import { book } from './book';

export const pages = {
  home: {
    path: '/',
    // 60 characters: title first, then what people search for
    title: 'Draw It, Then Color It! | Step-by-Step Drawing Book for Kids',
    // 148 characters, written for parents, with the phrases people search
    description:
      "A step-by-step kids drawing book and coloring book: learn how to draw animals and cute foods with Pip the fox, then color them in. For ages 3 to 10.",
  },
  legal: {
    path: '/legal/',
    title: 'Legal notice | Draw It, Then Color It!',
    description: 'Who publishes pipsadventure.com, the official website of the kids drawing book Draw It, Then Color It! by Pipkin Barnes, and how to get in touch.',
  },
  privacy: {
    path: '/privacy/',
    title: 'Privacy policy | Draw It, Then Color It!',
    description: 'pipsadventure.com uses no cookies, no analytics and no tracking. Here is exactly what happens when you visit, and your rights.',
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

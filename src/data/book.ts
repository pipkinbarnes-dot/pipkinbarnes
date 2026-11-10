// Book facts. Copy each value from content/book.md, which is the source of truth.
// Leave a value as '' until it's known: the page shows a highlighted [placeholder]
// instead of inventing anything. Never add reviews, ratings or sales figures here
// unless they are in content/book.md.

export const book = {
  title: '',
  subtitle: '',
  author: 'Pipkin Barnes',
  ageRange: '', // e.g. "4 to 8"
  pageCount: '', // e.g. "64"
  format: '', // trim size, e.g. "8.5 × 11 in paperback"
  paper: '', // e.g. "white, single-sided pages"
  isbn: '', // ISBN-13 of the paperback, digits only or with hyphens
  publishedDate: '', // YYYY-MM-DD
  price: '', // number only, e.g. "9.99"
  currency: '', // ISO code, e.g. "GBP" or "USD"
  amazonUrl: '', // the one localized Amazon link used by every Buy button
  contactEmail: '',

  // What's inside: one entry per drawing, from "What's inside" in content/book.md.
  animals: [] as string[],
  foods: [] as string[],
};

export const socials: { channel: string; handle: string; url: string }[] = [
  { channel: 'Instagram', handle: '', url: '' },
  { channel: 'TikTok', handle: '', url: '' },
  { channel: 'YouTube', handle: '', url: '' },
  { channel: 'Pinterest', handle: '', url: '' },
  { channel: 'Facebook', handle: '', url: '' },
];

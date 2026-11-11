// Book facts. Copy each value from content/book.md, which is the source of truth.
// Leave a value as '' until it's known: the page shows a highlighted [placeholder]
// instead of inventing anything. Never add reviews, ratings or sales figures here
// unless they are in content/book.md.

export const book = {
  title: "Draw It, Then Color It! - Pip's Adventures",
  subtitle: '',
  author: 'Pipkin Barnes',
  ageRange: '3 to 10', // e.g. "4 to 8"
  pageCount: '106', // e.g. "64"
  format: '8.5 × 11 in paperback', // trim size, e.g. "8.5 × 11 in paperback"
  paper: 'white', // e.g. "white, single-sided pages"
  isbn: '', // ISBN-13 of the paperback, digits only or with hyphens
  publishedDate: '11/07/2026', // YYYY-MM-DD
  price: '9.99', // number only, e.g. "9.99"
  currency: 'USD', // ISO code, e.g. "GBP" or "USD"
  amazonUrl: 'https://www.amazon.com/dp/B0HR5RD25H', // the one localized Amazon link used by every Buy button
  contactEmail: 'pipkinbarnes@gmail.com',

  // What's inside: one entry per drawing, from "What's inside" in content/book.md.
  animals: [] as string[],
  foods: [] as string[],
};

export const socials: { channel: string; handle: string; url: string }[] = [
  { channel: 'Instagram', handle: '', url: 'https://www.instagram.com/pipkinbarnes/' },
  { channel: 'TikTok', handle: '', url: 'https://www.tiktok.com/@pipkinbarnes' },
  { channel: 'YouTube', handle: '', url: 'https://www.youtube.com/channel/UCBabI85V5r4wevnROCyKQOg' },
  { channel: 'Pinterest', handle: '', url: 'https://www.pinterest.com/pipkinbarnes/' },
  { channel: 'Facebook', handle: '', url: 'https://www.facebook.com/profile.php?id=61596615922927' },
];

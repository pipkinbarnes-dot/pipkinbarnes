# Pip book website

## What this is
The official site for "[BOOK TITLE]" by Pipkin Barnes: a coloring book that
teaches kids to draw animals and foods step by step, with Pip the fox as guide.

## Who it's for
Young kids aged [X-Y] and their parents, plus primary-school teachers. Most
arrive on a phone from Instagram, TikTok, YouTube or Pinterest, often with a
parent holding the phone and a child looking on.
- Kids read the pictures and Pip's short lines.
- Parents and teachers read the rest of the page.
- Buying and email sign-up are addressed to grown-ups only. Never collect data from children.

Design direction: docs/design-direction.md

## The site's three jobs, in order
1. Send visitors to buy the paperback on Amazon: https://www.amazon.com/dp/B0HR5RD25H
2. Be the hub for every Pip channel (content/socials.md)
3. Collect parent and teacher emails in exchange for a free printable page

## Pages
Home, /links, /free-printable, /teachers, /about, /videos, /legal, /privacy, 404

## Look and feel
- Hand-drawn picture-book warmth. It must not look like a template or an AI landing page.
- Colours come from Pip and the cover (assets/cover, assets/pip).
- Big, real images of the sample pages. Pip appears as a guide, not as decoration everywhere.
- Tone: warm and simple. Page text is written for parents, never babyish;
  Pip's lines (film captions, draw-along steps) speak to kids in one short line.

## Tech
- Astro, static output, no backend, plain CSS.
- Mobile first. Lighthouse 90+ on mobile for performance, accessibility and SEO.
- Optimised images (Astro <Image>), width and height set, descriptive alt text.
- No cookies and no third-party trackers or embeds. Videos are thumbnails that open YouTube.
- One exception: the hero film is a short, silent loop hosted on this site (public/video/),
  never a YouTube embed. It must have a Pause button and stay small (about 1-2 MB).
- Analytics: one cookieless tool only (e.g. Plausible).

## Content rules
- Use only facts from content/. Never invent reviews, ratings, awards or sales figures.
- Every Buy button: the same Amazon link, opens in a new tab, rel="noopener".
- Footer on every page: legal notice, privacy policy, contact email, social links.

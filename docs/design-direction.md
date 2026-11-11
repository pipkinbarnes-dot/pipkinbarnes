# Design direction: "On the drawing mat"

> **Update 2026-11-12: "bold and easy" kawaii.** At the user's request the site now
> uses thick 4px navy line art on every card, button and section divider, a hard
> 6px "sticker" shadow, rounded Fredoka headings with Nunito body text, an 8px
> spacing scale (tokens --s1…--s12 in src/styles/global.css), oversized tangerine
> pill Buy buttons (pinned in the top bar on desktop, bottom bar on phones), a
> swipeable carousel of the book's pages, and a video gallery with playful hover.
> This supersedes the "no pill buttons / no offset shadows" rules below.

> **Update 2026-11-11:** at the user's request the green mat was replaced by the
> book's banner (assets/backgrounds/banner.jpg) and its colors: sky blue `#68c8f2`
> for the hero and video sections, navy `#1e1a3c` for text, Pip's orange `#f47822`
> for Buy (navy text). The hero is now the banner, then the title and Buy; the
> hero film component (src/components/HeroFilm.astro) is kept for when real
> footage exists. The rest of this document still applies.

Chosen 2026-11-11, replacing the earlier honey "Open the book" direction, which
read as generic. Mockup: docs/mockups/drawing-mat-home.html.

The site sits on an illustrator's desk: a green self-healing cutting mat, white
paper, light-blue construction lines, pencil-dark text. Visitors watch a page
being drawn, then draw it themselves. It's for young kids and their parents at
the same time, usually on one phone.

## Two readers, one page
- Pip talks to kids: short, big lines with an orange "Pip" tag
  (film captions, the draw-along steps, the video section).
- Grown-ups get labelled notes underneath ("For grown-ups: …") and everything
  about buying, ages, size and paper.
- Anything that leaves the site (YouTube, Amazon) is said plainly to grown-ups.

## Palette (provisional: resample the orange from assets/pip)
| Name | Hex | Role |
|---|---|---|
| Mat | `#2f5d50` | Hero and the video section only, with its 40px grid |
| Mat line | `#4f7d6f` | The mat's grid (decorative) |
| Paper | `#ffffff` | Everything else |
| Pencil | `#2e2c29` | Text |
| Non-photo blue | `#a4dded` / `#7cc6dd` | Construction lines only, never text |
| Fox | `#c4511c` | Buy button and Pip's tag (white text 4.6:1) |

## Type
Archivo (variable, self-hosted). Headlines extra-condensed (68% width) and
heavy, like the numbers printed on a cutting mat. Everything else normal width.
One family.

## Motion: two moments, nothing else
1. Hero film: a silent looping time-lapse of a real page being drawn, hosted on
   this site (public/video/). Until it exists, a coded stand-in drawing plays.
   Always has a Pause button. Starts paused with reduced motion.
2. Scroll to draw: a pinned sheet draws itself stroke by stroke as you scroll
   (CSS scroll-driven animation, no script). Unsupported browsers and reduced
   motion get the finished drawing with all four steps listed.
Everything else is still: no fade-ins, no hover animation beyond underlines.

## Rules
- Pip appears in the hero (beside the film) and as the voice of the captions
  and steps. Nowhere else.
- No coloured bands beyond the two mat sections. No pill buttons, offset
  shadows, tilted cards, speech bubbles or emoji.
- Numbered steps only where the content is a real sequence (the draw-along).
- The step progress bar shows the tool for each step: blue pencil, pen, pen, crayon.

## Still needed from the book
- The hero film (see assets/README.md).
- One page's line art as SVG, to replace the stand-in apple in
  src/components/DrawingSteps.astro and src/data/drawalong.ts.
- Pip as a cut-out, the cover, sample pages, video thumbnails.

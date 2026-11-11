# Where the art goes

The site picks these files up by name. Drop them in and reload; nothing else to change.
Use the largest originals you have: the site resizes and compresses them itself.

| Folder | File name | What it is |
|---|---|---|
| `cover/` | `cover.jpg` (or .png/.webp) | Front cover, flat (not a photo of the book) |
| `pip/` | `pip.png` (or .webp) | Pip as a cut-out with a **transparent background**, standing or pointing |
| `pip/` | `pip-head.png` (optional) | Just Pip's head, transparent background: used for the favicon, which is too small for the full figure |
| `pages/` | `steps-<subject>-<n>.png` | One drawing broken into steps, e.g. `steps-fox-1.png` … `steps-fox-4.png` |
| `pages/` | `animal-<name>.png` | A finished animal page, e.g. `animal-hedgehog.png` |
| `pages/` | `food-<name>.png` | A finished food page, e.g. `food-strawberry.png` |
| `printable/` | `free-page.pdf` + `free-page.png` | The free printable and a preview image of it |
| `videos/` | `<id>.jpg` | Still thumbnail for each YouTube video listed in `src/data/videos.ts` (same `<id>`), 16:9 |
| `lesson/` | `lesson.svg` (or a large .png) | Optional: a crisp step-by-step lesson graphic; it replaces the animated apple in "Four steps. One apple." |

Optional looping video previews go in `public/videos/<id>.webp` (animated WebP, 16:9, under ~500 KB).
Visitors who've asked for less motion see the still thumbnail instead.

## The hero film (goes in `public/video/`, not here)

Videos aren't processed by the site, so they go straight into `public/video/`:

| File | What it is |
|---|---|
| `hero.mp4` | A top-down, silent time-lapse of a hand drawing one page from the book, about 12 seconds, 4:5 portrait (e.g. 1080 × 1350), H.264, ideally under 2 MB |
| `hero.webm` | Optional: the same film as WebM/AV1, usually smaller |
| `hero-poster.jpg` | A still of the finished drawing; shown before the film plays and when motion is reduced |
| `hero.vtt` | Optional: Pip's lines as captions, timed to the film (WebVTT) |

A phone on a stand in daylight is enough. Film one of the book's own pages.

Use lowercase and hyphens in names. The `<name>` part becomes the visible
caption and alt text ("hedgehog"), so spell it the way it should read.

Colours: once `cover/` and `pip/` have files, the palette in
`src/styles/global.css` should be resampled from them (see docs/design-direction.md).

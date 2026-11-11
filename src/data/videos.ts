// "Watch Pip draw": YouTube videos shown as local images that open YouTube in a new tab.
// No YouTube embeds or YouTube-hosted images (no third-party requests, no cookies).
//
// For each video:
//   id           short name, e.g. 'draw-a-cat' (used for its image files)
//   title        as on YouTube
//   url          the video's YouTube link
//   duration     as YouTube shows it, e.g. '4:12'
//   uploadDate   'YYYY-MM-DD' (needed for Google's video results)
//   description  one sentence
// Images:
//   assets/videos/<id>.jpg          still thumbnail (required), 16:9, e.g. 1280 × 720
//   public/videos/<id>.webp         optional looping animated preview, 16:9, under ~500 KB
//
// While this list is empty, the section shows one card linking to the YouTube channel.

export type Video = {
  id: string;
  title: string;
  url: string;
  duration: string;
  uploadDate: string;
  description: string;
};

export const videos: Video[] = [
  // { id: 'draw-a-cat', title: 'How to draw a cat with Pip', url: 'https://www.youtube.com/watch?v=…', duration: '4:12', uploadDate: '2026-11-01', description: 'Draw a cute cat in six easy steps, then color it in.' },
];

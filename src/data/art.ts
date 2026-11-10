// Finds the book's art in /assets by file name, so dropping files in is enough.
// Naming rules are in assets/README.md. Anything missing comes back undefined
// and the page shows a labelled empty frame instead.
import type { ImageMetadata } from 'astro';

type Mod = { default: ImageMetadata };

const covers = import.meta.glob<Mod>('/assets/cover/*.{png,jpg,jpeg,webp,avif}', { eager: true });
const pips = import.meta.glob<Mod>('/assets/pip/*.{png,webp,avif}', { eager: true });
const pages = import.meta.glob<Mod>('/assets/pages/*.{png,jpg,jpeg,webp,avif}', { eager: true });

const fileName = (path: string) => path.split('/').pop()!.replace(/\.[^.]+$/, '');
const pretty = (slug: string) => slug.replace(/[-_]+/g, ' ').trim();

function pick(mods: Record<string, Mod>, preferred: string) {
  const entries = Object.entries(mods).sort(([a], [b]) => a.localeCompare(b));
  const hit = entries.find(([p]) => fileName(p) === preferred) ?? entries[0];
  return hit?.[1].default;
}

export const cover = pick(covers, 'cover');
export const pip = pick(pips, 'pip');

export type Step = { n: number; image: ImageMetadata };

// steps-<subject>-<n>.png  →  one step-by-step sequence per subject
const sequences = new Map<string, Step[]>();
// animal-<name>.png / food-<name>.png  →  finished sample pages
export const samplePages: { kind: 'animal' | 'food'; name: string; image: ImageMetadata }[] = [];

for (const [path, mod] of Object.entries(pages)) {
  const name = fileName(path);
  const step = name.match(/^steps-(.+)-(\d+)$/);
  if (step) {
    const list = sequences.get(step[1]) ?? [];
    list.push({ n: Number(step[2]), image: mod.default });
    sequences.set(step[1], list);
    continue;
  }
  const sample = name.match(/^(animal|food)-(.+)$/);
  if (sample) samplePages.push({ kind: sample[1] as 'animal' | 'food', name: pretty(sample[2]), image: mod.default });
}

samplePages.sort((a, b) => a.name.localeCompare(b.name));

// The first subject alphabetically is the one shown in "How Pip teaches".
const firstSubject = [...sequences.keys()].sort()[0];
export const stepSubject = firstSubject ? pretty(firstSubject) : undefined;
export const steps = firstSubject ? sequences.get(firstSubject)!.sort((a, b) => a.n - b.n) : [];

// assets/videos/<id>.jpg → thumbnail for the video with that id in src/data/videos.ts
const thumbs = import.meta.glob<Mod>('/assets/videos/*.{png,jpg,jpeg,webp,avif}', { eager: true });
export const videoThumbs = new Map(Object.entries(thumbs).map(([p, m]) => [fileName(p), m.default]));

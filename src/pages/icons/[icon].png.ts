// Favicons made from Pip. Uses assets/pip/pip-head.png if there is one (a close crop
// reads far better at 32px), otherwise the full pip.png, trimmed to its edges.
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { findArt, warnOnce, MAT, FOX, png } from '../../lib/art-files';

const icons = {
  'favicon-32': { size: 32, background: false },
  'icon-192': { size: 192, background: true },
  'icon-512': { size: 512, background: true },
  'apple-touch-icon': { size: 180, background: true },
} as const;

export const getStaticPaths = (() => Object.keys(icons).map((icon) => ({ params: { icon } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const { size, background } = icons[params.icon as keyof typeof icons];
  const pipPath = findArt('pip', ['pip-head', 'pip']);

  if (!pipPath) {
    warnOnce('No Pip in assets/pip: favicons are a plain orange circle on the mat for now.');
    const r = size / 2;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      ${background ? `<rect width="${size}" height="${size}" fill="${MAT}"/>` : ''}
      <circle cx="${r}" cy="${r}" r="${background ? r * 0.55 : r - 1}" fill="${FOX}"/></svg>`;
    return png(await sharp(Buffer.from(svg)).png().toBuffer());
  }

  // Home-screen icons get a mat-green square with breathing room; the tab icon is Pip alone.
  const inner = background ? Math.round(size * 0.8) : size;
  const art = await sharp(pipPath)
    .trim()
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const canvas = sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: background ? MAT : { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });
  const offset = Math.round((size - inner) / 2);
  return png(await canvas.composite([{ input: art, left: offset, top: offset }]).png().toBuffer());
};

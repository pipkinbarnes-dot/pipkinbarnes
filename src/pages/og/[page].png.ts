// Open Graph cards, 1200 × 630: the cover on the green cutting mat, with Pip beside it,
// like the home page hero. One per page in src/data/pages.ts, at /og/<page>.png.
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { pages } from '../../data/pages';
import { findArt, warnOnce, MAT, MAT_LINE, png } from '../../lib/art-files';

const W = 1200;
const H = 630;

export const getStaticPaths = (() => Object.keys(pages).map((page) => ({ params: { page } }))) satisfies GetStaticPaths;

let cached: Buffer | undefined;

async function card(): Promise<Buffer> {
  if (cached) return cached;
  const layers: sharp.OverlayOptions[] = [];

  // The mat's printed grid and a ruler along the top edge, as on the hero
  const lines: string[] = [];
  for (let x = 0; x <= W; x += 40) lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`);
  for (let y = 0; y <= H; y += 40) lines.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`);
  const ticks: string[] = [];
  for (let x = 0; x <= W; x += 8) ticks.push(`<line x1="${x}" y1="${x % 40 ? 16 : 6}" x2="${x}" y2="22"/>`);
  const grid = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <g stroke="${MAT_LINE}" stroke-width="1">${lines.join('')}</g>
    <g stroke="#cfe3dc" stroke-width="1">${ticks.join('')}</g>
    <line x1="0" y1="22.5" x2="${W}" y2="22.5" stroke="#9cc2b5"/></svg>`;
  layers.push({ input: Buffer.from(grid), top: 0, left: 0 });

  const coverPath = findArt('cover', ['cover']);
  const pipPath = findArt('pip', ['pip']);
  if (!coverPath) warnOnce('No cover in assets/cover: Open Graph cards show only the background.');
  if (!pipPath) warnOnce('No Pip in assets/pip: Open Graph cards show no Pip.');

  // Cover lying on the mat, with a soft shadow
  let group: { buf: Buffer; w: number; h: number } | undefined;
  if (coverPath) {
    const coverH = 500;
    const cover = await sharp(coverPath).resize({ height: coverH }).png().toBuffer({ resolveWithObject: true });
    const cw = cover.info.width;
    const pad = 40;
    const shadow = await sharp({ create: { width: cw + pad * 2, height: coverH + pad * 2, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([{ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${cw}" height="${coverH}"><rect width="${cw}" height="${coverH}" fill="rgba(0,0,0,0.45)"/></svg>`), left: pad, top: pad + 18 }])
      .blur(16)
      .png()
      .toBuffer();
    const flat = await sharp(shadow).composite([{ input: cover.data, left: pad, top: pad }]).png().toBuffer();
    group = { buf: flat, w: cw + pad * 2, h: coverH + pad * 2 };
  }

  let pip: { buf: Buffer; w: number; h: number } | undefined;
  if (pipPath) {
    const p = await sharp(pipPath)
      .trim()
      .resize({ height: 420, width: 420, fit: 'inside' })
      .png()
      .toBuffer({ resolveWithObject: true });
    pip = { buf: p.data, w: p.info.width, h: p.info.height };
  }

  // Centre cover + Pip together; Pip overlaps the cover's right edge by a third of its width
  const overlap = pip ? Math.round(pip.w / 3) : 0;
  const total = (group?.w ?? 0) + (pip ? pip.w - overlap : 0);
  let x = Math.round((W - total) / 2);
  if (group) {
    layers.push({ input: group.buf, left: x, top: Math.round((H - group.h) / 2) - 8 });
    x += group.w - overlap;
  }
  if (pip) layers.push({ input: pip.buf, left: Math.min(x, W - pip.w - 24), top: H - pip.h - 40 });

  cached = await sharp({ create: { width: W, height: H, channels: 4, background: MAT } })
    .composite(layers)
    .flatten({ background: MAT })
    .png({ compressionLevel: 9 })
    .toBuffer();
  return cached;
}

export const GET: APIRoute = async () => png(await card());

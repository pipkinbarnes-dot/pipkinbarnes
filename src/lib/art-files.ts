// File-system access to the art in /assets, for images generated at build time
// (Open Graph cards and favicons). The page itself uses src/data/art.ts instead.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// PIP_ASSETS_DIR lets a test build point at sample art without touching /assets.
const root = process.env.PIP_ASSETS_DIR || path.join(process.cwd(), 'assets');
const exts = /\.(png|jpe?g|webp|avif)$/i;

/** First file in assets/<folder>, preferring the given base names in order. */
export function findArt(folder: string, preferred: string[]): string | undefined {
  const dir = path.join(root, folder);
  if (!fs.existsSync(dir)) return undefined;
  const files = fs.readdirSync(dir).filter((f) => exts.test(f)).sort();
  for (const name of preferred) {
    const hit = files.find((f) => f.replace(exts, '') === name);
    if (hit) return path.join(dir, hit);
  }
  return files[0] && path.join(dir, files[0]);
}

const warned = new Set<string>();
export function warnOnce(message: string) {
  if (warned.has(message)) return;
  warned.add(message);
  console.warn(`[pip] ${message}`);
}

export const MAT = '#68c8f2'; // the banner's sky blue
export const MAT_LINE = '#8fd6f5';
export const PENCIL = '#1e1a3c';
export const FOX = '#f47822';

export const png = (buf: Buffer) =>
  new Response(new Uint8Array(buf), { headers: { 'Content-Type': 'image/png' } });

/** A rectangle of solid color, as a sharp input. */
export const block = (width: number, height: number, color: string) =>
  sharp({ create: { width, height, channels: 4, background: color } }).png().toBuffer();

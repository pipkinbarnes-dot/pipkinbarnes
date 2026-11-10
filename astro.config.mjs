// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site's public address, e.g. 'https://example.com' (no trailing slash).
// Canonical URLs, Open Graph URLs, structured data and the sitemap all need it.
// Until it's set, those are left out of the build and a warning is printed.
// It can also be set per build with the SITE_URL environment variable.
const SITE = 'https://pipsadventure.com';

const site = process.env.SITE_URL || SITE || undefined;
if (!site) {
  console.warn('\n[pip] No site URL set (astro.config.mjs SITE): skipping canonical URLs, og:image, sitemap.\n');
}

export default defineConfig({
  output: 'static',
  site,
  integrations: [sitemap()],
});

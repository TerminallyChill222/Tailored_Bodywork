// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH / SITE_URL are set by the deploy environment:
//  - GitHub Pages (project site): SITE_URL=https://<user>.github.io  BASE_PATH=/<repo-name>
//  - Netlify or a custom domain: leave BASE_PATH unset; set SITE_URL to the real domain.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});

// @ts-check
import { defineConfig } from 'astro/config';

// Deploiement Vercel (depuis le depot GitHub prive). Le site est servi a la
// racine du domaine, donc base = '/'.
// `site` : mettre l'URL de production une fois connue (URL Vercel, puis a terme
// https://www.platinapartners.com). Sert uniquement aux URLs canoniques / OG.
export default defineConfig({
  site: 'https://platina-website.vercel.app',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});

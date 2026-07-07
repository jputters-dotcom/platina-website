// @ts-check
import { defineConfig } from 'astro/config';

// Deploiement GitHub Pages (site de projet) :
//   https://jputters-dotcom.github.io/platina-website/
// D'ou base = '/platina-website'.
// Quand le domaine platinapartners.com sera branche : repasser base a '/',
// mettre `site` au domaine final, et ajouter public/CNAME.
export default defineConfig({
  site: 'https://jputters-dotcom.github.io',
  base: '/platina-website',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});

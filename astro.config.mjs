// @ts-check
import { defineConfig } from 'astro/config';

// Deploiement GitHub Pages (projet) : https://jputters-dotcom.github.io/platina-website/
// Quand le domaine platinapartners.com sera branche, repasser `base` a '/'
// et ajuster `site`, puis ajouter un fichier public/CNAME.
export default defineConfig({
  site: 'https://jputters-dotcom.github.io',
  base: '/platina-website',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});

# Platina — Site vitrine

Refonte du site institutionnel de Platina Partners. Site statique construit avec
[Astro](https://astro.build), déployé automatiquement sur GitHub Pages.

Registre visuel : éditorial et premium. Navy dominant (`#20294E`), ivoire chaud,
titres en serif Fraunces associés au Roboto de la marque. Polices auto-hébergées
(aucun appel externe, conforme RGPD).

## Développement local

```bash
npm install       # une seule fois
npm run dev        # serveur local sur http://localhost:4321/platina-website
npm run build      # build de production dans dist/
npm run preview    # prévisualise le build
```

## Structure

```
src/
├── data/en.ts          Contenu du site (textes centralisés, faciles à éditer)
├── layouts/Base.astro  Head, polices, styles globaux, scripts UI
├── styles/global.css   Design system (couleurs, typo, motion, header)
├── components/         Sections : Header, Hero, Dna, Stats, Strategies,
│                       Sectors, Portfolio, Approach, Offices, Contact, Footer
└── pages/index.astro   Page d'accueil (assemble les sections)
public/                 favicon, CNAME éventuel
.github/workflows/      Déploiement GitHub Pages
```

## Éditer le contenu

Tout le texte vit dans [`src/data/en.ts`](src/data/en.ts). Modifier une phrase,
un chiffre ou un lien s'y fait sans toucher au code des composants.

Les éléments marqués `// A VALIDER` ou `// A COMPLETER` reprennent des
informations publiques (site actuel, annuaires) et doivent être confirmés par
Platina avant mise en ligne : chiffres clés, adresses Paris et Luxembourg,
citation portefeuille, e-mail de contact, mention réglementaire FCA.

## Ajouter la version française

1. Dupliquer `src/data/en.ts` en `src/data/fr.ts` et traduire les valeurs.
2. Créer une route `src/pages/fr/index.astro` important `fr.ts`.
3. Brancher le sélecteur EN/FR (champ `languages` du contenu) sur les deux routes.

## Déploiement (GitHub Pages)

Le code est hébergé sur un dépôt GitHub public et publié via GitHub Pages.
Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml`
(build Astro puis publication), sans action manuelle.

URL de production : `https://jputters-dotcom.github.io/platina-website/`

La source Pages est réglée sur « GitHub Actions » (Settings > Pages).

### Brancher le domaine platinapartners.com

1. Ajouter un fichier `public/CNAME` contenant `www.platinapartners.com`.
2. Dans `astro.config.mjs`, passer `base` à `'/'` et `site` au domaine final.
3. Configurer les DNS du domaine vers GitHub Pages, puis renseigner le domaine
   dans Settings > Pages.

### Alternative : Vercel

Le site peut aussi être déployé sur Vercel (import du dépôt) : repasser
`base` à `'/'` dans `astro.config.mjs`. Vercel détecte Astro automatiquement.

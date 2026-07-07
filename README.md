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

## Déploiement (Vercel)

Le code est hébergé sur un dépôt GitHub privé et déployé sur Vercel.

Mise en place (une fois) :

1. Sur [vercel.com](https://vercel.com) : « Add New… > Project ».
2. Importer le dépôt privé `platina-website` (autoriser Vercel à y accéder).
3. Vercel détecte Astro automatiquement (build `astro build`, sortie `dist/`).
   Aucune variable d'environnement n'est requise. Cliquer sur « Deploy ».
4. Chaque push sur `main` redéploie ensuite automatiquement.

Après le premier déploiement, reporter l'URL Vercel dans `astro.config.mjs`
(champ `site`) pour des URLs canoniques et Open Graph correctes.

### Brancher le domaine platinapartners.com

1. Dans le projet Vercel : « Settings > Domains », ajouter `www.platinapartners.com`.
2. Suivre les instructions DNS de Vercel (enregistrement CNAME).
3. Mettre `site` à `https://www.platinapartners.com` dans `astro.config.mjs`.

### Alternative : GitHub Pages

Le site peut aussi être publié sur GitHub Pages (dépôt public requis sur un
plan gratuit) : remettre `base: '/platina-website'` dans `astro.config.mjs` et
ajouter un workflow `withastro/action`. Voir l'historique Git pour le modèle.

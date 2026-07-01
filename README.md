# bxChange — Site vitrine

Site vitrine multi-pages et bilingue (FR / EN) pour bxChange, la plateforme qui
connecte vos logiciels et automatise vos processus métier.

Construit en **React 18 + TypeScript (strict) + Vite 5 + TailwindCSS 3 + React Router**,
en build statique prêt pour **Cloudflare Pages**.

---

## Pages & fonctionnalités

| Route (préfixée `/fr` ou `/en`) | Contenu |
| --- | --- |
| `/` | Accueil — hero, « comment ça marche », bénéfices, **catalogue de processus** (central), secteurs |
| `/produit` | Capacités détaillées + schéma de flux (logiciels existants → bxChange → outils modernes) |
| `/cas-usage` | Cas d'usage par secteur : PME, cabinets comptables, microfinance (+ banque/assurance) |
| `/catalogue` | Tous les processus, avec filtres par catégorie (RH, Finance, Commercial, Support, Opérations) |
| `/securite` | Garanties : chiffrement, isolation, hébergement, traçabilité, conformité |
| `/tarifs` | 3 paliers Starter / Business / Enterprise **sans montant** + offre pilote 12 mois |
| `/demo` | **Planification de démo** via widget Calendly intégré |
| `/contact` | Formulaire de contact (Formspree) |

- **Bilingue FR / EN** avec sélecteur de langue (FR par défaut), routes préfixées par la langue
- **Responsive mobile-first**, header collant, accessibilité (skip-link, focus visibles, hreflang)
- **SEO** : meta title/description par page et par langue, `sitemap.xml` (généré) + `robots.txt`
- **Catalogue piloté par données** : ajouter un processus = une entrée dans un tableau

---

## Démarrage

```bash
npm install
npm run dev        # serveur de dev  → http://localhost:5173
```

Le site redirige `/` vers `/fr`. Les langues sont préfixées dans l'URL :
`/fr/produit`, `/en/produit`, etc. Le français est la langue par défaut.

## Build de production

```bash
npm run build      # génère le sitemap puis le build statique dans dist/
npm run preview    # prévisualise le build localement
```

Le dossier de sortie est `dist/`.

## Configuration (variables d'environnement)

Copiez `.env.example` en `.env` et renseignez :

| Variable            | Rôle                                            | Où l'obtenir                     |
| ------------------- | ----------------------------------------------- | -------------------------------- |
| `VITE_FORMSPREE_ID` | Envoi du formulaire de contact                  | https://formspree.io (form ID)   |
| `VITE_CALENDLY_URL` | Widget de planification de démo (page `/demo`)  | https://calendly.com (votre lien)|

- Tant que `VITE_FORMSPREE_ID` est vide, le formulaire de contact affiche un
  message d'information et n'envoie rien.
- Tant que `VITE_CALENDLY_URL` est vide, la page `/demo` affiche un repli
  invitant à passer par le formulaire de contact.

> Ajustez aussi `SITE_URL`, `CONTACT_EMAIL` et `LINKEDIN_URL` dans
> [`src/lib/site.ts`](src/lib/site.ts) avant la mise en ligne.

## Déploiement Cloudflare Pages

1. Poussez le dépôt sur GitHub/GitLab.
2. Dans le dashboard Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
3. Paramètres de build :
   - **Framework preset** : `Vite` (ou `None`)
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
4. **Variables d'environnement** : ajoutez `VITE_FORMSPREE_ID` et `VITE_CALENDLY_URL`
   (et éventuellement `SITE_URL` pour le sitemap).
5. Déployez.

Le fichier [`public/_redirects`](public/_redirects) assure le fallback SPA
(toutes les routes servent `index.html`), indispensable pour le routing client.

## Structure

```
src/
  components/     Header, Footer, Layout, Logo, Icônes, UI, SEO, ProcessCard…
  data/
    processes.ts  Catalogue de processus (voir « Ajouter un processus » ci-dessous)
  hooks/          useLang (langue depuis l'URL), useContent (contenu typé)
  i18n/
    locales/      fr.ts, en.ts — tout le copywriting
  lib/            routes.ts (slugs / navigation), site.ts (config)
  pages/          Une page par route (Home, Product, UseCases, Catalog,
                  Security, Pricing, Demo, Contact, NotFound)
public/           favicon, robots.txt, _redirects, sitemap.xml (généré)
scripts/          generate-sitemap.mjs
```

## Ajouter un processus au catalogue

Le catalogue est piloté par les **données**, pas par la mise en page.
Ajoutez simplement une entrée dans le tableau `processes` de
[`src/data/processes.ts`](src/data/processes.ts) :

```ts
{
  id: 'mon-process',
  category: 'rh',            // rh | finance | commercial | support | operations
  icon: 'calendar',          // voir la liste ProcessIconName
  featured: true,            // (optionnel) mis en avant sur l'accueil
  name: { fr: 'Nom métier', en: 'Business name' },
  description: {
    fr: 'Une phrase claire pour un non-technique.',
    en: 'A clear one-liner for a non-technical reader.',
  },
},
```

L'accueil et la page `/catalogue` se mettent à jour automatiquement (compteurs,
filtres, grille).

## Traductions

Tout le texte visible vit dans [`src/i18n/locales/fr.ts`](src/i18n/locales/fr.ts)
et [`src/i18n/locales/en.ts`](src/i18n/locales/en.ts). Les deux fichiers partagent
la même forme (le type `Translation` est dérivé du français) : ajouter une clé
en FR impose de l'ajouter en EN, ce que TypeScript vérifie au build.

## Contraintes éditoriales (rappel)

Le copy respecte le brief : **jamais** « IA » / « intelligence artificielle »
(on parle de *lecture automatique de documents*), **aucun prix chiffré**, pas de
mise en avant de l'OCR sur pièces d'identité, pas de faux logos clients (la preuve
repose sur les 20+ processus). Merci de préserver ces règles lors des évolutions.
```

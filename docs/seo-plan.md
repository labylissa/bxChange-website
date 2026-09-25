# Plan SEO — bxFlow (bxgroup.io)

Suivi du sprint SEO du site. Ce document décrit l'état actuel, pas l'historique
des décisions écartées en cours de route — pour ça, voir les commits sur
`dev` et la branche `seo/catalogue-en`.

## Vue d'ensemble

- **Framework** : React 18 + TS + Vite, React Router 6, prérendu statique
  (`scripts/prerender.mjs`) via un rendu serveur (`src/entry-server.tsx`).
- **Langues** : `fr` (défaut, `x-default`) et `en`. `src/i18n/index.ts` est le
  point unique — `SUPPORTED_LANGS`, `DEFAULT_LANG`.
- **Slugs de page** : `src/lib/routes.ts` (`PAGE_SLUGS`), un mot différent par
  langue (`/fr/produit` / `/en/product`).
- **Slugs de processus** : `src/data/processes.ts` (`Process.slug.fr` /
  `.en`), dérivés du nom de fichier `.bxflow` (FR) et traduits à la main dans
  `scripts/catalogue_en.py` (EN). **Figés une fois publiés** — si un `.bxflow`
  est renommé côté produit, ajouter une redirection 301 plutôt que de changer
  le slug qu'il porte ici.
- **Source unique des adresses publiques** : `scripts/routes-partagees.mjs`
  (`cheminsPublics()`), consommée par le sitemap et le prérendu. Elle LIT les
  fichiers sources (jamais ne les recopie) et échoue bruyamment si leur forme
  a changé — voir les commentaires du fichier.

## Étape 1 — Corrections techniques

- **`/es` et `/es/*`** → 301 vers `/fr/` (`public/_redirects`). Le produit
  reste disponible en espagnol ; le site, non — décision distincte, voir
  `src/i18n/index.ts`.
- **Slugs EN traduits** (`/en/produit` → `/en/product`, etc.), avec 301 depuis
  chaque ancien slug (deux règles par slug dans `_redirects` : avec et sans
  slash final, la forme indexée par Google pouvant être l'une ou l'autre).
- **Slash final partout** : `localizedPath()` et `processPath()` (dans
  `src/lib/routes.ts`) le terminent toujours. Sans lui, l'adresse déclarée
  (canonical, hreflang, sitemap) n'est pas celle que Cloudflare sert (redirection
  308 vers la forme avec slash).
- **404 native** : `public/_redirects` n'a plus de repli catch-all. Toutes les
  pages publiques sont pré-rendues en fichiers statiques ; une adresse qui ne
  correspond à rien tombe sur `dist/404.html` (généré par `prerender.mjs`,
  `noindex`, en français), servi par Cloudflare Pages avec un vrai statut 404.
- **`/` en 301** (pas 302) : ce n'est pas un déplacement temporaire.

## Étape 2 — Catalogue et pages processus

- **Source de données** : `.bxflow` du dépôt produit (`bxChange`, dossier
  `backend/scripts/portfolio/`, variable d'env `BXFLOW_PORTFOLIO`). **Jamais lu
  au build Cloudflare** — `scripts/generer-catalogue.py` est lancé à la main
  en local, son résultat (`src/data/processes.ts`) est committé.
- **`scripts/catalogue_en.py`** : traductions anglaises, indexées par slug
  stable (pas par rang de portefeuille). Trois tables :
  - `ROLES` — les 5 rôles du portefeuille, une traduction chacun.
  - `TRANSITIONS_COMMUNES` — transitions qui reviennent dans plusieurs
    processus (« Valider » → Approve, etc.), une traduction pour tout le
    portefeuille.
  - `PROCESSUS[slug]` — nom, description, `steps` (toutes les étapes du
    `.bxflow`, terminales incluses), `transitions` (uniquement les écarts au
    glossaire commun, par `ref`).
- **`Process` (TS)** : les champs historiques (`steps`/`stepCount`/
  `roleCount`, aperçu tronqué à 3 étapes) sont inchangés — la carte du
  catalogue n'a rien eu à changer. Ajoutés : `slug`, `allSteps` (déroulé
  complet), `transitions`, `roles`.
- **Pages processus** : `/fr/catalogue/:slug/` et `/en/catalog/:slug/`
  (`src/pages/ProcessPage.tsx`). Contenu : H1 + chapô (description du
  processus SEULEMENT — la phrase générique de positionnement vit plus bas,
  au-dessus du déroulé, pour ne pas se dupliquer identique sur 71 pages),
  déroulé complet avec les **transitions réelles du `.bxflow`** (jamais
  normalisées en Valider/Rejeter), rôles impliqués, blocs génériques
  personnalisation/déploiement, 3-4 processus liés (même catégorie), CTA
  démo, lien retour catalogue.
- **Cartes catalogue et accueil** : vrais liens (`<Link>` autour de
  `ProcessCard`).
- **Sélecteur de langue** : résout la page (statique via `pageKeyFromSlug`,
  ou processus via `getProcessBySlug`) avant de reconstruire l'adresse dans
  la langue cible — un simple changement de préfixe laisserait un slug
  français sous une adresse anglaise.

## Étape 3 — Données structurées et sitemap

- **JSON-LD global, sur TOUTE page** (`Seo.tsx`, plus en dur dans
  `index.html`) : `SoftwareApplication` de l'entité bxFlow elle-même, avec un
  identifiant stable `"@id": "https://bxgroup.io/#bxflow"` (exporté comme
  `BXFLOW_ID`), `description` et `inLanguage` LOCALISÉS (`meta.org.description`
  dans `src/i18n/locales/{fr,en}.ts`) — ce bloc était figé en dur et
  identique sur toutes les pages avant cette correction. `index.html` garde
  une copie (en français, avec le même `@id`) dans le repère de tête, comme
  repli pour le serveur de dev et les deux cas où le prérendu ne s'applique
  pas.
- **JSON-LD par page processus** (`ProcessPage.tsx`, via `Seo` `jsonLd`), en
  plus du bloc global ci-dessus :
  - `BreadcrumbList` — Accueil > Catalogue/Catalog > nom du processus (le
    libellé EN de "Catalogue" a été corrigé en "Catalog" — `nav.catalog`,
    qui alimente aussi le menu et le pied de page).
  - `WebPage` — `name`, `description` (description COMPLÈTE du processus,
    sans troncature — la limite de 155 caractères ne s'applique qu'à la meta
    description, un champ distinct), `url` (canonique), `inLanguage`,
    `isPartOf` et `about` référençant tous deux `{"@id": BXFLOW_ID}`.
  - Volontairement absents : `FAQPage` (aucune FAQ réelle), `offers`,
    `aggregateRating`/`review` (le site n'affiche ni prix fixe ni note
    chiffrée — règle éditoriale).
- **`x-default` dans le sitemap** : `generate-sitemap.mjs` l'ajoute pour
  chaque groupe d'URLs (alignée sur `DEFAULT_LANG`, lu dans
  `src/i18n/index.ts` via `routes-partagees.mjs`), pour s'accorder avec le
  HTML de chaque page qui l'annonçait déjà.
- **Piège corrigé en cours de route** : `scripts/prerender.mjs` n'incluait
  pas `helmet.script` dans l'assemblage de la tête — un JSON-LD ajouté via
  `<Seo jsonLd={...}>` compilait, s'affichait en dev, et disparaissait
  silencieusement du HTML pré-rendu. Corrigé ; voir le commentaire dans
  `prerender.mjs`.

## Vérifications

```bash
# Build complet (sitemap, prérendu, garde-fous langues/captures)
npm run build

# Sitemap seul
npm run sitemap

# Chaque JSON-LD est un JSON valide dans le HTML pré-rendu (à relancer après
# tout changement touchant <Seo jsonLd>) :
python3 - <<'PY'
import glob, json, re
for f in glob.glob('dist/**/index.html', recursive=True):
    html = open(f, encoding='utf-8').read()
    for b in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.DOTALL):
        json.loads(b)  # lève une exception si invalide
print("OK")
PY
```

Sanity checks manuels utiles :
- `curl -I https://bxgroup.io/fr/produit` → 308 vers `/fr/produit/`.
- `curl -I https://bxgroup.io/en/produit` → 301 vers `/en/product/`.
- `curl -I https://bxgroup.io/es` → 301 vers `/fr/`.
- `curl -I https://bxgroup.io/une-adresse-inventee` → 404 (pas 200).
- Chaque page processus : une seule `<link rel="canonical">`, 3 hreflang
  (`fr`, `en`, `x-default`).

## Pour ajouter un processus

1. L'ajouter au portefeuille produit (`.bxflow`), avec son fichier nommé
   `NN-slug-stable.bxflow`.
2. Traduire dans `scripts/catalogue_en.py` (`PROCESSUS[slug]`) : nom,
   description, toutes les étapes par `step_key`, les transitions absentes
   de `TRANSITIONS_COMMUNES` par `ref`, et `slug_en`.
3. `python3 scripts/generer-catalogue.py` (avec `BXFLOW_PORTFOLIO` pointé
   sur le dépôt produit).
4. Committer `src/data/processes.ts` régénéré.
5. `npm run build` pour vérifier (sitemap, prérendu, garde-fous).

Le slug FR et le slug EN sont figés dès la publication : les changer plus
tard casse les liens externes et l'historique d'indexation — ajouter une
redirection 301 plutôt que de les modifier.

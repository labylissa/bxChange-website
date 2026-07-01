# bxChange — Brief site vitrine (pour Claude Code)

## 0. Hypothèses de départ (à valider/ajuster avant de lancer Claude Code)

- **Format** : site multi-pages (pas une landing one-page) — le produit a assez de profondeur (connecteurs, workflow BPM, ingestion, sécurité) pour justifier une navigation par page.
- **Stack** : React 18 + TypeScript + Vite + TailwindCSS — cohérent avec le frontend produit existant (`bxChange` backend/frontend), réutilisable, buildable en statique pour Cloudflare Pages.
- **Objectif** : double — crédibilité pour appuyer la prospection LinkedIn (Boly envoie un lien) **et** génération de leads (formulaire démo/contact).
- **Déploiement cible** : Cloudflare Pages (build statique `npm run build` → dossier `dist/`).

Si l'un de ces points ne convient pas, ajuste la section correspondante avant de donner ce fichier à Claude Code.

---

## 1. Contexte produit

bxChange est une plateforme SaaS B2B multi-tenant de **connecteur legacy** : elle relie les vieux systèmes SOAP/WSDL/XML aux API modernes REST/JSON, orchestre des pipelines d'intégration, et pilote un moteur workflow BPM pour automatiser des processus métier (demandes, validations, étapes, rôles).

Elle inclut aussi une brique d'**ingestion automatique** (API, email) avec **lecture automatique de documents** pour extraire les champs d'un dossier depuis un email ou une pièce jointe, sans intervention manuelle.

**Marchés cibles** : PME, cabinets comptables, institutions de microfinance en Afrique francophone (Maroc, Sénégal, Côte d'Ivoire) — en priorité, avant les grandes entreprises et administrations.

---

## 2. Contraintes éditoriales — À RESPECTER STRICTEMENT

Ces règles s'appliquent à tout le copywriting du site, sans exception :

1. **Ne jamais utiliser "IA" ou "intelligence artificielle"** dans aucun texte visible. Utiliser à la place : *"lecture automatique de documents"*, *"traitement automatique"*, *"moteur d'automatisation"*. Les clients cibles ont des réticences vis-à-vis du terme IA.
2. **Ne pas mettre en avant l'OCR sur les pièces d'identité** (CNI, passeport) — cette fonctionnalité est peu fiable et ne doit pas apparaître comme argument de vente principal. Si mentionnée, la noyer dans une liste de capacités, jamais en headline.
3. **Aucun prix fixe affiché.** Les tarifs sont négociés par client. La page Tarifs doit présenter les paliers (Starter / Business / Enterprise) en termes de **périmètre et valeur**, pas de montants. L'offre pilote se positionne comme une **licence annuelle** ("Démarrez avec une licence pilote sur 12 mois") sans chiffre. CTA type "Demander un devis" / "Discutons de votre projet".
4. **Pas de références clients fictives.** La preuve de maturité produit repose sur la **bibliothèque de 20+ processus prêts à l'emploi**, pas sur des logos clients inventés. Si une section "ils nous font confiance" est envisagée, la remplacer par une section "Processus disponibles dès aujourd'hui" ou similaire.
5. Ton : direct, orienté bénéfice métier concret (temps gagné, erreurs évitées, conformité), jamais jargon technique dans le copy grand public — le jargon (SOAP/WSDL, API REST, BPM) peut apparaître en page Produit/technique mais pas en page d'accueil.
6. **Clarté absolue pour un visiteur non-technique.** N'importe qui (RH, dirigeant PME, comptable) doit comprendre en moins de 10 secondes sur la page d'accueil ce que fait bxChange et à quoi ça sert, sans connaître les termes "API", "SOAP", "workflow" ou "connecteur". Reformuler systématiquement en langage métier avant d'utiliser un terme technique : ex. "vos anciens logiciels ne se parlent pas entre eux → bxChange les connecte" plutôt que "intégration legacy SOAP/WSDL vers REST/JSON". Chaque section doit passer le test : *"une personne qui ne connaît rien à l'informatique comprend-elle ce que ça change pour elle ?"*. Le jargon technique reste réservé à la page Produit, et même là, toujours accompagné d'une reformulation simple juste à côté.

---

## 3. Design system

**Palette de marque :**
- Navy profond : `#0A1628` (fond, texte principal sur fond clair, header)
- Teal-cyan (accent primaire) : `#2DD4E8`
- Teal secondaire : `#1EC9A3`
- Or (accent premium, à utiliser avec parcimonie) : `#C9A45C`
- Blanc / gris clairs pour les fonds de section, à définir par Claude Code selon une charte cohérente (proposer une échelle de gris neutre)

**Logo :** kit "bx" disponible — wordmark avec icône sync/refresh teal intégrée dans le "b". Versions : lockup complet (blanc/navy) + icône carrée seule. *(Fichiers à fournir séparément à Claude Code — voir section 7.)*

**Typographie :** proposer une paire moderne SaaS (ex. Inter ou Manrope pour le texte, une display sans-serif pour les titres) — laisser Claude Code proposer, cohérence avec le ton "tech mais accessible".

**Style visuel général :** SaaS B2B moderne, épuré, pas de stock photos génériques de bureaux — privilégier illustrations/schémas simples (flux de données, connecteurs, workflow) dans la palette de marque plutôt que des photos.

---

## 4. Structure du site

### Page 1 — Accueil (`/`)
- Hero : problème business (systèmes legacy qui bloquent la croissance) → promesse bxChange → CTA "Demander une démo"
- Section "Comment ça marche" (3-4 étapes simples, sans jargon)
- Section bénéfices clés (gain de temps, réduction d'erreurs, conformité, autonomie sans dépendre de l'IT)
- **Section "Catalogue de processus" — élément central de la page d'accueil, pas une section secondaire.** C'est la preuve de maturité la plus forte du produit (20+ processus prêts à l'emploi) et elle doit être visible et concrète, pas juste un chiffre. Prévoir :
  - Un affichage type grille/cartes montrant plusieurs processus par leur nom métier compréhensible (ex. "Demande de congés", "Note de frais", "Onboarding collaborateur", "Ouverture de dossier client") plutôt qu'une liste abstraite
  - Une formulation qui montre que le catalogue est déjà riche ET vivant/évolutif (ex. "Plus de 20 processus prêts à démarrer dès aujourd'hui, la bibliothèque s'enrichit en continu") — **le catalogue va être enrichi après le lancement du site**, donc prévoir une structure de données simple (tableau/array de processus avec nom + description courte + icône/catégorie) facile à étendre sans refonte, plutôt que du contenu codé en dur dispersé dans le JSX
  - CTA propre à cette section : "Voir tous les processus" ou "Votre process n'y est pas ? Discutons-en"
- Section secteurs (PME, cabinets comptables, microfinance) avec un cas d'usage court par secteur
- CTA final + formulaire de contact court

### Page 2 — Produit (`/produit`)
- Détail des capacités : connecteurs legacy → moderne, pipelines, moteur workflow BPM, ingestion (API/email), lecture automatique de documents
- Peut être plus technique que l'accueil, mais toujours respecter la règle "jamais IA"
- Schéma/diagramme du flux (legacy → bxChange → moderne)

### Page 3 — Cas d'usage / Secteurs (`/cas-usage`)
- Cartes par secteur : PME, cabinets comptables, microfinance (+ éventuellement banque/assurance en aspirationnel, sans surpromettre)
- Pour chaque secteur : problème → solution → bénéfice concret

### Page 3bis — Catalogue de processus (`/catalogue`)
- Page dédiée listant tous les processus disponibles, au-delà de l'aperçu affiché sur l'accueil
- Prévoir filtres/catégories simples (RH, Finance, Commercial, Support...) pour rester lisible quand le catalogue grandira
- Chaque processus : nom métier clair + description en une phrase compréhensible par un non-technique + éventuellement un badge secteur
- Lien depuis la section catalogue de l'accueil ("Voir tous les processus")
- Cette page est celle qui sera le plus régulièrement mise à jour — la structurer en données réutilisables (voir section 5, stack technique) pour que l'ajout d'un processus soit une simple entrée de données, pas une modification de mise en page

### Page 4 — Sécurité (`/securite`)
- Reprendre les garanties (pas les métriques d'audit brutes) du dossier sécurité existant : chiffrement, isolation multi-tenant, hébergement, conformité
- Ton rassurant, orienté DSI/RSSI sans être un document confidentiel complet — juste les points de confiance clés + CTA "Demander le dossier sécurité complet"

### Page 5 — Tarifs (`/tarifs`)
- 3 paliers Starter / Business / Enterprise en périmètre fonctionnel, **aucun montant**
- Offre pilote mise en avant : licence annuelle, démarrage rapide
- CTA "Demander un devis personnalisé"

### Page 6 — Contact / Demande de démo (`/contact`)
- Formulaire (nom, entreprise, email, téléphone, message)
- Pas de traitement backend réel attendu dans un premier temps — Claude Code peut soit connecter à un service simple (Formspree, ou endpoint à définir plus tard), soit prévoir un mailto/placeholder à activer ensuite. **Demander confirmation à Claude Code sur ce point plutôt que de deviner.**

### Composants transverses
- Header avec navigation + CTA "Demander une démo" toujours visible
- Footer : liens pages, mentions légales (placeholder), contact, réseaux (LinkedIn)
- Responsive mobile-first obligatoire (le trafic LinkedIn Afrique francophone est majoritairement mobile)

---

## 5. Stack technique détaillée

- React 18 + TypeScript (strict)
- Vite 5
- TailwindCSS 3 (utiliser les couleurs de marque comme variables Tailwind custom dans `tailwind.config`)
- React Router pour la navigation multi-pages
- Pas de state management complexe nécessaire (pas de Zustand/RQ ici, contrairement au produit) — sauf si le formulaire de contact nécessite un appel API
- Build de production statique, output dans `dist/`, compatible Cloudflare Pages (pas de SSR)
- Prévoir un `README.md` avec instructions de build + déploiement Cloudflare Pages

---

## 6. SEO & performance

- Meta title/description par page, en français, orientés mots-clés métier (ex. "intégration legacy Maroc", "automatisation processus PME Sénégal") sans sur-optimisation
- Images optimisées (SVG pour schémas/logo, formats compressés pour toute photo)
- Lighthouse : viser 90+ sur performance et accessibilité
- `sitemap.xml` + `robots.txt` basiques

---

## 7. Assets à fournir à Claude Code séparément

Ces éléments existent déjà et doivent être transmis à Claude Code au moment de l'implémentation (pas décrits ici en détail, juste référencés) :
- Kit logo "bx" (SVG, versions blanc/navy + icône carrée)
- Brochure PDF premium (10 pages) — pour en extraire la structure de messages et le copy déjà validé
- Dossier sécurité (6 pages) — pour la page Sécurité
- One-pager PME + cas d'usage — pour la page Cas d'usage

---

## 8. Instruction de démarrage suggérée pour Claude Code

> Construis un site vitrine multi-pages pour bxChange en React 18 + TypeScript + Vite + TailwindCSS, en suivant strictement ce brief (structure, design system, contraintes éditoriales). Commence par la structure de navigation et la page d'accueil, puis itère page par page. Respecte impérativement les contraintes éditoriales de la section 2 (aucune mention IA, pas de prix chiffrés, pas de mise en avant OCR CNI/passeport). Prépare le projet pour un déploiement Cloudflare Pages (build statique).

---

*Brief préparé pour bxChange — Boly, [date]. À ajuster selon retours avant transmission à Claude Code.*

// Écrit un vrai fichier HTML par adresse du site, après la construction.
//
// Avant : Cloudflare servait le même `index.html` pour les 22 adresses, et le
// titre, la description et le contenu de chaque page n'existaient qu'après
// exécution du JavaScript. Un robot qui ne rend pas le JavaScript ne voyait
// qu'une page ; Google, qui le rend, le fait dans une file d'attente plus
// lente — donc des semaines d'attente pour un domaine neuf, et aucune page
// intérieure indexée pendant ce temps.
//
// Après : `/fr/produit` est un fichier, avec son titre et son texte. Rien ne
// change pour le visiteur, sinon que la page s'affiche avant que le
// JavaScript ne soit arrivé.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { cheminsPublics } from './routes-partagees.mjs';

const RACINE = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = resolve(RACINE, 'dist');

const DEBUT = '<!--tete-par-page-->';
const FIN = '<!--/tete-par-page-->';

// Un rendu vide ou tronqué produirait des fichiers d'apparence normale que
// personne ne relit — on ne s'en apercevrait qu'en constatant, des mois plus
// tard, que rien n'est indexé. D'où un plancher grossier mais franc.
const TAILLE_MINIMALE = 2000;

const gabarit = readFileSync(resolve(DIST, 'index.html'), 'utf8');

const debut = gabarit.indexOf(DEBUT);
const fin = gabarit.indexOf(FIN);
if (debut < 0 || fin < 0) {
  throw new Error(
    "Repères de tête absents d'index.html — sans eux, les 22 pages porteraient " +
      "toutes le titre de l'accueil, ce qui est pire que l'absence de prérendu.",
  );
}
if (!gabarit.includes('<div id="root"></div>')) {
  throw new Error("Point d'insertion <div id=\"root\"></div> introuvable dans index.html.");
}

const avant = gabarit.slice(0, debut);
const apres = gabarit.slice(fin + FIN.length);

const { rendre } = await import(
  pathToFileURL(resolve(RACINE, 'dist-ssr', 'entry-server.js')).href
);

/** Assemble le gabarit et le rendu d'une adresse en une page HTML complète. */
function assembler(chemin, html, helmet) {
  if (html.length < TAILLE_MINIMALE) {
    throw new Error(`${chemin} : rendu de ${html.length} caractères — la page est vide.`);
  }

  // `script` porte le JSON-LD propre à la page (BreadcrumbList,
  // SoftwareApplication...) — omis ici, il compilerait, s'afficherait
  // normalement, et disparaîtrait silencieusement du HTML servi : seul un
  // robot qui lit les données structurées s'en apercevrait.
  const tete = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((part) => part.toString())
    .filter(Boolean)
    .join('\n    ');

  let page = `${avant}${tete}${apres}`.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );

  // `lang` est un signal de langue à part entière pour un moteur de recherche,
  // et il vaut « fr » en dur dans le gabarit.
  const attributs = helmet.htmlAttributes.toString();
  if (attributs) page = page.replace(/<html[^>]*>/, `<html ${attributs}>`);

  return page;
}

for (const { chemin } of cheminsPublics()) {
  const { html, helmet } = await rendre(chemin);
  const page = assembler(chemin, html, helmet);

  const dossier = join(DIST, chemin);
  mkdirSync(dossier, { recursive: true });
  writeFileSync(join(dossier, 'index.html'), page, 'utf8');
  console.log(`  ${chemin.padEnd(26)} ${(page.length / 1024).toFixed(0)} ko`);
}

console.log(`prérendu : ${cheminsPublics().length} pages écrites dans dist/`);

// Page 404 : une seule, en français (langue par défaut, x-default), écrite à
// la racine de `dist/`. Cloudflare Pages la sert nativement — avec un vrai
// statut 404 — pour toute adresse qui ne correspond à aucun fichier ET à
// aucune règle de `_redirects`. Le chemin demandé n'a pas besoin d'exister :
// il ne sert qu'à faire tomber le routeur sur sa route `*`, donc sur
// `NotFoundPage`, qui porte elle-même son `noindex`.
const { html: html404, helmet: helmet404 } = await rendre('/fr/page-inexistante-pour-le-404');
const page404 = assembler('404', html404, helmet404);
writeFileSync(join(DIST, '404.html'), page404, 'utf8');
console.log(`  404                        ${(page404.length / 1024).toFixed(0)} ko`);

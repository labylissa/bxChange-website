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

for (const { chemin } of cheminsPublics()) {
  const { html, helmet } = await rendre(chemin);

  if (html.length < TAILLE_MINIMALE) {
    throw new Error(`${chemin} : rendu de ${html.length} caractères — la page est vide.`);
  }

  const tete = [helmet.title, helmet.meta, helmet.link]
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

  const dossier = join(DIST, chemin);
  mkdirSync(dossier, { recursive: true });
  writeFileSync(join(dossier, 'index.html'), page, 'utf8');
  console.log(`  ${chemin.padEnd(26)} ${(page.length / 1024).toFixed(0)} ko`);
}

console.log(`prérendu : ${cheminsPublics().length} pages écrites dans dist/`);

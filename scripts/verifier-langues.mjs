// Garde-fou : aucune seconde liste de langues hors du point unique.
//
// Le sélecteur de langue retirait le préfixe de l'adresse avec `/^\/(fr|en)/`.
// Ajouter l'espagnol n'y a rien fait échouer — le typage ne voit pas dans une
// expression régulière, ni dans une chaîne — et passer de l'espagnol à l'anglais
// menait à `/en/es`, une adresse qui ne correspond à aucune page. Le défaut ne
// se voit pas non plus en relecture : la ligne est correcte tant qu'il n'y a que
// deux langues.
//
// Le contrôle est un script de construction et non un test : ce dépôt n'a pas de
// lanceur de tests, et un garde-fou qui demanderait d'en installer un ne serait
// pas posé. Pendant du `listeLangues.test.ts` de l'application.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, resolve } from 'node:path';
import { LANGS } from './routes-partagees.mjs';

const RACINE = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Les fichiers qui ONT le droit de nommer les langues. Le point unique, et ce
 * script lui-même — qui en porte forcément dans son motif.
 */
const DISPENSES = new Map([
  ['src/i18n/index.ts', 'le point unique'],
  ['scripts/verifier-langues.mjs', 'ce contrôle, qui porte les codes dans son motif'],
  // `Record<Lang, …>` : une langue manquante fait échouer `tsc`, le compilateur
  // tient donc déjà ce que ce contrôle vérifierait.
  ['src/hooks/useContent.ts', 'table typée par `Lang`, vérifiée à la compilation'],
]);

/**
 * Deux codes de langue ou plus séparés par `|` ou `,` : la forme d'une liste.
 *
 * Les limites de mot ne sont pas une précaution de style : sans elles, « internes »
 * contient `es` et « Internal » contient `en`, et le contrôle signalait huit
 * lignes de données parfaitement correctes — de quoi le faire désactiver le jour
 * même (c'est ainsi qu'un garde-fou de ce dépôt est mort à 105 signalements).
 */
// Les barres obliques inverses sont DOUBLÉES : dans un littéral gabarit, `\b`
// est un caractère de retour arrière et `\s` un simple « s ». Le motif compile
// sans erreur, ne matche jamais, et la relecture n'y voit que du feu — vérifier
// `MOTIF.source`, pas la ligne écrite.
const CODES = LANGS.join('|');
const MOTIF = new RegExp(`(['"]?\\b(?:${CODES})\\b['"]?\\s*[|,]\\s*)+['"]?\\b(?:${CODES})\\b['"]?`, 'g');

/**
 * Une suite de CLÉS d'objet (`fr: …, en: …, es: …`) n'est pas une seconde liste :
 * c'est soit une table typée par `Lang`, que le compilateur tient déjà, soit une
 * donnée engendrée. Les signaler ferait crier le contrôle à chaque table ajoutée,
 * et un contrôle qui signale des lignes correctes finit désactivé.
 *
 * LIMITE CONNUE : la forme abrégée `{ fr, en, es }` n'a pas de deux-points et
 * reste donc signalée ; c'est voulu tant qu'elle n'est pas typée, et une table
 * typée qui l'emploie se dispense nommément.
 */
function cleDObjet(fragment) {
  const codes = fragment.match(new RegExp(`\\b(${CODES})\\b\\s*:?`, 'g')) ?? [];
  return codes.length > 0 && codes.every((c) => c.trimEnd().endsWith(':'));
}

function fichiers(repertoire) {
  const trouves = [];
  for (const entree of readdirSync(repertoire)) {
    if (entree === 'node_modules' || entree === 'dist' || entree.startsWith('.')) continue;
    const chemin = join(repertoire, entree);
    if (statSync(chemin).isDirectory()) trouves.push(...fichiers(chemin));
    else if (/\.(ts|tsx|mjs|js)$/.test(entree)) trouves.push(chemin);
  }
  return trouves;
}

const examines = [...fichiers(resolve(RACINE, 'src')), ...fichiers(resolve(RACINE, 'scripts'))];

// Garde-fou du garde-fou : une lecture qui ne trouve plus aucun fichier passerait
// au vert sans rien contrôler, ce qui est exactement ce qu'on veut éviter.
if (examines.length < 20) {
  throw new Error(`${examines.length} fichier(s) lu(s) — le parcours des sources ne fonctionne plus.`);
}

const fautifs = [];
for (const chemin of examines) {
  const nom = relative(RACINE, chemin).replaceAll('\\', '/');
  if (DISPENSES.has(nom)) continue;
  const source = readFileSync(chemin, 'utf8');
  for (const [ligne, texte] of source.split('\n').entries()) {
    for (const trouve of texte.matchAll(MOTIF)) {
      // Au moins deux codes DISTINCTS : `'fr', 'fr'` n'est pas une liste, et
      // `es|es` non plus. Sans cette condition, le contrôle crierait sur des
      // lignes correctes, ce qui est la façon connue de le faire désactiver.
      const distincts = new Set(trouve[0].match(new RegExp(`\\b(${CODES})\\b`, 'g')));
      if (distincts.size >= 2 && !cleDObjet(trouve[0])) {
        fautifs.push(`${nom}:${ligne + 1}  ${texte.trim().slice(0, 100)}`);
      }
    }
  }
}

if (fautifs.length) {
  console.error('✗ Liste de langues écrite en dur hors de src/i18n/index.ts :');
  for (const f of fautifs) console.error(`    ${f}`);
  console.error('');
  console.error('Lire SUPPORTED_LANGS plutôt que la recopier : une langue ajoutée');
  console.error("ne fait échouer aucune de ces lignes, elle les rend seulement fausses.");
  process.exit(1);
}

console.log(`✓ Langues : ${examines.length} fichiers lus, aucune seconde liste (${LANGS.join(', ')}).`);

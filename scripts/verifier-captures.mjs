// Garde-fou : toute capture déclarée existe réellement sur le disque.
//
// `data/captures.ts` peut désormais déclarer une version traduite par langue.
// Une traduction annoncée et absente ne fait échouer aucune construction : elle
// produit une image cassée sur la page d'un client, et personne ne la voit
// avant lui — la page française, celle qu'on relit, reste parfaite.
//
// Le contrôle dit aussi, à chaque construction, COMBIEN de captures restent en
// français dans chaque langue. Le repli est une décision (voir l'en-tête de
// `data/captures.ts`) ; encore faut-il qu'on sache où elle s'applique, sinon
// elle cesse d'être une décision pour devenir un état de fait.
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { LANGS } from './routes-partagees.mjs';

const RACINE = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = resolve(RACINE, 'public');

const source = readFileSync(resolve(RACINE, 'src', 'data', 'captures.ts'), 'utf8');

// On lit le fichier source plutôt que de l'importer : ce script tourne avant la
// construction, donc avant qu'un TypeScript compilé existe.
const bloc = source.match(/export const CAPTURES\s*=\s*\{([\s\S]*?)\}\s*as const satisfies/);
if (!bloc) {
  throw new Error(
    'CAPTURES introuvable dans src/data/captures.ts — la table a changé de ' +
      'forme. Corriger cette lecture plutôt que de retirer le contrôle.',
  );
}

/** Chaque `src: '/captures/…'` du bloc, avec la langue sous laquelle il est déclaré. */
const declarees = [];
let langueCourante = 'fr';
for (const ligne of bloc[1].split('\n')) {
  // `traductions: { es: { src: … } }` peut tenir sur une ou plusieurs lignes ;
  // on suit la dernière langue ouverte, et toute ligne de premier niveau
  // (une entrée de capture) ramène au français.
  const ouverture = ligne.match(/\b(es|en|it)\s*:\s*\{/);
  if (ouverture) langueCourante = ouverture[1];
  else if (/^\s{2}[\w'-]+\s*:\s*\{/.test(ligne)) langueCourante = 'fr';

  for (const trouve of ligne.matchAll(/src:\s*'([^']+)'/g)) {
    declarees.push({ chemin: trouve[1], langue: langueCourante });
  }
}

// Garde-fou du garde-fou : une lecture qui ne trouve plus rien passerait au
// vert sur zéro capture, ce qui est exactement ce qu'on veut éviter.
if (declarees.length < 5) {
  throw new Error(
    `CAPTURES lu, mais ${declarees.length} capture(s) extraite(s) — l'extraction ne fonctionne plus.`,
  );
}

const manquantes = declarees.filter(({ chemin }) => !existsSync(resolve(PUBLIC, chemin.replace(/^\//, ''))));
if (manquantes.length) {
  console.error('✗ Captures déclarées mais absentes de public/ :');
  for (const { chemin, langue } of manquantes) console.error(`    ${chemin}   (langue « ${langue} »)`);
  console.error('');
  console.error("Une image cassée ne fait échouer aucune page : elle s'affiche chez le client.");
  process.exit(1);
}

const parLangue = new Map();
for (const { langue } of declarees) parLangue.set(langue, (parLangue.get(langue) ?? 0) + 1);
const base = parLangue.get('fr') ?? 0;

const repli = LANGS.filter((l) => l !== 'fr')
  .map((l) => `${l} : ${base - (parLangue.get(l) ?? 0)}/${base} en français`)
  .join(' · ');

console.log(`✓ Captures : ${declarees.length} déclarées, toutes présentes. Repli — ${repli}.`);

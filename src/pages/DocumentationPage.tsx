import { useMemo, useRef, useState, type ReactNode } from 'react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/ui';
import { Icons } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';

/* ================================================================== */
/* Composants de mise en forme (charte warm minimal)                  */
/* ================================================================== */

function C({ children }: { children: ReactNode }) {
  return (
    <code className="whitespace-nowrap rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[0.85em] text-gold-600">
      {children}
    </code>
  );
}

function Table({ head, rows }: { head: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-ink-100 shadow-card">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                className="whitespace-nowrap border-b border-ink-200 bg-ink-50 px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide text-ink-500"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="transition-colors hover:bg-ink-50/70">
              {r.map((cell, j) => (
                <td key={j} className="border-t border-ink-100 px-4 py-2.5 align-top text-ink-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Pre({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = ref.current?.innerText ?? '';
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        /* ignoré */
      }
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="group relative my-4">
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Code copié' : 'Copier le code'}
        className="absolute right-2.5 top-2.5 z-10 inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white/90 px-2.5 py-1.5 text-xs font-semibold text-ink-500 shadow-sm backdrop-blur transition-colors hover:border-gold hover:text-gold-600"
      >
        {copied ? (
          <>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-mint" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M20 6 9 17l-5-5" /></svg>
            Copié
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
            Copier
          </>
        )}
      </button>
      <pre
        ref={ref}
        className="overflow-x-auto rounded-xl border border-ink-100 border-l-[3px] border-l-gold bg-white p-4 pr-16 font-mono text-[13px] leading-relaxed text-navy-900 shadow-card"
      >
        {children}
      </pre>
    </div>
  );
}

function Note({ children, tone = 'note' }: { children: ReactNode; tone?: 'note' | 'warn' }) {
  const styles = tone === 'warn' ? 'border-gold/50 bg-gold/[0.07]' : 'border-gold/30 bg-gold/[0.05]';
  return (
    <div className={`my-4 flex gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed text-ink-600 ${styles}`}>
      <span className="mt-0.5 shrink-0 font-bold text-gold-600">{tone === 'warn' ? '⚠' : '▸'}</span>
      <div>{children}</div>
    </div>
  );
}

/** Entrée de méthode façon « method reference » (Laravel). */
function Method({ name, returns, children }: { name: ReactNode; returns?: string; children: ReactNode }) {
  return (
    <div className="border-t border-ink-100 pt-6 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <code className="rounded-md bg-ink-100 px-2.5 py-1 font-mono text-sm font-semibold text-navy-900">{name}</code>
        {returns && (
          <span className="text-xs text-ink-400">
            → <span className="font-mono text-gold-600">{returns}</span>
          </span>
        )}
      </div>
      <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-ink-600">{children}</div>
    </div>
  );
}

/** Tableau compact de paramètres (nom · type · rôle). */
function Params({ rows }: { rows: [ReactNode, ReactNode, ReactNode][] }) {
  return (
    <div className="my-2.5 overflow-hidden rounded-lg border border-ink-100 text-xs">
      <div className="grid grid-cols-[1fr] gap-0.5 border-b border-ink-100 bg-ink-50 px-3 py-1.5 font-bold uppercase tracking-wide text-ink-400 sm:grid-cols-[10rem_7rem_1fr] sm:gap-3">
        <span>Paramètre</span>
        <span className="hidden sm:block">Type</span>
        <span className="hidden sm:block">Rôle</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr] gap-0.5 border-b border-ink-100 px-3 py-2 last:border-b-0 sm:grid-cols-[10rem_7rem_1fr] sm:gap-3">
          <code className="font-mono font-semibold text-gold-600">{r[0]}</code>
          <span className="font-mono text-ink-400">{r[1]}</span>
          <span className="text-ink-600">{r[2]}</span>
        </div>
      ))}
    </div>
  );
}

function Recipe({ tag, title, goal, children }: { tag: string; title: string; goal: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:p-6">
      <span className="inline-flex items-center rounded-full bg-gold/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-600 ring-1 ring-gold/25">
        {tag}
      </span>
      <h3 className="mt-3 text-base font-bold text-navy-900">{title}</h3>
      <p className="mt-1 text-sm text-ink-500">{goal}</p>
      {children}
    </div>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-9 mb-1 text-lg font-bold text-navy-900">{children}</h3>;
}

/* ================================================================== */
/* Contenu — référence exhaustive du scripting workflow               */
/* ================================================================== */

interface DocSection {
  id: string;
  label: string;
  terms: string;
  body: ReactNode;
}

const SECTIONS: DocSection[] = [
  /* ---------------------------------------------------------------- */
  {
    id: 'contexts',
    label: 'Introduction',
    terms:
      'introduction contextes comportements behaviours conditions post-fonctions transition on_form_load on_field_change on_case_load before after javascript async await cycle de vie déclencheurs',
    body: (
      <>
        <p className="text-ink-500">
          Le moteur workflow de bxChange est <strong>configurable sans déployer de code</strong> : un
          administrateur de processus définit les étapes, les écrans et les transitions depuis
          l’interface. Pour tout ce qui ne se règle pas par configuration — calculs, validations,
          règles conditionnelles, effets de bord — il branche de petits scripts <strong>JavaScript</strong>.
        </p>
        <p>
          Ces scripts s’exécutent <strong>dans le navigateur</strong>, dans un bac à sable. Ils
          supportent <C>async/await</C>. Il existe <strong>trois contextes</strong>, chacun avec ses
          déclencheurs, son jeu de fonctions injectées et sa sémantique propre. C’est le point le plus
          important à comprendre avant d’écrire : <em>le même nom de fonction n’existe pas partout</em>,
          et écrire un champ ne se fait pas de la même façon selon le contexte.
        </p>

        <Table
          head={['Contexte', 'Où on l’écrit', 'Déclencheurs', 'Ce qu’il décide']}
          rows={[
            [
              <strong>Comportements</strong>,
              'Éditeur de comportements d’un écran',
              <><C>on_form_load</C>, <C>on_field_change</C>, <C>on_case_load</C></>,
              'L’état vivant du formulaire : valeurs, visibilité, obligation, validation, boutons de transition.',
            ],
            [
              <strong>Conditions</strong>,
              'Champ « condition » d’une transition',
              'À l’affichage du dossier',
              <>La <strong>visibilité d’un bouton</strong> de transition (<C>return false</C> = masqué).</>,
            ],
            [
              <strong>Post-fonctions</strong>,
              'Onglet « Post-fonctions » d’une transition',
              <><C>before_transition</C>, <C>after_transition</C></>,
              'Les effets de bord une fois la transition franchie : assignation, MAJ, connecteurs, e-mails.',
            ],
          ]}
        />

        <H3>Cycle de vie des déclencheurs</H3>
        <ul className="list-disc space-y-1.5 pl-5 text-ink-600">
          <li>
            <C>on_form_load</C> — s’exécute <strong>une fois</strong>, à l’ouverture du formulaire.
            Idéal pour préparer l’état initial (masquer des champs, poser des valeurs par défaut).
          </li>
          <li>
            <C>on_field_change</C> — s’exécute à <strong>chaque modification</strong> d’un champ. On
            peut le restreindre à un champ précis (paramètre « champ déclencheur ») pour ne pas
            recalculer à chaque frappe ailleurs.
          </li>
          <li>
            <C>on_case_load</C> — s’exécute à l’ouverture du <strong>dossier</strong>. C’est le{' '}
            <strong>seul</strong> endroit où l’on peut afficher / masquer des boutons de transition
            (<C>showTransition</C> / <C>hideTransition</C>).
          </li>
        </ul>

        <H3>Adresser un champ</H3>
        <p>
          Partout, un champ est désigné par sa <strong>clé</strong> (son <em>field key</em>, ex.{' '}
          <C>date_debut</C>), pas par son libellé. <C>getValue('date_debut')</C> lit sa valeur
          courante ; les fonctions d’écriture prennent la même clé en premier argument.
        </p>

        <Note>
          <strong>Champs « Objet métier » pré-résolus.</strong> Pour un champ lié à un objet métier,{' '}
          <C>getValue('vehicule')</C> renvoie <strong>l’objet complet</strong> (pas l’UUID) — vous
          pouvez lire <C>getValue('vehicule').marque</C> directement. À l’écriture, la valeur est
          renormalisée en UUID pour le backend automatiquement.
        </Note>

        <H3>Gestion des erreurs (par contexte)</H3>
        <ul className="list-disc space-y-1.5 pl-5 text-ink-600">
          <li>
            <strong>Comportements</strong> — une exception est tracée dans la console de debug du
            moteur (<C>log</C>) sans casser le formulaire ; le reste de l’UI continue de fonctionner.
          </li>
          <li>
            <strong>Conditions</strong> — en cas d’erreur, le bouton reste <strong>visible</strong>{' '}
            (<em>fail open</em>). Ne jamais s’appuyer sur une condition pour un contrôle de sécurité :
            le franchissement réel reste gardé côté serveur.
          </li>
          <li>
            <strong>Post-fonctions</strong> — <strong>best-effort</strong> : une erreur sur une action
            (ex. e-mail) n’annule pas la transition déjà franchie.
          </li>
        </ul>
      </>
    ),
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'sandbox',
    label: 'Environnement d’exécution',
    terms:
      'sandbox sécurité async await fetch window document eval function csp réseau require dépendance npm globals interdits',
    body: (
      <>
        <p className="text-ink-500">
          Les scripts sont compilés en fonctions asynchrones (vous pouvez donc utiliser <C>await</C>)
          et exécutés avec un préambule de durcissement. Voici précisément ce qui est disponible et ce
          qui ne l’est pas.
        </p>

        <H3>Ce qui est disponible</H3>
        <ul className="list-disc space-y-1.5 pl-5 text-ink-600">
          <li>Les <strong>fonctions injectées</strong> du contexte (voir chaque section).</li>
          <li>La <strong>bibliothèque <C>lib</C></strong> et <C>require('lib')</C>.</li>
          <li>
            Les objets standard du langage : <C>JSON</C>, <C>Math</C>, <C>Number</C>, <C>String</C>,{' '}
            <C>Array</C>, <C>Object</C>, <C>Date</C>, les littéraux de gabarit, <C>await</C>…
          </li>
        </ul>

        <H3>Ce qui est neutralisé</H3>
        <ul className="list-disc space-y-1.5 pl-5 text-ink-600">
          <li>
            Accès réseau direct, DOM et timers : <C>window</C>, <C>document</C>, <C>location</C>,{' '}
            <C>fetch</C>, <C>XMLHttpRequest</C>, <C>WebSocket</C>, <C>localStorage</C>,{' '}
            <C>sessionStorage</C>, <C>setTimeout</C>, <C>setInterval</C>… sont à <C>undefined</C>.
          </li>
          <li>
            <C>Function</C> et <C>eval</C> sont désactivés ; les motifs d’évasion (<C>.constructor</C>,{' '}
            <C>__proto__</C>, <C>.prototype</C>) sont rejetés avant exécution.
          </li>
        </ul>

        <Note tone="warn">
          Le <strong>seul moyen d’appeler l’extérieur</strong> est de passer par les helpers injectés
          (<C>callConnector</C>, <C>getIssuesByTemplate</C>, <C>updateIssue</C>…), qui tapent l’API
          bxChange <strong>authentifiée</strong> avec vos droits. Aucune dépendance externe : tout est
          code maison, on n’importe jamais depuis une URL.
        </Note>
      </>
    ),
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'lib',
    label: 'Bibliothèque lib',
    terms:
      'lib parseDate formatDate today addDays subDays addMonths diffDays diffMonths businessDays daysBetween isBefore isAfter isSameDay isWeekend dayOfWeek startOfMonth endOfMonth groupBy keyBy countBy sortBy uniq uniqBy sumBy meanBy maxBy minBy chunk range get currency number round clamp percent capitalize truncate slugify isEmail isPhone isEmpty isNumeric dates collections format nombres validation',
    body: (
      <>
        <p className="text-ink-500">
          <C>lib</C> est une bibliothèque utilitaire maison, disponible dans les <strong>trois
          contextes</strong> (directement comme <C>lib</C>, ou via <C>require('lib')</C>). Elle est{' '}
          <strong>100 % pure et tolérante</strong> : sur une entrée invalide, elle renvoie une valeur
          neutre (<C>''</C>, <C>null</C>, <C>0</C>) plutôt que de lever une exception. Vous pouvez donc
          l’appeler sans multiplier les <C>try/catch</C>.
        </p>

        <H3>Dates</H3>
        <p className="text-sm text-ink-500">
          <strong>Formats reconnus en entrée</strong> (par <C>parseDate</C>, utilisé partout) : ISO{' '}
          <C>YYYY-MM-DD</C>, ISO avec heure, <C>YYYYMMDD</C> (8 chiffres), et les formats FR{' '}
          <C>DD/MM/YYYY</C>, <C>DD-MM-YYYY</C>, <C>DD.MM.YYYY</C>. <strong>En sortie</strong>, toute
          fonction qui renvoie une date renvoie une string ISO <C>YYYY-MM-DD</C>.
        </p>

        <div className="mt-4 flex flex-col gap-1">
          <Method name="parseDate(date)" returns="Date | null">
            <p>Convertit une valeur en objet <C>Date</C> locale en essayant tous les formats ci-dessus, puis en dernier recours <C>new Date()</C>. Renvoie <C>null</C> si rien n’est interprétable. Sert de base à toutes les autres fonctions de date.</p>
          </Method>
          <Method name="formatDate(date, fmt?)" returns="string">
            <p>Formate une date. <C>fmt</C> vaut <C>'iso'</C> (défaut, <C>2026-07-06</C>) ou <C>'fr'</C> (<C>06/07/2026</C>). Renvoie <C>''</C> si la date est invalide.</p>
            <Pre>{`lib.formatDate('2026-07-06', 'fr')   // → '06/07/2026'
lib.formatDate('n’importe quoi')     // → ''`}</Pre>
          </Method>
          <Method name="today()" returns="string">
            <p>La date du jour au format ISO. Pratique pour horodater ou calculer une échéance.</p>
          </Method>
          <Method name="addDays(date, n) · subDays(date, n)" returns="string">
            <p>Ajoute (ou retire) <C>n</C> jours calendaires. <C>n</C> peut être négatif. Renvoie une date ISO, ou <C>''</C> si l’entrée est invalide.</p>
            <Pre>{`lib.addDays(lib.today(), 30)   // échéance à J+30
lib.subDays('2026-07-06', 7)   // → '2026-06-29'`}</Pre>
          </Method>
          <Method name="addMonths(date, n)" returns="string">
            <p>Ajoute (ou retire, si <C>n</C> &lt; 0) <C>n</C> mois entiers.</p>
          </Method>
          <Method name="diffDays(a, b)" returns="number | null">
            <p>Nombre de jours calendaires entre <C>a</C> et <C>b</C>, soit <C>b − a</C>, calculé de minuit à minuit (aucun effet d’heure ni de fuseau). Négatif si <C>b</C> est avant <C>a</C>. <C>null</C> si une date est invalide.</p>
          </Method>
          <Method name="diffMonths(a, b)" returns="number | null">
            <p>Nombre de mois <strong>entiers</strong> entre les deux dates.</p>
          </Method>
          <Method name="businessDays(start, end)" returns="number | null">
            <p>Nombre de <strong>jours ouvrés (lundi→vendredi)</strong> entre deux dates, <strong>bornes incluses</strong>. Exclut uniquement les week-ends — <strong>pas</strong> les jours fériés.</p>
            <Pre>{`lib.businessDays('2026-07-06', '2026-07-10')  // → 5 (lun→ven)
lib.businessDays('2026-07-04', '2026-07-06')  // → 1 (sam+dim exclus, lun inclus)`}</Pre>
            <Note>Pour des « ouvrés hors fériés », soustrayez manuellement les fériés connus de votre pays : <C>lib.businessDays(a,b) - nbFeriesDansIntervalle</C>.</Note>
          </Method>
          <Method name="daysBetween(start, end)" returns="number | null">
            <p>Jours calendaires <strong>bornes incluses</strong> — équivaut à <C>diffDays + 1</C>. <C>daysBetween('2026-07-01','2026-07-01')</C> vaut <C>1</C>.</p>
          </Method>
          <Method name="isBefore(a, b) · isAfter(a, b) · isSameDay(a, b)" returns="boolean">
            <p>Comparaisons <strong>au jour</strong> (l’heure est ignorée).</p>
          </Method>
          <Method name="isWeekend(date) · dayOfWeek(date)" returns="boolean · number">
            <p><C>isWeekend</C> : samedi ou dimanche. <C>dayOfWeek</C> : <C>0</C> = dimanche … <C>6</C> = samedi (<C>-1</C> si invalide).</p>
          </Method>
          <Method name="startOfMonth(date) · endOfMonth(date)" returns="string">
            <p>Premier / dernier jour du mois de la date donnée, en ISO.</p>
          </Method>
        </div>

        <H3>Collections</H3>
        <p className="text-sm text-ink-500">
          Fonctions façon lodash. Le paramètre <C>key</C> (l’« itératee ») accepte soit une{' '}
          <strong>string</strong> (nom de propriété : <C>'montant'</C>), soit une{' '}
          <strong>fonction</strong> (<C>x =&gt; x.montant</C>). Toutes sont non-mutantes (elles
          renvoient une copie).
        </p>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="groupBy(arr, key)" returns="Record<string, T[]>">
            <p>Regroupe les éléments dans un objet, indexé par la valeur de <C>key</C>. Chaque entrée est un tableau.</p>
            <Pre>{`lib.groupBy(lignes, l => l.categorie)
// → { transport: [...], repas: [...] }`}</Pre>
          </Method>
          <Method name="keyBy(arr, key)" returns="Record<string, T>">
            <p>Indexe par clé, en gardant <strong>un seul</strong> élément par valeur (le dernier rencontré gagne).</p>
          </Method>
          <Method name="countBy(arr, key)" returns="Record<string, number>">
            <p>Compte le nombre d’éléments par valeur de clé.</p>
          </Method>
          <Method name="sortBy(arr, key)" returns="T[]">
            <p>Trie par ordre <strong>ascendant</strong> selon la clé (copie, non mutant).</p>
          </Method>
          <Method name="uniq(arr) · uniqBy(arr, key)" returns="T[]">
            <p>Déduplique : <C>uniq</C> par identité (via <C>Set</C>), <C>uniqBy</C> par valeur de clé.</p>
          </Method>
          <Method name="sumBy(arr, key) · meanBy(arr, key)" returns="number">
            <p>Somme / moyenne des valeurs. Les valeurs non numériques comptent pour <C>0</C> ; <C>meanBy</C> d’un tableau vide vaut <C>0</C>.</p>
            <Pre>{`lib.sumBy(lignes, 'montant')   // total des montants`}</Pre>
          </Method>
          <Method name="maxBy(arr, key) · minBy(arr, key)" returns="T | null">
            <p>Renvoie l’<strong>élément</strong> (pas la valeur) au maximum / minimum de la clé, ou <C>null</C> si le tableau est vide.</p>
          </Method>
          <Method name="chunk(arr, size)" returns="T[][]">
            <p>Découpe le tableau en paquets de longueur <C>size</C> (≥ 1).</p>
          </Method>
          <Method name="range(start, end?, step?)" returns="number[]">
            <p>Génère une suite numérique. <C>range(3)</C> → <C>[0,1,2]</C> ; <C>range(2, 6)</C> → <C>[2,3,4,5]</C> ; <C>step</C> négatif supporté.</p>
          </Method>
          <Method name="get(obj, path, def?)" returns="unknown">
            <p>Accès <strong>sûr</strong> à une valeur imbriquée par chemin, sans planter si un maillon est absent. Supporte la notation pointée et les index (<C>a.b.0.c</C> ou <C>a.b[0].c</C>). Renvoie <C>def</C> si le chemin n’existe pas.</p>
            <Pre>{`lib.get(resultatConnecteur, 'body.items.0.id', null)`}</Pre>
          </Method>
        </div>

        <H3>Format &amp; nombres <span className="text-sm font-normal text-ink-400">(locale par défaut fr-FR)</span></H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="currency(n, code?, locale?)" returns="string">
            <p>Formate un montant en devise. <C>code</C> par défaut <C>'EUR'</C>. <C>lib.currency(1234.5)</C> → <C>1 234,50 €</C>.</p>
          </Method>
          <Method name="number(n, decimals?, locale?)" returns="string">
            <p>Formate un nombre avec séparateurs de milliers. <C>lib.number(1234.5, 2)</C> → <C>1 234,50</C>.</p>
          </Method>
          <Method name="round(n, decimals?)" returns="number">
            <p>Arrondit à <C>decimals</C> décimales (défaut 0). <C>lib.round(3.14159, 2)</C> → <C>3.14</C>.</p>
          </Method>
          <Method name="clamp(n, min, max)" returns="number">
            <p>Borne <C>n</C> entre <C>min</C> et <C>max</C>. <C>lib.clamp(150, 0, 100)</C> → <C>100</C>.</p>
          </Method>
          <Method name="percent(n, decimals?, locale?)" returns="string">
            <p>Formate une proportion en pourcentage. <C>lib.percent(0.75)</C> → <C>75 %</C>.</p>
          </Method>
          <Method name="capitalize(s) · truncate(s, len, suffix?) · slugify(s)" returns="string">
            <p><C>capitalize('bonjour')</C> → <C>Bonjour</C> · <C>truncate('abcdef', 4)</C> → <C>abc…</C> · <C>slugify('Été à Paris!')</C> → <C>ete-a-paris</C>.</p>
          </Method>
        </div>

        <H3>Validation</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="isEmail(s)" returns="boolean">
            <p>Vrai si la string ressemble à une adresse e-mail (contrôle de forme basique, pas de vérification d’existence).</p>
          </Method>
          <Method name="isPhone(s)" returns="boolean">
            <p>Vrai pour un numéro de 6 à 30 caractères composé de <C>+</C>, chiffres et séparateurs usuels.</p>
          </Method>
          <Method name="isEmpty(v)" returns="boolean">
            <p>Vrai pour <C>null</C>, <C>''</C>, <C>'[]'</C>, un tableau vide, ou un objet vide. Pratique pour tester un champ « rempli ».</p>
          </Method>
          <Method name="isNumeric(v)" returns="boolean">
            <p>Vrai si <C>v</C> est un nombre ou une string entièrement numérique.</p>
          </Method>
        </div>
      </>
    ),
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'behaviours',
    label: 'Comportements — API',
    terms:
      'comportements getValue setValue show hide setRequired disable enable setError clearError setMessage clearMessage showTransition hideTransition getAssignee setAssignee setAssigneeByRole getRoles getMembers getCurrentUser getCurrentIssue getIssueByKey getIssuesByTemplate updateIssue addComment sendEmail setBoField searchBoInstances getBoInstance updateBoInstance createBoInstance callConnector setMemberAttributes updateUserAttribute log require',
    body: (
      <>
        <p className="text-ink-500">
          Le contexte le plus riche : il pilote l’<strong>état vivant</strong> du formulaire. Toutes les
          fonctions ci-dessous y sont disponibles. Celles marquées <em>async</em> renvoient une{' '}
          <C>Promise</C> — utilisez <C>await</C>.
        </p>

        <H3>Lire &amp; écrire un champ</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="getValue(key)" returns="unknown">
            <p>Valeur courante du champ <C>key</C>. Renvoie <C>''</C> si le champ est absent. Pour un champ Objet métier, renvoie l’<strong>objet complet</strong> (pré-résolu).</p>
          </Method>
          <Method name="setValue(key, value)" returns="void">
            <p>Fixe la valeur d’un champ. Un objet BO est normalisé en UUID ; un tableau d’objets BO en tableau d’UUID. Déclenche la logique de dépendance du formulaire.</p>
            <Params rows={[
              ['key', 'string', 'Clé du champ cible.'],
              ['value', 'unknown', 'Nouvelle valeur (string, number, tableau, objet BO…).'],
            ]} />
          </Method>
        </div>

        <H3>Afficher, masquer, rendre obligatoire</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="show(key) · hide(key)" returns="void">
            <p>Affiche ou masque un champ. Un champ masqué n’est pas soumis.</p>
          </Method>
          <Method name="setRequired(key, required)" returns="void">
            <p>Rend un champ obligatoire (<C>true</C>) ou optionnel (<C>false</C>). Un champ obligatoire vide bloque la soumission.</p>
          </Method>
          <Method name="disable(key) · enable(key)" returns="void">
            <p><C>disable</C> grise le champ (visible mais non éditable) ; <C>enable</C> le réactive. À distinguer de <C>hide</C> (qui le retire).</p>
          </Method>
        </div>

        <H3>Validation &amp; messages</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="setError(key, message)" returns="void">
            <p>Marque le champ en erreur et affiche <C>message</C>. <strong>Bloque la soumission</strong> tant que l’erreur n’est pas levée. À rappeler à chaque évaluation (voir <C>clearError</C>).</p>
          </Method>
          <Method name="clearError(key)" returns="void">
            <p>Lève l’erreur posée sur le champ. Bonne pratique : dans un <C>on_field_change</C>, appeler <C>clearError</C> dans la branche « valide » pour ne pas laisser une erreur obsolète.</p>
          </Method>
          <Method name="setMessage(key, message) · clearMessage(key)" returns="void">
            <p>Message <strong>informatif</strong> (non bloquant) sous le champ — pour une aide contextuelle ou un total calculé. <C>clearMessage</C> l’efface.</p>
          </Method>
        </div>

        <H3>Boutons de transition <span className="text-sm font-normal text-ink-400">(contexte on_case_load)</span></H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="showTransition(nameOrId) · hideTransition(nameOrId)" returns="void">
            <p>Affiche / masque un bouton de transition, par <strong>nom</strong> ou par <strong>ID</strong>. N’a de sens que dans <C>on_case_load</C>. Pour une règle purement déclarative, préférez une <strong>condition de transition</strong> (section suivante).</p>
            <Pre>{`// Masquer "Valider" sauf pour le rôle Manager
const me = getCurrentUser()
if (!me || !me.wf_role_names.includes('Manager')) hideTransition('Valider')`}</Pre>
          </Method>
        </div>

        <H3>Assignation &amp; annuaire</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="getAssignee()" returns="{ type, id, name } | null">
            <p>L’assigné courant du dossier, en tenant compte d’une assignation posée plus tôt dans le même run. <C>type</C> vaut <C>'user'</C> ou <C>'role'</C>. <C>null</C> si non assigné.</p>
          </Method>
          <Method name="setAssignee(userId | null)" returns="void">
            <p>Assigne le dossier à un utilisateur par son <strong>UUID</strong>. <C>null</C> désassigne.</p>
          </Method>
          <Method name="setAssigneeByRole(slugOrName)" returns="void">
            <p>Assigne à un <strong>rôle workflow</strong> (par slug ou nom), plutôt qu’à une personne précise.</p>
          </Method>
          <Method name="getRoles()" returns="BehaviourRole[]">
            <p>Liste des rôles workflow : <C>{'{ id, slug, name, level }'}</C>.</p>
          </Method>
          <Method name="getMembers()" returns="BehaviourMember[]">
            <p>Membres du tenant : <C>{'{ id, email, full_name, wf_role_id, wf_role_name, wf_role_slug, wf_role_names[], wf_role_slugs[], attributes }'}</C>. Utile pour router selon un attribut de profil.</p>
          </Method>
          <Method name="getCurrentUser()" returns="CurrentUser | null">
            <p>L’utilisateur connecté : mêmes champs qu’un membre, plus son <C>role</C> plateforme et ses <C>attributes</C> de profil workflow. <C>null</C> si indisponible.</p>
          </Method>
        </div>

        <H3>Contexte dossier &amp; inter-dossiers</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="getCurrentIssue()" returns="{ id, reference, status, priority, title }">
            <p>Métadonnées du dossier ouvert.</p>
          </Method>
          <Method name="getIssueByKey(reference)" returns="Promise<object | null>">
            <p><em>async</em> — Recherche un dossier par sa <strong>référence</strong> ou son UUID. <C>null</C> si introuvable.</p>
          </Method>
          <Method name="getIssuesByTemplate(templateName, filters?)" returns="Promise<object[]>">
            <p><em>async</em> — Liste des dossiers d’un template. <C>filters</C> optionnel : <C>{'{ status, priority, search, limit }'}</C>.</p>
            <Pre>{`const enCours = await getIssuesByTemplate('Demande de congés', {
  status: 'En attente', limit: 100,
})`}</Pre>
          </Method>
          <Method name="updateIssue(referenceOrId, fieldsData)" returns="Promise<void>">
            <p><em>async</em> — Met à jour <strong>partiellement</strong> les champs d’un autre dossier. <C>fieldsData</C> est un objet <C>{'{ cle: valeur }'}</C>.</p>
          </Method>
          <Method name="addComment(text)" returns="Promise<void>">
            <p><em>async</em> — Ajoute un commentaire au dossier courant (visible dans son historique).</p>
          </Method>
          <Method name="sendEmail(notificationId)" returns="Promise<void>">
            <p><em>async</em> — Met en file une notification e-mail <strong>préconfigurée</strong> (identifiée par son UUID), avec ses destinataires et son gabarit.</p>
          </Method>
        </div>

        <H3>Objets métier</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="setBoField(key, instanceId | null)" returns="void">
            <p>Affecte un champ Objet métier par UUID d’instance (<C>null</C> pour vider).</p>
          </Method>
          <Method name="searchBoInstances(typeName, query?, limit?)" returns="Promise<object[]>">
            <p><em>async</em> — Recherche des instances d’un type d’objet métier. <C>limit</C> par défaut <C>20</C>.</p>
          </Method>
          <Method name="getBoInstance(typeId, instanceId)" returns="Promise<object | null>">
            <p><em>async</em> — Récupère une instance précise.</p>
          </Method>
          <Method name="updateBoInstance(typeId, instanceId, data) · createBoInstance(typeId, data)" returns="Promise<object | null>">
            <p><em>async</em> — Met à jour ou crée une instance d’objet métier.</p>
          </Method>
        </div>

        <H3>Connecteurs &amp; utilitaires</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="callConnector(connectorId, params?)" returns="Promise<unknown>">
            <p><em>async</em> — Exécute un connecteur bxChange (SOAP ou REST) et renvoie son résultat. Renvoie <C>null</C> en cas d’erreur (à tester). Le résultat REST a la forme <C>{'{ status_code, headers, body }'}</C> — lisez-le avec <C>lib.get(res, 'body.…')</C>.</p>
            <Params rows={[
              ['connectorId', 'string', 'UUID du connecteur à exécuter.'],
              ['params', 'object?', 'Paramètres passés au connecteur (query, body…).'],
            ]} />
          </Method>
          <Method name="setMemberAttributes(memberId, attributes)" returns="Promise<void>">
            <p><em>async</em> — <strong>Remplace</strong> l’ensemble des attributs personnalisés d’un membre (profil workflow).</p>
          </Method>
          <Method name="updateUserAttribute(userId, key, value)" returns="Promise<void>">
            <p><em>async</em> — Met à jour <strong>un seul</strong> attribut sans écraser les autres. À préférer à <C>setMemberAttributes</C> quand on ne touche qu’une clé.</p>
          </Method>
          <Method name="log(...args)" returns="void">
            <p>Trace dans la console de debug du moteur. N’a aucun effet en production visible par l’utilisateur — utile pendant la mise au point.</p>
          </Method>
          <Method name="require(name)" returns="unknown">
            <p>Import sécurisé. <C>require('lib')</C> est toujours disponible ; les autres modules doivent être activés sur le processus (voir <a href="#require" className="text-gold-600 underline">require() &amp; catalogue</a>).</p>
          </Method>
        </div>

        <Pre>{`// Exemple complet — on_field_change sur 'type_contrat'
if (getValue('type_contrat') === 'CDD') {
  show('date_fin'); setRequired('date_fin', true)
} else {
  hide('date_fin'); setRequired('date_fin', false)
}

const nb = lib.businessDays(getValue('date_debut'), getValue('date_fin'))
if (nb !== null && nb > 25) setError('date_fin', 'Maximum 25 jours ouvrés')
else { clearError('date_fin'); setValue('nombre_jours', nb ?? 0) }`}</Pre>
      </>
    ),
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'conditions',
    label: 'Conditions — API',
    terms:
      'conditions condition_script return false visible masqué fail open lecture seule getValue getCurrentUser getAssignee déclaratif backend field_condition connector_result opérateurs is_set eq ne gt gte lt lte contains in eq_current_user système',
    body: (
      <>
        <p className="text-ink-500">
          Une condition est un court script attaché à une transition, évalué à l’affichage du dossier,
          qui décide si le bouton apparaît. Elle est en <strong>lecture seule</strong> : aucun effet de
          bord n’est possible ici.
        </p>

        <H3>Sémantique du retour</H3>
        <Table
          head={['Le script…', 'Résultat']}
          rows={[
            [<><C>return false</C></>, 'Bouton masqué.'],
            [<><C>return true</C> / <C>undefined</C> / autre valeur</>, 'Bouton visible.'],
            ['lève une erreur', <>Bouton <strong>visible</strong> (fail open).</>],
            ['est vide', 'Bouton visible.'],
          ]}
        />

        <H3>Fonctions disponibles</H3>
        <p className="text-ink-600">
          Un sous-ensemble volontairement restreint (aucune écriture) : <C>getValue</C>,{' '}
          <C>getCurrentUser</C>, <C>getAssignee</C>, <C>getRoles</C>, <C>getMembers</C>,{' '}
          <C>getCurrentIssue</C>, <C>getIssueByKey</C>, <C>getIssuesByTemplate</C>, <C>callConnector</C>,{' '}
          <C>searchBoInstances</C>, <C>getBoInstance</C>, <C>lib</C>, <C>log</C>. Leur comportement est
          identique à celui décrit pour les comportements.
        </p>
        <Pre>{`// "Clôturer" visible seulement si soldé ET gestionnaire
const solde = Number(getValue('montant_restant') || 0)
const me = getCurrentUser()
return solde === 0 && !!me && me.wf_role_names.includes('Gestionnaire')`}</Pre>

        <H3>Conditions déclaratives (côté serveur)</H3>
        <p className="text-ink-600">
          Indépendamment du script (qui gère la <strong>visibilité</strong>), une transition peut porter
          une condition <strong>déclarative</strong> qui garde le <strong>franchissement réel</strong> :
          si elle n’est pas satisfaite, le serveur refuse la transition. C’est le vrai garde-fou.
        </p>
        <Table
          head={['Élément', 'Valeurs']}
          rows={[
            [<C>condition_type</C>, <><C>none</C> · <C>field_condition</C> · <C>connector_result</C></>],
            [
              <C>condition_op</C>,
              <><C>is_set</C>, <C>is_not_set</C>, <C>eq</C>, <C>ne</C>, <C>gt</C>, <C>gte</C>, <C>lt</C>, <C>lte</C>, <C>contains</C>, <C>not_contains</C>, <C>in</C>, <C>not_in</C>, <C>eq_current_user</C>, <C>ne_current_user</C></>,
            ],
            [
              'Contexte évaluable',
              <>Les champs <C>fields_data</C> et <C>connector_data</C>, plus les champs système préfixés <C>$</C> : <C>$assigned_to</C>, <C>$priority</C>, <C>$status</C>, <C>$created_by</C>, <C>$current_user</C>.</>,
            ],
          ]}
        />
        <Note tone="warn">
          <strong>Règle d’or :</strong> le script gouverne l’<em>affichage</em> du bouton (confort UX) ;
          la condition déclarative gouverne l’<em>autorisation</em> réelle (sécurité). Ne comptez jamais
          sur le seul script pour empêcher une action.
        </Note>
      </>
    ),
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'postfn',
    label: 'Post-fonctions — API',
    terms:
      'post-fonctions setField setAssignee setAssigneeByRole before_transition after_transition persistance mode test addComment sendEmail updateIssue objets métier',
    body: (
      <>
        <p className="text-ink-500">
          Les post-fonctions produisent des <strong>effets de bord</strong> une fois la transition
          franchie. Après exécution, les champs modifiés (<C>setField</C>) sont persistés et
          l’assignation appliquée.
        </p>

        <Note tone="warn">
          <strong>À connaître sur le runtime actuel :</strong> après confirmation, <strong>toutes les
          post-fonctions actives</strong> de la transition s’exécutent <strong>après</strong> le
          franchissement (le filtrage se fait sur l’état « actif », pas sur <C>before</C>/<C>after</C>).
          Le champ before/after existe et est éditable, mais <C>before_transition</C> s’exécute aussi
          après le franchissement dans l’implémentation courante — écrivez vos scripts en conséquence.
        </Note>

        <H3>Différences avec les comportements</H3>
        <ul className="list-disc space-y-1.5 pl-5 text-ink-600">
          <li>L’écriture d’un champ se fait avec <C>setField(key, value)</C> — <strong>pas</strong> <C>setValue</C>.</li>
          <li>Aucune fonction de formulaire vivant : pas de <C>show/hide/setRequired/disable/enable/setError/setMessage</C>.</li>
          <li><C>setAssignee</C> accepte un UUID <strong>ou</strong> un objet <C>{'{ id }'}</C>, et valide le format (ignoré si invalide).</li>
        </ul>

        <H3>Fonctions disponibles</H3>
        <div className="mt-4 flex flex-col gap-1">
          <Method name="setField(key, value)" returns="void">
            <p>Modifie un champ du dossier ; la valeur est persistée après l’exécution de la post-fonction.</p>
          </Method>
          <Method name="setAssignee(userId | {id}) · setAssigneeByRole(slugOrName)" returns="void">
            <p>Assigne à un utilisateur (UUID validé) ou à un rôle workflow (toast d’erreur si le rôle est introuvable).</p>
          </Method>
          <Method name="getValue · getCurrentIssue · getIssueByKey · getIssuesByTemplate · updateIssue" returns="—">
            <p>Lecture des champs (BO pré-résolus) et accès inter-dossiers, identiques aux comportements. <C>getCurrentIssue</C> reflète l’état <strong>après</strong> transition.</p>
          </Method>
          <Method name="addComment(text) · sendEmail(notificationId)" returns="Promise<void>">
            <p><em>async</em> — Commente le dossier ; envoie une notification e-mail préconfigurée.</p>
          </Method>
          <Method name="callConnector · searchBoInstances · getBoInstance · updateBoInstance · createBoInstance · setBoField" returns="—">
            <p>Connecteurs et objets métier, identiques aux comportements (<C>setBoField</C> est persisté avec les champs).</p>
          </Method>
          <Method name="setMemberAttributes · updateUserAttribute · getRoles · getMembers · getCurrentUser · lib · log" returns="—">
            <p>Annuaire, attributs de profil, bibliothèque maison et trace de debug.</p>
          </Method>
        </div>

        <Note>
          Le <strong>mode Test</strong> de l’éditeur (bouton ▶) exécute le script avec des stubs — il
          expose le même jeu de fonctions <strong>sans effet réel</strong>, pour valider la logique
          avant de l’activer.
        </Note>

        <Pre>{`// after_transition "Prendre en charge"
const me = getCurrentUser()
if (me) {
  setAssignee(me.id)
  setField('date_prise_en_charge', lib.today())
  await addComment('Pris en charge par ' + (me.full_name || me.email) + '.')
  await sendEmail('notif-prise-en-charge-uuid')
}`}</Pre>
      </>
    ),
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'recipes',
    label: 'Recettes concrètes',
    terms:
      'exemples recettes congés note de frais total connecteur siren enrichir assignation escalade objet métier véhicule budget parent updateIssue callConnector sendEmail',
    body: (
      <>
        <p className="text-ink-500">
          Des scripts complets, prêts à adapter. Chaque recette indique le <strong>contexte</strong> et
          le <strong>déclencheur</strong> à utiliser.
        </p>
        <div className="mt-6 flex flex-col gap-5">
          <Recipe tag="Comportement · on_field_change" title="Congés — calcul auto & contrôle du solde" goal="Motif conditionnel, jours ouvrés calculés, blocage au-delà du solde.">
            <Pre>{`const type = getValue('type_conge')
if (type === 'exceptionnel') { show('motif'); setRequired('motif', true) }
else { hide('motif'); setRequired('motif', false) }

const nb = lib.businessDays(getValue('date_debut'), getValue('date_fin'))
setValue('nombre_jours', nb ?? 0)

const solde = Number(getValue('solde_conges') || 0)
if (nb !== null && nb > solde) {
  setError('date_fin', 'Solde insuffisant : ' + nb + ' demandés, ' + solde + ' disponibles')
} else clearError('date_fin')`}</Pre>
          </Recipe>

          <Recipe tag="Comportement · on_field_change" title="Note de frais — total dynamique & plafond" goal="Sommer des lignes, afficher le total, signaler un dépassement par catégorie.">
            <Pre>{`const lignes = JSON.parse(getValue('lignes_frais') || '[]')
setValue('total', lib.sumBy(lignes, 'montant'))
setMessage('total', lib.currency(lib.sumBy(lignes, 'montant')) + ' sur ' + lignes.length + ' ligne(s)')

const repas = (lib.groupBy(lignes, l => l.categorie).repas) || []
if (repas.length && lib.sumBy(repas, 'montant') > 50) setError('lignes_frais', 'Plafond repas dépassé')
else clearError('lignes_frais')`}</Pre>
          </Recipe>

          <Recipe tag="Comportement · async" title="Enrichir via un connecteur (SIREN → raison sociale)" goal="Appeler un connecteur et exploiter son résultat en sécurité.">
            <Pre>{`const siren = String(getValue('siren') || '').replace(/\\s/g, '')
if (siren.length === 9) {
  const res = await callConnector('annuaire-entreprises-uuid', { siren })
  const nom = lib.get(res, 'body.results.0.nom_complet', null)
  if (nom) { setValue('raison_sociale', nom); clearError('siren') }
  else setError('siren', 'SIREN introuvable')
}`}</Pre>
          </Recipe>

          <Recipe tag="Condition de transition" title="« Clôturer » visible seulement si tout est réglé" goal="Masquer le bouton tant qu’il reste des dossiers liés en attente.">
            <Pre>{`const factures = await getIssuesByTemplate('Facture fournisseur', {
  status: 'À payer', search: getCurrentIssue().reference, limit: 50,
})
return factures.length === 0   // false → bouton masqué`}</Pre>
          </Recipe>

          <Recipe tag="Post-fonction · before_transition" title="Escalade d’assignation selon le montant" goal="Router vers le bon rôle en fonction d’un seuil.">
            <Pre>{`const montant = Number(getValue('montant') || 0)
setAssigneeByRole(montant > 5000 ? 'direction' : 'manager')
await addComment('Demande de ' + lib.currency(montant) + ' routée automatiquement.')`}</Pre>
          </Recipe>

          <Recipe tag="Post-fonction · after_transition" title="Mettre à jour un dossier lié (budget parent)" goal="Décrémenter le budget d’un dossier « Projet » à la validation.">
            <Pre>{`const ref = getValue('projet_ref')
const projet = await getIssueByKey(ref)
if (projet) {
  const budget = Number(lib.get(projet, 'fields_data.budget_restant', 0))
  await updateIssue(ref, { budget_restant: Math.max(0, budget - Number(getValue('montant') || 0)) })
}`}</Pre>
          </Recipe>
        </div>
      </>
    ),
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'require',
    label: 'require() & catalogue',
    terms: 'require lib catalogue module enabled_libs activation import',
    body: (
      <>
        <p className="text-ink-500">
          <C>require(name)</C> est le <strong>seul</strong> moyen d’importer un module — jamais depuis
          une URL. Deux niveaux :
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-ink-600">
          <li><C>require('lib')</C> — la bibliothèque maison, <strong>toujours disponible</strong>, sans activation.</li>
          <li><strong>Catalogue optionnel</strong> — modules maison spécifiques, <strong>activables par processus</strong>. Un <C>require('x')</C> non activé lève une erreur explicite.</li>
        </ol>
        <Note>État actuel : le catalogue est vide — seul <C>require('lib')</C> est exploitable aujourd’hui. L’ajout d’un module se fait par l’équipe plateforme (code pur, sans dépendance, bundlé au build).</Note>
      </>
    ),
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'matrix',
    label: 'Matrice des API',
    terms: 'matrice quelle fonction contexte comportements conditions post-fonctions récapitulatif disponibilité',
    body: (
      <>
        <p className="text-ink-500">Récapitulatif de la disponibilité de chaque capacité par contexte.</p>
        <Table
          head={['Capacité', 'Comportements', 'Conditions', 'Post-fonctions']}
          rows={(() => {
            const y = <span className="font-bold text-gold-600">✓</span>;
            const n = <span className="text-ink-300">—</span>;
            return [
              [<C>getValue</C>, y, y, y],
              ['écrire un champ', <C>setValue</C>, n, <C>setField</C>],
              [<C>show/hide/setRequired/disable/enable</C>, y, n, n],
              [<C>setError/setMessage</C>, y, n, n],
              [<C>show/hideTransition</C>, y, n, n],
              [<><C>return false</C> masque le bouton</>, n, y, n],
              [<C>getAssignee</C>, y, y, n],
              [<C>setAssignee/setAssigneeByRole</C>, y, n, y],
              [<C>getRoles/getMembers/getCurrentUser</C>, y, y, y],
              [<C>getCurrentIssue/getIssueByKey/getIssuesByTemplate</C>, y, y, y],
              [<><C>updateIssue</C> · <C>addComment</C> · <C>sendEmail</C></>, y, n, y],
              [<C>callConnector</C>, y, y, y],
              [<>BO : <C>searchBoInstances/getBoInstance</C></>, y, y, y],
              [<>BO : <C>setBoField/updateBoInstance/createBoInstance</C></>, y, n, y],
              [<><C>lib</C> · <C>log</C></>, y, y, y],
            ];
          })()}
        />
      </>
    ),
  },
];

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export function DocumentationPage() {
  const c = useContent();
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () => SECTIONS.filter((s) => q === '' || s.label.toLowerCase().includes(q) || s.terms.toLowerCase().includes(q)),
    [q],
  );

  return (
    <>
      <Seo page="documentation" title={c.meta.documentation.title} description={c.meta.documentation.description} />

      <PageHero
        eyebrow="Documentation technique"
        title="Automatiser vos processus avec bxChange"
        subtitle="La référence complète des points d’extension du moteur workflow : bibliothèque lib, comportements, conditions, post-fonctions et appel de connecteurs — chaque fonction documentée, avec exemples."
      />

      <section className="py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[230px_1fr] lg:items-start">
          {/* Sommaire */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gold-600">Sommaire</p>
              <nav className="flex flex-col gap-1">
                {visible.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-lg px-3 py-1.5 text-sm text-ink-500 transition-colors hover:bg-gold/[0.08] hover:text-navy-900"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Contenu */}
          <div className="min-w-0">
            <div className="relative mb-8">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher une fonction… (ex. businessDays, callConnector, setError)"
                aria-label="Rechercher dans la documentation"
                className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-10 pr-4 text-sm text-navy-900 shadow-card placeholder:text-ink-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
              {q !== '' && (
                <p className="mt-2 text-xs text-ink-400">
                  {visible.length} {visible.length > 1 ? 'sections correspondent' : 'section correspond'} à « {query.trim()} »
                </p>
              )}
            </div>

            {visible.length === 0 ? (
              <div className="rounded-xl border border-dashed border-ink-200 bg-ink-50 p-10 text-center text-ink-500">
                Aucun résultat. Essaie <C>businessDays</C>, <C>connecteur</C>, <C>assignation</C> ou <C>validation</C>.
              </div>
            ) : (
              <div className="flex flex-col gap-16">
                {visible.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="mb-3 flex items-center gap-3 text-2xl font-bold text-navy-900">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold/15 to-gold/5 text-gold-600 ring-1 ring-gold/25">
                        <span className="text-sm font-bold">§</span>
                      </span>
                      {s.label}
                    </h2>
                    {s.body}
                  </section>
                ))}
              </div>
            )}

            <div className="mt-16 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-[#F8F2E6] to-white p-6 shadow-card">
              <Icons.mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <div>
                <h3 className="font-bold text-navy-900">Un cas non couvert ?</h3>
                <p className="mt-1 text-sm text-ink-500">
                  Cette référence vise l’exhaustivité. S’il manque un exemple ou une précision,
                  dites-le nous — nous complétons la documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

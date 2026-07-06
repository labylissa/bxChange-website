import { useMemo, useRef, useState, type ReactNode } from 'react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/ui';
import { Icons } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';

/* ------------------------------------------------------------------ */
/* Petits composants de mise en forme (charte warm minimal)            */
/* ------------------------------------------------------------------ */

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
              {r.map((c, j) => (
                <td key={j} className="border-t border-ink-100 px-4 py-2.5 align-top text-ink-600">
                  {c}
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
  const styles =
    tone === 'warn'
      ? 'border-gold/50 bg-gold/[0.07]'
      : 'border-gold/30 bg-gold/[0.05]';
  return (
    <div className={`my-4 flex gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed text-ink-600 ${styles}`}>
      <span className="mt-0.5 shrink-0 font-bold text-gold-600">{tone === 'warn' ? '⚠' : '▸'}</span>
      <div>{children}</div>
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

/* ------------------------------------------------------------------ */
/* Contenu — référence de scripting (dev / admins de processus)        */
/* ------------------------------------------------------------------ */

interface DocSection {
  id: string;
  label: string;
  terms: string;
  body: ReactNode;
}

const SECTIONS: DocSection[] = [
  {
    id: 'contexts',
    label: 'Points d’extension',
    terms: 'comportements behaviours conditions post-fonctions transition on_form_load on_field_change on_case_load before after javascript',
    body: (
      <>
        <p className="text-ink-500">
          Le moteur workflow expose <strong>trois points d’extension en JavaScript</strong>, exécutés
          côté navigateur dans un bac à sable. Chaque contexte reçoit un jeu de fonctions injectées, la
          bibliothèque maison <C>lib</C> et <C>require()</C>.
        </p>
        <Table
          head={['Contexte', 'Déclencheurs', 'Rôle']}
          rows={[
            [
              <strong>Comportements de formulaire</strong>,
              <><C>on_form_load</C>, <C>on_field_change</C>, <C>on_case_load</C></>,
              'Piloter dynamiquement le formulaire : visibilité, obligation, valeurs, validation, visibilité des boutons de transition.',
            ],
            [
              <strong>Conditions de transition</strong>,
              'À l’affichage du dossier',
              <>Décider si le <strong>bouton de transition est visible</strong> (<C>return false</C> = masqué).</>,
            ],
            [
              <strong>Post-fonctions</strong>,
              <><C>before_transition</C>, <C>after_transition</C></>,
              'Effet de bord après le franchissement : assignation, MAJ de champs / dossiers, connecteurs, e-mails, commentaires.',
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: 'sandbox',
    label: 'Exécution & sécurité',
    terms: 'sandbox sécurité async await fetch window document eval function csp réseau connect-src dépendance npm',
    body: (
      <>
        <p className="text-ink-500">
          Les scripts sont compilés en fonctions asynchrones (support de <C>await</C>) avec un préambule
          de durcissement. Bon à savoir avant d’écrire un script :
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-600">
          <li>
            Pas d’accès réseau direct, DOM, ni timers : <C>window</C>, <C>document</C>, <C>fetch</C>,{' '}
            <C>XMLHttpRequest</C>, <C>localStorage</C>, <C>setTimeout</C>… sont neutralisés.
          </li>
          <li>
            <C>Function</C> et <C>eval</C> sont désactivés ; les motifs <C>.constructor</C>,{' '}
            <C>__proto__</C>, <C>.prototype</C> sont rejetés.
          </li>
          <li>
            Les seuls appels réseau possibles passent par les <strong>helpers injectés</strong> (qui
            appellent l’API bxChange authentifiée) — par exemple <C>callConnector</C> ou{' '}
            <C>getIssuesByTemplate</C>.
          </li>
        </ul>
        <Note>
          Toute la bibliothèque est <strong>code maison, sans dépendance externe</strong>. On n’importe
          jamais depuis une URL — on utilise <C>lib</C> et <C>require()</C>.
        </Note>
      </>
    ),
  },
  {
    id: 'lib',
    label: 'Bibliothèque lib',
    terms: 'lib businessDays parseDate formatDate today addDays diffDays diffMonths daysBetween isWeekend groupBy sumBy sortBy uniq get currency number round clamp percent slugify isEmail isPhone isEmpty isNumeric dates collections format validation',
    body: (
      <>
        <p className="text-ink-500">
          Disponible dans les 3 contextes (comme <C>lib</C>, ou via <C>require('lib')</C>). 100 % pure et
          tolérante aux entrées invalides — retourne <C>''</C> / <C>null</C> / <C>0</C> plutôt que de
          lever. À la manière de dayjs + lodash, mais maison.
        </p>

        <h3 className="mt-8 text-lg font-bold text-navy-900">Dates</h3>
        <p className="mt-1 text-sm text-ink-500">
          Parsing multi-format (<C>parseDate</C>) : ISO <C>YYYY-MM-DD</C>, ISO avec heure,{' '}
          <C>YYYYMMDD</C>, FR <C>DD/MM/YYYY</C> · <C>DD-MM-YYYY</C> · <C>DD.MM.YYYY</C>. Toute fonction
          qui renvoie une date renvoie une string ISO.
        </p>
        <Table
          head={['Signature', 'Description']}
          rows={[
            [<C>parseDate(date)</C>, <>Parse en <C>Date</C> locale ; <C>null</C> si invalide.</>],
            [<C>formatDate(date, fmt?)</C>, <><C>'iso'</C> (défaut) ou <C>'fr'</C> ; <C>''</C> si invalide.</>],
            [<C>today()</C>, 'Date du jour (ISO).'],
            [<><C>addDays(date, n)</C> · <C>subDays</C></>, 'Ajoute / retire n jours (n<0 possible).'],
            [<C>addMonths(date, n)</C>, 'Ajoute / retire n mois.'],
            [<C>diffDays(a, b)</C>, <>Différence en jours calendaires <C>b − a</C> (minuit à minuit).</>],
            [<C>diffMonths(a, b)</C>, 'Différence en mois entiers.'],
            [<C>businessDays(start, end)</C>, <><strong>Jours ouvrés (lun–ven), bornes incluses.</strong> N’exclut pas les jours fériés.</>],
            [<C>daysBetween(start, end)</C>, <>Jours calendaires bornes incluses (= <C>diffDays + 1</C>).</>],
            [<><C>isBefore</C> · <C>isAfter</C> · <C>isSameDay</C></>, 'Comparaisons au jour.'],
            [<><C>isWeekend(date)</C> · <C>dayOfWeek(date)</C></>, '0 = dimanche … 6 = samedi.'],
            [<><C>startOfMonth</C> · <C>endOfMonth</C></>, 'Premier / dernier jour du mois (ISO).'],
          ]}
        />
        <Pre>{`lib.businessDays('2026-07-06', '2026-07-10')  // → 5 (lun→ven)
lib.businessDays('2026-07-04', '2026-07-06')  // → 1 (sam+dim exclus)
lib.addDays(lib.today(), 30)                  // → échéance J+30 en ISO`}</Pre>
        <Note>
          <C>businessDays</C> ne connaît pas les jours fériés : pour un calcul « ouvrés hors fériés »,
          soustraire manuellement les fériés connus.
        </Note>

        <h3 className="mt-8 text-lg font-bold text-navy-900">Collections (façon lodash)</h3>
        <p className="mt-1 text-sm text-ink-500">
          L’itératee <C>key</C> accepte une string (<C>'montant'</C>) ou une fonction (<C>x =&gt; x.montant</C>).
        </p>
        <Table
          head={['Signature', 'Description']}
          rows={[
            [<><C>groupBy</C> · <C>keyBy</C> · <C>countBy</C></>, 'Regroupe / indexe / compte par clé.'],
            [<C>sortBy(arr, key)</C>, 'Tri ascendant (copie, non mutant).'],
            [<><C>uniq</C> · <C>uniqBy(arr, key)</C></>, 'Déduplique (identité / par clé).'],
            [<><C>sumBy</C> · <C>meanBy</C> · <C>maxBy</C> · <C>minBy</C></>, 'Agrégats (valeurs non numériques → 0).'],
            [<><C>chunk(arr, size)</C> · <C>range(start, end?, step?)</C></>, 'Découpe en paquets ; suite numérique.'],
            [<C>get(obj, path, def?)</C>, <>Accès sûr par chemin : <C>lib.get(o, 'a.b.0.c', 'defaut')</C>.</>],
          ]}
        />
        <Pre>{`const lignes = JSON.parse(getValue('lignes_frais') || '[]')
lib.sumBy(lignes, 'montant')            // total
lib.groupBy(lignes, l => l.categorie)   // { transport: [...], repas: [...] }`}</Pre>

        <h3 className="mt-8 text-lg font-bold text-navy-900">
          Format &amp; nombres <span className="text-sm font-normal text-ink-400">(locale fr-FR)</span>
        </h3>
        <Table
          head={['Signature', 'Exemple →']}
          rows={[
            [<C>currency(n, code?)</C>, <><C>lib.currency(1234.5)</C> → <C>1 234,50 €</C></>],
            [<C>number(n, decimals?)</C>, <><C>lib.number(1234.5, 2)</C> → <C>1 234,50</C></>],
            [<><C>round(n, dec?)</C> · <C>clamp(n, min, max)</C></>, <><C>lib.clamp(150, 0, 100)</C> → <C>100</C></>],
            [<C>percent(n, dec?)</C>, <><C>lib.percent(0.75)</C> → <C>75 %</C></>],
            [<><C>capitalize</C> · <C>truncate</C> · <C>slugify</C></>, <><C>lib.slugify('Été à Paris!')</C> → <C>ete-a-paris</C></>],
          ]}
        />

        <h3 className="mt-8 text-lg font-bold text-navy-900">Validation</h3>
        <Table
          head={['Signature', 'Description']}
          rows={[
            [<><C>isEmail(s)</C> · <C>isPhone(s)</C></>, 'Format e-mail ; téléphone (6–30 car.).'],
            [<C>isEmpty(v)</C>, <><C>null</C> / <C>''</C> / <C>'[]'</C> / <C>[]</C> / <C>{'{}'}</C> → vrai.</>],
            [<C>isNumeric(v)</C>, 'Nombre ou string numérique.'],
          ]}
        />
      </>
    ),
  },
  {
    id: 'behaviours',
    label: 'Comportements de formulaire',
    terms: 'comportements getValue setValue show hide setRequired disable enable setError clearError setMessage showTransition hideTransition getAssignee setAssignee setAssigneeByRole getRoles getMembers getCurrentUser getCurrentIssue getIssueByKey getIssuesByTemplate updateIssue addComment sendEmail objet métier bo callConnector',
    body: (
      <>
        <p className="text-ink-500">
          Le contexte le plus riche. Un comportement a un déclencheur (<C>on_form_load</C>,{' '}
          <C>on_field_change</C> — filtrable sur un champ, <C>on_case_load</C>).
        </p>
        <Note>
          Les champs de type <strong>Objet métier</strong> sont pré-résolus :{' '}
          <C>getValue('vehicule')</C> retourne l’objet complet (pas l’UUID), permettant{' '}
          <C>getValue('vehicule').marque</C>. <C>setValue</C> renormalise en UUID pour le backend.
        </Note>

        <h4 className="mt-6 text-sm font-bold text-ink-700">Champs — lecture / écriture &amp; affichage</h4>
        <Table
          head={['Fonction', 'Effet']}
          rows={[
            [<C>getValue(key)</C>, <>Valeur courante (objet complet pour un champ BO). <C>''</C> si absent.</>],
            [<C>setValue(key, value)</C>, 'Fixe la valeur (objet BO → UUID ; tableau d’objets → tableau d’UUID).'],
            [<><C>show(key)</C> · <C>hide(key)</C></>, 'Affiche / masque le champ.'],
            [<C>setRequired(key, bool)</C>, 'Rend obligatoire / optionnel.'],
            [<><C>disable(key)</C> · <C>enable(key)</C></>, 'Grise (visible, non éditable) / réactive.'],
          ]}
        />

        <h4 className="mt-6 text-sm font-bold text-ink-700">Validation, messages &amp; transitions</h4>
        <Table
          head={['Fonction', 'Effet']}
          rows={[
            [<C>setError(key, message)</C>, <>Marque le champ invalide → <strong>bloque la soumission</strong>.</>],
            [<><C>clearError(key)</C></>, 'Efface l’erreur.'],
            [<><C>setMessage(key, msg)</C> · <C>clearMessage(key)</C></>, 'Message informatif (non bloquant) sous le champ.'],
            [<><C>showTransition(nameOrId)</C> · <C>hideTransition(nameOrId)</C></>, <>Affiche / masque un bouton de transition (<C>on_case_load</C>).</>],
          ]}
        />

        <h4 className="mt-6 text-sm font-bold text-ink-700">Assignation, rôles &amp; contexte dossier</h4>
        <Table
          head={['Fonction', 'Effet']}
          rows={[
            [<C>getAssignee()</C>, <>Assigné courant <C>{'{ type, id, name }'}</C> ou <C>null</C>.</>],
            [<C>setAssignee(userId | null)</C>, 'Assigne à un utilisateur (UUID) ; null = désassigne.'],
            [<C>setAssigneeByRole(slugOrName)</C>, 'Assigne à un rôle workflow.'],
            [<><C>getRoles()</C> · <C>getMembers()</C> · <C>getCurrentUser()</C></>, 'Rôles workflow ; membres du tenant ; utilisateur connecté.'],
            [<C>getCurrentIssue()</C>, <>Métadonnées du dossier <C>{'{ id, reference, status, priority, title }'}</C>.</>],
            [<><C>getIssueByKey(ref)</C> · <C>getIssuesByTemplate(name, filters?)</C></>, <><em>async</em> — recherche un dossier / liste par template.</>],
            [<C>updateIssue(ref, fieldsData)</C>, <><em>async</em> — MAJ partielle d’un autre dossier.</>],
            [<><C>addComment(text)</C> · <C>sendEmail(id)</C></>, <><em>async</em> — commente le dossier ; met en file une notification e-mail.</>],
          ]}
        />

        <h4 className="mt-6 text-sm font-bold text-ink-700">
          Objets métier, connecteurs &amp; utilitaires <span className="font-normal text-ink-400">(async sauf mention)</span>
        </h4>
        <Table
          head={['Fonction', 'Effet']}
          rows={[
            [<C>setBoField(key, instanceId | null)</C>, 'Affecte un champ BO par UUID d’instance.'],
            [<C>searchBoInstances(typeName, query?, limit?)</C>, <>Recherche d’instances (défaut <C>limit = 20</C>).</>],
            [<><C>getBoInstance</C> · <C>updateBoInstance</C> · <C>createBoInstance</C></>, 'Récupère / met à jour / crée une instance.'],
            [<C>callConnector(connectorId, params?)</C>, <>Exécute un connecteur bxChange (<C>null</C> sur erreur).</>],
            [<><C>setMemberAttributes</C> · <C>updateUserAttribute(userId, key, value)</C></>, 'Attributs de profil workflow (remplace tout / MAJ d’un seul).'],
            [<><C>log(...args)</C> · <C>lib</C> · <C>require(name)</C></>, 'Trace de debug ; bibliothèque maison ; import sécurisé.'],
          ]}
        />
        <Pre>{`// on_field_change sur 'type_contrat' : champ conditionnel requis
if (getValue('type_contrat') === 'CDD') {
  show('date_fin'); setRequired('date_fin', true)
} else {
  hide('date_fin'); setRequired('date_fin', false)
}

// Validation métier : plafond de jours ouvrés
const nb = lib.businessDays(getValue('date_debut'), getValue('date_fin'))
if (nb !== null && nb > 25) setError('date_fin', 'Maximum 25 jours ouvrés')
else setValue('nombre_jours', nb)`}</Pre>
      </>
    ),
  },
  {
    id: 'conditions',
    label: 'Conditions de transition',
    terms: 'conditions condition_script return false visible masqué fail open lecture seule déclaratif backend field_condition connector_result',
    body: (
      <>
        <p className="text-ink-500">
          Un petit script évalué côté client à l’affichage du dossier, qui décide si le bouton de
          transition apparaît.
        </p>
        <Note>
          <strong>Sémantique du retour :</strong> <C>return false</C> → bouton masqué. <C>true</C> /{' '}
          <C>undefined</C> / toute autre valeur → visible. Une erreur du script → <strong>fail open</strong>{' '}
          (visible). Un script vide = visible.
        </Note>
        <p className="text-ink-600">
          API injectée en <strong>lecture seule</strong> (aucun effet de bord) : <C>getValue</C>,{' '}
          <C>getCurrentUser</C>, <C>getAssignee</C>, <C>getRoles</C>, <C>getMembers</C>,{' '}
          <C>getCurrentIssue</C>, <C>getIssueByKey</C>, <C>getIssuesByTemplate</C>, <C>callConnector</C>,{' '}
          <C>searchBoInstances</C>, <C>getBoInstance</C>, <C>lib</C>, <C>log</C>.
        </p>
        <Pre>{`// "Clôturer" visible seulement si soldé ET gestionnaire
const solde = Number(getValue('montant_restant') || 0)
const me = getCurrentUser()
return solde === 0 && !!me && me.wf_role_names.includes('Gestionnaire')`}</Pre>
        <Note tone="warn">
          À ne pas confondre : le script gouverne la <strong>visibilité du bouton</strong>. Le moteur
          garde le <strong>franchissement réel</strong> via des conditions déclaratives (opérateurs{' '}
          <C>eq</C>, <C>gt</C>, <C>in</C>, <C>eq_current_user</C>…) et refuse la transition si elle
          n’est pas satisfaite.
        </Note>
      </>
    ),
  },
  {
    id: 'postfn',
    label: 'Post-fonctions',
    terms: 'post-fonctions setField setAssignee before_transition after_transition persisté assignation commentaire sendEmail',
    body: (
      <>
        <p className="text-ink-500">
          Effets de bord attachés à une transition. Après exécution, les champs modifiés (<C>setField</C>)
          sont persistés et l’assignation appliquée.
        </p>
        <Note tone="warn">
          <strong>Runtime actuel :</strong> après confirmation, <strong>toutes les post-fonctions
          actives</strong> de la transition s’exécutent après le franchissement (filtrage sur l’état
          « actif », pas sur before/after).
        </Note>
        <p className="text-ink-600">
          Différences avec les comportements : l’écriture de champ est <C>setField(key, value)</C> (et non{' '}
          <C>setValue</C>) ; pas de <C>show/hide/setRequired/setError</C> (pas de formulaire vivant).
        </p>
        <p className="mt-2 text-ink-600">
          Fonctions : <C>getValue</C>, <C>setField</C>, <C>setAssignee</C>, <C>setAssigneeByRole</C>,{' '}
          <C>getRoles</C>, <C>getMembers</C>, <C>getCurrentUser</C>, <C>getCurrentIssue</C>,{' '}
          <C>getIssueByKey</C>, <C>getIssuesByTemplate</C>, <C>updateIssue</C>, <C>callConnector</C>,{' '}
          <C>sendEmail</C>, <C>addComment</C>, <C>setBoField</C>, <C>searchBoInstances</C>,{' '}
          <C>getBoInstance</C>, <C>updateBoInstance</C>, <C>createBoInstance</C>,{' '}
          <C>setMemberAttributes</C>, <C>updateUserAttribute</C>, <C>lib</C>, <C>log</C>.
        </p>
        <Pre>{`// after_transition "Prendre en charge" : s'auto-assigner + horodater + notifier
const me = getCurrentUser()
if (me) {
  setAssignee(me.id)
  setField('date_prise_en_charge', lib.today())
  await addComment(\`Pris en charge par \${me.full_name || me.email}.\`)
  await sendEmail('notif-prise-en-charge-uuid')
}`}</Pre>
      </>
    ),
  },
  {
    id: 'recipes',
    label: 'Recettes concrètes',
    terms: 'exemples recettes congés note de frais total connecteur siren enrichir assignation escalade objet métier véhicule budget parent updateIssue callConnector sendEmail bonnes pratiques',
    body: (
      <>
        <p className="text-ink-500">
          Des scripts complets, prêts à adapter. Chaque recette indique le <strong>contexte</strong> et
          le <strong>déclencheur</strong> à utiliser.
        </p>

        <div className="mt-6 flex flex-col gap-5">
          <Recipe
            tag="Comportement · on_field_change"
            title="Demande de congés — calcul auto & contrôle du solde"
            goal={<>Afficher un motif conditionnel, calculer les jours ouvrés et bloquer au-delà du solde.</>}
          >
            <Pre>{`const type = getValue('type_conge')
if (type === 'exceptionnel') { show('motif'); setRequired('motif', true) }
else { hide('motif'); setRequired('motif', false) }

const nb = lib.businessDays(getValue('date_debut'), getValue('date_fin'))
setValue('nombre_jours', nb ?? 0)

const solde = Number(getValue('solde_conges') || 0)
if (nb !== null && nb > solde) {
  setError('date_fin', 'Solde insuffisant : ' + nb + ' jours demandés, ' + solde + ' disponibles')
} else {
  clearError('date_fin')
}`}</Pre>
          </Recipe>

          <Recipe
            tag="Comportement · on_field_change"
            title="Note de frais — total dynamique & plafond par catégorie"
            goal={<>Sommer des lignes saisies, afficher le total et signaler un dépassement.</>}
          >
            <Pre>{`const lignes = JSON.parse(getValue('lignes_frais') || '[]')
const total = lib.sumBy(lignes, 'montant')
setValue('total', total)
setMessage('total', lib.currency(total) + ' sur ' + lignes.length + ' ligne(s)')

const parCat = lib.groupBy(lignes, l => l.categorie)
const repas = parCat.repas || []
if (repas.length && lib.sumBy(repas, 'montant') > 50) {
  setError('lignes_frais', 'Plafond repas dépassé (50 € / jour)')
} else {
  clearError('lignes_frais')
}`}</Pre>
          </Recipe>

          <Recipe
            tag="Comportement · on_field_change (async)"
            title="Enrichir un dossier via un connecteur"
            goal={<>Appeler un connecteur pour récupérer la raison sociale à partir d’un SIREN.</>}
          >
            <Pre>{`const siren = String(getValue('siren') || '').replace(/\\s/g, '')
if (siren.length === 9) {
  const res = await callConnector('annuaire-entreprises-uuid', { siren })
  const nom = lib.get(res, 'body.results.0.nom_complet', null)
  if (nom) { setValue('raison_sociale', nom); clearError('siren') }
  else setError('siren', 'SIREN introuvable')
}`}</Pre>
            <Note><C>callConnector</C> renvoie <C>null</C> en cas d’erreur ; <C>lib.get</C> lit le résultat sans planter si le chemin est absent.</Note>
          </Recipe>

          <Recipe
            tag="Comportement · on_field_change"
            title="Objet métier — pré-remplir depuis l’instance sélectionnée"
            goal={<>Un champ « Véhicule » (objet métier) est pré-résolu : on lit ses propriétés directement.</>}
          >
            <Pre>{`const v = getValue('vehicule') // objet complet (BO pré-résolu, pas l'UUID)
if (v) {
  setValue('immatriculation', v.immatriculation)
  setValue('cout_journalier', v.tarif_jour)
}`}</Pre>
          </Recipe>

          <Recipe
            tag="Comportement · on_case_load"
            title="Masquer un bouton selon le rôle"
            goal={<>N’exposer « Valider » qu’aux membres du rôle workflow « Manager ».</>}
          >
            <Pre>{`const me = getCurrentUser()
if (!me || !me.wf_role_names.includes('Manager')) hideTransition('Valider')`}</Pre>
          </Recipe>

          <Recipe
            tag="Condition de transition"
            title="N’afficher « Clôturer » que si tout est réglé"
            goal={<>Le bouton reste masqué tant qu’il existe des dossiers liés en attente.</>}
          >
            <Pre>{`const factures = await getIssuesByTemplate('Facture fournisseur', {
  status: 'À payer',
  search: getCurrentIssue().reference,
  limit: 50,
})
return factures.length === 0   // false → bouton masqué`}</Pre>
          </Recipe>

          <Recipe
            tag="Post-fonction · after_transition"
            title="Prendre en charge — s’auto-assigner, horodater, notifier"
            goal={<>Enchaîner assignation, mise à jour de champ, commentaire et e-mail.</>}
          >
            <Pre>{`const me = getCurrentUser()
if (me) {
  setAssignee(me.id)
  setField('date_prise_en_charge', lib.today())
  await addComment('Pris en charge par ' + (me.full_name || me.email) + '.')
  await sendEmail('notif-prise-en-charge-uuid')
}`}</Pre>
          </Recipe>

          <Recipe
            tag="Post-fonction · before_transition"
            title="Escalade automatique selon le montant"
            goal={<>Router l’assignation vers le bon rôle en fonction d’un seuil.</>}
          >
            <Pre>{`const montant = Number(getValue('montant') || 0)
setAssigneeByRole(montant > 5000 ? 'direction' : 'manager')
await addComment('Demande de ' + lib.currency(montant) + ' routée automatiquement.')`}</Pre>
          </Recipe>

          <Recipe
            tag="Post-fonction · after_transition"
            title="Mettre à jour un dossier lié"
            goal={<>Décrémenter le budget d’un dossier « Projet » parent à la validation.</>}
          >
            <Pre>{`const ref = getValue('projet_ref')
const projet = await getIssueByKey(ref)
if (projet) {
  const budget = Number(lib.get(projet, 'fields_data.budget_restant', 0))
  const reste = Math.max(0, budget - Number(getValue('montant') || 0))
  await updateIssue(ref, { budget_restant: reste })
}`}</Pre>
          </Recipe>
        </div>

        <h3 className="mt-10 text-lg font-bold text-navy-900">Bonnes pratiques</h3>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-ink-600">
          <li>Toujours prévoir les valeurs vides : <C>getValue</C> renvoie <C>''</C> si le champ est absent — encadrer avec <C>Number(x || 0)</C> ou <C>JSON.parse(x || '[]')</C>.</li>
          <li><C>businessDays</C> et les <C>diff*</C> renvoient <C>null</C> sur date invalide — tester <C>!== null</C> avant d’écrire un résultat.</li>
          <li>Les fonctions marquées <em>async</em> (<C>callConnector</C>, <C>getIssueByKey</C>, <C>updateIssue</C>, <C>sendEmail</C>, <C>addComment</C>…) s’utilisent avec <C>await</C>.</li>
          <li>Dans une <strong>condition</strong>, un <C>return false</C> masque le bouton ; toute erreur laisse le bouton visible (fail open) — ne pas compter dessus pour un contrôle de sécurité (le franchissement reste gardé côté serveur).</li>
          <li>Utiliser <C>setMessage</C> pour informer (non bloquant) et <C>setError</C> pour empêcher la soumission.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'require',
    label: 'require() & catalogue',
    terms: 'require lib catalogue module enabled_libs activation',
    body: (
      <>
        <p className="text-ink-500">
          <C>require(name)</C> est le seul moyen d’importer un module — jamais depuis une URL externe.
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-ink-600">
          <li>
            <C>require('lib')</C> — la bibliothèque maison, <strong>toujours disponible</strong>, sans
            activation.
          </li>
          <li>
            <strong>Catalogue optionnel</strong> — modules maison plus spécifiques, activables par
            processus. Un <C>require('x')</C> non activé lève une erreur explicite.
          </li>
        </ol>
        <Note>
          État actuel : le catalogue est vide — seul <C>require('lib')</C> est exploitable aujourd’hui.
        </Note>
      </>
    ),
  },
  {
    id: 'matrix',
    label: 'Matrice des API',
    terms: 'matrice quelle fonction contexte comportements conditions post-fonctions récapitulatif',
    body: (
      <>
        <p className="text-ink-500">Quelle fonction est disponible dans quel contexte.</p>
        <Table
          head={['Capacité', 'Comportements', 'Conditions', 'Post-fonctions']}
          rows={(() => {
            const y = <span className="font-bold text-gold-600">✓</span>;
            const n = <span className="text-ink-300">—</span>;
            return [
              [<C>getValue</C>, y, y, y],
              ['écrire un champ', <C>setValue</C>, n, <C>setField</C>],
              [<C>show/hide/setRequired/disable/enable</C>, y, n, n],
              [<C>setError/setMessage</C> as ReactNode, y, n, n],
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
              [<><C>lib</C> (dont <C>businessDays</C>) · <C>log</C></>, y, y, y],
            ];
          })()}
        />
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function DocumentationPage() {
  const c = useContent();
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      SECTIONS.filter(
        (s) => q === '' || s.label.toLowerCase().includes(q) || s.terms.toLowerCase().includes(q),
      ),
    [q],
  );

  return (
    <>
      <Seo page="documentation" title={c.meta.documentation.title} description={c.meta.documentation.description} />

      <PageHero
        eyebrow="Documentation technique"
        title="Automatiser vos processus avec bxChange"
        subtitle="La référence des points d’extension du moteur workflow : bibliothèque lib, comportements de formulaire, conditions, post-fonctions et appel de connecteurs."
      />

      <section className="py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
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
            {/* Recherche */}
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
                placeholder="Rechercher une fonction… (ex. businessDays, callConnector, setAssignee)"
                aria-label="Rechercher dans la documentation"
                className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-10 pr-4 text-sm text-navy-900 shadow-card placeholder:text-ink-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
              {q !== '' && (
                <p className="mt-2 text-xs text-ink-400">
                  {visible.length}{' '}
                  {visible.length > 1 ? 'sections correspondent' : 'section correspond'} à « {query.trim()} »
                </p>
              )}
            </div>

            {visible.length === 0 ? (
              <div className="rounded-xl border border-dashed border-ink-200 bg-ink-50 p-10 text-center text-ink-500">
                Aucun résultat. Essaie <C>businessDays</C>, <C>connecteur</C>, <C>assignation</C> ou <C>validation</C>.
              </div>
            ) : (
              <div className="flex flex-col gap-14">
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

            {/* Aide */}
            <div className="mt-16 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-[#F8F2E6] to-white p-6 shadow-card">
              <Icons.mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <div>
                <h3 className="font-bold text-navy-900">Une question sur un cas d’usage ?</h3>
                <p className="mt-1 text-sm text-ink-500">
                  Notre équipe accompagne vos administrateurs de processus. Écrivez-nous et nous vous
                  aidons à modéliser votre workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

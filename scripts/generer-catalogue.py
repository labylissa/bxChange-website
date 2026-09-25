# -*- coding: utf-8 -*-
"""Engendre le catalogue du site depuis le portefeuille livré avec le produit.

Le site listait 24 processus écrits à la main sous un « plus de 20 » ; le
portefeuille en compte 71. Un catalogue rédigé à part de sa source diverge dès
la première livraison — ici il avait déjà divergé d'un facteur trois, et le
chiffre affiché était faux.

Les noms, les catégories et les ÉTAPES viennent désormais des fichiers
`.bxflow` : ce que le site annonce est exactement ce que le produit installe.

## Ce que ce fichier engendre depuis la relecture SEO

Le catalogue ne portait que les trois premières étapes de chaque processus
(pour la carte) : la page processus, elle, doit montrer le déroulé COMPLET
(étapes terminales incluses), les transitions réelles et les rôles. Ces trois
tables viennent donc s'ajouter à chaque entrée (`allSteps`, `transitions`,
`roles`), sans toucher aux champs existants (`steps`, `stepCount`,
`roleCount`) dont la carte du catalogue dépend déjà.

Le slug n'est plus dérivé du NOM (accentué, donc fragile) ni du rang dans le
portefeuille (qui bouge si un `.bxflow` est inséré) : c'est le nom de fichier
sans son préfixe numérique — `18-entree-en-relation-kyc.bxflow` donne
`entree-en-relation-kyc`. UNE FOIS PUBLIÉ, un slug ne bouge plus : si un
`.bxflow` est un jour renommé, ajouter une redirection 301 côté site plutôt
que de changer le slug qu'il porte ici.
"""
import io
import json
import os
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from catalogue_en import ROLES as ROLES_EN, TRANSITIONS_COMMUNES, PROCESSUS as EN  # noqa: E402

RACINE_SITE = pathlib.Path(__file__).parent.parent


def lire_langs() -> list[str]:
    """Les langues du site, LUES dans `src/i18n/index.ts`.

    Recopier la liste ici la ferait diverger : `Process.name` est un
    `Record<Lang, string>`, donc une langue ajoutee au site sans son entree ici
    ne compile plus — l'erreur est franche, mais elle arrive apres coup. Lire la
    source fait que le generateur suit le site sans qu'on y pense.
    """
    source = (RACINE_SITE / "src" / "i18n" / "index.ts").read_text(encoding="utf-8")
    bloc = re.search(r"export const SUPPORTED_LANGS\s*=\s*\[([^\]]*)\]\s*as const", source)
    if not bloc:
        raise SystemExit(
            "SUPPORTED_LANGS introuvable dans src/i18n/index.ts : le catalogue "
            "ne peut pas deviner les langues du site."
        )
    langs = re.findall(r"'([^']+)'", bloc.group(1))
    if not langs:
        raise SystemExit("SUPPORTED_LANGS lu, mais aucune langue extraite.")
    return langs


LANGS = lire_langs()

#: Une langue absente de EN recoit le FRANCAIS — meme decision que pour le
#: reste du catalogue (voir plus bas) : ne rien promettre que le produit ne
#: livre pas encore dans cette langue.
if set(LANGS) - {"fr", "en"}:
    raise SystemExit(
        f"generer-catalogue.py ne sait traduire que fr/en, SUPPORTED_LANGS "
        f"contient aussi : {sorted(set(LANGS) - {'fr', 'en'})}. Etendre "
        f"catalogue_en.py (ou un catalogue_XX.py dedie) avant de continuer."
    )

PORTEFEUILLE = pathlib.Path(
    os.environ.get("BXFLOW_PORTFOLIO",
                   pathlib.Path(__file__).parent.parent.parent
                   / "bxChange" / "backend" / "scripts" / "portfolio")
)
CIBLE = pathlib.Path(__file__).parent.parent / "src" / "data" / "processes.ts"

# Les 24 catégories du portefeuille sont trop fines pour des filtres : on
# obtiendrait des filtres à un seul élément, que personne ne clique. Sept
# familles, choisies pour que la profondeur bancaire reste visible — la
# conformité et les risques ne se noient pas dans « opérations ».
FAMILLES = {
    "RH / Administration": "rh", "RH / Cycle de vie": "rh", "RH / Finance": "rh",
    "Finance": "finance", "Trésorerie": "finance",
    "Service client": "client", "Banque": "client", "Assurance": "client",
    "Monétique": "client",
    "Achats": "achats", "Juridique / Achats": "achats",
    "Juridique": "juridique",
    "IT / Sécurité": "it", "IT": "it", "Gouvernance IT": "it",
    "Conformité / LCB-FT": "conformite", "Conformité / Déontologie": "conformite",
    "Conformité / Gouvernance": "conformite", "Conformité / Veille": "conformite",
    "Conformité / Qualité": "conformite", "Risques": "conformite",
    "Direction": "operations", "Exploitation": "operations",
    "Moyens généraux": "operations",
}

ICONES = {
    "rh": "user-plus", "finance": "wallet", "client": "handshake",
    "achats": "truck", "juridique": "file-check", "it": "plug",
    "conformite": "shield", "operations": "building",
}

# Six processus mis en avant sur l'accueil : un par famille ou presque, et
# choisis pour montrer que le catalogue va du congé à la revue KYC.
EN_AVANT = {1, 2, 18, 33, 3, 62}


def echapper(t: str) -> str:
    return t.replace("\\", "\\\\").replace("'", "\\'")


if not PORTEFEUILLE.is_dir():
    raise SystemExit(
        "portefeuille introuvable : %s -- renseignez BXFLOW_PORTFOLIO avec le "
        "chemin de backend/scripts/portfolio du produit." % PORTEFEUILLE)

donnees = []
for f in sorted(PORTEFEUILLE.glob("*.bxflow")):
    d = json.load(io.open(f, encoding="utf-8"))
    t = d.get("template", {})
    slug = re.sub(r"^\d+-", "", f.stem)
    donnees.append({
        "slug": slug,
        "nom": t.get("name", ""),
        "description": t.get("description") or "",
        "categorie": t.get("category") or "",
        "etapes": [
            {"cle": e.get("step_key", ""), "type": e.get("step_type", ""), "nom": e.get("name", "")}
            for e in d.get("steps", [])
        ],
        "transitions": [
            {
                "ref": tr.get("ref", ""),
                "de": tr.get("from_step_key", ""),
                "vers": tr.get("to_step_key", ""),
                "nom": tr.get("name", ""),
                "role": tr.get("required_role_slug"),
            }
            for tr in d.get("transitions", [])
        ],
        "roles": [{"slug": r.get("slug", ""), "nom": r.get("name", "")} for r in d.get("roles", [])],
    })

manquants = []
entrees = []

for rang, l in enumerate(donnees, start=1):
    # Une traduction manquante est signalee pour la langue de REFERENCE de la
    # table (l'anglais) : c'est la seule ou l'absence est un oubli, et non la
    # decision de laisser le francais.
    trad = EN.get(l["slug"])
    if trad is None:
        manquants.append(l["slug"])
        continue

    famille = FAMILLES.get(l["categorie"])
    if famille is None:
        raise SystemExit("catégorie non classée : %r" % l["categorie"])

    # Première proposition de la description : le reste est du détail interne
    # (« SLA 4h », « ingestion ») qui n'a pas sa place sur un site.
    desc_fr = l["description"].split(":")[0].split(".")[0].strip()
    etapes_non_terminales_fr = [e["nom"] for e in l["etapes"] if e["type"] != "end"][:3]

    # `steps` (aperçu carte) : les 3 premières étapes non terminales, comme
    # avant. `allSteps` (déroulé complet, page processus) : TOUTES les
    # étapes, terminales incluses — c'est ce qu'une page processus doit
    # montrer, et ce qu'un aperçu de carte n'a jamais eu besoin de porter.
    etapes_traduites = {
        lg: (etapes_non_terminales_fr if lg == "fr" else
             [trad["steps"][e["cle"]] for e in l["etapes"] if e["type"] != "end"][:len(etapes_non_terminales_fr)])
        for lg in LANGS
    }

    entrees.append({
        "slug": l["slug"],
        "slug_en": trad["slug_en"],
        "categorie": famille,
        "icone": ICONES[famille],
        "vedette": rang in EN_AVANT,
        "noms": {lg: (trad["name"] if lg != "fr" else l["nom"]) for lg in LANGS},
        "descriptions": {lg: (trad["description"] if lg != "fr" else desc_fr) for lg in LANGS},
        "etapes": etapes_traduites,
        "nb_etapes": len([e for e in l["etapes"] if e["type"] != "end"]),
        "nb_roles": len(l["roles"]),
        "rang": rang,
        # Déroulé complet, ordonné, avec son type — c'est le TYPE qui distingue
        # une étape terminale, jamais son nom (voir l'en-tête du fichier).
        "toutes_etapes": [
            {
                "cle": e["cle"],
                "type": e["type"],
                "noms": {lg: (e["nom"] if lg == "fr" else trad["steps"][e["cle"]]) for lg in LANGS},
            }
            for e in l["etapes"]
        ],
        # Transitions réelles du .bxflow, jamais normalisées en Valider/Rejeter :
        # « Prendre en charge », « Clôturer »... sont plus crédibles que deux
        # verbes forcés sur tout le portefeuille.
        "transitions": [
            {
                "ref": tr["ref"],
                "de": tr["de"],
                "vers": tr["vers"],
                "role": tr["role"],
                "noms": {
                    lg: (tr["nom"] if lg == "fr" else
                         TRANSITIONS_COMMUNES.get(tr["nom"]) or trad["transitions"][tr["ref"]])
                    for lg in LANGS
                },
            }
            for tr in l["transitions"]
        ],
        "roles": [
            {
                "slug": r["slug"],
                "noms": {lg: (r["nom"] if lg == "fr" else ROLES_EN[r["slug"]]) for lg in LANGS},
            }
            for r in l["roles"]
        ],
    })

# Conformité et banque/assurance en tête : ce sont les processus que personne
# d'autre ne livre prêts à l'emploi, ils ne doivent pas arriver après les congés.
ORDRE = ["conformite", "client", "finance", "operations", "achats", "it", "juridique", "rh"]
entrees.sort(key=lambda e: (ORDRE.index(e["categorie"]), e["rang"]))

if manquants:
    raise SystemExit("traductions manquantes : %s" % manquants)

lignes = ["""import type { Lang } from '@/i18n';

/**
 * Catalogue de processus — ENGENDRÉ depuis le portefeuille du produit.
 *
 * Ne pas modifier à la main : ce fichier est produit par
 * `scripts/generer-catalogue.py` à partir des fichiers `.bxflow` livrés dans
 * `backend/scripts/portfolio/` (dépôt produit) et des traductions de
 * `scripts/catalogue_en.py`. Les noms, les catégories et les étapes sont donc
 * ceux que le produit installe réellement.
 *
 * Pour AJOUTER un processus : ajoutez-le au portefeuille du produit, sa
 * traduction dans `catalogue_en.py`, puis relancez la génération.
 *
 * ## Slug
 *
 * Dérivé du nom de fichier `.bxflow` (sans son préfixe numérique), STABLE une
 * fois publié — voir l'en-tête de `scripts/generer-catalogue.py`.
 *
 * ## Comment se nomme une étape
 *
 * Une étape n'est pas une activité BPMN : c'est un STATUT. Le dossier y
 * séjourne, le délai y court, on en sort par une transition nommée. La
 * convention est donc celle des machines à états — le statut se nomme par un
 * nom ou une nominalisation disant dans quel état est le dossier
 * (« Réception de la facture », « En attente d'approbation »), la transition
 * par un verbe à l'infinitif (« Valider », « Rejeter »).
 *
 * `steps` ne porte que les 3 premières étapes non terminales (aperçu de la
 * carte du catalogue) ; `allSteps` porte le déroulé COMPLET, étapes
 * terminales incluses, pour la page processus.
 */

export const PROCESS_CATEGORIES = [
  'conformite',
  'client',
  'finance',
  'operations',
  'achats',
  'it',
  'juridique',
  'rh',
] as const;

export type ProcessCategory = (typeof PROCESS_CATEGORIES)[number];

export type StepType = 'start' | 'standard' | 'end';

export interface ProcessStep {
  key: string;
  type: StepType;
  name: Record<Lang, string>;
}

export interface ProcessTransition {
  ref: string;
  from: string;
  to: string;
  /** Rôle requis pour déclencher la transition ; `null` si aucun rôle spécifique n'est exigé. */
  role: string | null;
  name: Record<Lang, string>;
}

export interface ProcessRole {
  slug: string;
  name: Record<Lang, string>;
}

export interface Process {
  /** Identifiant stable = slug FR (voir `slug.fr`). */
  id: string;
  /** Slug par langue, pour les adresses /fr/catalogue/:slug et /en/catalog/:slug. */
  slug: Record<Lang, string>;
  category: ProcessCategory;
  /** Nom métier, tel qu'il apparaît dans le produit. */
  name: Record<Lang, string>;
  /** Une phrase compréhensible par tous. */
  description: Record<Lang, string>;
  /**
   * Les trois premières étapes du déroulé, dans l'ordre — aperçu de la carte
   * du catalogue. Les étapes terminales sont écartées : tout processus en a,
   * elles n'apprennent rien et mangeraient la place. Pour le déroulé complet,
   * voir `allSteps`.
   */
  steps: Record<Lang, string[]>;
  /** Nombre réel d'étapes du déroulé, hors étapes terminales. */
  stepCount: number;
  /** Nombre de rôles qui interviennent dans le processus. */
  roleCount: number;
  /** Nom d'icône (voir ProcessIcon). */
  icon: ProcessIconName;
  /** Mis en avant sur l'aperçu de l'accueil. */
  featured?: boolean;
  /** Déroulé complet, ordonné, étapes terminales incluses — page processus. */
  allSteps: ProcessStep[];
  /** Transitions réelles du processus, jamais normalisées en Valider/Rejeter. */
  transitions: ProcessTransition[];
  /** Rôles impliqués dans le processus (peut être vide). */
  roles: ProcessRole[];
}

export type ProcessIconName =
  | 'calendar'
  | 'receipt'
  | 'user-plus'
  | 'folder'
  | 'file-check'
  | 'clock'
  | 'shield'
  | 'inbox'
  | 'handshake'
  | 'truck'
  | 'chart'
  | 'wallet'
  | 'refresh'
  | 'clipboard'
  | 'lifebuoy'
  | 'building'
  | 'flow'
  | 'steps'
  | 'plug';

export const processes: Process[] = ["""]

for e in entrees:
    lignes.append("  {")
    lignes.append("    id: '%s'," % e["slug"])
    slugs = ", ".join("%s: '%s'" % (lg, echapper(e["slug"] if lg == "fr" else e["slug_en"])) for lg in LANGS)
    lignes.append("    slug: { %s }," % slugs)
    lignes.append("    category: '%s'," % e["categorie"])
    lignes.append("    icon: '%s'," % e["icone"])
    if e["vedette"]:
        lignes.append("    featured: true,")
    noms = ", ".join("%s: '%s'" % (lg, echapper(e["noms"][lg])) for lg in LANGS)
    lignes.append("    name: { %s }," % noms)
    lignes.append("    description: {")
    for lg in LANGS:
        lignes.append("      %s: '%s'," % (lg, echapper(e["descriptions"][lg])))
    lignes.append("    },")
    lignes.append("    steps: {")
    for lg in LANGS:
        lignes.append("      %s: [%s]," % (lg, ", ".join("'%s'" % echapper(x) for x in e["etapes"][lg])))
    lignes.append("    },")
    lignes.append("    stepCount: %d," % e["nb_etapes"])
    lignes.append("    roleCount: %d," % e["nb_roles"])
    lignes.append("    allSteps: [")
    for s in e["toutes_etapes"]:
        noms_s = ", ".join("%s: '%s'" % (lg, echapper(s["noms"][lg])) for lg in LANGS)
        lignes.append("      { key: '%s', type: '%s', name: { %s } }," % (s["cle"], s["type"], noms_s))
    lignes.append("    ],")
    lignes.append("    transitions: [")
    for tr in e["transitions"]:
        role = "null" if tr["role"] is None else "'%s'" % tr["role"]
        noms_t = ", ".join("%s: '%s'" % (lg, echapper(tr["noms"][lg])) for lg in LANGS)
        lignes.append(
            "      { ref: '%s', from: '%s', to: '%s', role: %s, name: { %s } },"
            % (tr["ref"], tr["de"], tr["vers"], role, noms_t)
        )
    lignes.append("    ],")
    lignes.append("    roles: [")
    for r in e["roles"]:
        noms_r = ", ".join("%s: '%s'" % (lg, echapper(r["noms"][lg])) for lg in LANGS)
        lignes.append("      { slug: '%s', name: { %s } }," % (r["slug"], noms_r))
    lignes.append("    ],")
    lignes.append("  },")

lignes.append("];")
lignes.append("")
lignes.append("""/**
 * L'ordre des six cartes de l'accueil, DÉCLARÉ.
 *
 * Deux processus que tout le monde reconnaît ouvrent la liste, deux dossiers
 * réglementés la ferment : la page doit se lire dans les deux sens, et une
 * entreprise qui ne fait ni KYC ni sinistre doit s'y retrouver sans que la
 * banque cesse d'y voir ses propres dossiers.
 *
 * Un identifiant ici qui ne porte pas `featured: true` serait silencieusement
 * ignoré — d'où la vérification, qui échoue au lieu de rendre une carte de moins.
 */
const ORDRE_VEDETTE = [""")
ordre_vedette_slugs = [e["slug"] for e in sorted(entrees, key=lambda e: e["rang"]) if e["vedette"]]
# L'ordre voulu sur l'accueil n'est pas l'ordre du portefeuille — recopié du
# précédent générateur (congés, note de frais, facture fournisseur, KYC,
# ticket support, agrément commerçant).
ORDRE_HOME = ["demande-de-conges", "note-de-frais", "validation-facture-fournisseur",
              "entree-en-relation-kyc", "ticket-support", "agrement-commercant"]
for slug in ORDRE_HOME:
    lignes.append("  '%s'," % slug)
lignes.append("] as const;")
lignes.append("")
lignes.append("""export function getFeaturedProcesses(): Process[] {
  const vedettes = processes.filter((p) => p.featured);
  const rang = new Map<string, number>(ORDRE_VEDETTE.map((id, i) => [id, i]));
  const manquants = ORDRE_VEDETTE.filter((id) => !vedettes.some((p) => p.id === id));
  if (manquants.length > 0) {
    throw new Error(
      `ORDRE_VEDETTE nomme des processus qui ne sont pas marqués featured : ${manquants.join(', ')}`,
    );
  }
  return vedettes.sort((a, b) => (rang.get(a.id) ?? 999) - (rang.get(b.id) ?? 999));
}

/** Retrouve un processus par son slug, dans une langue donnée. */
export function getProcessBySlug(lang: Lang, slug: string): Process | undefined {
  return processes.find((p) => p.slug[lang] === slug);
}
""")

io.open(CIBLE, "w", encoding="utf-8", newline="\n").write("\n".join(lignes))

sys.stdout.reconfigure(encoding="utf-8")
print(len(entrees), "processus engendres")
familles = {}
for e in entrees:
    familles[e["categorie"]] = familles.get(e["categorie"], 0) + 1
print("familles :", familles)
print("en avant :", sum(1 for e in entrees if e["vedette"]))

# -*- coding: utf-8 -*-
"""Engendre le catalogue du site depuis le portefeuille livré avec le produit.

Le site listait 24 processus écrits à la main sous un « plus de 20 » ; le
portefeuille en compte 71. Un catalogue rédigé à part de sa source diverge dès
la première livraison — ici il avait déjà divergé d'un facteur trois, et le
chiffre affiché était faux.

Les noms, les catégories et les ÉTAPES viennent désormais des fichiers
`.bxflow` : ce que le site annonce est exactement ce que le produit installe.
"""
import io
import json
import os
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from catalogue_en import EN  # noqa: E402

PORTEFEUILLE = pathlib.Path(
    os.environ.get("BXFLOW_PORTFOLIO",
                   pathlib.Path(__file__).parent.parent.parent
                   / "bxChange" / "backend" / "scripts" / "portfolio")
)
CIBLE = pathlib.Path(__file__).parent.parent / "src" / "data" / "processes.ts"

# Les étapes terminales n'apprennent rien sur le déroulé : tout processus peut
# être rejeté ou annulé. Les afficher mangerait les trois lignes de la carte.
TERMINALES = {"Rejeté", "Rejetée", "Annulé", "Annulée", "Refusé", "Refusée",
              "Clôturé", "Clôturée", "Rejet"}

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


def identifiant(nom: str, rang: int) -> str:
    base = "".join(c if c.isalnum() else "-" for c in nom.lower())
    base = "-".join(p for p in base.split("-") if p)
    for a, b in (("é", "e"), ("è", "e"), ("ê", "e"), ("à", "a"), ("ç", "c"),
                 ("î", "i"), ("ô", "o"), ("û", "u")):
        base = base.replace(a, b)
    return "%s-%02d" % (base[:40].strip("-"), rang)


if not PORTEFEUILLE.is_dir():
    raise SystemExit(
        "portefeuille introuvable : %s -- renseignez BXFLOW_PORTFOLIO avec le "
        "chemin de backend/scripts/portfolio du produit." % PORTEFEUILLE)

donnees = []
for f in sorted(PORTEFEUILLE.glob("*.bxflow")):
    d = json.load(io.open(f, encoding="utf-8"))
    t = d.get("template", {})
    donnees.append({
        "nom": t.get("name", ""),
        "description": t.get("description") or "",
        "categorie": t.get("category") or "",
        "etapes": [e.get("name", "") for e in d.get("steps", [])],
    })
manquants = []
entrees = []

for rang, l in enumerate(donnees, start=1):
    en = EN.get(rang)
    if en is None:
        manquants.append(rang)
        continue
    nom_en, desc_en, etapes_en = en

    famille = FAMILLES.get(l["categorie"])
    if famille is None:
        raise SystemExit("catégorie non classée : %r" % l["categorie"])

    # Première proposition de la description : le reste est du détail interne
    # (« SLA 4h », « ingestion ») qui n'a pas sa place sur un site.
    desc_fr = l["description"].split(":")[0].split(".")[0].strip()
    etapes_fr = [e for e in l["etapes"] if e not in TERMINALES][:3]

    entrees.append({
        "id": identifiant(l["nom"], rang),
        "categorie": famille,
        "icone": ICONES[famille],
        "vedette": rang in EN_AVANT,
        "nom_fr": l["nom"], "nom_en": nom_en,
        "desc_fr": desc_fr, "desc_en": desc_en,
        "etapes_fr": etapes_fr, "etapes_en": etapes_en,
    })

if manquants:
    raise SystemExit("traductions manquantes : %s" % manquants)

lignes = ["""import type { Lang } from '@/i18n';

/**
 * Catalogue de processus — ENGENDRÉ depuis le portefeuille du produit.
 *
 * Ne pas modifier à la main : ce fichier est produit par
 * `scratchpad/generer_catalogue.py` à partir des fichiers `.bxflow` livrés
 * dans `backend/scripts/portfolio/`. Les noms, les catégories et les étapes
 * sont donc ceux que le produit installe réellement.
 *
 * ## Pourquoi une génération plutôt qu'une rédaction
 *
 * Le catalogue était écrit à la main : 24 processus annoncés « plus de 20 »,
 * alors que le portefeuille en comptait 71. Un catalogue tenu à part de sa
 * source ne diverge pas un jour — il diverge tout de suite, et c'est le
 * chiffre affiché sur la page d'accueil qui devient faux.
 *
 * Pour AJOUTER un processus : ajoutez-le au portefeuille du produit, puis
 * relancez la génération.
 */

export const PROCESS_CATEGORIES = [
  'rh',
  'finance',
  'client',
  'achats',
  'juridique',
  'it',
  'conformite',
  'operations',
] as const;

export type ProcessCategory = (typeof PROCESS_CATEGORIES)[number];

export interface Process {
  id: string;
  category: ProcessCategory;
  /** Nom métier, tel qu'il apparaît dans le produit. */
  name: Record<Lang, string>;
  /** Une phrase compréhensible par tous. */
  description: Record<Lang, string>;
  /**
   * Les trois premières étapes du déroulé, dans l'ordre.
   *
   * C'est ce qui distingue un catalogue d'une liste de promesses : un acheteur
   * reconnaît son propre processus, ou constate qu'il en diffère, et sait quoi
   * demander. Les étapes terminales — rejeté, annulé — sont écartées : tout
   * processus en a, elles n'apprennent rien et mangeraient la place.
   */
  steps: Record<Lang, string[]>;
  /** Nom d'icône (voir ProcessIcon). */
  icon: ProcessIconName;
  /** Mis en avant sur l'aperçu de l'accueil. */
  featured?: boolean;
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
    lignes.append("    id: '%s'," % e["id"])
    lignes.append("    category: '%s'," % e["categorie"])
    lignes.append("    icon: '%s'," % e["icone"])
    if e["vedette"]:
        lignes.append("    featured: true,")
    lignes.append("    name: { fr: '%s', en: '%s' }," % (echapper(e["nom_fr"]), echapper(e["nom_en"])))
    lignes.append("    description: {")
    lignes.append("      fr: '%s'," % echapper(e["desc_fr"]))
    lignes.append("      en: '%s'," % echapper(e["desc_en"]))
    lignes.append("    },")
    lignes.append("    steps: {")
    lignes.append("      fr: [%s]," % ", ".join("'%s'" % echapper(x) for x in e["etapes_fr"]))
    lignes.append("      en: [%s]," % ", ".join("'%s'" % echapper(x) for x in e["etapes_en"]))
    lignes.append("    },")
    lignes.append("  },")

lignes.append("];")
lignes.append("")
lignes.append("export function getFeaturedProcesses(): Process[] {")
lignes.append("  return processes.filter((p) => p.featured);")
lignes.append("}")
lignes.append("")

io.open(CIBLE, "w", encoding="utf-8", newline="\n").write("\n".join(lignes))

sys.stdout.reconfigure(encoding="utf-8")
print(len(entrees), "processus engendres")
familles = {}
for e in entrees:
    familles[e["categorie"]] = familles.get(e["categorie"], 0) + 1
print("familles :", familles)
print("en avant :", sum(1 for e in entrees if e["vedette"]))

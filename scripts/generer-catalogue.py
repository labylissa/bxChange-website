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

# Les étapes terminales — rejeté, annulé, mais aussi « Approuvée », « Sinistre
# réglé », « Badge remis » — n'apprennent rien sur le déroulé : tout processus
# en a. Elles sont écartées par leur TYPE (`step_type == "end"`), jamais par
# leur nom.
#
# Le filtre portait sur une liste de libellés : « Approuvée », terminale de la
# demande de congés, y échappait donc, et s'affichait comme troisième étape du
# déroulé ET dans le décompte. Un filtre par nom ne peut pas suivre soixante et
# onze processus dont chacun nomme sa fin à sa façon.

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
        # (nom, type) et non le nom seul : c'est le TYPE qui dit qu'une étape
        # est terminale, et le filtrer par son libellé laissait passer tout ce
        # qui ne s'appelait pas « Rejeté » ou « Annulé ».
        "etapes": [(e.get("name", ""), e.get("step_type", "")) for e in d.get("steps", [])],
        "roles": len(d.get("roles", [])),
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
    etapes_fr = [nom for nom, type_ in l["etapes"] if type_ != "end"][:3]

    entrees.append({
        "id": identifiant(l["nom"], rang),
        "categorie": famille,
        "icone": ICONES[famille],
        "vedette": rang in EN_AVANT,
        "nom_fr": l["nom"], "nom_en": nom_en,
        "desc_fr": desc_fr, "desc_en": desc_en,
        # L'anglais est écrit à la main, toujours en trois entrées ; le
        # français est DÉRIVÉ du portefeuille et peut en compter moins quand le
        # processus n'a que deux étapes avant sa fin. Tronquer aligne les deux
        # colonnes par construction — sans quoi l'anglais affichait une étape
        # terminale que le français venait d'écarter (« Approved », congés).
        "etapes_fr": etapes_fr, "etapes_en": etapes_en[:len(etapes_fr)],
        # Le VRAI nombre d'étapes et de rôles : la carte n'en montre que trois,
        # et sans ce total, soixante et onze processus paraissaient faire trois
        # étapes chacun — une bibliothèque qui semblait mince alors qu'elle ne
        # l'est pas.
        "nb_etapes": len([nom for nom, type_ in l["etapes"] if type_ != "end"]),
        "nb_roles": l["roles"],
        "rang": rang,
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
 * D'où l'erreur à ne pas refaire dans `catalogue_en.py` : nommer une étape au
 * participe passé (« Invoice received », « Report raised ») la fait lire comme
 * l'ÉVÉNEMENT qui l'ouvre, pas comme l'état où se trouve le dossier — trente
 * libellés anglais étaient dans ce cas alors que leurs équivalents français ne
 * l'étaient pas, si bien que le même processus se lisait en états d'un côté et
 * en événements de l'autre. Le participe passé reste juste pour une étape
 * TERMINALE, qui décrit bien un état définitif — mais celles-là ne sont pas
 * affichées.
 *
 * Les étapes terminales sont écartées par leur TYPE, jamais par leur nom.
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
  /** Nombre réel d'étapes du déroulé, hors étapes terminales. */
  stepCount: number;
  /** Nombre de rôles qui interviennent dans le processus. */
  roleCount: number;
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
    lignes.append("    stepCount: %d," % e["nb_etapes"])
    lignes.append("    roleCount: %d," % e["nb_roles"])
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

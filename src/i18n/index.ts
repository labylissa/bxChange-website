import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fr } from './locales/fr';
import { en } from './locales/en';

/**
 * Les langues DU SITE. Celles du produit sont une autre liste, et c'est la
 * distinction qui compte : l'application parle français, anglais et espagnol —
 * une ligne de grille d'appel d'offres, vraie sans que personne n'ait à
 * répondre. Le site, lui, est un canal d'entrée : publier une langue, c'est
 * promettre un interlocuteur qui la parle. Tant qu'il n'y en a pas, un prospect
 * qui écrit en espagnol et reçoit une réponse en français emporte une plus
 * mauvaise impression qu'un prospect venu par l'anglais.
 *
 * Le matériel espagnol reste dans le dépôt, prêt : `locales/es.ts`, les textes
 * juridiques de `content/legal.ts`, et les captures sous `public/captures/es/`.
 * Le remettre en service tient en une ligne ici — et le typage nommera alors,
 * une à une, les clés apparues depuis : la dérive est détectée au rallumage,
 * jamais subie en silence. Manque aussi la traduction du catalogue des process,
 * que `generer-catalogue.py` sert en français sous `es`.
 */
export const SUPPORTED_LANGS = ['fr', 'en'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';

export function isLang(value: string | undefined): value is Lang {
  // Lu DANS la liste, jamais recopié en une suite de comparaisons : une langue
  // ajoutée à `SUPPORTED_LANGS` et oubliée ici donnerait une adresse `/es/…`
  // routée par le serveur et refusée par le navigateur — une page blanche, sans
  // message, que rien d'autre ne signalerait.
  return (SUPPORTED_LANGS as readonly string[]).includes(value ?? '');
}

/**
 * L'adresse débarrassée de son préfixe de langue, s'il y en a un.
 *
 * Point unique. Le sélecteur de langue écrivait ce préfixe à la main
 * (`/^\/(fr|en)/`) : une troisième langue n'y a rien fait échouer — le typage
 * ne voit pas dans une expression régulière — et passer de l'espagnol à
 * l'anglais menait à `/en/es`, une adresse qui ne correspond à aucune page.
 * La liste est donc LUE, jamais recopiée.
 */
export function cheminSansLangue(chemin: string): string {
  const premier = chemin.split('/')[1];
  return isLang(premier) ? chemin.slice(premier.length + 1) : chemin;
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  interpolation: { escapeValue: false },
  returnNull: false,
});

export default i18n;

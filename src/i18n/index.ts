import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fr } from './locales/fr';
import { en } from './locales/en';
import { es } from './locales/es';

export const SUPPORTED_LANGS = ['fr', 'en', 'es'] as const;
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
    es: { translation: es },
  },
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  interpolation: { escapeValue: false },
  returnNull: false,
});

export default i18n;

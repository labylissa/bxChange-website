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

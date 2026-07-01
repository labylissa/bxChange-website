import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fr } from './locales/fr';
import { en } from './locales/en';

export const SUPPORTED_LANGS = ['fr', 'en'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';

export function isLang(value: string | undefined): value is Lang {
  return value === 'fr' || value === 'en';
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

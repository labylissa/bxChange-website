import { fr, type Translation } from '@/i18n/locales/fr';
import { en } from '@/i18n/locales/en';
import { useLang } from './useLang';

/**
 * Renvoie l'objet de traduction complet et typé pour la langue courante (dérivée de
 * l'URL). Pratique pour le contenu structuré (listes, tableaux) sans casts sur t().
 */
export function useContent(): Translation {
  const { lang } = useLang();
  return lang === 'en' ? en : fr;
}

import { fr, type Translation } from '@/i18n/locales/fr';
import { en } from '@/i18n/locales/en';
import { DEFAULT_LANG, type Lang } from '@/i18n';
import { useLang } from './useLang';

/**
 * Les catalogues par langue. Typé sur `Lang` : une langue ajoutée sans son
 * catalogue ne compile pas.
 *
 * C'était `lang === 'en' ? en : fr` — un test binaire qui rendait le FRANÇAIS
 * à toute langue qui n'est pas l'anglais. Une troisième langue s'y serait
 * affichée entièrement en français, sur les listes et les tableaux seulement
 * (ce hook sert le contenu structuré), donc sur des pages à moitié traduites
 * que rien n'aurait signalé.
 */
const CATALOGUES: Record<Lang, Translation> = { fr, en };

/**
 * Renvoie l'objet de traduction complet et typé pour la langue courante (dérivée de
 * l'URL). Pratique pour le contenu structuré (listes, tableaux) sans casts sur t().
 */
export function useContent(): Translation {
  const { lang } = useLang();
  return CATALOGUES[lang] ?? CATALOGUES[DEFAULT_LANG];
}

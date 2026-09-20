import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, isLang, type Lang } from '@/i18n';
import { localizedPath, type PageKey } from '@/lib/routes';

/**
 * Renvoie la langue courante (dérivée de l'URL) et un helper de chemin localisé.
 *
 * `other` — « l'autre langue » — a été retiré : il n'avait aucun appelant, et la
 * notion elle-même suppose qu'il n'y en ait que deux. Laissé en place, il aurait
 * servi de raccourci au premier écran qui en aurait eu besoin, et aurait renvoyé
 * le français à un visiteur espagnol.
 */
export function useLang(): {
  lang: Lang;
  path: (page: PageKey) => string;
} {
  const { lang: raw } = useParams();
  const lang: Lang = isLang(raw) ? raw : DEFAULT_LANG;
  return {
    lang,
    path: (page: PageKey) => localizedPath(lang, page),
  };
}

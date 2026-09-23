import { useLocation } from 'react-router-dom';
import { DEFAULT_LANG, isLang, type Lang } from '@/i18n';
import { localizedPath, type PageKey } from '@/lib/routes';

/**
 * Renvoie la langue courante (dérivée de l'URL) et un helper de chemin localisé.
 *
 * Dérivée de `useLocation().pathname`, pas d'un paramètre `:lang` — les
 * pages `/fr` et `/en` ont chacune leurs propres slugs (`/fr/produit` vs
 * `/en/product`), donc ce ne sont plus deux branches d'une même route
 * paramétrée mais deux arbres de routes distincts : il n'existe plus de
 * paramètre `lang` à lire dans `useParams()`.
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
  const { pathname } = useLocation();
  const segment = pathname.split('/')[1];
  const lang: Lang = isLang(segment) ? segment : DEFAULT_LANG;
  return {
    lang,
    path: (page: PageKey) => localizedPath(lang, page),
  };
}

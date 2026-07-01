import { useParams } from 'react-router-dom';
import { DEFAULT_LANG, isLang, type Lang } from '@/i18n';
import { localizedPath, type PageKey } from '@/lib/routes';

/** Renvoie la langue courante (dérivée de l'URL) et un helper de chemin localisé. */
export function useLang(): {
  lang: Lang;
  path: (page: PageKey) => string;
  other: Lang;
} {
  const { lang: raw } = useParams();
  const lang: Lang = isLang(raw) ? raw : DEFAULT_LANG;
  return {
    lang,
    path: (page: PageKey) => localizedPath(lang, page),
    other: lang === 'fr' ? 'en' : 'fr',
  };
}

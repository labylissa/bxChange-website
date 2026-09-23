import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LANG, isLang } from '@/i18n';
import { Header } from './Header';
import { Footer } from './Footer';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Si l'URL cible une ancre (#section), on scrolle vers l'élément ; sinon, en haut.
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  // Dérivée de l'URL, pas d'un paramètre `:lang` — `/fr` et `/en` sont deux
  // arbres de routes distincts (chacun avec ses propres slugs), donc il n'y a
  // plus de paramètre `lang` à lire ; voir la même remarque dans `useLang`.
  const { pathname } = useLocation();
  const lang = pathname.split('/')[1];
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (isLang(lang) && i18n.language !== lang) {
      void i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Langue inconnue dans l'URL → on redirige vers la langue par défaut.
  if (!isLang(lang)) {
    return <Navigate to={`/${DEFAULT_LANG}/`} replace />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        {t('common.skipToContent')}
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

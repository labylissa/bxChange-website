import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { Icons } from './Icon';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLang } from '@/hooks/useLang';
import { NAV_PAGES, PAGE_LABEL_KEY } from '@/lib/routes';
export function Header() {
  const { t } = useTranslation();
  const { path } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-teal-500' : 'text-ink-600 hover:text-navy-900'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-all ${
        scrolled ? 'border-ink-100 shadow-sm' : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        {/* Le logotype seul, sans la pastille dorée qui l'enfermait.
            Cette pastille avait été dessinée autour de l'ancienne marque — un
            carré monochrome qu'il fallait détacher du fond blanc. Le logotype
            bxFlow porte son propre doré : posé sur du doré, le mot « Flow »
            aurait disparu. */}
        <Link to={path('home')} aria-label="bxFlow" className="shrink-0">
          <Logo className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principale">
          {NAV_PAGES.map((page) => (
            <NavLink key={page} to={path(page)} className={linkClass}>
              {t(PAGE_LABEL_KEY[page])}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link to={path('demo')} className="btn-primary">
            {t('nav.cta')}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
        >
          {open ? <Icons.close /> : <Icons.menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_PAGES.map((page) => (
              <NavLink
                key={page}
                to={path(page)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-teal/10 text-teal-500' : 'text-navy-900 hover:bg-ink-50'
                  }`
                }
              >
                {t(PAGE_LABEL_KEY[page])}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-ink-100 pt-4">
              <LanguageSwitcher />
              <Link to={path('demo')} className="btn-primary">
                {t('nav.cta')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

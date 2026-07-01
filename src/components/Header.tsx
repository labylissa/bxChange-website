import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { Icons } from './Icon';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLang } from '@/hooks/useLang';
import { NAV_PAGES, type PageKey } from '@/lib/routes';

const NAV_KEY: Record<PageKey, string> = {
  home: 'nav.home',
  product: 'nav.product',
  useCases: 'nav.useCases',
  catalog: 'nav.catalog',
  security: 'nav.security',
  pricing: 'nav.pricing',
  contact: 'nav.contact',
  demo: 'nav.demo',
  legalNotice: 'footer.legalNotice',
  privacy: 'footer.privacy',
};

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
      isActive ? 'text-teal' : 'text-white/70 hover:text-white'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-navy-900 transition-all ${
        scrolled
          ? 'border-white/10 shadow-lg shadow-navy-900/40'
          : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to={path('home')} aria-label="bxChange" className="shrink-0">
          <Logo className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principale">
          {NAV_PAGES.map((page) => (
            <NavLink key={page} to={path(page)} className={linkClass}>
              {t(NAV_KEY[page])}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher variant="light" />
          <Link to={path('demo')} className="btn-primary">
            {t('nav.cta')}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
        >
          {open ? <Icons.close /> : <Icons.menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_PAGES.map((page) => (
              <NavLink
                key={page}
                to={path(page)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-teal/15 text-teal' : 'text-white/80 hover:bg-white/5'
                  }`
                }
              >
                {t(NAV_KEY[page])}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-4">
              <LanguageSwitcher variant="light" />
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

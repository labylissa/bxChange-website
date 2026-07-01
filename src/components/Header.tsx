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
      isActive ? 'text-teal-500' : 'text-ink-600 hover:text-navy-900'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled
          ? 'border-ink-100 bg-white/90 backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to={path('home')} aria-label="bxChange" className="shrink-0">
          <Logo variant="dark" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principale">
          {NAV_PAGES.map((page) => (
            <NavLink key={page} to={path(page)} className={linkClass}>
              {t(NAV_KEY[page])}
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
                {t(NAV_KEY[page])}
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

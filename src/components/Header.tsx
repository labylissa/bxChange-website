import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { Icons } from './Icon';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLang } from '@/hooks/useLang';
import { NAV_ENTRIES, PAGE_LABEL_KEY, type NavEntry } from '@/lib/routes';

type Groupe = Extract<NavEntry, { kind: 'group' }>;

/**
 * Une entrée de menu qui en contient d'autres.
 *
 * Ouverture au survol ET au clic : le survol est ce qu'attend un visiteur sur
 * un ordinateur, le clic est le seul geste disponible au doigt. Le panneau est
 * séparé du bouton par une bande TRANSPARENTE plutôt que par une marge — une
 * vraie marge couperait le survol entre les deux, et le menu se refermerait
 * pendant qu'on descend vers lui.
 */
function GroupeNav({ groupe }: { groupe: Groupe }) {
  const { t } = useTranslation();
  const { path } = useLang();
  const location = useLocation();
  const [ouvert, setOuvert] = useState(false);
  const conteneur = useRef<HTMLDivElement>(null);

  const actif = groupe.items.some((i) => location.pathname === path(i.page));

  // Fermeture au clic extérieur et à Échap — sans elles, le panneau reste
  // ouvert par-dessus le reste de l'en-tête pendant qu'on navigue ailleurs.
  useEffect(() => {
    if (!ouvert) return;
    function auClic(e: MouseEvent) {
      if (!conteneur.current?.contains(e.target as Node)) setOuvert(false);
    }
    function auClavier(e: KeyboardEvent) {
      if (e.key === 'Escape') setOuvert(false);
    }
    document.addEventListener('mousedown', auClic);
    document.addEventListener('keydown', auClavier);
    return () => {
      document.removeEventListener('mousedown', auClic);
      document.removeEventListener('keydown', auClavier);
    };
  }, [ouvert]);

  useEffect(() => setOuvert(false), [location.pathname]);

  return (
    <div
      ref={conteneur}
      className="relative"
      onMouseEnter={() => setOuvert(true)}
      onMouseLeave={() => setOuvert(false)}
    >
      <button
        type="button"
        onClick={() => setOuvert((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={ouvert}
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
          actif ? 'text-teal-500' : 'text-ink-600 hover:text-navy-900'
        }`}
      >
        {t(groupe.labelKey)}
        <Icons.chevronDown
          className={`h-4 w-4 transition-transform duration-200 ${ouvert ? 'rotate-180' : ''}`}
        />
      </button>

      {ouvert && (
        <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3">
          <div
            role="menu"
            className="overflow-hidden rounded-xl border border-ink-100 bg-white p-1.5 shadow-card-hover"
          >
            {groupe.items.map((item) => (
              <NavLink
                key={item.page}
                to={path(item.page)}
                role="menuitem"
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 transition-colors ${
                    isActive ? 'bg-teal/10' : 'hover:bg-ink-50'
                  }`
                }
              >
                <span className="block text-sm font-semibold text-navy-900">
                  {t(PAGE_LABEL_KEY[item.page])}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                  {t(item.descKey)}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

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
          {NAV_ENTRIES.map((entree) =>
            entree.kind === 'page' ? (
              <NavLink key={entree.page} to={path(entree.page)} className={linkClass}>
                {t(PAGE_LABEL_KEY[entree.page])}
              </NavLink>
            ) : (
              <GroupeNav key={entree.labelKey} groupe={entree} />
            ),
          )}
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
          {/* Au doigt, pas de déroulant : un menu qui s'ouvre dans un menu
              ajoute un geste pour ne rien gagner — la place manque en largeur,
              pas en hauteur. Le groupe devient une rubrique, ses pages sont
              simplement décalées dessous. */}
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_ENTRIES.map((entree) =>
              entree.kind === 'page' ? (
                <NavLink
                  key={entree.page}
                  to={path(entree.page)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-teal/10 text-teal-500' : 'text-navy-900 hover:bg-ink-50'
                    }`
                  }
                >
                  {t(PAGE_LABEL_KEY[entree.page])}
                </NavLink>
              ) : (
                <div key={entree.labelKey} className="mt-2">
                  <span className="block px-3 pb-1 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                    {t(entree.labelKey)}
                  </span>
                  {entree.items.map((item) => (
                    <NavLink
                      key={item.page}
                      to={path(item.page)}
                      className={({ isActive }) =>
                        `block rounded-lg py-3 pl-5 pr-3 text-base font-medium ${
                          isActive ? 'bg-teal/10 text-teal-500' : 'text-navy-900 hover:bg-ink-50'
                        }`
                      }
                    >
                      {t(PAGE_LABEL_KEY[item.page])}
                    </NavLink>
                  ))}
                </div>
              ),
            )}
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

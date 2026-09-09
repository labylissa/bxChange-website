import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { Icons } from './Icon';
import { useLang } from '@/hooks/useLang';
import { NAV_PAGES, type PageKey } from '@/lib/routes';
import { CONTACT_EMAIL } from '@/lib/site';

const NAV_KEY: Record<PageKey, string> = {
  home: 'nav.home',
  product: 'nav.product',
  useCases: 'nav.useCases',
  catalog: 'nav.catalog',
  security: 'nav.security',
  pricing: 'nav.pricing',
  contact: 'nav.contact',
  demo: 'nav.demo',
  documentation: 'nav.documentation',
  legalNotice: 'footer.legalNotice',
  privacy: 'footer.privacy',
};

export function Footer() {
  const { t } = useTranslation();
  const { path } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm text-white/60">{t('footer.tagline')}</p>
          {/* Lien LinkedIn retiré : la page n'existe pas encore, et il menait à
              l'accueil de LinkedIn. Un lien qui ne mène pas où il annonce coûte
              plus que son absence — il se clique une fois, et la confiance avec.
              À rétablir avec l'URL réelle. */}
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            {t('footer.product')}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_PAGES.map((page) => (
              <li key={page}>
                <Link to={path(page)} className="text-white/70 transition-colors hover:text-teal">
                  {t(NAV_KEY[page])}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            {t('footer.legal')}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to={path('legalNotice')} className="text-white/70 transition-colors hover:text-teal">
                {t('footer.legalNotice')}
              </Link>
            </li>
            <li>
              <Link to={path('privacy')} className="text-white/70 transition-colors hover:text-teal">
                {t('footer.privacy')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            {t('nav.contact')}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-teal"
              >
                <Icons.mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <Link to={path('demo')} className="btn-primary mt-2">
                {t('common.requestDemo')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          {/* L'éditeur, nommé une fois. bxFlow reste le sujet du site : la
              mention se lit là où l'on cherche qui est derrière le produit,
              pas en tête de page. */}
          <p>
            © {year} bxFlow — <span className="text-white/60">{t('footer.editeur')}</span>.{' '}
            {t('footer.rights')}
          </p>
          <p>{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}

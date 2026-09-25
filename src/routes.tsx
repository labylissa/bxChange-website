import { Navigate, type RouteObject } from 'react-router-dom';
import { DEFAULT_LANG, SUPPORTED_LANGS, type Lang } from './i18n';
import { PAGE_SLUGS, type PageKey } from './lib/routes';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { CatalogPage } from './pages/CatalogPage';
import { SecurityPage } from './pages/SecurityPage';
import { DeploymentPage } from './pages/DeploymentPage';
import { TeamPage } from './pages/TeamPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { DemoPage } from './pages/DemoPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { LegalNoticePage, PrivacyPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProcessPage } from './pages/ProcessPage';

/** L'élément de chaque page, hors accueil (qui est la route `index`). */
const PAGE_ELEMENTS: Record<Exclude<PageKey, 'home'>, JSX.Element> = {
  product: <ProductPage />,
  useCases: <UseCasesPage />,
  catalog: <CatalogPage />,
  security: <SecurityPage />,
  deployment: <DeploymentPage />,
  team: <TeamPage />,
  pricing: <PricingPage />,
  contact: <ContactPage />,
  demo: <DemoPage />,
  documentation: <DocumentationPage />,
  legalNotice: <LegalNoticePage />,
  privacy: <PrivacyPage />,
};

/**
 * Les routes d'UNE langue, ENGENDRÉES depuis `PAGE_SLUGS[lang]`.
 *
 * Le slug anglais de chaque page vient d'être traduit (`produit` → `product`,
 * etc.) : `PAGE_SLUGS` est désormais la seule source qui les nomme, donc les
 * routes du routeur doivent en dépendre plutôt que de recopier les mots — une
 * table de routes écrite à la main pour l'anglais aurait pu diverger de
 * `PAGE_SLUGS` sans que rien ne le remarque, et le lien du menu aurait pointé
 * vers une adresse que le routeur ne sait pas servir.
 */
function routesDeLangue(lang: Lang): RouteObject[] {
  return (Object.keys(PAGE_ELEMENTS) as Exclude<PageKey, 'home'>[]).map((page) => ({
    path: PAGE_SLUGS[lang][page],
    element: PAGE_ELEMENTS[page],
  }));
}

/**
 * La table des routes, séparée du routeur de navigateur.
 *
 * Deux consommateurs la lisent : `router.tsx` en fabrique un routeur de
 * navigation, `entry-server.tsx` un routeur statique pour le prérendu. Les
 * décrire deux fois donnerait un site dont les pages prérendues ne seraient
 * pas tout à fait celles que le visiteur parcourt — et l'écart ne se verrait
 * que dans un index de moteur de recherche.
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={`/${DEFAULT_LANG}/`} replace />,
  },
  ...SUPPORTED_LANGS.map((lang) => ({
    path: `/${lang}`,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      ...routesDeLangue(lang),
      // Page processus : sous le même slug que la page catalogue
      // (/fr/catalogue/:slug, /en/catalog/:slug), donc dérivée de la même
      // source plutôt que d'un mot écrit en dur ici.
      { path: `${PAGE_SLUGS[lang].catalog}/:slug`, element: <ProcessPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  })),
  {
    path: '*',
    element: <Navigate to={`/${DEFAULT_LANG}/`} replace />,
  },
];

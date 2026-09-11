import { Navigate, type RouteObject } from 'react-router-dom';
import { DEFAULT_LANG } from './i18n';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { CatalogPage } from './pages/CatalogPage';
import { SecurityPage } from './pages/SecurityPage';
import { DeploymentPage } from './pages/DeploymentPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { DemoPage } from './pages/DemoPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { LegalNoticePage, PrivacyPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

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
    element: <Navigate to={`/${DEFAULT_LANG}`} replace />,
  },
  {
    path: '/:lang',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'produit', element: <ProductPage /> },
      { path: 'cas-usage', element: <UseCasesPage /> },
      { path: 'catalogue', element: <CatalogPage /> },
      { path: 'securite', element: <SecurityPage /> },
      { path: 'deploiement', element: <DeploymentPage /> },
      { path: 'tarifs', element: <PricingPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'demo', element: <DemoPage /> },
      { path: 'documentation', element: <DocumentationPage /> },
      { path: 'mentions-legales', element: <LegalNoticePage /> },
      { path: 'confidentialite', element: <PrivacyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to={`/${DEFAULT_LANG}`} replace />,
  },
];

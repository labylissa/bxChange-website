import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DEFAULT_LANG } from './i18n';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { CatalogPage } from './pages/CatalogPage';
import { SecurityPage } from './pages/SecurityPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { DemoPage } from './pages/DemoPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { LegalNoticePage, PrivacyPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
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
]);

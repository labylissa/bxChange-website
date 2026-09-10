import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './router';
import i18n, { isLang } from './i18n';
import './index.css';

// La langue vient de l'URL, et elle doit être posée AVANT le premier rendu.
//
// `Layout` l'aligne dans un `useEffect` : c'est suffisant en navigation, mais
// trop tard ici. Depuis le prérendu, Cloudflare sert une page anglaise déjà
// complète ; sans cette ligne, le navigateur la remplacerait par un habillage
// français le temps d'une image avant de se corriger tout seul. Le visiteur
// verrait le clignotement, sur la première impression du site.
const segment = window.location.pathname.split('/')[1];
if (isLang(segment)) void i18n.changeLanguage(segment);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);

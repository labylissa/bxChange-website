import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';
import i18n, { DEFAULT_LANG, isLang } from './i18n';
import { routes } from './routes';

/**
 * Rend une adresse du site en HTML complet, au moment de la construction.
 *
 * ## Pourquoi
 *
 * Le site est une application monopage : Cloudflare servait le MÊME
 * `index.html` pour les 22 adresses, et les titres, descriptions et contenus
 * de chaque page n'apparaissaient qu'après exécution du JavaScript. Google
 * sait le faire, mais dans une seconde file d'attente, plus lente et moins
 * prioritaire — pour un domaine neuf, cela veut dire des semaines avant qu'une
 * page intérieure soit comprise, et une page non indexée ne peut devenir ni un
 * résultat, ni un lien de site.
 *
 * ## Le piège de la langue, qui n'a rien d'anecdotique
 *
 * `Layout` aligne la langue de l'habillage sur l'URL dans un `useEffect`. Or
 * **les effets ne s'exécutent pas au rendu serveur** : sans la ligne
 * ci-dessous, `/en/produit` sortirait avec un contenu anglais — il vient des
 * paramètres d'URL — dans un en-tête et un pied de page français, et c'est
 * cette version-là qui serait indexée. Le défaut serait invisible en
 * navigation, puisque l'effet corrige tout dès la première image affichée.
 *
 * `changeLanguage` est immédiat ici : les deux catalogues sont compilés dans
 * le paquet, il n'y a rien à aller chercher.
 */
export async function rendre(url: string): Promise<{ html: string; helmet: HelmetServerState }> {
  const segment = url.split('/')[1];
  await i18n.changeLanguage(isLang(segment) ? segment : DEFAULT_LANG);

  const gestionnaire = createStaticHandler(routes);
  const contexte = await gestionnaire.query(new Request(`https://bxgroup.io${url}`));

  // Une redirection au lieu d'une page veut dire qu'on a demandé une adresse
  // qui n'est pas une vraie page (la racine, une langue inconnue). Mieux vaut
  // échouer bruyamment que d'écrire un fichier au contenu inattendu.
  if (contexte instanceof Response) {
    throw new Error(`${url} : le routeur répond une redirection (${contexte.status}), pas une page.`);
  }

  const contexteHelmet: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={contexteHelmet}>
      <StaticRouterProvider
        router={createStaticRouter(gestionnaire.dataRoutes, contexte)}
        context={contexte}
        hydrate={false}
      />
    </HelmetProvider>,
  );

  if (!contexteHelmet.helmet) {
    throw new Error(`${url} : aucune balise de tête produite — la page n'a pas de <Seo>.`);
  }

  return { html, helmet: contexteHelmet.helmet };
}

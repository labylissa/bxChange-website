/** Configuration globale du site — ajustez avant déploiement. */

/** URL de production (utilisée pour canonical / hreflang / sitemap). */
export const SITE_URL = 'https://bxchange.pages.dev';

/** Adresse de contact affichée sur le site. */
export const CONTACT_EMAIL = 'contact@bxchange.io';

/** URL LinkedIn (placeholder à remplacer). */
export const LINKEDIN_URL = 'https://www.linkedin.com/';

/**
 * Identifiant du formulaire Formspree (https://formspree.io).
 * Renseignez VITE_FORMSPREE_ID dans un fichier .env pour activer l'envoi réel.
 * Tant qu'il est vide, le formulaire affiche un message d'information.
 */
export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID ?? '';

/**
 * Lien de planification Calendly (ex. https://calendly.com/votre-compte/demo-bxchange).
 * Renseignez VITE_CALENDLY_URL dans un fichier .env pour activer le widget de prise
 * de rendez-vous. Tant qu'il est vide, la page /demo affiche un repli (lien contact).
 */
export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL ?? '';

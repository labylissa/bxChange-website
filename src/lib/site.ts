/** Configuration globale du site — ajustez avant déploiement. */

/**
 * URL de production — canonical, hreflang, sitemap et mentions légales.
 *
 * SEULE source de cette adresse. `scripts/generate-sitemap.mjs` la LIT ici au
 * lieu d'en garder une copie : les deux avaient divergé, et le sitemap déployé
 * annonçait 22 URLs sur un domaine qui n'était pas le nôtre — un défaut qui ne
 * se voit ni à l'écran ni au build, seulement dans l'index d'un moteur de
 * recherche, des semaines plus tard.
 */
export const SITE_URL = 'https://bxgroup.io';

/**
 * Adresse de contact affichée sur le site et dans les mentions légales.
 *
 * Elle doit être ROUTÉE avant d'être annoncée : une adresse qui ne reçoit rien
 * perd les messages en silence, et l'expéditeur croit avoir été ignoré.
 */
export const CONTACT_EMAIL = 'contact@bxgroup.io';

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

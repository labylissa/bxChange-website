import type { Lang } from '@/i18n';
import { SITE_URL, CONTACT_EMAIL } from '@/lib/site';

/**
 * Contenu des pages légales (Mentions légales & Politique de confidentialité).
 *
 * Règle de rédaction : ne rien inventer, et ne rien laisser en blanc.
 *
 * Ces pages portaient des champs entre crochets, surlignés à l'affichage. Un
 * blanc dit au lecteur que la page n'est pas finie — et ces pages-là sont
 * précisément celles qu'un service achats consulte. Une donnée inventée serait
 * pire : elle est vérifiable en une requête au registre du commerce.
 *
 * Entre les deux il y a la vérité : la société est en cours d'immatriculation,
 * la page le dit, et s'engage à publier les mentions dès qu'elles existent.
 * Tout ce qui peut être écrit aujourd'hui l'est complètement — hébergeur,
 * sous-traitants réels, absence de traceur, droits des personnes.
 *
 * À FAIRE à l'immatriculation : renseigner la section « Éditeur du site » et
 * retirer la note qui l'accompagne. Une relecture juridique reste recommandée
 * avant d'adresser ces pages à un client (plusieurs juridictions : UE, Maroc,
 * Sénégal, Côte d'Ivoire).
 */

export type LegalBlock =
  | { p: string }
  | { ul: string[] }
  | { h: string }
  | { note: string };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  title: string;
  intro: string;
  updatedLabel: string;
  updated: string;
  sections: LegalSection[];
}

/* ------------------------------------------------------------------ */
/* Mentions légales                                                    */
/* ------------------------------------------------------------------ */

const legalNoticeFr: LegalDoc = {
  title: 'Mentions légales',
  intro:
    'Informations légales relatives au site bxFlow, édité par bxGroup.',
  updatedLabel: 'Dernière mise à jour',
  updated: '11 septembre 2026',
  sections: [
    {
      title: '1. Éditeur du site',
      blocks: [
        { p: `Le site accessible à l’adresse ${SITE_URL} (ci-après « le Site ») est édité par bxGroup, éditeur du logiciel bxFlow.` },
        {
          ul: [
            'Éditeur : bxGroup',
            'Produit présenté : bxFlow',
            `Contact : ${CONTACT_EMAIL}`,
            `Adresse du Site : ${SITE_URL}`,
          ],
        },
        {
          note: `bxGroup est en cours d’immatriculation. Les mentions d’identification légale — forme juridique, siège social, numéro d’immatriculation et directeur de la publication — seront publiées sur cette page dès que l’immatriculation sera effective. D’ici là, toute question relative à l’identité de l’éditeur peut nous être adressée à ${CONTACT_EMAIL}.`,
        },
      ],
    },
    {
      title: '2. Hébergement',
      blocks: [
        { p: 'Le Site est hébergé par :' },
        {
          ul: [
            'Hébergeur : Cloudflare, Inc.',
            'Adresse : 101 Townsend St, San Francisco, CA 94107, États-Unis',
            'Site web : https://www.cloudflare.com',
          ],
        },
      ],
    },
    {
      title: '3. Propriété intellectuelle',
      blocks: [
        {
          p: 'L’ensemble des contenus présents sur le Site (textes, graphismes, logos, icônes, mise en page, structure du catalogue de processus, etc.) est la propriété exclusive de bxGroup, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans l’autorisation écrite préalable de bxGroup.',
        },
        {
          p: 'La marque bxFlow ainsi que le logo associé sont la propriété de bxGroup.',
        },
      ],
    },
    {
      title: '4. Limitation de responsabilité',
      blocks: [
        {
          p: 'bxFlow s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site, mais ne peut garantir l’exactitude, la précision ou l’exhaustivité des informations mises à disposition. En conséquence, bxFlow décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le Site.',
        },
        {
          p: 'Le Site peut contenir des liens vers des services tiers (Calendly pour la prise de rendez-vous, Formspree pour le formulaire de contact). bxFlow n’exerce aucun contrôle sur ces services tiers et décline toute responsabilité quant à leur contenu ou leurs pratiques.',
        },
      ],
    },
    {
      title: '5. Portée des présentes mentions',
      blocks: [
        {
          p: 'Les présentes mentions concernent le Site, qui est un site de présentation. L’utilisation du logiciel bxFlow est régie par le contrat conclu avec chaque client, lequel en fixe le droit applicable, la juridiction compétente, les garanties et les responsabilités.',
        },
      ],
    },
    {
      title: '6. Contact',
      blocks: [
        {
          p: `Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l’adresse : ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

const legalNoticeEn: LegalDoc = {
  title: 'Legal notice',
  intro:
    'Legal information about the bxFlow website, published by bxGroup.',
  updatedLabel: 'Last updated',
  updated: 'September 11, 2026',
  sections: [
    {
      title: '1. Site publisher',
      blocks: [
        { p: `The website available at ${SITE_URL} (the “Site”) is published by bxGroup, the publisher of the bxFlow software.` },
        {
          ul: [
            'Publisher: bxGroup',
            'Product presented: bxFlow',
            `Contact: ${CONTACT_EMAIL}`,
            `Site address: ${SITE_URL}`,
          ],
        },
        {
          note: `bxGroup is in the process of being registered. The statutory identification details — legal form, registered office, registration number and publication director — will be published on this page as soon as registration is complete. Until then, any question about the publisher’s identity can be sent to ${CONTACT_EMAIL}.`,
        },
      ],
    },
    {
      title: '2. Hosting',
      blocks: [
        { p: 'The Site is hosted by:' },
        {
          ul: [
            'Host: Cloudflare, Inc.',
            'Address: 101 Townsend St, San Francisco, CA 94107, USA',
            'Website: https://www.cloudflare.com',
          ],
        },
      ],
    },
    {
      title: '3. Intellectual property',
      blocks: [
        {
          p: 'All content on the Site (text, graphics, logos, icons, layout, the structure of the process catalogue, etc.) is the exclusive property of bxGroup, unless otherwise stated. Any reproduction, representation, modification, publication or adaptation of all or part of the Site, by any means whatsoever, is prohibited without the prior written consent of bxGroup.',
        },
        {
          p: 'The bxFlow trademark and associated logo are owned by bxGroup.',
        },
      ],
    },
    {
      title: '4. Limitation of liability',
      blocks: [
        {
          p: 'bxFlow strives to ensure that the information published on the Site is accurate and up to date, but cannot guarantee the accuracy, precision or completeness of the information made available. Accordingly, bxFlow disclaims all liability for any imprecision, inaccuracy or omission in the information available on the Site.',
        },
        {
          p: 'The Site may contain links to third-party services (Calendly for booking, Formspree for the contact form). bxFlow has no control over these third-party services and disclaims all liability for their content or practices.',
        },
      ],
    },
    {
      title: '5. Scope of this notice',
      blocks: [
        {
          p: 'This notice concerns the Site, which presents the product. Use of the bxFlow software is governed by the contract entered into with each client, which sets the applicable law, the competent jurisdiction, the warranties and the liabilities.',
        },
      ],
    },
    {
      title: '6. Contact',
      blocks: [
        {
          p: `For any question regarding these legal notices, you can contact us at: ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Politique de confidentialité                                        */
/* ------------------------------------------------------------------ */

const privacyFr: LegalDoc = {
  title: 'Politique de confidentialité',
  intro:
    'Comment le site bxFlow collecte, utilise et protège vos données personnelles.',
  updatedLabel: 'Dernière mise à jour',
  updated: '11 septembre 2026',
  sections: [
    {
      title: '1. Responsable du traitement',
      blocks: [
        { p: `Le responsable du traitement des données collectées sur le site ${SITE_URL} est :` },
        {
          ul: [
            'bxGroup, éditeur du logiciel bxFlow',
            `Contact : ${CONTACT_EMAIL}`,
          ],
        },
      ],
    },
    {
      title: '2. Quelles données collectons-nous ?',
      blocks: [
        {
          p: 'Le Site collecte les données suivantes, uniquement lorsque vous interagissez volontairement avec l’un de ces éléments :',
        },
        { h: 'a) Formulaire de contact' },
        { p: 'Lorsque vous remplissez le formulaire de contact (page Contact), nous collectons : nom, adresse email, entreprise (le cas échéant), téléphone (le cas échéant) et message.' },
        {
          p: 'Ces données sont traitées via Formspree (formspree.io), un service tiers qui reçoit et transmet le contenu du formulaire par email à notre adresse de contact. Formspree agit en tant que sous-traitant. Politique de confidentialité de Formspree : https://formspree.io/legal/privacy-policy',
        },
        { h: 'b) Prise de rendez-vous / démo' },
        {
          p: 'Lorsque vous planifiez une démonstration (page Démo), le widget est fourni par Calendly (calendly.com). Calendly collecte directement les données que vous saisissez (nom, email, créneau choisi, réponses aux éventuelles questions de qualification). bxFlow reçoit une confirmation du rendez-vous, mais Calendly reste responsable du traitement technique de la prise de rendez-vous. Politique de confidentialité de Calendly : https://calendly.com/privacy',
        },
        { h: 'c) Données de navigation' },
        {
          p: 'Le Site n’utilise aucun outil de mesure d’audience, aucun traceur publicitaire et aucun réseau social embarqué. Nous ne construisons pas de profil de navigation.',
        },
        { h: 'd) Polices de caractères' },
        {
          p: 'Les polices du Site sont servies par Google Fonts. Votre navigateur les demande directement aux serveurs de Google, qui reçoit à cette occasion votre adresse IP et les informations techniques que tout navigateur transmet. Aucune autre donnée ne lui est communiquée, et nous ne recevons rien de Google en retour.',
        },
        { h: 'e) Cookies' },
        {
          p: 'Le Site ne dépose aucun cookie de mesure d’audience ni de publicité — c’est pourquoi aucun bandeau de consentement ne vous est présenté. La langue que vous consultez est portée par l’adresse de la page (/fr, /en) et non par un cookie. Notre hébergeur peut déposer des cookies strictement nécessaires à la sécurité du Site.',
        },
      ],
    },
    {
      title: '3. Pourquoi collectons-nous ces données ?',
      blocks: [
        { p: 'Les données sont collectées uniquement dans le but de :' },
        {
          ul: [
            'Répondre à vos demandes de contact ou de devis',
            'Planifier et confirmer des rendez-vous de démonstration',
            'Assurer le bon fonctionnement technique du Site (préférence de langue, etc.)',
          ],
        },
        {
          p: 'Aucune donnée n’est utilisée à des fins de revente à des tiers ou de prospection non sollicitée en dehors du cadre de votre demande.',
        },
      ],
    },
    {
      title: '4. Combien de temps conservons-nous vos données ?',
      blocks: [
        {
          ul: [
            'Formulaire de contact : les échanges sont conservés le temps nécessaire au traitement de votre demande, puis archivés ou supprimés dans un délai maximal de 3 ans à compter du dernier contact.',
            'Rendez-vous Calendly : conservés selon la politique de rétention de Calendly et les paramètres de notre compte.',
          ],
        },
      ],
    },
    {
      title: '5. Qui a accès à vos données ?',
      blocks: [
        { p: 'Vos données sont accessibles :' },
        {
          ul: [
            'À l’équipe bxGroup en charge du traitement commercial',
            'Aux sous-traitants techniques mentionnés ci-dessus (Formspree, Calendly), dans la limite nécessaire à la fourniture du service',
            'Le cas échéant, à l’hébergeur Cloudflare pour les données techniques',
          ],
        },
        { p: 'Nous ne vendons ni ne louons vos données personnelles à des tiers.' },
      ],
    },
    {
      title: '6. Transferts de données hors de votre pays',
      blocks: [
        {
          p: 'Formspree, Calendly, Google (polices de caractères) et Cloudflare (hébergement) sont des sociétés établies aux États-Unis. Vos données peuvent donc être transférées et traitées hors de votre pays de résidence, y compris hors de l’Union européenne. Chacun de ces prestataires publie un accord de traitement des données décrivant les garanties qui encadrent ces transferts ; les liens vers leurs politiques figurent aux sections précédentes.',
        },
      ],
    },
    {
      title: '7. Vos droits',
      blocks: [
        {
          p: 'Selon votre lieu de résidence, vous disposez de droits sur vos données personnelles, qui peuvent inclure :',
        },
        {
          ul: [
            'Droit d’accès à vos données',
            'Droit de rectification',
            'Droit à l’effacement',
            'Droit d’opposition au traitement',
            'Droit à la portabilité de vos données',
          ],
        },
        { p: `Pour exercer ces droits, contactez-nous à : ${CONTACT_EMAIL}.` },
        {
          note: 'Pour les résidents de l’UE/EEE, ces droits découlent du RGPD. Pour les résidents du Maroc (loi 09-08), du Sénégal ou de la Côte d’Ivoire, les cadres légaux locaux peuvent prévoir des droits ou des autorités de contrôle différents.',
        },
      ],
    },
    {
      title: '8. Sécurité',
      blocks: [
        {
          p: 'bxFlow met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre la perte, l’accès non autorisé, la divulgation ou l’altération. La sécurité de ce site vitrine est distincte de celle de la plateforme bxFlow elle-même.',
        },
      ],
    },
    {
      title: '9. Modifications de cette politique',
      blocks: [
        {
          p: 'Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière mise à jour figure en haut de cette page. Nous vous invitons à la consulter régulièrement.',
        },
      ],
    },
    {
      title: '10. Contact',
      blocks: [
        {
          p: `Pour toute question relative à cette politique ou à l’exercice de vos droits, contactez-nous à : ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

const privacyEn: LegalDoc = {
  title: 'Privacy policy',
  intro:
    'How the bxFlow website collects, uses and protects your personal data.',
  updatedLabel: 'Last updated',
  updated: 'September 11, 2026',
  sections: [
    {
      title: '1. Data controller',
      blocks: [
        { p: `The controller of the data collected on the website ${SITE_URL} is:` },
        {
          ul: [
            'bxGroup, the publisher of the bxFlow software',
            `Contact: ${CONTACT_EMAIL}`,
          ],
        },
      ],
    },
    {
      title: '2. What data do we collect?',
      blocks: [
        {
          p: 'The Site collects the following data, only when you voluntarily interact with one of these elements:',
        },
        { h: 'a) Contact form' },
        { p: 'When you fill in the contact form (Contact page), we collect: name, email address, company (if any), phone (if any) and message.' },
        {
          p: 'This data is processed via Formspree (formspree.io), a third-party service that receives and forwards the form content by email to our contact address. Formspree acts as a data processor. Formspree privacy policy: https://formspree.io/legal/privacy-policy',
        },
        { h: 'b) Demo booking' },
        {
          p: 'When you book a demo (Demo page), the widget is provided by Calendly (calendly.com). Calendly directly collects the data you enter (name, email, chosen slot, answers to any qualifying questions). bxFlow receives a booking confirmation, but Calendly remains responsible for the technical processing of the booking itself. Calendly privacy policy: https://calendly.com/privacy',
        },
        { h: 'c) Browsing data' },
        {
          p: 'The Site uses no audience-measurement tool, no advertising tracker and no embedded social network. We do not build a browsing profile.',
        },
        { h: 'd) Web fonts' },
        {
          p: 'The Site’s fonts are served by Google Fonts. Your browser requests them directly from Google’s servers, which receive your IP address and the technical information any browser transmits. No other data is passed to them, and we receive nothing from Google in return.',
        },
        { h: 'e) Cookies' },
        {
          p: 'The Site sets no audience-measurement or advertising cookie — which is why no consent banner is shown to you. The language you are reading is carried by the page address (/fr, /en), not by a cookie. Our host may set cookies strictly necessary to the security of the Site.',
        },
      ],
    },
    {
      title: '3. Why do we collect this data?',
      blocks: [
        { p: 'Data is collected solely in order to:' },
        {
          ul: [
            'Respond to your contact or quote requests',
            'Schedule and confirm demo appointments',
            'Ensure the proper technical operation of the Site (language preference, etc.)',
          ],
        },
        {
          p: 'No data is used for resale to third parties or for unsolicited marketing outside the scope of your request.',
        },
      ],
    },
    {
      title: '4. How long do we keep your data?',
      blocks: [
        {
          ul: [
            'Contact form: correspondence is kept for as long as needed to handle your request, then archived or deleted within a maximum of 3 years from the last contact.',
            'Calendly bookings: kept according to Calendly’s retention policy and our account settings.',
          ],
        },
      ],
    },
    {
      title: '5. Who has access to your data?',
      blocks: [
        { p: 'Your data is accessible:' },
        {
          ul: [
            'To the bxGroup team in charge of commercial handling',
            'To the technical sub-processors mentioned above (Formspree, Calendly), as needed to provide the service',
            'Where applicable, to the host Cloudflare for technical data',
          ],
        },
        { p: 'We do not sell or rent your personal data to third parties.' },
      ],
    },
    {
      title: '6. Data transfers outside your country',
      blocks: [
        {
          p: 'Formspree, Calendly, Google (web fonts) and Cloudflare (hosting) are companies established in the United States. Your data may therefore be transferred and processed outside your country of residence, including outside the European Union. Each of these providers publishes a data processing agreement describing the safeguards that frame those transfers; links to their policies appear in the preceding sections.',
        },
      ],
    },
    {
      title: '7. Your rights',
      blocks: [
        {
          p: 'Depending on where you live, you have rights over your personal data, which may include:',
        },
        {
          ul: [
            'Right of access to your data',
            'Right to rectification',
            'Right to erasure',
            'Right to object to processing',
            'Right to data portability',
          ],
        },
        { p: `To exercise these rights, contact us at: ${CONTACT_EMAIL}.` },
        {
          note: 'For EU/EEA residents, these rights arise from the GDPR. For residents of Morocco (law 09-08), Senegal or Côte d’Ivoire, local legal frameworks may provide different rights or supervisory authorities.',
        },
      ],
    },
    {
      title: '8. Security',
      blocks: [
        {
          p: 'bxFlow implements reasonable technical and organisational measures to protect your data against loss, unauthorised access, disclosure or alteration. The security of this marketing website is distinct from that of the bxFlow platform itself.',
        },
      ],
    },
    {
      title: '9. Changes to this policy',
      blocks: [
        {
          p: 'This privacy policy may be updated at any time. The last-updated date appears at the top of this page. We encourage you to review it regularly.',
        },
      ],
    },
    {
      title: '10. Contact',
      blocks: [
        {
          p: `For any question about this policy or the exercise of your rights, contact us at: ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

export const legalNotice: Record<Lang, LegalDoc> = { fr: legalNoticeFr, en: legalNoticeEn };
export const privacyPolicy: Record<Lang, LegalDoc> = { fr: privacyFr, en: privacyEn };

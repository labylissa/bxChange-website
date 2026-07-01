import type { Lang } from '@/i18n';
import { SITE_URL, CONTACT_EMAIL } from '@/lib/site';

/**
 * Contenu des pages légales (Mentions légales & Politique de confidentialité).
 *
 * Source : dossier local `mentions-legales/` (non versionné). Les segments entre
 * crochets `[…]` sont des CHAMPS À COMPLÉTER avec les informations réelles de la
 * société ; ils sont mis en évidence à l'affichage. Une relecture juridique est
 * recommandée avant publication (plusieurs juridictions : UE, Maroc, Sénégal,
 * Côte d'Ivoire).
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
    'Informations légales relatives au site bxChange. Les champs entre crochets seront complétés avec les informations officielles de la société.',
  updatedLabel: 'Dernière mise à jour',
  updated: '1 juillet 2026',
  sections: [
    {
      title: '1. Éditeur du site',
      blocks: [
        { p: `Le site accessible à l’adresse ${SITE_URL} (ci-après « le Site ») est édité par :` },
        {
          ul: [
            'Raison sociale / Nom commercial : bxChange',
            'Forme juridique : [À COMPLÉTER — SAS, SARL, auto-entreprise, etc.]',
            'Capital social : [À COMPLÉTER, si applicable]',
            'Siège social : [Adresse complète]',
            'Numéro d’immatriculation : [RCS / SIREN-SIRET, ou registre équivalent selon le pays]',
            'Numéro de TVA intracommunautaire : [Si applicable]',
            'Directeur de la publication : [Nom du responsable]',
            `Contact : ${CONTACT_EMAIL}`,
            'Téléphone : [Optionnel]',
          ],
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
          p: 'L’ensemble des contenus présents sur le Site (textes, graphismes, logos, icônes, mise en page, structure du catalogue de processus, etc.) est la propriété exclusive de bxChange, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans l’autorisation écrite préalable de bxChange.',
        },
        {
          p: 'La marque bxChange ainsi que le logo associé sont la propriété de bxChange.',
        },
      ],
    },
    {
      title: '4. Limitation de responsabilité',
      blocks: [
        {
          p: 'bxChange s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site, mais ne peut garantir l’exactitude, la précision ou l’exhaustivité des informations mises à disposition. En conséquence, bxChange décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le Site.',
        },
        {
          p: 'Le Site peut contenir des liens vers des services tiers (Calendly pour la prise de rendez-vous, Formspree pour le formulaire de contact). bxChange n’exerce aucun contrôle sur ces services tiers et décline toute responsabilité quant à leur contenu ou leurs pratiques.',
        },
      ],
    },
    {
      title: '5. Droit applicable et juridiction',
      blocks: [
        {
          p: 'Les présentes mentions légales sont régies par le droit [À COMPLÉTER — probablement le droit français si la société y est immatriculée]. En cas de litige, et à défaut de résolution amiable, les tribunaux de [À COMPLÉTER — ville / pays compétent] seront seuls compétents.',
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
    'Legal information about the bxChange website. Bracketed fields will be completed with the company’s official details.',
  updatedLabel: 'Last updated',
  updated: 'July 1, 2026',
  sections: [
    {
      title: '1. Site publisher',
      blocks: [
        { p: `The website available at ${SITE_URL} (the “Site”) is published by:` },
        {
          ul: [
            'Company / trade name: bxChange',
            'Legal form: [TO COMPLETE — SAS, SARL, sole trader, etc.]',
            'Share capital: [TO COMPLETE, if applicable]',
            'Registered office: [Full address]',
            'Registration number: [Company register / equivalent per country]',
            'VAT number: [If applicable]',
            'Publication director: [Name of the person in charge]',
            `Contact: ${CONTACT_EMAIL}`,
            'Phone: [Optional]',
          ],
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
          p: 'All content on the Site (text, graphics, logos, icons, layout, the structure of the process catalogue, etc.) is the exclusive property of bxChange, unless otherwise stated. Any reproduction, representation, modification, publication or adaptation of all or part of the Site, by any means whatsoever, is prohibited without the prior written consent of bxChange.',
        },
        {
          p: 'The bxChange trademark and associated logo are owned by bxChange.',
        },
      ],
    },
    {
      title: '4. Limitation of liability',
      blocks: [
        {
          p: 'bxChange strives to ensure that the information published on the Site is accurate and up to date, but cannot guarantee the accuracy, precision or completeness of the information made available. Accordingly, bxChange disclaims all liability for any imprecision, inaccuracy or omission in the information available on the Site.',
        },
        {
          p: 'The Site may contain links to third-party services (Calendly for booking, Formspree for the contact form). bxChange has no control over these third-party services and disclaims all liability for their content or practices.',
        },
      ],
    },
    {
      title: '5. Governing law and jurisdiction',
      blocks: [
        {
          p: 'These legal notices are governed by the law of [TO COMPLETE — likely French law if the company is registered there]. In the event of a dispute, and failing an amicable settlement, the courts of [TO COMPLETE — competent city / country] shall have sole jurisdiction.',
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
    'Comment le site bxChange collecte, utilise et protège vos données personnelles. Les champs entre crochets seront complétés avant publication.',
  updatedLabel: 'Dernière mise à jour',
  updated: '1 juillet 2026',
  sections: [
    {
      title: '1. Responsable du traitement',
      blocks: [
        { p: `Le responsable du traitement des données collectées sur le site ${SITE_URL} est :` },
        {
          ul: [
            'bxChange, [forme juridique], dont le siège social est situé [adresse]',
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
          p: 'Lorsque vous planifiez une démonstration (page Démo), le widget est fourni par Calendly (calendly.com). Calendly collecte directement les données que vous saisissez (nom, email, créneau choisi, réponses aux éventuelles questions de qualification). bxChange reçoit une confirmation du rendez-vous, mais Calendly reste responsable du traitement technique de la prise de rendez-vous. Politique de confidentialité de Calendly : https://calendly.com/privacy',
        },
        { h: 'c) Données de navigation' },
        {
          p: 'Le Site n’utilise actuellement aucun outil de suivi analytique tiers. [À AJUSTER si un outil de mesure d’audience — Cloudflare Web Analytics, Plausible, etc. — est ajouté ultérieurement.]',
        },
        { h: 'd) Cookies' },
        {
          p: 'Le Site n’utilise que des éléments techniques strictement nécessaires (par exemple la préférence de langue). Aucun bandeau de consentement n’est requis pour ceux-ci. [Un bandeau sera nécessaire si un outil de mesure d’audience non exempté est ajouté plus tard.]',
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
            'À l’équipe bxChange en charge du traitement commercial',
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
          p: 'Formspree et Calendly sont des sociétés basées aux États-Unis. Vos données peuvent donc être transférées et traitées en dehors de votre pays de résidence, y compris hors de l’Union européenne le cas échéant. [À COMPLÉTER avec un juriste : préciser le mécanisme de transfert applicable — clauses contractuelles types, certification, etc.]',
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
          p: 'bxChange met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre la perte, l’accès non autorisé, la divulgation ou l’altération. La sécurité de ce site vitrine est distincte de celle de la plateforme bxChange elle-même.',
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
    'How the bxChange website collects, uses and protects your personal data. Bracketed fields will be completed before publication.',
  updatedLabel: 'Last updated',
  updated: 'July 1, 2026',
  sections: [
    {
      title: '1. Data controller',
      blocks: [
        { p: `The controller of the data collected on the website ${SITE_URL} is:` },
        {
          ul: [
            'bxChange, [legal form], whose registered office is located at [address]',
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
          p: 'When you book a demo (Demo page), the widget is provided by Calendly (calendly.com). Calendly directly collects the data you enter (name, email, chosen slot, answers to any qualifying questions). bxChange receives a booking confirmation, but Calendly remains responsible for the technical processing of the booking itself. Calendly privacy policy: https://calendly.com/privacy',
        },
        { h: 'c) Browsing data' },
        {
          p: 'The Site currently uses no third-party analytics tool. [To be adjusted if an audience-measurement tool — Cloudflare Web Analytics, Plausible, etc. — is added later.]',
        },
        { h: 'd) Cookies' },
        {
          p: 'The Site only uses strictly necessary technical elements (for example your language preference). No consent banner is required for these. [A banner will be required if a non-exempt audience-measurement tool is added later.]',
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
            'To the bxChange team in charge of commercial handling',
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
          p: 'Formspree and Calendly are companies based in the United States. Your data may therefore be transferred and processed outside your country of residence, including outside the European Union where applicable. [To be completed with a lawyer: specify the applicable transfer mechanism — standard contractual clauses, certification, etc.]',
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
          p: 'bxChange implements reasonable technical and organisational measures to protect your data against loss, unauthorised access, disclosure or alteration. The security of this marketing website is distinct from that of the bxChange platform itself.',
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

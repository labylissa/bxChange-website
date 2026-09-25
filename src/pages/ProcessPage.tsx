import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/Seo';
import { Section, PageHero, SectionHeading, CtaBand } from '@/components/ui';
import { ProcessIcon } from '@/components/Icon';
import { ProcessCard } from '@/components/ProcessCard';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { localizedPath, processPath } from '@/lib/routes';
import { SITE_URL } from '@/lib/site';
import { getProcessBySlug, processes, type StepType } from '@/data/processes';

const BADGE_STYLE: Record<StepType, string> = {
  start: 'bg-teal/10 text-teal-700',
  standard: 'bg-ink-100 text-ink-600',
  end: 'bg-gold/15 text-gold-700',
};

/**
 * Page d'un processus du catalogue (/fr/catalogue/:slug, /en/catalog/:slug).
 *
 * Tout le contenu propre au processus vient de `src/data/processes.ts` —
 * engendré depuis les `.bxflow` du produit et leurs traductions — jamais
 * écrit ici en dur : 71 processus, une seule page qui sait en afficher
 * n'importe lequel.
 */
export function ProcessPage() {
  const { slug } = useParams();
  const { lang } = useLang();
  const c = useContent();
  const { t } = useTranslation();

  const process = slug ? getProcessBySlug(lang, slug) : undefined;
  // Slug inconnu (ancien lien, faute de frappe) : direction le catalogue
  // plutôt qu'une 404 — la page existe, c'est l'ADRESSE précise qui ne
  // correspond à rien.
  if (!process) {
    return <Navigate to={localizedPath(lang, 'catalog')} replace />;
  }

  const related = processes.filter((p) => p.category === process.category && p.id !== process.id).slice(0, 4);

  // Chapô = uniquement la description DE CE processus (jamais la phrase
  // générique d'intro, sous peine de la dupliquer en tête des 71 pages —
  // elle vit plus bas, au-dessus du déroulé). La meta description suit la
  // même règle : spécifique à la page, tronquée seulement si elle dépasse
  // 155 caractères (un seul processus est concerné : la déclaration
  // d'opération suspecte, à cause du détail CENTIF/ANIF/UTRF).
  const description = process.description[lang].replace(/[.\s]+$/, '');
  const chapo = /[.!?…]$/.test(description) ? description : `${description}.`;
  const metaDescription =
    chapo.length > 155 ? `${chapo.slice(0, 152).replace(/\s+\S*$/, '')}…` : chapo;

  const canonical = `${SITE_URL}${processPath(lang, process.slug[lang])}`;

  // BreadcrumbList (Accueil > Catalogue > Processus) et SoftwareApplication —
  // rien d'autre : pas de FAQPage (aucune FAQ réelle n'existe pour ces
  // pages), pas d'offers ni de note/avis (le site n'affiche ni prix ni
  // témoignage chiffré, voir les règles éditoriales du site).
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t('nav.home'), item: `${SITE_URL}${localizedPath(lang, 'home')}` },
        {
          '@type': 'ListItem',
          position: 2,
          name: t('nav.catalog'),
          item: `${SITE_URL}${localizedPath(lang, 'catalog')}`,
        },
        { '@type': 'ListItem', position: 3, name: process.name[lang], item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: process.name[lang],
      description: metaDescription,
      applicationCategory: 'BusinessApplication',
      inLanguage: lang,
      url: canonical,
    },
  ];

  return (
    <>
      <Seo
        title={`${process.name[lang]} — bxFlow`}
        description={metaDescription}
        paths={{ fr: processPath('fr', process.slug.fr), en: processPath('en', process.slug.en) }}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow={t(`catalog.categories.${process.category}`)}
        title={process.name[lang]}
        subtitle={chapo}
        flow={false}
      />

      <Section>
        <Link
          to={localizedPath(lang, 'catalog')}
          className="text-sm font-medium text-ink-500 transition-colors hover:text-navy-900"
        >
          ← {c.processPage.backToCatalog}
        </Link>

        <p className="mt-6 max-w-2xl text-ink-500">{c.processPage.intro}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-navy-900">{c.processPage.stepsTitle}</h2>
            <ol className="mt-5 space-y-4">
              {process.allSteps.map((step, i) => {
                const sortantes = process.transitions.filter((tr) => tr.from === step.key);
                return (
                  <li key={step.key} className="rounded-xl border border-ink-100 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-50 text-xs font-semibold text-ink-500">
                        {i + 1}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${BADGE_STYLE[step.type]}`}
                      >
                        {c.processPage.stepTypes[step.type]}
                      </span>
                      <span className="font-semibold text-navy-900">{step.name[lang]}</span>
                    </div>
                    {sortantes.length > 0 && (
                      <ul className="ml-10 mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
                        {sortantes.map((tr) => (
                          <li key={tr.ref} className="text-sm text-ink-500">
                            <span className="font-medium text-ink-600">{tr.name[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ol>

            {process.roles.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-900">{c.processPage.rolesTitle}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {process.roles.map((role) => (
                    <li
                      key={role.slug}
                      className="rounded-full border border-ink-100 bg-ink-50 px-3.5 py-1.5 text-sm font-medium text-ink-600"
                    >
                      {role.name[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <ProcessIcon name={process.icon} />
              <h3 className="mt-3 text-base font-bold text-navy-900">{c.processPage.customizable.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.processPage.customizable.text}</p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h3 className="text-base font-bold text-navy-900">{c.processPage.deployment.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.processPage.deployment.text}</p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <SectionHeading title={c.processPage.related.title} align="left" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} to={processPath(lang, p.slug[lang])} className="block h-full">
                  <ProcessCard process={p} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>

      <CtaBand title={c.processPage.cta.title} subtitle={c.processPage.cta.subtitle} to="demo" />
    </>
  );
}

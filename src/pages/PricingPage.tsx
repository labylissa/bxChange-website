import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section, SectionHeading, PageHero } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Icons } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';

/**
 * Tarifs : une base de calcul dite, et trois périmètres types.
 *
 * La page alignait trois cartes identiques portant « Sur devis », et une
 * mention « Le plus choisi » sur celle du milieu. Trois fois « Sur devis »,
 * c'est la structure d'une grille tarifaire sans son information : la page
 * paraissait cacher quelque chose. Et « Le plus choisi » sans client affiché
 * est une affirmation invérifiable, qu'un DSI relève et qui entame le reste.
 *
 * Le chiffrage reste sur devis — c'est l'usage pour ce type de logiciel — mais
 * la page dit sur QUOI il repose : les utilisateurs actifs et les processus en
 * service. Les cartes décrivent des périmètres, pas des prix qu'elles ne
 * donnent pas.
 */
export function PricingPage() {
  const c = useContent();
  const { path } = useLang();

  return (
    <>
      <Seo page="pricing" title={c.meta.pricing.title} description={c.meta.pricing.description} />

      {/* Sans le schéma animé : on arrive ici avec une question de budget,
          pas pour voir le moteur tourner. */}
      <PageHero
        eyebrow={c.pricing.hero.eyebrow}
        title={c.pricing.hero.title}
        subtitle={c.pricing.hero.subtitle}
        flow={false}
      />

      {/* Offre pilote */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-[#F8F2E6] via-white to-[#FBF7EF] p-8 shadow-card sm:p-12">
          <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-600">
                {c.pricing.pilot.badge}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-navy-900 sm:text-3xl">{c.pricing.pilot.title}</h2>
              <p className="mt-3 max-w-xl text-ink-500">{c.pricing.pilot.text}</p>
            </div>
            <Link to={path('contact')} className="btn-primary shrink-0">
              {c.pricing.pilot.cta}
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Périmètres types */}
      <Section className="pt-0">
        <SectionHeading title={c.pricing.tiersLabel} subtitle={c.pricing.quoteLine} />
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {c.pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 120} from="up" className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <h3 className="font-display text-2xl font-bold text-navy-900">{tier.name}</h3>
                <p className="mt-2 border-b border-ink-100 pb-5 text-sm text-ink-500">{tier.tagline}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-ink-600">
                      <Icons.check className="mt-0.5 h-5 w-5 shrink-0 text-mint" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link to={path('contact')} className="btn-secondary w-full">
                    {tier.cta}
                  </Link>
                  <p className="mt-3 text-center text-xs text-ink-400">{c.pricing.ctaNote}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-full border border-teal/20 bg-teal/[0.06] px-5 py-3 text-center">
          <Icons.check className="h-5 w-5 shrink-0 text-teal-500" strokeWidth={2.5} />
          <p className="text-sm font-medium text-navy-900">{c.pricing.allTiersNote}</p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-400">{c.pricing.note}</p>
      </Section>
    </>
  );
}

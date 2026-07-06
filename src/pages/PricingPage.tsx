import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section, SectionHeading, PageHero } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Icons } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';

export function PricingPage() {
  const c = useContent();
  const { path } = useLang();

  return (
    <>
      <Seo page="pricing" title={c.meta.pricing.title} description={c.meta.pricing.description} />

      <PageHero
        eyebrow={c.pricing.hero.eyebrow}
        title={c.pricing.hero.title}
        subtitle={c.pricing.hero.subtitle}
      />

      {/* Offre pilote */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-[#F8F2E6] via-white to-[#FBF7EF] p-8 shadow-card sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
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

      {/* Paliers */}
      <Section className="pt-0">
        <SectionHeading title={c.pricing.tiersLabel} />
        <div className="mt-14 grid items-stretch gap-6 pt-4 lg:grid-cols-3">
          {c.pricing.tiers.map((tier, i) => {
            const highlighted = 'highlighted' in tier && tier.highlighted;
            return (
              <Reveal key={tier.name} delay={i * 120} from="up" className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    highlighted
                      ? 'border-gold/60 bg-white ring-1 ring-gold/30 shadow-[0_24px_60px_-15px_rgba(24,24,27,0.28)] hover:-translate-y-1.5 lg:scale-[1.03]'
                      : 'border-ink-100 bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover'
                  }`}
                >
                  {highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 shadow-card">
                      {c.pricing.popularBadge}
                    </span>
                  )}

                  <h3 className="font-display text-2xl font-bold text-navy-900">{tier.name}</h3>
                  <p className="mt-2 text-sm text-ink-500">{tier.tagline}</p>

                  {/* Prix : sur devis (aucun montant) */}
                  <div className="mt-5 border-b border-ink-100 pb-5">
                    <p className={`font-display text-2xl font-bold ${highlighted ? 'text-gold-600' : 'text-navy-900'}`}>
                      {c.pricing.onQuote}
                    </p>
                    <p className="mt-1 text-xs text-ink-400">{c.pricing.onQuoteSub}</p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-ink-600">
                        {highlighted ? (
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy-900">
                            <Icons.check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                        ) : (
                          <Icons.check className="mt-0.5 h-5 w-5 shrink-0 text-mint" strokeWidth={2.5} />
                        )}
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      to={path('contact')}
                      className={`w-full ${highlighted ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      {tier.cta}
                    </Link>
                    <p className="mt-3 text-center text-xs text-ink-400">{c.pricing.ctaNote}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Réassurance : catalogue inclus dans tous les paliers */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-full border border-teal/20 bg-teal/[0.06] px-5 py-3 text-center">
          <Icons.check className="h-5 w-5 shrink-0 text-teal-500" strokeWidth={2.5} />
          <p className="text-sm font-medium text-navy-900">{c.pricing.allTiersNote}</p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-400">
          {c.pricing.note}
        </p>
      </Section>
    </>
  );
}

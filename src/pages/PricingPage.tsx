import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section, SectionHeading } from '@/components/ui';
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

      <section className="bg-navy-900 py-20 text-white lg:py-24">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{c.pricing.hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            {c.pricing.hero.title}
          </h1>
          <p className="mt-6 text-lg text-white/70">{c.pricing.hero.subtitle}</p>
        </div>
      </section>

      {/* Offre pilote */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-teal/30 bg-gradient-to-br from-navy-900 to-navy-700 p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
          <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                {c.pricing.pilot.badge}
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{c.pricing.pilot.title}</h2>
              <p className="mt-3 max-w-xl text-white/70">{c.pricing.pilot.text}</p>
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
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {c.pricing.tiers.map((tier, i) => {
            const highlighted = 'highlighted' in tier && tier.highlighted;
            return (
              <Reveal key={tier.name} delay={i * 120} from="up" className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  highlighted
                    ? 'border-teal bg-white shadow-card-hover ring-1 ring-teal/30 lg:-translate-y-2'
                    : 'border-ink-100 bg-white shadow-card'
                }`}
              >
                <h3 className="font-display text-2xl font-bold text-navy-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-ink-500">{tier.tagline}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink-600">
                      <Icons.check className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={path('contact')}
                  className={`mt-8 ${highlighted ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {tier.cta}
                </Link>
              </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-400">
          {c.pricing.note}
        </p>
      </Section>
    </>
  );
}

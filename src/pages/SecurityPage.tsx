import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Icons, ProcessIcon } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import type { ProcessIconName } from '@/data/processes';

const PILLAR_ICONS: ProcessIconName[] = [
  'shield',
  'building',
  'refresh',
  'user-plus',
  'clipboard',
  'file-check',
];

export function SecurityPage() {
  const c = useContent();
  const { path } = useLang();

  return (
    <>
      <Seo page="security" title={c.meta.security.title} description={c.meta.security.description} />

      <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-24">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
        <div className="container-page relative max-w-3xl">
          <span className="eyebrow">{c.security.hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            {c.security.hero.title}
          </h1>
          <p className="mt-6 text-lg text-white/70">{c.security.hero.subtitle}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.security.pillars.map((pillar, i) => (
            <Reveal key={i} delay={(i % 3) * 100} from="up">
              <div className="card group h-full transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-teal transition-transform duration-300 group-hover:scale-110">
                  <ProcessIcon name={PILLAR_ICONS[i] ?? 'shield'} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-ink-50 p-8 sm:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">{c.security.dossier.title}</h2>
              <p className="mt-3 max-w-xl text-ink-500">{c.security.dossier.text}</p>
            </div>
            <Link to={path('contact')} className="btn-primary shrink-0">
              {c.security.dossier.cta}
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

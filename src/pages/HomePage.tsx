import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section, SectionHeading, CtaBand } from '@/components/ui';
import { Icons, ProcessIcon } from '@/components/Icon';
import { SyncMark } from '@/components/Logo';
import { ProcessCard } from '@/components/ProcessCard';
import { Reveal } from '@/components/Reveal';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { getFeaturedProcesses, processes, type ProcessIconName } from '@/data/processes';

const HOW_ICONS: ProcessIconName[] = ['refresh', 'inbox', 'file-check', 'clipboard'];

/** Petit connecteur horizontal avec un point qui circule (effet flux de données). */
function FlowLine({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-0.5 flex-1 rounded bg-gradient-to-r from-teal/50 to-mint/50 ${className}`}>
      <span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_10px_2px] shadow-teal/60 animate-travel motion-reduce:hidden" />
    </div>
  );
}

function HeroVisual() {
  const c = useContent();
  const { lang } = useLang();
  const items = getFeaturedProcesses().slice(0, 2);
  return (
    <div className="relative animate-float-slow motion-reduce:animate-none">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-teal/10 blur-2xl animate-pulse-soft motion-reduce:animate-none" aria-hidden />
      <div className="relative rounded-3xl border border-white/10 bg-navy-800/80 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="ml-2 text-xs font-medium text-white/50">bxChange</span>
        </div>

        {/* Mini-flux : logiciels existants → bxChange → automatisé */}
        <div className="flex items-center gap-2 pt-5">
          <div className="flex flex-col items-center gap-1.5">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70">
              <ProcessIcon name="building" className="h-5 w-5" />
            </span>
            <span className="text-[10px] font-medium text-white/40">
              {lang === 'fr' ? 'Vos logiciels' : 'Your software'}
            </span>
          </div>
          <FlowLine />
          <div className="flex flex-col items-center gap-1.5">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/15 ring-1 ring-teal/40">
              <SyncMark className="h-9 w-9 animate-spin-slow motion-reduce:animate-none" />
            </span>
            <span className="text-[10px] font-semibold text-teal">bxChange</span>
          </div>
          <FlowLine />
          <div className="flex flex-col items-center gap-1.5">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint/15 text-mint ring-1 ring-mint/30">
              <Icons.check className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="text-[10px] font-medium text-white/40">
              {lang === 'fr' ? 'Automatisé' : 'Automated'}
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-2.5">
          {items.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-teal/40"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal/15 text-teal">
                <ProcessIcon name={p.icon} className="h-5 w-5" />
              </span>
              <p className="truncate text-sm font-semibold text-white">{p.name[lang]}</p>
              <span className="ml-auto rounded-full bg-mint/15 px-2 py-0.5 text-[10px] font-semibold text-mint">
                {lang === 'fr' ? 'Prêt' : 'Ready'}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-teal/10 px-4 py-3">
          <span className="text-sm font-medium text-white">{c.home.hero.trust}</span>
          <Icons.check className="h-5 w-5 shrink-0 text-teal" />
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const c = useContent();
  const { lang, path } = useLang();
  const featured = getFeaturedProcesses();

  return (
    <>
      <Seo page="home" title={c.meta.home.title} description={c.meta.home.description} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:36px_36px] opacity-50" />
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 animate-pulse-soft rounded-full bg-teal/20 blur-3xl motion-reduce:animate-none" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 animate-float rounded-full bg-mint/10 blur-3xl motion-reduce:animate-none" />
        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="eyebrow">{c.home.hero.eyebrow}</span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              {c.home.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">{c.home.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={path('demo')} className="btn-primary hover:-translate-y-0.5">
                {c.home.hero.ctaPrimary}
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
              <Link to={path('catalog')} className="btn-ghost-light">
                {c.home.hero.ctaSecondary}
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/50">{c.home.hero.trust}</p>
          </div>
          <div className="lg:pl-6">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE — workflow */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow={c.home.how.eyebrow} title={c.home.how.title} />
        </Reveal>
        <div className="relative mt-16">
          {/* Ligne de connexion animée (desktop) */}
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden lg:block">
            <div className="relative mx-auto h-0.5 max-w-5xl rounded bg-gradient-to-r from-teal/30 via-teal/50 to-mint/30">
              <span className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_12px_2px] shadow-teal/60 animate-travel motion-reduce:hidden" />
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {c.home.how.steps.map((step, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-teal shadow-card ring-1 ring-teal/20 transition-transform duration-300 hover:scale-105">
                      <ProcessIcon name={HOW_ICONS[i] ?? 'refresh'} className="h-7 w-7" />
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-xs font-bold text-navy-900 ring-4 ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <span className="mt-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-teal-500">
                    {lang === 'fr' ? 'Étape' : 'Step'} {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* BÉNÉFICES */}
      <Section className="bg-ink-50">
        <Reveal>
          <SectionHeading eyebrow={c.home.benefits.eyebrow} title={c.home.benefits.title} />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.home.benefits.items.map((item, i) => (
            <Reveal key={i} delay={i * 100} from="up">
              <div className="card h-full transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal-500">
                  <Icons.check className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CATALOGUE — section centrale */}
      <Section id="catalogue">
        <Reveal>
          <SectionHeading
            eyebrow={c.home.catalog.eyebrow}
            title={c.home.catalog.title}
            subtitle={c.home.catalog.subtitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} from="scale">
              <ProcessCard process={p} />
            </Reveal>
          ))}
          {/* Carte "process manquant" */}
          <Reveal delay={featured.length * 80} from="scale">
            <div className="flex h-full flex-col justify-between rounded-2xl border-2 border-dashed border-teal/40 bg-teal/5 p-6">
              <div>
                <h3 className="text-base font-semibold text-navy-900">{c.home.catalog.missingTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.home.catalog.missingText}</p>
              </div>
              <Link
                to={path('contact')}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-500 hover:gap-2"
              >
                {c.home.catalog.missingCta}
                <Icons.arrowRight className="h-4 w-4 transition-all" />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 text-center">
          <Link to={path('catalog')} className="btn-secondary">
            {c.home.catalog.cardCta}
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-ink-400">
            {processes.length}+ {lang === 'fr' ? 'processus disponibles' : 'processes available'}
          </p>
        </div>
      </Section>

      {/* SECTEURS */}
      <Section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 animate-pulse-soft rounded-full bg-teal/10 blur-3xl motion-reduce:animate-none" />
        <Reveal>
          <SectionHeading eyebrow={c.home.sectors.eyebrow} title={c.home.sectors.title} invert />
        </Reveal>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {(['pme', 'accounting', 'microfinance'] as const).map((key, i) => {
            const sector = c.useCases.sectors[key];
            const icons: ProcessIconName[] = ['building', 'file-check', 'wallet'];
            return (
              <Reveal key={key} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white/[0.07]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/15 text-teal transition-colors group-hover:bg-teal group-hover:text-navy-900">
                    <ProcessIcon name={icons[i]} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{sector.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{sector.benefit}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="relative mt-10 text-center">
          <Link to={path('useCases')} className="btn-ghost-light">
            {c.home.sectors.cta}
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <CtaBand title={c.home.finalCta.title} subtitle={c.home.finalCta.subtitle} />
    </>
  );
}

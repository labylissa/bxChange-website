import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section, SectionHeading, CtaBand } from '@/components/ui';
import { Icons, ProcessIcon } from '@/components/Icon';
import { WorkflowMini } from '@/components/WorkflowAnimation';
import { ProcessCard } from '@/components/ProcessCard';
import { Reveal } from '@/components/Reveal';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { getFeaturedProcesses, processes, type ProcessIconName } from '@/data/processes';

// Une icône par étape, dans l'ordre du texte : on dessine le déroulé, une
// demande ouvre un dossier, les étapes avancent, les logiciels existants
// sont sollicités. L'ancienne liste illustrait le discours d'avant.
const HOW_ICONS: ProcessIconName[] = ['flow', 'inbox', 'steps', 'plug'];

// Reprise à l'identique de la page Produit : l'aperçu et le détail
// montrent la même capacité, ils doivent montrer la même icône.
const CAP_ICONS: ProcessIconName[] = [
  'flow', 'user-plus', 'clipboard', 'clock', 'inbox', 'plug',
  'receipt', 'chart', 'steps', 'folder', 'file-check', 'lifebuoy',
];

function HeroVisual() {
  const c = useContent();
  const { lang } = useLang();
  const items = getFeaturedProcesses().slice(0, 2);
  return (
    <div className="relative animate-float-slow motion-reduce:animate-none">
      <div className="absolute -inset-8 rounded-[3rem] blur-3xl animate-pulse-soft motion-reduce:animate-none" style={{ background: 'radial-gradient(circle, rgba(201,164,92,0.18), transparent 68%)' }} aria-hidden />
      <div className="relative rounded-3xl border border-white/70 bg-white/70 p-5 shadow-[0_24px_70px_-20px_rgba(44,46,53,0.28)] ring-1 ring-gold/15 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-ink-100 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="ml-2 text-xs font-medium text-ink-400">bxFlow</span>
        </div>

        {/* Un dossier qui traverse un processus, étapes et transitions nommées.

            Ce bloc montrait « Vos logiciels → bxFlow → Automatisé » : la
            définition d'une passerelle, pas d'un moteur de processus. C'était
            le premier visuel de la page d'accueil, donc la première idée que
            le visiteur se faisait du produit — et c'était la mauvaise. */}
        <div className="pt-5">
          <WorkflowMini />
        </div>

        <div className="mt-5 grid gap-2.5">
          {items.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50 p-3 transition-colors hover:border-teal/40"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal-500">
                <ProcessIcon name={p.icon} className="h-5 w-5" />
              </span>
              <p className="truncate text-sm font-semibold text-navy-900">{p.name[lang]}</p>
              <span className="ml-auto rounded-full bg-mint/10 px-2 py-0.5 text-[10px] font-semibold text-mint">
                {lang === 'fr' ? 'Prêt' : 'Ready'}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-teal/5 px-4 py-3">
          <span className="text-sm font-medium text-navy-900">{c.home.hero.trust}</span>
          <Icons.check className="h-5 w-5 shrink-0 text-teal-500" />
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
      {/* Le décor de fond a été retiré : cercles concentriques et grille de
          points remplissaient la moitié droite du hero sans rien dire, et la
          carte du processus s'en trouvait repoussée dans un coin. */}
      <section className="relative border-b border-ink-100 bg-white">
        <div className="container-page relative grid items-center gap-10 py-16 lg:grid-cols-[1fr_1.15fr] lg:py-20">
          <div className="animate-fade-up">
            <span className="eyebrow">{c.home.hero.eyebrow}</span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-navy-900 sm:text-5xl lg:text-6xl">
              {c.home.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-500">{c.home.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={path('demo')} className="btn-primary hover:-translate-y-0.5">
                {c.home.hero.ctaPrimary}
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
              <Link to={path('catalog')} className="btn-secondary">
                {c.home.hero.ctaSecondary}
              </Link>
            </div>
            <p className="mt-6 text-sm text-ink-400">{c.home.hero.trust}</p>
          </div>
          {/* La carte occupe désormais la colonne la plus large et s'y centre.
              Elle était contrainte à une demi-largeur avec un décalage à
              gauche, ce qui la tassait contre le texte alors que le décor
              occupait le reste. */}
          <div className="mx-auto w-full max-w-lg lg:max-w-none">
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
          <div className="pointer-events-none absolute left-16 right-16 top-8 hidden lg:block">
            <div className="relative h-px rounded bg-gradient-to-r from-transparent via-gold/50 to-transparent">
              <span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_10px_2px] shadow-gold/50 animate-travel motion-reduce:hidden" />
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {c.home.how.steps.map((step, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5EBD8] to-white text-gold-600 shadow-card ring-1 ring-gold/30 transition-transform duration-300 hover:scale-105 hover:shadow-card-hover">
                      <ProcessIcon name={HOW_ICONS[i] ?? 'refresh'} className="h-7 w-7" />
                    </span>
                    <span className="absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-600 text-xs font-bold text-white shadow-card ring-[3px] ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <span className="mt-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
                    {lang === 'fr' ? 'Étape' : 'Step'} {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Hauteur réservée pour deux lignes à partir de `lg`.
                      Sans elle, un titre qui tient sur une ligne fait remonter
                      son paragraphe et la rangée décroche : quatre colonnes dont
                      les textes commencent à quatre hauteurs différentes. La
                      réserve ne s'applique qu'en disposition à quatre colonnes —
                      empilées, il n'y a rien à aligner et le blanc serait inutile. */}
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-navy-900 lg:min-h-[3.25rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* APERÇU DES CAPACITÉS

          Douze cartes compactes — un intitulé, une phrase — qui lisent la liste
          de la page Produit. On y perd la ligne technique, volontairement :
          l'accueil s'adresse à quelqu'un qui ne connaît pas encore le produit,
          et le détail l'attend une page plus loin. */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={c.home.capabilities.eyebrow}
            title={c.home.capabilities.title}
            subtitle={c.home.capabilities.subtitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.product.capabilities.items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i, 5) * 70} from="up">
              <div className="flex h-full items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 transition-colors hover:border-gold/40">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold/15 to-gold/5 text-gold-600 ring-1 ring-gold/20">
                  <ProcessIcon name={CAP_ICONS[i] ?? 'flow'} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{item.plain}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <Link to={path('product')} className="btn-secondary">
              {c.home.capabilities.cta}
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* BÉNÉFICES */}
      <Section className="bg-ink-50">
        <Reveal>
          <SectionHeading eyebrow={c.home.benefits.eyebrow} title={c.home.benefits.title} />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.home.benefits.items.map((item, i) => (
            <Reveal key={i} delay={i * 100} from="up">
              <div className="card h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 text-gold-600 ring-1 ring-gold/20">
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
      <Section className="relative overflow-hidden bg-gradient-to-b from-[#F8F4EC] to-ink-50">
        <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 animate-pulse-soft rounded-full bg-gold/10 blur-3xl motion-reduce:animate-none" />
        <Reveal>
          <SectionHeading eyebrow={c.home.sectors.eyebrow} title={c.home.sectors.title} />
        </Reveal>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {(['pme', 'accounting', 'microfinance'] as const).map((key, i) => {
            const sector = c.useCases.sectors[key];
            const icons: ProcessIconName[] = ['building', 'file-check', 'wallet'];
            return (
              <Reveal key={key} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-600 transition-colors group-hover:bg-gold group-hover:text-white">
                    <ProcessIcon name={icons[i]} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-navy-900">{sector.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{sector.benefit}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="relative mt-10 text-center">
          <Link to={path('useCases')} className="btn-secondary">
            {c.home.sectors.cta}
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <CtaBand title={c.home.finalCta.title} subtitle={c.home.finalCta.subtitle} />
    </>
  );
}

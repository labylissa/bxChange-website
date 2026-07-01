import { Seo } from '@/components/Seo';
import { Section, SectionHeading, CtaBand } from '@/components/ui';
import { ProcessIcon } from '@/components/Icon';
import { SyncMark } from '@/components/Logo';
import { Reveal } from '@/components/Reveal';
import { useContent } from '@/hooks/useContent';
import type { ProcessIconName } from '@/data/processes';

const CAP_ICONS: ProcessIconName[] = ['refresh', 'chart', 'clipboard', 'inbox', 'file-check', 'clock'];

/** Connecteur animé (point qui circule) entre deux nœuds du flux. */
function Connector({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="relative mx-auto h-8 w-0.5 rounded bg-gradient-to-b from-teal/50 to-mint/50 md:hidden">
        <span className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_8px_2px] shadow-teal/60 animate-[travel_2.6s_ease-in-out_infinite] motion-reduce:hidden" style={{ top: 0 }} />
      </div>
    );
  }
  return (
    <div className="relative hidden h-0.5 flex-1 self-center rounded bg-gradient-to-r from-teal/50 to-mint/50 md:block">
      <span className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_10px_2px] shadow-teal/60 animate-travel motion-reduce:hidden" />
    </div>
  );
}

function FlowDiagram() {
  const c = useContent();
  const d = c.product.diagram;
  const nodes = [
    { label: d.legacy, note: d.legacyNote, tone: 'muted' as const, icon: 'building' as ProcessIconName },
    { label: d.engine, note: d.engineNote, tone: 'accent' as const, icon: 'refresh' as ProcessIconName },
    { label: d.modern, note: d.modernNote, tone: 'muted' as const, icon: 'chart' as ProcessIconName },
  ];
  return (
    <div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
        {nodes.map((n, i) => (
          <div key={i} className="flex w-full flex-col items-center md:contents">
            <div
              className={`w-full rounded-2xl border p-6 text-center md:flex-1 ${
                n.tone === 'accent'
                  ? 'border-teal bg-navy-900 text-white shadow-card-hover'
                  : 'border-ink-200 bg-white text-navy-900'
              }`}
            >
              <span
                className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                  n.tone === 'accent' ? 'bg-teal/15 text-teal' : 'bg-ink-50 text-teal-500'
                }`}
              >
                {n.tone === 'accent' ? (
                  <SyncMark className="h-9 w-9 animate-spin-slow motion-reduce:animate-none" />
                ) : (
                  <ProcessIcon name={n.icon} className="h-6 w-6" />
                )}
              </span>
              <p className="mt-3 font-display text-lg font-bold">{n.label}</p>
              <p className={`mt-1 text-sm ${n.tone === 'accent' ? 'text-teal' : 'text-ink-400'}`}>
                {n.note}
              </p>
            </div>
            {i < nodes.length - 1 && (
              <>
                <Connector />
                <Connector vertical />
              </>
            )}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-500">{d.caption}</p>
    </div>
  );
}

export function ProductPage() {
  const c = useContent();

  return (
    <>
      <Seo page="product" title={c.meta.product.title} description={c.meta.product.description} />

      <section className="bg-navy-900 py-20 text-white lg:py-24">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{c.product.hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            {c.product.hero.title}
          </h1>
          <p className="mt-6 text-lg text-white/70">{c.product.hero.subtitle}</p>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionHeading title={c.product.capabilities.title} align="left" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.product.capabilities.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 100} from="up">
              <div className="card group h-full transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal-500 transition-colors group-hover:bg-teal group-hover:text-navy-900">
                  <ProcessIcon name={CAP_ICONS[i] ?? 'refresh'} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink-600">{item.plain}</p>
                <p className="mt-3 border-t border-ink-100 pt-3 text-xs leading-relaxed text-ink-400">
                  {item.tech}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-50">
        <Reveal>
          <SectionHeading title={c.product.diagram.title} />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14">
            <FlowDiagram />
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
          <h2 className="text-xl font-bold text-navy-900">{c.product.note.title}</h2>
          <p className="mt-3 leading-relaxed text-ink-500">{c.product.note.text}</p>
        </div>
      </Section>

      <CtaBand title={c.product.cta.title} subtitle={c.product.cta.subtitle} />
    </>
  );
}

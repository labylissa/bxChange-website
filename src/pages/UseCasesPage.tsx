import { Seo } from '@/components/Seo';
import { Section, CtaBand, PageHero } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Icons } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';

const SECTOR_KEYS = ['pme', 'accounting', 'microfinance', 'aspirational'] as const;

export function UseCasesPage() {
  const c = useContent();

  return (
    <>
      <Seo page="useCases" title={c.meta.useCases.title} description={c.meta.useCases.description} />

      <PageHero
        eyebrow={c.useCases.hero.eyebrow}
        title={c.useCases.hero.title}
        subtitle={c.useCases.hero.subtitle}
      />

      <Section>
        <div className="grid gap-8">
          {SECTOR_KEYS.map((key, idx) => {
            const s = c.useCases.sectors[key];
            const aspirational = key === 'aspirational';
            return (
              <Reveal key={key} delay={idx * 90} from={idx % 2 === 0 ? 'left' : 'right'}>
              <div
                className={`overflow-hidden rounded-2xl border shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
                  aspirational ? 'border-dashed border-gold/50 bg-gold/[0.04]' : 'border-ink-100 bg-white'
                }`}
              >
                <div className="grid md:grid-cols-[minmax(0,260px)_1fr]">
                  <div
                    className={`flex items-center gap-4 p-6 md:flex-col md:items-start md:justify-center ${
                      aspirational ? 'bg-gold/10' : 'bg-gradient-to-br from-[#F8F2E6] to-ink-50'
                    }`}
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-600">
                      <Icons.sparkArrow className="h-6 w-6" />
                    </span>
                    <h2 className="font-display text-xl font-bold text-navy-900">{s.name}</h2>
                  </div>
                  <div className="grid gap-6 p-6 sm:grid-cols-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {c.useCases.pattern.problem}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-500">
                        {c.useCases.pattern.solution}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-mint">
                        {c.useCases.pattern.benefit}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-navy-900">
                        {s.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand title={c.useCases.cta.title} subtitle={c.useCases.cta.subtitle} />
    </>
  );
}

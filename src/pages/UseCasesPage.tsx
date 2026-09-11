import { Seo } from '@/components/Seo';
import { Section, CtaBand, PageHero } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { ProcessIcon } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';
import type { ProcessIconName } from '@/data/processes';

/**
 * Banque et assurance en tête, microfinance et entreprise ensuite.
 *
 * La page présentait la banque en dernier, dans un cadre en pointillés qui la
 * désignait comme une aspiration — et avec le texte le plus faible des quatre.
 * Or c'est là que les processus livrés font la différence : aucun moteur
 * générique n'arrive avec une déclaration de soupçon prête à l'emploi. Chaque
 * secteur nomme donc les processus qu'il trouve dans le catalogue, pour que la
 * promesse se vérifie en un clic.
 */
const SECTEURS: readonly { cle: 'banque' | 'assurance' | 'microfinance' | 'entreprise'; icone: ProcessIconName }[] = [
  { cle: 'banque', icone: 'shield' },
  { cle: 'assurance', icone: 'file-check' },
  { cle: 'microfinance', icone: 'wallet' },
  { cle: 'entreprise', icone: 'building' },
];

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
          {SECTEURS.map(({ cle, icone }, idx) => {
            const s = c.useCases.sectors[cle];
            return (
              <Reveal key={cle} delay={idx * 90} from={idx % 2 === 0 ? 'left' : 'right'}>
                <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <div className="grid md:grid-cols-[minmax(0,240px)_1fr]">
                    <div className="flex items-center gap-4 bg-gradient-to-br from-[#F8F2E6] to-ink-50 p-6 md:flex-col md:items-start md:justify-center">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-600">
                        <ProcessIcon name={icone} className="h-6 w-6" />
                      </span>
                      <h2 className="font-display text-xl font-bold text-navy-900">{s.name}</h2>
                    </div>
                    <div className="p-6">
                      <div className="grid gap-6 sm:grid-cols-3">
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
                          <p className="mt-2 text-sm font-medium leading-relaxed text-navy-900">{s.benefit}</p>
                        </div>
                      </div>
                      <div className="mt-6 border-t border-ink-100 pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                          {c.useCases.pattern.examples}
                        </p>
                        <ul className="mt-2.5 flex flex-wrap gap-2">
                          {s.examples.map((nom) => (
                            <li
                              key={nom}
                              className="rounded-full border border-gold/30 bg-gold/[0.06] px-3 py-1 text-xs font-medium text-navy-900"
                            >
                              {nom}
                            </li>
                          ))}
                        </ul>
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

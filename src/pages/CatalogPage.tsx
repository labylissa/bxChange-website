import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section, PageHero } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Icons } from '@/components/Icon';
import { ProcessCard } from '@/components/ProcessCard';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import {
  PROCESS_CATEGORIES,
  processes,
  type ProcessCategory,
} from '@/data/processes';

type Filter = ProcessCategory | 'all';

export function CatalogPage() {
  const c = useContent();
  const { path } = useLang();
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(
    () => (filter === 'all' ? processes : processes.filter((p) => p.category === filter)),
    [filter],
  );

  const filters: Filter[] = ['all', ...PROCESS_CATEGORIES];

  return (
    <>
      <Seo page="catalog" title={c.meta.catalog.title} description={c.meta.catalog.description} />

      <PageHero
        eyebrow={c.catalog.hero.eyebrow}
        title={c.catalog.hero.title}
        subtitle={c.catalog.hero.subtitle}
      />

      <Section>
        {/* Filtres */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label={c.catalog.filters.label}>
          {filters.map((f) => {
            const label = f === 'all' ? c.catalog.filters.all : c.catalog.categories[f];
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-gold text-navy-900 shadow-card'
                    : 'border border-ink-200 bg-white text-ink-600 hover:border-gold hover:text-gold-600'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-ink-400">
          {filtered.length}{' '}
          {filtered.length > 1
            ? c.catalog.filters.results_other.replace('{{count}}', '').trim()
            : c.catalog.filters.results_one.replace('{{count}}', '').trim()}
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 8) * 60} from="scale">
              <ProcessCard process={p} />
            </Reveal>
          ))}
        </div>

        {/* Process manquant */}
        <div className="mt-12 rounded-2xl border border-ink-100 bg-ink-50 p-8 text-center">
          <h2 className="text-xl font-bold text-navy-900">{c.catalog.missing.title}</h2>
          <p className="mx-auto mt-2 max-w-xl text-ink-500">{c.catalog.missing.text}</p>
          <Link to={path('contact')} className="btn-primary mt-6">
            {c.catalog.missing.cta}
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}

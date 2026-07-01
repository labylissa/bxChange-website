import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section } from '@/components/ui';
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

      <section className="bg-navy-900 py-20 text-white lg:py-24">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{c.catalog.hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            {c.catalog.hero.title}
          </h1>
          <p className="mt-6 text-lg text-white/70">{c.catalog.hero.subtitle}</p>
        </div>
      </section>

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
                    ? 'bg-navy-900 text-white'
                    : 'border border-ink-200 bg-white text-ink-600 hover:border-teal hover:text-teal-500'
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

import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icons } from './Icon';
import { HeroAtmosphere } from './HeroAtmosphere';
import { useLang } from '@/hooks/useLang';
import type { PageKey } from '@/lib/routes';

export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

/** En-tête de page clair et stylé (dégradé doux + grille + halos teal/mint). */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-white">
      <HeroAtmosphere dense={false} />
      <div className="container-page relative max-w-3xl py-16 lg:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-6 text-lg text-ink-500">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  invert?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl font-bold sm:text-4xl ${
          invert ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${invert ? 'text-white/70' : 'text-ink-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Bandeau d'appel à l'action, réutilisé en bas des pages. */
export function CtaBand({
  title,
  subtitle,
  ctaLabel,
  to = 'demo',
}: {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  to?: PageKey;
}) {
  const { t } = useTranslation();
  const { path } = useLang();
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-[#F8F2E6] via-white to-[#FBF7EF] px-6 py-14 text-center shadow-card sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:32px_32px] opacity-50" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-ink-500">{subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to={path(to)} className="btn-primary">
                {ctaLabel ?? t('common.requestDemo')}
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

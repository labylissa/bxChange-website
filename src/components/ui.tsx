import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icons } from './Icon';
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
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:32px_32px] opacity-60" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-white/70">{subtitle}</p>
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

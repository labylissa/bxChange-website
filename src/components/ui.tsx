import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icons } from './Icon';
import { useLang } from '@/hooks/useLang';
import type { PageKey } from '@/lib/routes';
import { WorkflowAnimation } from './WorkflowAnimation';

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

/** Illustration encadrée (bord + halo dorés) — pour intégrer un visuel au thème. */
export function Illustration({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gold/10 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-2xl border border-gold/20 bg-gold/5" aria-hidden />
      <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-white shadow-card-hover ring-1 ring-gold/10">
        <img src={src} alt={alt} loading="lazy" width={1379} height={752} className="w-full" />
      </div>
    </div>
  );
}

/** En-tête de page clair et stylé (dégradé doux + grille + halos teal/mint). */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  flow,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  /** `false` pour les pages où le schéma n'apporte rien (mentions légales). */
  flow?: boolean;
}) {
  return (
    <section className="relative border-b border-ink-100 bg-white">
      {/* Le décor de fond a été retiré : cercles concentriques et grille de
          points occupaient toute la hauteur du hero pour ne rien dire, et
          laissaient une grande zone vide au-dessus du contenu. Le schéma
          ci-dessous remplit ce rôle en montrant le produit. */}
      <div className="container-page py-14 lg:py-16">
        {/* Le TEXTE reste borné à une largeur de lecture confortable ; le
            schéma, lui, prend toute la largeur du conteneur — il lui en faut
            720 pixels pour que les intitulés de transitions tiennent. */}
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-6 text-lg text-ink-500">{subtitle}</p>}
          {children}
        </div>
        {/* Le schéma animé n'est plus sur tous les heros : il l'a été, et le
            commentaire l'affirmait encore alors que six pages sur neuf le
            désactivaient déjà. Il reste là où le visiteur DÉCOUVRE le produit
            (catalogue, cas d'usage, contact) ; il est retiré partout où il
            repousse vers le bas ce qu'on est venu chercher — le calendrier de
            la page démo, le tarif, les fiches de l'équipe. */}
        {flow !== false && (
          <div className="mt-10 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 lg:p-8">
            <WorkflowAnimation />
          </div>
        )}
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

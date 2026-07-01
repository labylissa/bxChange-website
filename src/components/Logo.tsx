interface LogoProps {
  /** 'light' pour fond sombre (texte blanc), 'dark' pour fond clair (texte navy). */
  variant?: 'light' | 'dark';
  className?: string;
  /** N'afficher que la marque carrée (icône), sans le mot. */
  markOnly?: boolean;
}

/** Flèches sync/refresh seules (teal), sans disque — pour l'intégration dans le « b ». */
export function SyncArrows({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-hidden="true" fill="none">
      <path d="M6 11.4a6 6 0 0 1 10.2-2.6" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M18 12.6A6 6 0 0 1 7.8 15.2" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M16.6 5.6v3.4h-3.4" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.4 18.4V15h3.4" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Icône sync/refresh de la marque (flèches teal dans un disque navy) — favicon / grands marqueurs. */
export function SyncMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-hidden="true" fill="none">
      <circle cx="16" cy="16" r="16" fill="#0A1628" />
      <path d="M10 14.2a6.2 6.2 0 0 1 10.6-2.6" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M22 17.8A6.2 6.2 0 0 1 11.4 20.4" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M20.8 8.4v3.6h-3.6" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.2 23.6V20h3.6" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Logo de marque bxChange (artwork original, blanc sur navy — voir img/).
 * Conçu pour fonds sombres (header navy, footer, hero).
 * `variant` est conservé pour compatibilité d'API ; l'artwork est mono-version.
 */
export function Logo({ className = '', markOnly = false }: LogoProps) {
  if (markOnly) {
    return <SyncMark className={className || 'h-9 w-9'} />;
  }

  return (
    <img
      src="/logo-bxchange.png"
      alt="bxChange"
      className={className || 'h-14 w-auto'}
      width={951}
      height={921}
    />
  );
}

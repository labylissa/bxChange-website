interface LogoProps {
  /** 'light' pour fond sombre (texte blanc), 'dark' pour fond clair (texte navy). */
  variant?: 'light' | 'dark';
  className?: string;
  /** N'afficher que la marque carrée (icône), sans le mot. */
  markOnly?: boolean;
}

/** Icône sync/refresh de la marque (deux flèches circulaires teal). */
export function SyncMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <circle cx="16" cy="16" r="16" fill="#0A1628" />
      <path
        d="M10 14.2a6.2 6.2 0 0 1 10.6-2.6"
        stroke="#2DD4E8"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M22 17.8A6.2 6.2 0 0 1 11.4 20.4"
        stroke="#2DD4E8"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path d="M20.8 8.4v3.6h-3.6" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.2 23.6V20h3.6" stroke="#2DD4E8" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ variant = 'dark', className = '', markOnly = false }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';

  if (markOnly) {
    return <SyncMark className={className || 'h-9 w-9'} />;
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <SyncMark className="h-8 w-8 shrink-0" />
      <span className={`font-display text-xl font-bold leading-none tracking-tight ${textColor}`}>
        bx<span className="text-teal">Change</span>
      </span>
    </span>
  );
}

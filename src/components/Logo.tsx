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

/** Icône sync/refresh de la marque (flèches blanches dans un disque doré). */
export function SyncMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="syncmark-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C9A45C" />
          <stop offset="1" stopColor="#A8874A" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="16" fill="url(#syncmark-gold)" />
      <path d="M10 14.2a6.2 6.2 0 0 1 10.6-2.6" stroke="#FFFFFF" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M22 17.8A6.2 6.2 0 0 1 11.4 20.4" stroke="#FFFFFF" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M20.8 8.4v3.6h-3.6" stroke="#FFFFFF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.2 23.6V20h3.6" stroke="#FFFFFF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Le logo bxFlow, dans sa forme livrée avec le produit.
 *
 * Le site portait encore l'ancienne marque — un carré « bx » surmontant le mot
 * « Change ». Le produit s'appelle bxFlow et dispose de son logotype : un
 * motif de flux doré, « bx » en encre marine, « Flow » en doré.
 *
 * ## Deux fonds, deux traitements — et pourquoi pas une seule image
 *
 * Le logotype porte du marine sur fond transparent. Sur le pied de page, qui
 * est marine, le « bx » disparaîtrait purement et simplement. Sur fond sombre
 * on assemble donc la tuile (qui apporte son propre fond) et le mot en texte,
 * aux couleurs de la marque.
 *
 * Ce n'est pas la solution idéale : un export clair du logotype — « bx » en
 * blanc — serait plus fidèle et remplacerait ce montage par une simple image.
 * À demander au moment où la charte sera figée.
 */
export function Logo({ variant = 'dark', className = '', markOnly = false }: LogoProps) {
  if (markOnly) {
    return (
      <img
        src="/icone-bxflow.png"
        alt="bxFlow"
        className={className || 'h-9 w-9 rounded-lg'}
        width={512}
        height={512}
      />
    );
  }

  // Fond sombre : la tuile porte son propre marine, le mot est écrit.
  if (variant === 'light') {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <img
          src="/icone-bxflow.png"
          alt=""
          aria-hidden="true"
          className="h-9 w-9 rounded-lg"
          width={512}
          height={512}
        />
        <span className="text-xl font-bold tracking-tight text-white">
          bx<span className="text-gold">Flow</span>
        </span>
      </span>
    );
  }

  return (
    <img
      src="/logo-bxflow.png"
      alt="bxFlow"
      className={className || 'h-10 w-auto'}
      width={1000}
      height={250}
    />
  );
}

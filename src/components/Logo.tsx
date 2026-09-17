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
 * Le logo bxFlow — une seule composition, deux fonds.
 *
 * L'en-tête portait le logotype en image (`logo-bxflow.png`, motif doré + mot
 * en encre) et le pied de page un montage tuile + mot. Deux dessins pour une
 * seule marque : selon la page qu'il regardait, le visiteur ne voyait pas le
 * même logo. C'est la tuile et le mot qui font foi — c'est aussi ce que porte
 * le produit lui-même, en haut de son menu.
 *
 * Reste la contrainte qui avait produit ces deux versions : le « bx » est en
 * encre, il disparaîtrait sur le pied de page marine. Le mot est donc écrit en
 * texte plutôt que posé en image, et seule sa couleur change — « Flow » garde
 * son doré sur les deux fonds. Un export clair du logotype remplacerait ce
 * montage par une image unique, le jour où la charte sera figée.
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

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/icone-bxflow.png"
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 rounded-lg"
        width={512}
        height={512}
      />
      <span className="text-xl font-bold tracking-tight">
        <span className={variant === 'light' ? 'text-white' : 'text-navy-900'}>bx</span>
        <span className="text-gold">Flow</span>
      </span>
    </span>
  );
}

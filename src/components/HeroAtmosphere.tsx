/**
 * Ambiance de fond « futuriste » sur base blanche : trame de points (dot-matrix)
 * fondue, halos lumineux dorés (aurora), anneaux orbitaux et filet doré. Décoratif,
 * léger, respecte prefers-reduced-motion.
 */
export function HeroAtmosphere({ dense = true }: { dense?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Trame de points, fondue vers le bas */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(87,83,78,0.16) 1px, transparent 1.4px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(125% 90% at 50% 0%, #000 35%, transparent 74%)',
          WebkitMaskImage: 'radial-gradient(125% 90% at 50% 0%, #000 35%, transparent 74%)',
          opacity: 0.6,
        }}
      />

      {/* Halos lumineux (aurora dorée + un froid neutre pour la profondeur) */}
      <div
        className="absolute -top-40 right-[-8%] h-[38rem] w-[38rem] animate-pulse-soft rounded-full blur-[100px] motion-reduce:animate-none"
        style={{ background: 'radial-gradient(circle, rgba(201,164,92,0.24), transparent 66%)' }}
      />
      {dense && (
        <div
          className="absolute top-1/4 left-[-12%] h-[32rem] w-[32rem] animate-float-slow rounded-full blur-[120px] motion-reduce:animate-none"
          style={{ background: 'radial-gradient(circle, rgba(201,164,92,0.12), transparent 66%)' }}
        />
      )}
      <div
        className="absolute bottom-[-28%] left-1/3 h-[30rem] w-[30rem] animate-float rounded-full blur-[130px] motion-reduce:animate-none"
        style={{ background: 'radial-gradient(circle, rgba(120,128,145,0.14), transparent 66%)' }}
      />

      {/* Anneaux orbitaux (accent futuriste) */}
      <svg
        className="absolute right-[-9%] -top-16 h-[36rem] w-[36rem] animate-spin-slow opacity-70 motion-reduce:animate-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <linearGradient id="haloRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C9A45C" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#C9A45C" stopOpacity="0.04" />
            <stop offset="1" stopColor="#C9A45C" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="165" stroke="url(#haloRing)" strokeWidth="1" />
        <circle cx="200" cy="200" r="122" stroke="url(#haloRing)" strokeWidth="1" />
        <circle cx="365" cy="120" r="3" fill="#C9A45C" fillOpacity="0.8" />
        <circle cx="60" cy="250" r="2.5" fill="#C9A45C" fillOpacity="0.6" />
      </svg>

      {/* Filet doré supérieur */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,164,92,0.55), transparent)' }}
      />
    </div>
  );
}

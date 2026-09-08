import { useEffect, useState } from 'react';
import { useContent } from '@/hooks/useContent';

/**
 * Un dossier qui traverse un processus, étapes ET transitions visibles.
 *
 * ## Pourquoi une animation plutôt qu'une image
 *
 * Les heros annonçaient un moteur de processus et montraient une passerelle —
 * « vos logiciels → bxFlow → automatisé ». Or ce qu'on vend est un MOUVEMENT :
 * un dossier part d'une demande, attend une décision, bifurque si elle est
 * négative, se referme. Une image fixe dit « il y a des cases ».
 *
 * ## Les transitions portent leur nom, et c'est le point
 *
 * Sans intitulé sur les flèches, le dessin décrit un tapis roulant : les
 * étapes défilent, rien ne dit qui les fait avancer. « Valider », « Rejeter »
 * nomment la décision — c'est exactement ce qui distingue un moteur de
 * processus d'une liste de tâches, et c'est ce qu'un acheteur reconnaît de son
 * propre métier.
 *
 * ## Mouvement réduit
 *
 * Le cycle ne démarre pas si le système demande à limiter les animations : la
 * première étape reste allumée et le schéma se lit comme une image fixe.
 */
const CYCLE_MS = 1500;

/** Cinq positions : les quatre étapes, puis la branche de rejet. */
function useEtapeActive(): number {
  const [actif, setActif] = useState(0);

  useEffect(() => {
    const reduit =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduit) return;

    const t = setInterval(() => setActif((i) => (i + 1) % 5), CYCLE_MS);
    return () => clearInterval(t);
  }, []);

  return actif;
}

// Géométrie du schéma large : quatre étapes en ligne, la cinquième en contrebas.
//
// L'écart entre deux étapes est DICTÉ par l'intitulé de la transition. Il valait
// huit pixels : les mots « Soumettre », « Valider », « Clôturer » débordaient
// donc sous les boîtes, qui les recouvraient — on n'en voyait que des fragments
// dépasser entre deux cases. Soixante-dix pixels laissent la place au mot le
// plus long, et le schéma défile horizontalement sur petit écran plutôt que de
// se comprimer jusqu'à l'illisible.
const LARGEUR = 150;
const ECART = 70;
const HAUTEUR = 52;
const Y = 40;
const Y_REJET = 150;
const MARGE = 8;
// Calculé plutôt qu'écrit à la main : quatre abscisses recopiées se
// désynchronisent de la largeur et de l'écart au premier ajustement, et c'est
// le chevauchement qu'on vient de corriger qui revient.
const X = [0, 1, 2, 3].map((i) => MARGE + i * (LARGEUR + ECART));

export function WorkflowAnimation({ className = '' }: { className?: string }) {
  const c = useContent();
  const flux = c.product.heroFlow;
  const actif = useEtapeActive();
  const surRejet = actif === 4;
  const etapeActive = surRejet ? 1 : actif;

  return (
    <div className={`overflow-x-auto ${className}`}>
      <svg
        viewBox="0 0 830 215"
        className="h-auto w-full min-w-[720px]"
        role="img"
        aria-label={flux.alt}
      >
        <defs>
          <marker id="fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" fill="#C9A45C" />
          </marker>
          <marker id="fleche-pale" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" fill="#CBD5E1" />
          </marker>
        </defs>

        {/* Transitions successives, chacune nommée au-dessus de sa flèche. */}
        {[0, 1, 2].map((i) => {
          const franchie = !surRejet && etapeActive === i + 1;
          const milieu = (X[i] + LARGEUR + X[i + 1]) / 2;
          return (
            <g key={i}>
              <line
                x1={X[i] + LARGEUR}
                y1={Y + HAUTEUR / 2}
                x2={X[i + 1] - 6}
                y2={Y + HAUTEUR / 2}
                stroke={franchie ? '#C9A45C' : '#CBD5E1'}
                strokeWidth={franchie ? 2.5 : 1.5}
                strokeDasharray="6 5"
                markerEnd={`url(#${franchie ? 'fleche' : 'fleche-pale'})`}
                className={franchie ? 'animate-dash' : ''}
              />
              <text
                x={milieu}
                y={Y + HAUTEUR / 2 - 11}
                textAnchor="middle"
                className={`text-[11px] font-semibold transition-colors duration-500 ${
                  franchie ? 'fill-gold-600' : 'fill-ink-400'
                }`}
              >
                {flux.transitions[i]}
              </text>
            </g>
          );
        })}

        {/* La bifurcation : une transition conditionnelle vers un état terminal. */}
        <path
          d={`M${X[1] + LARGEUR / 2} ${Y + HAUTEUR} V${Y_REJET + HAUTEUR / 2} H${X[2] - 6}`}
          fill="none"
          stroke={surRejet ? '#C9A45C' : '#CBD5E1'}
          strokeWidth={surRejet ? 2.5 : 1.5}
          strokeDasharray="6 5"
          markerEnd={`url(#${surRejet ? 'fleche' : 'fleche-pale'})`}
          className={surRejet ? 'animate-dash' : ''}
        />
        <text
          x={X[1] + LARGEUR / 2 + 10}
          y={Y_REJET - 12}
          className={`text-[11px] font-semibold transition-colors duration-500 ${
            surRejet ? 'fill-gold-600' : 'fill-ink-400'
          }`}
        >
          {flux.reject}
        </text>

        {flux.steps.map((label: string, i: number) => {
          const allumee = !surRejet && i === etapeActive;
          return (
            <g key={label}>
              <rect
                x={X[i]} y={Y} width={LARGEUR} height={HAUTEUR} rx="12"
                fill={allumee ? '#0A1628' : '#FFFFFF'}
                stroke={allumee ? '#C9A45C' : '#E2E8F0'}
                strokeWidth={allumee ? 2 : 1.5}
                className="transition-colors duration-500"
              />
              <text
                x={X[i] + LARGEUR / 2} y={Y + HAUTEUR / 2 + 4} textAnchor="middle"
                className={`text-[12px] font-semibold transition-colors duration-500 ${
                  allumee ? 'fill-white' : 'fill-ink-500'
                }`}
              >
                {label}
              </text>
              {allumee && (
                <circle
                  cx={X[i] + LARGEUR - 12} cy={Y + 12} r="4" fill="#C9A45C"
                  className="animate-pulse-soft motion-reduce:animate-none"
                />
              )}
            </g>
          );
        })}

        <rect
          x={X[2]} y={Y_REJET} width={LARGEUR} height={HAUTEUR} rx="12"
          fill={surRejet ? '#0A1628' : '#FFFFFF'}
          stroke={surRejet ? '#C9A45C' : '#E2E8F0'}
          strokeWidth={surRejet ? 2 : 1.5}
          className="transition-colors duration-500"
        />
        <text
          x={X[2] + LARGEUR / 2} y={Y_REJET + HAUTEUR / 2 + 4} textAnchor="middle"
          className={`text-[12px] font-semibold transition-colors duration-500 ${
            surRejet ? 'fill-white' : 'fill-ink-500'
          }`}
        >
          {flux.rejected}
        </text>
      </svg>
    </div>
  );
}

/**
 * La même chose, empilée — pour la carte étroite du hero d'accueil.
 *
 * Le schéma large tient sur 620 pixels et déborderait d'une carte de colonne.
 * Plutôt que de le réduire jusqu'à l'illisible, on empile : les étapes
 * descendent, la transition franchie s'écrit entre deux d'entre elles. Le
 * cycle est partagé, donc les deux présentations restent toujours d'accord.
 */
export function WorkflowMini() {
  const c = useContent();
  const flux = c.product.heroFlow;
  const actif = useEtapeActive();
  const surRejet = actif === 4;
  const etapeActive = surRejet ? 1 : actif;

  return (
    <div className="flex flex-col gap-1.5">
      {flux.steps.map((label: string, i: number) => {
        const allumee = !surRejet && i === etapeActive;
        return (
          <div key={label}>
            {i > 0 && (
              <div className="flex items-center gap-2 py-1 pl-4">
                <span
                  className={`h-4 w-px transition-colors duration-500 ${
                    !surRejet && etapeActive === i ? 'bg-gold' : 'bg-ink-200'
                  }`}
                />
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wide transition-colors duration-500 ${
                    !surRejet && etapeActive === i ? 'text-gold-600' : 'text-ink-400'
                  }`}
                >
                  {flux.transitions[i - 1]}
                </span>
              </div>
            )}
            <div
              className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 transition-colors duration-500 ${
                allumee
                  ? 'border-gold bg-navy-900 text-white'
                  : 'border-ink-100 bg-white text-ink-500'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500 ${
                  allumee ? 'bg-gold' : 'bg-ink-200'
                }`}
              />
              <span className="text-xs font-semibold">{label}</span>
            </div>
          </div>
        );
      })}

      {/* La bifurcation, rattachée à l'étape de décision. */}
      <div className="flex items-center gap-2 py-1 pl-4">
        <span
          className={`h-4 w-px transition-colors duration-500 ${
            surRejet ? 'bg-gold' : 'bg-ink-200'
          }`}
        />
        <span
          className={`text-[10px] font-semibold uppercase tracking-wide transition-colors duration-500 ${
            surRejet ? 'text-gold-600' : 'text-ink-400'
          }`}
        >
          {flux.reject}
        </span>
      </div>
      <div
        className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 transition-colors duration-500 ${
          surRejet ? 'border-gold bg-navy-900 text-white' : 'border-ink-100 bg-white text-ink-500'
        }`}
      >
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500 ${
            surRejet ? 'bg-gold' : 'bg-ink-200'
          }`}
        />
        <span className="text-xs font-semibold">{flux.rejected}</span>
      </div>
    </div>
  );
}

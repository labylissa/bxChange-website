import type { CaptureId } from '@/data/captures';
import { CAPTURES } from '@/data/captures';

/**
 * Une capture réelle de l'application, dans un cadre de fenêtre sobre.
 *
 * ## Pourquoi des captures et plus des schémas
 *
 * Le site décrivait douze capacités sans montrer un seul écran. Pour un
 * acheteur de banque, c'est la première question — « est-ce que ça existe ? »
 * — et plus la description est riche, plus l'absence d'image se remarque.
 *
 * Les captures sont prises sur des dossiers de démonstration : personnes,
 * clients et montants sont fictifs, et la légende le dit. Une capture qui
 * laisserait croire à un client réel serait un mensonge qu'un DSI repère.
 *
 * ## Dimensions déclarées
 *
 * `width` et `height` viennent de la table des captures, pas d'une valeur
 * approximative : sans elles, la page saute pendant le chargement des images,
 * et le texte qu'on lisait part hors de l'écran.
 */
export function Capture({
  id,
  alt,
  legende,
  priorite = false,
  className = '',
}: {
  id: CaptureId;
  alt: string;
  legende?: string;
  priorite?: boolean;
  className?: string;
}) {
  const image = CAPTURES[id];
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card-hover">
        <div className="flex items-center gap-1.5 border-b border-ink-100 bg-ink-50 px-3.5 py-2.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        </div>
        <img
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          loading={priorite ? 'eager' : 'lazy'}
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
      {legende && <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">{legende}</figcaption>}
    </figure>
  );
}

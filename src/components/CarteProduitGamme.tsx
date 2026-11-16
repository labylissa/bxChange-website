import { Icons } from './Icon';
import { useContent } from '@/hooks/useContent';
import type { ProduitGamme } from '@/data/gamme';

/**
 * Un produit de la gamme bxGroup : ce qu'il fait, et un écran réel.
 *
 * Une seule carte pour l'accueil et pour la page de la gamme, afin que les deux
 * ne puissent pas présenter le même produit de deux façons. `detail` ajoute ce
 * que la page a la place de dire (les points, le statut) ; sur l'accueil, le
 * bouton reste secondaire — l'action principale de ce site est la démo bxFlow.
 */
export function CarteProduitGamme({ produit, detail = false }: { produit: ProduitGamme; detail?: boolean }) {
  const c = useContent();
  const t = c.suite.produits[produit.id];
  // Sous le titre de section de l'accueil (h2), le produit est un h3 ; sur sa
  // page, il suit directement le h1.
  const Titre = detail ? 'h2' : 'h3';

  return (
    <article className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{t.categorie}</p>
          <Titre className="mt-3 font-display text-3xl font-bold text-navy-900">{produit.nom}</Titre>
          <p className="mt-3 text-lg font-semibold text-navy-900">{t.accroche}</p>
          <p className="mt-2 leading-relaxed text-ink-500">{t.texte}</p>

          {detail && (
            <ul className="mt-6 space-y-3">
              {t.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600">
                  <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.5} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          {detail && <p className="mt-6 text-sm font-medium text-navy-900">{t.statut}</p>}

          <div className="mt-8 lg:mt-auto lg:pt-8">
            <a href={produit.url} className={detail ? 'btn-primary' : 'btn-secondary'}>
              {t.cta}
              <span className="sr-only"> {c.suite.externe}</span>
              <Icons.arrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <figure className="flex flex-col justify-center bg-ink-50 p-6 sm:p-8">
          <img
            src={produit.capture.src}
            width={produit.capture.largeur}
            height={produit.capture.hauteur}
            alt={t.alt}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-xl shadow-card ring-1 ring-ink-100"
          />
          <figcaption className="mt-3 text-xs text-ink-500">{t.legende}</figcaption>
        </figure>
      </div>
    </article>
  );
}

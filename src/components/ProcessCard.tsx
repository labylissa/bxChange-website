import { useTranslation } from 'react-i18next';
import { ProcessIcon } from './Icon';
import { useLang } from '@/hooks/useLang';
import type { Process } from '@/data/processes';

/**
 * Une carte du catalogue — et le déroulé du processus, pas seulement son nom.
 *
 * La carte n'affichait qu'un titre et une phrase. Un acheteur ne pouvait rien
 * en faire : il ne voyait ni ce qu'il achetait, ni si le processus ressemblait
 * au sien. Les étapes répondent aux deux, et elles disent « moteur de
 * processus » sans employer le mot — ce que le reste du site échouait à faire
 * en se présentant d'abord comme une passerelle entre logiciels.
 *
 * Quatre étapes par processus, pas davantage : au-delà, la carte cesse d'être
 * lisible et plus personne ne les lit.
 */
export function ProcessCard({ process }: { process: Process }) {
  const { lang } = useLang();
  const { t } = useTranslation();
  const steps = process.steps[lang];

  return (
    <div className="card group flex h-full flex-col hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 text-gold-600 ring-1 ring-gold/20 transition-colors group-hover:bg-gold group-hover:from-gold group-hover:to-gold group-hover:text-white">
          <ProcessIcon name={process.icon} />
        </span>
        <span className="rounded-full bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-500">
          {t(`catalog.categories.${process.category}`)}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-navy-900">
        {process.name[lang]}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">
        {process.description[lang]}
      </p>

      {/* Le déroulé. `mt-auto` le colle en bas : dans une grille, des cartes
          dont les descriptions n'ont pas la même longueur aligneraient sinon
          leurs étapes à des hauteurs différentes, et l'ensemble paraîtrait
          bancal sans qu'on sache pourquoi. */}
      <div className="mt-auto pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
          {t('catalog.stepsLabel')}
        </p>
        <ol className="mt-2.5 space-y-1.5">
          {steps.map((step, i) => (
            <li key={step} className="flex items-start gap-2 text-xs leading-snug text-ink-500">
              <span
                aria-hidden="true"
                className="mt-px inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink-100 text-[10px] font-semibold text-ink-500"
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

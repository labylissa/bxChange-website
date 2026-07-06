import { useTranslation } from 'react-i18next';
import { ProcessIcon } from './Icon';
import { useLang } from '@/hooks/useLang';
import type { Process } from '@/data/processes';

export function ProcessCard({ process }: { process: Process }) {
  const { lang } = useLang();
  const { t } = useTranslation();

  return (
    <div className="card group h-full hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-card-hover">
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
    </div>
  );
}

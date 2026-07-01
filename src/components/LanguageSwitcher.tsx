import { useLocation, useNavigate } from 'react-router-dom';
import { SUPPORTED_LANGS, type Lang } from '@/i18n';
import { useLang } from '@/hooks/useLang';

/** Bascule FR/EN en conservant la page courante (remplace le préfixe de langue). */
export function LanguageSwitcher({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  function switchTo(target: Lang) {
    if (target === lang) return;
    const rest = location.pathname.replace(/^\/(fr|en)/, '');
    navigate(`/${target}${rest}${location.search}`);
  }

  const idle = variant === 'light' ? 'text-white/50 hover:text-white' : 'text-ink-400 hover:text-navy-900';
  const active = variant === 'light' ? 'text-white' : 'text-navy-900';

  return (
    <div
      className="inline-flex items-center gap-1 text-sm font-semibold"
      role="group"
      aria-label="Language"
    >
      {SUPPORTED_LANGS.map((l, i) => (
        <span key={l} className="inline-flex items-center">
          {i > 0 && <span className={variant === 'light' ? 'text-white/25' : 'text-ink-300'}>/</span>}
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === lang ? 'true' : undefined}
            className={`px-1.5 uppercase transition-colors ${l === lang ? active : idle}`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

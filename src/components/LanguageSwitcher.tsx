import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SUPPORTED_LANGS, type Lang } from '@/i18n';
import { useLang } from '@/hooks/useLang';

/**
 * Drapeaux dessinés en SVG, et non en emoji.
 *
 * Les emoji drapeaux (🇫🇷) sont des paires d'indicateurs régionaux que Windows
 * ne sait pas composer : Chrome et Edge y affichent « FR » et « US » en
 * lettres. Le sélecteur ressemblerait alors exactement à celui qu'on remplace,
 * et seulement sur les postes de nos clients.
 *
 * Le drapeau américain est simplifié — sept bandes et neuf étoiles au lieu de
 * treize et cinquante. À vingt pixels de large, la version fidèle produit une
 * bouillie grise ; la version simplifiée se reconnaît immédiatement, ce qui est
 * la seule chose qu'on lui demande.
 */
function DrapeauFr({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 21 15" className={className} role="img" aria-hidden="true">
      <rect width="21" height="15" fill="#FFFFFF" />
      <rect width="7" height="15" fill="#002654" />
      <rect x="14" width="7" height="15" fill="#CE1126" />
    </svg>
  );
}

function DrapeauUs({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 21 15" className={className} role="img" aria-hidden="true">
      <rect width="21" height="15" fill="#FFFFFF" />
      {[0, 2, 4, 6].map((i) => (
        <rect key={i} y={i * 2.143} width="21" height="2.143" fill="#B22234" />
      ))}
      <rect width="9" height="8.6" fill="#3C3B6E" />
      {[1.6, 4.5, 7.4].map((y) =>
        [1.5, 4.5, 7.5].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.75" fill="#FFFFFF" />
        )),
      )}
    </svg>
  );
}

const DRAPEAUX: Record<Lang, (p: { className?: string }) => JSX.Element> = {
  fr: DrapeauFr,
  en: DrapeauUs,
};

const LIBELLES: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
};

/**
 * Choix de la langue, en liste déroulante, la page courante conservée.
 *
 * L'ancienne version alignait « FR / EN » : deux mots collés dont on ne savait
 * pas lequel était l'état et lequel était l'action. Un bouton qui montre la
 * langue ACTIVE et ouvre la liste lève l'ambiguïté — et le drapeau se
 * reconnaît sans lire.
 */
export function LanguageSwitcher({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const [ouvert, setOuvert] = useState(false);
  const conteneur = useRef<HTMLDivElement>(null);

  // Fermeture au clic extérieur et à la touche Échap. Sans elles, la liste
  // reste ouverte pendant qu'on navigue ailleurs dans l'en-tête et recouvre le
  // menu principal.
  useEffect(() => {
    if (!ouvert) return;
    function auClic(e: MouseEvent) {
      if (!conteneur.current?.contains(e.target as Node)) setOuvert(false);
    }
    function auClavier(e: KeyboardEvent) {
      if (e.key === 'Escape') setOuvert(false);
    }
    document.addEventListener('mousedown', auClic);
    document.addEventListener('keydown', auClavier);
    return () => {
      document.removeEventListener('mousedown', auClic);
      document.removeEventListener('keydown', auClavier);
    };
  }, [ouvert]);

  function basculer(cible: Lang) {
    setOuvert(false);
    if (cible === lang) return;
    const reste = location.pathname.replace(/^\/(fr|en)/, '');
    navigate(`/${cible}${reste}${location.search}`);
  }

  const clair = variant === 'light';
  const Actuel = DRAPEAUX[lang];

  return (
    <div ref={conteneur} className="relative">
      <button
        type="button"
        onClick={() => setOuvert((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={ouvert}
        aria-label={LIBELLES[lang]}
        className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm font-semibold transition-colors ${
          clair
            ? 'border-white/20 text-white/80 hover:border-white/40 hover:text-white'
            : 'border-ink-200 text-ink-600 hover:border-gold hover:text-navy-900'
        }`}
      >
        <Actuel className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
        <span className="uppercase">{lang}</span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={`h-3 w-3 transition-transform ${ouvert ? 'rotate-180' : ''}`}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {ouvert && (
        <ul
          role="menu"
          className="absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-ink-100 bg-white py-1 shadow-card-hover"
        >
          {SUPPORTED_LANGS.map((l) => {
            const Drapeau = DRAPEAUX[l];
            const actif = l === lang;
            return (
              <li key={l} role="none">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => basculer(l)}
                  aria-current={actif ? 'true' : undefined}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${
                    actif ? 'font-semibold text-navy-900' : 'text-ink-600 hover:bg-ink-50'
                  }`}
                >
                  <Drapeau className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
                  {LIBELLES[l]}
                  {actif && (
                    <svg viewBox="0 0 12 12" aria-hidden="true" className="ml-auto h-3.5 w-3.5 text-gold">
                      <path d="M2.5 6.5 5 9l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

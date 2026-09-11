import { useContent } from '@/hooks/useContent';

/**
 * Les deux topologies de déploiement, dessinées.
 *
 * ## Pourquoi un schéma plutôt qu'un paragraphe
 *
 * « Un seul point d'entrée, la base de données n'est jamais joignable de
 * l'extérieur » est une phrase qu'un lecteur croit ou ne croit pas. Le même
 * fait dessiné se vérifie d'un coup d'œil : on suit la flèche, et on voit
 * qu'aucune ne traverse le cadre. C'est la question que pose un comité de
 * sécurité, et elle se règle mieux par un dessin que par une affirmation.
 *
 * ## Ce que le dessin doit montrer, et rien de plus
 *
 * Pas l'inventaire des composants — le nom du serveur d'application
 * n'intéresse personne à ce stade — mais les **frontières** : ce qui est
 * dedans, ce qui est dehors, et par où ça passe. D'où le cadre en pointillé,
 * qui est le sujet réel du schéma on-premise, et la flèche barrée vers
 * Internet, qui dit ce qui n'existe pas.
 *
 * ## Mise en page
 *
 * Coordonnées calculées depuis des constantes plutôt qu'écrites à la main :
 * des abscisses recopiées se désynchronisent des largeurs au premier
 * ajustement, et les flèches ratent leurs boîtes. Le schéma défile
 * horizontalement sur petit écran plutôt que de se comprimer jusqu'à
 * l'illisible.
 */

const OR = '#C9A45C';
const ENCRE = '#292524';
const TRAIT = '#D3CDC2';
const PALE = '#A39D92';
const FOND = '#FAF9F7';
const SAUGE = '#8A9A76';

function Fleches() {
  return (
    <defs>
      <marker
        id="pointe"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M0 0 10 5 0 10z" fill={OR} />
      </marker>
      <marker
        id="pointe-pale"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M0 0 10 5 0 10z" fill={TRAIT} />
      </marker>
    </defs>
  );
}

/** Une boîte avec son intitulé, et une précision facultative en dessous. */
function Boite({
  x,
  y,
  l,
  h,
  titre,
  sous,
  fort = false,
}: {
  x: number;
  y: number;
  l: number;
  h: number;
  titre: string;
  sous?: string;
  fort?: boolean;
}) {
  const cx = x + l / 2;
  const cy = y + h / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={l}
        height={h}
        rx="10"
        fill={fort ? ENCRE : '#FFFFFF'}
        stroke={fort ? OR : TRAIT}
        strokeWidth={fort ? 2 : 1.5}
      />
      <text
        x={cx}
        y={sous ? cy - 3 : cy + 4}
        textAnchor="middle"
        fontSize="12.5"
        fontWeight="600"
        fill={fort ? '#FFFFFF' : ENCRE}
      >
        {titre}
      </text>
      {sous && (
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize="10.5" fill={fort ? OR : PALE}>
          {sous}
        </text>
      )}
    </g>
  );
}

function Cadre({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`overflow-x-auto ${className ?? ''}`}>{children}</div>;
}

/* ══════════════════════════════════════════════════════════════════════
   Sur les serveurs du client
   ══════════════════════════════════════════════════════════════════════ */

export function SchemaOnPremise() {
  const d = useContent().deployment.diagrams.onprem;

  // Trois rangées : les utilisateurs et le chemin d'entrée, l'application,
  // puis ce qu'elle garde pour elle.
  const Y1 = 118;
  const H1 = 56;
  const Y_APP = 96;
  const H_APP = 100;
  const Y2 = 248;
  const H2 = 52;

  return (
    <Cadre>
      <svg viewBox="0 0 920 400" className="h-auto w-full min-w-[760px]" role="img" aria-label={d.alt}>
        <Fleches />

        {/* Le cadre du client : c'est LUI le sujet du schéma, et il englobe
            TOUT — y compris le système bancaire, qui vit sur le même réseau.
            Le laisser dehors, comme c'était le cas d'abord, dessinait
            exactement l'inverse de ce qu'on affirme : une application qui
            sortirait du périmètre pour interroger le corebanking. */}
        <rect
          x="14"
          y="46"
          width="890"
          height="286"
          rx="16"
          fill={FOND}
          stroke={OR}
          strokeWidth="1.5"
          strokeDasharray="7 6"
        />
        <rect x="34" y="34" width={d.boundary.length * 7.4 + 26} height="26" rx="13" fill={OR} />
        <text x={34 + (d.boundary.length * 7.4 + 26) / 2} y="51" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#FFFFFF">
          {d.boundary}
        </text>

        <Boite x={40} y={Y1} l={130} h={H1} titre={d.users} />
        <line x1={170} y1={Y1 + H1 / 2} x2={222} y2={Y1 + H1 / 2} stroke={OR} strokeWidth="2" markerEnd="url(#pointe)" />

        <Boite x={228} y={Y1} l={142} h={H1} titre={d.proxy} sous={d.proxySub} />
        <line x1={370} y1={Y1 + H1 / 2} x2={430} y2={Y1 + H1 / 2} stroke={OR} strokeWidth="2" markerEnd="url(#pointe)" />

        {/* L'application, en un seul bloc : le détail des composants
            n'intéresse personne à ce stade, la frontière si. */}
        <rect x={436} y={Y_APP} width={244} height={H_APP} rx="12" fill={ENCRE} stroke={OR} strokeWidth="2" />
        <text x={558} y={Y_APP + 24} textAnchor="middle" fontSize="13" fontWeight="700" fill="#FFFFFF">
          {d.app}
        </text>
        {d.appLines.map((ligne, i) => (
          <text key={ligne} x={558} y={Y_APP + 46 + i * 17} textAnchor="middle" fontSize="10.5" fill="#E7E3DC">
            {ligne}
          </text>
        ))}

        {/* Vers le système bancaire, à l'intérieur du même réseau. */}
        <line x1={680} y1={Y_APP + H_APP / 2} x2={730} y2={Y_APP + H_APP / 2} stroke={OR} strokeWidth="2" markerEnd="url(#pointe)" />
        <Boite x={736} y={Y1} l={152} h={H1} titre={d.core} sous={d.coreSub} />

        {/* Ce que l'application garde pour elle : aucune flèche n'entre ici
            depuis l'extérieur, et c'est tout le propos. */}
        <line x1={558} y1={Y_APP + H_APP} x2={558} y2={Y2 - 26} stroke={TRAIT} strokeWidth="1.5" />
        <line x1={470} y1={Y2 - 26} x2={640} y2={Y2 - 26} stroke={TRAIT} strokeWidth="1.5" />
        <line x1={470} y1={Y2 - 26} x2={470} y2={Y2 - 6} stroke={TRAIT} strokeWidth="1.5" markerEnd="url(#pointe-pale)" />
        <line x1={640} y1={Y2 - 26} x2={640} y2={Y2 - 6} stroke={TRAIT} strokeWidth="1.5" markerEnd="url(#pointe-pale)" />
        <Boite x={396} y={Y2} l={148} h={H2} titre={d.db} />
        <Boite x={566} y={Y2} l={148} h={H2} titre={d.files} />
        <text x={555} y={Y2 + H2 + 20} textAnchor="middle" fontSize="10.5" fill={PALE}>
          {d.storageNote}
        </text>

        {/* Ce qui n'existe pas — dit explicitement, parce que c'est une
            question qu'on pose toujours et qu'un schéma muet laisse ouverte. */}
        <line x1={364} y1={362} x2={410} y2={362} stroke={TRAIT} strokeWidth="1.5" strokeDasharray="5 4" />
        <g>
          <line x1={379} y1={355} x2={395} y2={371} stroke={SAUGE} strokeWidth="2" />
          <line x1={395} y1={355} x2={379} y2={371} stroke={SAUGE} strokeWidth="2" />
        </g>
        <text x={420} y={366} fontSize="11" fontWeight="600" fill={ENCRE}>
          {d.internet}
        </text>
      </svg>
    </Cadre>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   Hébergé chez l'éditeur
   ══════════════════════════════════════════════════════════════════════ */

export function SchemaHeberge() {
  const d = useContent().deployment.diagrams.saas;

  const Y = 106;
  const H = 60;

  return (
    <Cadre>
      <svg viewBox="0 0 920 330" className="h-auto w-full min-w-[760px]" role="img" aria-label={d.alt}>
        <Fleches />

        <Boite x={20} y={Y} l={140} h={H} titre={d.users} />
        <line x1={160} y1={Y + H / 2} x2={212} y2={Y + H / 2} stroke={OR} strokeWidth="2" markerEnd="url(#pointe)" />

        {/* L'adresse du client, à sa marque — c'est ce qu'il voit en premier. */}
        <Boite x={218} y={Y - 6} l={212} h={H + 12} titre={d.address} sous={d.addressSub} />
        <line x1={430} y1={Y + H / 2} x2={486} y2={Y + H / 2} stroke={OR} strokeWidth="2" markerEnd="url(#pointe)" />

        {/* L'hébergement, et la séparation entre clients : trois bandes, dont
            une seule est la vôtre. La séparation se montre mieux qu'elle ne
            s'affirme. */}
        <rect x={492} y={52} width={274} height={172} rx="14" fill={FOND} stroke={TRAIT} strokeWidth="1.5" />
        <text x={629} y={76} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={ENCRE}>
          {d.hosted}
        </text>
        <rect x={512} y={90} width={234} height={38} rx="9" fill={ENCRE} stroke={OR} strokeWidth="2" />
        <text x={629} y={114} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#FFFFFF">
          {d.yourSpace}
        </text>
        {[0, 1].map((i) => (
          <g key={i}>
            <rect x={512} y={138 + i * 40} width={234} height={34} rx="9" fill="#FFFFFF" stroke={TRAIT} strokeWidth="1.5" />
            <text x={629} y={159 + i * 40} textAnchor="middle" fontSize="11" fill={PALE}>
              {d.otherSpaces[i]}
            </text>
          </g>
        ))}
        <text x={629} y={244} textAnchor="middle" fontSize="10.5" fill={PALE}>
          {d.isolation}
        </text>

        {/* Les sauvegardes, et le second emplacement. */}
        <line x1={766} y1={138} x2={806} y2={138} stroke={OR} strokeWidth="2" markerEnd="url(#pointe)" />
        <Boite x={812} y={Y} l={96} h={H} titre={d.backups} />
        <line x1={860} y1={Y + H} x2={860} y2={224} stroke={TRAIT} strokeWidth="1.5" markerEnd="url(#pointe-pale)" />
        <Boite x={784} y={230} l={124} h={48} titre={d.offsite} />

        <text x={20} y={306} fontSize="11" fontWeight="600" fill={ENCRE}>
          {d.caption}
        </text>
      </svg>
    </Cadre>
  );
}

import type { ProcessIconName } from '@/data/processes';

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const base = (className: string, strokeWidth: number) => ({
  className,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

const P = ({ d }: { d: string }) => <path d={d} />;

/** Icônes UI génériques. */
export const Icons = {
  arrowRight: ({ className = 'h-5 w-5', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <P d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  check: ({ className = 'h-5 w-5', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <P d="M20 6 9 17l-5-5" />
    </svg>
  ),
  menu: ({ className = 'h-6 w-6', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <P d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: ({ className = 'h-6 w-6', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <P d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  chevronDown: ({ className = 'h-4 w-4', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <P d="m6 9 6 6 6-6" />
    </svg>
  ),
  globe: ({ className = 'h-5 w-5', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <circle cx="12" cy="12" r="9" />
      <P d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" />
    </svg>
  ),
  linkedin: ({ className = 'h-5 w-5', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <P d="M8 10v6M8 7v.01M12 16v-3.5a2 2 0 0 1 4 0V16M12 12v4" />
    </svg>
  ),
  mail: ({ className = 'h-5 w-5', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <P d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: ({ className = 'h-5 w-5', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <P d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  sparkArrow: ({ className = 'h-6 w-6', strokeWidth = 2 }: IconProps) => (
    <svg {...base(className, strokeWidth)}>
      <P d="M4 12h16M12 4l8 8-8 8" />
    </svg>
  ),
};

const processPaths: Record<ProcessIconName, string> = {
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  receipt: 'M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6',
  'user-plus': 'M15 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM18 8v6M15 11h6',
  folder: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  'file-check': 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 15l2 2 4-4',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2',
  shield: 'M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6zM9.5 12l2 2 3.5-3.5',
  inbox: 'M4 13l2-8h12l2 8M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M4 13h5l1 2h4l1-2h5',
  handshake: 'M8 12l2 2 3-3 3 3 2-2M3 8l4-3 5 3 5-3 4 3v6l-4 3-5-3-5 3-4-3z',
  truck: 'M3 6h11v10H3zM14 9h4l3 3v4h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  chart: 'M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6',
  wallet: 'M3 7a2 2 0 0 1 2-2h12v3M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7H7a2 2 0 0 1-2-2ZM17 13h.01',
  refresh: 'M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5M18 4v3h-3M6 20v-3h3',
  clipboard: 'M9 4h6v3H9zM9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3M9 12h6M9 16h4',
  lifebuoy: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 5l4.5 4.5M14.5 14.5 19 19M19 5l-4.5 4.5M9.5 14.5 5 19',
  building: 'M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M5 21h14M15 9h2a2 2 0 0 1 2 2v10M9 7h2M9 11h2M9 15h2',
};

export function ProcessIcon({
  name,
  className = 'h-6 w-6',
  strokeWidth = 1.8,
}: {
  name: ProcessIconName;
} & IconProps) {
  return (
    <svg {...base(className, strokeWidth)}>
      <path d={processPaths[name]} />
    </svg>
  );
}

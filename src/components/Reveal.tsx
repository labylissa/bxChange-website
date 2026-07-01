import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Décalage d'apparition en ms (pour un effet en cascade). */
  delay?: number;
  /** Sens du glissement à l'apparition. */
  from?: 'up' | 'left' | 'right' | 'scale';
}

const HIDDEN: Record<NonNullable<RevealProps['from']>, string> = {
  up: 'opacity-0 translate-y-6',
  left: 'opacity-0 -translate-x-6',
  right: 'opacity-0 translate-x-6',
  scale: 'opacity-0 scale-95',
};

/** Révèle son contenu en douceur quand il entre dans le viewport. */
export function Reveal({ children, className = '', delay = 0, from = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : HIDDEN[from]
      } ${className}`}
    >
      {children}
    </div>
  );
}

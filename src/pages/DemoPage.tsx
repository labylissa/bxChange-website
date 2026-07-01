import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Icons } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { CALENDLY_URL } from '@/lib/site';

const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_ID = 'demo-widget';

/** Skeleton affiché à l'emplacement exact du widget tant que Calendly n'est pas prêt. */
function WidgetSkeleton({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-2xl border border-ink-100 bg-ink-50 px-6">
      <span className="h-10 w-10 animate-spin rounded-full border-[3px] border-ink-200 border-t-teal motion-reduce:animate-none" />
      <p className="text-sm font-medium text-ink-500">{label}</p>
      <div className="w-full max-w-sm space-y-2.5">
        <div className="h-3 w-2/3 animate-pulse rounded-full bg-ink-200" />
        <div className="h-3 w-full animate-pulse rounded-full bg-ink-100" />
        <div className="h-3 w-5/6 animate-pulse rounded-full bg-ink-100" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 animate-pulse rounded-lg bg-ink-100" />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Charge le script Calendly, initialise le widget inline et masque le skeleton une fois prêt. */
function CalendlyWidget({ url, lang, loadingLabel }: { url: string; lang: string; loadingLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const src = `${url}${url.includes('?') ? '&' : '?'}locale=${lang}&hide_gdpr_banner=1`;

  // Initialise le widget (via le script Calendly).
  useEffect(() => {
    let cancelled = false;
    const init = () => {
      if (cancelled || !ref.current || !window.Calendly) return;
      ref.current.innerHTML = '';
      window.Calendly.initInlineWidget({ url: src, parentElement: ref.current });
    };

    if (window.Calendly) {
      init();
      return () => {
        cancelled = true;
      };
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener('load', init);
    return () => {
      cancelled = true;
      script?.removeEventListener('load', init);
    };
  }, [src]);

  // Masque le skeleton dès que Calendly émet un événement (iframe chargée), avec repli temporisé.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const data = e.data as { event?: string } | null;
      if (data && typeof data.event === 'string' && data.event.indexOf('calendly') === 0) {
        setLoaded(true);
      }
    };
    window.addEventListener('message', onMessage);
    const fallback = window.setTimeout(() => setLoaded(true), 6000);
    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="relative min-h-[640px]">
      {!loaded && <WidgetSkeleton label={loadingLabel} />}
      <div
        ref={ref}
        className="calendly-inline-widget overflow-hidden rounded-2xl"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}

export function DemoPage() {
  const c = useContent();
  const { lang, path } = useLang();
  const configured = CALENDLY_URL.length > 0;

  const scrollToWidget = () => {
    document.getElementById(WIDGET_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const meta = [
    { label: c.demo.durationLabel, value: c.demo.duration },
    { label: c.demo.onlineLabel, value: c.demo.online },
    { label: c.demo.freeLabel, value: c.demo.free },
  ];

  return (
    <>
      <Seo page="demo" title={c.meta.demo.title} description={c.meta.demo.description} />

      {/* HERO compact — laisse voir le widget juste en dessous */}
      <section className="relative overflow-hidden bg-navy-900 py-12 text-white sm:py-14">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 animate-pulse-soft rounded-full bg-teal/20 blur-3xl motion-reduce:animate-none" />
        <div className="container-page relative">
          <span className="eyebrow">{c.demo.hero.eyebrow}</span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            {c.demo.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">{c.demo.hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {meta.map((m, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-white/80">
                <Icons.check className="h-4 w-4 text-teal" strokeWidth={2.5} />
                <span className="font-semibold">{m.value}</span>
                <span className="text-white/40">· {m.label}</span>
              </span>
            ))}
          </div>
          {configured && (
            <button type="button" onClick={scrollToWidget} className="btn-primary mt-7">
              {c.demo.hero.ctaScroll}
              <Icons.chevronDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
            </button>
          )}
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Widget — en premier sur mobile pour être visible dès l'arrivée */}
          <div id={WIDGET_ID} className="order-1 scroll-mt-24 lg:order-2">
            <h2 className="mb-5 text-xl font-bold text-navy-900">{c.demo.widgetTitle}</h2>
            {configured ? (
              <CalendlyWidget url={CALENDLY_URL} lang={lang} loadingLabel={c.demo.loading} />
            ) : (
              <div className="rounded-2xl border border-dashed border-teal/40 bg-teal/5 p-10 text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/15 text-teal-500">
                  <Icons.mail className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-navy-900">{c.demo.fallback.title}</h3>
                <p className="mx-auto mt-2 max-w-md text-ink-500">{c.demo.fallback.text}</p>
                <Link to={path('contact')} className="btn-primary mt-6">
                  {c.demo.fallback.cta}
                  <Icons.arrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Bénéfices */}
          <aside className="order-2 lg:order-1 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-navy-900">{c.demo.hero.eyebrow}</h2>
              <ul className="mt-5 space-y-4">
                {c.demo.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-500">
                      <Icons.check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-600">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

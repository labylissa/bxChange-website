import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section } from '@/components/ui';
import { Icons } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { CALENDLY_URL } from '@/lib/site';

const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

/** Charge le script Calendly une seule fois et affiche le widget inline. */
function CalendlyWidget({ url, lang, loadingLabel }: { url: string; lang: string; loadingLabel: string }) {
  const [ready, setReady] = useState(
    () => typeof document !== 'undefined' && !!document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`),
  );

  useEffect(() => {
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
      setReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);

  // Ajoute la locale à l'URL Calendly (fr/en) et masque les détails superflus.
  const src = `${url}${url.includes('?') ? '&' : '?'}locale=${lang}&hide_gdpr_banner=1`;

  return (
    <div className="relative">
      {!ready && (
        <div className="flex h-[680px] items-center justify-center rounded-2xl border border-ink-100 bg-ink-50 text-sm text-ink-400">
          {loadingLabel}
        </div>
      )}
      {ready && (
        <div
          className="calendly-inline-widget overflow-hidden rounded-2xl border border-ink-100"
          data-url={src}
          style={{ minWidth: '320px', height: '700px' }}
        />
      )}
    </div>
  );
}

export function DemoPage() {
  const c = useContent();
  const { lang, path } = useLang();
  const configured = CALENDLY_URL.length > 0;

  const meta = [
    { label: c.demo.durationLabel, value: c.demo.duration, icon: <Icons.check className="h-4 w-4" /> },
    { label: c.demo.onlineLabel, value: c.demo.online, icon: <Icons.globe className="h-4 w-4" /> },
    { label: c.demo.freeLabel, value: c.demo.free, icon: <Icons.check className="h-4 w-4" /> },
  ];

  return (
    <>
      <Seo page="demo" title={c.meta.demo.title} description={c.meta.demo.description} />

      <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">{c.demo.hero.eyebrow}</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{c.demo.hero.title}</h1>
            <p className="mt-6 text-lg text-white/70">{c.demo.hero.subtitle}</p>
            <ul className="mt-8 space-y-3">
              {c.demo.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <Icons.check className="mt-0.5 h-5 w-5 shrink-0 text-teal" strokeWidth={2.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
            {meta.map((m, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal/15 text-teal">
                  {m.icon}
                </span>
                <p className="mt-3 text-xs uppercase tracking-wider text-white/40">{m.label}</p>
                <p className="mt-1 font-semibold text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <h2 className="text-center text-2xl font-bold text-navy-900">{c.demo.widgetTitle}</h2>
        <div className="mx-auto mt-10 max-w-3xl">
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
      </Section>
    </>
  );
}

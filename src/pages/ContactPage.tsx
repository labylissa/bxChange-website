import { useState, type FormEvent } from 'react';
import { Seo } from '@/components/Seo';
import { Section, PageHero } from '@/components/ui';
import { Icons } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { CONTACT_EMAIL, FORMSPREE_ID } from '@/lib/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactPage() {
  const c = useContent();
  const { lang } = useLang();
  const [status, setStatus] = useState<Status>('idle');
  const configured = FORMSPREE_ID.length > 0;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!configured) return;
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const f = c.contact.form;
  const inputClass =
    'mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-ink-300 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30';

  return (
    <>
      <Seo page="contact" title={c.meta.contact.title} description={c.meta.contact.description} />

      <PageHero
        eyebrow={c.contact.hero.eyebrow}
        title={c.contact.hero.title}
        subtitle={c.contact.hero.subtitle}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Formulaire */}
          <div>
            {status === 'success' ? (
              <div className="rounded-2xl border border-mint/40 bg-mint/5 p-8 text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-mint/20 text-mint">
                  <Icons.check className="h-7 w-7" strokeWidth={2.5} />
                </span>
                <h2 className="mt-4 text-xl font-bold text-navy-900">{f.successTitle}</h2>
                <p className="mt-2 text-ink-500">{f.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <input type="hidden" name="_language" value={lang} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-navy-900">
                    {f.name} <span className="text-teal-500">*</span>
                    <input name="name" required autoComplete="name" placeholder={f.namePlaceholder} className={inputClass} />
                  </label>
                  <label className="block text-sm font-medium text-navy-900">
                    {f.company} <span className="text-teal-500">*</span>
                    <input name="company" required autoComplete="organization" placeholder={f.companyPlaceholder} className={inputClass} />
                  </label>
                  <label className="block text-sm font-medium text-navy-900">
                    {f.email} <span className="text-teal-500">*</span>
                    <input type="email" name="email" required autoComplete="email" placeholder={f.emailPlaceholder} className={inputClass} />
                  </label>
                  <label className="block text-sm font-medium text-navy-900">
                    {f.phone}
                    <input type="tel" name="phone" autoComplete="tel" placeholder={f.phonePlaceholder} className={inputClass} />
                  </label>
                </div>
                <label className="block text-sm font-medium text-navy-900">
                  {f.message} <span className="text-teal-500">*</span>
                  <textarea name="message" required rows={5} placeholder={f.messagePlaceholder} className={inputClass} />
                </label>

                {!configured && (
                  <p className="rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-ink-600">
                    {f.notConfigured}
                  </p>
                )}
                {status === 'error' && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <strong>{f.errorTitle}.</strong> {f.errorText}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline">{CONTACT_EMAIL}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!configured || status === 'sending'}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? f.sending : f.submit}
                  {status !== 'sending' && <Icons.arrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>

          {/* Aside */}
          <aside className="rounded-2xl bg-ink-50 p-8">
            <h2 className="text-lg font-bold text-navy-900">{c.contact.aside.title}</h2>
            <ol className="mt-5 space-y-4">
              {c.contact.aside.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/15 text-sm font-bold text-teal-500">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-600">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 border-t border-ink-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                {c.contact.aside.emailLabel}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-teal-500"
              >
                <Icons.mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

import { Fragment, type ReactNode } from 'react';
import { Seo } from '@/components/Seo';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { legalNotice, privacyPolicy, type LegalBlock, type LegalDoc } from '@/content/legal';
import type { PageKey } from '@/lib/routes';

/** Met en évidence les champs `[…]` restant à compléter par la société. */
function withPlaceholders(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <mark
        key={i}
        className="rounded bg-gold/20 px-1 text-navy-700 ring-1 ring-gold/40"
        title="À compléter"
      >
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function Block({ block }: { block: LegalBlock }) {
  if ('h' in block) {
    return <h3 className="mt-6 text-base font-semibold text-navy-900">{withPlaceholders(block.h)}</h3>;
  }
  if ('ul' in block) {
    return (
      <ul className="mt-3 space-y-2">
        {block.ul.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-ink-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span className="leading-relaxed">{withPlaceholders(item)}</span>
          </li>
        ))}
      </ul>
    );
  }
  if ('note' in block) {
    return (
      <p className="mt-4 rounded-lg border-l-2 border-gold/60 bg-gold/[0.06] px-4 py-3 text-sm leading-relaxed text-ink-600">
        {withPlaceholders(block.note)}
      </p>
    );
  }
  return <p className="mt-3 leading-relaxed text-ink-600">{withPlaceholders(block.p)}</p>;
}

function LegalDocument({ doc, page, title, description }: {
  doc: LegalDoc;
  page: PageKey;
  title: string;
  description: string;
}) {
  return (
    <>
      <Seo page={page} title={title} description={description} />

      <section className="bg-navy-900 py-16 text-white lg:py-20">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl font-bold sm:text-4xl">{doc.title}</h1>
          <p className="mt-4 text-white/70">{withPlaceholders(doc.intro)}</p>
          <p className="mt-4 text-sm text-white/40">
            {doc.updatedLabel} : {withPlaceholders(doc.updated)}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-page max-w-3xl">
          {doc.sections.map((section, i) => (
            <div key={i} className="mt-10 first:mt-0">
              <h2 className="text-xl font-bold text-navy-900">{section.title}</h2>
              <div className="mt-2">
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function LegalNoticePage() {
  const c = useContent();
  const { lang } = useLang();
  return (
    <LegalDocument
      doc={legalNotice[lang]}
      page="legalNotice"
      title={c.meta.legalNotice.title}
      description={c.meta.legalNotice.description}
    />
  );
}

export function PrivacyPage() {
  const c = useContent();
  const { lang } = useLang();
  return (
    <LegalDocument
      doc={privacyPolicy[lang]}
      page="privacy"
      title={c.meta.privacy.title}
      description={c.meta.privacy.description}
    />
  );
}

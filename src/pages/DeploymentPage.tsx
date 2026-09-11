import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section, PageHero, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { SchemaOnPremise, SchemaHeberge } from '@/components/InfraDiagram';
import { Icons, ProcessIcon } from '@/components/Icon';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import type { ProcessIconName } from '@/data/processes';

/** Une icône par garantie — trois fois le même bouclier ne dirait rien de plus. */
const CANNOT_ICONS: ProcessIconName[] = ['plug', 'shield', 'building'];

/**
 * Comment bxFlow s'installe — hébergé, ou sur les serveurs du client.
 *
 * ## Pourquoi cette page existe
 *
 * Le site décrivait ce que le produit fait, jamais comment il arrive chez le
 * client. Or c'est la première question d'un établissement financier, et elle
 * se pose AVANT la démonstration : où vivent les données, qui détient les
 * clés, que se passe-t-il si l'éditeur disparaît. Une réponse écrite, publique
 * et détaillée vaut mieux qu'une réponse improvisée en rendez-vous — et elle
 * circule dans l'établissement sans nous.
 *
 * ## Registre
 *
 * Deux lecteurs, pas un : un décideur qui n'installera jamais rien, et un
 * exploitant qui le fera. Chaque étape dit donc d'abord ce qui se passe en
 * langage ordinaire, puis le détail technique dans un bloc séparé — que le
 * premier saute sans rien perdre, et que le second vient chercher.
 */
export function DeploymentPage() {
  const c = useContent();
  const { path } = useLang();
  const d = c.deployment;

  return (
    <>
      <Seo
        page="deployment"
        title={c.meta.deployment.title}
        description={c.meta.deployment.description}
      />

      {/* Pas de schéma animé : on ne vient pas ici voir le moteur tourner. */}
      <PageHero eyebrow={d.hero.eyebrow} title={d.hero.title} subtitle={d.hero.subtitle} flow={false} />

      {/* ── Les deux modèles, côte à côte ─────────────────────────────── */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {d.models.map((m, i) => (
            <Reveal key={m.title} delay={i * 100} from="up">
              <div className="card flex h-full flex-col">
                <span className="inline-flex w-fit items-center rounded-full bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-600 ring-1 ring-gold/25">
                  {m.tag}
                </span>
                <h2 className="mt-4 text-xl font-bold text-navy-900">{m.title}</h2>
                <p className="mt-2 text-base font-semibold text-ink-600">{m.lead}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{m.text}</p>
                <p className="mt-4 border-t border-ink-100 pt-4 text-sm italic text-ink-400">
                  {m.forWho}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/[0.05] p-6 sm:p-8">
          <h3 className="text-lg font-bold text-navy-900">{d.same.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-600">{d.same.text}</p>
        </div>
      </Section>

      {/* ── Le comparatif ─────────────────────────────────────────────────
          Une LISTE, pas un tableau. Trois colonnes de texte long ne tiennent
          sur aucun portable : le tableau partirait de côté, ou se comprimerait
          jusqu'à l'illisible. Empilé, chaque question porte ses deux réponses
          et rien ne déborde, à aucune largeur. */}
      <Section className="pt-0">
        <SectionHeading align="left" title={d.compare.title} subtitle={d.compare.lead} />
        <div className="mt-8 overflow-hidden rounded-2xl border border-ink-100 shadow-card">
          {d.compare.rows.map(([question, saas, onprem], i) => (
            <div
              key={question}
              className={`grid gap-4 p-5 sm:grid-cols-[minmax(0,14rem)_1fr_1fr] sm:gap-6 ${
                i > 0 ? 'border-t border-ink-100' : ''
              } ${i % 2 === 1 ? 'bg-ink-50/50' : ''}`}
            >
              <p className="text-sm font-bold text-navy-900">{question}</p>
              <div>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                  {d.compare.head[1]}
                </span>
                <p className="text-sm leading-relaxed text-ink-600">{saas}</p>
              </div>
              <div>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                  {d.compare.head[2]}
                </span>
                <p className="text-sm leading-relaxed text-ink-600">{onprem}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Le déploiement sur site, étape par étape ───────────────────── */}
      <Section className="bg-ink-50/60">
        <SectionHeading
          align="left"
          eyebrow={d.onprem.eyebrow}
          title={d.onprem.title}
          subtitle={d.onprem.lead}
        />

        <div className="mt-10 rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:p-7">
          <h3 className="text-base font-bold text-navy-900">{d.diagrams.onprem.title}</h3>
          <div className="mt-5">
            <SchemaOnPremise />
          </div>
        </div>

        <ol className="mt-6 space-y-5">
          {d.onprem.steps.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i, 4) * 60} from="up">
              <li className="relative rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {s.who}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:pl-10">{s.text}</p>
                {s.detail && (
                  <div className="mt-4 rounded-xl border-l-[3px] border-l-ink-200 bg-ink-50 px-4 py-3 sm:ml-10">
                    <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                      {d.onprem.detailLabel}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{s.detail}</p>
                  </div>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── Ce que nous ne pouvons pas faire ───────────────────────────────
          Sur fond sombre, délibérément : c'est la section qu'un comité de
          sécurité cherche, et c'est celle qui distingue une installation
          réellement maîtrisée d'un hébergement déguisé. Elle dit aussi ce que
          le client y perd — une garantie qui ne nomme pas sa contrepartie
          n'est pas crue. */}
      <Section className="bg-navy-900">
        <SectionHeading
          align="left"
          invert
          eyebrow={d.cannot.eyebrow}
          title={d.cannot.title}
          subtitle={d.cannot.lead}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {d.cannot.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} from="up">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
                  <ProcessIcon name={CANNOT_ICONS[i] ?? 'shield'} />
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── L'hébergement chez nous ────────────────────────────────────── */}
      <Section>
        <SectionHeading
          align="left"
          eyebrow={d.saas.eyebrow}
          title={d.saas.title}
          subtitle={d.saas.lead}
        />
        <div className="mt-10 rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:p-7">
          <h3 className="text-base font-bold text-navy-900">{d.diagrams.saas.title}</h3>
          <div className="mt-5">
            <SchemaHeberge />
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {d.saas.points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100} from="up">
              <div className="card h-full">
                <h3 className="text-base font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Le dossier technique ───────────────────────────────────────── */}
      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-ink-50 p-8 sm:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">{d.cta.title}</h2>
              <p className="mt-3 max-w-2xl text-ink-500">{d.cta.text}</p>
            </div>
            <Link to={path('contact')} className="btn-primary shrink-0">
              {d.cta.cta}
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

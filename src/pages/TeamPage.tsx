import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Section, PageHero } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { EQUIPE } from '@/data/equipe';

/**
 * Qui construit le produit.
 *
 * Un acheteur de banque achète autant l'équipe que le logiciel : il veut savoir
 * qui répondra au téléphone dans trois ans. La page nomme des personnes réelles
 * et leur parcours — elle ne dit rien du statut juridique, qui vit dans les
 * mentions légales et n'a pas à être répété ici.
 *
 * Le bloc final assume la taille de l'équipe au lieu de la masquer : c'est
 * l'indépendance de l'installation qui répond à l'objection, pas un effectif
 * gonflé qui se démentirait au premier rendez-vous.
 */
export function TeamPage() {
  const c = useContent();
  const { path } = useLang();

  return (
    <>
      <Seo page="team" title={c.meta.team.title} description={c.meta.team.description} />

      <PageHero
        eyebrow={c.team.hero.eyebrow}
        title={c.team.hero.title}
        subtitle={c.team.hero.subtitle}
        flow={false}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EQUIPE.map((membre, i) => {
            const fiche = c.team.membres[membre.id];
            if (!fiche) return null;
            return (
              <Reveal key={membre.id} delay={(i % 3) * 100} from="up">
                <article className="card h-full transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover">
                  <div className="flex items-center gap-4">
                    {membre.photo ? (
                      <img
                        src={membre.photo}
                        alt=""
                        width={56}
                        height={56}
                        className="h-14 w-14 shrink-0 rounded-2xl object-cover ring-1 ring-ink-100"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 font-display text-lg font-bold text-gold-600 ring-1 ring-gold/25"
                      >
                        {membre.initiales}
                      </span>
                    )}
                    <div className="min-w-0">
                      <h2 className="font-display text-lg font-bold leading-tight text-navy-900">
                        {membre.nom}
                      </h2>
                      <p className="mt-0.5 text-sm font-semibold text-gold-600">{fiche.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-ink-500">{fiche.bio}</p>
                  {membre.linkedin && (
                    <a
                      href={membre.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-block text-sm font-semibold text-teal hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-ink-50/60">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
            <h2 className="font-display text-xl font-bold text-navy-900">{c.team.taille.title}</h2>
            <p className="mt-3 leading-relaxed text-ink-500">{c.team.taille.text}</p>
            <Link
              to={path('deployment')}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:underline"
            >
              {c.team.taille.cta} <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

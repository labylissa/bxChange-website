import { Seo } from '@/components/Seo';
import { Section, PageHero } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { CarteProduitGamme } from '@/components/CarteProduitGamme';
import { useContent } from '@/hooks/useContent';
import { GAMME } from '@/data/gamme';

/**
 * La gamme bxGroup : les autres produits de l'éditeur.
 *
 * Rangée sous « Confiance » : un acheteur qui se demande si l'éditeur sera
 * encore là dans trois ans regarde aussi ce qu'il construit d'autre. La page
 * ne présente que des produits qui existent (capture réelle à l'appui) ; ceux
 * qui viendront sont annoncés en une phrase, sans nom ni date.
 */
export function SuitePage() {
  const c = useContent();

  return (
    <>
      <Seo page="suite" title={c.meta.suite.title} description={c.meta.suite.description} />

      <PageHero
        eyebrow={c.suite.hero.eyebrow}
        title={c.suite.hero.title}
        subtitle={c.suite.hero.subtitle}
        flow={false}
      />

      <Section>
        <div className="grid gap-10">
          {GAMME.map((produit) => (
            <Reveal key={produit.id} from="up">
              <CarteProduitGamme produit={produit} detail />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-50/60">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-gold/40 bg-white p-8 text-center">
            <h2 className="font-display text-xl font-bold text-navy-900">{c.suite.avenir.title}</h2>
            <p className="mt-3 leading-relaxed text-ink-500">{c.suite.avenir.text}</p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

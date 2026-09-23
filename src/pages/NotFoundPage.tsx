import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useContent } from '@/hooks/useContent';
import { useLang } from '@/hooks/useLang';
import { Icons } from '@/components/Icon';

/**
 * Ni canonical ni hreflang : une 404 ne désigne aucun contenu, il n'y a rien
 * à indexer ni à mettre en correspondance d'une langue à l'autre. `noindex`
 * suffit — et évite qu'une adresse inventée finisse par apparaître dans les
 * résultats de recherche à la place de la vraie page.
 */
export function NotFoundPage() {
  const c = useContent();
  const { path, lang } = useLang();
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Helmet>
        <html lang={lang} />
        <title>{c.notFound.title}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <p className="font-display text-7xl font-bold text-teal/30">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900">{c.notFound.title}</h1>
      <p className="mt-3 max-w-md text-ink-500">{c.notFound.text}</p>
      <Link to={path('home')} className="btn-primary mt-8">
        {c.notFound.cta}
        <Icons.arrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

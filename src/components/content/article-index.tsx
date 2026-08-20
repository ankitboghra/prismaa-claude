import { Container, Section } from "@/components/ui/layout-primitives";
import { ArticleCard } from "@/components/home/learn-preview";
import type { ArticleMeta } from "@/lib/content";

/**
 * Shared list layout for /learn and /blog. Featured articles lead, the rest
 * follow grouped by category so a long index stays navigable.
 */
export function ArticleIndex({
  articles,
  emptyMessage,
}: {
  articles: ArticleMeta[];
  emptyMessage: string;
}) {
  if (articles.length === 0) {
    return (
      <Section tone="canvas">
        <Container width="wide">
          <p className="text-ink-600">{emptyMessage}</p>
        </Container>
      </Section>
    );
  }

  const featured = articles.filter((article) => article.featured);
  const rest = articles.filter((article) => !article.featured);

  const grouped = rest.reduce<Record<string, ArticleMeta[]>>((acc, article) => {
    (acc[article.category] ??= []).push(article);
    return acc;
  }, {});

  return (
    <Section tone="canvas">
      <Container width="wide">
        {featured.length > 0 ? (
          <section aria-labelledby="featured-heading">
            <h2
              id="featured-heading"
              className="text-[0.6875rem] font-bold tracking-[0.18em] text-ink-500 uppercase"
            >
              Start here
            </h2>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((article) => (
                <li key={article.slug} className="contents">
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {Object.entries(grouped).map(([category, items]) => (
          <section
            key={category}
            aria-label={category}
            className="mt-14 first:mt-0"
          >
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-ink-500 uppercase">
              {category}
            </h2>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((article) => (
                <li key={article.slug} className="contents">
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </Section>
  );
}

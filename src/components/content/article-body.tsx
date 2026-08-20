import Link from "next/link";
import { Container, Pill, Section } from "@/components/ui/layout-primitives";
import { ArticleCard } from "@/components/home/learn-preview";
import { PrismaaMark } from "@/components/ui/logo";
import type { Article, ArticleMeta } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { leadDoctor } from "@/data/team";

/**
 * The reading experience.
 *
 * Long-form medical content is read on a phone, often late at night, often by
 * a worried relative. So: a comfortable measure, a real table of contents, a
 * visible "who wrote this and when" block — the trust signals both a reader
 * and a search engine look for on health content.
 */
export function ArticleBody({
  article,
  related,
}: {
  article: Article;
  related: ArticleMeta[];
}) {
  return (
    <>
      <Section tone="canvas" spacing="tight">
        <Container width="narrow">
          <div className="grid gap-10 lg:grid-cols-[1fr] xl:grid-cols-[1fr]">
            <div>
              {/* Byline */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-ink-100 py-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink-950">
                  <PrismaaMark className="h-6 w-6 text-white" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.9375rem] font-semibold text-ink-900">
                    {article.author}
                  </p>
                  <p className="text-[0.8125rem] text-ink-500">
                    Published {formatDate(article.publishedAt)}
                    {article.updatedAt
                      ? ` · Updated ${formatDate(article.updatedAt)}`
                      : ""}{" "}
                    · {article.readingMinutes} min read
                  </p>
                </div>
              </div>

              {/* Table of contents */}
              {article.headings.length > 2 ? (
                <nav
                  aria-label="On this page"
                  className="mt-8 rounded-card border border-ink-100 bg-white p-5"
                >
                  <p className="text-[0.6875rem] font-bold tracking-[0.16em] text-ink-500 uppercase">
                    On this page
                  </p>
                  <ol className="mt-3 flex flex-col gap-2">
                    {article.headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="text-[0.9375rem] text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-600"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}

              <div
                className="prose-prismaa mt-9"
                // Content is authored in-repo by the clinical team and rendered
                // at build time; there is no user-submitted input in this path.
                dangerouslySetInnerHTML={{ __html: article.html }}
              />

              {article.tags.length > 0 ? (
                <div className="mt-10 flex flex-wrap gap-2 border-t border-ink-100 pt-6">
                  {article.tags.map((tag) => (
                    <Pill key={tag}>#{tag}</Pill>
                  ))}
                </div>
              ) : null}

              {/* Medical review notice — an E-E-A-T signal and, more to the
                  point, an honest one. */}
              <aside className="mt-8 rounded-card border border-teal-100 bg-teal-50/60 p-5">
                <p className="text-[0.75rem] font-bold tracking-[0.14em] text-teal-800 uppercase">
                  Medically reviewed
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-teal-900/85">
                  Reviewed by {leadDoctor.name}, {leadDoctor.qualifications}.
                  This article is general education and does not replace advice
                  from your own treating doctor — please discuss your scan and
                  your treatment with them.
                </p>
              </aside>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section tone="surface" spacing="tight">
          <Container width="wide">
            <h2 className="font-display text-xl font-bold text-ink-900">
              Read next
            </h2>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="contents">
                  <ArticleCard article={item} />
                </li>
              ))}
            </ul>
            <p className="mt-7">
              <Link
                href={`/${article.collection}`}
                className="text-[0.9375rem] font-semibold text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-600"
              >
                {article.collection === "learn"
                  ? "Back to the patient guide"
                  : "Back to all posts"}
              </Link>
            </p>
          </Container>
        </Section>
      ) : null}
    </>
  );
}

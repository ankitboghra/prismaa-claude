import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/layout-primitives";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * The masthead every inner page shares. Consistent shape means a visitor
 * always knows where the title, the summary and the way back are.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
  align = "start",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  align?: "start" | "center";
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-28 pb-14 text-ink-300 sm:pt-32 lg:pt-36 lg:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-amber-500/14 blur-[120px]" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-teal-500/15 blur-[110px]" />
      </div>

      <Container
        width="wide"
        className={cn("relative", align === "center" && "text-center")}
      >
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol
              className={cn(
                "flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-ink-400",
                align === "center" && "justify-center",
              )}
            >
              {crumbs.map((crumb, index) => (
                <li key={crumb.path} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span aria-hidden className="text-ink-600">
                      /
                    </span>
                  ) : null}
                  {index === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-ink-300">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.path}
                      className="transition hover:text-white"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <Eyebrow
            tone="light"
            className={align === "center" ? "justify-center" : undefined}
          >
            {eyebrow}
          </Eyebrow>
        ) : null}

        <h1
          className={cn(
            "mt-4 text-display-md text-white",
            align === "center" && "mx-auto max-w-3xl",
          )}
        >
          {title}
        </h1>

        {lede ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-lg leading-relaxed text-ink-300",
              align === "center" && "mx-auto",
            )}
          >
            {lede}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}

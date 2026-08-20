import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        width === "narrow" && "max-w-3xl",
        width === "default" && "max-w-6xl",
        width === "wide" && "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Vertical rhythm lives here rather than being sprinkled across sections, so
 * the whole page can be re-tuned in one place. Mobile spacing is deliberately
 * tighter than desktop — a phone screen has no room for grand gestures.
 */
export function Section({
  children,
  className,
  id,
  tone = "canvas",
  as: Tag = "section",
  spacing = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "canvas" | "surface" | "ink" | "brand" | "none";
  as?: ElementType;
  spacing?: "default" | "tight" | "loose";
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        spacing === "tight" && "py-12 sm:py-16",
        spacing === "default" && "py-16 sm:py-20 lg:py-24",
        spacing === "loose" && "py-20 sm:py-28 lg:py-32",
        tone === "canvas" && "bg-canvas",
        tone === "surface" && "bg-white",
        tone === "ink" && "bg-ink-950 text-ink-200",
        tone === "brand" && "bg-brand-950 text-brand-100",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "light" | "amber";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[0.6875rem] font-bold tracking-[0.18em] uppercase",
        tone === "brand" && "text-brand-700",
        tone === "light" && "text-teal-300",
        tone === "amber" && "text-amber-600",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "rule-spectrum inline-block h-[3px] w-7 rounded-full",
          tone === "light" && "opacity-90",
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "start",
  tone = "dark",
  className,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "start" | "center";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3.5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "light" ? "light" : "brand"}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-display-sm",
          tone === "light" && "text-white",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-ink-300" : "text-ink-600",
            align === "center" && "mx-auto",
          )}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}

export function Pill({
  children,
  className,
  tone = "neutral",
}: {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "brand" | "teal" | "amber" | "coral" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        tone === "neutral" && "bg-ink-50 text-ink-600 ring-1 ring-ink-100",
        tone === "brand" && "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
        tone === "teal" && "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
        tone === "amber" && "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
        tone === "coral" && "bg-coral-50 text-coral-700 ring-1 ring-coral-100",
        tone === "light" && "bg-white/10 text-white ring-1 ring-white/20",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** The signature 3px spectrum rule used to open dark sections. */
export function SpectrumRule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("rule-spectrum block h-[3px] w-full", className)}
    />
  );
}

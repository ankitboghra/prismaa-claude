import type { ReactNode } from "react";
import { PlusIcon } from "./icons";
import { cn } from "@/lib/utils";

/**
 * <details>/<summary> rather than a JS accordion: keyboard support, screen
 * reader semantics and in-page search (Ctrl+F finds text inside collapsed
 * panels in modern browsers) all come free, and it works before hydration.
 */
export function Accordion({
  items,
  className,
  defaultOpenIndex,
}: {
  items: { question: string; answer: ReactNode }[];
  className?: string;
  defaultOpenIndex?: number;
}) {
  return (
    <div className={cn("divide-y divide-ink-100", className)}>
      {items.map((item, index) => (
        <details
          key={item.question}
          open={index === defaultOpenIndex}
          className="group py-1"
          name="prismaa-accordion"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[1.0625rem] leading-snug font-semibold text-ink-900">
              {item.question}
            </span>
            <span
              aria-hidden
              className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-50 text-ink-500 transition-transform duration-300 group-open:rotate-45 group-open:bg-brand-50 group-open:text-brand-700"
            >
              <PlusIcon className="h-4 w-4" />
            </span>
          </summary>
          <div className="pb-5 text-[0.9375rem] leading-relaxed text-ink-600">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

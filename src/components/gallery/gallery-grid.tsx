"use client";

import { useCallback, useEffect, useState } from "react";
import { Figure } from "@/components/media/figure";
import { CloseIcon } from "@/components/ui/icons";
import {
  galleryCategories,
  galleryItems as allItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

/**
 * Centre photography with a keyboard-navigable lightbox.
 *
 * Arrow keys and Escape are wired up because a gallery that can only be
 * operated by tapping is a gallery half the visitors cannot use comfortably.
 */
export function GalleryGrid({
  items = allItems,
  showFilters = true,
}: {
  items?: GalleryItem[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null
          ? null
          : (current + delta + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <div>
      {showFilters ? (
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
            Everything
          </FilterChip>
          {galleryCategories.map((category) => (
            <FilterChip
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </FilterChip>
          ))}
        </div>
      ) : null}

      <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-3">
        {visible.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              item.featured && "col-span-2 lg:col-span-2 lg:row-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block w-full overflow-hidden rounded-card ring-1 ring-ink-100 transition hover:ring-brand-200"
            >
              <Figure
                src={item.src}
                alt={item.alt}
                ratio={item.featured ? "4/3" : "3/2"}
                sizes="(min-width: 1024px) 33vw, 50vw"
                imageClassName="transition duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent px-3 pt-8 pb-2.5 text-left text-[0.75rem] leading-snug font-medium text-white opacity-0 transition group-hover:opacity-100 sm:text-[0.8125rem]">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="animate-fade fixed inset-0 z-100 flex flex-col bg-ink-950/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <p className="text-[0.75rem] font-semibold tracking-wider text-white/50 uppercase">
              {openIndex! + 1} / {visible.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center px-4 pb-6 sm:px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <figure className="w-full max-w-4xl">
              <Figure
                src={current.src}
                alt={current.alt}
                ratio="3/2"
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="rounded-panel"
              />
              <figcaption className="mt-4 text-center text-[0.9375rem] leading-relaxed text-white/80">
                {current.caption}
              </figcaption>

              <div className="mt-5 flex justify-center gap-3">
                <NavButton onClick={() => step(-1)}>Previous</NavButton>
                <NavButton onClick={() => step(1)}>Next</NavButton>
              </div>
            </figure>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full px-4 py-2 text-[0.875rem] font-semibold whitespace-nowrap transition",
        active
          ? "bg-ink-900 text-white shadow-e1"
          : "bg-white text-ink-600 ring-1 ring-ink-200 hover:bg-ink-50 hover:text-ink-900",
      )}
    >
      {children}
    </button>
  );
}

function NavButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
    >
      {children}
    </button>
  );
}

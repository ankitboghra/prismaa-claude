"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/modal";
import { ServiceDetail } from "./service-detail";
import { Pill } from "@/components/ui/layout-primitives";
import { ArrowRightIcon, ClockIcon, Icon, SparkIcon } from "@/components/ui/icons";
import {
  serviceCategories,
  services as allServices,
  type Service,
  type ServiceCategoryId,
} from "@/data/services";
import { cn } from "@/lib/utils";

type Filter = ServiceCategoryId | "all";

/**
 * The services grid.
 *
 * Cards open a modal rather than navigating, because a patient comparing three
 * studies should not lose their place in the page to do it. Every card is also
 * a real link to /services/[slug] — that page is what Google indexes, and it is
 * what someone gets if they open the card in a new tab or arrive with JS off.
 */
export function ServicesExplorer({
  services = allServices,
  showFilters = true,
  columns = 3,
}: {
  services?: Service[];
  showFilters?: boolean;
  columns?: 2 | 3;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Service | null>(null);

  const categories = useMemo(
    () =>
      serviceCategories.filter((category) =>
        services.some((service) => service.category === category.id),
      ),
    [services],
  );

  const visible = useMemo(
    () =>
      filter === "all"
        ? services
        : services.filter((service) => service.category === filter),
    [filter, services],
  );

  const activeCategory = categories.find((category) => category.id === filter);

  return (
    <div>
      {showFilters ? (
        <>
          <div
            role="tablist"
            aria-label="Filter services by category"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            <FilterChip
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All services
              <span className="ml-1.5 opacity-60">{services.length}</span>
            </FilterChip>
            {categories.map((category) => (
              <FilterChip
                key={category.id}
                active={filter === category.id}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </FilterChip>
            ))}
          </div>

          {activeCategory ? (
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-600">
              {activeCategory.blurb}
            </p>
          ) : null}
        </>
      ) : null}

      <ul
        className={cn(
          "mt-6 grid gap-3.5 sm:grid-cols-2",
          columns === 3 && "lg:grid-cols-3",
        )}
      >
        {visible.map((service) => (
          <li key={service.slug} className="contents">
            <ServiceCard service={service} onOpen={() => setActive(service)} />
          </li>
        ))}
      </ul>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        labelledBy="service-modal-heading"
      >
        {active ? (
          <ServiceDetail service={active} headingId="service-modal-heading" />
        ) : null}
      </Modal>
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
      role="tab"
      aria-selected={active}
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

function ServiceCard({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: () => void;
}) {
  return (
    <article className="group relative flex flex-col rounded-card bg-white p-5 shadow-e1 ring-1 ring-ink-100/80 transition duration-300 hover:-translate-y-0.5 hover:shadow-e2 hover:ring-brand-200">
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors",
            service.isMolecular
              ? "bg-coral-50 text-coral-700 group-hover:bg-coral-100"
              : "bg-brand-50 text-brand-700 group-hover:bg-brand-100",
          )}
        >
          <Icon name={service.icon} className="h-5.5 w-5.5" />
        </span>
        {service.isMolecular ? (
          <Pill tone="coral">
            <SparkIcon className="h-3 w-3" />
            Molecular
          </Pill>
        ) : null}
      </div>

      <h3 className="mt-4 font-display text-[1.0625rem] leading-snug font-bold text-ink-900">
        {/*
          The whole card is clickable via the overlay below, but the heading is
          a genuine link so the URL is crawlable, copyable and openable in a
          new tab.
        */}
        <Link
          href={`/services/${service.slug}`}
          onClick={(event) => {
            // Let modifier-clicks and middle-clicks navigate normally.
            if (event.metaKey || event.ctrlKey || event.shiftKey) return;
            event.preventDefault();
            onOpen();
          }}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {service.name}
        </Link>
      </h3>

      {service.tracer ? (
        <p className="mt-1 text-[0.75rem] font-semibold tracking-wide text-ink-400">
          {service.tracer}
        </p>
      ) : null}

      <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-ink-600">
        {service.summary}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-ink-100 pt-3.5">
        <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-ink-500">
          <ClockIcon className="h-3.5 w-3.5" />
          {service.duration}
        </span>
        <span className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-brand-700 transition group-hover:gap-1.5">
          View details
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </div>
    </article>
  );
}

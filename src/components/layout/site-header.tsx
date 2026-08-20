"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PrismaaLogo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";
import { primaryNav } from "@/data/navigation";
import { primaryPhone, siteConfig, telUrl, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  /**
   * The drawer stores *which route* it was opened on rather than a boolean.
   * Navigating changes `pathname`, so the drawer closes itself with no effect
   * and no risk of it being left open over the new page.
   */
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /**
   * Every route opens with a dark hero, so at scroll-top the header is
   * transparent and sits on ink — which means the logo, links and icon button
   * all have to invert. Once the white bar fades in they revert.
   */
  const onDark = !scrolled && !open;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
          scrolled || open
            ? "bg-white/90 shadow-e1 backdrop-blur-lg"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-[4.5rem] lg:px-8">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — home`}
            className="-m-1 rounded-lg p-1"
          >
            <PrismaaLogo tone={onDark ? "light" : "dark"} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[0.875rem] font-medium transition-colors",
                      onDark
                        ? isActive(link.href)
                          ? "text-white"
                          : "text-ink-300 hover:text-white"
                        : isActive(link.href)
                          ? "text-brand-700"
                          : "text-ink-600 hover:text-ink-900",
                    )}
                  >
                    {link.label}
                    {isActive(link.href) ? (
                      <span
                        aria-hidden
                        className="rule-spectrum absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full"
                      />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telUrl(primaryPhone.e164)}
              className={cn(
                "hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition md:inline-flex",
                onDark
                  ? "text-white hover:bg-white/10"
                  : "text-ink-800 hover:bg-ink-50",
              )}
            >
              <PhoneIcon
                className={cn(
                  "h-4 w-4",
                  onDark ? "text-teal-400" : "text-brand-600",
                )}
              />
              {primaryPhone.display}
            </a>

            {/* Wrapper rather than a `hidden` class on the Button itself:
                the button's own `inline-flex` would otherwise compete with it. */}
            <span className="hidden sm:block">
              {/* Brown recedes against the dark hero, so the CTA switches to
                  the amber facet until the white bar fades in. */}
              <Button
                href={whatsappUrl}
                size="sm"
                variant={onDark ? "accent" : "primary"}
              >
                Book a scan
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full transition lg:hidden",
                onDark
                  ? "text-white ring-1 ring-white/25 hover:bg-white/10"
                  : "text-ink-800 ring-1 ring-ink-200 hover:bg-ink-50",
              )}
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-nav"
          hidden={!open}
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-100 bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="px-5 py-4">
            <ul className="flex flex-col">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-4 border-b border-ink-100 py-3.5"
                  >
                    <span>
                      <span
                        className={cn(
                          "block font-display text-base font-semibold",
                          isActive(link.href) ? "text-brand-700" : "text-ink-900",
                        )}
                      >
                        {link.label}
                      </span>
                      {link.description ? (
                        <span className="mt-0.5 block text-[0.8125rem] text-ink-500">
                          {link.description}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRightIcon className="h-4 w-4 shrink-0 text-ink-300" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-2.5 pb-4">
              <Button href={telUrl(primaryPhone.e164)} block size="lg">
                <PhoneIcon className="h-4 w-4" />
                {primaryPhone.display}
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" block size="lg">
                Book on WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

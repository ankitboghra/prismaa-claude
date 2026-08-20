"use client";

import { useEffect, useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { primaryPhone, telUrl, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Contact is the whole point of the site, so it is never more than one thumb
 * away:
 *
 *   • mobile  — a fixed two-up action bar (Call / WhatsApp) pinned to the
 *               bottom of the viewport, above the safe-area inset.
 *   • all     — a floating WhatsApp bubble at the bottom right, which expands
 *               to a labelled pill on pointer devices.
 *
 * The bubble appears after a short scroll so it does not cover the hero's own
 * call to action on first paint.
 */
export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Prismaa OncoImaging on WhatsApp"
        className={cn(
          "group fixed right-4 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] px-3.5 py-3.5 text-[#04301a] shadow-e3",
          "transition-[transform,opacity,padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:pr-5 sm:right-6",
          // Clear the mobile action bar; sit low on larger screens.
          "bottom-[calc(4.75rem+env(safe-area-inset-bottom))] md:bottom-6",
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-90 opacity-0",
        )}
      >
        <span
          aria-hidden
          className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366] motion-reduce:hidden"
        />
        <WhatsAppIcon className="relative h-7 w-7" />
        <span className="relative hidden max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-40 md:block">
          Chat with us
        </span>
      </a>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 backdrop-blur-lg md:hidden">
        <div className="grid grid-cols-2 gap-2 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
          <a
            href={telUrl(primaryPhone.e164)}
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 text-[0.9375rem] font-bold text-white shadow-e2 active:translate-y-px"
          >
            <PhoneIcon className="h-4.5 w-4.5" />
            Call now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-white text-[0.9375rem] font-bold text-ink-900 ring-1 ring-ink-200 active:translate-y-px"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366]" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

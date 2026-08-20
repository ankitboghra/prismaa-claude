"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { CloseIcon } from "./icons";
import { cn } from "@/lib/utils";

/**
 * Built on the native <dialog> element.
 *
 * `showModal()` gives us focus trapping, Escape-to-close, inert background
 * content and correct `aria-modal` semantics from the platform — all of which
 * a hand-rolled div would have to reimplement, usually badly.
 *
 * On mobile this presents as a bottom sheet; on desktop as a centred panel.
 */
export function Modal({
  open,
  onClose,
  labelledBy,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  /** id of the heading inside the modal. */
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      // <dialog> does not lock the page behind it.
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = useCallback(() => {
    document.body.style.overflow = "";
    onClose();
  }, [onClose]);

  /**
   * Clicking the backdrop should dismiss. The backdrop is part of the dialog
   * element itself, so we compare against its content box rather than adding
   * an overlay div.
   */
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target !== ref.current) return;
    const { left, right, top, bottom } = ref.current.getBoundingClientRect();
    const outside =
      event.clientX < left ||
      event.clientX > right ||
      event.clientY < top ||
      event.clientY > bottom;
    if (outside) handleClose();
  };

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={handleClose}
      onCancel={handleClose}
      onClick={handleBackdropClick}
      className={cn(
        // Reset the UA centring so we can be a sheet on mobile.
        "m-0 max-h-none max-w-none bg-transparent p-0 text-ink-800 backdrop:bg-ink-950/55 backdrop:backdrop-blur-sm",
        "fixed inset-0 h-full w-full",
        "open:animate-fade",
        className,
      )}
    >
      <div className="flex min-h-full items-end justify-center sm:items-center sm:p-6">
        <div className="animate-scale-in relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-e3 sm:max-w-2xl sm:rounded-panel">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-3.5 right-3.5 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-ink-500 ring-1 ring-ink-100 backdrop-blur transition hover:bg-ink-50 hover:text-ink-900"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <div className="overflow-y-auto overscroll-contain">{children}</div>
        </div>
      </div>
    </dialog>
  );
}

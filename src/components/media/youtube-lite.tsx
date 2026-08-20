"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/**
 * A click-to-load YouTube facade.
 *
 * Embedding the real iframe up front costs roughly half a megabyte and a
 * fistful of third-party cookies *per video*, which on a 3G connection in
 * Surat is the difference between a page that loads and one that doesn't. We
 * show YouTube's own thumbnail and only mount the iframe once the visitor
 * actually asks for the video.
 */
export function YouTubeLite({
  id,
  title,
  className,
}: {
  id: string;
  title: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-card bg-ink-950",
        className,
      )}
    >
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          {/* Not next/image: YouTube thumbnails are already optimised and
              sized, and routing them through the image optimiser only adds
              latency. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-brand-700 shadow-e3 transition duration-300 group-hover:scale-110">
              <PlayIcon className="ml-0.5 h-6 w-6" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

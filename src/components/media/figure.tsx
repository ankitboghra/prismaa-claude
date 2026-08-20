import Image from "next/image";
import { PrismaaMark } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export type AspectRatio = "3/2" | "4/3" | "1/1" | "16/9" | "4/5";

const aspectClasses: Record<AspectRatio, string> = {
  "3/2": "aspect-3/2",
  "4/3": "aspect-4/3",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "4/5": "aspect-4/5",
};

/**
 * A photograph, or a graceful stand-in for one.
 *
 * The centre's own photography is not in the repository yet, so every image
 * slot degrades to an on-brand placeholder tile rather than a broken icon or
 * a grey box. Add the real file under /public/images/… and set `src` — the
 * placeholder disappears with no other change.
 */
export function Figure({
  src,
  alt,
  ratio = "3/2",
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority,
  label,
}: {
  src?: string;
  alt: string;
  ratio?: AspectRatio;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Overrides the caption shown on the placeholder tile. */
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ink-100",
        aspectClasses[ratio],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <PlaceholderTile label={label ?? alt} />
      )}
    </div>
  );
}

function PlaceholderTile({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-900 via-ink-800 to-brand-950 p-5 text-center"
    >
      <span aria-hidden className="bg-grid absolute inset-0 opacity-70" />
      <PrismaaMark className="relative h-9 w-9 text-white/70" />
      <span className="relative max-w-[22ch] text-[0.6875rem] leading-snug font-medium tracking-wide text-white/50">
        {label}
      </span>
      <span className="relative text-[0.5625rem] font-bold tracking-[0.22em] text-white/30 uppercase">
        Photograph coming soon
      </span>
    </div>
  );
}

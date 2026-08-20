import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "whatsapp"
  /** The high-salience CTA for dark sections, where brown recedes. */
  | "accent"
  | "onDark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-e2 hover:bg-brand-700 active:bg-brand-800",
  secondary:
    "bg-white text-ink-900 ring-1 ring-ink-200 shadow-e1 hover:bg-ink-50 hover:ring-ink-300",
  ghost: "text-brand-700 hover:bg-brand-50",
  whatsapp: "bg-[#25D366] text-[#04301a] shadow-e2 hover:bg-[#1eb954]",
  accent:
    "bg-amber-400 text-ink-950 shadow-e2 hover:bg-amber-300 active:bg-amber-500",
  onDark:
    "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-[0.9375rem] gap-2",
  lg: "h-13 px-6 text-base gap-2.5",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold " +
  "transition-[background-color,box-shadow,transform,color] duration-200 " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50 " +
  "whitespace-nowrap select-none";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Stretches to the container — the default shape on mobile. */
  block?: boolean;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * One button, three shapes. Anything with an `href` renders as a link —
 * including `tel:`, `mailto:` and `wa.me` URLs, which is most of the CTAs on
 * this site, so external hrefs are detected rather than flagged by hand.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    block,
    children,
    ...rest
  } = props;

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    block && "w-full",
    className,
  );

  if (typeof props.href === "string") {
    const { href, ...anchorProps } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }

    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

import type { SVGProps } from "react";

/**
 * A small hand-built icon set.
 *
 * Deliberately not an icon library: we need roughly thirty glyphs, several of
 * them domain-specific (gamma camera, radioactive tracer, body scan) that no
 * general set ships. Every path is drawn on a 24×24 grid with a 1.5 stroke and
 * round caps, so they sit together as one family.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const Svg = ({ children, ...props }: IconProps) => (
  <svg {...base} {...props}>
    {children}
  </svg>
);

/* -- Clinical ---------------------------------------------------------- */

export const BodyScanIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7V5.5A1.5 1.5 0 0 1 5.5 4H7M17 4h1.5A1.5 1.5 0 0 1 20 5.5V7M20 17v1.5a1.5 1.5 0 0 1-1.5 1.5H17M7 20H5.5A1.5 1.5 0 0 1 4 18.5V17" />
    <path d="M12 7.5a2 2 0 1 0 0-.001Z" />
    <path d="M9.2 20c0-2.2.3-4 .8-5.3-.9-.6-1.6-1.4-2-2.4M14.8 20c0-2.2-.3-4-.8-5.3.9-.6 1.6-1.4 2-2.4" />
    <path d="M8 12h8" />
  </Svg>
);

export const TargetIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const MoleculeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="5" r="2.2" />
    <circle cx="5" cy="16" r="2.2" />
    <circle cx="19" cy="16" r="2.2" />
    <path d="M10.6 6.9 6.4 14.1M13.4 6.9l4.2 7.2M7.2 16h9.6" />
  </Svg>
);

export const SparkIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
    <path d="M18.5 16.5 19.2 18.6 21.3 19.3 19.2 20 18.5 22 17.8 20 15.7 19.3 17.8 18.6Z" />
  </Svg>
);

export const FlaskIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.5 3h5M10.5 3v6.2L5.6 17.8A2 2 0 0 0 7.3 21h9.4a2 2 0 0 0 1.7-3.2L13.5 9.2V3" />
    <path d="M7.8 15h8.4" />
  </Svg>
);

export const BrainIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5.2a2.7 2.7 0 0 0-4.8-1.7A2.6 2.6 0 0 0 4 6.4a2.7 2.7 0 0 0-.6 4.3A2.8 2.8 0 0 0 4.4 15a2.6 2.6 0 0 0 2.4 3.4A2.7 2.7 0 0 0 12 18Z" />
    <path d="M12 5.2a2.7 2.7 0 0 1 4.8-1.7A2.6 2.6 0 0 1 20 6.4a2.7 2.7 0 0 1 .6 4.3A2.8 2.8 0 0 1 19.6 15a2.6 2.6 0 0 1-2.4 3.4A2.7 2.7 0 0 1 12 18Z" />
    <path d="M12 5.2V18" />
  </Svg>
);

export const HeartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 20.2s-7.4-4.4-7.4-9.6A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.4 2.6c0 5.2-7.4 9.6-7.4 9.6Z" />
  </Svg>
);

export const PulseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 12h3.5L9 5.5 12.5 18l2.5-6h6" />
  </Svg>
);

export const ThermometerIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13.5 13.6V5.2a2 2 0 1 0-4 0v8.4a4 4 0 1 0 4 0Z" />
    <path d="M11.5 16.6a1 1 0 1 0 0 .001" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.2 5 6v5.4c0 4.3 2.9 8.1 7 9.4 4.1-1.3 7-5.1 7-9.4V6Z" />
    <path d="m9.2 12 2 2 3.6-4" />
  </Svg>
);

export const NeedleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m20.5 3.5-6.8 6.8M18.9 8.2l-3.1-3.1M9.8 14.2l-3.1-3.1" />
    <path d="m13.7 10.3-7.2 7.2-3 3M8.6 15.4l1.6 1.6" />
    <path d="m10.7 13.3 1.6 1.6" />
  </Svg>
);

export const LayersIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3.5 8.5 4.2L12 12 3.5 7.7Z" />
    <path d="m3.5 12 8.5 4.3 8.5-4.3M3.5 16.3 12 20.6l8.5-4.3" />
  </Svg>
);

export const CrosshairIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="7.5" />
    <path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4" />
  </Svg>
);

export const GammaIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 12a3 3 0 1 0 0-.001Z" />
    <path d="M12 9V3.5M14.6 13.5l4.7 2.7M9.4 13.5l-4.7 2.7" />
    <path d="M7.6 6.4A7.5 7.5 0 0 0 6 15.6M16.4 6.4a7.5 7.5 0 0 1 1.6 9.2M9 20.6a7.5 7.5 0 0 0 6 0" />
  </Svg>
);

export const AtomIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
  </Svg>
);

export const CycleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.2 12a7.8 7.8 0 0 1 13.1-5.7l2.2 2M19.8 12a7.8 7.8 0 0 1-13.1 5.7l-2.2-2" />
    <path d="M19.9 4.6v3.9h-3.9M4.1 19.4v-3.9H8" />
  </Svg>
);

/* -- Journey / process --------------------------------------------------- */

export const ClipboardIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 4.5h6M8.5 6H7a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.5" />
    <rect x="9" y="3" width="6" height="3" rx="1" />
    <path d="M8.8 11.5h6.4M8.8 15h4.4" />
  </Svg>
);

export const DropletIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5c2.6 3 5.5 5.9 5.5 9.2A5.5 5.5 0 0 1 6.5 12.7c0-3.3 2.9-6.2 5.5-9.2Z" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </Svg>
);

export const DocumentIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 3.5H7.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3.5V8h4.5M9 13h6M9 16.5h4" />
  </Svg>
);

export const ChatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 12.2c0 3.8-3.6 6.9-8 6.9a9.4 9.4 0 0 1-2.6-.4L4.5 20l1.2-3.3A6.5 6.5 0 0 1 4 12.2c0-3.8 3.6-6.9 8-6.9s8 3.1 8 6.9Z" />
  </Svg>
);

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.4-4.4" />
  </Svg>
);

export const MapIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 4.5 6 2.4 5-2v14l-5 2-6-2.4-5 2v-14Z" />
    <path d="M9 4.5v14.4M15 6.9v14.3" />
  </Svg>
);

export const ChartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20h16M7 20V13M12 20V6.5M17 20v-4.5" />
  </Svg>
);

/* -- Contact / UI -------------------------------------------------------- */

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.5 3.8h2.2l1.6 4-2 1.4a11 11 0 0 0 5.5 5.5l1.4-2 4 1.6v2.2a2 2 0 0 1-2.2 2A16.4 16.4 0 0 1 4.5 6a2 2 0 0 1 2-2.2Z" />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7 6.4 5a1.8 1.8 0 0 0 2.2 0l6.4-5" />
  </Svg>
);

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s6.5-5.6 6.5-10.4a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21Z" />
    <circle cx="12" cy="10.4" r="2.4" />
  </Svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.29L2 22.4l5.42-1.66a9.8 9.8 0 0 0 4.62 1.17h.01c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm0 17.96a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.94.94-2.98-.2-.31a8.09 8.09 0 0 1-1.24-4.31 8.2 8.2 0 0 1 16.4 0 8.2 8.2 0 0 1-8.41 7.97Zm4.5-6.13c-.24-.12-1.45-.72-1.68-.8-.23-.09-.4-.13-.56.12-.17.24-.64.8-.79.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.01-.38.11-.5.11-.11.24-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.48c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.58.26 1.04.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.17-.46-.29Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6 18 18M18 6 6 18" />
  </Svg>
);

export const PlusIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="m12 2.8 2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.65l-5.81 3.05 1.1-6.47-4.7-4.58 6.5-.95Z" />
  </svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M8 5.2v13.6l11-6.8z" />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M9.4 5.6c-3 1.4-5 4.2-5 7.9 0 3 1.8 4.9 4.2 4.9 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1 .2.4-1.6 1.8-3 3.5-3.8Zm9.3 0c-3 1.4-5 4.2-5 7.9 0 3 1.8 4.9 4.2 4.9 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1 .2.4-1.6 1.8-3 3.5-3.8Z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const ExternalIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13.5 4.5H19.5V10.5" />
    <path d="M19.5 4.5 11 13M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
  </Svg>
);

/* -- Registry ------------------------------------------------------------ */

export const icons = {
  bodyScan: BodyScanIcon,
  target: TargetIcon,
  molecule: MoleculeIcon,
  spark: SparkIcon,
  flask: FlaskIcon,
  brain: BrainIcon,
  heart: HeartIcon,
  pulse: PulseIcon,
  thermometer: ThermometerIcon,
  shield: ShieldIcon,
  needle: NeedleIcon,
  layers: LayersIcon,
  crosshair: CrosshairIcon,
  gamma: GammaIcon,
  atom: AtomIcon,
  cycle: CycleIcon,
  clipboard: ClipboardIcon,
  droplet: DropletIcon,
  clock: ClockIcon,
  document: DocumentIcon,
  chat: ChatIcon,
  search: SearchIcon,
  map: MapIcon,
  chart: ChartIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  pin: PinIcon,
  whatsapp: WhatsAppIcon,
  instagram: InstagramIcon,
  arrowRight: ArrowRightIcon,
  check: CheckIcon,
  close: CloseIcon,
  plus: PlusIcon,
  star: StarIcon,
  play: PlayIcon,
  quote: QuoteIcon,
  menu: MenuIcon,
  external: ExternalIcon,
} as const;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  const Component = icons[name];
  return <Component {...props} />;
}

import Link from "next/link";
import { Container } from "@/components/ui/layout-primitives";
import { Button } from "@/components/ui/button";
import { PrismaaMark } from "@/components/ui/logo";
import { PhoneIcon } from "@/components/ui/icons";
import { primaryNav } from "@/data/navigation";
import { primaryPhone, telUrl } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink-950 py-28 text-ink-300">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-amber-500/14 blur-[120px]" />
      </div>

      <Container width="default" className="relative text-center">
        <PrismaaMark className="mx-auto h-12 w-12 text-white" />
        <p className="mt-8 text-[0.6875rem] font-bold tracking-[0.2em] text-teal-300 uppercase">
          404 — page not found
        </p>
        <h1 className="mt-4 text-display-md text-white">
          That page has moved, or never existed
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-300">
          If you were looking for information about a scan, start with our
          services — or just call us and ask.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href={telUrl(primaryPhone.e164)} variant="onDark" size="lg">
            <PhoneIcon className="h-5 w-5" />
            {primaryPhone.display}
          </Button>
        </div>

        <nav aria-label="Site sections" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2.5">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.9375rem] text-ink-400 underline decoration-ink-700 underline-offset-4 transition hover:text-white hover:decoration-teal-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}

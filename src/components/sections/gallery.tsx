import { ArrowUpRight } from "lucide-react";
import { SectionMotion } from "@/components/ui/section-motion";
import { brandColor, sectionTint } from "@/lib/brand-colors";
import { PHOTOS } from "@/lib/photos";

// Photos not featured elsewhere on the page (the rest live in their own sections, see lib/photos.ts).
const BASE = [
  { photo: PHOTOS.social, href: "#solutions", to: "Soluciones" },
  { photo: PHOTOS.keyboard, href: "#solutions", to: "Soluciones" },
  { photo: PHOTOS.park, href: "#contact", to: "Contacto" },
  { photo: PHOTOS.space, href: "#solutions", to: "ATL, BTL y Eventos" },
] as const;

// Repeated so one track is always wider than any screen and the loop never shows a gap.
const ITEMS = [...BASE, ...BASE];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 gap-4 pr-4 md:gap-6 md:pr-6"
      aria-hidden={hidden || undefined}
    >
      {ITEMS.map(({ photo, href, to }, i) => (
        <li
          key={i}
          className="relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl border-2 sm:h-64 sm:w-80 md:h-80 md:w-[26rem]"
          style={{ borderColor: brandColor(i) }}
        >
          <a
            href={href}
            tabIndex={hidden ? -1 : undefined}
            aria-label={`${photo.alt} — ir a ${to}`}
            className="group relative block h-full w-full focus-visible:outline-offset-[-4px]"
          >
            {/* Pre-optimized WebP from the ARTEC portfolio. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt=""
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between gap-2 rounded-full bg-[var(--surface-glass-strong)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
              {to}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Gallery() {
  return (
    <section
      aria-label="Galería de imágenes"
      style={sectionTint("var(--brand-indigo)")}
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--background-glass)] py-14 md:py-20"
    >
      <SectionMotion tint="var(--brand-indigo)" seed={4} strong />
      <div className="relative overflow-hidden motion-reduce:overflow-x-auto">
        <div className="gallery-track flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}

import type { Photo } from "@/lib/photos";
import { Reveal } from "@/components/ui/reveal";

type FrameProps = {
  photo: Photo;
  color: string;
  className?: string;
  tilt?: number;
  /** Tailwind aspect class, e.g. "aspect-[4/3]". */
  aspect?: string;
};

/** A photo with an offset color block behind it, a soft shadow and a slight tilt: gives the page depth. */
export function PhotoFrame({
  photo,
  color,
  className = "",
  tilt = 0,
  aspect = "aspect-[4/3]",
}: FrameProps) {
  return (
    <div
      className={`group relative ${className}`}
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] opacity-90 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 md:translate-x-4 md:translate-y-4"
        style={{ background: `linear-gradient(135deg, ${color}, color-mix(in srgb, ${color} 40%, var(--brand-orange)))` }}
      />
      <div
        className={`relative overflow-hidden rounded-[1.75rem] border-4 border-[var(--surface)] shadow-[0_24px_50px_-20px_rgba(21,15,51,0.55)] ${aspect}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: `linear-gradient(160deg, color-mix(in srgb, ${color} 22%, transparent), transparent 55%)` }}
        />
      </div>
    </div>
  );
}

type CollageProps = {
  main: Photo;
  second: Photo;
  colors: [string, string];
  className?: string;
  flip?: boolean;
};

/** Two overlapping framed photos (main + smaller inset), animated in on scroll. */
export function PhotoCollage({ main, second, colors, className = "", flip = false }: CollageProps) {
  return (
    <div className={`relative mx-auto w-full max-w-xl pb-16 ${className}`}>
      <Reveal>
        <PhotoFrame
          photo={main}
          color={colors[0]}
          tilt={flip ? 1.5 : -1.5}
          aspect="aspect-[4/3]"
          className={flip ? "ml-auto w-[88%]" : "w-[88%]"}
        />
      </Reveal>
      <Reveal delay={0.15} className={`absolute bottom-0 w-[52%] ${flip ? "left-0" : "right-0"}`}>
        <PhotoFrame
          photo={second}
          color={colors[1]}
          tilt={flip ? -3 : 3}
          aspect="aspect-[4/3]"
        />
      </Reveal>
    </div>
  );
}

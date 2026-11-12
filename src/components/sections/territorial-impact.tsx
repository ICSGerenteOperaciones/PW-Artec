import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { SectionMotion } from "@/components/ui/section-motion";
import { TERRITORY_STORY } from "@/lib/data";
import { PHOTOS } from "@/lib/photos";
import { brandColor, sectionTint } from "@/lib/brand-colors";

const CHAPTER_PHOTOS = [PHOTOS.outdoor, PHOTOS.social, PHOTOS.park, PHOTOS.desk] as const;

export function TerritorialImpact() {
  return (
    <section
      style={sectionTint("var(--brand-red)")}
      id="territory"
      aria-labelledby="territory-heading"
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--surface-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <SectionMotion tint="var(--brand-red)" seed={3} />
      <div className="container-artec relative">
        <div id="territory-heading">
          <SectionHeading
            align="center"
            eyebrow="Impacto territorial"
            title={TERRITORY_STORY.title}
            description={TERRITORY_STORY.description}
          />
        </div>

        <div className="relative mt-20 space-y-20 md:space-y-28">
          {/* Center thread that ties the chapters together (desktop). */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--brand-blue) 12%, var(--brand-orange) 88%, transparent)",
              opacity: 0.55,
            }}
          />

          {TERRITORY_STORY.chapters.map((chapter, i) => {
            const color = brandColor(i);
            const reverse = i % 2 === 1;
            return (
              <div
                key={chapter.title}
                className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-24"
              >
                <Reveal className={reverse ? "lg:order-2" : ""}>
                  <PhotoFrame
                    photo={CHAPTER_PHOTOS[i]}
                    color={color}
                    tilt={reverse ? 1.5 : -1.5}
                    aspect="aspect-[4/3]"
                    className="mx-auto w-[92%] max-w-xl"
                  />
                </Reveal>

                <Reveal delay={0.12} className={reverse ? "lg:order-1" : ""}>
                  <div className={`mx-auto max-w-md ${reverse ? "lg:ml-auto lg:text-right" : ""}`}>
                    <span
                      className="font-display text-7xl font-extrabold leading-none opacity-90 md:text-8xl"
                      style={{ color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                      {chapter.text}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-24 md:mt-32">
          <div
            className="relative overflow-hidden rounded-[2rem] p-8 text-center text-white shadow-[0_30px_60px_-30px_rgba(91,43,217,0.6)] ring-1 ring-white/30 md:p-14"
            style={{
              background:
                "linear-gradient(125deg, #4a22b5 0%, #5b2bd9 45%, #7a5ae6 100%)",
            }}
          >
            {/* Echoes the hero video: soft concentric rings and a warm glow. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border border-white/20"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-1/2 h-[16rem] w-[16rem] -translate-y-1/2 rounded-full border border-white/25"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(247,163,92,0.7), transparent 70%)" }}
            />
            <p className="relative font-display text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
              {TERRITORY_STORY.closing}
            </p>
            <ul className="relative mt-6 flex flex-wrap justify-center gap-2.5">
              {TERRITORY_STORY.reach.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/25 backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative mt-8">
              <MagneticCTA href="#contact" variant="secondary" className="!border-white !bg-white !text-[#3d1aa8]">
                Llevemos tu proyecto al territorio
              </MagneticCTA>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

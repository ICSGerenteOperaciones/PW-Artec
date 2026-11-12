import { ClipboardList, Megaphone, Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { SectionMotion } from "@/components/ui/section-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { CASE_STUDY } from "@/lib/data";
import { PHOTOS } from "@/lib/photos";
import { sectionTint } from "@/lib/brand-colors";

const HIGHLIGHT_ICONS = [Megaphone, ClipboardList, Users] as const;

export function CaseStudy() {
  return (
    <section
      style={sectionTint("var(--brand-indigo)")}
      id="case-study"
      aria-labelledby="case-study-heading"
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <SectionMotion tint="var(--brand-indigo)" seed={5} />
      <div className="container-artec relative">
        <div id="case-study-heading">
          <SectionHeading
            eyebrow="Casos de éxito"
            title="Resultados reales, en territorios reales."
            description="Cuando marketing, tecnología y operación de campo trabajan como un solo equipo, las comunidades se conectan."
          />
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Featured case visual */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-2xl pb-14">
              <PhotoFrame
                photo={PHOTOS.farmer}
                color="var(--brand-blue)"
                tilt={-1.5}
                aspect="aspect-[4/3]"
                className="w-[90%]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-grad-brand px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg">
                Caso destacado
              </span>
              <div className="absolute bottom-0 right-0 w-[48%]">
                <PhotoFrame
                  photo={PHOTOS.harvest}
                  color="var(--brand-orange)"
                  tilt={3}
                  aspect="aspect-[4/3]"
                />
              </div>
              <div className="absolute -top-3 right-2 rounded-2xl bg-[var(--surface)] px-4 py-3 text-center shadow-[0_18px_40px_-18px_rgba(21,15,51,0.6)] md:right-6">
                <p className="font-display text-xl font-extrabold text-[var(--accent)]">Putumayo</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Inclusión digital
                </p>
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <div>
            <Reveal>
              <h3 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)] md:text-4xl">
                Conectamos a <span className="text-gradient">Putumayo</span> con el mundo digital.
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                {CASE_STUDY.summary} Lideramos la divulgación, las encuestas y la promoción para que más
                personas accedan a internet.
              </p>
            </Reveal>

            <ul className="mt-7 space-y-3">
              {CASE_STUDY.highlights.map((h, i) => {
                const Icon = HIGHLIGHT_ICONS[i];
                return (
                  <Reveal key={h.title} as="li" delay={0.15 + i * 0.08}>
                    <div className="flex items-start gap-4 rounded-2xl bg-[var(--surface-glass-strong)] p-4 shadow-sm ring-1 ring-[var(--border)] backdrop-blur-md">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-grad-brand text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-display text-base font-bold text-[var(--text-primary)]">{h.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-[var(--text-secondary)]">{h.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticCTA href="#contact" variant="primary">
                  Quiero un resultado así
                </MagneticCTA>
                <p className="max-w-[16rem] text-sm font-semibold text-[var(--text-secondary)]">
                  {CASE_STUDY.result}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

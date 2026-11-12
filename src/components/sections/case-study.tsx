import { Reveal } from "@/components/ui/reveal";
import { CASE_STUDY } from "@/lib/data";
import { brandColor, sectionTint } from "@/lib/brand-colors";
import { SectionMotion } from "@/components/ui/section-motion";
import { PhotoCollage } from "@/components/ui/photo-frame";
import { PHOTOS } from "@/lib/photos";

export function CaseStudy() {
  return (
    <section style={sectionTint("var(--brand-red)")}
      id="case-study"
      aria-labelledby="case-study-heading"
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--surface-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <SectionMotion tint="var(--brand-red)" seed={3} />
      <div className="container-artec relative">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="w-fit rounded-full bg-[var(--surface-glass-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {CASE_STUDY.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="case-study-heading"
                className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-4xl"
              >
                {CASE_STUDY.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                {CASE_STUDY.summary}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
                Lideramos las estrategias de divulgación, aplicación de
                encuestas y promoción para masificar el acceso a internet y
                fortalecer la apropiación de las TIC, garantizando una
                operación efectiva y un impacto directo en las comunidades.
              </p>
            </Reveal>
            <PhotoCollage
              className="mt-12"
              main={PHOTOS.farmer}
              second={PHOTOS.harvest}
              colors={["var(--brand-red)", "var(--brand-green)"]}
            />
          </div>

          <ol className="relative border-l border-[var(--border)] pl-8">
            {CASE_STUDY.timeline.map((step, i) => (
              <Reveal
                key={step.label}
                as="li"
                delay={i * 0.08}
                className="relative pb-10 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full border-2 border-[var(--surface)]"
                  style={{ backgroundColor: brandColor(i) }}
                />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, "0")} — {step.label}
                </span>
                <p className="mt-2 max-w-lg text-base leading-relaxed text-[var(--text-primary)]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

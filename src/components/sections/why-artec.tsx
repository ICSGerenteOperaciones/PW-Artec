import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WHY_PILLARS } from "@/lib/data";
import { brandColor, sectionTint } from "@/lib/brand-colors";
import { SectionMotion } from "@/components/ui/section-motion";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { PHOTOS } from "@/lib/photos";

export function WhyArtec() {
  return (
    <section style={sectionTint("var(--brand-blue)")} className="section-tinted relative overflow-hidden section-overlap bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32">
      <SectionMotion tint="var(--brand-blue)" seed={4} />
      <div className="container-artec relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <SectionHeading
            eyebrow="Por qué ARTEC"
            title="Por qué las organizaciones eligen un aliado integral."
          />
          <Reveal delay={0.1}>
            <PhotoFrame
              photo={PHOTOS.desk}
              color="var(--brand-blue)"
              tilt={1.5}
              aspect="aspect-[16/10]"
              className="mx-auto w-[94%] max-w-xl lg:ml-auto"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {WHY_PILLARS.map((pillar, i) => {
            const color = brandColor(i);
            return (
              <Reveal key={pillar.index} delay={i * 0.1}>
                <div className="border-t-4 pt-6" style={{ borderTopColor: color }}>
                  <span className="font-display text-4xl font-semibold" style={{ color }}>
                    {pillar.index}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-medium text-[var(--text-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

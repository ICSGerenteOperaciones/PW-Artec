import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CAPABILITIES } from "@/lib/data";
import { brandColor, sectionTint } from "@/lib/brand-colors";
import { SectionMotion } from "@/components/ui/section-motion";
import { PhotoCollage } from "@/components/ui/photo-frame";
import { PHOTOS } from "@/lib/photos";

export function Capabilities() {
  return (
    <section style={sectionTint("var(--brand-indigo)")}
      id="capabilities"
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <SectionMotion tint="var(--brand-indigo)" seed={2} />
      <div className="container-artec relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Capacidades"
            title="Una matriz completa de capacidad estratégica, técnica y operativa."
          />
          <PhotoCollage
            className="!mx-0 lg:ml-auto"
            main={PHOTOS.datacenter}
            second={PHOTOS.code}
            colors={["var(--brand-indigo)", "var(--brand-blue)"]}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((group, i) => {
            const color = brandColor(i);
            return (
              <Reveal
                key={group.category}
                delay={i * 0.05}
                className="bg-[var(--surface-glass-strong)] backdrop-blur-xl"
              >
                <div className="h-full border-t-4 p-8" style={{ borderTopColor: color }}>
                  <h3 className="font-display text-lg font-semibold" style={{ color }}>
                    {group.category}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2.5 text-sm text-[var(--text-secondary)]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

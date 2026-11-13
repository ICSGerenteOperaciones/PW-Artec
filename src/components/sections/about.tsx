import { SectionHeading } from "@/components/ui/section-heading";
import { RadarScan } from "@/components/ui/radar-scan";
import { sectionTint } from "@/lib/brand-colors";
import { SectionMotion } from "@/components/ui/section-motion";
import { PhotoCollage } from "@/components/ui/photo-frame";
import { PHOTOS } from "@/lib/photos";

export function About() {
  return (
    <section style={sectionTint("var(--brand-green)")}
      id="about"
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--surface-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <SectionMotion tint="var(--brand-green)" seed={5} />
      <div className="container-artec relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          {/* Radar rings sit behind the photos as a soft decorative layer. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center opacity-70">
            <RadarScan className="!max-w-none w-[115%]" />
          </div>
          <PhotoCollage
            className="relative"
            main={PHOTOS.team}
            second={PHOTOS.outdoor}
            colors={["var(--brand-green)", "var(--brand-orange)"]}
            flip
          />
        </div>

        <div className="order-1 mx-auto max-w-xl lg:order-2 lg:mx-0">
          <SectionHeading
            eyebrow="Sobre ARTEC"
            title="Impulsamos el alcance y los resultados de tu organización con un aliado integral."
            description="ARTEC opera como un aliado integral que combina planeación estratégica, ejecución digital, infraestructura tecnológica, operación humana e implementación territorial en un ecosistema único y coordinado, construido para escalar."
          />
        </div>
      </div>
    </section>
  );
}

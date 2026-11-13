import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
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
      <div className="container-artec relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <PhotoCollage
          className="order-2 !mx-0 lg:order-1"
          main={PHOTOS.team}
          second={PHOTOS.outdoor}
          colors={["var(--brand-green)", "var(--brand-orange)"]}
          flip
        />

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Sobre ARTEC"
            title="Impulsamos el alcance y los resultados de tu organización con un aliado integral."
            description="ARTEC opera como un aliado integral que combina planeación estratégica, ejecución digital, infraestructura tecnológica, operación humana e implementación territorial en un ecosistema único y coordinado, construido para escalar."
          />
          <Reveal delay={0.1}>
            <RadarScan className="mt-10 max-w-[10rem]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

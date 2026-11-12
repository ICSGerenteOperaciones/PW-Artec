import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { RadarScan } from "@/components/ui/radar-scan";
import { sectionTint } from "@/lib/brand-colors";
import { SectionMotion } from "@/components/ui/section-motion";

export function About() {
  return (
    <section style={sectionTint("var(--brand-green)")}
      id="about"
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--surface-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <SectionMotion tint="var(--brand-green)" seed={5} />
      <div className="container-artec relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Sobre ARTEC"
            title="Impulsamos el alcance y los resultados de su organización con un aliado integral."
            description="ARTEC opera como un aliado integral que combina planeación estratégica, ejecución digital, infraestructura tecnológica, operación humana e implementación territorial en un ecosistema único y coordinado, construido para escalar."
          />
        </div>

        <Reveal delay={0.1}>
          <RadarScan className="mx-auto" />
        </Reveal>
      </div>
    </section>
  );
}

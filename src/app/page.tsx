import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Introduction } from "@/components/sections/introduction";
import { Solutions } from "@/components/sections/solutions";
import { Ecosystem360 } from "@/components/sections/ecosystem-360";
import { Gallery } from "@/components/sections/gallery";
import { Capabilities } from "@/components/sections/capabilities";
import { TerritorialImpact } from "@/components/sections/territorial-impact";
import { CaseStudy } from "@/components/sections/case-study";
import { WhyArtec } from "@/components/sections/why-artec";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Metrics />
        <Introduction />
        <Solutions />
        <Ecosystem360 />
        <Gallery />
        <Capabilities />
        <TerritorialImpact />
        <CaseStudy />
        <WhyArtec />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

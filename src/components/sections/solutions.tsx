"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SOLUTIONS } from "@/lib/data";
import { brandColor, sectionTint } from "@/lib/brand-colors";
import { SectionVideo } from "@/components/ui/section-video";

export function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section style={sectionTint("var(--tint-solutions)")}
      id="solutions"
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <SectionVideo name="solutions" tint="var(--tint-solutions)" />
      <div className="container-artec relative">
        <SectionHeading
          eyebrow="Soluciones"
          title="Cinco capacidades. Una operación coordinada."
          description="Cada línea opera como una práctica especializada — y, como parte de un solo ecosistema, ARTEC puede gestionarlas de principio a fin."
        />

        {/* Desktop: expanding panels */}
        <div
          className="mt-16 hidden gap-2 lg:flex"
          style={{ minHeight: "580px" }}
        >
          {SOLUTIONS.map((solution, i) => {
            const isActive = i === activeIndex;
            const color = brandColor(i);
            return (
              <div
                key={solution.id}
                id={solution.id}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                className="relative cursor-pointer overflow-hidden rounded-2xl border bg-[var(--surface-glass-strong)] backdrop-blur-xl transition-[flex-grow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  flexGrow: isActive ? 5 : 1,
                  flexBasis: 0,
                  borderColor: isActive ? color : "var(--border)",
                }}
              >
                <div className="flex h-full flex-col justify-between p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="font-display text-2xl font-semibold transition-colors duration-300"
                      style={{ color: isActive ? color : "var(--text-muted)" }}
                    >
                      {solution.index}
                    </span>
                    <ArrowUpRight
                      className={`h-5 w-5 shrink-0 transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ color }}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p
                      className={`whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ color }}
                    >
                      {solution.category}
                    </p>

                    {!isActive ? (
                      <p
                        className="mt-4 whitespace-nowrap font-display text-xl font-medium"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          height: "220px",
                          color,
                        }}
                      >
                        {solution.category}
                      </p>
                    ) : (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={solution.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                        >
                          <h3 className="mt-3 max-w-md text-balance font-display text-2xl font-medium leading-tight tracking-tight text-[var(--text-primary)] xl:text-3xl">
                            {solution.title}
                          </h3>
                          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                            {solution.positioning}
                          </p>
                          <ul className="mt-5 max-w-md space-y-3">
                            {solution.subservices.map((sub) => (
                              <li
                                key={sub.title}
                                className="border-l-2 pl-3"
                                style={{ borderColor: color }}
                              >
                                <p className="text-sm font-semibold text-[var(--text-primary)]">
                                  {sub.title}
                                </p>
                                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                                  {sub.description}
                                </p>
                              </li>
                            ))}
                          </ul>
                          <a
                            href="#contact"
                            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)] transition-colors"
                            onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                          >
                            Explorar esta solución
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </a>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet: accordion */}
        <div className="mt-14 flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)] lg:hidden">
          {SOLUTIONS.map((solution, i) => {
            const color = brandColor(i);
            return (
              <details key={solution.id} id={`m-${solution.id}`} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold" style={{ color }}>
                      {solution.index}
                    </span>
                    <span className="font-display text-lg font-medium text-[var(--text-primary)]">
                      {solution.category}
                    </span>
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="mt-4 pl-8">
                  <h3 className="text-balance font-display text-xl font-medium leading-tight text-[var(--text-primary)]">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {solution.positioning}
                  </p>
                  <ul className="mt-4 space-y-4">
                    {solution.subservices.map((sub) => (
                      <li key={sub.title} className="border-l-2 pl-3" style={{ borderColor: color }}>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">
                          {sub.title}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {sub.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]"
                    style={{ color }}
                  >
                    Explorar esta solución
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}

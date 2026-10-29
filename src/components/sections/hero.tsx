"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { brandColor } from "@/lib/brand-colors";
import { ScrambleText } from "@/components/ui/scramble-text";

const FLOW_STEPS = [
  "Estrategia",
  "Digital",
  "Web",
  "Leads",
  "Contact Center",
  "Conversión",
  "Impacto",
];

const MARQUEE_ITEMS = [
  "ESTRATEGIA",
  "MARKETING",
  "TECNOLOGÍA",
  "OPERACIONES",
  "TERRITORIO",
  "CONVERSIÓN",
];

const INTRO_PARTS: { text: string; hl?: boolean }[] = [
  { text: "Estrategia digital", hl: true },
  { text: ", tecnología, " },
  { text: "contact center", hl: true },
  { text: " y " },
  { text: "territorio", hl: true },
  { text: " en un solo ecosistema." },
];

// Running word offset per segment so the reveal cascades across the sentence.
const INTRO = INTRO_PARTS.reduce<{ text: string; hl?: boolean; offset: number }[]>(
  (acc, part) => {
    const prev = acc[acc.length - 1];
    const offset = prev ? prev.offset + prev.text.split(/(\s+)/).length : 0;
    acc.push({ ...part, offset });
    return acc;
  },
  [],
);

// Layered halo in the page background color: keeps floating text legible over the video without a box.
const HALO =
  "0 0 1px var(--background), 0 0 3px var(--background), 0 0 6px var(--background), 0 0 10px var(--background), 0 0 16px var(--background), 0 0 28px color-mix(in srgb, var(--background) 85%, transparent)";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-0 md:pt-28"
    >
      {/* Mobile only: a light veil so text stays readable on small screens;
          on desktop the video is left fully visible. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
        style={{ background: "color-mix(in srgb, var(--background) 46%, transparent)" }}
      />

      <div className="container-artec flex min-h-[92vh] flex-col justify-end pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] bg-[color-mix(in_srgb,var(--solid-tint)_74%,transparent)] p-6 shadow-[0_20px_60px_-30px_rgba(18,94,136,0.35)] backdrop-blur-md md:p-8"
        >
          <div className="grid items-end gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
            <div>
              <div className="flex w-fit items-center gap-2.5 rounded-full bg-[color-mix(in_srgb,var(--solid-tint)_80%,transparent)] px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="signal-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </span>
                <ScrambleText
                  text="ARTEC S.A.S. — SOLUCIONES INTEGRADAS"
                  charDuration={5}
                  className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]"
                />
              </div>
              <h1 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.7rem]">
                Conectamos marcas, tecnología y territorios a gran escala.
              </h1>
            </div>

            <div className="flex flex-col gap-5">
              <p
              className="relative max-w-md text-base font-medium leading-relaxed text-[var(--text-primary)] md:text-lg"
              style={{ textShadow: HALO }}
            >
              {INTRO.map((seg, si) => {
                const words = seg.text.split(/(\s+)/);
                const nodes = words.map((w, wi) =>
                  /^\s+$/.test(w) || w === "" ? (
                    w
                  ) : (
                    <motion.span
                      key={wi}
                      className="inline-block"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 10, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.55, delay: 0.35 + (seg.offset + wi) * 0.035 }}
                    >
                      {w}
                    </motion.span>
                  ),
                );
                return (
                  <span key={si} className={seg.hl ? "font-semibold" : undefined}>
                    {nodes}
                  </span>
                );
              })}
            </p>
              <div className="flex flex-wrap items-center gap-3">
                <MagneticCTA href="#contact" variant="primary">
                  Hablemos de tu proyecto
                </MagneticCTA>
                <MagneticCTA href="#solutions" variant="secondary">
                  Explora nuestras soluciones
                </MagneticCTA>
              </div>
            </div>
          </div>

          <div
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--border)] pt-5"
            aria-label="Flujo del ecosistema ARTEC"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              El ecosistema
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {FLOW_STEPS.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <span
                    aria-hidden="true"
                    className="flow-dot h-2.5 w-2.5 rounded-full"
                    style={{
                      background: brandColor(i),
                      ["--dot" as string]: brandColor(i),
                      animationDelay: `${i}s`,
                    }}
                  />
                  <span
                    className="flow-text text-sm font-semibold text-[var(--text-primary)]"
                    style={{ animationDelay: `${i}s` }}
                  >
                    {step}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#metrics"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mx-auto mb-10 hidden w-fit items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--solid-tint)_68%,transparent)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-primary)] transition-colors hover:text-[var(--accent)] md:flex"
        aria-label="Desplázate para explorar"
      >
        Desplázate para explorar
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
      </motion.a>

      <div
        aria-hidden="true"
        className="relative overflow-hidden border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--solid-tint)_64%,transparent)] py-4 backdrop-blur-sm"
      >
        <div className={`flex w-max ${prefersReducedMotion ? "" : "animate-marquee"}`}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 pr-10 font-mono text-xs font-medium tracking-[0.2em] text-[var(--text-primary)]"
            >
              {item}
              <span className="text-[var(--accent)]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

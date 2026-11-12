import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <Reveal>
        <p
          className={`flex w-fit items-center gap-2.5 rounded-full bg-[var(--surface-glass-strong)] px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] ring-1 ring-[var(--accent)]/30 ${
            align === "center" ? "mx-auto justify-center" : ""
          }`}
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="signal-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

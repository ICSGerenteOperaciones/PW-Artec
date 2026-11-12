"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { useRef, useState } from "react";

type MagneticCTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function MagneticCTA({
  href,
  children,
  variant = "primary",
  className = "",
}: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.35;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 whitespace-nowrap";
  const styles =
    variant === "primary"
      ? "bg-grad-brand text-white shadow-lg shadow-[color-mix(in_srgb,var(--accent)_35%,transparent)]"
      : "border-2 border-[var(--accent)] bg-[var(--surface-glass-strong)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]";

  return (
    <motion.div
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

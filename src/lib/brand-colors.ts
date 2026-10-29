import type { CSSProperties } from "react";

/**
 * Rotating brand palette: shades of one blue family (blue, indigo, teal, slate, sky)
 * so the site reads as a single palette with depth. Used to tell apart repeating items —
 * solutions, capability groups, pillars, ecosystem nodes — without many hues.
 */
export const BRAND_COLORS = [
  "var(--brand-blue)",
  "var(--brand-indigo)",
  "var(--brand-orange)",
  "var(--brand-red)",
  "var(--brand-green)",
] as const;

export function brandColor(index: number): string {
  return BRAND_COLORS[index % BRAND_COLORS.length];
}

/** Sets the per-section tint that tinted glass surfaces mix in (see globals.css). */
export function sectionTint(color: string): CSSProperties {
  return { ["--section-tint" as string]: color } as CSSProperties;
}

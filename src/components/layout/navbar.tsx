"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--nav-glass)] backdrop-blur-md border-b border-[var(--border)]"
            : "bg-gradient-to-b from-[color-mix(in_srgb,var(--background)_var(--nav-top-pct),transparent)] to-transparent"
        }`}
      >
        <div
          className={`container-artec flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <a href="#top" aria-label="ARTEC — inicio">
            <Logo />
          </a>

          <nav
            aria-label="Principal"
            className="hidden items-center gap-9 lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className="text-halo relative py-1 text-base font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[var(--accent)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
            >
              Hablemos
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-primary)]"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--surface-glass-strong)] backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navegación móvil"
          >
            <div className="container-artec flex items-center justify-between py-5">
              <Logo />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-primary)]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Menú móvil"
              className="container-artec flex flex-1 flex-col justify-center gap-2"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="border-b border-[var(--border)] py-5 font-display text-4xl font-medium tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-artec pb-10">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-4 text-base font-semibold text-[var(--accent-foreground)]"
              >
                Hablemos de tu proyecto
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

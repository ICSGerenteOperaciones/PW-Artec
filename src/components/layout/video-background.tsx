"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Fixed, full-viewport cinematic video behind the entire site. Every
 * section renders on translucent "glass" surfaces above it (see the
 * --surface-glass / --background-glass tokens in globals.css), so the
 * footage stays visible as a continuous thread as the page scrolls.
 */
export function VideoBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="video-backdrop" aria-hidden="true">
      {!prefersReducedMotion ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/artec-bg.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="video-poster"
          style={{
            backgroundImage: "url(/video/artec-bg-poster.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <div className="video-scrim" />
    </div>
  );
}

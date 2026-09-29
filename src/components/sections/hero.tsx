"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const CLIP_HIDDEN =
  "polygon(0% 0%, 0% 100%, -4% 100%, 2% 65%, -4% 35%, 2% 0%)";
const CLIP_VISIBLE =
  "polygon(0% 0%, 0% 100%, 96% 100%, 102% 65%, 96% 35%, 102% 0%)";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const name = nameRef.current;
      const path = pathRef.current;
      const stamp = stampRef.current;

      if (reduceMotion) {
        gsap.set(name, { clipPath: CLIP_VISIBLE });
        gsap.set(path, { drawSVG: "100%" });
        gsap.set(stamp, { opacity: 1, scale: 1, rotate: -6, x: 0 });
        gsap.set(".hero-meta", { opacity: 1, y: 0 });
        gsap.set(".scroll-hint", { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        name,
        { clipPath: CLIP_HIDDEN },
        { clipPath: CLIP_VISIBLE, duration: 0.9, ease: "power2.out" }
      )
        .fromTo(
          path,
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.5, ease: "power2.inOut" },
          "-=0.25"
        )
        .fromTo(
          stamp,
          { opacity: 0, scale: 2.4, rotate: -20 },
          { opacity: 1, scale: 1, rotate: -6, duration: 0.35, ease: "back.out(3)" },
          "+=0.08"
        )
        .to(stamp, {
          x: "+=3",
          duration: 0.045,
          yoyo: true,
          repeat: 5,
          ease: "none",
        })
        .fromTo(
          ".hero-meta",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.1"
        )
        .fromTo(
          ".scroll-hint",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.1"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-paper px-6 text-center"
    >
      <div className="relative inline-block">
        <h1
          ref={nameRef}
          className="font-display text-[13vw] leading-[0.86] sm:text-8xl"
          style={{ clipPath: CLIP_HIDDEN }}
        >
          ANUDA
          <br />
          SHAMANTHA
        </h1>

        <svg
          viewBox="0 0 400 40"
          className="mx-auto mt-3 w-[60%] text-accent"
          aria-hidden="true"
        >
          <path
            ref={pathRef}
            d="M10,20 C120,2 280,2 390,22"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div
          ref={stampRef}
          className="absolute -right-3 top-0 flex h-14 w-14 items-center justify-center border-2 border-accent bg-accent font-display text-lg text-paper sm:-right-4 sm:h-16 sm:w-16"
          style={{ opacity: 0 }}
        >
          AS
        </div>
      </div>

      <div className="hero-meta mt-8" style={{ opacity: 0 }}>
        <p className="eyebrow">UI / UX Engineer</p>
      </div>

      <div
        className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
        style={{ opacity: 0 }}
      >
        Scroll
      </div>
    </section>
  );
}

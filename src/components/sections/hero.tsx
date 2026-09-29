"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: "+=160%",
          scrub: reduceMotion ? true : 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(textRef.current, { fontSize: "150vw", ease: "power1.in" }, 0)
        .to(textRef.current, { opacity: 0, ease: "power1.in" }, 0.82)
        .to(".hero-copy", { opacity: 0, y: -16 }, 0);
    },
    { scope: stageRef }
  );

  return (
    <section
      ref={stageRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-paper"
    >
      <div className="hero-copy absolute left-1/2 top-[16%] -translate-x-1/2 text-center">
        <p className="eyebrow">Anuda Shamantha</p>
      </div>

      <h1
        ref={textRef}
        className="portal-word relative z-10 m-0 whitespace-nowrap text-center font-display"
        style={{ fontSize: "14vw" }}
      >
        ENTER
      </h1>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        Scroll
      </div>
    </section>
  );
}

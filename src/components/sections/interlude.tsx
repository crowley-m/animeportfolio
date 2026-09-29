"use client";

import { useEffect, useState } from "react";

const LINES = [
  "You've seen the entrance.",
  "Here's what's actually running underneath.",
  "Stats incoming.",
];

export function Interlude() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const line = LINES[lineIndex];
  const done = charIndex >= line.length;
  const isLast = lineIndex === LINES.length - 1;

  useEffect(() => {
    setCharIndex(0);
  }, [lineIndex]);

  useEffect(() => {
    if (charIndex >= line.length) return;
    const id = setTimeout(() => setCharIndex((c) => c + 1), 28);
    return () => clearTimeout(id);
  }, [charIndex, line]);

  function advance() {
    if (!done) {
      setCharIndex(line.length);
      return;
    }
    if (!isLast) {
      setLineIndex((i) => i + 1);
    }
  }

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-paper px-4">
      <div className="relative w-full max-w-2xl">
        <div className="absolute -top-3 left-6 border-2 border-ink bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-wide">
          System
        </div>

        <button
          type="button"
          onClick={advance}
          className="group flex w-full items-start gap-4 border-2 border-ink bg-paper p-6 pt-8 text-left sm:p-8 sm:pt-9"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink font-display text-sm sm:h-14 sm:w-14">
            AS
          </div>

          <div className="flex-1">
            <p
              className="font-body text-xl leading-snug sm:text-2xl"
              style={{ minHeight: 84 }}
            >
              {line.slice(0, charIndex)}
              <span className="text-accent animate-pulse">_</span>
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted opacity-0 transition-opacity group-hover:opacity-100">
              {done
                ? isLast
                  ? "Continue scrolling"
                  : "Click to continue ▶"
                : "Click to skip"}
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}

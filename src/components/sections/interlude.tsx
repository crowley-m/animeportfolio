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
    <section className="flex h-screen flex-col items-center justify-center bg-paper px-6">
      <button
        type="button"
        onClick={advance}
        className="group w-full max-w-xl border-2 border-ink bg-paper px-6 py-8 text-left"
      >
        <p className="eyebrow">System</p>
        <p className="mt-4 font-body text-2xl leading-snug text-ink" style={{ minHeight: 84 }}>
          {line.slice(0, charIndex)}
          <span className="text-accent animate-pulse">_</span>
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted opacity-0 transition-opacity group-hover:opacity-100">
          {done ? (isLast ? "Continue scrolling" : "Click to continue ▶") : "Click to skip"}
        </p>
      </button>
    </section>
  );
}

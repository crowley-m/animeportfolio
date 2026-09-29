"use client";

import { useEffect, useRef, useState } from "react";

export function StatBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-baseline justify-between font-mono text-xs uppercase tracking-wide">
        <span>{label}</span>
        <span className="text-muted">{filled ? value : 0}</span>
      </div>
      <div className="h-3 w-full border-2 border-ink bg-paper">
        <div
          className="h-full bg-ink transition-[width] duration-[1200ms] ease-out"
          style={{ width: filled ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

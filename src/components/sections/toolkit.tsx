import { Reveal } from "@/components/reveal";

const TOOLKIT = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Motion", items: ["GSAP", "Framer Motion"] },
  { group: "Backend & Data", items: ["Node.js", "FastAPI", "PostgreSQL", "Python"] },
  { group: "Infra & Tools", items: ["Docker", "Figma"] },
];

export function Toolkit() {
  return (
    <section id="toolkit" className="world-surface px-4 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-4">Equipped</p>
        </Reveal>
        <Reveal>
          <h2 className="mb-10 font-display text-[9vw] leading-[0.9] sm:text-5xl">
            Toolkit
          </h2>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {TOOLKIT.map((group, i) => (
            <Reveal
              key={group.group}
              delay={i * 90}
              className="border-2 border-ink bg-paper p-5"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-ink px-2.5 py-1 font-mono text-xs uppercase tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

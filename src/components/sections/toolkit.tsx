import { Reveal } from "@/components/reveal";
import { StatBar } from "@/components/stat-bar";

const STATS = [
  { label: "Full-Stack Development", value: 92 },
  { label: "Motion & Interaction", value: 78 },
  { label: "Systems & Infrastructure", value: 82 },
  { label: "Security Engineering", value: 70 },
];

const EQUIPPED = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Figma",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Python",
  "FastAPI",
];

export function Toolkit() {
  return (
    <section
      id="toolkit"
      className="world-surface px-6 py-24 sm:px-16"
    >
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-6">Status</p>
        </Reveal>
        <Reveal>
          <h2 className="mb-12 font-display text-[9vw] leading-[0.9] sm:text-5xl">
            Character Sheet
          </h2>
        </Reveal>

        <div className="mb-16 grid gap-5">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <StatBar label={stat.label} value={stat.value} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="eyebrow mb-4">Equipped</p>
        </Reveal>
        <div className="flex flex-wrap gap-2">
          {EQUIPPED.map((tool, i) => (
            <Reveal key={tool} delay={i * 30}>
              <span className="inline-block border-2 border-ink px-3 py-1.5 font-mono text-xs uppercase tracking-wide">
                {tool}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

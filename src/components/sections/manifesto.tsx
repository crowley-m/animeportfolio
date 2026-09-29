import { Reveal } from "@/components/reveal";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="world-surface flex min-h-screen items-center px-4 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-3 sm:grid-cols-6 sm:grid-rows-2">
        <Reveal className="border-2 border-ink bg-paper p-6 sm:col-span-4 sm:row-span-2 sm:p-10">
          <p className="eyebrow mb-6">Manifesto</p>
          <h2 className="font-display text-[10vw] leading-[0.9] sm:text-5xl">
            I studied how
            <br />
            systems break.
          </h2>
        </Reveal>

        <Reveal delay={120} className="border-2 border-ink bg-paper p-6 sm:col-span-2">
          <p className="font-mono text-xs uppercase tracking-wide text-muted mb-2">
            01
          </p>
          <p className="text-sm leading-relaxed text-ink/80">
            Four years freelance. Sole developer on every project — no
            handing pieces off.
          </p>
        </Reveal>

        <Reveal delay={220} className="border-2 border-ink bg-paper p-6 sm:col-span-2">
          <p className="font-mono text-xs uppercase tracking-wide text-muted mb-2">
            02
          </p>
          <p className="text-sm leading-relaxed text-ink/80">
            Research, design, build, ship, handover. This site is the
            newest one — and the brief was mine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

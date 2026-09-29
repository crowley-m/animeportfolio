import { Reveal } from "@/components/reveal";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="world-surface flex min-h-screen flex-col justify-center gap-8 px-6 py-24 sm:px-16"
    >
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-6">Manifesto</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-[11vw] leading-[0.9] sm:text-6xl">
            I studied how
            <br />
            systems break.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80">
            Then I started building the ones that don&apos;t. Four years
            freelance, sole developer on every project — research, design,
            build, ship, handover. This site is the newest one, and this time
            the brief was mine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

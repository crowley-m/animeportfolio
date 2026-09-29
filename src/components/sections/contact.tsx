"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";

const EMAIL = "anudashamantha@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the address is already shown as text
    }
  }

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center gap-8 bg-paper px-6 py-24 text-center"
    >
      <Reveal>
        <p className="eyebrow">Get in touch</p>
      </Reveal>
      <Reveal>
        <h2 className="font-display text-[12vw] leading-[0.9] sm:text-7xl">
          LET&apos;S
          <br />
          BUILD
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <button
          type="button"
          onClick={copyEmail}
          className="border-2 border-ink px-5 py-3 font-mono text-sm transition-colors hover:bg-ink hover:text-paper"
        >
          {copied ? "Copied" : EMAIL}
        </button>
      </Reveal>
      <Reveal delay={250}>
        <div className="flex gap-4 font-mono text-xs uppercase tracking-wide text-muted">
          <a
            href="https://github.com/crowley-m"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/anuda-shamantha-b89163275"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://anuda.world"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            anuda.world
          </a>
        </div>
      </Reveal>
    </section>
  );
}

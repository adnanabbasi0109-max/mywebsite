"use client";

import { siteData } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";

export default function Philosophy() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-hero-gradient-alt opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
            Philosophy
          </span>
          <h2 className="text-display-md font-semibold gradient-text mb-8">
            {siteData.philosophy.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-xl md:text-2xl text-off-white/50 leading-relaxed font-light">
            &ldquo;{siteData.philosophy.body}&rdquo;
          </p>
        </ScrollReveal>

        {/* Decorative line */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/15" aria-hidden="true" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" aria-hidden="true" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/15" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

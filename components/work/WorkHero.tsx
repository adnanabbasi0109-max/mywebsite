"use client";

import { siteData } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";
import FeaturedPanel from "./FeaturedPanel";

export default function WorkHero() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <ScrollReveal>
              <h1 className="text-display-lg font-semibold gradient-text mb-8">
                Work
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-lg text-off-white/60 leading-relaxed mb-6">
                A curated collection of projects spanning product design,
                full-stack development, and creative technology.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base text-off-white/40 leading-relaxed">
                Each project reflects a commitment to craft &mdash; from initial
                concept through to pixel-perfect execution. These are the
                products and platforms I&apos;ve brought to life.
              </p>
            </ScrollReveal>
          </div>

          {/* Right column - Featured Panel */}
          <ScrollReveal delay={0.2}>
            <FeaturedPanel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

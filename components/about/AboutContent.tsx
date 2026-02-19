"use client";

import { siteData } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutContent() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {siteData.about.paragraphs.map((paragraph, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <p
              className={`text-lg text-off-white/60 leading-relaxed mb-8 ${
                i === 0
                  ? "border-l-2 border-white/20 pl-6 text-off-white/70"
                  : ""
              }`}
            >
              {paragraph}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

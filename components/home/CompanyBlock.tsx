"use client";

import { siteData } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";

export default function CompanyBlock() {
  return (
    <section className="relative py-[120px] md:py-[120px] overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 bg-company-gradient"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 border-y border-white/[0.05]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
            Our Studio
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-display-md font-semibold gradient-text mb-6">
            {siteData.company.name}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg text-off-white/50 mb-10 leading-relaxed">
            {siteData.company.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href={siteData.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 rounded-full text-off-white text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30"
          >
            Visit {siteData.company.name}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

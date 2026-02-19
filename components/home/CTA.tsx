"use client";

import { siteData } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <h2 className="text-display-md md:text-display-lg font-semibold gradient-text mb-6">
            {siteData.cta.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg text-off-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            {siteData.cta.subtext}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href={`mailto:${siteData.cta.email}`}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white/[0.07] border border-white/[0.12] rounded-full text-off-white font-medium transition-all duration-300 hover:bg-white/[0.12] hover:border-white/[0.22] hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] group"
          >
            <svg
              className="w-5 h-5 text-off-white/50 group-hover:text-off-white/80 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            {siteData.cta.email}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

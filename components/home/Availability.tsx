"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Availability() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#111] border border-white/[0.08] rounded-2xl px-8 py-7 overflow-hidden">
            {/* Glow effect */}
            <div
              className="absolute -left-20 -top-20 w-60 h-60 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex items-center gap-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <div>
                <p className="text-off-white font-medium text-sm">
                  Available for new projects
                </p>
                <p className="text-off-white/40 text-xs mt-0.5">
                  Open to freelance &amp; collaboration
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 rounded-full text-off-white text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30 shrink-0"
            >
              Get in touch
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
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

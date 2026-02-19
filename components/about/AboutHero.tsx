"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Card 1 - Read about me */}
          <motion.div
            variants={fadeUp}
            className="group relative bg-[#111] border border-white/[0.08] rounded-2xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/[0.12] overflow-hidden"
          >
            {/* Gradient accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(100,180,200,0.04) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-6 block relative z-10">
              Read about me
            </span>
            <h1 className="text-display-lg font-semibold gradient-text mb-6 relative z-10">
              {siteData.profile.name}
            </h1>
            <p className="text-lg text-off-white/50 leading-relaxed relative z-10">
              {siteData.profile.tagline}
            </p>
          </motion.div>

          {/* Card 2 - About intro + highlights */}
          <motion.div
            variants={fadeUp}
            className="group relative bg-[#111] border border-white/[0.08] rounded-2xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/[0.12] overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(100,180,200,0.04) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-6 block relative z-10">
              About
            </span>
            <p className="text-base text-off-white/60 leading-relaxed mb-8 relative z-10">
              {siteData.about.intro}
            </p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {siteData.about.highlights.map((highlight, i) => (
                <ScrollReveal key={highlight} delay={0.1 * i}>
                  <span className="inline-block px-4 py-2 text-xs rounded-full bg-white/[0.06] text-off-white/60 border border-white/[0.08] transition-colors duration-200 hover:bg-white/[0.1] hover:text-off-white/80">
                    {highlight}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

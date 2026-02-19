"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Approach() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 bg-hero-gradient opacity-50"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
            Process
          </span>
          <h2 className="text-display-md font-semibold gradient-text mb-4">
            {siteData.approach.title}
          </h2>
          <p className="text-lg text-off-white/50 max-w-2xl mb-16 leading-relaxed">
            {siteData.approach.description}
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {siteData.approach.principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              variants={fadeUp}
              className="relative"
            >
              {/* Step number */}
              <span className="block text-5xl font-bold text-white/[0.04] mb-4">
                0{i + 1}
              </span>

              {/* Connector line on desktop */}
              {i < siteData.approach.principles.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-x-4"
                  aria-hidden="true"
                />
              )}

              <h3 className="text-base font-semibold text-off-white mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-off-white/40 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Timeline() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
            Journey
          </span>
          <h2 className="text-display-md font-semibold gradient-text mb-16">
            My Path So Far
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Vertical line */}
          <div
            className="absolute left-[23px] md:left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-white/15 via-white/[0.06] to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {siteData.timeline.map((entry, i) => (
              <motion.div
                key={entry.year}
                variants={fadeUp}
                className="relative pl-16 md:pl-20 group"
              >
                {/* Dot */}
                <div
                  className="absolute left-[18px] md:left-[22px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-white/20 bg-bg group-hover:border-white/40 transition-colors duration-300"
                  aria-hidden="true"
                />

                <span className="block text-xs text-off-white/30 uppercase tracking-wider mb-2">
                  {entry.year}
                </span>
                <h3 className="text-lg font-semibold text-off-white mb-2">
                  {entry.title}
                </h3>
                <p className="text-sm text-off-white/45 leading-relaxed">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

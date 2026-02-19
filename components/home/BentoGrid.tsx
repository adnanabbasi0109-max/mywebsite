"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function BentoGrid() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="text-display-md font-semibold gradient-text mb-14">
            At a Glance
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl"
        >
          {/* Quote card */}
          <motion.div
            variants={fadeUp}
            className="relative bg-[#111] border border-white/[0.08] rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden group hover:border-white/[0.15] transition-colors duration-300"
          >
            <div className="absolute top-6 left-8 text-[120px] leading-none text-white/[0.04] font-serif pointer-events-none select-none">
              &ldquo;
            </div>
            <p className="relative z-10 text-lg md:text-xl text-off-white/70 leading-relaxed font-light italic">
              I believe great software should feel obvious the moment you touch it.
            </p>
            <span className="mt-6 text-xs uppercase tracking-[0.2em] text-off-white/30">
              Personal philosophy
            </span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {siteData.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="relative text-center py-10 px-4 rounded-2xl bg-[#111] border border-white/[0.06] group hover:border-white/[0.12] transition-colors duration-300"
            >
              {/* Top highlight line */}
              <div
                className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />
              <span className="block text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-off-white/40 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

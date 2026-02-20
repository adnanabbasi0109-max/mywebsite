"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

const stack = [
  {
    label: "Design",
    tools: ["Figma"],
    color: "rgba(200,140,255,0.08)",
    border: "rgba(200,140,255,0.15)",
  },
  {
    label: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    color: "rgba(100,180,255,0.08)",
    border: "rgba(100,180,255,0.15)",
  },
  {
    label: "Backend",
    tools: ["Node.js", "PostgreSQL", "MongoDB"],
    color: "rgba(100,220,180,0.08)",
    border: "rgba(100,220,180,0.15)",
  },
  {
    label: "Ship",
    tools: ["Vercel", "Docker", "GitHub"],
    color: "rgba(255,180,100,0.08)",
    border: "rgba(255,180,100,0.15)",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
            How we build
          </span>
          <h2 className="text-display-md font-semibold gradient-text mb-16">
            Design &rarr; Code &rarr; Ship
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
        >
          {stack.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <TiltCard
                className="relative bg-[#111] border border-white/[0.08] rounded-2xl p-6 md:p-8 h-full overflow-hidden transition-all duration-300 hover:border-white/[0.14]"
              >
                {/* Colored top accent on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.border}, transparent)` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.color}, transparent 70%)` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Step number */}
                  <span className="text-[10px] uppercase tracking-[0.25em] text-off-white/25 mb-6 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-semibold text-off-white mb-5">
                    {item.label}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-off-white/40 border border-white/[0.06] transition-colors duration-200 hover:text-off-white/60 hover:bg-white/[0.07]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Connecting line */}
        <div className="hidden md:flex items-center justify-center mt-10 gap-3">
          {stack.map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: activeIndex === i ? item.border : "rgba(255,255,255,0.1)",
                }}
                animate={{
                  scale: activeIndex === i ? 1.4 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              {i < stack.length - 1 && (
                <div className="w-16 h-px bg-gradient-to-r from-white/10 to-white/[0.04]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    number: "01",
    title: "Design & Code, One Team",
    description:
      "No handoff friction. We design in the morning and ship in the afternoon. Every pixel is intentional, every line of code is clean.",
  },
  {
    number: "02",
    title: "Obsessively Detail-Oriented",
    description:
      "The difference between good and great lives in the details — spacing, timing, transitions. We sweat the small stuff so your users don't have to think.",
  },
  {
    number: "03",
    title: "Built to Perform",
    description:
      "Fast load times, accessible markup, SEO-ready from day one. We build products that look beautiful and score 90+ on every Lighthouse metric.",
  },
];

export default function Founder() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
            Why Yacum
          </span>
          <h2 className="text-display-md font-semibold gradient-text mb-16">
            What sets us apart
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((v) => (
            <motion.div key={v.number} variants={fadeUp}>
              <span className="block text-4xl font-bold text-white/[0.04] mb-4">
                {v.number}
              </span>
              <h3 className="text-base font-semibold text-off-white mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-off-white/45 leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

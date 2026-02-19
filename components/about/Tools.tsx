"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Tools() {
  const categories = Array.from(
    new Set(siteData.tools.map((t) => t.category))
  );

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
            Toolkit
          </span>
          <h2 className="text-display-md font-semibold gradient-text mb-16">
            Tools &amp; Technologies
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category, catIdx) => (
            <ScrollReveal key={category} delay={catIdx * 0.1}>
              <h3 className="text-xs uppercase tracking-[0.15em] text-off-white/30 mb-5 pb-3 border-b border-white/[0.06]">
                {category}
              </h3>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {siteData.tools
                  .filter((t) => t.category === category)
                  .map((tool) => (
                    <motion.li
                      key={tool.name}
                      variants={fadeUp}
                      className="text-sm text-off-white/50 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" aria-hidden="true" />
                      <span className="group-hover:text-off-white/70 transition-colors">
                        {tool.name}
                      </span>
                    </motion.li>
                  ))}
              </motion.ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutWorkTeaser() {
  const teaserProjects = siteData.projects.slice(0, 2);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="text-display-md font-semibold gradient-text mb-12">
            Recent Work
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {teaserProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="group bg-[#111] border border-white/[0.08] rounded-2xl p-7 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-off-white/40 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-xs text-off-white/30">
                  {project.year}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-off-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-off-white/50 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-off-white/50 hover:text-off-white transition-colors text-sm"
          >
            See all work
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
        </ScrollReveal>
      </div>
    </section>
  );
}

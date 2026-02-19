"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function WorkTeaser() {
  const teaserProjects = siteData.projects.slice(0, 2);

  return (
    <section className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="text-display-md font-semibold gradient-text mb-16">
            Selected Work
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className={`grid gap-6 ${teaserProjects.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-2xl"}`}
        >
          {teaserProjects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <TiltCard className="bg-[#111] border border-white/[0.08] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <Link
                  href={`/work/${project.id}`}
                  className="group block p-8 h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-off-white/40 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-off-white/30">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-off-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-off-white/50 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm text-off-white/40 group-hover:text-off-white/70 transition-colors">
                    <span>View details</span>
                    <svg
                      className="w-4 h-4 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="mt-12 text-center">
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

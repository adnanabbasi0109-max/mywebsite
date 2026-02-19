"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

function TeaserCard({
  title,
  category,
  description,
  year,
}: {
  title: string;
  category: string;
  description: string;
  year: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-[#111] border border-white/[0.08] rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,0,0,0.8)] hover:border-white/[0.15]"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-off-white/40 uppercase tracking-wider">
          {category}
        </span>
        <span className="text-xs text-off-white/30">{year}</span>
      </div>
      <h3 className="text-xl font-semibold text-off-white mb-3">{title}</h3>
      <p className="text-sm text-off-white/50 leading-relaxed">
        {description}
      </p>
      <div className="mt-6 flex items-center text-sm text-off-white/40 group-hover:text-off-white/70 transition-colors">
        <span>View project</span>
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
    </motion.div>
  );
}

export default function WorkTeaser() {
  const featured = siteData.projects.filter((p) => p.featured);
  const extra = siteData.projects.find((p) => !p.featured);
  const displayProjects = extra ? [...featured, extra] : featured;
  const teaserProjects = displayProjects.slice(0, 2);

  return (
    <section className="py-[120px] md:py-[120px] py-[80px]">
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
          className="grid md:grid-cols-2 gap-6"
        >
          {teaserProjects.map((project) => (
            <TeaserCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              year={project.year}
            />
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

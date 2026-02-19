"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import {
  pageTransition,
  staggerContainer,
  fadeUp,
} from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = siteData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <motion.div {...pageTransition} className="pt-40 pb-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="text-display-md font-semibold gradient-text mb-4">
            Project not found
          </h1>
          <p className="text-off-white/50 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-off-white/60 hover:text-off-white transition-colors text-sm"
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to all work
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-hero-gradient opacity-50"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          {/* Back link */}
          <ScrollReveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-off-white/40 hover:text-off-white/70 transition-colors text-sm mb-10 group"
            >
              <svg
                className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              All work
            </Link>
          </ScrollReveal>

          {/* Meta */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-off-white/40">
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
              <span className="text-xs text-off-white/30">{project.year}</span>
            </div>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal>
            <h1 className="text-display-lg font-semibold gradient-text mb-6">
              {project.title}
            </h1>
          </ScrollReveal>

          {/* Short description */}
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-off-white/55 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Info bar */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-6 py-8 border-y border-white/[0.06]">
              <div>
                <span className="block text-xs uppercase tracking-wider text-off-white/30 mb-1">
                  Role
                </span>
                <span className="text-sm text-off-white/70">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-off-white/30 mb-1">
                  Year
                </span>
                <span className="text-sm text-off-white/70">
                  {project.year}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Long description */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {project.longDescription.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`text-lg text-off-white/55 leading-relaxed mb-7 ${
                  i === 0
                    ? "border-l-2 border-white/20 pl-6 text-off-white/65"
                    : ""
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {project.link && (
            <ScrollReveal>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-8 py-3.5 border border-white/20 rounded-full text-off-white text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Visit project
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
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Other projects */}
      {siteData.projects.filter((p) => p.id !== project.id).length > 0 && (
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <h2 className="text-display-md font-semibold gradient-text mb-10">
              Other Projects
            </h2>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {siteData.projects
              .filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((p) => (
                <motion.div key={p.id} variants={fadeUp}>
                  <Link
                    href={`/work/${p.id}`}
                    className="group block bg-[#111] border border-white/[0.08] rounded-2xl p-7 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-off-white/40 uppercase tracking-wider">
                        {p.category}
                      </span>
                      <span className="text-xs text-off-white/30">
                        {p.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-off-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-off-white/45 leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-5 flex items-center text-sm text-off-white/40 group-hover:text-off-white/70 transition-colors">
                      <span>View details</span>
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
      )}
    </motion.div>
  );
}

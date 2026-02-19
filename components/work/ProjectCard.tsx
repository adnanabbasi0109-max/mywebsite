"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/site";
import TiltCard from "@/components/TiltCard";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="bg-[#111] border border-white/[0.08] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <Link
          href={`/work/${project.id}`}
          className="group block p-7 flex flex-col h-full"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-off-white/40 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-off-white/30">{project.year}</span>
          </div>

          <h3 className="text-lg font-semibold text-off-white mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-off-white/50 leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] text-off-white/40 border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-off-white/40 group-hover:text-off-white/70 transition-colors">
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
    </motion.article>
  );
}

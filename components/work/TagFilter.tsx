"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";

interface TagFilterProps {
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TagFilter({ activeTag, onTagChange }: TagFilterProps) {
  const allTags = Array.from(
    new Set(siteData.projects.flatMap((p) => p.tags))
  ).sort();

  return (
    <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filter projects by tag">
      <button
        onClick={() => onTagChange(null)}
        className={`relative px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
          activeTag === null
            ? "text-off-white"
            : "text-off-white/40 hover:text-off-white/70"
        }`}
      >
        {activeTag === null && (
          <motion.span
            layoutId="active-tag"
            className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">All</span>
      </button>

      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(activeTag === tag ? null : tag)}
          className={`relative px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
            activeTag === tag
              ? "text-off-white"
              : "text-off-white/40 hover:text-off-white/70"
          }`}
        >
          {activeTag === tag && (
            <motion.span
              layoutId="active-tag"
              className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tag}</span>
        </button>
      ))}
    </div>
  );
}

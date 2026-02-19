"use client";

import { motion } from "framer-motion";

const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Figma",
  "UI/UX",
  "Full-Stack",
  "Product Design",
  "React Native",
  "MongoDB",
  "PostgreSQL",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="flex overflow-hidden py-3">
      <motion.div
        className="flex shrink-0 gap-4"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-off-white/50 hover:text-off-white/80 hover:border-white/20 transition-all duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="py-12 md:py-16 overflow-hidden border-y border-white/[0.04]">
      <MarqueeRow />
      <MarqueeRow reverse />
    </section>
  );
}

"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, reducedMotionFadeUp } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  variants,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const activeVariants = prefersReduced
    ? reducedMotionFadeUp
    : variants || fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={activeVariants}
      transition={delay > 0 ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

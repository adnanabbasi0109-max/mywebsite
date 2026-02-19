"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FeaturedPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_40px_rgba(0,0,0,0.6)]"
      aria-hidden="true"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-hue-slow bg-card-gradient" />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 grid-texture" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Inner glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(100,180,200,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[10px] text-white/20 uppercase tracking-wider">
            Featured
          </span>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { siteData } from "@/data/site";
import { staggerContainer, fadeUp, reducedMotionFadeUp } from "@/lib/motion";

function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <motion.h1
      className="text-display-lg font-semibold tracking-tight gradient-text"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={fadeUp}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.12);
    y.set((e.clientY - centerY) * 0.12);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block">
      <Link
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 rounded-full text-off-white text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30"
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
  }, []);

  const activeVariants = prefersReduced ? reducedMotionFadeUp : fadeUp;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Breathing background gradient */}
      <div
        className="absolute inset-0 bg-hero-gradient animate-breathe"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-hero-gradient-alt animate-breathe"
        style={{ animationDelay: "-4s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center py-32">
        <AnimatedHeadline text={siteData.profile.tagline} />

        <motion.p
          variants={activeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-off-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          {siteData.profile.shortBio}
        </motion.p>

        <motion.div
          variants={activeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="mt-12"
        >
          <MagneticButton href="/work">
            View My Work
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
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating abstract card */}
      <motion.div
        className="hidden lg:block absolute bottom-24 right-12 xl:right-24 w-64 h-80 rounded-2xl overflow-hidden"
        animate={
          prefersReduced
            ? {}
            : {
                y: [0, -12, 0],
                rotate: [2, -1, 2],
              }
        }
        transition={
          prefersReduced
            ? undefined
            : {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-card-gradient rounded-2xl border border-white/[0.08]" />
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute inset-0 noise-overlay rounded-2xl" />
      </motion.div>
    </section>
  );
}

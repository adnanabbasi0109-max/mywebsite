"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import BentoGrid from "@/components/home/BentoGrid";
import WorkTeaser from "@/components/home/WorkTeaser";
import Approach from "@/components/home/Approach";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <Marquee />
      <Services />
      <BentoGrid />
      <WorkTeaser />
      <Approach />
      <CTA />
    </motion.div>
  );
}

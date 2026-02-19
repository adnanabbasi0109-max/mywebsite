"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WorkTeaser from "@/components/home/WorkTeaser";
import Approach from "@/components/home/Approach";
import CompanyBlock from "@/components/home/CompanyBlock";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <Stats />
      <Services />
      <WorkTeaser />
      <Approach />
      <CompanyBlock />
      <CTA />
    </motion.div>
  );
}

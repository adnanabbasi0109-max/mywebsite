"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import Philosophy from "@/components/about/Philosophy";
import Timeline from "@/components/about/Timeline";
import Tools from "@/components/about/Tools";
import AboutWorkTeaser from "@/components/about/WorkTeaser";
import AboutCompanyBlock from "@/components/about/CompanyBlock";

export default function AboutPage() {
  return (
    <motion.div {...pageTransition}>
      <AboutHero />
      <AboutContent />
      <Philosophy />
      <Timeline />
      <Tools />
      <AboutWorkTeaser />
      <AboutCompanyBlock />
    </motion.div>
  );
}

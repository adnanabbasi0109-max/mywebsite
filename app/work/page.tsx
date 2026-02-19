"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";
import { siteData } from "@/data/site";
import WorkHero from "@/components/work/WorkHero";
import ProjectGrid from "@/components/work/ProjectGrid";

export default function WorkPage() {
  return (
    <motion.div {...pageTransition}>
      <WorkHero />

      <section className="pb-[120px] md:pb-[120px]">
        <div className="mx-auto max-w-6xl px-6">
          <ProjectGrid projects={siteData.projects} />
        </div>
      </section>
    </motion.div>
  );
}

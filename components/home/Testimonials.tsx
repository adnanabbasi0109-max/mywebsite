"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Yacum delivered a website that felt exactly right — sharp, professional, and true to what we stand for.",
    author: "Client Name",
    role: "Founder, Company Name",
  },
  {
    quote:
      "Working with Yacum was seamless. They understood our brief immediately and executed it with precision.",
    author: "Client Name",
    role: "Director, Company Name",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-display-md font-semibold gradient-text mb-16">
            What Clients Say
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={fadeUp}
              className="border-l-2 border-off-white/20 pl-6 py-2"
            >
              <p className="text-lg italic text-off-white/60 leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <span className="block text-sm font-semibold text-off-white">
                  {t.author}
                </span>
                <span className="block text-xs text-off-white/40">
                  {t.role}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

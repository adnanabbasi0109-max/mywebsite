"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { siteData } from "@/data/site";
import { pageTransition, staggerContainer, fadeUp } from "@/lib/motion";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

const projectTypes = [
  "a website",
  "a web app",
  "a mobile app",
  "a landing page",
  "a redesign",
  "something cool",
];

function InteractiveCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 30,
  });
  const glowX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), {
    stiffness: 200,
    damping: 30,
  });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), {
    stiffness: 200,
    damping: 30,
  });

  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [clock, setClock] = useState("");

  // Typing effect
  useEffect(() => {
    const word = projectTypes[currentWord];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, displayText.length + 1));
        if (displayText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(word.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % projectTypes.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord]);

  // Live clock (IST)
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ist = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(now);
      setClock(ist);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative bg-[#0e0e0e] border border-white/[0.08] rounded-2xl p-10 md:p-14 overflow-hidden cursor-default"
      >
        {/* Mouse-following glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full pointer-events-none"
          style={{
            left: glowX,
            top: glowY,
            x: "-50%",
            y: "-50%",
            background:
              "radial-gradient(circle, rgba(100,200,180,0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10">
          <p className="text-2xl md:text-3xl text-off-white/80 font-light leading-relaxed mb-2">
            I&apos;d love to help you build
          </p>
          <p className="text-2xl md:text-3xl font-semibold gradient-text mb-10 min-h-[2.5rem]">
            {displayText}
            <span className="animate-pulse text-off-white/40">|</span>
          </p>

          <div className="flex items-center gap-6 pt-6 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-off-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <span className="text-xs text-off-white/30 block">
                  Local time (IST)
                </span>
                <span className="text-sm text-off-white/60 font-mono tabular-nums">
                  {clock}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-off-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div>
                <span className="text-xs text-off-white/30 block">Based in</span>
                <span className="text-sm text-off-white/60">India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-off-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <div>
                <span className="text-xs text-off-white/30 block">Working</span>
                <span className="text-sm text-off-white/60">Globally</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-hero-gradient opacity-60"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
              Contact
            </span>
            <h1 className="text-display-lg font-semibold gradient-text mb-6">
              {siteData.contact.heading}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-off-white/50 max-w-2xl mx-auto leading-relaxed">
              {siteData.contact.subtext}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Email card */}
            <motion.div variants={fadeUp}>
              <TiltCard className="bg-[#111] border border-white/[0.06] rounded-2xl p-10">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-off-white/50 mb-6 hover:text-off-white/80 hover:border-white/[0.15] transition-all duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-off-white mb-2">
                  Email Me
                </h2>
                <p className="text-sm text-off-white/40 mb-6 leading-relaxed">
                  Best for project inquiries, collaborations, and detailed
                  conversations.
                </p>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="inline-flex items-center gap-2 text-off-white/70 hover:text-off-white transition-colors group/link"
                >
                  {siteData.contact.email}
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform"
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
                </a>
              </TiltCard>
            </motion.div>

            {/* Socials card */}
            <motion.div variants={fadeUp}>
              <TiltCard className="bg-[#111] border border-white/[0.06] rounded-2xl p-10">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-off-white/50 mb-6 hover:text-off-white/80 hover:border-white/[0.15] transition-all duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-off-white mb-2">
                  Find Me Online
                </h2>
                <p className="text-sm text-off-white/40 mb-6 leading-relaxed">
                  Follow my work, connect, or just see what I&apos;m up to.
                </p>
                {siteData.contact.socials.length > 0 ? (
                  <ul className="space-y-3">
                    {siteData.contact.socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-off-white/50 hover:text-off-white transition-colors group/link text-sm"
                        >
                          {social.label}
                          <svg
                            className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 17L17 7M17 7H7M17 7v10"
                            />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-sm text-off-white/40">
                    Coming soon
                  </span>
                )}
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive card */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <InteractiveCard />
          </ScrollReveal>
        </div>
      </section>

      {/* Company block */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-company-gradient"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 border-y border-white/[0.05]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-off-white/40 mb-4 block">
              Or reach out through
            </span>
            <h2 className="text-display-md font-semibold gradient-text mb-6">
              {siteData.company.name}
            </h2>
          </ScrollReveal>
          {siteData.company.description && (
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-off-white/50 mb-10 leading-relaxed">
                {siteData.company.description}
              </p>
            </ScrollReveal>
          )}
          <ScrollReveal delay={0.2}>
            <a
              href={siteData.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 rounded-full text-off-white text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Visit {siteData.company.name}
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
            </a>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}

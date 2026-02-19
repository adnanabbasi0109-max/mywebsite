"use client";

import Link from "next/link";
import { siteData } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] mt-auto overflow-hidden">
      {/* Subtle gradient glow */}
      <div
        className="absolute inset-0 bg-company-gradient opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Top section */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <Link
                href="/"
                className="text-2xl font-semibold text-off-white tracking-tight"
              >
                {siteData.profile.name}
              </Link>
              <p className="mt-4 text-sm text-off-white/40 leading-relaxed max-w-sm">
                {siteData.profile.tagline}
              </p>
            </ScrollReveal>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3">
            <ScrollReveal delay={0.1}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-off-white/30 mb-5">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-off-white/50 hover:text-off-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-off-white/30">
            &copy; {new Date().getFullYear()} {siteData.profile.name}. All
            rights reserved.
          </p>
          <p className="text-xs text-off-white/20">
            Designed &amp; built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

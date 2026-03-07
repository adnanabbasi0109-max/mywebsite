"use client";

import Link from "next/link";
import Image from "next/image";
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
              <Link href="/" className="block">
                <Image
                  src="/logo.png"
                  alt="Yacum"
                  width={640}
                  height={256}
                  className="h-44 w-auto"
                />
              </Link>
              <p className="mt-1 text-sm text-off-white/40 leading-relaxed max-w-sm">
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

          {/* Social column */}
          <div className="md:col-span-4">
            <ScrollReveal delay={0.2}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-off-white/30 mb-5">
                Connect
              </h3>
              <div className="flex items-center gap-4">
                {/* X / Twitter */}
                <a
                  href="#"
                  aria-label="X"
                  className="text-off-white/40 hover:text-off-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-off-white/40 hover:text-off-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
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
            Based in India. Working globally.
          </p>
        </div>
      </div>
    </footer>
  );
}

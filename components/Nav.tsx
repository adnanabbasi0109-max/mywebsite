"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

function MagneticLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative px-3 py-2 text-sm transition-colors duration-200 ${
          isActive
            ? "text-off-white"
            : "text-off-white/50 hover:text-off-white/80"
        }`}
      >
        {label}
        {isActive && (
          <motion.span
            layoutId="nav-indicator"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-off-white"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/[0.04] border-b border-white/[0.07]"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-off-white font-medium text-lg tracking-tight"
        >
          Adnan
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <MagneticLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
            />
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-off-white"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-off-white"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-5 h-[1.5px] bg-off-white"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden backdrop-blur-md bg-white/[0.04] border-b border-white/[0.07]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base py-2 transition-colors ${
                    pathname === link.href
                      ? "text-off-white"
                      : "text-off-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

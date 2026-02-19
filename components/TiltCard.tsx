"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // 3D tilt
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 250,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), {
    stiffness: 250,
    damping: 30,
  });

  // Cursor glow position (percentage-based)
  const glowX = useTransform(mouseX, [0, 1], [0, 100]);
  const glowY = useTransform(mouseY, [0, 1], [0, 100]);
  const springGlowX = useSpring(glowX, { stiffness: 200, damping: 30 });
  const springGlowY = useSpring(glowY, { stiffness: 200, damping: 30 });

  // Border glow position
  const borderGlowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const borderGlowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <div style={{ perspective: "800px" }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
        transition={{ scale: { duration: 0.3, ease: "easeOut" } }}
        className={`relative overflow-hidden h-full ${className}`}
      >
        {/* Animated border glow that follows cursor */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-0"
          style={{
            background: useTransform(
              [borderGlowX, borderGlowY],
              ([x, y]) =>
                `radial-gradient(300px circle at ${x} ${y}, rgba(120,200,180,0.15) 0%, transparent 70%)`
            ),
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          aria-hidden="true"
        />

        {/* Inner cursor glow */}
        <motion.div
          className="absolute w-72 h-72 rounded-full pointer-events-none z-0"
          style={{
            left: springGlowX,
            top: springGlowY,
            x: "-50%",
            y: "-50%",
            background:
              "radial-gradient(circle, rgba(100,200,180,0.06) 0%, transparent 70%)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          aria-hidden="true"
        />

        {/* Shimmer sweep on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none z-0"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
                width: "50%",
              }}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </div>
  );
}

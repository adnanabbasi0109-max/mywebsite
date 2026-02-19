"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  const springX = useSpring(cursorX, { stiffness: 80, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 80, damping: 30 });

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  // Don't render on server
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden="true"
      style={{
        background: "transparent",
      }}
    >
      <motion.div
        className="pointer-events-none"
        style={{
          position: "fixed",
          left: springX,
          top: springY,
          width: 300,
          height: 300,
          marginLeft: -150,
          marginTop: -150,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

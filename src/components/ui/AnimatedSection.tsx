"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "scale" | "none";

const variantsMap: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

// Fail-safe: if the IntersectionObserver never fires (common on mobile due to
// dynamic viewport height / layout shift during load), force the content
// visible after a short delay so it never stays permanently hidden.
function useRevealControls(ref: React.RefObject<Element>, once: boolean, amount: number) {
  const isInView = useInView(ref, { once, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
    }, 1000);
    return () => clearTimeout(timer);
  }, [controls]);

  return controls;
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const controls = useRevealControls(ref, once, 0.2);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variantsMap[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const controls = useRevealControls(ref, true, 0.2);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  return (
    <motion.div variants={variantsMap[direction]} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

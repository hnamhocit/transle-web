import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

type InViewMotionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  once?: boolean;
}>;

export default function InViewMotion({
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.2,
  once = true,
}: InViewMotionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 0.45,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      style={prefersReducedMotion ? undefined : { willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

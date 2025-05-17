"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BaseCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function BaseCard({ children, className, ...props }: BaseCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-card border border-border rounded-xl p-5 sm:p-6 shadow-lg transition-all duration-300 ease-out",
        className
      )}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 10px 20px -5px hsl(var(--primary)/0.3)",
      }}
      {...props} // Spread any other motion props
    >
      {children}
    </motion.div>
  );
} 
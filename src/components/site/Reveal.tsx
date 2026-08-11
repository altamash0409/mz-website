import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-md border border-[#D9E2EA] bg-[#FFFFFF] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0B1F4B] uppercase shadow-2xs">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold text-[#0B1F4B] sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-[#667085]">{subtitle}</p> : null}
    </Reveal>
  );
}
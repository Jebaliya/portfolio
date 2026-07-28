import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="mb-12 md:mb-16"
      >
        <span className="font-mono-tag mb-3 block text-xs text-accent">
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl font-semibold tracking-tighter text-white md:text-4xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

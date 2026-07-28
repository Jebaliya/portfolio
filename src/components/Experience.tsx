import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Check } from "lucide-react";
import Section from "./Section";
import type { ExperienceItem } from "../types";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <Section id="experience" eyebrow="01 / Timeline" title="Internship & Education">
      <ol className="relative border-l border-line pl-8">
        {experience.map((entry, index) => (
          <motion.li
            key={`${entry.company}-${entry.position}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute top-1 -left-[calc(2rem+5px)] flex h-[9px] w-[9px] items-center justify-center rounded-full bg-accent ring-4 ring-bg" />

            <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="flex items-center gap-1.5 font-mono-tag text-[11px] text-accent">
                {entry.kind === "work" ? (
                  <Briefcase size={12} />
                ) : (
                  <GraduationCap size={12} />
                )}
                {entry.kind === "work" ? "Work" : "Education"}
              </span>
              <span className="font-mono-tag text-[11px] text-neutral-dim">
                {entry.startDate} — {entry.endDate}
              </span>
            </div>

            <h3 className="mb-0.5 font-display text-xl font-semibold text-white">
              {entry.position}
            </h3>
            <p className="mb-4 text-sm font-medium text-primary">
              {entry.company}
            </p>

            {Array.isArray(entry.summary) ? (
              <ul className="space-y-2.5">
                {entry.summary.map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-neutral">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="max-w-xl text-sm leading-relaxed text-neutral">
                {entry.summary}
              </p>
            )}
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

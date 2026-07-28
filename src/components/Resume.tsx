import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Section from "./Section";

interface ResumeProps {
  resumeHref: string;
}

export default function Resume({ resumeHref }: ResumeProps) {
  return (
    <Section id="resume" eyebrow="03 / CV" title="Resume">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
        className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bg text-primary">
            <FileText size={20} />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-white">
              Full resume, one PDF
            </p>
            <p className="text-sm text-neutral">
              Experience, education, and project details in one place.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap gap-3 sm:w-auto">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            <FileText size={15} /> View resume
          </a>
          <a
            href={resumeHref}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-white hover:border-primary hover:text-primary"
          >
            <Download size={15} /> Download
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

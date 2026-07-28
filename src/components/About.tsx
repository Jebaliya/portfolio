import { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import Section from "./Section";
import type { AboutContent } from "../types";

interface AboutProps extends AboutContent {
  name: string;
}

export default function About({ description, image, name, focusAreas }: AboutProps) {
  const [errored, setErrored] = useState(false);

  return (
    <Section id="about" eyebrow="04 / About" title="About Me">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex-1"
        >
          <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="font-mono-tag rounded-full border border-line px-3 py-1.5 text-xs text-primary"
              >
                {area}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 0, y: 20 }}
          whileInView={{ opacity: 1, rotate: 5, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="h-72 w-60 shrink-0 rounded-xl border border-line bg-surface p-3 md:h-80 md:w-64"
        >
          {errored ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-bg text-neutral-dim">
              <User size={32} strokeWidth={1.5} />
              <span className="font-mono-tag text-[10px]">{image}</span>
            </div>
          ) : (
            <img
              src={image}
              alt={name}
              onError={() => setErrored(true)}
              className="h-full w-full rounded-lg object-cover"
            />
          )}
        </motion.div>
      </div>
    </Section>
  );
}

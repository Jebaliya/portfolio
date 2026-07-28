import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, ImageOff } from "lucide-react";
import Section from "./Section";
import type { ProjectItem } from "../types";

interface ProjectsProps {
  projects: ProjectItem[];
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-surface text-neutral-dim">
        <ImageOff size={28} strokeWidth={1.5} />
        <span className="font-mono-tag text-[10px]">{src}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
    />
  );
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" eyebrow="02 / Project" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-primary/50"
          >
            <div className="aspect-video w-full overflow-hidden border-b border-line">
              <ProjectImage src={project.image} alt={project.name} />
            </div>

            <div className="p-6">
              <h3 className="mb-2 font-display text-xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral">
                {project.summary}
              </p>

              <ul className="mb-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono-tag rounded-full bg-bg px-2.5 py-1 text-[10px] text-neutral"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-5 text-sm">
                {project.linkSource && (
                  <a
                    href={project.linkSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white hover:text-primary"
                  >
                    <Code2 size={15} /> Source
                  </a>
                )}
                {project.linkPreview && (
                  <a
                    href={project.linkPreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white hover:text-primary"
                  >
                    <ExternalLink size={15} /> Preview
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

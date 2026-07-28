import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import type { HeroContent } from "../types";
import NeuralBackground from "./NeuralBackground";

type HeroProps = HeroContent;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero({
  name,
  specialty,
  summary,
  email,
  location,
  tags,
}: HeroProps) {
  const mailtoHref = `mailto:${email}?subject=Hello%20${encodeURIComponent(name.split(" ")[0])}`;

  return (
    <section
      id="hero"
      className="bg-grid relative overflow-hidden py-28 md:py-36"
    >
      <div className="absolute inset-0 -z-0 opacity-60">
        <NeuralBackground />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg) 15%, transparent 100%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        <motion.div
          variants={item}
          className="font-mono-tag mb-6 flex items-center gap-2 text-xs text-neutral"
        >
          <span className="flex h-2 w-2 items-center justify-center rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
          Available for opportunities
          <span className="mx-1 text-neutral-dim">·</span>
          <MapPin size={12} strokeWidth={2} />
          {location}
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-2 font-display text-6xl font-semibold tracking-tightest text-white sm:text-7xl md:text-8xl"
        >
          {name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 font-display text-3xl font-semibold tracking-tighter text-primary sm:text-4xl md:text-5xl"
        >
          {specialty}
        </motion.p>

        <motion.p
          variants={item}
          className="text-balance mb-8 max-w-2xl text-base leading-relaxed text-neutral md:text-lg"
        >
          {summary}
        </motion.p>

        <motion.ul variants={item} className="mb-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="font-mono-tag rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-neutral"
            >
              {tag}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={item}>
          <a
            href={mailtoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(91,140,255,0.5)]"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

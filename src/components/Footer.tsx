import { ExternalLink } from "lucide-react";
import type { SocialLink } from "../types";

interface FooterProps {
  author: string;
  socialLinks: SocialLink[];
}

const UNWANTED_LABELS = ["menu", "inspect", "audit", "setting"];

export default function Footer({ author, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const filteredLinks = socialLinks.filter(
    (s) => !UNWANTED_LABELS.includes(s.text.toLowerCase()),
  );

  return (
    <footer className="border-t border-line/60 px-5 py-10 text-center">
      <ul className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono-tag text-xs">
        {filteredLinks.map(({ text, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-2 text-neutral hover:text-primary"
            >
              {text}
              <ExternalLink size={11} />
            </a>
          </li>
        ))}
      </ul>

      <p className="text-xs text-neutral-dim">
        Designed &amp; developed by {author} © {currentYear}.
      </p>
    </footer>
  );
}

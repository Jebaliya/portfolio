import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { NavLink } from "../types";
import { useActiveSection } from "../hooks/useActiveSection";

interface HeaderProps {
  siteLogo: string;
  logoAlt: string;
  navLinks: NavLink[];
}

export default function Header({ siteLogo, logoAlt, navLinks }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a
          href="#hero"
          aria-label="Home"
          className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line bg-surface text-sm font-semibold text-primary"
        >
          <img
            src={siteLogo}
            alt={logoAlt}
            width={40}
            height={40}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="p-1.5 text-neutral sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className="hidden sm:block" aria-label="Primary">
          <ul className="flex gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = id === activeId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-mono-tag relative block px-3 py-2 text-xs transition-colors duration-300 ${
                      isActive ? "text-white" : "text-neutral hover:text-white"
                    }`}
                  >
                    {link.text}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="main-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line/60 bg-surface sm:hidden"
          >
            <ul className="flex flex-col px-5 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono-tag block py-3 text-sm text-neutral hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

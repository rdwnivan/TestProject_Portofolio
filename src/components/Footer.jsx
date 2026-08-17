import { motion } from "motion/react";
import { Heart, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { personalInfo } from "../lib/data";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="section-rule" />
      <div className="py-12 bg-surface transition-colors relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary-400/3 rounded-full blur-[100px]" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400/15 to-primary-500/10 border border-primary-400/15 flex items-center justify-center">
                  <span className="font-display text-[10px] font-bold text-primary-400">
                    RS
                  </span>
                </div>
                <span className="font-display text-sm font-semibold text-ink tracking-tight">
                  {personalInfo.name}
                </span>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
                Software QA Engineer focused on delivering quality products through thorough testing and automation.
              </p>
            </div>

            <div className="md:text-center">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-subtle mb-4">
                Navigation
              </p>
              <div className="flex flex-wrap md:justify-center gap-x-4 gap-y-2">
                {footerLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ y: -1 }}
                    className="text-sm text-ink-muted hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="md:text-right">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-subtle mb-4">
                Connect
              </p>
              <div className="flex md:justify-end gap-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 glass-card rounded-lg hover:border-primary-400/20 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubLogo size={18} weight="fill" className="text-ink-muted" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 glass-card rounded-lg hover:border-primary-400/20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={18} weight="fill" className="text-ink-muted" />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 glass-card rounded-lg hover:border-primary-400/20 transition-all duration-300"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-ink-muted">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          <div className="border-t border-ink/5 dark:border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-ink-subtle tracking-wide"
            >
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-ink-subtle flex items-center gap-1.5"
            >
              Built with <Heart size={11} className="text-primary-400" weight="fill" /> React, Tailwind CSS & Vite
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}

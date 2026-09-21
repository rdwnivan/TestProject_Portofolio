import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
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
      <div className="py-12 bg-white">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-800 flex items-center justify-center">
                  <span className="font-display text-[10px] font-bold text-white">
                    RS
                  </span>
                </div>
                <span className="font-display text-sm font-semibold text-slate-900 tracking-tight">
                  {personalInfo.name}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                Software QA Engineer — web & mobile testing, API inspection, SIT/UAT.
              </p>
            </div>

            <div className="md:text-center">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-500 mb-4">
                Navigation
              </p>
              <div className="flex flex-wrap md:justify-center gap-x-4 gap-y-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-cyan-800 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:text-right">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-500 mb-4">
                Connect
              </p>
              <div className="flex md:justify-end gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-slate-200 rounded-lg hover:border-slate-400 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubLogo size={18} weight="fill" className="text-slate-600" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-slate-200 rounded-lg hover:border-slate-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={18} weight="fill" className="text-slate-600" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 border border-slate-200 rounded-lg hover:border-slate-400 transition-colors duration-200"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-slate-600">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-mono text-xs text-slate-500 tracking-wide">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="font-mono text-xs text-slate-500">
              React, Tailwind CSS & Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

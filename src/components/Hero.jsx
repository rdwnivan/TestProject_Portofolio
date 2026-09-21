import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { personalInfo } from "../lib/data";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-cyan-800 mb-5"
          >
            {personalInfo.role}
          </motion.p>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-slate-900 tracking-tight leading-[1.05] text-balance"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl leading-relaxed"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.ul
            className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-slate-500 tracking-wide mb-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            aria-label="Previous employers"
          >
            <li className="uppercase tracking-[0.2em] text-slate-400">Previously</li>
            {personalInfo.employers.map((employer) => (
              <li key={employer} className="flex items-center gap-3">
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span>{employer}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-800 hover:bg-cyan-900 text-white rounded-lg font-semibold transition-colors duration-200 text-sm"
            >
              View Projects
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-900 hover:border-slate-900 rounded-lg font-medium transition-colors duration-200 text-sm"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-1"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {[
              { href: personalInfo.github, icon: <GithubLogo size={20} weight="fill" />, label: "GitHub" },
              { href: personalInfo.linkedin, icon: <LinkedinLogo size={20} weight="fill" />, label: "LinkedIn" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-500 hover:text-cyan-800 transition-colors duration-200 rounded-lg hover:bg-slate-100"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

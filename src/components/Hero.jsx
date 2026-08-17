import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck, Terminal, Bug, TestTube, Buildings } from "@phosphor-icons/react";
import { personalInfo } from "../lib/data";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-primary-400 bg-primary-400/8 px-4 py-2 border border-primary-400/15 rounded-full backdrop-blur-sm">
                <span className="glow-dot" />
                Software QA Engineer
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-ink tracking-tight leading-[1.05]"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-ink">{personalInfo.name.split(" ")[0]}</span>
              <br />
              <span className="text-gradient">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              className="font-body text-base md:text-lg text-ink-muted mb-10 max-w-lg leading-relaxed"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(6, 182, 212, 0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-400 hover:to-primary-500 text-white rounded-lg font-semibold transition-all duration-300 text-sm shadow-lg shadow-primary-400/20"
              >
                View Projects
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, borderColor: "rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 border border-ink/15 text-ink hover:text-primary-400 rounded-lg font-medium transition-all duration-300 text-sm backdrop-blur-sm"
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center gap-5"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                {
                  href: personalInfo.github,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  label: "GitHub",
                },
                {
                  href: personalInfo.linkedin,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  label: "LinkedIn",
                },
                {
                  href: `mailto:${personalInfo.email}`,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="p-3 text-ink-muted hover:text-primary-400 transition-all duration-300 rounded-lg hover:bg-primary-400/10"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/15 via-accent/10 to-primary-400/15 rounded-3xl blur-xl opacity-60 animate-pulse-glow" />

              <div className="relative glass-card rounded-2xl p-8 spotlight-border">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-ink/5 dark:border-white/5">
                  <div className="p-2.5 bg-gradient-to-br from-primary-400/15 to-accent/10 rounded-xl border border-primary-400/15">
                    <ShieldCheck size={18} className="text-primary-400" weight="bold" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">QA Dashboard</p>
                    <p className="font-mono text-[10px] text-ink-subtle tracking-wider uppercase">Status: Active</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Experience", value: "2+ yrs", icon: Terminal },
                    { label: "Companies", value: "3", icon: Buildings },
                    { label: "Projects", value: "4+", icon: Bug },
                    { label: "Certifications", value: "QA", icon: TestTube },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-surface/50 p-3.5 rounded-xl border border-ink/5 dark:border-white/5 hover:border-primary-400/20 transition-all duration-300"
                    >
                      <div className="font-display text-xl font-bold text-ink mb-1">{stat.value}</div>
                      <div className="font-mono text-[10px] text-ink-subtle tracking-wider uppercase">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2.5">
                  {["Web & Mobile Testing", "API Inspection", "SIT / UAT"].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 px-3.5 py-2.5 bg-surface/50 rounded-xl border border-ink/5 dark:border-white/5 hover:border-primary-400/20 transition-all duration-300"
                    >
                      <span className="glow-dot shrink-0" />
                      <span className="font-mono text-xs text-ink-muted tracking-wide">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck, Terminal, Bug, TestTube, Buildings, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
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
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-36 md:py-48">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
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
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-ink tracking-tight leading-[1.05] text-balance"
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
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white rounded-lg font-semibold transition-all duration-300 text-sm shadow-lg shadow-primary-400/20"
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
                  icon: <GithubLogo size={20} weight="fill" />,
                  label: "GitHub",
                },
                {
                  href: personalInfo.linkedin,
                  icon: <LinkedinLogo size={20} weight="fill" />,
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/15 via-primary-500/10 to-primary-400/15 rounded-3xl blur-xl opacity-60 animate-pulse-glow" />

              <div className="relative glass-card rounded-2xl p-8 spotlight-border">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-ink/5 dark:border-white/5">
                    <div className="p-2.5 bg-gradient-to-br from-primary-400/15 to-primary-500/10 rounded-xl border border-primary-400/15">
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

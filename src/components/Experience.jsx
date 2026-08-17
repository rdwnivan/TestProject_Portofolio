import { motion, useReducedMotion } from "motion/react";
import { Briefcase, GraduationCap, ArrowRight } from "@phosphor-icons/react";
import { experience, education } from "../lib/data";

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative">
      <div className="section-rule" />
      <div className="py-44 md:py-56 bg-surface transition-colors relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/5 rounded-full blur-[150px] opacity-40" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <motion.span
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary-400 mb-4"
            >
              Journey
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
              Experience & <span className="text-gradient">education</span>
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-xl">
              Professional journey in software quality engineering.
            </p>
          </motion.div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-primary-400/15 to-accent/10 rounded-xl border border-primary-400/15">
                  <Briefcase size={16} className="text-primary-400" weight="bold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Work History
                </h3>
              </div>

              <div className="space-y-3">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="glass-card p-5 rounded-xl hover:border-primary-400/20 transition-all duration-300 spotlight-border"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                      <h4 className="font-display text-base font-semibold text-ink">
                        {exp.role}
                      </h4>
                      <span className="font-mono text-xs text-primary-400 font-medium">
                        @ {exp.company}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-ink-subtle mb-2 tracking-wide">
                      {exp.period}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-primary-400/15 to-accent/10 rounded-xl border border-primary-400/15">
                  <GraduationCap size={16} className="text-primary-400" weight="bold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Education
                </h3>
              </div>

              <div className="space-y-3">
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="glass-card p-5 rounded-xl hover:border-primary-400/20 transition-all duration-300 spotlight-border"
                  >
                    <h4 className="font-display text-base font-semibold text-ink mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-400 text-sm mb-1">
                      {edu.school}
                    </p>
                    <p className="font-mono text-[11px] text-ink-subtle tracking-wide">
                      {edu.location} &middot; {edu.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-xl spotlight-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-400/10 rounded-lg border border-primary-400/15 shrink-0">
                  <ArrowRight size={16} className="text-primary-400" weight="bold" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-ink mb-1">
                    Open to new opportunities
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    Looking for roles in manual/automated testing, test architecture, or quality engineering.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

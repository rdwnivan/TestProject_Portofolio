import { motion, useReducedMotion } from "motion/react";
import { skills, techStack } from "../lib/data";

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative">
      <div className="section-rule" />
      <div className="py-44 md:py-56 bg-surface transition-colors relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/3 rounded-full blur-[200px]" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-2xl"
          >
            <motion.span
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary-400 mb-4"
            >
              Expertise
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
              Core <span className="text-gradient">capabilities</span>
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Hands-on expertise across manual testing, automation frameworks, and QA tooling.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="flex justify-between items-baseline mb-2.5">
                    <span className="text-sm font-medium text-ink">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-primary-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-ink/5 rounded-full h-2 relative overflow-hidden">
                    <motion.div
                      initial={reduce ? false : { width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.06, ease: "easeOut" }}
                      className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 rounded-xl h-full spotlight-border"
              >
                <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-primary-400 mb-5">
                  Quick Overview
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {skills.slice(0, 4).map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="text-center p-4 bg-surface/50 rounded-xl border border-ink/5 dark:border-white/5 hover:border-primary-400/20 transition-all duration-300"
                    >
                      <div className="font-display text-2xl font-bold text-gradient mb-1">
                        {skill.level}%
                      </div>
                      <div className="font-mono text-[10px] text-ink-subtle leading-tight">
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, techs], index) => (
                <motion.div
                  key={category}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl spotlight-border"
                >
                  <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-primary-400 mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-3 py-1.5 bg-surface/50 text-ink text-sm rounded-lg border border-ink/5 dark:border-white/5 hover:border-primary-400/30 hover:text-primary-400 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

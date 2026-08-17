import { motion, useReducedMotion } from "motion/react";
import { Buildings, Coffee, TestTube, ArrowRight } from "@phosphor-icons/react";
import { personalInfo } from "../lib/data";

export default function About() {
  const reduce = useReducedMotion();
  const stats = [
    { icon: Buildings, label: "Companies", value: "3" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: TestTube, label: "Test Cases", value: "500+" },
    { icon: ArrowRight, label: "Bugs Found", value: "200+" },
  ];

  return (
    <section id="about" className="relative">
      <div className="section-rule" />
      <div className="py-44 md:py-56 bg-surface-alt transition-colors relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/5 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[120px] opacity-50" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <motion.span
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary-400 mb-4"
              >
                About Me
              </motion.span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-8">
                Turning quality into
                <span className="text-gradient"> measurable impact</span>
              </h2>
              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-ink/90">
                  {personalInfo.about}
                </p>
                <p className="leading-relaxed text-ink-muted">
                  When I'm not testing, you can find me exploring new automation tools,
                  learning about emerging testing methodologies, or sharing knowledge about
                  quality assurance best practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="glass-card p-5 rounded-xl spotlight-border cursor-default"
                  >
                    <div className="p-2.5 bg-gradient-to-br from-primary-400/15 to-primary-400/5 rounded-lg border border-primary-400/15 w-fit mb-3">
                      <stat.icon className="w-4 h-4 text-primary-400" weight="bold" />
                    </div>
                    <div className="font-display text-2xl font-bold text-ink mb-1">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] text-ink-subtle tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

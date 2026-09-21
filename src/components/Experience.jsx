import { motion, useReducedMotion } from "motion/react";
import { experience, education } from "../lib/data";
import SectionHeading from "./Section";

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative">
      <div className="section-rule" />
      <div className="py-16 md:py-24 bg-white">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Journey"
            title="Experience"
            lede="Professional history in software quality engineering."
          />

          <div className="space-y-10 md:space-y-12">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 mb-4 md:mb-6">
                Work History
              </h3>
              <div className="border-t border-slate-200">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="grid gap-3 md:grid-cols-12 md:gap-8 py-6 md:py-8 border-b border-slate-200"
                  >
                    <div className="md:col-span-4">
                      <h4 className="font-display text-base font-semibold text-slate-900">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-cyan-800 mt-1 leading-relaxed">
                        {exp.company}
                        {exp.client ? ` — ${exp.client}` : ""}
                      </p>
                      <p className="font-mono text-xs text-slate-500 mt-2">
                        {exp.period}
                      </p>
                    </div>
                    <ul className="md:col-span-8 space-y-2">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm text-slate-600 leading-relaxed flex gap-3">
                          <span className="text-slate-300 select-none shrink-0">—</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 mb-4 md:mb-6">
                Education
              </h3>
              <div className="border-t border-slate-200">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="grid gap-2 md:grid-cols-12 md:gap-8 py-6 md:py-8 border-b border-slate-200"
                  >
                    <div className="md:col-span-4">
                      <h4 className="font-display text-base font-semibold text-slate-900">
                        {edu.degree}
                      </h4>
                      <p className="font-mono text-xs text-slate-500 mt-2">
                        {edu.location} · {edu.period}
                      </p>
                    </div>
                    <p className="md:col-span-8 text-sm text-slate-600 leading-relaxed md:pt-0.5">
                      {edu.school}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="border border-slate-200 rounded-xl p-6"
            >
              <p className="font-display text-sm font-semibold text-slate-900 mb-1">
                Open to new opportunities
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Manual and automated testing, test architecture, or quality engineering roles.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

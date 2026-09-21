import { motion, useReducedMotion } from "motion/react";
import { capabilities, techStack } from "../lib/data";
import SectionHeading from "./Section";

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative">
      <div className="section-rule" />
      <div className="py-16 md:py-24 bg-white">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Expertise"
            title="What I do"
            lede="Manual-first QA with automation support — scoped to what I have actually shipped."
          />

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden mb-12 md:mb-16"
          >
            {capabilities.map((cap) => (
              <div key={cap.name} className="bg-white p-6">
                <h3 className="font-display text-base font-semibold text-slate-900 mb-1.5">
                  {cap.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cap.context}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
          >
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {techs.map((tech) => (
                    <li key={tech} className="text-sm text-slate-900 border-b border-slate-100 pb-2">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

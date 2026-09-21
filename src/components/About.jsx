import { motion, useReducedMotion } from "motion/react";
import { personalInfo } from "../lib/data";
import SectionHeading from "./Section";

const facts = [
  { label: "Experience", value: "2+ years" },
  { label: "Companies", value: "3" },
  { label: "Domains", value: "Fintech, banking, enterprise" },
  { label: "Location", value: personalInfo.location },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative">
      <div className="section-rule" />
      <div className="py-16 md:py-24 bg-slate-50">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="About"
            title="Quality is a process, not a phase"
          />

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 space-y-5 max-w-2xl"
            >
              <p className="text-base md:text-lg leading-relaxed text-slate-900">
                {personalInfo.about}
              </p>
              <p className="leading-relaxed text-slate-600">
                When I&apos;m not testing, I explore automation tooling and share
                notes on practical QA workflows with the team.
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <dl className="border-t border-slate-200">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 py-4 border-b border-slate-200"
                  >
                    <dt className="font-mono text-xs tracking-wider uppercase text-slate-500 shrink-0">
                      {fact.label}
                    </dt>
                    <dd className="font-display text-sm font-semibold text-slate-900 text-right">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

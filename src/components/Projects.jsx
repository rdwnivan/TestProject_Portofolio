import { motion, useReducedMotion } from "motion/react";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { projects } from "../lib/data";
import SectionHeading from "./Section";

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="relative">
      <div className="section-rule" />
      <div className="py-16 md:py-24 bg-slate-50">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            lede="Testing automation and QA tooling — each links to its repository."
          />

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="border-t border-slate-200"
          >
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 sm:gap-3 md:grid-cols-12 md:gap-8 py-6 md:py-8 border-b border-slate-200"
              >
                <div className="md:col-span-4">
                  <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-cyan-800 transition-colors duration-200 flex items-center gap-2">
                    {project.title}
                    <ArrowSquareOut size={15} weight="bold" className="text-slate-400 group-hover:text-cyan-800 transition-colors shrink-0" />
                  </h3>
                  <p className="font-mono text-xs text-slate-500 mt-2 leading-relaxed">
                    {project.tech.join("  ·  ")}
                  </p>
                </div>
                <p className="md:col-span-8 text-sm text-slate-600 leading-relaxed md:pt-0.5">
                  {project.description}
                </p>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mt-8 md:mt-10"
          >
            <a
              href="https://github.com/rdwnivan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-900 hover:border-slate-900 rounded-lg font-medium text-sm transition-colors duration-200"
            >
              <GithubLogo size={16} weight="fill" />
              View All Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "motion/react";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { projects } from "../lib/data";

function ProjectImage({ src, alt }) {
  const handleError = (e) => {
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23164e63' width='400' height='250'/%3E%3Ctext fill='%2394a3b8' font-family='system-ui' font-size='16' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E${encodeURIComponent(alt)}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={handleError}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="relative">
      <div className="section-rule" />
      <div className="pt-12 pb-48 md:pt-16 md:pb-60 bg-surface-alt transition-colors relative overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-400/5 rounded-full blur-[120px]" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-12 md:mt-16 relative z-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-2xl"
          >
            <motion.span
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary-400 mb-6"
            >
              Portfolio
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6 text-balance">
              Featured <span className="text-gradient">work</span>
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Selected projects showcasing testing automation and quality engineering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group glass-card rounded-2xl overflow-hidden spotlight-border block"
              >
                <div className="relative aspect-[16/10] bg-surface overflow-hidden">
                  <ProjectImage src={project.image} alt={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-surface/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                    <span className="p-3.5 bg-primary-400/20 backdrop-blur-md rounded-xl text-primary-400 border border-primary-400/30">
                      <GithubLogo size={20} weight="fill" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-lg font-semibold text-ink group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowSquareOut size={16} className="text-ink-subtle mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" weight="bold" />
                  </div>
                  <p className="text-sm text-ink-muted mb-5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 font-mono text-xs bg-primary-400/8 text-primary-400 rounded-lg border border-primary-400/15 hover:bg-primary-400/15 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.a
              href="https://github.com/rdwnivan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(6, 182, 212, 0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-ink/10 dark:border-white/10 text-ink hover:text-primary-400 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm hover:border-primary-400/30"
            >
              <GithubLogo size={16} weight="fill" />
              View All Projects
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

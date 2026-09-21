import { motion, useReducedMotion } from "motion/react";

export default function SectionHeading({ eyebrow, title, lede }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-14 max-w-2xl"
    >
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-cyan-800 mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
        {title}
      </h2>
      {lede ? (
        <p className="text-slate-600 leading-relaxed">{lede}</p>
      ) : null}
    </motion.div>
  );
}

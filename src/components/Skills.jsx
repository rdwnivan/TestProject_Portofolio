import { motion } from "framer-motion";
import { skills, techStack } from "../lib/data";

// Skills section - menampilkan skill bar dan kategori tech stack
// Skill bar menunjukkan level kemampuan (0-100%)
// Tech stack ditampilkan dalam bentuk badge/tag per kategori
export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & <span className="text-primary-600 dark:text-primary-400">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        {/* Skill Bars */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
            Core Technologies
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-colors"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-primary-600 dark:text-primary-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-primary-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {Object.entries(techStack).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl transition-colors"
            >
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4 capitalize">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-600/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

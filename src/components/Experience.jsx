import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../lib/data";

// Experience section - timeline riwayat pekerjaan
// Setiap item menampilkan role, perusahaan, periode, dan deskripsi
// Menggunakan timeline UI dengan garis penghubung antar item
export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>

              {/* Content */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl ml-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg dark:shadow-none">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-primary-600 dark:text-primary-400">@ {exp.company}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

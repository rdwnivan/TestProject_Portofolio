import { motion } from "framer-motion";
import { Building2, Coffee } from "lucide-react";
import { personalInfo } from "../lib/data";

// About section - deskripsi diri dan statistik singkat
// Menampilkan bio dari personalInfo dan 2 statistik (Companies Worked, Cups of Coffee)
export default function About() {
  // Statistik yang ditampilkan dalam bentuk card
  const stats = [
    { icon: Building2, label: "Companies Worked", value: "3" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not testing, you can find me exploring new automation tools,
              learning about emerging testing methodologies, or sharing knowledge about
              quality assurance best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-none transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "../lib/data";

// Footer section - copyright dan credit
// Menampilkan tahun otomatis dan nama dari personalInfo
export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm flex items-center gap-1"
          >
            Built with <Heart size={14} className="text-red-500" /> using React
            & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

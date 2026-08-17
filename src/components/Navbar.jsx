import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { List, X, Sun, Moon } from "@phosphor-icons/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/80 dark:bg-surface/70 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-surface/50"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex items-center justify-center relative h-16">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2.5 absolute left-1/2 -translate-x-1/2"
          >
            <div className="w-8 h-8 rounded-lg bg-primary-400/10 border border-primary-400/20 flex items-center justify-center">
              <span className="font-display text-xs font-bold text-primary-400">
                RS
              </span>
            </div>
            <span className="font-display text-sm font-semibold text-ink tracking-tight hidden sm:inline">
              Portfolio
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-1 absolute right-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  className={`px-3.5 py-1.5 text-[13px] font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-primary-400 bg-primary-400/10 border border-primary-400/15"
                      : "text-ink-muted hover:text-ink dark:hover:text-ink hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </motion.a>
              );
            })}
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-ink-muted hover:text-primary-400 hover:bg-primary-400/10 transition-all duration-300"
              aria-label="Toggle theme"
              aria-pressed={isDark}
            >
              {isDark ? <Sun size={15} weight="bold" /> : <Moon size={15} weight="bold" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-2 absolute right-0">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg text-ink-muted hover:text-primary-400 hover:bg-primary-400/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={17} weight="bold" /> : <Moon size={17} weight="bold" />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-ink-muted hover:text-ink dark:hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/90 dark:bg-surface/90 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                      isActive
                        ? "text-primary-400 bg-primary-400/10 border border-primary-400/15"
                        : "text-ink-muted hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

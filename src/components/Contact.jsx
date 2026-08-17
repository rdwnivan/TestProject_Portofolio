import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Envelope, MapPin, PaperPlaneRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { personalInfo } from "../lib/data";

export default function Contact() {
  const reduce = useReducedMotion();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length > 100) newErrors.name = "Name is too long (max 100 characters)";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    } else if (formData.email.length > 254) {
      newErrors.email = "Email is too long";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length > 2000) newErrors.message = "Message is too long (max 2000 characters)";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    timeoutRef.current = setTimeout(() => setSubmitted(false), 4000);
  };

  const contactLinks = [
    {
      icon: <Envelope size={20} weight="bold" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <GithubLogo size={20} weight="fill" />,
      label: "GitHub",
      value: "github.com/rdwnivan",
      href: personalInfo.github,
    },
    {
      icon: <LinkedinLogo size={20} weight="fill" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ridwansyarifudin",
      href: personalInfo.linkedin,
    },
    {
      icon: <MapPin size={20} weight="bold" />,
      label: "Location",
      value: personalInfo.location || "Indonesia",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-rule" />
      <div className="pt-12 pb-48 md:pt-16 md:pb-60 bg-surface-alt transition-colors relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-400/5 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-[120px] opacity-50" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-12 md:mt-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary-400 mb-6"
              >
                Contact
              </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6 text-balance">
              Let's <span className="text-gradient">connect</span>
            </h2>
              <p className="text-ink-muted leading-relaxed mb-10 max-w-md">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {link.href ? (
                      <motion.a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary-400/20 transition-all duration-300 group spotlight-border"
                      >
                        <div className="p-2.5 bg-gradient-to-br from-primary-400/15 to-primary-400/5 rounded-lg border border-primary-400/15 text-primary-400">
                          {link.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-subtle mb-0.5">
                            {link.label}
                          </p>
                          <p className="text-sm text-ink group-hover:text-primary-400 transition-colors truncate">
                            {link.value}
                          </p>
                        </div>
                      </motion.a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                        <div className="p-2.5 bg-gradient-to-br from-primary-400/15 to-primary-400/5 rounded-lg border border-primary-400/15 text-primary-400">
                          {link.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-subtle mb-0.5">
                            {link.label}
                          </p>
                          <p className="text-sm text-ink">{link.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block font-mono text-[10px] tracking-[0.15em] uppercase text-ink-subtle mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id]}
                      onChange={(e) => {
                        setFormData({ ...formData, [field.id]: e.target.value });
                        if (errors[field.id]) setErrors({ ...errors, [field.id]: "" });
                      }}
                      aria-invalid={!!errors[field.id]}
                      aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                      className={`w-full px-4 py-3.5 glass-card rounded-xl focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 text-ink text-sm transition-all duration-300 placeholder:text-ink-subtle ${
                        errors[field.id] ? "border-red-400/50 focus:border-red-400/50 focus:ring-red-400/20" : ""
                      }`}
                      placeholder={field.placeholder}
                    />
                    {errors[field.id] && (
                      <p id={`${field.id}-error`} className="mt-1.5 text-xs text-red-400">{errors[field.id]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[10px] tracking-[0.15em] uppercase text-ink-subtle mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3.5 glass-card rounded-xl focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 text-ink text-sm transition-all duration-300 resize-none placeholder:text-ink-subtle ${
                      errors.message ? "border-red-400/50 focus:border-red-400/50 focus:ring-red-400/20" : ""
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={submitted}
                  whileHover={submitted ? {} : { scale: 1.02, boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" }}
                  whileTap={submitted ? {} : { scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg ${
                    submitted
                      ? "bg-emerald-500 text-white shadow-emerald-500/20 cursor-not-allowed"
                      : "bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white shadow-primary-400/20"
                  }`}
                >
                  {submitted ? (
                    <>Opening your email client...</>
                  ) : (
                    <>
                      Send Message
                      <PaperPlaneRight size={16} weight="bold" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

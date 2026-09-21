import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Envelope, MapPin, PaperPlaneRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { personalInfo } from "../lib/data";
import SectionHeading from "./Section";

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
      icon: <Envelope size={18} weight="bold" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <GithubLogo size={18} weight="fill" />,
      label: "GitHub",
      value: "github.com/rdwnivan",
      href: personalInfo.github,
    },
    {
      icon: <LinkedinLogo size={18} weight="fill" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ridwansyarifudin",
      href: personalInfo.linkedin,
    },
    {
      icon: <MapPin size={18} weight="bold" />,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-rule" />
      <div className="py-16 md:py-24 bg-slate-50">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            lede="Open to QA roles, freelance testing work, and conversations about quality engineering."
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="border-t border-slate-200"
            >
              {contactLinks.map((link) => (
                <div key={link.label} className="border-b border-slate-200">
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 py-4 group min-w-0"
                    >
                      <span className="text-cyan-800 shrink-0">{link.icon}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] tracking-[0.15em] uppercase text-slate-500 mb-0.5">
                          {link.label}
                        </span>
                        <span className="block text-sm text-slate-900 group-hover:text-cyan-800 transition-colors break-all">
                          {link.value}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4 min-w-0">
                      <span className="text-cyan-800 shrink-0">{link.icon}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] tracking-[0.15em] uppercase text-slate-500 mb-0.5">
                          {link.label}
                        </span>
                        <span className="block text-sm text-slate-900">{link.value}</span>
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <form className="space-y-5 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 md:p-8" onSubmit={handleSubmit} noValidate>
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block font-mono text-[10px] tracking-[0.15em] uppercase text-slate-500 mb-2"
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
                      className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-cyan-800 text-slate-900 text-sm transition-colors duration-200 placeholder:text-slate-400 ${
                        errors[field.id] ? "border-red-400" : "border-slate-300"
                      }`}
                      placeholder={field.placeholder}
                    />
                    {errors[field.id] && (
                      <p id={`${field.id}-error`} className="mt-1.5 text-xs text-red-500">{errors[field.id]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[10px] tracking-[0.15em] uppercase text-slate-500 mb-2"
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
                    className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-cyan-800 text-slate-900 text-sm transition-colors duration-200 resize-none placeholder:text-slate-400 ${
                      errors.message ? "border-red-400" : "border-slate-300"
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-colors duration-200 inline-flex items-center justify-center gap-2 ${
                    submitted
                      ? "bg-emerald-600 text-white cursor-not-allowed"
                      : "bg-cyan-800 hover:bg-cyan-900 text-white"
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
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import ScrollReveal from "@/components/ScrollReveal";

const projectTypes = [
  "Web Design",
  "Full-Stack Development",
  "Product Design",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${siteData.contact.email}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            "Project Type": formData.projectType,
            message: formData.message,
            _subject: `New Inquiry: ${formData.projectType || "General"}`,
          }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-2xl px-6">
        <ScrollReveal>
          <h2 className="text-display-md font-semibold gradient-text mb-10">
            Send Us a Message
          </h2>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center py-16"
            >
              <p className="text-xl text-off-white/70">
                Thanks! We&apos;ll be in touch within 48 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.15em] text-off-white/40 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-off-white placeholder:text-off-white/25 focus:outline-none focus:border-off-white/30 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.15em] text-off-white/40 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-off-white placeholder:text-off-white/25 focus:outline-none focus:border-off-white/30 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-xs uppercase tracking-[0.15em] text-off-white/40 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-off-white focus:outline-none focus:border-off-white/30 transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-[#0a0a0a]">
                    Select a type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0a0a0a]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.15em] text-off-white/40 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-off-white placeholder:text-off-white/25 focus:outline-none focus:border-off-white/30 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white/[0.07] border border-white/[0.12] rounded-full text-off-white font-medium transition-all duration-300 hover:bg-white/[0.12] hover:border-white/[0.22] hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] disabled:opacity-50 disabled:pointer-events-none"
              >
                {sending ? "Sending..." : "Send Message"}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

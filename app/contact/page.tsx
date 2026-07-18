"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

const projectTypes = [
  "Website / Web App Development",
  "AI & Automation Solution",
  "Fintech / Financial System",
  "Proptech / Lease Management",
  "Custom Enterprise Software",
  "Data Engineering & Analytics",
  "Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company || "N/A"}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\n${form.message}`
    );
    window.location.href = `mailto:info@muren.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <Spotlight className="overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-teal/10 fold-tr animate-drift" />
        <div className="absolute top-10 right-16 w-48 h-48 bg-teal/20 rounded-full glow-orb animate-drift" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal-light uppercase">
              Get in touch
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-4">
              Let&apos;s talk about <span className="text-gradient">your next project.</span>
            </h1>
          </Reveal>
        </div>
      </Spotlight>

      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-5 gap-10">
        {/* Form */}
        <div className="md:col-span-3">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-navy font-medium mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-navy/20 px-4 py-3 focus:outline-none focus:border-teal transition-colors fold-tr bg-white"
                />
              </div>

              <div>
                <label className="block text-navy font-medium mb-2 text-sm">
                  Company{" "}
                  <span className="text-slate/50 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company Name or Individual"
                  className="w-full border border-navy/20 px-4 py-3 focus:outline-none focus:border-teal transition-colors fold-tr bg-white placeholder:text-slate/40"
                />
              </div>

              <div>
                <label className="block text-navy font-medium mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-navy/20 px-4 py-3 focus:outline-none focus:border-teal transition-colors fold-tr bg-white"
                />
              </div>

              <div>
                <label className="block text-navy font-medium mb-2 text-sm">
                  Project Type
                </label>
                <select
                  name="projectType"
                  required
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full border border-navy/20 px-4 py-3 focus:outline-none focus:border-teal transition-colors fold-tr bg-white text-slate"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-navy font-medium mb-2 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-navy/20 px-4 py-3 focus:outline-none focus:border-teal transition-colors fold-tr bg-white"
                />
              </div>

              <button
                type="submit"
                className="fold-tr btn-shine bg-teal hover:bg-teal-light text-navy font-semibold px-8 py-3 transition-colors"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>

        {/* Consultation callout */}
        <div className="md:col-span-2">
          <Reveal delay={150}>
            <div className="fold-tr bg-navy text-white p-8 sticky top-24">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal-light uppercase">
                Not sure where to start?
              </span>
              <h3 className="text-xl font-semibold mt-3 mb-3">
                Book a free consultation
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Talk through your idea or challenge with our team, no
                commitment required. We&apos;ll help you figure out the right
                approach before any work begins.
              </p>
              
               <a href="mailto:tanguscherono284@gmail.com?subject=Consultation%20Request"
                className="fold-tr btn-shine bg-teal hover:bg-teal-light text-navy font-semibold px-6 py-3 transition-colors inline-block text-sm"
              >
                Schedule a Call
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
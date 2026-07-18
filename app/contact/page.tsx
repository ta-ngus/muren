"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:tanguscherono284@gmail.com?subject=${subject}&body=${body}`;
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

      <section className="max-w-2xl mx-auto px-6 py-24">
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
      </section>
    </div>
  );
}
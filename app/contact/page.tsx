"use client";

import { useState } from "react";

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
    window.location.href = `mailto:info@muren.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Let&apos;s talk about your next project.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-navy font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-navy/20 rounded-lg px-4 py-3 focus:outline-none focus:border-teal transition-colors"
            />
          </div>
          <div>
            <label className="block text-navy font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-navy/20 rounded-lg px-4 py-3 focus:outline-none focus:border-teal transition-colors"
            />
          </div>
          <div>
            <label className="block text-navy font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-navy/20 rounded-lg px-4 py-3 focus:outline-none focus:border-teal transition-colors"
            />
          </div>
          <button
            type="submit"
            className="bg-teal hover:bg-teal-light text-navy font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
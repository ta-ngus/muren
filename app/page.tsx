import Link from "next/link";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Spotlight className="overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white">
        {/* Glow orbs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-teal/30 rounded-full glow-orb animate-drift" />
        <div
          className="absolute bottom-0 left-10 w-56 h-56 bg-teal-light/20 rounded-full glow-orb animate-drift"
          style={{ animationDelay: "2s" }}
        />
        {/* Fold shapes */}
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal/10 fold-tr animate-drift" />
        <div
          className="absolute bottom-0 -left-16 w-56 h-56 bg-teal/10 fold-bl animate-drift"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-28 flex flex-col items-center text-center gap-6">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Intelligent Solutions.
              <br />
              <span className="text-gradient">Real Impact.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-2xl text-white/80 text-lg font-light">
              Muren designs, builds, and delivers intelligent digital
              solutions that solve real-world challenges through software,
              artificial intelligence, and innovation.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex gap-4 mt-4">
              <Link
                href="/products"
                className="fold-tr btn-shine bg-teal hover:bg-teal-light text-navy font-semibold px-7 py-3 transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="fold-tr border border-white/30 hover:border-teal-light hover:text-teal-light font-semibold px-7 py-3 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </Spotlight>

      {/* Marquee ticker */}
      <div className="bg-navy-dark border-y border-teal/20 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {[
                "Artificial Intelligence",
                "Cloud Computing",
                "Intelligent Automation",
                "Enterprise Software",
                "Data Engineering",
                "Digital Transformation",
              ].map((item) => (
                <span
                  key={item}
                  className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal-light uppercase"
                >
                  {item} <span className="text-white/20 mx-4">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About snapshot */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
              Who we are
            </span>
            <h2 className="text-3xl font-semibold text-navy mt-2 mb-4">
              Technology Built for Lasting Value
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Muren combines modern software engineering principles with
              emerging technologies to develop secure, reliable, and
              user-centered solutions — built with a strong emphasis on
              quality, scalability, usability, and long-term value.
            </p>
            <Link
              href="/about"
              className="text-teal font-semibold hover:text-navy transition-colors"
            >
              Learn more about us →
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm glow-hover transition-all duration-300">
            <ul className="space-y-4">
              {[
                "Product company & technology partner",
                "Custom software development services",
                "AI, cloud, and enterprise software expertise",
                "Security & scalability at the core",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate">
                  <span className="text-teal font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Products */}
      <section className="bg-mist py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                Our portfolio
              </span>
              <h2 className="text-3xl font-semibold text-navy mt-2">
                Our Products
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm glow-hover hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                  Fintech
                </span>
                <h3 className="text-xl font-semibold text-navy mt-2 mb-2">
                  BiasharaIQ
                </h3>
                <p className="text-slate">
                  A financial management and tax compliance platform designed
                  to simplify financial operations for businesses.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm glow-hover hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                  Proptech
                </span>
                <h3 className="text-xl font-semibold text-navy mt-2 mb-2">
                  Amiri Lease
                </h3>
                <p className="text-slate">
                  An AI-powered commercial lease management platform that
                  automates lease administration through intelligent document
                  processing and workflow automation.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/products"
                className="text-teal font-semibold hover:text-navy transition-colors"
              >
                View all products →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold text-navy mb-4">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="text-slate max-w-xl mx-auto mb-8">
            Whether you need a custom solution or want to explore our product
            portfolio, we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="fold-tr btn-shine bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-4 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
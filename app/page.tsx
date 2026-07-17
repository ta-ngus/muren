import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Intelligent Solutions.<br />
            <span className="text-teal-light">Real Impact.</span>
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">
            Muren designs, builds, and delivers intelligent digital solutions
            that solve real-world challenges through software, artificial
            intelligence, and innovation.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/products"
              className="bg-teal hover:bg-teal-light text-navy font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:border-teal-light hover:text-teal-light font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-navy mb-4">
            Technology Built for Lasting Value
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
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
        <div className="bg-background border border-navy/10 rounded-xl p-8 shadow-sm">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-teal font-bold">✓</span>
              <span>Product company & technology partner</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal font-bold">✓</span>
              <span>Custom software development services</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal font-bold">✓</span>
              <span>AI, cloud, and enterprise software expertise</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal font-bold">✓</span>
              <span>Security & scalability at the core</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Products Snapshot */}
      <section className="bg-navy/[0.03] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Our Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-navy/10 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-navy mb-2">BiasharaIQ</h3>
              <p className="text-foreground/70">
                A financial management and tax compliance platform designed
                to simplify financial operations for businesses.
              </p>
            </div>
            <div className="bg-white border border-navy/10 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-navy mb-2">Amiri Lease</h3>
              <p className="text-foreground/70">
                An AI-powered commercial lease management platform that
                automates lease administration through intelligent document
                processing and workflow automation.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="text-teal font-semibold hover:text-navy transition-colors"
            >
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-navy mb-4">
          Let&apos;s Build Something Impactful
        </h2>
        <p className="text-foreground/70 max-w-xl mx-auto mb-8">
          Whether you need a custom solution or want to explore our product
          portfolio, we&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
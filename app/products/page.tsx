import Link from "next/link";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

const capabilities = [
  {
    category: "Web",
    name: "Website & Web App Development",
    description:
      "Modern, responsive websites and web applications, from marketing sites to full-featured platforms, built for performance and designed to convert visitors into clients.",
  },
  {
    category: "Fintech",
    name: "Financial & Compliance Systems",
    description:
      "Platforms that simplify financial operations, automate tax and regulatory compliance, and give businesses real-time visibility into their finances.",
  },
  {
    category: "Proptech",
    name: "Lease & Property Management",
    description:
      "AI-powered platforms that automate lease administration, document processing, and portfolio management for property and real estate operations.",
  },
  {
    category: "AI & Automation",
    name: "Intelligent Automation Solutions",
    description:
      "Systems that use AI to automate repetitive workflows, process documents, and surface insights, freeing teams to focus on higher-value work.",
  },
  {
    category: "Enterprise",
    name: "Custom Enterprise Software",
    description:
      "Tailored software built around how your organization actually operates, from internal tools to full-scale platforms.",
  },
  {
    category: "Data",
    name: "Data Engineering & Analytics",
    description:
      "Pipelines and dashboards that turn raw data into decisions, built to scale as your data and your questions grow.",
  },
  {
    category: "Cloud",
    name: "Cloud & Digital Transformation",
    description:
      "Migration, modernization, and infrastructure strategy that moves organizations from legacy systems to scalable, cloud-native operations.",
  },
  {
    category: "Strategy",
    name: "Technology Consulting",
    description:
      "Not sure what to build or where to start? We help you scope the right solution, choose the right architecture, and plan a roadmap before writing a line of code.",
  },
];

const process = [
  {
    step: "Discover",
    description:
      "We start by understanding your goals, constraints, and the problem you're actually trying to solve.",
  },
  {
    step: "Design",
    description:
      "We map out the right architecture and user experience before writing production code.",
  },
  {
    step: "Build",
    description:
      "We develop in focused iterations, keeping you involved and informed at every stage.",
  },
  {
    step: "Launch",
    description:
      "We ship, monitor, and support the solution as it goes live and scales with you.",
  },
];

const industries = [
  "Fintech",
  "Real Estate",
  "Retail & E-commerce",
  "Healthcare",
  "Logistics",
  "Professional Services",
  "Startups",
];

export default function Products() {
  return (
    <div>
      <Spotlight className="overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="absolute bottom-0 -left-12 w-60 h-60 bg-teal/10 fold-bl animate-drift" />
        <div className="absolute bottom-10 left-10 w-52 h-52 bg-teal-light/20 rounded-full glow-orb animate-drift" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal-light uppercase">
              What We Build
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-4">
              Solutions shaped around <span className="text-gradient">your challenge.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/80 text-lg font-light mt-2">
              Every organization&apos;s problem is different. Here&apos;s where
              we bring the deepest expertise — and what we can build for you.
            </p>
          </Reveal>
        </div>
      </Spotlight>

      {/* Capabilities grid */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.name} delay={(i % 3) * 100}>
            <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm glow-hover transition-all duration-300 h-full">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                {cap.category}
              </span>
              <h3 className="text-xl font-semibold text-navy mt-2 mb-3">
                {cap.name}
              </h3>
              <p className="text-slate leading-relaxed text-sm">
                {cap.description}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* How we work */}
      <section className="bg-navy py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal-light uppercase">
                How we work
              </span>
              <h2 className="text-3xl font-semibold mt-2">
                From idea to launch
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 120}>
                <div className="relative pl-6 border-l-2 border-teal/40 h-full">
                  <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal-light uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">
                    {p.step}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
              Who we work with
            </span>
            <h2 className="text-2xl font-semibold text-navy mt-2 mb-8">
              Industries We Serve
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="fold-tr bg-mist border border-navy/10 text-navy text-sm font-medium px-5 py-2"
                >
                  {industry}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proven in production */}
      <section className="bg-mist py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                Proven in production
              </span>
              <h2 className="text-3xl font-semibold text-navy mt-2">
                Built by Muren
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm h-full">
                <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                  Fintech
                </span>
                <h3 className="text-lg font-semibold text-navy mt-2 mb-2">
                  BiasharaIQ
                </h3>
                <p className="text-slate text-sm">
                  A financial management and tax compliance platform for
                  businesses.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm h-full">
                <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                  Proptech
                </span>
                <h3 className="text-lg font-semibold text-navy mt-2 mb-2">
                  Amiri Lease
                </h3>
                <p className="text-slate text-sm">
                  An AI-powered commercial lease management platform.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold text-navy mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-slate max-w-xl mx-auto mb-8">
            Let&apos;s talk through what you&apos;re trying to build and figure
            out the right approach together.
          </p>
          <Link
            href="/contact"
            className="fold-tr btn-shine bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-4 transition-colors inline-block"
          >
            Let&apos;s Talk
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
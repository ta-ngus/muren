import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

export default function About() {
  return (
    <div>
      {/* Header */}
      <Spotlight className="overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal/10 fold-tr animate-drift" />
        <div className="absolute top-10 right-10 w-56 h-56 bg-teal/20 rounded-full glow-orb animate-drift" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal-light uppercase">
              About Muren
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-4">
              Technology built for <span className="text-gradient">meaningful, lasting impact.</span>
            </h1>
          </Reveal>
        </div>
      </Spotlight>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-6 py-24 space-y-6">
        <Reveal>
          <p className="text-slate leading-relaxed text-lg">
            Muren is a technology company focused on designing, building, and
            delivering intelligent digital solutions that solve real-world
            challenges through software, artificial intelligence, and
            innovation. We develop scalable products and technology solutions
            that improve efficiency, simplify complex processes, and enable
            organizations to embrace digital transformation.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-slate leading-relaxed text-lg">
            Founded with a vision to create technology that delivers
            meaningful impact, Muren combines modern software engineering
            principles with emerging technologies to develop secure, reliable,
            and user-centered solutions. Every product is built with a strong
            emphasis on quality, scalability, usability, and long-term value.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-slate leading-relaxed text-lg">
            Muren operates as both a product company and a technology partner.
            Alongside developing its own portfolio of software products, the
            company provides custom software development services for
            organizations seeking innovative digital solutions tailored to
            their unique operational needs.
          </p>
        </Reveal>
      </section>

      {/* Focus & Mission */}
      <section className="bg-mist py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm glow-hover transition-all duration-300 h-full">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                Where we look
              </span>
              <h2 className="text-2xl font-semibold text-navy mt-2 mb-4">
                Our Focus
              </h2>
              <p className="text-slate leading-relaxed">
                Driven by continuous learning and innovation, Muren actively
                explores advancements in artificial intelligence, cloud
                computing, intelligent automation, enterprise software, data
                engineering, and emerging digital technologies.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm glow-hover transition-all duration-300 h-full">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                Where we&apos;re going
              </span>
              <h2 className="text-2xl font-semibold text-navy mt-2 mb-4">
                Our Mission
              </h2>
              <p className="text-slate leading-relaxed">
                As Muren grows, our mission remains constant: to transform
                innovative ideas into powerful technology products that
                create lasting value for organizations, communities, and
                industries around the world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
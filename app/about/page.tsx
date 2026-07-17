export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Muren</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Technology built for meaningful, lasting impact.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Muren is a technology company focused on designing, building, and
          delivering intelligent digital solutions that solve real-world
          challenges through software, artificial intelligence, and
          innovation. We develop scalable products and technology solutions
          that improve efficiency, simplify complex processes, and enable
          organizations to embrace digital transformation.
        </p>
        <p>
          Founded with a vision to create technology that delivers
          meaningful impact, Muren combines modern software engineering
          principles with emerging technologies to develop secure, reliable,
          and user-centered solutions. Every product is built with a strong
          emphasis on quality, scalability, usability, and long-term value.
        </p>
        <p>
          Muren operates as both a product company and a technology partner.
          Alongside developing its own portfolio of software products, the
          company provides custom software development services for
          organizations seeking innovative digital solutions tailored to
          their unique operational needs.
        </p>
      </section>

      {/* Mission & Focus */}
      <section className="bg-navy/[0.03] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Our Focus</h2>
            <p className="text-foreground/70 leading-relaxed">
              Driven by continuous learning and innovation, Muren actively
              explores advancements in artificial intelligence, cloud
              computing, intelligent automation, enterprise software, data
              engineering, and emerging digital technologies.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
            <p className="text-foreground/70 leading-relaxed">
              As Muren grows, our mission remains constant: to transform
              innovative ideas into powerful technology products that create
              lasting value for organizations, communities, and industries
              around the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
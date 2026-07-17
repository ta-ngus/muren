export default function Products() {
  return (
    <div>
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Software built to simplify complexity and drive real impact.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div className="bg-white border border-navy/10 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-navy mb-3">BiasharaIQ</h3>
          <p className="text-foreground/70 leading-relaxed">
            A financial management and tax compliance platform designed to
            simplify financial operations for businesses — helping
            organizations manage finances and stay compliant with ease.
          </p>
        </div>
        <div className="bg-white border border-navy/10 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-navy mb-3">Amiri Lease</h3>
          <p className="text-foreground/70 leading-relaxed">
            An AI-powered commercial lease management platform that
            automates lease administration through intelligent document
            processing and workflow automation.
          </p>
        </div>
      </section>
    </div>
  );
}
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

const products = [
  {
    category: "Fintech",
    name: "BiasharaIQ",
    description:
      "A financial management and tax compliance platform designed to simplify financial operations for businesses — helping organizations manage finances and stay compliant with ease.",
    features: [
      "Automated tax compliance tracking",
      "Real-time financial reporting",
      "Streamlined bookkeeping workflows",
    ],
  },
  {
    category: "Proptech",
    name: "Amiri Lease",
    description:
      "An AI-powered commercial lease management platform that automates lease administration through intelligent document processing and workflow automation.",
    features: [
      "Intelligent lease document processing",
      "Automated renewal & compliance alerts",
      "Centralized lease portfolio management",
    ],
  },
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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-4">
              Software built to <span className="text-gradient">simplify complexity.</span>
            </h1>
          </Reveal>
        </div>
      </Spotlight>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">
        {products.map((product, i) => (
          <Reveal key={product.name} delay={i * 150}>
            <div className="fold-tr bg-white border border-navy/10 p-8 shadow-sm glow-hover transition-all duration-300 h-full flex flex-col">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-teal uppercase">
                {product.category}
              </span>
              <h3 className="text-2xl font-semibold text-navy mt-2 mb-3">
                {product.name}
              </h3>
              <p className="text-slate leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2 mt-auto pt-4 border-t border-navy/10">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-slate">
                    <span className="text-teal">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
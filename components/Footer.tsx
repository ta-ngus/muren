import Spotlight from "@/components/Spotlight";

export default function Footer() {
  return (
    <Spotlight className="w-full overflow-hidden bg-navy text-white mt-20">
      <div className="absolute -bottom-16 right-10 w-64 h-64 bg-teal/20 rounded-full glow-orb" />
      <div className="relative max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold font-[family-name:var(--font-display)]">
            MUREN
          </h3>
          <p className="text-sm text-white/70 mt-2">
            Intelligent solutions. Real impact.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-teal-light">Quick Links</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li><a href="/" className="hover:text-teal transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-teal transition-colors">About</a></li>
            <li><a href="/products" className="hover:text-teal transition-colors">Products</a></li>
            <li><a href="/contact" className="hover:text-teal transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-teal-light">Contact</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li>info@muren.com</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 text-center text-xs text-white/50 py-4">
        © {new Date().getFullYear()} Muren. All rights reserved.
      </div>
    </Spotlight>
  );
}
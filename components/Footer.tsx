export default function Footer() {
  return (
    <footer className="w-full bg-navy text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold mb-2">MUREN</h3>
          <p className="text-sm text-white/70">
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

      <div className="border-t border-white/10 text-center text-xs text-white/50 py-4">
        © {new Date().getFullYear()} Muren. All rights reserved.
      </div>
    </footer>
  );
}
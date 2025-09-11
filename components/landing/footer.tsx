import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} AETech. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link href="#home" className="hover:text-white">Home</Link>
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#testimonials" className="hover:text-white">Reviews</Link>
          <Link href="#cta" className="hover:text-white">Get started</Link>
        </nav>
      </div>
    </footer>
  );
}

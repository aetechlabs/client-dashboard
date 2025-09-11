import Link from "next/link";

export function LandingHero() {
  return (
    <section className="flex w-full flex-col items-start gap-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
        <span className="rounded-full bg-green-400/20 px-2 py-0.5 text-green-300">New</span>
        <span>Faster project views and improved search</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
        A simple dashboard for client and project tracking
      </h2>
      <p className="text-base md:text-lg text-white/80 max-w-2xl">
        Create clients, assign projects, and keep every stakeholder in sync. Built for teams who want fast setup and clear visibility.
      </p>

      <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/60">
        <span className="rounded-md bg-white/5 px-2 py-1">No credit card</span>
        <span className="rounded-md bg-white/5 px-2 py-1">Free tier</span>
        <span className="rounded-md bg-white/5 px-2 py-1">Team-ready</span>
      </div>

      <div className="mt-4 flex gap-3">
        <Link href="/auth/register" className="inline-block rounded-md bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90 transition-colors">
          Start free
        </Link>
        <Link href="/auth/login" className="inline-block rounded-md border border-white/20 text-white px-5 py-3 hover:bg-white/10 transition-colors">
          See demo
        </Link>
      </div>
    </section>
  );
}

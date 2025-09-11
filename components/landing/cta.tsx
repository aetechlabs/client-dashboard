import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingCta() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-purple-600/30 p-6 md:p-8">
      <div className="absolute -inset-1 -z-10 opacity-20 blur-2xl [background:radial-gradient(600px_200px_at_10%_10%,#60a5fa,transparent_60%),radial-gradient(600px_200px_at_90%_50%,#a78bfa,transparent_60%)]" />
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white">Be ready in minutes.</h3>
          <p className="text-white/70">Create an account and invite your team today.</p>
        </div>
        <div className="flex gap-3">
          <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
            <Link href="/auth/register">Start free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            <Link href="/auth/login">Log in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mb-8 sticky top-4 z-50">
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3">
        {/* Top row: brand + desktop nav + mobile toggle */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Image src="/logo-dark.png" alt="AETech Logo" width={36} height={36} className="rounded" />
            <div className="truncate">
              <h1 className="truncate text-lg md:text-xl font-semibold text-white">AETech Client Dashboard</h1>
              <p className="hidden sm:block text-xs text-white/70">Manage clients and projects with ease.</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="#features" className="text-white/80 hover:text-white">Features</Link>
            <Link href="#testimonials" className="text-white/80 hover:text-white">Reviews</Link>
            <Link href="#cta" className="text-white/80 hover:text-white">Get started</Link>
            <div className="ml-2 flex items-center gap-3">
              <Link href="/auth/login" className="rounded-full bg-white/10 text-white px-4 py-2 hover:bg-white/20 transition-colors">Log in</Link>
              <Link href="/auth/register" className="rounded-full bg-white text-slate-900 px-4 py-2 font-medium hover:opacity-95 transition-opacity">Start free</Link>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-nav" hidden={!open} className="sm:hidden mt-3 border-t border-white/10 pt-3">
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="#features" className="rounded-md px-2 py-2 text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>Features</Link>
            <Link href="#testimonials" className="rounded-md px-2 py-2 text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>Reviews</Link>
            <Link href="#cta" className="rounded-md px-2 py-2 text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>Get started</Link>
            <div className="mt-2 flex flex-col gap-2">
              <Link href="/auth/login" className="rounded-md bg-white/10 text-white px-4 py-2 text-center hover:bg-white/20" onClick={() => setOpen(false)}>Log in</Link>
              <Link href="/auth/register" className="rounded-md bg-white text-slate-900 px-4 py-2 text-center font-medium hover:opacity-95" onClick={() => setOpen(false)}>Start free</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

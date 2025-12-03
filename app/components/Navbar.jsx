"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        {/* LEFT: Logo / Brand */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <span className="font-bold text-lg">Aziz Portfolio</span>
          </Link>
        </div>

        {/* CENTER / DESKTOP LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-lime-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-lime-600">
            About
          </Link>
          <Link href="/experience" className="hover:text-lime-600">
            Pengalaman
          </Link>
          <Link href="/projects" className="hover:text-lime-600">
            Project
          </Link>
          <Link href="/contact" className="hover:text-lime-600">
            Kontak
          </Link>
        </nav>

        {/* RIGHT: small info or social */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <span className="text-gray-700">Pakwa Creative</span>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white/95">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/experience" onClick={() => setOpen(false)}>
              Pengalaman
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)}>
              Project
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Kontak
            </Link>
            <div className="mt-2 text-xs text-gray-500">
              Pakwa Creative • @azizctd
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT TITLE */}
        <h1 className="font-semibold text-lg">Aziz Portfolio</h1>

        {/* CENTER NAV MENU */}
        <ul className="hidden md:flex gap-10 text-gray-800 font-medium">
          <li>
            <Link href="/" className="hover:text-lime-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-lime-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-lime-600 transition">
              Pengalaman
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-lime-600 transition">
              Project
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-lime-600 transition">
              Kontak
            </Link>
          </li>
        </ul>

        {/* RIGHT TEXT */}
        <p className="font-medium text-gray-700 hidden md:block">
          Pakwa Creative
        </p>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden border-t bg-white px-6 py-3 text-sm">
        <ul className="flex justify-between text-gray-800 font-medium">
          <li>
            <Link href="/" className="hover:text-lime-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-lime-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-lime-600 transition">
              Pengalaman
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-lime-600 transition">
              Project
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-lime-600 transition">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

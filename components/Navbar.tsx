"use client";

import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12">

        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-lg font-bold tracking-tight">
            Sai Charan
          </h1>

          <span className="text-[10px] font-medium tracking-wide text-gray-400 sm:text-xs">
            If it's difficult, that's the point.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#home" className="text-sm font-semibold text-gray-500 hover:text-black transition">
            Home
          </a>

          <a href="#about" className="text-sm font-semibold text-gray-500 hover:text-black transition">
            About
          </a>

          <a href="#skills" className="text-sm font-semibold text-gray-500 hover:text-black transition">
            Skills
          </a>

          <a href="#projects" className="text-sm font-semibold text-gray-500 hover:text-black transition">
            Projects
          </a>

          <a href="#contact" className="rounded-full border border-black px-5 py-2 text-sm font-semibold transition hover:bg-black hover:text-white">
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <FaBars className="text-xl" />
        </div>

      </div>
    </nav>
  );
}
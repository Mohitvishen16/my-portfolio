import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/20">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <a href="#top" className="text-cyan-300 font-semibold">Mohit Singh</a>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

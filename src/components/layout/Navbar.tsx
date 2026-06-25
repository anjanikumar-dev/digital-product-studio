"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Studio", href: "#" },
  { name: "6D Framework", href: "#" },
  { name: "Stories", href: "#" },
  { name: "Journal", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Digital Product Studio
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-blue-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}

        <button
          aria-label="Toggle Navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}

      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col py-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-6 py-3 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
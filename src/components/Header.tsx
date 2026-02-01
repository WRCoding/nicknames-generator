"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { categories } from "@/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan flex items-center justify-center shadow-neon-purple transition-transform group-hover:scale-110">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              <span className="gradient-text">Nick</span>
              <span className="text-white">Gen</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                <span className="mr-1.5">{category.icon}</span>
                {category.name.replace(" Nicknames", "")}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                More ▾
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 py-2 glass rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                {categories.slice(4).map((category) => (
                  <Link
                    key={category.slug}
                    href={`/${category.slug}`}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name.replace(" Nicknames", "")}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/#generator" className="btn-neon text-sm">
              <span>Generate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5 animate-slide-up">
            <nav className="flex flex-col gap-1">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Link>
              ))}
              <Link
                href="/#generator"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 btn-neon text-center text-sm"
              >
                <span>Generate Now</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

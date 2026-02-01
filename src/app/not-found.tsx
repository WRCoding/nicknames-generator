"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          {/* 404 Number */}
          <div className="relative mb-8">
            <span className="font-display font-extrabold text-[150px] sm:text-[200px] leading-none gradient-text opacity-20">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-bold text-4xl sm:text-5xl text-white">
                Page Not Found
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Oops! The page youre looking for doesnt exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-neon flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

import { Sparkles, Zap, Star, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import NicknameCard from "@/components/NicknameCard";
import Generator from "@/components/Generator";
import FAQ from "@/components/FAQ";
import { categories, popularNicknames } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/15 rounded-full blur-[150px] animate-float" style={{ animationDelay: "-3s" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-green/30 mb-6 animate-bounce-subtle">
                <Gift className="w-4 h-4 text-neon-green" />
                <span className="text-sm font-medium text-neon-green">100% FREE</span>
                <span className="text-sm text-gray-400">AI-Powered Generator</span>
              </div>

              {/* Main heading */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
                <span className="text-white">Free AI </span>
                <span className="gradient-text">Nickname Generator</span>
                <br />
                <span className="text-white">for Games & More</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Generate <span className="text-neon-green font-semibold">unlimited free</span> nicknames
                for gaming, boyfriend, girlfriend & more. No signup required.
                Powered by AI for unique, creative names every time!
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-neon-green/20">
                    <Gift className="w-5 h-5 text-neon-green" />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-2xl text-neon-green">FREE</div>
                    <div className="text-xs text-gray-500">Forever</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-neon-purple/20">
                    <Zap className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-2xl text-white">Unlimited</div>
                    <div className="text-xs text-gray-500">Generations</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-neon-cyan/20">
                    <Sparkles className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-2xl text-white">AI</div>
                    <div className="text-xs text-gray-500">Powered</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generator */}
            <Generator />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Free Nickname Categories
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our curated collections - all completely free with unlimited AI generations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category.slug}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CategoryCard
                    category={category}
                    showSubcategories={category.slug === "games"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Nicknames Section */}
        <section className="py-16 sm:py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Popular Nicknames
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Most loved nicknames by our community. Click to copy instantly!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {popularNicknames.map((nickname, index) => {
                const category = categories.find(c => c.slug === nickname.category);
                return (
                  <div
                    key={nickname.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <NicknameCard
                      nickname={nickname.name}
                      color={category?.color || "purple"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-3xl blur-xl opacity-30" />
              <div className="relative glass rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
                {/* Decorative orbs */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-cyan/20 rounded-full blur-3xl" />

                {/* Free badge */}
                <div className="relative inline-flex items-center gap-2 px-4 py-1 rounded-full bg-neon-green/20 border border-neon-green/30 mb-6">
                  <Gift className="w-4 h-4 text-neon-green" />
                  <span className="text-sm font-semibold text-neon-green">100% FREE - No Signup Required</span>
                </div>

                <h2 className="relative font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                  Start Generating Free AI Nicknames Now!
                </h2>
                <p className="relative text-gray-400 mb-8 max-w-lg mx-auto">
                  Unlimited generations, zero cost. Create unique nicknames for games,
                  relationships, and more with our free AI generator.
                </p>
                <a href="#generator" className="relative inline-block btn-neon text-lg px-10 py-4">
                  <span>Generate Free Nicknames</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

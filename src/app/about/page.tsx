import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles, Zap, Shield, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About - Free AI Nickname Generator",
  description:
    "Learn about NickGen, the free AI-powered nickname generator. No signup, no limits. Discover how we help millions create unique nicknames for gaming, relationships & more.",
  alternates: {
    canonical: "https://nicknamegeneratorforgames.top/about",
  },
  openGraph: {
    title: "About - Free AI Nickname Generator",
    description:
      "Learn about NickGen, the free AI-powered nickname generator. No signup, no limits.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Free AI Nickname Generator",
    description:
      "Learn about NickGen, the free AI-powered nickname generator. No signup, no limits.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-neon-purple">About</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              About <span className="gradient-text">NickGen</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              NickGen is a free AI-powered nickname generator built for gamers,
              couples, and anyone looking for the perfect name. We believe a
              great nickname should be easy to find — no accounts, no fees, no
              limits.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-neon-cyan" />
              How It Works
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Our generator uses advanced AI models to create nicknames
                tailored to your needs. Choose a category — gaming, boyfriend,
                girlfriend, cute, cool, or funny — and get instant suggestions.
              </p>
              <p>
                Want something more specific? Use the custom prompt input to
                describe exactly what you&apos;re looking for. The AI
                understands context, tone, and style to deliver names that
                actually fit.
              </p>
              <p>
                Every suggestion is generated on demand, so you&apos;ll always
                get fresh, unique results. Click any nickname to copy it to your
                clipboard instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Why Free */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-neon-pink" />
              Why Is It Free?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We built NickGen because picking a good nickname shouldn&apos;t
              cost money. The tool runs on efficient AI models that keep
              operating costs low, allowing us to offer unlimited generations
              at no charge. No premium tiers, no hidden paywalls.
            </p>
          </div>
        </section>

        {/* Privacy & Trust */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-3">
              <Shield className="w-6 h-6 text-neon-green" />
              Privacy &amp; Trust
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                <span>No account or signup required — ever.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                <span>
                  We do not store the nicknames you generate or the prompts you
                  enter.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                <span>No personal data is collected or sold.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                <span>The site is served over HTTPS for secure browsing.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-3">
              <Mail className="w-6 h-6 text-neon-blue" />
              Contact
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Have feedback, suggestions, or questions? Reach out to us at{" "}
              <a
                href="mailto:longjunwang7@gmail.com"
                className="text-neon-purple hover:underline"
              >
                longjunwang7@gmail.com
              </a>
              . We&apos;d love to hear from you.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About - Free AI Nickname Generator",
            description:
              "Learn about NickGen, the free AI-powered nickname generator.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "/about",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}

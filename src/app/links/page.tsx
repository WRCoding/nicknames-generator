import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Link2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Links - Free AI Nickname Generator",
  description:
    "Discover our partner sites and resources. NickGen collaborates with amazing projects to bring you the best nickname generation experience.",
  alternates: {
    canonical: "https://nicknamegeneratorforgames.top/links",
  },
  openGraph: {
    title: "Links - Free AI Nickname Generator",
    description:
      "Discover our partner sites and resources for nickname generation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Links - Free AI Nickname Generator",
    description:
      "Discover our partner sites and resources for nickname generation.",
  },
};

interface LinkItem {
  name: string;
  url: string;
  description: string;
  badge?: {
    src: string;
    alt: string;
    height: number;
  };
}

const links: LinkItem[] = [
  {
    name: "Appa List",
    url: "https://appalist.com",
    description: "Discover and explore amazing apps and tools.",
    badge: {
      src: "https://appalist.com/assets/images/badge.png",
      alt: "Appa List",
      height: 54,
    },
  },
  {
    name: "JustSimple Tools",
    url: "https://www.justsimple.tools",
    description: "A collection of simple and useful online tools.",
    badge: {
      src: "https://www.justsimple.tools/badge.svg",
      alt: "Listed on JustSimple Tools",
      height: 40,
    },
  },
];

export default function LinksPage() {
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
            <span className="text-neon-purple">Links</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Partner <span className="gradient-text">Links</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Check out our friends and partners. These are amazing sites and
              tools we recommend.
            </p>
          </div>
        </section>

        {/* Links Grid */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-3">
              <Link2 className="w-6 h-6 text-neon-cyan" />
              Featured Links
            </h2>
            <div className="grid gap-6">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl glass border border-white/5 hover:border-neon-purple/30 transition-all hover:shadow-neon-purple"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {link.badge && (
                      <div className="flex-shrink-0">
                        <img
                          src={link.badge.src}
                          alt={link.badge.alt}
                          height={link.badge.height}
                          className="h-[54px] w-auto"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-neon-purple transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {link.description}
                      </p>
                      <span className="text-xs text-neon-cyan mt-2 inline-block">
                        {link.url.replace("https://", "")} →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Add Your Link */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center p-8 rounded-2xl glass border border-white/5">
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Want to Partner With Us?
              </h3>
              <p className="text-gray-400 mb-4">
                If you have a cool project and want to exchange links, feel free
                to reach out!
              </p>
              <a
                href="mailto:longjunwang7@gmail.com"
                className="text-neon-purple hover:underline"
              >
                longjunwang7@gmail.com
              </a>
            </div>
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
            name: "Links - Free AI Nickname Generator",
            description:
              "Discover our partner sites and resources for nickname generation.",
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
                  name: "Links",
                  item: "/links",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}

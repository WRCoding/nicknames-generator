import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RandomGenerator from "@/components/RandomGenerator";
import Generator from "@/components/Generator";
import { categories, getCategoryBySlug } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: {
      canonical: `https://nicknamegeneratorforgames.top/${category.slug}`,
    },
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: category.seoTitle,
      description: category.seoDescription,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const colorTextClasses = {
    pink: "text-neon-pink",
    purple: "text-neon-purple",
    cyan: "text-neon-cyan",
    blue: "text-neon-blue",
    green: "text-neon-green",
    yellow: "text-neon-yellow",
  };

  const colorBgClasses = {
    pink: "bg-neon-pink/10 border-neon-pink/20",
    purple: "bg-neon-purple/10 border-neon-purple/20",
    cyan: "bg-neon-cyan/10 border-neon-cyan/20",
    blue: "bg-neon-blue/10 border-neon-blue/20",
    green: "bg-neon-green/10 border-neon-green/20",
    yellow: "bg-neon-yellow/10 border-neon-yellow/20",
  };

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
            <span className={colorTextClasses[category.color]}>{category.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${colorBgClasses[category.color]} border text-4xl`}>
                  {category.icon}
                </div>
                <div>
                  <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
                    {category.name}
                  </h1>
                  <p className="text-gray-400 mt-2">{category.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-categories for Games */}
        {category.subCategories && category.subCategories.length > 0 && (
          <section className="py-8 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display font-bold text-xl text-white mb-6">
                Choose Your Game
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.subCategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/${category.slug}/${sub.slug}`}
                    className={`p-4 rounded-xl ${colorBgClasses[category.color]} border hover:bg-white/10 transition-all group card-glow`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sub.icon}</span>
                      <span className="font-medium text-white group-hover:translate-x-1 transition-transform">
                        {sub.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Random Nicknames */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RandomGenerator
              category={category.slug}
              color={category.color}
              title={`Random ${category.name}`}
            />
          </div>
        </section>

        {/* AI Generator */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-white text-center mb-8">
              Generate Custom {category.name}
            </h2>
            <Generator />
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-invert prose-gray max-w-none">
              <h2 className="font-display text-2xl text-white mb-4">
                About {category.name}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {category.description} Our AI-powered nickname generator helps you find
                the perfect name that matches your personality and style. Whether youre
                looking for something cute, cool, funny, or unique, weve got you covered.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Simply click the Refresh button to get new suggestions, or use our
                custom generator to describe exactly what youre looking for. Click on any
                nickname to instantly copy it to your clipboard.
              </p>

              {category.slug === "games" && (
                <>
                  <h3 className="font-display text-xl text-white mt-8 mb-4">
                    Gaming Nicknames for Every Platform
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our gaming nicknames work great on Steam, Discord, Xbox, PlayStation,
                    Nintendo Switch, and mobile gaming platforms. We have specialized
                    nicknames for popular games including League of Legends, Fortnite,
                    Minecraft, Valorant, Genshin Impact, Call of Duty, Apex Legends, and Roblox.
                  </p>
                </>
              )}

              {category.slug === "boyfriend" && (
                <>
                  <h3 className="font-display text-xl text-white mt-8 mb-4">
                    Finding the Perfect Pet Name
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    A great nickname for your boyfriend should feel natural and reflect
                    your unique relationship. Whether you prefer classic pet names like
                    Honey or Babe, or something more creative and personal, our
                    generator provides endless inspiration.
                  </p>
                </>
              )}

              {category.slug === "girlfriend" && (
                <>
                  <h3 className="font-display text-xl text-white mt-8 mb-4">
                    Sweet Names for Your Special Someone
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Finding the right nickname for your girlfriend shows thoughtfulness
                    and affection. From sweet classics like Princess and Angel to
                    unique creative names, we help you express your love in a special way.
                  </p>
                </>
              )}
            </article>
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
            name: category.seoTitle,
            description: category.seoDescription,
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
                  name: category.name,
                  item: `/${category.slug}`,
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RandomGenerator from "@/components/RandomGenerator";
import Generator from "@/components/Generator";
import { categories, getCategoryBySlug, getSubCategoryBySlug } from "@/lib/data";

interface GamePageProps {
  params: Promise<{ game: string }>;
}

// Get the games category
const gamesCategory = categories.find((c) => c.slug === "games")!;

// Generate static paths for all games
export async function generateStaticParams() {
  return (
    gamesCategory.subCategories?.map((sub) => ({
      game: sub.slug,
    })) || []
  );
}

// Game-specific SEO data
const gameSeoData: Record<string, { title: string; description: string; keywords: string }> = {
  "league-of-legends": {
    title: "Free League of Legends Nickname Generator - AI LoL Summoner Names",
    description: "Generate FREE unlimited LoL nicknames with AI. Find cool, unique summoner names for League of Legends. No signup required!",
    keywords: "free lol nickname generator, league of legends nicknames, lol summoner names, free lol username generator",
  },
  fortnite: {
    title: "Free Fortnite Nickname Generator - AI-Powered Usernames",
    description: "Generate FREE unlimited Fortnite nicknames with AI. Find cool, OG-style display names for your Fortnite account. No signup!",
    keywords: "free fortnite nickname generator, fortnite usernames, fortnite display names, free fortnite name generator",
  },
  minecraft: {
    title: "Free Minecraft Nickname Generator - AI-Powered Usernames",
    description: "Generate FREE unlimited Minecraft nicknames with AI. Find creative names for Java or Bedrock. 100% free, no signup!",
    keywords: "free minecraft nickname generator, minecraft usernames, mc name generator, free minecraft names",
  },
  valorant: {
    title: "Free Valorant Nickname Generator - AI Riot ID Names",
    description: "Generate FREE unlimited Valorant nicknames with AI. Find tactical, competitive Riot IDs. No signup required!",
    keywords: "free valorant nickname generator, valorant usernames, riot id generator, free valorant names",
  },
  "genshin-impact": {
    title: "Free Genshin Impact Nickname Generator - AI Fantasy Names",
    description: "Generate FREE unlimited Genshin Impact nicknames with AI. Find magical, anime-inspired usernames. 100% free!",
    keywords: "free genshin nickname generator, genshin impact usernames, genshin name generator, free genshin names",
  },
  "call-of-duty": {
    title: "Free Call of Duty Nickname Generator - AI Gamer Tags",
    description: "Generate FREE unlimited CoD nicknames with AI. Find tactical military-style names for Warzone. No signup!",
    keywords: "free cod nickname generator, call of duty usernames, warzone names, free cod name generator",
  },
  "apex-legends": {
    title: "Free Apex Legends Nickname Generator - AI Champion Names",
    description: "Generate FREE unlimited Apex Legends nicknames with AI. Find champion-worthy battle royale names. 100% free!",
    keywords: "free apex nickname generator, apex legends usernames, apex name generator, free apex names",
  },
  roblox: {
    title: "Free Roblox Nickname Generator - AI Display Names",
    description: "Generate FREE unlimited Roblox nicknames with AI. Find cool, creative display names for your avatar. No signup!",
    keywords: "free roblox nickname generator, roblox usernames, roblox display names, free roblox name generator",
  },
};

// Generate metadata for SEO
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { game } = await params;
  const seoData = gameSeoData[game];

  if (!seoData) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    alternates: {
      canonical: `https://nicknamegeneratorforgames.top/games/${game}`,
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
    },
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { game } = await params;
  const subCategory = getSubCategoryBySlug("games", game);
  const category = getCategoryBySlug("games")!;

  if (!subCategory) {
    notFound();
  }

  const seoData = gameSeoData[game];

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
            <Link href="/games" className="hover:text-white transition-colors">
              Gaming Nicknames
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-neon-purple">{subCategory.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-neon-purple/10 border border-neon-purple/20 text-4xl">
                  {subCategory.icon}
                </div>
                <div>
                  <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
                    {subCategory.name} Nicknames
                  </h1>
                  <p className="text-gray-400 mt-2">
                    Generate unique usernames for {subCategory.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Games */}
        <section className="py-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <span className="text-sm text-gray-500 flex-shrink-0">Other games:</span>
              {category.subCategories
                ?.filter((sub) => sub.slug !== game)
                .map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/games/${sub.slug}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 hover:text-white transition-all flex-shrink-0"
                  >
                    <span>{sub.icon}</span>
                    <span>{sub.name}</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Random Nicknames */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RandomGenerator
              category={game}
              color="purple"
              title={`Random ${subCategory.name} Nicknames`}
            />
          </div>
        </section>

        {/* AI Generator */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-white text-center mb-8">
              Generate Custom {subCategory.name} Nicknames
            </h2>
            <Generator />
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-invert prose-gray max-w-none">
              <h2 className="font-display text-2xl text-white mb-4">
                About {subCategory.name} Nicknames
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Looking for the perfect {subCategory.name} nickname? Our AI-powered generator
                creates unique, memorable usernames specifically tailored for {subCategory.name}
                players. Whether youre looking for something cool, funny, intimidating, or
                creative, weve got you covered.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                A great gaming nickname can make you stand out in the community, be memorable
                to teammates and opponents alike, and express your gaming personality. Our
                generator takes into account popular {subCategory.name} themes, characters,
                and gaming culture to create names that feel authentic.
              </p>

              <h3 className="font-display text-xl text-white mt-8 mb-4">
                Tips for Choosing Your {subCategory.name} Nickname
              </h3>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Keep it memorable and easy to pronounce</li>
                <li>Avoid numbers and special characters when possible</li>
                <li>Consider your main character or playstyle</li>
                <li>Make sure its not already taken on the platform</li>
                <li>Choose something youll be happy with long-term</li>
              </ul>

              <h3 className="font-display text-xl text-white mt-8 mb-4">
                How to Use These Nicknames
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Simply click on any nickname to copy it to your clipboard. Then paste it
                when creating your account or changing your display name. If a name is taken,
                try adding subtle variations or use the Refresh button to generate new options.
              </p>
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
            name: seoData?.title || `${subCategory.name} Nicknames`,
            description: seoData?.description || `Generate unique ${subCategory.name} nicknames`,
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
                  name: "Gaming Nicknames",
                  item: "/games",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: `${subCategory.name} Nicknames`,
                  item: `/games/${game}`,
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}

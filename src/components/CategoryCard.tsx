import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
  showSubcategories?: boolean;
}

const colorClasses = {
  pink: "from-neon-pink/10 via-transparent to-transparent hover:from-neon-pink/20 border-neon-pink/20 hover:border-neon-pink/40 hover:shadow-neon-pink",
  purple: "from-neon-purple/10 via-transparent to-transparent hover:from-neon-purple/20 border-neon-purple/20 hover:border-neon-purple/40 hover:shadow-neon-purple",
  cyan: "from-neon-cyan/10 via-transparent to-transparent hover:from-neon-cyan/20 border-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-neon-cyan",
  blue: "from-neon-blue/10 via-transparent to-transparent hover:from-neon-blue/20 border-neon-blue/20 hover:border-neon-blue/40 hover:shadow-neon-blue",
  green: "from-neon-green/10 via-transparent to-transparent hover:from-neon-green/20 border-neon-green/20 hover:border-neon-green/40 hover:shadow-neon-green",
  yellow: "from-neon-yellow/10 via-transparent to-transparent hover:from-neon-yellow/20 border-neon-yellow/20 hover:border-neon-yellow/40 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]",
};

const iconBgClasses = {
  pink: "bg-neon-pink/20",
  purple: "bg-neon-purple/20",
  cyan: "bg-neon-cyan/20",
  blue: "bg-neon-blue/20",
  green: "bg-neon-green/20",
  yellow: "bg-neon-yellow/20",
};

export default function CategoryCard({ category, showSubcategories = false }: CategoryCardProps) {
  return (
    <Link href={`/${category.slug}`}>
      <article
        className={`group relative h-full p-6 rounded-2xl bg-gradient-to-br ${colorClasses[category.color]} border backdrop-blur-sm transition-all duration-300 card-glow overflow-hidden`}
      >
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl ${iconBgClasses[category.color]} mb-4 text-3xl`}>
          {category.icon}
        </div>

        {/* Content */}
        <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:translate-x-1 transition-transform">
          {category.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {category.description}
        </p>

        {/* Subcategories preview */}
        {showSubcategories && category.subCategories && (
          <div className="flex flex-wrap gap-2 mb-4">
            {category.subCategories.slice(0, 3).map((sub) => (
              <span
                key={sub.slug}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300"
              >
                {sub.icon} {sub.name}
              </span>
            ))}
            {category.subCategories.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400">
                +{category.subCategories.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Arrow */}
        <div className="flex items-center gap-1 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
          Explore
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Decorative gradient orb */}
        <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </article>
    </Link>
  );
}

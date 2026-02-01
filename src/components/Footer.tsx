import Link from "next/link";
import { Heart, Github, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display font-bold text-2xl">
                <span className="gradient-text">Nick</span>
                <span className="text-white">Gen</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Find the perfect nickname for any occasion. Gaming, relationships, or just for fun.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/games" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">Gaming Nicknames</Link></li>
              <li><Link href="/boyfriend" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">Boyfriend Nicknames</Link></li>
              <li><Link href="/girlfriend" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">Girlfriend Nicknames</Link></li>
              <li><Link href="/cute" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">Cute Nicknames</Link></li>
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">More</h3>
            <ul className="space-y-2">
              <li><Link href="/cool" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">Cool Nicknames</Link></li>
              <li><Link href="/funny" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">Funny Nicknames</Link></li>
              <li><Link href="/games/fortnite" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">Fortnite Nicknames</Link></li>
              <li><Link href="/games/valorant" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">Valorant Nicknames</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/#generator" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">AI Generator</Link></li>
              <li><Link href="/#faq" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-neon-purple transition-colors">About</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-neon-pink" /> in {currentYear}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/seazon000" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/WRCoding" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

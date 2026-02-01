"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface NicknameCardProps {
  nickname: string;
  color?: "pink" | "purple" | "cyan" | "blue" | "green" | "yellow";
  showCopyButton?: boolean;
}

const colorClasses = {
  pink: "from-neon-pink/20 to-transparent hover:shadow-neon-pink border-neon-pink/30",
  purple: "from-neon-purple/20 to-transparent hover:shadow-neon-purple border-neon-purple/30",
  cyan: "from-neon-cyan/20 to-transparent hover:shadow-neon-cyan border-neon-cyan/30",
  blue: "from-neon-blue/20 to-transparent hover:shadow-neon-blue border-neon-blue/30",
  green: "from-neon-green/20 to-transparent hover:shadow-neon-green border-neon-green/30",
  yellow: "from-neon-yellow/20 to-transparent hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] border-neon-yellow/30",
};

const textColorClasses = {
  pink: "text-neon-pink",
  purple: "text-neon-purple",
  cyan: "text-neon-cyan",
  blue: "text-neon-blue",
  green: "text-neon-green",
  yellow: "text-neon-yellow",
};

export default function NicknameCard({
  nickname,
  color = "purple",
  showCopyButton = true,
}: NicknameCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(nickname);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className={`group relative px-5 py-4 rounded-xl bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-sm transition-all duration-300 card-glow cursor-pointer`}
      onClick={handleCopy}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-display font-semibold text-white text-lg truncate">
          {nickname}
        </span>
        {showCopyButton && (
          <button
            className={`flex-shrink-0 p-2 rounded-lg transition-all ${
              copied
                ? "bg-neon-green/20 text-neon-green"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
            aria-label={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* Copied tooltip */}
      {copied && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-neon-green text-black text-xs font-medium animate-fade-in">
          Copied!
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { RefreshCw, Loader2 } from "lucide-react";
import { getRandomNicknames } from "@/lib/data";
import NicknameCard from "./NicknameCard";

interface RandomGeneratorProps {
  category: string;
  color?: "pink" | "purple" | "cyan" | "blue" | "green" | "yellow";
  title?: string;
}

export default function RandomGenerator({
  category,
  color = "purple",
  title = "Random Nicknames",
}: RandomGeneratorProps) {
  // Start with mock data for initial render
  const [nicknames, setNicknames] = useState<string[]>(() => getRandomNicknames(category, 6));
  const [isLoading, setIsLoading] = useState(false);

  const fetchNicknames = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          count: 6,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.nicknames && data.nicknames.length > 0) {
          setNicknames(data.nicknames);
        }
      }
    } catch (error) {
      console.error("Failed to fetch nicknames:", error);
      // Keep using the current nicknames on error
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  // Fetch AI-generated nicknames on mount
  useEffect(() => {
    fetchNicknames();
  }, [fetchNicknames]);

  const handleRefresh = async () => {
    await fetchNicknames();
  };

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-bold text-2xl text-white">{title}</h2>
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all disabled:opacity-50 group"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          )}
          <span>Refresh</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {nicknames.map((nickname, index) => (
          <div
            key={`${nickname}-${index}`}
            className={`animate-fade-in`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <NicknameCard nickname={nickname} color={color} />
          </div>
        ))}
      </div>
    </section>
  );
}

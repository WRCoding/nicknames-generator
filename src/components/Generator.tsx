"use client";

import { useState } from "react";
import { Sparkles, Loader2, RefreshCw } from "lucide-react";
import NicknameCard from "./NicknameCard";

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [nicknames, setNicknames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          count: 10,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate nicknames");
      }

      const data = await response.json();
      setNicknames(data.nicknames || []);
      setHasGenerated(true);
    } catch (err) {
      console.error("Generation error:", err);
      setError("Failed to generate nicknames. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = async () => {
    await handleGenerate();
  };

  return (
    <section id="generator" className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Generator input */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-2xl blur-xl opacity-20" />
          <div className="relative glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  placeholder="Describe your ideal nickname... (e.g., 'cool gaming name with dragon theme')"
                  className="w-full px-5 py-4 bg-surface-light rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Sparkles className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <button
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                className="btn-neon px-8 py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick suggestions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-gray-500">Try:</span>
              {["cute girlfriend name", "cool gaming tag", "funny username", "boyfriend nickname"].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setPrompt(suggestion)}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center">
            {error}
          </div>
        )}

        {/* Results */}
        {hasGenerated && nicknames.length > 0 && (
          <div className="mt-8 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-lg text-white">
                Generated Nicknames
              </h3>
              <button
                onClick={handleRegenerate}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                Regenerate
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nicknames.map((nickname, index) => (
                <div
                  key={`${nickname}-${index}`}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <NicknameCard nickname={nickname} color="purple" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

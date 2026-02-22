"use client";

import { useState } from "react";
import StoryForm from "@/components/StoryForm";
import StoryDisplay from "@/components/StoryDisplay";
import type { StoryPreferences, StoryResponse } from "@/types/story";

export default function Home() {
  const [storyResult, setStoryResult] = useState<StoryResponse | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (prefs: StoryPreferences) => {
    setError(null);
    setStoryResult(null);
    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prefs),
      });

      const data: StoryResponse = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setStoryResult(data);
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setStoryResult(null);
    setError(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Starry background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[10%] top-[15%] h-1 w-1 animate-twinkle rounded-full bg-warm-gold/80" />
        <div className="absolute left-[20%] top-[25%] h-1 w-1 animate-twinkle rounded-full bg-white/70" style={{ animationDelay: "0.5s" }} />
        <div className="absolute left-[75%] top-[20%] h-1 w-1 animate-twinkle rounded-full bg-warm-gold/60" style={{ animationDelay: "1s" }} />
        <div className="absolute left-[85%] top-[35%] h-1 w-1 animate-twinkle rounded-full bg-white/50" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-[5%] top-[60%] h-1 w-1 animate-twinkle rounded-full bg-warm-gold/70" style={{ animationDelay: "0.3s" }} />
        <div className="absolute left-[90%] top-[70%] h-1 w-1 animate-twinkle rounded-full bg-white/60" style={{ animationDelay: "2s" }} />
        <div className="absolute left-[50%] top-[10%] h-1 w-1 animate-twinkle rounded-full bg-warm-gold/50" style={{ animationDelay: "0.8s" }} />
      </div>

      {/* Moon */}
      <div className="absolute right-8 top-12 h-24 w-24 rounded-full bg-gradient-to-br from-warm-cream/20 to-warm-gold/10 blur-sm md:right-16 md:top-16 md:h-32 md:w-32" />

      <main className="relative mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-10 text-center">
          <h1 className="font-display animate-float text-4xl font-bold tracking-tight text-warm-cream sm:text-5xl md:text-6xl">
            Bedtime Stories
          </h1>
          <p className="mt-3 text-lg text-warm-cream/80">
            Create a personalized story. Pick the age, theme, humour, and calmness.
          </p>
        </header>

        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200"
          >
            {error}
          </div>
        )}

        {storyResult?.story ? (
          <StoryDisplay
            story={storyResult.story}
            title={storyResult.title}
            onReset={handleReset}
          />
        ) : (
          <StoryForm onSubmit={handleSubmit} isGenerating={isGenerating} />
        )}
      </main>
    </div>
  );
}

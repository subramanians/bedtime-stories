"use client";

import { useState } from "react";
import StoryForm from "@/components/StoryForm";
import StoryDisplay from "@/components/StoryDisplay";
import type { StoryPreferences, StoryResponse } from "@/types/story";

export type BackgroundTheme = "night" | "sunset" | "forest";

const THEMES: { id: BackgroundTheme; label: string }[] = [
  { id: "night", label: "Night Sky" },
  { id: "sunset", label: "Sunset" },
  { id: "forest", label: "Forest" },
];

export default function Home() {
  const [storyResult, setStoryResult] = useState<StoryResponse | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundTheme>("night");

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

  const themeConfig = {
    night: {
      bg: "bg-[#0f0d24]",
      moon: "from-warm-cream/20 to-warm-gold/10",
    },
    sunset: {
      bg: "bg-gradient-to-b from-[#2d1b4e] via-[#7b2d6e] to-[#c95d4a]",
      moon: "from-amber-100/30 to-orange-200/20",
    },
    forest: {
      bg: "bg-gradient-to-b from-[#0d1f0d] via-[#1a3d1a] to-[#1e3d2e]",
      moon: "from-emerald-200/25 to-lime-300/15",
    },
  }[backgroundTheme];

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${themeConfig.bg}`}>
      {/* Starry / accent background */}
      <div className="pointer-events-none fixed inset-0">
        <div className={`absolute left-[10%] top-[15%] h-1 w-1 animate-twinkle rounded-full ${backgroundTheme === "night" ? "bg-warm-gold/80" : backgroundTheme === "sunset" ? "bg-amber-200/90" : "bg-emerald-300/80"}`} />
        <div className={`absolute left-[20%] top-[25%] h-1 w-1 animate-twinkle rounded-full ${backgroundTheme === "night" ? "bg-white/70" : backgroundTheme === "sunset" ? "bg-orange-100/80" : "bg-lime-200/60"}`} style={{ animationDelay: "0.5s" }} />
        <div className={`absolute left-[75%] top-[20%] h-1 w-1 animate-twinkle rounded-full ${backgroundTheme === "night" ? "bg-warm-gold/60" : backgroundTheme === "sunset" ? "bg-amber-200/70" : "bg-emerald-300/70"}`} style={{ animationDelay: "1s" }} />
        <div className={`absolute left-[85%] top-[35%] h-1 w-1 animate-twinkle rounded-full ${backgroundTheme === "night" ? "bg-white/50" : backgroundTheme === "sunset" ? "bg-orange-100/60" : "bg-lime-200/50"}`} style={{ animationDelay: "1.5s" }} />
        <div className={`absolute left-[5%] top-[60%] h-1 w-1 animate-twinkle rounded-full ${backgroundTheme === "night" ? "bg-warm-gold/70" : backgroundTheme === "sunset" ? "bg-amber-200/80" : "bg-emerald-300/70"}`} style={{ animationDelay: "0.3s" }} />
        <div className={`absolute left-[90%] top-[70%] h-1 w-1 animate-twinkle rounded-full ${backgroundTheme === "night" ? "bg-white/60" : backgroundTheme === "sunset" ? "bg-orange-100/70" : "bg-lime-200/60"}`} style={{ animationDelay: "2s" }} />
        <div className={`absolute left-[50%] top-[10%] h-1 w-1 animate-twinkle rounded-full ${backgroundTheme === "night" ? "bg-warm-gold/50" : backgroundTheme === "sunset" ? "bg-amber-200/60" : "bg-emerald-300/60"}`} style={{ animationDelay: "0.8s" }} />
      </div>

      {/* Moon / focal glow */}
      <div className={`absolute right-8 top-12 h-24 w-24 rounded-full bg-gradient-to-br blur-sm md:right-16 md:top-16 md:h-32 md:w-32 ${themeConfig.moon}`} />

      {/* Background theme selector */}
      <div className="fixed right-4 top-4 z-10 sm:right-6 sm:top-6">
        <fieldset className="rounded-xl border border-white/20 bg-black/20 px-3 py-2 backdrop-blur-sm">
          <legend className="px-1 text-xs font-medium text-warm-cream/90">Background</legend>
          <div className="flex gap-2">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => setBackgroundTheme(theme.id)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  backgroundTheme === theme.id
                    ? "bg-warm-gold text-night-950"
                    : "text-warm-cream/90 hover:bg-white/10"
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

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

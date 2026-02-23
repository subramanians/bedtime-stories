"use client";

import { useState } from "react";
import { COUNTRIES } from "@/data/folktales";
import type { StoryPreferences } from "@/types/story";

const THEMES = [
  "Adventure",
  "Animals",
  "Space",
  "Under the sea",
  "Magic & fantasy",
  "Friendship",
  "Nature",
  "Dragons",
  "Pirates",
  "Fairies",
  "Dinosaurs",
  "Robots",
  "Superheroes",
  "Mystery",
];

const GENDERS = ["Any", "Boy", "Girl", "Non-binary"];

const inputBase =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-warm-cream placeholder-white/40 transition focus:border-warm-gold focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-warm-gold/30";
const labelBase = "mb-1.5 block text-sm font-medium text-warm-cream/95";
const sectionTitle = "text-base font-semibold text-warm-gold";

type Props = {
  onSubmit: (prefs: StoryPreferences) => void;
  isGenerating: boolean;
};

export default function StoryForm({ onSubmit, isGenerating }: Props) {
  const [age, setAge] = useState(5);
  const [gender, setGender] = useState("Any");
  const [theme, setTheme] = useState("Adventure");
  const [humourLevel, setHumourLevel] = useState(5);
  const [calmnessLevel, setCalmnessLevel] = useState(7);
  const [storyLength, setStoryLength] = useState<"short" | "medium" | "long">("medium");
  const [storySource, setStorySource] = useState<"ai" | "folktale">("ai");
  const [country, setCountry] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");

  const isFolktale = storySource === "folktale";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFolktale && !country) return;
    onSubmit({
      age,
      gender: isFolktale ? "Any" : gender,
      theme,
      humourLevel,
      calmnessLevel,
      storyLength,
      storySource,
      country: isFolktale ? country : undefined,
      characterName: isFolktale ? undefined : characterName.trim() || undefined,
      customPrompt: isFolktale ? undefined : customPrompt.trim() || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Child's age - always shown */}
      <section>
        <h2 className={`${sectionTitle} mb-4`}>For the child</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className={labelBase}>
              Age (1–12)
            </label>
            <input
              id="age"
              type="number"
              min={1}
              max={12}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className={inputBase}
            />
          </div>
          {!isFolktale && (
            <div>
              <label htmlFor="gender" className={labelBase}>
                Main character
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={inputBase}
              >
                {GENDERS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        {!isFolktale && (
          <div className="mt-4">
            <label htmlFor="characterName" className={labelBase}>
              Character name (optional)
            </label>
            <input
              id="characterName"
              type="text"
              placeholder="e.g. Luna, Max"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              className={inputBase}
            />
          </div>
        )}
      </section>

      {/* Story type */}
      <section>
        <h2 className={`${sectionTitle} mb-4`}>Story type</h2>
        <div className="flex flex-wrap gap-3">
          <label
            className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 transition ${
              storySource === "ai"
                ? "border-warm-gold/50 bg-warm-gold/10 text-warm-gold"
                : "border-white/15 bg-white/5 text-warm-cream/80 hover:border-white/25"
            }`}
          >
            <input
              type="radio"
              name="storySource"
              value="ai"
              checked={storySource === "ai"}
              onChange={() => setStorySource("ai")}
              className="accent-warm-gold"
            />
            <span className="font-medium">AI generated</span>
          </label>
          <label
            className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 transition ${
              storySource === "folktale"
                ? "border-warm-gold/50 bg-warm-gold/10 text-warm-gold"
                : "border-white/15 bg-white/5 text-warm-cream/80 hover:border-white/25"
            }`}
          >
            <input
              type="radio"
              name="storySource"
              value="folktale"
              checked={storySource === "folktale"}
              onChange={() => setStorySource("folktale")}
              className="accent-warm-gold"
            />
            <span className="font-medium">Classic folktale</span>
          </label>
        </div>
      </section>

      {/* Folktale: country only */}
      {isFolktale && (
        <section>
          <h2 className={`${sectionTitle} mb-4`}>Choose a country</h2>
          <p className="mb-3 text-sm text-warm-cream/70">
            Real traditional stories from around the world — Panchatantra, Aesop&apos;s Fables, and more.
          </p>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required={isFolktale}
            className={inputBase}
          >
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </section>
      )}

      {/* AI-only options */}
      {!isFolktale && (
        <>
          <section>
            <h2 className={`${sectionTitle} mb-4`}>Story details</h2>
            <div>
              <label htmlFor="theme" className={labelBase}>
                Theme
              </label>
              <select
                id="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className={inputBase}
              >
                {THEMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className={labelBase}>Length</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {(["short", "medium", "long"] as const).map((len) => (
                  <label
                    key={len}
                    className={`cursor-pointer rounded-lg border px-3 py-2 text-sm transition ${
                      storyLength === len
                        ? "border-warm-gold/50 bg-warm-gold/10 text-warm-gold"
                        : "border-white/15 bg-white/5 text-warm-cream/80 hover:border-white/25"
                    }`}
                  >
                    <input
                      type="radio"
                      name="length"
                      value={len}
                      checked={storyLength === len}
                      onChange={() => setStoryLength(len)}
                      className="sr-only"
                    />
                    {len.charAt(0).toUpperCase() + len.slice(1)}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="customPrompt" className={labelBase}>
                Extra ideas (optional)
              </label>
              <textarea
                id="customPrompt"
                rows={2}
                placeholder="e.g. Include a friendly dragon and a hidden treasure"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className={`${inputBase} resize-none`}
              />
            </div>
          </section>

          <section>
            <h2 className={`${sectionTitle} mb-4`}>Tone</h2>
            <div className="space-y-5">
              <div>
                <div className="mb-2 flex justify-between">
                  <label htmlFor="humour" className={labelBase}>
                    Humour
                  </label>
                  <span className="text-sm text-warm-cream/60">{humourLevel}/10</span>
                </div>
                <input
                  id="humour"
                  type="range"
                  min={0}
                  max={10}
                  value={humourLevel}
                  onChange={(e) => setHumourLevel(Number(e.target.value))}
                  className="h-2.5 w-full appearance-none rounded-full bg-white/15 accent-warm-gold"
                />
              </div>
              <div>
                <div className="mb-2 flex justify-between">
                  <label htmlFor="calmness" className={labelBase}>
                    Calmness
                  </label>
                  <span className="text-sm text-warm-cream/60">{calmnessLevel}/10</span>
                </div>
                <input
                  id="calmness"
                  type="range"
                  min={0}
                  max={10}
                  value={calmnessLevel}
                  onChange={(e) => setCalmnessLevel(Number(e.target.value))}
                  className="h-2.5 w-full appearance-none rounded-full bg-white/15 accent-warm-gold"
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isGenerating}
        className="w-full rounded-xl bg-warm-gold px-6 py-4 font-display text-lg font-semibold text-night-950 shadow-lg shadow-warm-gold/20 transition hover:bg-warm-amber focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-night-950 disabled:opacity-60 disabled:hover:bg-warm-gold"
      >
        {isGenerating
          ? "Creating your story..."
          : isFolktale
            ? "Get a classic folktale"
            : "Create my bedtime story"}
      </button>
    </form>
  );
}

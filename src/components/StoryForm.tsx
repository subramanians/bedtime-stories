"use client";

import { useState } from "react";
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
  const [characterName, setCharacterName] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      age,
      gender,
      theme,
      humourLevel,
      calmnessLevel,
      storyLength,
      characterName: characterName.trim() || undefined,
      customPrompt: customPrompt.trim() || undefined,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl bg-night-900/80 p-6 shadow-xl backdrop-blur sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className="mb-2 block text-sm font-medium text-warm-gold">
            Child&apos;s age
          </label>
          <input
            id="age"
            type="number"
            min={1}
            max={12}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full rounded-lg border border-night-700 bg-night-800 px-4 py-2.5 text-warm-cream placeholder-night-400 focus:border-warm-gold focus:outline-none focus:ring-1 focus:ring-warm-gold"
          />
        </div>

        <div>
          <label htmlFor="gender" className="mb-2 block text-sm font-medium text-warm-gold">
            Main character
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full rounded-lg border border-night-700 bg-night-800 px-4 py-2.5 text-warm-cream focus:border-warm-gold focus:outline-none focus:ring-1 focus:ring-warm-gold"
          >
            {GENDERS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="characterName" className="mb-2 block text-sm font-medium text-warm-gold">
          Character name (optional)
        </label>
        <input
          id="characterName"
          type="text"
          placeholder="e.g. Luna, Max"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          className="w-full rounded-lg border border-night-700 bg-night-800 px-4 py-2.5 text-warm-cream placeholder-night-400 focus:border-warm-gold focus:outline-none focus:ring-1 focus:ring-warm-gold"
        />
      </div>

      <div>
        <label htmlFor="theme" className="mb-2 block text-sm font-medium text-warm-gold">
          Theme
        </label>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full rounded-lg border border-night-700 bg-night-800 px-4 py-2.5 text-warm-cream focus:border-warm-gold focus:outline-none focus:ring-1 focus:ring-warm-gold"
        >
          {THEMES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="mb-2 flex justify-between">
          <label htmlFor="humour" className="text-sm font-medium text-warm-gold">
            Level of humour
          </label>
          <span className="text-night-300">{humourLevel}/10</span>
        </div>
        <input
          id="humour"
          type="range"
          min={0}
          max={10}
          value={humourLevel}
          onChange={(e) => setHumourLevel(Number(e.target.value))}
          className="h-2 w-full appearance-none rounded-full bg-night-700 accent-warm-gold"
        />
      </div>

      <div>
        <div className="mb-2 flex justify-between">
          <label htmlFor="calmness" className="text-sm font-medium text-warm-gold">
            Level of calmness
          </label>
          <span className="text-night-300">{calmnessLevel}/10</span>
        </div>
        <input
          id="calmness"
          type="range"
          min={0}
          max={10}
          value={calmnessLevel}
          onChange={(e) => setCalmnessLevel(Number(e.target.value))}
          className="h-2 w-full appearance-none rounded-full bg-night-700 accent-warm-gold"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-warm-gold">
          Story length
        </label>
        <div className="flex gap-3">
          {(["short", "medium", "long"] as const).map((len) => (
            <label key={len} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="length"
                value={len}
                checked={storyLength === len}
                onChange={() => setStoryLength(len)}
                className="accent-warm-gold"
              />
              <span className="capitalize text-warm-cream/90">{len}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="customPrompt" className="mb-2 block text-sm font-medium text-warm-gold">
          Extra ideas (optional)
        </label>
        <textarea
          id="customPrompt"
          rows={2}
          placeholder="e.g. Include a friendly dragon and a hidden treasure"
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          className="w-full resize-none rounded-lg border border-night-700 bg-night-800 px-4 py-2.5 text-warm-cream placeholder-night-400 focus:border-warm-gold focus:outline-none focus:ring-1 focus:ring-warm-gold"
        />
      </div>

      <button
        type="submit"
        disabled={isGenerating}
        className="w-full rounded-xl bg-warm-gold px-6 py-3 font-display text-lg font-semibold text-night-950 transition hover:bg-warm-amber focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-night-950 disabled:opacity-60"
      >
        {isGenerating ? "Creating your story..." : "Create my bedtime story"}
      </button>
    </form>
  );
}

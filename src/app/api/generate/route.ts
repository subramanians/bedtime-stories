import { NextResponse } from "next/server";
import OpenAI from "openai";
import type { StoryPreferences } from "@/types/story";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

function buildPrompt(prefs: StoryPreferences): string {
  const lengthWords =
    prefs.storyLength === "short"
      ? "about 150–250 words"
      : prefs.storyLength === "medium"
        ? "about 350–500 words"
        : "about 550–750 words";

  const humourDesc =
    prefs.humourLevel <= 2
      ? "very gentle, almost no jokes"
      : prefs.humourLevel <= 5
        ? "light, occasional gentle humour"
        : prefs.humourLevel <= 8
          ? "warm and often funny"
          : "playful and silly";

  const calmDesc =
    prefs.calmnessLevel <= 2
      ? "can have mild tension or excitement"
      : prefs.calmnessLevel <= 5
        ? "balanced, some gentle excitement"
        : prefs.calmnessLevel <= 8
          ? "very soothing and peaceful"
          : "extremely calm and relaxing, perfect for falling asleep";

  const character =
    prefs.characterName ||
    (prefs.gender === "Boy"
      ? "a young boy"
      : prefs.gender === "Girl"
        ? "a young girl"
        : prefs.gender === "Non-binary"
          ? "a young child"
          : "a child");

  let prompt = `Write a bedtime story for a ${prefs.age}-year-old. `;
  prompt += `The main character should be ${character}. `;
  prompt += `Theme: ${prefs.theme}. `;
  prompt += `Tone: ${humourDesc} humour; ${calmDesc}. `;
  prompt += `Length: ${lengthWords}. `;
  prompt += `Use simple, age-appropriate language. End with a peaceful, reassuring conclusion. `;
  if (prefs.customPrompt) {
    prompt += `Also include: ${prefs.customPrompt}. `;
  }
  prompt += `Respond with only the story text, no title or meta. Use paragraphs separated by blank lines.`;

  return prompt;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as StoryPreferences;
    const { age, gender, theme, humourLevel, calmnessLevel, storyLength } = body;

    if (
      typeof age !== "number" ||
      !gender ||
      !theme ||
      typeof humourLevel !== "number" ||
      typeof calmnessLevel !== "number" ||
      !["short", "medium", "long"].includes(storyLength)
    ) {
      return NextResponse.json(
        { error: "Missing or invalid preferences" },
        { status: 400 }
      );
    }

    if (!openai) {
      // Demo story when no API key is set
      const demoStory = `Once upon a time, in a land where ${theme.toLowerCase()} filled the air, there lived a brave little child. The stars twinkled above like friendly eyes, and the night was soft and kind.

Every evening, the child would close their eyes and imagine wonderful adventures—sometimes gentle and calm, sometimes with a little sparkle of fun. Tonight was no different. Under a blanket as cozy as a cloud, they drifted into a dream where everything was peaceful and good.

And so, with a heart full of warmth and a mind full of gentle thoughts, the child fell asleep, safe and loved. The end.`;

      return NextResponse.json({
        story: demoStory,
        title: "A Cozy Goodnight",
      });
    }

    const prompt = buildPrompt(body);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a kind, skilled writer of bedtime stories for children. You write in a warm, age-appropriate way. You never include anything scary or upsetting. You output only the story text, in clear paragraphs.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 1200,
      temperature: 0.8,
    });

    const story =
      completion.choices[0]?.message?.content?.trim() ||
      "Something went wrong. Please try again.";

    return NextResponse.json({ story });
  } catch (err) {
    console.error("Generate error:", err);
    return NextResponse.json(
      { error: "Failed to generate story. Please try again." },
      { status: 500 }
    );
  }
}

export type StoryPreferences = {
  age: number;
  gender: string;
  theme: string;
  humourLevel: number;
  calmnessLevel: number;
  storyLength: "short" | "medium" | "long";
  characterName?: string;
  customPrompt?: string;
};

export type StoryResponse = {
  story: string;
  title?: string;
  error?: string;
};

/**
 * Curated folktales from around the world (public domain).
 * These are traditional stories, not AI-generated.
 */

export type Folktale = {
  id: string;
  title: string;
  country: string;
  story: string;
  ageMin: number;
  ageMax: number;
};

export const FOLKTALES: Folktale[] = [
  // India - Panchatantra
  {
    id: "panchatantra-monkey-crocodile",
    title: "The Monkey and the Crocodile",
    country: "India",
    story: `A monkey lived in a rose-apple tree by a river. He made friends with a crocodile who came to eat the fruit. The crocodile took fruit home to his wife.

The crocodile's wife wanted to eat the monkey's heart. The crocodile was sad but agreed to bring the monkey. On the way across the river, the crocodile told the truth.

The monkey said, "Oh! I left my heart in the tree. Let us go back and get it." The crocodile swam back. The monkey leaped to the tree and said, "My heart is with me. You cannot trick me."

The crocodile left, ashamed. The wise stay safe by using their wits.`,
    ageMin: 4,
    ageMax: 12,
  },
  {
    id: "panchatantra-lion-mouse",
    title: "The Lion and the Mouse",
    country: "India",
    story: `A lion was sleeping in the forest. A little mouse ran over his nose. The lion woke and caught the mouse. "Please let me go," said the mouse. "One day I may help you."

The lion laughed but let the mouse go. Soon after, hunters caught the lion in a net. The lion roared. The mouse heard him. She chewed through the ropes and set the lion free.

"No one is too small to help," said the lion. Even the little can help the great.`,
    ageMin: 3,
    ageMax: 10,
  },
  {
    id: "panchatantra-brahmin-cobra",
    title: "The Brahmin and the Cobra",
    country: "India",
    story: `A kind Brahmin found a snake frozen in the cold. He warmed it and fed it. The snake bit him. "Why?" asked the Brahmin. The snake said, "It is my nature to bite."

The Brahmin went to a wise man. The wise man said, "Do not warm a snake. It will bite you." The Brahmin understood: kindness to the cruel brings harm.

We must be wise about whom we trust.`,
    ageMin: 5,
    ageMax: 12,
  },
  {
    id: "panchatantra-clever-crow",
    title: "The Clever Crow",
    country: "India",
    story: `A thirsty crow found a pitcher with a little water at the bottom. His beak could not reach it. He picked up pebbles and dropped them in, one by one. The water rose. He drank and flew away.

Where there is a will, there is a way. The crow did not give up. He thought and found an answer.`,
    ageMin: 3,
    ageMax: 9,
  },
  // Greece - Aesop's Fables
  {
    id: "aesop-tortoise-hare",
    title: "The Tortoise and the Hare",
    country: "Greece",
    story: `A hare mocked a tortoise for being slow. The tortoise said, "Let us run a race." The hare agreed and soon ran far ahead. He lay down to nap, sure he would win.

The tortoise kept walking, step by step. When the hare woke, the tortoise had reached the end. Slow and steady wins the race.`,
    ageMin: 3,
    ageMax: 10,
  },
  {
    id: "aesop-ant-grasshopper",
    title: "The Ant and the Grasshopper",
    country: "Greece",
    story: `In summer, the ant stored food. The grasshopper played and sang. "Why work?" he asked. "Winter is far away."

Winter came. The grasshopper had nothing. He asked the ant for food. The ant said, "You played while I worked. Now you must learn." It is wise to prepare for hard times.`,
    ageMin: 4,
    ageMax: 11,
  },
  {
    id: "aesop-boy-wolf",
    title: "The Boy Who Cried Wolf",
    country: "Greece",
    story: `A boy watched sheep. For fun, he shouted, "Wolf! Wolf!" The villagers ran to help. There was no wolf. They went home, cross.

He did it again. Again they came. Again, no wolf. Then a real wolf came. The boy cried, "Wolf! Wolf!" No one came. They thought he was joking. The wolf took the sheep.

Those who lie are not believed when they tell the truth.`,
    ageMin: 4,
    ageMax: 11,
  },
  // China
  {
    id: "china-monkey-king-peach",
    title: "The Monkey King and the Peach",
    country: "China",
    story: `Long ago, a monkey lived in the mountains. He ate a magical peach and became strong and wise. He learned to help others. He protected the young monkeys from harm.

One day, a fierce beast came. The Monkey King stood brave. He used his wits and courage. The beast left. The monkeys were safe. Leadership means caring for others.`,
    ageMin: 4,
    ageMax: 10,
  },
  {
    id: "china-magic-paintbrush",
    title: "Ma Liang and the Magic Paintbrush",
    country: "China",
    story: `Ma Liang was poor but loved to paint. A wise man gave him a magic brush. Whatever he painted became real. He painted food for the hungry and tools for workers.

A greedy king took the brush. He painted gold, but it turned to snakes. Ma Liang painted a sea and a boat. The king sailed away. The brush returned to Ma Liang. He used it only for good. Use gifts to help others.`,
    ageMin: 5,
    ageMax: 12,
  },
];

export function getFolktalesByCountry(country: string): Folktale[] {
  return FOLKTALES.filter((f) => f.country === country);
}

export function getRandomFolktaleForAge(
  country: string,
  age: number
): Folktale | null {
  const candidates = FOLKTALES.filter(
    (f) => f.country === country && age >= f.ageMin && age <= f.ageMax
  );
  if (candidates.length === 0) {
    const fallback = FOLKTALES.filter((f) => f.country === country);
    if (fallback.length === 0) return null;
    return fallback[Math.floor(Math.random() * fallback.length)];
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export const COUNTRIES = [
  { id: "India", label: "India (Panchatantra)" },
  { id: "Greece", label: "Greece (Aesop's Fables)" },
  { id: "China", label: "China" },
];

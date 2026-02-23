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
  {
    id: "panchatantra-monkey-crocodile-long",
    title: "The Monkey and the Crocodile",
    country: "India",
    story: `Long ago, on the banks of a wide river, there grew a beautiful rose-apple tree. Its branches stretched over the water, and its fruit was sweet and golden. In that tree lived a clever monkey. He spent his days eating the fruit and swinging from branch to branch.

One day, a crocodile swam up to the tree. He had come from the other side of the river and was very hungry. The monkey saw him and said, "Friend, why do you look so tired?" The crocodile said, "I have swum far and found nothing to eat." The kind monkey threw down some ripe fruit. The crocodile ate and was grateful. From that day on, they became friends.

Every day the crocodile came to eat the fruit. He took some home to his wife. She ate the sweet rose-apples and thought, "If the fruit is so delicious, the monkey who eats it every day must be even sweeter. I want to eat his heart."

The crocodile was sad. He loved his friend the monkey. But his wife insisted. "Bring me the monkey's heart, or I will not eat and I will die," she said. At last the crocodile agreed.

The next day he went to the monkey. "My wife wishes to meet you," he said. "She has prepared a feast. Please come to our home." The monkey was happy. "But how can I come? I cannot swim," he said. The crocodile said, "Climb on my back. I will carry you across the river."

The monkey climbed on. The crocodile swam. When they reached the middle of the river, he sank a little and said, "I am sorry, friend. My wife does not want to meet you. She wants to eat your heart."

The monkey was afraid, but he did not panic. He thought quickly. "Oh, what a pity!" he said. "I would have given it gladly. But I left my heart in the tree. We must go back and get it." The crocodile believed him and swam back. The monkey leaped to the tree and said, "My heart is always with me. You cannot trick a friend. Go away."

The crocodile swam away, ashamed. The wise stay safe by using their wits.`,
    ageMin: 5,
    ageMax: 12,
  },
  {
    id: "panchatantra-lion-mouse-long",
    title: "The Lion and the Mouse",
    country: "India",
    story: `In a great forest, there lived a mighty lion. He was the king of all the beasts. When he roared, the trees trembled and the animals hid. No one dared to wake him when he slept.

One hot afternoon, the lion lay down under a shady tree. He closed his eyes and soon fell asleep. A little mouse, who lived in a hole nearby, came out to play. She did not see the lion. She ran across his nose, then his paw, then his mane.

The lion woke with a roar. He opened his great mouth and caught the mouse in his paw. "How dare you disturb my sleep!" he said. The mouse shook with fear. "Please, great king," she said, "I did not mean to wake you. I was only playing. Let me go. One day I may help you."

The lion laughed. "You? Help me? You are so small. What could you ever do for me?" But he was in a good mood. He opened his paw and let the mouse go. "Run away, little one. I will not eat you today."

The mouse thanked him and ran home. The lion went back to sleep.

Days later, hunters came to the forest. They set a strong net to catch the lion. When the lion walked into it, the net closed around him. He roared and struggled, but the ropes were too strong. The hunters would come soon to take him.

The little mouse heard the lion's roar. She ran to him. "Do not worry, great king," she said. "I will help you." She began to chew the ropes. She chewed and chewed. Her teeth were small, but she did not give up. At last the ropes broke. The lion was free.

"You were right," said the lion. "No one is too small to help. I will never forget your kindness." From that day on, the lion and the mouse were friends. Even the little can help the great.`,
    ageMin: 5,
    ageMax: 12,
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
  {
    id: "aesop-tortoise-hare-long",
    title: "The Tortoise and the Hare",
    country: "Greece",
    story: `In a green meadow, there lived a hare. He was the fastest animal for miles. He could run like the wind. When he raced, no one could beat him. The hare knew this and loved to boast. "I am the fastest in the land!" he would say. "No one can catch me!"

One day he saw a tortoise walking slowly along the path. The tortoise took one small step, then another. The hare laughed. "You are so slow!" he said. "I could run to the hill and back before you take ten steps."

The tortoise did not get angry. He said quietly, "Perhaps. But let us run a race. We will start at the old oak tree and end at the river. The first to reach the river wins."

The hare could not believe it. "A race? With you? You will lose before we begin!" But the tortoise insisted. The hare agreed. "This will be easy," he thought.

The race began. The hare ran like lightning. In moments he was far ahead. He looked back. The tortoise was still at the start, plodding along. "I have plenty of time," the hare said. "I will rest under this tree. A short nap, then I will finish the race."

He lay down in the shade. The sun was warm. The hare closed his eyes and fell fast asleep.

The tortoise kept walking. Step by step. He did not stop. He did not look back. He simply walked toward the river.

Hours passed. The hare woke with a start. He leaped up and ran. But when he reached the river, the tortoise was already there. The tortoise had won.

"You see," said the tortoise. "Slow and steady wins the race." The hare hung his head. He had learned that speed alone is not enough. Slow and steady wins the race.`,
    ageMin: 5,
    ageMax: 12,
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
  {
    id: "china-magic-paintbrush-long",
    title: "Ma Liang and the Magic Paintbrush",
    country: "China",
    story: `Long ago, in a small village in China, there lived a boy named Ma Liang. He was very poor. He had no money for paper or brushes. But he loved to paint. He drew pictures in the sand with a stick. He drew on the walls with charcoal. He dreamed of having a real brush.

One night, an old man with a long white beard appeared in his dream. "You have a kind heart," said the old man. "I will give you a magic brush. Use it only for good." When Ma Liang woke, he found a beautiful brush beside him.

He painted a bird. The bird flew away. He painted a fish. The fish swam in the air, then dove into a bowl of water and came to life. Whatever Ma Liang painted became real! He was overjoyed. He painted food for the hungry villagers. He painted tools for the farmers. He painted warm clothes for the poor. Everyone was grateful.

But the wicked king heard of the magic brush. He sent his soldiers to take it. "Paint me a mountain of gold!" the king demanded. Ma Liang painted a mountain of gold. But when the king touched it, it turned into snakes. The king was furious. He threw Ma Liang into prison.

In the dungeon, Ma Liang had an idea. He asked for his brush and painted a door on the wall. The door opened. He escaped. The king chased him. Ma Liang painted a horse and rode away. The king followed on his own horse. Ma Liang painted a sea. The king's soldiers could not cross. The king demanded a boat. Ma Liang painted a boat. The king climbed in. Ma Liang painted a wind. The wind blew the boat far out to sea. The king sailed away and was never seen again.

Ma Liang returned to his village with the magic brush. He used it only for good, to help others, for the rest of his days. Use gifts to help others.`,
    ageMin: 6,
    ageMax: 12,
  },
  // Japan
  {
    id: "japan-momotaro",
    title: "Momotaro, the Peach Boy",
    country: "Japan",
    story: `An old couple found a giant peach floating on the river. Inside was a baby boy. They named him Momotaro, "Peach Boy."

When Momotaro grew up, he went to fight the ogres on Onigashima Island. On the way, a dog, a monkey, and a pheasant joined him. Together they defeated the ogres and brought back treasure for the kind couple.

Courage and friends can overcome any challenge.`,
    ageMin: 4,
    ageMax: 11,
  },
  {
    id: "japan-urashima",
    title: "Urashima Taro",
    country: "Japan",
    story: `Urashima Taro saved a turtle. The turtle took him to the Dragon Palace under the sea. The princess gave him a box and said, "Do not open it."

When he returned home, many years had passed. He opened the box. Smoke came out and he became an old man. Time passes differently in magical places. We must keep our promises.`,
    ageMin: 5,
    ageMax: 12,
  },
  // Africa
  {
    id: "africa-anansi-tiger",
    title: "Anansi and the Tiger",
    country: "Africa",
    story: `Anansi the spider was small but clever. Tiger had all the stories. Anansi tricked Tiger into a race. Tiger ran fast, but Anansi hid in Tiger's ear and rode along.

At the finish, Anansi jumped out and won. Tiger had to give him the stories. From then on, Anansi shared stories with everyone. Cleverness can beat strength.`,
    ageMin: 4,
    ageMax: 11,
  },
  {
    id: "africa-tortoise-hawk",
    title: "Why the Tortoise Has a Cracked Shell",
    country: "Africa",
    story: `Tortoise wanted to go to a feast in the sky. He could not fly. He asked the birds for feathers. They gave him some. Tortoise flew up with them.

At the feast, Tortoise ate the most. The birds were angry. They took their feathers back. Tortoise fell and cracked his shell. Greed brings trouble.`,
    ageMin: 4,
    ageMax: 10,
  },
  // Arabia
  {
    id: "arabia-sindbad",
    title: "Sindbad and the Giant Bird",
    country: "Arabia",
    story: `Sindbad the sailor was stranded on an island. He found a huge white egg. A giant bird came and sat on it. Sindbad tied himself to the bird's leg.

The bird flew over the sea and mountains. Sindbad was carried to a valley full of diamonds. He filled his pockets and later escaped. Patience and courage bring reward.`,
    ageMin: 5,
    ageMax: 12,
  },
  {
    id: "arabia-aladdin-lamp",
    title: "Aladdin and the Wonderful Lamp",
    country: "Arabia",
    story: `Aladdin found a magic lamp. When he rubbed it, a genie appeared. The genie granted wishes. Aladdin wished for a palace and to marry the princess.

A wicked magician stole the lamp. Aladdin used his wits to get it back. He and the princess lived happily. True happiness comes from the heart, not magic.`,
    ageMin: 5,
    ageMax: 12,
  },
  // Russia
  {
    id: "russia-kolobok",
    title: "The Little Round Bun (Kolobok)",
    country: "Russia",
    story: `A grandmother baked a little round bun. It jumped off the table and rolled away. On the road it met a hare, a wolf, and a bear. It sang a song and rolled away from each.

Then it met a fox. The fox asked it to sing. The bun sang. The fox said, "Sit on my nose so I can hear better." The bun did, and the fox ate it. Do not trust flattery.`,
    ageMin: 3,
    ageMax: 9,
  },
  {
    id: "russia-masha-bear",
    title: "Masha and the Bear",
    country: "Russia",
    story: `Masha got lost in the forest. A bear found her and took her to his house. He made her cook and clean. Masha wanted to go home.

She baked pies and asked the bear to take them to her grandparents. She hid in the basket. The bear carried her home. Masha was free. Cleverness wins.`,
    ageMin: 4,
    ageMax: 10,
  },
  // England / UK
  {
    id: "england-three-pigs",
    title: "The Three Little Pigs",
    country: "England",
    story: `Three little pigs left home. One built a house of straw, one of sticks, one of bricks. A wolf came. He blew down the straw and stick houses. The pigs ran to the brick house.

The wolf could not blow it down. He tried the chimney. The pigs lit a fire. The wolf fell in and ran away. Hard work and planning keep us safe.`,
    ageMin: 3,
    ageMax: 9,
  },
  {
    id: "england-goldilocks",
    title: "Goldilocks and the Three Bears",
    country: "England",
    story: `Goldilocks walked into the bears' house. She ate the little bear's porridge, broke his chair, and slept in his bed.

The bears came home. Goldilocks woke and ran away. She learned to respect others' things. We must not take what is not ours.`,
    ageMin: 3,
    ageMax: 8,
  },
  {
    id: "england-three-pigs-long",
    title: "The Three Little Pigs",
    country: "England",
    story: `Once upon a time, there were three little pigs. They left their mother's house to build homes of their own. The first pig was lazy. He built his house of straw. It took only a day. "Done!" he said, and went to play.

The second pig was a little wiser. He built his house of sticks. It took a few days. "Good enough," he said, and went to play.

The third pig was the wisest. He built his house of bricks. It took many weeks. His brothers laughed. "Why work so hard?" they asked. But the third pig did not mind. He wanted a strong home.

One day a big bad wolf came to the first pig's house. "Little pig, little pig, let me come in!" he said. "Not by the hair of my chinny chin chin!" said the pig. "Then I'll huff and I'll puff and I'll blow your house in!" said the wolf. He huffed and he puffed, and the straw house fell down. The first pig ran to his brother's house.

The wolf came to the stick house. "Little pigs, let me come in!" "Not by the hairs of our chinny chin chins!" "Then I'll huff and I'll puff and I'll blow your house in!" The wolf huffed and puffed, and the stick house fell down. The two pigs ran to their brother's brick house.

The wolf came to the brick house. "Little pigs, let me come in!" "Not by the hairs of our chinny chin chins!" "Then I'll huff and I'll puff and I'll blow your house in!" The wolf huffed and puffed. He huffed and puffed again. The brick house did not move. The wolf climbed to the roof and slid down the chimney. The third pig had a pot of boiling water in the fireplace. The wolf fell in and ran away, and never came back.

The three pigs lived safely in the brick house. The first two pigs had learned: hard work and planning keep us safe.`,
    ageMin: 5,
    ageMax: 12,
  },
  // Germany
  {
    id: "germany-bremen-musicians",
    title: "The Bremen Town Musicians",
    country: "Germany",
    story: `A donkey, a dog, a cat, and a rooster were too old to work. They set off to become musicians in Bremen. At night they saw a cottage with robbers inside.

They stood on each other's backs and made a loud noise. The robbers ran away. The animals lived in the cottage happily. Friends together are strong.`,
    ageMin: 4,
    ageMax: 10,
  },
  {
    id: "germany-frog-king",
    title: "The Frog King",
    country: "Germany",
    story: `A princess dropped her golden ball into a well. A frog said he would get it if she took him home. She promised but did not mean it.

Her father said she must keep her word. The frog came. When the princess was kind to him, he turned into a prince. A promise kept brings reward.`,
    ageMin: 4,
    ageMax: 10,
  },
  // Ireland
  {
    id: "ireland-leprechaun",
    title: "The Leprechaun's Gold",
    country: "Ireland",
    story: `A farmer caught a leprechaun. The leprechaun said his gold was under a bush. The farmer tied a ribbon on the bush and went for a shovel.

When he returned, every bush had a ribbon. The leprechaun had tricked him. Greed makes us foolish. The leprechaun was gone.`,
    ageMin: 5,
    ageMax: 11,
  },
  // Korea
  {
    id: "korea-sun-moon",
    title: "The Sun and the Moon",
    country: "Korea",
    story: `A tiger chased a mother and her two children. The mother grabbed a rope and climbed to the sky. She pulled up the children. The tiger tried but fell.

The mother became the sun. Her daughter became the moon. Her son became the stars. They shine over us still. Love protects us forever.`,
    ageMin: 4,
    ageMax: 10,
  },
  // Mexico
  {
    id: "mexico-rabbit-moon",
    title: "The Rabbit on the Moon",
    country: "Mexico",
    story: `The god Quetzalcoatl was hungry. A rabbit offered itself as food. Quetzalcoatl was moved. He did not eat the rabbit. Instead, he placed its image on the moon so all would remember its kindness.

When you look at the moon, you can see the rabbit. Kindness is never forgotten.`,
    ageMin: 4,
    ageMax: 11,
  },
  // Norway
  {
    id: "norway-three-goats",
    title: "The Three Billy Goats Gruff",
    country: "Norway",
    story: `Three goats wanted to cross a bridge. A troll lived underneath. The small goat said, "Wait for my bigger brother." The troll let him pass. The middle goat said the same.

The big goat came. He charged the troll and threw him into the river. The troll was gone. The goats ate grass on the hill. Bravery protects the weak.`,
    ageMin: 3,
    ageMax: 9,
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
  { id: "Japan", label: "Japan" },
  { id: "Africa", label: "Africa" },
  { id: "Arabia", label: "Arabia" },
  { id: "Russia", label: "Russia" },
  { id: "England", label: "England" },
  { id: "Germany", label: "Germany" },
  { id: "Ireland", label: "Ireland" },
  { id: "Korea", label: "Korea" },
  { id: "Mexico", label: "Mexico" },
  { id: "Norway", label: "Norway" },
];

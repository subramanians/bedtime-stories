"use client";

type Props = {
  story: string;
  title?: string;
  onReset: () => void;
};

export default function StoryDisplay({ story, title, onReset }: Props) {
  return (
    <article className="animate-fade-in rounded-2xl bg-night-900/80 p-6 shadow-xl backdrop-blur sm:p-8 md:p-10">
      {title && (
        <h2 className="font-display mb-6 text-2xl font-bold text-warm-gold sm:text-3xl">
          {title}
        </h2>
      )}
      <div className="prose prose-invert prose-lg max-w-none font-serif leading-relaxed text-warm-cream/95 [&>p]:mb-4">
        {story.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-xl border border-warm-gold/50 bg-transparent px-6 py-2.5 font-medium text-warm-gold transition hover:bg-warm-gold/10 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-night-950"
      >
        Create another story
      </button>
    </article>
  );
}

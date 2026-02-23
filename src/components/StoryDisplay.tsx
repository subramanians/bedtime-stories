"use client";

type Props = {
  story: string;
  title?: string;
  onReset: () => void;
};

export default function StoryDisplay({ story, title, onReset }: Props) {
  return (
    <article className="animate-fade-in rounded-2xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:p-10">
      {title && (
        <h2 className="font-display mb-6 text-2xl font-bold text-warm-gold sm:text-4xl">
          {title}
        </h2>
      )}
      <div className="prose prose-invert prose-xl max-w-none font-serif text-lg leading-relaxed text-warm-cream/95 sm:text-xl [&>p]:mb-5 [&>p]:last:mb-0">
        {story.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-xl border border-warm-gold/40 bg-warm-gold/5 px-6 py-3 font-medium text-warm-gold transition hover:bg-warm-gold/15 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-transparent"
      >
        Create another story
      </button>
    </article>
  );
}

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Demo() {
  const ref = useScrollReveal<HTMLElement>();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" ref={ref} className="reveal bg-light-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-light-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          See it in action
        </span>

        <h2 className="font-display font-normal text-light-text text-3xl md:text-5xl tracking-[-0.03em] mb-4 leading-tight">
          AI for commercial teams.
        </h2>

        <p className="text-light-muted font-light text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Presented by Daniel Sternegard, VP of Product, and Thomas Smeallie, VP
          Sales Americas.
        </p>

        <div className="border border-light-divider rounded-[2px] bg-white grid grid-cols-1 md:grid-cols-2 overflow-hidden mb-10 shadow-sm">
          <div className="relative aspect-video bg-bg flex items-center justify-center">
            {playing ? (
              <iframe
                src="https://www.planhat.com/editorial/ai-for-commercial-teams"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
                title="AI For Commercial Teams"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="group flex items-center justify-center"
                aria-label="Play video"
              >
                {/* Small play button -- accent kept here */}
                <span className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="font-display font-medium text-light-text text-xl mb-3">
              AI For Commercial Teams
            </h3>
            <p className="text-light-muted font-light text-sm leading-relaxed mb-5">
              Discover how Planhat's AI vision and capabilities empower you to
              deliver more value, to more customers, faster than ever.
            </p>
            <a
              href="https://www.planhat.com/editorial/ai-for-commercial-teams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text text-sm hover:underline inline-flex items-center gap-1"
            >
              Watch on planhat.com
              <span aria-hidden="true">&gt;</span>
            </a>
          </div>
        </div>

        <div
          id="demo-embed"
          className="border-2 border-dashed border-light-divider rounded-[2px] p-6 md:p-16 text-center"
        >
          <p className="text-light-tertiary font-display font-medium text-lg mb-2">
            Interactive demo — coming soon
          </p>
          <p className="text-light-muted text-sm">
            (Replace this block with your Navattic/Arcade embed when ready)
          </p>
        </div>
      </div>
    </section>
  );
}

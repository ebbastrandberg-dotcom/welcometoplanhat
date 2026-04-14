import { useScrollReveal } from "../hooks/useScrollReveal";
import { PLATFORM_PILLARS } from "../data/content";

export default function PlatformStory() {
  const ref = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section id="platform" ref={ref} className="reveal bg-light-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-light-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          The agentic customer platform
        </span>

        <h2 className="font-display font-normal text-light-text text-3xl md:text-5xl tracking-[-0.03em] mb-4 leading-tight">
          One system.
          <br />
          The entire customer lifecycle.
        </h2>

        <p className="text-light-muted font-light text-base md:text-lg max-w-2xl mb-14 leading-relaxed">
          Planhat centralizes commercial reality, deploys AI agents across it,
          and keeps humans in control. This is the Loop.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 bg-light-divider gap-px"
        >
          {PLATFORM_PILLARS.map((p) => (
            <div
              key={p.num}
              className="reveal bg-light-bg p-6 md:p-8 border-t border-light-text/20"
            >
              <span className="text-light-muted text-sm mb-3 block">
                {p.num} — {p.title}
              </span>
              <p className="text-light-tertiary font-light text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://www.planhat.com/applications"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-right text-xs text-light-muted hover:text-light-text transition-colors mt-6 md:mt-8"
        >
          Learn more about the platform &rarr;
        </a>
      </div>
    </section>
  );
}

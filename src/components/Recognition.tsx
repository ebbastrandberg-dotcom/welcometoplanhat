import { useScrollReveal } from "../hooks/useScrollReveal";
import { RECOGNITION_ITEMS } from "../data/content";

export default function Recognition() {
  const ref = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section id="recognition" ref={ref} className="reveal bg-light-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-light-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          Market recognition
        </span>

        <h2 className="font-display font-normal text-light-text text-3xl md:text-5xl tracking-[-0.03em] mb-14 leading-tight">
          Planhat is a leader.
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-light-divider"
        >
          {RECOGNITION_ITEMS.map((item, i) => (
            <div key={i} className="reveal bg-light-bg p-6 md:p-8 flex flex-col">
              <span className="uppercase text-light-muted text-[0.72rem] tracking-[0.15em] mb-4">
                {item.org}
              </span>
              <p className="text-light-text font-display font-semibold text-sm leading-snug mb-4 flex-1">
                {item.award}
              </p>
              {/* Small badge -- accent kept here */}
              <span className="inline-block self-start px-3 py-1 text-[0.7rem] uppercase tracking-[0.1em] text-accent border border-accent/30 bg-accent-light rounded-[2px]">
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        <a
          href="https://www.planhat.com/press"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-right text-xs text-light-muted hover:text-light-text transition-colors mt-6 md:mt-8"
        >
          Learn more on planhat.com &rarr;
        </a>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { RECOGNITION_ITEMS } from "../data/content";

function BadgeLogo({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-light-text font-display font-bold text-lg tracking-wide">
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className={`w-auto ${name === "G2" ? "h-10 md:h-12" : "h-6 md:h-8"}`}
    />
  );
}

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-light-text text-sm">
      {"★★★★"}
      <span className="relative inline-block overflow-hidden" style={{ width: "1em" }}>
        <span className="text-light-text/20">★</span>
        <span className="absolute left-0 top-0 overflow-hidden" style={{ width: "60%" }}>★</span>
      </span>
    </span>
  );
}

export default function Recognition() {
  const ref = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section id="recognition" ref={ref} className="reveal bg-light-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-light-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          The leading customer platform
        </span>

        <h2 className="font-display font-normal text-light-text text-3xl md:text-5xl tracking-[-0.03em] mb-4 leading-tight">
          The next generation has arrived
        </h2>

        <p className="text-light-muted font-light text-base md:text-lg max-w-2xl mb-14 leading-relaxed">
          Planhat is recognized by both industry analysts and customers as a
          global leader in deploying AI-led automation for go-to-market teams.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {RECOGNITION_ITEMS.map((item) => (
            <div
              key={item.name}
              className="reveal border border-light-text/10 rounded-lg p-6 md:p-8 flex flex-col items-center text-center gap-4"
            >
              <div className="h-5 flex items-center justify-center">
                {item.topLabel === "stars" ? (
                  <Stars />
                ) : (
                  <span className="uppercase text-light-muted text-[0.65rem] tracking-[0.15em]">
                    {item.topLabel}
                  </span>
                )}
              </div>

              <div className="h-12 flex items-center justify-center">
                <BadgeLogo name={item.name} src={item.logo} />
              </div>

              <p className="text-light-muted font-light text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://www.planhat.com/press"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-right text-xs text-light-muted hover:text-light-text transition-colors mt-6 md:mt-8"
        >
          Learn more about our recognitions &rarr;
        </a>
      </div>
    </section>
  );
}

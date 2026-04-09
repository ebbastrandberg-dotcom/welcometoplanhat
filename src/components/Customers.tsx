import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CUSTOMER_STATS, CUSTOMER_LOGOS } from "../data/content";

function LogoItem({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-muted/60 text-sm font-display font-medium tracking-wide">
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-6 md:h-7 w-auto opacity-50 hover:opacity-80 transition-opacity duration-200 grayscale invert"
    />
  );
}

export default function Customers() {
  const ref = useScrollReveal<HTMLElement>();
  const statsRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section
      id="customers"
      ref={ref}
      className="reveal bg-bg py-20 md:py-28"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          Customers
        </span>

        <h2 className="font-display font-normal text-white text-3xl md:text-5xl tracking-[-0.03em] mb-14 leading-tight">
          Industry leaders build their{" "}
          <br className="hidden md:block" />
          business on Planhat.
        </h2>

        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-divider mb-16"
        >
          {CUSTOMER_STATS.map((s) => (
            <div
              key={s.stat}
              className="reveal bg-bg p-6 md:p-8 flex flex-col"
            >
              <span className="text-white font-display font-normal text-4xl md:text-5xl mb-1">
                {s.stat}
              </span>
              <span className="text-white text-sm font-display font-medium mb-3">
                {s.label}
              </span>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-2 flex-1">
                &ldquo;{s.quote}&rdquo;
              </p>
              <span className="text-muted text-xs">— {s.company}</span>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {CUSTOMER_LOGOS.map((logo) => (
            <LogoItem key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </div>

        <a
          href="https://www.planhat.com/editorial/theme/impact-study"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-right text-xs text-muted hover:text-white transition-colors mt-6 md:mt-8"
        >
          Learn more on planhat.com &rarr;
        </a>
      </div>
    </section>
  );
}

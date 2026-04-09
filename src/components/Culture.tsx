import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const GRID_SLOTS = [
  { id: "culture-1", label: "Full team", span: "md:col-span-2", primary: "/images/culture-1.jpg" },
  { id: "culture-2", label: "Team vibes", span: "", primary: "/images/culture-2.jpg" },
  { id: "culture-5", label: "Kaveh at Harvard Business School", span: "", primary: "/images/culture-5.jpg" },
  { id: "culture-3", label: "Team dinner", span: "", primary: "/images/culture-3.jpg" },
  { id: "culture-6", label: "Team at an event", span: "", primary: "/images/culture-6.jpg" },
  { id: "culture-4", label: "On the road", span: "md:col-span-2", primary: "/images/culture-4.jpg" },
  { id: "culture-7", label: "Networking", span: "", primary: "/images/culture-7.jpg" },
];

const SECONDARY_PHOTOS = [
  "/images/culture-1.jpg",
  "/images/culture-2.jpg",
  "/images/culture-3.jpg",
  "/images/culture-4.jpg",
  "/images/culture-5.jpg",
  "/images/culture-6.jpg",
  "/images/culture-7.jpg",
];

function CrossfadeSlot({
  primary,
  secondaries,
  label,
  delay,
}: {
  primary: string;
  secondaries: string[];
  label: string;
  delay: number;
}) {
  const [current, setCurrent] = useState(primary);
  const [next, setNext] = useState<string | null>(null);
  const [fading, setFading] = useState(false);

  const pickRandom = useCallback(() => {
    const pool = secondaries.filter((s) => s !== current);
    if (pool.length === 0) return current;
    return pool[Math.floor(Math.random() * pool.length)];
  }, [secondaries, current]);

  useEffect(() => {
    const interval = 6000 + Math.random() * 4000;

    const timeout = setTimeout(() => {
      const swap = () => {
        const picked = pickRandom();
        setNext(picked);
        setFading(true);

        setTimeout(() => {
          setCurrent(picked);
          setFading(false);
          setNext(null);
        }, 1500);
      };

      swap();
      const id = setInterval(swap, interval);
      return () => clearInterval(id);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, pickRandom]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={current}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {next && (
        <img
          src={next}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: fading ? 1 : 0 }}
        />
      )}
    </div>
  );
}

export default function Culture() {
  const ref = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section id="culture" ref={ref} className="reveal bg-light-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-light-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          Life at Planhat
        </span>

        <h2 className="font-display font-normal text-light-text text-3xl md:text-5xl tracking-[-0.03em] mb-4 leading-tight">
          Where it happens.
        </h2>

        <p className="text-light-muted font-light text-base md:text-lg max-w-2xl mb-14 leading-relaxed">
          A glimpse into the team, the energy, and the environment behind the
          product.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-light-divider"
        >
          {GRID_SLOTS.map((slot, i) => (
            <div key={slot.id} className={`reveal bg-light-bg ${slot.span}`}>
              <CrossfadeSlot
                primary={slot.primary}
                secondaries={SECONDARY_PHOTOS}
                label={slot.label}
                delay={i * 2000 + 3000}
              />
            </div>
          ))}
        </div>

        <a
          href="https://www.planhat.com/careers"
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

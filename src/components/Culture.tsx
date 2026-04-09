import { useState, useEffect, useRef } from "react";
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
  "/images/culture-s1.jpg",
  "/images/culture-s2.jpg",
  "/images/culture-s3.jpg",
  "/images/culture-s4.jpg",
  "/images/culture-s5.jpg",
  "/images/culture-s6.jpg",
  "/images/culture-s7.jpg",
  "/images/culture-s8.jpg",
  "/images/culture-s9.jpg",
  "/images/culture-s10.jpg",
  "/images/culture-s11.jpg",
  "/images/culture-s12.jpg",
  "/images/culture-s13.jpg",
  "/images/culture-s14.jpg",
  "/images/culture-s15.jpg",
  "/images/culture-s16.jpg",
  "/images/culture-s17.jpg",
  "/images/culture-s18.jpg",
  "/images/culture-s19.jpg",
  "/images/culture-s20.jpg",
  "/images/culture-s21.jpg",
  "/images/culture-s22.jpg",
  "/images/culture-s23.jpg",
  "/images/culture-s24.jpg",
  "/images/culture-s25.jpg",
  "/images/culture-s26.jpg",
  "/images/culture-s27.jpg",
  "/images/culture-s28.jpg",
  "/images/culture-s29.jpg",
  "/images/culture-s30.jpg",
  "/images/culture-s31.jpg",
  "/images/culture-s32.jpg",
  "/images/culture-s33.jpg",
  "/images/culture-s34.jpg",
  "/images/culture-s35.jpg",
];

function CrossfadeSlot({
  primary,
  label,
  nextPhoto,
  isFading,
}: {
  primary: string;
  label: string;
  nextPhoto: string | null;
  isFading: boolean;
}) {
  const [current, setCurrent] = useState(primary);

  useEffect(() => {
    if (!isFading && !nextPhoto) return;
    if (nextPhoto && !isFading) {
      setCurrent(nextPhoto);
    }
  }, [isFading, nextPhoto]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={current}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {nextPhoto && (
        <img
          src={nextPhoto}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
          style={{
            opacity: isFading ? 1 : 0,
            transitionDuration: "3500ms",
          }}
          onTransitionEnd={() => {
            if (isFading) setCurrent(nextPhoto);
          }}
        />
      )}
    </div>
  );
}

export default function Culture() {
  const ref = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  const [, setActiveSlot] = useState<number | null>(null);
  const [nextPhotos, setNextPhotos] = useState<(string | null)[]>(
    () => GRID_SLOTS.map(() => null)
  );
  const [fading, setFading] = useState<boolean[]>(
    () => GRID_SLOTS.map(() => false)
  );
  const usedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;

    const pickUnused = () => {
      const available = SECONDARY_PHOTOS.filter((p) => !usedRef.current.has(p));
      if (available.length === 0) {
        usedRef.current.clear();
        return SECONDARY_PHOTOS[Math.floor(Math.random() * SECONDARY_PHOTOS.length)];
      }
      const picked = available[Math.floor(Math.random() * available.length)];
      usedRef.current.add(picked);
      return picked;
    };

    const cycle = () => {
      if (cancelled) return;

      const slotIndex = Math.floor(Math.random() * GRID_SLOTS.length);
      const photo = pickUnused();

      setActiveSlot(slotIndex);
      setNextPhotos((prev) => {
        const next = [...prev];
        next[slotIndex] = photo;
        return next;
      });

      requestAnimationFrame(() => {
        if (cancelled) return;
        setFading((prev) => {
          const next = [...prev];
          next[slotIndex] = true;
          return next;
        });
      });

      setTimeout(() => {
        if (cancelled) return;
        setFading((prev) => {
          const next = [...prev];
          next[slotIndex] = false;
          return next;
        });
        setNextPhotos((prev) => {
          const next = [...prev];
          next[slotIndex] = null;
          return next;
        });
        setActiveSlot(null);
      }, 4500);
    };

    const initialDelay = setTimeout(() => {
      if (cancelled) return;
      cycle();
      const id = setInterval(cycle, 8000);
      return () => clearInterval(id);
    }, 6000);

    return () => {
      cancelled = true;
      clearTimeout(initialDelay);
    };
  }, []);

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
                label={slot.label}
                nextPhoto={nextPhotos[i]}
                isFading={fading[i]}
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

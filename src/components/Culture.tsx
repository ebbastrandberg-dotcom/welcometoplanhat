import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PHOTOS = [
  { id: "culture-1", label: "Full team", span: "md:col-span-2", src: "/images/culture-1.jpg" },
  { id: "culture-2", label: "Team vibes", span: "", src: "/images/culture-2.jpg" },
  { id: "culture-5", label: "Kaveh at Harvard Business School", span: "", src: "/images/culture-5.jpg" },
  { id: "culture-3", label: "Team dinner", span: "", src: "/images/culture-3.jpg" },
  { id: "culture-6", label: "Team at an event", span: "", src: "/images/culture-6.jpg" },
  { id: "culture-4", label: "On the road", span: "md:col-span-2", src: "/images/culture-4.jpg" },
  { id: "culture-7", label: "Networking", span: "", src: "/images/culture-7.jpg" },
];

function PhotoSlot({ src, label, id }: { src: string; label: string; id: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        id={id}
        className="aspect-[16/10] flex flex-col items-center justify-center border border-dashed border-white/10 bg-white/[0.03]"
      >
        <svg
          className="w-8 h-8 text-white/20 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <span className="text-muted text-sm">{label}</span>
        <span className="text-muted/50 text-xs mt-1">/images/{id}.jpg</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={label}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover aspect-[16/10]"
    />
  );
}

export default function Culture() {
  const ref = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section ref={ref} className="reveal bg-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          Life at Planhat
        </span>

        <h2 className="font-display font-normal text-white text-3xl md:text-5xl tracking-[-0.03em] mb-4 leading-tight">
          Where it happens.
        </h2>

        <p className="text-muted font-light text-base md:text-lg max-w-2xl mb-14 leading-relaxed">
          A glimpse into the team, the energy, and the environment behind the
          product.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider"
        >
          {PHOTOS.map((ph) => (
            <div key={ph.id} className={`reveal bg-bg ${ph.span}`}>
              <PhotoSlot src={ph.src} label={ph.label} id={ph.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

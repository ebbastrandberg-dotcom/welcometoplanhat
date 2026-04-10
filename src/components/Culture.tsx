import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PHOTOS = [
  { id: "culture-1", label: "Full team", span: "md:col-span-2", primary: "/images/culture-1.jpg" },
  { id: "culture-2", label: "Team vibes", span: "", primary: "/images/culture-2.jpg" },
  { id: "culture-5", label: "Kaveh at Harvard Business School", span: "", primary: "/images/culture-5.jpg" },
  { id: "culture-3", label: "Team dinner", span: "", primary: "/images/culture-3.jpg" },
  { id: "culture-6", label: "Team at an event", span: "", primary: "/images/culture-6.jpg" },
  { id: "culture-4", label: "On the road", span: "md:col-span-2", primary: "/images/culture-4.jpg" },
  { id: "culture-7", label: "Networking", span: "", primary: "/images/culture-7.jpg" },
];

function PhotoSlot({ src, label, id }: { src: string; label: string; id: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        id={id}
        className="aspect-[16/10] flex flex-col items-center justify-center border border-dashed border-light-text/10 bg-light-text/[0.03]"
      >
        <span className="text-light-muted text-sm">{label}</span>
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
          {PHOTOS.map((ph) => (
            <div key={ph.id} className={`reveal bg-light-bg ${ph.span}`}>
              <PhotoSlot src={ph.primary} label={ph.label} id={ph.id} />
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

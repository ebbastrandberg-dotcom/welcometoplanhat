import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { TEAM_MEMBERS } from "../data/content";

function Avatar({ src, initials, name, isLogo }: { src: string; initials: string; name: string; isLogo?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-16 h-16 rounded-full bg-light-text flex items-center justify-center mb-4">
        <span className="text-white font-display font-bold text-lg">
          {initials}
        </span>
      </div>
    );
  }

  if (isLogo) {
    return (
      <div className="w-16 h-16 rounded-full bg-light-bg border border-light-divider flex items-center justify-center mb-4">
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className="w-9 h-9 object-contain"
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="w-16 h-16 rounded-full object-cover mb-4"
    />
  );
}

export default function Team() {
  const ref = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section id="team" ref={ref} className="reveal bg-light-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-light-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          The people building this
        </span>

        <h2 className="font-display font-normal text-light-text text-3xl md:text-5xl tracking-[-0.03em] mb-4 leading-tight">
          Follow along.
        </h2>

        <p className="text-light-muted font-light text-base md:text-lg max-w-2xl mb-14 leading-relaxed">
          The people shaping Planhat's AI GTM future. Follow them on LinkedIn to
          stay close to what's being built.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-light-divider"
        >
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.name}
              className="reveal bg-light-bg p-6 md:p-8 flex flex-col items-start text-left"
            >
              <Avatar src={m.photo} initials={m.initials} name={m.name} isLogo={m.name === "Planhat"} />

              <h3 className="font-display font-semibold text-light-text text-base mb-1">
                {m.name}
              </h3>
              <p className="text-light-muted font-light text-sm mb-4">{m.title}</p>

              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-tertiary text-sm hover:text-light-text hover:underline inline-flex items-center gap-1 transition-colors"
              >
                LinkedIn
                <span aria-hidden="true">&gt;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { VP_REVOPS_ROLE_DESCRIPTION } from "../data/content";

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();
  const [heroBgFailed, setHeroBgFailed] = useState(false);

  return (
    <section
      ref={ref}
      className="reveal min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Hero background image with dark overlay */}
      {!heroBgFailed && (
        <img
          src="/images/hero-bg.jpg"
          alt=""
          onError={() => setHeroBgFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className={`absolute inset-0 ${heroBgFailed ? "" : "bg-black/60"}`} />

      {/* Fallback radial gradient (shown when no hero image) */}
      {heroBgFailed && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(239,133,52,0.12) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 w-full relative z-10 pt-20">
        <span className="uppercase text-white/70 text-[0.8rem] tracking-[0.15em] font-body font-normal mb-6 block">
          Job Opportunity:{" "}
          <span className="font-semibold">Vice President of Revenue Operations</span>
        </span>

        <h1 className="font-display font-normal text-white text-4xl md:text-[3.75rem] leading-[1.05] tracking-[-0.03em] max-w-4xl mb-6">
          The future of AI GTM operations{" "}
          <br className="hidden md:block" />
          is being built here.
        </h1>

        <span className="uppercase text-white/60 text-[0.65rem] tracking-[0.15em] font-body font-normal mb-3 block">
          Role description
        </span>

        <p className="text-white/70 font-light text-base md:text-xl max-w-2xl mb-10 leading-relaxed">
          {VP_REVOPS_ROLE_DESCRIPTION}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.planhat.com/editorial/ai-for-commercial-teams"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-sm font-body uppercase tracking-[0.08em] rounded-[2px] hover:bg-white/10 transition"
          >
            Product Demo
          </a>
          <a
            href="https://www.planhat.com/editorial/sovereign-sentinel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-sm font-body uppercase tracking-[0.08em] rounded-[2px] hover:bg-white/10 transition"
          >
            Case study: Telia Cygate
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3">
        <span className="block w-6 h-px bg-muted" />
        <span className="text-muted uppercase text-[0.65rem] tracking-[0.15em]">
          scroll
        </span>
      </div>
    </section>
  );
}

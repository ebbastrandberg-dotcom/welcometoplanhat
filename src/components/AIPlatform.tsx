import { useScrollReveal } from "../hooks/useScrollReveal";
import { AI_VALUE_PROPS, AI_USE_CASES } from "../data/content";

function DotCluster() {
  const dots = [
    { x: 4, y: 4 },
    { x: 10, y: 4 },
    { x: 16, y: 4 },
    { x: 4, y: 10 },
    { x: 10, y: 10 },
    { x: 16, y: 10 },
    { x: 4, y: 16 },
    { x: 10, y: 16 },
    { x: 16, y: 16 },
  ];
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.8" fill="#EF8534">
          <animate
            attributeName="opacity"
            values={`${0.2 + (i * 0.08)};1;${0.3 + ((8 - i) * 0.06)};0.2;${0.2 + (i * 0.08)}`}
            dur={`${2.5 + i * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

export default function AIPlatform() {
  const ref = useScrollReveal<HTMLElement>();
  const casesRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section id="ai" ref={ref} className="reveal bg-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          Planhat AI Platform (AIP)
        </span>

        <h2 className="font-display font-normal text-white text-3xl md:text-5xl tracking-[-0.03em] mb-4 leading-tight">
          The commercial AI platform.
        </h2>

        <p className="text-muted font-light text-base md:text-lg max-w-2xl mb-14 leading-relaxed">
          Purpose-built for commercial organisations. Hundreds of use cases.
          End-to-end process automation. Integrated with your data, your tools,
          your LLM of choice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider mb-10">
          {AI_VALUE_PROPS.map((v) => (
            <div key={v.num} className="bg-bg p-6 md:p-8 border-t border-b border-accent/40">
              <span className="text-white text-sm font-display font-semibold mb-2 block">
                {v.title}
              </span>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div
            ref={casesRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-divider"
          >
            {AI_USE_CASES.map((uc, i) => (
              <div
                key={i}
                className="reveal bg-bg p-4 md:p-5 flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <p className="text-white/80 font-light text-xs leading-relaxed">
                    {uc}
                  </p>
                </div>
                <div className="mt-3 self-end">
                  <DotCluster />
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 30%, #0e0e0e 100%)",
            }}
          />
        </div>

        <a
          href="https://www.planhat.com/adp"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-right text-xs text-muted hover:text-white transition-colors mt-6 md:mt-8"
        >
          Learn more about Planhat AI &rarr;
        </a>
      </div>
    </section>
  );
}

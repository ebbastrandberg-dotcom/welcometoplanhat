import { useScrollReveal } from "../hooks/useScrollReveal";
import { AI_VALUE_PROPS } from "../data/content";

export default function AIPlatform() {
  const ref = useScrollReveal<HTMLElement>();

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider">
          {AI_VALUE_PROPS.map((v) => (
            <div key={v.num} className="bg-bg p-6 md:p-8">
              <span className="text-white text-sm font-display font-medium mb-2 block">
                {v.title}
              </span>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
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

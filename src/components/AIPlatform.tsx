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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider mb-16">
          {AI_VALUE_PROPS.map((v) => (
            <div key={v.num} className="bg-bg p-6 md:p-8">
              <span className="text-white text-sm font-display font-medium mb-2 block">
                {v.num} — {v.title}
              </span>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[2px] p-8 md:p-12 text-center max-w-3xl mx-auto">
          <span className="text-white/30 text-5xl font-display leading-none block mb-4">
            &ldquo;
          </span>
          <blockquote className="text-white/90 font-light text-base md:text-lg leading-relaxed mb-4 italic">
            Planhat is the first in the market with a generative AI powered
            health score that can pull customer data from Planhat, as well as
            incorporate data from the customer's preferred large language model.
          </blockquote>
          <cite className="text-muted text-sm not-italic">— Gartner</cite>
        </div>
      </div>
    </section>
  );
}

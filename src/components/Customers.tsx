import { useScrollReveal } from "../hooks/useScrollReveal";
import { CUSTOMER_STATS_OPS, CUSTOMER_STATS_REVENUE } from "../data/content";

type Stat = { stat: string; label: string; quote: string; company: string };

function StatCard({ s }: { s: Stat }) {
  return (
    <div className="reveal bg-bg p-5 md:p-6 flex flex-col h-full">
      <span className="text-white font-display font-normal text-3xl md:text-4xl mb-0.5">
        {s.stat}
      </span>
      <span className="text-white text-xs font-display font-medium mb-3">
        {s.label}
      </span>
      <span className="text-white/20 font-display text-lg leading-none mb-1">&ldquo;</span>
      <p className="text-white/60 font-light text-xs leading-relaxed mb-3 flex-1">
        {s.quote}
      </p>
      <span className="inline-block self-start mt-auto px-2.5 py-0.5 text-[0.6rem] tracking-[0.06em] text-muted border border-white/15 rounded-full">
        {s.company}
      </span>
    </div>
  );
}

function StatColumn({
  num,
  title,
  stats,
}: {
  num: string;
  title: string;
  stats: readonly Stat[];
}) {
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-muted text-xs">{num}</span>
        <span className="text-white font-display font-medium text-sm">
          {title}
        </span>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-divider"
      >
        {stats.map((s) => (
          <StatCard key={s.stat + s.company} s={s} />
        ))}
      </div>
    </div>
  );
}

export default function Customers() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="customers" ref={ref} className="reveal bg-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          Customer Impact
        </span>

        <h2 className="font-display font-normal text-white text-3xl md:text-5xl tracking-[-0.03em] mb-4 leading-tight">
          Industry leaders build their{" "}
          <br className="hidden md:block" />
          business on Planhat.
        </h2>

        <p className="text-muted font-light text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Planhat creates immediate and lasting business impact by helping
          customers automate commercial processes across the entire customer
          lifecycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <StatColumn
            num="01"
            title="Operational efficiencies"
            stats={CUSTOMER_STATS_OPS as unknown as readonly Stat[]}
          />
          <StatColumn
            num="02"
            title="Revenue impact"
            stats={CUSTOMER_STATS_REVENUE as unknown as readonly Stat[]}
          />
        </div>

        <a
          href="https://www.planhat.com/editorial/theme/impact-study"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-right text-xs text-muted hover:text-white transition-colors mt-6 md:mt-8"
        >
          Learn more about our customers &rarr;
        </a>
      </div>
    </section>
  );
}

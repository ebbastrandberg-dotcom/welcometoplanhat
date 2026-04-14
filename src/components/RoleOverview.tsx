import { useScrollReveal } from "../hooks/useScrollReveal";

const RESPONSIBILITY_AREAS = [
  "Sales Strategy",
  "Sales Operations",
  "Analytics & Reporting",
  "Enablement",
  "Cross-functional Alignment",
  "Tech & Systems",
];

const LOCATIONS = [
  "New York City",
  "Boston",
  "San Francisco",
  "Los Angeles",
  "Stockholm",
  "London",
];

export default function RoleOverview() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal py-14 md:py-20" style={{ backgroundColor: "#161616" }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <span className="uppercase text-muted text-[0.65rem] tracking-[0.15em] mb-4 block">
              The role
            </span>
            <h3 className="font-display font-normal text-white text-lg md:text-xl tracking-[-0.02em] mb-4">
              Vice President of Revenue Operations
            </h3>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-5">
              Lead revenue operations end-to-end, owning data, systems, process
              and performance. Work closely with senior leadership to align
              go-to-market strategy with company objectives.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {LOCATIONS.map((loc) => (
                <span
                  key={loc}
                  className="text-[0.6rem] text-white/40 border border-white/10 rounded-full px-2.5 py-1 tracking-wide"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="uppercase text-muted text-[0.65rem] tracking-[0.15em] mb-4 block">
              Key areas
            </span>
            <ul className="space-y-2.5">
              {RESPONSIBILITY_AREAS.map((area, i) => (
                <li
                  key={area}
                  className="flex items-center gap-3 text-white/50 font-light text-sm"
                >
                  <span className="text-[0.6rem] text-white/25 tabular-nums w-4 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

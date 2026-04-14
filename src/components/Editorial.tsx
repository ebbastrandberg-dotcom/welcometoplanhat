import { useScrollReveal } from "../hooks/useScrollReveal";

const ITEMS = [
  {
    type: "Read",
    title: "On Product",
    quote: "We'll never be incremental or short-term in what we aim for.",
    author: "Niklas Skog",
    role: "CTO & Co-Founder",
    href: "https://www.planhat.com/about/product",
  },
  {
    type: "Read",
    title: "In the Arena",
    quote: "Everyone is an individual contributor, so leaders do before they delegate.",
    author: "Kaveh Rostampor",
    role: "CEO & Co-Founder",
    href: "https://www.planhat.com/about/business",
  },
  {
    type: "Read",
    title: "Working Effectively as I Try to Be Successful",
    quote: "Doing a good job over a long period of time, without a sense of belonging, ownership and purpose, is very difficult.",
    author: "Erik Holm",
    role: "CFO",
    href: "https://www.planhat.com/editorial/working-effectively-as-i-try-to-be-successful",
  },
  {
    type: "Read",
    title: "Outcomes Are the New Contract",
    quote: "Value isn't something you claim. Value is something you demonstrate.",
    author: "Victor Ivarsson",
    role: "Global Customer Director",
    href: "https://www.planhat.com/editorial/outcomes-are-the-new-contract",
  },
  {
    type: "Watch",
    title: "Kick Off — The Feeling",
    quote: "Behind the scenes at our all-hands retreat in the Atlas Mountains.",
    author: "Studio Planhat",
    role: "",
    href: "https://www.planhat.com/editorial/kick-off-the-feeling",
  },
  {
    type: "Watch",
    title: "Open — A Glimpse",
    quote: "From surfing and trail running to discussion pods and long dinners.",
    author: "Studio Planhat",
    role: "",
    href: "https://www.planhat.com/editorial/malibu-open-2024-ep01",
  },
  {
    type: "Watch",
    title: "Spirit of Open",
    quote: "The spontaneous, serendipitous moments that make Open so special.",
    author: "Alberto Lambert",
    role: "Creative Director",
    href: "https://www.planhat.com/editorial/spirit-of-open",
  },
] as const;

export default function Editorial() {
  const ref = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(true);

  return (
    <section id="editorial" ref={ref} className="reveal bg-light-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-light-muted text-[0.72rem] tracking-[0.15em] mb-6 block">
          Highlights from the inside
        </span>

        <h2 className="font-display font-normal text-light-text text-3xl md:text-5xl tracking-[-0.03em] mb-14 leading-tight">
          What we think, share and believe.
        </h2>

        <div ref={gridRef} className="divide-y divide-light-divider">
          {ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal flex items-center justify-between py-3.5 group hover:bg-black/[0.02] transition-colors -mx-3 px-3 rounded"
            >
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <span className="uppercase text-[0.6rem] tracking-[0.12em] text-light-muted/50 w-10 shrink-0">
                  {item.type}
                </span>
                <span className="font-display font-semibold text-light-text text-sm group-hover:text-light-text/80 transition-colors truncate min-w-0">
                  {item.title}
                </span>
                <span className="text-light-muted font-light text-sm hidden md:inline truncate min-w-0 shrink">
                  {item.author}{item.role ? `, ${item.role}` : ""}
                </span>
              </div>
              <span className="text-light-muted/40 group-hover:text-light-text/60 transition-colors text-xs ml-4 shrink-0">
                &rarr;
              </span>
            </a>
          ))}
        </div>

        <a
          href="https://www.planhat.com/editorial"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-right text-xs text-light-muted hover:text-light-text transition-colors mt-6 md:mt-8"
        >
          Learn more through our editorial &rarr;
        </a>
      </div>
    </section>
  );
}

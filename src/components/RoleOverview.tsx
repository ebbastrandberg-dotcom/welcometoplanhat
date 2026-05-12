import { useScrollReveal } from "../hooks/useScrollReveal";

const EYEBROW = "uppercase text-muted text-[0.65rem] tracking-[0.15em] block";

const SECTION_LABEL = `${EYEBROW} mb-2`;

const BODY = "text-white/50 font-light text-sm leading-relaxed";

const SUBHEAD = "font-display font-normal text-white/85 text-sm tracking-[-0.02em] mb-1";

const LIST_ITEM =
  "text-white/50 font-light text-sm leading-snug pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-white/25";

const LIST = "space-y-1 pl-0 list-none";

const COMPANY_DESCRIPTION =
  "Planhat is the Agentic Customer Platform where commercial teams work better. We build and deploy frontier technologies, integrating data, AI and collaboration. We are dedicated to delivering impactful solutions that drive success for our clients.";

const RESPONSIBILITY_SECTIONS: { title: string; items: string[] }[] = [
  {
    title: "Sales Strategy",
    items: [
      "Set sales targets, quotas, and commission models",
      "Build and execute the sales plan with leadership",
      "Own forecasting and performance tracking",
    ],
  },
  {
    title: "Sales Operations",
    items: [
      "Improve and standardize sales processes",
      "Optimize CRM usage and automation",
      "Drive efficiency and operational improvements",
    ],
  },
  {
    title: "Analytics & Reporting",
    items: [
      "Define KPIs and track sales performance",
      "Turn data into actionable insights",
      "Deliver clear reports and dashboards",
    ],
  },
  {
    title: "Enablement",
    items: [
      "Equip the team with tools, training, and materials",
      "Help drive enablement and ramp of new commercial employees",
    ],
  },
  {
    title: "Cross-functional Alignment",
    items: [
      "Partner with finance, marketing, and ops",
      "Advise leadership on sales operations strategy",
    ],
  },
  {
    title: "Tech & Systems",
    items: [
      "Own CRM and sales tech stack",
      "Manage integrations and improvements",
      "Evaluate and implement new tools",
    ],
  },
];

const HELENA_LINKEDIN =
  "https://www.linkedin.com/in/helena-n%C3%A4verbrant-484aba23/";

const QUALIFICATIONS = [
  "Deep experience in revenue operations in a high-growth technology environment",
  "Strong operator mindset—you've built systems from scratch",
  "Proven ability to drive alignment with senior stakeholders across Sales, Customer Success, Marketing, and Finance",
  "Highly data-driven with strong intuition for what actually moves revenue",
  "Experience with modern GTM tooling (AI tooling, CRM, ERP, CPQ, data warehouses, etc.)",
  "Excellent communicator and leader",
];

export default function RoleOverview() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal py-14 md:py-20" style={{ backgroundColor: "#161616" }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className={`${EYEBROW} mb-4`}>The role</span>
        <h3 className="font-display font-normal text-white text-lg md:text-xl tracking-[-0.02em] mb-8 md:mb-10 max-w-2xl">
          Vice President of Revenue Operations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div className="space-y-7">
            <div>
              <span className={SECTION_LABEL}>Company</span>
              <p className={BODY}>{COMPANY_DESCRIPTION}</p>
            </div>
            <div>
              <span className={SECTION_LABEL}>Qualifications</span>
              <ul className={LIST}>
                {QUALIFICATIONS.map((item) => (
                  <li key={item} className={LIST_ITEM}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className={SECTION_LABEL}>Location</span>
              <p className={`${BODY} mb-2`}>
                The role is based full-time in-office in Los Angeles.
              </p>
              <span className="inline-block text-[0.6rem] text-white/40 border border-white/10 rounded-full px-2.5 py-1 tracking-wide">
                Los Angeles · In-office
              </span>
            </div>
            <div>
              <span className={SECTION_LABEL}>Get in touch</span>
              <p className={`${BODY} mb-2`}>
                If you think it sounds interesting, please contact Helena Näverbrant.
              </p>
              <a
                href="mailto:helena@planhat.com"
                className="text-sm text-white/70 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/40 transition-colors"
              >
                helena@planhat.com
              </a>
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center gap-4">
                <img
                  src="/images/helena-naverbrant.png"
                  alt="Helena Näverbrant"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shrink-0 ring-1 ring-white/10"
                />
                <div className="min-w-0">
                  <p className="font-display font-semibold text-white text-sm mb-1">
                    Helena Näverbrant
                  </p>
                  <a
                    href={HELENA_LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-sm hover:text-white hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                    LinkedIn
                    <span aria-hidden="true">&gt;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <span className={SECTION_LABEL}>Responsibilities</span>
            <div className="space-y-4">
              {RESPONSIBILITY_SECTIONS.map((section) => (
                <div key={section.title} className="min-w-0">
                  <h4 className={SUBHEAD}>{section.title}</h4>
                  <ul className={LIST}>
                    {section.items.map((item) => (
                      <li key={item} className={LIST_ITEM}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

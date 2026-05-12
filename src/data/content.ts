export const NAV_LINKS = [
  { label: "The Platform", href: "#platform" },
  { label: "AI", href: "#ai" },
  { label: "Recognition", href: "#recognition" },
  { label: "Customer Impact", href: "#customers" },
  { label: "Culture", href: "#culture" },
  { label: "The Team", href: "#team" },
  { label: "Editorial", href: "#editorial" },
] as const;

/** Shared copy for VP RevOps role (hero intro). */
export const VP_REVOPS_ROLE_DESCRIPTION =
  "We're hiring a VP of RevOps to lead our revenue operations team, owning processes from data and systems to process and performance. The VP of RevOps will collaborate closely with senior leadership, sales teams, and other departments to ensure alignment with company goals and objectives." as const;

export const PLATFORM_PILLARS = [
  {
    num: "",
    title: "Assemble your GTM under one roof",
    desc: "Arm your go-to-market agents, teams and tools with rich context that turns post-sale truth into pre-sales intelligence.",
  },
  {
    num: "",
    title: "Deploy agents with confidence",
    desc: "Delegate processes to tightly governed agents which execute with greater speed and precision than humanly possible.",
  },
  {
    num: "",
    title: "Stay in-the-loop",
    desc: "Give your team the capability to leverage, supervise and enhance agentic outputs at scale.",
  },
] as const;

export const AI_VALUE_PROPS = [
  {
    num: "01",
    title: "Hundreds of use cases",
    desc: "Built for flexibility, not as a point solution. No-code AI Workflow builder, templated automations, tailored to your context.",
  },
  {
    num: "02",
    title: "Solve processes end-to-end",
    desc: "Integrated with leading commercial data, action and collaboration platforms. Impact comes from combining AI with rule-based automation and human action.",
  },
  {
    num: "03",
    title: "Built for commercial teams",
    desc: "Proprietary enabler layer to guide agents. Deep CX domain expertise baked in. Accelerated deployment with the AI Deployment Program (ADP).",
  },
] as const;

export const AI_USE_CASES = [
  "Generate talk-track for sales call using AI research",
  "Understand your ICP based on healthy customers",
  "Auto-generate opportunities from call transcripts",
  "Track customer news and stakeholder changes",
  "Generate executive summaries for accounts",
  "Run risk assessment on customer industry",
  "AI-powered health score using customer sentiment",
  "Identify risk drivers in my portfolio",
  "Forecast churn risk and expansion",
  "Generate a sales to CS handover",
  "Create an agenda for an upcoming EBR",
  "Analyze cross-portfolio feedback and sentiment",
  "Generate QBR talk track",
  "Categorise and prioritize product enhancement requests",
  "Generate a performance review of your CSMs",
] as const;

export const RECOGNITION_ITEMS = [
  {
    name: "Gartner",
    logo: "/images/logos/gartner.svg",
    topLabel: "2025 LEADER",
    desc: "Gartner Magic Quadrant\u2122 for Customer Success Management Platforms",
  },
  {
    name: "G2",
    logo: "/images/logos/g2.svg",
    topLabel: "stars",
    desc: "G2 Momentum Grid and Leader in 9 Categories. Based on 880+ Verified Planhat Customer Reviews.",
  },
  {
    name: "IDC",
    logo: "/images/logos/idc.svg",
    topLabel: "2024 LEADER",
    desc: "IDC MarketScape for Worldwide Customer Success Applications",
  },
] as const;

export const CUSTOMER_STATS_OPS = [
  {
    stat: "100+",
    label: "hours saved",
    quote: "We saved more than 100 hours automating email outreach during the first month of using Planhat",
    company: "Trustpilot",
  },
  {
    stat: "22%",
    label: "faster onboarding",
    quote: "We managed to decrease our project onboarding time from 9 to 7 business days",
    company: "Belkins",
  },
  {
    stat: "100%",
    label: "increased capacity",
    quote: "We went from onboarding 7-10 customers to successfully onboarding 20+ per CSM",
    company: "Hoxhunt",
  },
  {
    stat: "5+",
    label: "headcount saved",
    quote: "Planhat has saved us around 5 people in terms of headcount without sacrificing service quality",
    company: "Basis",
  },
] as const;

export const CUSTOMER_STATS_REVENUE = [
  {
    stat: "20%",
    label: "less churn",
    quote: "We came in with 20% lower churn than we had budgeted within the first year",
    company: "Macrobond",
  },
  {
    stat: "24%",
    label: "increased upsells",
    quote: "Our license upsells are 24% higher this year since we now understand our customers better",
    company: "Thrive Learning",
  },
  {
    stat: "500%",
    label: "increased scaled segment upsells",
    quote: "Our ability to identify customers due for an upgrade boosted our expansion by 500% in 1 month",
    company: "Simple Poll",
  },
  {
    stat: "10%",
    label: "increased net retention",
    quote: "In just 1 year, Planhat empowered us to increase customer retention by 10%",
    company: "Recruitee",
  },
] as const;

export const CUSTOMER_LOGOS = [
  { name: "Instacart", src: "/images/logos/instacart.svg" },
  { name: "Medtronic", src: "/images/logos/medtronic.svg" },
  { name: "Nasdaq", src: "/images/logos/nasdaq.svg" },
  { name: "Tines", src: "/images/logos/tines.svg" },
  { name: "Revolut", src: "/images/logos/revolut.svg" },
  { name: "Nutanix", src: "/images/logos/nutanix.svg" },
  { name: "Trustpilot", src: "/images/logos/trustpilot.svg" },
  { name: "Udacity", src: "/images/logos/udacity.svg" },
  { name: "Grafana", src: "/images/logos/grafana.svg" },
  { name: "Arthrex", src: "/images/logos/arthrex.svg" },
  { name: "Starship", src: "/images/logos/starship.svg" },
  { name: "Cision", src: "/images/logos/cision.svg" },
] as const;

export const OFFICE_LOCATIONS = [
  { city: "Stockholm", country: "Sweden", lat: 59.33, lng: 18.07 },
  { city: "Amsterdam", country: "Netherlands", lat: 52.37, lng: 4.90 },
  { city: "London", country: "UK", lat: 51.51, lng: -0.13 },
  { city: "New York", country: "US", lat: 40.71, lng: -74.01 },
  { city: "Boston", country: "US", lat: 42.36, lng: -71.06 },
  { city: "Atlanta", country: "US", lat: 33.75, lng: -84.39 },
  { city: "Indianapolis", country: "US", lat: 39.77, lng: -86.16 },
  { city: "Toronto", country: "Canada", lat: 43.65, lng: -79.38 },
  { city: "Los Angeles", country: "US", lat: 34.05, lng: -118.24 },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Kaveh Rostampor",
    title: "CEO & Co-founder",
    linkedin: "https://www.linkedin.com/in/kaveh-rostampor/",
    initials: "KR",
    photo: "/images/kaveh-rostampor.png",
  },
  {
    name: "Erik Holm",
    title: "CFO",
    linkedin: "https://www.linkedin.com/in/holmerik/",
    initials: "EH",
    photo: "/images/erik-holm.png",
  },
  {
    name: "Ambera Cruz",
    title: "Head of Marketing",
    linkedin: "https://www.linkedin.com/in/amberacruz/",
    initials: "AC",
    photo: "/images/ambera-cruz.png",
  },
  {
    name: "Thomas Smeallie",
    title: "VP of Sales Americas",
    linkedin: "https://www.linkedin.com/in/thomas-smeallie-34891012/",
    initials: "TS",
    photo: "/images/thomas-smeallie.png",
  },
  {
    name: "Michael Gorodisher",
    title: "Head of AI GTM",
    linkedin: "https://www.linkedin.com/in/michael-gorodisher/",
    initials: "MG",
    photo: "/images/michael-gorodisher.png",
  },
  {
    name: "Planhat",
    title: "The Company",
    linkedin: "https://www.linkedin.com/company/planhat/",
    initials: "PH",
    photo: "/images/planhat-symbol.svg",
  },
] as const;

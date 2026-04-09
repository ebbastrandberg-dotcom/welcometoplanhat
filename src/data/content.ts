export const NAV_LINKS = [
  { label: "The Platform", href: "#platform" },
  { label: "AI", href: "#ai" },
  { label: "Recognition", href: "#recognition" },
  { label: "Customers", href: "#customers" },
  { label: "Culture", href: "#culture" },
  { label: "The team", href: "#team" },
  { label: "Editorial", href: "#editorial" },
] as const;

export const PLATFORM_PILLARS = [
  {
    num: "01",
    title: "Context",
    desc: "Planhat centralizes and models your commercial reality over time — revenue, usage, signals, activity, communications, process history.",
  },
  {
    num: "02",
    title: "Agents",
    desc: "Trustworthy deployment of AI automation, informed by your commercial context, not disconnected from it.",
  },
  {
    num: "03",
    title: "Human & AI collaboration",
    desc: "AI and human collaboration in one system, architected around how your teams actually work.",
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
    org: "Gartner",
    award: "Magic Quadrant™ for Customer Success Management Platforms",
    badge: "Leader",
  },
  {
    org: "Gartner",
    award: "Leader — 2024 & 2025 (moved up year-over-year)",
    badge: "Leader",
  },
  {
    org: "IDC",
    award: "IDC MarketScape — Leader",
    badge: "Leader",
  },
  {
    org: "G2",
    award: "Momentum Grid Leader across 9 categories",
    badge: "Leader",
  },
] as const;

export const CUSTOMER_STATS = [
  {
    stat: "100+",
    label: "hours saved",
    quote: "Saved more than 100 hours automating email outreach in the first month",
    company: "Trustpilot",
  },
  {
    stat: "22%",
    label: "faster onboarding",
    quote: "Decreased project onboarding time from 9 to 7 business days",
    company: "Macrobond",
  },
  {
    stat: "20%",
    label: "less churn",
    quote: "Came in with 20% lower churn than budgeted within the first year",
    company: "Thrive Learning",
  },
  {
    stat: "500%",
    label: "increased upsells",
    quote: "Ability to identify customers due for an upgrade boosted expansion by 500% in 1 month",
    company: "Simple Poll",
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
    name: "Alberto Lambert",
    title: "Creative Director",
    linkedin: "https://www.linkedin.com/in/albertolambert/",
    initials: "AL",
    photo: "/images/alberto-lambert.png",
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
    title: "Follow the company",
    linkedin: "https://www.linkedin.com/company/planhat/",
    initials: "PH",
    photo: "/favicon-light.svg",
  },
] as const;

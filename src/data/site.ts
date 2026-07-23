export type Platform = {
  id: "meta" | "tiktok" | "snapchat";
  name: string;
  colorClass: string;
  placements: string[];
  description: string;
};

export const platforms: Platform[] = [
  {
    id: "meta",
    name: "Meta",
    colorClass: "text-meta",
    placements: ["Facebook Feed", "Instagram Reels", "Stories", "Audience Network"],
    description:
      "Sync catalogs, launch Advantage+ campaigns, and rebalance budgets across Facebook and Instagram placements automatically.",
  },
  {
    id: "tiktok",
    name: "TikTok",
    colorClass: "text-tiktok",
    placements: ["For You Feed", "Spark Ads", "TopView", "Search Ads"],
    description:
      "Rotate creatives before fatigue hits, boost top organic posts as Spark Ads, and scale winning hooks with automated rules.",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    colorClass: "text-snapchat",
    placements: ["Snap Ads", "Story Ads", "Collection Ads", "AR Lenses"],
    description:
      "Mirror your best-performing Meta and TikTok campaigns to Snapchat in one click, with bids tuned to Snap's auction.",
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: "launch" | "budget" | "creative" | "rules" | "reporting" | "audience";
};

export const features: Feature[] = [
  {
    icon: "launch",
    title: "One-click cross-platform launch",
    description:
      "Build a campaign once and publish it to Meta, TikTok, and Snapchat simultaneously — formats, placements, and specs adapted per platform.",
  },
  {
    icon: "budget",
    title: "Automated budget reallocation",
    description:
      "AdOrbit shifts spend toward the platforms, ad sets, and creatives delivering the best CPA or ROAS — every hour, not every Monday.",
  },
  {
    icon: "creative",
    title: "Creative fatigue detection",
    description:
      "Frequency and CTR-decay monitoring flags tired creatives and rotates fresh variants in automatically before performance drops.",
  },
  {
    icon: "rules",
    title: "Custom automation rules",
    description:
      "Pause anything above target CPA, duplicate winners, scale budgets on ROAS thresholds — build rules in plain language, no scripts.",
  },
  {
    icon: "reporting",
    title: "Unified cross-channel reporting",
    description:
      "One dashboard for spend, CPA, ROAS, and creative performance across all three platforms, with scheduled reports to Slack or email.",
  },
  {
    icon: "audience",
    title: "Audience sync & mirroring",
    description:
      "Push your CRM segments and lookalikes to every platform at once, and keep exclusion lists in sync so you never waste retargeting spend.",
  },
];

export const steps = [
  {
    title: "Connect your ad accounts",
    description:
      "OAuth into Meta, TikTok, and Snapchat in under two minutes. AdOrbit imports your campaigns, pixels, and audiences automatically.",
  },
  {
    title: "Set your targets",
    description:
      "Tell AdOrbit your target CPA or ROAS per platform. Import existing rules or start from proven automation templates.",
  },
  {
    title: "Launch & let it optimize",
    description:
      "Publish cross-platform campaigns in one click. Budgets rebalance, creatives rotate, and underperformers pause — automatically.",
  },
];

export const stats = [
  { value: "32%", label: "average CPA reduction in 60 days" },
  { value: "11h", label: "saved per media buyer, per week" },
  { value: "3×", label: "faster campaign launches" },
  { value: "$40M+", label: "ad spend managed monthly" },
];

export const testimonials = [
  {
    quote:
      "We manage 40+ client accounts across Meta and TikTok. AdOrbit's budget automation cut our average CPA by 28% and gave my team their evenings back.",
    name: "Sarah Okafor",
    role: "Head of Paid Social, Brightline Agency",
  },
  {
    quote:
      "Launching on Snapchat used to be an afterthought because of the overhead. Now we mirror our winning Meta campaigns there in minutes — it's become our cheapest channel.",
    name: "Diego Ramírez",
    role: "Growth Lead, Loop Commerce",
  },
  {
    quote:
      "The creative fatigue alerts alone pay for the platform. We stopped burning spend on tired ads and our ROAS is up 41% quarter over quarter.",
    name: "Mei-Ling Chen",
    role: "Performance Marketing Director, Vanta Apparel",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$249",
    period: "/month",
    description: "For in-house teams getting started with automation.",
    features: [
      "Up to $25k monthly ad spend",
      "Meta, TikTok & Snapchat",
      "10 automation rules",
      "Cross-channel dashboard",
      "Email support",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$649",
    period: "/month",
    description: "For scaling brands and small agencies.",
    features: [
      "Up to $150k monthly ad spend",
      "Unlimited automation rules",
      "Creative fatigue detection",
      "Audience sync & mirroring",
      "Slack reports & alerts",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For agencies and brands with serious volume.",
    features: [
      "Unlimited ad spend",
      "Multi-workspace & client seats",
      "API access & custom integrations",
      "Dedicated account manager",
      "SLA & SSO/SAML",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "Which platforms does AdOrbit support?",
    answer:
      "AdOrbit connects natively to Meta Ads (Facebook & Instagram), TikTok Ads Manager, and Snapchat Ads Manager via their official marketing APIs. Google and LinkedIn support are on our roadmap.",
  },
  {
    question: "Do I need to rebuild my existing campaigns?",
    answer:
      "No. When you connect an ad account, AdOrbit imports your existing campaigns, ad sets, audiences, and pixels. You can apply automation rules to live campaigns immediately without relaunching anything.",
  },
  {
    question: "How does automated budget reallocation work?",
    answer:
      "You set a target CPA or ROAS per campaign or per platform. AdOrbit checks performance hourly and shifts budget from underperforming ad sets to the ones beating your target, within guardrails you define — like maximum daily change or minimum spend floors.",
  },
  {
    question: "Is my ad account data safe?",
    answer:
      "Yes. AdOrbit uses read/write scopes granted through each platform's official OAuth flow — we never see your passwords. Data is encrypted in transit and at rest, and we're SOC 2 Type II compliant.",
  },
  {
    question: "Can agencies manage multiple client accounts?",
    answer:
      "Yes. Growth and Enterprise plans support multiple workspaces, so each client's ad accounts, rules, and reports stay separate, with role-based access for your team and read-only views for clients.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Every plan starts with a 14-day free trial with full features and no credit card required. You can also book a demo and we'll set up your first automations with you.",
  },
];

export const trustedBy = [
  "Brightline",
  "Loop Commerce",
  "Vanta Apparel",
  "Northbeam Goods",
  "Klick Media",
  "Solstice Beauty",
  "Ferra Digital",
  "Pinnacle DTC",
];

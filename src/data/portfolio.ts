export const skills = [
  {
    icon: "🛒",
    title: "E-commerce & B2B Growth",
    desc: "Scaling online stores and B2B pipelines with structured, revenue-first campaign architecture.",
  },
  {
    icon: "🎯",
    title: "Full-Funnel Performance Marketing",
    desc: "Awareness to conversion to retention across Meta, Google, LinkedIn, Snapchat, X & YouTube.",
  },
  {
    icon: "📈",
    title: "B2B Demand Generation",
    desc: "Account-based marketing and lead engines that deliver qualified, sales-ready demand.",
  },
  {
    icon: "📊",
    title: "Data-Driven Strategy & Analytics",
    desc: "GA4, Firebase, Adjust & GTM — tracking, attribution and decisions grounded in data.",
  },
  {
    icon: "🔁",
    title: "Marketing Strategy & Retention",
    desc: "Lifecycle and retention optimization that compounds LTV well beyond first purchase.",
  },
  {
    icon: "📱",
    title: "Mobile App Marketing",
    desc: "App install and in-app action campaigns tuned for scale and cost-efficient growth.",
  },
  {
    icon: "⚙️",
    title: "CRM Automation & Dashboards",
    desc: "Building automated pipelines, lead scoring, and reporting dashboards — expert in HubSpot, Zoho CRM & Go High Level.",
  },
];

export const metrics = [
  {
    value: "15.7x",
    label: "Return on Ad Spend",
    detail: "E-commerce, on 2.55M EGP managed spend",
  },
  {
    value: "25K+",
    label: "Website Purchases",
    detail: "Avg. order value 1,500 EGP",
  },
  {
    value: "2,750+",
    label: "Qualified Leads",
    detail: "Real estate — CPL down to 40 LE",
  },
  {
    value: "55K",
    label: "App Installs",
    detail: "Glamera mobile, ~4% conversion rate",
  },
];

export interface CaseStat {
  v: string;
  l: string;
}

export interface CaseGroup {
  account: string;
  industry: string;
  meta: string;
  stats: CaseStat[];
}

export const caseGroups: CaseGroup[] = [
  {
    account: "Glamera",
    industry: "E-commerce App",
    meta: "Google · Meta · Egypt & KSA",
    stats: [
      { v: "1.2M", l: "Impressions" },
      { v: "55K", l: "App Installs" },
      { v: "18K", l: "App Sessions" },
      { v: "3.2K", l: "Adds to Cart" },
      { v: "1K", l: "Conversions" },
      { v: "4%", l: "Conv. Rate" },
      { v: "190", l: "B2B Leads" },
      { v: "50 LE", l: "In-bound CPA" },
    ],
  },
  {
    account: "Mahara",
    industry: "Mobile App",
    meta: "App Install & In-App Actions",
    stats: [
      { v: "15,000", l: "App Installs" },
      { v: "EGP 5", l: "Cost / Install" },
      { v: "EGP 75K", l: "Budget Spent" },
      { v: "3,750", l: "Complete Registration" },
      { v: "2,250", l: "Adds to Cart" },
      { v: "1,500", l: "Mobile Purchases" },
    ],
  },
  {
    account: "Real Estate Portfolio",
    industry: "Real Estate",
    meta: "Meta & Google SEM · Egypt",
    stats: [
      { v: "185K", l: "Budget (LE)" },
      { v: "2,750", l: "Total Leads" },
      { v: "40 LE", l: "Lowest CPL" },
      { v: "15 LE", l: "SEM Cost/Conv." },
      { v: "3.6%", l: "Conv. Rate" },
    ],
  },
  {
    account: "Shanelz",
    industry: "E-commerce",
    meta: "Meta Ads EG & SA",
    stats: [
      { v: "15.7x", l: "Peak ROAS" },
      { v: "£1.9M", l: "Revenue" },
      { v: "2,487", l: "Orders" },
      { v: "£148", l: "Avg. CPA" },
      { v: "22%", l: "Lead Conv. Rate" },
      { v: "250K", l: "Landing-Page Views" },
    ],
  },
  {
    account: "Online Store",
    industry: "E-commerce / Shopify",
    meta: "Shopify Analytics · Egypt",
    stats: [
      { v: "E£10M", l: "Total Sales" },
      { v: "9,310", l: "Orders" },
      { v: "E£1,046", l: "Avg. Order Value" },
      { v: "1.3M", l: "Store Sessions" },
      { v: "+325%", l: "Peak Month Growth" },
    ],
  },
  {
    account: "Brite",
    industry: "B2B SaaS · HRMS",
    meta: "Demand Gen · Companies / HR Teams",
    stats: [
      { v: "EGP 300K", l: "Budget Spent" },
      { v: "3,500", l: "Leads" },
      { v: "EGP 86", l: "Cost / Lead" },
      { v: "25%", l: "MQL Rate" },
      { v: "15%", l: "SQL Rate" },
      { v: "10%", l: "Closed-Deal Rate" },
    ],
  },
  {
    account: "Snapchat Portfolio",
    industry: "Social Commerce",
    meta: "Snapchat Ads · KSA & Multi-market",
    stats: [
      { v: "14.4x", l: "Peak ROAS" },
      { v: "$0.09", l: "Lowest eCPC" },
      { v: "184", l: "Purchases (top acct)" },
      { v: "$13.00", l: "Cost / Purchase" },
      { v: "3.3M+", l: "Impressions" },
    ],
  },
];

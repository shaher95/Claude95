import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdOrbit | Automate Your Social Ads on Meta, TikTok & Snapchat",
  description:
    "AdOrbit is the B2B platform that automates campaign launches, budget optimization, and creative testing across Meta, TikTok, and Snapchat — from one dashboard.",
  keywords:
    "social media ads automation, Meta ads, TikTok ads, Snapchat ads, B2B ad platform, budget optimization, creative testing",
  openGraph: {
    title: "AdOrbit | Social Ads Automation for Meta, TikTok & Snapchat",
    description:
      "Launch, optimize, and scale paid social campaigns across three platforms from one dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

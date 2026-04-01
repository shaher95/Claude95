import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NahdiCare | Himalaya Purifying Neem Face Wash",
  description:
    "Shop Himalaya Purifying Neem Face Wash at NahdiCare - Saudi Arabia's trusted online pharmacy for personal care, skincare, and health products. SFDA approved.",
  keywords:
    "pharmacy, Saudi Arabia, personal care, face wash, Himalaya, neem, skincare, SFDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

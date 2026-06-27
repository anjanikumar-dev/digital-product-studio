import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Anjani Kumar | Digital Product Studio",
  description: "Business Analyst & Product Strategist helping enterprises turn complex challenges into digital products people love using.",
  keywords: "Business Analyst, Product Strategist, Digital Products, UX Design, System Design, Agile Delivery",
  authors: [{ name: "Anjani Kumar" }],
  openGraph: {
    title: "Anjani Kumar | Digital Product Studio",
    description: "Business Analyst & Product Strategist helping enterprises turn complex challenges into digital products people love using.",
    url: "https://digital-product-studio.netlify.app",
    siteName: "Digital Product Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
  suppressHydrationWarning
>
  {children}

  <GoogleAnalytics gaId="G-J7T77XLRXF" />
</body>
    </html>
  );
}
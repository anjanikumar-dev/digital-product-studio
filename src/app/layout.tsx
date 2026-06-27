import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://anjanikumar-dev.netlify.app"),

  title: {
    default: "Anjani Kumar | Senior Business Analyst & Product Strategist",
    template: "%s | Anjani Kumar",
  },

  description:
    "Senior Business Analyst with 5+ years of experience delivering Government, Cybersecurity, HRMS, LMS, and Digital Product solutions. Turning complex business problems into scalable digital products.",

  keywords: [
    "Senior Business Analyst",
    "Business Analyst Portfolio",
    "Product Strategist",
    "Product Discovery",
    "Requirements Gathering",
    "Business Analysis",
    "Digital Transformation",
    "Government Projects",
    "Cyber Security",
    "HRMS",
    "LMS",
    "UX Design",
    "System Design",
    "Agile",
    "Digital Products",
    "Business Process Improvement",
    "Product Management",
  ],

  authors: [{ name: "Anjani Kumar" }],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Anjani Kumar | Senior Business Analyst & Product Strategist",
    description:
      "Senior Business Analyst helping enterprises transform complex business challenges into scalable digital products.",

    url: "https://anjanikumar-dev.netlify.app",

    siteName: "Digital Product Studio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anjani Kumar | Senior Business Analyst",
    description:
      "Business Analyst helping enterprises build scalable digital products through strategy, UX and technology.",
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
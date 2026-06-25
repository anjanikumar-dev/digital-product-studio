import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Product Studio",
  description: "Turning Ideas into Digital Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
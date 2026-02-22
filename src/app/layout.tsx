import type { Metadata } from "next";
import { Crimson_Text, Fraunces } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bedtime Stories — Create Your Story",
  description:
    "Create personalized bedtime stories. Choose age, theme, humour, calmness and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimson.variable} ${fraunces.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}

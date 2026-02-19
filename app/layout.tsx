import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Musa — Product Designer & Developer",
    template: "%s — Musa",
  },
  description:
    "Crafting digital experiences where clarity meets craft. Product design, frontend engineering, and strategy.",
  metadataBase: new URL("https://musa.dev"),
  openGraph: {
    title: "Musa — Product Designer & Developer",
    description:
      "Crafting digital experiences where clarity meets craft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-bg text-off-white min-h-screen flex flex-col antialiased">
        <CursorGlow />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

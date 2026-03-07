import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
  weight: ["800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Yacum — First in Innovation",
    template: "%s — Yacum",
  },
  description:
    "A design-led development studio turning ideas into clean, thoughtful digital products that just work.",
  metadataBase: new URL("https://yacum.in"),
  openGraph: {
    title: "Yacum — First in Innovation",
    description:
      "A design-led development studio turning ideas into clean, thoughtful digital products that just work.",
    url: "https://yacum.in",
    siteName: "Yacum",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacum — First in Innovation",
    description:
      "A design-led development studio turning ideas into clean, thoughtful digital products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${leagueSpartan.variable}`}>
      <body className="font-sans bg-bg text-off-white min-h-screen flex flex-col antialiased">
        <CursorGlow />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

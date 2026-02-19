import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A curated collection of projects spanning product design, full-stack development, and creative technology by Musa.",
  openGraph: {
    title: "Work — Musa",
    description:
      "A curated collection of projects spanning product design, full-stack development, and creative technology.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

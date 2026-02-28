import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Yacum — a designer-developer hybrid working at the intersection of design and engineering.",
  openGraph: {
    title: "About — Yacum",
    description:
      "Learn about Yacum — a designer-developer hybrid working at the intersection of design and engineering.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

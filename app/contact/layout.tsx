import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Yacum for project inquiries, collaborations, or just to say hello.",
  openGraph: {
    title: "Contact — Yacum",
    description:
      "Get in touch with Yacum for project inquiries, collaborations, or just to say hello.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string[];
  role: string;
  tags: string[];
  year: string;
  featured: boolean;
  link?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  name: string;
  category: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface SiteData {
  profile: {
    name: string;
    title: string;
    tagline: string;
    shortBio: string;
  };
  about: {
    intro: string;
    paragraphs: string[];
    highlights: string[];
  };
  stats: Stat[];
  services: Service[];
  approach: {
    title: string;
    description: string;
    principles: { title: string; description: string }[];
  };
  tools: Tool[];
  timeline: TimelineEntry[];
  philosophy: {
    heading: string;
    body: string;
  };
  cta: {
    heading: string;
    subtext: string;
    email: string;
  };
  contact: {
    heading: string;
    subtext: string;
    email: string;
    socials: { label: string; url: string }[];
  };
  projects: Project[];
  company: {
    name: string;
    description: string;
    url: string;
  };
}

export const siteData: SiteData = {
  profile: {
    name: "Musa",
    title: "Product Designer & Developer",
    tagline: "I design and build things for the web.",
    shortBio:
      "A designer who codes \u2014 turning ideas into clean, thoughtful digital products that just work.",
  },
  about: {
    intro:
      "I\u2019m a designer-developer hybrid with a deep interest in systems, interfaces, and the invisible logic that makes products feel effortless.",
    paragraphs: [
      "My work spans product design, frontend engineering, and strategy \u2014 often all three at once. I believe great software should feel obvious the moment you touch it.",
      "I\u2019ve built platforms from zero to scale, led cross-functional teams, and consulted on products across fintech, logistics, education, and consumer apps.",
      "When I\u2019m not designing or building, I\u2019m usually reading about Islamic scholarship, cosmology, or the philosophy of technology.",
    ],
    highlights: [
      "Full-Stack Development",
      "Product Strategy",
      "UI/UX Design",
      "Systems Thinking",
    ],
  },
  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "10+", label: "Happy Clients" },
    { value: "3", label: "Industries Served" },
  ],
  services: [
{
      title: "Frontend Engineering",
      description:
        "Pixel-perfect, performant interfaces built with React, Next.js, and modern web technologies.",
      icon: "code",
    },
    {
      title: "Full-Stack Development",
      description:
        "Complete application architecture \u2014 APIs, databases, authentication, and deployment pipelines.",
      icon: "stack",
    },
  ],
  approach: {
    title: "How I Work",
    description:
      "Every project follows a process rooted in clarity, iteration, and craft.",
    principles: [
      {
        title: "Understand First",
        description:
          "Deep-dive into the problem space, users, and business context before touching a single pixel.",
      },
      {
        title: "Design with Intent",
        description:
          "Every decision \u2014 from layout to micro-interaction \u2014 serves a purpose and earns its place.",
      },
      {
        title: "Build with Precision",
        description:
          "Clean, maintainable code that performs beautifully and scales gracefully.",
      },
      {
        title: "Iterate Relentlessly",
        description:
          "Ship, learn, refine. The best products are shaped by real feedback, not assumptions.",
      },
    ],
  },
  tools: [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "React Native", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "Figma", category: "Design" },
    { name: "Adobe Suite", category: "Design" },
    { name: "Git", category: "DevOps" },
    { name: "Vercel", category: "DevOps" },
    { name: "Docker", category: "DevOps" },
  ],
  timeline: [
    {
      year: "2024",
      title: "Scaling Products & Ventures",
      description:
        "Led development on multiple platforms including SRVE and Bake N' Shake. Expanded Yacum\u2019s portfolio across industries.",
    },
    {
      year: "2023",
      title: "Deep into Full-Stack",
      description:
        "Built end-to-end applications, explored AI integrations, and sharpened expertise in React Native and Node.js.",
    },
    {
      year: "2022",
      title: "Design Meets Code",
      description:
        "Transitioned from pure design into frontend engineering. Started bridging the gap between Figma and production.",
    },
    {
      year: "2021",
      title: "The Beginning",
      description:
        "Started the journey into product design and web development. Built first client projects and discovered the craft.",
    },
  ],
  philosophy: {
    heading: "What I Believe",
    body: "Great products aren\u2019t just functional \u2014 they carry intent in every detail. I believe technology should serve people with clarity, beauty, and purpose. The best interfaces disappear, leaving only the experience.",
  },
  cta: {
    heading: "Let\u2019s Build Something Together",
    subtext:
      "Have a project in mind or want to collaborate? I\u2019m always open to conversations about design, engineering, and new ideas.",
    email: "hello@musa.dev",
  },
  contact: {
    heading: "Get in Touch",
    subtext:
      "Whether you have a project idea, a question, or just want to say hello \u2014 my inbox is always open.",
    email: "hello@musa.dev",
    socials: [
      { label: "GitHub", url: "https://github.com" },
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Twitter / X", url: "https://x.com" },
    ],
  },
  projects: [
    {
      id: "t3-the-think-tank",
      title: "T3 The Think Tank",
      category: "Web Design & Development",
      description:
        "I designed and built the website for T3 \u2014 a humane technology company. Clean, purposeful, and true to what they stand for.",
      longDescription: [
        "T3 The Think Tank is all about humane technology \u2014 building tech that genuinely serves people. They needed a website that reflected that philosophy without overcomplicating things.",
        "I worked on both the design and development from start to finish. The goal was to keep it clean and intentional \u2014 every element on the page earns its place. No clutter, no gimmicks, just clarity.",
        "The design leans into whitespace, thoughtful typography, and subtle interactions that feel polished without being distracting. It\u2019s meant to feel calm and trustworthy, which is exactly what a company like T3 needs.",
        "Built it with Next.js for performance and SEO, styled with Tailwind CSS, and deployed on Vercel. The site loads fast, looks sharp on every device, and communicates T3\u2019s mission the moment you land on it.",
      ],
      role: "Designer & Developer",
      tags: ["Next.js", "Tailwind CSS", "Web Design", "Vercel"],
      year: "2025",
      featured: true,
      link: "https://t-3.in",
    },
    {
      id: "magnaperitus",
      title: "Magnaperitus",
      category: "Web Design & Development",
      description:
        "I designed and developed the website for Magnaperitus \u2014 a law firm that needed a digital presence as sharp and professional as their practice.",
      longDescription: [
        "Magnaperitus is a law firm that needed a website to match the credibility and professionalism they bring to their clients. The old online presence wasn\u2019t cutting it, so they came to me for a complete redesign and build.",
        "The approach was straightforward \u2014 make it look trustworthy, make it easy to navigate, and make it fast. Law firms don\u2019t need flashy animations or trendy layouts. They need clarity and authority.",
        "I focused on strong typography, a clean structure, and a color palette that feels serious without being cold. Every page is designed to guide potential clients toward getting in touch.",
        "Built with Next.js and Tailwind CSS for a fast, responsive experience. The site works beautifully on every screen size and loads in under a second.",
      ],
      role: "Designer & Developer",
      tags: ["Next.js", "Tailwind CSS", "Web Design", "Vercel"],
      year: "2025",
      featured: true,
      link: "https://magnaperitus.in",
    },
  ],
  company: {
    name: "Yacum",
    description: "",
    url: "https://yacum.in",
  },
};

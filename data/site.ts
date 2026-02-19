export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
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
    name: "Adnan",
    title: "Product Designer & Developer",
    tagline: "Crafting digital experiences where clarity meets craft.",
    shortBio:
      "I work at the intersection of design and engineering \u2014 building products that feel inevitable.",
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
      title: "Product Design",
      description:
        "End-to-end product design from research and wireframes to high-fidelity prototypes and design systems.",
      icon: "design",
    },
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
    {
      title: "Strategy & Consulting",
      description:
        "Product strategy, technical consulting, and roadmap planning for startups and growing teams.",
      icon: "strategy",
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
    email: "hello@adnan.dev",
  },
  contact: {
    heading: "Get in Touch",
    subtext:
      "Whether you have a project idea, a question, or just want to say hello \u2014 my inbox is always open.",
    email: "hello@adnan.dev",
    socials: [
      { label: "GitHub", url: "https://github.com" },
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Twitter / X", url: "https://x.com" },
    ],
  },
  projects: [
    {
      id: "srve",
      title: "SRVE Platform",
      category: "Product Design & Engineering",
      description:
        "A dual-module meat delivery and Qurbani service platform \u2014 built from zero with customer apps, delivery tools, and a full admin system.",
      tags: ["React Native", "Node.js", "MongoDB", "Full-Stack"],
      year: "2024",
      featured: true,
    },
    {
      id: "bake-n-shake",
      title: "Bake N' Shake",
      category: "E-Commerce & UX",
      description:
        "Bakery chain e-commerce platform with an AI-powered custom cake builder \u2014 blending commerce with delight.",
      tags: ["Next.js", "E-Commerce", "AI"],
      year: "2024",
      featured: false,
    },
    {
      id: "magnaperitus",
      title: "Magnaperitus Law Firm",
      category: "Web Design",
      description:
        "Premium website for a Bhopal-based law firm \u2014 sophisticated branding, performant build, zero compromise.",
      tags: ["Web Design", "Next.js", "Branding"],
      year: "2024",
      featured: false,
    },
  ],
  company: {
    name: "Yacum",
    description: "We build digital products and ventures. Visit our studio.",
    url: "https://yacum.in",
  },
};

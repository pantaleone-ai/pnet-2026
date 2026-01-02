// config/site.ts
export const siteConfig = {
  name: "Pantaleone AI",
  description: "Senior Next.js Systems Architect & AI Engineering.",
  url: "https://pantaleone.net",
  ogImage: "https://pantaleone.net/og.jpg",
  metadataBase: new URL("https://pantaleone.net"),
  keywords: ["Next.js", "React", "AI", "Systems Architecture"],
  links: {
    twitter: "https://twitter.com/pantaleone_ai",
    github: "https://github.com/pantaleone-ai",
    linkedin: "https://linkedin.com/in/pantaleone",
  },
};

export type SiteConfig = typeof siteConfig;
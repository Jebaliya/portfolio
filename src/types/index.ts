export interface NavLink {
  text: string;
  href: string;
}

export interface SocialLink {
  text: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
  siteLogo: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  socialImage: string;
  canonicalURL?: string;
}

export interface HeroContent {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  tags: string[];
  resumeHref: string;
  location: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
  kind: "work" | "education";
}

export interface ProjectItem {
  name: string;
  summary: string;
  image: string;
  stack: string[];
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutContent {
  description: string;
  image: string;
  focusAreas: string[];
}

export interface SiteContent {
  hero: HeroContent;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  about: AboutContent;
}

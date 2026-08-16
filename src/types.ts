export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'web' | 'database' | 'cloud';
  description?: string;
  level?: string;
  badge?: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  featured: boolean;
  githubProfileUrl: string;
  repoUrl?: string;
  liveDemoUrl?: string;
  repoUrlPlaceholder?: string;
  liveDemoPlaceholder?: string;
  keyFeatures: string[];
  category: string;
  metrics?: { label: string; value: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  code: string;
  credentialUrl?: string;
  credlyUrl?: string;
  credentialUrlPlaceholder?: string;
  dateEarned?: string;
  description: string;
  skillsMeasured: string[];
  badgeColor?: string;
}

export interface Education {
  id: string;
  degree: string;
  specialization: string;
  status: string;
  currentYear: string;
  institutionPlaceholder?: string;
  overview: string;
  focusAreas: string[];
}

export interface SocialLinks {
  email: string;
  linkedIn: string;
  github: string;
}

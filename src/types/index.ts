export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI & ML' | 'Frontend' | 'Cloud & Systems';
  year: string;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  keyLearnings: string[];
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  description: string[];
  technologies: string[];
  type: 'Internship' | 'Leadership' | 'Open Source';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Proficient' | 'Exploring';
    iconName?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  shortName: string;
  degree: string;
  period: string;
  score?: string;
  highlights: string[];
  current?: boolean;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  url?: string;
}

export interface BeyondCodeTopic {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  status: string;
}

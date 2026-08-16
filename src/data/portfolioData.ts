import {
  NavItem,
  SkillCategoryGroup,
  Project,
  Achievement,
  Education,
  SocialLinks,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Divyanshi Varshney',
  title: 'AI/ML Student, 2nd Year',
  roleFocus: 'Aspiring Machine Learning Engineer',
  shortIntro:
    'I am an aspiring machine learning engineer passionate about building practical, data-driven solutions and continually learning new technologies.',
  extendedAbout:
    'Currently in my second year of B.Tech in Artificial Intelligence and Machine Learning, I focus on combining foundational computational principles with modern data techniques. My goal is to engineer practical ML solutions that derive actionable value from complex data, while continuously broadening my expertise across modern cloud systems and software development.',
  status: 'Open to AI/ML internships & collaborative projects',
};

export const SOCIAL_LINKS: SocialLinks = {
  email: 'varshneydivyanshi60@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/divyanshi-varshney-9b2a15411',
  github: 'https://github.com/DivyanshiVarshney',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'nav-home', label: 'Home', href: '#home' },
  { id: 'nav-about', label: 'About', href: '#about' },
  { id: 'nav-skills', label: 'Skills', href: '#skills' },
  { id: 'nav-projects', label: 'Projects', href: '#projects' },
  { id: 'nav-achievements', label: 'Achievements', href: '#achievements' },
  { id: 'nav-education', label: 'Education', href: '#education' },
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages for algorithm design, data structures, and ML logic.',
    skills: [
      {
        name: 'Python',
        category: 'programming',
        description: 'Primary language for data manipulation, ML workflows, and scripting.',
        level: 'Core Focus',
      },
      {
        name: 'C',
        category: 'programming',
        description: 'Low-level fundamentals, memory management, and structured logic.',
        level: 'Foundational',
      },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Building responsive user interfaces and interactive dashboards.',
    skills: [
      {
        name: 'HTML',
        category: 'web',
        description: 'Semantic markup and accessible web document structure.',
        level: 'Proficient',
      },
      {
        name: 'CSS',
        category: 'web',
        description: 'Modern responsive layout, styling, and visual aesthetics.',
        level: 'Proficient',
      },
      {
        name: 'JavaScript',
        category: 'web',
        description: 'Client-side interactivity, DOM handling, and dynamic data rendering.',
        level: 'Proficient',
      },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Relational data querying and structured persistence.',
    skills: [
      {
        name: 'SQL',
        category: 'database',
        description: 'Writing relational queries, aggregations, filtering, and data schema handling.',
        level: 'Core Focus',
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    description: 'Cloud architecture fundamentals and cloud-native solutions.',
    skills: [
      {
        name: 'Cloud Computing Basics',
        category: 'cloud',
        description: 'Core concepts of cloud services (IaaS, PaaS, SaaS), virtualization, and Microsoft Azure foundations.',
        level: 'AZ-900 Certified',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'sales-dashboard',
    title: 'Sales Intelligence & Analytics Dashboard',
    tagline: 'Real-time revenue metrics, representative leaderboards & data analytics engine',
    description:
      'A comprehensive, real-time sales intelligence platform built to monitor enterprise revenue pipelines, compute key performance indicators (MTD revenue, order velocity, AOV, daily growth), and visualize representative performance through structured analytics.',
    technologies: ['Python', 'SQL', 'JavaScript', 'HTML5/CSS3', 'Supabase', 'Analytics'],
    featured: true,
    category: 'Data Analytics & Web',
    githubProfileUrl: 'https://github.com/DivyanshiVarshney',
    repoUrl: 'https://github.com/DivyanshiVarshney/Sales_analysis',
    liveDemoUrl: 'https://divyanshi-sales-analytics-2026.web.app',
    keyFeatures: [
      'Live Revenue Pipeline tracking with real-time MTD calculations ($541K+)',
      'Representative-level filtering and performance leaderboard breakdowns',
      'Daily performance tracking with split revenue trends and sales volume charts',
      'Relational database integration and SQL-driven transaction aggregation',
      'Python data modeling for statistical anomaly detection and metric validation',
    ],
    metrics: [
      { label: 'Total Revenue (MTD)', value: '$541,120.75' },
      { label: 'Tracked Orders', value: '366 Orders' },
      { label: 'Avg Order Value (AOV)', value: '$1,478.47' },
      { label: 'Data Stack', value: 'Python + SQL + Supabase' },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'azure-az900',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    code: 'AZ-900: Microsoft Azure Fundamentals',
    credentialUrl:
      'https://www.credly.com/badges/01018178-d18c-49ea-b449-a3da39e680e4/public_url',
    credlyUrl:
      'https://www.credly.com/badges/01018178-d18c-49ea-b449-a3da39e680e4/public_url',
    description:
      'Demonstrated foundational knowledge of cloud concepts, Microsoft Azure architectural components, security, privacy, compliance, and cloud pricing and support.',
    skillsMeasured: [
      'Cloud Concepts & Service Models',
      'Azure Core Architecture & Services',
      'Azure Management & Governance',
      'Security, Privacy & Compliance Essentials',
    ],
    badgeColor: 'blue',
  },
];

export const EDUCATION: Education = {
  id: 'btech-aiml',
  degree: 'B.Tech in Artificial Intelligence and Machine Learning',
  specialization: 'Artificial Intelligence & Machine Learning',
  status: 'In Progress',
  currentYear: 'Second-year student',
  overview:
    'Enrolled in an intensive engineering program focused on mathematical foundations, algorithm design, data engineering, and modern machine learning techniques.',
  focusAreas: [
    'Machine Learning & Predictive Modeling Foundations',
    'Data Structures & Algorithmic Problem Solving',
    'Relational Database Management Systems (SQL)',
    'Object-Oriented & Structured Programming (Python, C)',
    'Cloud Systems & Modern Computing Architecture',
  ],
};

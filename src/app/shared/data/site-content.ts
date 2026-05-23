export interface NavItem {
  readonly label: string;
  readonly path: string;
}

export interface Service {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly bullets: readonly string[];
}

export interface CaseStudy {
  readonly title: string;
  readonly problem: string;
  readonly solution: string;
  readonly stack: readonly string[];
  readonly impact: readonly string[];
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' }
];

export const services: readonly Service[] = [
  {
    title: 'SaaS Product Development',
    description: 'Multi-tenant platforms, subscriptions, dashboards, permissions, and workflows built for scale.',
    icon: 'boxes',
    bullets: ['Tenant-aware architecture', 'Product analytics', 'Release-ready foundations']
  },
  {
    title: 'Web & Mobile Applications',
    description: 'Responsive product experiences that feel fast, polished, and dependable across devices.',
    icon: 'smartphone',
    bullets: ['Angular and modern web apps', 'PWA-ready interfaces', 'Mobile-first delivery']
  },
  {
    title: 'Frontend Architecture',
    description: 'Design systems, component platforms, and maintainable frontend patterns for growing teams.',
    icon: 'layers',
    bullets: ['Reusable UI systems', 'State and routing strategy', 'Performance budgets']
  },
  {
    title: 'Backend & API Engineering',
    description: 'Secure services, integrations, data models, and APIs that stay clean as products expand.',
    icon: 'database',
    bullets: ['REST and event-driven APIs', 'Role-based access', 'Observability hooks']
  },
  {
    title: 'AI-assisted Automation',
    description: 'AI workflows that reduce manual work while preserving control, auditability, and reliability.',
    icon: 'bot',
    bullets: ['AI copilots', 'Document and CRM workflows', 'Human-in-the-loop systems']
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud-native delivery pipelines, infrastructure foundations, and deployment systems.',
    icon: 'cloud',
    bullets: ['CI/CD automation', 'Containerized services', 'Cloud cost awareness']
  },
  {
    title: 'UI/UX Engineering',
    description: 'Product-minded interface engineering that converts strategy into elegant production UI.',
    icon: 'palette',
    bullets: ['Design-to-code systems', 'Interaction polish', 'Accessibility-minded UI']
  },
  {
    title: 'Performance Optimization',
    description: 'Measure, tune, and harden the full user journey from first paint to backend response.',
    icon: 'gauge',
    bullets: ['Core Web Vitals', 'Bundle analysis', 'API latency reduction']
  }
];

export const caseStudies: readonly CaseStudy[] = [
  {
    title: 'Multi-tenant SaaS workflow platform',
    problem: 'A growing operations team needed configurable workflows, tenant isolation, and role-based collaboration without slowing feature delivery.',
    solution: 'Webstacklabs designed a modular SaaS foundation with workflow builders, audit trails, secure permissions, and a scalable API layer.',
    stack: ['Angular', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    impact: ['Launch-ready tenant architecture', 'Reduced manual operations', 'Clear path for enterprise onboarding']
  },
  {
    title: 'Preschool management platform',
    problem: 'Administrators needed a simple way to manage admissions, attendance, fee workflows, communication, and daily operations.',
    solution: 'We built a responsive product suite with role-specific dashboards, parent communication flows, and operational reporting.',
    stack: ['Angular', 'Firebase', 'Cloud Functions', 'Tailwind CSS'],
    impact: ['Cleaner admin workflows', 'Improved parent visibility', 'Mobile-friendly daily usage']
  },
  {
    title: 'Automation & CRM integration platform',
    problem: 'Sales and service teams were losing time to repeated CRM updates, scattered forms, and disconnected customer workflows.',
    solution: 'We connected lead intake, CRM synchronization, notifications, and AI-assisted summaries into one reliable automation layer.',
    stack: ['Angular', 'NestJS', 'OpenAI APIs', 'HubSpot', 'Docker'],
    impact: ['Faster lead response', 'Lower repetitive data entry', 'Better customer context']
  }
];

export const techStack: readonly string[] = [
  'Angular',
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Firebase',
  'AWS',
  'Docker',
  'Tailwind CSS',
  'OpenAI APIs',
  'Redis',
  'CI/CD'
];

export const stats: readonly Stat[] = [
  { value: '01', label: 'Architecture before acceleration' },
  { value: '02', label: 'Interfaces engineered for adoption' },
  { value: '03', label: 'Automation with measurable ROI' }
];

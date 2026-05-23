import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { staggerFadeUp } from '../../shared/animations/fade-up.animation';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import { IconComponent } from '../../shared/components/icon/icon';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'wsl-home-page',
  imports: [
    RouterLink,
    IconComponent,
    HeroSectionComponent,
    SectionHeaderComponent
  ],
  templateUrl: './home-page.html',
  animations: [staggerFadeUp],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly trustBadges = [
    'SaaS Architecture',
    'AI Workflows',
    'Angular / React',
    'Node.js / Java',
    'PostgreSQL / MongoDB',
    'AWS / Docker',
    'API Integrations',
    'Performance Engineering'
  ] as const;

  protected readonly metrics = [
    { value: '10K+', label: 'records optimized in data-heavy views', detail: 'Filtering, pagination, indexing, and UI virtualization patterns.' },
    { value: 'SaaS', label: 'multi-tenant architecture experience', detail: 'Tenant-aware data models, permissions, billing-ready foundations.' },
    { value: 'Auto', label: 'workflow automation systems delivered', detail: 'CRM sync, notifications, document flows, and AI-assisted summaries.' },
    { value: 'Cloud', label: 'cloud-ready deployment patterns', detail: 'CI/CD, containerization, observability, and scalable environments.' }
  ] as const;

  protected readonly homeServices = [
    { icon: 'boxes', title: 'SaaS Product Engineering', text: 'Tenant-aware dashboards, subscriptions, permissions, analytics, and scalable product foundations.' },
    { icon: 'layers', title: 'Frontend Architecture', text: 'Design systems, component libraries, state strategy, routing, performance budgets, and responsive UX.' },
    { icon: 'database', title: 'Backend & API Engineering', text: 'Secure APIs, data models, integrations, queues, auth flows, and service boundaries.' },
    { icon: 'bot', title: 'AI-assisted Automation', text: 'AI workflows, operational copilots, CRM summaries, and human-in-the-loop automation systems.' },
    { icon: 'cloud', title: 'Cloud & DevOps', text: 'Deployment pipelines, Docker-ready services, cloud infrastructure, monitoring, and release hygiene.' },
    { icon: 'gauge', title: 'Performance Optimization', text: 'Core Web Vitals, API latency, bundle tuning, caching, query optimization, and scale hardening.' }
  ] as const;

  protected readonly architectureFlow = [
    { title: 'Frontend Apps', detail: 'Angular, React, mobile-first dashboards' },
    { title: 'API Layer', detail: 'Auth, roles, integrations, contracts' },
    { title: 'Automation Engine', detail: 'Queues, AI steps, CRM sync, alerts' },
    { title: 'Database', detail: 'PostgreSQL, MongoDB, indexing, audit trails' },
    { title: 'Cloud Infrastructure', detail: 'Docker, AWS, CI/CD, observability' }
  ] as const;

  protected readonly homeCaseStudies = [
    {
      title: 'Multi-tenant Workflow SaaS',
      challenge: 'Teams needed configurable workflows, tenant isolation, and audit-ready collaboration.',
      solution: 'Built a modular SaaS control plane with role-based access, workflow states, and scalable APIs.',
      stack: ['Angular', 'Node.js', 'PostgreSQL', 'AWS'],
      outcome: 'Launch-ready architecture for enterprise onboarding.'
    },
    {
      title: 'Preschool Management Platform',
      challenge: 'Administrators needed one place for admissions, attendance, communication, and fee workflows.',
      solution: 'Delivered role-specific dashboards with mobile-friendly operations and automated reporting.',
      stack: ['Angular', 'Firebase', 'Cloud Functions'],
      outcome: 'Cleaner daily operations and improved parent visibility.'
    },
    {
      title: 'CRM & Business Automation',
      challenge: 'Sales and service workflows were slowed by repeated updates and disconnected tools.',
      solution: 'Connected lead intake, CRM sync, notifications, and AI-assisted business summaries.',
      stack: ['NestJS', 'OpenAI APIs', 'HubSpot', 'Docker'],
      outcome: 'Faster response cycles and reduced manual data entry.'
    }
  ] as const;

  protected readonly processSteps = [
    { title: 'Discover', text: 'Clarify users, constraints, workflows, integrations, and business priorities.' },
    { title: 'Design', text: 'Shape product flows, interface systems, and the first conversion path.' },
    { title: 'Architect', text: 'Define frontend, API, data, automation, and cloud foundations.' },
    { title: 'Build', text: 'Ship tested product increments with reusable components and clean contracts.' },
    { title: 'Optimize', text: 'Tune performance, queries, user paths, observability, and reliability.' },
    { title: 'Launch', text: 'Prepare production deployment, handoff, monitoring, and iteration loops.' }
  ] as const;
}

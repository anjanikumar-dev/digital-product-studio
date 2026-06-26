export interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  likes: number;
  comments: number;
  businessProblem: string;
  discoveryProcess: string;
  requirements: string[];
  solution: string;
  challenges: string[];
  rolePlayed: string;
  businessOutcome: string[];
  lessonsLearned: string[];
  industry: string;
  duration: string;
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'hrms-platform',
    title: 'Enterprise HRMS Platform',
    excerpt: 'Complete HR transformation for a 5000+ employee organization, reducing admin time by 60%.',
    content: 'Full content here...',
    author: 'Anjani Kumar',
    date: 'December 2024',
    readTime: '8 min read',
    category: 'Enterprise HR',
    tags: ['HRMS', 'Digital Transformation', 'Enterprise'],
    image: '/images/hrms-case.jpg',
    likes: 89,
    comments: 12,
    businessProblem: 'TechCorp Inc. was struggling with a fragmented HR system that required manual data entry across multiple platforms. HR teams spent 60% of their time on administrative tasks, employee onboarding took 2-3 weeks, and payroll processing was error-prone.',
    discoveryProcess: 'Conducted 25+ stakeholder interviews across HR, IT, and leadership teams. Analyzed existing workflows, pain points, and user journeys. Mapped out the end-to-end employee lifecycle from onboarding to offboarding.',
    requirements: [
      'Self-service portal for employees',
      'Automated onboarding workflows',
      'Real-time attendance tracking',
      'Integrated payroll system',
      'Performance management module',
      'Advanced reporting dashboard'
    ],
    solution: 'Built a comprehensive HRMS platform with a modern, intuitive interface. Implemented automated workflows for onboarding, attendance, and payroll. Created a self-service portal where employees can access payslips, apply for leave, and update personal information.',
    challenges: [
      'Integrating with 5 legacy systems',
      'Data migration with zero downtime',
      'User adoption across 5000+ employees',
      'Compliance with local labor laws'
    ],
    rolePlayed: 'Lead Business Analyst & Product Strategist. I led the discovery phase, defined requirements, designed the product roadmap, and collaborated with developers to ensure technical feasibility.',
    businessOutcome: [
      '60% reduction in HR admin time',
      '3x faster employee onboarding (from 2 weeks to 3 days)',
      '95% user adoption within 3 months',
      '$500K annual cost savings'
    ],
    lessonsLearned: [
      'User training and change management is as important as the technology',
      'Early stakeholder buy-in is critical for success',
      'Data migration needs meticulous planning',
      'Iterative feedback loops improve user adoption'
    ],
    industry: 'Enterprise Technology',
    duration: '6 months',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'GraphQL']
  },
  {
    id: 'lms-platform',
    title: 'Learning Management System',
    excerpt: 'Scalable LMS platform serving 100,000+ users with 85% course completion rate.',
    content: 'Full content here...',
    author: 'Anjani Kumar',
    date: 'November 2024',
    readTime: '10 min read',
    category: 'EdTech',
    tags: ['LMS', 'EdTech', 'Scalability'],
    image: '/images/lms-case.jpg',
    likes: 67,
    comments: 8,
    businessProblem: 'EduTech Global needed a modern LMS to replace their outdated system. The existing platform had poor user engagement, limited functionality, and couldn\'t scale to meet growing demand.',
    discoveryProcess: 'Conducted user research with 100+ students and instructors. Analyzed competitor platforms and identified key differentiators. Defined user personas and learning journeys.',
    requirements: [
      'Interactive course player',
      'Real-time progress tracking',
      'Automated assessments and quizzes',
      'Certification engine',
      'Live video integration',
      'Mobile-responsive design'
    ],
    solution: 'Built a modern LMS with interactive course player, progress tracking, and automated assessments. Implemented WebRTC for live video sessions and created a certification engine for course completion.',
    challenges: [
      'Handling 10,000+ concurrent users during peak times',
      'Video streaming optimization',
      'Real-time progress tracking across devices',
      'Accessibility compliance'
    ],
    rolePlayed: 'Business Analyst & Product Strategist. I led the product discovery, defined the technical requirements, and worked with the engineering team on scalability challenges.',
    businessOutcome: [
      '85% course completion rate (industry average is 30%)',
      '100,000+ active users',
      '300+ professional courses available',
      '4.5/5 average user rating'
    ],
    lessonsLearned: [
      'Simple, intuitive UX drives user engagement',
      'Scalability should be considered from day one',
      'Gamification significantly improves completion rates',
      'Mobile-first design is essential for accessibility'
    ],
    industry: 'Education Technology',
    duration: '8 months',
    technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'Redis']
  },
  {
    id: 'commerce-platform',
    title: 'Enterprise Commerce Platform',
    excerpt: 'High-performance e-commerce platform with $10M+ in processed transactions.',
    content: 'Full content here...',
    author: 'Anjani Kumar',
    date: 'October 2024',
    readTime: '9 min read',
    category: 'E-Commerce',
    tags: ['E-Commerce', 'Performance', 'Scalability'],
    image: '/images/commerce-case.jpg',
    likes: 93,
    comments: 15,
    businessProblem: 'A leading retail enterprise needed to handle 10x traffic spikes during sales events. Their existing platform had frequent downtime, slow load times, and poor conversion rates.',
    discoveryProcess: 'Analyzed traffic patterns, user behavior, and conversion funnels. Reviewed infrastructure limitations and identified bottlenecks.',
    requirements: [
      'High-availability architecture',
      'Real-time inventory management',
      'Advanced product search',
      'Personalized recommendations',
      'One-click checkout'
    ],
    solution: 'Built a headless e-commerce platform with real-time inventory management, advanced search, and personalized recommendations. Implemented edge caching and CDN for global performance.',
    challenges: [
      'Handling 10x traffic spikes during sales events',
      'Real-time inventory sync across multiple warehouses',
      'Payment processing reliability',
      'Security and PCI compliance'
    ],
    rolePlayed: 'Product Strategist & Business Analyst. I led the product strategy, defined the technical architecture, and managed cross-functional team coordination.',
    businessOutcome: [
      '3x increase in conversion rate',
      '$10M+ total sales processed',
      '99.99% uptime during peak events',
      '150% increase in average order value'
    ],
    lessonsLearned: [
      'Performance optimization directly impacts revenue',
      'Real-time inventory visibility builds customer trust',
      'Headless architecture enables rapid innovation',
      'Personalization drives customer loyalty'
    ],
    industry: 'E-Commerce',
    duration: '9 months',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS']
  },
  {
    id: 'analytics-platform',
    title: 'Analytics & BI Platform',
    excerpt: 'Enterprise analytics platform processing 1M+ data points daily with real-time dashboards.',
    content: 'Full content here...',
    author: 'Anjani Kumar',
    date: 'September 2024',
    readTime: '7 min read',
    category: 'Data & Analytics',
    tags: ['Analytics', 'BI', 'Data'],
    image: '/images/analytics-case.jpg',
    likes: 78,
    comments: 10,
    businessProblem: 'Analytics Pro needed a unified platform to visualize data from multiple sources with real-time updates. Existing solution was slow, siloed, and lacked predictive capabilities.',
    discoveryProcess: 'Interviewed 30+ stakeholders including data analysts, business users, and IT teams. Analyzed existing data pipelines and reporting processes.',
    requirements: [
      'Real-time data visualization',
      'Custom dashboards',
      'Predictive analytics',
      'Data integration from 10+ sources',
      'Role-based access control'
    ],
    solution: 'Built a BI platform with custom dashboards, real-time data pipelines, and predictive analytics using machine learning models. Implemented role-based access control for data security.',
    challenges: [
      'Data integration from 10+ disparate sources',
      'Real-time processing at scale',
      'Data accuracy and consistency',
      'User adoption across different teams'
    ],
    rolePlayed: 'Lead Business Analyst. I defined the product vision, prioritized features, and worked with data engineers on the technical architecture.',
    businessOutcome: [
      '40% faster decision-making',
      '1M+ data points processed daily',
      '95% data accuracy improvement',
      '$200K annual cost savings'
    ],
    lessonsLearned: [
      'Data quality is more important than data quantity',
      'Real-time dashboards drive business actions',
      'User training is critical for adoption',
      'Start simple, then add advanced features'
    ],
    industry: 'Data Analytics',
    duration: '7 months',
    technologies: ['Python', 'FastAPI', 'React', 'D3.js', 'PostgreSQL', 'Apache Spark', 'Docker']
  }
];
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Building2,
  Briefcase,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  BookOpen,
  Users,
  Shield
} from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  role: string;
  challenge: string;
  solution: string;
  outcome: string[];
  learnings: string[];
  tags: string[];
  year: string;
  client: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'government-platform',
    title: 'Government Digital Transformation Platform',
    category: 'Government',
    industry: 'Public Sector',
    description: 'A comprehensive digital platform enabling citizen services, document management, and cross-departmental collaboration for a state government agency.',
    role: 'Lead Business Analyst & Product Strategist',
    challenge: 'The agency was managing citizen services through fragmented legacy systems. Processing times for applications took 6-8 weeks, and citizens had no visibility into their application status. Departments operated in silos with no shared data infrastructure.',
    solution: 'Designed and delivered a unified digital platform with citizen portal, case management system, and department collaboration tools. Implemented automated workflows, document management, and real-time status tracking.',
    outcome: [
      'Application processing time reduced from 6 weeks to 3 days',
      '80% reduction in manual data entry errors',
      '4.5/5 citizen satisfaction rating',
      '30+ departments now using the platform'
    ],
    learnings: [
      'User-centric design is critical for government platforms',
      'Stakeholder alignment across departments requires patience and clear communication',
      'Data migration from legacy systems needs meticulous planning',
      'Security and compliance must be designed from day one'
    ],
    tags: ['Government', 'Digital Transformation', 'Citizen Services', 'Case Management'],
    year: '2024',
    client: 'State Government Agency'
  },
  {
    id: 'cyber-security-platform',
    title: 'Enterprise Cyber Security Management Platform',
    category: 'Cyber Security',
    industry: 'Security',
    description: 'A comprehensive security platform for monitoring, tracking, and managing security events with real-time collaboration and automated incident response.',
    role: 'Lead Business Analyst & Product Strategist',
    challenge: 'The security team was managing incidents across multiple tools with no centralized view. Incident response times averaged 4-6 hours, and threat detection was reactive rather than proactive.',
    solution: 'Built a unified security platform with real-time monitoring, automated incident classification, and integrated response workflows. Implemented threat intelligence feeds and predictive analytics.',
    outcome: [
      '70% faster incident response times',
      '99.9% system availability',
      '1000+ concurrent users supported',
      '45% reduction in false positives'
    ],
    learnings: [
      'Security teams need unified tools, not point solutions',
      'Automation is key to scaling security operations',
      'Real-time data visualization improves decision-making',
      'User training and adoption is critical for security platforms'
    ],
    tags: ['Cyber Security', 'Security Operations', 'Incident Management', 'Threat Intelligence'],
    year: '2024',
    client: 'Enterprise Security Organization'
  },
  {
    id: 'hrms-platform',
    title: 'Enterprise HRMS Platform',
    category: 'Enterprise HR',
    industry: 'Enterprise Technology',
    description: 'End-to-end HR management system with employee onboarding, attendance, payroll, and performance tracking for a 5000+ employee organization.',
    role: 'Senior Business Analyst & Product Strategist',
    challenge: 'The organization was using a fragmented HR system requiring manual data entry across multiple platforms. HR teams spent 60% of their time on administrative tasks, and employee onboarding took 2-3 weeks.',
    solution: 'Designed and delivered a comprehensive HRMS with self-service portal, automated onboarding, attendance tracking, integrated payroll, and performance management module.',
    outcome: [
      '60% reduction in HR admin time',
      '3x faster employee onboarding (from 2 weeks to 3 days)',
      '95% user adoption within 3 months',
      '5000+ employees now using the platform'
    ],
    learnings: [
      'User training is as important as the technology',
      'Early stakeholder buy-in is critical for HR transformation',
      'Data migration requires meticulous planning',
      'Self-service portals significantly improve employee satisfaction'
    ],
    tags: ['HRMS', 'Digital Transformation', 'Employee Experience', 'Enterprise'],
    year: '2024',
    client: 'TechCorp Inc.'
  },
  {
    id: 'lms-platform',
    title: 'Enterprise Learning Management System',
    category: 'Education Technology',
    industry: 'EdTech',
    description: 'Scalable LMS platform serving 100,000+ users with interactive courses, progress tracking, automated assessments, and certification management.',
    role: 'Lead Business Analyst & Product Strategist',
    challenge: 'The existing LMS had poor user engagement (only 30% course completion), limited functionality, and couldn\'t scale to meet growing demand. Users frequently complained about the outdated interface.',
    solution: 'Built a modern LMS with interactive course player, real-time progress tracking, automated assessments, certification engine, and live video integration. Implemented gamification to drive engagement.',
    outcome: [
      '85% course completion rate (industry average is 30%)',
      '100,000+ active users',
      '300+ professional courses available',
      '4.5/5 average user rating'
    ],
    learnings: [
      'Gamification drives engagement and completion rates',
      'Simple, intuitive UX is essential for user adoption',
      'Mobile-first design ensures accessibility',
      'Scalability must be considered from day one'
    ],
    tags: ['LMS', 'EdTech', 'Learning', 'Scalability'],
    year: '2023',
    client: 'EduTech Global'
  },
  {
    id: 'ecommerce-platform',
    title: 'Enterprise Commerce Platform',
    category: 'E-Commerce',
    industry: 'Retail',
    description: 'Scalable e-commerce platform with advanced product management, payment integration, and analytics dashboard.',
    role: 'Product Strategist & Business Analyst',
    challenge: 'The platform needed to handle 10x traffic spikes during sales events. Existing platform had frequent downtime, slow load times, and poor conversion rates.',
    solution: 'Built a headless e-commerce platform with real-time inventory management, advanced search, personalized recommendations, and edge caching for global performance.',
    outcome: [
      '3x increase in conversion rate',
      '$10M+ total sales processed',
      '99.99% uptime during peak events',
      '150% increase in average order value'
    ],
    learnings: [
      'Performance optimization directly impacts revenue',
      'Real-time inventory visibility builds customer trust',
      'Personalization drives customer loyalty',
      'Headless architecture enables rapid innovation'
    ],
    tags: ['E-Commerce', 'Retail', 'Scalability', 'Performance'],
    year: '2023',
    client: 'Shopify Plus'
  }
];

const categories = ['All', 'Government', 'Cyber Security', 'Enterprise HR', 'Education Technology', 'E-Commerce'];

export default function CaseStudies() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categoryList = ['all', ...new Set(caseStudies.map(p => p.category))];

  const filteredProjects = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const getIndustryIcon = (industry: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'Government': <Building2 className="w-4 h-4" />,
      'Security': <Shield className="w-4 h-4" />,
      'Enterprise Technology': <Users className="w-4 h-4" />,
      'EdTech': <BookOpen className="w-4 h-4" />,
      'Retail': <TrendingUp className="w-4 h-4" />,
    };
    return icons[industry] || <Briefcase className="w-4 h-4" />;
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-gray-800/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real Projects Delivered by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anjani Kumar
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore how I've helped enterprises and government organizations solve complex 
            challenges and achieve measurable outcomes.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categoryList.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Header with Industry Icon */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 dark:text-blue-400">
                      {getIndustryIcon(project.industry)}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {project.industry}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.client}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all duration-300 flex-shrink-0 ml-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Role */}
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{project.role}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-xs font-medium text-gray-400 dark:text-gray-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Key Outcome */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                      {project.outcome[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{ opacity: activeProject === project.id ? 1 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
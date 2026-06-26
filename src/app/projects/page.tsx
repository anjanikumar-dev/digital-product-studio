'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle,
  X,
  Building2,
  Briefcase,
  Users,
  TrendingUp,
  BookOpen,
  Shield
} from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  results: string[];
  year: string;
  client: string;
  technologies: string[];
  challenge: string;
  solution: string;
  industry: string;
  role: string;
}

const projects: Project[] = [
  {
    id: 'government-platform',
    title: 'Government Digital Transformation Platform',
    category: 'Government',
    industry: 'Public Sector',
    description: 'A comprehensive digital platform enabling citizen services, document management, and cross-departmental collaboration for a state government agency.',
    image: '/images/government-platform.jpg',
    tags: ['Government', 'Digital Transformation', 'Citizen Services'],
    results: [
      'Application processing time reduced from 6 weeks to 3 days',
      '80% reduction in manual data entry errors',
      '4.5/5 citizen satisfaction rating'
    ],
    year: '2024',
    client: 'State Government Agency',
    technologies: ['Next.js', 'PostgreSQL', 'Node.js', 'Redis', 'AWS'],
    challenge: 'The agency was managing citizen services through fragmented legacy systems. Processing times for applications took 6-8 weeks, and citizens had no visibility into their application status.',
    solution: 'Designed and delivered a unified digital platform with citizen portal, case management system, and department collaboration tools.',
    role: 'Lead Business Analyst & Product Strategist'
  },
  {
    id: 'cyber-security-platform',
    title: 'Enterprise Cyber Security Platform',
    category: 'Cyber Security',
    industry: 'Security',
    description: 'A comprehensive security management platform for enterprise security teams to monitor, track, and manage security events with real-time collaboration.',
    image: '/images/cyber-security-platform.jpg',
    tags: ['Cyber Security', 'Security Operations', 'Incident Management'],
    results: [
      '70% faster incident response times',
      '99.9% system availability',
      '45% reduction in false positives'
    ],
    year: '2024',
    client: 'Enterprise Security Organization',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSockets', 'Redis'],
    challenge: 'The security team was managing incidents across multiple tools with no centralized view. Incident response times averaged 4-6 hours.',
    solution: 'Built a unified security platform with real-time monitoring, automated incident classification, and integrated response workflows.',
    role: 'Lead Business Analyst & Product Strategist'
  },
  {
    id: 'hrms-platform',
    title: 'HRMS Platform',
    category: 'Enterprise HR',
    industry: 'Enterprise Technology',
    description: 'End-to-end HR management system with employee onboarding, attendance, payroll, and performance tracking for 5000+ employees.',
    image: '/images/hrms-platform.jpg',
    tags: ['HRMS', 'Digital Transformation', 'Employee Experience'],
    results: [
      '60% reduction in HR admin time',
      '3x faster employee onboarding',
      '95% user adoption within 3 months'
    ],
    year: '2024',
    client: 'TechCorp Inc.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'GraphQL'],
    challenge: 'The organization was using a fragmented HR system requiring manual data entry. HR teams spent 60% of their time on administrative tasks.',
    solution: 'Designed and delivered a comprehensive HRMS with self-service portal, automated onboarding, attendance tracking, and integrated payroll.',
    role: 'Senior Business Analyst & Product Strategist'
  },
  {
    id: 'lms-platform',
    title: 'Learning Management System',
    category: 'Education Technology',
    industry: 'EdTech',
    description: 'Scalable LMS platform serving 100,000+ users with interactive courses, progress tracking, and certification management.',
    image: '/images/lms-platform.jpg',
    tags: ['LMS', 'EdTech', 'Scalability'],
    results: [
      '85% course completion rate',
      '100,000+ active users',
      '4.5/5 average user rating'
    ],
    year: '2023',
    client: 'EduTech Global',
    technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'Redis'],
    challenge: 'The existing LMS had poor user engagement (only 30% completion), limited functionality, and couldn\'t scale to meet growing demand.',
    solution: 'Built a modern LMS with interactive course player, real-time progress tracking, automated assessments, and certification engine.',
    role: 'Lead Business Analyst & Product Strategist'
  },
  {
    id: 'commerce-platform',
    title: 'Commerce Platform',
    category: 'E-Commerce',
    industry: 'Retail',
    description: 'Scalable e-commerce platform with advanced product management, payment integration, and analytics dashboard.',
    image: '/images/commerce-platform.jpg',
    tags: ['E-Commerce', 'Retail', 'Scalability'],
    results: [
      '3x increase in conversion rate',
      '$10M+ total sales processed',
      '99.99% uptime during peak events'
    ],
    year: '2023',
    client: 'Shopify Plus',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    challenge: 'The platform needed to handle 10x traffic spikes during sales events. Existing platform had frequent downtime and poor conversion rates.',
    solution: 'Built a headless e-commerce platform with real-time inventory management, personalized recommendations, and edge caching.',
    role: 'Product Strategist & Business Analyst'
  },
  {
    id: 'analytics-platform',
    title: 'Analytics & BI Platform',
    category: 'Data & Analytics',
    industry: 'Data Analytics',
    description: 'Enterprise analytics platform processing 1M+ data points daily with real-time dashboards and predictive capabilities.',
    image: '/images/analytics-platform.jpg',
    tags: ['Analytics', 'BI', 'Data'],
    results: [
      '40% faster decision-making',
      '1M+ data points processed daily',
      '95% data accuracy improvement'
    ],
    year: '2024',
    client: 'Analytics Pro',
    technologies: ['Python', 'FastAPI', 'React', 'D3.js', 'PostgreSQL', 'Apache Spark'],
    challenge: 'The client needed a unified platform to visualize data from multiple sources with real-time updates. Existing solution was slow and siloed.',
    solution: 'Built a BI platform with custom dashboards, real-time data pipelines, and predictive analytics using machine learning models.',
    role: 'Lead Business Analyst'
  }
];

const categories = ['All', 'Government', 'Cyber Security', 'Enterprise HR', 'Education Technology', 'E-Commerce', 'Data & Analytics'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
      'Public Sector': <Building2 className="w-4 h-4" />,
      'Security': <Shield className="w-4 h-4" />,
      'Enterprise Technology': <Users className="w-4 h-4" />,
      'EdTech': <BookOpen className="w-4 h-4" />,
      'Retail': <TrendingUp className="w-4 h-4" />,
      'Data Analytics': <TrendingUp className="w-4 h-4" />,
    };
    return icons[industry] || <Briefcase className="w-4 h-4" />;
  };

  return (
    <MainLayout>
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Real Projects Delivered by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anjani Kumar
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore how I've helped enterprises and government organizations solve complex 
              challenges and achieve measurable outcomes.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Filter className="w-4 h-4 text-gray-400 mr-1 mt-1.5" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-700"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Header with Industry */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 px-5 py-3 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500 dark:text-blue-400">
                          {getIndustryIcon(project.industry)}
                        </span>
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {project.client}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
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

                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        View Details
                      </span>
                      <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No projects found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Project Details */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {selectedProject.client}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Role: {selectedProject.role}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                      Challenge
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                      Solution
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Key Results
                    </h4>
                    <div className="space-y-1.5">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/projects/${selectedProject.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-300"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
}
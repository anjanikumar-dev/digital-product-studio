'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

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
}

const projects: Project[] = [
  {
    id: 'hrms',
    title: 'Enterprise HRMS Platform',
    category: 'Enterprise HR',
    description: 'A comprehensive HR management system with employee onboarding, attendance tracking, performance management, and advanced analytics dashboard.',
    image: '/images/hrms-platform.jpg',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'Prisma', 'GraphQL'],
    results: [
      '60% reduction in HR admin time',
      '5000+ active employees managed',
      '45% faster employee onboarding'
    ],
    year: '2024',
    client: 'Enterprise Organization'
  },
  {
    id: 'lms',
    title: 'Enterprise Learning Management System',
    category: 'Education Technology',
    description: 'A scalable learning platform with interactive courses, progress tracking, automated assessments, certification management, and AI-powered recommendations.',
    image: '/images/lms-platform.jpg',
    tags: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'Machine Learning'],
    results: [
      '85% course completion rate',
      '100,000+ active users',
      '300+ professional courses'
    ],
    year: '2023',
    client: 'Enterprise Training'
  },
  {
    id: 'ecommerce',
    title: 'Enterprise Commerce Platform',
    category: 'E-Commerce',
    description: 'A scalable e-commerce solution with advanced product management, multi-vendor support, payment gateway integration, and real-time inventory management.',
    image: '/images/commerce-platform.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    results: [
      '150% increase in conversion rate',
      '$10M+ in processed transactions',
      '99.99% uptime SLA'
    ],
    year: '2023',
    client: 'Enterprise Commerce'
  },
  {
    id: 'analytics-platform',
    title: 'Enterprise Analytics & BI Platform',
    category: 'Data & Analytics',
    description: 'A powerful business intelligence platform with real-time data visualization, custom dashboards, and predictive analytics for enterprise decision-making.',
    image: '/images/analytics-platform.jpg',
    tags: ['Python', 'React', 'PostgreSQL', 'D3.js', 'Apache Spark'],
    results: [
      '40% faster decision-making',
      '1M+ data points processed daily',
      '95% data accuracy improvement'
    ],
    year: '2024',
    client: 'Enterprise Analytics'
  },
  {
    id: 'healthcare-platform',
    title: 'Enterprise Healthcare Management Platform',
    category: 'Healthcare Technology',
    description: 'A HIPAA-compliant healthcare platform for patient management, appointment scheduling, telemedicine, and electronic health records (EHR) integration.',
    image: '/images/healthcare-platform.jpg',
    tags: ['Next.js', 'PostgreSQL', 'WebRTC', 'Redis', 'FHIR'],
    results: [
      '50% reduction in appointment wait times',
      '25,000+ patients managed',
      '99.99% compliance rating'
    ],
    year: '2024',
    client: 'Healthcare Enterprise'
  }
];

export default function CaseStudies() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
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
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Enterprise solutions delivered across various industries, showcasing scalability, performance, and innovation.
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
          {categories.map((category) => (
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                  {project.category}
                </div>
                {/* Year Badge */}
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-white">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">
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
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
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

                {/* Results */}
                <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="grid grid-cols-1 gap-1">
                    {project.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                          {result}
                        </p>
                      </div>
                    ))}
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

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
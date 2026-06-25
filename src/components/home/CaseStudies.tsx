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
    id: 'security-platform',
    title: 'Enterprise Security Management Platform',
    category: 'Security',
    description: 'A comprehensive security management platform for enterprise security teams to monitor, track, and manage security events with real-time collaboration and automated workflows.',
    image: '/images/security-platform.jpg',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSockets', 'Redis'],
    results: [
      '70% faster response times',
      '99.9% system availability',
      '1000+ concurrent users supported'
    ],
    year: '2024',
    client: 'Security Enterprise'
  },
  {
    id: 'hrms',
    title: 'HRMS Platform',
    category: 'Enterprise HR',
    description: 'End-to-end HR management system with employee onboarding, attendance, payroll, and performance tracking.',
    image: '/images/hrms-platform.jpg',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'Prisma'],
    results: [
      '60% reduction in HR admin time',
      '1000+ active employees',
      '40% faster onboarding'
    ],
    year: '2024',
    client: 'TechCorp Inc.'
  },
  {
    id: 'lms',
    title: 'Learning Management System',
    category: 'Education Technology',
    description: 'A modern LMS with interactive courses, progress tracking, quizzes, and certification management.',
    image: '/images/lms-platform.jpg',
    tags: ['React', 'Django', 'PostgreSQL', 'WebRTC'],
    results: [
      '85% course completion rate',
      '50,000+ active users',
      '200+ courses available'
    ],
    year: '2023',
    client: 'EduTech Global'
  },
  {
    id: 'ecommerce',
    title: 'Commerce Platform',
    category: 'E-Commerce',
    description: 'A scalable e-commerce solution with advanced product management, payment integration, and analytics dashboard.',
    image: '/images/commerce-platform.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    results: [
      '3x increase in conversion rate',
      '$5M+ total sales processed',
      '99.9% uptime'
    ],
    year: '2023',
    client: 'Shopify Plus'
  }
];

const categories = ['All', 'Security', 'Enterprise HR', 'Education Technology', 'E-Commerce'];

export default function CaseStudies() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categoryList = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // FIXED: No transition property
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

  // FIXED: No transition property
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Explore how I've helped transform complex business challenges into successful digital products.
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

        {/* Projects Grid */}
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
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Image Placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                  {project.category}
                </div>
                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                  {project.year}
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="grid grid-cols-3 gap-2">
                    {project.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
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
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock,
  Tag,
  Search,
  Heart,
  MessageCircle,
  Briefcase,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

interface CaseStudy {
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
  // New fields for case studies
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

const caseStudies: CaseStudy[] = [
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
    businessProblem: 'Shopify Plus needed to handle 10x traffic spikes during sales events. Their existing platform had frequent downtime, slow load times, and poor conversion rates.',
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
  }
];

const categories = ['All', 'Enterprise HR', 'EdTech', 'E-Commerce'];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
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
              Case Studies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Real{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
              {' '}Delivered
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore how I've helped enterprises solve complex challenges and achieve measurable outcomes.
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
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
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

          {/* Case Studies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {filteredStories.map((study) => (
              <motion.article
                key={study.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                          {study.category}
                        </span>
                        <span className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
                          {study.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {study.date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {study.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {study.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{study.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{study.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Info Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-500" />
                          Business Problem
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {study.businessProblem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-yellow-500" />
                          Discovery Process
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {study.discoveryProcess}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-green-500" />
                          Requirements
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-0.5">
                          {study.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex items-center gap-2">
                          <Rocket className="w-4 h-4 text-purple-500" />
                          Solution
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-orange-500" />
                          Role Played
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {study.rolePlayed}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          Business Outcome
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-0.5">
                          {study.businessOutcome.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex items-center gap-2">
                          <Tag className="w-4 h-4 text-red-500" />
                          Lessons Learned
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-0.5">
                          {study.lessonsLearned.map((lesson, i) => (
                            <li key={i}>{lesson}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* View Full Case Study Link */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={`/stories/${study.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-300"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredStories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No case studies found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
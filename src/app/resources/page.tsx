'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Download, 
  ExternalLink,
  Book,
  FileText,
  Link2,
  Clock,
  Star,
  Users,
  Target,
  ClipboardCheck,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'template' | 'guide' | 'checklist' | 'framework' | 'tool';
  category: string;
  tags: string[];
  link: string;
  downloads?: number;
  rating?: number;
  date: string;
}

const resources: Resource[] = [
  {
    id: 'brd-template',
    title: 'Business Requirements Document Template',
    description: 'A comprehensive BRD template for defining business requirements, objectives, and success criteria. Includes stakeholder analysis and risk assessment sections.',
    type: 'template',
    category: 'Business Analysis',
    tags: ['BRD', 'Requirements', 'Documentation'],
    link: '#',
    downloads: 1245,
    rating: 4.8,
    date: 'December 2024'
  },
  {
    id: 'user-story-template',
    title: 'User Story & Acceptance Criteria Template',
    description: 'Standardized template for writing user stories with acceptance criteria, business rules, and test scenarios. Includes examples and best practices.',
    type: 'template',
    category: 'Business Analysis',
    tags: ['User Stories', 'Acceptance Criteria', 'Agile'],
    link: '#',
    downloads: 876,
    rating: 4.7,
    date: 'December 2024'
  },
  {
    id: 'product-discovery-checklist',
    title: 'Product Discovery Checklist',
    description: 'A comprehensive checklist for product discovery phases including stakeholder interviews, user research, and market validation.',
    type: 'checklist',
    category: 'Product Strategy',
    tags: ['Discovery', 'Research', 'Validation'],
    link: '#',
    downloads: 987,
    rating: 4.9,
    date: 'November 2024'
  },
  {
    id: 'stakeholder-matrix',
    title: 'Stakeholder Analysis Matrix',
    description: 'A structured template for identifying, analyzing, and managing stakeholders. Includes power-interest grid and engagement strategies.',
    type: 'template',
    category: 'Business Analysis',
    tags: ['Stakeholders', 'Analysis', 'Communication'],
    link: '#',
    downloads: 654,
    rating: 4.6,
    date: 'November 2024'
  },
  {
    id: 'prioritization-framework',
    title: 'Feature Prioritization Framework',
    description: 'A systematic framework for prioritizing features based on business value, effort, and impact. Includes RICE and WSJF templates.',
    type: 'framework',
    category: 'Product Strategy',
    tags: ['Prioritization', 'Roadmap', 'Planning'],
    link: '#',
    downloads: 1345,
    rating: 4.9,
    date: 'October 2024'
  },
  {
    id: 'agile-checklist',
    title: 'Sprint Planning & Retrospective Checklist',
    description: 'A complete checklist for sprint planning, backlog refinement, and retrospective meetings. Includes preparation, facilitation, and follow-up items.',
    type: 'checklist',
    category: 'Agile Delivery',
    tags: ['Agile', 'Scrum', 'Sprints'],
    link: '#',
    downloads: 765,
    rating: 4.5,
    date: 'October 2024'
  },
  {
    id: 'rtm-template',
    title: 'Requirements Traceability Matrix Template',
    description: 'A comprehensive RTM template for tracking requirements throughout the project lifecycle. Links requirements to design, testing, and deployment.',
    type: 'template',
    category: 'Business Analysis',
    tags: ['RTM', 'Traceability', 'Requirements'],
    link: '#',
    downloads: 543,
    rating: 4.4,
    date: 'September 2024'
  },
  {
    id: 'product-strategy-canvas',
    title: 'Product Strategy Canvas',
    description: 'A strategic canvas for defining product vision, target audience, value proposition, and success metrics. Based on lean product principles.',
    type: 'framework',
    category: 'Product Strategy',
    tags: ['Strategy', 'Vision', 'Value Proposition'],
    link: '#',
    downloads: 987,
    rating: 4.7,
    date: 'September 2024'
  },
  {
    id: 'ba-ai-prompts',
    title: 'AI Prompt Library for Business Analysts',
    description: 'A curated library of AI prompts for business analysts - requirements gathering, stakeholder interviews, data analysis, and documentation.',
    type: 'tool',
    category: 'Business Analysis',
    tags: ['AI', 'Productivity', 'Prompts'],
    link: '#',
    downloads: 1567,
    rating: 4.8,
    date: 'August 2024'
  }
];

const categories = ['All', 'Business Analysis', 'Product Strategy', 'Agile Delivery'];
const resourceTypes = ['All', 'template', 'guide', 'checklist', 'framework', 'tool'];

const typeIcons = {
  template: <FileText className="w-5 h-5" />,
  guide: <Book className="w-5 h-5" />,
  checklist: <ClipboardCheck className="w-5 h-5" />,
  framework: <Target className="w-5 h-5" />,
  tool: <Link2 className="w-5 h-5" />
};

const typeColors = {
  template: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  guide: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  checklist: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  framework: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  tool: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesType && matchesSearch;
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
              Resources
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Templates &amp; Toolkits Created by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anjani Kumar
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Practical resources for Business Analysts and Product Managers to use in their daily work.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-2 mt-1">Category:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-2 mt-1">Type:</span>
                {resourceTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedType === type
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {type === 'All' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Resources Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${typeColors[resource.type]}`}>
                    {typeIcons[resource.type]}
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                  {resource.rating && (
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{resource.rating}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{resource.date}</span>
                    {resource.downloads && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <Download className="w-3.5 h-3.5" />
                        <span>{resource.downloads}</span>
                      </>
                    )}
                  </div>
                  <a
                    href={resource.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all duration-300"
                  >
                    Access
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No resources found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
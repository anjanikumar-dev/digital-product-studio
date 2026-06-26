'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Clock,
  Search,
  Heart,
  MessageCircle,
  Briefcase,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  BookOpen,
  Tag
} from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { caseStudies } from '@/data/caseStudies';

const categories = ['All', 'Enterprise HR', 'EdTech', 'E-Commerce', 'Data & Analytics'];

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
            // Find the header section and update the subheading
<span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
  Case Studies
</span>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
  Real Projects Delivered by{' '}
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    Anjani Kumar
  </span>
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
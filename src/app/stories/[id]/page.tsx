'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Heart, 
  MessageCircle,
  Briefcase,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  BookOpen,
  Tag,
  Share2,
  CheckCircle,
  Building2,
  Shield,
  Users,
  ArrowRight
} from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { caseStudies, CaseStudy } from '@/data/caseStudies';

export default function CaseStudyDetail() {
  const params = useParams();
  const [study, setStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const id = params.id as string;
    const found = caseStudies.find(s => s.id === id);
    setStudy(found || null);
  }, [params.id]);

  if (!study) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Case Study Not Found</h1>
          <Link href="/stories" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Back to Case Studies
          </Link>
        </div>
      </MainLayout>
    );
  }

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
      'Public Sector': <Building2 className="w-5 h-5" />,
      'Security': <Shield className="w-5 h-5" />,
      'Enterprise Technology': <Users className="w-5 h-5" />,
      'EdTech': <BookOpen className="w-5 h-5" />,
      'Retail': <TrendingUp className="w-5 h-5" />,
      'Data Analytics': <TrendingUp className="w-5 h-5" />,
    };
    return icons[industry] || <Briefcase className="w-5 h-5" />;
  };

  return (
    <MainLayout>
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  {study.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400">
                  {study.duration}
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
                  {getIndustryIcon(study.industry)}
                  {study.industry}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {study.date}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {study.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {study.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {study.excerpt}
              </p>
            </motion.div>

            {/* Author Info */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 py-4 border-y border-gray-200 dark:border-gray-700 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                AK
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{study.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Senior Business Analyst & Product Strategist</p>
              </div>
              <div className="ml-auto flex items-center gap-4 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{study.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{study.comments}</span>
                </div>
              </div>
            </motion.div>

            {/* Case Study Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Business Problem */}
              <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/30">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-blue-500" />
                  Business Problem
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {study.businessProblem}
                </p>
              </div>

              {/* Discovery Process */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Discovery Process
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {study.discoveryProcess}
                </p>
              </div>

              {/* Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-green-500" />
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {study.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                    <Tag className="w-5 h-5 text-red-500" />
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Rocket className="w-5 h-5 text-purple-500" />
                  Solution
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {study.solution}
                </p>
              </div>

              {/* Challenges */}
              <div className="bg-red-50/50 dark:bg-red-900/10 rounded-2xl p-6 border border-red-100 dark:border-red-800/30">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  Challenges Faced
                </h2>
                <ul className="space-y-2">
                  {study.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-orange-500 mt-0.5">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role Played */}
              <div className="bg-purple-50/50 dark:bg-purple-900/10 rounded-2xl p-6 border border-purple-100 dark:border-purple-800/30">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-purple-500" />
                  My Role
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {study.rolePlayed}
                </p>
              </div>

              {/* Business Outcome */}
              <div className="bg-green-50/50 dark:bg-green-900/10 rounded-2xl p-6 border border-green-100 dark:border-green-800/30">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Business Outcome
                </h2>
                <ul className="space-y-2">
                  {study.businessOutcome.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons Learned */}
              <div className="bg-yellow-50/50 dark:bg-yellow-900/10 rounded-2xl p-6 border border-yellow-100 dark:border-yellow-800/30">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-yellow-500" />
                  Lessons Learned
                </h2>
                <ul className="space-y-2">
                  {study.lessonsLearned.map((lesson, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-yellow-500 mt-0.5">✦</span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Footer Actions */}
            <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/stories"
                  className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Case Studies
                </Link>
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Heart className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
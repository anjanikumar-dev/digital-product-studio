// src/components/home/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Sparkles, Star, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const stats = [
    { label: 'Product Health', value: '96%', icon: Star },
    { label: 'Client Satisfaction', value: '4.9 ★', icon: Users },
    { label: 'Active Projects', value: '12+', icon: TrendingUp },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800"
            >
              <Sparkles className="w-4 h-4" />
              Available for Freelance & Full-Time
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Digital Products
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">people actually</span>
              <br />
              <span className="text-gray-900 dark:text-white">love using.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
            variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
            >
              Business Analyst focused on transforming complex business challenges 
              into scalable digital products through strategy, UX thinking, and modern technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Work
              </Link>
            </motion.div>

            {/* Skills Chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-4"
            >
              {['Product Strategy', 'UX Design', 'System Design', 'Agile'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <stat.icon className="w-4 h-4 text-blue-500" />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 shadow-2xl shadow-blue-500/10 overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Digital Product Studio
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Progress Section */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Delivery Progress
                    </span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      78%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '78%' }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'CERT Incident', progress: 78, color: 'blue' },
                    { name: 'LMS Platform', progress: 45, color: 'purple' },
                    { name: 'HRMS System', progress: 92, color: 'green' },
                    { name: 'Commerce', progress: 60, color: 'orange' },
                  ].map((project) => (
                    <div
                      key={project.name}
                      className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600"
                    >
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                        {project.name}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full mr-2">
                          <div
                            className={`h-full bg-${project.color}-500 rounded-full`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Active</span>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">8</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Completed</span>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">24</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {['#4F46E5', '#7C3AED', '#EC4899'].map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-400">
                      +3
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">96%</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Product Health</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Excellent</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
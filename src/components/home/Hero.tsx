'use client';

import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Sparkles,
  Shield,
  Building2,
  GraduationCap,
  Brain,
  BarChart3,
  ShoppingBag,
  Briefcase,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Clock,
  Zap
} from 'lucide-react';
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
    },
  };

  // Realistic enterprise metrics
  const trustMetrics = [
    { 
      icon: <Briefcase className="w-4 h-4" />, 
      value: '12+', 
      label: 'Years Experience',
      subLabel: 'Enterprise Consulting'
    },
    { 
      icon: <Users className="w-4 h-4" />, 
      value: '50+', 
      label: 'Enterprise Clients',
      subLabel: 'Across 8 Industries'
    },
    { 
      icon: <Award className="w-4 h-4" />, 
      value: '100%', 
      label: 'Client Satisfaction',
      subLabel: 'Based on 50+ Reviews'
    },
    { 
      icon: <TrendingUp className="w-4 h-4" />, 
      value: '15+', 
      label: 'Products Delivered',
      subLabel: 'From Discovery to Launch'
    },
  ];

  const specialties = [
    { icon: <Building2 className="w-4 h-4" />, label: 'Government' },
    { icon: <Shield className="w-4 h-4" />, label: 'Cyber Security' },
    { icon: <Users className="w-4 h-4" />, label: 'HRMS' },
    { icon: <GraduationCap className="w-4 h-4" />, label: 'LMS' },
    { icon: <Zap className="w-4 h-4" />, label: 'Trading Bots' },
    { icon: <Brain className="w-4 h-4" />, label: 'AI Products' },
    { icon: <ShoppingBag className="w-4 h-4" />, label: 'E-Commerce' },
    { icon: <BarChart3 className="w-4 h-4" />, label: 'Enterprise SaaS' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Background Decorations - Professional & Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/3 rounded-full blur-3xl" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Credibility Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-blue-50/80 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-100/50 dark:border-blue-800/50 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              Trusted by 50+ Enterprises — 12+ Years of Experience
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-gray-900 dark:text-white">
                Hi, I'm{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Anjani Kumar
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Enterprise Product</span>
              <br />
              <span className="text-gray-900 dark:text-white">Consultant</span>
            </motion.h1>

            {/* Description - Builds Trust */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                I help government agencies and enterprises transform complex business 
                challenges into scalable digital products that deliver measurable business outcomes.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Business Analysis
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Product Strategy
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Digital Transformation
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5"
              >
                Work with Anjani
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                View Case Studies
              </Link>
            </motion.div>

            {/* Trust Metrics - Immediately Builds Credibility */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {trustMetrics.map((metric, index) => (
                <div key={index} className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                    {metric.icon}
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {metric.label}
                  </p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500">
                    {metric.subLabel}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Industry Specialties */}
            <motion.div
              variants={itemVariants}
              className="pt-2"
            >
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                Industries I Work With
              </p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/70 dark:border-gray-700/70 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                  >
                    <span className="text-blue-500 dark:text-blue-400">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Enterprise Product Interface */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 shadow-2xl shadow-blue-500/10 overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Interface Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Digital Product Studio — Enterprise Platform
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Dashboard Content - Enterprise Style */}
              <div className="p-6 space-y-6">
                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50/50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Active Projects</p>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">8</p>
                  </div>
                  <div className="bg-green-50/50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Completion Rate</p>
                    <p className="text-xl font-bold text-green-600 dark:text-green-400">92%</p>
                  </div>
                  <div className="bg-purple-50/50 dark:bg-purple-900/20 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Avg. Delivery</p>
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-400">4.2 mo</p>
                  </div>
                </div>

                {/* Project Progress - Enterprise Portfolio */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Program Portfolio — Q2 2025
                    </span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      78% Complete
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Gov Digital Platform', progress: 78, color: 'blue' },
                      { name: 'Cyber Security Suite', progress: 45, color: 'purple' },
                      { name: 'HRMS Enterprise', progress: 92, color: 'green' },
                      { name: 'AI Trading Assistant', progress: 60, color: 'orange' },
                    ].map((project) => (
                      <div key={project.name} className="flex items-center gap-3">
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 w-32 truncate">
                          {project.name}
                        </span>
                        <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-${project.color}-500 rounded-full`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 w-8 text-right">
                          {project.progress}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>8 Active Teams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>12 mo Avg. Engagement</span>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {['#4F46E5', '#7C3AED', '#EC4899', '#F59E0B'].map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: color }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Credibility Element */}
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
                  <p className="text-xs text-gray-500 dark:text-gray-400">Client Satisfaction</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Top 5% Consultant</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Badge */}
            <motion.div
              className="absolute -top-3 -left-3 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-lg shadow-blue-600/25"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              ⚡ Trusted by Government & Enterprise
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
            Explore My Work
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
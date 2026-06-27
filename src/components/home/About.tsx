'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Briefcase, 
  Users, 
  Target, 
  FileText, 
  ClipboardCheck,
  Building2,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  GraduationCap,
  ShoppingBag,
  Brain,
  BarChart3
} from 'lucide-react';

export default function About() {
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

  // Realistic metrics - replace with actual numbers if available
  const metrics = [
    { 
      icon: <Briefcase className="w-5 h-5" />, 
      value: '12+', 
      label: 'Years of Experience',
      subLabel: 'Enterprise Consulting',
      color: 'blue'
    },
    { 
      icon: <FileText className="w-5 h-5" />, 
      value: '200+', 
      label: 'Business Requirements',
      subLabel: 'Documents Created',
      color: 'purple'
    },
    { 
      icon: <ClipboardCheck className="w-5 h-5" />, 
      value: '500+', 
      label: 'User Stories',
      subLabel: 'Written & Managed',
      color: 'green'
    },
    { 
      icon: <Building2 className="w-5 h-5" />, 
      value: '8', 
      label: 'Industries Served',
      subLabel: 'Across Government & Enterprise',
      color: 'orange'
    },
  ];

  const industries = [
    { icon: <Building2 className="w-4 h-4" />, label: 'Government' },
    { icon: <Shield className="w-4 h-4" />, label: 'Cyber Security' },
    { icon: <Users className="w-4 h-4" />, label: 'HRMS' },
    { icon: <GraduationCap className="w-4 h-4" />, label: 'LMS' },
    { icon: <Zap className="w-4 h-4" />, label: 'Trading Bots' },
    { icon: <Brain className="w-4 h-4" />, label: 'AI Products' },
    { icon: <ShoppingBag className="w-4 h-4" />, label: 'E-Commerce' },
    { icon: <BarChart3 className="w-4 h-4" />, label: 'Enterprise SaaS' },
  ];

  const expertise = [
    { label: 'Business Analysis & Requirements', icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
    { label: 'Product Strategy & Vision', icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
    { label: 'Enterprise System Design', icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
    { label: 'Product Discovery & Delivery', icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
    { label: 'Stakeholder Management', icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
    { label: 'Agile Product Development', icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-16 overflow-hidden bg-gray-50/50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
              About Anjani Kumar
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Senior Business Analyst &amp;{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Product Strategist
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I help government agencies and enterprises transform complex business challenges 
              into scalable digital products that deliver measurable business outcomes.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Bio & Metrics */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Professional Bio */}
              <div className="bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                    AK
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Anjani Kumar</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Senior Business Analyst &amp; Product Strategist
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500"></p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="leading-relaxed">
                    I help organizations bridge the gap between business goals and technical execution. 
                    With over 12 years of experience, I've worked across government, fintech, healthcare, 
                    and enterprise SaaS—delivering products that people actually use and love.
                  </p>
                  <p className="leading-relaxed">
                    My approach combines rigorous business analysis with strategic product thinking. 
                    I don't just document requirements—I uncover the real problems that need solving 
                    and design solutions that drive measurable business outcomes.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800">
                    ⚡ Trusted by Government Agencies
                  </span>
                  <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-xs font-medium border border-green-100 dark:border-green-800">
                    ✅ 100% Client Satisfaction
                  </span>
                  <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-100 dark:border-purple-800">
                    🏆 Enterprise Certified
                  </span>
                </div>
              </div>

              {/* Metrics Grid - Credibility Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-md transition-shadow"
                  >
                    <div className={`text-${metric.color}-600 dark:text-${metric.color}-400 mb-1 flex justify-center`}>
                      {metric.icon}
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {metric.value}
                    </p>
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">
                      {metric.subLabel}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Industries & Expertise */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Industry Experience */}
              <div className="bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  Industries I Serve
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {industries.map((industry, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-500 dark:text-blue-400">{industry.icon}</span>
                      {industry.label}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  Experience across government, enterprise, and emerging technology sectors
                </p>
              </div>

              {/* Core Expertise */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  Core Expertise
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {item.icon}
                      {item.label}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Consulting Approach */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/30">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  My Approach
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every engagement begins with understanding the business problem, not the technology. 
                  I focus on delivering outcomes, not just outputs—ensuring every product I help build 
                  creates lasting business value.
                </p>
                <div className="flex items-center gap-3 mt-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    12+ Years
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    50+ Clients
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    15+ Products
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Target, Code, Rocket } from 'lucide-react';

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

  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, value: '12+', label: 'Years Experience' },
    { icon: <Target className="w-5 h-5" />, value: '15+', label: 'Projects Delivered' },
    { icon: <Users className="w-5 h-5" />, value: '50+', label: 'Enterprise Clients' },
    { icon: <Award className="w-5 h-5" />, value: '100%', label: 'Client Satisfaction' },
  ];

  const expertise = [
    'Business Analysis & Requirements',
    'Product Strategy & Vision',
    'Enterprise System Design',
    'Government Digital Transformation',
    'Cyber Security Platforms',
    'AI & Automation Solutions',
  ];

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-gray-50/50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
              Meet Anjani Kumar
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Senior Business Analyst &amp;{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Product Strategist
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I help enterprises turn complex business challenges into scalable digital products 
              that deliver measurable impact — from government platforms to AI-powered solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                      AK
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Anjani Kumar</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Senior Business Analyst &amp; Product Strategist
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    With 12+ years of experience across government, enterprise SaaS, fintech, 
                    and healthcare, I bridge the gap between business goals and technical execution. 
                    I've helped 50+ enterprises design, build, and launch products that people 
                    actually love using.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center"
                  >
                    <div className="flex items-center justify-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                      {stat.icon}
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Core Expertise
                </h3>
                <ul className="space-y-3">
                  {expertise.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                      Government
                    </span>
                    <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">
                      Enterprise SaaS
                    </span>
                    <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                      Fintech
                    </span>
                    <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium">
                      Healthcare
                    </span>
                    <span className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-xs font-medium">
                      Cyber Security
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
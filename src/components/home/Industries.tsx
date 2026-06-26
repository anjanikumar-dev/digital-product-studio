'use client';

import { motion } from 'framer-motion';
import { 
  Building2,
  Shield,
  Users,
  GraduationCap,
  Zap,
  Brain,
  ShoppingBag,
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  projects: string;
  color: string;
}

const industries: Industry[] = [
  {
    id: 'government',
    name: 'Government',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Digital transformation, citizen services, and enterprise platforms for government agencies.',
    projects: '3+ Projects',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    icon: <Shield className="w-6 h-6" />,
    description: 'Security operations platforms, threat monitoring, and compliance management systems.',
    projects: '4+ Projects',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'hrms',
    name: 'HRMS',
    icon: <Users className="w-6 h-6" />,
    description: 'Enterprise HR management, employee lifecycle, and workforce analytics platforms.',
    projects: '5+ Projects',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'lms',
    name: 'LMS',
    icon: <GraduationCap className="w-6 h-6" />,
    description: 'Learning platforms, course management, certification, and training systems.',
    projects: '4+ Projects',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'trading',
    name: 'Stock Trading Bots',
    icon: <Zap className="w-6 h-6" />,
    description: 'Algorithmic trading platforms, real-time market data, and automated execution systems.',
    projects: '2+ Projects',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'ai',
    name: 'AI Products',
    icon: <Brain className="w-6 h-6" />,
    description: 'AI-powered assistants, automation tools, and intelligent decision support systems.',
    projects: '3+ Projects',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: <ShoppingBag className="w-6 h-6" />,
    description: 'Enterprise commerce platforms, payment integration, and marketplace solutions.',
    projects: '4+ Projects',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'enterprise-saas',
    name: 'Enterprise SaaS',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'B2B SaaS products, subscription platforms, and enterprise analytics solutions.',
    projects: '6+ Projects',
    color: 'from-indigo-500 to-indigo-600'
  }
];

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
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
    <section className="py-16 md:py-20 lg:py-16 overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Industry Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Industries I've{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Worked In
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Across government, enterprise, and emerging technology sectors — delivering 
            products that solve real business problems.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              className="group relative bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${industry.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {industry.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                {industry.description}
              </p>

              {/* Projects Count */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{industry.projects}</span>
              </div>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section - Combined Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">8 Industries</span>
              </div>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">50+ Enterprise Clients</span>
              </div>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">15+ Products Delivered</span>
              </div>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">12+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-300 text-sm"
            >
              View case studies across industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
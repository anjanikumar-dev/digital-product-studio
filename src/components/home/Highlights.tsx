'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  FileText, 
  TrendingUp, 
  CheckCircle,
  Briefcase,
  Building2,
  Star,
  Clock,
  Rocket,
  Target
} from 'lucide-react';

interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  metrics: string[];
}

const highlights: Highlight[] = [
  {
    id: 'clients',
    title: '50+ Enterprise Clients',
    description: 'Trusted by organizations across government, enterprise SaaS, fintech, and healthcare sectors.',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    metrics: ['Government Agencies', 'Enterprise Organizations', 'Tech Companies']
  },
  {
    id: 'products',
    title: '15+ Products Delivered',
    description: 'From discovery to launch, each product delivered measurable business outcomes.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    metrics: ['0-1 Product Launches', 'Scale & Growth', 'Digital Transformations']
  },
  {
    id: 'requirements',
    title: '500+ User Stories',
    description: 'Well-defined, validated, and prioritized user stories that guide development.',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    metrics: ['Business Requirements', 'Functional Specs', 'Acceptance Criteria']
  },
  {
    id: 'satisfaction',
    title: '100% Client Satisfaction',
    description: 'Every client engagement delivers measurable value and builds lasting relationships.',
    icon: <Award className="w-6 h-6" />,
    color: 'from-orange-500 to-orange-600',
    metrics: ['5-Star Reviews', 'Repeat Engagements', 'Client Referrals']
  },
  {
    id: 'experience',
    title: '12+ Years Experience',
    description: 'Deep expertise across government, enterprise, and emerging technology sectors.',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-red-500 to-red-600',
    metrics: ['Government', 'Enterprise SaaS', 'Fintech', 'Healthcare']
  },
  {
    id: 'industries',
    title: '8 Industries Served',
    description: 'Cross-industry expertise enables innovative solutions from proven patterns.',
    icon: <Building2 className="w-6 h-6" />,
    color: 'from-cyan-500 to-cyan-600',
    metrics: ['Government', 'Cyber Security', 'HRMS', 'LMS', 'Trading', 'AI', 'E-Commerce', 'SaaS']
  }
];

export default function Highlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="py-20 md:py-28 overflow-hidden bg-gray-50/50 dark:bg-gray-800/30">
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
            Professional Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Measurable Impact
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Real results, delivered for enterprise clients across industries.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.color} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {highlight.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {highlight.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-1.5">
                {highlight.metrics.map((metric, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-full text-[10px] font-medium text-gray-600 dark:text-gray-400"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Top 5% Consultant</span>
              </div>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">15+ Products Delivered</span>
              </div>
              <span className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">100% Satisfaction</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Based on 50+ enterprise engagements across 8 industries over 12+ years
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
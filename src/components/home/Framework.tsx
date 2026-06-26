'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Palette, 
  Code, 
  Rocket, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface FrameworkStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
}

const steps: FrameworkStep[] = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'Understanding the problem space, user needs, and business goals.',
    icon: <Search className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    details: [
      'User research & interviews',
      'Market analysis',
      'Competitor research',
      'Stakeholder workshops'
    ]
  },
  {
    id: 'define',
    title: 'Define',
    description: 'Translating insights into clear requirements and product vision.',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-indigo-500 to-indigo-600',
    details: [
      'User personas',
      'Feature prioritization',
      'Product roadmap',
      'Success metrics'
    ]
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Creating intuitive user experiences and beautiful interfaces.',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    details: [
      'Wireframing & prototyping',
      'UI design',
      'Design system',
      'User testing'
    ]
  },
  {
    id: 'develop',
    title: 'Develop',
    description: 'Building scalable, performant, and maintainable solutions.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-pink-500 to-pink-600',
    details: [
      'Agile development',
      'CI/CD pipeline',
      'Code reviews',
      'Testing & QA'
    ]
  },
  {
    id: 'deploy',
    title: 'Deploy',
    description: 'Launching products with confidence and minimal disruption.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-orange-500 to-orange-600',
    details: [
      'DevOps & infrastructure',
      'Migration strategy',
      'Monitoring & logging',
      'Performance optimization'
    ]
  },
  {
    id: 'drive',
    title: 'Drive',
    description: 'Continuous improvement based on data and user feedback.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    details: [
      'Analytics & metrics',
      'A/B testing',
      'Iterative improvements',
      'User feedback loops'
    ]
  }
];

export default function Framework() {
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
    <section className="py-20 md:py-28 overflow-hidden">
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
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              6D Framework
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive approach to building digital products that deliver real business value.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 dark:text-gray-700 group-hover:text-gray-200 dark:group-hover:text-gray-600 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} text-white mb-4 shadow-lg`}>
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5"
          >
            Learn More About My Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
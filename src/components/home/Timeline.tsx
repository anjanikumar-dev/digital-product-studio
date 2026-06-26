'use client';

import { motion } from 'framer-motion';
import { 
  Compass, 
  Search, 
  FileCheck, 
  Palette, 
  Code, 
  Rocket,
  CheckCircle
} from 'lucide-react';

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const steps: TimelineStep[] = [
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'Understanding your business goals, user needs, and project scope.',
    icon: <Compass className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'research',
    title: 'Research',
    description: 'Deep dive into market analysis, competitor research, and user behavior.',
    icon: <Search className="w-6 h-6" />,
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'requirements',
    title: 'Requirements',
    description: 'Define clear requirements, success metrics, and project roadmap.',
    icon: <FileCheck className="w-6 h-6" />,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Create intuitive interfaces with user-centered design principles.',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Build scalable, performant solutions using modern technologies.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'launch',
    title: 'Launch',
    description: 'Deploy with confidence, monitor performance, and iterate.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-orange-500 to-orange-600'
  }
];

export default function Timeline() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
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
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Process Timeline
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A structured approach to ensure every project is delivered on time and exceeds expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line - Centered */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 flex items-center justify-center shadow-lg z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
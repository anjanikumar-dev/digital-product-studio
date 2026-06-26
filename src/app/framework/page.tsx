'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Palette, 
  Code, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

interface FrameworkStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
  phase: string;
}

const steps: FrameworkStep[] = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'Understanding the problem space, user needs, and business goals.',
    icon: <Search className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    phase: 'Phase 1',
    details: [
      'Conduct user research and interviews',
      'Analyze market trends and competitors',
      'Identify pain points and opportunities',
      'Define user personas and scenarios',
      'Stakeholder alignment workshops'
    ]
  },
  {
    id: 'define',
    title: 'Define',
    description: 'Translating insights into clear requirements and product vision.',
    icon: <FileText className="w-8 h-8" />,
    color: 'from-indigo-500 to-indigo-600',
    phase: 'Phase 2',
    details: [
      'Create detailed user personas',
      'Prioritize features and requirements',
      'Develop product roadmap',
      'Define success metrics and KPIs',
      'Validate assumptions with stakeholders'
    ]
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Creating intuitive user experiences and beautiful interfaces.',
    icon: <Palette className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
    phase: 'Phase 3',
    details: [
      'Create wireframes and prototypes',
      'Design high-fidelity UI',
      'Build design system',
      'Conduct user testing sessions',
      'Iterate based on feedback'
    ]
  },
  {
    id: 'develop',
    title: 'Develop',
    description: 'Building scalable, performant, and maintainable solutions.',
    icon: <Code className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-600',
    phase: 'Phase 4',
    details: [
      'Agile development sprints',
      'CI/CD pipeline setup',
      'Code reviews and testing',
      'Performance optimization',
      'Security implementation'
    ]
  },
  {
    id: 'deploy',
    title: 'Deploy',
    description: 'Launching products with confidence and minimal disruption.',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-orange-500 to-orange-600',
    phase: 'Phase 5',
    details: [
      'DevOps and infrastructure setup',
      'Migration planning and execution',
      'Monitoring and logging implementation',
      'Performance and load testing',
      'Go-live and launch support'
    ]
  },
  {
    id: 'drive',
    title: 'Drive',
    description: 'Continuous improvement based on data and user feedback.',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
    phase: 'Phase 6',
    details: [
      'Analytics and metrics tracking',
      'A/B testing and experimentation',
      'Iterative improvements',
      'User feedback collection and analysis',
      'Continuous optimization roadmap'
    ]
  }
];

export default function FrameworkPage() {
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
  Methodology
</span>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
  The{' '}
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    6D Framework
  </span>
  <br />
  <span className="text-lg text-gray-600 dark:text-gray-300 font-normal">
    by Anjani Kumar
  </span>
</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A comprehensive approach to building digital products that deliver real business value.
            </p>
          </motion.div>

          {/* Framework Overview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why the 6D Framework?
              </h2>
              <p className="text-blue-100 text-lg">
                The 6D Framework provides a structured, yet flexible approach to product development.
                Each phase builds upon the previous, ensuring a systematic progression from ideation to launch and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Proven Process</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">User-Centric</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Data-Driven</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Continuous Improvement</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Framework Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Step Number & Icon */}
                  <div className="md:w-48 flex-shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {step.phase}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        Step {index + 1}/6
                      </span>
                    </div>
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5"
            >
              Let's Build Together
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
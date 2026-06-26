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
  Target,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  ClipboardCheck,
  BookOpen,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

interface FrameworkStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  objective: string;
  deliverables: string[];
  bestPractices: string[];
  example: string;
}

const steps: FrameworkStep[] = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'Understanding the problem space, user needs, and business goals.',
    icon: <Search className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    objective: 'Identify the real business problem and understand user needs before defining requirements.',
    deliverables: [
      'Stakeholder interview summaries',
      'User research findings',
      'Competitive analysis report',
      'Business problem statement'
    ],
    bestPractices: [
      'Interview stakeholders from all levels',
      'Observe users in their environment',
      'Focus on problems, not solutions',
      'Document assumptions and validate them'
    ],
    example: 'Government Platform: Conducted 25+ interviews across departments, identified 8 key pain points that became the foundation for the platform requirements.'
  },
  {
    id: 'define',
    title: 'Define',
    description: 'Translating insights into clear requirements and product vision.',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-indigo-500 to-indigo-600',
    objective: 'Translate insights into clear, actionable requirements that guide development.',
    deliverables: [
      'User personas',
      'Feature roadmap',
      'Business requirements document',
      'Success metrics definition'
    ],
    bestPractices: [
      'Prioritize features by business value',
      'Define success metrics before development',
      'Validate requirements with stakeholders',
      'Keep requirements clear and unambiguous'
    ],
    example: 'HRMS Platform: Defined 50+ user stories across 6 modules, prioritized by business impact, resulting in 60% reduction in HR admin time.'
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Creating intuitive user experiences and beautiful interfaces.',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    objective: 'Design user experiences that solve real problems and delight users.',
    deliverables: [
      'Wireframes and prototypes',
      'User journey maps',
      'Design system components',
      'Usability test findings'
    ],
    bestPractices: [
      'Design for the user, not the stakeholder',
      'Test designs with real users early',
      'Keep it simple—complexity is the enemy of usability',
      'Document design decisions'
    ],
    example: 'Commerce Platform: User testing with 50+ users revealed checkout friction—redesigned flow increased conversion rate by 3x.'
  },
  {
    id: 'develop',
    title: 'Develop',
    description: 'Building scalable, performant, and maintainable solutions.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-pink-500 to-pink-600',
    objective: 'Build solutions that are scalable, maintainable, and deliver business value.',
    deliverables: [
      'Working software in production',
      'Technical documentation',
      'Test coverage reports',
      'Deployment pipeline'
    ],
    bestPractices: [
      'Write code for the maintainer (future you)',
      'Test early, test often',
      'Deploy small, deploy often',
      'Balance speed with quality'
    ],
    example: 'LMS Platform: Built with scalability in mind—now serving 100,000+ users with 99.9% uptime and 85% course completion rate.'
  },
  {
    id: 'deploy',
    title: 'Deploy',
    description: 'Launching products with confidence and minimal disruption.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-orange-500 to-orange-600',
    objective: 'Deploy with confidence, minimize disruption, and ensure smooth adoption.',
    deliverables: [
      'Deployment plan',
      'Migration strategy',
      'Rollback procedures',
      'Training materials'
    ],
    bestPractices: [
      'Deploy during low-traffic periods',
      'Have a rollback plan ready',
      'Monitor everything post-deploy',
      'Communicate changes to all stakeholders'
    ],
    example: 'Cyber Security Platform: Deployed with zero downtime, achieved 99.9% uptime from day one, with 1000+ concurrent users.'
  },
  {
    id: 'drive',
    title: 'Drive',
    description: 'Continuous improvement based on data and user feedback.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    objective: 'Continuously improve based on data, user feedback, and business outcomes.',
    deliverables: [
      'Analytics dashboard',
      'A/B test results',
      'User feedback reports',
      'Optimization roadmap'
    ],
    bestPractices: [
      'Let data guide decisions, not opinions',
      'Talk to users regularly',
      'Celebrate successes, learn from failures',
      'Never stop improving'
    ],
    example: 'E-Commerce Platform: A/B testing revealed 20% better conversion with personalized recommendations—permanently implemented the winning variation.'
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
            Methodology by Anjani Kumar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              6D Framework
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive, proven approach to building digital products that deliver real business value.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Left: Icon & Title */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 lg:block">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg mb-3`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        Phase {index + 1}/6
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-4 space-y-4">
                  {/* Objective */}
                  <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Target className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Objective</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{step.objective}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Deliverables */}
                    <div className="bg-gray-50/50 dark:bg-gray-700/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <ClipboardCheck className="w-4 h-4 text-purple-500" />
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                          Deliverables
                        </p>
                      </div>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Practices */}
                    <div className="bg-gray-50/50 dark:bg-gray-700/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                          Best Practices
                        </p>
                      </div>
                      <ul className="space-y-1.5">
                        {step.bestPractices.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Real Example */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-green-500" />
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                          Real Example
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                        {step.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
'use client';

import { motion } from 'framer-motion';
import { 
  Rocket, 
  FileText, 
  Users,
  Code, 
  CheckCircle, 
  Sparkles,
  Target,
  Lightbulb,
  Briefcase,
  Building2,
  Shield,
  Brain,
  BarChart3,
  ShoppingBag
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
  industries: string[];
}

const services: Service[] = [
  {
    id: 'strategy',
    title: 'Product Strategy & Vision',
    description: 'Define product vision, roadmap, and go-to-market strategy. Align business goals with customer needs and market opportunities.',
    icon: <Rocket className="w-6 h-6" />,
    value: 'Increase product-market fit by 40%',
    industries: ['Government', 'Enterprise SaaS', 'Fintech']
  },
  {
    id: 'analysis',
    title: 'Business Analysis & Requirements',
    description: 'Translate business problems into functional specifications, user stories, and acceptance criteria. Bridge the gap between business and technology.',
    icon: <FileText className="w-6 h-6" />,
    value: 'Reduce requirements gaps by 60%',
    industries: ['Government', 'Healthcare', 'Cyber Security']
  },
  {
    id: 'discovery',
    title: 'Product Discovery & Validation',
    description: 'Lead discovery workshops, user research, and validation. Identify what to build before committing resources to development.',
    icon: <Target className="w-6 h-6" />,
    value: 'Reduce wasted development by 50%',
    industries: ['Enterprise SaaS', 'AI Products', 'E-Commerce']
  },
  {
    id: 'design',
    title: 'Enterprise System Design',
    description: 'Design scalable system architectures, workflows, and integrations that support enterprise-grade requirements and compliance.',
    icon: <Code className="w-6 h-6" />,
    value: 'Scale systems to 10,000+ users',
    industries: ['Cyber Security', 'HRMS', 'LMS']
  },
  {
    id: 'delivery',
    title: 'Product Delivery & Agile Leadership',
    description: 'Lead cross-functional teams through discovery, planning, execution, and launch. Deliver value iteratively with measurable outcomes.',
    icon: <CheckCircle className="w-6 h-6" />,
    value: 'Increase delivery speed by 35%',
    industries: ['Government', 'Enterprise SaaS', 'E-Commerce']
  },
  {
    id: 'ai',
    title: 'AI & Automation Strategy',
    description: 'Identify opportunities for AI and automation to improve business processes and digital experiences. Build AI-powered products.',
    icon: <Sparkles className="w-6 h-6" />,
    value: 'Reduce operational costs by 30%',
    industries: ['Trading Bots', 'AI Products', 'Fintech']
  }
];

export default function Services() {
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
            What Anjani Kumar Does
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Services &amp;{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Every service is designed to solve a specific business problem and deliver measurable value.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Value Statement */}
              <div className="bg-blue-50/50 dark:bg-blue-900/20 rounded-lg px-3 py-2 mb-4">
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  Business Value: {service.value}
                </p>
              </div>

              {/* Industries */}
              <div className="flex flex-wrap gap-1.5">
                {service.industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-[10px] font-medium text-gray-500 dark:text-gray-400"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Consulting Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Available for:</span>
              <span className="text-gray-500 dark:text-gray-400">Freelance Consulting · Product Discovery Engagements · Full-Time Product Leadership</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
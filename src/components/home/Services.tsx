'use client';

import { motion } from 'framer-motion';
import { 
  Rocket, 
  FileText, 
  Palette, 
  Code, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'strategy',
    title: 'Product Strategy',
    description: 'Define vision, roadmap, and MVP scope. Align business goals with customer needs.',
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: 'analysis',
    title: 'Business Analysis',
    description: 'Translate business requirements into functional specs and actionable user stories.',
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 'ux',
    title: 'UX Thinking',
    description: 'Design intuitive user journeys that solve real customer problems.',
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 'system',
    title: 'System Design',
    description: 'Structure scalable applications, workflows and integrations for long-term growth.',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 'agile',
    title: 'Agile Delivery',
    description: 'Lead sprint planning, backlog refinement, and cross-functional collaboration.',
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description: 'Leverage AI tools and automation to improve productivity and digital experiences.',
    icon: <Sparkles className="w-6 h-6" />
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
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Turning Ideas into{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            From discovery to delivery, I help businesses design, build and launch products 
            that create measurable impact.
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
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
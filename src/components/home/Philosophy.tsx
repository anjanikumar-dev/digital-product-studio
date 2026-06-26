'use client';

import { motion } from 'framer-motion';
import { 
  Lightbulb,
  Target,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';
import Link from 'next/link';

interface PhilosophyCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const philosophyCards: PhilosophyCard[] = [
  {
    id: 'understand',
    title: 'Understand the Business First',
    description: 'Before defining requirements, I invest time in understanding the business model, market dynamics, and real user pain points. Technology is a means to an end—not the starting point.',
    icon: <Target className="w-5 h-5" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'measure',
    title: 'Every Feature Solves a Problem',
    description: 'I don\'t build features because they\'re "nice to have." Every feature I design and deliver is tied to a measurable business problem that creates tangible value for the organization.',
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'strategy',
    title: 'Technology Supports Strategy',
    description: 'Technology decisions should always be driven by business strategy—not the other way around. I help organizations choose the right technology for the right problem.',
    icon: <Shield className="w-5 h-5" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'users',
    title: 'User Experience Begins with Understanding Users',
    description: 'Great UX doesn\'t start with wireframes. It starts with understanding who the users are, what they need, and what problems they\'re trying to solve.',
    icon: <Users className="w-5 h-5" />,
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'collaboration',
    title: 'Great Products Are Built Through Collaboration',
    description: 'The best products emerge from cross-functional collaboration—bringing together business stakeholders, users, developers, and designers around a shared vision.',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'outcomes',
    title: 'Deliver Outcomes, Not Just Outputs',
    description: 'I focus on business outcomes—not just features delivered. Every product I help build must demonstrate measurable impact on the business.',
    icon: <CheckCircle className="w-5 h-5" />,
    color: 'from-red-500 to-red-600'
  }
];

export default function Philosophy() {
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
    <section className="py-16 md:py-20 lg:py-16 overflow-hidden bg-gray-50/50 dark:bg-gray-800/30">
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
            Product Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How I{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Approach Product Development
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Six principles that guide every engagement, decision, and product I help build.
          </p>
        </motion.div>

        {/* Philosophy Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {philosophyCards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.color} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section - Authentic Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-blue-500/25">
                  AK
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  My Philosophy in Practice
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  I don't believe in building products for the sake of building products. 
                  Every engagement I take on begins with a single question: 
                  <span className="font-medium text-gray-800 dark:text-gray-200"> "What business problem are we solving?"</span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mt-2">
                  Whether I'm working on a government platform, a cyber security system, or an AI-powered product—
                  my focus is always on delivering measurable business outcomes. I help organizations 
                  move from <span className="font-medium text-gray-800 dark:text-gray-200">"what should we build?"</span> to 
                  <span className="font-medium text-gray-800 dark:text-gray-200"> "what problem should we solve?"</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800">
                    <Target className="w-3.5 h-3.5" />
                    Problem-First
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-xs font-medium border border-green-100 dark:border-green-800">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Outcome-Driven
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-100 dark:border-purple-800">
                    <Users className="w-3.5 h-3.5" />
                    User-Centric
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-6">
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-300 text-sm"
            >
              Learn more about my methodology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
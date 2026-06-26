'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  User,
  Building2,
  Calendar
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Inc.',
    avatar: 'SJ',
    content: 'Anjani Kumar transformed our outdated platform into a modern, scalable solution that our users love. His strategic thinking and attention to detail are unmatched. He truly understands how to bridge the gap between business needs and technical execution.',
    rating: 5,
    date: 'December 2024',
    project: 'HRMS Platform'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'VP of Engineering',
    company: 'EduTech Global',
    avatar: 'MC',
    content: 'Working with Anjani was exceptional. He delivered our LMS platform ahead of schedule and exceeded all our expectations. His ability to translate complex requirements into a seamless user experience is impressive.',
    rating: 5,
    date: 'November 2024',
    project: 'Learning Management System'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Director of Operations',
    company: 'Shopify Plus',
    avatar: 'ER',
    content: 'Anjani Kumar completely overhauled our e-commerce platform. The new system is faster, more intuitive, and has significantly increased our conversion rates. His strategic approach and technical expertise made all the difference.',
    rating: 5,
    date: 'October 2024',
    project: 'Commerce Platform'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Head of Product',
    company: 'HealthTech Solutions',
    avatar: 'DK',
    content: 'Anjani\'s ability to understand our complex healthcare requirements and translate them into a seamless user experience was impressive. He truly cares about building products that make a difference.',
    rating: 5,
    date: 'September 2024',
    project: 'Healthcare Management Platform'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Clients Say About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anjani Kumar
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Real feedback from real clients who trusted me to bring their vision to life.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="relative h-[400px] md:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-xl h-full"
                >
                  <div className="absolute top-6 right-8 opacity-10">
                    <Quote className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 line-clamp-4">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <User className="w-3.5 h-3.5" />
                          <span>{testimonials[currentIndex].role}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{testimonials[currentIndex].company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                          <Calendar className="w-3 h-3" />
                          <span>{testimonials[currentIndex].date}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                          <span>Project: {testimonials[currentIndex].project}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
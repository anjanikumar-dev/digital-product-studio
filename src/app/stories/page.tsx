'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock,
  Tag,
  Search,
  Heart,
  MessageCircle,
  Share2
} from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  likes: number;
  comments: number;
}

const stories: Story[] = [
  {
    id: '1',
    title: 'Building Scalable Microservices with Next.js and Node.js',
    excerpt: 'Learn how we built a highly scalable microservices architecture that handles millions of requests per day.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Technical',
    tags: ['Microservices', 'Next.js', 'Node.js', 'AWS'],
    image: '/images/story1.jpg',
    likes: 245,
    comments: 42
  },
  {
    id: '2',
    title: 'The Art of UX Design: Creating Products Users Love',
    excerpt: 'A deep dive into user-centered design principles and how they transform digital products.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 10, 2024',
    readTime: '6 min read',
    category: 'Design',
    tags: ['UX Design', 'UI Design', 'User Research'],
    image: '/images/story2.jpg',
    likes: 189,
    comments: 28
  },
  {
    id: '3',
    title: 'From Idea to Launch: A Complete Product Development Journey',
    excerpt: 'Follow the journey of a digital product from initial concept to successful launch.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 5, 2024',
    readTime: '10 min read',
    category: 'Process',
    tags: ['Product Development', 'Agile', 'Project Management'],
    image: '/images/story3.jpg',
    likes: 312,
    comments: 56
  },
  {
    id: '4',
    title: 'Implementing AI and Automation in Modern Products',
    excerpt: 'How AI and automation are revolutionizing digital products and improving user experiences.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'November 28, 2024',
    readTime: '7 min read',
    category: 'Technology',
    tags: ['AI', 'Automation', 'Machine Learning'],
    image: '/images/story4.jpg',
    likes: 167,
    comments: 23
  },
  {
    id: '5',
    title: 'Designing for Accessibility: A Comprehensive Guide',
    excerpt: 'Everything you need to know about creating accessible digital products for all users.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'November 20, 2024',
    readTime: '9 min read',
    category: 'Design',
    tags: ['Accessibility', 'Inclusive Design', 'WCAG'],
    image: '/images/story5.jpg',
    likes: 234,
    comments: 38
  },
  {
    id: '6',
    title: 'Optimizing Performance for Next.js Applications',
    excerpt: 'Advanced techniques to optimize Next.js applications for maximum performance and speed.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'November 15, 2024',
    readTime: '11 min read',
    category: 'Technical',
    tags: ['Next.js', 'Performance', 'Optimization'],
    image: '/images/story6.jpg',
    likes: 278,
    comments: 45
  }
];

const categories = ['All', 'Technical', 'Design', 'Process', 'Technology'];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
      transition: { duration: 0.6, ease: 'easeOut' },
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
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
              Stories
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Insights &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Learnings, experiences, and insights from real-world product development journeys.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredStories.map((story) => (
              <motion.article
                key={story.id}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-52 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {story.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                    {story.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{story.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/stories/${story.id}`}>
                      {story.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                    {story.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {story.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {story.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-medium text-gray-400 dark:text-gray-500">
                        +{story.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {story.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {story.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5" />
                        <span>{story.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{story.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredStories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No stories found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
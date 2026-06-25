'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock,
  Tag,
  ArrowRight,
  Heart,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

interface JournalPost {
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
  featured: boolean;
}

const journalPosts: JournalPost[] = [
  {
    id: '1',
    title: 'The Future of Digital Product Development',
    excerpt: 'Exploring emerging trends and technologies that will shape the future of digital products.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 20, 2024',
    readTime: '12 min read',
    category: 'Trends',
    tags: ['Future Tech', 'Innovation', 'AI', 'Digital Transformation'],
    image: '/images/journal1.jpg',
    likes: 456,
    comments: 78,
    featured: true
  },
  {
    id: '2',
    title: 'Why User Experience Matters More Than Ever',
    excerpt: 'In today\'s competitive landscape, exceptional user experience is the key differentiator.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 18, 2024',
    readTime: '5 min read',
    category: 'UX Design',
    tags: ['UX Design', 'User Research', 'Customer Experience'],
    image: '/images/journal2.jpg',
    likes: 234,
    comments: 34,
    featured: false
  },
  {
    id: '3',
    title: 'Agile Development: Beyond the Basics',
    excerpt: 'Advanced agile practices that can transform your development team\'s productivity.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Agile', 'Scrum', 'Team Management', 'Productivity'],
    image: '/images/journal3.jpg',
    likes: 189,
    comments: 23,
    featured: false
  },
  {
    id: '4',
    title: 'Building a Design System That Scales',
    excerpt: 'How to create and maintain a design system that grows with your product.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 12, 2024',
    readTime: '6 min read',
    category: 'Design',
    tags: ['Design System', 'UI Design', 'Scalability'],
    image: '/images/journal4.jpg',
    likes: 312,
    comments: 45,
    featured: false
  },
  {
    id: '5',
    title: 'The Role of AI in Modern Product Strategy',
    excerpt: 'Integrating AI capabilities to create smarter, more personalized products.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 8, 2024',
    readTime: '7 min read',
    category: 'Technology',
    tags: ['AI', 'Product Strategy', 'Innovation'],
    image: '/images/journal5.jpg',
    likes: 267,
    comments: 31,
    featured: false
  },
  {
    id: '6',
    title: 'From MVP to Scale: A Product Journey',
    excerpt: 'Lessons learned from taking a product from minimum viable product to market leader.',
    content: 'Full content here...',
    author: 'John Doe',
    date: 'December 5, 2024',
    readTime: '9 min read',
    category: 'Strategy',
    tags: ['MVP', 'Product Development', 'Scaling'],
    image: '/images/journal6.jpg',
    likes: 345,
    comments: 52,
    featured: false
  }
];

const categories = ['All', 'Trends', 'UX Design', 'Development', 'Design', 'Technology', 'Strategy'];

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = journalPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = journalPosts.find(post => post.featured);

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
              Journal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Thoughts &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Exploring ideas, sharing learnings, and discussing the future of digital products.
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
                  placeholder="Search journal entries..."
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

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-10 text-white">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {featuredPost.title}
                </h2>
                <p className="text-blue-100 text-lg mb-4 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-blue-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    href={`/journal/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Journal Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/journal/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-0.5 text-xs font-medium text-gray-400 dark:text-gray-500">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-300">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No journal entries found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  Sparkles
} from 'lucide-react';

// SVG Icons for social media
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socialLinks = [
  { label: 'GitHub', icon: GithubIcon, href: 'https://github.com' },
  { label: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
  { label: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const sections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Stories', href: '/stories' },
        { label: '6D Framework', href: '/framework' },
        { label: 'Journal', href: '/journal' },
        { label: 'Resources', href: '/resources' },
        { label: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Product Strategy', href: '/services/product-strategy' },
        { label: 'Business Analysis', href: '/services/business-analysis' },
        { label: 'UX Design', href: '/services/ux-design' },
        { label: 'System Design', href: '/services/system-design' },
        { label: 'Agile Delivery', href: '/services/agile-delivery' },
        { label: 'AI & Automation', href: '/services/ai-automation' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/journal' },
        { label: 'Case Studies', href: '/projects' },
        { label: 'Framework', href: '/framework' },
        { label: 'Testimonials', href: '/#testimonials' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-white">
                Digital Product
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Studio
                </span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">
              Transforming complex business challenges into scalable digital products 
              through strategy, UX thinking, and modern technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:anjanikumar.dev@gmail.com" className="hover:text-white transition-colors">
                  anjanikumar.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Available Worldwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {sections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Digital Product Studio — Built by Anjani Kumar.
            Made with <Heart className="w-3.5 h-3.5 inline text-red-500 animate-pulse" /> 
            and <Sparkles className="w-3.5 h-3.5 inline text-blue-400" /> 
            for great digital experiences.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:-translate-y-1 text-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
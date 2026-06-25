'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Heart,
  Sparkles
} from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const sections: FooterSection[] = [
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

const socialLinks = [
  { label: 'GitHub', icon: Github, href: 'https://github.com' },
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
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
      transition: { duration: 0.4 }
    }
  };

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
                <a href="mailto:hello@digitalproductstudio.com" className="hover:text-white transition-colors">
                  hello@digitalproductstudio.com
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
                  <social.icon className="w-5 h-5" />
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
            © {new Date().getFullYear()} Digital Product Studio. 
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
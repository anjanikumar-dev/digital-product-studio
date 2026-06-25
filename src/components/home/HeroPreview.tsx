// src/components/home/HeroPreview.tsx
'use client';

import { motion } from 'framer-motion';

export default function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative"
    >
      <div className="rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-1">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Live Preview
              </span>
            </div>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Updated 2 min ago
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
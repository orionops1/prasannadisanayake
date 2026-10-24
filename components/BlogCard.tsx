'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  category: string
  date: Date
  author: string
  readTime: number
  image?: string
  href: string
}

export default function BlogCard({
  id,
  title,
  excerpt,
  category,
  date,
  author,
  readTime,
  image,
  href,
}: BlogCardProps) {
  return (
    <Link href={href}>
      <motion.article
        whileHover={{ y: -8 }}
        className="group cursor-pointer h-full"
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          {image && (
            <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-gold/10 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Category Badge */}
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-serif font-bold mb-3 text-primary-500 group-hover:text-accent-gold transition-colors line-clamp-2">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
              {excerpt}
            </p>

            {/* Metadata */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>{format(date, 'MMM dd, yyyy')}</span>
                <span>{readTime} min read</span>
              </div>
              <span>By {author}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

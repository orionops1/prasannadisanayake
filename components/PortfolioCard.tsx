'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface PortfolioCardProps {
  id: string
  title: string
  description: string
  category: string
  image?: string
  tags: string[]
  href: string
}

export default function PortfolioCard({
  id,
  title,
  description,
  category,
  image,
  tags,
  href,
}: PortfolioCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-xl bg-white shadow-card hover:shadow-hover transition-all duration-300">
          {/* Image */}
          {image && (
            <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-gold/10 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 bg-accent-gold text-primary-500 text-xs font-bold rounded-full">
              {category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-serif font-bold mb-2 text-primary-500 group-hover:text-accent-gold transition-colors">
              {title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Read More Link */}
            <div className="inline-flex items-center text-accent-gold font-semibold text-sm group-hover:translate-x-2 transition-transform">
              View Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

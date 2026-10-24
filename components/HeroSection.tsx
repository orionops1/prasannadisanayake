'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  cta?: {
    text: string
    href: string
  }
  variant?: 'full' | 'compact'
}

export default function HeroSection({
  title,
  subtitle,
  description,
  cta,
  variant = 'full',
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      className={`relative ${
        variant === 'full'
          ? 'min-h-screen flex items-center'
          : 'py-20 md:py-32'
      } overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-accent-emerald`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-sapphire rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={variant === 'full' ? 'max-w-4xl' : 'max-w-3xl'}
        >
          {subtitle && (
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          )}

          {cta && (
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href={cta.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-accent-gold text-primary-500 rounded-lg font-semibold hover:bg-white transition-colors"
                >
                  {cta.text}
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {variant === 'full' && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      )}
    </section>
  )
}

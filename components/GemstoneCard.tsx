'use client'

import { motion } from 'framer-motion'

interface GemstoneCardProps {
  name: string
  origin: string
  characteristics: string[]
  image?: string
  colors?: string[]
}

export default function GemstoneCard({
  name,
  origin,
  characteristics,
  image,
  colors = [],
}: GemstoneCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, rotateZ: 2 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 h-full">
        {/* Image Section */}
        {image && (
          <div className="relative h-56 bg-gradient-to-br from-primary-100 via-accent-gold/10 to-accent-emerald/10 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
            {/* Gemstone Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-2xl font-serif font-bold text-primary-500 mb-1">
              {name}
            </h3>
            <p className="text-accent-gold font-medium text-sm">{origin}</p>
          </div>

          {/* Color Indicators */}
          {colors.length > 0 && (
            <div className="flex gap-2 mb-4">
              {colors.map((color, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full border-2 border-gray-200 shadow-sm cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}

          {/* Characteristics */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Key Characteristics
            </p>
            <ul className="space-y-1.5">
              {characteristics.map((char, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-1.5 flex-shrink-0" />
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More Button */}
          <button className="w-full mt-4 py-2.5 bg-primary-50 text-primary-600 rounded-lg font-semibold text-sm hover:bg-primary-100 transition-colors group-hover:text-accent-gold">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  )
}

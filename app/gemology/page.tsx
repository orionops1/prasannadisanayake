'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'
import GemstoneCard from '@/components/GemstoneCard'

export default function GemologyPage() {
  const gemstones = [
    {
      name: 'Ceylon Ruby',
      origin: 'Sri Lanka - Premium Grade',
      characteristics: [
        'Vivid pigeon blood red color',
        'High clarity and brilliance',
        'Excellent hardness (9 on Mohs scale)',
        'Premium investment grade',
        'Geological significance in Ceylon heritage',
      ],
      colors: ['#e0115f', '#8b0000', '#ff1493'],
    },
    {
      name: 'Blue Sapphire',
      origin: 'Ceylon - Historic Deposits',
      characteristics: [
        'Deep cornflower blue color',
        'Exceptional durability',
        'Excellent light refraction',
        'Strong market demand',
        'Historical significance in Sri Lanka',
      ],
      colors: ['#0f52ba', '#4169e1', '#1e90ff'],
    },
    {
      name: 'Golden Sapphire',
      origin: 'Sri Lanka - Artisanal',
      characteristics: [
        'Warm golden hue',
        'Rare and collectible',
        'High refractive index',
        'Premium artisanal quality',
        'Ideal for custom jewelry',
      ],
      colors: ['#ffd700', '#daa520', '#d4af37'],
    },
    {
      name: 'Cat\'s Eye',
      origin: 'Ceylon - Chrysoberyl',
      characteristics: [
        'Distinctive optical effect',
        'Golden to honey color',
        'Excellent durability',
        'Astrological significance',
        'Collector\'s favorite',
      ],
      colors: ['#d4a76a', '#c9a961', '#b8966e'],
    },
    {
      name: 'Alexandrite',
      origin: 'Sri Lanka',
      characteristics: [
        'Color-changing properties',
        'Green in daylight, red under light',
        'Rare and valuable',
        'Historical rarity',
        'Premium collector\'s stone',
      ],
      colors: ['#2d5016', '#8b0000', '#c41e3a'],
    },
    {
      name: 'Moonstone',
      origin: 'Ceylon',
      characteristics: [
        'Distinctive adularescence',
        'Milky white appearance',
        'Ethereal optical effects',
        'Spiritual significance',
        'Popular for artisan jewelry',
      ],
      colors: ['#e8e8e8', '#d3d3d3', '#c0c0c0'],
    },
  ]

  const sections = [
    {
      title: 'Gemstone Authentication',
      description: 'Advanced techniques for verifying gemstone authenticity and quality grading.',
      content: 'Using modern spectroscopy, microscopy, and certification standards to ensure authenticity and fair market valuation.',
    },
    {
      title: 'Market Analysis',
      description: 'Understanding gemstone market trends, pricing, and investment potential.',
      content: 'Analysis of global market trends, investment opportunities, and price trajectory for Ceylon gemstones.',
    },
    {
      title: 'Ceylon Gem Heritage',
      description: 'Preserving the rich history and craftsmanship of Sri Lankan gemstones.',
      content: 'Documenting traditional mining techniques, craft heritage, and the role of Ceylon gems in global markets.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Gemology Center"
        subtitle="Expertise & Research"
        description="Dedicated to advancing knowledge about precious gemstones, Ceylon gem heritage, and market dynamics. Combining scientific analysis with historical and cultural context."
      />

      {/* Introduction */}
      <section className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The gemology center represents my professional commitment to understanding and advancing knowledge about precious gemstones. 
            With a focus on Ceylon's rich gem heritage, I explore authentication, market analysis, and the preservation of traditional craftsmanship.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each gemstone tells a story—of geological formation, historical significance, and market value. This platform documents 
            and shares that knowledge with professionals and enthusiasts alike.
          </p>
        </motion.div>
      </section>

      {/* Featured Gemstones */}
      <section className="container-custom section-padding bg-gradient-to-br from-primary-50 via-white to-accent-gold/5 rounded-3xl">
        <SectionHeader
          title="Featured Gemstones"
          description="A curated collection of Ceylon's most significant precious gems"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {gemstones.map((gem) => (
            <GemstoneCard key={gem.name} {...gem} />
          ))}
        </motion.div>
      </section>

      {/* Key Focus Areas */}
      <section className="container-custom section-padding my-20">
        <SectionHeader
          title="Areas of Expertise"
          description="Core competencies in gemology and Ceylon gem heritage"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-500 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {section.description}
              </p>
              <p className="text-sm text-gray-500">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="container-custom section-padding mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-accent-emerald rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            Gemstone Consultation
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in gemstone authentication, market analysis, or educational resources?
          </p>
          <button className="px-8 py-4 bg-accent-gold text-primary-500 rounded-lg font-semibold hover:bg-white transition-colors">
            Contact for Consultation
          </button>
        </motion.div>
      </section>
    </div>
  )
}

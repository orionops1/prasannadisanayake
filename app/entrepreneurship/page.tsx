'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'
import PortfolioCard from '@/components/PortfolioCard'

export default function EntrepreneurshipPage() {
  const ventures = [
    {
      id: '1',
      title: 'FinTech Marketplace Platform',
      description: 'Building a digital marketplace connecting sellers and buyers with integrated payment solutions.',
      category: 'FinTech',
      tags: ['Platform', 'Payments', 'B2B'],
      href: '/portfolio/fintech-marketplace',
    },
    {
      id: '2',
      title: 'Gemstone E-commerce Platform',
      description: 'Curated online marketplace for premium Ceylon gemstones with authentication verification.',
      category: 'E-commerce',
      tags: ['Gemstones', 'Marketplace', 'Luxury'],
      href: '/portfolio/gemstone-ecommerce',
    },
    {
      id: '3',
      title: 'Consulting & Advisory Services',
      description: 'Strategic consulting firm specializing in emerging market entry and business development.',
      category: 'Consulting',
      tags: ['Strategy', 'Advisory', 'Growth'],
      href: '/portfolio/consulting-services',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Entrepreneurship"
        subtitle="Business Development"
        description="Building innovative ventures across multiple industries with focus on scalability, market development, and sustainable growth."
      />

      {/* Introduction */}
      <section className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My entrepreneurial journey has been marked by a commitment to building sustainable, scalable businesses 
            that solve real problems in emerging markets. Each venture combines market opportunity identification with 
            operational excellence.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From fintech solutions to luxury gemstone marketplaces, I focus on creating businesses that demonstrate 
            clear value propositions, sustainable growth models, and positive market impact.
          </p>
        </motion.div>
      </section>

      {/* Key Principles */}
      <section className="container-custom section-padding bg-gradient-to-br from-primary-50 via-white to-accent-gold/5 rounded-3xl my-20">
        <SectionHeader
          title="Entrepreneurial Philosophy"
          description="Core principles guiding business development"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: 'Market Focus',
              description: 'Deep understanding of target markets and customer needs',
            },
            {
              title: 'Innovation',
              description: 'Leveraging technology and new models for competitive advantage',
            },
            {
              title: 'Scalability',
              description: 'Building systems that can grow efficiently with market demand',
            },
            {
              title: 'Sustainability',
              description: 'Creating long-term value through responsible business practices',
            },
          ].map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-card"
            >
              <h3 className="text-lg font-serif font-bold text-primary-500 mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Ventures */}
      <section className="container-custom section-padding">
        <SectionHeader
          title="Active Ventures"
          description="Current business initiatives and projects"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ventures.map((venture) => (
            <PortfolioCard key={venture.id} {...venture} />
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="container-custom section-padding mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-accent-gold rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in discussing business opportunities, partnerships, or investment in innovative ventures?
          </p>
          <button className="px-8 py-4 bg-accent-gold text-primary-500 rounded-lg font-semibold hover:bg-white transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'
import BlogCard from '@/components/BlogCard'
import GemstoneCard from '@/components/GemstoneCard'
import PortfolioCard from '@/components/PortfolioCard'

export default function Home() {
  // Sample blog posts
  const recentBlog = [
    {
      id: '1',
      title: 'The Timeless Beauty of Ceylon Rubies',
      excerpt: 'Exploring the geological formation and market value of precious rubies from Ceylon.',
      category: 'Gemology',
      date: new Date('2024-10-20'),
      author: 'Prasanna S. Disanayake',
      readTime: 8,
      href: '/blog/ceylon-rubies',
    },
    {
      id: '2',
      title: 'Building Scalable Tech Ventures',
      excerpt: 'Key lessons from building and scaling technology companies in emerging markets.',
      category: 'Entrepreneurship',
      date: new Date('2024-10-15'),
      author: 'Prasanna S. Disanayake',
      readTime: 10,
      href: '/blog/scalable-ventures',
    },
    {
      id: '3',
      title: 'Cybersecurity in the AI Era',
      excerpt: 'How artificial intelligence is reshaping cybersecurity threats and defenses.',
      category: 'Technology',
      date: new Date('2024-10-10'),
      author: 'Prasanna S. Disanayake',
      readTime: 12,
      href: '/blog/ai-cybersecurity',
    },
  ]

  // Sample gemstones
  const gemstones = [
    {
      name: 'Ceylon Ruby',
      origin: 'Sri Lanka',
      characteristics: [
        'Vivid pigeon blood red color',
        'High clarity and brilliance',
        'Excellent hardness (9 on Mohs scale)',
        'Premium investment grade',
      ],
      colors: ['#e0115f', '#8b0000', '#ff1493'],
    },
    {
      name: 'Blue Sapphire',
      origin: 'Ceylon',
      characteristics: [
        'Deep cornflower blue',
        'Exceptional durability',
        'Excellent light refraction',
        'Strong market demand',
      ],
      colors: ['#0f52ba', '#4169e1', '#1e90ff'],
    },
    {
      name: 'Golden Sapphire',
      origin: 'Sri Lanka',
      characteristics: [
        'Warm golden hue',
        'Rare and collectible',
        'High refractive index',
        'Premium artisanal quality',
      ],
      colors: ['#ffd700', '#daa520', '#d4af37'],
    },
  ]

  // Sample portfolio items
  const portfolioItems = [
    {
      id: '1',
      title: 'Gemstone Authentication System',
      description: 'AI-powered system for gemstone authenticity verification and quality assessment.',
      category: 'Technology',
      tags: ['AI/ML', 'Computer Vision', 'Gemology'],
      href: '/portfolio/gemstone-auth',
    },
    {
      id: '2',
      title: 'Ceylon Gem Heritage Initiative',
      description: 'Platform documenting and preserving the heritage of Ceylon gemstone craftsmanship.',
      category: 'Gemology',
      tags: ['Heritage', 'Documentation', 'Education'],
      href: '/portfolio/ceylon-heritage',
    },
    {
      id: '3',
      title: 'FinTech Startup Launch',
      description: 'Building and scaling a fintech platform in emerging markets.',
      category: 'Entrepreneurship',
      tags: ['Startup', 'FinTech', 'Leadership'],
      href: '/portfolio/fintech-startup',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Gemology · Entrepreneurship · Cybersecurity & AI"
        subtitle="Welcome to my professional journey"
        description="Bridging the worlds of precious gemstones, business innovation, and technological advancement. Explore my work across three interconnected domains of expertise."
        cta={{
          text: 'Explore My Work',
          href: '#featured',
        }}
      />

      {/* Featured Sections - The Three Pillars */}
      <section id="featured" className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Gemology Card */}
          <motion.div
            whileHover={{ y: -12 }}
            className="p-8 bg-white rounded-2xl shadow-card hover:shadow-luxury transition-all duration-300 border-t-4 border-accent-ruby"
          >
            <div className="mb-4">
              <span className="inline-block w-12 h-12 bg-accent-ruby/20 rounded-full flex items-center justify-center text-2xl">
                💎
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary-500 mb-3">
              Gemology
            </h3>
            <p className="text-gray-600 mb-6">
              Deep expertise in precious gemstones, Ceylon gem heritage, authentication, and market analysis.
            </p>
            <Link
              href="/gemology"
              className="inline-flex items-center text-accent-gold font-semibold hover:translate-x-2 transition-transform"
            >
              Explore Gemology
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Entrepreneurship Card */}
          <motion.div
            whileHover={{ y: -12 }}
            className="p-8 bg-white rounded-2xl shadow-card hover:shadow-luxury transition-all duration-300 border-t-4 border-accent-gold"
          >
            <div className="mb-4">
              <span className="inline-block w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-2xl">
                🚀
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary-500 mb-3">
              Entrepreneurship
            </h3>
            <p className="text-gray-600 mb-6">
              Building and scaling ventures with focus on innovation, market development, and sustainable growth.
            </p>
            <Link
              href="/entrepreneurship"
              className="inline-flex items-center text-accent-gold font-semibold hover:translate-x-2 transition-transform"
            >
              View Ventures
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Technology Card */}
          <motion.div
            whileHover={{ y: -12 }}
            className="p-8 bg-white rounded-2xl shadow-card hover:shadow-luxury transition-all duration-300 border-t-4 border-accent-sapphire"
          >
            <div className="mb-4">
              <span className="inline-block w-12 h-12 bg-accent-sapphire/20 rounded-full flex items-center justify-center text-2xl">
                🔐
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary-500 mb-3">
              Technology
            </h3>
            <p className="text-gray-600 mb-6">
              Cybersecurity and AI solutions, with expertise in emerging technologies and digital innovation.
            </p>
            <Link
              href="/technology"
              className="inline-flex items-center text-accent-gold font-semibold hover:translate-x-2 transition-transform"
            >
              Tech Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Gemology Spotlight - Featured Gemstones */}
      <section className="container-custom section-padding bg-gradient-to-br from-primary-50 via-white to-accent-gold/5 rounded-3xl my-20">
        <SectionHeader
          label="Featured Gemstones"
          title="Gemology Center"
          description="Explore curated selections of premium Ceylon gemstones with detailed analysis and market insights."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {gemstones.map((gem) => (
            <GemstoneCard key={gem.name} {...gem} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/gemology">
            <button className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors">
              Explore Full Gemology Collection
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Portfolio Highlights */}
      <section className="container-custom section-padding">
        <SectionHeader
          label="Selected Works"
          title="Recent Projects"
          description="Showcasing innovative projects across gemology, entrepreneurship, and technology."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="container-custom section-padding bg-white rounded-3xl my-20">
        <SectionHeader
          label="Latest Insights"
          title="From the Blog"
          description="Articles on gemology, entrepreneurship, and technology trends."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {recentBlog.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/blog">
            <button className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors">
              Read More Articles
            </button>
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-padding mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-accent-emerald rounded-3xl p-12 md:p-16 text-center text-white"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            Let&apos;s Collaborate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Interested in discussing gemology, exploring business opportunities, or technology partnerships?
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-accent-gold text-primary-500 rounded-lg font-semibold hover:bg-white transition-colors">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'
import BlogCard from '@/components/BlogCard'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const allBlogPosts = [
    {
      id: '1',
      title: 'The Timeless Beauty of Ceylon Rubies',
      excerpt: 'Exploring the geological formation, market value, and investment potential of precious rubies from Sri Lanka.',
      category: 'Gemology',
      date: new Date('2024-10-20'),
      author: 'Prasanna S. Disanayake',
      readTime: 8,
      href: '/blog/ceylon-rubies',
    },
    {
      id: '2',
      title: 'Building Scalable Tech Ventures',
      excerpt: 'Key lessons from building and scaling technology companies in emerging markets with limited resources.',
      category: 'Entrepreneurship',
      date: new Date('2024-10-15'),
      author: 'Prasanna S. Disanayake',
      readTime: 10,
      href: '/blog/scalable-ventures',
    },
    {
      id: '3',
      title: 'Cybersecurity in the AI Era',
      excerpt: 'How artificial intelligence is reshaping cybersecurity threats, defenses, and the future of digital security.',
      category: 'Technology',
      date: new Date('2024-10-10'),
      author: 'Prasanna S. Disanayake',
      readTime: 12,
      href: '/blog/ai-cybersecurity',
    },
    {
      id: '4',
      title: 'Understanding Gemstone Certification Standards',
      excerpt: 'A comprehensive guide to international gemstone certification standards and what they mean for buyers.',
      category: 'Gemology',
      date: new Date('2024-10-05'),
      author: 'Prasanna S. Disanayake',
      readTime: 9,
      href: '/blog/certification-standards',
    },
    {
      id: '5',
      title: 'Entrepreneurship in Emerging Markets',
      excerpt: 'Navigating unique challenges and opportunities when building businesses in developing economies.',
      category: 'Entrepreneurship',
      date: new Date('2024-09-30'),
      author: 'Prasanna S. Disanayake',
      readTime: 11,
      href: '/blog/emerging-markets',
    },
    {
      id: '6',
      title: 'Machine Learning Applications in Gemology',
      excerpt: 'Exploring how AI and machine learning are revolutionizing gemstone authentication and classification.',
      category: 'Technology',
      date: new Date('2024-09-25'),
      author: 'Prasanna S. Disanayake',
      readTime: 13,
      href: '/blog/ml-gemology',
    },
    {
      id: '7',
      title: 'Ceylon Gem Heritage: Preserving Tradition',
      excerpt: 'The importance of documenting and preserving the rich craftsmanship traditions of Sri Lankan gem artisans.',
      category: 'Gemology',
      date: new Date('2024-09-20'),
      author: 'Prasanna S. Disanayake',
      readTime: 10,
      href: '/blog/gem-heritage',
    },
    {
      id: '8',
      title: 'Risk Management in Startup Ventures',
      excerpt: 'Strategic approaches to identifying, assessing, and mitigating risks in early-stage company development.',
      category: 'Entrepreneurship',
      date: new Date('2024-09-15'),
      author: 'Prasanna S. Disanayake',
      readTime: 12,
      href: '/blog/startup-risk',
    },
    {
      id: '9',
      title: 'Zero-Trust Architecture: Future of Security',
      excerpt: 'Understanding zero-trust security models and their implementation in modern enterprise infrastructure.',
      category: 'Technology',
      date: new Date('2024-09-10'),
      author: 'Prasanna S. Disanayake',
      readTime: 14,
      href: '/blog/zero-trust',
    },
  ]

  const categories = ['All', 'Gemology', 'Entrepreneurship', 'Technology']

  const filteredPosts = selectedCategory === 'All'
    ? allBlogPosts
    : allBlogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Insights & Articles"
        subtitle="Blog"
        description="Exploring ideas at the intersection of gemology, entrepreneurship, and technology."
      />

      {/* Blog Content */}
      <section className="container-custom section-padding">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-primary-500 border-2 border-primary-200 hover:border-primary-500'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No articles found in this category.
            </p>
          </motion.div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="container-custom section-padding mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-accent-sapphire rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest insights on gemology, entrepreneurship, and technology.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-primary-500 placeholder-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent-gold text-primary-500 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  )
}

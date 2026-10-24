'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'
import PortfolioCard from '@/components/PortfolioCard'

export default function TechnologyPage() {
  const projects = [
    {
      id: '1',
      title: 'AI-Powered Gemstone Authentication',
      description: 'Machine learning system for real-time gemstone authenticity verification using computer vision.',
      category: 'AI/ML',
      tags: ['Deep Learning', 'Computer Vision', 'Classification'],
      href: '/portfolio/ai-gemstone-auth',
    },
    {
      id: '2',
      title: 'Cybersecurity Framework Implementation',
      description: 'Enterprise-grade zero-trust security architecture with advanced threat detection capabilities.',
      category: 'Cybersecurity',
      tags: ['Zero-Trust', 'Threat Detection', 'Architecture'],
      href: '/portfolio/cybersecurity-framework',
    },
    {
      id: '3',
      title: 'Blockchain-Based Certification System',
      description: 'Immutable ledger for gemstone certification and provenance tracking.',
      category: 'Blockchain',
      tags: ['Web3', 'Smart Contracts', 'Provenance'],
      href: '/portfolio/blockchain-certs',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Technology & Innovation"
        subtitle="Cybersecurity & AI"
        description="Exploring innovative applications of artificial intelligence, cybersecurity, and emerging technologies in solving real-world challenges."
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
            Technology is a powerful enabler across all domains. My work in this space focuses on applying 
            advanced technologies—particularly AI and cybersecurity—to solve problems in gemology, business, 
            and digital transformation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From machine learning applications in gemstone authentication to comprehensive cybersecurity 
            frameworks for enterprises, I explore how cutting-edge technology creates competitive advantages 
            and operational excellence.
          </p>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="container-custom section-padding bg-gradient-to-br from-primary-50 via-white to-accent-sapphire/5 rounded-3xl my-20">
        <SectionHeader
          title="Technical Expertise"
          description="Core technologies and frameworks"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              category: 'AI & Machine Learning',
              items: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Classification Models', 'Deep Learning'],
            },
            {
              category: 'Cybersecurity',
              items: ['Zero-Trust Architecture', 'Threat Detection', 'Encryption', 'Network Security', 'SIEM', 'Penetration Testing'],
            },
            {
              category: 'Development',
              items: ['Python', 'JavaScript/TypeScript', 'React', 'Cloud Infrastructure', 'DevOps', 'Microservices'],
            },
          ].map((tech, idx) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-card"
            >
              <h3 className="text-xl font-serif font-bold text-primary-500 mb-6">
                {tech.category}
              </h3>
              <ul className="space-y-3">
                {tech.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-sapphire rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="container-custom section-padding">
        <SectionHeader
          title="Technology Projects"
          description="Recent work in AI, cybersecurity, and innovation"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="container-custom section-padding mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-accent-sapphire rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            Technology Collaboration
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in discussing AI applications, cybersecurity solutions, or technology partnerships?
          </p>
          <button className="px-8 py-4 bg-accent-gold text-primary-500 rounded-lg font-semibold hover:bg-white transition-colors">
            Discuss Technology Solutions
          </button>
        </motion.div>
      </section>
    </div>
  )
}

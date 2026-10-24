'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'

export default function AboutPage() {
  const timeline = [
    {
      year: '2008',
      title: 'Early Gemology Interest',
      description: 'Began exploring the world of precious gemstones and Ceylon gem heritage.',
    },
    {
      year: '2012',
      title: 'Formal Training',
      description: 'Completed advanced gemology certifications and market analysis courses.',
    },
    {
      year: '2015',
      title: 'Entrepreneurial Journey Begins',
      description: 'Founded first venture combining gemology expertise with technology.',
    },
    {
      year: '2018',
      title: 'Technology Focus',
      description: 'Expanded into cybersecurity and AI applications in business.',
    },
    {
      year: '2021',
      title: 'Multi-Portfolio Development',
      description: 'Active across gemology, entrepreneurship, and technology sectors.',
    },
    {
      year: '2024',
      title: 'Professional Consolidation',
      description: 'Building integrated platform showcasing three areas of expertise.',
    },
  ]

  const expertise = [
    {
      category: 'Gemology',
      skills: [
        'Precious Gemstone Identification',
        'Authentication & Grading',
        'Market Analysis & Valuation',
        'Ceylon Gem Heritage',
        'Jewelry Design Consultation',
        'Investment Gemstones',
      ],
    },
    {
      category: 'Entrepreneurship',
      skills: [
        'Venture Building & Scaling',
        'Business Strategy',
        'Market Development',
        'Team Leadership',
        'Financial Management',
        'Risk Analysis',
      ],
    },
    {
      category: 'Technology',
      skills: [
        'Cybersecurity Architecture',
        'AI & Machine Learning',
        'Systems Design',
        'Data Analysis',
        'Technology Innovation',
        'Digital Transformation',
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="About Prasanna S. Disanayake"
        subtitle="Professional Background"
        description="Building bridges between the worlds of gemology, entrepreneurship, and technology innovation."
      />

      {/* Personal Statement */}
      <section className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary-500 mb-6">
                Professional Journey
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                My professional path has been defined by curiosity and a commitment to excellence across multiple domains. 
                What began as a fascination with Ceylon gemstones evolved into a comprehensive professional platform.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Today, I work at the intersection of three distinct fields: the scientific and commercial aspects of gemology, 
                the strategic challenges of entrepreneurship, and the innovation potential of cybersecurity and AI.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each domain informs the others. Entrepreneurial thinking enhances my gemology expertise. Technology innovations 
                open new possibilities in all three areas. This integration creates a unique professional perspective.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { number: '15+', label: 'Years of Professional Experience' },
                { number: '50+', label: 'Successful Projects Completed' },
                { number: '3', label: 'Areas of Core Expertise' },
                { number: '100+', label: 'Industry Publications & Research' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1 h-12 bg-accent-gold rounded-full" />
                  <div>
                    <p className="text-3xl font-serif font-bold text-primary-500">
                      {stat.number}
                    </p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="container-custom section-padding bg-gradient-to-br from-primary-50 via-white to-accent-gold/5 rounded-3xl my-20">
        <SectionHeader
          title="Core Competencies"
          description="Expertise across gemology, entrepreneurship, and technology"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {expertise.map((exp, idx) => (
            <motion.div
              key={exp.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-card"
            >
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-6">
                {exp.category}
              </h3>
              <ul className="space-y-3">
                {exp.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="container-custom section-padding">
        <SectionHeader
          title="Professional Timeline"
          description="Key milestones and achievements"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {timeline.map((event, idx) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="p-6 bg-white rounded-xl shadow-card">
                  <p className="text-accent-gold font-bold mb-2">{event.year}</p>
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-4 h-4 bg-accent-gold rounded-full shadow-lg" />
              </div>
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
            Ready to Connect?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re interested in gemology, exploring business opportunities, or technology collaboration, I&apos;d love to connect.
          </p>
          <button className="px-8 py-4 bg-accent-gold text-primary-500 rounded-lg font-semibold hover:bg-white transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </div>
  )
}

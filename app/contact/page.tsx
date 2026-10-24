'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Get in Touch"
        subtitle="Contact"
        description="Have questions or interested in collaboration? I&apos;d love to hear from you."
      />

      {/* Contact Section */}
      <section className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary-500 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: '📧',
                  title: 'Email',
                  content: 'contact@prasannasd.com',
                  href: 'mailto:contact@prasannasd.com',
                },
                {
                  icon: '💼',
                  title: 'Professional Networks',
                  content: 'LinkedIn / Twitter',
                  href: '#',
                },
                {
                  icon: '🌍',
                  title: 'Location',
                  content: 'Available for Global Engagement',
                  href: '#',
                },
                {
                  icon: '📱',
                  title: 'Response Time',
                  content: 'Typically within 24-48 hours',
                  href: '#',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-primary-500 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-card"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-500 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-500 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Links */}
      <section className="container-custom section-padding mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-accent-emerald rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-serif font-bold mb-8">
            Connect on Social Media
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'LinkedIn', href: '#', icon: '💼' },
              { name: 'Twitter', href: '#', icon: '🐦' },
              { name: 'Instagram', href: '#', icon: '📷' },
              { name: 'GitHub', href: '#', icon: '💻' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="font-semibold">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

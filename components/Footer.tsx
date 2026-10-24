'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { label: 'Gemology', href: '/gemology' },
        { label: 'Entrepreneurship', href: '/entrepreneurship' },
        { label: 'Technology', href: '/technology' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Publications', href: '/publications' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'Email', href: 'mailto:contact@prasannasd.com' },
      ],
    },
  ]

  return (
    <footer className="bg-primary-500 text-white">
      <div className="container-custom section-padding">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl font-bold mb-3 text-accent-gold">PSD</h3>
            <p className="text-white/80 text-sm">
              Exploring the intersection of gemology, entrepreneurship, and technology.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-accent-gold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Prasanna S. Disanayake. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/60 hover:text-accent-gold transition-colors text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-white/60 hover:text-accent-gold transition-colors text-sm">
              Terms
            </Link>
            <Link href="#" className="text-white/60 hover:text-accent-gold transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

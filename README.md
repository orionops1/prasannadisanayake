# Prasanna S. Disanayake - Professional Portfolio

A modern, luxury-focused personal portfolio website showcasing expertise in **Gemology**, **Entrepreneurship**, and **Cybersecurity & AI**.

## Project Structure

```
prasanna-portfolio/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout with navigation and footer
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles and typography
│   ├── about/page.tsx            # About page with timeline
│   ├── gemology/page.tsx         # Gemology center - main focus
│   ├── entrepreneurship/page.tsx # Business ventures showcase
│   ├── technology/page.tsx       # AI & Cybersecurity projects
│   ├── blog/page.tsx             # Blog with category filtering
│   └── contact/page.tsx          # Contact form
├── components/                    # Reusable React components
│   ├── Navigation.tsx            # Header navigation
│   ├── Footer.tsx                # Footer with links
│   ├── HeroSection.tsx           # Full-screen hero component
│   ├── SectionHeader.tsx         # Section title and description
│   ├── BlogCard.tsx              # Blog post card
│   ├── GemstoneCard.tsx          # Gemstone showcase card
│   ├── PortfolioCard.tsx         # Project portfolio card
│   └── index.ts                  # Component exports
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## Features

### Design System
- **Color Palette**: Gemstone-inspired luxury colors (deep blue, gold accents, emerald tones)
- **Typography**: Playfair Display (headers) + Inter (body) for elegant, modern look
- **Animations**: Framer Motion for smooth, professional interactions
- **Responsive**: Mobile-first design with Tailwind CSS

### Pages
1. **Homepage**: Hero + three pillars (Gemology, Entrepreneurship, Technology) + featured content
2. **Gemology Center**: Curated gemstone collection, authentication guides, Ceylon heritage
3. **Entrepreneurship**: Active ventures, business philosophy, case studies
4. **Technology**: AI projects, cybersecurity frameworks, technical expertise
5. **Blog**: Categorized articles across all expertise areas
6. **About**: Professional timeline, credentials, expertise breakdown
7. **Contact**: Inquiry form and social connections

### Components
- **HeroSection**: Full-screen hero with animations and CTAs
- **GemstoneCard**: Featured gemstones with color indicators
- **BlogCard**: Article cards with metadata
- **PortfolioCard**: Project showcase cards
- **Navigation**: Sticky header with mobile menu
- **Footer**: Multi-column footer with organized links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS modules
- **Animations**: Framer Motion
- **Font**: Google Fonts (Playfair Display, Inter)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd prasanna-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:
```typescript
colors: {
  primary: { ... },    // Main brand colors
  accent: { ... },     // Gold, burgundy, sapphire
  neutral: { ... },    // Light, muted grays
}
```

### Content
- Update blog posts in `app/blog/page.tsx`
- Modify gemstone data in `app/gemology/page.tsx`
- Edit portfolio items in `app/entrepreneurship/page.tsx` and `app/technology/page.tsx`

### Fonts
Google Fonts are imported in `app/globals.css`. Change font families in `tailwind.config.ts`.

## SEO

The site includes:
- Meta tags in `app/layout.tsx`
- Semantic HTML structure
- Image alt texts in components
- Mobile-friendly responsive design
- Fast performance (Next.js optimization)

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- GitHub Pages (static export)

## Performance

- **Lighthouse Target**: 90+ score
- **FCP Target**: < 1.5s
- **TTI Target**: < 2.5s
- Next.js built-in optimizations:
  - Code splitting
  - Image optimization
  - Font optimization
  - Static generation

## Development

### Add New Pages
1. Create folder in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` file
3. Use existing components for consistency

### Add New Components
1. Create in `components/` directory
2. Export from `components/index.ts`
3. Use TypeScript interfaces for props

### Styling
- Use Tailwind classes primarily
- Global styles in `app/globals.css`
- Utility classes for common patterns (`.container-custom`, `.section-padding`, etc.)

## Future Enhancements

- [ ] Blog CMS integration (Sanity, Contentful)
- [ ] Dark mode toggle
- [ ] Advanced portfolio filtering
- [ ] Newsletter subscription integration
- [ ] Testimonials/case studies
- [ ] Video content sections
- [ ] Interactive gemstone explorer
- [ ] Analytics integration

## License

All rights reserved. This portfolio is for personal professional use.

## Contact

For inquiries about this portfolio or professional collaboration:
- Email: contact@prasannasd.com
- Visit: [https://prasannasd.com](https://prasannasd.com)

---

Built with Next.js, TypeScript, and Tailwind CSS.

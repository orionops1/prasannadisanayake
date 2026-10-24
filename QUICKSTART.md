# Quick Start Guide

## 🚀 Get the Site Running in 2 Minutes

### Step 1: Install Dependencies
```bash
cd d:\my\prasanna-portfolio
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:3000**

---

## 📝 Customization Checklist

### [ ] Update Your Information
1. Open `app/page.tsx` (homepage)
2. Update hero text and descriptions
3. Replace sample blog posts with your content

### [ ] Customize Gemology Section
Edit `app/gemology/page.tsx`:
- Update gemstone descriptions
- Add your specialty stones
- Modify certification details

### [ ] Add Your Portfolio
Update project cards in:
- `app/entrepreneurship/page.tsx` - Your ventures
- `app/technology/page.tsx` - Your tech projects

### [ ] Update About Page
Edit `app/about/page.tsx`:
- Update timeline with your milestones
- Add your credentials
- Modify expertise areas

### [ ] Add Blog Content
Edit `app/blog/page.tsx`:
- Add your actual articles
- Update categories as needed
- Link to full blog posts

### [ ] Update Contact Info
Edit `app/contact/page.tsx`:
- Replace email address
- Add social media links
- Update contact methods

### [ ] Customize Design
Edit `tailwind.config.ts`:
- Change color palette if desired
- Modify font families
- Adjust spacing/sizing

---

## 📂 Important Files to Edit

| File | Purpose | Priority |
|------|---------|----------|
| `app/page.tsx` | Homepage content | ⭐⭐⭐ |
| `app/gemology/page.tsx` | Gemology focus | ⭐⭐⭐ |
| `app/blog/page.tsx` | Blog articles | ⭐⭐⭐ |
| `app/about/page.tsx` | Your bio & timeline | ⭐⭐ |
| `components/Navigation.tsx` | Site navigation | ⭐⭐ |
| `tailwind.config.ts` | Colors & fonts | ⭐ |

---

## 🎨 Replace Images

1. Create `public/images/` folder
2. Add your images there
3. Reference in components:
```tsx
<img src="/images/gemstone.jpg" alt="Description" />
```

---

## 🚢 Deploy Your Site

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Auto-deploys on push

### Option 3: Build & Host Anywhere
```bash
npm run build
# Deploy the `.next` folder to any host
```

---

## 🔍 Key Components to Know

### HeroSection
Large banner sections with animations
```tsx
<HeroSection 
  title="Your Title"
  description="Your description"
  cta={{ text: "Button", href: "/page" }}
/>
```

### SectionHeader
Section titles and descriptions
```tsx
<SectionHeader 
  title="Section Title"
  description="Optional description"
  label="Optional label"
/>
```

### BlogCard
Article preview cards
```tsx
<BlogCard 
  id="1"
  title="Article Title"
  excerpt="Article excerpt..."
  category="Gemology"
  date={new Date()}
  ...
/>
```

### GemstoneCard
Gemstone showcase cards
```tsx
<GemstoneCard
  name="Ceylon Ruby"
  origin="Sri Lanka"
  characteristics={["color", "clarity"]}
  colors={["#e0115f"]}
/>
```

---

## 🎯 Development Workflow

1. **Make changes** to files
2. **Save** (changes auto-refresh in browser)
3. **Check localhost:3000** to see updates
4. **Commit to git** when satisfied
5. **Deploy** to live site

---

## 🆘 Common Customizations

### Change Hero Colors
Edit `HeroSection.tsx` - modify gradient colors

### Add New Page
1. Create folder: `app/new-page/`
2. Create file: `app/new-page/page.tsx`
3. Add to Navigation in `components/Navigation.tsx`

### Update Footer Links
Edit `components/Footer.tsx` - footerSections array

### Modify Blog Categories
Edit `app/blog/page.tsx` - categories array

### Change Font
Edit `tailwind.config.ts` - fontFamily section

---

## 📊 File Size Reference

- Total project: ~1.2 MB (before node_modules)
- Build output: ~150 KB (optimized)
- Each page: ~30-50 KB

---

## ⚡ Performance Tips

✅ Images are automatically optimized by Next.js
✅ Code splitting reduces page load time
✅ Lazy loading for below-the-fold content
✅ Static generation for fast loading

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Styling not showing?**
```bash
npm install
npm run dev
```

**TypeScript errors?**
```bash
npm run build
# Shows all errors
```

---

## 📞 Need Help?

- Check the README.md for full documentation
- Review component files for prop interfaces
- Check Next.js documentation: nextjs.org/docs
- Check Tailwind docs: tailwindcss.com

---

## ✨ You're All Set!

Your professional portfolio is ready to customize. Start with the priority files above, then refine as needed.

**Happy building! 🚀**

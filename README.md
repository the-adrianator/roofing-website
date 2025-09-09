# London Building & Roofing Website

A modern, responsive website for London Building & Roofing, a professional roofing services company serving all London boroughs. Built with Next.js 15 and React 19, featuring interactive components, real-time quote calculations, and comprehensive service showcases.

## 🏠 Project Overview

A modern roofing company website featuring an interactive quote calculator, project portfolio with before/after comparisons, live chat system, and comprehensive service coverage across London boroughs.

## ✨ Key Features

### Interactive Components
- **Quote Calculator**: Dynamic pricing tool with sliders, dropdowns, and real-time calculations
- **Project Gallery**: Tabbed interface with before/after image comparisons
- **Live Chat**: Customer support chat widget with message history
- **Service Area Map**: Interactive map showing service coverage
- **Testimonial Carousel**: Customer reviews with smooth transitions

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized images, lazy loading, and efficient rendering

### Business Features
- **Trust Indicators**: Certification badges (Checkatrade, NFRC, SafeContractor)
- **Emergency Contact**: Prominent 24/7 emergency service information
- **Service Showcase**: Comprehensive coverage of all roofing services
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Comprehensive component library (20+ components)
- **Lucide React** - Modern icon library
- **Next Themes** - Dark/light mode support

### Form Handling
- **React Hook Form 7.54.1** - Form state management
- **Zod 3.24.1** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Interactive Features
- **Embla Carousel React** - Touch-friendly carousels
- **Recharts 2.15.0** - Data visualization
- **React Day Picker** - Date selection
- **React Resizable Panels** - Resizable layouts

### Development Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd london-roofing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
london-roofing/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components (Radix UI)
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── quote-calculator.tsx
│   ├── project-gallery.tsx
│   ├── live-chat.tsx
│   └── ...               # Other feature components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── images/          # Project images and assets
└── styles/              # Additional stylesheets
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #456F8C (Service sections, CTAs)
- **Dark Gray**: #2C3338 (Text, headers)
- **Accent Gold**: #C5A572 (Highlights, buttons)
- **Background**: White/Gray-50 (Clean, professional)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Rounded, consistent sizing, clear hierarchy
- **Forms**: Clean inputs, proper validation states
- **Navigation**: Fixed header with backdrop blur, mobile-friendly

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first navigation with hamburger menu
- Flexible grid layouts
- Optimized image sizes
- Touch-friendly interactive elements

## 🔧 Customization

### Adding New Services
1. Update `components/service-card.tsx` with new service data
2. Add corresponding images to `public/images/`
3. Update navigation in `components/header.tsx`

### Modifying Quote Calculator
1. Edit pricing logic in `components/quote-calculator.tsx`
2. Update material options and base rates
3. Adjust calculation formulas as needed

### Styling Changes
1. Modify `tailwind.config.ts` for theme customization
2. Update component styles in individual files
3. Global styles in `app/globals.css`

## 📈 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Optimized imports and tree shaking
- **Caching**: Static generation where possible
- **SEO**: Meta tags, structured data, semantic HTML

## 🚀 Deployment

The project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting service**

### Environment Variables
No environment variables are required for basic functionality.

## 📄 License

This project is private and proprietary to London Building & Roofing.

## 🤝 Contributing

This is a client project. For any modifications or updates, please contact the development team.

---

**Built with ❤️ using Next.js, React, and modern web technologies**

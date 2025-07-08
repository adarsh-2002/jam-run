# 🏃‍♂️ JamRun - Jamshedpur's Running Community

A modern, animated Single Page Application (SPA) for Jamshedpur's premier running community. Built with React, Framer Motion, and modern web technologies.

![JamRun Website](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.x-purple?style=for-the-badge)
![React Router](https://img.shields.io/badge/React%20Router-6.x-green?style=for-the-badge)

## 🎯 **Project Overview**

JamRun is a vibrant, community-focused website that showcases Jamshedpur's running community. The website features smooth animations, modern design, and engaging content that captures the fun spirit of running while maintaining professionalism.

### ✨ **Key Features**
- 🎨 **Modern Design** - Beautiful gradients, smooth animations, and responsive layout
- 🏃‍♂️ **Community Focus** - Showcases local running events and community spirit
- 📱 **Mobile-First** - Fully responsive design for all devices
- ⚡ **Performance Optimized** - Fast loading with optimized animations
- 🎭 **Interactive Animations** - Engaging user experience with Framer Motion
- 🍕 **Fun Content** - Relatable runner references and humor throughout

## 🛠️ **Tech Stack**

### **Core Technologies**
- **React 19.1.0** - Latest React with hooks and modern features
- **React DOM 19.1.0** - React rendering for web
- **React Router DOM 6.x** - Client-side routing and navigation
- **Framer Motion 10.x** - Advanced animations and transitions
- **React Icons** - Comprehensive icon library

### **Development Tools**
- **React Scripts 5.0.1** - Create React App build tools
- **Web Vitals 2.1.4** - Performance monitoring
- **ESLint** - Code linting and quality assurance

## 📦 **Dependencies**

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^6.x",
  "framer-motion": "^10.x",
  "react-icons": "^4.x"
}
```

## 🎬 **Animation Techniques**

### **Page Transitions**
```javascript
<AnimatePresence mode="wait">
  <Routes>
    <Route path="/" element={<Home />} />
    // ... other routes
  </Routes>
</AnimatePresence>
```

### **Entrance Animations**
```javascript
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Scale in with delay
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1, delay: 0.3 }}
```

### **Interactive Animations**
```javascript
// Hover effects
whileHover={{ y: -10, scale: 1.02 }}

// Tap effects
whileTap={{ scale: 0.95 }}

// Scroll-triggered animations
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

## 🎨 **CSS Architecture**

### **CSS Variables (Custom Properties)**
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #4ecdc4;
  --accent-color: #45b7d1;
  --dark-color: #2c3e50;
  --gradient-primary: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  --gradient-secondary: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
  --shadow-light: 0 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 20px rgba(0, 0, 0, 0.15);
  --shadow-heavy: 0 8px 30px rgba(0, 0, 0, 0.2);
}
```

### **Layout Techniques**
- **CSS Grid** - For responsive layouts and card grids
- **Flexbox** - For navigation and button alignment
- **CSS Grid Areas** - For complex page layouts

### **Modern CSS Features**
- **Backdrop Filter** - Glass morphism effects
- **CSS Grid** - Advanced layouts
- **Custom Properties** - Theme management
- **Smooth Scrolling** - Enhanced UX
- **Custom Scrollbar** - Branded experience

## 🏗️ **Component Architecture**

```
src/
├── App.js (Main router)
├── App.css (Global styles)
├── index.css (Base styles)
└── components/
    ├── Navbar.js (Navigation with scroll effects)
    ├── Home.js (Hero, features, stats, CTA)
    ├── About.js (Story, values, team, mission)
    ├── Events.js (Event listings with tabs)
    ├── Gallery.js (Photo grid with filters)
    └── Contact.js (Form, info, map, FAQ)
```

### **Key Components**

#### **Navbar**
- Fixed positioning with scroll effects
- Mobile hamburger menu
- Active link highlighting
- Smooth backdrop blur

#### **Home**
- Hero section with animated running icon
- Feature cards with hover effects
- Statistics with scale animations
- Call-to-action with gradient buttons

#### **About**
- Story section with grid layout
- Values cards with icons
- Team member profiles
- Mission statement with stats

#### **Events**
- Tab navigation (upcoming/past)
- Event cards with detailed info
- Calendar view with date styling
- Registration buttons

#### **Gallery**
- Filterable photo grid
- Modal image viewer
- Hover effects with overlays
- Statistics section

#### **Contact**
- Contact form with validation
- Contact information cards
- Social media links
- Google Maps integration
- FAQ accordion

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (version 14 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jam-run
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### **Available Scripts**

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App
npm run eject
```

## 📱 **Responsive Design**

The website is built with a mobile-first approach:

```css
/* Mobile-first approach */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
}
```

## ⚡ **Performance Optimizations**

- **Lazy Loading** - Images and components
- **Viewport Animations** - Only animate when visible
- **CSS Transforms** - Hardware-accelerated animations
- **Optimized Images** - Unsplash CDN with sizing
- **Code Splitting** - React Router for route-based splitting

## ♿ **Accessibility**

- **Semantic HTML** - Proper heading structure
- **Keyboard Navigation** - Focus management
- **ARIA Labels** - Screen reader support
- **Color Contrast** - WCAG compliant
- **Alt Text** - Descriptive image alt text

## 🌐 **Browser Support**

- **Modern Browsers** - Chrome, Firefox, Safari, Edge
- **CSS Grid** - IE11+ with fallbacks
- **ES6+ Features** - Babel transpilation
- **Progressive Enhancement** - Core functionality works without JS

## 🎯 **Key Features**

### **Community Content**
- Local Jamshedpur references (Jubilee Park, XLRI Ground)
- Fun runner references (post-run food, runner's high)
- Relatable humor and community spirit
- Event management and registration

### **Interactive Elements**
- Smooth page transitions
- Hover effects and micro-interactions
- Modal image viewer
- Tab navigation
- Contact form with validation

### **Design Highlights**
- Vibrant color scheme (orange, teal, blue)
- Modern gradients and shadows
- Glass morphism effects
- Animated icons and illustrations
- Custom scrollbar styling

## 📊 **Project Statistics**

- **100+ Community Members**
- **10+ Events Organized**
- **1000+ KM Run**
- **2 Years of Community Building**

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **React Team** - For the amazing framework
- **Framer Motion** - For smooth animations
- **React Icons** - For beautiful icons
- **Unsplash** - For high-quality images
- **Jamshedpur Running Community** - For inspiration

## 📞 **Contact**

- **Community Leader**: Adarsh S
- **Training Coordinator**: Mowleeshwar Yadav P
- **Event Organizer**: G Vamsidharan
- **Email**: hello@jamrun.in
- **Location**: Jubilee Park, Jamshedpur, Jharkhand

---

**Built with ❤️ for the Jamshedpur running community**

*Remember: The best runs end with chai and samosas! ☕🥟*

# ☕ Cafe Menu React - Modern Responsive Menu Application

<div align="center">

**A beautiful, modern, and responsive cafe menu application built with React**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Themes](#-themes) • [Customization](#-customization)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Themes](#-themes)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Technologies Used](#%EF%B8%8F-technologies-used)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Cafe Menu React** is a premium, feature-rich cafe menu application designed to showcase your coffee shop's offerings in style. Built with modern web technologies, it provides an immersive user experience with smooth animations, multiple theme options, and a fully responsive design that works seamlessly across all devices.

### Why Cafe Menu React?

- 🎨 **4 Beautiful Themes** - Switch between Gray, Warm, Luxury, and Modern themes
- 🎯 **User-Friendly** - Intuitive navigation with horizontal scrolling categories
- 📱 **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Buttery smooth transitions and hover effects
- 🎭 **Professional Design** - Glass morphism, gradients, and modern UI patterns
- 🔧 **Easy to Customize** - Well-organized code with comprehensive documentation

---

## ✨ Features

### 🎨 Visual Features
- **Stunning Intro Page** - Captivating landing page with cafe interior background
- **Multiple Themes** - 4 professionally designed color schemes
- **Animated Backgrounds** - Dynamic gradient animations and floating elements
- **Glass Morphism** - Modern frosted glass effects on navigation
- **Smooth Transitions** - Carefully crafted animations throughout
- **Hover Effects** - Interactive card animations with shine and scale effects

### 🍰 Functional Features
- **Category Navigation** - Horizontal scrolling tabs for 8 product categories
  - Cafe ☕ (Espresso, Cappuccino, Latte, etc.)
  - Shakes 🥤 (Vanilla, Chocolate, Strawberry shakes)
  - Breakfast 🍳 (Eggs, Pancakes, French Toast)
  - Lunch 🍔 (Sandwiches, Burgers, Salads)
  - Dinner 🍝 (Pasta, Steak, Grilled items)
  - Desserts 🍰 (Cakes, Ice Cream, Pastries)
  - Cold Drinks 🥤 (Iced Coffee, Smoothies, Juices)
  - Hot Drinks ☕ (Tea, Hot Chocolate, Specialty coffees)
- **Product Cards** - 44+ items with images, descriptions, and prices
- **Suggestion Section** - Featured items displayed prominently with special cards
- **Scroll Indicators** - Smart gradient overlays showing more content
- **Theme Persistence** - Theme selection persists during session
- **Responsive Design** - Optimized for all screen sizes from mobile to 4K

### 🚀 Technical Features
- **React Hooks** - Modern functional components with useState, useRef, useEffect
- **CSS Variables** - Dynamic theme switching with CSS custom properties
- **Optimized Performance** - Smooth 60fps animations with GPU acceleration
- **Clean Code** - Well-documented with JSDoc comments
- **No Heavy Dependencies** - Pure React and CSS, lightweight bundle
- **Semantic HTML** - Accessible and SEO-friendly markup

---

## 🎭 Themes

### 1. 🌫️ Gray Theme (Default)
A sophisticated monochrome design perfect for modern minimalism.
- **Color Palette:** Grays (#6c6c6c), Blacks (#000000), Whites (#ffffff)
- **Best For:** Professional, clean aesthetic
- **Vibe:** Elegant and timeless

### 2. ☕ Warm Theme
Cozy coffee shop vibes with warm browns and golds.
- **Color Palette:** Browns (#8B4513), Tans (#F5DEB3), Warm Oranges (#FF8C00)
- **Best For:** Traditional cafe atmosphere
- **Vibe:** Cozy and inviting

### 3. 👑 Luxury Theme
Premium black and gold design for upscale establishments.
- **Color Palette:** Black (#1a1a1a), Gold (#D4AF37), Deep Grays (#2d2d2d)
- **Best For:** High-end coffee shops and luxury venues
- **Vibe:** Sophisticated and premium

### 4. 🌊 Modern Theme
Contemporary blue-green palette with fresh vibes.
- **Color Palette:** Blues (#3498db), Teals (#2ecc71), Grays (#34495e)
- **Best For:** Modern, trendy cafes and tech-forward brands
- **Vibe:** Fresh and energetic

---

## 📸 Screenshots

> **Note:** To add screenshots, capture your app and place images in the `screenshots/` folder

### Suggested Screenshots:
1. `intro-page.png` - Landing page with cafe background
2. `gray-theme.png` - Gray theme menu view
3. `warm-theme.png` - Warm cafe theme view
4. `luxury-theme.png` - Luxury black & gold theme
5. `modern-theme.png` - Modern blue-green theme
6. `mobile-view.png` - Mobile responsive view

---

## 📦 Installation

### Prerequisites
- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/cafe-menu-react.git
cd cafe-menu-react
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

The app will automatically reload when you make changes.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

---

## 🚀 Usage

### Getting Started

1. **Launch Application**
   - Run `npm start` and navigate to `http://localhost:3000`
   - You'll see an elegant intro page on first load

2. **Enter the App**
   - Click "Explore Menu" button to enter the main application
   - Intro page won't show again during the session

3. **Browse Categories**
   - Use the horizontal scrolling tabs at the top
   - Click any category to filter products
   - Scroll left/right to see all 8 categories

4. **View Products**
   - Products are displayed as cards with image, name, description, and price
   - Hover over cards for smooth animations
   - Scroll down to see all items in the category

5. **Check Suggestions**
   - Scroll down to "Our Suggests" section
   - View featured items in larger cards
   - Horizontal scroll to browse all suggestions

6. **Switch Themes**
   - Use theme selector buttons at the bottom of the page
   - Choose from: **Gray**, **Warm**, **Luxury**, or **Modern**
   - Theme applies instantly with smooth transitions

### Keyboard Navigation
- **Tab** - Navigate between interactive elements
- **Enter** - Activate buttons and links
- **Arrow Keys** - Scroll horizontally in tabs and suggestions

---

## 📁 Project Structure

```
cafe-ui/
├── public/
│   └── index.html                  # HTML template
├── src/
│   ├── components/
│   │   ├── IntroPage.jsx           # Landing page component
│   │   ├── IntroPage.css           # Intro page styles with animations
│   │   ├── ProductCard.jsx         # Product card component
│   │   ├── ProductCard.css         # Product card styles
│   │   ├── SuggestionCard.jsx      # Suggestion card component
│   │   └── SuggestionCard.css      # Suggestion card styles
│   ├── data/
│   │   └── menuData.js             # Product and category data (44 items)
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Global styles, themes, animations
│   ├── index.js                    # Application entry point
│   └── index.css                   # Base CSS reset and global styles
├── screenshots/                    # Screenshots for documentation
│   └── README.md                   # Screenshot guidelines
├── .gitignore                      # Git ignore rules
├── package.json                    # Dependencies and scripts
├── package-lock.json               # Locked dependency versions
├── LICENSE                         # MIT License
└── README.md                       # This file
```

---

## 🛠️ Technologies Used

### Core Technologies
- **React 18.2.0** - JavaScript library for building user interfaces
- **React DOM 18.2.0** - React rendering for web
- **React Scripts 5.0.1** - Configuration and scripts for Create React App

### Styling
- **CSS3** - Advanced styling with modern features
  - CSS Custom Properties (Variables)
  - CSS Grid & Flexbox
  - CSS Animations & Transitions
  - CSS Gradients
  - Backdrop Filter (Glass Morphism)

### Features & Techniques
- **React Hooks**
  - `useState` - State management
  - `useRef` - DOM references for scroll containers
  - `useEffect` - Side effects and scroll listeners
- **Component Architecture** - Reusable, modular components
- **CSS-in-CSS** - No CSS-in-JS libraries, pure CSS files
- **Responsive Design** - Mobile-first approach with media queries
- **Performance Optimization** - GPU-accelerated animations

---

## 🎨 Customization

### Adding New Products

Edit `src/data/menuData.js`:

```javascript
export const allProducts = [
  // Add your product here
  {
    id: 'unique-product-id',
    category: 'cafe',  // cafe, shakes, breakfast, lunch, dinner, desserts, cold-drinks, hot-drinks
    name: 'Your Product Name',
    description: 'Brief, appetizing description',
    price: '$X.XX',
    image: 'https://images.unsplash.com/your-image-url'
  },
  // ... existing products
];
```

### Adding New Categories

In `src/data/menuData.js`:

```javascript
export const categories = [
  // Add your category
  { id: 'your-category-id', name: 'Your Category Name' },
  // ... existing categories
];
```

Then add products with `category: 'your-category-id'`.

### Creating Custom Themes

In `src/App.css`, add a new theme:

```css
/* Your Custom Theme */
.app.theme-custom {
  /* Background Gradients */
  --bg-gradient-1: #your-color-1;
  --bg-gradient-2: #your-color-2;
  --bg-gradient-3: #your-color-3;
  
  /* Header */
  --header-bg: your-gradient-or-color;
  --header-shadow-1: rgba(your-color, 0.3);
  --header-shadow-2: rgba(your-color, 0.3);
  
  /* Tabs */
  --tab-bg: your-color;
  --tab-color: your-text-color;
  --tab-hover-bg-1: your-color;
  --tab-hover-bg-2: your-color;
  --tab-active-bg-1: your-color;
  --tab-active-bg-2: your-color;
  
  /* Cards */
  --card-bg: your-color-or-gradient;
  --card-border: rgba(your-color, 0.5);
  --card-shadow: rgba(your-color, 0.4);
  --card-text-primary: your-color;
  --card-text-secondary: your-color;
  --card-price-color: your-color;
  
  /* Other Variables */
  --scrollbar-track: your-color;
  --scrollbar-thumb: your-color;
  --gradient-overlay: rgba(your-color, 0.8);
  --section-title-color: your-color;
}
```

Then add a button in `App.jsx` theme selector section.

### Modifying Animations

Edit animation keyframes in CSS files:

```css
@keyframes yourCustomAnimation {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-10px);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.your-element {
  animation: yourCustomAnimation 2s ease-in-out infinite;
}
```

### Changing Intro Background

In `src/components/IntroPage.css`, modify the background:

```css
.intro-page {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url('your-image-url') center / cover;
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add JSDoc comments for new functions/components
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Ensure responsive design works on all screen sizes
- Update README if adding new features
- Keep commit messages clear and descriptive

### Bug Reports
Found a bug? Please open an issue with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and OS information

---

## 📝 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Cafe UI Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

---

## 📧 Contact

**Project Maintainer:** Your Name

- 💼 GitHub: [@yourusername](https://github.com/yourusername)
- 📧 Email: your.email@example.com
- 🌐 Website: [yourwebsite.com](https://yourwebsite.com)

---

## 🙏 Acknowledgments

- **Design Inspiration:** Modern cafe websites and UI trends
- **Images:** [Unsplash](https://unsplash.com) - Beautiful free images
- **Icons:** Unicode emoji characters
- **React Community:** For excellent documentation and support
- **Contributors:** Thanks to everyone who has contributed!

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/cafe-ui",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)

---

## 🌟 Show Your Support

If you find this project helpful, please consider:

- ⭐ **Star this repository** on GitHub
- 🐛 **Report bugs** or suggest features
- 🔀 **Fork and contribute** improvements
- 📢 **Share** with others who might find it useful

---

## 📊 Project Stats

- **44+ Products** across 8 categories
- **4 Themes** with unique color palettes
- **100% Responsive** - Mobile, tablet, desktop
- **0 Dependencies** for UI (Pure React + CSS)
- **Well Documented** - JSDoc comments throughout

---

<div align="center">

### Made with ☕ and ❤️

**Happy Coding! Enjoy your coffee! ☕**

</div>

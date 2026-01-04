# Cafe Menu React - Project Structure

```
cafe-menu-react/
│
├── public/                          # Static public assets
│   └── index.html                   # Main HTML template
│
├── src/                             # Source code
│   │
│   ├── components/                  # React components
│   │   ├── IntroPage.jsx            # Landing page component (with cafe background)
│   │   ├── IntroPage.css            # Intro page styles and animations
│   │   ├── ProductCard.jsx          # Individual product card component
│   │   ├── ProductCard.css          # Product card styles and hover effects
│   │   ├── SuggestionCard.jsx       # Featured suggestion card component
│   │   └── SuggestionCard.css       # Suggestion card styles and animations
│   │
│   ├── data/                        # Application data
│   │   └── menuData.js              # Menu categories, products (44 items), suggestions
│   │
│   ├── App.jsx                      # Main application component (with routing logic)
│   ├── App.css                      # Global styles, 4 themes, animations, layouts
│   ├── index.js                     # React DOM render entry point
│   └── index.css                    # Global CSS reset and base styles
│
├── screenshots/                     # Documentation screenshots
│   └── README.md                    # Screenshot guidelines
│
├── .gitignore                       # Git ignore rules (node_modules, build, etc.)
├── CONTRIBUTING.md                  # Contribution guidelines for developers
├── LICENSE                          # MIT License file
├── package.json                     # Project metadata and dependencies
├── package-lock.json                # Locked dependency versions
├── QUICKSTART.md                    # Quick installation guide
├── README.md                        # Main documentation (comprehensive)
└── PROJECT_STRUCTURE.txt            # This file - project structure overview

```

## Component Hierarchy

```
App (Main Container)
│
├── IntroPage (Landing)
│   ├── Logo & Title
│   ├── Features Section
│   ├── Enter Button
│   └── Background Elements
│
└── Main Application
    │
    ├── Theme Selector (Footer)
    │   └── 4 Theme Buttons
    │
    ├── Header (Navigation)
    │   └── Category Tabs (8 categories)
    │
    └── Content Area
        │
        ├── Products Section
        │   └── ProductCard (multiple instances)
        │       ├── Image
        │       ├── Name
        │       ├── Description
        │       └── Price
        │
        └── Suggestions Section
            └── SuggestionCard (multiple instances)
                ├── Image
                ├── Name
                └── Description
```

## Data Flow

```
menuData.js
    │
    ├─→ categories (8 categories)
    │       └─→ Header Tabs
    │
    ├─→ allProducts (44 items)
    │       └─→ Filtered by category
    │               └─→ ProductCard components
    │
    └─→ suggestions (featured items)
            └─→ SuggestionCard components
```

## Styling Architecture

```
Global Styles (App.css)
│
├── CSS Variables (Themes)
│   ├── Gray Theme (default)
│   ├── Warm Theme
│   ├── Luxury Theme
│   └── Modern Theme
│
├── Layout Styles
│   ├── Header/Navigation
│   ├── Content Area
│   ├── Theme Selector
│   └── Scroll Containers
│
├── Animations
│   ├── Gradient Shift
│   ├── Float Background
│   ├── Pulse Glow
│   └── Fade In
│
└── Responsive Design
    ├── Desktop (default)
    ├── Tablet (< 768px)
    └── Mobile (< 480px)

Component Styles (*.css)
│
├── IntroPage.css
│   ├── Background & Layout
│   ├── Logo & Content
│   ├── Button Animations
│   └── Floating Elements
│
├── ProductCard.css
│   ├── Card Layout
│   ├── Image Container
│   ├── Hover Effects
│   └── Responsive Design
│
└── SuggestionCard.css
    ├── Card Layout
    ├── Image Container
    ├── Fade-in Animation
    └── Enhanced Hover
```

## Key Features by File

### App.jsx
- State management (theme, active tab, intro visibility)
- Scroll opacity calculations for gradient indicators
- Category filtering logic
- Theme switching functionality

### App.css
- 4 complete theme definitions (100+ variables)
- Animated gradient backgrounds
- Glass morphism effects
- Responsive breakpoints

### IntroPage.jsx
- Landing page with entrance animation
- Feature highlights
- Call-to-action button
- Floating decorative elements

### ProductCard.jsx
- Compact horizontal card layout
- Product information display
- Reusable component design

### SuggestionCard.jsx
- Larger vertical card layout
- Featured item presentation
- Staggered animation on load

### menuData.js
- 8 product categories
- 44 product items with details
- 5 suggested items
- Easy to extend and modify

## File Sizes (Approximate)

- App.jsx: ~270 lines (with comments)
- App.css: ~600 lines (4 themes + styles)
- IntroPage.css: ~530 lines (animations + responsive)
- ProductCard.css: ~140 lines
- SuggestionCard.css: ~190 lines
- menuData.js: ~500 lines (data)

## Technologies Summary

- **React 18.2.0** - UI library
- **CSS3** - Styling (no preprocessors)
- **JavaScript ES6+** - Modern JS features
- **React Hooks** - State management
- **No external UI libraries** - Pure custom design

## Build Output

```
build/
├── static/
│   ├── css/
│   │   └── main.[hash].css        # Minified CSS
│   ├── js/
│   │   ├── main.[hash].js         # Minified JS bundle
│   │   └── [hash].chunk.js        # Code-split chunks
│   └── media/                     # Optimized images/fonts
├── index.html                     # Production HTML
└── manifest.json                  # PWA manifest

```

## Development Workflow

1. **Start** → `npm start` → Development server on port 3000
2. **Edit** → Hot reload on file changes
3. **Test** → Check in browser with different themes/sizes
4. **Build** → `npm run build` → Optimized production bundle
5. **Deploy** → Upload `build/` folder to hosting

---

**Last Updated:** 2026-01-05
**Project Version:** 1.0.0

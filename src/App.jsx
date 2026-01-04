/**
 * Cafe UI - Main Application Component
 * 
 * A modern, responsive cafe menu application with multiple themes and smooth animations
 * Features:
 * - 4 customizable themes (Gray, Warm, Luxury, Modern)
 * - Product categories with horizontal scrolling
 * - Suggestion cards with special items
 * - Intro page with cafe atmosphere
 * - Smooth scroll indicators with gradient overlays
 * 
 * @author Your Name
 * @version 1.0.0
 */

import React, { useState, useRef, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import SuggestionCard from './components/SuggestionCard';
import IntroPage from './components/IntroPage';
import { categories, allProducts, suggestions } from './data/menuData';
import './App.css';

function App() {
  // ==================== STATE MANAGEMENT ====================
  
  // Active category tab state
  const [activeTab, setActiveTab] = useState('cafe');
  
  // Theme state (gray, warm, luxury, modern)
  const [theme, setTheme] = useState('gray');
  
  // Intro page visibility control
  const [showIntro, setShowIntro] = useState(true);
  
  // Scroll indicator opacity states for tabs
  const [tabsRightOpacity, setTabsRightOpacity] = useState(1);
  const [tabsLeftOpacity, setTabsLeftOpacity] = useState(0);
  
  // Scroll indicator opacity states for suggestions
  const [suggestionsRightOpacity, setSuggestionsRightOpacity] = useState(1);
  const [suggestionsLeftOpacity, setSuggestionsLeftOpacity] = useState(0);
  
  // ==================== REFS ====================
  
  // Ref for tabs horizontal scroll container
  const tabsContainerRef = useRef(null);
  
  // Ref for suggestions horizontal scroll container
  const suggestionsContainerRef = useRef(null);

  // ==================== SCROLL HANDLERS ====================
  
  /**
   * Handle horizontal scroll for tabs
   * Updates gradient overlay opacity based on scroll position
   */

  /**
   * Handle horizontal scroll for tabs
   * Updates gradient overlay opacity based on scroll position
   */
  const handleTabsScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Calculate opacity for right gradient (fades as we approach the end)
    const distanceFromEnd = maxScroll - scrollLeft;
    const rightOpacity = Math.min(1, distanceFromEnd / 100);
    setTabsRightOpacity(rightOpacity);
    
    // Calculate opacity for left gradient (fades as we approach the start)
    const leftOpacity = Math.min(1, scrollLeft / 100);
    setTabsLeftOpacity(leftOpacity);
  };

  /**
   * Handle horizontal scroll for suggestions
   * Updates gradient overlay opacity based on scroll position
   */
  const handleSuggestionsScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Calculate opacity for right gradient
    const distanceFromEnd = maxScroll - scrollLeft;
    const rightOpacity = Math.min(1, distanceFromEnd / 100);
    setSuggestionsRightOpacity(rightOpacity);
    
    // Calculate opacity for left gradient
    const leftOpacity = Math.min(1, scrollLeft / 100);
    setSuggestionsLeftOpacity(leftOpacity);
  };

  // ==================== EFFECTS ====================
  
  /**
   * Initialize scroll indicators on mount and when content changes
   * Sets initial opacity values for gradient overlays
   */

  useEffect(() => {
    // Check initial scroll state for tabs
    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      const distanceFromEnd = maxScroll - scrollLeft;
      const rightOpacity = Math.min(1, distanceFromEnd / 100);
      setTabsRightOpacity(rightOpacity);
      
      const leftOpacity = Math.min(1, scrollLeft / 100);
      setTabsLeftOpacity(leftOpacity);
    }
    
    // Check initial scroll state for suggestions
    if (suggestionsContainerRef.current) {
      const container = suggestionsContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      const distanceFromEnd = maxScroll - scrollLeft;
      const rightOpacity = Math.min(1, distanceFromEnd / 100);
      setSuggestionsRightOpacity(rightOpacity);
      
      const leftOpacity = Math.min(1, scrollLeft / 100);
      setSuggestionsLeftOpacity(leftOpacity);
    }
  }, [activeTab, suggestions]);

  // ==================== HELPER FUNCTIONS ====================
  
  /**
   * Filter products based on active category
   */
  const filteredProducts = allProducts.filter(product => product.category === activeTab);

  /**
   * Handle transition from intro page to main app
   */
  const handleEnterApp = () => {
    setShowIntro(false);
  };

  // ==================== RENDER ====================
  
  // Show intro page if not dismissed
  if (showIntro) {
    return (
      <div className={`app theme-${theme}`}>
        <IntroPage onEnter={handleEnterApp} />
      </div>
    );
  }

  // Main application render
  return (
    <div className={`app theme-${theme}`}>
      
      {/* ==================== THEME SELECTOR ==================== */}
      <div className="theme-selector">
        <p className="theme-selector-label">Presets</p>
        <div className="theme-buttons">
          <button 
            className={`theme-btn ${theme === 'gray' ? 'active' : ''}`}
            onClick={() => setTheme('gray')}
            title="Gray Theme"
          >
            Gray
          </button>
          <button 
            className={`theme-btn ${theme === 'warm' ? 'active' : ''}`}
            onClick={() => setTheme('warm')}
            title="Warm Cafe Theme"
          >
            Warm
          </button>
          <button 
            className={`theme-btn ${theme === 'luxury' ? 'active' : ''}`}
            onClick={() => setTheme('luxury')}
            title="Luxury Theme"
          >
            Luxury
          </button>
          <button 
            className={`theme-btn ${theme === 'modern' ? 'active' : ''}`}
            onClick={() => setTheme('modern')}
            title="Modern Theme"
          >
            Modern
          </button>
        </div>
      </div>

      
      {/* ==================== NAVIGATION HEADER ==================== */}
      <div 
        className="header"
        style={{
          '--tabs-right-opacity': tabsRightOpacity,
          '--tabs-left-opacity': tabsLeftOpacity
        }}
      >
        <nav 
          className="tabs-container" 
          ref={tabsContainerRef}
          onScroll={handleTabsScroll}
        >
          <div className="tabs">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="content">
        
        {/* Products Section */}
        <div className="products-section">
          <h2 className="section-title">
            {categories.find(c => c.id === activeTab)?.name}
          </h2>
          
          <div className="products-scroll-container">
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Suggestions Section */}
        <div 
          className="suggestions-top-section"
          style={{
            '--suggestions-right-opacity': suggestionsRightOpacity,
            '--suggestions-left-opacity': suggestionsLeftOpacity
          }}
        >
          <h2 className="section-title">our suggests</h2>
          <div 
            className="suggestions-scroll-container"
            ref={suggestionsContainerRef}
            onScroll={handleSuggestionsScroll}
          >
            <div className="suggestions-scroll-grid">
              {suggestions.map(suggestion => (
                <SuggestionCard key={suggestion.id} suggestion={suggestion} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

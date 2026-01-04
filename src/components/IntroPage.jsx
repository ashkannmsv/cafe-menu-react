/**
 * IntroPage Component
 * 
 * Landing page displayed on first visit
 * Features:
 * - Cafe interior background image
 * - Animated logo and branding
 * - Feature highlights
 * - Smooth entrance button
 * - Floating decorative elements
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onEnter - Callback function when user enters the app
 */

import React from 'react';
import './IntroPage.css';

function IntroPage({ onEnter }) {
  return (
    <div className="intro-page">
      <div className="intro-content">
        <div className="intro-logo">
          <div className="coffee-icon">☕</div>
        </div>
        <h1 className="intro-title">Cafe Menu React</h1>
        
        <div className="intro-features">
          <div className="feature-item">
            <span className="feature-icon">🌟</span>
            <span className="feature-text">Premium Quality</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🍰</span>
            <span className="feature-text">Fresh Daily</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">❤️</span>
            <span className="feature-text">Made with Love</span>
          </div>
        </div>

        <button className="intro-enter-btn" onClick={onEnter}>
          <span className="btn-text">Explore Menu</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>

      <div className="intro-background">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="floating-element element-1">☕</div>
        <div className="floating-element element-2">🥐</div>
        <div className="floating-element element-3">🍰</div>
        <div className="floating-element element-4">🥤</div>
      </div>
    </div>
  );
}

export default IntroPage;

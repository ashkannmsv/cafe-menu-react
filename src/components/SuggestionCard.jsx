/**
 * SuggestionCard Component
 * 
 * Displays special suggested items in a featured section
 * Features:
 * - Larger card layout for prominence
 * - Fade-in animation with stagger effect
 * - Enhanced hover animations
 * - Theme-aware styling
 * 
 * @param {Object} props - Component props
 * @param {Object} props.suggestion - Suggestion data object
 * @param {string} props.suggestion.id - Unique suggestion identifier
 * @param {string} props.suggestion.name - Suggestion name
 * @param {string} props.suggestion.description - Suggestion description
 * @param {string} props.suggestion.image - Suggestion image URL
 */

import React from 'react';
import './SuggestionCard.css';

function SuggestionCard({ suggestion }) {
  return (
    <div className="suggestion-card">
      <div className="suggestion-image-container">
        <img src={suggestion.image} alt={suggestion.name} className="suggestion-image" />
      </div>
      <div className="suggestion-info">
        <div className="suggestion-details">
          <h3 className="suggestion-name">{suggestion.name}</h3>
          <p className="suggestion-description">{suggestion.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SuggestionCard;

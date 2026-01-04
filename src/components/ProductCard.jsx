/**
 * ProductCard Component
 * 
 * Displays individual product items in the menu
 * Features:
 * - Product image with hover effects
 * - Product name, description, and price
 * - Smooth animations on hover
 * - Theme-aware styling
 * 
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 * @param {string} props.product.id - Unique product identifier
 * @param {string} props.product.name - Product name
 * @param {string} props.product.description - Product description
 * @param {string} props.product.price - Product price
 * @param {string} props.product.image - Product image URL
 */

import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;

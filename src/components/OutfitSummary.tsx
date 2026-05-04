import React from 'react';
import type { Outfit } from '../data/mockData';
import { Heart, ShoppingBag } from 'lucide-react';
import './OutfitSummary.css';

interface OutfitSummaryProps {
  outfit: Outfit;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const OutfitSummary: React.FC<OutfitSummaryProps> = ({ outfit, isFavorite, onToggleFavorite }) => {
  return (
    <div className="outfit-summary-container">
      <div className="summary-header">
        <div>
          <span className="summary-category">{outfit.category}</span>
          <h1 className="summary-title">{outfit.title}</h1>
        </div>
        <button 
          className="btn-icon" 
          onClick={onToggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
        >
          <Heart size={24} className={isFavorite ? 'fill-accent' : ''} />
        </button>
      </div>

      <div className="summary-price-box">
        <span className="price-label">Total Estimated Price</span>
        <span className="price-value">{outfit.totalEstimatedPrice}</span>
      </div>

      <div className="summary-items-section">
        <h3 className="section-title">Shop The Items</h3>
        <div className="items-list">
          {outfit.items.map((item) => (
            <div key={item.id} className="item-row">
              {item.thumbnail && (
                <img src={item.thumbnail} alt={item.name} className="item-thumbnail" />
              )}
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
              <a 
                href={item.affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary item-shop-btn"
              >
                <ShoppingBag size={16} />
                <span>Shop</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

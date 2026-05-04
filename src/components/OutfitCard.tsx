import React from 'react';
import { Link } from 'react-router-dom';
import type { Outfit } from '../data/mockData';
import './OutfitCard.css';

interface OutfitCardProps {
  outfit: Outfit;
}

export const OutfitCard: React.FC<OutfitCardProps> = ({ outfit }) => {
  return (
    <div className="outfit-card">
      <Link to={`/outfit/${outfit.id}`} className="outfit-card-link">
        <div className="outfit-card-image-wrapper">
          <img 
            src={outfit.imageURL} 
            alt={outfit.title} 
            className="outfit-card-image"
            loading="lazy"
          />
          <div className="outfit-card-overlay">
            <span className="outfit-card-btn">Shop the Look</span>
          </div>
        </div>
        <div className="outfit-card-content">
          <h3 className="outfit-card-title">{outfit.title}</h3>
          <p className="outfit-card-price">{outfit.totalEstimatedPrice}</p>
        </div>
      </Link>
    </div>
  );
};

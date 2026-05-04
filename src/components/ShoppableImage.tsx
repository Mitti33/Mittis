import React, { useState } from 'react';
import type { Outfit } from '../data/mockData';
import './ShoppableImage.css';

interface ShoppableImageProps {
  outfit: Outfit;
}

export const ShoppableImage: React.FC<ShoppableImageProps> = ({ outfit }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="shoppable-image-container">
      <img src={outfit.imageURL} alt={outfit.title} className="shoppable-main-img" />
      
      {outfit.items.map((item) => (
        <div
          key={item.id}
          className={`hotspot ${activeItem === item.id ? 'active' : ''}`}
          style={{ 
            top: `${item.hotspotY}%`, 
            left: `${item.hotspotX}%` 
          }}
          onMouseEnter={() => setActiveItem(item.id)}
          onMouseLeave={() => setActiveItem(null)}
          onClick={() => window.open(item.affiliateLink, '_blank')}
        >
          <div className="hotspot-dot"></div>
          <div className="hotspot-pulse"></div>
          
          <div className="hotspot-tooltip">
            {item.thumbnail && (
              <div className="tooltip-img-wrapper">
                <img src={item.thumbnail} alt={item.name} className="tooltip-img" />
              </div>
            )}
            <div className="tooltip-content">
              <span className="tooltip-name">{item.name}</span>
              <span className="tooltip-price">{item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

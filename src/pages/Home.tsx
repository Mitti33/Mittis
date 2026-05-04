import React from 'react';
import { CategoryPills } from '../components/CategoryPills';
import { OutfitCard } from '../components/OutfitCard';
//import { MOCK_OUTFITS } from '../data/mockData';
import { fetchOutfits } from '../data/mockData';
import type { Outfit } from '../data/mockData';
import { useEffect, useState } from 'react';
import './Home.css';

export const Home: React.FC = () => {
  const [outfits, setOutfits] = useState<Outfit[]>([]);

  useEffect(() => {
    fetchOutfits().then(setOutfits);
  }, []);
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Attire as you desire.</h1>
          <p className="hero-subtitle">Discover curated looks, shop individual items, and elevate your wardrobe effortlessly.</p>
        </div>
      </header>

      <section className="container feed-section">
        <CategoryPills />

        <div className="masonry-grid">
          {outfits.map(outfit => (
            <OutfitCard key={outfit.id} outfit={outfit} />
          ))}
        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import type { Outfit } from '../data/mockData';
import { OutfitCard } from '../components/OutfitCard';
import { Link } from 'react-router-dom';

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Outfit[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('mittis_favorites') || '[]');
    setFavorites(saved);
  }, []);

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', fontSize: '3rem' }}>Your Saved Looks</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
        A curated collection of your desired attires.
      </p>

      {favorites.length > 0 ? (
        <div className="masonry-grid">
          {favorites.map(outfit => (
            <OutfitCard key={outfit.id} outfit={outfit} />
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '5rem 0', 
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px dashed var(--color-border)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>No favorites yet</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            Start hearting your favorite outfits to build your wardrobe.
          </p>
          <Link to="/" className="btn btn-primary">Explore Outfits</Link>
        </div>
      )}
    </div>
  );
};

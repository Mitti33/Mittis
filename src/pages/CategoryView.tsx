import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryPills } from '../components/CategoryPills';
import { OutfitCard } from '../components/OutfitCard';
import { fetchOutfits } from '../data/mockData';
import type { Outfit } from '../data/mockData';

export const CategoryView: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  
  useEffect(() => {
    fetchOutfits().then(setOutfits);
  }, []);

  const filteredOutfits = categoryName && categoryName !== 'All'
    ? outfits.filter(o => o.category === decodeURIComponent(categoryName))
    : outfits;

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <CategoryPills />
      
      <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '2rem', fontSize: '2.5rem' }}>
        {categoryName === 'All' ? 'All Outfits' : decodeURIComponent(categoryName || '')}
      </h1>

      {filteredOutfits.length > 0 ? (
        <div className="masonry-grid">
          {filteredOutfits.map(outfit => (
            <OutfitCard key={outfit.id} outfit={outfit} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-secondary)' }}>
          <h3>No outfits found for this category yet.</h3>
          <p>Check back later or explore other categories!</p>
        </div>
      )}
    </div>
  );
};

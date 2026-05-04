import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchOutfits } from '../data/mockData';
import type { Outfit } from '../data/mockData';
import { ShoppableImage } from '../components/ShoppableImage';
import { OutfitSummary } from '../components/OutfitSummary';
import { ArrowLeft } from 'lucide-react';
import './OutfitDetail.css';

export const OutfitDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [outfit, setOutfit] = useState<Outfit | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetchOutfits().then(data => {
      const found = data.find(o => o.id === id);
      setOutfit(found || null);
    });
  }, [id]);


  useEffect(() => {
    // Check local storage for favorite status
    const favorites = JSON.parse(localStorage.getItem('mittis_favorites') || '[]');
    setIsFavorite(favorites.some((fav: any) => fav.id === id));
  }, [id]);

  const toggleFavorite = () => {
    if (!outfit) return;

    let favorites = JSON.parse(localStorage.getItem('mittis_favorites') || '[]');
    if (isFavorite) {
      favorites = favorites.filter((fav: any) => fav.id !== id);
    } else {
      favorites.push(outfit);
    }

    localStorage.setItem('mittis_favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (!outfit) {
    return (
      <div className="container not-found-page">
        <h2>Outfit not found.</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  return (
    <div className="container outfit-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="outfit-detail-grid">
        <div className="detail-left">
          <ShoppableImage outfit={outfit} />
        </div>
        <div className="detail-right">
          <OutfitSummary
            outfit={outfit}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

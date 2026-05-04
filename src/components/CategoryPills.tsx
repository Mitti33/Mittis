import React from 'react';
import { CATEGORIES } from '../data/mockData';
import { useNavigate, useParams } from 'react-router-dom';
import './CategoryPills.css';

export const CategoryPills: React.FC = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();

  // If we're on home page, "All" might be conceptually active or not.
  // For simplicity, let's determine active category from URL.
  const activeCategory = categoryName || "All";

  return (
    <div className="category-pills-container">
      <div className="category-pills hide-scrollbar">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`pill ${activeCategory === category ? 'active' : ''}`}
            onClick={() => {
              if (category === "All") {
                navigate('/');
              } else {
                navigate(`/categories/${encodeURIComponent(category)}`);
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

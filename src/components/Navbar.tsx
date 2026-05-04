import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Search, Menu } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-mobile-menu">
          <button className="btn-icon">
            <Menu size={24} />
          </button>
        </div>

        <Link to="/" className="navbar-brand">
          <img src="/hanger.png" alt="Mitti's Logo" className="navbar-logo" />
        </Link>

        <div className="navbar-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/categories/All" className={`nav-link ${location.pathname.includes('/categories') ? 'active' : ''}`}>Categories</Link>
          <Link to="/request-vibe" className={`nav-link ${isActive('/request-vibe')}`}>Request a Vibe</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact Us</Link>
        </div>

        <div className="navbar-actions">
          <button className="btn-icon" aria-label="Search">
            <Search size={20} />
          </button>
          <Link to="/favorites" className="btn-icon" aria-label="Favorites">
            <Heart size={20} className={isActive('/favorites') ? 'fill-accent' : ''} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

import React, { useState } from 'react';
import './RequestVibe.css';

export const RequestVibe: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 500);
  };

  if (submitted) {
    return (
      <div className="container request-vibe-page">
        <div className="form-card text-center">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem' }}>Vibe Requested!</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            Our stylists are on it. We'll curate some amazing looks for your occasion and notify you soon.
          </p>
          <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Request Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container request-vibe-page">
      <div className="request-header text-center">
        <h1 className="request-title">Request a Vibe</h1>
        <p className="request-subtitle">Tell us what you're dressing for, and we'll curate the perfect look.</p>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit} className="vibe-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required placeholder="How should we address you?" />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">The Occasion</label>
            <select id="occasion" required>
              <option value="" disabled selected>Select an occasion</option>
              <option value="party">Party / Night Out</option>
              <option value="wedding">Wedding Guest</option>
              <option value="brunch">Sunday Brunch</option>
              <option value="vacation">Vacation / Resort</option>
              <option value="college">College Fest</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="vibe">Preferred Vibe / Style</label>
            <textarea 
              id="vibe" 
              rows={4} 
              required 
              placeholder="E.g. Y2K aesthetic, soft girl, old money, streetwear but chic..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary submit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

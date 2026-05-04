import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src="/logo.png" alt="Mitti's Logo" style={{ maxWidth: '200px', height: 'auto', display: 'inline-block' }} />
      </div>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '2rem', textAlign: 'center' }}>
        About Mitti's
      </h1>

      <div style={{ backgroundColor: 'var(--color-white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px var(--color-shadow)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
          Welcome to <strong>Mitti's</strong> – where fashion meets your unique vibe. We believe that your attire is a reflection of your innermost desires, which is why our motto is simple: <em>"Attire as you desire."</em>
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
          Born from a love of Gen Z aesthetics, Pinterest boards, and effortless styling, Mitti's is designed to take the guesswork out of building an outfit. Whether you're hunting for the perfect wedding guest dress, curating your streetwear look, or just trying to nail that Sunday brunch vibe, we've got you covered.
        </p>
        <p style={{ fontSize: '1.125rem' }}>
          Our interactive "Shop the Look" feature lets you instantly discover the pieces that make up our curated outfits. Hover, click, and shop – it's that easy.
        </p>
        <br></br>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
          Made with ❤️ by <strong>Mitti</strong>.
        </p>
      </div>
    </div>
  );
};

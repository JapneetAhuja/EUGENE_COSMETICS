import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>BEST OF<br />SKINCARE</h1>
        <button className="explore-btn">EXPLORE</button>
      </div>
      <div className="hero-image">
        <img 
          src="https://www.upload.ee/image/17769507/beauty-concept-woman-holds-moisturizer-her-hand.jpg"
          alt="Woman with glowing skin" 
        />
      </div>
    </section>
  );
};

export default HeroSection; 
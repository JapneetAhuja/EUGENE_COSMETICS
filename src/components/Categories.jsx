import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="category-grid">
        <div className="category-card skincare">
          <div className="category-content">
            {/* Empty content div for potential future use */}
          </div>
        </div>
        
        <div className="category-card makeup">
          <div className="category-content">
            {/* Empty content div for potential future use */}
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feature-item">
          <div className="feature-icon">📦</div>
          <h3>FREE SHIPPING</h3>
          <div className="feature-dot">•</div>
          <p>Enjoy free shipping on all orders - no minimum purchase required.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">💬</div>
          <h3>24/7 SUPPORT</h3>
          <div className="feature-dot">•</div>
          <p>Our team is available 24/7 to help with any questions or concerns.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">💰</div>
          <h3>MONEY BACK</h3>
          <div className="feature-dot">•</div>
          <p>We offer a 100% money-back guarantee for your satisfaction.</p>
        </div>
      </div>
    </section>
  );
};

export default Categories; 
import React from 'react';
import './AboutShop.css';

const AboutShop = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h3>ABOUT</h3>
            <h2>OUR SHOP</h2>
          </div>
          
          <div className="about-text">
            <p>
              We believe that beauty should be accessible to everyone. Our mission is to provide high-quality,
              affordable beauty products that empower people to express their individuality and feel confident in their
              own skin.
            </p>
            
            <p>
              We are committed to using only the best ingredients in our products, with a focus on natural and cruelty-free
              formulas. Our team of experts works tirelessly to develop innovative products that deliver real results,
              from skincare essentials to vibrant makeup.
            </p>
            
            <p>
              But our brand is about more than just makeup and skincare - it's about celebrating diversity, self-expression,
              and inclusivity.
            </p>

            <button className="read-more-btn">READ MORE</button>
          </div>
        </div>
        
        <div className="about-image">
          <div className="circular-text">
            <svg viewBox="0 0 100 100">
              <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
              <text>
                <textPath href="#circle">
                  • HAPPY CUSTOMERS • ALL PRODUCTS ARE NATURAL • 100%
                </textPath>
              </text>
            </svg>
          </div>
          <img 
            src="https://www.upload.ee/image/17769543/Screenshot_2025-02-21_at_11.01.13_AM.png" 
            alt="Beautiful woman with perfect skin" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutShop; 
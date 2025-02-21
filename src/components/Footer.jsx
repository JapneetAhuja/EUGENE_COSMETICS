import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="contact-info">
            <div><span>📞</span> +91 98765 43210</div>
            <div><span>📍</span> 123 Park Street, Mumbai, India</div>
            <div><span>✉️</span> info@eugenecosmetics.com</div>
            <div><span>🕒</span> Mon-Sat: 10:00 - 19:00</div>
          </div>
        </div>
        
        <div className="footer-center">
          <h3>EUGENE COSMETICS</h3>
          <p>
            Our formulas are made with natural, organic, and cruelty-free ingredients 
            that are gentle, effective, and good for you and the environment.
          </p>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
            <a href="#youtube">YouTube</a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="#about">ABOUT US</a>
            <a href="#team">OUR TEAM</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © 2024 EUGENE COSMETICS. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#privacy">PRIVACY POLICY</a>
          <a href="#terms">TERMS</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
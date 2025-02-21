import React, { useRef } from 'react';
import './HomePage.css';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Products from './Products';
import Categories from './Categories';
import AboutShop from './AboutShop';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ cart }) => {
  const navigate = useNavigate();
  const productsRef = useRef(null);

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">EUGENE COSMETICS</div>
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#shop">SHOP</a>
          <a href="#headers">HEADERS</a>
          <a href="#blog">BLOG</a>
          <a href="#pages">PAGES</a>
          <a href="#mega">MEGA</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaUser className="icon" />
          <FaHeart className="icon" />
          <div className="cart-icon-container" onClick={() => navigate('/cart')}>
            <FaShoppingCart className="icon" />
            <span className="cart-count">{getCartCount()}</span>
          </div>
        </div>
      </nav>

      <main 
        className="hero-section" 
        style={{ 
          backgroundImage: `url('https://www.upload.ee/image/17769482/background.jpg')`
        }}
      >
        <div className="hero-content">
          <h2 className="collection-label">NEW COLLECTION</h2>
          <h1 className="collection-title">JOZY AND MARCO</h1>
          <p className="collection-description">
            This collection is all about making a statement with vibrant colors
            and bold finishes.
          </p>
          <button className="explore-button" onClick={scrollToProducts}>
            EXPLORE BRAND
          </button>
          <div className="slider-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
          <div className="scroll-down">
            <span className="arrow-down"></span>
          </div>
        </div>
      </main>
      <div ref={productsRef}>
        <Products />
      </div>
      <Categories />
      <AboutShop />
      <Footer />
    </div>
  );
};

export default HomePage; 
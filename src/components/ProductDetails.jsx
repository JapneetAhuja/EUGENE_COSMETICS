import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaShare } from 'react-icons/fa';
import './ProductDetails.css';

const ProductDetails = ({ addToCart, cartItems }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const products = {
    1: {
      name: 'AIRBRUSH MATTE',
      description: 'Skin-perfecting bronzed filter for the face. Our innovative formula creates a natural-looking, sun-kissed glow while minimizing the appearance of pores and imperfections.',
      price: { original: 4800, current: 4000 },
      discount: '-17%',
      rating: 4,
      image: 'https://www.upload.ee/image/17769488/airbrush.png',
      details: [
        'Matte finish',
        'Long-lasting wear',
        'Buildable coverage',
        'Oil-free formula',
        'Suitable for all skin types'
      ]
    },
    2: {
      name: 'EYELINER PACK',
      description: 'A hyper-saturated, water-resistant, liquid eyeliner that delivers ultimate precision and long-lasting wear. Perfect for creating bold, defined looks.',
      price: { original: 4800, current: 4000 },
      discount: '-17%',
      rating: 5,
      image: 'https://www.upload.ee/image/17769494/eyeliner_pack.png',
      details: [
        'Water-resistant formula',
        'Smudge-proof wear',
        'Ultra-precise tip',
        '24-hour lasting power',
        'Easy to apply'
      ]
    },
    3: {
      name: 'FACE & BODY FOUNDATION',
      description: 'A lightweight, waterproof liquid foundation that provides natural-looking coverage for both face and body. Buildable formula for customizable coverage.',
      price: { original: 4800, current: 4000 },
      discount: '-17%',
      rating: 4,
      image: 'https://www.upload.ee/image/17769496/face_bodyfoundation.png',
      details: [
        'Lightweight formula',
        'Waterproof coverage',
        'Natural finish',
        'Suitable for face & body',
        'Available in 40 shades'
      ]
    },
    4: {
      name: 'LACTIC ACID TREATMENT',
      description: 'A gentle yet effective exfoliating serum that helps improve skin texture and tone. Contains natural lactic acid for smooth, radiant skin.',
      price: { original: 4800, current: 4000 },
      discount: '-17%',
      rating: 5,
      image: 'https://www.upload.ee/image/17769502/lactic_acid.png',
      details: [
        'Gentle exfoliation',
        'Improves skin texture',
        'Brightens complexion',
        'pH balanced formula',
        'Suitable for sensitive skin'
      ]
    }
  };

  const product = products[id];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id,
      name: product.name,
      price: product.price.current,
      quantity,
      image: product.image
    });
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')}>EUGENE COSMETICS</div>
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
          <div className="cart-icon-container" onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
            <FaShoppingCart className="icon" />
            <span className="cart-count">{getCartCount()}</span>
          </div>
        </div>
      </nav>

      {showConfirmation && (
        <div className="add-to-cart-confirmation">
          Product added to cart successfully!
        </div>
      )}

      <div className="product-details">
        <div className="breadcrumb">
          <span onClick={() => navigate('/')}>Home</span> / 
          <span>Shop</span> / 
          <span className="current">{product.name}</span>
        </div>
        
        <div className="product-details-container">
          <div className="product-image-section">
            <div className="product-image-large">
              <img src={product.image} alt={product.name} />
              {product.discount && (
                <span className="discount-badge">{product.discount}</span>
              )}
              <button className="share-button">
                <FaShare /> Share
              </button>
            </div>
          </div>
          
          <div className="product-info-detailed">
            <h1>{product.name}</h1>
            
            <div className="pricing">
              {product.price.original && (
                <span className="original-price">₹{product.price.original}</span>
              )}
              <span className="current-price">₹{product.price.current}</span>
            </div>

            <div className="rating">
              {'★'.repeat(product.rating || 0)}{'☆'.repeat(5-(product.rating || 0))}
              <span className="review-count">(121 Reviews)</span>
            </div>

            <p className="description">{product.description}</p>

            <div className="product-details-list">
              <h3>Key Features:</h3>
              <ul>
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="purchase-section">
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>

              <div className="action-buttons">
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  ADD TO CART
                </button>
                <button className="wishlist-btn">
                  <FaHeart />
                </button>
              </div>
            </div>

            <div className="additional-info">
              <div className="info-item">
                <span className="icon">🚚</span>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="info-item">
                <span className="icon">↩️</span>
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 
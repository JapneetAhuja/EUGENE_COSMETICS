import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'AIRBRUSH MATTE',
      description: 'Skin-perfecting bronzed filter for the face.',
      price: { original: 4800, current: 4000 },
      discount: '-17%',
      rating: 4,
      image: 'https://www.upload.ee/image/17769488/airbrush.png',
      featured: true
    },
    {
      id: 2,
      name: 'EYELINER PACK',
      description: 'Water-resistant, liquid eyeliner for precise application.',
      price: { original: 4800, current: 4000 },
      discount: '-17%',
      image: 'https://www.upload.ee/image/17769494/eyeliner_pack.png',
      featured: true
    },
    {
      id: 3,
      name: 'FACE & BODY FOUNDATION',
      description: 'A lightweight, waterproof liquid foundation.',
      price: { original: 4800, current: 4000 },
      discount: '-17%',
      image: 'https://www.upload.ee/image/17769496/face_bodyfoundation.png',
      featured: true
    },
    {
      id: 4,
      name: 'LACTIC ACID',
      description: 'A gentle exfoliating serum for smoother, brighter skin.',
      price: { original: 4800, current: 4000 },
      discount: '-17%',
      image: 'https://www.upload.ee/image/17769502/lactic_acid.png',
      featured: true
    }
  ];

  return (
    <section className="products-section">
      <div className="products-header">
        <h2 className="products-title">TOP BRANDED</h2>
        <div className="products-dot">•</div>
        <h1>PRODUCTS</h1>
      </div>
      
      <div className="products-nav">
        <button className="active">FEATURED</button>
        <button>POPULAR</button>
        <button>CATEGORY</button>
        <button>BRAND</button>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            className="product-card"
          >
            {product.discount && (
              <span className="discount-badge">{product.discount}</span>
            )}
            {product.featured && (
              <span className="featured-badge">FEATURED</span>
            )}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.rating && (
                <div className="product-rating">
                  {'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}
                </div>
              )}
              <div className="product-price">
                <span className="original-price">₹{product.price.original}</span>
                <span className="current-price">₹{product.price.current}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="products-navigation">
        <button className="nav-prev">‹</button>
        <button className="nav-next">›</button>
      </div>
    </section>
  );
};

export default Products; 
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      
      return [...currentCart, product];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route 
          path="/product/:id" 
          element={<ProductDetails addToCart={addToCart} cartItems={cart} />} 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cart={cart} 
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          } 
        />
        <Route 
          path="/checkout" 
          element={<CheckoutPage cart={cart} />} 
        />
      </Routes>
    </div>
  );
}

export default App; 
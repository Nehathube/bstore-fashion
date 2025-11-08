import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BStore Fashion</h3>
            <p>Your fashion destination for the latest trends and styles.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>0123-456-789</p>
            <p>info@bstore.com</p>
            <p>123 Fashion St, City, Country</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 BStore Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
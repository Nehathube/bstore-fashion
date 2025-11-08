import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our mailing list to receive updates on new arrivals, special offers and other discount information.</p>
            <form className="footer-newsletter-form" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder="Enter your e-mail" aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-static">
            <h4>Static Block</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
              standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
          </div>
          <div className="footer-store">
            <h4>Store Information</h4>
            <ul>
              <li>
                <span className="footer-icon" aria-hidden="true">📍</span>
                <span>Your address goes here.</span>
              </li>
              <li>
                <span className="footer-icon" aria-hidden="true">📞</span>
                <span>Call us now : 0123-456-789</span>
              </li>
              <li>
                <span className="footer-icon" aria-hidden="true">✉️</span>
                <span>Email : Demo@Example.Com</span>
              </li>
            </ul>
            <div className="footer-map">
              <iframe
                title="Store Location"
                src="https://maps.google.com/maps?q=Southern%20Cross%20Station%2C%20Melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-about">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" aria-label="Facebook">f</a>
              <a href="https://twitter.com" aria-label="Twitter">t</a>
              <a href="https://plus.google.com" aria-label="Google Plus">g+</a>
              <a href="https://rss.com" aria-label="RSS">rss</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/category/women">Women</Link></li>
              <li><Link to="/category/men">Men</Link></li>
              <li><Link to="/category/clothing">Clothing</Link></li>
              <li><Link to="/category/kids">Kids</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Information</h4>
            <ul>
              <li><Link to="/specials">Specials</Link></li>
              <li><Link to="/new-products">New Products</Link></li>
              <li><Link to="/best-sellers">Best Sellers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>My Account</h4>
            <ul>
              <li><Link to="/orders">My Orders</Link></li>
              <li><Link to="/credit-slips">My Credit Slips</Link></li>
              <li><Link to="/addresses">My Addresses</Link></li>
              <li><Link to="/profile">My Personal Info</Link></li>
              <li><Link to="/logout">Sign Out</Link></li>
            </ul>
            <div className="footer-payments">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Discover</span>
              <span>Amex</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2022 Bstore Made with <span aria-hidden="true">❤</span> by HasThemes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

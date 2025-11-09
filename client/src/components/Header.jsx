import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { getCartCount } = useCart();
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <header className="header-top">
        <div className="sub-header-top">
          <div className="header-top-left">
            <div className="welcome-info">Welcome Bstore</div>
            <div className="top-link currency-dropdown">
              <span onClick={() => setCurrencyDropdown(!currencyDropdown)}>
                Currency: <strong>USD</strong>
              </span>
              {currencyDropdown && (
                <div className="dropdown-content">
                  <a href="#" onClick={() => setCurrencyDropdown(false)}>
                    Dollar (USD)
                  </a>
                  <a href="#" onClick={() => setCurrencyDropdown(false)}>
                    Euro (EUR)
                  </a>
                </div>
              )}
            </div>
            <div className="top-link language-dropdown top-link-last">
              <span onClick={() => setLanguageDropdown(!languageDropdown)}>
                Language: <strong>English</strong>
              </span>
              {languageDropdown && (
                <div className="dropdown-content">
                  <a href="#" onClick={() => setLanguageDropdown(false)}>
                    English
                  </a>
                  <a href="#" onClick={() => setLanguageDropdown(false)}>
                    Français
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="header-top-right">
            <Link to="/checkout">Check Out</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/account">My Account</Link>
            <Link to="/cart">My Cart</Link>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </header>

      {/* Main Header */}
      <header className="header-main">
        <div className="container">
          <div className="header-main-left">
            <Link to="/">
              <img
                src="https://htmldemo.net/bstore/bstore/assets/images/logo.webp"
                alt="bstore logo"
                className="logo"
              />
            </Link>
          </div>
          <div className="header-main-center">
            <form
              className="search-bar"
              onSubmit={(event) => event.preventDefault()}
            >
              <select className="categories-select" defaultValue="categories">
                <option value="categories">CATEGORIES</option>
                <option value="women">--Women</option>
                <option value="t-shirts">----T-Shirts</option>
                <option value="men">--Men</option>
                <option value="shoes">----Shoes</option>
                <option value="dress">----Dress</option>
                <option value="tops">----Tops</option>
                <option value="casual">----Casual</option>
                <option value="evening">----Evening</option>
                <option value="summer">----Summer</option>
                <option value="sports">----Sports</option>
                <option value="day">----Day</option>
                <option value="evening-2">----Evening</option>
                <option value="blouse">----Blouse</option>
                <option value="handba">----Handba</option>
                <option value="phone">----Phone</option>
                <option value="house">----House</option>
                <option value="beauty">----Beauty</option>
                <option value="health">----Health</option>
                <option value="clothing">----Clothing</option>
                <option value="kids">--Kids</option>
                <option value="dresse">----Dresse</option>
                <option value="casual-2">----Casual</option>
                <option value="day-2">----Day</option>
                <option value="evening-3">----Evening</option>
                <option value="blouse-2">----Blouse</option>
                <option value="handb">----Handb</option>
                <option value="phone-2">----Phone</option>
                <option value="house-2">----House</option>
              </select>
              <input
                type="text"
                className="search-input"
                placeholder="Enter your search key ..."
              />
              <button type="submit" className="search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="header-main-right">
            <div className="header-right-callus">
              CALL US FREE
              <br />
              0123-456-789
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="main-navigation">
        <div className="container">
          <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/women">WOMEN</Link>
            <Link to="/men">MEN</Link>
            <Link to="/clothing">CLOTHING</Link>
            <Link to="/tops">TOPS</Link>
            <Link to="/t-shirts">T-SHIRTS</Link>
            <Link to="/page">PAGE</Link>
            <Link to="/about">ABOUT US</Link>
          </div>
          <div className="cart-section">
            <span className="cart-link">
              <i className="fa-solid fa-cart-shopping cart-icon"></i>
              <Link to="/cart" className="cart-link-text">
                MY CART
              </Link>
            </span>
            <span className="cart-badge">2</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

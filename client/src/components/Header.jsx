import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { getCartCount } = useCart();
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setCategoriesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div className="search-bar" ref={categoriesRef}>
              <div className="categories-container">
                <button
                  className="categories-button"
                  onClick={() => setCategoriesDropdown(!categoriesDropdown)}
                >
                  CATEGORIES
                </button>
                {categoriesDropdown && (
                  <div className="categories-dropdown-menu">
                    <ul>
                      <li onClick={() => setCategoriesDropdown(false)}>
                        Categories
                      </li>
                      <li
                        className="level-1"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        --Women
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----T-Shirts
                      </li>
                      <li
                        className="level-1"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        --Men
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Shoes
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Dress
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Tops
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Casual
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Evening
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Summer
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Sports
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Day
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Evening
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Blouse
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Handba
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Phone
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----House
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Beauty
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Health
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Clothing
                      </li>
                      <li
                        className="level-1"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        --Kids
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Dresse
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Casual
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Day
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Evening
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Blouse
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Handb
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----Phone
                      </li>
                      <li
                        className="level-2"
                        onClick={() => setCategoriesDropdown(false)}
                      >
                        ----House
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Enter your search key ..."
              />
              <button className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
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
            <span id="nav-links">
              <i className="fas fa-shopping-cart cart-icon"></i>
            <Link to="/cart" className="nav-links" id="nav-links">MY CART</Link>
            </span>
            <span className="cart-badge">2</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

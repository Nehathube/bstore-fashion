import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: "Home", link: "/", sub: [] },
    {
      name: "Women",
      link: "/products",
      sub: [
        { name: "Tops", link: "/products" },
        { name: "Dresses", link: "/products" },
        { name: "Shoes", link: "/products" },
      ]
    },
    {
      name: "Men",
      link: "/products",
      sub: [
        { name: "Shirts", link: "/products" },
        { name: "Pants", link: "/products" },
        { name: "Accessories", link: "/products" },
      ]
    },
    { name: "Clothing", link: "/products", sub: [] },
    { name: "Tops", link: "/products", sub: [] },
    { name: "T-shirts", link: "/products", sub: [] },
    {
      name: "Pages",
      link: "#",
      sub: [
        { name: "About Us", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Wishlist", link: "/wishlist" },
      ]
    },
  ];

  return (
    <nav className="navbar">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={item.sub.length > 0 ? "has-dropdown" : ""}
          >
            <Link to={item.link}>{item.name}</Link>
            {item.sub.length > 0 && activeDropdown === index && (
              <ul className="dropdown">
                {item.sub.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subItem.link}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Slider from "react-slick";
import "./sale-products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SaleProducts = () => {
  const products = [
    {
      id: 1,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/12.webp",
      badge: "NEW",
      title: "Printed Summer Dress",
      price: "$28.98",
      originalPrice: "$30.51",
      rating: 4,
      reviews: 1,
    },
    {
      id: 2,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/9.webp",
      badge: "SALE!",
      title: "Printed Dress",
      price: "$23.40",
      originalPrice: "$26.00",
      rating: 4,
      reviews: 1,
    },
    {
      id: 3,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/1.webp",
      badge: "SALE!",
      title: "Blouse",
      price: "$22.95",
      originalPrice: "$27.00",
      rating: 4,
      reviews: 1,
    },
    {
      id: 4,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/6.webp",
      badge: "NEW",
      title: "Printed Chiffon Dress",
      price: "$16.40",
      originalPrice: "$20.50",
      rating: 4,
      reviews: 1,
    },
    {
      id: 5,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/7.webp",
      badge: "NEW",
      title: "Printed Chiffon Dress",
      price: "$16.40",
      originalPrice: "$20.50",
      rating: 4,
      reviews: 1,
    },
    {
      id: 6,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/13.webp",
      badge: "NEW",
      title: "Printed Summer Dress",
      price: "$30.50",
      rating: 4,
      reviews: 1,
    },
    {
      id: 7,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/3.webp",
      badge: "NEW",
      title: "Faded Short Sleeves T-shirt",
      price: "$16.51",
      rating: 4,
      reviews: 1,
    },
    {
      id: 8,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/5.webp",
      badge: "NEW",
      title: "Printed Dress",
      price: "$50.99",
      rating: 4,
      reviews: 1,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        &#9733;
      </span>
    ));

  return (
    <div className="col-lg-6">
      <section className="sale-products-section">
        <h2 className="section-title">SALE PRODUCTS</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <span
                  className={`badge ${
                    product.badge === "SALE!" ? "sale" : "new"
                  }`}
                >
                  {product.badge}
                </span>
                <div className="overlay-content">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-right-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-info">
                <div className="rating">{renderStars(product.rating)}</div>
                <h3 className="product-title"><a href="#">{product.title}</a></h3>
                <div className="price">
                  <span className="current-price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                </div>
                <p className="reviews">{product.reviews} Review(s)</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default SaleProducts;

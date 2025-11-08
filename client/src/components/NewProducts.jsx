import React from "react";
import Slider from "react-slick";
import "./new-products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewProducts = () => {
  const products = [
    {
      id: 1,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/8.webp",
      badge: "new",
      title: "Printed Dress",
      price: "$26.00",
      rating: 5,
      reviews: 1,
    },
    {
      id: 2,
      image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/6.webp",
      badge: "new",
      title: "Printed Chiffon Dress",
      price: "$16.40",
      originalPrice: "$20.50",
      rating: 5,
      reviews: 1,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        &#9733;
      </span>
    ));
  };

  return (
    <div className="col-lg-6">
      <section className="new-products-section">
        <h2 className="section-title">NEW PRODUCTS</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <span className={`badge ${product.badge.toLowerCase()}`}>
                  {product.badge}
                </span>
                <div className="overlay-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                    <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
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

export default NewProducts;

import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";
import SaleProducts from "../components/SaleProducts";
import { products } from "../data/products";

const Home = () => {
  const [highlightCategory, setHighlightCategory] = useState("Women");

  const featuredProducts = useMemo(() => products.slice(0, 20), []);

  const highlightProducts = useMemo(
    () => [
      {
        id: "highlight-1",
        name: "Printed Summer Dress",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/3.webp",
        price: 30.5,
        originalPrice: null,
        category: "Women",
        isNew: true,
        rating: 5,
        reviews: 1,
      },
      {
        id: "highlight-2",
        name: "Printed Chiffon Dress",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/1.webp",
        price: 16.4,
        originalPrice: 20.5,
        category: "Tops",
        isNew: true,
        rating: 4,
        reviews: 1,
      },
      {
        id: "highlight-3",
        name: "Printed Dress",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/9.webp",
        price: 26.0,
        originalPrice: null,
        category: "T-Shirts",
        isNew: true,
        rating: 4,
        reviews: 1,
      },
      {
        id: "highlight-4",
        name: "Printed Dress",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/5.webp",
        price: 26.0,
        originalPrice: null,
        category: "Women",
        isNew: true,
        rating: 4,
        reviews: 1,
      },
      {
        id: "highlight-5",
        name: "Skeleton Watch",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/12.webp",
        price: 22.95,
        originalPrice: 27.0,
        category: "Tops",
        isSale: true,
        rating: 5,
        reviews: 1,
      },
      {
        id: "highlight-6",
        name: "Leather Loafers",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/13.webp",
        price: 23.4,
        originalPrice: 26.0,
        category: "T-Shirts",
        isSale: true,
        rating: 4,
        reviews: 1,
      },
      {
        id: "highlight-7",
        name: "Classic Watch",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/7.webp",
        price: 50.99,
        originalPrice: null,
        category: "Women",
        isNew: true,
        rating: 5,
        reviews: 1,
      },
      {
        id: "highlight-8",
        name: "Designer Heels",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/11.webp",
        price: 28.98,
        originalPrice: 30.51,
        category: "Tops",
        isSale: true,
        rating: 4,
        reviews: 1,
      },
      {
        id: "highlight-9",
        name: "Oxford Shoes",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/10.webp",
        price: 35.0,
        originalPrice: null,
        category: "T-Shirts",
        isNew: true,
        rating: 4,
        reviews: 1,
      },
      {
        id: "highlight-10",
        name: "Casual T-Shirt",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/2.webp",
        price: 19.99,
        originalPrice: 24.99,
        category: "T-Shirts",
        isSale: true,
        rating: 4,
        reviews: 1,
      },
      {
        id: "highlight-11",
        name: "Summer Dress",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/4.webp",
        price: 32.0,
        originalPrice: null,
        category: "Women",
        isNew: true,
        rating: 5,
        reviews: 1,
      },
      {
        id: "highlight-12",
        name: "Striped Shirt",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/6.webp",
        price: 25.5,
        originalPrice: 29.99,
        category: "Tops",
        isSale: true,
        rating: 4,
        reviews: 1,
      },
      {
        id: "highlight-13",
        name: "Casual Shoes",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/sale/8.webp",
        price: 38.0,
        originalPrice: null,
        category: "Women",
        isNew: true,
        rating: 5,
        reviews: 1,
      },
    ],
    []
  );

  const filteredHighlightProducts = useMemo(
    () =>
      highlightProducts.filter((item) =>
        highlightCategory ? item.category === highlightCategory : true
      ),
    [highlightProducts, highlightCategory]
  );

  const promoBanners = useMemo(
    () => [
      {
        id: "promo-men",
        image: "/images/promo/shope-add1.webp",
        eyebrow: "Fashion 2015",
        headline: "For Men's",
        cta: "Shop Now",
      },
      {
        id: "promo-bag",
        image: "/images/promo/shope-add2.webp",
        eyebrow: "Bags",
        headline: "Collection 2015",
        subline: "★★★★☆",
        cta: "Shop Now",
        size: "small",
      },
    ],
    []
  );

  const secondaryPromos = useMemo(
    () => [
      {
        id: "promo-shoes",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/cms10.webp",
        title: "New Shoes Style",
        subtitle: "Trends Every Week",
        cta: "Shop Now",
      },
      {
        id: "promo-bags",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/cms9.webp",
        title: "Bags",
        subtitle: "A lady's best companion",
        cta: "Shop Now",
      },
    ],
    []
  );

  const halfWidthBanners = useMemo(
    () => [
      {
        id: "half-1",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/one-helf1.webp",
      },
      {
        id: "half-2",
        image: "https://htmldemo.net/bstore/bstore/assets/images/product/one-helf2.webp",
      },
    ],
    []
  );

  const latestNews = useMemo(
    () => [
      {
        id: "news-1",
        image: "https://htmldemo.net/bstore/bstore/assets/images/latest-news/1.webp",
        title: "What Is Lorem Ipsum?",
        excerpt:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: "news-2",
        image: "https://htmldemo.net/bstore/bstore/assets/images/latest-news/2.webp",
        title: "Share The Love For Printing",
        excerpt:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: "news-3",
        image: "https://htmldemo.net/bstore/bstore/assets/images/latest-news/3.webp",
        title: "Answers Your Questions",
        excerpt:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: "news-4",
        image: "https://htmldemo.net/bstore/bstore/assets/images/latest-news/4.webp",
        title: "What Is Bootstrap?",
        excerpt:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
    []
  );

  const brandLogos = useMemo(
    () => [
      {
        id: "brand-1",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/1.webp",
      },
      {
        id: "brand-2",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/2.webp",
      },
      {
        id: "brand-3",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/3.webp",
      },
      {
        id: "brand-4",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/4.webp",
      },
      {
        id: "brand-5",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/5.webp",
      },
      {
        id: "brand-5b",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/5.webp",
      },
      {
        id: "brand-5c",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/5.webp",
      },
      {
        id: "brand-2b",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/2.webp",
      },
      {
        id: "brand-3b",
        image: "https://htmldemo.net/bstore/bstore/assets/images/brand/3.webp",
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        id: "service-1",
        title: "Free Shipping",
        subtitle: "On order over $100",
      },
      {
        id: "service-2",
        title: "24/7 Support",
        subtitle: "Online consultations",
      },
      {
        id: "service-3",
        title: "Daily Updates",
        subtitle: "Check out store for latest",
      },
      {
        id: "service-4",
        title: "30-day Returns",
        subtitle: "Moneyback guarantee",
      },
    ],
    []
  );

  const featuredSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    []
  );

  const highlightSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    []
  );

  const bestsellerProducts = useMemo(() => {
    const extendedHighlight = highlightProducts.slice(0, 8).map((item, index) => ({
      ...item,
      id: `bestseller-extra-${index}-${item.id}`,
    }));

    return [...products, ...extendedHighlight];
  }, [highlightProducts]);

  const bestsellerSettings = featuredSettings;

  const brandSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }),
    []
  );

  const formatPrice = (value) => `$${value.toFixed(2)}`;

  return (
    <div>
      <Hero />
      <div className="new-sale-wrapper">
        <NewProducts />
        <SaleProducts />
      </div>
      <section className="home-promo-banners container">
        {promoBanners.map((banner) => (
          <article
            key={banner.id}
            className={`promo-card ${banner.size === "small" ? "small" : ""}`}
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="promo-card-overlay">
              <div className="promo-copy">
                {banner.eyebrow && (
                  <span className="promo-eyebrow">{banner.eyebrow}</span>
                )}
                {banner.headline && (
                  <span className="promo-headline">{banner.headline}</span>
                )}
                {banner.subline && (
                  <span className="promo-subline">{banner.subline}</span>
                )}
              </div>
              <a href="#">{banner.cta}</a>
            </div>
          </article>
        ))}
      </section>
      <section className="featured-carousel container">
        <div className="section-heading">
          <h2>Featured Products</h2>
        </div>
        <Slider {...featuredSettings} className="product-slider">
          {featuredProducts.map((product) => (
            <div key={product.id} className="carousel-card featured-product-card">
              <div className="carousel-figure">
                <img src={product.image} alt={product.name} />
                {product.isNew && <span className="badge-tag">New</span>}
                {product.isSale && <span className="badge-tag sale">Sale</span>}
                <div className="overlay-content">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="carousel-info">
                <h3><a href="#">{product.name}</a></h3>
                <div className="carousel-rating">
                  {"★".repeat(product.rating || 4)}
                  {"☆".repeat(5 - (product.rating || 4))}
                </div>
                <div className="carousel-price">
                  <span className="current">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="original">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="carousel-reviews">
                  {product.reviews} Review{product.reviews !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="highlight-section">
        <div className="highlight-container">
          <Slider {...highlightSettings} className="highlight-slider">
            {filteredHighlightProducts.map((item) => (
              <div key={item.id} className="carousel-card dark-card">
                <div className="carousel-figure">
                  <img src={item.image} alt={item.name} />
                  {item.isNew && <span className="badge-tag">New</span>}
                  {item.isSale && <span className="badge-tag sale">Sale</span>}
                  <div className="overlay-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-info">
                  <h3><a href="#">{item.name}</a></h3>
                  <div className="carousel-rating">
                    {"★".repeat(item.rating || 4)}
                    {"☆".repeat(5 - (item.rating || 4))}
                  </div>
                  <div className="carousel-price">
                    <span className="current">{formatPrice(item.price)}</span>
                    {item.originalPrice && (
                      <span className="original">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>
                  <p className="carousel-reviews">
                    {item.reviews} Review{item.reviews !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="highlight-controls">
            {['Women', 'Tops', 'T-Shirts'].map((category) => (
              <button
                key={category}
                className={
                  category === highlightCategory ? "active" : undefined
                }
                onClick={() => setHighlightCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="bestseller-section container">
        <div className="section-heading">
          <h2>Bestseller</h2>
        </div>
        <Slider {...bestsellerSettings} className="product-slider">
          {bestsellerProducts.map((product) => (
            <div key={product.id} className="carousel-card featured-product-card">
              <div className="carousel-figure">
                <img src={product.image} alt={product.name} />
                {product.isNew && <span className="badge-tag">New</span>}
                {product.isSale && <span className="badge-tag sale">Sale</span>}
                <div className="overlay-content">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="carousel-info">
                <h3><a href="#">{product.name}</a></h3>
                <div className="carousel-rating">
                  {"★".repeat(product.rating || 4)}
                  {"☆".repeat(5 - (product.rating || 4))}
                </div>
                <div className="carousel-price">
                  <span className="current">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="original">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="carousel-reviews">
                  {product.reviews} Review{product.reviews !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="half-banners container">
        {halfWidthBanners.map((banner, index) => (
          <a key={banner.id} href="#" className="half-banner">
            <img src={banner.image} alt={`Bestseller banner ${index + 1}`} />
          </a>
        ))}
      </section>
      {/* <section className="secondary-promos container">
        {secondaryPromos.map((promo) => (
          <article
            key={promo.id}
            className="promo-card"
            style={{ backgroundImage: `url(${promo.image})` }}
          >
            <div className="promo-card-overlay">
              <h3>{promo.title}</h3>
              <p>{promo.subtitle}</p>
              <a href="#">{promo.cta}</a>
            </div>
          </article>
        ))}
      </section> */}
      <section className="latest-news container">
        <div className="section-heading">
          <h2>Latest News</h2>
        </div>
        <div className="news-grid">
          {latestNews.map((news) => (
            <article key={news.id} className="news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-content">
                <h3>{news.title}</h3>
                <p>{news.excerpt}</p>
                <div className="news-meta">
                  <span>2022-06-20 04:51:43</span>
                  <a href="#">Read More</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="brand-clients container">
        <div className="section-heading">
          <h2>Brand & Clients</h2>
        </div>
        <Slider {...brandSettings} className="brand-slider">
          {brandLogos.map((brand) => (
            <div key={brand.id} className="brand-card">
              <img src={brand.image} alt={brand.id} />
            </div>
          ))}
        </Slider>
      </section>
      <section className="service-strip">
        <div className="container service-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

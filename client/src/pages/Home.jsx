import React from "react";
import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";
import SaleProducts from "../components/SaleProducts";
import ProductGrid from "../components/ProductGrid";
import Newsletter from "../components/Newsletter";
import { products } from "../data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <Hero />
      <div className="row new-sale-container">
        <NewProducts />
        <SaleProducts />
      </div>
      <section className="products-wrapper">
        <div className="products-column">
          <section className="product-section">
            <div className="container">
              <h2>Featured Products</h2>
              <ProductGrid products={featuredProducts} />
            </div>
          </section>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;

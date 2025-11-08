import React from "react";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

const ShopGrid = () => {
  return (
    <div className="container">
      <h2>Shop</h2>
      <p>There are {products.length} products.</p>
      <ProductGrid products={products} />
    </div>
  );
};

export default ShopGrid;

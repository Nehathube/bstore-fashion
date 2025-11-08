import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.isNew && <span className="badge new">new</span>}
        {product.isSale && <span className="badge sale">sale!</span>}
        <div className="product-actions">
          <button className="quick-view">Quick view</button>
          <button className="wishlist">♥</button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-price">
          {product.originalPrice ? (
            <>
              <span className="original-price">${product.originalPrice}</span>
              <span className="sale-price">${product.price}</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
        <div className="product-rating">
          {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)} ({product.reviews} Review{product.reviews !== 1 ? 's' : ''})
        </div>
        <button className="btn-add-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

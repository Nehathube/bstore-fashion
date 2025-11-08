import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2>Subscribe to our Newsletter</h2>
          <p>Get the latest updates on new products and upcoming sales</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
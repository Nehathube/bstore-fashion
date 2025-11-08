import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
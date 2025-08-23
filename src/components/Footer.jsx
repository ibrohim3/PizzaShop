// components/Footer.js
import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          {/* Logo */}
          <div className="footer-section">
            <h2 className="footer-logo gradient-text">pizzashop</h2>
          </div>

          {/* Home */}
          <div className="footer-section">
            <h4>Home</h4>
            <p>To Order</p>
            <p>About us</p>
            <p>Events</p>
            <p>Menu</p>
          </div>

          {/* Events */}
          <div className="footer-section">
            <h4>Events</h4>
            <p>3 Pizza 1 Free Coffee</p>
            <p>2 Pizza for 1 Price</p>
            <p>Kitchen Tour</p>
          </div>

          {/* Menu */}
          <div className="footer-section">
            <h4>Menu</h4>
            <p>Show All</p>
            <p>Seaproducts</p>
            <p>Vegan</p>
            <p>Meat</p>
          </div>

          {/* About Us */}
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Our History</p>
            <p>Why We?</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <span className="footer-phone gradient-text">+7 (937) 333-55-33</span>
          <div className="footer-socials gradient-text">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>
      </footer>
  );
};

export default Footer;

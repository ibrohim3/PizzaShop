import React, { useState } from 'react';
import './Header.css';
import cartIcon from '../assets/cart icon.png';
import './Logn.css';
function Header({ cart, toggleCart }) {
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div>
        <h2 className="logo gradient-text">pizzashop</h2>
      </div>
      <nav>
        <ul className="nav">
          <li>
            <a href="#home" className="link active">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="link active">
              Menu
            </a>
          </li>
          <li>
            <a href="#events" className="link active">
              Events
            </a>
          </li>
          <li>
            <a href="#about" className="link active">
              About us
            </a>
          </li>
        </ul>
      </nav>
      <div className="btns">
        <button
          className="logn-btn gradient-btn "
          onClick={() => setIsOpen(true)}
        >
          Log in
        </button>
        <div className="cart-icon " onClick={toggleCart}>
          <img src={cartIcon} alt="Cart icon" />
        </div>
      </div>
      {/* <div className="modal" onClick={() => setIsOpen(!false)}>
        <h1>Log In</h1>
      </div> */}
    </header>
  );
}

export default Header;

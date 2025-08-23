import React, { useState } from 'react';
import './Header.css';
import cartIcon from '../assets/cart icon.png';
import Logn from './Logn';
function Header({ cart, toggleCart }) {
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="header">
      <div>
        <h2 className="logo gradient-text">pizzashop</h2>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#hero" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="link">
              Menu
            </a>
          </li>
          <li>
            <a href="#events" className="link">
              Events
            </a>
          </li>
          <li>
            <a href="#about" className="link">
              About us
            </a>
          </li>
        </ul>
        {isOpen && (
          <button
            className="logn-btn2 gradient-btn sidebar-login "
            onClick={() => setOpen(true)}
          >
            Log in
          </button>
        )}
      </nav>
      <Logn open={open} setOpen={setOpen} />
      <div className="btns">
        <button
          className="logn-btn gradient-btn"
          onClick={() => setOpen(true)}
        >
          Log in
        </button>
        <div className="cart-icon gradient-btn" onClick={toggleCart}>
          <img src={cartIcon} alt="Cart icon" />
          {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
        </div>
        <div className="bars gradient-text" onClick={() => setIsOpen(true)}>
          ☰
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={handleClose}></div>}
    </header>
  );
}

export default Header;

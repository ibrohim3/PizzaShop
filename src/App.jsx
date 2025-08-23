// App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Event from './components/Event';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="container">
      <Header cart={cart} toggleCart={toggleCart} />
      <Hero />
      <Menu cart={cart} setCart={setCart} />
      <Event/>
      <About />
      <Footer/>
      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id + item.size} className="cart-item">
                    <img src={item.img} alt="" />
                    <p>
                      {item.name} ({item.size} cm)
                    </p>
                    <p>Qty: {item.count}</p>
                    <p>Total: ${item.total}</p>
                  </div>
                ))}
                <h3>
                  Grand Total: $
                  {cart
                    .reduce((acc, item) => acc + parseFloat(item.total), 0)
                    .toFixed(2)}
                </h3>
              </>
            )}
            <button onClick={toggleCart}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

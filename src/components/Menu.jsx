import React, { useState } from 'react';
import './Menu.css';
import pizza1 from '../assets/pizza1.png';
import pizza2 from '../assets/pizza2.png';
import pizza3 from '../assets/pizza3.png';
import pizza4 from '../assets/pizza4.png';
import pizza5 from '../assets/pizza5.png';
import pizza6 from '../assets/pizza6.png';
import pizza7 from '../assets/pizza7.png';
import pizza8 from '../assets/pizza8.png';
import bigPizza from '../assets/bigPizza.png';
function Menu({ cart, setCart }) {
  const categories = [
    'Show All',
    'Meat',
    'Vegetarian',
    'Sea products',
    'Mushroom',
  ];

  const products = [
    {
      id: 1,
      name: 'Italian',
      price: 8.35,
      category: 'Meat',
      img: pizza1,
      size: ['22', '28', '33'],
      info: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
    },
    {
      id: 2,
      name: 'Venecia',
      price: 7.35,
      category: 'Meat',
      img: pizza2,
      size: ['22', '28', '33'],
      info: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
    },
    {
      id: 3,
      name: 'Meat',
      price: 9.35,
      category: 'Meat',
      img: pizza3,
      size: ['22', '28', '33'],
      info: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
    },
    {
      id: 4,
      name: 'Cheese',
      price: 8.35,
      category: 'Meat',
      img: pizza4,
      size: ['22', '28', '33'],
      info: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
    },
    {
      id: 5,
      name: 'Argentina',
      price: 7.35,
      category: 'Meat',
      img: pizza5,
      size: ['22', '28', '33'],
      info: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
    },
    {
      id: 6,
      name: 'Gribnaya',
      price: 6.15,
      category: 'Meat',
      img: pizza6,
      size: ['22', '28', '33'],
      info: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
    },
    {
      id: 7,
      name: 'Tomato',
      price: 7.35,
      category: 'Meat',
      img: pizza7,
      size: ['22', '28', '33'],
      info: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
    },
    {
      id: 8,
      name: 'Italian x2',
      price: 8.55,
      category: 'Meat',
      img: pizza8,
      size: ['22', '28', '33'],
      info: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
    },
  ];

  const [selectCategory, setSelectCategory] = useState('Show All');
  const [selectedSizes, setSelectedSizes] = useState({});
  const [counts, setCounts] = useState({});

  const sizePrices = { 22: 0, 28: 2, 33: 4 };

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleIncrement = (productId) => {
    setCounts((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setCounts((prev) => ({
      ...prev,
      [productId]: prev[productId] > 0 ? prev[productId] - 1 : 0,
    }));
  };

  const calcPrice = (item) => {
    const base = item.price;
    const sizeAdd = sizePrices[selectedSizes[item.id]] || 0;
    const count = counts[item.id] || 0;
    return ((base + sizeAdd) * count).toFixed(2);
  };

  const handleOrder = (item) => {
    const size = selectedSizes[item.id] || '22';
    const count = counts[item.id] || 0;
    const total = calcPrice(item);

    if (count === 0) {
      alert('Please select quantity!');
      return;
    }

    const existingIndex = cart.findIndex(
      (c) => c.id === item.id && c.size === size
    );
    if (existingIndex !== -1) {
      const newCart = [...cart];
      newCart[existingIndex].count += count;
      newCart[existingIndex].total = (
        parseFloat(newCart[existingIndex].total) + parseFloat(total)
      ).toFixed(2);
      setCart(newCart);
    } else {
      const newItem = {
        id: item.id,
        img: item.img,
        name: item.name,
        size,
        count,
        total,
      };
      setCart((prev) => [...prev, newItem]);
    }

    setCounts((prev) => ({ ...prev, [item.id]: 0 }));
  };

  const filteredProducts =
    selectCategory === 'Show All'
      ? products
      : products.filter((p) => p.category === selectCategory);

  return (
    <section className="menu-section" id="menu">
      <h2 className="menu-text">Menu</h2>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`category-btn ${selectCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="products">
        {filteredProducts.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Card */}
            <div className="product-card">
              <div className="card">
                <div className="pizza-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                </div>
                <h2>{item.name}</h2>
                <p className="info">{item.info}</p>

                {/* Sizes */}
                <div className="sizes">
                  {item.size.map((size, i) => (
                    <button
                      key={i}
                      className={`size-btn ${
                        selectedSizes[item.id] === size ? 'active' : ''
                      }`}
                      onClick={() => handleSizeSelect(item.id, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Counter */}
                <div className="price-cont">
                  <p className="price">{item.price}$</p>
                  <div className="counter">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{counts[item.id] || 0}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                </div>

                {/* Order button */}
                <button
                  className="cart-btn gradient-btn"
                  onClick={() => handleOrder(item)}
                >
                  Order Now
                </button>
              </div>
            </div>

            {index === 3 && (
              <div className="banner">
                <img src={bigPizza} alt="Special Offer" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Menu;

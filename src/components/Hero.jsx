import React, { useState } from 'react';
import './Hero.css';
import mainImage from '../assets/main-pizza.png';
import pizza1 from '../assets/pizza 1.png';
import fries1 from '../assets/fries 1.png';

function Hero() {
  const [play, setPlay] = useState(false);

  return (
    <main className="hero">
      <div className="info">
        <h1 className="main-text">The Fastest Pizza Delivery</h1>
        <p className="desc">
          We will deliver juicy pizza for your family in 30 minutes, if the
          courier is late – <span>pizza is free!</span>
        </p>

        <div className="cooking">
          <div>
            <p className="desc">Cooking process:</p>

            {!play ? (
              <div
                className="video-thumbnail"
                onClick={() => setPlay(true)}
                style={{ position: 'relative', cursor: 'pointer' }}
              >
                <img
                  src={`https://img.youtube.com/vi/Lyj8wH2iTYg/hqdefault.jpg`}
                  alt="Cooking process preview"
                  width="270"
                  height="190"
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(0,0,0,0.6)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '24px',
                  }}
                >
                  ▶
                </div>
              </div>
            ) : (
              <iframe
                className="video"
                width="270"
                height="190"
                src="https://www.youtube.com/embed/Lyj8wH2iTYg?autoplay=1"
                title="Cooking pizza process video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="order-btns">
            <button className="order-btn gradient-btn">To order</button>
            <button className="menu-btn">Pizza-Menu</button>
          </div>
        </div>
      </div>

      <div className="images">
        <div className="mini-pizza">
          <img src={pizza1} alt="Mini pizza" loading="lazy" />
        </div>
        <div>
          <img src={mainImage} alt="Main pizza" loading="lazy" />
        </div>
        <div className="fries">
          <img src={fries1} alt="French fries" loading="lazy" />
        </div>
      </div>
    </main>
  );
}

export default Hero;

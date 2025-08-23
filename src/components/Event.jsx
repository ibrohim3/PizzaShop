import React from 'react';
import './Event.css';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';

function Event() {
  return (
    <section className="event-section" id='events'>
      <div className="event-grid">
        {/*  3ta kichkina */}
        <div className="small2">
          <div className="small" style={{ backgroundImage: `url(${card1})` }}>
            <p>HOW WE COOKING</p>
            <button className="more-btn gradient-btn">More</button>
          </div>
          <div className="small" style={{ backgroundImage: `url(${card2})` }}>
            <p>OUR BLOG</p>
            <button className="more-btn gradient-btn">More</button>
          </div>
          <div className="small other">
            <h2>Events</h2>
            <p className="info">
              There are regular events in our pizzeria that will allow you to
              eat delicious food for a lower price!
            </p>
          </div>
        </div>

        {/*  2ta katta  */}
        <div className="large2">
          <div className="large" style={{ backgroundImage: `url(${card3})` }}>
            <p>TWO PIZZA FOR 1 PRICE</p>
            <button className="more-btn gradient-btn">More</button>
          </div>
          <div className="large" style={{ backgroundImage: `url(${card4})` }}>
            <p>KITCHEN TOUR</p>
            <button className="more-btn gradient-btn">More</button>
          </div>
        </div>

        {/*  3ta kichkina */}
        <div className="small2">
          <div className="small" style={{ backgroundImage: `url(${card5})` }}>
            <p>FREE COFFEE FOR 3 PIZZA </p>
            <button className="more-btn gradient-btn">More</button>
          </div>
          <div className="small" style={{ backgroundImage: `url(${card6})` }}>
            <p>OUR INSTAGRAM</p>
            <button className="more-btn gradient-btn">More</button>
          </div>
          <div className="small" style={{ backgroundImage: `url(${card7})` }}>
            <p>WHERE ARE YOU CHOOSE US?</p>
            <button className="more-btn gradient-btn">More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;

import React from 'react';
import './About.css';
import morePizza from '../assets/more pizza.svg';
import bigPizza from '../assets/big pizza.png';
import pizza1 from '../assets/pizza 1.png';
import fries1 from '../assets/fries 1.png';
function About() {
  return (
    <section className="about" id="about">
      <div className="text">
        <h2>About us</h2>
        <p>
          In just a couple of years, we have opened 6 outlets in different
          cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we
          plan to develop the network in other major cities of Russia.
        </p>
        <img src={morePizza} alt="More pizza" loading="lazy " />
        <p>
          The kitchen of each point is at least: 400-500 sq. m. meters, hundreds
          of employees, smoothly performing work in order to receive / prepare /
          form / deliver customer orders on time.
        </p>
      </div>
      <div className="images">
        <div className="mini-pizza">
          <img src={pizza1} alt="Mini pizza image" loading="lazy" />
        </div>
        <div>
          <img src={bigPizza} alt="Big pizza image" loading="lazy" />
        </div>
        <div className="fries">
          <img src={fries1} alt="mini fries image" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default About;

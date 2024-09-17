import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to Online Banking</h1>
        <p>Experience secure, fast, and easy banking at your fingertips.</p>
        <button className="btn-primary">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;

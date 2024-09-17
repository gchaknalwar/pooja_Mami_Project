import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Online Banking</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#Testiomonials">Testimonials</a></li>
          <li><a href="#About Us">About Us</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        <Link to="/login" className="btn-primary">Login</Link>
        </div>
    </nav>
  );
}

export default Navbar;
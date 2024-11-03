

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-custom" style={{backgroundColor:"#66b2b2"}}>
      <div className="container">
        <Link className="navbar-brand" to="/">Rajyog Wellness</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;



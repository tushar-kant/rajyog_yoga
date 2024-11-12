import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ChakraIcon from '../../img/chakra4.svg_-768x768.png';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{ backgroundColor: '#4B0082', color: 'white', padding: '1rem' }}> {/* Darker purple background */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Logo Container */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={ChakraIcon} alt="Chakra Icon" style={{ width: '60px', marginRight: '5px' }} />
          <Link
            to="/"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              textDecoration: 'none', // Remove underline
            }}
          >
            <span style={{ color: '#0B8C57', fontSize: '22px', fontWeight: 'bold' }}>Rajyog</span>
            <span style={{ color: '#0BA1D9', fontSize: '18px', fontWeight: 'normal', marginTop: '-3px' }}>Wellness</span>
            <span style={{ width: '100%', height: '3px', backgroundColor: '#0BA1D9', marginTop: '2px' }}></span>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" style={{ display: 'block', cursor: 'pointer' }} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'none' }} className="md:flex md:space-x-8">
          <ul style={{ display: 'flex', gap: '2rem', textAlign: 'center' }}>
            {['/', '/about', '/services', '/blog', '/contact'].map((path, index) => (
              <li key={index} style={{ listStyle: 'none' }}>
                <Link
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '70px',
              left: 0,
              width: '100%',
              backgroundColor: '#4B0082',  // Updated to darker purple
              padding: '1rem',
            }}
            className="md:hidden"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
              {['/', '/about', '/services', '/blog', '/contact'].map((path, index) => (
                <li key={index} style={{ listStyle: 'none' }}>
                  <Link
                    to={path}
                    className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        @media (min-width: 768px) {
          .chakra-icon { width: 40px; }
          .rajyog { font-size: 20px; }
          .wellness { font-size: 16px; }
          .underline { height: 2px; }

          /* Hide the hamburger icon on medium and larger screens */
          .md\\:hidden {
            display: none !important;
          }

          /* Display the desktop menu */
          .md\\:flex {
            display: flex !important;
          }

          .nav-link:hover, .nav-link:focus {
            border-bottom: 3px solid #f8b400;
            transform: translateY(-5px);
          }
        }

        @media (max-width: 768px) {
          .chakra-icon { width: 40px; }
          .rajyog { font-size: 20px; }
          .wellness { font-size: 16px; }
          .underline { height: 2px; }
        }

        @media (max-width: 480px) {
          .chakra-icon { width: 30px; height: 35px; }
          .rajyog { font-size: 15px; }
          .wellness { font-size: 12px; }
          .underline { height: 1.5px; }
        }
      `}</style>
    </nav>
  );
}

export default Header;

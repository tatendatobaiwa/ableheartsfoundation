import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ableheartslogo from '/src/assets/ableheartslogo.png';
import './Header.css';

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL

  const handleLogoClick = () => {
    navigate('');
  };

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const isActive = (path) => location.pathname === path; // Check active page

  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-content">
            <div>
              <button
                onClick={handleLogoClick}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <img src={ableheartslogo} alt="ScheduleMaster Logo" className="logo" />
              </button>
            </div>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
            <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
              <li className={`nav-item ${isMenuActive ? 'visible' : ''}`}>
                <a href="/" className={isActive('/') ? 'active' : ''}>
                  <span>Home</span>
                </a>
              </li>
              <li className={`nav-item ${isMenuActive ? 'visible' : ''}`}>
                <a href="/programs-and-initiatives" className={isActive('/programs-and-initiatives') ? 'active' : ''}>
                  <span>Programs & Initiatives</span>
                </a>
              </li>
              <li className={`nav-item ${isMenuActive ? 'visible' : ''}`}>
                <a href="/get-involved" className={isActive('/get-involved') ? 'active' : ''}>
                  <span>Get Involved</span>
                </a>
              </li>
              <li className={`nav-item ${isMenuActive ? 'visible' : ''}`}>
                <a href="/shop" className={isActive('/shop') ? 'active' : ''}>
                  <span>Shop</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ableheartslogo from '../../assets/ablehearts.png';

import './Header.css';

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('');
  };

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

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
                <img src={ableheartslogo} alt="AbleHeartsFoundation-Logo" className="logo" />
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
                <a href="/">
                  <span>Home</span>
                </a>
              </li>
              <li className={`nav-item ${isMenuActive ? 'visible' : ''}`}>
                <a href="/programs-and-initiatives">
                  <span>Programs & Initiatives</span>
                </a>
              </li>
              <li className={`nav-item ${isMenuActive ? 'visible' : ''}`}>
                <a href="/get-involved">
                  <span>Get Involved</span>
                </a>
              </li>
              <li className={`nav-item ${isMenuActive ? 'visible' : ''}`}>
                <a href="/shop">
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

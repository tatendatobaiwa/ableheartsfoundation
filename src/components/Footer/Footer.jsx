import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import whiteableheartslogo from "/src/assets/whiteablehearts.png"; 
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        {/* Logo Column */}
        <div className="footer-column logo-column">
          <img
            src={whiteableheartslogo}
            alt="Able Hearts Foundation Logo"
            className="footer-logo"
          />
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h4 className="footer-heading">Get in Touch</h4>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>ableheartsfoundation@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>Francistown, Botswana</span>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>+267 76 198 717</span>
            </div>
          </div>
        </div>

        {/* Programs and Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Able Hearts Foundation</h4>
          <ul className="offices-info">
            <li>Programs & Initiatives</li>
            <li>Get Involved</li>
            <li>Shop</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Follow Us</h4>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <RxTwitterLogo />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>“We are all equal in the fact that we are all different”</p>
        <p>Able Hearts Foundation. Established in 2017.</p>
        <p>
          <a href="/terms-of-use">Terms of Use</a> |{" "}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

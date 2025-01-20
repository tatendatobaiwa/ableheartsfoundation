import React from "react";
import { Link } from "react-router-dom";
import mailIcon from "../../assets/fixed/icons/mail.webp";
import phoneIcon from "../../assets/fixed/icons/call.webp";
import linkedinIcon from "../../assets/fixed/icons/linkedin.webp";
import facebookIcon from "../../assets/fixed/icons/facebook.webp";
import instagramIcon from "../../assets/fixed/icons/instagram.webp";
import ablehearts from "../../assets/fixed/icons/whiteablehearts.webp";
import locationlogo from "../../assets/fixed/icons/pin.webp";
import whatsapplogo from "../../assets/fixed/icons/whatsapp.webp";

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-wrapper">
            <div className="footer-column">
              <ul className="ablehearts-logo" style={{paddingLeft: '0'}}>
                <img src={ablehearts} alt="ablehearts-logo" height="110" style={{ padding: '2rem'}} />
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">AbleHearts Foundation</h4>
              <div className="offices-info">
                <div className="offices-item">
                  <Link to="/programs-and-initiatives">
                    <span>Programs & Initiatives</span>
                  </Link>
                </div>
                <div className="offices-item">
                  <Link to="/get-involved">
                    <span>Get Involved</span>
                  </Link>
                </div>
                <div className="offices-item">
                  <Link to="/shop">
                    <span>Shop</span>
                  </Link>
                </div>
                <div className="offices-item">
                  <Link to="/about-us">
                    <span>About Us</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Contact Information */}
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <img src={mailIcon} alt="Mail Icon" className="icon" height="30" width="30" />
                  <span>ableheartsfoundation&#64;gmail.com</span>
                </div>
                <div className="contact-item">
                  <img src={phoneIcon} alt="Phone Icon" className="icon" height="30" width="30" />
                  <span>+267 71 422 300</span>
                </div>
                <div className="contact-item">
                  <img src={locationlogo} alt="Phone Icon" className="icon" height="30" width="30" />
                  <span>Botswana</span>
                </div>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Follow us</h4>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://web.facebook.com/ableheartsfoundation/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebookIcon} alt="Facebook logo" height="30" width="30" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ableheartsfoundation/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagramIcon} alt="Instagram logo" height="30" width="30" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/26771422300                   "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={whatsapplogo} alt="Whatsapp logo" height="30" width="30" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* New Quote Section */}
          <div className="footer-quote">
            <p>“We are all equal in the fact that we are all different”</p>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>
              © 2017 AbleHearts Foundation. All Rights Reserved | {" "}
              <Link to="/terms-of-use">Terms of Use</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

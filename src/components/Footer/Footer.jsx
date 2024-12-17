import React from "react";
import { Link } from "react-router-dom";
import mailIcon from "../../assets/mail.png";
import phoneIcon from "../../assets/call.png";
import linkedinIcon from "../../assets/linkedin.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import ablehearts from "../../assets/whiteablehearts.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-wrapper">
            <div className="footer-column">
              <ul className="ablehearts-logo">
                <img src={ablehearts} alt="ablehearts-logo" height="110" style={{ paddingLeft: '0', paddingTop: "1rem", paddingBottom: "0", paddingRight: "1rem" }} />
              </ul>
            </div>
            {/* Office Locations */}
            <div className="footer-column">
              <h4 className="footer-heading">AbleHearts Foundation™</h4>
              <div className="offices-info">
                <p>
                  Programs & Initiatives
                  <br />
                  Get Involved
                  <br />
                  Shop
                  <br />
                  About Us
                </p>
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
                  <span>+267 XX XXX XXX</span>
                </div>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Follow us</h4>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinIcon} alt="LinkedIn logo" height="30" width="30" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebookIcon} alt="Facebook logo" height="30" width="30" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagramIcon} alt="Instagram logo" height="30" width="30" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinIcon} alt="LinkedIn logo" height="30" width="30" />
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
              © 2017 AbleHearts Foundation™. All Rights Reserved | {" "}
              <Link to="/terms-of-use">Terms of Use</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

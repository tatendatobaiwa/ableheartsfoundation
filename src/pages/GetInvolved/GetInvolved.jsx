import React, { useEffect } from 'react';
import scribble from '/src/assets/scribblebackground.png';
import './GetInvolved.css';

const GetInvolved = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.pre-animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="get-involved-container">
  {/* Global Blobs */}
  <div className="blob blob2"></div>
  <div className="blob blob3"></div>
  <div className="blob blob4"></div>
  <div className="blob blob5"></div>
  <div className="blob blob6"></div>
      {/* Main Get Involved Section */}
      <div className="content-container pre-animate">
        <div className="left-content">
          <h1>Get Involved</h1>
          <p>
            Join us in making a difference. Volunteer, donate, or partner with us to create meaningful change.
          </p>
          <div className="buttons-container">
            <button className="cta-button">Donate Now</button>
            <button className="cta-button">Become a Volunteer</button>
          </div>
        </div>
        <div className="right-content">
          <div className="video-placeholder">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ableheartsfoundation/videos/1023655192465414"
              width="100%"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Additional Containers */}
      <div className="additional-section pre-animate">
        {/* AbleHearts UB */}
        <div className="content-container">
          <div className="left-content">
            <h2>AbleHearts UB</h2>
            <p>
              Our AbleHearts chapter at UB fosters a vibrant community of students working together to make a difference
              in the lives of people with disabilities. Get involved to create a more inclusive world.
            </p>
            <button className="find-out-more-button" onClick={() => navigate('/ablehearts-ub')}>
            Become a Member
            </button>
          </div>
          <div className="right-content">
            <img
              src="/src/assets/ubvolunteers.jpeg" /* Replace with actual image */
              alt="AbleHearts UB"
              className="placeholder-image"
            />
          </div>
        </div>
        {/* AbleHearts BIUST */}
        <div className="content-container">
          <div className="left-content">
            <h2>AbleHearts BIUST</h2>
            <p>
              At BIUST, our AbleHearts chapter champions inclusion and innovation to support individuals with
              disabilities. Join us in transforming campus life through collaboration and compassion.
            </p>
            <button className="find-out-more-button" onClick={() => navigate('/ablehearts-biust')}>
              Become a Member
            </button>
          </div>
          <div className="right-content">
            <img
              src="/src/assets/biustvolunteers.JPG"
              alt="AbleHearts BIUST"
              className="placeholder-image"
            />
          </div>
        </div>
        {/* Partnerships */}
<div className="content-container1" style={{ backgroundColor: '#0066cc', marginBottom: '0' }}>
  <div className="contour-overlay">
    <img src={scribble} alt="Scribblebackground" style={{ height: '53rem' }} />
  </div>
  <div className="left-content">
    <h2 style={{ color: 'white' }}>Partnerships</h2>
    <p style={{ color: 'white' }}>
      Partner with us to amplify our efforts. Together, we can create impactful initiatives that empower
      individuals with disabilities and drive community change.
    </p>
    <button
        className="email-button"
        onClick={() =>
          (window.location.href = 'mailto:ableheartsfoundation@gmail.com?subject=Partnership Inquiry')
        }
      >
        Send Us an Email
      </button>
  </div>
  <div className="right-content">
    <img
      src="/src/assets/partner.JPG"
      alt="Partnerships"
      className="placeholder-image"
      style={{ borderRadius: '0' }}
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default GetInvolved;

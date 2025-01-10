import React, { useEffect } from 'react';
import scribble from '/src/assets/scribblebackground.png';
import './GetInvolved.css';

const blobImages = [
  '/src/assets/blob1.png',
  '/src/assets/blob3.png',
  '/src/assets/blob4.png',
  '/src/assets/blob2.png',

];

const GetInvolved = () => {
  // Generate random blobs for the background
  const generateBlobs = () => {
    const blobCount = 25; // Number of blobs
    const blobs = [];
    for (let i = 0; i < blobCount; i++) {
      const size = Math.random() * 200 + 100; // Size: 100px - 300px
      const top = Math.random() * 300 + 'vh'; // Random vertical position
      const left = Math.random() * 80 + 'vw'; // Random horizontal position
      const blur = Math.random() * 5 + 2; // Blur radius: 2px - 7px
      const image = blobImages[Math.floor(Math.random() * blobImages.length)]; // Random image from the array

      blobs.push(
        <div
          key={`blob-${i}`}
          className="blob-animated"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top,
            left,
            filter: `blur(${blur}px)`,
            backgroundImage: `url(${image})`,
          }}
        ></div>
      );
    }
    return blobs;
  };
  // Intersection Observer for animations
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
      {/* Background Blobs */}
      {generateBlobs()}

      {/* Main Get Involved Section */}
      <div className="content-container pre-animate">
        <div className="left-content">
          <h1>Get Involved</h1>
          <p>
            Join us in making a difference. Volunteer, donate, or partner with us to create meaningful change.
          </p>
          <div className="buttons-container">
            <button className="cta-button">Donate Now</button>
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

      {/* AbleHearts UB Section */}
      <div className="additional-section pre-animate">
        <div className="content-container">
          <div className="left-content">
            <h2>AbleHearts UB</h2>
            <p>
              Our AbleHearts chapter at UB fosters a vibrant community of students working together to make a difference
              in the lives of people with disabilities. Get involved to create a more inclusive world.
            </p>
            <button
              className="find-out-more-button"
              onClick={() => (window.location.href = '/ablehearts-ub')}
            >
              Become a Member
            </button>
          </div>
          <div className="right-content">
            <img
              src="/src/assets/ubvolunteers.jpeg"
              alt="AbleHearts UB"
              className="placeholder-image"
            />
          </div>
        </div>

        {/* AbleHearts BIUST Section */}
        <div className="content-container">
          <div className="left-content">
            <h2>AbleHearts BIUST</h2>
            <p>
              At BIUST, our AbleHearts chapter champions inclusion and innovation to support individuals with
              disabilities. Join us in transforming campus life through collaboration and compassion.
            </p>
            <button
              className="find-out-more-button"
              onClick={() => (window.location.href = '/ablehearts-biust')}
            >
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

        {/* Partnerships Section */}
        <div className="content-container1" style={{ backgroundColor: '#0066cc', marginBottom: '0' }}>
          <div className="contour-overlay">
            <img src={scribble} alt="Scribblebackground" style={{ height: '80rem' }} />
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
          <div className="right-content" style={{ padding : '0'}}>
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

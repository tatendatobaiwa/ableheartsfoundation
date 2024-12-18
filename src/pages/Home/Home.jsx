import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landingPageImage from '/src/assets/landingpageimage.jpg';
import whiteLogo from '/src/assets/whiteablehearts.png';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      image: landingPageImage,
      logo: whiteLogo,
      title: 'Dynamic Talent Show',
      date: 'August 20, 2023',
    },
    {
      image: landingPageImage,
      logo: whiteLogo,
      title: 'Dynamic Talent Show',
      date: 'August 20, 2023',
    },
    {
      image: landingPageImage,
      logo: whiteLogo,
      title: 'Dynamic Talent Show',
      date: 'August 20, 2023',
    },
    {
      image: landingPageImage,
      logo: whiteLogo,
      title: 'Dynamic Talent Show',
      date: 'August 20, 2023',
    },
    {
      image: landingPageImage,
      logo: whiteLogo,
      title: 'Dynamic Talent Show',
      date: 'August 20, 2023',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="slide-content">
            <div className="event-details">
              {/* Align logo and text horizontally */}
              <div className="event-details-row">
                <img src={slides[currentSlide].logo} alt="Able Hearts Logo" className="event-logo" />
                <div className="event-text">
                  <h2>{slides[currentSlide].title}</h2>
                  <p>{slides[currentSlide].date}</p>
                </div>
              </div>
            </div>
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mission-container">
        <h2>Our Mission</h2>
        <p>
          At Able Hearts, our mission is to break barriers, challenge stigma, and
          empower individuals with disabilities to embrace their full potential.
          Guided by our belief that <span className="highlight">"We are all equal in the fact that we are all
          different,"</span> we are committed to fostering inclusivity, celebrating
          diversity, and driving meaningful change in communities. Together, we
          strive to create a future where compassion and equality thrive.
        </p>
      </div>
    </div>
  );
};

export default Home;
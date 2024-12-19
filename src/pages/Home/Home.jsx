import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landingPageImage from '/src/assets/landingpageimage.jpg';
import whiteLogo from '/src/assets/whiteablehearts.png';
import ahmerch from '/src/assets/ahmerch.jpg';
import kedia from '/src/assets/kediaimage.png';
import membersneeded from '/src/assets/membersneeded.png';
import blob2 from '/src/assets/blob2.png';
import blob3 from '/src/assets/blob3.png';
import blob4 from '/src/assets/blob4.png';
import newsletter from '/src/assets/newsletterimage.png';
import scribble from '/src/assets/scribblebackground.png';
import valentines from '/src/assets/valentinessports.png';
import tropicana from '/src/assets/tropicana.png';
import trans from '/src/assets/trans.png';
import sennfoods from '/src/assets/sennfoods.webp';
import nortex from '/src/assets/nortex.png';
import minjex from '/src/assets/minjex.png';
import india from '/src/assets/india.png';
import francistownelectronics from '/src/assets/francistownelectronics.png';

import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      image: landingPageImage,
      logo: whiteLogo,
      title: 'Dynamic Talent Show',
      date: 'August 20, 2023',
    },
    {
      image: ahmerch,
      logo: whiteLogo,
      title: 'AbleHearts Merch',
      date: 'Pre-Order Today!',
    },
    {
      image: kedia,
      logo: whiteLogo,
      title: 'Dynamic Talent Show',
      date: 'August 20, 2023',
    },
    {
      image: membersneeded,
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
      handleNextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
    };
  }, []);

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

  const handleNextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setNextSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleIndicatorClick = (index) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSlide(index);
      setNextSlide((index + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="home-container">
      <div className="carousel-container pre-animate">
        <div
          className={`carousel-slide current-slide ${isTransitioning ? 'transitioning' : ''}`}
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="slide-content">
            <div className="event-details">
              <div className="event-details-row">
                <img
                  src={slides[currentSlide].logo}
                  alt="Able Hearts Logo"
                  className="event-logo"
                />
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
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mission-container pre-animate">
        <div
          className="blob blob2"
          style={{
            backgroundImage: `url(${blob2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className="blob blob3"
          style={{
            backgroundImage: `url(${blob3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className="blob blob4"
          style={{
            backgroundImage: `url(${blob4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <h2>Our Mission</h2>
        <p>
          At Able Hearts, our mission is to break barriers, challenge stigma, and
          empower individuals with disabilities to embrace their full potential.
          Guided by our belief that{' '}
          <span className="highlight">
            "We are all equal in the fact that we are all different,"
          </span>{' '}
          we are committed to fostering inclusivity, celebrating diversity, and
          driving meaningful change in communities. Together, we strive to create
          a future where compassion and equality thrive.
        </p>
      </div>
      {/* Newsletter Section */}
      <div className="newsletter-container pre-animate">
        <div className="contour-overlay">
          <img src={scribble} alt="Scribblebackground" style={{ height: '53rem' }} />
        </div>
        <div className="newsletter-text">
          <h3>Stay Updated!</h3>
          <p>
            Sign up for our newsletter to receive the latest news and updates directly to your inbox.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
        <div className="newsletter-image">
          <img src={newsletter} alt="Newsletter" />
        </div>
      </div>
      <div className="collaborators-container pre-animate">
  <h3>Our Valued Collaborators</h3>
  <div className="logo-bar">
    <div className="logo-slider">
      <img src={india} alt="Collaborator 1" />
      <img src={minjex}alt="Collaborator 2" />
      <img src={nortex}alt="Collaborator 3" />
      <img src={trans}alt="Collaborator 4" />
      <img src={tropicana} alt="Collaborator 5" />
      <img src={sennfoods} alt="Collaborator 6" />
      <img src={francistownelectronics} alt="Collaborator 7" />
      <img src={valentines} alt="Collaborator 8" />
      <img src={india} alt="Collaborator 11" />
      <img src={minjex}alt="Collaborator 22" />
      <img src={nortex}alt="Collaborator 33" />
      <img src={trans}alt="Collaborator 44" />
      <img src={tropicana} alt="Collaborator 55" />
      <img src={sennfoods} alt="Collaborator 66" />
      <img src={francistownelectronics} alt="Collaborator 77" />
      <img src={valentines} alt="Collaborator 88" />
      <img src={india} alt="Collaborator 111" />
      <img src={minjex}alt="Collaborator 222" />
      <img src={nortex}alt="Collaborator 333" />
      <img src={trans}alt="Collaborator 444" />
      <img src={tropicana} alt="Collaborator 555" />
      <img src={sennfoods} alt="Collaborator 666" />
      <img src={francistownelectronics} alt="Collaborator 777" />
      <img src={valentines} alt="Collaborator 888" />
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;

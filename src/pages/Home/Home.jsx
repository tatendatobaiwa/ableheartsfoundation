import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landingPageImage from '/src/assets/landingpageimage.jpg';
import whiteLogo from '/src/assets/whiteablehearts.png';
import lephoi from '/src/assets/carousel1lephoi.jpg';
import kedia from '/src/assets/carousel2kedia.jpeg';
import tsogang from '/src/assets/carousel3tsogang.jpg';
import mochudi from '/src/assets/carousel4mochudi.jpg'; 
import blob2 from '/src/assets/blob2.png';
import bms from '/src/assets/bms.png';
import bush from '/src/assets/busht.png';
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
import strub from '/src/assets/strub.png';

import './Home.css';

  const slides = [
    {
      image: landingPageImage,
      logo: whiteLogo,
      title: 'Dynamic Talent Show',
      date: 'August 20, 2023',
    },
    {
      image: lephoi,
      logo: whiteLogo,
      title: 'Lephoi Centre for the Visually Impaired',
      date: '2020',
    },
    {
      image: kedia,
      logo: whiteLogo,
      title: 'Kedia Primary School',
      date: '2024',
    },
    {
      image: tsogang,
      logo: whiteLogo,
      title: 'Tsogang Trust',
      date: '2022',
    },
    {
      image: mochudi,
      logo: whiteLogo,
      title: 'Mochudi Resource Center',
      date: '2021',
    },
  ];

  const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      window.scrollTo(0, 0);
  
      const slideInterval = setInterval(() => {
        handleNextSlide();
      }, 5000);
  
      return () => clearInterval(slideInterval);
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
      setCurrentSlide((prev) => (prev + 1) % slides.length);
  
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Match CSS transition duration
    };
  
    const handlePrevSlide = () => {
      if (isTransitioning) return;
  
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    };
  
    const handleIndicatorClick = (index) => {
      if (isTransitioning || index === currentSlide) return;
  
      setIsTransitioning(true);
      setCurrentSlide(index);
  
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    };
  
    return (
      <div className="home-container">
      {/* Carousel Section */}
      <div className="carousel-container pre-animate">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <div className="event-details">
                <div className="event-details-row">
                  <img src={slide.logo} alt="Event Logo" className="event-logo" />
                  <div className="event-text">
                    <h2>{slide.title}</h2>
                    <p>{slide.date}</p>
                  </div>
                </div>
              </div>
              <div className="carousel-indicators">
                {slides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`indicator ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => handleIndicatorClick(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
        <button className="prev-button" onClick={handlePrevSlide} aria-label="Previous Slide">
          &#8249;
        </button>
        <button className="next-button" onClick={handleNextSlide} aria-label="Next Slide">
          &#8250;
        </button>
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
          <img src={scribble} alt="Scribblebackground"/>
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
      <img src={bush} alt="Collaborator 9" />
      <img src={strub} alt="Collaborator 10" />
      <img src={bms} alt="Collaborator 12" />
      <img src={india} alt="Collaborator 11" />
      <img src={minjex}alt="Collaborator 22" />
      <img src={nortex}alt="Collaborator 33" />
      <img src={trans}alt="Collaborator 44" />
      <img src={tropicana} alt="Collaborator 55" />
      <img src={sennfoods} alt="Collaborator 66" />
      <img src={francistownelectronics} alt="Collaborator 77" />
      <img src={valentines} alt="Collaborator 88" />
      <img src={bush} alt="Collaborator 99" />
      <img src={strub} alt="Collaborator 110" />
      <img src={bms} alt="Collaborator 112" />
      <img src={india} alt="Collaborator 111" />
      <img src={minjex}alt="Collaborator 222" />
      <img src={nortex}alt="Collaborator 333" />
      <img src={trans}alt="Collaborator 444" />
      <img src={tropicana} alt="Collaborator 555" />
      <img src={sennfoods} alt="Collaborator 666" />
      <img src={francistownelectronics} alt="Collaborator 777" />
      <img src={valentines} alt="Collaborator 888" />
      <img src={bush} alt="Collaborator 999" />
      <img src={strub} alt="Collaborator 1111" />
      <img src={bms} alt="Collaborator 1112" />
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;

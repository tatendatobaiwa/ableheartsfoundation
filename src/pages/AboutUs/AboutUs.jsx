import React, { useEffect, useState } from 'react';
import './AboutUs.css';

const blobImages = [
  '/src/assets/blob1.png',
  '/src/assets/blob3.png',
  '/src/assets/blob4.png',
  '/src/assets/blob2.png',
];

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-container">
      <div className="background-blobs-gallery">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`blobs-gallery blobs-gallery-${index + 1}`}
          />
        ))}
      </div>

      <h1 className="about-title pre-animate">About Able Hearts Foundation</h1>
      
      <section className="about-section pre-animate">
        <h2 className="section-title">Our Vision</h2>
        <div className="section-content">
          <p className="section-description">
            Able Hearts Foundation envisions a world where every individual, regardless of their abilities or circumstances, has the opportunity to thrive and reach their full potential. We strive to create an inclusive society that celebrates diversity and empowers marginalized communities.
          </p>
        </div>
      </section>

      <section className="about-section pre-animate">
        <h2 className="section-title">Our Mission</h2>
        <div className="section-content">
          <p className="section-description">
            Our mission is to bridge gaps in society by providing support, resources, and opportunities to underserved communities. Through our various programs and initiatives, we work tirelessly to create lasting positive change and foster a more equitable world.
          </p>
        </div>
      </section>

      <section className="about-section pre-animate">
        <h2 className="section-title">Our Journey</h2>
        <div className="section-content">
          <p className="section-description">
            Founded in 2018, Able Hearts Foundation began with a simple yet powerful vision of making a difference in the lives of children with disabilities. What started as small community initiatives has grown into a comprehensive foundation that serves various marginalized groups across Botswana.
          </p>
        </div>
      </section>

      <section className="about-section pre-animate">
        <h2 className="section-title">Our Impact</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>1000+</h3>
            <p>Lives Touched</p>
          </div>
          <div className="impact-card">
            <h3>7</h3>
            <p>Active Programs</p>
          </div>
          <div className="impact-card">
            <h3>5</h3>
            <p>Years of Service</p>
          </div>
        </div>
      </section>

      <section className="about-section pre-animate">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {[
            { title: 'Empowerment', description: 'We believe in enabling individuals to become self-sufficient and confident.', blobIndex: 0 },
            { title: 'Inclusivity', description: 'We celebrate diversity and create spaces where everyone belongs.', blobIndex: 1 },
            { title: 'Innovation', description: 'We continuously seek creative solutions to community challenges.', blobIndex: 2 },
            { title: 'Sustainability', description: 'We develop programs that create lasting positive change.', blobIndex: 3 }
          ].map((value, index) => (
            <div className="value-card" key={value.title}>
              <img
                src={blobImages[value.blobIndex]}
                alt={`Decorative blob for ${value.title}`}
                className="value-card-blob"
              />
              <div className="value-card-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section pre-animate">
        <h2 className="section-title">Join Our Cause</h2>
        <div className="section-content">
          <p className="section-description">
            We welcome volunteers, donors, and partners who share our vision of creating positive change. Together, we can build a more inclusive and equitable society for all. Contact us to learn more about how you can contribute to our mission.
          </p>
        </div>
      </section>

      {isScrolled && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default AboutUs;
import React, { useEffect, useState } from 'react';
import './PrivacyPolicy.css';

const blobImages = [
  '/src/assets/fixed/icons/blob1.webp',
  '/src/assets/fixed/icons/blob3.webp',
  '/src/assets/fixed/icons/blob4.webp',
  '/src/assets/fixed/icons/blob2.webp',
];

const PrivacyPolicy = () => {
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
    <div className="privacy-container">
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

      <h1 className="privacy-title pre-animate">Privacy Policy</h1>
      
      <section className="privacy-section pre-animate">
        <h2 className="section-title">Information We Collect</h2>
        <div className="section-content">
          <p className="section-description">
            When you apply to become a volunteer for our campus clubs at BIUST and UB, we collect personal information that you provide, including:
          </p>
          <div className="info-grid">
            <div className="info-card">
              <img src={blobImages[0]} alt="Personal Info Blob" className="info-card-blob" />
              <div className="info-card-content">
                <h3>Personal Details</h3>
                <p>Name and contact information</p>
              </div>
            </div>
            <div className="info-card">
              <img src={blobImages[1]} alt="Academic Info Blob" className="info-card-blob" />
              <div className="info-card-content">
                <h3>Academic Information</h3>
                <p>University affiliation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section pre-animate">
        <h2 className="section-title">How We Use Your Information</h2>
        <div className="section-content">
          <p className="section-description">
            Your information is used solely for the purpose of managing volunteer applications and coordinating campus club activities. Specifically, we use it to:
          </p>
          <div className="info-grid">
            <div className="info-card">
              <img src={blobImages[2]} alt="Usage Info Blob" className="info-card-blob" />
              <div className="info-card-content">
                <h3>Volunteer Management</h3>
                <p>Process applications, coordinate activities, and communicate with volunteers</p>
              </div>
            </div>
            <div className="info-card">
              <img src={blobImages[3]} alt="Communication Info Blob" className="info-card-blob" />
              <div className="info-card-content">
                <h3>Communication</h3>
                <p>Send updates about programs, events, and volunteer opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section pre-animate">
        <h2 className="section-title">Data Protection</h2>
        <div className="section-content">
          <p className="section-description">
            We implement appropriate security measures to protect your personal information. Your data is stored securely and accessed only by authorized personnel who require it for volunteer coordination purposes.
          </p>
        </div>
      </section>

      <section className="privacy-section pre-animate">
        <h2 className="section-title">Your Rights</h2>
        <div className="values-grid">
          {[
            { 
              title: 'Access',
              description: 'You have the right to request access to your personal information.',
              blobIndex: 0
            },
            { 
              title: 'Correction',
              description: 'You can request corrections to any inaccurate information we hold.',
              blobIndex: 1
            },
            { 
              title: 'Deletion',
              description: 'You may request deletion of your personal information if you cease volunteering.',
              blobIndex: 2
            },
            { 
              title: 'Data Portability',
              description: 'You can request a copy of your data in a structured format.',
              blobIndex: 3
            }
          ].map((right, index) => (
            <div className="value-card" key={right.title}>
              <img
                src={blobImages[right.blobIndex]}
                alt={`Decorative blob for ${right.title}`}
                className="value-card-blob"
              />
              <div className="value-card-content">
                <h3>{right.title}</h3>
                <p>{right.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="privacy-section pre-animate">
        <h2 className="section-title">Contact Us</h2>
        <div className="section-content">
          <p className="section-description">
            If you have any questions about our privacy policy or how we handle your personal information, please contact our data protection officer at <a href="mailto:ableheartsfoundation@gmail.com" className="terms-of-use-email"> ableheartsfoundation@gmail.com</a> We aim to respond to all inquiries within 48 hours.
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

export default PrivacyPolicy;
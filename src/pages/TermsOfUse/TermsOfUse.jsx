import React, { useState, useEffect } from 'react';
import './TermsOfUse.css';

const blobImages = [
  '/src/assets/fixed/icons/blob1.webp',
  '/src/assets/fixed/icons/blob3.webp',
  '/src/assets/fixed/icons/blob4.webp',
  '/src/assets/fixed/icons/blob2.webp',
];

const TermsOfUse = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="terms-of-use-container pre-animate">
      {/* Background blobs */}
      <div className="background-blobs">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`blobt blob-${index + 1}`}
          />
        ))}
      </div>
      <h1 className="terms-of-use-title">Terms of Use</h1>
      <p className="terms-of-use-intro">
        Welcome to Able Hearts! By accessing or using this website, you agree to the following terms and conditions. Please review them carefully.
      </p>
      <h2 className="terms-of-use-section-title">1. Acceptance of Terms</h2>
      <p className="terms-of-use-text">
        By visiting this website, you acknowledge that you have read, understood, and agreed to these terms. If you do not agree with any part of these terms, please discontinue use of the site.
      </p>
      <h2 className="terms-of-use-section-title">2. Use of Content</h2>
      <p className="terms-of-use-text">
        All content provided on this website, including text, images, and other materials, is for informational purposes only. Unauthorized use, reproduction, or distribution of content is strictly prohibited.
      </p>
      <h2 className="terms-of-use-section-title">3. User Conduct</h2>
      <ul className="terms-of-use-list">
        <li className="terms-of-use-item">Do not use this website for illegal or unauthorized purposes.</li>
        <li className="terms-of-use-item">Do not attempt to interfere with the website’s functionality or security.</li>
        <li className="terms-of-use-item">Respect the intellectual property rights of others.</li>
      </ul>
      <h2 className="terms-of-use-section-title">4. Limitation of Liability</h2>
      <p className="terms-of-use-text">
        Able Hearts is not responsible for any damages arising from your use of this website or reliance on the information provided. Use this site at your own risk.
      </p>
      <h2 className="terms-of-use-section-title">5. Privacy Policy</h2>
      <p className="terms-of-use-text">
        We are committed to protecting your privacy. Please review our <a href="/privacy-policy" className="terms-of-use-link">Privacy Policy</a> to understand how your information is collected, used, and shared.
      </p>
      <h2 className="terms-of-use-section-title">6. Modifications to Terms</h2>
      <p className="terms-of-use-text">
        We reserve the right to update these terms at any time. Changes will be effective immediately upon posting. It is your responsibility to review these terms periodically.
      </p>
      <h2 className="terms-of-use-section-title">7. Contact Information</h2>
      <p className="terms-of-use-contact">
        If you have questions about these Terms of Use, please contact us at: 
        <a href="mailto:ableheartsfoundation@gmail.com" className="terms-of-use-email"> ableheartsfoundation@gmail.com</a>
      </p>
      {isScrolled && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default TermsOfUse;

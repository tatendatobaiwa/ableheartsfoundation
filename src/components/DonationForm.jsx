import React, { useState, useEffect, useRef } from 'react';
import './DonationForm.css';

const DonationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  // Effect to handle scrolling when submission state changes
  useEffect(() => {
    if (submitted && formRef.current) {
      const formTop = formRef.current.offsetTop;
      window.scrollTo({
        top: formTop - 20, // Slight offset for visual comfort
        behavior: 'smooth'
      });
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xvggjvgv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (err) {
      setError('There was a problem submitting your donation request. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    // Reset scroll position smoothly
    const formTop = formRef.current.offsetTop;
    window.scrollTo({
      top: formTop - 20,
      behavior: 'smooth'
    });
  };

  return (
    <div className="donation-form-card" ref={formRef}>
      {submitted ? (
        <div className="form-success">
          <div className="form-header">
            <h2 className="form-title">Thank You!</h2>
            <p className="form-subtitle">We'll be in touch soon with payment details.</p>
            <button 
              onClick={handleReset} 
              className="submit-button"
              style={{ marginTop: '1rem' }}
            >
              Submit Another Donation
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="form-header">
            <h2 className="form-title">Make a Donation</h2>
            <p className="form-subtitle">Support our mission to create positive change</p>
          </div>
          <div className="form-content">
            <form 
              onSubmit={handleSubmit}
              className="donation-form"
            >
              {error && <div className="error-message">{error}</div>}
              
              <div className="form-field">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="amount" className="form-label">Donation Amount (BWP)</label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  min="0"
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="paymentMethod" className="form-label">Preferred Payment Method</label>
                <select 
                  id="paymentMethod"
                  name="paymentMethod" 
                  required
                  className="form-select"
                  disabled={isLoading}
                >
                  <option value="">Select payment method</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="mobile-money">Mobile Money</option>
                  <option value="cash">Cash</option>
                </select>
              </div>
              
              <div className="form-field">
                <label htmlFor="program" className="form-label">Support Program (Optional)</label>
                <select 
                  id="program"
                  name="program"
                  className="form-select"
                  disabled={isLoading}
                >
                  <option value="">Select program</option>
                  <option value="education">Education Support</option>
                  <option value="health">Health Services</option>
                  <option value="community">Community Programs</option>
                  <option value="general">General Fund</option>
                </select>
              </div>
              
              <div className="form-field">
                <label htmlFor="message" className="form-label">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  className="donation-textarea"
                  disabled={isLoading}
                />
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit Donation Request'}
              </button>
              
              <p className="form-note">
                After submission, we will contact you with payment details and instructions.
              </p>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default DonationForm;
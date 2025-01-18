import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email.includes('@')) {
      setMessage('Please enter a valid email');
      return;
    }

    // Get existing emails from localStorage
    const existingEmails = JSON.parse(localStorage.getItem('newsletterEmails') || '[]');
    
    // Check if email already exists
    if (existingEmails.includes(email)) {
      setMessage('You are already subscribed!');
      return;
    }

    // Add new email and save back to localStorage
    localStorage.setItem('newsletterEmails', JSON.stringify([...existingEmails, email]));
    
    // Clear form and show success message
    setEmail('');
    setMessage('Thanks for subscribing!');
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="newsletter-text">
      <h3>Stay Updated!</h3>
      <p>
        Sign up for our newsletter to receive the latest news and updates directly to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="newsletter-input"
          required
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
      {message && (
        <p style={{ marginTop: '10px', color: message.includes('already') || message.includes('valid') ? '#e74c3c' : '#2ecc71' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
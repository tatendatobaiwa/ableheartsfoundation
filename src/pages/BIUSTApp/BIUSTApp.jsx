import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import './BIUSTApp.css';

const blobImages = [
  '/src/assets/blob1.png',
  '/src/assets/blob3.png',
  '/src/assets/blob4.png',
  '/src/assets/blob2.png',
];

const BIUSTApp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', reason: '', message: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.reason) newErrors.reason = 'Reason is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const doc = new jsPDF();
      doc.setFontSize(12);
      doc.text('AbleHearts BIUST Application', 10, 10);
      doc.text(`Name: ${formData.name}`, 10, 30);
      doc.text(`Email: ${formData.email}`, 10, 50);
      doc.text(`Phone: ${formData.phone}`, 10, 70);
      doc.text(`Reason: ${formData.reason}`, 10, 90);
      doc.text(`Message: ${formData.message}`, 10, 110);
      doc.save('BIUST_Application.pdf');
      alert('Form submitted successfully and saved as PDF!');
    }
  };

  return (
    <div className="biust-app-container">
      {/* Background Blobs */}
      {generateBlobs()}

      <h1>BIUST Application Form</h1>
      <form className="application-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <label>Phone Number</label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

        <label>Why do you want to join AbleHearts BIUST?</label>
        <textarea
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
        ></textarea>
        {errors.reason && <p style={{ color: 'red' }}>{errors.reason}</p>}

        <button type="submit" className="submit-button">Submit</button>
        <button type="button" className="submit-button" onClick={() => navigate('/get-involved')}>
          Back
        </button>
      </form>
    </div>
  );
};

export default BIUSTApp;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';
import './UBApp.css';

const blobImages = [
  '/src/assets/blob1.png',
  '/src/assets/blob3.png',
  '/src/assets/blob4.png',
  '/src/assets/blob2.png',
];

const UBApp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', reason: '', message: '' });
  const [errors, setErrors] = useState({});
  const [blobs, setBlobs] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
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

  useEffect(() => {
    const generateBlobs = () => {
      const blobCount = 25;
      const generatedBlobs = [];

      for (let i = 0; i < blobCount; i++) {
        const size = Math.random() * 200 + 100;
        const top = Math.random() * 100 + 'vh';
        const left = Math.random() * 80 + 'vw';
        const blur = Math.random() * 5 + 2;
        const image = blobImages[Math.floor(Math.random() * blobImages.length)];

        generatedBlobs.push(
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
      return generatedBlobs;
    };

    setBlobs(generateBlobs());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Generate PDF
      const doc = new jsPDF();
      doc.setFontSize(12);
      doc.text('AbleHearts UB Application', 10, 10);
      doc.text(`Name: ${formData.name}`, 10, 30);
      doc.text(`Email: ${formData.email}`, 10, 50);
      doc.text(`Phone: ${formData.phone}`, 10, 70);
      doc.text(`Reason: ${formData.reason}`, 10, 90);
      doc.text(`Message: ${formData.message}`, 10, 110);

      // Convert PDF to Base64
      const pdfBase64 = btoa(doc.output());

      // Send Email via EmailJS
      emailjs
        .send(
          'service_lh1cwy9', // Replace with your EmailJS Service ID
          'template_gf2z41u', // Replace with your EmailJS Template ID
          {
            to_email: 'ableheartsfoundation@gmail.com', // Recipient
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            reason: formData.reason,
            message: formData.message,
            pdf: pdfBase64, // Attach the Base64 PDF
          },
          '9J_E3w7XfhB57MM-Z' // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response.status, response.text);
            setShowSuccess(true); // Show success pop-up
            setFormData({ name: '', email: '', phone: '', reason: '', message: '' }); // Clear the form
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again.');
          }
        );
    }
  };

  return (
    <div className="ub-app-background">
      {blobs}

      <div className="ub-app-container">
        <div className="logo-container">
          <img src="/src/assets/ub.png" alt="UB Logo" className="logo" />
        </div>

        <h1>UB Application Form</h1>
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

          <label>Why do you want to join AbleHearts UB?</label>
          <textarea
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          ></textarea>
          {errors.reason && <p style={{ color: 'red' }}>{errors.reason}</p>}

          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="submit-button"
            onClick={() => navigate('/get-involved')}
          >
            Back
          </button>
        </form>
      </div>

      {showSuccess && (
        <div className="success-popup">
          <p>Thank you! Your application has been submitted successfully.</p>
          <button onClick={() => setShowSuccess(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UBApp;

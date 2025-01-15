import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const doc = new jsPDF();
      doc.setFontSize(12);
      doc.text('AbleHearts ub Application', 10, 10);
      doc.text(`Name: ${formData.name}`, 10, 30);
      doc.text(`Email: ${formData.email}`, 10, 50);
      doc.text(`Phone: ${formData.phone}`, 10, 70);
      doc.text(`Reason: ${formData.reason}`, 10, 90);
      doc.text(`Message: ${formData.message}`, 10, 110);

      const pdfBase64 = btoa(doc.output());

      emailjs
        .send(
          'service_lh1cwy9',
          'template_gf2z41u',
          {
            to_email: 'ableheartsfoundation@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            reason: formData.reason,
            message: formData.message,
            pdf: pdfBase64,
          },
          '9J_E3w7XfhB57MM-Z'
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response.status, response.text);
            setShowSuccess(true);
            setFormData({ name: '', email: '', phone: '', reason: '', message: '' });
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again.');
          }
        );
    }
  };

  return (
    <div className="ub-app-page-background">
      {/* Background blobs */}
      <div className="ub-app-background-blobs">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`ub-app-blob ub-app-blob-${index + 1}`}
          />
        ))}
      </div>
      <div className="ub-app-container">
        <div className="ub-app-logo-container">
          <img src="/src/assets/ub.png" alt="ub Logo" className="ub-app-logo" />
        </div>

        <h1 className="ub-app-title">UB Application Form</h1>
        <form className="ub-app-application-form" onSubmit={handleSubmit}>
          <label className="ub-app-label">Name</label>
          <input
            type="text"
            value={formData.name}
            className="ub-app-input"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="ub-app-error">{errors.name}</p>}

          <label className="ub-app-label">Email</label>
          <input
            type="email"
            value={formData.email}
            className="ub-app-input"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="ub-app-error">{errors.email}</p>}

          <label className="ub-app-label">Phone Number</label>
          <input
            type="text"
            value={formData.phone}
            className="ub-app-input"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          {errors.phone && <p className="ub-app-error">{errors.phone}</p>}

          <label className="ub-app-label">Why do you want to join AbleHearts UB?</label>
          <textarea
            value={formData.reason}
            className="ub-app-textarea"
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          ></textarea>
          {errors.reason && <p className="ub-app-error">{errors.reason}</p>}

          <button type="submit" className="ub-app-submit-button">
            Submit
          </button>
          <button
            type="button"
            className="ub-app-back-button"
            onClick={() => navigate('/get-involved')}
          >
            Back
          </button>
        </form>
      </div>

      {showSuccess && (
        <div className="ub-app-success-popup">
          <p>Thank you! Your application has been submitted successfully.</p>
          <button
            className="ub-app-success-close-button"
            onClick={() => setShowSuccess(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UBApp;

import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Shop.css';

const blobImages = [
  '/src/assets/blob1.png',
  '/src/assets/blob3.png',
  '/src/assets/blob4.png',
  '/src/assets/blob2.png',
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add the fade-in class after component mounts
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const sendInquiry = () => {
    if (!selectedProduct) return;

    emailjs
      .send(
        'service_lh1cwy9',
        'template_gf2z41u',
        {
          product_name: selectedProduct.name,
          email_to: 'ableheartsfoundation@gmail.com',
        },
        '9J_E3w7XfhB57MM-Z'
      )
      .then(
        (response) => {
          alert('Inquiry sent successfully!');
          closeModal();
        },
        (error) => {
          alert('Failed to send inquiry. Please try again.');
          console.error('Email error:', error);
        }
      );
  };

  const products = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 20.0,
      images: ['/src/assets/whiteTfront.jpg', '/src/assets/whiteTback.jpg'],
    },
    {
      id: 2,
      name: '"EQUALITY" White Sports Jersey',
      price: 25.0,
      images: ['/src/assets/whitejersey1.JPG', '/src/assets/whitejersey2.JPG'],
    },
    {
      id: 3,
      name: '"EQUALITY" Black Sports Jersey',
      price: 30.0,
      images: ['/src/assets/blackjerseyfront.jpg', '/src/assets/blackjerseyback.jpg'],
    },
  ];

  return (
    <div className={`container-shop ${isLoaded ? 'content-loaded' : ''}`}>
      <div className="background-blobs">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`blobs blob-${index + 1}`}
          />
        ))}
      </div>
      
      <div className={`shophead pre-animate ${isLoaded ? 'fade-in' : ''}`}>
        <h1 className="title-shop">Shop with a Purpose</h1>
        <p className="subtitle-shop">
          Support our mission by purchasing items from our shop. Every purchase helps fund our initiatives.
        </p>
      </div>

      <main className={`main-shop pre-animate ${isLoaded ? 'fade-in' : ''}`}>
        <div className="product-grid-shop">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card-shop"
              onClick={() => openModal(product)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="product-image-shop"
              />
              <h2 className="product-title-shop">{product.name}</h2>
              <p className="product-price-shop">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Modal for product details */}
      {selectedProduct && (
        <div className="modal-overlay-shop" onClick={closeModal}>
          <div
            className="modal-content-shop"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button-shop" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-head-shop">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={selectedProduct.name}
                  className="modal-image-shop zoomable"
                  onClick={() => handleImageClick(image)}
                />
              ))}
              <h2 className="modal-title-shop">{selectedProduct.name}</h2>
              <p className="modal-price-shop">${selectedProduct.price.toFixed(2)}</p>
            </div>
            <button className="send-inquiry-button" onClick={sendInquiry}>
              Send Inquiry
            </button>
          </div>
        </div>
      )}

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
          <img src={enlargedImage} alt="Enlarged" className="enlarged-image" />
        </div>
      )}

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button 
          className="scroll-to-top-btn" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Shop;
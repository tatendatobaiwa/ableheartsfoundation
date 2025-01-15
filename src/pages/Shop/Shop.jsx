import React, { useState, useEffect } from 'react';
import './Shop.css';

const blobImages = [
  '/src/assets/blob1.png',
  '/src/assets/blob3.png',
  '/src/assets/blob4.png',
  '/src/assets/blob2.png',
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Tracks selected product
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
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
  
    return () => observer.disconnect();
  }, []); 
  
  const products = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 20.0,
      images: ['/src/assets/whiteTfront.jpg', '/src/assets/whiteTback.jpg'],
      sizes: ['S', 'M', 'L'],
    },
    {
      id: 2,
      name: '"EQUALITY" White Sports Jersey',
      price: 25.0,
      images: ['/src/assets/whitejersey1.JPG', '/src/assets/whitejersey2.JPG'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
    },
    {
      id: 3,
      name: '"EQUALITY" Black Sports Jersey',
      price: 30.0,
      images: ['/src/assets/blackjerseyfront.jpg', '/src/assets/blackjerseyback.jpg'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity
    setSize(''); // Reset size
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size!');
      return;
    }
    alert(`Added ${quantity} of ${selectedProduct.name} (Size: ${size}) to your cart!`);
    closeModal();
  };

  return (
    <div className="container-shop">
      {/* Background blobs */}
      <div className="background-blobs">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`blob blob-${index + 1}`}
          />
        ))}
      </div>
      <div className="shophead pre-animate">
        <h1 className="title-shop">Shop with a Purpose</h1>
        <p className="subtitle-shop">
          Support our mission by purchasing items from our shop. Every purchase helps fund our initiatives.
        </p>
      </div>

      <main className="main-shop pre-animate">
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

      {selectedProduct && (
        <div className="modal-overlay-shop" onClick={closeModal}>
          <div
            className="modal-content-shop "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button className="close-button-shop" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-head-shop">
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.name}
                className="modal-image-shop"
              />
              <img
                src={selectedProduct.images[1]}
                alt={selectedProduct.name}
                className="modal-image-shop"
              />
              <h2 className="modal-title-shop">{selectedProduct.name}</h2>
              <p className="modal-price-shop">${selectedProduct.price.toFixed(2)}</p>
            </div>
            <div className="modal-body-shop">
              <label className="label-shop">
                Size:
                <select
                  className="select-shop"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="">Select a size</option>
                  {selectedProduct.sizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label className="label-shop">
                Quantity:
                <input
                  className="input-shop"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </label>
              <button className="add-to-cart-button-shop" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      {isScrolled && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Shop;

import React, { useState, useEffect } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { db } from '/src/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Shop.css';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const blobImages = [
  '/src/assets/icons/blob1.png',
  '/src/assets/icons/blob3.png',
  '/src/assets/icons/blob4.png',
  '/src/assets/icons/blob2.png',
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 20.0,
      images: ['/src/assets/merch/whiteTfront.jpg', '/src/assets/merch/whiteTback.jpg'],
    },
    {
      id: 2,
      name: '"EQUALITY" White Sports Jersey',
      price: 25.0,
      images: ['/src/assets/merch/whitejersey1.jpg', '/src/assets/merch/whitejersey2.jpg'],
    },
    {
      id: 3,
      name: '"EQUALITY" Black Sports Jersey',
      price: 30.0,
      images: ['/src/assets/merch/blackjerseyfront.jpg', '/src/assets/merch/blackjerseyback.jpg'],
    },
  ];

  const addToCart = () => {
    if (!selectedProduct) return;

    const cartItem = {
      id: Date.now(),
      productId: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      size: selectedSize,
      quantity: quantity,
      image: selectedProduct.images[0],
      timestamp: new Date().toLocaleString(),
    };

    setCart([...cart, cartItem]);
    setIsCartOpen(true);
    closeModal();
    setQuantity(1);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmitOrder = async () => {
    if (cart.length === 0 || isSubmitting) return;

    try {
      setIsSubmitting(true);

      const orderData = {
        items: cart.map(item => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          size: item.size,
          quantity: item.quantity,
        })),
        totalAmount: getTotalPrice(),
        status: 'pending',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      // Add order to Firestore
      const docRef = await addDoc(collection(db, 'orders'), orderData);
      
      alert(`Order placed successfully! Order ID: ${docRef.id}`);
      setCart([]);
      setIsCartOpen(false);
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize('M');
    setQuantity(1);
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
      <div className={`main-shop pre-animate ${isLoaded ? 'fade-in' : ''}`}>
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
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal-overlay-shop" onClick={closeModal}>
          <div className="modal-content-shop" onClick={(e) => e.stopPropagation()}>
            <button className="close-button-shop" onClick={closeModal}>
              <X />
            </button>
            <div className="modal-head-shop">
              <div className="modal-images">
                {selectedProduct.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={selectedProduct.name}
                    className="modal-image-shop zoomable"
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
              <h2 className="modal-title-shop">{selectedProduct.name}</h2>
              <p className="modal-price-shop">${selectedProduct.price.toFixed(2)}</p>
              
              <div className="size-selector">
                <p className="text-sm mb-2">Select Size:</p>
                <div className="flex gap-2 justify-center">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="quantity-selector">
                <p className="text-sm mb-2">Quantity:</p>
                <div className="flex items-center justify-center gap-4">
                <button 
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    className="quantity-input"
                    value={quantity}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1);
                      setQuantity(value);
                    }}
                  />
                  <button 
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={16} />
                  </button>
                </div>
              </div>
              <button className="add-to-cart-button" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mini Cart */}
      <div className={`mini-cart ${isCartOpen ? 'open' : ''}`}>
        <div className="mini-cart-header">
          <h3>Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}><X size={20} /></button>
        </div>
        
        <div className="mini-cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <small>{item.timestamp}</small>
              </div>
              <button 
                className="remove-item-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 ? (
          <div className="mini-cart-footer">
            <p className="total">Total: ${getTotalPrice().toFixed(2)}</p>
            <button 
              className="checkout-button" 
              onClick={handleSubmitOrder}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Pre-order'}
            </button>
          </div>
        ) : (
          <p className="empty-cart-message">Your cart is empty</p>
        )}
      </div>

      {/* Cart Toggle Button */}
      <button 
        className="cart-toggle-btn"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="cart-count">{cart.length}</span>
        )}
      </button>

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